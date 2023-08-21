<script>
    import { page } from "$app/stores";
    import Icon from "$lib/Icon.svelte";
    import { goto } from "$app/navigation";

    const crewId = $page.params.id;

    // applied, notApplied, accepted
    let applyStatus = 'accepted';

    // story, notice
    let tabState = "story";
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
            goto(`/crew/${crewId}/menu`);
        }}
        class="absolute right-4 text-gray-600"
    >
        <Icon icon="menu" size={24} />
    </button>
</header>
<div
    class="w-full h-40 relative flex justify-center items-center overflow-hidden bg-gray-300"
    style="z-index: 0"
>
    <div
        class="w-full bottom-0 opacity-40 bg-gray-300 flex justify-center items-center text-2xl font-bold text-white"
    />
</div>

<div class="px-4 mb-7">
    <div class="mt-3 flex items-center justify-between">
        <div class="py-1 text-xl font-semibold flex items-center">
            런닝맨
            <div class="ml-4 flex text-xs items-center text-gray-600">
                <Icon icon="map-pin" size={14} />
                서울
            </div>
        </div>
        {#if applyStatus == 'notApplied'}
            <button on:click={()=>{applyStatus = 'applied'}} class="rounded px-2 py-1 text-sm shadow text-gray-600">가입취소</button>
        {:else if applyStatus == 'applied'}
            <button on:click={()=>{applyStatus = 'notApplied'}} class="rounded px-2 py-1 text-sm shadow text-gray-600">가입신청</button>
        {:else if applyStatus == 'accepted'}
        <button on:click={()=>{
            //채팅방 입장 기능
        }} class="rounded px-2 py-1 text-sm shadow text-gray-600">채팅방 입장</button>

        {/if}
    </div>
    <div class="mt-1 text-xs text-gray-600">멤버 291명</div>

    <!-- 태그 -->
    <div class="mt-2 flex itmes-center gap-2">
        <button class="text-sm text-green-500 bg-white shadow rounded-full px-2 py-1">#런닝</button>
        <button class="text-sm text-green-500 bg-white shadow rounded-full px-2 py-1">#친목</button>
    </div>


    <div class="text-sm mt-12">
        안녕하세요 런닝맨 크루입니다. 매주 수요일 저녁 7시에 서울대학교 앞에서 런닝을 합니다. 런닝을 좋아하시는 분들은 많이 오셔서 같이 뛰어요!
    </div>
</div>

<div class="h-2 bg-gray-100" />

<div class="flex py-4 sticky top-14  font-semibold text-sm text-center text-gray-400">
    <button on:click={()=>{tabState = 'story'}} class="w-full px-2 {tabState == 'story' ? 'text-black pb-2 border-b-2 border-black' : 'pb-2 border-b'}"
        >스토리</button>
    <button on:click={()=>{tabState = 'notice'}} class="w-full px-2 {tabState == 'notice' ? 'text-black pb-2 border-b-2 border-black' : 'pb-2 border-b'}">공지사항</button>
</div>

<div class="h-96" />
<div class="h-96" />
<div class="h-96" />
<div class="h-96" />
