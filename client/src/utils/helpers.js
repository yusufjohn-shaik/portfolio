import { format, parseISO } from 'date-fns'

export const formatDate = (dateStr, fmt = 'MMM d, yyyy') => {
  try {
    return format(parseISO(dateStr), fmt)
  } catch {
    return dateStr
  }
}

export const truncate = (str, n = 100) =>
  str.length > n ? str.slice(0, n - 3) + '...' : str

export const slugify = (str) =>
  str
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '')

export const clsx = (...classes) => classes.filter(Boolean).join(' ')

export const formatNumber = (n) => {
  if (n >= 1000) return `${(n / 1000).toFixed(1)}k`
  return n.toString()
}

export const getInitials = (name) =>
  name
    .split(' ')
    .map((w) => w[0])
    .join('')
    .toUpperCase()
    .slice(0, 2)

export const copyToClipboard = async (text) => {
  try {
    await navigator.clipboard.writeText(text)
    return true
  } catch {
    return false
  }
}

export const debounce = (fn, delay) => {
  let timer
  return (...args) => {
    clearTimeout(timer)
    timer = setTimeout(() => fn(...args), delay)
  }
}

export const randomBetween = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min

export const wait = (ms) => new Promise((res) => setTimeout(res, ms))
