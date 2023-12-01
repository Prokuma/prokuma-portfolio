<script lang="ts">
    export let href = "";
    export let withText = false;
</script>

<a href="{href}" class="icon-link" class:icon-link__withText={withText}>
    <slot />
</a>

<style lang="scss">
    .icon-link {
        color: white;
        text-decoration: none;
        margin: 0 0.1rem;
        padding: 0.1rem;
        vertical-align: middle;

        &__withText {
            text-decoration: underline;
        }
    }
</style>