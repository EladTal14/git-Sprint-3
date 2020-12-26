export function ReviewsShow({ book }) {
    if(!book.reviews) return <div>Loading...</div>
    return <article className="book-reviews">
        <h3>Old reviews:</h3>
        {book.reviews.map((review, idx) => 
         <section className="book-review" key={idx}>
                <h4>name: {review.fullName}</h4>
                <h4>rate: {review.rate}</h4>
                <h4>comment: {review.comment}</h4>
                <button className="book-btn">X</button>
            </section>)}
    </article>
}