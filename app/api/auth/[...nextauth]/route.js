import CredentialsProvider from 'next-auth/providers/credentials'
import NextAuth from 'next-auth/next';
import {connectToDatabase} from '@/lib/connect';
import User from '@/lib/models/user.model';
const bcrypt = require('bcryptjs');

async function login(credentials){
    try{
        await connectToDatabase();
        const user = await User.findOne({email:credentials.email});
        if(!user){
            throw new Error("User not found")
        }

        const isValidPass = await bcrypt.compare(credentials.password,user.password);
        if(!isValidPass){
            throw new Error("Invalid Email or Password");
        }
        return user;

    }
    catch(error){
        console.log(error);
    }
}

export const authOptions = {
    pages : {
        signIn : "/auth/sign-in"
    },
    providers : [
        CredentialsProvider({
            name : "credentials",
            credentials : {},
            async authorize(credentials){
                try{
                    const user = await login(credentials);
                    return user;
                }
                catch(error){
                    console.log(error);
                    return null;
                }
            }
        })
    ],
    callbacks : {
        async jwt({token,user}){
            if(user){
                token.email = user.email,
                token.id = user.id;
                token.name = user.name
                
            }
            console.log('This is token',token);
            return token;
        },
        async session({session,token}){
            if(token){
                session.user.name = token.name;
                session.user.email = token.email;
                session.user.id = token.id;
            }
            return session;
        }
    }
}

const handler = NextAuth(authOptions);
export {handler as GET , handler as POST};