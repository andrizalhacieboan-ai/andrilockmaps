const loginForm = document.getElementById("loginForm");
const loginMessage = document.getElementById("loginMessage");
const cancelBtn = document.getElementById("cancelBtn");
const loginSection = document.getElementById("loginSection");
const dashboardSection = document.getElementById("dashboardSection");
const activeUser = document.getElementById("activeUser");
const featureOutput = document.getElementById("featureOutput");

const VALID_USER = { userId: "andriyt", password: "andriyt002" };

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const userId = document.getElementById("userId").value.trim();
  const password = document.getElementById("password").value.trim();

  if (userId === VALID_USER.userId && password === VALID_USER.password) {
    loginMessage.textContent = "Login sukses. Selamat datang di KasirKu!";
    loginMessage.style.color = "#1b5e20";
    activeUser.textContent = userId;
    loginSection.classList.add("hidden");
    dashboardSection.classList.remove("hidden");
  } else {
    loginMessage.textContent = "User ID atau password salah.";
    loginMessage.style.color = "#c62828";
  }
});

cancelBtn.addEventListener("click", () => {
  loginForm.reset();
  loginMessage.textContent = "Input dibersihkan.";
  loginMessage.style.color = "#4f4f4f";
});

document.querySelectorAll(".menu-item > button").forEach((button) => {
  button.addEventListener("click", () => {
    const parent = button.parentElement;
    document.querySelectorAll(".menu-item").forEach((item) => {
      if (item !== parent) item.classList.remove("open");
    });
    parent.classList.toggle("open");
  });
});

document.querySelectorAll(".dropdown li").forEach((item) => {
  item.addEventListener("click", () => {
    featureOutput.innerHTML = `<h4>${item.textContent}</h4><p>Fitur ini siap dikembangkan pada modul backend/database.</p>`;
  });
});

const exitProgram = document.getElementById("exitProgram");
exitProgram.addEventListener("click", () => {
  dashboardSection.classList.add("hidden");
  loginSection.classList.remove("hidden");
  loginForm.reset();
  loginMessage.textContent = "Anda telah keluar dari program.";
  loginMessage.style.color = "#4f4f4f";
});

window.addEventListener("click", (event) => {
  if (!event.target.closest(".menu-item")) {
    document.querySelectorAll(".menu-item").forEach((item) => item.classList.remove("open"));
  }
});
