function change(radio) { 
        if (radio.checked && radio.id === "monster") {
            document.getElementById("actor").style.backgroundImage = "url('img/ant.jpg')";
        } 
        else if (radio.checked && radio.id === "montreal") {
            document.getElementById("actor").style.backgroundImage = "url('img/montreal.jpg')";
        } 
        else if (radio.checked && radio.id === "monpansier") {
            document.getElementById("actor").style.backgroundImage = "url('img/monpan.jpg')";
    	}
}