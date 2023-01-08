import { Query, Mutation, Resolver } from "type-graphql";

@Resolver()
export class AppointmentsResolver {
    @Query(() => String)
    async helloWorld() {
        return 'hello world'
    }

    @Mutation(() => Boolean)
    async createAppointment() {

        return true
    }
}