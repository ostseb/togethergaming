import { renderComponent } from '../'
import { renderRichFormat } from '../../../utils'
import Link from 'next/link'
import Card from '../../ArticleCard'
import Base from './Base'
import Columns from './Columns'

const LatestNews = ({blogPosts,...set}) => (
  <Base {...set} className="latest-news">
    <div className="columns">
      { blogPosts?.map(s => (
        <Card 
          key={s.fields.url} 
          media={s?.fields?.hero?.fields?.media} 
          createdAt={s.sys.createdAt} 
          content={s.fields.content} 
          url={s.fields.url} 
          focus={s.fields.focus} 
        />)
      )}
    </div>
    <div className="container more">
      <Link href="/press"><a>Show all news & events →</a></Link>
    </div>
    
  </Base>
)

export default LatestNews

