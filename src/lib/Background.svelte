<script lang="ts">
    import { onMount } from 'svelte';
    let backgroundElement:HTMLDivElement;
    let blured = false;
    let showScollDown = true;

    onMount(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 0 && !blured) {
                backgroundElement.classList.add('blured');
                blured = true;
            } else if (window.scrollY === 0 && blured) {
                backgroundElement.classList.remove('blured');
                blured = false;
            }
        });

        if (!(document.body.scrollTop)) {
            showScollDown = false;
        } else {
            showScollDown = true;
        }
    });
</script>

<div class="bg-container" class:bg-container__blur={blured} bind:this={backgroundElement}>
    <h1>Prokuma</h1>
    <h2>Dohyun Kim</h2>
    <div class="scroll-down-picture" class:scroll-down-picture__show={showScollDown}>
        <img src="/arrow.svg" alt="Scroll down" />
    </div>
</div>

<style lang="scss">
    .bg-container {
        position: fixed;
        display: flex;
        width: 100vw;
        height: 100vh;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        
        transition: filter, 0.5s;

        &__blur {
            filter: blur(10px);
            color: #808080;
        }
        h1 {
            margin: 0;
            font-size: 4.5rem;
        }
        h2 {
            margin: 0;
            color: #808080;
        }

        .scroll-down-picture {
            position: absolute;
            bottom: 0;
            opacity: 0;
            margin-bottom: 1rem;
            transition: opacity, 0.2s;

            &__show {
                opacity: 1;
            }

            img {
                width: 10rem;
            }
        }
    }
</style>