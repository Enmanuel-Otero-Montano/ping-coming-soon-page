const email = document.getElementById("email")
const button = document.getElementById("submitbutton")
const error = document.getElementById("error-message")

const regexpEmail = /^(([^<>()\[\]\\.,:\s@"]+(\.[^<>()\[\]\\.,:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

button.addEventListener("click", (e) => {
    if (!regexpEmail.test(email.value)) {
        e.preventDefault("submit")
        email.classList.add("invalid")
        error.classList.remove("hidden")
    }
})

email.addEventListener("change", () => {
    if (regexpEmail.test(email.value)) {
        email.classList.remove("invalid")
        error.classList.add("hidden")
    }
})