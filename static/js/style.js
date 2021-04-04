function wheatp() {
    var wprice = 12;
    document.getElementById("wq").value = parseInt(document.getElementById("wq").value) + 1;
    document.getElementById("wqpr").value = parseInt(document.getElementById("wq").value) * wprice;
    document.getElementById("wgst").value = (parseInt(document.getElementById("wq").value) * 0.18 * wprice).toFixed(2);
    document.getElementById("wt").value = (parseInt(document.getElementById("wqpr").value) + parseFloat(document.getElementById("wgst").value)).toFixed(2);
    gt();
}

function wheatm() {
    var wprice = 12;
    if (parseInt(document.getElementById("wq").value) == 0) {
        document.getElementById("wq").value = 0;
    }
    else {
        document.getElementById("wq").value = parseInt(document.getElementById("wq").value) - 1;
        document.getElementById("wqpr").value = parseInt(document.getElementById("wqpr").value) - wprice;
        document.getElementById("wgst").value = (parseInt(document.getElementById("wq").value) * 0.18 * wprice).toFixed(2);
        document.getElementById("wt").value = (parseInt(document.getElementById("wqpr").value) + parseFloat(document.getElementById("wgst").value)).toFixed(2);
    }
    gt();
}

function ricep() {
    var rprice = 12;
    document.getElementById("rq").value = parseInt(document.getElementById("rq").value) + 1;
    document.getElementById("rqpr").value = parseInt(document.getElementById("rq").value) * rprice;
    document.getElementById("rgst").value = (parseInt(document.getElementById("rq").value) * 0.18 * rprice).toFixed(2);
    document.getElementById("rt").value = (parseInt(document.getElementById("rqpr").value) + parseFloat(document.getElementById("rgst").value)).toFixed(2);
    gt();
}

function ricem() {
    var rprice = 12;
    if (parseInt(document.getElementById("rq").value) == 0) {
        document.getElementById("rq").value = 0;
    }
    else {
        document.getElementById("rq").value = parseInt(document.getElementById("rq").value) - 1;
        document.getElementById("rqpr").value = parseInt(document.getElementById("rqpr").value) - rprice;
        document.getElementById("rgst").value = (parseInt(document.getElementById("rq").value) * 0.18 * rprice).toFixed(2);
        document.getElementById("rt").value = (parseInt(document.getElementById("rqpr").value) + parseFloat(document.getElementById("rgst").value)).toFixed(2);
    }
    gt();
}

function wetricep() {
    var wrprice = 15;
    document.getElementById("wrq").value = parseInt(document.getElementById("wrq").value) + 1;
    document.getElementById("wrqpr").value = parseInt(document.getElementById("wrq").value) * wrprice;
    document.getElementById("wrgst").value = (parseInt(document.getElementById("wrq").value) * 0.18 * wrprice).toFixed(2);
    document.getElementById("wrt").value = (parseInt(document.getElementById("wrqpr").value) + parseFloat(document.getElementById("wrgst").value)).toFixed(2);
    gt();
}

function wetricem() {
    var wrprice = 15;
    if (parseInt(document.getElementById("wrq").value) == 0) {
        document.getElementById("wrq").value = 0;
    }
    else {
        document.getElementById("wrq").value = parseInt(document.getElementById("wrq").value) - 1;
        document.getElementById("wrqpr").value = parseInt(document.getElementById("wrqpr").value) - wrprice;
        document.getElementById("wrgst").value = (parseInt(document.getElementById("wrq").value) * 0.18 * wrprice).toFixed(2);
        document.getElementById("wrt").value = (parseInt(document.getElementById("wrqpr").value) + parseFloat(document.getElementById("wrgst").value)).toFixed(2);
    }
    gt();
}

function gt() {
    document.getElementById("t").value = (parseFloat(document.getElementById("wt").value) + parseFloat(document.getElementById("rt").value) + parseFloat(document.getElementById("wrt").value)).toFixed(2);
}