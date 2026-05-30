function showSection(sectionId){
        // Hide all topic sections before showing the selected one.
        const sections = document.querySelectorAll('.content-section');
        const targetSection = document.getElementById(sectionId);

        if (!targetSection) {
            return;
        }

        sections.forEach(function(section){
            section.style.display = 'none';
        });

        targetSection.style.display = 'block';

        // Update the active topic button to match the visible section.
        const topicButtons = document.querySelectorAll('.topics .topic-btn');

        topicButtons.forEach(function(button) {
            button.classList.toggle('active-btn', button.dataset.section === sectionId);
        });
}

function nextSection(sectionId){
        // Reuse the same section switching function for Next and Back buttons.
        showSection(sectionId);
        scrollToTop();
}

function scrollToTop() {
    // Smoothly moves the user back to the top of the page.

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}
