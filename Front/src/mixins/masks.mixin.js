export default {
  methods: {
    $formatDateBr (date) {
      if (date === null) return ''
      const pattern = /(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})/g
      const getDate = pattern.exec(date)[0]
      return getDate.replace(pattern, '$3/$2/$1 $4:$5:$6')
    }
  }
}
