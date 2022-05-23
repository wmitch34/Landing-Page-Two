function expand_menu(){
    var x = document.getElementById("hambuger_menu");
    x.style.width = "900px";
    open_menu();
}

function open_menu(){
    var x = document.getElementById("hambuger_menu");
    x.style.display = "block";
}

function close_menu(){
    var x = document.getElementById("hambuger_menu");
    x.style.display = "none";
}