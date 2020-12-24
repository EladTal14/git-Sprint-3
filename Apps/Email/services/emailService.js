import { utilService } from '../../../services/utilService.js'
import { storageService } from '../../../services/storage-service.js'

export const emailService = {
  query,
  addEmailToInbox,
  getById,
  removeEmail,
  changeReadUnread,
}


var emails;
const KEY = 'emailDB'

_createEmails()

function _createEmails() {
  emails = storageService.loadFromStorage(KEY);
  if (!emails || !emails.length) {
    // Nothing in localStorage, use demo data
    emails = _demoEmails();
    _saveEmailsToStorage();
    return Promise.resolve(emails);
  }
}
function changeReadUnread(emailId) {
  const emailIdx = emails.findIndex(email => email.id === emailId)
  emails[emailIdx].isRead = !emails[emailIdx].isRead
  _saveEmailsToStorage();
}
function getById(emailId) {
  const emailNoSpace = emailId;
  const email = emails.find(email => email.id === emailNoSpace);

  return Promise.resolve(email);
}

function query() {
  return Promise.resolve(emails)
}
function removeEmail(emailId) {
  emails = emails.filter(email => email.id !== emailId);
  _saveEmailsToStorage();
  return Promise.resolve();

}
function addEmailToInbox(email) {
  const sentAt = Date.now();
  const emailToadd = { id: utilService.makeId(), sentAt, isRead: false, ...email };
  emails = [emailToadd, ...emails];
  _saveEmailsToStorage();
  return Promise.resolve(emailToadd);
}

function _demoEmails() {
  const emails = [
    { sendTo: 'elad', id: utilService.makeId(), subject: 'Wassap?', body: 'Pick up!', isRead: false, sentAt: 1608791237884 },
    {
      sendTo: 'basya', id: utilService.makeId(), subject: 'hello dear alan', body:
        `Computers, smartphones and interoint where we'd be stuck without them.
          soundly at night.`, isRead: true, sentAt: 1551133930594
    },
    { sendTo: 'yaron', id: utilService.makeId(), subject: 'Linkedin job alerts', body: 'come work for us at wix', isRead: false, sentAt: 1563133930594 },
    { sendTo: 'avi', id: utilService.makeId(), subject: 'Come Back to Instagram', body: 'we miss you at insta come look at new pics of your friends', isRead: false, sentAt: 1561133930594 },
    { sendTo: 'rami', id: utilService.makeId(), subject: 'Linkedin job alerts', body: 'come work for us at wix', isRead: true, sentAt: 1581133930594 },
  ];
  return emails;
}

function _saveEmailsToStorage() {
  storageService.saveToStorage(KEY, emails)
}

// The flip side is the more we rely on them, the more data passes through them and potentially out of our control. 
//          Sadly, these devices are often poorly privacy protected, for example a 2016 study of Android devices showed a shocking 34% of users don't even have a passcode set! 

//         But never fear — we're here to help you avoid being a scary statistic.
//         We've compiled step-by-step guides to protecting your privacy on these devices:

//         iOS
//         Android
//         Mac
//         Windows 10
//         Windows 7
//         Linux
//         We encourage you to go through the guides relevant for your devices for specific tips including screenshots, 
//         though regardless of device, here are some steps that everyone should take:

//         Set a password or passcode.
//         Encrypt your computer and phone.
//         Don't use an admin account for daily use.
//         Remove unneeded apps and extensions.
//         Keep your devices up-to-date.
//         Review which apps can access your personal data.
//         Use a mobile app or browser extension that protects your privacy as you surf the web.
//         These steps are simple, quick, and yet go a long way to keeping your personal information safe and helping you sleep