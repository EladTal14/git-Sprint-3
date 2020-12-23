
const { Link } = ReactRouterDOM;
export function EmailPreview({ email }) {


  return (
    <Link to={`/email/${email.id}`}>

      <li className={`${email.isRead && "is-read"} email-preview `}>
        <span>{email.subject} </span><span>{email.body}</span>
        <button><img src={`${(email.isRead) ? "../../../assets/css/apps/mail/img/mail-read.png"
          : "../../../assets/css/apps/mail/img/mail-un-read.png"
          }`} alt="" /></button>

      </li>
    </Link >
  )

}
