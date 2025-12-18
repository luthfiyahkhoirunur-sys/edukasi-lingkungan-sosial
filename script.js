function login() {
    const user = document.getElementById("username").value;
    const pass = document.getElementById("password").value;

    // Username & password sederhana
    if (user === "remaja" && pass === "sehat123") {
        localStorage.setItem("login", "true");
        window.location.href = "home.html";
    } else {
        document.getElementById("error").innerText = "❌ Username atau password salah!";
    }
}

function logout() {
    localStorage.removeItem("login");
    window.location.href = "index.html";
}

// Proteksi halaman
if (window.location.pathname.includes("home.html")) {
    if (localStorage.getItem("login") !== "true") {
        window.location.href = "index.html";
    }
}
