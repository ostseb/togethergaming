import { createClient } from 'contentful'
import { BLOCKS, INLINES } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

let client = null

export const fetchEntries = async props => {
  if (!client) {
    client = createClient({
      space: process.env.CONTENTFUL_SPACE_ID,
      accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
    })
  }

  const entries = await client.getEntries(props)
  if (entries.items) return entries.items
  console.log(`Error getting Entries for ${contentType.name}.`)
}

const richFormatOptions = {
  renderNode: {
    [BLOCKS.EMBEDDED_ENTRY]: node => {
      const { content } = node.data.target.fields
      return <div>{ renderRichFormat(content, richFormatOptions) }</div>
    },
    [BLOCKS.EMBEDDED_ASSET]: node => {
      const { file } = node.data.target.fields
      return <img src={file.url} />
    },
    [INLINES.EMBEDDED_ENTRY]: node => {
      const { content } = node.data.target.fields
      return <>{ renderRichFormat(content, richFormatOptions) }</>
    },
    [INLINES.EMBEDDED_ASSET]: node => {
      const { file } = node.data.target.fields
      return <img src={file.url} />
    },
  }
}
export const renderRichFormat = content => 
  documentToReactComponents(content, richFormatOptions)