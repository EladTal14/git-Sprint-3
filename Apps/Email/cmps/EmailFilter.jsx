export class EmailFilter extends React.Component {
  state = {
    filterBy: {
      option: 'sendTo',
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
      <section className="email-filter">
        <img src="./assets/img/search.png" alt="" />
        <input type="text" name="txt"
          value={this.state.filterBy.txt}
          placeholder="Search mail"
          autoComplete="off"
          autoFocus
          className="filter-by-name"
          onChange={this.handleChange} />
        <select name="option" id="" value={this.state.filterBy.option} onChange={this.handleChange} className="filter-option">
          <option value="sendTo">Sent To</option>
          <option value="isRead">Read</option>
          <option value="unRead">Unread</option>
        </select>
      </section>
    )
  }
}
