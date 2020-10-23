import Head from 'next/head'
import { fetchEntries, minWidth, getImage } from '../utils'
import Hero from '../components/Hero'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Content from '../components/Content'
import Sections from '../components/Sections'

const Layout = ({ currentUrl, post, children, blogPosts, ...rest }) => {
  if (!post) return null;
  return (
    <>
      <Head>
        <link rel="shortcut icon" type="image/x-icon" href="/favicon.png" />
        { post && <title>{ post.fields.title }</title> }
        { post && <meta name="description" content={ post.fields.description } /> }
        
        { post && <meta name="og:title" content={ post.fields.title } /> }
        { post && <meta name="og:image" content={ getImage(post?.fields?.hero?.fields?.media) } /> }
        { post && <meta name="og:url" content={`https://www.togethergaming.com/${post.fields.url}`} /> }
        { post?.fields?.robots && <meta name="robots" content={post.fields.robots} /> }

        <script dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-PFDMPRQ')`}} />
      </Head>
      <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PFDMPRQ"
      height="0" width="0" style={{display:'none',visibility:'hidden'}}></iframe></noscript>

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
          blogPosts={blogPosts}
        />
      )}
      
      { children }

      <Footer />
      
      <style jsx global>{`
        body {
          font: normal 200 normal 16px Poppins,sans-serif;
          color: #585858;
          margin: 0;
          background: url('/tgbg.png');
          background-position-y: 50vh;
          background-position-x: right;
          background-repeat: no-repeat;
        }
        h1,h2,h3,h4,h5,h6 {color:#444;}
        hr {max-width: 100px;border: 1px solid #44cbcb;margin: 2em auto;}
        blockquote {background: #f7f7f7;padding: 1em;position: relative;}
        blockquote:before {content: '"';position: absolute;font-size: 3em;font-style: italic;top: 0;left: 0;font-family: Georgia;color: #b1b1b1;}
        a {
          color: #43cccb;
          font-weight: 400;
        }
        h2:after,
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
        [class*="-box"] > .container div {
          padding: 20px;
          background: #fff;
          margin: 10px 0;
          box-shadow: 0 0 15px rgba(0,0,0,.05);
        }
        
        
        .columns {
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .columns > * {
          flex: 1;
          margin: 10px;
        }
        .columns > *:first-child {margin-left:0;}
        .columns > *:last-child {margin-right:0;}
        
        .clients-grid {
          flex-wrap: wrap;
          color: #fff;
          max-width: 1500px;
          margin: 0 auto;
        }
        .clients-grid > * {max-width: 150px;margin: 50px;flex: auto;}
        .clients-grid.columns > *:first-child {margin-left:50px;}
        .clients-grid.columns > *:last-child {margin-right:50px;}
        
        .m {margin: 100px 0;}
        .mt {margin-top: 100px;}
        .mb {margin-bottom: 100px;}
        
        .box {position:relative;overflow:hidden;transition: all .2s;box-shadow: 0 0 0 0 #00000036;}
        .box > img {width:100%;transition: all .2s;display: block;}
        .box:hover {transform:scale(1.05);box-shadow: 0 0 20px 2px #00000036;}
        .box:hover > img {transform:scale(1.5)}
        .box > img + div {position:absolute;bottom:0;left:0;right:0;z-index:1;padding:20px;}
        .box p {font-weight:100;}
        
        .our-offerings .box {min-width: 250px;}
        .wl-features .box {font-size:0.85em;}
        .blue-boxes.columns {flex-wrap:wrap;}
        .blue-boxes .box h4,
        .blue-boxes .box h3,
        .blue-boxes .box h2,
        .blue-boxes .box p {color:#fff;margin-bottom:0;}
        .blue-boxes .box h4,
        .blue-boxes .box h3,
        .blue-boxes .box h2 {font-weight: normal;}
        .blue-boxes .box h4 b,
        .blue-boxes .box h3 b,
        .blue-boxes .box h2 b {display: inline-block;}
        .blue-boxes .box:hover h4 b,
        .blue-boxes .box:hover h3 b,
        .blue-boxes .box:hover h2 b {animation: bounce 600ms linear;}
        
        .latest-news .columns {flex-wrap:wrap;}
        .latest-news .columns > * {min-width:300px;}
        .latest-news .more {margin-top:50px;text-align:center;}
        
        @keyframes bounce {
          0% {transform: translateX(0px);}
          25% {transform: translateX(10px);}
          50% {transform: translateX(-2px);}
          75% {transform: translateX(5px);}
          100% {transform: translateX(0px);}
        }

        @media (min-width: ${minWidth}) {
          [class*="-grid"] > .container div {
            min-width: 45%;
          }
          [class*="-grid-3"] > .container > div {
            min-width: 30%;
          }
          [class*="-grid-4"] > .container > div {
            min-width: 25%;
          }
          [class*="-grid-4-box"] > .container div,
          [class*="-grid-3-box"] > .container div,
          [class*="-grid-box"] > .container div {
            margin: 10px;
          }
        }
        
        
        .Sections>.index-section-header {padding-bottom:0;}
        .Sections>.index-section-solutions-grid-box {padding-top:0;}

        .index-section-partners-wide-center-background .container,
        .index-section-wl-partners-wide-center-background .container {
          display: flex;
          align-items: center;
          overflow: auto;
          padding: 0;
          scroll-snap-type: x mandatory;
        }

        .index-section-partners-wide-center-background .container::-webkit-scrollbar, 
        .index-section-wl-partners-wide-center-background .container::-webkit-scrollbar {
          display: none;
        }
        
        .index-section-partners-wide-center-background .container,
        .index-section-wl-partners-wide-center-background .container {
          -ms-overflow-style: none;
        }

        .index-section-partners-wide-center-background img,
        .index-section-wl-partners-wide-center-background img {
          width: 12.5%;
          min-width: 140px;
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
        
        .platform-front-end-section-our-work-grid-3-box-background-wide h2,
        .platform-front-end-section-our-work-grid-3-box-background-wide h3,
        .platform-front-end-section-our-work-grid-3-box-background-wide h4 {
          margin-bottom: 0;
        }
        .platform-front-end-section-our-work-grid-3-box-background-wide img {
          height: 200px;
          width: 100%;
          object-fit: cover;
        }
        .platform-front-end-section-our-work-grid-3-box-background-wide ul {
          margin: 0;
          padding: 0;
          font-size: .7em;
          display: inline-block;
        }
        .platform-front-end-section-our-work-grid-3-box-background-wide ul li {
          display: inline-block;
          margin: 0 10px 0 0;
          line-height: 1em;
        }
      `}</style>
      <link href="https://fonts.googleapis.com/css?family=Poppins:200,400,600&display=swap" rel="stylesheet" />
    </>
  )
}

export default Layout