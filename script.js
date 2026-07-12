
function creerCompte() {
    let pseudo = document.getElementById("pseudo").value;
    let motdepasse = document.getElementById("motdepasse").value;

    if (pseudo === "" || motdepasse === "") {
        alert("Remplis tous les champs !");
        return;
    }

    localStorage.setItem("pseudo", pseudo);
    localStorage.setItem("motdepasse", motdepasse);

    alert("Compte créé avec succès !");
}
