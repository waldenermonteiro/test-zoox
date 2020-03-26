<template>
  <b-modal ref="modalStateCreate" :title="`${!form._id ? 'Cadastrar' : 'Editar'} Estado`" @hidden="hideModal()" no-close-on-esc no-close-on-backdrop>
    <div class="d-block">
      <b-form>
        <b-alert :show="$v.form.$error" variant="warning">
          Existem campos inválidos
        </b-alert>
        <b-form-group id="input-group-1" label="Nome do Estado*:" label-for="input-1">
          <b-form-input
            @input="$v.form.name.$touch"
            :state="$v.form.name.$error === false ? null : false"
            v-model="form.name"
            required
            placeholder="Digite o nome do estado"
          ></b-form-input>
          <b-form-invalid-feedback id="input-live-feedback">
            O campo Nome do Estado é obrigatório
          </b-form-invalid-feedback>
        </b-form-group>
        <b-form-group id="input-group-1" label="Abreviação do Estado*:" label-for="input-1">
          <b-form-input
            @input="$v.form.abbreviation.$touch"
            :state="$v.form.abbreviation.$error === false ? null : false"
            v-model="form.abbreviation"
            type="email"
            required
            placeholder="Digite a abreviação do estado. Ex: PA"
            maxLength="2"
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
      <b-button variant="primary" size="sm" class="float-right" @click="send(form)">
        {{ !form._id ? "Cadastrar" : "Editar" }}
      </b-button>
    </template>
  </b-modal>
</template>
<script>
import Validations from './mixins/StateCreateValidations'
export default {
  props: {
    type: {
      required: true
    }
  },
  mixins: [Validations],
  data () {
    return {}
  },
  methods: {
    countDownChanged (dismissCountDown) {
      this.dismissCountDown = dismissCountDown
    },
    onReset () {
      this.form = { ...this.formCopy }
    },
    showModal () {
      this.$refs.modalStateCreate.show()
    },
    hideModal () {
      this.onReset()
      this.$v.form.$reset()
      this.$refs.modalStateCreate.hide()
    },
    setDataInForm (estado) {
      this.showModal()
      this.form = { ...estado }
    },
    send (form) {
      this.verifiyValidations()
      !form._id
        ? this.structure({ form, description: 'cadastrado', urlDispatch: 'create' })
        : this.structure({ form, description: 'alterado', urlDispatch: 'update' })
    },
    structure ({ form, description, urlDispatch }) {
      this.$createOrUpdate({
        urlDispatch: `State/${urlDispatch}`,
        messages: `Estado ${form.name} ${description} com sucesso`,
        params: form,
        callback: () => {
          this.$list({ urlDispatch: 'State/list' })
          this.hideModal()
        }
      })
    }
  }
}
</script>
