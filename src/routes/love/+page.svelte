<script>
    import Appbar from "$lib/Appbar.svelte";
    import Nav from "$lib/Nav.svelte";
    import Icon from "$lib/Icon.svelte";
</script>

<Appbar title="연애" />

<main class="p-4">
    <!-- 내 연애 프로필 -->
    <a href="/love/profile" class="p-4 rounded-lg w-full h-36 shadow-md flex items-center justify-between bg-white">
        <div class="text-start flex flex-col gap-y-2">
            <h3 class="text-xl font-extrabold text-gray-700">연애 프로필</h3>
            <div class="text-gray-500 text-base">
                인연을 만날 준비는 하셨나요?<br />먼저 연애 프로필을 작성해보세요.
            </div>
        </div>
        <div class="text-gray-500">
            <Icon icon="chevron-right" size={24} />
        </div>
    </a>

    <!-- 소개팅 -->
    <a href="#" class="mt-4 p-4 rounded-lg w-full h-36 shadow-md flex items-center justify-between bg-white">
        <div class="text-start flex flex-col gap-y-2">
            <h3 class="text-xl font-extrabold text-gray-700">소개팅</h3>
            <div class="text-gray-500 text-base">
                인연과 단둘이 만나고 싶으신가요?<br />그렇다면 소개팅을 신청해보세요.
            </div>
        </div>
        <div class="text-gray-500">
            <Icon icon="chevron-right" size={24} />
        </div>
    </a>


    <!-- 그룹팅 -->
    <a href="#" class="mt-4 p-4 rounded-lg w-full h-36 shadow-md flex items-center justify-between bg-white">
        <div class="text-start flex flex-col gap-y-2">
            <h3 class="text-xl font-extrabold text-gray-700">그룹팅</h3>
            <div class="text-gray-500 text-base">
                여러 친구들과 함께하는 그룹팅에 참여해보세요.<br />최대 4명까지 함께할 수 있어요.
            </div>
        </div>
        <div class="text-gray-500">
            <Icon icon="chevron-right" size={24} />
        </div>
    </a>
</main>



<Nav currentPath="/love" />