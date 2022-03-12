<template>
    <div class="page">
        <h1>Suggest More Trivia!</h1>

        <form class="input-form" v-on:submit.prevent="addSuggestion">
            <input class="input-box" v-model="suggestion">
            <input type="submit" value="Submit" class="submit">
        </form>

        <!-- <div class="added-suggestions" v-for="suggested in suggestions">
            
        </div> -->

    </div>
</template>

<script>
export default {
    name: 'Suggestion-view',
    data() {
        return {
            suggestion: '',
            suggestions: [],
        };
    },
    methods: {
        addSuggestion() {
            this.suggestions.push(this.suggestion);
        }
    }
}
</script>

<style scoped>
    .input-form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-content: center;
        padding: 20px;
    }
    .input-box{
        display: flexbox;
        height: 70px;
        width: 100%;
        font-size: 1.5em;
    }
    .submit{
        width: 30%;
        margin: 20px;
    }
</style>