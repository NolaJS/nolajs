const fs = require('fs');
const path = require('path');
const posts = require('./get-blog-posts');
const { siteMeta } = require('../blog.config');

// https://jsonfeed.org/version/1
const feed = {
  author: {
    avatar: `${siteMeta.siteUrl}/static/_jolvera-avatar.jpg`,
    name: siteMeta.author,
    url: siteMeta.siteUrl,
  },
  description: siteMeta.description,
  favicon: `${siteMeta.siteUrl}/favicon.ico`,
  feed_url: `${siteMeta.siteUrl}/feed.json`,
  home_page_url: siteMeta.siteUrl,
  icon: `${siteMeta.siteUrl}/static/apple-touch-icon-152x152.png`,
  items: posts.map(post => ({
    author: siteMeta.author,
    content_text: `${post.summary} - ${siteMeta.siteUrl}${post.path}`,
    date_published: post.publishedAt,
    id: `${siteMeta.siteUrl}${post.path}`,
    image: `${siteMeta.siteUrl}${post.image}`,
    summary: post.summary,
    title: post.title,
    url: `${siteMeta.siteUrl}${post.path}`,
  })),
  title: siteMeta.title,
  version: 'https://jsonfeed.org/version/1',
};

fs.writeFileSync(path.join('./.next/static', 'feed.json'), JSON.stringify(feed));
