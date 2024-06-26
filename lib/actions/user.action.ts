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
        console.log(error);
    }
}

export const postPrompt = async ({ userId, prompt }: { userId: string, prompt: any }) => {
    try {
        const response = await fetch(`http://127.0.0.1:5000/api/pinecone_response/${userId}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(prompt) 
        });

        if (response.ok) {
            const responseData = await response.json();
            return responseData;
        }

        return null;

    } catch (error) {
        console.log(error);
    }
}

export const getUserPrompts = async(userId:String) => {
    try{
        const response = await fetch(`http://127.0.0.1:5000/api/pinecone_response/${userId}`,{
            method : 'GET',
            headers : {
                'Content-Type' : 'application/json'
            }
        })

        if(response?.ok){
            return await response.json();
        }
        return null
    }
    catch(error){
        console.log(error);
    }
}

export const getOnboardData = async(userId:String) => {
    try{
        await connectToDatabase();
        const response = await User.findById(userId);
        // console.log('Response data',response);
        return response.onboarding;
    }
    catch(error){
        console.log(error);
    }
}