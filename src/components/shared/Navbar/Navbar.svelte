<script>
  import { Link } from "svelte-routing"
  const toggleButtonState = () => {
    navButtonActive = !navButtonActive
  }
  const handleLinkClick = (location) => {
    navButtonActive = false
    currentLocation = location
  }
  let screenWidth = window.innerWidth
  let navButtonActive = false
  let currentLocation = "home"
</script>

<nav class="navbar">
  {#if screenWidth < 1024}
    <Link to="/" on:click={() => handleLinkClick("home")}>OpenStudio</Link>
    <button
      class={`${navButtonActive ? "active-button" : "button"}`}
      on:click={toggleButtonState}
    >
      <div class="line first-line" />
      <div class="line second-line" />
      <div class="line third-line" />
    </button>
    <div
      class={`mobile-sidebar ${
        navButtonActive ? "mobile-sidebar-visible" : null
      } ${currentLocation}`}
    >
      <a href="https://discord.gg/7cFCB8qBkf" class="join-button">Join us</a>
      <Link
        to="/"
        class="link home-link"
        on:click={() => handleLinkClick("home")}>Home</Link
      >
      <Link
        to="/about"
        class="link about-link"
        on:click={() => handleLinkClick("about")}>About</Link
      >
      <Link
        to="projects"
        class="link projects-link"
        on:click={() => handleLinkClick("projects")}>Projects</Link
      >
    </div>
  {/if}
  {#if screenWidth >= 1024}
    <Link to="/" class="logo-title" on:click={() => handleLinkClick("home")}
      >OpenStudio</Link
    >
    <div class={`nav-links ${currentLocation}`}>
      <Link
        to="/"
        class="link home-link"
        on:click={() => handleLinkClick("home")}>Home</Link
      >
      <Link
        to="/about"
        class="link about-link"
        on:click={() => handleLinkClick("about")}>About</Link
      >
      <Link
        to="projects"
        class="link projects-link"
        on:click={() => handleLinkClick("projects")}>Projects</Link
      >
    </div>
    <a href="https://discord.gg/7cFCB8qBkf" class="join-button">Join us</a>
  {/if}
</nav>

<style>
  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-inline: 1.5rem;
    margin-top: 1rem;
    font-size: 1.2rem;
    font-weight: bold;
  }
  .nav-links {
    display: flex;
    width: 30%;
    justify-content: space-around;
  }
  .line {
    width: 30px;
    height: 2px;
    background-color: var(--white);
    bottom: 5px;
    position: absolute;
    transition: all 0.3s;
  }
  .second-line {
    bottom: 10px;
  }
  .third-line {
    bottom: 15px;
  }
  .button,
  .active-button {
    position: relative;
    z-index: 2;
    width: 30px;
    height: 21px;
  }
  .active-button .line {
    top: 50%;
    left: 50%;
  }
  .active-button .first-line {
    transform: rotate(-45deg) translateY(-50%);
  }
  .active-button .second-line {
    display: none;
  }
  .active-button .third-line {
    transform: rotate(45deg) translateY(-50%);
  }
  .mobile-sidebar {
    transition: all 0.3s;
    position: absolute;
    inset: 0 0 0 100%;
    background-color: var(--darkBlue);
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    overflow-x: hidden;
  }
  .mobile-sidebar-visible {
    inset: 0;
  }
  .join-button {
    background-color: var(--white);
    color: var(--darkBlue);
    width: fit-content;
    border-radius: 10px;
    padding: 0.2rem 2rem;
  }
  :global(.link) {
    color: var(--lightGray);
  }
  .home :global(.home-link) {
    color: var(--white);
    text-decoration: underline;
  }
  .about :global(.about-link) {
    color: var(--white);
    text-decoration: underline;
  }
  .projects :global(.projects-link) {
    color: var(--white);
    text-decoration: underline;
  }
</style>
