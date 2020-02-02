import { renderRichFormat, minWidth, getImage } from '../utils'

export default ({ content, media, fullscreen = false }) => (
  <div className={`Hero ${fullscreen && 'fullscreen'}`}>
    <div className="container">
      { renderRichFormat(content) }
      { fullscreen && <img alt="Continue" src="/down.svg" /> }
    </div>
    <style jsx global>{`
      .Hero p {
        margin: 0;
        display: inline;
        background: rgba(67, 203, 203, .5);
      }
    `}</style>
    <style jsx>{`
      .Hero {
        font-size: 2em;
        min-height: 50vh;
        color: #fff;
        
        display:flex;
        flex-direction: column;
        background-color: #43cbcb;
        justify-content: center;
        align-items: flex-start;
        background-size: cover;
        background-position: center right;
        ${media && `background-image: url(${getImage(media, 'q=75&w=500')});`}
      }
      .Hero.fullscreen {
        margin-top: -122px;
        height: 100vh;
      }
      .Hero img {
        position: absolute;
        width: 30px;
        bottom: 20px;
        left: 50%;
        transform: translateX(-50%);
        animation: bounce 1s infinite;
      }
      @keyframes bounce {
        0% {
          transform: translate3d(-50%,-25%,0);
        }
        50% {
          transform: translate3d(-50%, 0%,0);
        }
        100% {
          transform: translate3d(-50%, -25%,0);
        }
      }
      @media (min-width:${minWidth}) {
        .Hero {
          font-size: 3em;
          ${media && `background-image: url(${getImage(media, '&w=1200')});`}
        }
        .Hero.fullscreen {
          margin-top: -148px;
          height: 100vh;
        }
      }
    `}</style>
  </div>
)