import { Field, ObjectType } from "@nestjs/graphql";
import { IsEmail, IsNotEmpty, Max, Min } from "class-validator";
import { Schema, Document } from "mongoose";
import mongoose from "mongoose";

export const UserSchema = new Schema({
    _id: {
        type: mongoose.Types.ObjectId,
        required: false
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    }
});

@ObjectType()
export class User extends Document {
    @Field()
    _id: string
    
    @Field()
    @Min(4)
    @Max(15)
    @IsNotEmpty()
    name: string

    @Field()
    @IsEmail()
    @IsNotEmpty()
    email: string

    @Field()
    @IsNotEmpty()
    age: number
}



