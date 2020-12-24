export class EmailSort extends React.Component {
  state = {
    sortBy: {
      date: '',
      title: '',
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
    console.log(this.state.sortBy);
    return (
      <section className="sortBy">
        <span>Sort By: </span>
        <label htmlFor="" >
          <select name="option" id="" value={this.state.sortBy.option} onChange={this.handleChange}>
            <option value="dateUp">Date ↑</option>
            <option value="dateDown">Date ↓</option>
            <option value="titleUp">Title ↑</option>
            <option value="titleDown">Title ↓</option>
          </select>
        </label>
      </section>
    )
  }
}