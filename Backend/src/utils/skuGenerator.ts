const skuGenerator = ({ productId, productName }: { productId?: string, productName?: string }) => {
    const random = Math.floor(Math.random() * 10000).toString();

    const sku = `${productName?.substring(0, 2)}${productId?.substring(0, 2)}${productName?.substring(2, 4)}${productId?.substring(2, 4)}${random.substring(0, 4)}`

    return sku.toLocaleLowerCase();
}

export default skuGenerator;