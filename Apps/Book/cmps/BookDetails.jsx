import { bookService } from '../service/bookService.js';
import { ReviewAdd } from '../../Book/cmps/ReviewAdd.jsx';
import { ReviewsShow } from '../../Book/cmps/ReviewsShow.jsx';
import { eventBusService } from "../../../services/eventBusService.js";
const { Link } = ReactRouterDOM;

export class BookDetails extends React.Component {

    state = {
        book: null,
    };

    componentDidMount() {
        this.loadBook()
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.bookId !== this.props.match.params.bookId) {
            this.loadBook()
        }
    }

    loadBook = () => {
        const { bookId } = this.props.match.params;
        bookService.getById(bookId).then(book => {
            this.setState({ book });
        });
    }

    checkLength = () => {
        var text = ''
        const { book } = this.state
        if (book.description.lenght > 500) text = 'Long Reading';
        else if (book.description.lenght > 200) text = 'Decent Reading';
        else text = 'Light Reading'
        return text;
    }

    checkPublishedDate = () => {
        var text = ''
        const { book } = this.state
        var year = new Date().getFullYear();
        if (year - (book.publishedDate) > 10) text = 'Veteran Book'
        else if (year - (book.publishedDate) > 1) text = 'New!'
        return text
    }

    priceColor = () => {
        var color = ''
        const { book } = this.state
        if (book.listPrice.amount > 150) color = 'red'
        else if (book.listPrice.amount < 20) color = 'green'
        return color

    }

    onClose = () => {
        this.props.history.push('/book')
    }

    addReview = (review) => {
        bookService.saveReview(this.state.book, review)
            .then(book => this.setState({ book }))
            .then(() => eventBusService.emit('showMsg', 'Review Added'))
    }

    render() {
        if (!this.state.book) return <div>Loading...</div>
        const { book } = this.state
        const prevBook = bookService.getPrevBook(book.id)
        const nextBook = bookService.getNextBook(book.id)
        return (<section className="book-container">
            <div className="page-btn">
                <Link to={`/book/${prevBook}`}>
                    <button className="book-btn">Prev Book</button>
                </Link>
                <Link to={`/book/${nextBook}`}>
                    <button className="book-btn" >Next Book</button>
                </Link>
            </div>
            <div className="book-details">
                {book.listPrice.isOnSale && <img className="sale-img" src="./assets/css/apps/books/img/sale.png" alt="" />}
                <h1>{book.title}</h1>
                <img className="book-img" src={book.thumbnail} alt="" />
                <h3>{this.checkLength()}</h3>
                <p>{book.description}</p>
                <h3>published Date: {book.publishedDate} <span>{this.checkPublishedDate()}</span></h3>
                <h4 className={this.priceColor()}>Price: {book.listPrice.amount}</h4>
                <ReviewAdd addReview={this.addReview} />
                <ReviewsShow book={book} />
                <button className="book-btn" onClick={this.onClose}>Close</button>
            </div>
        </section>
        )

    }
}