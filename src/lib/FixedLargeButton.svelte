<script>
    import LargeButton from './LargeButton.svelte';
    export let isDisabled = false;
    export let bgColor = "bg-rose-400";

</script>

<div class="fixed bottom-0 w-full">
  <LargeButton isDisabled={isDisabled} bgColor={bgColor}><slot></slot></LargeButton>
</div>