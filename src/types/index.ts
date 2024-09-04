export interface IProduct {
    id: number,
    title: string,
    price: number,
    description: string,
    image: string,
    category: string,
    quantity: number,
    rating: {
        rate: number,
        count: number
    }
}

export interface IData {
    basket: IProduct[],
    totalPrice: number
}


export interface IBasketCompProps {
    product: IProduct
}