import Vue from 'vue';
import Vuex, { Store } from 'vuex';
import axios from 'axios';
Vue.use(Vuex);

export const store = new Store({
    state: {
      isFormShown: false,
      specialisms: [],
      selectedSpecialty: null
    },
    actions: {
      async getSpecialties({ commit }) {
        const response = await axios.get('http://localhost:8081/specialisms');
        if(response.status===200) {
          commit('setSpecialisms', response.data)
        }
      },
      showForm({ commit }, {selectedSpecialty,isFormShown}) {
        commit('showform',{selectedSpecialty,isFormShown})
      },
      saveform({ state, dispatch },newItem) {
        dispatch(state.selectedSpecialty?.code ? 'editItem' : 'createItem', newItem);
      },
      async editItem({ commit }, newItem) {
        const response = await axios.put('http://localhost:8081/specialisms/'+newItem.code,newItem);
        if (response.status === 200){
          commit('updateItem',newItem)
        }  
      },
      async createItem({ commit }, newItem) {
        const response = await axios.post('http://localhost:8081/specialisms',newItem);
        if (response.status === 200){
          commit('createSpecialism',newItem)
        }
      },
      async deleteItem({ commit }, newItem) {
        const response = await axios.delete('http://localhost:8081/specialisms/'+newItem.code);
        if (response.status === 200)
        {
          commit('deleteitem',newItem)
        }
      }
    },
    mutations: {
      'setSpecialisms'(state, specialisms) {
        state.specialisms = specialisms;
      },
      'updateItem'(state,newItem){
        const index = state.specialisms.findIndex(item => item.code === newItem.code);
        Vue.set(state.specialisms,index,newItem)
      },
      'createSpecialism'(state,newItem){
        state.specialisms.push(newItem);
      },
      'showform'(state, {selectedSpecialty,isFormShown}){
        state.selectedSpecialty=selectedSpecialty;
        state.isFormShown=isFormShown
      },
      'deleteitem'(state,newItem){
        const index = state.specialisms.findIndex(item =>item.code === newItem.code);
        if (index !== -1) {
          state.specialisms.splice(index, 1);
        }
      }
    }
});