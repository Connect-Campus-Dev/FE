<script>
    import Icon from '$lib/Icon.svelte';
    import Nav from '$lib/Nav.svelte';
    import Appbar from "$lib/Appbar.svelte";
    import ChatCard from '$lib/ChatCard.svelte';

    let chatList = [1,2,3,4,];

</script>

<Appbar title="메시지" />

<main>
        {#if chatList.length == 0}
            <div class="flex flex-col items-center justify-center text-center mt-36">
                <div class="bg-gray-300 rounded-full w-24 h-24 flex items-center justify-center" />
                <div class="text-sm text-gray-500 mt-4">
                    <div class="text-base font-bold text-gray-700">아직 채팅 목록이 없어요</div>
                    <div class="mt-4">액티비니, 커뮤니티, 연애 탭에서 활동하여<br />채팅 상대를 만들어보세요!</div>
                </div>
            </div>
        {:else}
            <div class="p-4">
                <h3 class="text-lg font-bold text-gray-700">채팅 목록</h3>
                {#each chatList as chat}
                    <ChatCard />
                {/each}
            </div>
        {/if}
</main>



<Nav currentPath="/message" />