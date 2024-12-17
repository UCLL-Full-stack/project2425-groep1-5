import express, { NextFunction, Request, Response } from 'express';
import profileService from "../service/profile.service";

const profileRouter = express.Router();

profileRouter.get('/', async(req: Request, res: Response, next: NextFunction) => {
    try {
        const profiles = await profileService.getAllProfiles();
        res.status(200).json(profiles);
    } catch (error) {
        next(error);
    }
});

export { profileRouter };