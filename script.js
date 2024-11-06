document.getElementById('search').addEventListener('input', function() {
    const query = this.value.toLowerCase();
    const sections = document.querySelectorAll('section');

    sections.forEach(section => {
        const text = section.innerText.toLowerCase();
        if (text.includes(query)) {
            section.style.display = '';
        } else {
            section.style.display = 'none';
        }
    });
});
