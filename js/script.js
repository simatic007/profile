/**
 * Created by simatic on 12.04.17.
 */

(function() {
    var toggle = document.querySelector("#flexy-nav__toggle");
    var nav = document.querySelector(".main__menu--list");
    toggle.addEventListener("click", function(e) {
        e.preventDefault();
        /*nav.classList.contains("flexy-nav__items--visible") ? nav.classList.remove("flexy-nav__items--visible") : nav.classList.add("flexy-nav__items--visible");*/
        console.log(nav.style.display);
        if(nav.style.display != "flex"){
            nav.style.display="flex";
            nav.style.flexDirection="column";}
        else nav.style.display = "none";


    });
})();