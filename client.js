const employees = [
   {
      name: "Atticus", //CONCLUSION: 9%
      employeeNumber: "2405", //4 digits long so 5% extra!
      annualSalary: "47000",
      reviewRating: 3, //receive a base bonus of 4% of their base annual income
   },
   {
      name: "Jem", //CONLCUSION: 6%
      employeeNumber: "62347",
      annualSalary: "63500",
      reviewRating: 4, //receive a base bonus of 6%
   },
   {
      name: "Scout", //CONCLUSION:13%
      employeeNumber: "6243", //4 digits long so extra 5%
      annualSalary: "74750", //should be adjusted down  1%
      reviewRating: 5, //receive a base bonus of 10%
   },
   {
      name: "Robert", //CONCLUSION: no bonus
      employeeNumber: "26835",
      annualSalary: "66000", //should be adjusted down 1%
      reviewRating: 1, //do not receive bonus
   },
   {
      name: "Mayella", //CONCLUSION: no bonus
      employeeNumber: "89068",
      annualSalary: "35000",
      reviewRating: 1,
   },
];

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// Take small steps! Don't write a for loop and two functions that do all of the calculations right away.
// This problem is massive! Break the problem down. Use the debugger.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.

console.log(employees);

// name, bonusPerc, totalCompensation, totalBonus

let bonusPerc = 0;
employees.forEach((element) => {
   if (element.reviewRating <= 2) {
      bonusPerc = 0.0; //no bonus
   } else if (element.reviewRating === 3) {
      bonusPerc = 0.04; //4%
   } else if (element.reviewRating === 4) {
      bonusPerc = 0.06; //6%
   } else {
      bonusPerc = 0.1; //10%
   }

   if (element.employeeNumber.length === 4) {
      bonusPerc += 0.05; //extra 5% added
   }

   if (element.annualSalary > 65000) {
      bonusPerc -= 0.01; //bonus adjusted down 1%
   }
   if (bonusPerc < 0) {
      //min of 0%
      bonusPerc = 0;
   } else if (bonusPerc > 0.13) {
      bonusPerc = 0.13;
   }
   console.log(bonusPerc);
   totalBonus = bonusRounder(element.annualSalary, bonusPerc);
   totalCompensation = totalMoney(element.annualSalary, totalBonus);

   let newObj = {
      name: element.name,
      bonusPercentage: bonusPerc,
      bonusTotal: totalBonus,
      compensationTotal: totalCompensation,
   };
   console.log(newObj);
   $("#employees").append(
      "<li>" +
         "Name: " +
         newObj.name +
         " Bonus Percentage (as decimal): " +
         newObj.bonusPercentage +
         " Total Bonus " +
         newObj.bonusTotal +
         " Total Compensation: $" +
         newObj.compensationTotal +
         "</li>"
   );
});

//  let newObj = {};
//  newObj.push(name: element.name);

function bonusRounder(annualSalary, bonusPerc) {
   //ceil() rounds up!
   let totalBonus = parseFloat(annualSalary) * bonusPerc;
   return Math.round(totalBonus);
} //end rounder function

function totalMoney(annualSalary, totalBonus) {
   let totalCompensation = parseFloat(annualSalary) + totalBonus;
   return totalCompensation;
} //end total Money
