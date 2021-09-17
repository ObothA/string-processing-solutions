
/**
 * 
 * Solution to Data Structures and Algorithms, set 1
 * To run; $node set1.js
 * Abel Oboth
 * oboth.abel.oa@gmail.com
 * 
 */


const generateDatabase = (stringOfLogs) => {
  const logsArray = stringOfLogs.split(" ");
  const database = {};

  logsArray.forEach((item, index) => {
    if (item.toLowerCase() === 'f' || item.toLowerCase() === 'b') {
      const day = logsArray[index + 1];
      const temp = {
        ...database[day]
      };
      temp[item] = logsArray[index + 2];
      database[day] = temp;
    }
  });

  return database;
};

const pickDaysWithDiscrepancies = (database) => {
  const daysWithDiscrepancies = [];
  Object.entries(database).forEach(([day, records]) => {
    const fieldSales = Number(records.F);
    const bankDeposit = Number(records.B);
  
    if (fieldSales > bankDeposit) {
      daysWithDiscrepancies.push(Number(day));
    }
  });

  return daysWithDiscrepancies;
};

const sortDays = (days) => {
  const temp = [...days];
  temp.sort((a, b) => a-b);
  return temp;
};

const getDaysWithLessMoney = (logs) => {
  const database = generateDatabase(logs);

  const daysWithDiscrepancies = pickDaysWithDiscrepancies(database);

  return sortDays(daysWithDiscrepancies);
};


const setA = 'F 1 386 F 2 963 F 3 374 F 4 371 F 5 685 F 6 47 F 7 132 F 8 909 F 9 433 B 1 386 B 2 963 B 3 374 B 4 371 B 5 685 B 6 47 B 7 132 B 8 909 B 9 71';
const daysFromSetA = getDaysWithLessMoney(setA);
console.log(daysFromSetA);
console.log();

const setB = 'F 1 439 F 2 605 F 3 476 F 4 765 F 5 382 F 6 599 F 7 732 F 8 21 F 9 617 B 1 248 B 2 605 B 3 476 B 4 765 B 5 382 B 6 599 B 7 732 B 8 21 B 9 617';
const daysFromSetB = getDaysWithLessMoney(setB);
console.log(daysFromSetB);
console.log();

const setC = 'F 1 52 F 2 746 F 3 866 F 4 12 F 5 892 F 6 918 F 7 514 F 8 794 F 9 385 B 1 52 B 2 746 B 3 13 B 4 7 B 5 892 B 6 918 B 7 514 B 8 794 B 9 385';
const daysFromSetC = getDaysWithLessMoney(setC);
console.log(daysFromSetC);
console.log();

const setD = 'F 1 111 F 2 143 F 3 827 F 4 987 F 5 507 F 6 694 F 7 702 F 8 51 F 9 830 B 1 111 B 2 143 B 3 827 B 4 987 B 5 507 B 6 526 B 7 702 B 8 27 B 9 403';
const daysFromSetD = getDaysWithLessMoney(setD);
console.log(daysFromSetD);
console.log();

const setE = 'F 1 739 F 2 164 F 3 227 F 4 778 F 5 423 F 6 538 F 7 155 F 8 425 F 9 878 B 1 739 B 2 164 B 3 227 B 4 778 B 5 423 B 6 538 B 7 155 B 8 425 B 9 878';
const daysFromSetE = getDaysWithLessMoney(setE);
console.log(daysFromSetE);
console.log();


// Responses.
// [ 9 ]
// [ 1 ]
// [ 3, 4 ]
// [ 6, 8, 9 ]
// []




