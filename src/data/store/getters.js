import modules from './modules/index'
let modulesGetters = {}
Object.keys(modules).forEach(item => {
  modulesGetters[item] = state => state[item]
})
const getters = {
  ...modulesGetters
}
export default getters