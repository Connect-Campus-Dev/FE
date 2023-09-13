<script>
    import Icon from '$lib/Icon.svelte';
    import Nav from '$lib/Nav.svelte';
    import PostCard from '$lib/PostCard.svelte';
    import { onMount } from 'svelte';
    import { goto } from '$app/navigation';
    import logo from '$lib/assets/logo.png';

    const tags = ['#아무말', '#홍보', '#취업', '#연애', '#술', '#유머', '#패션', '#헬스'];

    let hideHeader = false;
    let lastScrollPosition = 0;
    let showButton = false;

    function scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

	onMount(() => {
		const handleScroll = () => {
			const currentScrollPosition = window.scrollY;

			if (currentScrollPosition > lastScrollPosition && currentScrollPosition > 50) {
				// 아래로 스크롤하고 50px 이상인 경우
				hideHeader = true;
			} else {
				// 위로 스크롤하는 경우
				hideHeader = false;
			}

			lastScrollPosition = currentScrollPosition;
		};
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	});
</script>

<header class="sticky top-0 {hideHeader ? 'hide-animation' : ''}">
  <header class="flex items-center max-w-lg justify-between gap-4 p-4 bg-white">
      <h1 class="font-extrabold text-2xl text-green-600">
          <a href="/"><img src={logo} alt="홈아이콘" class="inline rounded-xl w-14" /></a>
      </h1>
      <div class="flex items-center justify-center w-full h-10 px-4 bg-gray-100 rounded-full border-none gap-2">
          <Icon icon="search" size={20} />
          <input
            class="w-full h-10 px-2 text-base border-none bg-transparent ring:border-none rounded-full placeholder-neutral-400 focus:outline-none"
            type="text"
            placeholder="검색어를 입력하세요"
          />
      </div>
      <button class="relative">
          <Icon icon="bell" />
          <div class="absolute -right-1 -top-1 flex justify-center items-center w-2 h-2 rounded-full bg-red-500 text-xs text-white"></div>
      </button>
  </header>
      <!-- 태그 -->
        <div
          class="mb-4 pb-4 bg-white max-w-lg border-b">

          <div class="overflow-x-auto flex gap-2">
            {#each tags as tag, i}
              <div class="{i == 0 ? 'ml-4' : ''} {i == tags.length - 1 ? 'mr-4' : ''}">
                <button class="px-3 py-1 rounded-full bg-green-500 text-white whitespace-nowrap text-sm">
                  {tag}
                </button>
              </div>
            {/each}
          </div>
        </div>
</header>

<main class="">
    <!-- 실시간 인기 포스트 -->
    <!-- <div class="flex justify-between items-center">
        <h3 class="p-4 font-bold text-lg text-gray-700">실시간 인기 포스트 🔥</h3>
        <button class="p-4 text-sm text-gray-600 flex items-center">
            더 보기
            <Icon icon="chevron-right" size={16} />
        </button>
    </div> -->
    <!-- 게시글 카드 -->
    <!-- {#each "012" as i}
        <PostCard />
        <hr class="my-4" />
    {/each} -->

    <!-- 최신 포스트 -->
    <!-- <h3 class="mt-4 p-4 pb-0 font-bold text-lg text-gray-700">최신 포스트 🍃</h3> -->



    {#each "012345678912312321" as i}
        <PostCard />
        <hr class="my-4" />
    {/each}

</main>

<!-- 포스트 작성 -->
<div class="w-full sticky bottom-20 max-w-lg flex items-center justify-center">
	<button on:click={()=>{
		goto('/post/write');
	}} class="shadow-md rounded-full bg-green-500 text-white">
		<div class="flex items-center gap-2 text-sm p-4">
			<Icon icon="plus" size={24} />
		</div>
	</button>
</div>

<!-- 최상단가기 버튼 -->
{#if showButton}
  <button on:click={scrollToTop} class="p-2 shadow bg-white text-green-500 fixed bottom-20 right-5 rounded-full">
    <Icon icon="chevron-up" size={20} />
  </button>
{/if}



<!-- 네비게이션 바 -->
<Nav />

<style>
  header {
    transition: transform 0.3s ease-in-out;
  }
  .hide-animation {
    transform: translateY(-100%);
  }
</style>
