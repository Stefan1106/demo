<template>
  <div class="hello">
    <Header
      @buttonClick="showForm({isFormShown:true, selectedSpecialty:null})"
    />

    <VDataTable
      class="margin"
      :headers="headers"
      :items="specialisms"
    >
      <template v-slot:item.actions="{ item }">
        <VBtn 
          @click="showForm({isFormShown:true, selectedSpecialty:item})"
        >
          Edit
        </VBtn>
        <VBtn 
          @click="deleteItem(item)"
          >
          Delete
        </VBtn>
      </template>
    </VDataTable>

    <show
      v-if="isFormShown"
      :item="selectedSpecialty"
      @cancel="showForm({isFormShown:false, selectedSpecialty:null})"
      @save="saveform"
    />
  </div>
</template>

<script>
import Header from './Header.vue';
import show from './show.vue';
import { mapActions, mapState } from 'vuex';

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  components: {
    Header,
    show
  },
  data() {
    return {
      headers: [
      {
        text: 'Speciality',
        value: 'name'
      },
      {
        text: 'Custom code',
        value: 'code'
      },
      {
        text: 'Administration code',
        value: 'description',
      },
      {
        text:'Actions',
        value: 'actions'
      }
      ],
    }
  },
  computed: mapState(['specialisms','selectedSpecialty','isFormShown']),
  async beforeMount() {
    await this.getSpecialties();
  },
  methods: {
    ...mapActions(['getSpecialties','saveform','showForm','deleteItem']),
  }
}
</script>
<style scoped>
.margin{
  margin: 20px;
}
</style>