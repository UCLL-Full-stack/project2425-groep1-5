import postService from '../service/post.service';
import express, { NextFunction, Request, Response } from 'express';

const postRouter = express.Router();


postRouter.get('/', async(req: Request, res: Response, next: NextFunction) => {
    try {
        const posts = await postService.getAllPosts();
        res.status(200).json(posts);
    } catch (error) {
        next(error);
    }
});

export { postRouter }