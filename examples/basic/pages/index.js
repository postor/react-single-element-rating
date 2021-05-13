import Tabs, { TabPane } from 'rc-tabs'
import Base from '../comps/Base'
import Fill from '../comps/fill'
import Icon1 from '../comps/icon1'
import Icon2 from '../comps/icon2'
import Size from '../comps/size'
import Step from '../comps/step'


const Index = () => {
  let links = [
    [Base, 'basic'],
    [Step, 'step/max'],
    [Size, 'size/font'],
    [Fill, 'fill/stroke'],
    [Icon1, 'change icon'],
    [Icon2, 'two icons'],
  ]
  return (<Tabs>{links.map(([Comp, title], i) =>
    <TabPane key={i} tab={<a style={{ textDecoration: 'underline' }}>{title}</a>}><Comp /></TabPane>)}
  </Tabs>)
}

export default Index