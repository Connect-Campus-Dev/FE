<script>
    import Icon from "./Icon.svelte";
    const nav = [
        { title: "크루", path: "/crew", icon: "activity" },
        { title: "메시지", path: "/chat", icon: "message-square" },
        { title: "커뮤니티", path: "/", icon: "home" },
        { title: "연애", path: "/love", icon: "heart" },
        { title: "마이페이지", path: "/mypage", icon: "user" },
    ];

    export let currentPath = "/";
</script>

<nav
    class="flex justify-between items-center fixed bottom-0 max-w-lg w-full py-1 px-2 border-t bg-white"
>
    {#each nav as item}
        {#if currentPath === item.path}
            <div
                class="text-green-500 font-semibold cursor-default relative flex flex-col items-center justify-center text-center py-2 w-16"
            >
                <div class="mx-auto"><Icon icon={item.icon} size={24} /></div>
                <div class="mt-1 text-xs">{item.title}</div>
                <div
                    class="{item.path !== '/chat' &&
                        'hidden'} absolute right-3 top-1 flex justify-center items-center w-4 h-4 rounded-full bg-red-500 text-xs text-white"
                >
                    2
                </div>
            </div>
        {:else}
            <a
                class="text-gray-500 relative flex flex-col items-center justify-center text-center py-2 w-16"
                href={item.path}
            >
                <div class="mx-auto"><Icon icon={item.icon} size={24} /></div>
                <div class="mt-1 text-xs">{item.title}</div>
                <div
                    class="{item.path !== '/chat' &&
                        'hidden'} absolute right-3 top-1 flex justify-center items-center w-4 h-4 rounded-full bg-red-500 text-xs text-white"
                >
                    2
                </div>
            </a>
        {/if}

    {/each}
</nav>