import { Hono } from 'hono'
import { serveStatic } from 'hono/cloudflare-workers'
import { home } from './home.js'

import { extract, install } from '@twind/core'
import presetTailwind from '@twind/preset-tailwind'

install({
    presets: [
        presetTailwind(),
        {
            theme: {
                fontFamily: {
                    sans: ['Inter', 'sans-serif'],
                    serif: ['Georgia', 'serif'],
                }
            }
        }
    ]
})

async function ssrTwind(body) {
    const { html, css } = extract((await body).toString())
    return html.replace('</head>', `<style data-twind>${css}</style></head>`)
}

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
    return c.html(ssrTwind(home))
})

export default app
