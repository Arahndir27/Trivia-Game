<template>
  <div class="about">
    <h1>About the Creators</h1>

    <div class="about-photo">
      <img src="../assets/us.jpg" class="img-fluid" />
    </div>

    <div class="about-content">
      <p>
        Meet Eric and McKayla Pressler! They love all things computers and
        games. While they were dating, they went bowling and their team name was
        "Fearsome Fables." The same stuck and they still use that as their main
        team name.
      </p>

      <p>
        Eric is a Cybersecurity Major at BYU, minoring in Computer Science. He
        particularly likes Star Wars, video games, and watching movies with his
        sweetheart.
      </p>

      <p>
        McKayla is a Computer Science major with an emphasis in Software
        Engineering. She is also minoring in Creative Writing. She loves to
        code, but when she isn't coding, you can find her reading, watching
        movies, or helping others learn to code.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "About-view",
};
</script>

<style scoped>
  .about {
    justify-content: center;
    padding: 0 10px;
  }

  .about-photo img{
    width: 40%;
    height: auto;
  }

  .about-content {
    justify-content: left !important;
    text-align: left;
    padding: 10px;
  }
</style>