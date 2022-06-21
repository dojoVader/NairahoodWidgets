
<script lang="ts">
    import {onMount} from "svelte";

    onMount(() => {
        console.log(`
        ************************************************
        ** Nairaland is now powered by NLExtendIt.....**
        ************************************************`)
    });

</script>

<style>
    div.notice{
        position: fixed;
        top: 0px;
        background: #d8d8d8;
        padding: 0.5%;
        text-decoration: blink;
        color: red;
    }
    span.tag{
        padding: 2%;
        border: 1px solid #DEDEDE;
    }
</style>

<div class="notice">
    Nairaland is now powered by <span class="tag">NLExtendIt extension !</span>
</div>
