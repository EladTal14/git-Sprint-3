export class BookFilter extends React.Component {
    state = {
        name: '',
        lowPrice: 0,
        highPrice: 400
    }

    handelChange = ({ target }) => {
        this.setState({ [target.name]: target.value }, () => { this.props.onSetFilter(this.state) })
    }

    render() {
        return (
            <section className="book-filter-box">
                <input type="text" name="name"
                    value={this.state.name}
                    placeholder="filter by name"
                    onChange={this.handelChange} />
                <input type="number" name="lowPrice" value={this.state.lowPrice} onChange={this.handelChange} />
                <input type="number" name="highPrice" value={this.state.highPrice} onChange={this.handelChange} />
            </section>
        )
    }
}