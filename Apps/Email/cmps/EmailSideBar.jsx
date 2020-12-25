import { EmailStatus } from './EmailStatus.jsx'
import { EmailCompose } from './EmailCompose.jsx'
import { eventBusService } from '../../../services/eventBusService.js';
import { emailService } from '../services/emailService.js'
export class EmailSideBar extends React.Component {
  state = {
    isComopseShown: false,
  }
  componentDidMount() {

  }

  onComposeEmail = () => {
    this.setState({ isComopseShown: !this.state.isComopseShown }, () => console.log(this.state))
  }

  onAddNewEmail = (email) => {
    eventBusService.emit('showMsg', 'Email Sent')
    setTimeout(() => {
      emailService.addEmailToInbox(email)
        .then((addedEmail) => eventBusService.emit('gotNewEmail', addedEmail))
        .then(() => eventBusService.emit('showMsg', 'Email Received'))
    }, 4100);
  }
  render() {
    const { isComopseShown } = this.state
    return (
      <div className="side-bar actions-filters flex column space-between ">
        <button className="compose" onClick={this.onComposeEmail} ><img src="./assets/css/apps/mail/img/compose-btn.png" /><span>Compose</span> </button>
        <a>Starred</a>
        <a>Sent Mail</a>
        <a>Drafts</a>
        <EmailStatus />
        <a>bar</a>
        {isComopseShown && <EmailCompose composeEmail={this.onComposeEmail}
          addNewEmail={this.onAddNewEmail} />}
      </div>
    )
  }
}


