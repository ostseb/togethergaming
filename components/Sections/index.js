import cn from 'classnames'
import { renderRichFormat } from '../../utils'
import components from './components'

export const renderComponent = props => section => {
  const type = section?.fields?.component
  const Component = components[type] || components['Common']
  return <Component {...props} {...section} />
}

const Sections = ({ sections, ...rest }) => (
  <div className="Sections">
    { sections && sections.map(renderComponent(rest)) }
  </div>
);

export default Sections;
