import { Args, Mutation, Resolver, Query } from '@nestjs/graphql';
import { CreateUserInput } from './dto/input/create-user.input';
import { UsersService } from '../user/user.service';
import { User } from './models/user.schema';
import { GetUserArgs } from './dto/args/get-user.args';
import { UpdateUserInput } from './dto/input/update-user.input';
import { DeleteUserInput } from './dto/input/delete-user-input';
import { UpdateUserArgs } from './dto/args/update-user.args';

@Resolver(() => User)
export class UserResolver {
    constructor(private userService: UsersService) { }

    @Mutation(() => User)
    async createUser(@Args('input') input: CreateUserInput): Promise<User> {
        return this.userService.createUser(input);
    }

    @Query(() => User, { name: 'user', nullable: true })
    async getUser(@Args() getUserArgs: GetUserArgs): Promise<User> {
        return this.userService.getUser(getUserArgs);
    }

    @Query(() => [User])
    async getUsers(): Promise<User[]> {
        return this.userService.getUsers();
    }

    // @Mutation(() => User)
    // async updateUser(@Args() updateUserArgs: UpdateUserArgs, updateUserInput: UpdateUserInput): Promise<User> {
    //     return this.userService.updateUser(updateUserArgs, updateUserInput);
    // }

    @Mutation(() => User)
    async deleteUser(@Args('deleteUserInput') deleteUserInput: DeleteUserInput): Promise<User> {
        return this.userService.deleteUser(deleteUserInput);
    }

}