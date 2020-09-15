function news(info) {
    // console.log(info.id);
    let number = info.id;
    let imgPath = document.getElementById(number+'_img');
    let date = document.getElementById(number+'_date');
    let month = document.getElementById(number+'_mon');
    let sdesc = document.getElementById(number+'_sdesc');
    let desc = document.getElementById(number+'_desc');
    // console.log(imgPath.src, date.innerHTML, month.innerHTML, sdesc.innerHTML, desc.innerHTML);

    // creating news
    let setImage = document.getElementById('setImg');
    let setDate = document.getElementById('setDate');
    let setMon = document.getElementById('setMon');
    let setSdesc = document.getElementById('setSdesc');
    let setDesc = document.getElementById('setDesc');
    setDate.innerHTML = date.innerHTML;
    setMon.innerHTML = month.innerHTML;
    setSdesc.innerHTML = sdesc.innerHTML;
    setDesc.innerHTML = desc.innerHTML;
    setImage.src =  imgPath.src;
}