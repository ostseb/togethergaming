import Link from 'next/link'

export default ({ activeUrl }) => (
  <>
    <div className="container">
      <Link href="/"><a><img src="/tg-logo.png" /></a></Link>
      <nav>
        <Link href="/"><a className={activeUrl === '/' && 'active'}>Home</a></Link>
        <Link href="/platform"><a className={activeUrl === 'platform' && 'active'}>Platform</a></Link>
        <Link href="/ir"><a className={activeUrl === 'ir' && 'active'}>IR</a></Link>
        <Link href="/governance"><a className={activeUrl === 'governance' && 'active'}>Governance</a></Link>
        <Link href="/press"><a className={activeUrl === 'press' && 'active'}>Press</a></Link>
      </nav>
    </div>
    <style jsx>{`
      div {
        padding: 40px;
        display: flex;
        align-items: center;
      }
      div a {
        height: 75px;
      }
      div a img {
        height: 100%;
        margin-right: 40px;
      }
      div nav a {
        padding: 5px;
        margin: 0 10px;
        text-decoration: none;
        color: inherit;
      }
      div nav a.active {
        color: #43cbcb;
      }
    `}</style>
  </>
)