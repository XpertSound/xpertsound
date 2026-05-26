
// Feature cards hover effect
document.querySelectorAll('.feature').forEach(card=>{
  card.addEventListener('mouseenter', ()=>{
    card.style.boxShadow='0 0 25px rgba(255,215,0,.25)';
  });
  
  card.addEventListener('mouseleave', ()=>{
    card.style.boxShadow='none';
  });
});

// Contact form submission with FormSubmit
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  
  const formMessage = document.getElementById('formMessage');
  const submitButton = this.querySelector('button');
  
  // Disable button during submission
  submitButton.disabled = true;
  submitButton.textContent = 'Envoi en cours...';
  
  // Prepare form data
  const formData = new FormData(this);
  
  // Send form via FormSubmit.co (free service)
  fetch('https://formsubmit.co/ajax/babyrasta34@gmail.com', {
    method: 'POST',
    body: formData
  })
  .then(response => response.json())
  .then(data => {
    // Success
    formMessage.textContent = '✅ Message envoyé avec succès ! Nous vous contacterons bientôt.';
    formMessage.style.color = '#00ff00';
    document.getElementById('contactForm').reset();
    
    // Reset button
    submitButton.disabled = false;
    submitButton.textContent = 'Envoyer';
    
    // Clear message after 5 seconds
    setTimeout(() => {
      formMessage.textContent = '';
    }, 5000);
  })
  .catch(error => {
    // Error
    console.error('Erreur:', error);
    formMessage.textContent = '❌ Erreur lors de l\'envoi. Veuillez réessayer.';
    formMessage.style.color = '#ff0000';
    
    // Reset button
    submitButton.disabled = false;
    submitButton.textContent = 'Envoyer';
  });
});
