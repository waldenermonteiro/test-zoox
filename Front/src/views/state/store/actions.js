/* eslint-disable no-useless-catch */
import StateService from '../services/StateService'

const list = async ({ commit }) => {
  try {
    const { data } = await StateService.list()
    commit('SET_DATA', data)
  } catch (error) {
    await error
  }
}
const create = async ({ commit }, obj) => {
  try {
    await StateService.create(obj)
  } catch (error) {
    throw error
  }
}
const update = async ({ commit }, obj) => {
  try {
    await StateService.update(obj, obj._id)
  } catch (error) {
    throw error
  }
}
const remove = async ({ commit }, obj) => {
  try {
    await StateService.remove(obj._id)
  } catch (error) {
    throw error
  }
}
export default {
  list,
  create,
  update,
  remove
}
