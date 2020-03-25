<template>
  <b-modal ref="modalCadastraCidade" :title="`${type} Cidade`">
    <div class="d-block">
      <b-form>
        <b-alert :show="$v.form.$error" variant="warning">
          Existem campos inválidos
        </b-alert>
        <b-form-group id="input-group-1" label="Nome da cidade*:" label-for="input-1">
          <b-form-input
            @input="$v.form.nomeCidade.$touch"
            :state="$v.form.nomeCidade.$error === false ? null : false"
            v-model="form.nomeCidade"
            required
            placeholder="Digite o nome da cidade"
          ></b-form-input>
          <b-form-invalid-feedback id="input-live-feedback">
            O campo Nome da cidade é obrigatório
          </b-form-invalid-feedback>
        </b-form-group>
        <b-form-group id="input-group-1" label="Estado*:" label-for="input-1">
          <b-form-select
            v-model="form.estado"
            @input="$v.form.estado.$touch"
            :state="$v.form.estado.$error === false ? null : false"
            :options="items"
            value-field="abrev"
            text-field="nomeEstado"
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
      <b-button variant="primary" size="sm" class="float-right" @click="cadastrarEstado()">
        Cadastrar
      </b-button>
    </template>
  </b-modal>
</template>
<script>
import Validations from './mixins/ValidacaoCadastroCidade'
import { mapState } from 'vuex'
export default {
  props: {
    type: {
      required: true
    }
  },
  mixins: [Validations],
  computed: {
    ...mapState('Estado', ['items'])
  },
  data () {
    return {
      error: '',
      selected: null,
      options: [
        { value: null, text: 'Selecione uma opção' },
        { value: 'a', text: 'This is First option' },
        { value: 'b', text: 'Selected Option' },
        { value: { C: '3PO' }, text: 'This is an option with object value' },
        { value: 'd', text: 'This one is disabled', disabled: true }
      ]
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
      this.$refs.modalCadastraCidade.show()
    },
    hideModal () {
      this.onReset()
      this.$v.form.$reset()
      this.$refs.modalCadastraCidade.hide()
    },
    setarDadosNoForm (estado) {
      this.showModal()
      this.form = { ...estado }
    },
    cadastrarEstado () {
      try {
        this.verifiyValidations()
        this.$createOrUpdate({
          urlDispatch: 'Estado/cadastrar',
          messages: 'Estado cadastrado com sucesso',
          callback: () => {
            this.hideModal()
          }
        })
      } catch (error) {
        this.error = error
      }
    }
  }
}
</script>
