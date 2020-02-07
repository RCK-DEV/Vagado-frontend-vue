<template>
  <div class="home">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
import QuizService from '../service/QuizService';
export default {
  name: 'QuizService',
  props: {
    msg: String
  }, methods: {
    getQuiz() {
      QuizService.retrieveQuiz()
      .then(response => {
        console.log(response.data);
      });
    }
  },
  created() {
    this.getQuiz();
  }
}
</script>



<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
