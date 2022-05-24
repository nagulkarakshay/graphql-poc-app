import { ArgsType, Field } from "@nestjs/graphql";
import { IsNotEmpty } from "class-validator";

@ArgsType()
export class UpdateUserArgs {
    @Field()
    @IsNotEmpty()
    _id: string
}