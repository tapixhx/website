function ifmanage(management){
   
    if(document.getElementById('manage').style.display == 'none'){
      document.getElementById('manage').style.display = 'block';
      document.getElementById('func').style.display = 'none';
    }
    if(document.getElementById('manage-underline').style.display == 'none'){
        document.getElementById('manage-underline').style.display = 'block';
        document.getElementById('func-underline').style.display = 'none';
    }
    if(document.getElementById('manage-head').style.opacity == '0.7'){
        document.getElementById('manage-head').style.opacity = '1';
        document.getElementById('func-head').style.opacity = '0.7';
    }
}

function iffunc(functionary){
    
    if(document.getElementById('func').style.display == 'none') {
        document.getElementById('func').style.display = 'block';
        document.getElementById('manage').style.display = 'none';
    }
    if(document.getElementById('func-underline').style.display == 'none') {
        document.getElementById('func-underline').style.display = 'block';
        document.getElementById('manage-underline').style.display = 'none';
    }
    if(document.getElementById('func-head').style.opacity == '0.7') {
        document.getElementById('func-head').style.opacity = '1';
        document.getElementById('manage-head').style.opacity = '0.7';
    }
  }