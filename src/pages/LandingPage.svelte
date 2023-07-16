<script lang="ts">
  import Card from "../components/Shared/Card/Card.svelte"
</script>

<header>
  <h1>
    Let's Make <span class="colored-word">Changes</span> <br />Together,
    AnyWhere
  </h1>
  <p class="header-description">
    open studio is a community for open source developers from all over the
    world
  </p>
  <div class="buttons">
    <button>Join us</button>
    <a href="#">Explore more</a>
  </div>
  <img src="/assets/world.svg" alt="world map" />
</header>
<main>
  <div class="main-texts">
    <h2><span>Open Source</span> is the way we make Impact</h2>
    <p>
      We are a community of open source developers, from across the world. We
      Chat, Learn, Share, and Build with each other
    </p>
    <a href="#">Want to Join?</a>
  </div>
  <div class="projects">
    <h2>What have we built?</h2>
    <div>
      <Card
        cardData={{
          image: "image",
          title: "titleweeeeeeeeweeef efefe efe",
          link: "link",
          size: "big",
          description: "description",
        }}
      />
      <div />
      <div />
      <div />
    </div>
    <button>View All</button>
  </div>
</main>

<style>
  .colored-word {
    color: var(--red);
  }
  h1 {
    font-size: 2rem;
    font-weight: bold;
    margin-top: 6rem;
    margin-inline: 0.2rem;
  }
  .header-description {
    color: var(--lightGray);
    margin-top: 2rem;
    text-wrap: balance;
  }
  .buttons {
    margin-top: 2rem;
  }
  .buttons button {
    margin-right: 1rem;
    background-color: var(--red);
    padding-inline: 2rem;
    padding-block: 0.2rem;
    border-radius: 10px;
    font-weight: bold;
    font-size: 1.2rem;
  }
  .buttons a {
    text-decoration: underline;
  }
  header img {
    display: none;
  }
  h2 {
    margin-top: 4rem;
    margin-inline: 0.2rem;
    font-weight: bold;
    font-size: 1.5rem;
  }
  h2 span {
    color: var(--red);
    position: relative;
    z-index: 2;
    margin-right: 3px;
  }
  h2 span:before {
    content: "";
    background-color: var(--white);
    width: 100%;
    height: 100%;
    left: -1px;
    z-index: -1;
    position: absolute;
    padding: 3px;
    transform: skew(-3deg) rotate(-3deg);
  }
  .main-texts p {
    text-wrap: balance;
    margin-top: 2rem;
    margin-bottom: 1rem;
    color: var(--lightGray);
  }
  .main-texts a {
    color: var(--red);
    text-decoration: underline;
    font-size: 1.2rem;
  }
</style>
