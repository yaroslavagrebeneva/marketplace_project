<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-card class="mt-5">
          <!-- Изображение объявления -->
          <v-img height="300px" :src="ad?.src" cover></v-img>

          <v-card-text>
            <h1 class="text--primary mb-3">{{ ad?.title }}</h1>
            <p>{{ ad?.desc }}</p>
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>

            <!-- Показываем кнопку редактирования только для владельца объявления -->
            <modal-dialog v-if="isOwner" :ad="ad"></modal-dialog>
            
            <!-- Модальное окно покупки -->
            <buy-ad-modal :ad="ad"></buy-ad-modal>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import EditAdModal from './EditAdModal.vue'; 

export default {
  props: {
    id: String, // Приводим ID к строковому типу для надежности
  },
  computed: {
    ad() {
      return this.$store.getters.adById(this.id) || {}; // Защита от ошибки при отсутствии данных
    },
    isOwner() {
      // Проверяем, является ли текущий пользователь владельцем объявления
      return this.$store.getters.userId === this.ad?.ownerId;
    },
  },
  components: {
    'modal-dialog': EditAdModal, // Регистрируем компонент редактирования
  },
};
</script>

<style scoped>
/* Улучшенные стили */
.v-card {
  transition: 0.3s ease-in-out;
}

.v-card:hover {
  transform: translateY(-3px);
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.2);
}
</style>
