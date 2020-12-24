
import { EmailPreview } from "./EmailPreview.jsx";
export function EmailList({ emails }) {

  return (
    <section className="email-list">
      <ul className="clean-list flex column ">
        {emails.map(email => {
          return <EmailPreview key={email.id} email={email} />
        })
        }
      </ul>
    </section>
  )

}
