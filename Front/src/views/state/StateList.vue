<template>
  <menu-de-rotas>
    <b-row>
      <b-col lg="4" class="my-1">
        <b-form-group label="Filtro" label-cols-sm="3" label-align-sm="right" label-size="sm" label-for="filterInput" class="mb-0">
          <b-input-group size="sm">
            <b-form-input v-model="filter" type="search" id="filterInput" placeholder="Digite sua busca"></b-form-input>
            <b-input-group-append>
              <b-button :disabled="!filter" @click="filter = ''">Limpar</b-button>
            </b-input-group-append>
          </b-input-group>
        </b-form-group>
      </b-col>
      <b-col md="3" class="my-1">
        <b-form-group label="Linhas por página" label-cols-lg="9" label-align-sm="right" label-size="sm" label-for="perPageSelect" class="mb-0">
          <b-form-select v-model="perPage" id="perPageSelect" size="sm" :options="pageOptions"></b-form-select>
        </b-form-group>
      </b-col>
      <b-col md="3" class="my-1">
        <b-pagination v-model="currentPage" :total-rows="totalRows" :per-page="perPage" align="fill" size="sm" class="my-0"></b-pagination>
      </b-col>
      <b-col md="2" class="my-1">
        <b-button @click="newState()" variant="primary" size="sm"> <b-icon icon="plus"></b-icon>Novo Estado </b-button>
      </b-col>
    </b-row>
    <b-table
      show-empty
      small
      :items="states"
      :fields="fields"
      :current-page="currentPage"
      :per-page="perPage"
      :filter="filter"
      :filterIncludedFields="filterOn"
      :sort-by.sync="sortBy"
      :sort-desc.sync="sortDesc"
      :sort-direction="sortDirection"
      @filtered="onFiltered"
    >
      <template v-slot:cell(actions)="row">
        <b-button size="sm" variant="info" @click="updateState(row)" class="mr-1"> <b-icon icon="pencil"></b-icon> </b-button>
        <b-button size="sm" variant="danger" @click="removeState(row.item)"> <b-icon icon="trash"></b-icon> </b-button>
      </template>

      <template v-slot:row-details="row">
        <b-card>
          <ul>
            <li v-for="(value, key) in row.item" :key="key">{{ key }}: {{ value }}</li>
          </ul>
        </b-card>
      </template>
    </b-table>
    <state-create ref="StateCreate" type="Cadastrar"></state-create>
    <state-create ref="StateUpdate" type="Editar"></state-create>
  </menu-de-rotas>
</template>
<script>
import { mapState } from 'vuex'
import MenuDeRotas from '../../components/MenuDeRotas'
import StateCreate from './StateCreate'
export default {
  components: {
    MenuDeRotas,
    StateCreate
  },
  data () {
    return {
      filter: null,
      filterOn: [],
      totalRows: 1,
      currentPage: 1,
      perPage: 5,
      sortBy: '',
      sortDesc: false,
      sortDirection: 'asc'
    }
  },
  computed: {
    ...mapState('State', ['states', 'fields', 'pageOptions', 'infoModal'])
  },
  mounted () {
    this.$list({
      urlDispatch: 'State/list',
      callback: () => {
        this.totalRows = this.states.length
      }
    })
  },
  methods: {
    onFiltered (filteredItems) {
      this.totalRows = filteredItems.length
      this.currentPage = 1
    },
    newState () {
      this.$refs.StateCreate.showModal()
    },
    updateState (estado) {
      this.$refs.StateUpdate.setDataInForm(estado.item)
    },
    removeState (obj) {
      this.$setDialogQuestion({
        title: 'Excluir estado',
        message: `Tem certeza que deseja apagar o estado ${obj.name}?`,
        callback: () =>
          this.$remove({
            urlDispatch: 'State/remove',
            messages: `Estado ${obj.name} excluído com sucesso`,
            params: obj,
            callback: () => {
              this.$list({
                urlDispatch: 'State/list',
                callback: () => {
                  this.totalRows = this.states.length
                }
              })
            }
          })
      })
    }
  }
}
</script>
