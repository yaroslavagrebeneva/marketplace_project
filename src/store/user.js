class User {
    constructor(id, email, password) {
      this.id = id;
      this.email = email;
      this.password = password;
    }
  }
  
  export default {
    state: {
      user: null,
    },
    mutations: {
      setUser(state, payload) {
        console.log(payload);
        state.user = payload;
      },
    },
    actions: {
      async registerUser({ commit }, { email, password }) {
        commit("clearError");
        commit("setLoading", true);
        //Здесь выполняется запрос на сервер
        let isRequestOk = false;
        let promise = new Promise(function (resolve) {
          setTimeout(() => resolve("Done"), 3000);
        });
  
        if (isRequestOk) {
          await promise.then(() => {
            commit("setUser", new User(1, email, password));
            commit("setLoading", false);
          });
        } else {
          await promise.then(() => {
            commit("setLoading", false);
            commit("setError", "Ошибка регистрации");
            throw "Упс... Ошибка регистрации";
          });
        }
      },
  
      async loginUser({ commit }, { email, password }) {
        commit("clearError");
        commit("setLoading", true);
        //Здесь выполняется запрос на сервер
        let isRequestOk = true;
        let promise = new Promise(function (resolve) {
          setTimeout(() => resolve("Done"), 3000);
        });
  
        if (isRequestOk) {
          await promise.then(() => {
            commit("setUser", new User(1, email, password));
            commit("setLoading", false);
          });
        } else {
          await promise.then(() => {
            commit("setLoading", false);
            commit("setError", "Ошибка логина или пароля");
            throw "Упс... Ошибка логина или пароля";
          });
        }
      },
  
      logoutUser({commit}) {
        commit('setUser', null);
        commit('setLoading', false); // добавить
        }      
    },
    getters: {
      user(state) {
        return state.user;
      },
      isUserLoggedIn (state) {
        return state.user !== null
      },    
    },
  };