<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" sm="8" lg="6">
        <h1 class="text--secondary mb-3 mt-3">My ads</h1>
        <v-card
          class="elevation-10 mb-5"
          v-for="ad in myAds"
          :key="ad.id"
        >
          <!-- содержание карточки -->
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  computed: {
    myAds() {
      return this.$store.getters.myAds;
    }
  }
}
</script>