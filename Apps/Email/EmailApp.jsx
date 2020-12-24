import { EmailCompose } from './cmps/EmailCompose.jsx';
import { EmailFilter } from './cmps/EmailFilter.jsx';
import { EmailList } from './cmps/EmailList.jsx';
import { emailService } from './services/emailService.js';

export class EmailApp extends React.Component {
  state = {
    emails: [],
    filterBy: {
      txt: '',
    },
    isRead: null,
    isComopseShown: false,
    isListShow: true
  }
  componentDidMount() {
    this.loadEmails();
  }
  loadEmails = () => {
    emailService.query()
      .then(emails => this.setState({ emails }, () => console.log(this.state.emails)))

  }

  onSetFilter = (filterBy) => {
    this.setState({ filterBy });
  }

  get emailsForDisplay() {
    const { filterBy } = this.state;
    const filterRegex = new RegExp(filterBy.txt, 'i');

    return this.state.emails.filter(email => email).filter(email => filterRegex.test(email.sendTo) || filterRegex.test(email.body))
    return this.state.emails.filter(email => filterRegex.test(email.sendTo) || filterRegex.test(email.body))
  }
  onComposeEmail = () => {
    this.setState({ isComopseShown: !this.state.isComopseShown })
  }
  onAddNewEmail = (email) => {
    emailService.addEmailToInbox(email)
      .then((addedEmail) => this.setState({ emails: [addedEmail, ...this.state.emails] }))

  }
  onEditEmail = () => {
    this.setState({ isListShow: !this.state.isListShow })
  }
  render() {
    const emailsForDisplay = this.emailsForDisplay
    const { isComopseShown, isListShow } = this.state

    return <section className="email-app ">
      <EmailFilter setFilter={this.onSetFilter} />
      <div className="main-content flex">
        <div className="actions-filters flex column space-between">
          <button className="compose" onClick={this.onComposeEmail}><img src="../../../assets/css/apps/mail/img/compose-btn.png" /><span>Compose</span> </button>
          <a>Starred</a>
          <a>Sent Mail</a>
          <a>Drafts</a>
          <a>bar</a>
        </div>
        {isComopseShown && <EmailCompose composeEmail={this.onComposeEmail} addNewEmail={this.onAddNewEmail} />}
        {isListShow && <EmailList emails={emailsForDisplay} editEmail={this.onEditEmail} />}
      </div>
    </section>
  }
}


