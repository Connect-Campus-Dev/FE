<script>
    import Appbar from "$lib/Appbar.svelte";
    import Nav from "$lib/Nav.svelte";
    import Icon from "$lib/Icon.svelte";
    import LargeButton from "$lib/LargeButton.svelte";
    import { goto } from "$app/navigation";

    let step = 0;

    let hobbies = ['영화보기', '독서', '게임', '운동', '음악감상', '요리', '여행', '쇼핑', '공부', '투자', '프로그래밍', '봉사활동', '기타', '클라이밍', '피아노'];
    let selectedHobbies = [];

    let personalities = [
        '활발한', '조용한', '애교가 넘치는', '차분한', '낙천적인', '소심한', '내향적인', '외향적인', '낯가림이 심한', '낯가림이 없는', '지적인'
    ];
    let selectedPersonalities = [];

    let height = 180;

    let mbti = "";
    let EI = "";
    let SN = "";
    let TF = "";
    let JP = "";

    let regions = [
        "서울",
        "경기",
        "인천",
        "강원",
        "충북",
        "충남",
        "대전",
        "경북",
        "경남",
        "대구",
        "울산",
        "부산",
        "전북",
        "전남",
        "광주",
        "제주",
    ];
    let region = "서울";
    let intro = "";
</script>

<Appbar title="프로필 만들기" />


