import { NumericFormat } from 'react-number-format'

export default function FormatNumeric({number}) {

    return (
        <span>
            <NumericFormat value={number} displayType={'text'} thousandSeparator={true} />
        </span>
    )
}