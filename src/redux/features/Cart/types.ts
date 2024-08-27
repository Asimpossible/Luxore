export interface IProduct {
    id: number,
    title: string,
    price: number,
    description: string,
    image: string,
    category: string
}

export interface IData {
    basket: IProduct[],
    totalPrice: number
}