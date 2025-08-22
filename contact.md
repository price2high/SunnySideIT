---
layout: default
title: Contact
---

<h1>Contact Us</h1>
<p>Have a question or want to book? Send a message and we’ll get back within one business day.</p>

<form id="contactForm" action="https://formspree.io/f/your-id" method="POST">
  <div class="row">
    <label>Full Name
      <input type="text" name="name" required/>
    </label>
    <label>Email
      <input type="email" name="email" required/>
    </label>
  </div>
  <label>Phone (optional)
    <input type="tel" name="phone"/>
  </label>
  <label>How can we help?
    <textarea name="message" rows="6" required></textarea>
  </label>
  <input type="hidden" name="_subject" value="New inquiry from Easy Tech Seniors"/>
  <p><button class="btn" type="submit">Send Message</button></p>
  <p class="caption">Prefer email or phone? <a href="mailto:timorrarogo@gmail.com">timorrarogo@gmail.com</a> · (404)913-5691</p>
</form>

<script>
document.getElementById('contactForm').addEventListener('submit', function(e){
  // Let the form post to Formspree normally; this is just an accessible confirmation for no‑JS fallback
  setTimeout(function(){
    alert('Thanks! If you don\'t see a confirmation, we\'ll still receive your message.');
  }, 50);
});
</script>
