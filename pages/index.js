import Layout from './Layout'
import { getPost } from '../utils'

const Page = props => {
  return (
    <Layout { ...props } />
  )
}

Page.getInitialProps = async context => {
  const currentUrl = context.asPath !== "/" 
    ? context.asPath.match(/^\/?([^?]+)/)[1] 
    : context.asPath

  if (context?.req?.method === 'HEAD')
    return { post: null, currentUrl }

  const post = await getPost(currentUrl)
  return { post, currentUrl }
}

export default Page