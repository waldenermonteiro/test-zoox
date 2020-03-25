import { required } from 'vuelidate/lib/validators'
export default {
  data () {
    return {
      form: {
        ...this.formyCopy
      },
      formyCopy: {
        name: '',
        state_id: ''
      }
    }
  },
  methods: {
    verifiyValidations () {
      this.$v.form.$touch()
      if (this.$v.form.$error) {
        throw String('Existem campos inválidos')
      }
    }
  },
  validations: {
    form: {
      name: {
        required
      },
      state_id: {
        required
      }
    }
  }
}
