import { renderRichFormat } from '../utils'

export default ({ content, media }) => (
  <>
    <div className="Hero">
      <div className="container">
        { renderRichFormat(content) }
      </div>
    </div>
    <style jsx>{`
      .Hero {
        min-height: 60vh;
        padding: 50px;
        color: #fff;
        font-size: 3em;
        display:flex;
        flex-direction: column;
        background-color: #43cbcb;
        justify-content: center;
        align-items: flex-start;
        background-size: cover;
        background-position: center right;
        background-image: url(${media && media.fields.file.url});
      }
    `}</style>
  </>
)