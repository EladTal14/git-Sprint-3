import { bookService } from "./bookService.js";

export const networkBookService = {
    getNetworkBooks
}

function getNetworkBooks(name) {
    return bookService.newQuery()
}