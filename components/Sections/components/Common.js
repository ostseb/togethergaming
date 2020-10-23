import { renderRichFormat } from '../../../utils'
import Base from './Base'

const Common = section => (
  <Base {...section}>
    { renderRichFormat(section.fields.content) }
  </Base>
)

export default Common