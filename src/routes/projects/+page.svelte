<script lang="ts">
    
    import { onMount } from "svelte"
    import Card from "../../components/Shared/Card/Card.svelte"


    // TODO:
    // Projects loading

    const TEST = true;
    const HASHTAGS_IN_PROGRESS_BAR = 35;
    const MAX_QUERY_LENGTH = 30;

    // [0-1]
    let loadingProgress = 0;
    let searchQuery: string;
    
    $: hashesToFill = Math.floor(loadingProgress * HASHTAGS_IN_PROGRESS_BAR);

    $: if (searchQuery != undefined) { // ensures triggering on variable change
        let trimmedQuery = searchQuery.trim();
        if (trimmedQuery.length > MAX_QUERY_LENGTH) {
            trimmedQuery = trimmedQuery.substring(0, 30);
        }

        console.log("searching for: ", trimmedQuery);
    }

    if (TEST) {
    
        const t = () => {
            if (loadingProgress >= 1) {
                clearInterval(this);
                return;
            }

            loadingProgress += 1/HASHTAGS_IN_PROGRESS_BAR;
        }

        onMount(() => {
            setInterval(t, 1000);
        });

    }

</script>

<main>

    <div class="projects-load-label">
        <p><span class="red-text">$</span> projects load --all</p>
        <p>
            |__ waiting for your contribution
            {Math.round(loadingProgress * 100)}%
        </p>
    </div>

    <div class="projects-load-bar">
        [
        <span class="red-text">
            {#each Array(hashesToFill) as _}#{/each}
        </span>
        <span class="invisible-text">
            {#each Array(HASHTAGS_IN_PROGRESS_BAR - hashesToFill) as _}#{/each}
        </span>
        ]
    </div>

    <div class="search">
        <img src="./assets/MiSearch.svg" alt="" />
        <input
            type="text"
            placeholder="Search..."
            bind:value={searchQuery}
        />
    </div>

    <div class="projects-list">

        <Card
            cardData={{
                image: "",
                title: "Project one",
                link: "",
                size: 'big',
                description: "tralala"
            }}
        />

        <Card
            cardData={{
                image: "",
                title: "Project two",
                link: "",
                size: 'big',
                description: "tralala"
            }}
        />

        <Card
            cardData={{
                image: "",
                title: "Project three",
                link: "",
                size: 'big',
                description: "tralala"
            }}
        />

    </div>

</main>

<style>

    main {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        height: 100%;

        --full-width: calc(100% - 2 * var(--horizontal-margin));
    }

    .red-text {
        color: var(--red);
    }

    .invisible-text {
        color: transparent;
    }
    
    .projects-load-label {
        width: var(--full-width);
        margin: calc(var(--vertical-margin) + 4em) var(--horizontal-margin) var(--vertical-margin) var(--horizontal-margin);
        text-align: left;
    }
    
    .projects-load-bar {
        margin: var(--vertical-margin) var(--horizontal-margin) var(--vertical-margin) var(--horizontal-margin);
        white-space: nowrap;
    }

    .search {
        display: flex;
        width: var(--full-width);
        margin: var(--vertical-margin) var(--horizontal-margin) var(--vertical-margin) var(--horizontal-margin);
        border-bottom: 1px solid var(--lightGray);
    }

    .search > img {
        width: 1em;
        filter: grayscale(1) invert(1) brightness(0.5);
        -webkit-filter: grayscale(1) invert(1) brightness(0.5);
    }

    .search > input {
        width: 100%;
        background-color: transparent;
        border: none;
        color: white;
    }

    .projects-list {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: var(--card-gap);
        width: var(--full-width);
        padding-bottom: calc(2 * var(--vertical-margin));
        margin: var(--vertical-margin) var(--horizontal-margin) var(--vertical-margin) var(--horizontal-margin);
    }

    @media screen and (min-width: 320px) {
        main {
            font-size: 12px;
            --horizontal-margin: 2em;
            --vertical-margin: 4em;
            --card-gap: 2em;
        }
    }

    @media screen and (min-width: 640px) {
        main {
            font-size: 24px;
            --horizontal-margin: 5em;
            --vertical-margin: 5em;
            --card-gap: 4em;
        }
    }

    @media screen and (min-width: 768px) {
        main {
            font-size: 32px;
            --horizontal-margin: 4em;
            --vertical-margin: 5em;
            --card-gap: 5em;
        }
    }

    @media screen and (min-width: 1024px) {
        main {
            font-size: 24px;
            --horizontal-margin: 20em;
            --vertical-margin: 3em;
            --card-gap: 5em;
        }
    }
    
</style>
