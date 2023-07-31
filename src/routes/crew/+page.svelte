<script>
    import Icon from '$lib/Icon.svelte';
    import Nav from '$lib/Nav.svelte';
    import Appbar from "$lib/Appbar.svelte";
    import Headroom from "svelte-headroom";
    import { goto } from '$app/navigation';
    import { truncate } from "$lib/utils.js";

    // mycrew, explore
    let tabState = "mycrew";
    let tags = ['#신생', '#번개', '#런닝', '#클라이밍', '#술', '#노래', '#게임', '#쇼핑', '#헬스'];
    let myCrews = ['런닝맨', '번개맨들', '술에찌든자들', '노래가너무너무좋아요', '협곡의망령', '쇼핑중독자들', '득근득근헬스보이'];
    let hotTags = ['#런닝', '#클라이밍'];
    let hotCrews = ['런닝맨', '협곡의망령'];
    let storys = [1,2,3,4,5,6];


</script>

    <div class="flex items-center max-w-md justify-between gap-4 p-4 bg-white">
        <a href="/crew/search" class="flex items-center justify-center w-full h-10 px-4 bg-gray-100 rounded-full border-none gap-2">
            <Icon icon="search" size={20} color="lightgray" />
            <input
            class="w-full h-10 px-2 text-base border-none bg-transparent ring:border-none rounded-full placeholder-neutral-400 focus:outline-none"
            type="text"
            placeholder="검색어를 입력하세요"
            />
        </a>
    </div>

<h3 class="font-bold text-lg mt-4 ml-4">
    내 크루
</h3>
<div class="flex gap-4 my-4 overflow-x-auto text-center">
    {#each myCrews as crew, i}
    <a href="/crew/1" class="w-24 {i == 0 ? 'ml-4' : ''} {i == myCrews.length - 1 ? 'mr-4' : ''}">
        <div class="w-24 h-24 rounded-full bg-gray-200"/>
        <div class="text-gray-700 mt-1 truncate">{crew}</div>
    </a>
    {/each}
</div>

<!-- <h3 class="font-bold text-lg mt-8 ml-4">
    지금 뜨는 태그 🔥
</h3>
<div class="flex flex-col gap-2 m-4 overflow-x-auto text-center">

    {#each hotTags as tag, i}
    <div class="bg-gray-300 w-full h-24 rounded-lg flex items-center justify-left pl-4 text-white text-xl">
        {tag}
    </div>
    {/each}
</div> -->

<h3 class="font-bold text-lg mt-8 ml-4">
    지금 뜨는 크루 🔥
</h3>
<div class="flex flex-col gap-2 m-4 overflow-x-auto text-center">

    {#each hotCrews as crew, i}
    <div class="bg-gray-300 w-full h-24 rounded-lg flex items-center justify-left pl-4 text-white text-xl">
        {crew}
    </div>
    {/each}
</div>

<h3 class="font-bold text-lg mt-8 ml-4">
    크루 스토리 💭
</h3>
<a href="#" class="flex flex-col gap-2 my-4 text-center">
    {#each storys as story, i}
    <div class="flex items-center text-sm gap-2 mx-4">
        <div class="h-9 w-9 rounded-full bg-gray-300" />
        <div class="flex gap-2 items-center">
            <span class="text-black font-medium">크루이름</span>
            <span class="text-gray-300 text-xs">방금 전</span>
        </div>
    </div>
    <div class="flex-1 text-black text-left mx-4">
        <!-- 이미지 -->
        <div class="mt-2 h-72">
            <div class="object-cover h-full w-full bg-gray-300" />
        </div>
        <!-- 내용 -->
        <p class="text-sm mt-3">{truncate('오늘도 열심히 뛴 우리 크루원들 다들 수고했어~~ 이번에 못나온 분들도 다음에 꼭 봬요!!', 40)}</p>
        <div class="flex justify-between items-center text-gray-500 mt-4">
        <!-- 태그 -->
        <div class="flex gap-2">
            <div class="text-gray-500 rounded-full bg-white text-sm">#런닝</div>
            <div class="text-gray-500 rounded-full bg-white text-sm">#런닝</div>
            <div class="text-gray-500 rounded-full bg-white text-sm">#런닝</div>
        </div>
        <div class="flex">
            <!-- 조회수 -->
            <div class="flex gap-1 items-center">
                <Icon icon="eye" size={18} />
                <div class="text-sm">24</div>
            </div>
            <!-- 좋아요 -->
            <div class="ml-4 flex gap-1 items-center">
                <Icon icon="heart" size={18} />
                <div class="text-sm">24</div>
            </div>

            <!-- 댓글 -->
            <div class="ml-4 flex gap-1 items-center">
                <Icon icon="message-square" size={18} />
                <div class="text-sm">24</div>
            </div>
        </div>
    </div>
    <div class="mt-4 text-center text-gray-400 text-sm">자세히 보기</div>
    </div>
    <hr class="my-4"/>
    {/each}
</a>





<div class="h-36" />

<Nav currentPath="/crew"/>