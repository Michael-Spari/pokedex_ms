function showLoadingSpinner() {
    const spinner = document.getElementById("loadingSpinner");
    if (spinner) {
        spinner.style.display = "flex";
    } else {
        renderLoadingSpinner();
    }
}

function hideLoadingSpinner() {
    const spinner = document.getElementById("loadingSpinner");
    if (spinner) {
        spinner.style.display = "none";
    }
}