<template>
    <div class="page">
        <h1>Suggest More Trivia!</h1>

        <form class="input-form" v-on:submit.prevent="addSuggestion">
            <input class="input-box" v-model="suggestion">
            <input type="submit" value="Submit" class="submit">
        </form>

        <div v-for="suggested in suggestions" v-bind:key="suggested.id">
            <p>{{suggested.comment}}</p>
        </div>

    </div>
</template>

<script>
export default {
    name: 'Suggestion-view',
    data() {
        return {
            suggestion: '',
            suggestions: {
                id:'',
                comment:''
            },
            number:0
        };
    },
    methods: {
        addSuggestion() {
            this.suggestions.comment=this.suggestion;
            this.suggestions.id=this.number;
            this.number++;
            this.suggestion='';
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