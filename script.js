function copyIP() {
    const ip = "play.afterfall.com";

    navigator.clipboard.writeText(ip).then(() => {
        alert("IP Copied: " + ip);
    });
}
