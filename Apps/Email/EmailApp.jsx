import { EmailSideBar } from './cmps/EmailSideBar.jsx';
import { EmailCompose } from './cmps/EmailCompose.jsx';
import { EmailFilter } from './cmps/EmailFilter.jsx';
import { EmailList } from './cmps/EmailList.jsx';
import { EmailSort } from './cmps/EmailSort.jsx';
import { emailService } from './services/emailService.js';

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
    setTimeout(() => {
      emailService.addEmailToInbox(email)
        .then((addedEmail) => this.setState({ emails: [addedEmail, ...this.state.emails] }))
    }, 1700);
  }
  onEditEmail = () => {
    this.setState({ isListShow: !this.state.isListShow })
  }
  onReadUnreadEmail = () => {
    this.setState({ emails: this.state.emails })
  }
  render() {
    const emailsForDisplay = this.emailsForDisplay
    const { isComopseShown, isListShow } = this.state

    return <section className="email-app ">
      <EmailFilter setFilter={this.onSetFilter} />
      <EmailSort setSort={this.onSetSort} />

      <div className="main-content flex">
        <EmailSideBar composeEmail={this.onComposeEmail} />
        {isComopseShown && <EmailCompose composeEmail={this.onComposeEmail}
          addNewEmail={this.onAddNewEmail} />}
        {isListShow && <EmailList emails={emailsForDisplay} composeEmail={this.onComposeEmail}
          editEmail={this.onEditEmail} readUnread={this.onReadUnreadEmail} />}

      </div>
    </section>
  }
}


