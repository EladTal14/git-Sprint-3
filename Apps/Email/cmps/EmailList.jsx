
import { EmailPreview } from "./EmailPreview.jsx";
export function EmailList({ emails, editEmail, readUnread, composeEmail }) {

  return (
    <section className="email-list">
      <ul className="clean-list flex column ">
        {emails.map(email => {
          return <EmailPreview key={email.id} email={email} composeEmail={composeEmail}
            editEmail={editEmail} readUnread={readUnread} />
        })
        }
      </ul>
    </section>
  )

}
