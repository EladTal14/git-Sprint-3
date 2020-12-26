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
    return (
      <div>
      </div>
    )
  }
}
