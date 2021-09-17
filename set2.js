/**
 *
 * Solution to Data Structures and Algorithms, set 2
 * To run; $node set2.js
 * Abel Oboth
 * oboth.abel.oa@gmail.com
 *
 */

const removeInitialPrice = (bidLogs) => {
  return bidLogs.split(',').splice(1);
};

const formatBids = (bidsArr) => {
  const formattedBids = [];
  bidsArr.forEach((item, index) => {
    if (index % 2 === 0) {
      const temp = {};
      temp[item] = Number(bidsArr[index + 1]);
      formattedBids.push(temp);
    }
  });

  return formattedBids;
};

const getObjectKey = (obj) => {
  if (!obj) {
    return '';
  }

  return Object.keys(obj).map((key) => key)[0];
};

const getHighestValue = (formattedBidsArr) => {
  let highestSet = formattedBidsArr[0];

  formattedBidsArr.forEach((item) => {
    Object.keys(item).forEach((key) => {
      if (item[key] > highestSet[getObjectKey(highestSet)]) {
        highestSet = item;
      }
    });
  });

  return highestSet;
};

const getHighestbidder = (bidLogs) => {
  const bids = removeInitialPrice(bidLogs);

  const formattedBids = formatBids(bids);

  const highestSet = getHighestValue(formattedBids);

  const bidKey = getObjectKey(highestSet);

  if (!bidKey) {
    return '';
  }

  return `${bidKey},${highestSet[bidKey]}`;
};

const bidLogsA = '1,A,5,B,10,A,8,A,17,B,17';
const solutionA = getHighestbidder(bidLogsA);
console.log('solutionA:', solutionA);
console.log();

const bidLogsB = '1,Henry,15,Mukasa,24,Barbra,30,Asiimwe,31,Mark,49,Tim,57,Frank,59,Hellen,61,Atim,64,Mukasa,74,Mukasa,69,Mukasa,71,Hellen,78,Frank,78,Barbra,95,Frank,103,Asiimwe,135';
const solutionB = getHighestbidder(bidLogsB);
console.log('solutionB:', solutionB);
console.log();

const bidLogsC = '1,Mathius,5,Ruth,10,Carl,19,Mathius,14,Mathius,23,Carl,24,Carl,25,Ruth,26';
const solutionC = getHighestbidder(bidLogsC);
console.log('solutionC:', solutionC);
console.log();

const bidLogsD = '1,Lutaya,5,Otim,10,Sheila,19,Lutaya,23,Sheila,24,Lutaya,29,Otim,26';
const solutionD = getHighestbidder(bidLogsD);
console.log('solutionD:', solutionD);
console.log();

const bidLogsE = '15';
const solutionE = getHighestbidder(bidLogsE);
console.log('solutionE:', solutionE);
console.log();


// Responses.
// solutionA: A,17

// solutionB: Asiimwe,135

// solutionC: Ruth,26

// solutionD: Lutaya,29

// solutionE: ''