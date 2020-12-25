import { utilService } from '../../../services/utilService.js'
import { storageService } from '../../../services/storage-service.js'

export const emailService = {
  query,
  addEmailToInbox,
  getById,
  removeEmail,
  changeReadUnread,
  sortBy,
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
function sortBy(sortByVal) {
  let val = null
  let upDown = null
  if (sortByVal.includes('t')) val = 'title'
  else val = 'date'
  let isDown = sortByVal.includes('↓')
  if (isDown) upDown = '↓'
  else upDown = '↑'
  let sortedEmails = null
  if (val === 'date' && upDown === '↑') {
    sortedEmails = emails.sort((email1, email2) => {
      return email1.sentAt - email2.sentAt
    })
  }
  if (val === 'date' && upDown === '↓') {
    sortedEmails = emails.sort((email1, email2) => {
      return email2.sentAt - email1.sentAt
    })
  }
  if (val === 'title' && upDown === '↑') {
    sortedEmails = emails.sort((email1, email2) => {
      return (email2.sendTo).localeCompare(email1.sendTo)
    })
  }
  if (val === 'title' && upDown === '↓') {
    sortedEmails = emails.sort((email1, email2) => {
      return (email1.sendTo).localeCompare(email2.sendTo)
    })
  }
  _saveEmailsToStorage()
  return Promise.resolve(sortedEmails)
}
function query() {
  return Promise.resolve(emails)
}
function removeEmail(emailId) {
  emails = emails.filter(email => email.id !== emailId);
  _saveEmailsToStorage();
  return Promise.resolve(emails);

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
    { sendTo: 'elad', id: utilService.makeId(), subject: 'Wassap?', body: 'Pick up!', isRead: false, sentAt: 1 },
    { sendTo: 'basya', id: utilService.makeId(), subject: 'hello dear alan', body: `Computers, smartphones and interoint where we'd be stuck without them. soundly at night.`, isRead: true, sentAt: 2 },
    { sendTo: 'yaron', id: utilService.makeId(), subject: 'Linkedin job alerts', body: 'come work for us at wix', isRead: false, sentAt: 3 },
    { sendTo: 'avi', id: utilService.makeId(), subject: 'Come Back to Instagram', body: 'we miss you at insta come look at new pics of your friends', isRead: false, sentAt: 4 },
    { sendTo: 'Moran', id: utilService.makeId(), subject: 'Linkedin job alerts', body: 'come work for us at wix', isRead: true, sentAt: 5 },
    { sendTo: 'FaceBook', id: utilService.makeId(), subject: 'Linkedin job alerts', body: 'come work for us at wix', isRead: true, sentAt: 5 },
    { sendTo: 'Hilel', id: utilService.makeId(), subject: 'Linkedin job alerts', body: 'come work for us at wix', isRead: true, sentAt: 5 },
    { sendTo: 'Aviv', id: utilService.makeId(), subject: 'Linkedin job alerts', body: 'come work for us at wix', isRead: true, sentAt: 5 },
    { sendTo: 'FaceBook', id: utilService.makeId(), subject: 'Linkedin job alerts', body: 'come work for us at wix', isRead: true, sentAt: 5 },
    { sendTo: 'rami', id: utilService.makeId(), subject: 'Linkedin job alerts', body: 'come work for us at wix', isRead: true, sentAt: 5 },
    { sendTo: 'Aviv', id: utilService.makeId(), subject: 'Linkedin job alerts', body: 'come work for us at wix', isRead: true, sentAt: 5 },
    { sendTo: 'rami', id: utilService.makeId(), subject: 'Linkedin job alerts', body: 'come work for us at wix', isRead: true, sentAt: 5 },
    { sendTo: 'Moran', id: utilService.makeId(), subject: 'Linkedin job alerts', body: 'come work for us at wix', isRead: true, sentAt: 5 },
    { sendTo: 'Hilel', id: utilService.makeId(), subject: 'Linkedin job alerts', body: 'come work for us at wix', isRead: true, sentAt: 5 },
    { sendTo: 'rami', id: utilService.makeId(), subject: 'Linkedin job alerts', body: 'come work for us at wix', isRead: true, sentAt: 5 },
    { sendTo: 'FaceBook', id: utilService.makeId(), subject: 'Linkedin job alerts', body: 'come work for us at wix', isRead: true, sentAt: 5 },
    { sendTo: 'rami', id: utilService.makeId(), subject: 'Linkedin job alerts', body: 'come work for us at wix', isRead: true, sentAt: 5 },
    { sendTo: 'Moran', id: utilService.makeId(), subject: 'Linkedin job alerts', body: 'come work for us at wix', isRead: true, sentAt: 5 },
    { sendTo: 'rami', id: utilService.makeId(), subject: 'Linkedin job alerts', body: 'come work for us at wix', isRead: true, sentAt: 5 },
    { sendTo: 'rami', id: utilService.makeId(), subject: 'Linkedin job alerts', body: 'come work for us at wix', isRead: true, sentAt: 5 },
    { sendTo: 'FaceBook', id: utilService.makeId(), subject: 'Linkedin job alerts', body: 'come work for us at wix', isRead: true, sentAt: 5 },
  ];
  return emails;
}

function _saveEmailsToStorage() {
  storageService.saveToStorage(KEY, emails)
}
