// Install SW
self.addEventListener("install", evt => {
    console.log("Service worker has been installed");
});

// Activate SW
self.addEventListener("activate", evt => {
    console.log("Service worker has been Activated");
});