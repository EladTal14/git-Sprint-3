import { utilService } from '../../../services/utilService.js'
import { storageService } from '../../../services/storage-service.js'

export const emailService = {
  query,
  addEmailToInbox,
  getById,
  removeEmail,
  changeReadUnread,
  sortBy,
  addReply
}
var emails;
const KEY = 'emailsDB'

_createEmails()

function _createEmails() {
  emails = storageService.loadFromStorage(KEY);
  if (!emails || !emails.length) {
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
function addReply(body, emailId) {
  let email = emails.find(email => email.id === emailId)
  const emailIdx = emails.findIndex(email => email.id === emailId)
  email.body = body
  emails[emailIdx] = email
  _saveEmailsToStorage();
  return Promise.resolve(email)
}

function _demoEmails() {
  const emails = [
    { sendTo: 'elad', id: utilService.makeId(), subject: 'Wassap?', body: 'Pick up!', isRead: false, sentAt: 1 },
    {
      sendTo: 'basya', id: utilService.makeId(), subject: 'hello dear alan ', body: `Are you coming to work to night?
    sdkjfs, seroint where we'd be stuck without them. soundly at night.`, isRead: false, sentAt: 2
    },
    {
      sendTo: 'avocado', id: utilService.makeId(), subject: 'Come Back to Instagram', body: `
    Avocode	Avocode Blog
    Dear elad,
    
    As 2020 is coming to its end, we what to thank you for being with this year and helping us improve Avocode. 🙏
    
    What a year! What a year indeed for all of us. We all had to make sacrifices in 2020. We all struggled in different ways dealing with the new reality, and the challenges 2020 threw at us. We can only hope that you, too, were able to cope, make sense of it, and come out stronger on the other side.
    
    We took some time to remind ourselves of what we managed to accomplish in 2020 and want to share the highlights with you.
    
    See Avocode’s 2020 Review.
    
    Happy holidays and all the best to you in 2021! 🥳
    
    
    Avocode Team
    
    P. S. Have you noticed something different about your profile picture in Avocode? We hope you enjoy this holiday gift update.`, isRead: false, sentAt: 4
    },
    {
      sendTo: 'Zeplin Crew', id: utilService.makeId(), subject: `Your avocado time is done`, body: `Hi there,
    
      Hope you're enjoying Zeplin so far, here are some resources to get the creative juices flowing:
      
      Watch a short demo video.
      Check out quick start articles.
      Search through frequently asked questions.
      Our whole crew is always eager to hear any feedback or questions you might have.
       Ping us anytime by replying or shooting an email to support@zeplin.io.
      
      Cheers,
      Zeplin Crew`, isRead: true, sentAt: 5
    },
    {
      sendTo: 'FaceBook', id: utilService.makeId(), subject: 'Linkedin job alerts', body: `Hi Elad,

    Black Frid‍ay will come and go. But the skills you’ll master will last. Enrolling in one of our Nanodegree programs means you’ll be investing in yourself. Our goal is to make advancing your career within reach, especially with this offer.
    
    Our tech courses take a learn by doing approach. Hands-on projects will provide you with the tools you need to get to the next level in your career. You’ll get real-world experience in less than 6‍ mon‍ths as a part-ti‍me student!
    
    Enroll n‍ow! Offer ends Dec‍ember 2‍, Wednes‍day at 11‍:59 p‍m!`, isRead: true, sentAt: 5
    },
    {
      sendTo: 'Zeplin Crew', id: utilService.makeId(), subject: `Your Zeplin time is done`, body: `Hi there,
    
      Hope you're enjoying Zeplin so far, here are some resources to get the creative juices flowing:
      
      Watch a short demo video.
      Check out quick start articles.
      Search through frequently asked questions.
      Our whole crew is always eager to hear any feedback or questions you might have.
       Ping us anytime by replying or shooting an email to support@zeplin.io.
      
      Cheers,
      Zeplin Crew`, isRead: true, sentAt: 5
    },
    { sendTo: 'Aviv', id: utilService.makeId(), subject: 'Linkedin job alerts', body: 'come work for us at wix', isRead: false, sentAt: 5 },
    { sendTo: 'FaceBook', id: utilService.makeId(), subject: 'Linkedin job alerts', body: 'come work for us at wix', isRead: true, sentAt: 5 },
    { sendTo: 'rami', id: utilService.makeId(), subject: 'Linkedin job alerts', body: 'come work for us at wix', isRead: false, sentAt: 5 },
    { sendTo: 'Aviv', id: utilService.makeId(), subject: 'Linkedin job alerts', body: 'come work for us at wix', isRead: false, sentAt: 5 },
    { sendTo: 'rami', id: utilService.makeId(), subject: 'Linkedin job alerts', body: 'come work for us at wix', isRead: true, sentAt: 5 },
    { sendTo: 'Moran', id: utilService.makeId(), subject: 'Linkedin job alerts', body: 'come work for us at wix', isRead: false, sentAt: 5 },
    { sendTo: 'Hilel', id: utilService.makeId(), subject: 'Linkedin job alerts', body: 'come work for us at wix', isRead: true, sentAt: 5 },
    { sendTo: 'rami', id: utilService.makeId(), subject: 'Linkedin job alerts', body: 'come work for us at wix', isRead: true, sentAt: 5 },
    { sendTo: 'FaceBook', id: utilService.makeId(), subject: 'Linkedin job alerts', body: 'come work for us at wix', isRead: true, sentAt: 5 },
    { sendTo: 'rami', id: utilService.makeId(), subject: 'Linkedin job alerts', body: 'come work for us at wix', isRead: true, sentAt: 5 },
    { sendTo: 'Moran', id: utilService.makeId(), subject: 'Linkedin job alerts', body: 'come work for us at wix', isRead: true, sentAt: 5 },
    { sendTo: 'rami', id: utilService.makeId(), subject: 'Linkedin job alerts', body: 'come work for us at wix', isRead: true, sentAt: 5 },
    {
      sendTo: 'easy.co.il', id: utilService.makeId(), subject: 'הכירו את המומחים של איזי!', body: `ומחי איזי ממליצים
    חוות דעת מצפון ועד דרום
    נבחרת המומחים של איזי מסתובבת ברחבי הארץ וכותבת ביקורות עומק על עסקים בישראל, עם ציונים ותמונות מהמקום. קבלו טעימה קטנה ממה שיש למומחים שלנו לומר והחליטו - לבקר או לוותר?
    
    
    אמנות ואימהות
    
    מומחית איזי לפעילויות ופנאי
    
    אם יוצאים מגלים - גן בוטני ותערוכת פסלים
    להורים תמיד יש התלבטות מה מתאים לילדים, מה לא יתאים להם, מה ישעמם אותם, מה יעניין אותם, ולא תמיד אפשר לדעת מראש. לפעמים אנחנו חושבים שהילדים שלנו יעופו על משהו ואז מגלים שזה ממש לא מעניין אותם. אני חושבת שהפעילויות הכי מוצלחות הן אלה שלא חושבים עליהן יותר מדי אלא פשוט עושים, לוקחים את הסיכון וקופצים…`, isRead: false, sentAt: 3
    },
    { sendTo: 'rami', id: utilService.makeId(), subject: 'Linkedin job alerts', body: 'come work for us at wix', isRead: true, sentAt: 5 },
    { sendTo: 'FaceBook', id: utilService.makeId(), subject: 'Linkedin job alerts', body: 'come work for us at wix', isRead: true, sentAt: 5 },
  ];
  return emails;
}

function _saveEmailsToStorage() {
  storageService.saveToStorage(KEY, emails)
}
