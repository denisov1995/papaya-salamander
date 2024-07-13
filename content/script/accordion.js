function initializeAccordionAndPagination(
  titleSelector,
  itemSelector,
  contentHiddenSelector,
  toggleIconSelector,
  visibleContentSelector,
  paginationLabelSelector,
  prevButtonSelector,
  nextButtonSelector,
  itemsPerPage
) {
  document.addEventListener('DOMContentLoaded', function () {
    const items = document.querySelectorAll(itemSelector);

    items.forEach(function (item) {
      item.addEventListener('click', function () {
        const hiddenContent = item.querySelector(contentHiddenSelector);
        const visibleContent = item.querySelector(visibleContentSelector);
        const icon = item.querySelector(toggleIconSelector);

        if (hiddenContent) hiddenContent.classList.toggle('open');
        if (visibleContent) visibleContent.classList.toggle('hide');
        if (icon) icon.classList.toggle('rotate-180');
      });
    });

    const totalPages = Math.ceil(items.length / itemsPerPage);
    let currentPage = 1;

    const paginationLabel = document.querySelector(paginationLabelSelector);
    const prevButton = document.querySelector(prevButtonSelector);
    const nextButton = document.querySelector(nextButtonSelector);

    function updatePagination() {
      items.forEach((item, index) => {
        const start = (currentPage - 1) * itemsPerPage;
        const end = currentPage * itemsPerPage;
        const hiddenContent = item.querySelector(contentHiddenSelector);
        const visibleContent = item.querySelector(visibleContentSelector);
        const icon = item.querySelector(toggleIconSelector);

        if (index >= start && index < end) {
          item.style.display = '';
          // Дополнительно закрываем аккордеоны при переключении страниц
          if (hiddenContent && hiddenContent.classList.contains('open')) {
            hiddenContent.classList.remove('open');
          }
          if (visibleContent && visibleContent.classList.contains('hide')) {
            visibleContent.classList.remove('hide');
          }
          if (icon && icon.classList.contains('rotate-180')) {
            icon.classList.remove('rotate-180');
          }
        } else {
          item.style.display = 'none';
        }
      });

      paginationLabel.textContent = `${currentPage}/${totalPages}`;
      prevButton.disabled = currentPage === 1;
      nextButton.disabled = currentPage === totalPages;
    }

    function scrollToTitle() {
      setTimeout(() => {
        const titleElement = document.querySelector(titleSelector);
        if (titleElement) {
          const blockPosition =
            titleElement.getBoundingClientRect().top + window.pageYOffset - 64;
          window.scrollTo({ top: blockPosition, behavior: 'smooth' });
        }
      }, 100);
    }

    prevButton.addEventListener('click', () => {
      if (currentPage > 1) {
        currentPage -= 1;
        updatePagination();
      }
      scrollToTitle();
    });

    nextButton.addEventListener('click', () => {
      if (currentPage < totalPages) {
        currentPage += 1;
        updatePagination();
      }
      scrollToTitle();
    });

    updatePagination();
  });
}

// Использование функции для faq
initializeAccordionAndPagination(
  '.faq .h2-base-title',
  '.faq-item',
  '.faq-item-content-hidden',
  '.toggle-icon',
  '.faq-item-content-visible',
  '.faq-pagination-label',
  '.faq-pagination-prev-button',
  '.faq-pagination-next-button',
  4
);

// Использование функции для review
initializeAccordionAndPagination(
  '.review .h2-base-title',
  '.review-item',
  '.review-item-content-hidden',
  '.toggle-icon',
  '.review-item-content-visible',
  '.review-pagination-label',
  '.review-pagination-prev-button',
  '.review-pagination-next-button',
  5
);