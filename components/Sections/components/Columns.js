import { renderComponent } from '../'
import { renderRichFormat } from '../../../utils'
import Base from './Base'

const Columns = set => (
  <Base {...set} className="columns">
    { renderRichFormat(set?.fields?.content) }
    { set?.fields?.items?.map(renderComponent(set)) }
  </Base>
)

export default Columns

