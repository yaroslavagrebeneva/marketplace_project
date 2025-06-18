import { createStore } from 'vuex';
import ads from './ads';
import user from './user'; 
import shared from './shared'

// Создание хранилища с подключением модулей
const store = createStore({
  modules: {
    ads,
    user,
    shared
  }
});

export default store;