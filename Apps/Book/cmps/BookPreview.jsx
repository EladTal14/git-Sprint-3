import { bookService } from "../service/bookService.js";

const { Link } = ReactRouterDOM;

export function BookPreview({ book }) {

    // @CR moved to service //
    // function checkSign() {
    //     var sign = ''
    //     switch (book.listPrice.currencyCode) {
    //         case 'EUR':
    //             sign = '€'
    //             break;
    //         case 'USD':
    //             sign = '$'
    //             break;
    //         case 'ILS':
    //             sign = '₪'
    //             break;
    //     }
    //     return sign;
    // }

    return <Link to={`/book/${book.id}`}>
        <article className="book-preview">
            <h1>{book.title}</h1>
            <img src={book.thumbnail} alt="" />
            <h3>{book.listPrice.amount} <span>{bookService.getCurrency(book.listPrice.currencyCode)}</span></h3>
        </article>

    </Link>
}