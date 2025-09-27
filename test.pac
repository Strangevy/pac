function FindProxyForURL(url, host) {
    if (host === "google.com") {
        return "PROXY 192.168.1.100:7890"; // 替换为你的代理
    }
    return "DIRECT";
}
