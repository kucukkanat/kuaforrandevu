import { config } from "../../config"
import ReservationOption from "../../components/ReservationOption"
let { closingHours, openingHours } = config
closingHours = parseInt(closingHours.split(":")[0])
openingHours = parseInt(openingHours.split(":")[0])
const reservationOptions = []

for (let i = openingHours; i < closingHours; i++) {
    reservationOptions.push(i)
}
export default () => {
    return <div>
        {
            reservationOptions.map(reservationHour => {
                return <ReservationOption data={reservationHour} />
            })
        }

    </div>
}