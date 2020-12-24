

export class EmailFilter extends React.Component {
  state = {
    filterBy: {
      option: 'name',
      txt: '',
    },

  }
  handleChange = (ev) => {
    const callback = () => {
      this.props.setFilter(this.state.filterBy);
    };
    const filterBy = { ...this.state.filterBy }
    filterBy[ev.target.name] = ev.target.value

    this.setState({ filterBy }, callback);
  };


  render() {

    return (
      <section className="filter">
        <input type="text" name="txt"
          value={this.state.filterBy.txt}
          placeholder="Search mail"
          autoComplete="off"
          autoFocus
          className="filter-by-name"
          onChange={this.handleChange} />
        <select name="option" id="" value={this.state.filterBy.option} onChange={this.handleChange}>
          <option value="name">name</option>
          <option value="read">read</option>
          <option value="unread">unread</option>
        </select>
      </section>
    )
  }
}
