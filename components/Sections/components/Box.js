import { Fragment } from 'react'
import Link from 'next/link'
import { renderRichFormat } from '../../../utils'
import Base from './Base'

const BoxLink = ({ to, children }) => {
  if (!to)
    return <>{ children }</>
    
  return (
    <Link href={to}>
      <a>
        { children }
      </a>
    </Link>
  )
}

const Box = section => {
  const bg = section?.fields?.media?.fields?.file?.url
  
  
  return (
    <BoxLink to={section?.fields?.config?.link}>
      <Base {...section} className="box" style={{backgroundImage: `url(${bg})`}}>
        { bg && <img src={bg} /> }
        <div>
          { renderRichFormat(section.fields.content) }
        </div>
      </Base>
    </BoxLink>
  )
}

export default Box