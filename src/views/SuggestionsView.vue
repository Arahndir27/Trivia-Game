<template>
  <div class="page">
    <h1>Suggest More Trivia!</h1>

    <form class="input-form" v-on:submit.prevent="addSuggestion">
      <input class="input-box" v-model="suggestion" />
      <button class="button-82-pushable submit" role="button" type="submit">
        <span class="button-82-shadow"></span>
        <span class="button-82-edge"></span>
        <span class="button-82-front text"> SUBMIT </span>
      </button>
    </form>

    <div class="suggestions" v-for="suggested in suggestions" v-bind:key="suggested.id">
      <p><strong>Suggestion Number: </strong>{{suggested.id}}</p>
      <p>{{ suggested.comment }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Suggestion-view",
  data() {
    return {
      suggestion: "",
      suggestionObj: {
        id: "",
        comment: "",
      },
      suggestions: [],
      number: 0,
    };
  },
  methods: {
    addSuggestion() {
      this.suggestionObj.comment = this.suggestion;
      this.suggestionObj.id = this.number;
      console.log(this.suggestionObj.comment);
      this.number++;
      this.suggestions.push({ ...this.suggestionObj });
      this.suggestion = "";
    },
  },
};
</script>

<style scoped>
.suggestions {
    text-align: left;
    padding: 0 1em;
}

.input-form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  padding: 20px;
}
.input-box {
  display: flexbox;
  height: 70px;
  width: 100%;
  font-size: 1.5em;
}
.submit {
  width: 30%;
  margin: 20px;
}

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

.button-82-edge {
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

.button-82-front {
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