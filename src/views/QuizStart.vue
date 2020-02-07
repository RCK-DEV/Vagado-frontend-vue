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
            <v-btn x-large color="success" dark :href="'/quiz/play/'+$route.params.id+'/1'">Start Vagado Quiz</v-btn>
          </v-col>
        </v-row>
      </v-container>
</template>

<script>
  export default {
  }
</script>
