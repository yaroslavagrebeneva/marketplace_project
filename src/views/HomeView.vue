<template>
  <v-container>
    <v-row justify="center">
    <v-col cols="12" xs="12">
      <h1>Carousel</h1>
    </v-col>
    </v-row>
  </v-container>
  <v-container>
    <v-row justify="center">
    <v-col cols="12" xs="12">
    <v-card>
      <v-img height="200px"></v-img>
      <v-card-title primary-title>
        <div>
          <h3 class="headline mb0">
            Здесь будет заголовок
          </h3>
        <div>
          Здесь будет описание
        </div>
        </div>
      </v-card-title>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn text>Open</v-btn>
        <v-btn raised color="primary">
          Buy
        </v-btn>
      </v-card-actions>
      </v-card>
    </v-col>
    </v-row>
  </v-container>
</template>
  

<script>
export default {
  data () {
    return {
    }
  }
}
</script>