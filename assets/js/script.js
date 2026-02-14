'use strict';



// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }



// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });



// testimonials variables
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// modal variable
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

// modal toggle function
const testimonialsModalFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
}

// add click event to all modal items
for (let i = 0; i < testimonialsItem.length; i++) {

  testimonialsItem[i].addEventListener("click", function () {

    modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
    modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
    modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
    modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;

    testimonialsModalFunc();

  });

}

// add click event to modal close button
modalCloseBtn.addEventListener("click", testimonialsModalFunc);
overlay.addEventListener("click", testimonialsModalFunc);



// project detail variables
const projectItems = document.querySelectorAll("[data-project-item]");
const projectLinks = document.querySelectorAll("[data-project-link]");
const projectListView = document.querySelector(".project-list-view");
const projectDetailView = document.querySelector("[data-project-detail]");
const backToProjectsBtn = document.querySelector("[data-back-to-projects]");

// show project detail
const showProjectDetail = function (item) {
  const title = item.dataset.projectTitle;
  const image = item.dataset.projectImage;
  const category = item.dataset.projectCategory;
  const description = item.dataset.projectDescription;
  const liveUrl = item.dataset.projectLive || "#";
  const sourceUrl = item.dataset.projectSource || "#";

  document.querySelector("[data-detail-title]").textContent = title;
  document.querySelector("[data-detail-image]").src = image;
  document.querySelector("[data-detail-image]").alt = title;
  document.querySelector("[data-detail-category]").textContent = category;
  const descriptionEl = document.querySelector("[data-detail-description]");
  const descText = description || "";
  descriptionEl.innerHTML = descText.replace(/\n/g, "<br>");
  document.querySelector("[data-detail-live]").href = liveUrl;
  document.querySelector("[data-detail-source]").href = sourceUrl;

  projectListView.style.display = "none";
  projectDetailView.removeAttribute("hidden");
};

// hide project detail
const hideProjectDetail = function () {
  projectDetailView.setAttribute("hidden", "");
  projectListView.style.display = "";
};

// add click event to project items
for (let i = 0; i < projectItems.length; i++) {
  projectLinks[i].addEventListener("click", function (e) {
    e.preventDefault();
    showProjectDetail(projectItems[i]);
  });
}

// add click event to back button
backToProjectsBtn.addEventListener("click", function (e) {
  e.preventDefault();
  hideProjectDetail();
});



// certificate detail variables
const certificateItems = document.querySelectorAll("[data-certificate-item]");
const certificateLinks = document.querySelectorAll("[data-certificate-link]");
const certificateListView = document.querySelector(".certificate-list-view");
const certificateDetailView = document.querySelector("[data-certificate-detail]");
const backToCertificatesBtn = document.querySelector("[data-back-to-certificates]");

// show certificate detail
const showCertificateDetail = function (item) {
  const title = item.dataset.certificateTitle;
  const image = item.dataset.certificateImage;
  const description = item.dataset.certificateDescription;

  const detailContainer = document.querySelector("[data-certificate-detail]");
  detailContainer.querySelector("[data-cert-detail-title]").textContent = title;
  const detailImg = detailContainer.querySelector("[data-cert-detail-image]");
  detailImg.src = image;
  detailImg.alt = title;
  const descriptionEl = detailContainer.querySelector("[data-cert-detail-description]");
  if (descriptionEl) {
    const descText = description || "";
    descriptionEl.innerHTML = descText.replace(/\n/g, "<br>");
  }

  certificateListView.style.display = "none";
  certificateDetailView.removeAttribute("hidden");
};

// hide certificate detail
const hideCertificateDetail = function () {
  certificateDetailView.setAttribute("hidden", "");
  certificateListView.style.display = "";
};

// add click event to certificate items
for (let i = 0; i < certificateItems.length; i++) {
  certificateLinks[i].addEventListener("click", function (e) {
    e.preventDefault();
    showCertificateDetail(certificateItems[i]);
  });
}

// add click event to back button
backToCertificatesBtn.addEventListener("click", function (e) {
  e.preventDefault();
  hideCertificateDetail();
});



// contact form variables (optional - form may be replaced with contact details)
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

if (form && formBtn) {
  for (let i = 0; i < formInputs.length; i++) {
    formInputs[i].addEventListener("input", function () {
      if (form.checkValidity()) {
        formBtn.removeAttribute("disabled");
      } else {
        formBtn.setAttribute("disabled", "");
      }
    });
  }
}



// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {

    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }

  });
}