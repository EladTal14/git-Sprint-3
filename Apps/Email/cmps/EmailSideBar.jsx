export function EmailSideBar(props) {

  return (
    <div className="side-bar actions-filters flex column space-between ">
      <button className="compose" onClick={props.composeEmail}><img src="./assets/css/apps/mail/img/compose-btn.png" /><span>Compose</span> </button>
      <a>Starred</a>
      <a>Sent Mail</a>
      <a>Drafts</a>
      <a>bar</a>
    </div>
  )

}


