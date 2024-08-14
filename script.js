document.addEventListener('DOMContentLoaded', () => {
    const skillsTab = document.getElementById('skills-tab');
    const educationTab = document.getElementById('education-tab');
    const skillsContent = document.getElementById('skills-content');
    const educationContent = document.getElementById('education-content');

    skillsTab.addEventListener('click', () => {
        skillsTab.classList.add('active-link');
        educationTab.classList.remove('active-link');
        skillsContent.classList.add('active-tab');
        educationContent.classList.remove('active-tab');
    });

    educationTab.addEventListener('click', () => {
        educationTab.classList.add('active-link');
        skillsTab.classList.remove('active-link');
        educationContent.classList.add('active-tab');
        skillsContent.classList.remove('active-tab');
    });
});
