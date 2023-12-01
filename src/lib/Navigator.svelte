<script lang="ts">
    import { onMount } from "svelte";
    import { tweened } from "svelte/motion";
    import { cubicOut } from "svelte/easing";
    import HomeIcon from "svelte-material-icons/Home.svelte";

    let sections: {
        title: string,
        active: boolean,
        icon: HTMLElement,
        element: HTMLElement
    }[] = [];


    let scrollTop = tweened(0, {
        duration: 500,
        easing: cubicOut
    });
    
    let topElement:HTMLElement | null = null;
    let isTopPage = true;

    onMount(() => {
        topElement = document.querySelector<HTMLElement>('body') as HTMLElement;
        let newSections: {
            title: string,
            active: boolean,
            icon: HTMLElement,
            element: HTMLElement
        }[] = [];
        document.querySelectorAll<HTMLElement>('.section').forEach((element, index) => {
            newSections.push({
                title: element.querySelector('.section_title')?.textContent || '',
                active: false,
                icon: element.querySelector('.section_icon') as HTMLElement,
                element: element
            });
            sections = newSections;
        });

        window.addEventListener('scroll', () => {
            newSections = [...sections];
            for (let i = 0; i < newSections.length-1; i++) {
                if (i === 0) {
                    isTopPage = newSections[i].element.offsetTop > window.scrollY + 1;
                }
                if (newSections[i].element.offsetTop <= window.scrollY + 1 && newSections[i + 1].element.offsetTop > window.scrollY + 1) {
                    newSections[i].active = true;
                } else {
                    newSections[i].active = false;
                }
            }
            newSections[newSections.length-1].active = newSections[newSections.length-1].element.offsetTop <= window.scrollY + 1;
            sections = newSections;
        });

        scrollTop.subscribe(() => {
            window.scrollTo(0, $scrollTop);
        });
    });

    function scrollTo(element: HTMLElement) {
        scrollTop.set(document.scrollingElement?.scrollTop || document.body.scrollTop, {
            duration: 0
        });
        scrollTop.set(element.offsetTop);
    }
</script>

<div class="navigator">
    <button class="navigate" on:click={() => topElement && scrollTo(topElement)}>
        <HomeIcon />
        <div class="navigate_title" class:navigate_title__active={isTopPage}>
            Home
        </div>
    </button>
    {#each sections as section}
        <button class="navigate" on:click={() => scrollTo(section.element)}>
            {@html section.icon.outerHTML}
            <div class="navigate_title" class:navigate_title__active={section.active}>
                {section.title}
            </div>
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
        background-color: none;
        padding-bottom: 1rem;

        .navigate {
            margin: 0.6rem 0;
            padding :0 0.3rem;
            font-size: 1.3rem;
            font-weight: bold;
            cursor: pointer;
            transition: padding-top 0.2s;
            border: none;
            background: none;
            color: #ffffff;
            vertical-align: middle;
            backdrop-filter: blur(30px);

            .navigate_title {
                display: none;
                &__active {
                    display: inline-block;
                    color: #cccccc;
                }
            }

            &:last-child {
                border-right: none;
            }

            &:hover {
                padding-top: 0.2rem;
                .navigate_title {
                    transition: padding-top 0.5s;
                    display: inline-block;
                }
            }
        }
    }
</style>