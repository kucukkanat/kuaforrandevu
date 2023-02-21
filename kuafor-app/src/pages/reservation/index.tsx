import { config } from "../../config"
import ReservationOption from "../../components/ReservationOption"
let { closingHours, openingHours,reservationDuration } = config
// @ts-ignore
closingHours = parseInt(closingHours.split(":")[0])
// @ts-ignore
openingHours = parseInt(openingHours.split(":")[0])
const reservationOptions:any[] = []


for (let i = openingHours; i < closingHours; i=i+reservationDuration) {
    reservationOptions.push(i)
}
export default () => {
    return <div>
        {
            reservationOptions.map(reservationHour => {
                return <ReservationOption startingHour={reservationHour} />
            })
        }

    </div>
}

