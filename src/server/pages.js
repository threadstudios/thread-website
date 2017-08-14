import glob from 'glob';
import fs from 'fs';
import { Router } from 'express';

const routes = new Router();
let pages = {};

glob(`${__dirname}/../../pages/*`, (err, matches) => {
    pages = matches.reduce((acc, pageFile) => {
        let page = fs.readFileSync(pageFile, 'utf-8');
        if(page) {
            page = JSON.parse(page);
            acc[page.url] = page;
        }
        return acc;
    }, pages);
})

routes.use('/*', (req, res, next) => {
    req.page = pages[req.originalUrl];
    return next();
});

routes.get('/api/page/:route?', (req, res, next) => {
    const route = req.params.route ? req.params.route : '/';
    const page = pages[route];
    res.send({
        page : page ? page : {components : { type: '404' }}
    });
})


export default routes;