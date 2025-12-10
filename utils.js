const host = process.env.CONTENT_HOST;
const spaceId = process.env.CONTENT_SPACE;
const environmentId = process.env.CONTENT_ENVIRONMENT;
const accessToken = process.env.CONTENT_TOKEN;

function bindReferences(
  r
) {
  const bind = (item) => {
    // If it's an array, call itself on this item
    if (Array.isArray(item)) {
      return item.map(bind).filter(Boolean);
    }

    // If it's a Link, loop up the entry in includes
    if (item?.sys?.type == "Link") {
      const entry = r.includes[item.sys.linkType].find(
        (i) => i.sys.id == item.sys.id
      );
      if (!entry) return null;

      const keys = Object.keys(entry?.fields || {});
      for (const key of keys) {
        entry.fields[key] = bind(entry?.fields[key]);
      }

      return entry;
    }

    // Else, expect it to be a primary that should stay intact
    return item;
  };

  const items = r.items?.reduce((acc, curr) => {
    const item = { ...curr };
    const keys = Object.keys(item?.fields);
    for (const key of keys) {
      item.fields[key] = bind(item?.fields[key]);
    }

    acc.push(item);
    return acc;
  }, []);

  return {
    ...r,
    items: items,
  };
}


export const fetchEntries = async props => {
  const query = {
    locale: "en-US",
    include: 5,
    access_token: accessToken,
    ...props
  };

  const res = await fetch(`${host}/spaces/${spaceId}/environments/${environmentId}/entries?` + new URLSearchParams(query));
  const entries = await res.json()
  const bound = bindReferences(entries)
  if (bound.items) {
    return bound.items
  }
  return []
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
    'fields.type[match]': 'blogEntry',
    limit,
    skip,
  })
  
  return posts
}

export const getImage = (media, query = null) => {
  if (!media || !media?.fields?.file)
    return null
    
  if (query)
    return `${media?.fields?.file?.url}?${query}`
    
  return media?.fields?.file?.url
}
  
export const maxWidth = '991px'
export const minWidth = '992px'