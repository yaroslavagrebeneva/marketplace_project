// Класс для представления пользователя
class User {
  constructor(id, email, password) {
    this.id = id;
    this.email = email;
    this.password = password;
  }
}

export default {
  // Состояние модуля пользователя
  state: {
    user: null // Хранит данные пользователя
  },
  // Мутации для изменения состояния
  mutations: {
    setUser(state, payload) {
      console.log(payload); // Логирование данных пользователя
      state.user = payload; // Установка пользователя
    }
  },
  // Действия для обработки логики
  actions: {
    async registerUser({ commit }, { email, password }) {
      commit('clearError'); // Очистка ошибки
      commit('setLoading', true); // Включение лоудера

      // Имитация запроса на сервер
      let isRequestOk = false; // Симуляция неуспешного запроса
      let promise = new Promise(function(resolve) {
        setTimeout(() => resolve('Done'), 3000);
      });

      if (isRequestOk) {
        await promise.then(() => {
          commit('setUser', new User(1, email, password)); // Установка пользователя
          commit('setLoading', false); // Отключение лоудера
        });
      } else {
        await promise.then(() => {
          commit('setLoading', false); // Отключение лоудера
          commit('setError', 'Ошибка регистрации'); // Установка ошибки
          throw 'Упс... Ошибка регистрации'; // Бросаем ошибку
        });
      }
    },
    async loginUser({ commit }, { email, password }) {
      commit('clearError'); // Очистка ошибки
      commit('setLoading', true); // Включение лоудера

      // Имитация запроса на сервер
      let isRequestOk = false; // Симуляция неуспешного запроса
      let promise = new Promise(function(resolve) {
        setTimeout(() => resolve('Done'), 3000);
      });

      if (isRequestOk) {
        await promise.then(() => {
          commit('setUser', new User(1, email, password)); // Установка пользователя
          commit('setLoading', false); // Отключение лоудера
        });
      } else {
        await promise.then(() => {
          commit('setLoading', false); // Отключение лоудера
          commit('setError', 'Ошибка логина или пароля'); // Установка ошибки
          throw 'Упс... Ошибка логина или пароля'; // Бросаем ошибку
        });
      }
    }
  },
  // Геттеры для получения данных
  getters: {
    user(state) {
      return state.user;
    }
  }
};