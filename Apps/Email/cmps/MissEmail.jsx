import { EmailCompose } from "./EmailCompose.jsx";
import { EmailDetails } from "./EmailDetails.jsx";
import { EmailFilter } from "./EmailFilter.jsx";
import { EmailList } from "./EmailList.jsx";
import { EmailStatus } from "./EmailStatus.jsx";



export class MissEmail extends React.Component {
  render() {
    return (
      <div>
        <h1>Miss Mail</h1>
        <EmailFilter />
        <EmailList />
        <EmailDetails />
        <EmailStatus />
        <EmailCompose />
      </div>
    )
  }
}
