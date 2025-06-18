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
      state.user = payload; // Установка пользователя в состояние
    }
  },
  // Действия для обработки логики
  actions: {
    registerUser({ commit }, { email, password }) {
      // Здесь будет запрос на сервер для регистрации
      commit('setUser', new User(1, email, password)); // Создание и установка пользователя
    }
  },
  // Геттеры для получения данных
  getters: {
    user(state) {
      return state.user;
    }
  }
};