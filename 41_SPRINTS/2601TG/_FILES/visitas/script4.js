
    let visitas = localStorage.getItem("visitas");

    if (visitas === null) {
        visitas = 1; 
    } else {
        visitas = parseInt(visitas) + 1; 
    }

    localStorage.setItem("visitas", visitas);

    alert("Número de visitas: " + visitas);
;