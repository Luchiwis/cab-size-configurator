function uncheckAll(section){
    radios = document.getElementById(section).getElementsByTagName('input');
    for (i of radios){
        i.checked = false;
    }
}