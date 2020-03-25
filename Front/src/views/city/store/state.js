export default {
  cities: [],
  fields: [
    {
      key: 'name',
      label: 'Nome Cidade',
      sortable: true,
      sortDirection: 'desc'
    },
    {
      key: 'state',
      label: 'Estado',
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
