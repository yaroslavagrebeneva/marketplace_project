<template>
    <v-container>
      <v-row>
        <v-col cols="12">
          <v-card class="mt-5">
            <!-- Картинка с растяжением по ширине, сохраняющая пропорции -->
            <v-img
              :src="'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg'"
              class="d-block"
              height="300px"
              contain
            ></v-img>
  
            <!-- Текст -->
            <v-card-text>
              <h1 class="text--primary mb-3">Lorem Ipsum</h1>
              <p>
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                It has survived not only five centuries, but also the leap into electronic typesetting,
                remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset
                sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like
                Aldus PageMaker including versions of Lorem Ipsum.
              </p>
            </v-card-text>
  
            <!-- Кнопки действия -->
            <v-card-actions>
              <v-spacer></v-spacer>
              <!-- Кнопки с цветным фоном -->
              <v-btn color="warning" class="white--text">Edit</v-btn>
              <v-btn color="success" class="white--text">Buy</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script>
  export default {
    data() {
      return {};
    }
  };
  </script>
  
  <style scoped>
  /* Добавление стиля для растягивания изображения */
  .v-img {
    width: 100%; /* Это гарантирует, что картинка растягивается на 100% ширины контейнера */
    object-fit: contain; /* Сохраняет пропорции картинки */
  }
  </style>
  