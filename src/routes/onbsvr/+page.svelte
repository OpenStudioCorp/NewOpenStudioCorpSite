<script>
    export let loadingProgress = 5;
    export let selectedPicture = '/pngs/2.png'; // Set the initial value to the first picture
    export let pictures = ['/pngs/1.png','/pngs/2.png','/pngs/3.png','/pngs/4.png','/pngs/5.png','/pngs/6.png','/pngs/7.png',];
    export let currentIndex = 0;

    /**
     * @param {{ target: { value: string; }; }} event
     */
    function handlePictureChange(event) {
        selectedPicture = event.target.value;
    }

    function nextPicture() {
        currentIndex = (currentIndex + 1) % pictures.length;
        selectedPicture = pictures[currentIndex];
    }

    function previousPicture() {
        currentIndex = (currentIndex - 1 + pictures.length) % pictures.length;
        selectedPicture = pictures[currentIndex];
    }
</script>

<main>
    <div style="z-index:auto">

        <h1><img src="/pngs/logo.png" alt=""></h1>
        <br>
        
        <div class="w3-card">
            
            <p>Welcome to the OpenNoteBlockStudioVR Website!</p>
            <p>OpenNoteBlockStudioVR is a Music production software that allows you to make Music with NoteBlocks.</p>
            <p>It's compatible with the Desktop version of <a href="opennbs.org">OpenNoteBlockStudio</a></p>
        </div>
        
        <br>
        
        <p>Current progress of the Software</p>
        <div class="w3-border " style="color: antiquewhite;">
            <div class="w3-container w3-blue w3-center" style="height:24px;width:{loadingProgress}%">{loadingProgress}%</div>
        </div>
        
        <h2>Game Progress Pictures</h2>
        
        {#if selectedPicture}
        <img src={selectedPicture} alt="Game Progress Picture" aria-hidden="true" />
        {/if}
        
        <div>
            <button class="w3-button w3-blue w3-border w3-padding" on:click={previousPicture}>Previous</button>
            <button class="w3-button w3-blue w3-border w3-padding" on:click={nextPicture}>Next</button>
        </div>
        
    </div>
    </main>
    