import Layout from './Layout'
import { getPost } from '../utils'

const Page = props => {
  return (
    <Layout { ...props }>
      <div className="container">
        <section className="offering">
          <h1>Our offering</h1>
          <p>Giving unprecedented flexibility to clients, our products work together as an entire platform or independently and can be easily integrated with existing platforms.</p>
          
          <div className="flex">
            <div className="box">
              <img src="/img.png" />
              <div>
                <h3>Whitelabel</h3>
                <p>Turnkey Casino solution is our complete software package, perfect for growing a successful online casino.</p>
              </div>
            </div>
            <div className="box">
              <img src="/img.png" />
              <div>
                <h3>Turnkey</h3>
                <p>Turnkey Casino solution is our complete software package, perfect for growing a successful online casino.</p>
              </div>
            </div>
          </div>
          {/* <div className="flex">
            <div className="box">
              <img src="/img.png" />
              <div>
                <h4>Casino</h4>
                <p>Turnkey Casino solution is our complete software package.</p>
              </div>
            </div>
            
            <div className="box">
              <img src="/img.png" />
              <div>
                <h4>Sport</h4>
                <p>Turnkey Casino solution is our complete software package.</p>
              </div>
            </div>
            
            <div className="box">
              <img src="/img.png" />
              <div>
                <h4>Bonus</h4>
                <p>Turnkey Casino solution is our complete software package.</p>
              </div>
            </div>
            
            <div className="box">
              <img src="/img.png" />
              <div>
                <h4>API</h4>
                <p>Turnkey Casino solution is our complete software package.</p>
              </div>
            </div>
          </div> */}
        </section>
        
        <section className="news-events">
          <h1>Latest news & events</h1>
          <p>Giving unprecedented flexibility to clients, our products work together as an entire platform or independently and can be easily integrated with existing platforms.</p>
          <div className="flex">
            <div>News</div>
            <div>News</div>
            <div>News</div>
          </div>
        </section>
        
        <section className="clients">
          <h1>Our clients</h1>
          <p>Giving unprecedented flexibility to clients, our products work together as an entire platform or independently and can be easily integrated with existing platforms.</p>
          <div className="flex-grid">
            <div><img src="/rap.png" /></div>
            <div><img src="/zen.png" /></div>
            <div><img src="/bet.png" /></div>
            <div><img src="/fast.png" /></div>
            <div><img src="/tur.png" /></div>
            <div><img src="/rap.png" /></div>
          </div>
        </section>
        
        {/* <div>
          <strong>Ready to start something together?</strong><br/>
          Reach out and tell your story. We’re always exited to meet new partners!<br/>
          <br/>
          <a href="#" className="button">Get in touch</a>
        </div> */}
        <style jsx>{`
          section {margin: 100px 0;}
          .flex {display:flex;}
          .flex > * {flex:1;margin: 10px;}
          .flex > *:first-child {margin-left:0;}
          .flex > *:last-child {margin-right:0;}
          
          .flex-grid {display:flex;flex-wrap:wrap;}
          .flex-grid > * {width:50%;}
          
          .box {
            transition: all .2s;
            position: relative;
            overflow: hidden;
          }
          
          .box > div {
            position: absolute;
            left: 0;
            right: 0;
            bottom: 0;
            padding: 20px;
          }
          
          .box > img {
            transition: all .2s;
            position: relative;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            
          }
          .box:hover {
            transform: scale(1.05);
          }
          .box:hover > img {
            transform: scale(1.15);
          }
          
          .box p,
          .box h1,
          .box h2,
          .box h3,
          .box h4,
          .box h5,
          .box h6 {margin: 0;}
        `}</style>
      </div>
    </Layout>
  )
}

Page.getInitialProps = async context => {
  const currentUrl = context.asPath !== "/" 
    ? context.asPath.match(/^\/?([^?]+)/)[1] 
    : context.asPath

  if (context?.req?.method === 'HEAD')
    return { post: null, currentUrl }

  const post = await getPost(currentUrl)
  return { post, currentUrl }
}

export default Page