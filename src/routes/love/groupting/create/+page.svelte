<script>
    import Icon from "$lib/Icon.svelte";
    import { goto } from "$app/navigation";

    let partyTitle = "";
    let partyMembers = [];

    function create() {
        goto("/love/groupting");
    }
</script>

<div
    class="relative bg-white h-14 items-center sticky top-0 border-b flex z-10"
>
    <button
        on:click={() => {
            goto("/love/groupting");
        }}
        class="absolute p-4 text-gray-600"
    >
        <Icon icon="arrow-left" size={24} />
    </button>
    <div class="text-center w-full font-bold">파티 만들기</div>
</div>

<main class="p-4 min-h-screen">
    <label for="" class="mb-2 font-bold block mb-1"
        >파티 제목</label
    >
    <input
        bind:value={partyTitle}
        type="text"
        class="w-full h-12 border border-b-2 border-t-0 border-x-0 rounded-none placeholder-neutral-400 px-2"
        placeholder="파티 제목을 입력해주세요"
    />
    <div class="text-gray-400 text-right text-xs mt-2">
        최대 10자까지 가능해요
    </div>

    <label for="" class="mb-2 font-bold block mb-1 mt-3"
        >파티원 초대</label
    >
    <div class="text-gray-500 text-sm">
        파티원은 최소 2명, 최대 4명까지 가능해요
    </div>

    <button on:click={() => {
        partyMembers = [...partyMembers, ""];
}}
        class="mt-4 bg-green-500 w-full h-24 rounded-lg flex items-center justify-center text-white text-xl">
        <Icon icon="plus" size={32} />
    </button>

    {#each partyMembers as member, i}
        <div class="relative mt-4 bg-white border w-full h-24 rounded-lg flex items-center justify-left pl-4 text-white text-xl">
            <button on:click={() => {partyMembers = partyMembers.filter((_, index) => index != i)}}
                class="absolute top-2 right-2 text-gray-500">
                <Icon icon="x-circle" size={24} />
            </button>
        </div>
    {/each}
    <div class="h-24"></div>

</main>

<!-- 생성 버튼 -->
<div class="fixed bottom-0 max-w-lg w-full">
    <button on:click={create}
    class="bg-green-500 text-white py-4 text-lg w-full">
        생성
    </button>
</div>