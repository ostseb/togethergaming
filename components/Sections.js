import { renderRichFormat } from '../utils'

const Sections = ({ sections }) => (
  <div className="Sections">
    { sections && sections.map(section => (
      <div key={section.fields.identifier} className={`${section.fields.identifier}`}>
        <div className="container">
          { renderRichFormat(section.fields.content) }
        </div>
      </div>
    )) }
  </div>
);

export default Sections;
