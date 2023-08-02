<script>
    import Appbar from "$lib/Appbar.svelte";
    import Nav from "$lib/Nav.svelte";
    import Icon from "$lib/Icon.svelte";
    import LargeButton from "$lib/LargeButton.svelte";
    import { goto } from "$app/navigation";

    let myParties = ['훈남팟', '외로운늑대들'];
    let inCompletedParties = ['훈남팟', '외로운늑대들'];

    //이성 파티
    let oppositeParties = ['훈녀팟 🥂', '외로운여우들'];
</script>

<div class="relative bg-white h-14 items-center sticky top-0 border-b flex z-10">
    <button
        on:click={() => {
            goto("/love");
        }}
        class="absolute p-4 text-gray-600"
    >
        <Icon icon="arrow-left" size={24} />
    </button>
    <div class="text-center w-full font-bold">그룹팅</div>
</div>

<h3 class="font-bold text-lg mt-4 ml-4">
    내 파티
</h3>
<div class="flex gap-4 my-4 overflow-x-auto text-center">
    {#each myParties as party, i}
    <a href="/love/groupting/party/1" class="{i == 0 ? 'ml-4' : ''} relative">
        <div class="w-24 h-24 rounded-full bg-gray-200"/>
        <div class="text-gray-700 mt-1 w-24 truncate">{party}</div>

        <!-- 새로운 피드 -->
        <div class="absolute top-2 right-2 border border-2 border-white bg-red-500 w-3 h-3 rounded-full">
        </div>
    </a>
    {/each}
    <a href="/love/groupting/create" class="mr-4">
        <div class="w-24 h-24 rounded-full bg-green-500 text-white grid place-items-center">
            <Icon icon="plus" size={36} />
        </div>
    </a>
</div>

<!-- 동성 파티 -->
<h3 class="font-bold text-lg mt-8 mx-4 flex items-start justify-between">
    너만오면 고!<br />대기중인 파티에 참가해보세요 🥳
    <a href="#" class="text-gray-500 text-sm flex items-center gap-1">
        더보기
        <Icon icon="chevron-right" size={16} />
    </a>
</h3>
<div class="flex flex-col gap-2 m-4 overflow-x-auto text-center">

    {#each inCompletedParties as party, i}
    <div class="bg-gray-300 w-full h-24 rounded-lg flex items-center justify-left pl-4 text-white text-xl">
        {party}
    </div>
    {/each}
</div>


<!-- 이성 파티 -->
<h3 class="font-bold text-lg mt-8 mx-4">
    시그널을 기다리고 있어요 💌
</h3>

<h4 class="font-bold mt-2 mx-4 flex items-center justify-between">
    2:2 그룹팅
    <a href="#" class="text-gray-500 text-sm flex items-center gap-1">
        더보기
        <Icon icon="chevron-right" size={16} />
    </a>
</h4>
<div class="flex flex-col gap-2 px-4 mt-2">
    {#each oppositeParties as party, i}
        <button class="w-full h-24 flex items-center justify-left text-xl">
            <div class="relative w-1/5">
                <div class="absolute -bottom-4 -left- w-14 h-14 rounded-xl bg-gray-200 border border-white" />
                <div class="absolute -top-4 left-6 w-14 h-14 rounded-xl bg-gray-200 border border-white" />
            </div>
            <div class="ml-8 text-left w-4/5">
                {party}
                <div class="text-sm">#술 #건대입구</div>
                <div class="mt-1 text-sm text-gray-500 flex items-center gap-1">
                    <Icon icon="map-pin" size={14} />
                    아주대
                </div>
            </div>
        </button>
        {#if i != oppositeParties.length - 1}
            <hr class="my-2"/>
        {/if}
    {/each}
</div>

<h4 class="font-bold mt-8 mx-4 flex items-center justify-between">
    3:3 그룹팅
    <a href="#" class="text-gray-500 text-sm flex items-center gap-1">
        더보기
        <Icon icon="chevron-right" size={16} />
    </a>
</h4>
<div class="flex flex-col gap-2 px-4 mt-2">
    {#each oppositeParties as party, i}
        <button class="w-full h-24 flex items-center justify-left text-xl">
            <div class="relative w-1/5">
                <div class="absolute -top-9 left-8 w-12 h-12 rounded-xl bg-gray-200 border border-white" />
                <div class="absolute -top-5 w-12 h-12 rounded-xl bg-gray-200 border border-white" />
                <div class="absolute -top-1 left-6 w-12 h-12 rounded-xl bg-gray-200 border border-white" />
            </div>
            <div class="ml-8 text-left w-4/5">
                {party}
                <div class="text-sm">#술 #건대입구</div>
                <div class="mt-1 text-sm text-gray-500 flex items-center gap-1">
                    <Icon icon="map-pin" size={14} />
                    아주대
                </div>
            </div>
        </button>
        {#if i != oppositeParties.length - 1}
            <hr class="my-2"/>
        {/if}
    {/each}
</div>

<h4 class="font-bold mt-8 mx-4 flex items-center justify-between">
    4:4 그룹팅
    <a href="#" class="text-gray-500 text-sm flex items-center gap-1">
        더보기
        <Icon icon="chevron-right" size={16} />
    </a>
</h4>
<div class="flex flex-col gap-2 px-4 mt-2">
    {#each oppositeParties as party, i}
        <button class="w-full h-24 flex items-center justify-left text-xl">
            <div class="relative w-1/5">
                <div class="absolute bottom-0 w-11 h-11 rounded-xl bg-gray-200 border border-white" />
                <div class="absolute bottom-0 left-11 w-11 h-11 rounded-xl bg-gray-200 border border-white" />
                <div class="absolute left-11 w-11 h-11 rounded-xl bg-gray-200 border border-white" />
                <div class="absolute w-11 h-11 rounded-xl bg-gray-200 border border-white" />
            </div>

            <div class="ml-8 text-left w-4/5">
                {party}
                <div class="text-sm">#술 #건대입구</div>
                <div class="mt-1 text-sm text-gray-500 flex items-center gap-1">
                    <Icon icon="map-pin" size={14} />
                    아주대
                </div>
            </div>
        </button>
        {#if i != oppositeParties.length - 1}
            <hr class="my-2"/>
        {/if}
    {/each}
</div>

<div class="h-24" />