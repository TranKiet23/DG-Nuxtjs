// server/api/menu.get.ts
export default defineEventHandler(() => {
  return [
    { id: 1, title: 'Home', link: '/' },
    { id: 2, title: 'About', link: '/about' },
    { id: 3, title: 'Contact', link: '/contact' },
  ]
})