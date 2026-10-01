tailwind.config = {
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        heading: ["Outfit", "sans-serif"],
      },
      colors: {
        brand: {
          50: "#eef2ff",
          100: "#e0e7ff",
          500: "#6366f1",
          600: "#4f46e5",
          700: "#4338ca",
          900: "#312e81",
        },
        accent: {
          500: "#06b6d4",
          600: "#0891b2",
        },
      },
    },
  },
};

// WhatsApp Phone Number (Update with your own number)
const waNumber = "6281234567890";

// Dark/Light Theme Handler
const themeToggleBtn = document.getElementById("themeToggle");
const themeIcon = document.getElementById("themeIcon");

// Check stored theme preference or default to light
if (
  localStorage.getItem("color-theme") === "dark" ||
  (!("color-theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  document.documentElement.classList.add("dark");
  themeIcon.classList.replace("fa-moon", "fa-sun");
} else {
  document.documentElement.classList.remove("dark");
  themeIcon.classList.replace("fa-sun", "fa-moon");
}

themeToggleBtn.addEventListener("click", function () {
  if (document.documentElement.classList.contains("dark")) {
    document.documentElement.classList.remove("dark");
    localStorage.setItem("color-theme", "light");
    themeIcon.classList.replace("fa-sun", "fa-moon");
  } else {
    document.documentElement.classList.add("dark");
    localStorage.setItem("color-theme", "dark");
    themeIcon.classList.replace("fa-moon", "fa-sun");
  }
});

// WhatsApp Sender Helper
function sendWhatsApp(message) {
  const encodedText = encodeURIComponent(message);
  window.open(`https://wa.me/${waNumber}?text=${encodedText}`, "_blank");
}

// Modal Handlers
function openModal(title, description) {
  document.getElementById("modalTitle").innerText = title;
  document.getElementById("modalDescription").innerText = description;

  const modalWaBtn = document.getElementById("modalWaBtn");
  modalWaBtn.onclick = function () {
    sendWhatsApp(
      `Halo Nexus Tech, saya ingin informasi lebih lanjut mengenai: ${title}`,
    );
  };

  const modal = document.getElementById("infoModal");
  modal.classList.remove("hidden");
  modal.classList.add("flex");
}

function closeModal() {
  const modal = document.getElementById("infoModal");
  modal.classList.add("hidden");
  modal.classList.remove("flex");
}

// Close modal when clicking background
window.onclick = function (event) {
  const modal = document.getElementById("infoModal");
  if (event.target === modal) {
    closeModal();
  }
};
