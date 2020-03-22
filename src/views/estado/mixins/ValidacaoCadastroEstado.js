import { required } from 'vuelidate/lib/validators'
export default {
  data () {
    return {
      form: {
        ...this.formyCopy
      },
      formyCopy: {
        nome: '',
        abrev: ''
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
      nome: {
        required
      },
      abrev: {
        required
      }
    }
  }
}
