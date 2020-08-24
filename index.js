document.querySelectorAll('.years').forEach(function(node) {
  const now = new Date()
  const date = new Date(node.getAttribute('data-date'))
  const millisInYear = 1000 * 60 * 60 * 24 * 365
  const years = (now - date) / millisInYear
  node.textContent = Math.floor(years)
})

document.querySelectorAll('.js-only').forEach(function(node) {
  node.style.display = 'initial'
})

document.querySelectorAll('.js-alt').forEach(function(node) {
  node.textContent = node.getAttribute('alt') 
})

// ===============

function changeSection() {
  for (const node of document.getElementsByTagName('section')) {
    node.style.display = 'none'
  }

  let section
  if (window.location.hash) {
    const id = window.location.hash.substr(1) || 'introduction'
    section = document.getElementById(id)
  }

  if (section && section.nodeName === 'SECTION') {
    document.querySelectorAll('header nav a').forEach(function(node) {
      node.classList.remove('active')
    })

    section.style.display = 'block'

    const nav = document.getElementById('nav-' + section.id)
    nav.classList.add('active')
  } else {
    window.location.hash = '#introduction'
    changeSection()
  }
}

changeSection()

// ===============

window.onload = function() {
  window.addEventListener('hashchange', changeSection)
}
