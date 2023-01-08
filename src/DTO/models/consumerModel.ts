import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class ConsumerModel {
    @Field()
    name: string;
}