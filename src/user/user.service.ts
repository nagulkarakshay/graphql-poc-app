import { Inject, Injectable } from "@nestjs/common";
import mongoose from "mongoose";
import { FilterQuery, Model } from "mongoose";
import { GetUserArgs } from "./dto/args/get-user.args";
import { UpdateUserArgs } from "./dto/args/update-user.args";
import { DeleteUserInput } from "./dto/input/delete-user-input";
import { UpdateUserInput } from "./dto/input/update-user.input";
import { User } from "./models/user.schema";

@Injectable()
export class UsersService {
    constructor(
        @Inject('USER_MODEL')
        private userModel: Model<User>
    ) { }

    async createUser(input: FilterQuery<User>): Promise<User> {
        const docId = new mongoose.Types.ObjectId().toHexString();
        input._id = docId;
        return this.userModel.create(input);
    }

    async getUser(getUserArgs: GetUserArgs): Promise<User> {
        return this.userModel.findOne(getUserArgs).lean();
    }

    async getUsers(): Promise<User[]> {
        return this.userModel.find().lean();
    }

    // async updateUser(): Promise<User> {
    //     return this.userModel.findByIdAndUpdate(updateUserArgs);
    // }

    async deleteUser(deleteUserInput: DeleteUserInput): Promise<User> {
        return this.userModel.findOneAndDelete(deleteUserInput);
    }
    
}