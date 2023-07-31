<script>
    import Icon from "$lib/Icon.svelte";
    import { truncate } from "$lib/utils.js";

    export let heading = "오늘 밤 10시에 서울대학교에서 농구경기";
    export let content = "서울 올림픽 공원에서 서울대 vs 연세대 농구경기가 열립니다. 서울대학교 학생들은 무료로 입장할 수 있습니다. 10분전까지 입장 가능합니다. 다들 오셔서 응원하고 경품도 받아가세요!";
    export let like = 231;
    export let comment = 34;
    export let view = 1193;
    export let time = "3분전";
</script>

<a href="#post" class="block px-4">
    <h4 class="text-gray-600 truncate text-lg font-semibold">
        {heading}
    </h4>
    <div class="flex gap-4 mt-2 text-sm text-gray-500">
        <!-- 사진 -->
        <div class="w-4/5">
            {truncate(content, 80)}
        </div>
        <div class="bg-gray-200 h-24 w-24" />
    </div>
    <div class="mt-4 flex gap-4 justify-between items-center text-sm text-gray-400">
        <div class="">
            {time}
        </div>
        <div class="flex items-center gap-4">
            <div class="flex items-center gap-1">
                <Icon icon="heart" size={12}/>
                {like}
            </div>
            <div class="flex items-center gap-1">
                <Icon icon="message-square" size={12}/>
                {comment}
            </div>
            <div class="flex items-center gap-1">
                <Icon icon="eye" size={12}/>
                {view}
            </div>
        </div>
    </div>
</a>