<script>
    import Icon from '$lib/Icon.svelte';
    import Nav from '$lib/Nav.svelte';
    import Appbar from "$lib/Appbar.svelte";

    let tags = ['#신생', '#번개', '#런닝', '#클라이밍', '#술', '#노래', '#게임', '#쇼핑', '#헬스'];
</script>

<div class="flex items-center max-w-lg justify-between gap-4 p-4 bg-white">
    <a href="/crew" class="text-gray-600">
        <Icon icon="arrow-left" size={24} color="black" />
    </a>
    <div class="flex items-center justify-center w-full h-10 px-4 bg-gray-100 rounded-full border-none gap-2">
        <Icon icon="search" size={20} color="lightgray" />
        <input
          class="w-full h-10 px-2 text-base border-none bg-transparent ring:border-none rounded-full placeholder-neutral-400 focus:outline-none"
          type="text"
          placeholder="검색어를 입력하세요"
        />
    </div>
</div>

<div class="font-bold text-lg mt-4 ml-4">
    지금 뜨는 검색어
</div>
<div class="flex flex-wrap gap-2 mx-4 mt-2">
    {#each tags as tag, i}
        <button class="px-3 py-1 rounded-full bg-green-500 text-white whitespace-nowrap text-sm">
            {tag}
        </button>
    {/each}
</div>



