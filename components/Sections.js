import Markdown from './Markdown';

const Sections = ({ sections }) => {
  return (
  <div className="Sections">
    { sections && sections.map(section => (
      <div key={section.fields.identifier} className={`${section.fields.identifier}`}>
        <div className="container">
          <Markdown>
            {section.fields.content}
          </Markdown>
        </div>
      </div>
    )) }
  </div>
)};

export default Sections;
