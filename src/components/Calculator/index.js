import { useState, useEffect } from "react"
import { NumericFormat } from 'react-number-format'

import CalculatorPieChart from "./CalculatorPieChart"

export default function Calculator({ price = 1800000 }) {
    const [loan, setLoan] = useState(20)
    const [time, setTime] = useState(5)
    const [rate, setRate] = useState(5)
    const [chartData, setChartData] = useState([])
    const [priceForMonth, setPriceForMonth] = useState(0)

    useEffect(() => {
        let vay = Math.round(price / 100 * loan)
        let traTruoc = Math.round(price - vay)
        let lai = Math.round(vay * Math.pow((1 + rate / 100 / 12), (time * 12)))
        let traMoiThang = Math.round(lai / (time * 12))
        setChartData([
            { label: 'Số tiền vay', value: vay },
            { label: 'Tiền trả trước', value: traTruoc },
            { label: 'Số tiền lãi', value: lai },
        ])
        setPriceForMonth(traMoiThang)
    }, [loan, time, rate, price])

    return (
        <div className="wrapper bg-gray-100 rounded-md p-3">
            <div className="loan">
                <div className="flex justify-between items-center mb-4">
                    <div className="w-1/4">
                        <h3>Giá nhà đất</h3>
                    </div>
                    <div className="w-3/4">
                        <input value={price} readOnly type="text" className="w-full rounded-md border p-2" />
                    </div>
                </div>
                <div className="flex justify-between items-center mb-4">
                    <div className="w-1/4">
                        <h3>Số tiền vay</h3>
                    </div>
                    <div className="w-3/4 relative">
                        <input value={loan} min={10} max={100} step={5} type="range" className="w-full rounded-md border p-1" onChange={e => setLoan(e.target.value)} />
                        <span className="absolute bottom-100 right-0 text-xs font-medium">{loan}%</span>
                    </div>
                </div>
                <div className="flex justify-between items-center mb-4">
                    <div className="w-1/4">
                        <h3>Thời gian vay</h3>
                    </div>
                    <div className="w-3/4 relative">
                        <input value={time} min={1} max={30} type="range" className="w-full rounded-md border p-1" onChange={e => setTime(e.target.value)} />
                        <span className="absolute bottom-100 right-0 text-xs font-medium">{time} năm</span>
                    </div>
                </div>
                <div className="flex justify-between items-center mb-4">
                    <div className="w-1/4">
                        <h3>Lãi suất</h3>
                    </div>
                    <div className="w-3/4 relative">
                        <input value={rate} min={0} max={20} type="range" className="w-full rounded-md border p-1" onChange={e => setRate(e.target.value)} />
                        <span className="absolute bottom-100 right-0 text-xs font-medium">{rate}%/Năm</span>
                    </div>
                </div>
                <div className="flex justify-between mb-3">
                    <div className="w-1/2">
                        <h3 className="text-center font-semibold text-sm text-gray-400 mb-2">Tổng tiền phải trả</h3>
                        {chartData.length > 0 &&
                            <>
                                <p className="text-center text-colorPrimary font-semibold text-md"><NumericFormat value={chartData[0].value + chartData[1].value + chartData[2].value} displayType={'text'} thousandSeparator={true} /> VNĐ/Tháng</p>
                                <div className="flex justify-center w-full">
                                    <CalculatorPieChart data={chartData} />
                                </div>
                                <div className="flex justify-around items-center">
                                    <div className="text-center">
                                        <p className="flex items-center"><span className="block h-2 w-2 rounded-full bg-colorSecondary mr-1"></span>Trả trước</p>
                                        <p><NumericFormat value={chartData[1].value} displayType={'text'} thousandSeparator={true} /></p>
                                    </div>
                                    <div className="text-center">
                                        <p className="flex items-center"><span className="block h-2 w-2 rounded-full bg-colorPink mr-1"></span>Tiền vay</p>
                                        <p><NumericFormat value={chartData[0].value} displayType={'text'} thousandSeparator={true} /></p>
                                    </div>
                                    <div className="text-center">
                                        <p className="flex items-center"><span className="block h-2 w-2 rounded-full bg-colorGreen mr-1"></span>Lãi cần trả</p>
                                        <p><NumericFormat value={chartData[2].value} displayType={'text'} thousandSeparator={true} /></p>
                                    </div>
                                </div>
                            </>
                        }
                    </div>
                    <div className="w-1/2">
                        <h3 className="text-center font-semibold text-sm text-gray-400 mb-2">Lãi suất</h3>
                        <p className="text-center text-colorPrimary font-semibold text-md"><NumericFormat value={priceForMonth} displayType={'text'} thousandSeparator={true} /> VNĐ/Tháng</p>
                    </div>
                </div>
            </div>
        </div>
    )
}