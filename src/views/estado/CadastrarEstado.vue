<template>
  <b-modal ref="modalCadastrarEstado" :title="`${type} Estado`">
    <div class="d-block">
      <b-form>
        <b-alert :show="$v.form.$error" variant="warning">
          Existem campos inválidos
        </b-alert>
        <b-form-group id="input-group-1" label="Nome do Estado*:" label-for="input-1">
          <b-form-input
            @input="$v.form.nome.$touch"
            :state="$v.form.nome.$error === false ? null : false"
            v-model="form.nome"
            required
            placeholder="Digite o nome do estado"
          ></b-form-input>
          <b-form-invalid-feedback id="input-live-feedback">
            O campo Nome do Estado é obrigatório
          </b-form-invalid-feedback>
        </b-form-group>
        <b-form-group id="input-group-1" label="Abreviação do Estado*:" label-for="input-1">
          <b-form-input
            @input="$v.form.abrev.$touch"
            :state="$v.form.abrev.$error === false ? null : false"
            v-model="form.abrev"
            type="email"
            required
            placeholder="Digite a abreviação do estado. Ex: PA"
          ></b-form-input>
          <b-form-invalid-feedback id="input-live-feedback">
            O campo Abreviação do Estado é obrigatório
          </b-form-invalid-feedback>
        </b-form-group>
      </b-form>
    </div>
    <template v-slot:modal-footer>
      <b-button variant="danger" size="sm" class="float-right" @click="hideModal()">
        Fechar
      </b-button>
      <b-button type="reset" variant="" size="sm" class="float-right" @click="onReset()">
        Limpar Campos
      </b-button>
      <b-button variant="primary" size="sm" class="float-right" @click="cadastrarEstado()">
        Cadastrar
      </b-button>
    </template>
  </b-modal>
</template>
<script>
import Validations from './mixins/ValidacaoCadastroEstado'
export default {
  props: {
    type: {
      required: true
    }
  },
  mixins: [Validations],
  data () {
    return {
      error: ''
    }
  },
  methods: {
    countDownChanged (dismissCountDown) {
      this.dismissCountDown = dismissCountDown
    },
    onReset () {
      this.form = { ...this.formCopy }
    },
    showModal () {
      this.$refs.modalCadastrarEstado.show()
    },
    hideModal () {
      this.onReset()
      this.$v.form.$reset()
      this.$refs.modalCadastrarEstado.hide()
    },
    cadastrarEstado () {
      try {
        this.verifiyValidations()
      } catch (error) {
        this.error = error
      }
    }
  }
}
</script>
