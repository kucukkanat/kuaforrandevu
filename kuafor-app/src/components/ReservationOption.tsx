import { Reservation } from "@/entities"
import {config} from "../config"
import styles from "./ReservationOption.module.css"

const {reservationDuration} = config

export default function ({ start }:Reservation) {
    return <div className={styles.resoption}>
        <div className={styles.hours}>
            <>{start.getHours()} - {`${start.getHours()+reservationDuration}`}</>
        </div>
        <div className={styles.employees}>
            Here BE EMPLOYEE LIST
        </div>
        
    </div>
} 

const allEmployees = [
    {id:123,name:"Jack"},
    {id:2,name:"Mack"},
    {id:32,name:"Cake"},
    {id:41,name:"Sik"},
    {id:3451,name:"Sok"},
    {id:1231,name:"Rogier"},
    {id:64561,name:"Madeline"},
]

const reservations = [
    {
        employee: {id:32,name:"Cake"},
        customer: {id:44,name:"Hasan"},
        start: 12
    },
    {
        employee: {id:1231,name:"Rogier"},
        customer: {id:32,name:"Huseyin"},
        start: 13

    },
    {
        employee: {id:64561,name:"Madeline"},
        customer: {id:11,name:"Esma"},
        start: 12

    },
    {
        employee: {id:64561,name:"Madeline"},
        customer: {id:11,name:"Erkan"},
        start: 13

    },
]

const nonAvailabilities = allEmployees.map(employee => {
    return {
        ...employee,
        nonAvailableHours: reservations.filter(reservation => reservation.employee.id == employee.id).map(r => r.start)
    }
});

const availableReservationSlots = [12,13,14,15,16,17].map(hour => {
    return {
        hour,
        availableEmployees: allEmployees.filter(employee => {
            return nonAvailabilities.find(na => na.employee.id == employee.id && na.nonAvailableHours.includes(hour))
        })
    }
})