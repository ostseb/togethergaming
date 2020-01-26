import Link from 'next/link'

export default () => (
  <div className="Footer">
    <div className="container">
      <Link href="/"><a>Home</a></Link>
      <Link href="/platform"><a>Platform</a></Link>
      <Link href="/ir"><a>IR</a></Link>
      <Link href="/governance"><a>Governance</a></Link>
      <Link href="/press"><a>Press</a></Link>
    </div>
    <div className="container columns">
      <div className="column">
        <form action="mailto:info@togethergaming.com">
          <label for="from">E-mail</label>
          <input name="from" type="email" />
          <input name="subject" type="hidden" value="S" />
          <label for="from">Message</label>
          <textarea name="body">
            
          </textarea>
          <button>Send</button>
        </form>
      </div>
      <div className="column">
        
      </div>
    </div>
    <style jsx>{`
      .Footer {
        color: #fff;
        background: #43cbcb;
        padding: 40px;
      }
      .columns {}
      .columns .column:first-child {
        padding: 30px;
        background: #fff;
        color: #43cbcb;
      }
      input, textarea {
        display: block;
        width: 100%;
        border: 3px solid #43cbcb;
        margin: 10px 0;
        font-size: 16px;
        padding: 20px;
        outline: none;
        -webkit-appearance: none;
      }
    `}</style>
  </div>
)