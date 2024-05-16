import moment from 'moment'

export default function FormatDate({ date }) {
    const rs = moment(date).format('DD/MM/YYYY - HH:mm')
    return (
        <span>{rs}</span>
    )
}