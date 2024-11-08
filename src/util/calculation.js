export function calculationResult({ initialInvestment, annualInvestment, interest, duration }) {
    // console.log(initialInvestment)
    let investment_value = initialInvestment
    const annualData = []

    for (let i = 0; i < duration; i++) {
        let interestEarned = investment_value * (interest / 100)
        investment_value += interestEarned + annualInvestment
        // console.log(investment_value)
        annualData.push({
            duration: i + 1,
            interest: interestEarned,
            finalValue: investment_value,
            annualInvestment: annualInvestment
        })

    }
    // console.log(annualData)
    return annualData
}

export const formatter = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
    minimumFractionDigits: 0
})

