import { EmailCompose } from './cmps/EmailCompose.jsx';
import { EmailFilter } from './cmps/EmailFilter.jsx';
import { EmailList } from './cmps/EmailList.jsx';
import { emailService } from './services/emailService.js';

export class EmailApp extends React.Component {
  state = {
    emails: [],
    filterBy: {
      name: '',
      isRead: null
    },
    isComopse: false
  }
  componentDidMount() {
    this.loadEmails();
  }
  loadEmails = () => {
    emailService.query()
      .then(emails => this.setState(
        { emails }))
      .then(() => console.log(this.state.emails))
  }

  onSetFilter = (filterBy) => {
    console.log('filterBy:', filterBy);
    this.setState({ filterBy });
  }

  get emailsForDisplay() {
    const { filterBy } = this.state;
    const filterRegex = new RegExp(filterBy.subject, 'i');
    return this.state.emails.filter(email => filterRegex.test(email.subject));
  }
  onComposeEmail = () => {
    this.setState({
      isComopse: !this.state.isComopse
    })
  }
  onAddNewEmail = (email) => {
    emailService.addEmailToInbox(email)
      .then(() => this.loadEmails())

  }
  render() {
    const emailsForDisplay = this.emailsForDisplay
    const { isComopse } = this.state
    return <section className="email-app ">
      <EmailFilter setFilter={this.onSetFilter} />
      <button onClick={this.onComposeEmail}>Compose</button>

      {isComopse && <EmailCompose composeEmail={this.onComposeEmail} addNewEmail={this.onAddNewEmail} />}
      <EmailList emails={emailsForDisplay} />

    </section>
  }
}


