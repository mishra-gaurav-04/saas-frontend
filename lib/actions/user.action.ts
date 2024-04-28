import User from '@/lib/models/user.model';
import {Onboarding} from '@/types';
import {connectToDatabase} from '@/lib/connect';
import {handleError} from '@/lib/utils';

export const userOnboarding = async(onboarding : Onboarding) => {
    try{
        await connectToDatabase();
        const user = await User.findByIdAndUpdate({onboarding:onboarding,firstTime:false});

    }
    catch(error){
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