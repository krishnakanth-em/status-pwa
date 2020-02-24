if ("serviceWorker" in navigator) {
    navigator.serviceWorker
        .register("../service-worker.js")
        .then(reg => console.log("Service Worker Registred", reg))
        .catch(err => console.log("Service Worker Not Registred", err));
}