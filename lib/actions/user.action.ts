import User from '@/lib/models/user.model';
import {Prefrences} from '@/types';
import {connectToDatabase} from '@/lib/connect';
import {handleError} from '@/lib/utils';

export const updateUserParams = async(prefrences : Prefrences) => {
    try{
        await connectToDatabase();
        const user = await User.findByIdAndUpdate({prefrences:prefrences,firstTime:false});

    }
    catch(error){
        handleError(error);
    }
}


