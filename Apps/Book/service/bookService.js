import { storageService } from "../../../services/storage-service.js";

export const bookService = {
  query,
  getById,
  saveReview,
  getCurrency,
  newQuery,
  addBook,
  getPrevBook,
  getNextBook,
}

const KEY = 'booksDB';

var gBooks = _createBooks()
var newBooks = [{
  kind: "books#volume",
  id: "hu9uinhsI2QC",
  etag: "llXMW5kCHDw",
  selfLink: "https://www.googleapis.com/books/v1/volumes/hu9uinhsI2QC",
  volumeInfo: {
    title: "The Baltic Sea",
    authors: [
      "A. Voipio"
    ],
    publisher: "Elsevier",
    publishedDate: "1981-01-01",
    description: "The Baltic Sea",
    industryIdentifiers: [
      {
        type: "ISBN_10",
        identifier: "0080870686"
      },
      {
        type: "ISBN_13",
        identifier: "9780080870687"
      }
    ],
    readingModes: {
      text: true,
      image: true
    },
    pageCount: 417,
    printType: "BOOK",
    categories: [
      "Science"
    ],
    maturityRating: "NOT_MATURE",
    allowAnonLogging: false,
    contentVersion: "2.6.7.0.preview.3",
    panelizationSummary: {
      containsEpubBubbles: false,
      containsImageBubbles: false
    },
    imageLinks: {
      smallThumbnail: "http://books.google.com/books/content?id=hu9uinhsI2QC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      thumbnail: "http://books.google.com/books/content?id=hu9uinhsI2QC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
    },
    language: "en",
    previewLink: "http://books.google.com/books?id=hu9uinhsI2QC&pg=PA183&dq=sea&hl=&as_pt=BOOKS&cd=1&source=gbs_api",
    infoLink: "http://books.google.com/books?id=hu9uinhsI2QC&dq=sea&hl=&as_pt=BOOKS&source=gbs_api",
    canonicalVolumeLink: "https://books.google.com/books/about/The_Baltic_Sea.html?hl=&id=hu9uinhsI2QC"
  },
  saleInfo: {
    country: "IL",
    saleability: "NOT_FOR_SALE",
    isEbook: false
  },
  accessInfo: {
    country: "IL",
    viewability: "PARTIAL",
    embeddable: true,
    publicDomain: false,
    textToSpeechPermission: "ALLOWED",
    epub: {
      isAvailable: true,
      acsTokenLink: "http://books.google.com/books/download/The_Baltic_Sea-sample-epub.acsm?id=hu9uinhsI2QC&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
    },
    pdf: {
      isAvailable: true,
      acsTokenLink: "http://books.google.com/books/download/The_Baltic_Sea-sample-pdf.acsm?id=hu9uinhsI2QC&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
    },
    webReaderLink: "http://play.google.com/books/reader?id=hu9uinhsI2QC&hl=&as_pt=BOOKS&printsec=frontcover&source=gbs_api",
    accessViewStatus: "SAMPLE",
    quoteSharingAllowed: false
  },
  searchInfo: {
    textSnippet: "Chapter 4 CHEMICAL OCEANOGRAPHY KLAUS GRASSHOFF and AARNO <br> VOIPIO ANOMALIES IN THE COMPOSITION OF BALTIC <b>SEA</b> WATER The first <br> evidence of interest in the chemical oceanography of the Baltic <b>Sea</b> appears to <br> be&nbsp;..."
  }
},
{
  kind: "books#volume",
  id: "oohairZYezMC",
  etag: "j8xO6Nxt0e0",
  selfLink: "https://www.googleapis.com/books/v1/volumes/oohairZYezMC",
  volumeInfo: {
    title: "Sea-Level Changes",
    authors: [
      "E. Lisitzin"
    ],
    publisher: "Elsevier",
    publishedDate: "1974-01-01",
    description: "Sea-Level Changes",
    industryIdentifiers: [
      {
        type: "ISBN_10",
        identifier: "0080870449"
      },
      {
        type: "ISBN_13",
        identifier: "9780080870441"
      }
    ],
    readingModes: {
      text: true,
      image: true
    },
    pageCount: 285,
    printType: "BOOK",
    categories: [
      "Science"
    ],
    maturityRating: "NOT_MATURE",
    allowAnonLogging: false,
    contentVersion: "2.6.5.0.preview.3",
    panelizationSummary: {
      containsEpubBubbles: false,
      containsImageBubbles: false
    },
    imageLinks: {
      smallThumbnail: "http://books.google.com/books/content?id=oohairZYezMC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      thumbnail: "http://books.google.com/books/content?id=oohairZYezMC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
    },
    language: "en",
    previewLink: "http://books.google.com/books?id=oohairZYezMC&pg=PA59&dq=sea&hl=&as_pt=BOOKS&cd=2&source=gbs_api",
    infoLink: "http://books.google.com/books?id=oohairZYezMC&dq=sea&hl=&as_pt=BOOKS&source=gbs_api",
    canonicalVolumeLink: "https://books.google.com/books/about/Sea_Level_Changes.html?hl=&id=oohairZYezMC"
  },
  saleInfo: {
    country: "IL",
    saleability: "NOT_FOR_SALE",
    isEbook: false
  },
  accessInfo: {
    country: "IL",
    viewability: "PARTIAL",
    embeddable: true,
    publicDomain: false,
    textToSpeechPermission: "ALLOWED",
    epub: {
      isAvailable: true,
      acsTokenLink: "http://books.google.com/books/download/Sea_Level_Changes-sample-epub.acsm?id=oohairZYezMC&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
    },
    pdf: {
      isAvailable: true,
      acsTokenLink: "http://books.google.com/books/download/Sea_Level_Changes-sample-pdf.acsm?id=oohairZYezMC&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
    },
    webReaderLink: "http://play.google.com/books/reader?id=oohairZYezMC&hl=&as_pt=BOOKS&printsec=frontcover&source=gbs_api",
    accessViewStatus: "SAMPLE",
    quoteSharingAllowed: false
  },
  searchInfo: {
    textSnippet: "CHAPTER 3 THE METEOROLOGICAL AND OCEANOGRAPHIC <br> CONTRIBUTION TO <b>SEA</b> LEVELS ATMOSPHERIC PRESSURE AND <b>SEA</b> <br> LEVEL Changes in atmospheric pressure influence the <b>sea</b> level which, at least <br> theoretically, reacts&nbsp;..."
  }
},
{
  kind: "books#volume",
  id: "l12vBEIYUegC",
  etag: "vGGE7TTUSrM",
  selfLink: "https://www.googleapis.com/books/v1/volumes/l12vBEIYUegC",
  volumeInfo: {
    title: "Diving and Snorkeling the Sea of Cortez",
    authors: [
      "Susan Speck",
      "Bruce Williams"
    ],
    publisher: "AuthorHouse",
    publishedDate: "2006-11",
    description: "I have written this book for everyone who used drugs or is using drugs, and is in prison or treatment. I have written this book for your kids and family who had to go through pain and trials and were strong enough to make it through. I want to say to all the parents out there who are using, please read my book, see and feel my pain, my hurt, my loss, and understand that your children are hurting. Every time you want to get high think about what I went through; think about how you don't want your children hurt. Never say never you never know what's happening to your kids when you are leading a life in drugs and crime. Let my book awake you out of your coma and break those generational curses that have been passed down to you, and save your kids from heartache and pain. Let life come back into your mind, body, and soul because you can't stay lost forever. Let this book rock the very foundation you stand on because it's all true. You have to love yourself so you can love your kids. Trust in God no matter what your beliefs are; trust in God, he will carry you, he will be your first husband, your father, and your mother, even your best friend. If you're using, please wake up; even if you don't have any kids you are worth it, you are loved, you are human. Learn to forgive, and forgive yourself. Speak life into yourself, not death; no matter how hard life is get up and keep on keeping on. And for all the kids who are going through this, stay strong and faithful in God the man above, and never, never do drugs no matter how sad or depressed you get. Remember if you never take your first hit you will never have to quit! Stay clean and drug-free for all your days on earth. Look at me, I am drug-free despite what I've been through, so have faith and stay strong. Lots of love, Marlisha",
    industryIdentifiers: [
      {
        type: "ISBN_13",
        identifier: "9781425932022"
      },
      {
        type: "ISBN_10",
        identifier: "1425932029"
      }
    ],
    readingModes: {
      text: true,
      image: true
    },
    pageCount: 92,
    printType: "BOOK",
    categories: [
      "Health & Fitness"
    ],
    averageRating: 5,
    ratingsCount: 2,
    maturityRating: "NOT_MATURE",
    allowAnonLogging: false,
    contentVersion: "0.2.2.0.preview.3",
    panelizationSummary: {
      containsEpubBubbles: false,
      containsImageBubbles: false
    },
    imageLinks: {
      smallThumbnail: "http://books.google.com/books/content?id=l12vBEIYUegC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      thumbnail: "http://books.google.com/books/content?id=l12vBEIYUegC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
    },
    language: "en",
    previewLink: "http://books.google.com/books?id=l12vBEIYUegC&pg=PA6&dq=sea&hl=&as_pt=BOOKS&cd=3&source=gbs_api",
    infoLink: "http://books.google.com/books?id=l12vBEIYUegC&dq=sea&hl=&as_pt=BOOKS&source=gbs_api",
    canonicalVolumeLink: "https://books.google.com/books/about/Diving_and_Snorkeling_the_Sea_of_Cortez.html?hl=&id=l12vBEIYUegC"
  },
  saleInfo: {
    country: "IL",
    saleability: "NOT_FOR_SALE",
    isEbook: false
  },
  accessInfo: {
    country: "IL",
    viewability: "PARTIAL",
    embeddable: true,
    publicDomain: false,
    textToSpeechPermission: "ALLOWED",
    epub: {
      isAvailable: true,
      acsTokenLink: "http://books.google.com/books/download/Diving_and_Snorkeling_the_Sea_of_Cortez-sample-epub.acsm?id=l12vBEIYUegC&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
    },
    pdf: {
      isAvailable: false
    },
    webReaderLink: "http://play.google.com/books/reader?id=l12vBEIYUegC&hl=&as_pt=BOOKS&printsec=frontcover&source=gbs_api",
    accessViewStatus: "SAMPLE",
    quoteSharingAllowed: false
  },
  searchInfo: {
    textSnippet: "Chapter II THE <b>SEA</b> OF CORTEZ A Baja reality reminder... &#39;The best things in life <br> aren&#39;t things&#39; (Art Buchwald) If you ever wondered where the spectacular <br> Colorado River in the U.S. finally meets the <b>Sea</b> of Cortez, the highway heading <br> south&nbsp;..."
  }
},
{
  kind: "books#volume",
  id: "VZBMJcU5YWIC",
  etag: "Z0aPJMxzDBg",
  selfLink: "https://www.googleapis.com/books/v1/volumes/VZBMJcU5YWIC",
  volumeInfo: {
    title: "The Law of International Sea Piracy",
    authors: [
      "Barry Hart Dubner"
    ],
    publisher: "BRILL",
    publishedDate: "1980-02-14",
    description: "This volume presents an analysis of the maritime boundary delimitations of the Russian Federation. The focus of this analysis is the relationship between state practice & the rules of public international law applicable to the delimitation of maritime zones between neighboring states. A first part establishes the contents of the law in this field. The main part of the work concerns an analysis of the position of the Russian Federation on the rules of maritime delimitation law & the practice of this state in relation to the delimitation of specific maritime boundaries with neighboring states. The case study of the Russian Federation illustrates the significance of international law for the delimitation of maritime boundaries, while at the same time indicating the limits of the influence of the law on state behavior.",
    industryIdentifiers: [
      {
        type: "ISBN_10",
        identifier: "9024721911"
      },
      {
        type: "ISBN_13",
        identifier: "9789024721917"
      }
    ],
    readingModes: {
      text: false,
      image: true
    },
    pageCount: 176,
    printType: "BOOK",
    categories: [
      "Law"
    ],
    maturityRating: "NOT_MATURE",
    allowAnonLogging: false,
    contentVersion: "0.1.2.0.preview.1",
    panelizationSummary: {
      containsEpubBubbles: false,
      containsImageBubbles: false
    },
    imageLinks: {
      smallThumbnail: "http://books.google.com/books/content?id=VZBMJcU5YWIC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      thumbnail: "http://books.google.com/books/content?id=VZBMJcU5YWIC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
    },
    language: "en",
    previewLink: "http://books.google.com/books?id=VZBMJcU5YWIC&pg=PA15&dq=sea&hl=&as_pt=BOOKS&cd=4&source=gbs_api",
    infoLink: "http://books.google.com/books?id=VZBMJcU5YWIC&dq=sea&hl=&as_pt=BOOKS&source=gbs_api",
    canonicalVolumeLink: "https://books.google.com/books/about/The_Law_of_International_Sea_Piracy.html?hl=&id=VZBMJcU5YWIC"
  },
  saleInfo: {
    country: "IL",
    saleability: "NOT_FOR_SALE",
    isEbook: false
  },
  accessInfo: {
    country: "IL",
    viewability: "PARTIAL",
    embeddable: true,
    publicDomain: false,
    textToSpeechPermission: "ALLOWED",
    epub: {
      isAvailable: false
    },
    pdf: {
      isAvailable: false
    },
    webReaderLink: "http://play.google.com/books/reader?id=VZBMJcU5YWIC&hl=&as_pt=BOOKS&printsec=frontcover&source=gbs_api",
    accessViewStatus: "SAMPLE",
    quoteSharingAllowed: false
  },
  searchInfo: {
    textSnippet: "CHAPTER II A REVIEW AND UPDATE OF THE APPLICABLE TRADITIONAL <br> LAW OF THE <b>SEA</b> AND OTHER TERMINOLOGY RELATED TO THIS STUDY To <br> understand the international law of <b>sea</b> piracy, a general knowledge of the law of<br> &nbsp;..."
  }
},
{
  kind: "books#volume",
  id: "4QQCfJnu_6oC",
  etag: "eL4iiNF1gIs",
  selfLink: "https://www.googleapis.com/books/v1/volumes/4QQCfJnu_6oC",
  volumeInfo: {
    title: "International Wildlife Encyclopedia: Rifleman - sea slug",
    authors: [
      "Maurice Burton",
      "Robert Burton"
    ],
    publisher: "Marshall Cavendish",
    publishedDate: "2002",
    description: "This twenty-two volume set presents the appearance and behavior of thousands of species of animals along with species population and prospects for survival in a arranged alphabetically and easy-to-read format.",
    industryIdentifiers: [
      {
        type: "ISBN_10",
        identifier: "0761472827"
      },
      {
        type: "ISBN_13",
        identifier: "9780761472827"
      }
    ],
    readingModes: {
      text: false,
      image: true
    },
    pageCount: 3168,
    printType: "BOOK",
    categories: [
      "Animals"
    ],
    maturityRating: "NOT_MATURE",
    allowAnonLogging: false,
    contentVersion: "0.0.2.0.preview.1",
    panelizationSummary: {
      containsEpubBubbles: false,
      containsImageBubbles: false
    },
    imageLinks: {
      smallThumbnail: "http://books.google.com/books/content?id=4QQCfJnu_6oC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      thumbnail: "http://books.google.com/books/content?id=4QQCfJnu_6oC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
    },
    language: "en",
    previewLink: "http://books.google.com/books?id=4QQCfJnu_6oC&pg=PA2269&dq=sea&hl=&as_pt=BOOKS&cd=5&source=gbs_api",
    infoLink: "http://books.google.com/books?id=4QQCfJnu_6oC&dq=sea&hl=&as_pt=BOOKS&source=gbs_api",
    canonicalVolumeLink: "https://books.google.com/books/about/International_Wildlife_Encyclopedia_Rifl.html?hl=&id=4QQCfJnu_6oC"
  },
  saleInfo: {
    country: "IL",
    saleability: "NOT_FOR_SALE",
    isEbook: false
  },
  accessInfo: {
    country: "IL",
    viewability: "PARTIAL",
    embeddable: true,
    publicDomain: false,
    textToSpeechPermission: "ALLOWED",
    epub: {
      isAvailable: false
    },
    pdf: {
      isAvailable: false
    },
    webReaderLink: "http://play.google.com/books/reader?id=4QQCfJnu_6oC&hl=&as_pt=BOOKS&printsec=frontcover&source=gbs_api",
    accessViewStatus: "SAMPLE",
    quoteSharingAllowed: false
  },
  searchInfo: {
    textSnippet: "<b>SEA</b> BUTTERFLY EA BUTTERFLIES ARE transparent <b>sea</b> snails kinds of <br> tentacles , as well as the winglike structhat are sometimes found swimming in <br> tures and a reduced foot . A plump , elongated U large numbers near the surface <br> of the&nbsp;..."
  }
},
{
  kind: "books#volume",
  id: "FH8OIvT3O0wC",
  etag: "FJCBAbfcboc",
  selfLink: "https://www.googleapis.com/books/v1/volumes/FH8OIvT3O0wC",
  volumeInfo: {
    title: "Graphic concordance to the Dead Sea scrolls",
    authors: [
      "James H. Charlesworth"
    ],
    publisher: "Westminster John Knox Press",
    publishedDate: "1991-01-01",
    description: "Offered for the first time, here is a complete concordance that cites most of the documents and fragments of the Dead Sea Scrolls. Based on the best editions of previously published sectarian Dead Sea Scrolls, theGraphic Concordanceis a Hebrew and Aramaic concordance of 223 texts and approximately 3,500 fragments, containing more than 59,000 individual entries. No single concordance cites all of the documents and fragments now included in this concordance. The Princeton Dead Sea Scrolls Project provides a major landmark in general access to these documents. It is the first serious attempt to provide accurate transcriptions and translations with critical commentary to all the nonbiblical scrolls found at Qumran. These are important reference books for specialized studies in biblical fields.",
    industryIdentifiers: [
      {
        type: "ISBN_10",
        identifier: "0664219691"
      },
      {
        type: "ISBN_13",
        identifier: "9780664219697"
      }
    ],
    readingModes: {
      text: false,
      image: true
    },
    pageCount: 529,
    printType: "BOOK",
    categories: [
      "Religion"
    ],
    maturityRating: "NOT_MATURE",
    allowAnonLogging: false,
    contentVersion: "0.0.3.0.preview.1",
    panelizationSummary: {
      containsEpubBubbles: false,
      containsImageBubbles: false
    },
    imageLinks: {
      smallThumbnail: "http://books.google.com/books/content?id=FH8OIvT3O0wC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      thumbnail: "http://books.google.com/books/content?id=FH8OIvT3O0wC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
    },
    language: "iw",
    previewLink: "http://books.google.com/books?id=FH8OIvT3O0wC&pg=PA15&dq=sea&hl=&as_pt=BOOKS&cd=6&source=gbs_api",
    infoLink: "http://books.google.com/books?id=FH8OIvT3O0wC&dq=sea&hl=&as_pt=BOOKS&source=gbs_api",
    canonicalVolumeLink: "https://books.google.com/books/about/Graphic_concordance_to_the_Dead_Sea_scro.html?hl=&id=FH8OIvT3O0wC"
  },
  saleInfo: {
    country: "IL",
    saleability: "NOT_FOR_SALE",
    isEbook: false
  },
  accessInfo: {
    country: "IL",
    viewability: "PARTIAL",
    embeddable: true,
    publicDomain: false,
    textToSpeechPermission: "ALLOWED",
    epub: {
      isAvailable: false
    },
    pdf: {
      isAvailable: false
    },
    webReaderLink: "http://play.google.com/books/reader?id=FH8OIvT3O0wC&hl=&as_pt=BOOKS&printsec=frontcover&source=gbs_api",
    accessViewStatus: "SAMPLE",
    quoteSharingAllowed: false
  }
},
{
  kind: "books#volume",
  id: "SBMXnB4CRpUC",
  etag: "QUC4LnjvdpA",
  selfLink: "https://www.googleapis.com/books/v1/volumes/SBMXnB4CRpUC",
  volumeInfo: {
    title: "The Meaning of the Dead Sea Scrolls",
    subtitle: "Their Significance For Understanding the Bible, Judaism, Jesus, and Christianity",
    authors: [
      "James VanderKam",
      "Peter Flint"
    ],
    publisher: "A&C Black",
    publishedDate: "2005-07-10",
    description: "In this book, two of the world's leading experts on the scrolls reveal the complete and fascinating story in all its detail: the amazing discovery, the intense controversies, and the significant revelations. This comprehensive, up-to-date guide is the def",
    industryIdentifiers: [
      {
        type: "ISBN_10",
        identifier: "056708468X"
      },
      {
        type: "ISBN_13",
        identifier: "9780567084682"
      }
    ],
    readingModes: {
      text: false,
      image: true
    },
    pageCount: 480,
    printType: "BOOK",
    categories: [
      "Religion"
    ],
    averageRating: 4.5,
    ratingsCount: 2,
    maturityRating: "NOT_MATURE",
    allowAnonLogging: false,
    contentVersion: "0.1.2.0.preview.1",
    panelizationSummary: {
      containsEpubBubbles: false,
      containsImageBubbles: false
    },
    imageLinks: {
      smallThumbnail: "http://books.google.com/books/content?id=SBMXnB4CRpUC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      thumbnail: "http://books.google.com/books/content?id=SBMXnB4CRpUC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
    },
    language: "en",
    previewLink: "http://books.google.com/books?id=SBMXnB4CRpUC&pg=PA154&dq=sea&hl=&as_pt=BOOKS&cd=7&source=gbs_api",
    infoLink: "http://books.google.com/books?id=SBMXnB4CRpUC&dq=sea&hl=&as_pt=BOOKS&source=gbs_api",
    canonicalVolumeLink: "https://books.google.com/books/about/The_Meaning_of_the_Dead_Sea_Scrolls.html?hl=&id=SBMXnB4CRpUC"
  },
  saleInfo: {
    country: "IL",
    saleability: "NOT_FOR_SALE",
    isEbook: false
  },
  accessInfo: {
    country: "IL",
    viewability: "PARTIAL",
    embeddable: true,
    publicDomain: false,
    textToSpeechPermission: "ALLOWED",
    epub: {
      isAvailable: false
    },
    pdf: {
      isAvailable: false
    },
    webReaderLink: "http://play.google.com/books/reader?id=SBMXnB4CRpUC&hl=&as_pt=BOOKS&printsec=frontcover&source=gbs_api",
    accessViewStatus: "SAMPLE",
    quoteSharingAllowed: false
  },
  searchInfo: {
    textSnippet: "<b>Sea</b>. Scrolls. and. the. Canon. of. the. Hebrew. Bible/. Old. Testament. THE TERM <br> CANON is NOT EASILY UNDERSTOOD with respect to Scripture for at least <br> three reasons. First, this is a technical word with more than one meaning, so any<br> &nbsp;..."
  }
},
{
  kind: "books#volume",
  id: "ntdrQwbNQrcC",
  etag: "qCnbqzrq8hI",
  selfLink: "https://www.googleapis.com/books/v1/volumes/ntdrQwbNQrcC",
  volumeInfo: {
    title: "United Nations Convention on the Law of the Sea 1982",
    subtitle: "A Commentary. volume I",
    authors: [
      "Myron H. Nordquist"
    ],
    publisher: "Martinus Nijhoff Publishers",
    publishedDate: "1985-12-13",
    description: "These commentaries are based almost entirely on the formal and informal documentation of the Third United Nations Conference on the Law of the Sea (UNCLOS III, 1973-1982), coupled, where necessary, with the personal knowledge of editors, contributors, or reviewers, many of whom were principal negotiators or UN personnel who participated in the Conference.",
    industryIdentifiers: [
      {
        type: "ISBN_10",
        identifier: "9024731453"
      },
      {
        type: "ISBN_13",
        identifier: "9789024731459"
      }
    ],
    readingModes: {
      text: false,
      image: true
    },
    pageCount: 467,
    printType: "BOOK",
    categories: [
      "Law"
    ],
    maturityRating: "NOT_MATURE",
    allowAnonLogging: false,
    contentVersion: "0.3.2.0.preview.1",
    panelizationSummary: {
      containsEpubBubbles: false,
      containsImageBubbles: false
    },
    imageLinks: {
      smallThumbnail: "http://books.google.com/books/content?id=ntdrQwbNQrcC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      thumbnail: "http://books.google.com/books/content?id=ntdrQwbNQrcC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
    },
    language: "en",
    previewLink: "http://books.google.com/books?id=ntdrQwbNQrcC&pg=PA17&dq=sea&hl=&as_pt=BOOKS&cd=8&source=gbs_api",
    infoLink: "http://books.google.com/books?id=ntdrQwbNQrcC&dq=sea&hl=&as_pt=BOOKS&source=gbs_api",
    canonicalVolumeLink: "https://books.google.com/books/about/United_Nations_Convention_on_the_Law_of.html?hl=&id=ntdrQwbNQrcC"
  },
  saleInfo: {
    country: "IL",
    saleability: "NOT_FOR_SALE",
    isEbook: false
  },
  accessInfo: {
    country: "IL",
    viewability: "PARTIAL",
    embeddable: true,
    publicDomain: false,
    textToSpeechPermission: "ALLOWED",
    epub: {
      isAvailable: false
    },
    pdf: {
      isAvailable: false
    },
    webReaderLink: "http://play.google.com/books/reader?id=ntdrQwbNQrcC&hl=&as_pt=BOOKS&printsec=frontcover&source=gbs_api",
    accessViewStatus: "SAMPLE",
    quoteSharingAllowed: false
  },
  searchInfo: {
    textSnippet: "INTRODUCTION TO THE UNITED NATIONS CONVENTION ON THE LAW OF <br> THE <b>SEA</b> STATEMENT BY BERNARDO ZULETA* On 10 December 1982 the <br> United Nations Convention on the Law of the <b>Sea</b> was opened for signature in&nbsp;..."
  }
},
{
  kind: "books#volume",
  id: "Rgi8AAAAIAAJ",
  etag: "osxV1lpdpQ4",
  selfLink: "https://www.googleapis.com/books/v1/volumes/Rgi8AAAAIAAJ",
  volumeInfo: {
    title: "The Law of the Sea",
    authors: [
      "Robin Rolf Churchill",
      "Alan Vaughan Lowe"
    ],
    publisher: "Manchester University Press",
    publishedDate: "1988",
    industryIdentifiers: [
      {
        type: "ISBN_10",
        identifier: "0719029228"
      },
      {
        type: "ISBN_13",
        identifier: "9780719029226"
      }
    ],
    readingModes: {
      text: false,
      image: true
    },
    pageCount: 370,
    printType: "BOOK",
    categories: [
      "Law"
    ],
    maturityRating: "NOT_MATURE",
    allowAnonLogging: false,
    contentVersion: "3.1.2.0.preview.1",
    panelizationSummary: {
      containsEpubBubbles: false,
      containsImageBubbles: false
    },
    imageLinks: {
      smallThumbnail: "http://books.google.com/books/content?id=Rgi8AAAAIAAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      thumbnail: "http://books.google.com/books/content?id=Rgi8AAAAIAAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
    },
    language: "en",
    previewLink: "http://books.google.com/books?id=Rgi8AAAAIAAJ&pg=PA1&dq=sea&hl=&as_pt=BOOKS&cd=9&source=gbs_api",
    infoLink: "http://books.google.com/books?id=Rgi8AAAAIAAJ&dq=sea&hl=&as_pt=BOOKS&source=gbs_api",
    canonicalVolumeLink: "https://books.google.com/books/about/The_Law_of_the_Sea.html?hl=&id=Rgi8AAAAIAAJ"
  },
  saleInfo: {
    country: "IL",
    saleability: "NOT_FOR_SALE",
    isEbook: false
  },
  accessInfo: {
    country: "IL",
    viewability: "PARTIAL",
    embeddable: true,
    publicDomain: false,
    textToSpeechPermission: "ALLOWED",
    epub: {
      isAvailable: false
    },
    pdf: {
      isAvailable: false
    },
    webReaderLink: "http://play.google.com/books/reader?id=Rgi8AAAAIAAJ&hl=&as_pt=BOOKS&printsec=frontcover&source=gbs_api",
    accessViewStatus: "SAMPLE",
    quoteSharingAllowed: false
  },
  searchInfo: {
    textSnippet: "CHAPTER ONE Introduction Scope of the book This book is concerned with the <br> public international law of the <b>sea</b> - that is to say , with the rules which bind States <br> in their international relations concerning maritime matters . Accordingly , it does<br> &nbsp;..."
  }
},
{
  kind: "books#volume",
  id: "DIcJI3CweaUC",
  etag: "RRa2NY+7NEY",
  selfLink: "https://www.googleapis.com/books/v1/volumes/DIcJI3CweaUC",
  volumeInfo: {
    title: "The International Tribunal for the Law of the Sea",
    subtitle: "Law and Practice",
    authors: [
      "P. Chandrasekhara Rao",
      "Rahmatullah Khan"
    ],
    publisher: "Martinus Nijhoff Publishers",
    publishedDate: "2001-07-06",
    description: '"This work examines the constitution, jurisdiction and procedure of the International Tribunal for the Law of the Sea on the basis of its Statute and Rules, as well as the Resolution on the Internal Judicial Practice and the Guidelines concerning the Preparation and Presentation of Cases. It gives a critical analysis of the role of the Tribunal in the settlement of law of the sea disputes. The articles were previously published in the "Indian Journal of" "International Law" and are revised, edited and updated for this edition. The contributors are sitting judges of the Tribunal and the book thus gives a perfect insider\'s view of the law and practice of the Tribunal."',
    industryIdentifiers: [
      {
        type: "ISBN_10",
        identifier: "904111601X"
      },
      {
        type: "ISBN_13",
        identifier: "9789041116017"
      }
    ],
    readingModes: {
      text: false,
      image: true
    },
    pageCount: 238,
    printType: "BOOK",
    categories: [
      "Law"
    ],
    maturityRating: "NOT_MATURE",
    allowAnonLogging: false,
    contentVersion: "0.1.2.0.preview.1",
    panelizationSummary: {
      containsEpubBubbles: false,
      containsImageBubbles: false
    },
    imageLinks: {
      smallThumbnail: "http://books.google.com/books/content?id=DIcJI3CweaUC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      thumbnail: "http://books.google.com/books/content?id=DIcJI3CweaUC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
    },
    language: "en",
    previewLink: "http://books.google.com/books?id=DIcJI3CweaUC&pg=PA111&dq=sea&hl=&as_pt=BOOKS&cd=10&source=gbs_api",
    infoLink: "http://books.google.com/books?id=DIcJI3CweaUC&dq=sea&hl=&as_pt=BOOKS&source=gbs_api",
    canonicalVolumeLink: "https://books.google.com/books/about/The_International_Tribunal_for_the_Law_o.html?hl=&id=DIcJI3CweaUC"
  },
  saleInfo: {
    country: "IL",
    saleability: "NOT_FOR_SALE",
    isEbook: false
  },
  accessInfo: {
    country: "IL",
    viewability: "PARTIAL",
    embeddable: true,
    publicDomain: false,
    textToSpeechPermission: "ALLOWED",
    epub: {
      isAvailable: false
    },
    pdf: {
      isAvailable: false
    },
    webReaderLink: "http://play.google.com/books/reader?id=DIcJI3CweaUC&hl=&as_pt=BOOKS&printsec=frontcover&source=gbs_api",
    accessViewStatus: "SAMPLE",
    quoteSharingAllowed: false
  },
  searchInfo: {
    textSnippet: "Tullio Treves * THE JURISDICTION OF THE INTERNATIONAL TRIBUNAL FOR <br> THE LAW OF THE <b>SEA</b> I . GENERAL ASPECTS ! The term “ jurisdiction ” refers to <br> the power of an international court or tribunal to decide ( potestas decidendi ) ."
  }
}]


