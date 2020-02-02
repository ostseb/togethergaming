import { useState } from 'react'
import Link from 'next/link'
import { minWidth } from '../utils'

export default ({ activeUrl, heroFullscreen }) => {
  const [ isOpen, toggle ] = useState(false)
  return (
    <div className={`container ${isOpen && 'open'} ${heroFullscreen && 'hero-fullscreen'}`}>
      <Link href="/"><a><img alt="Together Gaming Logo" src="/tg-logo.png" /></a></Link>
      <button onClick={() => toggle(!isOpen)}><em></em><em>Menu</em><em></em></button>
      <nav>
        <Link href="/"><a onClick={() => toggle(false)} className={activeUrl === '/' && 'active'}>Home</a></Link>
        <Link href="/platform"><a onClick={() => toggle(false)} className={activeUrl === 'platform' && 'active'}>Platform</a></Link>
        <Link href="/ir"><a onClick={() => toggle(false)} className={activeUrl === 'ir' && 'active'}>Investors</a></Link>
        <Link href="/governance"><a onClick={() => toggle(false)} className={activeUrl === 'governance' && 'active'}>Governance</a></Link>
        <Link href="/press"><a onClick={() => toggle(false)} className={activeUrl === 'press' && 'active'}>Press</a></Link>
        <Link href="/contact"><a onClick={() => toggle(false)} className={activeUrl === 'contact' && 'active'}>Contact</a></Link>
      </nav>
      <style jsx>{`
        .hero-fullscreen {
          color: #fff;
        }
        div {
          padding: 20px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
        }
        
        div > a {
          display: inline-block;
          z-index: 1;
          position: relative;
        }
        
        div > a img {
          height: 75px;
          padding: 5px;
        }
        
        div.open > a img,
        div.hero-fullscreen > a img {
          filter: brightness(255)
        }
        
        div.open nav {
          display: block;
        }
        nav {
          display: none;
          position: fixed;
          padding-top: 122px;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: #43cbcb;
        }
        nav a {
          display: block;
          padding: 20px;
          text-align: center;
          border-top: 1px solid rgba(255, 255, 255, .1);
          color: #fff;
          text-decoration: none;
          border-bottom: 1px solid rgba(0, 0, 0, .1);
          font-weight: bold;
        }
        button {
          appearance: none;
          background: #43cbcb;
          border: 0;
          padding: 5px;
          outline: none;
          z-index: 1;
          position: relative;
        }

        button em {
          content: '';
          height: 4px;
          background: #fff;
          width: 25px;
          display: block;
          overflow: hidden;
          margin: 6px 0;
          color: #fff;
        }
        button em:first-child {margin-top:0;}
        button em:last-child {margin-bottom:0;}
        
        @media (min-width:${minWidth}) {
          div > a img {
            height: 100px;
          }
          button {
            display: none;
          }
          nav {
            display: block;
            position: static;
            top: auto;
            padding-top: 0;
            left: auto;
            right: auto;
            bottom: auto;
            background: none;
          }
          nav a {
            display: inline-block;
            border: none;
            color: inherit;
            font-weight: inherit;
            padding: 10px 20px;
          }
          nav a.active {
            color: #43cbcb;
          }
          .hero-fullscreen nav a.active {
            background: #fff;
          }
          .hero-fullscreen nav a[href="/contact"] {
            background: #fff;
            color: #43cbcb;
          }
          nav a[href="/contact"].active,
          nav a[href="/contact"] {
            background: #43cbcb;
            color: #ffffff;
            border-radius: 50px;
            padding: 7px 30px;
            box-shadow: 3px 3px 15px 0px rgba(0, 0, 0, 0.15);
            margin-left: 20px;
          }
        }
      `}</style>
    </div>
  )
}