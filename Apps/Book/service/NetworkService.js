import { bookService } from "./bookService.js";

export const networkBookService = {
    getNetworkBooks
}



// function getNetworkBooks(name) {
//     const url = `https://www.googleapis.com/books/v1/volumes?printType=books&q=${name}`
//     return axios.get(url)
//         .then(res => {
//             console.log('network', res.data.items);
//             return res.data.items
//         })
// }

function getNetworkBooks(name){
    return bookService.newQuery()
}