const pricings = [
    {
        primaryColor: '#055699',
        type: 'Tin thường',
        priceForDay: { value: '1000' },
        priceFor5Day: { value: '5000' },
        priceFor10Day: { value: '10000', saveMoney: 'Tiết kiệm 8.000₫' },
        priceFor15Day: { value: '12000', saveMoney: 'Tiết kiệm 3.000₫' },
        priceFor30Day: { value: '22000', saveMoney: 'Tiết kiệm 3.000₫' },
        pushPost: '1000'
    },
    {
        primaryColor: '#108798',
        type: 'Tin VIP 3',
        priceForDay: { value: '5.000' },
        priceFor5Day: { value: '25.000' },
        priceFor10Day: { value: '45.000', saveMoney: 'Tiết kiệm 5.000₫' },
        priceFor15Day: { value: '64.000', saveMoney: 'Tiết kiệm 11.000₫' },
        priceFor30Day: { value: '112.000', saveMoney: 'Tiết kiệm 38.000₫' },
        pushPost: '2000'
    },
    {
        primaryColor: '#ea2e9d',
        type: 'Tin VIP 2',
        priceForDay: { value: '10.000' },
        priceFor5Day: { value: '50.000' },
        priceFor10Day: { value: '90.000', saveMoney: 'Tiết kiệm 10.000₫' },
        priceFor15Day: { value: '128.000', saveMoney: 'Tiết kiệm 22.000₫' },
        priceFor30Day: { value: '225.000', saveMoney: 'Tiết kiệm 75.000₫' },
        pushPost: '3000'
    },
    {
        primaryColor: '#FF6600',
        type: 'Tin VIP 1',
        priceForDay: { value: '20.000' },
        priceFor5Day: { value: '100.000' },
        priceFor10Day: { value: '180.000', saveMoney: 'Tiết kiệm 20.000₫' },
        priceFor15Day: { value: '255.000', saveMoney: 'Tiết kiệm 45.000₫' },
        priceFor30Day: { value: '450.000', saveMoney: 'Tiết kiệm 150.000₫' },
        pushPost: '4000'
    },
    {
        primaryColor: '#E13427',
        type: 'Tin VIP Đặc biệt',
        priceForDay: { value: '40.000' },
        priceFor5Day: { value: '200.000' },
        priceFor10Day: { value: '360.000', saveMoney: 'Tiết kiệm 40.000₫' },
        priceFor15Day: { value: '510.000', saveMoney: 'Tiết kiệm 90.000₫' },
        priceFor30Day: { value: '900.000', saveMoney: 'Tiết kiệm 300.000₫' },
        pushPost: '5000'
    }
]

export default function PricingPage() {
    return (
        <div className="wrapper">
            <div>
                <div
                    className="text-white flex flex-col items-center justify-center h-44"
                    style={{ 'background': '#25419e url(https://bds123.vn/images/pricing-bg-2.png) center no-repeat', 'backgroundSize': 'cover' }}
                >
                    <h1 className="text-6xl font-bold text-center mb-3">Bảng giá dịch vụ</h1>
                    <p className="text-md text-center">Cảm ơn bạn quan tâm dịch vụ của BDS123.VN, rất mong được hợp tác!</p>
                </div>
                <p className="text-center my-4 text-md">Bảng giá tin đăng áp dụng từ 16h00 ngày 23/02/2023</p>
                <div className="p-4">
                    <table className="table text-center border">
                        <thead>
                            <tr>
                                <th>Loại tin</th>
                                <th>Đăng 1 ngày</th>
                                <th>Đăng 5 ngày</th>
                                <th>Đăng 10 ngày</th>
                                <th>Đăng 15 ngày</th>
                                <th>Đăng 30 ngày</th>
                                <th>Đẩy tin/lần	</th>
                            </tr>
                        </thead>
                        <tbody>
                            {pricings.map((pricing, i) => (
                                <tr key={i}>
                                    <td>
                                        <span className="text-md font-semibold" style={{ 'color': `${pricing.primaryColor}` }}>{pricing.type}</span>
                                    </td>
                                    <td>{pricing.priceForDay.value}</td>
                                    <td>{pricing.priceFor5Day.value}</td>
                                    <td>
                                        <span>
                                            <p>{pricing.priceFor10Day.value}</p>
                                            <p className="text-xs text-green-400">{pricing.priceFor10Day.saveMoney}</p>
                                        </span>
                                    </td>
                                    <td>
                                        <span>
                                            <p>{pricing.priceFor15Day.value}</p>
                                            <p className="text-xs text-green-400">{pricing.priceFor15Day.saveMoney}</p>
                                        </span>
                                    </td>
                                    <td>
                                        <span>
                                            <p>{pricing.priceFor30Day.value}</p>
                                            <p className="text-xs text-green-400">{pricing.priceFor30Day.saveMoney}</p>
                                        </span>
                                    </td>
                                    <td>
                                        {pricing.pushPost}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}