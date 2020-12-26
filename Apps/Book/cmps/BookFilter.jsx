export class BookFilter extends React.Component {

    state = {
        name: '',
        lowPrice: 0,
        highPrice: 400
    }

    handelChange = ({ target }) => {
        this.setState({ [target.name]: target.value }, () => { this.props.onSetFilter(this.state) })
        // const callback = () => {
        //     this.props.onSetFilter(this.state);
        // };
        // const value = ev.target.type === 'number' ? +ev.target.value : ev.target.value;
        // const field = ev.target.name;
        // this.setState({ [field]: value }, callback)

    }



    render() {
        return (
            <section className="book-filter-box">
                <input type="text" name="name"
                    value={this.state.name}
                    placeholder="filter by name"
                    onChange={this.handelChange} />


                    {/* CR  */}
                <input type="number" name="lowPrice" value={this.state.lowPrice} onChange={this.handelChange}/>
                <input type="number" name="highPrice" value={this.state.highPrice} onChange={this.handelChange}/>
            </section>
        )
    }
}