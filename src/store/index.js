import { createStore } from 'vuex'

export default createStore({
  state() {
    return {
      user: {
        name: 'sem nome',
        idade: 'sem idade',
        email: 'inacioemail@gmail.com'
      }
    }

  },

  mutations: {
   storeUser(state, palyload) {
      state.user = palyload
   }
  },
  actions: {
    
  },
  getters: {
   
  },
});