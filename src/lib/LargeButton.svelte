<script>
	import { goto } from '$app/navigation';

    export let bgColor = "bg-green-500";
    export let textColor = "text-white";
    export let isDisabled = false;
    export let link = "";
</script>

<div class="w-full font-bold text-lg">
    <button disabled={isDisabled} class="{bgColor} {textColor} relative py-3 w-full rounded-lg" on:click={()=>goto(link)}>
        <slot />
    </button>
</div>