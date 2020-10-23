import Link from 'next/link'
import { getPost, renderRichFormat, getBlogPosts, getImage } from '../utils'

const Card = ({ media, content, url, focus = 'faces', createdAt }) => {
  const plainText = renderRichFormat(content, true).substr(0,140)
  return (
    <Link href={url}>
      <div className="Card">
        <header />
        <div>
          { createdAt && <time dateTime={createdAt}>{ Intl.DateTimeFormat('en-GB', { dateStyle: 'long', timeStyle: 'short'}).format(new Date(createdAt)) }</time> }
          { plainText }
          { plainText.length === 140 && '...' }
        </div>
        <a>Read the full story</a>
        <style jsx>{`
          .Card {
            max-width: 300px;
            border-radius: 4px;
            overflow: hidden;
            margin: 10px;
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            cursor: pointer;
            box-shadow:0px 5px 15px rgba(0, 0, 0, 0.05);
            background: #fff;
          }
          
          .Card header {
            padding-bottom: 60%;
            ${media && `background-image: url(${getImage(media, `fm=jpg&q=85&w=600&f=${focus}&fit=thumb`)});`}
            background-size: 150%;
            background-position: center center;
          }
          
          .Card > div {
            padding: 20px;
            font-size: 14px;
          }
          
          a {
            display: block;
            text-align: center;
            padding: 10px 0;
            background: #43cbcb;
            color: #fff;
            margin-top: auto;
          }
          
          time {
            display: block;
            font-style: italic;
            margin-bottom: 5px;
            font-size: .8em;
          }
        `}</style>
      </div>
    </Link>
  )
}

export default Card;
