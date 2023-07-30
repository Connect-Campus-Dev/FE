<script>
    import Icon from '$lib/Icon.svelte';
    import Nav from '$lib/Nav.svelte';
    import PostCard from '$lib/PostCard.svelte';
    import Headroom from "svelte-headroom";
    import { onMount } from 'svelte';

    const univActivity = [
      {
        name: '서울대',
        count: 10,
      },
      {
        name: '연세대',
        count: 9,
      },
      {
        name: '고려대',
        count: 8,
      },
      {
        name: '성균관대',
        count: 7,
      },
      {
        name: '서강대',
        count: 6,
      },
      {
        name: '중앙대',
        count: 5,
      },
      {
        name: '한양대',
        count: 4,
      }
    ];

    const tags = ['#아무말', '#홍보', '#취업', '#연애', '#술', '#유머', '#패션', '#헬스'];

    //정렬
    univActivity.sort((a, b) => {
      return b.count - a.count;
    });

    let showButton = false;

    function scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    function checkScrollPosition() {
      if (window.scrollY > 200) {
        showButton = true;
      } else {
        showButton = false;
      }
    }

  onMount(() => {
    window.addEventListener('scroll', checkScrollPosition);
    return () => {
      window.removeEventListener('scroll', checkScrollPosition);
    };
  });
</script>

<Headroom offset={100}>
  <header class="flex items-center max-w-md justify-between gap-4 p-4 bg-white shadow">
      <h1 class="font-extrabold text-2xl text-green-600">
          <a href="/"><img src="/ccc.png" alt="홈아이콘" class="inline rounded-xl w-10" /></a>
      </h1>
      <div class="flex items-center justify-center w-full h-10 px-4 bg-gray-100 rounded-full border-none gap-2">
          <Icon icon="search" size={20} color="lightgray" />
          <input
            class="w-full h-10 px-2 text-base border-none bg-transparent ring:border-none rounded-full placeholder-neutral-400 focus:outline-none"
            type="text"
            placeholder="검색어를 입력하세요"
          />
      </div>
      <button class="relative">
          <Icon icon="bell" color="lightgray" />
          <div class="absolute -right-1 -top-1 flex justify-center items-center w-2 h-2 rounded-full bg-red-500 text-xs text-white"></div>
      </button>
  </header>
</Headroom>

<main class="mt-20">
    <!-- 실시간 인기 포스트 -->
    <div class="flex justify-between items-center">
        <h3 class="p-4 font-bold text-lg text-gray-700">실시간 인기 포스트 🔥</h3>
        <button class="p-4 text-sm text-gray-600 flex items-center">
            더 보기
            <Icon icon="chevron-right" size={16} />
        </button>
    </div>
    <!-- 게시글 카드 -->
    {#each "012" as i}
        <PostCard />
        <hr class="my-4" />
    {/each}

    <!-- 최신 포스트 -->
    <h3 class="mt-4 p-4 pb-0 font-bold text-lg text-gray-700">최신 포스트 🍃</h3>

    <!-- 태그 -->
    <div class="px-4 mt-2 mb-4">
      <div class="overflow-x-auto flex gap-1">
        {#each tags as tag}
          <div>
            <button class="px-3 py-1 rounded-full bg-green-500 text-white whitespace-nowrap text-sm">
              {tag}
            </button>
          </div>
        {/each}
      </div>
    </div>

    {#each "0123456789" as i}
        <PostCard />
        <hr class="my-4" />
    {/each}

</main>

<div class="h-36" />

<!-- 포스트 작성 -->
<button class="fixed bottom-20 left-1/2 -translate-x-1/2 flex items-center justify-center rounded-full bg-green-500 text-white">
    <div class="flex items-center gap-2 text-sm px-4 py-3">
        포스트 작성
        <Icon icon="edit" size={16} />
    </div>
</button>

<!-- 최상단가기 버튼 -->
{#if showButton}
  <button on:click={scrollToTop} class="p-2 shadow bg-white text-green-500 fixed bottom-20 rounded-full">
    <Icon icon="chevron-up" size={20} />
  </button>
{/if}

<!-- 네비게이션 바 -->
<Nav />

