import { Button } from 'ant-design-vue'

const plugins = [Button]

const antdPlugins = {
  install: function(Vue) {
    plugins.forEach(item => {
      Vue.component(item.name, item)
    })
  }
}

export default antdPlugins
