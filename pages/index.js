import Layout from './Layout'
import { getPost, getBlogPosts } from '../utils'

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
  const blogPosts = await getBlogPosts(4, 0)
  return { post, currentUrl, blogPosts}
}

export default Page