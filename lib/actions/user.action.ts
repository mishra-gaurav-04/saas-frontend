'use server'
import User from '@/lib/models/user.model';
import {Onboarding} from '@/types';
import {connectToDatabase} from '@/lib/connect';
import {handleError} from '@/lib/utils';

export const userOnboarding = async ({ userId, onBoarding }: any) => {
    try {
        await connectToDatabase();
        // console.log('Updating user:', userId, onboarding);
        const user = await User.findOneAndUpdate(
            { _id: userId },
            { $set: { "onboarding": onBoarding, "firstTime": false } },
            { new: true }
        );
        console.log('Updated user:', user);
        return JSON.parse(JSON.stringify(user));    
    } catch (error) {
        console.error('Error during user onboarding:', error);
        handleError(error);
    }
}



export const checkFirstTime = async(email : String) => {
    try{
        await connectToDatabase();
        const user = await User.findOne(email);

        let check = user.firstTime;
        return check;
    }
    catch(error){
        handleError(error);
    }
}