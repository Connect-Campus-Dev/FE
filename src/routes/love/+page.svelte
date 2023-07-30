<script>
    import Appbar from "$lib/Appbar.svelte";
    import Nav from "$lib/Nav.svelte";
    import Icon from "$lib/Icon.svelte";
</script>

<Appbar title="연애" />

<main class="p-4">
    <!-- 내 연애 프로필 -->
    <a href="#" class="p-4 rounded-lg w-full h-36 shadow-md flex items-center justify-between">
        <div class="text-start">
            <h3 class="text-lg font-bold">연애 프로필</h3>
            <div class="text-gray-500 text-sm">
                인연을 만날 준비는 하셨나요?<br />먼저 연애 프로필을 작성해보세요.
            </div>
        </div>
        <div class="text-gray-500">
            <Icon icon="chevron-right" size={24} />
        </div>
    </a>

    <!-- 1:1 미팅 -->
    <a href="#" class="mt-4 p-4 rounded-lg w-full h-36 shadow-md flex items-center justify-between">
        <div class="text-start">
            <h3 class="text-lg font-bold">1:1 미팅</h3>
            <div class="text-gray-500 text-sm">
                인연과 단둘이 만나고 싶으신가요?<br />그렇다면 1:1 미팅을 신청해보세요.
            </div>
        </div>
        <div class="text-gray-500">
            <Icon icon="chevron-right" size={24} />
        </div>
    </a>


    <!-- 그룹팅 -->
    <a href="#" class="mt-4 p-4 rounded-lg w-full h-36 shadow-md flex items-center justify-between">
        <div class="text-start">
            <h3 class="text-lg font-bold">그룹팅</h3>
            <div class="text-gray-500 text-sm">
                여러 친구들과 함께하는 그룹팅에 참여해보세요.<br />최대 4명까지 함께할 수 있어요.
            </div>
        </div>
        <div class="text-gray-500">
            <Icon icon="chevron-right" size={24} />
        </div>
    </a>
</main>



<Nav currentPath="/love" />