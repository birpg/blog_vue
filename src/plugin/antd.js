import { Button, Row, Col, Icon, Menu } from 'ant-design-vue'

const plugins = [Button, Row, Col, Icon, Menu, Menu.Item]

const antdPlugins = {
  install: function(Vue) {
    plugins.forEach(item => {
      Vue.component(item.name, item)
    })
  }
}

export default antdPlugins
