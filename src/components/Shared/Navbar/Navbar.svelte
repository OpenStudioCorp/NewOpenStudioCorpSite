<script lang="ts">
  import { onMount } from "svelte"

  const toggleButtonState = () => {
    navButtonActive = !navButtonActive
  }
  let screenWidth = 0;
  
  onMount(() => { screenWidth = window.innerWidth });
  let navButtonActive = false
  /*
  window.addEventListener("hashchange", () => {
    let url = $location.replace("/", "")
    currentLocation = url === "" ? "home" : url
  })
  */
  // let url = $location.replace("/", "")
  let url = ""
  let currentLocation = url === "" ? "home" : url
</script>

<nav class="navbar">
  {#if screenWidth < 1024}
    <a href="/">OpenStudio</a>
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

      <a
        href="/"
        on:click={() => {
          navButtonActive = false
          currentLocation = "home"
        }}
        class="link home-link">Home</a
      >
      <a
        href="/about"
        on:click={() => {
          navButtonActive = false
          currentLocation = "about"
        }}
        class="link about-link">About</a
      >
      <a
        href="/projects"
        on:click={() => {
          navButtonActive = false
          currentLocation = "projects"
        }}
        class="link projects-link"
        >Project
      </a>
    </div>
  {/if}
  {#if screenWidth >= 1024}
    <a href="/">OpenStudio</a>
    <div class={`nav-links ${currentLocation}`}>
      <a
        href="/"
        class="link home-link"
        on:click={() => (currentLocation = "home")}>Home</a
      >
      <a
        href="/about"
        class="link about-link"
        on:click={() => (currentLocation = "about")}>About</a
      >
      <a
        href="/projects"
        class="link projects-link"
        on:click={() => (currentLocation = "projects")}>Project</a
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
    z-index: 4;
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
    z-index: 3;
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
  .link {
    color: var(--lightGray);
  }
  .home .home-link {
    color: var(--white);
    text-decoration: underline;
  }
  .about .about-link {
    color: var(--white);
    text-decoration: underline;
  }
  .projects .projects-link {
    color: var(--white);
    text-decoration: underline;
  }
</style>
