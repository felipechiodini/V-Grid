<template>
  <div id="app">

    <v-grid :dataGrid="dataGridExample"></v-grid>

  </div>
</template>

<script>

import VGrid from './components/V-Grid.vue'

export default {
  name: 'App',
  components: {
    VGrid
  },

  data: function(){
    return {
      dataGridExample: {
        structure: {
          title: {
            show: true,
            label: 'Minha Grid TESTE',
            showCollapseGrid: true,
            collapseGrid: true,
          },

          columns: [
            { name: 'name',      label: 'Nome'     , sortable: true  },
            { name: 'lat_name',  label: 'Sobrenome', sortable: true  },
            { name: 'years_old', label: 'Idade'    , sortable: true  },
            { name: 'civil_status', label: 'Estado Civil', sortable: true  },
          ],

          footer: {
            show: true,
            rowsPerPage: 10,
            rowsPerPageOptions: [10,20,50],
            numberAllRows: 100,
            pageSelected: 1,
            numberAllPages: 10,
          }
        },
          
        rows: [
          { id: '0', name: 'Felipe', selected: false ,last_name: 'Chiodini Bona' , years_old: 9, civil_status: 'Solteiro' },
          { id: '1', name: 'Felipe', selected: false ,last_name: 'Chiodini Bona' , years_old: 9, civil_status: 'Solteiro' },
          { id: '2', name: 'Felipe', selected: false ,last_name: 'Chiodini Bona' , years_old: 9, civil_status: 'Solteiro' },
          { id: '3', name: 'Felipe', selected: false ,last_name: 'Chiodini Bona' , years_old: 9, civil_status: 'Solteiro' },
          { id: '4', name: 'Felipe', selected: false ,last_name: 'Chiodini Bona' , years_old: 9, civil_status: 'Solteiro' },
          { id: '5', name: 'Felipe', selected: false ,last_name: 'Chiodini Bona' , years_old: 9, civil_status: 'Solteiro' },
          { id: '6', name: 'Felipe', selected: false ,last_name: 'Chiodini Bona' , years_old: 9, civil_status: 'Solteiro' },
          { id: '7', name: 'Felipe', selected: false ,last_name: 'Chiodini Bona' , years_old: 9, civil_status: 'Solteiro' },
          { id: '8', name: 'Felipe', selected: false ,last_name: 'Chiodini Bona' , years_old: 9, civil_status: 'Solteiro' },
          { id: '9', name: 'Felipe', selected: false ,last_name: 'Chiodini Bona' , years_old: 9, civil_status: 'Solteiro' },
        ],

      }
    }
  },

  mounted(){
    
  },


  methods: {
        
  }
}
</script>
