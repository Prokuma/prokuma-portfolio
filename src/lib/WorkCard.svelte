<script lang="ts">
    export let href = "";
    export let imgSrc = "dummy.svg";
    export let title = "";
    export let description = "";
    let onHover = false;
</script>

<button class="work-card"
    on:click={() => window.open(href)}
    on:mouseenter={() => onHover = true}
    on:mouseleave={() => onHover = false}
>
    <div class="work-card__image">
        <img src={imgSrc} alt="thumnail">
    </div>
    <div class="work-card__description" class:hoverd={onHover}>
        <p class="title">{title}</p>
        <p>{description}</p>
    </div>
</button>

<style lang="scss">
    .work-card {
        position: relative;
        overflow: hidden;
        transition: all .5s cubic-bezier(0,1,0,1);
        border-radius: 5px;
        box-shadow: silver 2px 2px 10px;
        max-height: 30em;
        flex-basis: 300px;
        flex-grow: 1;
        align-self: stretch;
        cursor: pointer;

        .title {
            font-size: 1.8em;
            font-weight: bold;
            margin-bottom: 0;
        }

        &__image {
            img {
                width: 100%;
                @media (max-width: calc(width - 2rem)) {
                    width: calc(100vw - 2rem);
                }
                object-fit: cover;
            }
            overflow: hidden;
        }

        &__description {
            text-align: left;
            position: absolute;
            width: 100%;
            bottom: 0;
            background: linear-gradient(#fff0 0%, #fffa 20%, #fff 100%);
            backdrop-filter: blur(2px);
            padding: 1rem;
            transition: min-height .3s;
            min-height: 0%;
        }

        .hoverd {
            min-height: 50%;
        }
    }
</style>