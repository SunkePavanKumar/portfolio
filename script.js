function scrollToSection(sectionId) {
  var section = document.getElementById(sectionId);
  section.classList.toggle("end-container");

  window.scrollTo({
    top: section.offsetTop,
    behavior: "smooth",
  });
}
