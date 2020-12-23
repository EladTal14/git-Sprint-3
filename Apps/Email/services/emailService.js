import { utilService } from '../../../services/utilService.js'
import { storageService } from '../../../services/storage-service.js'

export const emailService = {
  query,
  addEmailToInbox
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
  }
}

function query() {
  return Promise.resolve(emails)
}

function addEmailToInbox(email) {
  const emailToadd = { id: utilService.makeId(), ...email }
  emails = [emailToadd, ...emails]
  _saveEmailsToStorage()
  return Promise.resolve(emailToadd)
}

function _demoEmails() {
  const emails = [
    { id: utilService.makeId(), subject: 'Wassap?', body: 'Pick up!', isRead: false, sentAt: 1551133930594 },
    { id: utilService.makeId(), subject: 'hello dear alan', body: 'have you being eating well ', isRead: true, sentAt: 1551133930594 },
    { id: utilService.makeId(), subject: '1 new job for full stack developer', body: 'come work for us at wix', isRead: false, sentAt: 1563133930594 },
    { id: utilService.makeId(), subject: 'Come Back to Instagram', body: 'we miss you at insta come look at new pics of your friends', isRead: false, sentAt: 1561133930594 },
    { id: utilService.makeId(), subject: '1 new job for full stack developer', body: 'come work for us at wix', isRead: false, sentAt: 1581133930594 },
  ];
  return emails;
}

function _saveEmailsToStorage() {
  storageService.saveToStorage(KEY, emails)
}
