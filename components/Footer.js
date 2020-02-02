import Link from 'next/link'
import { minWidth } from '../utils'

export default () => (
  <div className="Footer">
    <nav className="container">
      <Link href="/"><a>Home</a></Link>
      <Link href="/platform"><a>Platform</a></Link>
      <Link href="/ir"><a>Investors</a></Link>
      <Link href="/governance"><a>Governance</a></Link>
      <Link href="/press"><a>Press</a></Link>
      <Link href="/contact"><a>Contact</a></Link>
    </nav>
    <div className="columns-wrap">
      <div className="columns">
        <div className="column">
          <h3>Let's get together!</h3>
          <p>We'd love to hear your story and discover how we can build a winning partnership together.</p>

          <form onSubmit={e => {
            e.preventDefault()
            const _from = e.target.elements['message-from'].value
            const _body = e.target.elements['body'].value
            const subject = 'Hello TG!'
            const body = encodeURIComponent(_body + '\n\n\nFrom: ' + _from)
            window.open(`mailto:info@togethergaming.com?body=${body}&subject=${subject}`)
          }}>
            <label htmlFor="message-from">E-mail</label>
            <input id="message-from" name="from" type="email" />
            <label htmlFor="message-body">Message</label>
            <textarea name="body" id="message-body">
              
            </textarea>
            <button>Send</button>
          </form>
        </div>
        <div className="column">
          
        </div>
      </div>
    </div>
    <div className="container copyright">
      <p>This website www.togethergaming.com, is operated by Together Gaming Solutions P.L.C., a Company registered in Malta and licenced in the European Union having company registration number C72231 and a registered office at Triq   Paceville Avenue no. 6, St Julians STJ 3109, Malta. Together Gaming Solutions P.L.C. is operating under the following license, issued by MGA (Malta Gaming Authority): MGA/B2B/593/2018 granted as of the 29th April 2019.</p>
      <p>2019 All rights reserved. TogetherGaming.com</p>
    </div>
    <style jsx>{`
      .Footer {
        color: #fff;
        background: #43cbcb;
        overflow: hidden;
        margin-top: 75px;
      }
      nav {
        text-align: center;
        padding: 20px 0;
      }
      nav a {
        display: inline-block;
        margin: 5px 5px 0;
        padding: 5px;
        color: inherit;
      }
    
      .columns-wrap {
        background: #fff;
      }
      .columns-wrap .columns {
        flex-direction: column;
        max-width: 1000px;
        margin: 0 auto;
      }
      .columns .column {
      }
      .columns .column:first-child {
        padding: 20px;
        background: #fff;
        color: #585858;
      }
      .columns .column:last-child {
        background-image: url(/map.png);
        background-position: center center;
        background-size: cover;
        padding-bottom: 100%;
      }
      
      input, textarea, button {
        border: 2px solid #43cbcb;
        margin: 5px 0 10px;
        font-size: 16px;
        padding: 15px 20px;
        outline: none;
        appearance: none;
        color: #585858;
      }
      input, textarea {
        display: block;
        width: 100%;
      }
      button {
        padding-left: 50px;
        padding-right: 50px;
      }
      .copyright {
        font-size: 11px;
      }
      
      @media (min-width: ${minWidth}) {
        .columns-wrap .columns {
          flex-direction: row;
        }
        .columns .column:last-child {
          padding: 0;
        }
      }
    `}</style>
  </div>
)