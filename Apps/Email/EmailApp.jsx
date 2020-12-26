import { EmailSideBar } from './cmps/EmailSideBar.jsx';
import { EmailFilter } from './cmps/EmailFilter.jsx';
import { EmailList } from './cmps/EmailList.jsx';
import { EmailSort } from './cmps/EmailSort.jsx';
import { emailService } from './services/emailService.js';
import { eventBusService } from '../../services/eventBusService.js';

export class EmailApp extends React.Component {
  state = {
    emails: [],
    filterBy: {
      txt: '',
      option: 'sendTo'
    },
    sortBy: {
      sort: ''
    },
    isRead: null,
    isListShow: true,
  }

  componentDidMount() {
    this.loadEmails();
    this.unsubscribe = eventBusService.on('gotNewEmail', (email) => {
      this.setState({ emails: [email, ...this.state.emails] })
    })
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  loadEmails = () => {
    emailService.query()
      .then(emails => this.setState({ emails }))
  }

  onSetFilter = (filterBy) => {
    this.setState({ filterBy });
  }

  onSetSort = (sortBy) => {
    this.setState({ sortBy });
    emailService.sortBy(sortBy.sort)
      .then(sortedEmails => this.setState({ emails: sortedEmails }))
  }

  get emailsForDisplay() {
    const { filterBy } = this.state;
    const filterRegex = new RegExp(filterBy.txt, 'i');
    var filterByOpt = filterBy.option
    return this.state.emails.filter(email => {
      if (filterByOpt === 'unRead') return email['isRead'] === false
      else return email[filterByOpt]
    }).filter(email => filterRegex.test(email.sendTo) || filterRegex.test(email.body))
  }

  onComposeEmail = () => {
    this.setState({ isComopseShown: !this.state.isComopseShown })
  }

  onAddNewEmail = (email) => {
    eventBusService.emit('showMsg', 'Email sent')
    setTimeout(() => {
      emailService.addEmailToInbox(email)
        .then((addedEmail) => this.setState({ emails: [addedEmail, ...this.state.emails] }))
        .then(() => eventBusService.emit('showMsg', 'Email received'))
    }, 4100);
  }

  onRemoveEmail = (id) => {
    emailService.removeEmail(id)
      .then((emails) => this.setState({ emails }))
      .then(() => eventBusService.emit('showMsg', 'Email removed'))

  }

  onEditEmail = () => {
    this.setState({ isListShow: !this.state.isListShow })
  }

  onReadUnreadEmail = () => {
    this.setState({ emails: this.state.emails })
  }

  render() {
    const emailsForDisplay = this.emailsForDisplay
    const { isListShow } = this.state
    return <section className="email-app">
      <EmailFilter setFilter={this.onSetFilter} />
      <EmailSort setSort={this.onSetSort} />
      <div className="main-content flex">
        <EmailSideBar />
        {isListShow && <EmailList emails={emailsForDisplay} removeEmail={this.onRemoveEmail}
          editEmail={this.onEditEmail} readUnread={this.onReadUnreadEmail} />}

      </div>
    </section>
  }
}


