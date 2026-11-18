/*
  Student Name : Shivam Gupta
  Roll Number  : 2510303486
  Subject      : JavaScript Programming Lab (BCS354)
  Assignment   : 09 - Question 2 (Form Validation Function)
*/

function validateForm(name) {
  let errors = [];
  if (!name || name.trim() === "") {
    errors.push("Name is required");
  }
  return errors;
}
console.log(validateForm("Asha"));
console.log(validateForm(""));
