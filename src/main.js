import "./scss/main.scss";

document.querySelector("#app").innerHTML = `

    <header>
        <nav>
            <h1 class="logo">My Services</h1>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    </header>

    <main>

        <section id="home" class="hero">
          <div class="container">
              <p class="hero-eyebrow">WEB DESIGN & DEVELOPMENT</p>
              <h2>Professional Web Services</h2>
              <p class="hero-subtitle">I build modern and responsive websites.</p>
              <a class="hero-button" href="#contact">Get in touch</a>
          </div>
        </section>

        <section id="services" class="services">
            <div class="container">

                <h2>My Services</h2>

                <article>
                    <h3>Web Design</h3>
                    <p>Modern and responsive website design.</p>
                </article>

                <article>
                    <h3>Frontend Development</h3>
                    <p>Interactive interfaces using modern technologies.</p>
                </article>

                <article>
                    <h3>Web Applications</h3>
                    <p>Functional web applications tailored to your needs.</p>
                </article>

            </div>
        </section>

        <section id="contact" class="contact">

            <h2>Contact Me</h2>

            <p>Let's discuss your project.</p>

            <form novalidate>

                <label for="name">Name</label>
                <input type="text" id="name" name="name" required>

                <label for="email">Email</label>
                <input type="email" id="email" name="email" required>

                <label for="message">Message</label>
                <textarea id="message" name="message" required></textarea>

                <button type="submit">Send Message</button>

                <p class="form-message"></p>

            </form>

        </section>

    </main>

    <footer>
        <p>&copy; 2026 My Services</p>
    </footer>

`;

const form = document.querySelector(".contact form");
const formMessage = document.querySelector(".form-message");

const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const messageInput = document.querySelector("#message");

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// const inputFields = ["nameInput", "emailInput", "messageInput"]

function showMessage(message, type) {
  formMessage.textContent = message;

  formMessage.classList.remove("success", "error");
  formMessage.classList.add(type);
}

function clearInput(input) {
  input.value = "";
}

function clearErrors() {
  nameInput.classList.remove("error");
  emailInput.classList.remove("error");
  messageInput.classList.remove("error");
}

function clearMessage() {
  formMessage.textContent = "";
  formMessage.classList.remove("success", "error");
}

form.addEventListener("submit", function (event) {
  event.preventDefault();

  clearErrors();

  if (nameInput.value === "") {
    nameInput.classList.add("error");
    showMessage("Please enter your name.", "error");
    return;
  }

  if (emailInput.value === "") {
    emailInput.classList.add("error");
    showMessage("Please enter your email.", "error");
    return;
  }

  if (!emailPattern.test(emailInput.value)) {
    emailInput.classList.add("error");
    showMessage("Please enter a valid email address.", "error");
    return;
  }

  if (messageInput.value === "") {
    messageInput.classList.add("error");
    showMessage("Please enter your message.", "error");
    return;
  }

  showMessage("Thank you! Your message has been received.", "success");

  // formMessage.textContent = "Thank you! Your message has been received.";

//   inputFields.forEach((inputField) => {
//     clearInput(inputField);
//   });

  // clearInput(nameInput);
  // clearInput(emailInput);
  // clearInput(messageInput);
  form.reset();

  console.log(form);
});

nameInput.addEventListener("input", function () {
  nameInput.classList.remove("error");
  clearMessage();
});

emailInput.addEventListener("input", function () {
  emailInput.classList.remove("error");
  clearMessage();
});

messageInput.addEventListener("input", function () {
  messageInput.classList.remove("error");
  clearMessage();
});

