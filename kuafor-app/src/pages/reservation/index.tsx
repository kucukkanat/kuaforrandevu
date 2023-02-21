import { config } from "../../config"
import ReservationOption from "../../components/ReservationOption"
import { Reservation } from "@/entities"
let { closingHours, openingHours,reservationDuration } = config
// @ts-ignore
closingHours = parseInt(closingHours.split(":")[0])
// @ts-ignore
openingHours = parseInt(openingHours.split(":")[0])
const reservations:Reservation[] = []
reservations.push(new Reservation({
    start: new Date(),
    customer: {id:"1290ei"},
    employee: {id:"1290ei"},
}))

export default () => {
    return <div>
        {
            reservations.map(reservationData => {
                return <ReservationOption {...reservationData} />
            })
        }
    </div>
}
