import { META } from './constants'

export const generateMeta = ({ title, description, image, path } = {}) => ({
  title: title ? `${title} | ${META.author}` : META.title,
  description: description || META.description,
  ogTitle: title || META.title,
  ogDescription: description || META.description,
  ogImage: image || META.ogImage,
  ogUrl: `${META.siteUrl || ''}${path || ''}`,
  twitterCard: 'summary_large_image',
  twitterTitle: title || META.title,
  twitterDescription: description || META.description,
  twitterImage: image || META.ogImage,
})
