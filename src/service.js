export function updateQuantityOdo(barcode) {
    return fetch(`https://proyecto-big-dog-back.vercel.app/products/${barcode}`)
    .then((data) => {
        data.json()
        return {
            statusCode: data.status,
        }
    })
}