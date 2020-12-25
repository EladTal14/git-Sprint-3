export class EmailStatus extends React.Component {
  state = {
    unreadEmails: 20
  }
  componentDidMount() {
    this.setState({ unreadEmails: this.props.unreadEmails })
  }

  refInput = React.createRef();

  onChange = () => {
    this.refInput.current
  }
  render() {
    const { unreadEmails } = this.state
    return (
      <div className="progress">
        <div className="progress-done" ref={this.refInput} data-done={`${unreadEmails}`}>
          ${unreadEmails}
        </div>
      </div>
    )
  }
}
