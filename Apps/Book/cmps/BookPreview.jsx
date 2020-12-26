import { bookService } from "../service/bookService.js";
const { Link } = ReactRouterDOM;
export function BookPreview({ book }) {
    return <Link to={`/book/${book.id}`}>
        <article className="book-preview">
            <h1>{book.title}</h1>
            <img src={book.thumbnail} alt="" />
            <h3>{book.listPrice.amount} <span>{bookService.getCurrency(book.listPrice.currencyCode)}</span></h3>
        </article>
    </Link>
}