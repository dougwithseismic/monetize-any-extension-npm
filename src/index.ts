type MonetizationProps = {
    url: string
    apiKey: string
}

type MonetizationResponse = {
    isMonetizable: boolean
    response: {
        monetize: () => void
    }
}

async function monetizeThis({ url, apiKey }: MonetizationProps): Promise<MonetizationResponse> {
    const response = await fetch('https://api.example.com/check-monetization', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({ url }),
    })

    if (response.ok) {
        const result = (await response.json()) as { isMonetizable: boolean }
        return {
            isMonetizable: result.isMonetizable,
            response: {
                monetize: function () {
                    console.log('Happy birthday!')
                },
            },
        }
    } else {
        throw new Error(`MonetizeThis ${response.status}: ${response.statusText}`)
    }
}

export default monetizeThis

// try {
//     const result = await doMonetization({ url: 'https://asos.com', apiKey: '1234-4567-7890'})
//     console.log(result.isMonetizable)
//     result.response.monetize()
// } catch (error) {
//     console.error(error)
// }
