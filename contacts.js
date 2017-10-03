let contactStorage = [] // here is where you'll store your contacts

const addContact = function(firstName, lastName, email) {
  contactStorage.push({
    'first_name': firstName,
    'last_name': lastName,
    'email': email,
  });
}

/*
 * addContacts
 *
 *  Arguments:
 *    contacts: Array of contacts (required)
 *
 *  Example Usage:
 *    addContacts([
 *      {
 *        "first_name": "Tanny",
 *        "last_name": "Vibert",
 *        "email": "tvibert0@illinois.edu",
 *      },
 *      {
 *        "first_name": "Tova",
 *        "last_name": "Myall",
 *        "email": "tmyall1@instagram.com",
 *      }
 *    ])
 *
 *  Returns:
 *    undefined
 */
const addContacts = function(contacts) {
  console.log('Loading contact data...');
  contacts.forEach(contact => {contactStorage.push(contact)});
  contactStorage.sort(function (a, b) {
  if (a.first_name < b.first_name) {
    return -1;
  }
  if (a.first_name > b.first_name) {
    return 1;
  }
  return 0;
  });
  console.log('...Finished loading contact data.')
};

/*
 * printContacts
 *
 *  Arguments:
 *    none
 *
 *  Example Usage:
 *    addContacts()
 *
 *  Note: output goes to STDOUT using console.log
 *
 *  Returns:
 *    undefined
 */
const printContacts = function() {
  let nameSpaces, emailSpaces;
//lines 65-77 determine the length of the longest name and email,
// then base the formatting off the length of whichever is longer.
   let names = [];
   contactStorage.forEach(contact => names.push(contact.first_name + ' ' + contact.last_name));
   let longest = names.reduce((longestName, name) => {
     return name.length > longestName ? name : longestName;
   })
   let emails = [];
   contactStorage.forEach(contact => emails.push(contact.email));
   let longestEmail = emails.reduce((currentLongest, email) => {
     return email.length > currentLongest ? email : currentLongest;
   })
   nameDashes = new Array(longest.length+(longestEmail.length-longest.length)+1).join('-')
   emailDashes = new Array(longestEmail.length+4).join('-')
   titleName = new Array(nameDashes.length-9).join(' ')
   titleEmail = new Array(emailDashes.length-9).join(' ')

   console.log('All Contacts:');
   console.log(`| Full Name${titleName} Full Email${titleEmail}|`);
   console.log(`|${nameDashes}+${emailDashes}|`);

// Lines 87-97 set formatting for contact info then log results to screen.
   contactStorage.forEach(contact => {
     let fullName = contact.first_name + ' ' + contact.last_name;
     let emailAddress = contact.email;
      if (fullName.length < longestEmail.length) {
          fullName = fullName + new Array(longestEmail.length - fullName.length).join(' ')
      };
      
      emailAddress = emailAddress + new Array((longestEmail.length - emailAddress.length)+3).join(' ');
      console.log(`| ${fullName}| ${emailAddress}|`);
   });
      console.log(`|${nameDashes}+${emailDashes}|`);
};

////////////////////////////////////////////////////////////
/*          Do not make changes below this line           */
////////////////////////////////////////////////////////////

addContacts([
  {
    "first_name": "Tanny",
    "last_name": "Vibert",
    "email": "tvibert0@illinois.edu",
  },
  {
    "first_name": "Tova",
    "last_name": "Myall",
    "email": "tmyall1@instagram.com",
  },
  {
    "first_name": "Engracia",
    "last_name": "Folger",
    "email": "efolger2@epa.gov",
  },
  {
    "first_name": "Conroy",
    "last_name": "Honsch",
    "email": "chonsch3@sohu.com",
  },
  {
    "first_name": "Virgina",
    "last_name": "Cankett",
    "email": "vcankett4@washington.edu",
  },
  {
    "first_name": "Mateo",
    "last_name": "Da Costa",
    "email": "mdacosta5@about.com",
  },
  {
    "first_name": "Ambrose",
    "last_name": "Scullard",
    "email": "ascullard6@timesonline.co.uk",
  },
  {
    "first_name": "Shaylah",
    "last_name": "Fairney",
    "email": "sfairney7@stumbleupon.com",
  },
  {
    "first_name": "Pier",
    "last_name": "Waine",
    "email": "pwaine8@unc.edu",
  },
  {
    "first_name": "Karita",
    "last_name": "Bough",
    "email": "kbough9@angelfire.com",
  },
  {
    "first_name": "Marguerite",
    "last_name": "Lafayette",
    "email": "mlafayettea@bravesites.com",
  },
  {
    "first_name": "Northrop",
    "last_name": "Bauchop",
    "email": "nbauchopb@pagesperso-orange.fr",
  },
  {
    "first_name": "Devon",
    "last_name": "Bocking",
    "email": "dbockingc@comcast.net",
  },
  {
    "first_name": "Willdon",
    "last_name": "Hedley",
    "email": "whedleyd@purevolume.com",
  },
  {
    "first_name": "Charil",
    "last_name": "Clegg",
    "email": "cclegge@weibo.com",
  },
  {
    "first_name": "Nessi",
    "last_name": "Bywaters",
    "email": "nbywatersf@shop-pro.jp",
  },
  {
    "first_name": "Mercy",
    "last_name": "Browncey",
    "email": "mbrownceyg@yelp.com",
  },
  {
    "first_name": "Didi",
    "last_name": "Grose",
    "email": "dgroseh@google.com.hk",
  },
  {
    "first_name": "Niccolo",
    "last_name": "Spruce",
    "email": "nsprucei@wordpress.com",
  },
  {
    "first_name": "Winston",
    "last_name": "Hixley",
    "email": "whixleyj@homestead.com",
  },
])

printContacts()
