import { required } from 'vuelidate/lib/validators'
export default {
  data () {
    return {
      form: {
        ...this.formyCopy
      },
      formyCopy: {
        name: '',
        abbreviation: ''
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
      abbreviation: {
        required
      }
    }
  }
}