function saveReview(book, review) {
  if (!book.reviews) book.reviews = [];
  book.reviews.push(review)
  _saveBooksToStorage();
  return Promise.resolve(book)
}

function getById(bookId) {
  const book = gBooks.find(book => book.id === bookId)
  return Promise.resolve(book);
}

function getPrevBook(bookId) {
  let idx = gBooks.findIndex(book => book.id === bookId)
  if (idx === 0) idx = gBooks.length - 1
  return gBooks[idx - 1].id
}

function getNextBook(bookId) {
  let idx = gBooks.findIndex(book => book.id === bookId)
  if (idx === gBooks.length - 1) idx = 0
  return gBooks[idx + 1].id
}

function addBook(book) {
  const bookToAdd = {
    id: book.id,
    title: book.volumeInfo.title,
    publishedDate: +book.volumeInfo.publishedDate.slice(0, 4),
    pageCount: book.volumeInfo.pageCount,
    thumbnail: book.volumeInfo.imageLinks.thumbnail,
    listPrice: { amount: 109, currencyCode: "EUR", isOnSale: false },
    description: book.volumeInfo.description,
  }

  gBooks = [bookToAdd, ...gBooks]
  _saveBooksToStorage()
  return Promise.resolve(gBooks)
}


function query() {
  return Promise.resolve(gBooks)
}

