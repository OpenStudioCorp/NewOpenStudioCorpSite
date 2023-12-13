<script>
    let rules = [
        "No griefing or stealing",
        "Be respectful to other players",
        "No cheating or hacking",
        "No spamming or excessive swearing",
        "No advertising unless it's for a shop or service on the server",
        "No offensive or inappropriate builds",
        "No offensive or inappropriate skins",
        "No offensive or inappropriate usernames",
        "No offensive or inappropriate nicknames",
        "Follow staff instructions",
        'Have fun!'
    ];
</script>

<main>
    <h2>Welcome to the official Rules of the OpenStudio minecraft server!</h2>
    <br>
    <p>These rules are subject to change at any time, so please check back often.</p>
    <br>
    <p>Breaking any of these rules will result in 3 warnings, then a ban.</p>
    <br>
    <p>If you have any questions, please contact a staff member.</p>
    <br>
    <p>Thank you for playing on the OpenStudio minecraft server!</p>
    <br>
    <h1>Server Rules</h1>
    <br>
    <ul>
        {#each rules as rule}
            <li>{rule}</li>
        {/each}
    </ul>
</main>

<style>
    h1 {
        color: #ff0000;
    }

    ul {
        list-style-type: disc;
    }

    li {
        margin-bottom: 0.5rem;
    }
</style>
