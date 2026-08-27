document.querySelectorAll(".accordion-header").forEach(button => {
  button.addEventListener("click", () => {
    const accordion = button.closest(".accordion");
    const item = button.parentElement;

    // Закрываем все вопросы, кроме текущего
    accordion.querySelectorAll(".accordionItem").forEach(i => {
      if (i !== item) i.classList.remove("active");
    });

    // Переключаем текущий
    item.classList.toggle("active");
  });
});