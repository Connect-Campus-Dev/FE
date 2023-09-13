<script>
    import { goto } from "$app/navigation";
    import { connectSocket,  } from '$lib/stores/socketStore';
    import { toastMessage, API_BASE_URL, ACCESS_TOKEN, WS_BASE_URL } from '$lib/stores';
    import logo from '$lib/assets/logo.png';

    let email = "";
    let password = "";

    async function login() {
        goto('/');
        // const response = await fetch(`${API_BASE_URL}/auth/login`, {
		// 	method: 'POST',
        //     headers: {
		// 		'Content-Type': 'application/json'
		// 	},
		// 	body: JSON.stringify({
        //         "email": {"value": email},
        //         "password": password
        //     })
		// });

        // if(response.ok) {
        //     const accessToken = response.headers.get('Authorization');
        //     if(accessToken) {
        //         localStorage.setItem('accessToken', accessToken);
        //         $ACCESS_TOKEN = accessToken;
        //         connectSocket(WS_BASE_URL);
        //         goto('/');
        //     }
        // }
		// if (!response.ok) {
        //     response.json().then(data => {
        //         toastMessage.set(data.message)
        //     });
		// }
    }

</script>
<header class="mt-32 flex flex-col items-center justify-center">
    <h1 class="flex text-green-500 text-2xl font-extrabold">
        <img src={logo} alt="logo" class="w-7 h-7 mr-1" />
        커넥트 캠퍼스
    </h1>
    <div class="text-gray-500 mt-2 font-bold">20대의 모든 순간을 함께해요</div>
</header>

<main class="mt-12 px-4">
    <input bind:value={email} type="text" placeholder="이메일" class="w-full h-12 px-4 py-2 border border-gray-300 rounded-lg" />
    <input bind:value={password} type="password" placeholder="비밀번호" class="mt-2 w-full h-12 px-4 py-2 border border-gray-300 rounded-lg" />

    <div class="mt-4 w-full">
        <button on:click={login} class="bg-green-500 text-white py-3 text-lg w-full rounded-lg">
            로그인
        </button>
    </div>

    <a href="#">
        <div class="text-sm mt-4 w-full text-center text-gray-500 underline underline-offset-4">
            비밀번호를 잊으셨나요?
        </div>
    </a>

    <div class="mt-24 w-full">
        <button on:click={()=>{goto("/signup")}} class="text-green-500 border border-green-500 bg-white py-3 text-lg w-full rounded-lg">
            학교 이메일로 회원가입
        </button>
    </div>
</main>