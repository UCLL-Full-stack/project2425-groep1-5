import * as dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import * as bodyParser from 'body-parser';
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

import { commentRouter } from './controller/comment.routes';
import { postRouter } from './controller/post.routes';
import { tagRouter } from './controller/tag.routes';
import {profileRouter} from "./controller/profile.routes";
import {userRouter} from "./controller/user.routes";

const app = express();
dotenv.config();
const port = process.env.APP_PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

app.get('/status', (req, res) => {
    res.json({ message: 'Back-end is running...' });
});

const swaggerOpts = {
    definition:{
        openapi: "3.0.0",
        info:{
            title: "Image sharing API",
            version: "1.0.0",
        },
    },
    apis: ['./controller/*.routes.ts']
};

app.use('/comment', commentRouter);
app.use('/post', postRouter);
app.use('/profile', profileRouter);
app.use('/tag', tagRouter);
app.use('/user', userRouter);

app.listen(port || 3000, () => {
    console.log(`Back-end is running on port ${port}.`);
});
