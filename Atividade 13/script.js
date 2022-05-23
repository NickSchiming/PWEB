function Submit() {
    var txt = document.forms.form.elements[0].value;
    if (document.forms.form.elements[1].checked == true) {
        alert("Resultado: " + txt.toUpperCase());
    }

    if (document.forms.form.elements[2].checked == true) {
        alert("Resultado: " + txt.toLowerCase());
    }

}