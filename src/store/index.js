import { createStore } from 'vuex'

export default createStore({
  state() {
    return {
      user: {
        name: 'Inácio',
        idade: 25,
        email: 'inacioemail@gmail.com'
      }
    }

  },

  mutations: {
    increment(state) {
      state.count++
    }
  },
  actions: {
    
  },
  getters: {
   
  },
});