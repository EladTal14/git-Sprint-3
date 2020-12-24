

export class EmailFilter extends React.Component {
  state = {
    subject: '',

  }
  handleChange = (ev) => {
    const callback = () => {
      this.props.setFilter(this.state);
    };
    const value = ev.target.value;
    const field = ev.target.name
    this.setState({ [field]: value }, callback);
  };


  render() {

    return (
      <section className="filter">
        <input type="text" name="subject"
          value={this.props.subject}
          placeholder="Search mail"
          autoComplete="off"
          autoFocus
          className="filter-by-name"
          onChange={this.handleChange} />
      </section>
    )
  }
}
