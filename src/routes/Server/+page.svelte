<script>
    import { onMount } from 'svelte';

    let serverLink = 'charliesan.ddns.net';
    let copied = false;
    let currentImageIndex = 0;
    let images = [
        'image1.jpg',
        'image2.jpg',
        'image3.jpg'
    ];

    function copyLink() {
        navigator.clipboard.writeText(serverLink);
        copied = true;
    }

    function goBack() {
        currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    }

    function goForward() {
        currentImageIndex = (currentImageIndex + 1) % images.length;
    }

    onMount(() => {
        setTimeout(() => {
            copied = false;
        }, 3000);
    });
</script>

<main>
    <h1>Minecraft!</h1>
    <p>Welcome to the official OpenStudio Minecraft server page!</p>
    <p>Using the latest version of Minecraft, 1.20.2</p>
    <br>
    <p>Please note that in order to join the server, you must submit a form application and be in the Discord server.</p>
    <p>You can join the server by hitting the "Join Us" button <a href="/">here</a>.</p>
    <br>
    <button><a href="https://forms.gle/8sxkLWQwN4arif9N7">Submit your Application here</a><br></button>
    <br>
    <br>
    <!-- Image carousel !-->
    <p>Then, after that, you can add the server IP to your Minecraft instance and wait for your application to be accepted.</p>

    <p>Server IP: {serverLink}</p>
    <button on:click={copyLink}>{copied ? 'Link Copied!' : 'Copy Link'}</button>
    <br>
    <br>
    <p>you can read the server rules</p>
    <h2><a href="/Server/Minecraft">Server rules</a></h2>

    <!-- <div>
        <button on:click={goBack}>Back</button>
        <img src={images[currentImageIndex]} alt="Server Screenshot" />
        <button on:click={goForward}>Forward</button>
    </div> !-->
</main>

<style>
    main {
        text-align: center;
        padding: 20px;
    }

    h1 {
        font-size: 32px;
        color: #00aaff;
    }

    p {
        font-size: 18px;
        color: #ffffff;
    }
    a {
        color: #ff00ff;
    }
    h2 {
        font-size: 24px;
        color: #ff0000;
    }
    button {
        background-color: #1800a3;
        color: #00ff73;
        border: none;
        border-radius: 5px;
        padding: 10px;
        font-size: 18px;
        cursor: pointer;
    }
    button:hover {
        background-color: #ffffff;
    }
    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
</style>
