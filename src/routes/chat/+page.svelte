<script>
    import Icon from '$lib/Icon.svelte';
    import Nav from '$lib/Nav.svelte';
    import Appbar from "$lib/Appbar.svelte";
    import ChatCard from '$lib/ChatCard.svelte';
    import { goto } from "$app/navigation";
    import { toastMessage, API_BASE_URL, ACCESS_TOKEN } from '$lib/stores';
    import { onMount } from 'svelte';

    //crew, love, dm
    let tabState = 'crew';

    let crewChatList = [1,2,3];
    let loveChatList = [1,2,3,4,5,6,7,8,9];
    let dmChatList = [1,2];

    let accessToken;

    async function create() {
        const response = await fetch(`${API_BASE_URL}/chattest`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': accessToken,
            },
        });
        if(response.ok) {
            response.json().then(data => {
                goto(`/chat/${data.id}`);
                toastMessage.set('채팅방 생성에 성공했습니다.');
            });
        }
        else {
            toastMessage.set('채팅방 생성에 실패했습니다.');
        }
    }

    async function getChats() {
        const response = await fetch(`${API_BASE_URL}/chat`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': accessToken,
            },
        });
        if(response.ok) {
            response.json().then(data => {
                if(data) {
                    console.log(data);
                }
            });
        }
    }

    onMount(() => {
        accessToken = $ACCESS_TOKEN || localStorage.getItem('accessToken');
        //채팅방 목록 불러오기

    });


</script>

<!-- <Appbar title="메시지" /> -->

<main>
    <div class="flex pt-4 sticky top-0 font-semibold text-sm text-center text-gray-400 bg-white">
        <button on:click={()=>{tabState = 'crew'}} class="w-full px-2 {tabState == 'crew' ? 'text-black pb-2 border-b-2 border-black' : 'pb-2 border-b'}"
            >크루</button>
        <button on:click={()=>{tabState = 'love'}} class="w-full px-2 {tabState == 'love' ? 'text-black pb-2 border-b-2 border-black' : 'pb-2 border-b'}">
            연애</button>
        <button on:click={()=>{tabState = 'dm'}} class="w-full px-2 {tabState == 'dm' ? 'text-black pb-2 border-b-2 border-black' : 'pb-2 border-b'}">
            DM</button>
    </div>
    {#if tabState == 'crew'}
        {#if crewChatList.length == 0}
            <div class="flex items-center justify-center text-center mt-44">
                <div class="text-sm text-gray-500 mt-4">
                    <div class="text-xl font-bold text-gray-700">아직 채팅 목록이 없어요🥺</div>
                    <div class="mt-4">크루에서 활동하여<br />채팅 상대를 만들어보세요!</div>
                </div>
            </div>
        {:else}
            <div class="p-4">
                {#each crewChatList as chat}
                    <a href="/chat/1" class="block mb-4">
                        <ChatCard />
                    </a>
                {/each}
            </div>
        {/if}
    {:else if tabState == 'love'}
        {#if loveChatList.length == 0}
            <div class="flex items-center justify-center text-center mt-44">
                <div class="text-sm text-gray-500 mt-4">
                    <div class="text-xl font-bold text-gray-700">아직 채팅 목록이 없어요🥺</div>
                    <div class="mt-4">소개팅이나 그룹팅으로<br />채팅 상대를 만들어보세요!</div>
                </div>
            </div>
        {:else}
            <div class="p-4">
                {#each loveChatList as chat}
                    <a href="/chat/1" class="block mb-4">
                        <ChatCard />
                    </a>
                {/each}
            </div>
        {/if}
    {:else if tabState == 'dm'}
        {#if dmChatList.length == 0}
            <div class="flex items-center justify-center text-center mt-44">
                <div class="text-sm text-gray-500 mt-4">
                    <div class="text-xl font-bold text-gray-700">아직 채팅 목록이 없어요🥺</div>
                    <div class="mt-4">커뮤니티에서 활동하여<br />채팅 상대를 만들어보세요!</div>
                </div>
            </div>
        {:else}
            <div class="p-4">
                {#each dmChatList as chat}
                    <a href="/chat/1" class="block mb-4">
                        <ChatCard />
                    </a>
                {/each}
            </div>
        {/if}
    {/if}
</main>

<button on:click={create} class="p-4 bg-green-500 rounded-full text-white fixed bottom-20">
    채팅방 생성(테스트용)
</button>



<Nav currentPath="/chat" />