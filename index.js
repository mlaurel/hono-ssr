import { Hono } from 'hono'
import { serveStatic } from 'hono/cloudflare-workers'
import { homeHtml } from './home.js'

const app = new Hono()

app.get('/', (c) => {
    return c.text('Hello Hono!')
})

app.use('/images/*', async (c, next) => {
    c.header('Cache-Control', 'public, max-age=31536000')
})

app.use('/js/*', async (c, next) => {
    c.header('Cache-Control', 'public, max-age=31536000')
})

// cache for 1 week
app.use('/css/*', async (c, next) => {
    c.header('Cache-Control', 'public, max-age=604800')
})

app.get('/*', serveStatic({ root: "./" }))

app.get('/', (c) => {
    return c.html(homeHtml)
})

export default app
