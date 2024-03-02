// class password {
//   constructor(password) {
//     this.password = password;
//   }
//   generateStrongPassword() {
//     let strongPassword = "";
//     let characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+";
//     let length = this.password.length;
//     for (let i = 0; i < length; i++) {
//       let randomIndex = Math.floor(Math.random() * characters.length);
//       strongPassword += characters.charAt(randomIndex);
//     }
//     return strongPassword;
//   }
// }
// let passwordInput = document.getElementById("password");
// let generateButton = document.getElementById("generate");
// let copyButton = document.getElementById("copy");
// let passworddisplay = document.getElementById("passworddisplay");
// generateButton.addEventListener("click", function() {
//   let password = new password(passwordInput.value);
//   let strongPassword = password.generateStrongPassword();
//   passworddisplay.innerHTML = strongPassword;
// });
// copyButton.addEventListener("click", function() {
//   let password = new password(passwordInput.value);
//   let strongPassword = password.generateStrongPassword();
//   navigator.clipboard.writeText(strong


class password {
  constructor(password) {
    this.password = password;
    this.pass = "";
  }
  generatePassword() {
    let chars = "qwertyuioplkjhgfdsazxcvbnm";
    let numbers = "1234567890";
    let special = "!@#$%^&*()_+";
    if (length < 3) {
      alert("Your password should be atleast 3 characters long");
    }
    else {
      let i = 0;
      while (i < length) {
        this.pass += chars[Math.floor(Math.random() * chars.length)];
        this.pass += numbers[Math.floor(Math.random()* numbers.length)];
        this.pass += special[Math.floor(Math.random()* special.length)];
        i += 3;
      }
      this.pass = this.pass.substr(0, length);
      return this.pass;
    }
  }
}
let length = prompt("Enter the length of password");
let p = new password(length);
alert(p.generatePassword());

    