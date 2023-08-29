import { writable } from 'svelte/store';

export const toastMessage = writable(null);
// export const API_BASE_URL = 'http://ConnectCampus-env-dev.eba-wipb5ypq.ap-northeast-2.elasticbeanstalk.com:8080';
// export const API_BASE_URL = 'http://localhost:8080';
export const API_BASE_URL = 'https://connect-campus-385299c44bcb100f.elb.ap-northeast-2.amazonaws.com';
export const WS_BASE_URL = 'ws://localhost:8080';
export const ACCESS_TOKEN = writable(null);
export const userId = writable(null);
export const userNickname = writable(null);
export const currentPath = writable(null);

//채팅방 내부 메시지 -> 전역에서 관리
export const messages = writable([]);

//채팅방 정보: 채팅방 id, 채팅방 이름, 인원수, 읽지 않은 메시지 수
// //마지막 메시지: 내용, 시간
// [{
//     chat: {
//         id: 1,
//         title: "채팅방 이름",
//         type: "CREW",
//         memberCount: 3,
//         unreadMessageCount: 2,
//     },
//     lastMessage: {
//         content: "채팅방 마지막 메시지 내용",
//         time: "2021-08-01 12:00:00",
//     }
// },]
export const joinedChats = writable([]);