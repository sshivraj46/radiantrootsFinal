// Popup CSS
window.onload = function() {
    document.getElementById('popupbox').style.display = 'block';
    document.getElementById('overlay').style.display = 'block';
    document.getElementById('mainContent').classList.add('blur');
}

// Close popup and remove blur
 function closePopup() {
     document.getElementById('popupbox').style.display = 'none';
     document.getElementById('overlay').style.display = 'none';
     document.getElementById('mainContent').classList.remove('blur');
 }

/* Why Radiant Root Section*/
 function fun1(val) {
            var e1 = document.getElementById('WRR1');
            var e2 = document.getElementById('WRR2');
            if (val) {
                e1.classList.add('active-section');
                document.getElementById('op1').style.backgroundColor="#a00d3a";
                e2.classList.remove('active-section');
                document.getElementById('op2').style.backgroundColor="#ed1354";
            } 
            else {
                e1.classList.remove('active-section');
                document.getElementById('op1').style.backgroundColor="#ed1354";
                e2.classList.add('active-section');
                document.getElementById('op2').style.backgroundColor="#a00d3a";
            }
}
