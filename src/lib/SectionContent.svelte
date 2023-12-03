<script lang="ts">
    export let align = "left";
</script>

<div class="content" style="--text-align: {align}">
    <slot />
</div>

<style lang="scss">
    .content {
        display: block;
        font-size: 1.3rem;
        @if align == "left" {
            margin-left: auto;
            margin-right: 1rem;
            text-align: left;
            float: left;
        } @else if align == "right" {
            margin-left: 1rem;
            margin-right: auto;
            text-align: right;
            float: right;
        }
        margin-top: 0.5rem;
        margin-bottom: 0.5rem;
        border-radius: 5px;
        background-color: #5558;
        backdrop-filter: blur(5px);
        width: fit-content;
        padding: 1.5rem;
        text-align: var(--text-align);
        float: var(--text-align);
    }

    @media (max-width: 640px) {
        .content {
            font-size: 1rem;
            margin: 0.5rem 1rem;
            width: calc(100% - 5rem);
            max-width: calc(100% - 5rem);
            min-width: calc(100% - 5rem);
        }
    }
</style>

