function removeStyle() {
    var ugras_a = document.getElementById("ugras");
    if (ugras_a !== null) {
      ugras_a.classList.remove("kipozicional");
    }
    
  
    var nev_a = document.getElementById("nev");
    if (nev_a !== null) {
    nev_a.classList.add("hide");
    }
  
    var nav_links = document.querySelectorAll(".nav-link");
    if (nav_links !== null) {
      [].forEach.call(nav_links, function(el) {
        el.classList.remove("nav-link");
        el.classList.add("linkek-fent")
    });
    }
  
    var footer_links = document.querySelectorAll(".mx-auto");
    if (footer_links !== null) {
      [].forEach.call(footer_links, function(el) {
        el.classList.remove("mx-auto");
        el.classList.remove("navbar-brand");
        el.classList.add("linkek-lent");
    });
    }
    var jelenlegi_a = document.getElementById("jelenlegi");
    if (jelenlegi_a !== null) {
    jelenlegi_a.classList.remove("nav-link");
    jelenlegi_a.classList.remove("disabled");
    }
    var coll = document.getElementById("navbarNavAltMarkup");
    if (coll !== null) {
    coll.classList.remove("collapse");
    coll.classList.remove("navbar-collapse");
    }
    var tablazat_vilagos = document.getElementById("tablazat-vilagos");
    if (tablazat_vilagos !== null) {
    tablazat_vilagos.classList.remove("table");
    tablazat_vilagos.classList.remove("table-striped");
    }
    var tablazat_sotet = document.getElementById("tablazat-sotet");
    if (tablazat_sotet !== null) {
    tablazat_sotet.classList.remove("table");
    tablazat_sotet.classList.remove("table-striped");
    tablazat_sotet.classList.remove("table-dark");
    }
  }
  
  function restoreStyle() {
    var ugras_a = document.getElementById("ugras");
    if (ugras_a !== null) {
    ugras_a.classList.add("kipozicional");
    }
    var nev_a = document.getElementById("nev");
    if (nev_a !== null) {
    nev_a.classList.remove("hide");
    }
    var nav_links = document.querySelectorAll(".linkek-fent");
    if (nav_links !== null) {
      [].forEach.call(nav_links, function(el) {
        el.classList.add("nav-link");
        el.classList.remove("linkek-fent")
    });
    }
    var footer_links = document.querySelectorAll(".linkek-lent");
    if (footer_links !== null) {
      [].forEach.call(footer_links, function(el) {
        el.classList.add("mx-auto");
        el.classList.add("navbar-brand");
        el.classList.remove("linkek-lent");
    });
    }
    var jelenlegi_a = document.getElementById("jelenlegi");
    if (jelenlegi_a !== null) {
    jelenlegi_a.classList.add("nav-link");
    jelenlegi_a.classList.add("disabled");
    }
    var coll = document.getElementById("navbarNavAltMarkup");
    if (coll !== null) {
    coll.classList.add("collapse");
    coll.classList.add("navbar-collapse");
    }
    var tablazat_vilagos = document.getElementById("tablazat-vilagos");
    if (tablazat_vilagos !== null) {
    tablazat_vilagos.classList.add("table");
    tablazat_vilagos.classList.add("table-striped");
    }
    var tablazat_sotet = document.getElementById("tablazat-sotet");
    if (tablazat_sotet !== null) {
    tablazat_sotet.classList.add("table");
    tablazat_sotet.classList.add("table-striped");
    tablazat_sotet.classList.add("table-dark");
    }
    var cookie = readCookie("pref");
    setActiveStyleSheet(cookie);
  
  }