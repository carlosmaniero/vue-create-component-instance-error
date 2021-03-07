import Main from './main'
const { createSSRApp } = require('vue')
const { renderToString } = require('@vue/server-renderer')
const express = require('express');
const server = express()

server.use(express.static('dist'));


server.get('/', async (req, res) => {
  const app = createSSRApp(Main())
  const appContent = await renderToString(app)

  const html = `
  <html>
    <body>
      <h1>My First Heading</h1>
      <div id="app">
      ${appContent}
      </div>

      <script src="http://localhost:8080/browser/main.js"></script>
    </body>
  </html>
  `

  res.end(html)
})

server.listen(8080, () => {
    console.log('----------------------------------------');
    console.log('----------------------------------------');
    console.log('----------------------------------------');
    console.log("server running at http://localhost:8080/");
    console.log('----------------------------------------');
    console.log('----------------------------------------');
    console.log('----------------------------------------');
})