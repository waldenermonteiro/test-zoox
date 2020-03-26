import Base from '../../../services/base'
class CityService extends Base {
  constructor () {
    super('/v1/cities')
  }
}
export default new CityService()
