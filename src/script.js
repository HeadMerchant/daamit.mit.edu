var galleryInfo = [ info("Bowen Wu", "A Rest at Dirtmouth", "A Rest at Dirtmouth"), info("Brinley Zhao", "Clouds and Light", "Clouds and Light"), info("Skylar Larsen", "Seasons in Moominvalley", "Seasons in Moominval"), info("Aria Kydd", "Eclipse (WIP)", "Eclipse (WIP)"), info("DAAMIT Discord Server", "Google Jamboard<br/>Prompt: Cat", "Google Jamboard - Cats"), info("Raphi Kang", "March 2020 Challenge<br class='dash-break'/>Design a Possible Sticker for DAAMIT", "3/2020 - CPW Swag"), info("Bowen Wu", "December 2019 Challenge<br class='dash-break'/>Secret Santa", "12/2019 - Secret Santa"), info("Amani Toussaint", "October 2019 Challenge<br class='dash-break'/>Short GIF", "10/2019 - Short GIF"), info("Bowen Wu", "October 2019 Challenge<br class='dash-break'/>Short GIF", "10/2019 - Short GIF"), info("MITAG Members", "Shen Comix Meetup", "Shen Comix Meetup"), info("MITAG Members", "Shen Comix Collab", "Shen Comix Collab"), info("MITAG Members", "September 2019 - First Meeting", "9/2019 - First Meeting")]; function info(artist, description, shortDesc){return {artist, description, shortDesc};};//Replaced by deploy script
//First line will be deleted
/*Info format is:
    {artist, description, shortDesc}
*/
var screenSizeQuery = window.matchMedia("(max-width: 768px)");
screenSizeQuery.addListener(function(query){
    if(query.matches){
        hideModal();
    }
});
var modal;
var modalDisplay;
var modalInfo;
var galleryOverlay;
var galleryInfoDisplay;
function onload(){
    modal = document.getElementById("modal");
    modalDisplay = document.getElementById("piece");
    modalInfo = document.getElementById("modal-info");
    galleryOverlay = document.getElementById("gallery-overlay");
    galleryInfoDisplay = document.getElementsByClassName("gallery-info")[0];
    document.getElementById("exec").scrollLeft = 40;
}

function showModal(content, galleryId){
    content = content.cloneNode(true);
    content.onclick = null;
    content.classList.remove("gallery-media");
    modalDisplay.appendChild(content);
    var info = galleryInfo[galleryId];
    // modalInfo.innerHTML = `${info.description}<br/>Artist: ${info.artist}`;
    modalInfo.innerHTML = `${info.shortDesc}<br/><b>${info.artist}</b>`;
    // infoDisplay.innerHTML = `${info.shortDesc}<br/><b>${info.artist}</b>`;
    modal.classList.add("modal");
}
function showOverlay(content, galleryId){
    // return;
    // console.log(content.onmouseenter);
    content.onmouseenter = null;
    var overlay = galleryOverlay.cloneNode(true);
    overlay.style.display = "block";
    var infoDisplay = overlay.firstElementChild;
    content.appendChild(overlay);
    var info = galleryInfo[galleryId];
    infoDisplay.innerHTML = `${info.shortDesc}<br/><b>${info.artist}</b>`;

    content.onclick = function(){
        if(!screenSizeQuery.matches){
            showModal(content.querySelector(".gallery-media"), galleryId);
        }
    };

    setTimeout(function(){
        overlay.style.animation = "none";
    }, 200);
    // }
    // modalInfo.innerHTML = `${info.description}<br/>Artist: ${info.artist}`;
}
function hideModal(){
    modalDisplay.textContent = "";
    modal.classList.remove("modal");
};
window.addEventListener("click", function(e){
    if(e.target == modal){
        hideModal();
    }
});
window.addEventListener("keydown", hideModal);
// window.addEventListener("scroll", function(){
//     if (window.pageYOffset > window.innerHeight) {
//         navbar.classList.add("sticky");
//     } else {
//         navbar.classList.remove("sticky");
//     }
// });