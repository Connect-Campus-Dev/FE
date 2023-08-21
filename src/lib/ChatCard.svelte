<script>
    export let title = '타이틀';
    export let memberCount = 3;
    export let lastMessage = '마지막 대화 내용';
    export let lastUpdated = '5분전';
</script>

<button class="block w-full text-left flex">
    <div class="bg-gray-300 rounded-full w-12 h-12" />
    <div class="ml-4 flex flex-col grow">
        <div class="flex justify-between items-center">
            <div class="flex items-center gap-2">
                <div class="text-lg font-bold">{title}</div>
                <div class="text-xs text-gray-500">{memberCount}명</div>
            </div>
            <div class="text-xs text-gray-500">{lastUpdated}</div>
        </div>
        <div class="grow text-sm text-gray-500">{lastMessage}</div>
    </div>
</button>