import { writable, get } from "svelte/store";
import { ACCESS_TOKEN, toastMessage, currentPath, messages, joinedChats } from "$lib/stores";
import { Client } from "@stomp/stompjs";
import { goto } from "$app/navigation";

export const socketStore = writable({
    stompClient: null,
    connected: false,
});

let stompClient = null;

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
    //서버에서 들어오는 메시지 path를 구독
    //해당 루트로 서버에서 메시지가 들어온다.
    stompClient.subscribe(
        '/user/queue/private',
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

//처리로직. message의 action에 따라 처리가 달라져야함.
function onChatsReceived(message) {
    let chats = JSON.parse(message.body);

    console.log("채팅방 목록 받음");
    console.log("chats:", chats);

    joinedChats.set(chats);

    //가입된 채팅방 구독
    chats.forEach(chat => {
        stompClient.subscribe(
            `/topic/${chat.chat.id}`,
            onChatMessageReceived,
            {Authorization: get(ACCESS_TOKEN)}
        );
        console.log(`${chat.chat.id} 구독`);
    });
}

function onChatMessageReceived(message) {
    console.log("메시지 받음");
    console.log(message.body);
    const messageObject = JSON.parse(message.body);
    let messageChatId = messageObject.chatId;
    let curChatId = get(currentPath).split("/").pop();
    console.log("messageChatId:", messageChatId);
    console.log("curChatId:", curChatId);

    //현재 사용자의 접속 채팅방이 해당 채팅방인 경우
    if(messageObject.chatId == curChatId) {
        console.log("현재 채팅방이 맞음");
        messages.update(messages => [...messages, messageObject]);
        //해당 메시지 읽음 처리
        // stompClient.publish({
        //     destination: "/app/readMessage",
        //     body: JSON.stringify({
        //         chatId: messageObject.chatId,
        //         messageId: messageObject.id,
        //     }),
        //     headers: {
        //         Authorization: get(ACCESS_TOKEN)
        //     }
        // });
    }

    //다른 곳인 경우
    //클라이언트 상단에 알림 표시, 각 채팅방 별로 관리되는 lastmessage, unreadcount, receivedTime 업데이트
    else {
        toastMessage.set('새로운 메시지가 도착했습니다.');
    }
}

// export function disconnectSocket() {
//     socketStore.subscribe(store => {
//         if(store.connected) {
//             store.stompClient.deactivate();
//             socketStore.set({
//                 stompClient: null,
//                 connected: false,
//             });
//         }
//     });
// }


export default socketStore;