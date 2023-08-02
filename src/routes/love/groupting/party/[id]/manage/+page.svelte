<script>
    import Nav from "$lib/Nav.svelte";
    import Icon from "$lib/Icon.svelte";
    import { goto } from "$app/navigation";

    import { page } from "$app/stores";
    const partyId = $page.params.id;


</script>


<header class="relative bg-white h-14 items-center sticky top-0 border-b flex z-10">
    <button
        on:click={() => {
            goto("/love/groupting");
        }}
            class="absolute p-4 text-gray-600">
            <Icon icon="arrow-left" size={24} />
        </button>
        <div class="text-center w-full font-bold">파티 관리</div>
</header>