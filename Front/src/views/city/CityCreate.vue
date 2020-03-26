<template>
  <b-modal ref="modalCityCreate" :title="`${!form._id ? 'Cadastrar' : 'Editar'} Cidade`" @hidden="hideModal()" no-close-on-esc no-close-on-backdrop>
    <div class="d-block">
      <b-form>
        <b-alert :show="$v.form.$error" variant="warning">
          Existem campos inválidos
        </b-alert>
        <b-form-group id="input-group-1" label="Nome da cidade*:" label-for="input-1">
          <b-form-input
            @input="$v.form.name.$touch"
            :state="$v.form.name.$error === false ? null : false"
            v-model="form.name"
            required
            placeholder="Digite o nome da cidade"
          ></b-form-input>
          <b-form-invalid-feedback id="input-live-feedback">
            O campo Nome da cidade é obrigatório
          </b-form-invalid-feedback>
        </b-form-group>
        <b-form-group id="input-group-1" label="Estado*:" label-for="input-1">
          <b-form-select
            v-model="form.state_id"
            @input="$v.form.state_id.$touch"
            :state="$v.form.state_id.$error === false ? null : false"
            :options="states"
            value-field="_id"
            text-field="name"
          ></b-form-select>
          <b-form-invalid-feedback id="input-live-feedback">
            Selecione um estado
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
import Validations from './mixins/CityCreateValidations'
import { mapState } from 'vuex'
export default {
  props: {
    type: {
      required: true
    }
  },
  mixins: [Validations],
  computed: {
    ...mapState('State', ['states'])
  },
  mounted () {
    this.$list({
      urlDispatch: 'State/list'
    })
  },
  methods: {
    countDownChanged (dismissCountDown) {
      this.dismissCountDown = dismissCountDown
    },
    onReset () {
      this.form = { ...this.formCopy }
    },
    showModal () {
      this.$refs.modalCityCreate.show()
    },
    hideModal () {
      this.onReset()
      this.$v.form.$reset()
      this.$refs.modalCityCreate.hide()
    },
    setDataInForm (city) {
      this.showModal()
      this.form = { ...city }
    },
    send (form) {
      this.verifiyValidations()
      !form._id
        ? this.structure({ form, description: 'cadastrado(a)', urlDispatch: 'create' })
        : this.structure({ form, description: 'alterado(a)', urlDispatch: 'update' })
    },
    structure ({ form, description, urlDispatch }) {
      this.$createOrUpdate({
        urlDispatch: `City/${urlDispatch}`,
        messages: `Cidade ${form.name} ${description} com sucesso`,
        params: form,
        callback: () => {
          this.$list({ urlDispatch: 'City/list' })
          this.hideModal()
        }
      })
    }
  }
}
</script>
