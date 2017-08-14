import express from 'express';
import App from '../App.js';
import Inferno from 'inferno';
import InfernoServer from 'inferno-server';

import Pages from './pages';

const app = express();

app.set('port', process.env.PORT || 3123);

app.use(express.static('public'));

app.use(Pages);

app.get('/', (req, res) => {

    const app = InfernoServer.renderToString(<App {...req.page} />);

    res.send(`
        <html>
            <head>
                <meta charset="utf-8">
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <link rel="icon" type="image/png" href="/favicon-32x32.png" sizes="32x32" />
                <link rel="icon" type="image/png" href="/favicon-16x16.png" sizes="16x16" />
                <link rel="manifest" href="/manifest.json" />
                <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
                <title>${req.page.meta.title}</title>
                <meta name="theme-color" content="#ffffff">
                <meta name="viewport" content="width=device-width, initial-scale=1">
                <meta name="og:title" content="Thread Web Studios Ltd">
                <meta name="og:url" content="https://www.threadstud.io">
                <meta name="og:type" content="company">
                <meta name="og:description" content="${req.page.meta.description}">
                <meta name="og:image" content="https://www.threadstud.io/images/logo.svg">
                <link rel="stylesheet" href="fonts.css" />
                <link rel="stylesheet" href="bundle.css" />
                <link href="https://fonts.googleapis.com/css?family=Roboto|Source+Sans+Pro:300,400" rel="stylesheet">
            </head>
            <body>
                <div id="content">
                    ${app}
                </div>
                <script>__PAGE__ = ${JSON.stringify(req.page)}</script>
                <script src="client.js"></script>
                <script src="https://use.typekit.net/zsy0neg.js"></script>
                <script>try{Typekit.load({ async: true });}catch(e){}</script>
            </body>
        </html>
    `);
});

app.listen(app.get('port'));