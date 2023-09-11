<script>
	import BackAppbar from "$lib/BackAppbar.svelte";
	import Icon from "$lib/Icon.svelte";

    let fileInput;

    let tags = ['#아무말', '#홍보', '#취업', '#연애', '#술', '#유머', '#패션', '#헬스'];

    let selectedTag = "#아무말";
    let title = "";
    let content = "";

</script>

<BackAppbar title="게시글 작성" />

<!-- 태그 선택 -->
<main class="h-screen">
    <label class="block pt-4">
        <span class="text-gray-700 font-bold px-4">태그</span>
        <div class="overflow-x-auto flex gap-2 mt-2">
            {#each tags as tag, i}
                <div class="{i == 0 ? 'ml-4' : ''} {i == tags.length - 1 ? 'mr-4' : ''}">
                    <button on:click={() => {
                        selectedTag = tag;
                    }}
                        class="px-3 py-1 rounded-full whitespace-nowrap text-sm border border-green-500 {selectedTag == tag ? 'bg-green-500' : 'bg-white'} {selectedTag == tag ? 'text-white' : 'text-green-500'}">
                        {tag}
                    </button>
                </div>
            {/each}
        </div>
    </label>
    
    <!-- 제목 -->
    <label class="block p-4">
        <span class="text-gray-700 font-bold">제목</span>
        <input bind:value={title} type="text mt-2" placeholder="제목을 입력하세요" class="w-full border border-t-0 border-x-0 p-2" />
    </label>
    
    <!-- 내용 -->
    <label class="block p-4">
        <span class="text-gray-700 font-bold">내용</span>
        <textarea bind:value={content} placeholder="내용을 입력하세요"
            class="w-full border border-t-0 border-x-0 p-2 h-52" />
    </label>
    
    <!-- 첨부파일 -->
    <div class="p-4 flex gap-4 overflow-x-auto">
        <div>
            <button on:click={() => {
                    fileInput.click();
                }}
                class="block bg-green-500 text-white h-24 w-24 grid place-items-center rounded-lg relative">
                <Icon icon="image" size={40} />
            </button>
            <input bind:this={fileInput} type="file" class="hidden w-full border border-t-0 border-x-0 p-2" />
        </div>
    
        <div>
            <div class="h-24 w-24 rounded-lg bg-gray-300" />
        </div>
        <div>
            <div class="h-24 w-24 rounded-lg bg-gray-300" />
        </div>
        <div>
            <div class="h-24 w-24 rounded-lg bg-gray-300" />
        </div>
        <div>
            <div class="h-24 w-24 rounded-lg bg-gray-300" />
        </div>
    </div>

    <p class="p-4 text-sm">
        글작성 약관
    </p>
</main>




<!-- 글 작성 버튼 -->
<div class="sticky bottom-0">
    <button on:click={()=>{
    }}
    class="bg-green-500 text-white py-4 text-lg w-full">
        완료
    </button>
</div>