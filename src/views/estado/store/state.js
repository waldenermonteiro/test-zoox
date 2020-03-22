export default {
  items: [
    {
      age: 40,
      name: { first: 'Dickerson', last: 'Macdonald' }
    },
    { age: 21, name: { first: 'Larsen', last: 'Shaw' } },
    {
      age: 9,
      name: { first: 'Mini', last: 'Navarro' }
    },
    { age: 89, name: { first: 'Geneva', last: 'Wilson' } },
    { age: 38, name: { first: 'Jami', last: 'Carney' } },
    { age: 27, name: { first: 'Essie', last: 'Dunlap' } },
    { age: 40, name: { first: 'Thor', last: 'Macdonald' } },
    {
      age: 87,
      name: { first: 'Larsen', last: 'Shaw' }
    },
    { age: 26, name: { first: 'Mitzi', last: 'Navarro' } },
    {
      age: 22,
      name: { first: 'Genevieve', last: 'Wilson' }
    },
    { age: 38, name: { first: 'John', last: 'Carney' } },
    { age: 29, name: { first: 'Dick', last: 'Dunlap' } }
  ],
  fields: [
    {
      key: 'name',
      label: 'Person Full name',
      sortable: true,
      sortDirection: 'desc'
    },
    {
      key: 'age',
      label: 'Person age',
      sortable: true,
      class: 'text-center'
    },
    {
      key: 'isActive',
      label: 'is Active',
      formatter: (value, key, item) => {
        return value ? 'Yes' : 'No'
      },
      sortable: true,
      sortByFormatted: true,
      filterByFormatted: true
    },
    { key: 'actions', label: 'Actions' }
  ],
  pageOptions: [5, 10, 15],
  infoModal: {
    id: 'info-modal',
    title: '',
    content: ''
  }
}
