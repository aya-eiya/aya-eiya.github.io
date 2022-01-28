window.fbAsyncInit = function () {
  FB.init({
    xfbml: true,
    version: 'v12.0',
  })
}
;(function (d, s, id) {
  const fjs = d.getElementsByTagName(s)[0]
  if (d.getElementById(id)) return
  const js = d.createElement(s)
  js.id = id
  js.src = 'https://connect.facebook.net/ja_JP/sdk/xfbml.customerchat.js'
  fjs.parentNode.insertBefore(js, fjs)
})(document, 'script', 'facebook-jssdk')

function initChat() {
  const chatbox = document.getElementById('fb-customer-chat')
  chatbox.setAttribute('page_id', '108626034797881')
  chatbox.setAttribute('attribution', 'biz_inbox')
}
if (document.readyState === 'complete') {
  initChat()
} else if (window.attachEvent) {
  window.attachEvent('onload', initChat)
} else {
  window.addEventListener('DOMContentLoaded', initChat, false)
  window.addEventListener('load', initChat, false)
}
