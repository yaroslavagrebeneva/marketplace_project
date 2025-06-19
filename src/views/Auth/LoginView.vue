<template>
  <!-- Контейнер для формы логина -->
  <v-container>
    <v-row justify="center">
      <v-col cols="12" sm="8" lg="6">
        <v-card class="elevation-12">
          <v-toolbar dark color="primary">
            <v-toolbar-title>Login</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <!-- Отображение ошибки, если она есть -->
            <v-alert
              v-if="error"
              type="error"
              dismissible
              @input="$store.dispatch('clearError')"
            >
              {{ error }}
            </v-alert>
            <v-form ref="form" v-model="valid">
              <v-text-field
                prepend-icon="mdi-account"
                name="email"
                label="Email"
                type="email"
                v-model="email"
                :rules="emailRules"
              ></v-text-field>
              <v-text-field
                prepend-icon="mdi-lock"
                name="password"
                label="Password"
                type="password"
                v-model="password"
                :rules="passwordRules"
              ></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="primary"
              @click="onSubmit"
              :loading="loading"
              :disabled="!valid || loading"
            >
              Login
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// Компонент для входа пользователя
export default {
  data() {
    return {
      email: "", // Email пользователя
      password: "", // Пароль
      valid: false, // Статус валидации формы
      emailRules: [
        v => !!v || "E-mail is required",
        v => /.+@.+\..+/.test(v) || "E-mail must be valid"
      ],
      passwordRules: [
        v => !!v || "Password is required",
        v => (v && v.length >= 6) || "Password must be more or equal than 6 characters"
      ]
    };
  },
  computed: {
    // Получение статуса загрузки из store
    loading() {
      return this.$store.getters.loading;
    },
    // Получение ошибки из store
    error() {
      return this.$store.getters.error;
    }
  },
  methods: {
    // Метод отправки данных для входа
    onSubmit() {
      if (this.$refs.form.validate()) {
        const user = {
          email: this.email,
          password: this.password
        };
        this.$store.dispatch('loginUser', user)
          .then(() => {
            // Очистка формы после успешного входа
            this.email = "";
            this.password = "";
            this.$refs.form.resetValidation();
            this.$router.push("/"); // Редирект на главную страницу
            console.log("🟢 Пользователь вошел:", user);
          })
          .catch((err) => {
            console.log("🔴 Ошибка:", err); // Логирование ошибки
          });
      }
    }
  }
};
</script>