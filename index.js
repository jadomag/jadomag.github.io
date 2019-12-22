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

document.querySelectorAll('.year').forEach(function(node) {
    const now = new Date();
    node.textContent = now.getFullYear();
});

// ===============

function changeSection() {
    const id = window.location.hash.substr(1) || 'introduction';

    document.querySelectorAll('section').forEach(function(node) {
        node.style.display = null;
    });

    document.querySelectorAll('nav.navigation a').forEach(function(node) {
        node.style.textDecoration = 'none';
    });

    document.getElementById(id).style.display = 'block';
    document.getElementById('nav-' + id).style.textDecoration = 'underline';
}

// ===============

window.onload = function() {
    changeSection();
    window.addEventListener('hashchange', changeSection);
};
