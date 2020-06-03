import Layout from './Layout'
import { fetchEntries } from '../utils'

const host = 'https://www.togethergaming.com';
const sitemapSection = page => `
  <url>
    <loc>${host}/${page.fields.url === '/' ? '' : page.fields.url}</loc>
    <lastmod>${page.sys.updatedAt}</lastmod>
    <priority>1.00</priority>
  </url>`

const Sitemap = () => {}
Sitemap.getInitialProps = async context => {
  const pages = await fetchEntries({
    content_type: 'post'
  })
  context.res.setHeader("Content-Type", "text/xml");
  context.res.write(`<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${pages.map(sitemapSection).join('')}
    </urlset>`);
  context.res.end();
}

export default Sitemap