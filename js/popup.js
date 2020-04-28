function popup(division) {
    var modal = document.getElementById(division.id+'_popup');
    
    modal.style.display = "block";

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}
