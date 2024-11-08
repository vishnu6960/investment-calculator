import React from 'react'
import { calculationResult, formatter } from '../../util/calculation'

const Results = ({inputData}) => {
    const resultData = calculationResult(inputData)
    // console.log(resultData[0].finalValue)
    const initialInvestment = resultData[0].finalValue - resultData[0].interest - resultData[0].annualInvestment
    console.log(initialInvestment)
  return (
    <table id='results'>
        <thead>
            <tr>
                <th>Year</th>
                <th>Investment Value</th>
                <th>Interest (Year)</th>
                <th>Total Interest</th>
                <th>Invested Capital</th>
            </tr>
        </thead>
        <tbody>
            {resultData.map((data) => {
                const totalInterest = data.finalValue - data.interest * data.duration - initialInvestment
                const totalAmount = data.finalValue - data.interest
                // console.log(data)
                return <tr key={data.duration}>
                    <td>{data.duration}</td>
                    <td>{formatter.format(data.finalValue)}</td>
                    <td>{formatter.format(data.interest)}</td>
                    <td>{formatter.format(totalInterest)}</td>
                    <td>{formatter.format(totalAmount)}</td>
                </tr>
            })}
        </tbody>
    </table>
  )
}

export default Results
