import Base from '../../../services/base'
class StateService extends Base {
  constructor () {
    super('/v1/states')
  }
}
export default new StateService()
