import { emailService } from '../services/emailService.js'
export class EmailCompose extends React.Component {
  state = {
    email: {
      sendTo: '',
      cc: '',
      bcc: '',
      subject: '',
      body: ''
    }
  }

  addEmail = (ev) => {
    ev.preventDefault();
    this.props.composeEmail()
    this.props.addNewEmail(this.state.email)
  }

  handleChange = (ev) => {
    const value = ev.target.value;
    const field = ev.target.name
    const email = { ...this.state.email, [field]: value }
    this.setState({ email })
  };

  render() {
    const { email } = this.state
    return (
      <section className="email-compose">
        <header className="flex space-between">
          <h1>New Message</h1>
          <h1 onClick={this.props.composeEmail} className="close-btn">x</h1>
        </header>
        <form className="flex column" onSubmit={this.addEmail}>
          <input type="text" placeholder="To" name="sendTo" value={email.sendTo} onChange={this.handleChange} autoFocus autoComplete="off" required />
          <input type="text" placeholder="CC" name="cc" value={email.cc} onChange={this.handleChange} autoComplete="off" />
          <input type="text" placeholder="BCC" name="bcc" value={email.bcc} onChange={this.handleChange} autoComplete="off" />
          <input type="text" placeholder="Subject" name="subject" value={email.subject} onChange={this.handleChange} autoComplete="off" />
          <textarea name="" id="" cols="60" rows="13" name="body" value={email.body} onChange={this.handleChange} required></textarea>
          <div className="actions flex space-between">
            <button type="submit" className="btn-box btn-gradient btn-pos">Send</button>
            <a onClick={this.props.composeEmail} className="trash"><img src="./assets/css/apps/mail/img/trash.png" alt="" /></a>
          </div>
        </form>

      </section>
    )
  }
}
