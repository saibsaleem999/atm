// let accountBalance = 2500;
// let withdrawAmount = 800;
// let dailyLimitUsed = 600;
// let dailyLimit = 1500;
// let atmCashAvailable = 5000;
// let accountType = "premium"; // basic, premium, gold
// let hasOverdraft = true;

// // Fees for different account types
// let fees = {
//   basic: 50,   // flat fee
//   premium: 20, // flat fee
//   gold: 10     // flat fee
// };

// // Step 1: Check if withdrawal exceeds daily limit
// if (dailyLimitUsed + withdrawAmount > dailyLimit) {
//   console.log("❌ Transaction denied: Daily limit exceeded.");
// } 
// // Step 2: Check if ATM has enough cash
// else if (withdrawAmount > atmCashAvailable) {
//   console.log("❌ Transaction denied: ATM does not have enough cash.");
// } 
// else {
//   // Step 3: Deduct fees
//   let fee = fees[accountType] || 0;
//   let totalDeduction = withdrawAmount + fee;

//   // Step 4: Check balance OR overdraft for premium accounts
//   if (accountBalance >= totalDeduction) {
//     accountBalance -= totalDeduction;
//     atmCashAvailable -= withdrawAmount;
//     dailyLimitUsed += withdrawAmount;
//     console.log(`✅ Transaction successful! Withdrawn: ${withdrawAmount}`);
//     console.log(`💰 Fee charged: ${fee}`);
//     console.log(`📌 New Balance: ${accountBalance}`);
//   } else if (accountType === "premium" && hasOverdraft) {
//     // Allow overdraft for premium
//     accountBalance -= totalDeduction;
//     atmCashAvailable -= withdrawAmount;
//     dailyLimitUsed += withdrawAmount;
//     console.log(`✅ Transaction successful with overdraft! Withdrawn: ${withdrawAmount}`);
//     console.log(`💰 Fee charged: ${fee}`);
//     console.log(`📌 New Balance (Overdraft): ${accountBalance}`);
//   } else {
//     console.log("❌ Transaction denied: Insufficient balance.");
//   }
// }








// User input through prompt
let accountBalance = parseInt(prompt("Enter your account balance:"));
let withdrawAmount = parseInt(prompt("Enter amount you want to withdraw:"));
let dailyLimitUsed = parseInt(prompt("Enter how much you already withdrew today:"));
let dailyLimit = parseInt(prompt("Enter your daily withdrawal limit:"));
let atmCashAvailable = parseInt(prompt("Enter ATM cash available:"));
let accountType = prompt("Enter account type (basic, premium, gold):").toLowerCase();
let hasOverdraft = prompt("Do you have overdraft protection? (yes/no):").toLowerCase() === "yes";

// Fees for different account types
let fees = {
  basic: 50,
  premium: 20,
  gold: 10
};

// Step 1: Check if withdrawal exceeds daily limit
if (dailyLimitUsed + withdrawAmount > dailyLimit) {
  alert("❌ Transaction denied: Daily limit exceeded.");
} 
// Step 2: Check if ATM has enough cash
else if (withdrawAmount > atmCashAvailable) {
  alert("❌ Transaction denied: ATM does not have enough cash.");
} 
else {
  // Step 3: Deduct fees
  let fee = fees[accountType] || 0;
  let totalDeduction = withdrawAmount + fee;

  // Step 4: Check balance OR overdraft for premium accounts
  if (accountBalance >= totalDeduction) {
    accountBalance -= totalDeduction;
    atmCashAvailable -= withdrawAmount;
    dailyLimitUsed += withdrawAmount;
    alert(`✅ Transaction successful!\nWithdrawn: ${withdrawAmount}\nFee charged: ${fee}\nNew Balance: ${accountBalance}`);
  } else if (accountType === "premium" && hasOverdraft) {
    // Allow overdraft for premium
    accountBalance -= totalDeduction;
    atmCashAvailable -= withdrawAmount;
    dailyLimitUsed += withdrawAmount;
    alert(`✅ Transaction successful with overdraft!\nWithdrawn: ${withdrawAmount}\nFee charged: ${fee}\nNew Balance (Overdraft): ${accountBalance}`);
  } else {
    alert("❌ Transaction denied: Insufficient balance.");
  }
}