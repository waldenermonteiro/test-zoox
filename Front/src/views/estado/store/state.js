export default {
  items: [{ nomeEstado: 'Pará', abrev: 'PA' }],
  fields: [
    {
      key: 'nomeEstado',
      label: 'Nome Estado',
      sortable: true,
      sortDirection: 'desc'
    },
    {
      key: 'abrev',
      label: 'Abreviação',
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
