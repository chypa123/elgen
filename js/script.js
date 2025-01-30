






//nav
document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-link");

  function setActiveLink() {
    let currentSection = "";

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      if (pageYOffset >= sectionTop - sectionHeight / 3) {
        currentSection = section.getAttribute("id");
      }
    });

    navLinks.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href").includes(currentSection)) {
        link.classList.add("active");
      }
    });
  }

  window.addEventListener("scroll", setActiveLink);
});







//скролл кнопка
function scrollToSection() {
  const targetSection = document.getElementById("services");
  if (targetSection) {
    targetSection.scrollIntoView({ behavior: "smooth" });
  }
}



//услуги мобильная версия

document.querySelectorAll('.block2__accordion-header').forEach((header) => {
    header.addEventListener('click', () => {
        header.classList.toggle('active');
        header.nextElementSibling.classList.toggle('active');
    });
});








///форма

const form = document.getElementById('contactForm');
const modalOverlay = document.getElementById('modalOverlay');
const closeModal = document.getElementById('closeModal');
const emailInput = document.getElementById('email');

if (!form || !modalOverlay || !closeModal || !emailInput) {
    console.error('Не удалось найти один или несколько элементов формы или модального окна.');
}

// Функция для проверки email
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

form.addEventListener('submit', async (e) => {
    e.preventDefault(); // Предотвращаем стандартное поведение формы

    // Проверяем валидацию email
    if (!isValidEmail(emailInput.value)) {
        emailInput.style.border = '2px solid rgb(224, 4, 4)';
        return;
    } else {
        emailInput.style.border = ''; 
    }

    try {
        const formData = new FormData(form);
        const response = await fetch('https://formspree.io/f/xpwwqdod', {
            method: 'POST',
            body: formData,
            headers: {
                Accept: 'application/json',
            },
        });

        if (response.ok) {
            form.reset();

            modalOverlay.style.display = 'block';
            document.body.classList.add('modal-open');
        } else {
            const errorData = await response.json();
            console.error('Ошибка при отправке формы:', errorData);
            alert('Ошибка при отправке формы. Проверьте правильность заполнения формы и подключение к интернету и повторите попытку.');
        }
    } catch (error) {
        console.error('Ошибка при отправке формы:', error);
        alert('Подтвердите действие.');
    }
});

closeModal.addEventListener('click', () => {
    closeModalWindow();
});
modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) {
        closeModalWindow();
    }
});
function closeModalWindow() {
    modalOverlay.style.display = 'none';
    document.body.classList.remove('modal-open'); // Разблокируем прокрутку страницы
}