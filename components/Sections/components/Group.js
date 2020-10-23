import { renderComponent } from '../'
import Base from './Base'

const Group = set => (
  <Base {...set}>
    { set?.fields?.items?.map(renderComponent(set)) }
  </Base>
)

export default Group

