export class ReviewAdd extends React.Component {

    state = {
        // book: null,
        review: {
            fullName: '',
            rate: 1,
            comment: 'liked it!'
        }
    };

    // componentDidMount() {
    //     console.log('this.props:', this.props);
    //     const { bookId: bookId } = this.props.match.params;
    //     bookService.getById(bookId).then(book => {
    //         this.setState({ book });
    //     });
    // }


    onAddReview = (ev) => {
        ev.preventDefault();
        this.props.addReview(this.state.review)
        // bookService.saveReview(this.state.book, this.state.review)
        // this.props.history.push('/book')
    }

    onInputChange = (ev) => {
        const value = ev.target.type === 'number' ? +ev.target.value
            : ev.target.value;

        const reviewCopy = { ...this.state.review };
        reviewCopy[ev.target.name] = value;

        this.setState({
            review: reviewCopy
        });
    }

    render() {
        // if (!this.state.book) return <div>Loading...</div>
        const { review } = this.state
        return (<section className="form-review">
            <h1>Add review:</h1>
            <form className="review-form" onSubmit={this.onAddReview}>
                <input value={review.fullName} onChange={this.onInputChange} type="text" name="fullName" placeholder="fullname" />
                <div>
                    <label htmlFor="quantity">Rate (between 1 and 5):</label>
                    <input value={review.rate} onChange={this.onInputChange} name="rate" type="number" min="1" max="5" />
                </div>
                <div>
                <label htmlFor="" className="comment">Add a comment:</label>
                <textarea value={review.comment} onChange={this.onInputChange} name="comment" id="" cols="30" rows="10"></textarea>
                </div>
                <button className="book-btn add-btn" type="submit">Add</button>
            </form>
        </section>
        )

    }
}