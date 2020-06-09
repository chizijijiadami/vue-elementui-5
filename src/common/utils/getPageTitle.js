import store from 'store'
const title=store.getters.app.system.title
export default function getPageTitle(pageTitle) {
    if (pageTitle) {
      return `${pageTitle} - ${title}`
    }
    return `${title}`
}