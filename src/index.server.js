import React from 'react'
import ReactDOMServer from 'react-dom/server'
import express from 'express';
import { StaticRouter } from 'react-router-dom'
import App from './App';
import path from 'path';
import fs from 'fs';


const manifest = JSON.parse(
    fs.readFileSync(path.resolve('./build/asset-manifest.json'), 'utf8')
);
const chunks = Object.keys(manifest.files)
    .filter(key => /chunk\.js$/.exec(key)) // chunk.js로 끝나는 카를 찾음
    .map(key => `<script src="${manifest.files[key]}"></script>`)
    .join('') // 합침

function createPage(root) {
    return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="utf-8" />
            <link rel="shortcut icon" href="/favicon.ico" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="theme-color" content="#000000" />
            <meta
            name="description"
            content="Web site created using create-react-app"
            />
            <title>React App</title>
            <link href="${manifest.files['main.css']}" rel="stylesheet" />
        </head>
        <body>
            <noscript>You need to enable JavaScript to run this app.</noscript>
            <div id="root">
                ${root}
            </div>
            <script src="${manifest.files['runtime-main.js']}"></script>
            ${chunks}
            <script src="${manifest.files['main.js']}"></script>
        </body>
        </html>
    `
}

const app = express();

const serverRender = (req, res, next) => {
    const context = {};
    const jsx = (
        <StaticRouter location={req.url} context={context}>
            <App/>
        </StaticRouter>
    )
    const root = ReactDOMServer.renderToString(jsx);
    res.send(createPage(root));
}

const serve = express.static(path.resolve('./build'), {
    index: false // 루트경로에서 index.html 보여주지않도록 설정
})

app.use(serve);
app.use(serverRender);
app.listen(5000, () => {
    console.log("Running on http://localhost:5000");
})
// const html = ReactDOMServer.renderToString(
//     <div>Hello Server Side rendering !</div>
// )

// console.log(html)