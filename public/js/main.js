function calculate() {
    const date = new Date(document.getElementById("date").value);
    const gender = document.getElementById("gender").value;
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const MALE_NAMES = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    const FEMALE_NAMES = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
  
    const CC = parseInt(date.getFullYear().toString().slice(0, 2));
    const YY = parseInt(date.getFullYear().toString().slice(2));
    const MM = date.getMonth() + 1;
    const DD = date.getDate();
    const h = Math.floor(((CC / 4) - 2 * CC - 1) + ((5 * YY / 4)) + ((26 * (MM + 1) / 10)) + DD) % 7;
  
    let akanName = null
  
//     if (gender == "male") {
//       akanName = MALE_NAMES[h];
//     } else if (gender == "female") {
//       akanName = FEMALE_NAMES[h];
//     }
  
//     document.getElementById("result").innerHTML = `You were born on a ${daysOfWeek[h]}, and your Akan name is ${akanName}.`;
//   }