import { renderRichFormat } from '../utils'

export default ({ content }) => (
  <>
    <div className="container">
      { renderRichFormat(content) }
    </div>
  </>
)