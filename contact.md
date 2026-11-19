---
layout: default
title: Contact
---

<h1>Contact Us</h1>
<p>Have a question or want to book? Call or text us, or send a message and we'll get back within one business day.</p>

<form id="contactForm" action="https://docs.google.com/forms/d/e/1FAIpQLSdtMO5sESq5836ATUILd2o1pA0yd1CJCobk0QyuVaQsNpuUCQ/formResponse" method="POST" target="hidden_iframe">
  <div class="row">
    <label>Full Name
      <input type="text" name="entry.1675126686" required/>
    </label>
    <label>Email
      <input type="email" name="entry.2002261052" required/>
    </label>
  </div>
  <label>Phone (optional)
    <input type="tel" name="entry.1073576280"/>
  </label>
  <label>How can we help?
    <textarea name="entry.1109910716" rows="6" required></textarea>
  </label>
  <p><button class="btn" type="submit">Send Message</button></p>
  <p class="caption">Prefer email or phone? <a href="mailto:sunnyside@headlinework.com">sunnyside@headlinework.com</a> · <a href="tel:+16785613435">(678) 561-3435</a></p>
</form>
<iframe name="hidden_iframe" style="display:none"></iframe>

<script>
var submitted = false;
document.getElementById('contactForm').addEventListener('submit', function(){
  submitted = true;
});
document.querySelector('iframe[name="hidden_iframe"]').addEventListener('load', function(){
  if (submitted) {
    submitted = false;
    alert("Thanks! Your message has been sent — we'll get back within one business day.");
    document.getElementById('contactForm').reset();
  }
});
</script>
