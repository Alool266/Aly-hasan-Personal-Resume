const navLinks = document.querySelectorAll('.link');
const sections = document.querySelectorAll('section');

let activeLinkIndex = 0;

function deactivateLinkAndSection() {
  const { classList } = navLinks[activeLinkIndex];
  classList.remove('active');
  const { classList: sectionClassList } = sections[activeLinkIndex];
  sectionClassList.remove('active');
}

navLinks.forEach((link, i) => {
  link.addEventListener('click', () => {
    if (activeLinkIndex !== i) {
      deactivateLinkAndSection();
      link.classList.add('active');
      sections[i].classList.add('active');
      activeLinkIndex = i;
    }
  });
});
