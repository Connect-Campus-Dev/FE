<svelte:head>
    <title>캠퍼스 커넥트</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
</svelte:head>
<script>
    import "../app.css";
</script>

<div class="w-full bg-gray-100 scroll">
    <div class="flex justify-center scroll">
        <div class="max-w-md w-full min-h-screen bg-white scroll">
            <slot />
        </div>
    </div>
</div>