import { renderRichFormat } from '../utils'

export default ({ sections }) => (
  <div className="Sections">
    { sections && sections.map(section => (
      <div key={section.fields.identifier} className={`${section.fields.identifier}`}>
        <div className="container">
          { renderRichFormat(section.fields.content) }
        </div>
      </div>
    )) }
  </div>
)