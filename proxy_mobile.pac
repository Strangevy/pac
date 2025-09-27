function FindProxyForURL(url, host) {
    // 直连：本地、局域网、中国大陆常见域名
    if (isPlainHostName(host) ||
        isInNet(host, "10.0.0.0", "255.0.0.0") ||
        isInNet(host, "172.16.0.0", "255.240.0.0") ||
        isInNet(host, "192.168.0.0", "255.255.0.0") ||
        isInNet(host, "127.0.0.0", "255.255.255.0") ||
        shExpMatch(host, "*.cn") ||
        shExpMatch(host, "*.baidu.com") ||
        shExpMatch(host, "*.qq.com") ||
        shExpMatch(host, "*.taobao.com") ||
        shExpMatch(host, "*.tmall.com") ||
        shExpMatch(host, "*.alipay.com") ||
        shExpMatch(host, "*.weibo.com") ||
        shExpMatch(host, "*.gov.cn") ||
        shExpMatch(host, "*.aliyun.com") ||
        shExpMatch(host, "*.jd.com") ||
        shExpMatch(host, "*.360.cn") ||
        shExpMatch(host, "*.sogou.com") ||
        shExpMatch(host, "*.sohu.com") ||
        shExpMatch(host, "*.sina.com.cn") ||
        shExpMatch(host, "*.ifeng.com") ||
        shExpMatch(host, "*.youku.com") ||
        shExpMatch(host, "*.iqiyi.com") ||
        shExpMatch(host, "*.bilibili.com")
    ) {
        return "DIRECT";
    }

    // 代理：主流国际服务
    if (
        shExpMatch(host, "*.google.com") ||
        shExpMatch(host, "*.googlevideo.com") ||
        shExpMatch(host, "*.youtube.com") ||
        shExpMatch(host, "*.youtu.be") ||
        shExpMatch(host, "*.ggpht.com") ||
        shExpMatch(host, "*.gstatic.com") ||
        shExpMatch(host, "*.gmail.com") ||
        shExpMatch(host, "*.googleapis.com") ||
        shExpMatch(host, "*.googleusercontent.com") ||
        shExpMatch(host, "*.google.com.hk") ||
        shExpMatch(host, "*.google.com.tw") ||
        shExpMatch(host, "*.google.co.jp") ||
        shExpMatch(host, "*.google.de") ||
        shExpMatch(host, "*.google.fr") ||
        shExpMatch(host, "*.google.co.uk") ||
        shExpMatch(host, "*.google.es") ||
        shExpMatch(host, "*.google.it") ||
        shExpMatch(host, "*.google.ru") ||
        shExpMatch(host, "*.google.com.br") ||
        shExpMatch(host, "*.google.ca") ||
        shExpMatch(host, "*.google.com.au") ||

        shExpMatch(host, "*.facebook.com") ||
        shExpMatch(host, "*.fbcdn.net") ||
        shExpMatch(host, "*.fbsbx.com") ||
        shExpMatch(host, "*.messenger.com") ||
        shExpMatch(host, "*.instagram.com") ||
        shExpMatch(host, "*.cdninstagram.com") ||
        shExpMatch(host, "*.whatsapp.com") ||
        shExpMatch(host, "*.whatsapp.net") ||
        shExpMatch(host, "*.threads.net") ||

        shExpMatch(host, "*.twitter.com") ||
        shExpMatch(host, "*.x.com") ||
        shExpMatch(host, "*.twimg.com") ||
        shExpMatch(host, "*.t.co") ||

        shExpMatch(host, "*.netflix.com") ||
        shExpMatch(host, "*.nflximg.net") ||
        shExpMatch(host, "*.nflxext.com") ||
        shExpMatch(host, "*.nflxso.net") ||
        shExpMatch(host, "*.nflxvideo.net") ||

        shExpMatch(host, "*.github.com") ||
        shExpMatch(host, "*.githubusercontent.com") ||
        shExpMatch(host, "*.github.io") ||
        shExpMatch(host, "*.gitlab.com") ||
        shExpMatch(host, "*.stackoverflow.com") ||
        shExpMatch(host, "*.stackexchange.com") ||

        shExpMatch(host, "*.wikipedia.org") ||
        shExpMatch(host, "*.wikimedia.org") ||
        shExpMatch(host, "*.wiktionary.org") ||
        shExpMatch(host, "*.wikiquote.org") ||

        shExpMatch(host, "*.reddit.com") ||
        shExpMatch(host, "*.redd.it") ||
        shExpMatch(host, "*.redditstatic.com") ||

        shExpMatch(host, "*.discord.com") ||
        shExpMatch(host, "*.discord.gg") ||
        shExpMatch(host, "*.discordapp.com") ||
        shExpMatch(host, "*.discordapp.net") ||

        shExpMatch(host, "*.openai.com") ||
        shExpMatch(host, "*.chatgpt.com") ||
        shExpMatch(host, "*.claude.ai") ||
        shExpMatch(host, "*.anthropic.com") ||

        shExpMatch(host, "*.amazon.com") ||
        shExpMatch(host, "*.amazonaws.com") ||
        shExpMatch(host, "*.primevideo.com") ||

        shExpMatch(host, "*.microsoft.com") ||
        shExpMatch(host, "*.live.com") ||
        shExpMatch(host, "*.onedrive.com") ||
        shExpMatch(host, "*.office.com") ||
        shExpMatch(host, "*.copilot.microsoft.com") ||

        shExpMatch(host, "*.apple.com") ||
        shExpMatch(host, "*.icloud.com") ||
        shExpMatch(host, "*.itunes.com") ||
        shExpMatch(host, "*.apps.apple.com") ||

        shExpMatch(host, "*.nytimes.com") ||
        shExpMatch(host, "*.nyt.com") ||
        shExpMatch(host, "*.wsj.com") ||
        shExpMatch(host, "*.bloomberg.com") ||
        shExpMatch(host, "*.reuters.com") ||
        shExpMatch(host, "*.theguardian.com") ||
        shExpMatch(host, "*.bbc.com") ||
        shExpMatch(host, "*.bbc.co.uk") ||

        shExpMatch(host, "*.cloudflare.com") ||
        shExpMatch(host, "*.cloudflare-dns.com") ||
        shExpMatch(host, "*.one.one.one.one") ||
        shExpMatch(host, "*.workers.dev") ||

        shExpMatch(host, "*.telegram.org") ||
        shExpMatch(host, "*.t.me") ||
        shExpMatch(host, "*.telegram.me") ||
        shExpMatch(host, "*.telesco.pe") ||
        shExpMatch(host, "*.telegra.ph") ||

        shExpMatch(host, "*.line.me") ||
        shExpMatch(host, "*.naver.com") ||
        shExpMatch(host, "*.daum.net") ||

        shExpMatch(host, "*.tiktok.com") ||
        shExpMatch(host, "*.tiktokv.com") ||
        shExpMatch(host, "*.tiktokcdn.com")
    ) {
        return "PROXY 192.168.233.88:7890"; // 替换为你的代理地址
    }

    // 默认直连（可改为代理，按需）
    return "DIRECT";
}
