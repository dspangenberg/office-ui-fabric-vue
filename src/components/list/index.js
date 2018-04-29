import List from './List.vue'
import ListItem from './ListItem.vue'
import ListItemAction from './ListItemAction.vue'

export default function (Vue) {
  Vue.component(List.name, List)
  Vue.component(ListItem.name, ListItem)
  Vue.component(ListItemAction.name, ListItemAction)
}
