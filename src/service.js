export function updateQuantityOdo(barcode) {
    return fetch(`http://127.0.0.1:5000/products/${barcode}`)
    .then((data) => {
        data.json()
        return {
            statusCode: data.status,
        }
    })
}