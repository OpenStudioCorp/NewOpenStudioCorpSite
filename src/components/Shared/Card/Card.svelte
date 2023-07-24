<script lang="ts">
  type props = {
    image: string
    title: string
    link: string
  } & (
    | {
        size: "small"
        alignment?: "top" | "middle" | "bottom"
      }
    | {
        size: "big"
        description: string
      }
  )
  export let cardData: props
</script>

<div
  class={`${cardData.size} card ${
    cardData.size === "small" ? cardData.alignment : ""
  }`}
>
  <div class="image-container">
    <img src={cardData.image} alt={cardData.title} />
  </div>
  <div class="info-container">
    <a href={cardData.link} class="title">{cardData.title}</a>
    <p>{cardData.size === "big" ? cardData.description : ""}</p>
  </div>
</div>

<style>
  .card {
    background: linear-gradient(
      135deg,
      rgba(255, 255, 255, 0.2),
      rgba(255, 255, 255, 0.1)
    );
    border-radius: 20px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.2);
    transition: all 0.3s;
  }
  .small {
    width: 250px;
    height: 320px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .image-container {
    margin-block: 2rem;
    width: 150px;
    height: 150px;
    overflow: hidden;
    border-radius: 20px;
  }
  img {
    transition: all 0.3s;
  }
  .title {
    font-size: 1.5rem;
    font-weight: bold;
  }
  .card:hover {
    transform: scale(105%);
  }
  img:hover {
    transform: scale(110%);
  }
  .big {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 900px;
    margin-inline: auto;
  }
  .big .info-container {
    text-align: center;
    margin-inline: auto;
    margin-block: 2rem;
  }
  .info-container p {
    color: var(--lightGray);
  }
  @media screen and (min-width: 640px) {
    .big {
      flex-direction: row;
    }
    .big .info-container {
      text-align: left;
      margin-left: 2rem;
      align-self: flex-start;
    }
    .big .image-container {
      width: 200px;
      height: 200px;
      margin-left: 4rem;
    }
  }
  @media screen and (min-width: 1024px) {
    .top {
      align-self: self-start;
      margin-top: 1rem;
    }
    .middle {
      align-self: center;
    }
    .bottom {
      align-self: self-end;
      margin-bottom: 1rem;
    }
  }
</style>
