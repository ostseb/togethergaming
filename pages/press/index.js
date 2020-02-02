import Layout from '../Layout'
import { getPost, renderRichFormat, getBlogPosts, getImage } from '../../utils'
import Link from 'next/link'
import { useState } from 'react'
const l = 8;
const Card = ({ media, content, url, createdAt }) => {
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
            ${media && `background-image: url(${getImage(media, 'fm=jpg&q=75&w=300')});`}
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
          }
          
          time {
            display: block;
            font-style: italic;
            margin-bottom: 5px;
          }
        `}</style>
      </div>
    </Link>
  )
}
const Page = ({ blogPosts, p, ...rest}) => {
  const [ page, setPage ] = useState(p)
  const [ posts, setPosts ] = useState(blogPosts)

  const nextPage = async () => {
    const res = await getBlogPosts(l, (page*l))
    setPage(page+1)
    setPosts([...posts, ...res])
  }
  
  return (
    <Layout { ...rest }>
      <div className="cards">
        { posts.map(s => (
          <Card 
            key={s.fields.url} 
            media={s?.fields?.hero?.fields?.media} 
            createdAt={s.sys.createdAt} 
            content={s.fields.content} 
            url={s.fields.url} 
          />)
        )}
      </div>  
      <a onClick={nextPage}>Load older posts</a>
      <style jsx>{`
        .cards {
          display: flex;
          align-items: top;
          justify-content: center;
          flex-wrap: wrap;
        }
        
        a {
          display: block;
          text-align: center;
          margin: 2em;
        }
      `}</style>
    </Layout>
  )
}

Page.getInitialProps = async context => {
  const currentUrl = context.asPath !== "/" 
    ? context.asPath.match(/^\/?([^?]+)/)[1] 
    : context.asPath

  const post = await getPost(currentUrl)
  const blogPosts = await getBlogPosts(l, 0)
  return { post, currentUrl, blogPosts, p: parseInt(context.query.p||1) }
}

export default Page