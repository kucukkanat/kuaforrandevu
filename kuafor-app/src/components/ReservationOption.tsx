import {config} from "../config"
import styles from "./ReservationOption.module.css"

const {reservationDuration} = config
type Employee = {
    name: string
}
type ReservationOptionProps = {
    startingHour: number,
    employee?: Employee
}
export default function ({ startingHour }:ReservationOptionProps) {
    return <div className={styles.resoption}>
        <div className={styles.hours}>{startingHour} - {startingHour+reservationDuration}</div>
        <div className={styles.employees}>
            Here BE EMPLOYEE LIST
        </div>
        
    </div>
} 