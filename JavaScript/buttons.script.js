document.addEventListener("DOMContentLoaded", function () {
  const signupBtn = document.getElementById("signup-toggle");
  const loginBtn = document.getElementById("login-toggle");

  signupBtn.addEventListener("click", toggleActive);
  loginBtn.addEventListener("click", toggleActive);

  function toggleActive(event) {
    const targetBtn = event.target;
    if (targetBtn.id === "signup-toggle") {
      signupBtn.classList.add("active");
      loginBtn.classList.remove("active");
    } else if (targetBtn.id === "login-toggle") {
      loginBtn.classList.add("active");
      signupBtn.classList.remove("active");
    }
  }
});
