<script>
	import { goto } from '$app/navigation';

    export let bgColor = "bg-rose-400";
    export let textColor = "text-white";
    export let isDisabled = false;
    export let link = "";
</script>

<div class="w-full">
    <button disabled={isDisabled} class="{bgColor} {textColor} relative py-3 w-full rounded-lg" on:click={()=>goto(link)}>
        <slot />
    </button>
</div>