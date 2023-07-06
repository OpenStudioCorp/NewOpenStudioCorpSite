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

<nav class="mobile-nav">
  <Link to="/">OpenStudio</Link>
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
    }`}
  >
    <a href="https://discord.gg/7cFCB8qBkf" class="join-button">Join us</a>
    <Link
      to="/"
      class={`link ${currentLocation === "home" ? "active-link" : ""}`}
      on:click={() => handleLinkClick("home")}>Home</Link
    >
    <Link
      to="/about"
      class={`link ${currentLocation === "about" ? "active-link" : ""}`}
      on:click={() => handleLinkClick("about")}>About</Link
    >
    <Link
      to="projects"
      class={`link ${currentLocation === "projects" ? "active-link" : ""}`}
      on:click={() => handleLinkClick("projects")}>Project</Link
    >
  </div>

  <!-- 
  <div>
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
    <Link to="projects">Project</Link>
  </div>
  <a href="https://discord.gg/7cFCB8qBkf">Join us</a>
  -->
</nav>

<style>
  .mobile-nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-inline: 1.5rem;
    margin-top: 1rem;
    font-size: 1.2rem;
    font-weight: bold;
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
    padding: 0.5rem 2rem;
  }
  :global(.link) {
    color: var(--lightGray);
  }
  :global(.active-link) {
    color: var(--white);
    text-decoration: underline;
  }
</style>
