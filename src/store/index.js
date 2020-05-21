import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    clothes:[],
    cart:[],
    orders:[]
  },
  mutations: {
    setClothes: function(state,clothes) {
      state.clothes = clothes;
    },
    setOrders: function(state,orders) {
      state.orders = orders;
    },
    addToCart: function (state,objectId) {
      let currentAmount = state.cart[objectId] || 0;
      let newCart = Object.assign({},state.cart);
      newCart[objectId] = currentAmount +1
      state.cart = newCart;
    },
    EmptyCart(state) {
      state.cart = {}
    },
  },
  actions: {
  },
  modules: {
  },
  getters:{
    getClothesByT_Shirts: function(state,t_shirts) {
      return state.clothes.find( (category) => category.t_shirts === t_shirts);
    }
  }
})
