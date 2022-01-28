function detect404() {
  if (document.title.includes('404')) {
    const p = ['home', 'space', 'house', 'company', 'inquiry'].find((c) =>
      location.pathname.includes(c)
    )
    if (p) {
      location.replace(`/?from=${c}`)
    }
  }
}

if (document.readyState === 'complete') {
  detect404()
} else if (window.attachEvent) {
  window.attachEvent('onload', detect404())
} else {
  window.addEventListener('DOMContentLoaded', detect404(), false)
  window.addEventListener('load', detect404(), false)
}
