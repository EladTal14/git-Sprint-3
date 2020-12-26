import { networkBookService } from "../../Book/service/NetworkService.js";
import { eventBusService } from "../../../services/eventBusService.js";

export class BookAdd extends React.Component {

    state = {
        name: '',
        searchBooks: []
    }

    handelChange = ({ target }) => {
        this.setState({
            [target.name]: target.value,
        }, () => networkBookService.getNetworkBooks(this.name)
            .then(books => {
                this.setState({
                    searchBooks: books
                })
            }))
    }

    addBook = (book) => {
        this.props.addBook(book)
        eventBusService.emit('showMsg', 'Book Added')
    }


    render() {
        const { searchBooks, name } = this.state
        if (!searchBooks) return <div>Loading...</div>
        return (
            <section className="new-book-filter">
                <input name="name" value={this.state.name} onChange={this.handelChange} type="text" placeholder="Search for a new book" autoComplete="off" />
                {name && <ul className="new-books-list">
                    {searchBooks.map(book => {
                        return <li key={book.id} >{book.volumeInfo.title}
                            <button className="book-btn" onClick={() => this.addBook(book)} className="new-btn">+</button>
                        </li>
                    })}
                </ul>}

            </section>
        )
    }
}