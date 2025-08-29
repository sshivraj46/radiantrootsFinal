// Popup CSS
window.onload = function() {
    document.getElementById('popupbox').style.display = 'flex';
    document.getElementById('overlay').style.display = 'block';
    document.getElementById('mainContent').classList.add('blur');
}

// Close popup and remove blur
 function closePopup() {
     document.getElementById('popupbox').style.display = 'none';
     document.getElementById('overlay').style.display = 'none';
     document.getElementById('mainContent').classList.remove('blur');
 }

// Popup End
