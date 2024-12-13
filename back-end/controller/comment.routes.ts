import commentService from '../service/comment.service';
import express, { NextFunction, Request, Response } from 'express';

const commentRouter = express.Router();


commentRouter.get('/', async(req: Request, res: Response, next: NextFunction) => {
    try {
        const comments = await commentService.getAllComments();
        res.status(200).json(comments);
    } catch (error) {
        next(error);
    }
});

export {commentRouter}