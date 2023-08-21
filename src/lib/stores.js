import { writable } from 'svelte/store';

export const toastMessage = writable(null);
// export const API_BASE_URL = 'http://ConnectCampus-env-dev.eba-wipb5ypq.ap-northeast-2.elasticbeanstalk.com:8080';
export const API_BASE_URL = 'http://localhost:8080';
export const WS_BASE_URL = 'ws://localhost:8080';
export const ACCESS_TOKEN = writable(null);