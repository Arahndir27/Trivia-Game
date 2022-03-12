<template>
  <div class="container">
    <div id="score">Correct Answers: {{ this.$root.$data.numCorrect }}</div>
    <div class="trivia">
      {{ this.question.statement }}
    </div>
    <div class="ans-buttons">
      <!--True Button-->
      <button
        @click="checkAnswer(true)"
        id="true"
        class="button-82-pushable"
        role="button"
      >
        <span class="button-82-shadow"></span>
        <span class="true-button-82-edge"></span>
        <span class="true-button-82-front text"> TRUE </span>
      </button>
      <!--False Button-->
      <button
        @click="checkAnswer(false)"
        id="false"
        class="button-82-pushable"
        role="button"
      >
        <span class="button-82-shadow"></span>
        <span class="false-button-82-edge"></span>
        <span class="false-button-82-front text"> FALSE </span>
      </button>
    </div>
    <div v-if="answered">
      <div>
        {{ this.question.info }}
      </div>
      <!--Next Button-->
      <button
        @click="setQuestion()"
        id="next"
        class="button-82-pushable"
        role="button"
      >
        <span class="button-82-shadow"></span>
        <span class="next-button-82-edge"></span>
        <span class="next-button-82-front text"> NEXT </span>
      </button>
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
      this.answered = false;
    },
    checkAnswer(ans) {
      //Mark question as used
      //Find index of question
      let index = this.$root.$data.trivia.indexOf(this.question);
      if (index === -1) {
        console.log("ERROR!!!");
      }
      else {
        this.$root.$data.trivia[index].used = true;
      }
      //Keep track of score
      if (ans === this.question.answer) {
        ++this.$root.$data.numCorrect;
      }
      //Show stuff that needs to be showed
      this.answered = true;
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

.container div {
  margin: 15px;
}

.ans-buttons {
  display: flex;
  flex-direction: row;
}

#true {
  margin-left: 20px;
  margin-right: 20px;
}

#false {
  margin-left: 20px;
  margin-right: 20px;
}

/*Thank you https://getcssscan.com/css-buttons-examples*/
.button-82-pushable {
  position: relative;
  border: none;
  background: transparent;
  padding: 0;
  cursor: pointer;
  outline-offset: 4px;
  transition: filter 250ms;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
}

.button-82-shadow {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 12px;
  background: hsl(0deg 0% 0% / 0.25);
  will-change: transform;
  transform: translateY(2px);
  transition: transform 600ms cubic-bezier(0.3, 0.7, 0.4, 1);
}

/*True Button Colors*/
.true-button-82-edge {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 12px;
  background: linear-gradient(
    to left,
    hsl(121deg 100% 16%) 0%,
    hsl(121deg 100% 32%) 8%,
    hsl(121deg 100% 32%) 92%,
    hsl(121deg 100% 16%) 100%
  );
}

.true-button-82-front {
  display: block;
  position: relative;
  padding: 12px 27px;
  border-radius: 12px;
  font-size: 1.1rem;
  color: white;
  background: hsl(121, 50%, 50%);
  will-change: transform;
  transform: translateY(-4px);
  transition: transform 600ms cubic-bezier(0.3, 0.7, 0.4, 1);
}

/*False Button Colors*/
.false-button-82-edge {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 12px;
  background: linear-gradient(
    to left,
    hsl(340deg 100% 16%) 0%,
    hsl(340deg 100% 32%) 8%,
    hsl(340deg 100% 32%) 92%,
    hsl(340deg 100% 16%) 100%
  );
}

.false-button-82-front {
  display: block;
  position: relative;
  padding: 12px 27px;
  border-radius: 12px;
  font-size: 1.1rem;
  color: white;
  background: hsl(345deg 100% 47%);
  will-change: transform;
  transform: translateY(-4px);
  transition: transform 600ms cubic-bezier(0.3, 0.7, 0.4, 1);
}

/*Next Button Colors*/
.next-button-82-edge {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 12px;
  background: linear-gradient(
    to left,
    hsl(205deg 100% 16%) 0%,
    hsl(205deg 100% 32%) 8%,
    hsl(205deg 100% 32%) 92%,
    hsl(205deg 100% 16%) 100%
  );
}

.next-button-82-front {
  display: block;
  position: relative;
  padding: 12px 27px;
  border-radius: 12px;
  font-size: 1.1rem;
  color: white;
  background: hsl(205deg 100% 45%);
  will-change: transform;
  transform: translateY(-4px);
  transition: transform 600ms cubic-bezier(0.3, 0.7, 0.4, 1);
}

@media (min-width: 768px) {
  .button-82-front {
    font-size: 1.25rem;
    padding: 12px 42px;
  }
}

.button-82-pushable:hover {
  filter: brightness(110%);
}

.button-82-pushable:hover .button-82-front {
  transform: translateY(-6px);
  transition: transform 250ms cubic-bezier(0.3, 0.7, 0.4, 1.5);
}

.button-82-pushable:active .button-82-front {
  transform: translateY(-2px);
  transition: transform 34ms;
}

.button-82-pushable:hover .button-82-shadow {
  transform: translateY(4px);
  transition: transform 250ms cubic-bezier(0.3, 0.7, 0.4, 1.5);
}

.button-82-pushable:active .button-82-shadow {
  transform: translateY(1px);
  transition: transform 34ms;
}

.button-82-pushable:focus:not(:focus-visible) {
  outline: none;
}
</style>