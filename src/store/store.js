import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
let store = new Vuex.Store({
    // 1. state
    state: {
        city: '吉林',
        name: '张三',
        event:[], //存储websocket传输过来的数据
    },
    getters: {
        getEvent (state) {
            return state.city;
        }
    },
    mutations: {
        setEvent (state, event) {
            state.event.push(event)
        },
        setName (state, name) {
          state.name = name
        }
    }
})

export default store;