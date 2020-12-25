import { emailService } from '../services/emailService.js'
import { EmailSideBar } from './EmailSideBar.jsx';
import { EmailCompose } from './EmailCompose.jsx';

export class EmailDetails extends React.Component {
  state = {
    email: null,
    isComopseShown: false
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

  }

  render() {
    if (!this.state.email) return <div>...loading</div>
    const { email, isComopseShown } = this.state
    return (
      <section className="email-details flex">
        <EmailSideBar composeEmail={this.props.composeEmail} />
        <div className="email-body">
          <h1>Subject: {email.subject}</h1>
          <h3>From: {email.sendTo}</h3>
          <pre>
            {email.body}
          </pre>
          <button onClick={this.onDeleteEmail}>Delete Email</button>
          <button className="reply">Reply</button>
          <button className="back-to-emails" onClick={this.onBack}>Back to emails</button>
        </div>
        {isComopseShown && <EmailCompose composeEmail={this.onComposeEmail} addNewEmail={this.onAddNewEmail} />}
      </section>
    )
  }
}
