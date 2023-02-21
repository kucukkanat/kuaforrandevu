// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import {  Reservation, ReservationReq } from '@/entities'
import type { NextApiRequest, NextApiResponse } from 'next'
import { isEmptyBindingElement } from 'typescript'

const reservations: Reservation[] = []

function SaveReservation(params){
  reservations.push(new Reservation({
    customerID: params.customerID,
    employeeID: params.employeeID,
    start: params.start,
  }))
}
export default function handler(
  req: ReservationReq,
  res: NextApiResponse<Reservation[]>
) {
  if(req.method === "POST") {
    // Create new reservation
    SaveReservation(req.body)
  } else if (req.method === "GET") {
    // Return reservations
    res.send(reservations)
  } else if (req.method === "PATCH") {
    // Update a reservation that already exists
  } else if (req.method === "DELETE") { 
    // Delete a reservation 
  }
  res.status(200).json({ name: 'John Doe' })
}
