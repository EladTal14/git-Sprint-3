import { EmailPreview } from "./EmailPreview.jsx";
export function EmailList({ emails, editEmail, readUnread, removeEmail }) {
  return (
    <section className="email-list">
      <ul className="clean-list flex column ">
        {emails.map(email => {
          return <EmailPreview key={email.id} email={email} removeEmail={removeEmail}
            editEmail={editEmail} readUnread={readUnread} />
        })
        }
      </ul>
    </section>
  )

}
