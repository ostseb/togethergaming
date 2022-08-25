import { renderRichFormat, minWidth, getImage } from '../utils'

const Hero = ({ content, media, fullscreen = false }) => (
  <div className={`Hero ${fullscreen && 'fullscreen'}`}>
    <div className="wrap">
      <div className="container">
        { renderRichFormat(content) }
        { fullscreen && <img alt="Continue" src="/down.svg" /> }
      </div>
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
        background-color: #43cbcb;
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
      .Hero>.wrap {
        max-width: 1600px;
        margin: 0 auto;
        color: #fff;
        min-height: 50vh;
        display:flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        background-size: cover;
        background-position: center right;
        ${media && `background-image: url(${getImage(media, 'q=75&h=1400')});`}
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
        }
        .Hero .wrap {
          ${media && `background-image: url(${getImage(media, '&w=1200')});`}
        }
        .Hero.fullscreen {
          margin-top: -148px;
          height: 100vh;
        }
      }
    `}</style>
  </div>
);

export default Hero;
