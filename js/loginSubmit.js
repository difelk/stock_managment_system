const submitBtn = document.querySelector(".login_sub_btn button");
const userNameFieldValue = document.querySelector(
  '.login_input input[name="username"]'
);
const userNameFieldError = document.querySelector(".login_input .er_usrnme");
const passwordFieldValue = document.querySelector(
  '.login_input input[name="password"]'
);
const passwordFieldError = document.querySelector(".login_input .er_pwd");

const incorrectunamePsw = document.querySelector(".username_or_pswd_incrt");

const handleLoginValidation = () => {
  if (!userNameFieldValue.value) {
    userNameFieldError.innerText = "username cannont be empty";
  } else {
    userNameFieldError.innerText = "";
  }

  if (!passwordFieldValue.value) {
    passwordFieldError.innerText = "password cannont be empty";
  } else {
    passwordFieldError.innerText = "";
  }

  if (userNameFieldValue.value && passwordFieldValue.value) {
    handleSubmit(userNameFieldValue.value, passwordFieldValue.value);
    incorrectunamePsw.innerText = "incorrect username or password.";
    window.location.href = "dashboard.html";
  } else {
    incorrectunamePsw.innerText = "";
  }
};

const handleSubmit = (username, password) => {
  // const xmlreq = new XMLHttpRequest();
  // xmlreq.open("POST", "checkUserLogin.php", true);
  // xmlreq.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  // xmlreq.onreadystatechange = function() {
  //   if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
  //     console.log("response ", this.responseText);
  //   }
  // }
  //
  // xmlreq.send("username=" + encodeURIComponent(username) + "&password=" + encodeURIComponent(password));

  fetch("checkUserLogin.php", {
    method: "post",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: `username=${username}&password=${password}`,
  })
    .then((response) => response.text())
    .then((result) => {
      if (result !== "Username not found") {
        console.log(`Username: ${result}`);
      } else {
        console.error(result);
      }
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};

userNameFieldValue.addEventListener("input", () => {
  incorrectunamePsw.innerText = "";
  if (!userNameFieldValue.value) {
    userNameFieldError.innerText = "username cannont be empty";
  } else {
    userNameFieldError.innerText = "";
  }
});

passwordFieldValue.addEventListener("input", () => {
  incorrectunamePsw.innerText = "";
  if (!passwordFieldValue.value) {
    passwordFieldError.innerText = "password cannont be empty";
  } else {
    passwordFieldValue.innerText = "";
  }
});

submitBtn.addEventListener("click", () => {
  handleLoginValidation();
});
