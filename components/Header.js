import { useState } from 'react'
import Link from 'next/link'
import { minWidth } from '../utils'

export default ({ activeUrl, heroFullscreen }) => {
  const [ isOpen, toggle ] = useState(false)
  return (
    <div className={`container ${heroFullscreen && 'hero-fullscreen'}`}>
      <Link href="/"><a><img alt="Together Gaming Logo" src="/tg-logo.png" /></a></Link>
      <button onClick={() => toggle(!isOpen)}><em></em><em>Menu</em><em></em></button>
      <nav className={isOpen ? 'open' : null}>
        <Link href="/"><a onClick={() => toggle(false)} className={activeUrl === '/' && 'active'}>Home</a></Link>
        <Link href="/platform"><a onClick={() => toggle(false)} className={activeUrl === 'platform' && 'active'}>Platform</a></Link>
        <Link href="/ir"><a onClick={() => toggle(false)} className={activeUrl === 'ir' && 'active'}>Investors</a></Link>
        <Link href="/governance"><a onClick={() => toggle(false)} className={activeUrl === 'governance' && 'active'}>Governance</a></Link>
        <Link href="/press"><a onClick={() => toggle(false)} className={activeUrl === 'press' && 'active'}>Press</a></Link>
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
        }
        
        div > a img {
          height: 75px;
          padding: 5px;
        }
        
        div.hero-fullscreen > a img {
          filter: brightness(255)
        }
        
        nav.open {
          display: block;
        }
        nav {
          display: none;
          position: fixed;
          top: 122px;
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
          font-size: 18px;
          font-weight: bold;
        }
        button {
          appearance: none;
          background: #43cbcb;
          border: 0;
          padding: 5px;
          outline: none;
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
        }
      `}</style>
    </div>
  )
}