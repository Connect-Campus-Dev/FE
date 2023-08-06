<svelte:head>
    <title>캠퍼스 커넥트</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/gh/moonspam/NanumSquare@2.0/nanumsquare.css">
</svelte:head>
<script>
    import "../app.css";
    import Toast from "$lib/Toast.svelte";
</script>

<div class="w-full bg-gray-100">
    <div class="flex justify-center">
        <div class="max-w-md w-full min-h-screen bg-white">
            <slot />
        </div>
    </div>
</div>
<Toast />