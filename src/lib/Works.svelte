<div class="work-list">
    <slot />
</div>

<style lang="scss">
    .work-list {
        display: flex;
        gap: 3rem;
        margin: 0 auto;
        padding-bottom: 0.3rem;
        flex-direction: row;
        width: 100%;
        overflow-x: auto;

        &::-webkit-scrollbar {
            height: 5px;
        }

        &::-webkit-scrollbar-thumb {
            background: #505050;
            border-radius: 5px;
        }

        &::-webkit-scrollbar-track {
            background: #808080;
            border-radius: 5px;
        }
    }
</style>