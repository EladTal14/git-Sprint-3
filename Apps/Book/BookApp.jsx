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
        console.log('Page is ready');
        this.loadBooks()

    }

    loadBooks = () => {
        //before//
        // const books = bookService.query()
        // this.setState({ books })
        bookService.query()
            .then(books => this.setState({ books }))
    }

    onAddBook = (book) => {
        bookService.addBook(book)
            .then(books => this.setState({ books }))
        // this.loadBooks()
    }

    get booksToDisplay() {
        const { filterBy, books } = this.state
        console.log('books', books);

        // CR //
        return books.filter(book => {
            const isTitleInc = book.title.toLowerCase().includes(filterBy.name.toLowerCase())
            const isPriceInc = book.listPrice.amount < filterBy.highPrice && book.listPrice.amount > filterBy.lowPrice
            return isTitleInc && isPriceInc
        })

        // return books.filter(book => {
        //     return book.title.toLowerCase().includes(filterBy.name.toLowerCase())
        // })
    };


    onSetFilter = (filterBy) => {
        this.setState({ filterBy }, () => console.log('this.state: ', this.state))
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