export default {
  states: [],
  fields: [
    {
      key: '_id',
      label: 'Id',
      sortable: true,
      class: 'text-center'
    },
    {
      key: 'name',
      label: 'Nome Estado',
      sortable: true,
      class: 'text-center'
    },
    {
      key: 'abbreviation',
      label: 'Abreviação',
      sortable: true,
      class: 'text-center'
    },
    {
      key: 'created_at',
      label: 'Data de Criação',
      sortable: true,
      class: 'text-center'
    },
    {
      key: 'updated_at',
      label: 'Data da Última Alteração',
      sortable: true,
      class: 'text-center'
    },
    { key: 'actions', label: 'Ações' }
  ],
  pageOptions: [5, 10, 15],
  infoModal: {
    id: 'info-modal',
    title: '',
    content: ''
  }
}
