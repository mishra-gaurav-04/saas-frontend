import {connectToDatabase} from '@/lib/connect';
import {handleError} from '@/lib/utils';
import User from '@/lib/models/user.model';
import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs'; 

export  async function POST(req : any){
    try{
        await connectToDatabase();
        const {name,email,password} = await req.json();
        const existingUser = await User.findOne({email});
        if(existingUser){
            return  NextResponse.json({message:"Email is already in use."},{status : 400});
        }
        const hashedPassword = await bcrypt.hash(password,12);
        await User.create({name,email,password:hashedPassword});
        return NextResponse.json({message:"User created successfully"},{status:201})
    }
    catch(error){
        console.log('Error while registering the user into the system',error);
        return NextResponse.json({message:"Error occured while registering the user."},{status:500});
    }
}