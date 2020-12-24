import { utilService } from '../../../services/utilService.js'
const { Link } = ReactRouterDOM;
export class EmailPreview extends React.Component {
  state = {
    isRead: false,
    time: null
  }
  componentDidMount() {
    this.setState({
      isRead: this.props.email.isRead,

    })
    this.setState({
      time: this.onTime()
    })

  }
  onRead = (ev) => {
    ev.preventDefault()
    ev.stopPropagation()
    this.setState({
      isRead: !this.state.isRead
    })
  }
  onTime = () => {
    return utilService.changeStampToDate(this.props.email.sentAt)
  }
  editEmail = (ev) => {


    ev.preventDefault();
    this.props.editEmail()
  }
  render() {
    const { email } = this.props
    const { isRead } = this.state
    const { time } = this.state
    // const { editEmail } = this.props
    return (

      <Link to={`/email/${email.id} `} onClick={this.editEmail} >
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
