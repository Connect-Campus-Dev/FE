<script>
    import Icon from '$lib/Icon.svelte';
    import { page } from "$app/stores";
    import { goto } from "$app/navigation";
    import { onMount, onDestroy } from 'svelte';
    import { Client } from "@stomp/stompjs";
    import { toastMessage, ACCESS_TOKEN, userId, userNickname, API_BASE_URL, messages } from '$lib/stores';
    import { socketStore, connectSocket,  } from '$lib/stores/socketStore';

    const chatId = $page.params.id;
    let messageInput = "";
    let inputElement;

    let stompClient;
    let connected;

    let accessToken;

    //채팅방 진입 시, 최근 메시지 50개 불러오기
    //최하단 스크롤
    //안읽은 메시지 관리?
    onMount(() => {
        accessToken = $ACCESS_TOKEN || localStorage.getItem('accessToken');
        getChatRecord(accessToken);
        socketStore.subscribe(value => {
            stompClient = value.stompClient;
            connected = value.connected;
        });
    });

    $: {
        if(connected) {
            console.log(stompClient)
        }
    }

    function send() {
        if(messageInput == "") return;
        const message = { chatId: chatId, content: messageInput };
        stompClient.publish({
                destination: `/app/chat/${chatId}`,
                headers: {
                    Authorization: accessToken
                },
                body: JSON.stringify(message)
            });
        messageInput = "";
        inputElement.focus();
    }

    async function getChatRecord(accessToken) {
        const response = await fetch(`${API_BASE_URL}/chat/${chatId}`, {
			method: 'GET',
            headers: {
				'Content-Type': 'application/json',
                'Authorization': accessToken,
			},
		});
        if(response.ok) {
            response.json().then(data => {
                if(data) {
                    //db에서 가져온 메시지 형식과 소켓에서 가져온 메시지 형식은 같아야함
                    $messages = data;
                }
            });
        }
		if (!response.ok) {
            response.json().then(data => {
                toastMessage.set(data.message)
            });
		}
    }
</script>

<header class="relative bg-white h-14 items-center sticky top-0 border-b flex z-10">
    <button
        on:click={() => {
            goto("/crew");
        }}
        class="absolute p-4 text-gray-600"
    >
        <Icon icon="arrow-left" size={24} />
    </button>
    <div class="text-center w-full font-bold">런닝맨</div>
    <button
        on:click={() => {
            goto(`/crew/${chatId}/menu`);
        }}
        class="absolute right-4 text-gray-600"
    >
        <Icon icon="menu" size={24} />
    </button>
</header>

<main class="p-4">
    {#each $messages as message, i}
        {#if message.senderId == $userId}
            <div class="flex w-full justify-end gap-2 mt-2">
                <div>
                    <div class="inline rounded-lg rounded-tr-none p-3 text-sm bg-green-500 text-white shadow-md">
                        {message.content}
                    </div>
                </div>
            </div>
        {:else}
            <div class="flex w-full justify-start gap-2 mt-4">
                <div class="rounded-full bg-gray-300 w-10 h-10"></div>
                <div>
                    <div>{message.senderNickname}</div>
                    <div class="mt-1 inline rounded-lg rounded-tl-none p-3 text-sm bg-white shadow-md">
                        {message.content}
                    </div>
                </div>
            </div>
        {/if}
    {/each}
</main>

<!-- 메시지 입력창 -->
<form on:submit|preventDefault={send}
    class="bg-white fixed bottom-0 inset-x-0 gap-2 flex items-center py-3 px-4 shadow">
    <button type="button" class="text-gray-500">
        <Icon icon="plus" size={24} />
    </button>
    <input bind:this={inputElement} bind:value={messageInput} class="rounded-full border flex-1 h-10 pl-4 pr-16 text-sm bg-gray-100" />
    {#if messageInput.length > 0}
        <button type="submit" class="text-sm absolute right-6 text-green-500 rounded-full bg-white h-8 px-3 border flex items-center justify-center">
            <!-- <Icon icon="send" size={20} /> -->
            보내기
        </button>
    {/if}
</form>