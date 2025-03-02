let email = "test@example.com"
//Ensures email address is correctly formatted
function isEmailValid(email) {
    return email.includes("@") && email.includes(".");
}
console.log(isEmailValid(email));

let n = 1231231234
//Ensures phone number is correctly formatted
function isPhoneNumberValid(n) {
    let stringn = n.toString()
    return typeof(n) == "number" && stringn.length >= 10;
}
console.log(isPhoneNumberValid(n));

let projects = ["E-commerce API", "Library Contact Management System", "Contact Management System"]
//Pick a random project based on the available projects
function pickRandomProject(projects) {
    let i = Math.floor(Math.random() * projects.length);
    return projects[i];
}
console.log(pickRandomProject(projects));

let messages = [];
//Store new messages in an array
function addNewMessage(message) {
    messages.push(message);
    return messages;
}
console.log(addNewMessage("Cool portfolio. Can't wait to see what new projects you add."));
console.log(addNewMessage("Nice portfolio. We should work together on a project!"));

let languages = ["Python", "Java", "HTML", "CSS", "SQL", "x86 Assembly"];
//Pick a random programming language from list of available langauges
function pickRandomCodingLanguage(languages) {
    let i = Math.floor(Math.random() * languages.length);
    return languages[i];
}
console.log(pickRandomCodingLanguage(languages))

//Open accordion tabs based on which card is clicked.
document.addEventListener("DOMContentLoaded", function() {
    const params = new URLSearchParams(window.location.search)
    const project = params.get("project");

    if (project) {
        const collapseElement = document.getElementById(`collapse${project}`);

        if (collapseElement) {
            const button = document.querySelector(`[data-bs-target="#collapse${project}"]`);
            if (button) {
                button.classList.remove("collapsed");
                button.setAttribute("aria-expanded", "true");
            }

            collapseElement.classList.add("show")
        }
    }
})