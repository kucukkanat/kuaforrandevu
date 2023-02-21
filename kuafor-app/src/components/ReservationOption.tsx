type Employee = {
    name: string
}
type ReservationOptionProps = {
    startingHour: number,
    employee: Employee
}
export default function <ReservationOptionProps>({ data }) {
    return <div className="reservation-option">
        {data}
    </div>
} 