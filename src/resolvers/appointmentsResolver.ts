import { Query, Mutation, Resolver, Arg, FieldResolver, Root } from "type-graphql";
import { CreateAppointmentInput } from "../DTO/inputs/createAppointmentInput";
import { AppointmentModel } from "../DTO/models/appointmentModel";
import { ConsumerModel } from "../DTO/models/consumerModel";

const appointmentsArr: AppointmentModel[] = []

@Resolver(() => AppointmentModel)
export class AppointmentsResolver {
    @Query(() => [AppointmentModel])
    async appointments() {
        return appointmentsArr
    }

    @Mutation(() => AppointmentModel)
    async createAppointment(@Arg("data", { validate: false }) data: CreateAppointmentInput) {

        const appointment = {
            startsAt: data.startsAt,
            endsAt: data.endsAt,
        }

        appointmentsArr.push(appointment)

        return appointment
    }

    @FieldResolver(() => ConsumerModel)
    async consumer(@Root() appointmentModel: AppointmentModel) {

        return {
            name: 'Luan M',
        }
    }
}