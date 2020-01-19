document.querySelectorAll('.years').forEach(function(node) {
    const now = new Date(),
          date = new Date(node.getAttribute('data-date'));

    let duration = now.getFullYear() - date.getFullYear();

    if (now.getMonth() <= date.getMonth()) {
        if (now.getDate() < date.getDate()) {
            duration--;
        }
    }

    node.textContent = duration;
});

// ===============

function changeSection() {
    const id = window.location.hash.substr(1) || 'introduction';

    let section = document.getElementById(id);

    if (section && section.nodeName === 'SECTION') {
        document.querySelectorAll('section').forEach(function(node) {
            node.style.display = null;
        });

        document.querySelectorAll('header nav a').forEach(function(node) {
            node.classList.remove('active');
        });

        section.style.display = 'block';
        document.getElementById('nav-' + id).classList.add('active');
    }
}

// ===============

window.onload = function() {
    if (!window.location.hash) {
        window.location = "#introduction";
    }

    changeSection();
    window.addEventListener('hashchange', changeSection);
};
