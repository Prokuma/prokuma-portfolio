<script lang="ts">
    export let title = "";
</script>

<div class="section_title">
    <div class="section_icon">
        <slot />
    </div>
    {title}
</div>

<style lang="scss">
    .section_title {
        margin: 0;
        font-size: 2.5rem;
        font-weight: bold;
        vertical-align: middle;
    }

    @media (max-width: 640px) {
        .section_title {
            font-size: 1.5rem;
        }
    }

    .section_icon{
        font-weight: bold;
        vertical-align: middle;
        display: inline-block;
    }
</style>