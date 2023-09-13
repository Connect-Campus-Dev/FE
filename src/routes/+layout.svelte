<svelte:head>
    <title>커넥트 캠퍼스</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/gh/moonspam/NanumSquare@2.0/nanumsquare.css">
</svelte:head>
<script>
    import "../app.css";
    import Toast from "$lib/Toast.svelte";
    import { page } from "$app/stores";

    import { onDestroy, onMount } from 'svelte';
    import { connectSocket, socketStore } from '$lib/stores/socketStore';
    import { WS_BASE_URL, ACCESS_TOKEN, toastMessage, userId, userNickname, currentPath } from '$lib/stores';
    import { goto } from "$app/navigation";

    $currentPath = $page.url.pathname;

    //앱 첫 실행, 새로고침시 실행됨
    // onMount(() => {
    //     const accessToken = $ACCESS_TOKEN || localStorage.getItem('accessToken');

    //     if (accessToken) {
    //         $ACCESS_TOKEN = accessToken;
    //         const base64Url = accessToken.split('.')[1];

    //         //예외처리 필요 replace
    //         const base64 = base64Url.replace('-', '+').replace('_', '/');
    //         const payload = JSON.parse(window.atob(base64));
    //         $userId = payload.userId;
    //         $userNickname = payload.nickname;

    //         if (currentPath !== '/login' && currentPath !== '/signup') {
    //             if($socketStore.stompClient == null) {
    //                 connectSocket(WS_BASE_URL);
    //             }
    //         } else {
    //             goto('/');
    //         }
    //     } else if (currentPath !== '/login' && currentPath !== '/signup') {
    //         localStorage.setItem('accessToken', null);
    //         $ACCESS_TOKEN = null;
    //         $toastMessage = '로그인이 필요합니다.';
    //         goto('/login');
    //     }
    // });

    // onDestroy(() => {
    //     disconnectSocket();
    // });

</script>

<div class="w-full bg-gray-50">
	<div class="flex">
		<!-- 여백 -->
		<div class="hidden lg:block w-1/5" />

		<!-- 모바일 뷰 -->
		<div class="max-w-lg w-full min-h-screen bg-white">
			<slot />
		</div>

		<!-- 설명 -->
		<div class="hidden lg:block grow w-1/2">
			<div class="sticky top-0 flex items-center justify-center min-h-screen">
                설명
			</div>
		</div>
	</div>
</div>
<Toast />