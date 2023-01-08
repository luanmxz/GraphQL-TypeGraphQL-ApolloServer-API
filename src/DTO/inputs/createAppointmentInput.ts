import { InputType, Field } from 'type-graphql'

@InputType()
export class CreateAppointmentInput {
    @Field()
    consumerId: string;

    @Field()
    startsAt: Date;

    @Field()
    endsAt: Date;
}