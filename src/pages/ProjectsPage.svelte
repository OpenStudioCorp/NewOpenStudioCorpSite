<script lang="ts">
    
    import { onMount } from "svelte"


    // TODO:
    // Projects loading

    const HASHTAGS_IN_PROGRESS_BAR = 35;

    // [0-1]
    let loadingProgress = 0;
    
    $: hashesToFill = Math.floor(loadingProgress * HASHTAGS_IN_PROGRESS_BAR);

    const t = () => {
        if (loadingProgress >= 1) {
            clearInterval(this);
            return;
        }

        loadingProgress += 1/HASHTAGS_IN_PROGRESS_BAR;
    }

    onMount(() => {
        setInterval(t, 1000);
    })

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

        --horizontal-margin: 2em;
        --vertical-margin: 4em;
        --search-icon-size: 15px;

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
    }

    .search {
        display: flex;
        width: var(--full-width);
        margin: var(--vertical-margin) var(--horizontal-margin) var(--vertical-margin) var(--horizontal-margin);
        border-bottom: 1px solid var(--lightGray);
    }

    .search > img {
        width: var(--search-icon-size);
        filter: grayscale(1) invert(1) brightness(0.5);
        -webkit-filter: grayscale(1) invert(1) brightness(0.5);
    }

    .search > input {
        width: calc(100% - var(--search-icon-size));
        background-color: transparent;
        border: none;
        color: white;
    }

    @media screen and (max-width: 1024px) {
        main {
            font-size: 40px;
        }
    }

    @media screen and (max-width: 768px) {
        main {
            font-size: 24px;
        }
    }
    
    @media screen and (max-width: 640px) {
        main {
            font-size: 18px;
        }
    }

    @media screen and (max-width: 320px) {
        main {            
            font-size: 12px;
        }
    }
    
    

</style>
