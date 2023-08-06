<script>
    import Appbar from "$lib/Appbar.svelte";
    import Nav from "$lib/Nav.svelte";
    import Icon from "$lib/Icon.svelte";

    let isVerified = false;
</script>

<Appbar title="마이페이지" />

<main>
    <div class="pt-8 p-4 flex gap-4">
        <div class="bg-gray-300 w-24 h-24 rounded-full relative">
            <button class="absolute bottom-1 right-1 text-gray-500">
                <Icon icon="edit" size={20} />
            </button>
        </div>
        <div class="flex flex-col">
            <div class="font-bold text-xl">무마니</div>
            <div class="text-sm text-gray-500">아주대학교 ｜ 18학번</div>
            <div class="text-sm text-gray-500">소프트웨어학과</div>
            <div class="text-sm text-gray-500">moonman0429@ajou.ac.kr</div>
        </div>
    </div>

    <div class="p-4">
        {#if isVerified}
            <button class="bg-green-500 text-white w-full py-2 rounded-lg font-bold">
                본인인증 하기
            </button>
        {:else}
            <div class="flex gap-2 justify-center items-center bg-green-400 text-white w-full py-2 rounded-lg font-bold">
                인증된 사용자
                <Icon icon="check-circle" size={16} />
            </div>
        {/if}
    </div>

    <!-- 연애 프로필 바로가기 -->
    <div class="mt-4 mb-8 flex justify-end">
        <button class="text-gray-700 mx-4 border-b-2 border border-x-0 border-t-0 text-sm">
            내 연애프로필 바로가기
        </button>
    </div>


    <hr class="h-2 bg-gray-100" />

    <!-- 사진첩 -->
    <div class="flex items-center justify-between p-4 mt-4">
        <h3>
            <div class="font-bold text-lg text-gray-700">내 사진첩</div>
            <div class="text-sm text-gray-500">
                다른 회원에게 나를 소개해보세요!
            </div>
        </h3>
        <button class="text-sm text-gray-600 flex items-center">
            더 보기
            <Icon icon="chevron-right" size={16} />
        </button>
    </div>
    <div class="px-4 mb-4">
        <div class="overflow-x-auto flex gap-4">
          {#each "0123456789" as tag}
            <div>
                <div class="bg-gray-300 w-24 h-24 rounded-lg" />
            </div>
          {/each}
        </div>
      </div>

    <hr class="my-4 h-2 bg-gray-100" />

    <!-- 내가 쓴 포스트 -->
    <div class="flex items-center justify-between p-4">
        <h3>
            <div class="font-bold text-lg text-gray-700">내가 쓴 포스트</div>
        </h3>
        <button class="text-sm text-gray-600 flex items-center">
            더 보기
            <Icon icon="chevron-right" size={16} />
        </button>
    </div>
    <div class="px-4">
        {#each [1,2,3] as i}
            <div class="flex justify-between gap-4 py-4 {i != 3 ? 'border-b' : ''}">
                <div class="flex flex-col">
                    <div class="font-semibold text-lg text-gray-700">
                        포스트 제목
                    </div>
                    <div class="text-sm text-gray-500">
                        포스트 내용
                    </div>
                </div>
                <div class="bg-gray-300 w-24 h-24 rounded-lg" />
            </div>
        {/each}
    </div>

    <hr class="my-4 h-2 bg-gray-100" />

    <!-- 앱 관련 -->
    <h3 class="p-4 font-bold text-lg text-gray-700">앱 관련</h3>
    <a href="#" class="p-4 flex items-center justify-between text-gray-700">
        설정
        <div class="text-gray-500">
            <Icon icon="chevron-right" size={24} />
        </div>
    </a>
    <a href="#" class="p-4 flex items-center justify-between text-gray-700">
        공지사항
        <div class="text-gray-500">
            <Icon icon="chevron-right" size={24} />
        </div>
    </a>
    <a href="#" class="p-4 flex items-center justify-between text-gray-700">
        문의하기
        <div class="text-gray-500">
            <Icon icon="chevron-right" size={24} />
        </div>
    </a>
    <a href="#" class="p-4 flex items-center justify-between text-gray-700">
        앱 정보
        <div class="text-gray-500">
            <Icon icon="chevron-right" size={24} />
        </div>
    </a>
    <a href="/login" class="p-4 flex items-center justify-between text-gray-700">
        로그아웃
        <div class="text-gray-500">
            <Icon icon="chevron-right" size={24} />
        </div>
    </a>
    <a href="#" class="p-4 flex items-center justify-between text-gray-700">
        회원탈퇴
        <div class="text-gray-500">
            <Icon icon="chevron-right" size={24} />
        </div>
    </a>
    <div class="p-4 flex items-center justify-between text-gray-700">
        앱 버전
        <div class="text-gray-500">
            v1.0.0
        </div>
    </div>


</main>

<div class="h-24" />

<Nav currentPath="/mypage" />