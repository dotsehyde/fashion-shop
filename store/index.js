import  auth  from './auth/authStore'
import{createStore} from 'vuex'
import 'vuex'
const store = createStore({
  namespaced:true,
  modules: {
    authStore:auth
  }
})

export default store