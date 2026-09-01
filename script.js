/* =========================================
   L'APPARTEMENT
   Основной JavaScript
   ========================================= */
/* ---------- ПЛАВНАЯ НАВИГАЦИЯ ---------- */
// Находим все ссылки, которые ведут
// на определённый раздел этой страницы
const links = document.querySelectorAll('a[href^="#"]');
links.forEach(function (link) {
    link.addEventListener("click", function (event) {
        // Отменяем стандартное поведение ссылки
        event.preventDefault();
        // Получаем ID раздела
        const targetId = link.getAttribute("href");
        // Находим этот раздел на странице
        const target = document.querySelector(targetId);
        // Если раздел существует —
        // плавно прокручиваем к нему
        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});
/* ---------- АНИМАЦИЯ ПОЯВЛЕНИЯ ---------- */
// Находим все основные блоки страницы
const sections = document.querySelectorAll("section");
/*
   IntersectionObserver следит за тем,
   когда элемент появляется на экране.
*/
const observer = new IntersectionObserver(
    function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    },
    {
        threshold: 0.15
    }
);
// Начинаем следить за каждым разделом
sections.forEach(function (section) {
    observer.observe(section);
});
/* ---------- АНИМАЦИЯ КАРТОЧЕК ТОВАРОВ ---------- */
const products = document.querySelectorAll("article");
const productObserver = new IntersectionObserver(
    function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add("product-visible");
            }
        });
    },
    {
        threshold: 0.2
    }
);
products.forEach(function (product) {
    productObserver.observe(product);
});
/* ---------- СООБЩЕНИЕ В КОНСОЛИ ---------- */
// Это просто для проверки,
// что JavaScript успешно подключён.
console.log("L’APPARTEMENT website loaded");
