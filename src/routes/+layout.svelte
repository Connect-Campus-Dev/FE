<svelte:head>
    <title>캠퍼스 커넥트</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/gh/moonspam/NanumSquare@2.0/nanumsquare.css">
</svelte:head>
<script>
    import "../app.css";
    import Toast from "$lib/Toast.svelte";
    import { page } from "$app/stores";

    import { onDestroy, onMount } from 'svelte';
    import { connectSocket, disconnectSocket } from '$lib/stores/socketStore';
    import { WS_BASE_URL, ACCESS_TOKEN, toastMessage } from '$lib/stores';
    import { goto } from "$app/navigation";

    let currentPath;
    $: currentPath = $page.url.pathname;

    //앱 첫 실행, 새로고침시 실행됨
    onMount(() => {
        const accessToken = $ACCESS_TOKEN || localStorage.getItem('accessToken');
        if (accessToken) {
            $ACCESS_TOKEN = accessToken;

            if (currentPath !== '/login' && currentPath !== '/signup') {
                connectSocket(WS_BASE_URL);
            } else {
                goto('/');
            }
        } else if (currentPath !== '/login' && currentPath !== '/signup') {
            localStorage.setItem('accessToken', null);
            $ACCESS_TOKEN = null;
            $toastMessage = '로그인이 필요합니다.';
            goto('/login');
        }
    });

</script>

<div class="w-full bg-gray-100">
    <div class="flex justify-center">
        <div class="max-w-md w-full min-h-screen bg-white">
            <slot />
        </div>
    </div>
</div>
<Toast />