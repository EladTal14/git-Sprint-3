import { emailService } from '../services/emailService.js'
import { EmailSideBar } from './EmailSideBar.jsx';

export class EmailDetails extends React.Component {
  state = {
    email: null
  }
  componentDidMount() {

    this.loadEmail();
  }
  loadEmail() {

    const { emailId } = this.props.match.params;

    emailService.getById(emailId.trim()).then(email => {
      this.setState({ email })

    });
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
    const { email } = this.state
    return (
      <section className="email-details">
        <EmailSideBar />
        <h1>{email.subject}</h1>
        <h3>{email.sendTo}</h3>
        <pre>
          {email.body}
        </pre>
        <button onClick={this.onDeleteEmail}>Delete Email</button>
        <button onClick={this.onBack}>Back to emails</button>
      </section>
    )
  }
}
