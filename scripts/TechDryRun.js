//Tech Dry Run

// var hrr18 = {
//   name: 'Keeley Nakamoto',
// }

// const marlon = {
//   name: 'Marlon Esparza',
// }

// ---------------------------------------------

// NEW FEATURES FOR PAIRING TEST

// steps:
// 1. grab the section title
// 2. grab the section image
// 3. grab the page button
// 4. Update section title, and image on button click

const sectionTitle = document.getElementById('section-title');
const sectionImage = document.getElementById('section-image');
const pageButton = document.getElementById('page-button');

let happyDay = true;

pageButton.addEventListener('click', function() {
  if (happyDay) {
    sectionTitle.innerHTML = 'Today Is Tough';
    sectionImage.setAttribute('src', '../assets/tough.jpg');
    happyDay = false;
  } else {
    sectionTitle.innerHTML = 'Today Is Happy';
    sectionImage.setAttribute('src', '../assets/happy.jpg');
    happyDay = true;
  }

  console.log('Changed the day.')
});