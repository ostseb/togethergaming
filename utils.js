import { createClient } from 'contentful'
import { BLOCKS, INLINES } from '@contentful/rich-text-types'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { documentToPlainTextString } from '@contentful/rich-text-plain-text-renderer'
import Link from 'next/link'
import slugify from 'slugify'

let client = null

export const fetchEntries = async props => {
  if (!client) {
    client = createClient({
      space: process.env.CONTENTFUL_SPACE_ID,
      accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
    })
  }

  const entries = await client.getEntries({
    include: 3,
    ...props
  })
  if (entries.items) return entries.items
  console.log(`Error getting Entries for ${contentType.name}.`)
}

export const getPost = async url => {
  const posts = await fetchEntries({
    content_type: 'post',
    'fields.url[in]': url
  })
  
  return posts[0]
}

export const getBlogPosts = async (limit = 10, skip = 0) => {
  const posts = await fetchEntries({
    content_type: 'post',
    'fields.type[in]': 'blogEntry',
    limit,
    skip,
  })
  
  return posts
}

export const getImage = (media, query = null) => {
  if (!media || !media?.fields?.file)
    return null
  return `${media?.fields?.file?.url}?${query}`
}

const richFormatOptions = {
  renderText: text => {
    return text.split('\n').reduce((children, textSegment, index) => {
      return [...children, index > 0 && <br key={index} />, textSegment];
    }, []);
  },
  renderNode: {
    [BLOCKS.HEADING_1]: (node, children) => {
      const { value } = node.content[0]
      return <h1 id={slugify(value, {lower:true})}>{ children }</h1>
    },
    [BLOCKS.EMBEDDED_ENTRY]: node => {
      const { content, identifier } = node.data.target.fields || {}
      return <div className={identifier}>{ renderRichFormat(content) }</div>
    },
    [BLOCKS.EMBEDDED_ASSET]: node => {
      const { file, title } = node.data.target.fields || {}
      return <img alt={title} src={file.url} />
    },
    [INLINES.EMBEDDED_ENTRY]: node => {
      const { content } = node.data.target.fields || {}
      return <>{ renderRichFormat(content) }</>
    },
    [INLINES.EMBEDDED_ASSET]: node => {
      const { file, title } = node.data.target.fields || {}
      return <img alt={title} src={file.url} />
    },
    [INLINES.ENTRY_HYPERLINK]: node => {
      const { url, title } = node.data.target.fields
      const { value } = node.content[0]
      const link = url.match(/^[a-z]*:?\/\/.*/) ? url : `/${url}`
      return <Link href={link}><a title={title}>{value}</a></Link>
    },
    [INLINES.ASSET_HYPERLINK]: node => {
      const { file: { url }, title } = node.data.target.fields
      const { value } = node.content[0]
      const link = url.match(/^[a-z]*:?\/\/.*/) ? url : `/${url}`
      return <Link href={link}><a title={title}>{value}</a></Link>
    },
  }
}

export const renderRichFormat = (content, plain = false) => 
  plain 
    ? documentToPlainTextString(content)
    : documentToReactComponents(content, richFormatOptions)
  
export const maxWidth = '991px'
export const minWidth = '992px'