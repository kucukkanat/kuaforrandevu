// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import {  Reservation, ReservationReq } from '@/entities'
import type { NextApiRequest, NextApiResponse } from 'next'
import { isEmptyBindingElement } from 'typescript'

const reservations: Reservation[] = [{
  id:"asd",
  start: new Date(),
  // @ts-ignore
  customer:{id:"12390840"},
  // @ts-ignore
  employee:{id:"3890"},
  confirmed: false
}]
type OKResponse = {
  status: string
  message: string
}
function SaveReservation(params){
  reservations.push(new Reservation({
    customer: params.customer,
    employee: params.employee,
    start: params.start,
  }))
}
export default function handler(
  req: ReservationReq,
  res: NextApiResponse<Reservation[] | OKResponse>
) {
  if(req.method === "POST") {
    // Create new reservation
    SaveReservation(req.body)
    res.send({status:"OK",message:"Reservation created"})
    return 
  } else if (req.method === "GET") {
    // Return reservations
    res.json(reservations)
    return 
  } else if (req.method === "PATCH") {
    // Update a reservation that already exists
    return 
  } else if (req.method === "DELETE") { 
    // Delete a reservation 
    return 
  }
  // res.status(200).json([])
}
