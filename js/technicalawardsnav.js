function eventmenuContent(event){
    var x = event.id;
    var s = document.getElementById(x);
    s.style.borderBottom="2px solid #FCCB67";
    var y = x+"_content";
    var yh = x+"_heading";
    var z = document.getElementById(y);
    var zh = document.getElementById(yh);
    z.style.display="block";
    zh.style.display="block";
    var ms = x.charAt(0);
    var ns = document.getElementById(ms);
    ns.style.borderBottom="none"
    var m =  x.charAt(0)+"_content";
    var mh =  x.charAt(0)+"_heading";
    
    var n = document.getElementById(m);
    var nh = document.getElementById(mh);
    n.style.display="none";
    nh.style.display="none";
}
function teammenuContent(team){
    var x = team.id;
    var s = document.getElementById(x);
    s.style.borderBottom="2px solid #FCCB67";
    var y = x+"_content";
    var yh = x+"_heading";
    var z = document.getElementById(y);
    var zh = document.getElementById(yh);
    z.style.display="block";
    zh.style.display="block";
    var ms = x.charAt(0)+"e";
    var ns = document.getElementById(ms);
    ns.style.borderBottom="none"
    var m =  x+"e_content";
    var mh =  x+"e_heading";
    
    var n = document.getElementById(m);
    var nh = document.getElementById(mh);
    n.style.display="none";
    nh.style.display="none";
}
