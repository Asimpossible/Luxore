export interface IProduct {
    id: number,
    title: string,
    price: number,
    description: string,
    image: string,
    category: string,
    quantity: number,
    rating: IProductRating
}

export interface IProductRating {
    rate: number,
    count: number
}

export interface IData {
    basket: IProduct[],
    totalPrice: number
}

export interface IFavorites {
    favorites: IProduct[],
}


export interface IBasketCompProps {
    product: IProduct
}