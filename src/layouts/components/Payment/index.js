import bankTranfer from '../../../assets/bank-transfer.png'
import momo from '../../../assets/momo.png'
import zalopay from '../../../assets/zalopay.png'
import creditCard from '../../../assets/credit-card.png'
import qrCode from '../../../assets/qr-code.svg'
import internetBanking from '../../../assets/internet-banking.svg'
import cash from '../../../assets/cash.svg'
import shopeepay from '../../../assets/shopeepay.svg'
import onlineStore from '../../../assets/online-store.svg'

const payments = [
    { title: 'Chuyển khoản', img: bankTranfer },
    { title: 'Thẻ nội địa Internet Banking', img: internetBanking },
    { title: 'Thẻ quốc tế', img: creditCard },
    { title: 'Tiền mặt', img: cash },
    { title: 'MOMO', img: momo },
    { title: 'ZaloPay', img: zalopay },
    { title: 'ShopeePay', img: shopeepay },
    { title: 'Điểm giao dịch cửa hàng tiện lợi', img: onlineStore },
    { title: 'Quét QRCode', img: qrCode },
]

export default function Payment() {
    return (
        <div className="wrapper my-8 bg-colorF9 py-4">
            <div className="container max-w-5xl">
                <h1 className="text-center text-2xl font-bold">Phương thức thanh toán</h1>
                <div className="mt-4">
                    <div className="row">
                        {payments.map((payment, i) => (
                            <div className='col-xl-4 col-lg-4 col-md-6 col-sm-6'>
                                <div className='my-3 py-3 border-1 border-gray-100 rounded bg-white hover:translate-y-[-10%] transition-all duration-300' key={i}>
                                    <img src={payment.img} alt={payment.title} className='block w-20 h-12 object-contain my-3 mx-auto' />
                                    <p className='font-bold text-sm text-center'>{payment.title}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}