<script>
    import Icon from '$lib/Icon.svelte';
    import { page } from "$app/stores";
    import { goto } from "$app/navigation";
    import { onMount, onDestroy } from 'svelte';
    import { Client } from "@stomp/stompjs";
    import { toastMessage } from '$lib/stores';

    const chatId = $page.params.id;
    let messages = [];
    let messageInput = "";
    let inputElement;

    let stompClient;
    let accessToken;

    onMount(() => {
        accessToken = localStorage.getItem('accessToken');
        if(accessToken) {
            stompClient = new Client({
                brokerURL: "ws://localhost:8080/chat",
                connectHeaders: {
                    Authorization: accessToken
                }
            });
            console.log(chatId)
            stompClient.onConnect = (frame) => {
                console.log("Connected: " + frame);
                stompClient.subscribe(`/topic/${chatId}`, (message) => {
                    console.log(message);
                    messages = [...messages, JSON.parse(message.body)];
                },
                {
                    Authorization: accessToken
                },
                (error) => {
                    toastMessage.set('로그인이 필요합니다');
                    goto('/login');
                }
                );
            };
            stompClient.onStompError = (frame) => {
                console.log(frame);
                toastMessage.set('인증정보가 유효하지 않거나, 올바르지 않은 접근입니다.');
                stompClient.deactivate();
                goto('../');
            };
            stompClient.activate();
        }

        //이전 채팅 기록을 가져오기
        //timestamp 정렬
        //messages = [...messages, ...data];

    });

    onDestroy(() => {
        if (stompClient) {
            stompClient.deactivate();
        }
    });



    function send() {
        const message = { chatId: chatId,  message: messageInput };
        stompClient.publish({
                destination: `/app/chat/${chatId}`,
                headers: {
                    Authorization: accessToken
                },
                body: JSON.stringify(message)
            });

        console.log(message);
        messageInput = "";
        inputElement.focus();
    }

    async function getChatRecord() {
        const response = await fetch(`${API_BASE_URL}/chat/`, {
			method: 'POST',
            headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
                "email": {"value": email},
                "password": password
            })
		});

        if(response.ok) {
            response.json().then(data => {
                if(data) {
                    toastMessage.set('환영합니다');
                    goto('/');
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

<main>
    {#each messages as message, i}
        {message.message}
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