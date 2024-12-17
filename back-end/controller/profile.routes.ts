/**
 * @swagger
 * components:
 *   schemas:
 *     Profile:
 *       type: object
 *       properties:
 *         profileId:
 *           type: number
 *           description: Profile ID
 *         email:
 *           type: string
 *           description: Email address of user
 *         displayName:
 *           type: string
 *           description: Display name of user
 *         theme:
 *           type: string
 *           description: Theme preference of user
 *         creationDate:
 *           type: string
 *           format: date-time
 *           description: Profile creation date
 *         fontSize:
 *           type: number
 *           description: Font size preference of user
 *     ProfileInput:
 *       type: object
 *       properties:
 *         email:
 *           type: string
 *           description: Email address of user
 *         displayName:
 *           type: string
 *           description: Display name of user
 *         theme:
 *           type: string
 *           description: Theme preference of user
 *         creationDate:
 *           type: string
 *           format: date-time
 *           description: Profile creation date
 *         fontSize:
 *           type: number
 *           description: Font size preference of user
 */

import express, { NextFunction, Request, Response } from 'express';
import profileService from "../service/profile.service";
import { ProfileInput } from '../types';

const profileRouter = express.Router();

profileRouter.get('/', async(req: Request, res: Response, next: NextFunction) => {
    try {
        const profiles = await profileService.getAllProfiles();
        res.status(200).json(profiles);
    } catch (error) {
        next(error);
    }
});


/**
 * @swagger
 * /profiles/createProfile:
 *   post:
 *     summary: Creates a new profile
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ProfileInput'
 *     responses:
 *       200:
 *         description: The profile was successfully created.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Profile'
 */

profileRouter.post('/createProfile',async (req:Request,res:Response, next:NextFunction) => {
    try{
        const profile = <ProfileInput>req.body;
        const result = await profileService.createProfile(profile);
        res.status(200).json(result);
    }catch(error){
        next(error)
    }
    
});

export { profileRouter };