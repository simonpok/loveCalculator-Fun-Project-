//defining Variables

let textfield1 = document.getElementById('FirstPersonName');
let textfield2 = document.getElementById('SecondPersonName');
let submitButton = document.getElementById('GeneratePercentage');
let FinalResult = document.getElementById('result');
let RefreshPage = document.getElementById('clearField');
let titleText = document.getElementById('Title');

// let iconPosition = document.getElementById('icon');
titleText.classList.add('custom-text2');
FinalResult.classList.add('custom-text');

let person1 = textfield1.value;
let person2 = textfield2.value;
let mainString = 'loves';

let arr2 = [];
let arr3 = [];
let arr4 = [];
let arr5 = [];

let sum = 0;
let sum2 = 0;
let sum3 = 0;
let sum4 = 0;
let arrayOfDigits;
let arrayOfDigits2;
let arrayOfDigits3;
let arrayOfDigits4;

submitButton.addEventListener('click', () => {
  let arr2 = [];
  let arr3 = [];
  let arr4 = [];

  FinalResult.textContent = '';

  let person1 = textfield1.value.trim();
  let person2 = textfield2.value.trim();
  let mainString = 'loves';
  let lovePercentage;

  //to concatinate two names
  let twoStrings = person1.concat(person2);

  //changing all the letters to lowercase to avoid error
  twoStrings = twoStrings.toLowerCase();

  //spliting two strings(names & love) to two different arrays
  const arr1 = twoStrings.split('');
  const array2 = mainString.split('');

  // Initializing new Array to store similar characters
  let countArray = [0, 0, 0, 0, 0];

  // Iterate through each character in array containg names
  for (let i = 0; i < arr1.length; i++) {
    // Check if the character is present in array2 and update the count

    let index = array2.indexOf(arr1[i]);
    if (index !== -1) {
      countArray[index]++;
    }
  }

  console.log(countArray);

  //to add all the elements of countArray till the final result is out

  for (let i = 0; i < countArray.length - 1; i++) {
    sum = countArray[i] + countArray[i + 1];

    if (sum >= 10) {
      arrayOfDigits = Array.from(String(sum), Number);
      arr2.push(arrayOfDigits);
    } else {
      arr2.push(sum);
    }
  }

  for (let i = 0; i < arr2.length - 1; i++) {
    sum2 = arr2[i] + arr2[i + 1];
    if (sum2 >= 10) {
      arrayOfDigits2 = Array.from(String(sum2), Number);

      arr3.push(arrayOfDigits2);
    } else {
      arr3.push(sum2);
    }
  }

  for (let i = 0; i < arr3.length - 1; i++) {
    sum3 = arr3[i] + arr3[i + 1];
    let newsum3 = Math.floor(sum3 / 10) + (sum3 % 10);
    if (newsum3 >= 10) {
      arrayOfDigits3 = Array.from(String(newsum3), Number);

      arr4.push(arrayOfDigits3);
    } else {
      arr4.push(newsum3);
    }
  }

  console.log(arr2);
  console.log(arr3);
  console.log(arr4);
  //console.log(parseInt(arr4.join(''), 10), '%');
  lovePercentage = parseInt(arr4.join(''), 10);

  if (person1 !== '' && person2 !== '') {
    if (lovePercentage < 20) {
      FinalResult.textContent = ` Its just ${lovePercentage}%. You guys better be brother and sister 💥`;
    } else if (lovePercentage >= 20 && lovePercentage <= 45) {
      FinalResult.textContent = ` Its ${lovePercentage}%. Its best to be Friends only😊`;
    } else if (lovePercentage >= 46 && lovePercentage <= 60) {
      FinalResult.textContent = ` Its ${lovePercentage}%. Keep on Trying 👏`;
    } else if (lovePercentage >= 61 && lovePercentage <= 75) {
      FinalResult.textContent = ` Its ${lovePercentage}%. You guys can go on date. Dont fear Just go ask Him/her out 📅`;
    } else if (lovePercentage >= 76 && lovePercentage <= 90) {
      FinalResult.textContent = ` Wow! Its ${lovePercentage}%. Thats we call it a true love 💕`;
    } else {
      FinalResult.textContent = `awwww! ${lovePercentage}%. We think you know what to do now 😘`;
    }
  } else {
    FinalResult.textContent = `Please! Enter Names in Both Fields.`;
  }
});

// RefreshPage.addEventListener('click', () => {
//   textfield1.value = '';
//   textfield2.value = '';
//   arr2 = [];
//   arr3 = [];
//   arr4 = [];
//   FinalResult.textContent = '';
// });
