export default {
  // Состояние для управления запросами
  state: {
    loading: false, // Статус загрузки
    error: null // Ошибка запроса
  },
  // Мутации для изменения состояния
  mutations: {
    setLoading(state, payload) {
      state.loading = payload; // Установка статуса загрузки
    },
    setError(state, payload) {
      state.error = payload; // Установка ошибки
    },
    clearError(state) {
      state.error = null; // Очистка ошибки
    }
  },
  // Действия для вызова мутаций
  actions: {
    setLoading({ commit }, payload) {
      commit('setLoading', payload); // Установка статуса загрузки
    },
    setError({ commit }, payload) {
      commit('setError', payload); // Установка ошибки
    },
    clearError({ commit }) {
      commit('clearError'); // Очистка ошибки
    }
  },
  // Геттеры для доступа к состоянию
  getters: {
    loading(state) {
      return state.loading; // Получение статуса загрузки
    },
    error(state) {
      return state.error; // Получение ошибки
    }
  }
};