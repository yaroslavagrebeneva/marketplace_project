<template>
  <div>
    <v-container fluid>
      <v-carousel show-arrows="hover" hide-delimiters>
        <v-carousel-item v-for="ad in ads" :key="ad.id">
          <v-img :src="ad.src" class="carousel-img">
            <div class="ad-link">
              <v-btn class="error white--text" :to="'/ad/' + ad.id">
                {{ ad.title }}
              </v-btn>
            </div>
          </v-img>
        </v-carousel-item>
      </v-carousel>
    </v-container>

    <v-container>
      <v-row>
        <v-col v-for="ad in ads" :key="ad.id" cols="12" sm="6" md="4">
          <v-card class="ad-card">
            <v-img :src="ad.src" height="200px"></v-img>
            <v-card-title>
              <h3 class="headline">{{ ad.title }}</h3>
            </v-card-title>
            <v-card-text>
              <p>{{ ad.desc }}</p>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn text color="primary" :to="'/ad/' + ad.id">
                Open
              </v-btn>
              <buy-ad-modal :ad="ad"></buy-ad-modal>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ads: [
        {
          title: "First",
          desc: "First Desc",
          promo: true,
          src: "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg",
          id: "1"
        },
        {
          title: "Second",
          desc: "Second Desc",
          promo: true,
          src: "https://cdn.vuetifyjs.com/images/carousel/sky.jpg",
          id: "2"
        },
        {
          title: "Third",
          desc: "Third Desc",
          promo: true,
          src: "https://cdn.vuetifyjs.com/images/carousel/bird.jpg",
          id: "3"
        },
        {
          title: "Fourth",
          desc: "Fourth Desc",
          promo: true,
          src: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg",
          id: "4"
        }
      ]
    };
  }
};
</script>

<style scoped>
/* Стили для карусели */
.carousel-img {
  height: 400px;
  position: relative;
}

/* Блок с кнопкой внутри карусели */
.ad-link {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(0, 0, 0, 0.6);
  padding: 10px 20px;
  border-radius: 8px;
}

/* Карточки объявлений */
.ad-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.ad-card:hover {
  transform: translateY(-5px);
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
}
</style>
