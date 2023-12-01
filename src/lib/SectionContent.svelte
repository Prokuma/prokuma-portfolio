<script lang="ts">
</script>

<div class="content">
    <slot />
</div>

<style lang="scss">
    .content {
        font-size: 1.3rem;
        margin-left: 1rem;
        margin-top: 0.5rem;
    }

    @media (max-width: 640px) {
        .content {
            font-size: 1rem;
            margin-left: 0.5rem;
            margin-top: 0.5rem;
        }
    }
</style>

