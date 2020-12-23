

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
      <section>
        <input type="text" name="subject"
          value={this.props.subject}
          placeholder="Search mail"
          autoComplete="off"
          autoFocus
          onChange={this.handleChange} />
      </section>
    )
  }
}
