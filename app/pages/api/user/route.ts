import { db } from "@/lib/db";
import { NextResponse } from "next/server";
import { hash } from 'bcrypt';
import * as z from 'zod'

// Define schema for input validate
const userSchema = z
  .object({
    username: z.string().min(1, 'Username is required').max(100),
    email: z.string().min(1, 'Email is required').email('Invalid email'),
    password: z
      .string()
      .min(1, 'Password is required')
      .min(6, 'Password must have than 6 characters'),
  });

export async function POST(req: Request){
    try{
        const body = await req.json();
        const {email,username,password} = userSchema.parse(body);

        // Check if email already exist
        const existingUserByEmail = await db.user.findUnique({
            where: {email : email}
        });
        if(existingUserByEmail){
            return NextResponse.json({user:null,message:"user with email already exist"}, {status:409})
        }

        // Check if user name already exist
        const existingUserByUsername = await db.user.findUnique({
            where: {username : username}
        });
        if(existingUserByUsername){
            return NextResponse.json({user:null,message:"user with username already exist"}, {status:409})
        }

        //Store data in db
        const hashPassword = await hash(password,6); //default 5 characters
        const newUser = await db.user.create({
            data: {
                username,
                email,
                password: hashPassword,
            }    
        })

        const { password: newUserPassword, ...rest} = newUser;

        return NextResponse.json({user: newUser, message: "User Created successfully"}, {status:201});

    }catch(error){    
        return NextResponse.json({message: "Something went wrong"}, {status:500});
    }
}