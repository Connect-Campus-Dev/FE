import { writable, get } from "svelte/store";
import { ACCESS_TOKEN, toastMessage } from "$lib/stores";
import { Client } from "@stomp/stompjs";
import { goto } from "$app/navigation";

const socketStore = writable({
    stompClient: null,
    connected: false,
});

let stompClient = null;

const headers = {
    Authorization: get(ACCESS_TOKEN) // Svelte 스토어에서 액세스 토큰 가져오기
};

export function connectSocket(url) {
    socketStore.subscribe(store => {
        if(!store.connected) {
            stompClient = new Client({
                brokerURL: url + '/chat',
                connectHeaders: {
                    Authorization: get(ACCESS_TOKEN)
                },
                onConnect: onConnected,
            });
            stompClient.onStompError = (frame) => {
                console.log(frame);
                toastMessage.set('인증정보가 유효하지 않습니다. 다시 로그인해주세요.');
                stompClient.deactivate();
                goto('/login');
            };
            stompClient.activate();
        }
    });
}

function onConnected() {
    console.log('소켓 연결 성공');
    socketStore.set({
        stompClient,
        connected: true,
    });
    stompClient.subscribe(
        '/user/queue/chats',
        onChatsReceived,
        {Authorization: get(ACCESS_TOKEN)}
    );
    stompClient.publish({
        destination: "/app/getChats",
        headers: {
            Authorization: get(ACCESS_TOKEN)
        }
    });
}

function onChatsReceived(message) {
    console.log("채팅방 목록 받음");
    let chats = JSON.parse(message.body);
    chats.forEach(chat => {
        stompClient.subscribe(
            `/topic/${chat.id}`,
            onChatMessageReceived,
            {Authorization: get(ACCESS_TOKEN)}
        );
    });
}

function onChatMessageReceived(message) {
    // 메시지 처리 로직
}

export function disconnectSocket() {
    socketStore.subscribe(store => {
        if(store.connected) {
            store.stompClient.deactivate();
            socketStore.set({
                stompClient: null,
                connected: false,
            });
        }
    });
}


export default socketStore;