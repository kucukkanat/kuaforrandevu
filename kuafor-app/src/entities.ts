import { NextApiRequest } from "next"
let a=0
function CreateGUID() {
    a=a+1
    return a
}
export type Employee = {
    id: userID,
    name: string
}
export type userID = string | number
export type Customer = {
    name: string
    id: userID
    phone: string
    email: string
    reservations: Reservation[]
}
export class Reservation {
    id: string
    start: Date
    end?: Date
    customer: Customer
    employee: Employee
    confirmed: boolean
    constructor(options: {
        start: Date
        end?: Date
        customer: Customer
        employee: Employee
    }) {
        const { customer, employee, start, end } = options
        this.confirmed = false
        this.customer = customer
        this.employee = employee
        this.start = start
        this.end = end
        this.id = CreateGUID()
    }
}

export type AvailableReservationHours = Array<Reservation>

export interface ReservationReq extends NextApiRequest {
    params: {
        start: Date // request, create new
        end: Date // request, create new
        id: string // delete
        customerID: userID // create new
        employeeID: userID // create new
    }
}