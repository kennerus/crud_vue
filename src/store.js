import Vue from "vue";
import Vuex from "vuex";
// eslint-disable-next-line
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {
    GET_FORM_INPUTS_DATA() {
      return axios.get('/forms/first')
        .then(response => response)
        .catch(error => console.error(error));
    }
  }
});
