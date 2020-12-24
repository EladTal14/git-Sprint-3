import { utilService } from '../../../services/utilService.js'
const { Link } = ReactRouterDOM;
export class EmailPreview extends React.Component {
  state = {
    isRead: false,
    time: null
  }
  componentDidMount() {
    this.setState({
      isRead: this.props.email.isRead
    })
    this.setState({
      time: this.onTime()
    })
  }
  onRead = (ev) => {
    console.log(ev);
    ev.preventDefault()
    this.setState({
      isRead: !this.state.isRead
    })
  }
  onTime = () => {
    return utilService.changeStampToDate(this.props.email.sentAt)
  }

  render() {
    const { email } = this.props
    const { isRead } = this.state
    const { time } = this.state
    return (
      <Link to={`/email/${email.id}`}>

        <li className={`${(isRead) ? "is-read" : ''} email-preview `}>
          <span>{email.subject} </span><span>{email.body}</span>
          <div className="time-and-actions">
            <span>{time}</span>
            <button onClick={this.onRead}><img src={`${(isRead) ? "../../../assets/css/apps/mail/img/mail-read.png"
              : "../../../assets/css/apps/mail/img/mail-un-read.png"
              }`} alt="" /></button>
          </div>
        </li>
      </Link >
    )
  }
}
