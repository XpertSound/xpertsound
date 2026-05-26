
document.querySelectorAll('.feature').forEach(card=>{
card.addEventListener('mouseenter', ()=>{
card.style.boxShadow='0 0 25px rgba(255,215,0,.25)';
});

card.addEventListener('mouseleave', ()=>{
card.style.boxShadow='none';
});
});
