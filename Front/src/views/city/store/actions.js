/* eslint-disable no-useless-catch */
import CityService from '../services/CityService'

const list = async ({ commit }) => {
  try {
    const { data } = await CityService.list()
    commit('SET_DATA', data)
  } catch (error) {
    await error
  }
}
const create = async ({ commit }, obj) => {
  try {
    await CityService.create(obj)
  } catch (error) {
    throw error
  }
}
const update = async ({ commit }, obj) => {
  try {
    await CityService.update(obj, obj._id)
  } catch (error) {
    throw error
  }
}
const remove = async ({ commit }, obj) => {
  try {
    await CityService.remove(obj._id)
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