<!-- step 0: 거주 지역 -->
{#if step == 0}
<main class="m-4">
    <h3>
        거주 지역을 알려주세요
    </h3>
    <div class="mb-24 mt-2 text-gray-500 ">
        상대방이 참고할 수 있도록<br />거주지역을 알려주세요.
    </div>
    <div class="mt-24 shadow-md rounded-lg px-2">
        <select
            bind:value={region}
            name="region"
            class="text-center w-full bg-white font-bold text-base border-none h-12"
        >
            {#each regions as region}
                <option value={region}>{region}</option>
            {/each}
        </select>
    </div>
</main>
<div class="fixed bottom-0 w-full inset-x-0">
    <button on:click={()=>{
        step = 1;
    }}
    class="bg-green-500 text-white py-4 text-lg w-full">
        다음
    </button>
</div>
{/if}


<!-- step 1: mbti -->
{#if step == 1}
<main class="m-4">
    <h3>
        MBTI를 알려주세요
    </h3>
    <div class="mb-24 mt-2 text-gray-500 ">
        MBTI를 통해 당신의 성격을 알아보고<br />당신과 잘 맞는 인연을 찾아드릴게요.
    </div>
    <ul class="flex flex-wrap items-center text-center mt-5 justify-center">
        <div>
            {#each "EI" as mbti, idx}
                <li>
                    <input type="radio" name="EI" id={idx} value={EI} class="peer hidden" />
                    <label
                    for={idx}
                    class="w-16 h-16 text-sm mr-2.5 mb-2.5 bg-gray-100 inline-flex items-center justify-between text-gray-500 rounded cursor-pointer hover:text-black hover:bg-green-200 peer-checked:text-white peer-checked:bg-green-500"
                    >
                    <div class="w-full text-lg">{mbti}</div>
                    </label>
                </li>
            {/each}
        </div>

        <div>
            {#each "SN" as mbti, idx}
            <li>
                <input type="radio" name="SN" id={idx + 2} value={SN} class="peer hidden" />
                <label
                    for={idx + 2}
                    class="w-16 h-16 text-sm mr-2.5 mb-2.5 bg-gray-100 inline-flex items-center justify-between text-gray-500 rounded cursor-pointer hover:text-black hover:bg-green-200 peer-checked:text-white peer-checked:bg-green-500"
                >
                    <div class="w-full text-lg">{mbti}</div>
                </label>
            </li>
        {/each}
        </div>

        <div>
            {#each "TF" as mbti, idx}
                <li>
                    <input type="radio" name="TF" id={idx + 4} value={TF} class="peer hidden" />
                    <label
                    for={idx + 4}
                    class="w-16 h-16 text-sm mr-2.5 mb-2.5 bg-gray-100 inline-flex items-center justify-between text-gray-500 rounded cursor-pointer hover:text-black hover:bg-green-200 peer-checked:text-white peer-checked:bg-green-500"
                    >
                    <div class="w-full text-lg">{mbti}</div>
                    </label>
                </li>
            {/each}
        </div>

        <div>
            {#each "JP" as mbti, idx}
                <li>
                <input type="radio" name="JP" id={idx + 6} value={JP} class="peer hidden" />
                <label
                    for={idx + 6}
                    class="w-16 h-16 text-sm mr-2.5 mb-2.5 bg-gray-100 inline-flex items-center justify-between text-gray-500 rounded cursor-pointer hover:text-black hover:bg-green-200 peer-checked:text-white peer-checked:bg-green-500"
                >
                    <div class="w-full text-lg">{mbti}</div>
                </label>
                </li>
            {/each}
        </div>
      </ul>
</main>
<div class="fixed bottom-0 w-full inset-x-0">
    <button on:click={
        () => {
            step = 2;
        }}
        class="bg-green-500 text-white py-4 text-lg w-full">
        다음
    </button>
</div>
{/if}


<!-- step 2: 키 -->
{#if step == 2}
<main class="m-4">
    <h3>
        키를 알려주세요
    </h3>
    <div class="mb-24 mt-2 text-gray-500 ">
        대략적인 키도 괜찮아요.
    </div>
    <div class="mt-24 mx-16 flex items-center relative">
        <input bind:value={height} type="tel" class="text-center w-full border border-b border-t-0 rounded-none border-x-0 border-gray-400 p-4" />
        <div class="absolute right-12 font-extrabold text-lg">cm</div>
    </div>
</main>
<div class="fixed bottom-0 w-full inset-x-0">
    <button on:click={()=>{
        step = 3;
    }}
    class="bg-green-500 text-white py-4 text-lg w-full">
        다음
    </button>
</div>
{/if}


<!-- step 3: 성격 -->
{#if step == 3}
<main class="m-4">
    <h3>
        어떤 성격이신가요?
    </h3>
    <div class="mt-2 text-gray-500 ">
        본인의 성격과 가까운<br />성격들을 모두 골라주세요
    </div>
    <div class="mt-24">
        <ul class="flex flex-wrap items-center text-center mt-5">
            {#each personalities as personality, idx}
              <li>
                <input type="checkbox" id={idx} value={personality} class="peer hidden" />
                <label
                  for={idx}
                  class="px-3.5 py-2 text-sm mr-2.5 mb-2.5 bg-gray-100 inline-flex items-center justify-between text-gray-500 rounded-2xl cursor-pointer hover:text-black hover:bg-green-200 peer-checked:text-white peer-checked:bg-green-500"
                >
                  <div class="w-full text-sm">{personality}</div>
                </label>
              </li>
            {/each}
          </ul>
    </div>
</main>
<div class="fixed bottom-0 w-full inset-x-0">
    <button on:click={()=>{
        step = 4;
    }}
    class="bg-green-500 text-white py-4 text-lg w-full">
        다음
    </button>
</div>
{/if}


<!-- step 4: 취미 -->
{#if step == 4}
<main class="m-4">
    <h3>
        OOO님의<br />취미를 알려주세요
    </h3>
    <div class="mt-2 text-gray-500 ">
        취미를 통해 당신의 매력을 알려주세요.<br />최대 3개까지 선택 가능해요.
    </div>
    <!-- selected hobies -->
    <div class="mt-12">
    <ul class="flex flex-wrap items-center text-center mt-5">
        {#each hobbies as hobby, idx}
          <li>
            <input type="checkbox" id={idx} value={hobby} class="peer hidden" />
            <label
              for={idx}
              class="px-3.5 py-2 text-sm mr-2.5 mb-2.5 bg-gray-100 inline-flex items-center justify-between text-gray-500 rounded-2xl cursor-pointer hover:text-black hover:bg-green-200 peer-checked:text-white peer-checked:bg-green-500"
            >
              <div class="w-full text-sm">{hobby}</div>
            </label>
          </li>
        {/each}
      </ul>
</main>
<div class="fixed bottom-0 w-full inset-x-0">
    <button on:click={()=>{
        step = 5;
    }}
    class="bg-green-500 text-white py-4 text-lg w-full">
        다음
    </button>
</div>
{/if}


<!-- step 5: 한줄소개 -->
{#if step == 5}
<main class="m-4">
    <h3>
        OOO님을<br />한 줄로 소개한다면?
    </h3>
    <div class="mt-2 text-gray-500 ">
        한 줄로 소개해주세요.<br />최대 20자까지 입력 가능해요.
    </div>
    <div class="mt-24">
        <input bind:value={intro} type="text" placeholder="한줄소개" class="w-full border border-b border-t-0 rounded-none border-x-0 border-gray-400 p-4" />
    </div>
</main>
<div class="fixed bottom-0 w-full inset-x-0">
    <button on:click={()=>{
        step = 6;
    }}
    class="bg-green-500 text-white py-4 text-lg w-full">
        다음
    </button>
</div>
{/if}


<!-- step 6: 사진 -->
{#if step == 6}
<main class="m-4">
    <h3>
        마지막이에요!<br />본인의 사진을 올려주세요
    </h3>
    <div class="mt-2 text-gray-500 ">
        사진을 통해 당신의 매력을 알려주세요.<br />최소 1개 이상, 최대 3개까지 선택 가능해요.
    </div>
    <div class="mt-12 grid grid-cols-3 gap-4">
        <div class="w-full h-36 bg-gray-100 rounded-lg relative">
            <div class="text-gray-500 absolute right-3 bottom-3 rounded-full bg-white shadow">
                <Icon icon="plus" size={24} />
            </div>
        </div>
        <div class="w-full h-36 bg-gray-100 rounded-lg relative">
            <div class="text-gray-500 absolute right-3 bottom-3 rounded-full bg-white shadow">
                <Icon icon="plus" size={24} />
            </div>
        </div>
        <div class="w-full h-36 bg-gray-100 rounded-lg relative">
            <div class="text-gray-500 absolute right-3 bottom-3 rounded-full bg-white shadow">
                <Icon icon="plus" size={24} />
            </div>
        </div>
    </div>
</main>
<div class="fixed bottom-0 w-full inset-x-0">
    <button on:click={()=>{
        goto('/love');
    }}
    class="bg-green-500 text-white py-4 text-lg w-full">
        다음
    </button>
</div>
{/if}