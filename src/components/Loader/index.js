import { ClipLoader } from 'react-spinners'

export default function Loader() {
    return (
        <div
            className='fixed bg-white top-0 right-0 bottom-0 left-0 flex justify-center items-center z-50'
        >
            <ClipLoader color="#e4002b" speedMultiplier={1} size={50} />
        </div>
    )
}