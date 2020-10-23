import Layout from '../Layout'
import Card from '../../components/ArticleCard'
import { getPost, renderRichFormat, getBlogPosts, getImage } from '../../utils'
import Link from 'next/link'
import { useState } from 'react'
const l = 8;

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
            focus={s.fields.focus} 
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

  if (context?.req?.method === 'HEAD')
    return { page: null, currentUrl, blogPosts: [], p: 1 }

  const post = await getPost(currentUrl)
  const blogPosts = await getBlogPosts(l, 0)
  return { post, currentUrl, blogPosts, p: parseInt(context.query.p||1) }
}

export default Page