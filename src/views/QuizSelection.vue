<template>
<v-container fluid>
      <v-row dense>
        <v-col
          v-for="card in cards"
          :key="card.title"
          :cols="card.flex"
        >
          <v-card :href="card.src">
            <v-img
              :src="card.imgSrc"
              class="white--text align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="200px"
            >
              <v-card-title v-text="card.title"></v-card-title>
            </v-img>
          </v-card>
        </v-col>
      </v-row>
</v-container>
</template>

<script>
  export default {
    data: () => ({
      cards: [
        { title: 'Sport - Voetbal', imgSrc: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', flex: 6, src: "/quiz/start/1" },
        { title: 'Sport - Tennis', imgSrc: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', flex: 6, src: "/quiz/start/2" },
        { title: 'Films - Comedy', imgSrc: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 6, src: "/quiz/start/3" },
      ],
    }),
  }
</script>
