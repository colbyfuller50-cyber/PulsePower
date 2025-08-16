
(function(){
  function ready(fn){ if(document.readyState!='loading'){fn()} else {document.addEventListener('DOMContentLoaded', fn)} }
  ready(function(){
    var form = document.getElementById('contactForm');
    if(!form) return;
    var status = document.getElementById('form-status');
    var id = (window.FS_FORM_ID||'').trim();

    if(!id){
      status.innerText = "Admin setup required: add your Formspree ID in config.js (window.FS_FORM_ID).";
      status.style.color = "#B45309";
      form.addEventListener('submit', function(e){ e.preventDefault(); alert('Please add your Formspree ID in config.js'); });
      return;
    }

    var endpoint = "https://formspree.io/f/" + encodeURIComponent(id);
    form.addEventListener('submit', function(e){
      e.preventDefault();
      status.textContent = "Sending...";
      var data = new FormData(form);
      fetch(endpoint, { method:'POST', body:data, headers: { 'Accept':'application/json' } })
        .then(function(res){ return res.json().catch(function(){ return {} }) })
        .then(function(json){
          if(json.ok !== false){
            status.textContent = "Thanks! Your message has been sent.";
            status.style.color = "#16a34a";
            form.reset();
          } else {
            status.textContent = (json.errors && json.errors.length) ? json.errors[0].message : "Something went wrong. Please try again.";
            status.style.color = "#B45309";
          }
        })
        .catch(function(){
          status.textContent = "Network error. Please try again.";
          status.style.color = "#B45309";
        });
    });
  });
})();
