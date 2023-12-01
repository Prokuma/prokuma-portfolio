<script lang="ts">
    import { inview } from 'svelte-inview';
    let showSection = false;

    function changed(e: CustomEvent) {
        showSection = e.detail.inView && !showSection;
    }
</script>

<section use:inview={{}} on:inview_change={changed} class="section" class:section__show={showSection}>
    <div class="container">
        <slot />
    </div>
</section>

<style lang="scss">
    @keyframes slideIn {
        0% {
            opacity: 0;
            transform: translateY(100px);
        }
        100% {
            opacity: 1;
            transform: translateY(0);
        }
    }
    .section {
        min-height: 100vh;
        padding-top: 4rem;
        color: white;

        .container {
            margin: 0 2rem;
        }

        &__show {
            animation: slideIn 0.5s forwards;
            opacity: 1;
        }

        opacity: 0;
    }
</style>