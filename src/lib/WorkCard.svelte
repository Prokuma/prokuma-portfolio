<script lang="ts">
    export let href = "";
    export let imgSrc = "dummy.svg";
    export let title = "";
    export let yearMonth = "";
    export let description = "";
    export let tags: string[] = [];
    let onHover = false;
</script>

<button class="work-card"
    on:click={() => window.open(href)}
    on:mouseenter={() => onHover = true}
    on:mouseleave={() => onHover = false}
>
    <img src={imgSrc} alt="thumnail" class="work-card__image">
    <div class="work-card__description" class:hoverd={onHover}>
        <p class="title">{title}<span>{yearMonth}</span></p>
        <p>{description}</p>
        <div class="tags">
            {#each tags as tag}
                <span class="tag">{tag}</span>
            {/each}
        </div>
    </div>
</button>

<style lang="scss">
    .work-card {
        position: relative;
        overflow: hidden;
        transition: all .5s cubic-bezier(0,1,0,1);
        border-radius: 5px;
        box-shadow: silver 2px 2px 10px;
        max-height: 22rem;
        align-self: stretch;
        cursor: pointer;
        width: calc(100% / 3 - 2rem);
        flex-shrink: 0;

        @media (max-width: 960px) {
            width: calc(100% / 2 - 1.5rem);
        }
        @media (max-width: 640px) {
            width: calc(100%);
        }

        .title {
            font-size: 1.5rem;
            font-weight: bold;
            margin-bottom: 0;
            color: #000;
            span {
                font-size: 1rem;
                margin-left: 0.5rem;
                font-weight: normal;
                color: #777;
            }
        }

        .tags {
            display: flex;
            flex-wrap: wrap;
            margin-top: 0.5rem;
            .tag {
                background-color: #aaa;
                color: #fff;
                padding: 0.2rem 0.5rem;
                border-radius: 5px;
                margin-right: 0.5rem;
                margin-bottom: 0.5rem;
                font-size: 0.8rem;
            }
        }

        &__image {
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: top;
            overflow: hidden;
        }

        &__description {
            text-align: left;
            position: absolute;
            width: 100%;
            bottom: 0;
            background: linear-gradient(#fff0 0%, #fff7 20%, #fff 100%);
            backdrop-filter: blur(2px);
            padding: 1rem;
            transition: min-height .3s;
            min-height: 0%;
            color: #000;
        }

        .hoverd {
            min-height: 50%;
        }
    }
</style>