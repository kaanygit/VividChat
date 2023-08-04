import startDB from '@/lib/db';
import NextAuth from 'next-auth'
import UserModel from '@/lib/models/userModel';
import {NextAuthOptions} from 'next-auth'
import CredentialsContainer from "next-auth/providers/credentials"
import Credentials from 'next-auth/providers/credentials';

export const authOptions:NextAuthOptions={
    session:{
        strategy:"jwt"
    },
    providers:[
        
        CredentialsContainer({
            type:"credentials",
            credentials:{},
            async authorize(credentials,req){
                const {email,password}=credentials as {
                    email:string;
                    password:string;
                };
                await startDB();
                const user =await UserModel.findOne({email}); 
                if(!user) throw Error("Email or Password Mismatch");

                const passwordMatch=await user.comparePassword(password);
                if(!password) throw Error("Email or Password Mismatch");
                return{
                    username:user.username,
                    email:user.email,
                    role:user.role,
                    id:user._id
                };
            },
        }),
    ],
    callbacks:{
        jwt(params:any){
            if(params.user?.role){
                params.token.role=params.user.role
                params.token.id=params.user.id
            }
            return params.token
        },
        session({session,token}){
            if(session.user){
                (session.user as {id:string}).id=token.id as string;
                (session.user as {role:string}).role=token.role as string;
            }
            return session;
        }
    }
};

const authHandler=NextAuth(authOptions);

export {authHandler as GET,authHandler as POST};