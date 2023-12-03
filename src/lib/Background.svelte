<script lang="ts">
    import { onMount } from 'svelte';
    import ArrowCollapseDownIcon from 'svelte-material-icons/ArrowCollapseDown.svelte';
    let backgroundElement:HTMLDivElement;
    let blured = false;
    let showScollDown = true;

    onMount(() => {
        window.addEventListener('scroll', () => {
            if ((window.scrollY < window.innerHeight/2 || window.scrollY > document.body.scrollHeight - 3*window.innerHeight/2)) {
                blured = false;
            } else {
                blured = true;
            }

            if (window.scrollY != 0) {
                showScollDown = false;
            } else {
                showScollDown = true;
            }
        });
    });
</script>

<div class="bg-container" class:bg-container__blur={blured} bind:this={backgroundElement}>
    <h1>Prokuma</h1>
    <h2>Dohyun Kim</h2>
    <div class="scroll-down-picture" class:scroll-down-picture__show={showScollDown}>
        <ArrowCollapseDownIcon color="white" size="2.5rem"/>
        <p>Scroll</p>
    </div>
</div>

<style lang="scss">
    .bg-container {
        position: fixed;
        display: flex;
        top: -15px;
        left: -15px;
        bottom: -15px;
        right: -15px;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        background: #666 url('/background.jpeg') no-repeat;
        background-size: cover;
        overflow: hidden;
        color: white;
        transition: filter, 0.5s;

        &__blur {
            filter: blur(15px);
        }
        h1 {
            margin: 0;
            font-size: 4.5rem;
            color: white;
        }
        h2 {
            margin: 0;
            color: #bbbbbb;
        }

        .scroll-down-picture {
            position: absolute;
            opacity: 0;
            bottom: 0;
            margin-bottom: 1rem;
            transition: opacity, 0.5s;
            align-items: center;
            flex-direction: column;
            display: flex;

            p {
                margin: 0;
                font-size: 0.8rem;
            }

            &__show {
                opacity: 1;
            }
        }
    }
</style>