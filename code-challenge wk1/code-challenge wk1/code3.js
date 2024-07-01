function calculateNetSalary(basicSalary, benefits) {
    // Step 1: Calculate Gross Salary
    const grossSalary = basicSalary + benefits;

    // Step 2: Calculate PAYE Tax
    const annualTaxablePay = grossSalary * 12;
    let payeRate;}

    if (annualTaxablePay <= 288000) {
        payeRate = 0.1;
    } else if (annualTaxablePay <= 388000) {
        payeRate = 0.25;
    } else if (annualTaxablePay <= 6000000) {
        payeRate = 0.3;
    } else if (annualTaxablePay <= 9600000) {
        payeRate = 0.325;
    } else {
        payeRate = 0.35;
    }

    const paye = annualTaxablePay * payeRate / 12;

    // Step 3: Calculate NHIF Deductions
    let nhifDeduction;
    if (grossSalary <= 5999) {
        nhifDeduction = 150;
    } else if (grossSalary <= 7999) {
        nhifDeduction = 300;
    } // ... continue with other ranges

    // Step 4: Calculate NSSF Deductions
    let nssfDeduction;
    if (pensionablePay <= 6000) {
        nssfDeduction = 0.06 * pensionablePay;
    } else if (pensionablePay <= 18000) {
        nssfDeduction = 0.06 * 6000 + 0.06 * (pensionablePay - 6000);
    } // ... continue with other tiers

    // Step 5: Calculate Net Salary
    const netSalary = grossSalary - paye - nhifDeduction - nssfDeduction;

    console.log(`Gross Salary: ${grossSalary.toFixed(2)}`);
    console.log(`PAYE: ${paye.toFixed(2)}`);
    console.log(`NHIF Deduction: ${nhifDeduction.toFixed(2)}`);
    console.log(`NSSF Deduction: ${nssfDeduction.toFixed(2)}`);
    console.log(`Net Salary: ${netSalary.toFixed(2)}`);
//---------------------------------------------------------------------//
    const basicSalary = parseFloat(prompt("Enter basic salary (Ksh):"));
const benefits = parseFloat(prompt("Enter additional benefits (Ksh):"));

calculateNetSalary(basicSalary, benefits);