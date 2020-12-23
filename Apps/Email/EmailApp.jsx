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
      <div className="main-content flex">
        <div className="actions-filters flex column space-between">
          <EmailFilter setFilter={this.onSetFilter} />
          <button className="compose" onClick={this.onComposeEmail}><img src="../../../assets/css/apps/mail/img/compose-btn.png" /><span>Compose</span> </button>
          <a>Starred</a>
          <a>Sent Mail</a>
          <a>Drafts</a>
          <a>bar</a>
        </div>
        {isComopse && <EmailCompose composeEmail={this.onComposeEmail} addNewEmail={this.onAddNewEmail} />}
        <EmailList emails={emailsForDisplay} />
      </div>
    </section>
  }
}


