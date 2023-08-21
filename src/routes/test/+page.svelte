<script>
        import { toastMessage, API_BASE_URL } from '$lib/stores';


        async function action() {
        const response = await fetch("http://localhost:8080/chat", {
			method: 'GET'
		});

        if(response.ok) {
            response.json().then(data => {
                if(data) {
                    toastMessage.set('환영합니다');
                }
            });
        }
		if (!response.ok) {
            response.json().then(data => {
                toastMessage.set(data.message)
            });
		}
    }
</script>

<button on:click={action}>
    action
</button>