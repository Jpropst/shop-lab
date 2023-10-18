export class ProductNotFoundError extends Error {
    constructor() {
        super("Could not find this product")
        this.name = "ProductNotFoundError"
    }
}
export class UserNotFoundError extends Error {
    constructor() {
        super("Could not find this user")
        this.name = "UserNotFoundError"
    }
}
export class CartItemNotFoundError extends Error {
    constructor() {
        super("Could not find this cart item")
        this.name = "CartItemNotFoundError"
    }
}