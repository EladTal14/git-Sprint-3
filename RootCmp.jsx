const Router = ReactRouterDOM.HashRouter;
const { Route, Switch } = ReactRouterDOM;

import { KeepApp } from './Apps/Note/KeepApp.jsx'
import { EmailApp } from './Apps/Email/EmailApp.jsx'
import { BookApp } from './Apps/Book/BookApp.jsx'
import { MainNav } from './cmps/MainNav.jsx'
import { About } from './pages/About.jsx'
import { HomePage } from './pages/HomePage.jsx'
import { UserMsg } from './cmps/UserMsg.jsx'
import { Footer } from './cmps/Footer.jsx'
import { EmailDetails } from './Apps/Email/cmps/EmailDetails.jsx'
import { BookDetails } from './Apps/Book/cmps/BookDetails.jsx'
// import { NoteDetails } from './Apps/Mail/cmps/EmailDetails.jsx'
import { NotePreview } from './Apps/Note/cmps/NotePreview.jsx';
export function RootCmp() {

    return (
        <Router>
            <section className="appsus">
                <MainNav />
                <UserMsg />
                <Switch>
                    <Route path="/book/:bookId" component={BookDetails} />
                    <Route path="/note/:noteId" component={NotePreview} />
                    <Route path="/email/:emailId" component={EmailDetails} />
                    <Route path="/book" component={BookApp} />
                    <Route path="/note" component={KeepApp} />
                    <Route path="/email" component={EmailApp} />
                    <Route path="/about" component={About} />
                    <Route path="/" component={HomePage} />
                </Switch>
                <Footer />
            </section>
        </Router>
    )
}



