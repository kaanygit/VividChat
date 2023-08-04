import startDB from "@/lib/db";
import UserModel from "@/lib/models/userModel";
import { NextResponse } from "next/server";

interface NewUserRequest{
    username:string;
    email:string;
    password:string;
}
interface NewUserResponse{
    id:string;
    username:string;
    email:string;
    role:string;
}

type NewResponse=NextResponse<{user?:NewUserResponse;error?:string}>;

export const POST=async (req:Request):Promise<NewResponse>=>{
    const body=(await req.json()) as NewUserRequest;
    
    await startDB();

    const oldUser=await UserModel.findOne({email:body.email});
    const oldUserName=await UserModel.findOne({username:body.username});
    if(oldUser) 
        return NextResponse.json(
            {error:"Email is already in use"},
            {status:422}
        )
    if(oldUserName) 
        return NextResponse.json(
            {error:"Username is already in use"},
            {status:423 }
        )

    const user=await UserModel.create({...body});

    return NextResponse.json({
        user:{
            id:user._id.toString(),
            email:user.email,
            username:user.username,
            role:user.role
        },
    });
};
