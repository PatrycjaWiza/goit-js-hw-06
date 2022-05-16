const frm = document.querySelector(".login-form");
frm.addEventListener("submit", handleEvent);

function handleEvent(e) {
  e.preventDefault();
  const {
    elements: { email, password },
  } = e.currentTarget;
  if (email.value === "" || password.value === "") {
    return alert("Please fill in all the fileds!");
  }
  console.log(`Login:${email.value}, Password:${password.value}`);
  e.currentTarget.reset();
}
