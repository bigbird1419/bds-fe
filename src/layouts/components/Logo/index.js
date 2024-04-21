import Button from "../../../components/Button"
import logoUrl from '../../../assets/logo-bds123.svg'

export default function Logo() {
    return (
        <div>
            <Button to={'/'} >
                <img src={logoUrl} alt="BDS" className="w-40" />
            </Button>
        </div>
    )
}