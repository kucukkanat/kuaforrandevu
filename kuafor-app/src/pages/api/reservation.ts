// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import {  Reservation, ReservationReq } from '@/entities'
import type { NextApiRequest, NextApiResponse } from 'next'
import { isEmptyBindingElement } from 'typescript'

type Data = {
  name: string
}

const reservations: Reservation[] = []


export default function handler(
  req: ReservationReq,
  res: NextApiResponse<Data>
) {
  if(req.method === "POST") {
    console.log("\n\n\n\nParams:", req.body)
    const params = JSON.parse(req.body)
    // Create new reservation
    reservations.push(new Reservation({
      customerID: params.customerID,
      employeeID: params.employeeID,
      start: params.start,
    }))
  } else if (req.method === "GET") {
    // Return reservations
  } else if (req.method === "PATCH") {
    // Update a reservation that already exists
  } else if (req.method === "DELETE") { 
    // Delete a reservation 
  }
  res.status(200).json({ name: 'John Doe' })
}
