<template>
      <v-container
        class="fill-height"
        fluid
      >
        <v-row
          align="center"
          justify="center"
        >
          <v-col
            cols="12"
            sm="8"
            md="4"
            align="center"
          >
            <p>App built for the HAN-course OOSE-OOAD. For more information about
              how this app is built go ahead and visit the <a href="about">about page</a>.
              In this app you can play a quiz about your favourite topic. Go ahead and
              give it a try.
            </p>
            <v-btn x-large color="success" dark href="/quiz/selection">Play Vagado Quiz</v-btn>
          </v-col>
        </v-row>
      </v-container>
</template>

<script>
  export default {
  }
</script>
