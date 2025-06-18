import { createStore } from 'vuex';
import ads from './ads';
import user from './user'; // Импорт модуля user

// Создание хранилища с подключением модулей
const store = createStore({
  modules: {
    ads,
    user // Добавление модуля user
  }
});

export default store;