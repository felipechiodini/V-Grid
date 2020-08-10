<template>
  <div class="container-fluid">
    <div class="row m-4">
      <div class="col-10">

        <div class="row p-1 border border-dark rounded-top" v-if="dados.structure.title.show">
          <div class="col-auto">
            <span>{{ dados.structure.title.label }}</span>
            <span>{{  }}</span>
          </div>

          <div class="ml-auto col-auto" v-if="dados.structure.title.showCollapseGrid">
            <span @click="collapseGrid(dados.structure.title.collapseGrid)" class="icon-hover mr-auto"><i class="fas fa-caret-square-down"></i></span>
          </div>
        </div>

        <div class="row" v-if="dados.structure.title.collapseGrid">
          <div class="col-12">
            <div class="row border-left border-right border-dark d-flex align-items-center" :class="{'border-top rounded-top': !dados.structure.title.show}">
              <div class="col-auto border-right border-dark">
                <input type="checkbox" @click="selectAll(...arguments)">
              </div>

              <div class="col-1 border-right border-dark" v-for="(item, key) in dados.structure.columns" :key="key" @click="sort()">
                <span class="py-1">{{ item.label }}</span>
              </div>
            </div>

            <div class="row border-bottom border-left border-right border-dark row-grid" :class="{'border-top': key == 0, 'selected': item.selected }" v-for="(item, key) in dados.rows" :key="key" @click="rowSelected(item.id)">
              <div class="col-auto border-right border-dark d-flex align-items-center">
                <input type="checkbox" :checked="item.selected">
              </div>
              <div class="col-1 py-1 border-right border-dark">
                <span>{{ item.name }}</span>
              </div>
              <div class="col-1 py-1 border-right border-dark">
                <span>{{ item.last_name }}</span>
              </div>
              <div class="col-1 py-1 border-right border-dark">
                <span>{{ item.years_old }}</span>
              </div>
            </div>

            <div class="row p-1 border-bottom border-left border-right border-dark justify-content-center rounded-bottom" v-if="dados.structure.footer.show">

              <div class="col-auto d-flex justify-content-around">
                <span @click="backAllPage()" class="icon-hover px-2"><i class=" fas fa-angle-double-left"></i></span>
                <span @click="backPage()" class="icon-hover px-2"><i class=" fas fa-angle-left"></i></span>

                <span>Página
                  <input class="page-number" v-model="dados.structure.footer.pageSelected">
                  de
                  {{ dados.structure.footer.numberAllPages }}
                </span>

                <span @click="nextPage()" class="icon-hover px-2"><i class="fas fa-angle-right"></i></span>
                <span @click="nextAllPage()" class="icon-hover px-2"><i class="fas fa-angle-double-right"></i></span>

                <span>
                  <select v-model="dados.structure.footer.rowsPerPage">
                    <option :value="value" v-for="(value, key) in dados.structure.footer.rowsPerPageOptions" :key="key">{{ value }}</option>
                  </select>
                </span>
              </div>

              <div class="col-auto text-center">
                <span>{{ calculatePages }}</span>
              </div>

            </div>
          </div>
        </div>



      </div>
    </div>
  </div>
</template>

<script>
export default {

  props: {
    dataGrid: {
      required: true,
      type: Object
    }
  },

  data: function(){
    return{
      dados: this.dataGrid,
    }
  },

  computed: {
    calculatePages(){
      let page = this.dados.structure.footer.pageSelected
      let rowsPerPage = this.dados.structure.footer.rowsPerPage
      let body = "Vendo "
      body += (page * rowsPerPage) - rowsPerPage + 1 + ' - '
      body += (page * rowsPerPage) + ' de '
      body += this.dados.structure.footer.numberAllRows
      return body
    }
  },

  methods: {
    rowSelected: function(id){
      let item = this.dados.rows.find(i => i.id === id)
      if(item.selected)
        item.selected = false
      else 
        item.selected = true
    },

    selectAll: function(e){
      if(e.target.checked)
        this.dados.rows.map(i => i.selected = true)
      else
        this.dados.rows.map(i => i.selected = false)
    },

    collapseGrid: function(value){

      if(value)
        this.dados.structure.title.collapseGrid = false
      else
        this.dados.structure.title.collapseGrid = true
    },

    nextPage: function(){
      this.$emit('update-data', {
        rowsPerPage: this.dados.structure.footer.rowsPerPage,
        pageSelected: this.dados.structure.footer.pageSelected + 1
      })
    },


  },

}
</script>

<style scoped>

  .row-grid:hover{
    background-color: rgb(235, 235, 235);
  }

  .row-grid{
    font-size: 14px;
    white-space: nowrap;
    overflow: hidden;
  }

  .selected{
    background-color: rgb(235, 235, 235);
  }

  .icon-hover:hover{
    cursor: pointer;
  }

  .page-number{
    width: 20px;
    height: 20px;
  }

  .input-number-row-page{
    width: 35px;
    height: 20px;
  }

</style>
