const Router = ReactRouterDOM.HashRouter;
const { Route, Switch } = ReactRouterDOM;

import { KeepApp } from './Apps/Keep/KeepApp.jsx'
import { EmailApp } from './Apps/Mail/EmailApp.jsx'
import { MainNav } from './cmps/MainNav.jsx'
import { About } from './pages/About.jsx'
import { HomePage } from './pages/HomePage.jsx'
import { UserMsg } from './cmps/UserMsg.jsx'
import { EmailDetails } from './Apps/Mail/cmps/EmailDetails.jsx'
// import { NoteDetails } from './Apps/Mail/cmps/EmailDetails.jsx'
import { NotePreview } from './Apps/Keep/cmps/NotePreview.jsx';
export function RootCmp() {

    return (
        <Router>
            <section className="appsus">
                <h1>My App</h1>
                <MainNav />
                <UserMsg />
                <Switch>
                    {/* <Route path="/book/:bookId" component={BookDetails} />
                    <Route path="/book" component={BookApp} /> */}

                    <Route path="/keep/:noteId" component={NotePreview} />
                    <Route path="/email/:emailId" component={EmailDetails} />
                    <Route path="/keep" component={KeepApp} />
                    <Route path="/email" component={EmailApp} />
                    <Route path="/about" component={About} />
                    <Route path="/" component={HomePage} />
                </Switch>

            </section>
        </Router>
    )
}



