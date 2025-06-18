<template>
  <!-- Контейнер для карточки объявления -->
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-card class="mt-5">
          <!-- Изображение объявления -->
          <v-img
            height="400px"
            :src="ad.src"
            cover
          ></v-img>
          <v-card-text>
            <!-- Заголовок объявления -->
            <h1 class="text--primary mb-3">{{ ad.title }}</h1>
            <!-- Описание объявления -->
            <p>{{ ad.desc }}</p>
          </v-card-text>
          <v-card-actions>
            <!-- Кнопки действий -->
            <v-spacer></v-spacer>
            <v-btn class="warning" color="orange">Edit</v-btn>
            <v-btn class="success" color="green">Buy</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// Компонент для отображения деталей объявления
export default {
  // Пустой объект data
  data() {
    return {};
  },
  // Получение id из маршрута
  props: ['id'],
  computed: {
    // Получение объявления по id из хранилища
    ad() {
      const id = this.id;
      return this.$store.getters.adById(id) || {};
    }
  }
};
</script>