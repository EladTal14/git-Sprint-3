export class EmailSort extends React.Component {
  state = {
    sortBy: {
      sort: 'date ↑'
    },

  }

  handleChange = (ev) => {
    const callback = () => {
      this.props.setSort(this.state.sortBy);
    };
    const sortBy = { ...this.state.sortBy }
    sortBy[ev.target.name] = ev.target.value

    this.setState({ sortBy }, callback);
  };

  render() {
    return (
      <section className="sort-by">
        <label htmlFor="sort" >
          <span>Sort By: </span>
          <select name="sort" id="sort" value={this.state.sortBy.sort} onChange={this.handleChange}>
            <option value="date ↑">Date ↑</option>
            <option value="date ↓">Date ↓</option>
            <option value="title ↑">Name ↑</option>
            <option value="title ↓">Name ↓</option>
          </select>
        </label>
      </section>
    )
  }
}