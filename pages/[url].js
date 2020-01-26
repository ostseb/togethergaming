import Head from 'next/head'
import { withRouter } from 'next/router'
import { useState, useEffect } from 'react'
import { fetchEntries } from '../utils'
import Hero from '../components/Hero'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Content from '../components/Content'

const Page = ({ router }) => {
  const [ post, setPost ] = useState(null)
  useEffect(() => {
    (async () => {
      const post = await fetchEntries({
        content_type: 'post',
        'fields.url[in]': router.query.url || '/'
      })
      setPost(post[0])
    })()
  }, [router.query.url])
  
  return (
    <>
      <Head>
        <link href="https://fonts.googleapis.com/css?family=Poppins:200,400,600&display=swap" rel="stylesheet" />
        { post && <title>{ post.fields.title }</title> }
        { post && <meta type="description" content={ post.fields.description } /> }
      </Head>

      <Header activeUrl={router.query.url || '/'} />
      
      { post && post.fields.hero ? (
        <Hero 
          content={post.fields.hero.fields.content}
          media={post.fields.hero.fields.media}
        />
      ) : null}
      
      { post && (
        <Content 
          content={post.fields.content}
        />
      )}

      <Footer />
      
      <style jsx global>{`
        body {
          font: normal 200 normal 16px Poppins,sans-serif;
          color: #848484;
          margin: 0;
        }
        h1,h2,h3,h4,h5,h6 {color:#444;}
        * {
          box-sizing: border-box;
        }
        .container {
          max-width: 850px;
          width: 100%;
          margin: 0 auto;
        }
        img {
          max-width: 100%;
        }
        .columns {
          display: flex;
        }
        .columns .column {
          flex: 1;
        }
      `}</style>
    </>
  )
}

export default withRouter(Page)