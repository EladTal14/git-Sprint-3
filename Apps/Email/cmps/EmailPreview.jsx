
const { Link } = ReactRouterDOM;
export function EmailPreview({ email }) {


  return (
    <Link to={`/email/${email.id}`}>

      <li className="email-preview">
        <span>{email.subject} </span><span>{email.body}</span>

      </li>

    </Link>
  )

}
