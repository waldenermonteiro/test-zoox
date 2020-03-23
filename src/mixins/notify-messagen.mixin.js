import swal from 'sweetalert'
export default {
  methods: {
    $setNotifyDanger (message) {
      const uniqueMessage = message.message || message
      if (Array.isArray(message)) {
        this.setMultipleNotifyDanger(message)
      } else {
        this.setUniqueNotifyDanger(uniqueMessage)
      }
    },
    setUniqueNotifyDanger (message) {
      swal({
        title: 'Bom trabalho!',
        text: message,
        icon: 'success'
      })
    },
    setMultipleNotifyDanger (messages) {
      messages.forEach(message => {
        this.setUniqueNotifyDanger(message.errorMessage)
      })
    },
    $setNotifySuccess (message) {
      swal({
        title: 'Bom trabalho!',
        text: message,
        icon: 'success'
      })
    },

    $setNotifyInfo (message) {
      swal({
        title: 'Sistema Informa!',
        text: message,
        icon: 'info'
      })
    },
    $setNotifyWarning (message) {
      swal({
        title: 'Alerta!',
        text: message,
        icon: 'warning'
      })
    },
    $setDialogQuestion (obj) {
      swal({
        title: `${obj.title}`,
        text: `${obj.message}`,
        icon: 'warning',
        buttons: ['Cancelar', 'Ok'],
        dangerMode: true
      }).then(willDelete => {
        if (willDelete) {
          obj.callback()
        }
      })
    }
  }
}
