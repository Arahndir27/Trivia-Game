<template>
  <div class="container">
    <div class="trivia">
      {{this.question.statement}}
    </div>
    <div class="buttons">
      <button id="true">True</button>
      <button id="false">False</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "TriviaView",
  data() {
    return {
      question: {},
      answered: false,
    };
  },
  methods: {
    setQuestion() {
      //Chose a random trivia from unused ones
      //Get length and get a random index
      let size = this.unUsedTrivia.length;
      let index = Math.floor(Math.random() * size);
      this.question = this.unUsedTrivia[index];
    },
    checkAnswer(ans) {
      if (ans) {
        console.log("temp");
      }
    },
  },
  computed: {
    unUsedTrivia() {
      return this.$root.$data.trivia.filter((question) => {
        return !question.used;
      });
    },
  },
  //This will run on page load
  beforeMount() {
    this.setQuestion();
  },
};
</script>

<style scoped>
  .container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin: 10px;
    height: 100%;
  }

  .buttons {
    display: flex;
    flex-direction: row;
  }

  #true {

  }

  #false {

  }
</style>