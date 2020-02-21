import Head from 'next/head'
import { fetchEntries, minWidth, getImage } from '../utils'
import Hero from '../components/Hero'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Content from '../components/Content'
import Sections from '../components/Sections'

const Layout = ({ currentUrl, post, children, ...rest }) => {
  if (!post) return null;
  return (
    <>
      <Head>
        <link rel="shortcut icon" type="image/x-icon" href="/favicon.png" />
        
        <link href="https://fonts.googleapis.com/css?family=Poppins:200,400,600&display=swap" rel="stylesheet" />
        { post && <title>{ post.fields.title }</title> }
        { post && <meta name="description" content={ post.fields.description } /> }
        
        { post && <meta name="og:title" content={ post.fields.title } /> }
        { post && <meta name="og:image" content={ getImage(post?.fields?.hero?.fields?.media, 'fm=jpg&q=75&w=1080') } /> }
        { post && <meta name="og:url" content={`https://www.togethergaming.com/${post.fields.url}`} /> }
      </Head>

      <Header 
        activeUrl={currentUrl} 
        heroFullscreen={post.fields.heroFullscreen}
      />
      
      { post && post.fields.hero ? (
        <Hero 
          content={post.fields.hero.fields.content}
          media={post.fields.hero.fields.media}
          fullscreen={post.fields.heroFullscreen}
        />
      ) : null}
      
      { post && (
        <Content 
          content={post.fields.content}
          type={post.fields.type}
          createdAt={post.sys.createdAt}
        />
      )}
      
      { post && (
        <Sections 
          sections={post.fields.sections}
        />
      )}
      
      { children }

      <Footer />
      
      <style jsx global>{`
        body {
          font: normal 200 normal 16px Poppins,sans-serif;
          color: #585858;
          margin: 0;
        }
        h1,h2,h3,h4,h5,h6 {color:#444;}
        a {
          color: #43cccb;
          font-weight: 400;
        }
        h1:after {
          content: '';
          background: #43cbcb;
          width: 75px;
          height: 2px;
          display: block;
          margin-top: 5px;
        }
        * {box-sizing: border-box;}
        p:empty {display:none;}
        ul li p {margin: 0;}
        .container {
          max-width: 850px;
          width: 100%;
          margin: 0 auto;
          padding: 0 20px;
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
        
        [class*="-center"] > .container {
          text-align: center;
        }
        
        [class*="-wide"] > .container {
          max-width: none;
        }
        
        [class*="-background"] {
          background: #f7f7f7;
        }
        
        [class*="-grid"] > .container {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
        }
        [class*="-box"]>.container h2 {
          margin-top: 0;
        }
        [class*="-grid"] > .container h2 {
          min-width: 100%;
        }
        [class*="-grid"] > .container div {
          min-width: 100%;
          flex: 1;
        }
        [class*="-grid-box"] > .container div {
          padding: 20px;
          background: #fff;
          margin: 10px 0;
          box-shadow: 0 0 15px rgba(0,0,0,.05);
        }
        @media (min-width: ${minWidth}) {
          [class*="-grid"] > .container div {
            min-width: 45%;
          }
          [class*="-grid-3"] > .container > div {
            min-width: 30%;
          }
          [class*="-grid-box"] > .container div {
            margin: 10px;
          }
        }
        
        .Sections > div {
          padding: 25px 0;
        }
        
        .Sections > div .container h2:first-of-type {
          margin-top: 0;
        }
        
        
        .Sections>.index-section-header {padding-bottom:0;}
        .Sections>.index-section-solutions-grid-box {padding-top:0;}

        .index-section-partners-wide-center-background .container {
          display: flex;
          align-items: center;
          overflow: auto;
          padding: 0;
          scroll-snap-type: x mandatory;
        }

        .index-section-partners-wide-center-background img {
          width: 12.5%;
          padding: 0 20px;
          scroll-snap-align: start;
        }
        
        .governance-board-section-background-grid-3 > div > div {
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-between;
        }
        .governance-board-section-background-grid-3 > div > div img {
          max-width: 70%;
        }
        
        .contact-section-grid-box-background ul {
          margin: 0;
          padding: 0;
          list-style: none;
        }
        
        .contact-section-grid-box-background li > p {
          overflow: hidden;
          text-overflow: ellipsis;
        }
      `}</style>
    </>
  )
}

export default Layout