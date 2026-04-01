export interface CartItem {
    itemID: number,
    quantity: number
}

export interface Cart {
    items: CartItem[]
}