function newQuery() {
  return Promise.resolve(newBooks)
}

function _createBooks() {
  var booksFromStorage = storageService.loadFromStorage(KEY)
  if (!booksFromStorage || !booksFromStorage.length) {
    booksFromStorage = [
      {
        "id": "OXeMG8wNskc",
        "title": "metus hendrerit",
        "subtitle": "mi est eros convallis auctor arcu dapibus himenaeos",
        "authors": [
          "Barbara Cartland"
        ],
        "publishedDate": 1999,
        "description": "placerat nisi sodales suscipit tellus tincidunt mauris elit sit luctus interdum ad dictum platea vehicula conubia fermentum habitasse congue suspendisse",
        "pageCount": 713,
        "categories": [
          "Computers",
          "Hack"
        ],
        "thumbnail": "http://coding-academy.org/books-photos/20.jpg",
        "language": "en",
        "listPrice": {
          "amount": 109,
          "currencyCode": "EUR",
          "isOnSale": false
        }
      },
      {
        "id": "JYOJa2NpSCq",
        "title": "morbi",
        "subtitle": "lorem euismod dictumst inceptos mi",
        "authors": [
          "Barbara Cartland"
        ],
        "publishedDate": 1978,
        "description": "aliquam pretium lorem laoreet etiam odio cubilia iaculis placerat aliquam tempor nisl auctor",
        "pageCount": 129,
        "categories": [
          "Computers",
          "Hack"
        ],
        "thumbnail": "http://coding-academy.org/books-photos/14.jpg",
        "language": "sp",
        "listPrice": {
          "amount": 44,
          "currencyCode": "EUR",
          "isOnSale": true
        }
      },
      {
        "id": "1y0Oqts35DQ",
        "title": "at viverra venenatis",
        "subtitle": "gravida libero facilisis rhoncus urna etiam",
        "authors": [
          "Dr. Seuss"
        ],
        "publishedDate": 1999,
        "description": "lorem molestie ut euismod ad quis mi ultricies nisl cursus suspendisse dui tempor sit suscipit metus etiam euismod tortor sagittis habitant",
        "pageCount": 972,
        "categories": [
          "Computers",
          "Hack"
        ],
        "thumbnail": "http://coding-academy.org/books-photos/2.jpg",
        "language": "he",
        "listPrice": {
          "amount": 108,
          "currencyCode": "ILS",
          "isOnSale": false
        }
      },
      {
        "id": "kSnfIJyikTP",
        "title": "dictum",
        "subtitle": "augue eu consectetur class curabitur conubia ligula in ullamcorper",
        "authors": [
          "Danielle Steel"
        ],
        "publishedDate": 1978,
        "description": "interdum inceptos mauris habitant primis neque tempus lacus morbi auctor cras consectetur euismod vehicula neque netus enim vivamus augue molestie imperdiet tincidunt aliquam",
        "pageCount": 303,
        "categories": [
          "Computers",
          "Hack"
        ],
        "thumbnail": "http://coding-academy.org/books-photos/16.jpg",
        "language": "en",
        "listPrice": {
          "amount": 30,
          "currencyCode": "EUR",
          "isOnSale": true
        }
      },
      {
        "id": "f4iuVmbuKCC",
        "title": "sem himenaeos aptent",
        "subtitle": "interdum per habitasse luctus purus est",
        "authors": [
          "Dr. Seuss"
        ],
        "publishedDate": 2011,
        "description": "et vehicula faucibus amet accumsan lectus cras nulla cubilia arcu neque litora mi habitasse quis amet augue facilisis sed",
        "pageCount": 337,
        "categories": [
          "Computers",
          "Hack"
        ],
        "thumbnail": "http://coding-academy.org/books-photos/12.jpg",
        "language": "sp",
        "listPrice": {
          "amount": 19,
          "currencyCode": "USD",
          "isOnSale": false
        }
      },
      {
        "id": "U2rfZO6oBZf",
        "title": "mi ante posuere",
        "subtitle": "sapien curae consectetur ultrices fringilla blandit ipsum curae faucibus",
        "authors": [
          "Leo Tolstoy"
        ],
        "publishedDate": 1978,
        "description": "senectus habitant nam imperdiet nostra elit dapibus nisl adipiscing in",
        "pageCount": 748,
        "categories": [
          "Computers",
          "Hack"
        ],
        "thumbnail": "http://coding-academy.org/books-photos/1.jpg",
        "language": "en",
        "listPrice": {
          "amount": 91,
          "currencyCode": "USD",
          "isOnSale": true
        }
      },
      {
        "id": "xI0wrXaaAcq",
        "title": "non",
        "subtitle": "leo tortor per dapibus mattis ut conubia porttitor ligula viverra",
        "authors": [
          "Leo Tolstoy"
        ],
        "publishedDate": 2011,
        "description": "nec scelerisque id cursus platea sit ullamcorper bibendum ultrices tempus ante mi aliquet cras tortor dapibus dictum scelerisque",
        "pageCount": 65,
        "categories": [
          "Computers",
          "Hack"
        ],
        "thumbnail": "http://coding-academy.org/books-photos/14.jpg",
        "language": "he",
        "listPrice": {
          "amount": 90,
          "currencyCode": "USD",
          "isOnSale": false
        }
      },
      {
        "id": "9laHCEdSpFy",
        "title": "tristique",
        "subtitle": "consectetur a eu tincidunt condimentum amet nisi",
        "authors": [
          "Dr. Seuss"
        ],
        "publishedDate": 1999,
        "description": "magna quisque venenatis laoreet purus in semper habitant proin pellentesque sed egestas cursus faucibus nam enim id sit mi ligula risus curabitur senectus curabitur sodales fames sem",
        "pageCount": 299,
        "categories": [
          "Computers",
          "Hack"
        ],
        "thumbnail": "http://coding-academy.org/books-photos/11.jpg",
        "language": "he",
        "listPrice": {
          "amount": 176,
          "currencyCode": "EUR",
          "isOnSale": false
        }
      },
      {
        "id": "nGhVwZvGCGp",
        "title": "urna ornare gravida",
        "subtitle": "sem vestibulum semper convallis pharetra tempor himenaeos ut",
        "authors": [
          "Jin Yong"
        ],
        "publishedDate": 2011,
        "description": "porttitor nisl sodales id eu tellus venenatis laoreet auctor dictumst nulla",
        "pageCount": 803,
        "categories": [
          "Computers",
          "Hack"
        ],
        "thumbnail": "http://coding-academy.org/books-photos/10.jpg",
        "language": "sp",
        "listPrice": {
          "amount": 116,
          "currencyCode": "USD",
          "isOnSale": true
        }
      },
      {
        "id": "Q8Q9Lsd03BD",
        "title": "consequat neque volutpat",
        "subtitle": "vel quis taciti fermentum feugiat ullamcorper curae praesent",
        "authors": [
          "Dr. Seuss"
        ],
        "publishedDate": 1978,
        "description": "curabitur bibendum in dolor neque magna phasellus arcu nulla cubilia senectus maecenas ullamcorper neque accumsan facilisis dictumst ornare",
        "pageCount": 891,
        "categories": [
          "Computers",
          "Hack"
        ],
        "thumbnail": "http://coding-academy.org/books-photos/5.jpg",
        "language": "en",
        "listPrice": {
          "amount": 145,
          "currencyCode": "EUR",
          "isOnSale": false
        }
      },
      {
        "id": "bd7a76kARao",
        "title": "risus",
        "subtitle": "pretium bibendum pharetra curabitur quisque dictumst",
        "authors": [
          "Danielle Steel"
        ],
        "publishedDate": 2018,
        "description": "auctor amet nostra luctus molestie proin platea cubilia netus sed purus egestas a primis eu tristique interdum litora lorem venenatis mattis senectus",
        "pageCount": 86,
        "categories": [
          "Computers",
          "Hack"
        ],
        "thumbnail": "http://coding-academy.org/books-photos/16.jpg",
        "language": "sp",
        "listPrice": {
          "amount": 157,
          "currencyCode": "ILS",
          "isOnSale": true
        }
      },
      {
        "id": "qKyG0vqeO3e",
        "title": "interdum etiam vulputate",
        "subtitle": "velit sapien eget tincidunt nunc tortor",
        "authors": [
          "Danielle Steel"
        ],
        "publishedDate": 2018,
        "description": "aenean mauris porta netus accumsan turpis etiam vestibulum vivamus sagittis nullam nec tellus quam mattis est pellentesque nisi litora sit ad",
        "pageCount": 882,
        "categories": [
          "Computers",
          "Hack"
        ],
        "thumbnail": "http://coding-academy.org/books-photos/17.jpg",
        "language": "sp",
        "listPrice": {
          "amount": 57,
          "currencyCode": "USD",
          "isOnSale": true
        }
      },
      {
        "id": "2RvT48ZNInj",
        "title": "sagittis justo",
        "subtitle": "etiam primis proin praesent placerat nisi fermentum nisi",
        "authors": [
          "Agatha Christie"
        ],
        "publishedDate": 2011,
        "description": "nec faucibus arcu suspendisse tempus potenti lobortis aliquam quisque augue integer consectetur etiam ultrices curabitur tristique metus",
        "pageCount": 598,
        "categories": [
          "Computers",
          "Hack"
        ],
        "thumbnail": "http://coding-academy.org/books-photos/8.jpg",
        "language": "en",
        "listPrice": {
          "amount": 167,
          "currencyCode": "ILS",
          "isOnSale": false
        }
      },
      {
        "id": "5z2s9pDXAYj",
        "title": "quam ullamcorper himenaeos",
        "subtitle": "ut placerat eu dapibus sapien sodales laoreet",
        "authors": [
          "Danielle Steel"
        ],
        "publishedDate": 1999,
        "description": "etiam nec aliquam euismod platea vel laoreet quisque condimentum sapien neque ut aliquam torquent in nam",
        "pageCount": 608,
        "categories": [
          "Computers",
          "Hack"
        ],
        "thumbnail": "http://coding-academy.org/books-photos/3.jpg",
        "language": "he",
        "listPrice": {
          "amount": 150,
          "currencyCode": "USD",
          "isOnSale": true
        }
      },
      {
        "id": "zBZu5cDEWha",
        "title": "quis",
        "subtitle": "suscipit turpis etiam turpis libero lobortis",
        "authors": [
          "Jin Yong"
        ],
        "publishedDate": 2011,
        "description": "etiam pretium urna fusce lobortis curae viverra aptent metus semper nisi litora feugiat elementum purus nunc consequat lorem ultricies non primis phasellus sociosqu donec dolor",
        "pageCount": 583,
        "categories": [
          "Computers",
          "Hack"
        ],
        "thumbnail": "http://coding-academy.org/books-photos/6.jpg",
        "language": "en",
        "listPrice": {
          "amount": 58,
          "currencyCode": "ILS",
          "isOnSale": true
        }
      },
      {
        "id": "aOI7tQuPZ2f",
        "title": "aliquam aliquet dapibus",
        "subtitle": "neque eu purus euismod placerat adipiscing odio egestas consequat",
        "authors": [
          "Leo Tolstoy"
        ],
        "publishedDate": 2011,
        "description": "dolor morbi malesuada eleifend purus taciti sit interdum aliquet commodo ut libero tincidunt",
        "pageCount": 497,
        "categories": [
          "Computers",
          "Hack"
        ],
        "thumbnail": "http://coding-academy.org/books-photos/7.jpg",
        "language": "en",
        "listPrice": {
          "amount": 78,
          "currencyCode": "USD",
          "isOnSale": false
        }
      },
      {
        "id": "WBooB82Uvwu",
        "title": "class",
        "subtitle": "elit enim ultricies amet imperdiet a molestie class elementum venenatis",
        "authors": [
          "Danielle Steel"
        ],
        "publishedDate": 1999,
        "description": "rhoncus odio netus consectetur aenean hendrerit massa scelerisque elementum aptent lobortis pharetra maecenas quam nulla volutpat turpis non habitasse aenean ante sodales lobortis quisque libero imperdiet gravida eleifend nulla",
        "pageCount": 804,
        "categories": [
          "Computers",
          "Hack"
        ],
        "thumbnail": "http://coding-academy.org/books-photos/10.jpg",
        "language": "en",
        "listPrice": {
          "amount": 118,
          "currencyCode": "ILS",
          "isOnSale": false
        }
      },
      {
        "id": "xm1z5bbZjlS",
        "title": "vitae",
        "subtitle": "class habitant at commodo semper ligula a bibendum",
        "authors": [
          "Leo Tolstoy"
        ],
        "publishedDate": 1999,
        "description": "himenaeos quis iaculis orci libero egestas quam varius primis erat lacus facilisis blandit dictum tristique interdum litora quisque purus senectus pretium purus",
        "pageCount": 231,
        "categories": [
          "Computers",
          "Hack"
        ],
        "thumbnail": "http://coding-academy.org/books-photos/12.jpg",
        "language": "he",
        "listPrice": {
          "amount": 60,
          "currencyCode": "EUR",
          "isOnSale": false
        }
      },
      {
        "id": "u3j6QIKLlJb",
        "title": "rhoncus vivamus",
        "subtitle": "nullam class risus amet senectus scelerisque etiam curabitur",
        "authors": [
          "Agatha Christie"
        ],
        "publishedDate": 1978,
        "description": "torquent in et id lacus vivamus aptent cursus erat integer venenatis risus ac ante quam etiam euismod feugiat risus suscipit rhoncus pharetra quisque felis",
        "pageCount": 652,
        "categories": [
          "Computers",
          "Hack"
        ],
        "thumbnail": "http://coding-academy.org/books-photos/20.jpg",
        "language": "he",
        "listPrice": {
          "amount": 110,
          "currencyCode": "USD",
          "isOnSale": true
        }
      },
      {
        "id": "vxYYYdVlEH3",
        "title": "donec mi ullamcorper",
        "subtitle": "varius malesuada augue molestie sollicitudin faucibus mi eu tempus",
        "authors": [
          "William Shakespeare"
        ],
        "publishedDate": 2011,
        "description": "aliquet euismod mi vivamus bibendum donec etiam quisque iaculis ullamcorper est sed",
        "pageCount": 904,
        "categories": [
          "Computers",
          "Hack"
        ],
        "thumbnail": "http://coding-academy.org/books-photos/2.jpg",
        "language": "sp",
        "listPrice": {
          "amount": 186,
          "currencyCode": "ILS",
          "isOnSale": true
        }
      }
    ]
  }
  _saveBooksToStorage(booksFromStorage);
  return booksFromStorage
}

function getCurrency(currencyCode) {
  var sign = ''
  switch (currencyCode) {
    case 'EUR':
      sign = '€'
      break;
    case 'USD':
      sign = '$'
      break;
    case 'ILS':
      sign = '₪'
      break;
  }
  return sign;
}

function _saveBooksToStorage(booksFromStorage = gBooks) {
  storageService.saveToStorage(KEY, booksFromStorage)
}
