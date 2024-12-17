import tagService from '../service/tag.service';
import express, { NextFunction, Request, Response } from 'express';

const tagRouter = express.Router();


tagRouter.get('/', async(req: Request, res: Response, next: NextFunction) => {
    try {
        const tags = await tagService.getAllTags();
        res.status(200).json(tags);
    } catch (error) {
        next(error);
    }
});

export { tagRouter }