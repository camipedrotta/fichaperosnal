function setTheme(theme) {
    const body = document.body;

    if (theme === "dark") {
        body.classList.add("dark-mode");
    } else {
        body.classList.remove("dark-mode");
    }

    localStorage.setItem("theme", theme);

    const toggleBtn = document.getElementById("theme-toggle");
    if (toggleBtn) {
        toggleBtn.textContent = theme === "dark" ? "☀" : "☾";
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);

    const toggleBtn = document.getElementById("theme-toggle");
    if (toggleBtn) {
        toggleBtn.addEventListener("click", function () {
            const newTheme = document.body.classList.contains("dark-mode")
                ? "light"
                : "dark";
            setTheme(newTheme);
        });
    }

    const form = document.getElementById("contact-form");
    if (form) {
        const nameInput = document.getElementById("name");
        const ageInput = document.getElementById("age");
        const emailInput = document.getElementById("email");
        const messageInput = document.getElementById("message");

        const nameError = document.getElementById("name-error");
        const ageError = document.getElementById("age-error");
        const emailError = document.getElementById("email-error");
        const messageError = document.getElementById("message-error");

        form.addEventListener("submit", function (e) {
            e.preventDefault();
            let hasError = false;

            [nameError, ageError, emailError, messageError].forEach(function (el) {
                el.textContent = "";
            });

            if (!nameInput.value.trim()) {
                nameError.textContent = "Este campo es obligatorio.";
                hasError = true;
            }

            const ageValue = ageInput.value.trim();
            if (!ageValue) {
                ageError.textContent = "Ingresá tu edad.";
                hasError = true;
            } else if (!/^\d+$/.test(ageValue) || Number(ageValue) <= 0) {
                ageError.textContent = "La edad debe ser un número válido.";
                hasError = true;
            }

            const emailValue = emailInput.value.trim();
            if (!emailValue) {
                emailError.textContent = "El email es obligatorio.";
                hasError = true;
            } else {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(emailValue)) {
                    emailError.textContent = "Ingresá un email válido (debe incluir @).";
                    hasError = true;
                }
            }

            if (!messageInput.value.trim()) {
                messageError.textContent = "Escribí un comentario.";
                hasError = true;
            }

            if (!hasError) {
                window.location.href = "gracias.html";
            }
        });

        const clearBtn = document.getElementById("clear-btn");
        if (clearBtn) {
            clearBtn.addEventListener("click", function () {
                form.reset();
                [nameError, ageError, emailError, messageError].forEach(function (el) {
                    el.textContent = "";
                });
            });
        }
    }
})