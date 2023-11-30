<script lang="ts">
    import { onMount } from "svelte";
    import { tweened } from "svelte/motion";
    import { cubicOut } from "svelte/easing";

    let sections: {
        title: string,
        element: HTMLElement
    }[] = [];


    let scrollTop = tweened(0, {
        duration: 500,
        easing: cubicOut
    });

    onMount(() => {
        let topElement = document.querySelector<HTMLElement>('body') as HTMLElement;
        let newSections = [{
            title: 'Top',
            element: topElement
        }];
        document.querySelectorAll<HTMLElement>('.section').forEach((element, index) => {
            newSections.push({
                title: element.querySelector('.section_title')?.textContent || '',
                element: element
            });
        });

        scrollTop.subscribe(() => {
            window.scrollTo(0, $scrollTop);
        });
        sections = newSections;
    });

    function scrollTo(element: HTMLElement) {
        scrollTop.set(document.scrollingElement?.scrollTop || document.body.scrollTop, {
            duration: 0
        });
        scrollTop.set(element.offsetTop);
    }
</script>

<div class="navigator">
    {#each sections as section}
        <button class="navigate" on:click={() => scrollTo(section.element)}>
            {section.title}
        </button>
    {/each}
</div>

<style lang="scss">
    .navigator {
        position: fixed;
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: center;
        top: 0;
        background-color: #ffffff;
        padding-bottom: 1rem;

        .navigate {
            margin: 0.6rem 0;
            padding :0 0.3rem;
            font-size: 1.2rem;
            font-weight: bold;
            cursor: pointer;
            transition: padding-top 0.2s;
            border: none;
            background: none;

            &:last-child {
                border-right: none;
            }
            &:hover {
                padding-top: 0.2rem;
            }
        }
    }
</style>