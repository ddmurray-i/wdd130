const guestForm = document.getElementById('guestForm'); 
const guestList = document.getElementById('guestList'); 
  
guestForm.addEventListener('submit', function (e) { 
    e.preventDefault(); 
  
    const Name = document.getElementById('name').value; 
    const Message = document.getElementById('message').value; 
  
    const guestCard = document.createElement('div'); 
    guestCard.classList.add('guest-card'); 
    guestCard.innerHTML = ` 
                <h2>${Name}</h2> 
                <p><strong>Message:</strong> ${Message}</p> `; 
  
    guestList.appendChild(guestCard); 
  
    guestForm.reset(); 
});