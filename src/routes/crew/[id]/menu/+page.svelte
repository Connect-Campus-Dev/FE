<script>
    import { page } from "$app/stores";
    import Icon from "$lib/Icon.svelte";
    import { goto } from "$app/navigation";

    const crewId = $page.params.id;
</script>


<div class="relative bg-white h-14 items-center sticky top-0 border-b flex z-10">
    <button
        on:click={() => {
            goto(`/crew/${crewId}`);
        }}
        class="absolute p-4 text-gray-600"
    >
        <Icon icon="arrow-left" size={24} />
    </button>
    <div class="text-center w-full font-bold">크루 설정</div>
</div>

    <h3 class="p-4 font-bold text-lg text-gray-700">일반</h3>
    <a href="#" class="p-4 flex items-center justify-between text-gray-700">
        전체 멤버
        <div class="text-gray-500">
            <Icon icon="chevron-right" size={24} />
        </div>
    </a>
    <a href="#" class="p-4 flex items-center justify-between text-gray-700">
        내가 쓴 스토리
        <div class="text-gray-500">
            <Icon icon="chevron-right" size={24} />
        </div>
    </a>
    <a href="#" class="p-4 flex items-center justify-between text-gray-700">
        크루 탈퇴
        <div class="text-gray-500">
            <Icon icon="chevron-right" size={24} />
        </div>
    </a>

    <h3 class="mt-4 p-4 font-bold text-lg text-gray-700">관리</h3>
    <a href="#" class="p-4 flex items-center justify-between text-gray-700">
        공지사항
        <div class="text-gray-500">
            <Icon icon="chevron-right" size={24} />
        </div>
    </a>
    <a href="#" class="p-4 flex items-center justify-between text-gray-700">
        가입신청
        <div class="text-gray-500">
            <Icon icon="chevron-right" size={24} />
        </div>
    </a>
    <a href="#" class="p-4 flex items-center justify-between text-gray-700">
        크루 정보 수정
        <div class="text-gray-500">
            <Icon icon="chevron-right" size={24} />
        </div>
    </a>
