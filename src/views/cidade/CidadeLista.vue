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
        <b-button @click="novaCidade()" variant="primary" size="sm"> <b-icon icon="plus"></b-icon>Nova cidade </b-button>
      </b-col>
    </b-row>
    <b-table
      show-empty
      small
      :items="cidades"
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
      <template v-slot:cell(name)="row"> {{ row.value.first }} {{ row.value.last }} </template>

      <template v-slot:cell(actions)="row">
        <b-button size="sm" variant="info" @click="editarCidade(row)" class="mr-1"> <b-icon icon="pencil"></b-icon> </b-button>
        <b-button size="sm" variant="danger" @click="excluirCidade(row.item, row.index)"> <b-icon icon="trash"></b-icon> </b-button>
      </template>

      <template v-slot:row-details="row">
        <b-card>
          <ul>
            <li v-for="(value, key) in row.item" :key="key">{{ key }}: {{ value }}</li>
          </ul>
        </b-card>
      </template>
    </b-table>
    <cadastrar-cidade ref="CadastrarCidade" type="Cadastrar"></cadastrar-cidade>
    <cadastrar-cidade ref="EditarCidade" type="Editar"></cadastrar-cidade>
  </menu-de-rotas>
</template>
<script>
import { mapState } from 'vuex'
import MenuDeRotas from '../../components/MenuDeRotas'
import CadastrarCidade from './CadastrarCidade'
export default {
  components: {
    MenuDeRotas,
    CadastrarCidade
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
    ...mapState('Cidade', ['cidades', 'fields', 'pageOptions', 'infoModal'])
  },
  mounted () {
    this.totalRows = this.items.length
  },
  methods: {
    onFiltered (filteredItems) {
      // Trigger pagination to update the number of buttons/pages due to filtering
      this.totalRows = filteredItems.length
      this.currentPage = 1
    },
    novaCidade () {
      this.$refs.CadastrarCidade.showModal()
    },
    editarCidade (estado) {
      this.$refs.EditarCidade.setarDadosNoForm(estado.item)
    },
    excluirCidade () {
      this.$setDialogQuestion({
        title: 'Excluir cidade',
        message: 'Tem certeza que deseja apagar a cidade Tal?',
        callback: () => this.$remove({ urlDispatch: 'Cidade/excluir', messages: 'Cidade excluída com sucesso' })
      })
    }
  }
}
</script>
