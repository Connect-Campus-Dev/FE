<script>
    import Appbar from "$lib/Appbar.svelte";
    import Nav from "$lib/Nav.svelte";
    import Icon from "$lib/Icon.svelte";
    import LargeButton from "$lib/LargeButton.svelte";
    import { goto } from "$app/navigation";

    import { page } from "$app/stores";
    const partyId = $page.params.id;


</script>


<header class="relative bg-white h-14 items-center sticky top-0 border-b flex z-10">
    <button
        on:click={() => {
            goto("/love/groupting");
        }}
            class="absolute p-4 text-gray-600">
            <Icon icon="arrow-left" size={24} />
        </button>
        <div class="text-center w-full font-bold">훈남팟</div>
</header>

<main class="p-4">
    <h4 class="mb-2 font-bold block mb-1 flex items-center justify-between">
        <div>파티원<span class="ml-1 text-gray-500">(3/3)</span></div>
        <div class="flex items-center text-gray-500">
            <a href="/love/groupting/party/{partyId}/manage" class="text-sm relative">
                파티 관리
                <div class="absolute -top-0.5 -right-1 bg-red-500 w-1.5 h-1.5 rounded-full" />
            </a>
            <Icon icon="chevron-right" size={14}/>
        </div>
    </h4>
    <div class="flex gap-4 overflow-x-auto pb-8">
        {#each "012" as i}
        <div>
            <a href="#" class="block w-72 p-4 rounded-lg shadow-md">
                <div class="flex">
                    <div class="bg-gray-200 w-24 h-24 rounded-lg"></div>
                    <div class="pl-4 grow">
                        <div class="font-bold text-lg">무마니
                            <span class="text-gray-500 text-sm">18학번</span>
                        </div>
                        <div class="font-bold text-sm">아주대학교
                        <div class="font-bold text-sm">소프트웨어학과</div>
                        <a href="#" class="mt-3 flex grow justify-end items-center text-gray-400 text-xs">
                            자세히보기
                            <Icon icon="chevron-right" size={14} />
                        </a>
                    </div>
                </div>
            </a>
        </div>
        {/each}
    </div>

    <h4 class="font-bold block mb-1">보낸 시그널</h4>
    <button class="w-full h-24 flex items-center justify-left text-xl">
        <div class="relative w-1/5">
            <div class="absolute bottom-0 w-11 h-11 rounded-xl bg-gray-200 border border-white" />
            <div class="absolute bottom-0 left-11 w-11 h-11 rounded-xl bg-gray-200 border border-white" />
            <div class="absolute left-11 w-11 h-11 rounded-xl bg-gray-200 border border-white" />
            <div class="absolute w-11 h-11 rounded-xl bg-gray-200 border border-white" />
        </div>

        <div class="ml-8 text-left w-4/5">
            술 달려
            <div class="text-sm">#술 #건대입구</div>
            <div class="mt-1 text-sm text-gray-500 flex items-center gap-1">
                <Icon icon="map-pin" size={14} />
                이화여대
            </div>
        </div>
    </button>


    <h4 class="mt-8 font-bold block mb-1">받은 시그널</h4>
    <button class="w-full h-24 flex items-center justify-left text-xl">
        <div class="relative w-1/5">
            <div class="absolute bottom-0 w-11 h-11 rounded-xl bg-gray-200 border border-white" />
            <div class="absolute bottom-0 left-11 w-11 h-11 rounded-xl bg-gray-200 border border-white" />
            <div class="absolute left-11 w-11 h-11 rounded-xl bg-gray-200 border border-white" />
            <div class="absolute w-11 h-11 rounded-xl bg-gray-200 border border-white" />
        </div>

        <div class="ml-8 text-left w-4/5">
            나쁜 여자들
            <div class="text-sm">#술 #건대입구</div>
            <div class="mt-1 text-sm text-gray-500 flex items-center gap-1">
                <Icon icon="map-pin" size={14} />
                성신여대
            </div>
        </div>
    </button>

</main>