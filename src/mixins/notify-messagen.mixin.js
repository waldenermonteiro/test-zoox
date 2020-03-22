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
        title: 'Good job!',
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
        title: 'Good job!',
        text: message,
        icon: 'success'
      })
    },

    $setNotifyInfo (message) {
      swal({
        title: 'Good job!',
        text: message,
        icon: 'success'
      })
    },
    $setNotifyWarning (message) {
      swal({
        title: 'Good job!',
        text: message,
        icon: 'success'
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
      //   Dialog.create({
      //     title: `${obj.title}`,
      //     message: `${obj.message}`,
      //     cancel: { label: 'Cancelar', color: 'negative', icon: 'cancel' },
      //     ok: { label: 'Sim', class: 'text-white bg-blue-gold', iconRight: 'save' }
      //   }).onOk(() => {
      //     obj.callback()
      //   })
    }
  }
}
