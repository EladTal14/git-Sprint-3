import { emailService } from '../services/emailService.js'
import { EmailSideBar } from './EmailSideBar.jsx';
import { EmailCompose } from './EmailCompose.jsx';
import { eventBusService } from '../../../services/eventBusService.js'
import { EmailReply } from './EmailReply.jsx';
export class EmailDetails extends React.Component {
  state = {
    email: null,
    isComopseShown: false,
    isReply: false
  }
  componentDidMount() {
    this.loadEmail();
  }
  loadEmail() {
    const { emailId } = this.props.match.params;
    emailService.getById(emailId.trim())
      .then(email => this.setState({ email }))
      .then(() => {
        const email = this.state.email;
        email.isRead = true;
        this.setState({ email })
      })
  }
  onBack = () => {
    this.props.history.goBack()
  };
  onDeleteEmail = () => {
    emailService.removeEmail(this.state.email.id)
      .then(() => this.onBack())
      .then(() => eventBusService.emit('showMsg', 'Email removed'))
  }

  onReply = () => {
    this.setState({ isReply: !this.state.isReply })
  }
  onSend = (email) => {
    this.setState({ email })
  }
  render() {
    if (!this.state.email) return <div>...loading</div>
    const { email, isComopseShown, isReply } = this.state
    return (
      <section className="email-details flex">
        <EmailSideBar composeEmail={this.props.composeEmail} />
        <div className="email-body">
          <h1>Subject: {email.subject}</h1>
          <h3>From: {email.sendTo}</h3>
          <pre>
            {email.body}
          </pre>
          {(!isReply) && <div className="invisible"></div>}
          {isReply && <EmailReply emailBody={email.body} emailId={email.id} reply={this.onReply} isReply={isReply} send={this.onSend} />}

          <div className="actions">
            <button onClick={this.onDeleteEmail} className="delete">Delete Email</button>
            <button className="reply" onClick={this.onReply}>Reply</button>
            <button className="back-to-emails" onClick={this.onBack}>Back to emails</button>
          </div>
        </div>
        {isComopseShown && <EmailCompose composeEmail={this.onComposeEmail} addNewEmail={this.onAddNewEmail} />}
      </section>
    )
  }
}
