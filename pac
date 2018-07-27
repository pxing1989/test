function FindProxyForURL(url, host) {

    var d = "DIRECT";
    var proxy2 = "SOCKS5 54.223.68.235:44089";
    if (
        dnsDomainIs(host, 'localhost')
        || dnsDomainIs(host, '127.0.0.1')
    ) {
        return d;
    } else if (
        dnsDomainIs(host,".lightinthebox.com")
        || dnsDomainIs(host,".cloudfront.net")
        || dnsDomainIs(host,"haproxy.org")
    ) {
        return proxy2;
    } else if (
        host.search("google") >= 0
        || host.search("gmail") >= 0
        || dnsDomainIs(host,".gstatic.com")
        || dnsDomainIs(host,".facebook.net")
        || dnsDomainIs(host,".facebook.com")
        || dnsDomainIs(host,"facebook.com")
        || dnsDomainIs(host,".twitter.com")
        || dnsDomainIs(host,".skype.com")
        || dnsDomainIs(host,".youtube.com")
        || dnsDomainIs(host,".blogspot.")
        || dnsDomainIs(host,".blogger.com")
        || dnsDomainIs(host,"amazonaws.com")
        || dnsDomainIs(host,"instagram.com")
        || dnsDomainIs(host,".tollgroup.com")
        || dnsDomainIs(host,".dhl.com")
        || dnsDomainIs(host,".ytimg.com")
        || dnsDomainIs(host,".fbcdn.net")
        || dnsDomainIs(host,".jaszcouture.com")
        || dnsDomainIs(host,".macduggal.com")
        || dnsDomainIs(host,".edressit.com")
        || dnsDomainIs(host,".twimg.com")
        || dnsDomainIs(host,".jovani.com")
        || dnsDomainIs(host,".wordpress.com")
        || dnsDomainIs(host,".milanoo.com")
        || dnsDomainIs(host,".lafemmefashion.com")
        || dnsDomainIs(host,".dhvalue.com")
        || dnsDomainIs(host,"bit.ly")
        || dnsDomainIs(host,".newyorkdress.com")
        || dnsDomainIs(host,".jovani.com")
        || dnsDomainIs(host,".lasposa.info")
        || dnsDomainIs(host,".maggiesottero.com")
        || dnsDomainIs(host,".flirtprom.com")
        || dnsDomainIs(host,".behance.net")
        || dnsDomainIs(host,".android.com")
        || dnsDomainIs(host,".archive.org")
        || dnsDomainIs(host,".sourceforge.net")
        || dnsDomainIs(host,".sf.net")
        || dnsDomainIs(host,"t.co")
        || dnsDomainIs(host,"trello.com")
        || dnsDomainIs(host,".ggpht.com")
        || dnsDomainIs(host,".semrush.com")
        || dnsDomainIs(host,".livechatinc.com")
        || dnsDomainIs(host,"golang.org")
        || dnsDomainIs(host,"elliewilde.com")
        || dnsDomainIs(host,"business.trustpilot.com")
        || dnsDomainIs(host,"website.informer.com")
        || dnsDomainIs(host,"cloudflare.com")
        || dnsDomainIs(host, "detail.1688.com")
        || dnsDomainIs(host, "gitbooks.io")
        || dnsDomainIs(host, "www.virtualbox.org")
    ){
        return proxy2;
    }

    return d + "; " + proxy2;
}
