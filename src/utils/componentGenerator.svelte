<script>
    export let componentProperties;
    import {getComponent} from '$utils/componentMap.js'
    let componentName = getComponent(componentProperties.componentName);
</script>

{#if componentName}
    <svelte:component this={componentName} {componentProperties} />
{/if}