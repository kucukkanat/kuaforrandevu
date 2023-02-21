import { NextApiRequest } from "next"
import crypto from "crypto"
function CreateGUID() {
    return crypto.randomUUID()
}

export type userID = string | number
export type customer = {
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
    customerID: userID
    employeeID: userID
    confirmed: boolean
    constructor(options: {
        id: string
        start: Date
        end?: Date
        customerID: userID
        employeeID: userID
    }) {
        const { customerID, employeeID, start, end } = options
        this.confirmed = false
        this.customerID = customerID
        this.employeeID = employeeID
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