import Link from 'next/link'
import { minWidth } from '../utils'

const Footer = () => (
  <div className="Footer">
    <div className="footer-contact">
      <div className="container">
        <p><strong>Ready to start something together?</strong><br />Reach out and tell your story. We’re always exited to meet new partners!</p>
        <Link className="button" href="/contact"><a>Get in touch <b>→</b></a></Link>
      </div>
    </div>
    <nav className="container">
      <div className="columns">
        <div className="column">
          <h4>Company</h4>
          <ul>
            <li><Link href="/"><a>Home</a></Link></li>
            <li><Link href="/platform"><a>Platform</a></Link></li>
            <li><Link href="/ir"><a>Investors</a></Link></li>
            <li><Link href="/governance"><a>Governance</a></Link></li>
            <li><Link href="/press"><a>Press</a></Link></li>
            <li><Link href="/contact"><a>Contact</a></Link></li>
          </ul>
        </div>
        <div className="column">
          <h4>Services</h4>
          <ul>
            <li><Link href="/white-label"><a>White Label</a></Link></li>
            <li><Link href="/turnkey"><a>Turnkey</a></Link></li>
            <li><Link href="/platform"><a>Platform</a></Link></li>
          </ul>
        </div>
        <div className="column">
          <h4>Legal</h4>
          <ul>
            <li><Link href="/privacy-policy"><a>Privacy policy</a></Link></li>
            <li><Link href="/cookie-policy"><a>Cookie policy</a></Link></li>
            <li><Link href="/information-security"><a>Information security</a></Link></li>
            <li><Link href="/legal-disclaimer"><a>Legal disclaimer</a></Link></li>
          </ul>
        </div>
        <div className="column">
          <h4>Social</h4>
          <li><Link href="https://www.linkedin.com/company/together-gaming-ltd-/"><a>LinkedIn</a></Link></li>
        </div>
      </div>
    </nav>

    <div className="container copyright">
      <p>This website www.togethergaming.com, is operated by Together Gaming Solutions P.L.C., a Company registered in Malta and licenced in the European Union having company registration number C72231 and a registered office at Triq   Paceville Avenue no. 6, St Julians STJ 3109, Malta. Together Gaming Solutions P.L.C. is operating under the following license, issued by MGA (Malta Gaming Authority): MGA/B2B/593/2018 granted as of the 29th April 2019.</p>
      <p>2019 All rights reserved. TogetherGaming.com</p>
    </div>
    
    <style jsx>{`
      .Footer {
        overflow: hidden;
      }
      .footer-contact {
        background: #43cbcb;
        padding: 100px 0;
        margin-bottom: 100px;
        font-size: 2em;
        color: #fff;
      }
      .footer-contact p {
        margin: 0;
      }
      .footer-contact a:hover {transform: scale(1.05);box-shadow: 13px 13px 15px 0px rgba(0,0,0,0.15);}
      .footer-contact a b {display: inline-block;}
      .footer-contact a:hover b {animation: bounce 600ms linear;}
      .footer-contact a {
        border: none;
        background: #ffffff;
        color: #43cbcb;
        border-radius: 50px;
        padding: 10px 30px;
        box-shadow: 3px 3px 15px 0px rgba(0,0,0,0.15);
        margin: 50px 0 0;
        text-decoration: none;
        display: inline-block;
        font-size: .7em;
        transition: all .2s;
      }
      .columns {
        align-items: flex-start;
      }
      nav {}
      ul, li {margin:0;padding:0;list-style:none;}
      nav h4 {margin-top: 0;}
      nav a {
        display: inline-block;
        color: inherit;
        text-decoration: none;
        font-size: .8em;
      }
    
      .copyright {
        margin-top: 100px;
        font-size: 11px;
      }
        
        @keyframes bounce {
          0% {transform: translateX(0px);}
          25% {transform: translateX(10px);}
          50% {transform: translateX(-2px);}
          75% {transform: translateX(5px);}
          100% {transform: translateX(0px);}
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
);

export default Footer;
