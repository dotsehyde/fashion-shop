import{createStore} from 'vuex'

const authStore =createStore(
  {
    namespaced:true,
    state: {
    title: "Authentication",
      counter:10
    },
    mutations: {
      changeTitle(state, title) {
        state.title = title;
      },
      increase(state, playload) {
        state.counter ++;
      }
    },
    actions: {
    },
    modules: {
      
    }
  })

 export default  authStore