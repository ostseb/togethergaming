import Markdown from './Markdown';

const Content = ({ content, type, createdAt }) => (
  <div className="container">
    { type && type.includes('blogEntry') && <time dateTime={createdAt}>{ Intl.DateTimeFormat('en-GB', { dateStyle: 'long', timeStyle: 'short'}).format(new Date(createdAt)) }</time> }
    <Markdown>
      {content}
    </Markdown>
    <style jsx>{`
      time {
        transform: translateY(1.3rem);
        display: block;
        font-style: italic;
        font-size: 14px;
      }
    `}</style>
  </div>
);

export default Content;
