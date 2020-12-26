import { emailService } from '../services/emailService.js'
export class EmailReply extends React.Component {
  state = {
    body: '',
    isReply: null
  }
  componentDidMount() {
    this.setState({ isReply: this.props.isReply })
  }

  handleChange = (ev) => {
    const body = ev.target.value

    this.setState({ body });
  };
  Send = () => {
    this.setState({ isReply: !this.state.isReply }, () => {
      let body = this.props.emailBody
      body += '\n\n You replied: \n\n' + this.state.body
      emailService.addReply(body, this.props.emailId)
        .then((email) => this.props.send(email))
        .then(() => this.props.reply())
    })
  }
  render() {
    return (
      <div className="reply-body">
        <textarea id="" cols="40" rows="6" name="body" value={this.state.body}
          onChange={this.handleChange} autoFocus required>
        </textarea>
        <button onClick={this.Send}>Send reply</button>
      </div>
    )
  }
}
