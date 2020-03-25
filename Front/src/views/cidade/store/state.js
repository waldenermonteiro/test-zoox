export default {
  cidades: [{ nomeCidade: 'Abaetetuba', estado: 'Pará' }],
  fields: [
    {
      key: 'nomeCidade',
      label: 'Nome Cidade',
      sortable: true,
      sortDirection: 'desc'
    },
    {
      key: 'estado',
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
