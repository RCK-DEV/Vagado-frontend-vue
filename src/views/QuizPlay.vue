<template>
      <v-container
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
            <p>Timer: 00:00</p>
          </v-col>
        </v-row>
        <v-row
          align="center"
          justify="center"
        >
          <v-col
            cols="12"
            align="center"
          >
            <h2>Question goes here.... Lorem ipsum blabla dolor ti eblabla dolblabla dolor ti em die kaas ja schaap doe da da or ti em die kaas ja schaap doe da da m die kaas ja schaap doe da da  blabla dolor ti em die kaas ja schaap doe da da da la fie ro meik mskamk.</h2>
              <p>The button above has been clicked {{ counter }} times.</p>
          </v-col>
        </v-row>
        <v-row
          align="center"
          justify="center"
        >
        <v-col
            cols="12"
            md="6"
            v-for="(item, i) in items"
            :key="i"
        >
          <v-card hover
            class="answer"
            :color="item.color"
            dark
          >
            <div class="d-flex flex-no-wrap justify-space-between">
              <div>
                <v-card-title hover
            
                    v-on:click="counter += 1"
                    class="headline"
                    v-text="item.title"
                ></v-card-title>
              </div>
            </div>
          </v-card>
        </v-col>
        </v-row>
      </v-container>
</template>

<script>
  export default {
    data: () => ({
      items: [
        {
            id: 1,
            color: '#1F7087',
            title: 'Supermodel',
        },
        {
            id: 2,
            color: '#952175',
            title: 'Halcyon Days',
        },
        {
            id: 3,
            color: '#26c6da',
            title: 'Halcyon Days',
        },
        {
            id: 4,
            color: 'deep-purple',
            title: 'Halcyon Days',
        },
      ],
      counter: 0
    })
  }
</script>

<style scoped>
.answer {
  cursor: pointer;
}
</style>
