
document.onreadystatechange = setTimeout(() => {
    if (document.readyState === "complete") {
        document.getElementById(
            "loader").style.display = "none";
        document.getElementsByTagName(
            "body")[0].classList.add('loaded')
        document.getElementsByTagName(
            "body")[0].classList.remove('loading')
    }
}, 2000);

