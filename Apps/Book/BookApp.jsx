import { BookAdd } from "../Book/cmps/BookAdd.jsx";
import { BookFilter } from "../Book/cmps/BookFilter.jsx";
import { BookList } from "../Book/cmps/BookList.jsx";
import { bookService } from "./service/bookService.js";
export class BookApp extends React.Component {
    state = {
        filterBy: {
            name: '',
            lowPrice: 0,
            highPrice: 400
        },
        books: [],
    }

    componentDidMount() {
        this.loadBooks()
    }

    loadBooks = () => {
        bookService.query()
            .then(books => this.setState({ books }))
    }

    onAddBook = (book) => {
        bookService.addBook(book)
            .then(books => this.setState({ books }))
    }

    get booksToDisplay() {
        const { filterBy, books } = this.state
        return books.filter(book => {
            const isTitleInc = book.title.toLowerCase().includes(filterBy.name.toLowerCase())
            const isPriceInc = book.listPrice.amount < filterBy.highPrice && book.listPrice.amount > filterBy.lowPrice
            return isTitleInc && isPriceInc
        })
    };

    onSetFilter = (filterBy) => {
        this.setState({ filterBy })
    }

    render() {
        const booksToShow = this.booksToDisplay
        return (
            <section className="book-app">
                <BookFilter filterBy={this.state.filterBy} onSetFilter={this.onSetFilter} />
                <BookAdd addBook={this.onAddBook} />
                <BookList books={booksToShow} />
            </section>
        )
    }
}