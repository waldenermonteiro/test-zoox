<template>
  <nav-routes>
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
        <b-button @click="newCity()" variant="primary" size="sm"> <b-icon icon="plus"></b-icon>Nova cidade </b-button>
      </b-col>
    </b-row>
    <b-table
      show-empty
      small
      :items="cities"
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
      <template v-slot:cell(state)="row"> {{ row.value.name }} </template>
      <template v-slot:cell(created_at)="row"> {{ $formatDateBr(row.value) }} </template>
      <template v-slot:cell(updated_at)="row"> {{ $formatDateBr(row.value) }} </template>
      <template v-slot:cell(actions)="row">
        <b-button size="sm" variant="info" @click="updateCity(row.item)" class="mr-1"> <b-icon icon="pencil"></b-icon> </b-button>
        <b-button size="sm" variant="danger" @click="removeCity(row.item)"> <b-icon icon="trash"></b-icon> </b-button>
      </template>

      <template v-slot:row-details="row">
        <b-card>
          <ul>
            <li v-for="(value, key) in row.item" :key="key">{{ key }}: {{ value }}</li>
          </ul>
        </b-card>
      </template>
      <template v-slot:empty>
        {{ emptyText }}
      </template>
      <template v-slot:emptyfiltered>
        {{ emptyFilteredText }}
      </template>
    </b-table>
    <city-create ref="CityCreate" type="Cadastrar"></city-create>
    <city-create ref="UpdateCity" type="Editar"></city-create>
  </nav-routes>
</template>
<script>
import { mapState } from 'vuex'
import NavRoutes from '../../components/NavRoutes'
import CityCreate from './CityCreate'
import masks from '../../mixins/masks.mixin'
export default {
  mixins: [masks],
  components: {
    NavRoutes,
    CityCreate
  },
  data () {
    return {
      filter: null,
      filterOn: [],
      totalRows: 1,
      currentPage: 1,
      perPage: 5,
      sortBy: 'name',
      sortDesc: false,
      sortDirection: 'asc',
      emptyText: 'Sem dados cadastrados no momento',
      emptyFilteredText: 'Busca não encontrada'
    }
  },
  computed: {
    ...mapState('City', ['cities', 'fields', 'pageOptions', 'infoModal'])
  },
  mounted () {
    this.$list({
      urlDispatch: 'City/list',
      callback: () => {
        this.totalRows = this.cities.length
      }
    })
  },
  methods: {
    onFiltered (filteredItems) {
      this.totalRows = filteredItems.length
      this.currentPage = 1
    },
    newCity () {
      this.$refs.CityCreate.showModal()
    },
    updateCity (city) {
      this.$refs.UpdateCity.setDataInForm(city)
    },
    removeCity (city) {
      this.$setDialogQuestion({
        title: 'Excluir cidade',
        message: `Tem certeza que deseja apagar a cidade ${city.name}?`,
        callback: () =>
          this.$remove({
            urlDispatch: 'City/remove',
            messages: `Cidade ${city.name} excluída com sucesso`,
            params: city,
            callback: () => {
              this.$list({
                urlDispatch: 'City/list',
                callback: () => {
                  this.totalRows = this.cities.length
                }
              })
            }
          })
      })
    }
  }
}
</script>
