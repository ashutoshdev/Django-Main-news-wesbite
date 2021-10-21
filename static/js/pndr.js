let __MTT = {
    Modules: {},
    ConsoleLog: console.log
};

let n = window,
    t = this;

    var rt = "", nt = "?", tt = "function", b = "undefined", d = "object", ut = "string", r = "model", i = "name", e = "type", u = "vendor", f = "version", l = "architecture", p = "console", o = "mobile", s = "tablet", k = "smarttv", g = "wearable", a = {
        extend: function(n, t) {
            for (var i in t)
                "browser cpu device engine os".indexOf(i) !== -1 && t[i].length % 2 == 0 && (n[i] = t[i].concat(n[i]));
            return n
        },
        has: function(n, t) {
            return typeof n == "string" ? t.toLowerCase().indexOf(n.toLowerCase()) !== -1 : !1
        },
        lowerize: function(n) {
            return n.toLowerCase()
        },
        major: function(n) {
            return typeof n === ut ? n.split(".")[0] : t
        }
    }, c = {
        rgx: function() {
            for (var r, o = 0, s, l, u, n, e, i, h = arguments, c, f; o < h.length && !e; ) {
                if (c = h[o],
                    f = h[o + 1],
                typeof r === b) {
                    r = {};
                    for (u in f)
                        f.hasOwnProperty(u) && (n = f[u],
                            typeof n === d ? r[n[0]] = t : r[n] = t)
                }
                for (s = l = 0; s < c.length && !e; )
                    if (e = c[s++].exec(this.getUA()),
                        !!e)
                        for (u = 0; u < f.length; u++)
                            i = e[++l],
                                n = f[u],
                                typeof n === d && n.length > 0 ? n.length == 2 ? r[n[0]] = typeof n[1] == tt ? n[1].call(this, i) : n[1] : n.length == 3 ? r[n[0]] = typeof n[1] === tt && (!n[1].exec || !n[1].test) ? i ? n[1].call(this, i, n[2]) : t : i ? i.replace(n[1], n[2]) : t : n.length == 4 && (r[n[0]] = i ? n[3].call(this, i.replace(n[1], n[2])) : t) : r[n] = i ? i : t;
                o += 2
            }
            return r
        },
        str: function(n, i) {
            var r, u;
            for (r in i)
                if (typeof i[r] === d && i[r].length > 0) {
                    for (u = 0; u < i[r].length; u++)
                        if (a.has(i[r][u], n))
                            return r === nt ? t : r
                } else if (a.has(i[r], n))
                    return r === nt ? t : r;
            return n
        }
    }, v = {
        browser: {
            oldsafari: {
                version: {
                    "1.0": "/8",
                    1.2: "/1",
                    1.3: "/3",
                    "2.0": "/412",
                    "2.0.2": "/416",
                    "2.0.3": "/417",
                    "2.0.4": "/419",
                    "?": "/"
                }
            }
        },
        device: {
            amazon: {
                model: {
                    "Fire Phone": ["SD", "KF"]
                }
            },
            sprint: {
                model: {
                    "Evo Shift 4G": "7373KT"
                },
                vendor: {
                    HTC: "APA",
                    Sprint: "Sprint"
                }
            }
        },
        os: {
            windows: {
                version: {
                    ME: "4.90",
                    "NT 3.11": "NT3.51",
                    "NT 4.0": "NT4.0",
                    2e3: "NT 5.0",
                    XP: ["NT 5.1", "NT 5.2"],
                    Vista: "NT 6.0",
                    7: "NT 6.1",
                    8: "NT 6.2",
                    8.1: "NT 6.3",
                    10: ["NT 6.4", "NT 10.0"],
                    RT: "ARM"
                }
            }
        }
    }, it = {
        browser: [[/(opera\smini)\/([\w\.-]+)/i, /(opera\s[mobiletab]+).+version\/([\w\.-]+)/i, /(opera).+version\/([\w\.]+)/i, /(opera)[\/\s]+([\w\.]+)/i], [i, f], [/\s(opr)\/([\w\.]+)/i], [[i, "Opera"], f], [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]+)*/i, /(avant\s|iemobile|slim|baidu)(?:browser)?[\/\s]?([\w\.]*)/i, /(?:ms|\()(ie)\s([\w\.]+)/i, /(rekonq)\/([\w\.]+)*/i, /(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs)\/([\w\.-]+)/i], [i, f], [/(trident).+rv[:\s]([\w\.]+).+like\sgecko/i], [[i, "IE"], f], [/(edge)\/((\d+)?[\w\.]+)/i], [i, f], [/(yabrowser)\/([\w\.]+)/i], [[i, "Yandex"], f], [/(comodo_dragon)\/([\w\.]+)/i], [[i, /_/g, " "], f], [/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i, /(qqbrowser)[\/\s]?([\w\.]+)/i], [i, f], [/(uc\s?browser)[\/\s]?([\w\.]+)/i, /ucweb.+(ucbrowser)[\/\s]?([\w\.]+)/i, /JUC.+(ucweb)[\/\s]?([\w\.]+)/i], [[i, "UCBrowser"], f], [/(dolfin)\/([\w\.]+)/i], [[i, "Dolphin"], f], [/((?:android.+)crmo|crios)\/([\w\.]+)/i], [[i, "Chrome"], f], [/XiaoMi\/MiuiBrowser\/([\w\.]+)/i], [f, [i, "MIUI Browser"]], [/android.+version\/([\w\.]+)\s+(?:mobile\s?safari|safari)/i], [f, [i, "Android Browser"]], [/FBAV\/([\w\.]+);/i], [f, [i, "Facebook"]], [/fxios\/([\w\.-]+)/i], [f, [i, "Firefox"]], [/version\/([\w\.]+).+?mobile\/\w+\s(safari)/i], [f, [i, "Mobile Safari"]], [/version\/([\w\.]+).+?(mobile\s?safari|safari)/i], [f, i], [/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i], [i, [f, c.str, v.browser.oldsafari.version]], [/(konqueror)\/([\w\.]+)/i, /(webkit|khtml)\/([\w\.]+)/i], [i, f], [/(navigator|netscape)\/([\w\.-]+)/i], [[i, "Netscape"], f], [/(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i, /(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix)\/([\w\.-]+)/i, /(mozilla)\/([\w\.]+).+rv\:.+gecko\/\d+/i, /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i, /(links)\s\(([\w\.]+)/i, /(gobrowser)\/?([\w\.]+)*/i, /(ice\s?browser)\/v?([\w\._]+)/i, /(mosaic)[\/\s]([\w\.]+)/i], [i, f]],
        cpu: [[/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i], [[l, "amd64"]], [/(ia32(?=;))/i], [[l, a.lowerize]], [/((?:i[346]|x)86)[;\)]/i], [[l, "ia32"]], [/windows\s(ce|mobile);\sppc;/i], [[l, "arm"]], [/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i], [[l, /ower/, "", a.lowerize]], [/(sun4\w)[;\)]/i], [[l, "sparc"]], [/((?:avr32|ia64(?=;))|68k(?=\))|arm(?:64|(?=v\d+;))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?(?=;)|pa-risc)/i], [[l, a.lowerize]]],
        device: [[/\((ipad|playbook);[\w\s\);-]+(rim|apple)/i], [r, u, [e, s]], [/applecoremedia\/[\w\.]+ \((ipad)/], [r, [u, "Apple"], [e, s]], [/(apple\s{0,1}tv)/i], [[r, "Apple TV"], [u, "Apple"]], [/(archos)\s(gamepad2?)/i, /(hp).+(touchpad)/i, /(kindle)\/([\w\.]+)/i, /\s(nook)[\w\s]+build\/(\w+)/i, /(dell)\s(strea[kpr\s\d]*[\dko])/i], [u, r, [e, s]], [/(kf[A-z]+)\sbuild\/[\w\.]+.*silk\//i], [r, [u, "Amazon"], [e, s]], [/(sd|kf)[0349hijorstuw]+\sbuild\/[\w\.]+.*silk\//i], [[r, c.str, v.device.amazon.model], [u, "Amazon"], [e, o]], [/\((ip[honed|\s\w*]+);.+(apple)/i], [r, u, [e, o]], [/\((ip[honed|\s\w*]+);/i], [r, [u, "Apple"], [e, o]], [/(blackberry)[\s-]?(\w+)/i, /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|huawei|meizu|motorola|polytron)[\s_-]?([\w-]+)*/i, /(hp)\s([\w\s]+\w)/i, /(asus)-?(\w+)/i], [u, r, [e, o]], [/\(bb10;\s(\w+)/i], [r, [u, "BlackBerry"], [e, o]], [/android.+(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus 7)/i], [r, [u, "Asus"], [e, s]], [/(sony)\s(tablet\s[ps])\sbuild\//i, /(sony)?(?:sgp.+)\sbuild\//i], [[u, "Sony"], [r, "Xperia Tablet"], [e, s]], [/(?:sony)?(?:(?:(?:c|d)\d{4})|(?:so[-l].+))\sbuild\//i], [[u, "Sony"], [r, "Xperia Phone"], [e, o]], [/\s(ouya)\s/i, /(nintendo)\s([wids3u]+)/i], [u, r, [e, p]], [/android.+;\s(shield)\sbuild/i], [r, [u, "Nvidia"], [e, p]], [/(playstation\s[34portablevi]+)/i], [r, [u, "Sony"], [e, p]], [/(sprint\s(\w+))/i], [[u, c.str, v.device.sprint.vendor], [r, c.str, v.device.sprint.model], [e, o]], [/(lenovo)\s?(S(?:5000|6000)+(?:[-][\w+]))/i], [u, r, [e, s]], [/(htc)[;_\s-]+([\w\s]+(?=\))|\w+)*/i, /(zte)-(\w+)*/i, /(alcatel|geeksphone|huawei|lenovo|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]+)*/i], [u, [r, /_/g, " "], [e, o]], [/(nexus\s9)/i], [r, [u, "HTC"], [e, s]], [/[\s\(;](xbox(?:\sone)?)[\s\);]/i], [r, [u, "Microsoft"], [e, p]], [/(kin\.[onetw]{3})/i], [[r, /\./g, " "], [u, "Microsoft"], [e, o]], [/\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?(:?\s4g)?)[\w\s]+build\//i, /mot[\s-]?(\w+)*/i, /(XT\d{3,4}) build\//i, /(nexus\s[6])/i], [r, [u, "Motorola"], [e, o]], [/android.+\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i], [r, [u, "Motorola"], [e, s]], [/android.+((sch-i[89]0\d|shw-m380s|gt-p\d{4}|gt-n8000|sgh-t8[56]9|nexus 10))/i, /((SM-T\w+))/i], [[u, "Samsung"], r, [e, s]], [/((s[cgp]h-\w+|gt-\w+|galaxy\snexus|sm-n900))/i, /(sam[sung]*)[\s-]*(\w+-?[\w-]*)*/i, /sec-((sgh\w+))/i], [[u, "Samsung"], r, [e, o]], [/(samsung);smarttv/i], [u, r, [e, k]], [/\(dtv[\);].+(aquos)/i], [r, [u, "Sharp"], [e, k]], [/sie-(\w+)*/i], [r, [u, "Siemens"], [e, o]], [/(maemo|nokia).*(n900|lumia\s\d+)/i, /(nokia)[\s_-]?([\w-]+)*/i], [[u, "Nokia"], r, [e, o]], [/android\s3\.[\s\w;-]{10}(a\d{3})/i], [r, [u, "Acer"], [e, s]], [/android\s3\.[\s\w;-]{10}(lg?)-([06cv9]{3,4})/i], [[u, "LG"], r, [e, s]], [/(lg) netcast\.tv/i], [u, r, [e, k]], [/(nexus\s[45])/i, /lg[e;\s\/-]+(\w+)*/i], [r, [u, "LG"], [e, o]], [/android.+(ideatab[a-z0-9\-\s]+)/i], [r, [u, "Lenovo"], [e, s]], [/linux;.+((jolla));/i], [u, r, [e, o]], [/((pebble))app\/[\d\.]+\s/i], [u, r, [e, g]], [/android.+;\s(glass)\s\d/i], [r, [u, "Google"], [e, g]], [/android.+(\w+)\s+build\/hm\1/i, /android.+(hm[\s\-_]*note?[\s_]*(?:\d\w)?)\s+build/i, /android.+(mi[\s\-_]*(?:one|one[\s_]plus)?[\s_]*(?:\d\w)?)\s+build/i], [[r, /_/g, " "], [u, "Xiaomi"], [e, o]], [/\s(tablet)[;\/\s]/i, /\s(mobile)[;\/\s]/i], [[e, a.lowerize], u, r]],
        engine: [[/windows.+\sedge\/([\w\.]+)/i], [f, [i, "EdgeHTML"]], [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m)\/([\w\.]+)/i, /(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i, /(icab)[\/\s]([23]\.[\d\.]+)/i], [i, f], [/rv\:([\w\.]+).*(gecko)/i], [f, i]],
        os: [[/microsoft\s(windows)\s(vista|xp)/i], [i, f], [/(windows)\snt\s6\.2;\s(arm)/i, /(windows\sphone(?:\sos)*|windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i], [i, [f, c.str, v.os.windows.version]], [/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i], [[i, "Windows"], [f, c.str, v.os.windows.version]], [/\((bb)(10);/i], [[i, "BlackBerry"], f], [/(blackberry)\w*\/?([\w\.]+)*/i, /(tizen)[\/\s]([\w\.]+)/i, /(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|contiki)[\/\s-]?([\w\.]+)*/i, /linux;.+(sailfish);/i], [i, f], [/(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]+)*/i], [[i, "Symbian"], f], [/\((series40);/i], [i], [/mozilla.+\(mobile;.+gecko.+firefox/i], [[i, "Firefox OS"], f], [/(nintendo|playstation)\s([wids34portablevu]+)/i, /(mint)[\/\s\(]?(\w+)*/i, /(mageia|vectorlinux)[;\s]/i, /(joli|[kxln]?ubuntu|debian|[open]*suse|gentoo|(?=\s)arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?([\w\.-]+)*/i, /(hurd|linux)\s?([\w\.]+)*/i, /(gnu)\s?([\w\.]+)*/i], [i, f], [/(cros)\s[\w]+\s([\w\.]+\w)/i], [[i, "Chromium OS"], f], [/(sunos)\s?([\w\.]+\d)*/i], [[i, "Solaris"], f], [/\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]+)*/i], [i, f], [/(ip[honead]+)(?:.*os\s([\w]+)*\slike\smac|;\sopera)/i], [[i, "iOS"], [f, /_/g, "."]], [/(mac\sos\sx)\s?([\w\s\.]+\w)*/i, /(macintosh|mac(?=_powerpc)\s)/i], [[i, "Mac OS"], [f, /_/g, "."]], [/((?:open)?solaris)[\/\s-]?([\w\.]+)*/i, /(haiku)\s(\w+)/i, /(aix)\s((\d)(?=\.|\)|\s)[\w\.]*)*/i, /(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms)/i, /(unix)\s?([\w\.]+)*/i], [i, f]]
    }, h = function(t, i) {
        if (this instanceof h) {
            var u = t || (n && n.navigator && n.navigator.userAgent ? n.navigator.userAgent : rt)
                , r = i ? a.extend(it, i) : it;
            return this.getBrowser = function() {
                var n = c.rgx.apply(this, r.browser);
                return n.major = a.major(n.version),
                    n
            }
                ,
                this.getCPU = function() {
                    return c.rgx.apply(this, r.cpu)
                }
                ,
                this.getDevice = function() {
                    return c.rgx.apply(this, r.device)
                }
                ,
                this.getEngine = function() {
                    return c.rgx.apply(this, r.engine)
                }
                ,
                this.getOS = function() {
                    return c.rgx.apply(this, r.os)
                }
                ,
                this.getResult = function() {
                    return {
                        ua: this.getUA(),
                        browser: this.getBrowser(),
                        engine: this.getEngine(),
                        os: this.getOS(),
                        device: this.getDevice(),
                        cpu: this.getCPU()
                    }
                }
                ,
                this.getUA = function() {
                    return u
                }
                ,
                this.setUA = function(n) {
                    return u = n,
                        this
                }
                ,
                this.setUA(u),
                this
        }
        return new h(t,i).getResult()
    }, y, w;
    h.VERSION = "0.7.10";
    h.BROWSER = {
        NAME: i,
        MAJOR: "major",
        VERSION: f
    };
    h.CPU = {
        ARCHITECTURE: l
    };
    h.DEVICE = {
        MODEL: r,
        VENDOR: u,
        TYPE: e,
        CONSOLE: p,
        MOBILE: o,
        SMARTTV: k,
        TABLET: s,
        WEARABLE: g,
        EMBEDDED: "embedded"
    };
    h.ENGINE = {
        NAME: i,
        VERSION: f
    };
    h.OS = {
        NAME: i,
        VERSION: f
    };


let UAParser = h;

__MTT.Modules.PopUnder = function(media, topWindow) {
    var Module = {
        Loader: __MTT,
        Media: media,
        _Top: topWindow,
        PopWin: null,
        PopLoaded: false,
        PopRedirectDelay: 200,
        CreateAdUrl: function(hosted, adItem) {
            if (adItem) {
                return this.Loader.CreateAdUrl(this.Media, hosted, adItem)
            } else {
                if (this.Media.AdItems && this.Media.AdItems.length > 0) {
                    return this.Loader.CreateAdUrl(this.Media, hosted)
                } else {
                    return this.Loader.FetchMediaUrl(this.Media, hosted)
                }
            }
        },
        Init: function() {
            var _this = this;
            window.console = window.console || {
                log: function(d) {}
            };
            __MTT.ConsoleLog("INF_PU: Initiated");
            var g = __MTT;
            var uaParser = new UAParser();
            var os = uaParser.getOS();
            var browser = uaParser.getBrowser();
            if (false && this.Media.Settings.AttachEvent) {
                var element = this._Top.document.getElementById(this.Media.Settings.AttachEvent);
                if (element != null) {
                    this.AddEvent(element, "click", function(e) {
                        _this.CreatePop(e)
                    })
                }
            } else {
                if (g.IsMobile.any(Module._Top)) {
                    if (os.name == "iOS" && parseFloat(os.version) < parseFloat("6")) {
                        return
                    }
                    if (g.IsMobile.Windows(Module._Top)) {
                        return
                    }
                    var userAgent = uaParser.getUA();
                    if (userAgent.indexOf("FBAN/FBIOS") > -1 || userAgent.indexOf("FB_IAB/FB4A") > -1 || userAgent.indexOf("FBAV") > -1) {
                        return
                    }
                    var createMobilePop = function(event) {
                        var link = event.target || event.srcElement;
                        if (Module.Loader.IsDontTriggerForSelectorMatch(Module.Media.Settings.PopUnderDontTriggerSelector, link)) {
                            return
                        }
                        if (Module.Media.Settings.PopUnderTriggerOnSelector && !Module.Loader.IsTriggerOnSelectorMatch(Module.Media.Settings.PopUnderTriggerOnSelector, link, Module.Media.Settings.PopUnderTriggerOnSelectorDepth)) {
                            return
                        }
                        if (link.nodeName.toLowerCase() !== "a") {
                            link = _this.Loader.GetParentLink(link)
                        }
                        var redirectUrl = Module.Loader.BasePopunder.buildUrl(Module.CreateAdUrl(), Module.Loader.Enums.SelectedPopType.TabUnder);
                        if (typeof window.InfCustomSTAMobileFunc === "function") {
                            window.InfCustomSTAMobileFunc(Module, event, os, browser, link, redirectUrl)
                        } else {
                            if (link.nodeName.toLowerCase() === "a" && link.getAttribute("href") !== "#" && link.getAttribute("href").indexOf("javascript:") === -1 && !(Module.Media.Settings.RespectTargetBlank && (link.getAttribute("target") === "_blank" || link.getAttribute("rel") === "nofollow"))) {
                                if (Module.PopLoaded || !Module.Loader.IsClientSideFiltersPassed(Module.Media.ClientSideFilters, Module.Loader.LogZoneFilter({
                                    Id: media.ZoneId,
                                    Name: media.ZoneName
                                }))) {
                                    return true
                                }
                                Module.OnPopunderLoaded();
                                Module.AdShown = true;
                                if (Module.Loader.IsCapped("InfNumPops" + media.ZoneId, "InfNumPopsExpire" + media.ZoneId, media.Settings.cap)) {
                                    return true
                                }
                                Module.Loader.IncrementCap("InfNumPops" + media.ZoneId, "InfNumPopsExpire" + media.ZoneId, media.Settings.capLength);
                                if (Module.Media.Settings.Tracking === true) {
                                    Module.DoTrackingPop()
                                } else {
                                    if (g.IsMobile.iOS(g._Top) && g.IsMobile.Opera(g._Top)) {
                                        window.open(redirectUrl);
                                        g._Top.document.location = link.getAttribute("href")
                                    } else {
                                        if (os.name === "iOS" && (browser.name === "Chrome" || (browser.name === "Mobile Safari" && parseFloat(browser.version) < parseFloat("8")))) {
                                            window.open(link.getAttribute("href"))
                                        } else {
                                            if (Module.Media.Settings.MobileHistory) {
                                                try {
                                                    var w = window.open("about:blank");
                                                    try {
                                                        w.history.replaceState({
                                                            previous: Module._Top.location.href
                                                        }, null, Module._Top.location.href)
                                                    } catch (err) {
                                                        __MTT.ConsoleLog(err)
                                                    }
                                                    w.addEventListener("popstate", function(e) {
                                                        w.location = e.state.previous
                                                    });
                                                    w.location = link.getAttribute("href")
                                                } catch (err) {
                                                    __MTT.ConsoleLog(err);
                                                    window.open(link.getAttribute("href"))
                                                }
                                            } else {
                                                window.open(link.getAttribute("href"))
                                            }
                                        }
                                        if (os.name == "Android") {
                                            link.setAttribute("href", redirectUrl)
                                        }
                                        Module._Top.document.location = redirectUrl
                                    }
                                }
                                if (event.preventDefault !== undefined) {
                                    event.preventDefault()
                                }
                                return false
                            }
                        }
                        return true
                    };
                    g.BindOnDocmentClick(createMobilePop)
                } else {
                    if (browser.chrome || browser.name === "Chrome") {
                        try {
                            var isChromeTabOver = Module.Media.Settings.ChromePopApproach == Module.Loader.Enums.chromePopApproach.tabOver;
                            var isChromeMixed = Module.Media.Settings.PopType === 0 && Module.Media.Settings.ChromePopApproach == Module.Loader.Enums.chromePopApproach.mixed;
                            var isCapped = Module.Loader.IsCapped("InfNumPops" + Module.Media.ZoneId, "InfNumPopsExpire" + Module.Media.ZoneId, Module.Media.Settings.cap);
                            var sameTabNotEnabled = (Module.Media.Settings.SameTabAdSettings === undefined || (Module.Media.Settings.SameTabAdSettings.AdblockOnly && !g.IsAdblockRequest) || (!(Module.Media.Settings.SameTabAdSettings.Windows && os.name.toUpperCase() === "WINDOWS") && !(Module.Media.Settings.SameTabAdSettings.OSX && os.name.toUpperCase() === "MAC OS")) || !Module.Media.Settings.SameTabAdSettings.Chrome);
                            if (Module.Media.Settings.PopType === 0 && !Module.Media.Settings.Tracking && !isCapped && !isChromeTabOver && !isChromeMixed && sameTabNotEnabled) {
                                if (Module.Loader.ChromePopunder.supported()) {
                                    Module.Loader.ChromePopunder.init(media, media.Settings.ChromePopApproach);
                                    return
                                } else {
                                    if (Module.Media.Settings.PopType === 0) {
                                        Module.Media.Settings.SameTabAdSettings = Module.Media.Settings.SameTabAdSettings || {};
                                        Module.Media.Settings.SameTabAdSettings.AdblockOnly = false;
                                        Module.Media.Settings.SameTabAdSettings.Chrome = true;
                                        Module.Media.Settings.SameTabAdSettings.ClickAnywhere = Module.Media.Settings.SameTabAdSettings.ClickAnywhere || false
                                    }
                                }
                            }
                        } catch (err) {
                            __MTT.ConsoleLog(err)
                        }
                        this.AddEvent(this._Top.document, "click", Module.ChromeClickHandler)
                    } else {
                        if (Module.Loader.EdgePopunder.supported(browser, os, media)) {
                            Module.Loader.EdgePopunder.init(media)
                        } else {
                            this.AddEvent(this._Top.document, "click", function(e) {
                                if (_this.Media.Settings.RequireOffsiteClick) {
                                    var obj = _this.GetAnchorElement(e);
                                    if (obj == null || _this._Top.location.host.indexOf(_this.GetRootDomain(obj.href)) != -1) {
                                        return
                                    }
                                }
                                _this.CreatePop(e)
                            })
                        }
                    }
                }
            }
        },
        ChromeClickHandler: function(e) {
            if (Module.PopLoaded) {
                return
            }
            try {
                if (((e.srcElement.nodeName.toLowerCase() === "a" && (e.srcElement.getAttribute("target") === "_blank" || e.srcElement.getAttribute("rel") === "nofollow")) || Module.Loader.GetParentLink(e.srcElement).getAttribute("target") === "_blank" || Module.Loader.GetParentLink(e.srcElement).getAttribute("rel") === "nofollow") && Module.Media.Settings.RespectTargetBlank) {
                    return
                }
            } catch (err) {
                __MTT.ConsoleLog(err)
            }
            Module.CreateChromePop(e)
        },
        CreateChromePop: function(event) {
            var isAdblockPlusEnabled = __MTT.IsAdblockRequest;
            var os = Module.Loader.UaParser.getOS();
            if (Module.Loader.Storage.FailedLocalStorage) {
                return
            }
            var popURL = "about:blank";
            var popID = "ad_" + Math.floor(89999999 * Math.random() + 10000000);
            var pxLeft = 0;
            var pxTop = 0;
            pxLeft = (this.Loader.GetWindowLeft() + (this.Loader.GetWindowWidth() / 2) - (this.Media.Settings.Width / 2));
            pxTop = (this.Loader.GetWindowTop() + (this.Loader.GetWindowHeight() / 2) - (this.Media.Settings.Height / 2));
            var sOptions = "toolbar=no,scrollbars=yes,location=yes,statusbar=yes,menubar=no,resizable=1,width=" + this.Media.Settings.Width.toString() + ",height=" + this.Media.Settings.Height.toString() + ",screenX=" + pxLeft + ",screenY=" + pxTop;
            if (!Module.Loader.IsCapped("InfNumPops" + media.ZoneId, "InfNumPopsExpire" + media.ZoneId, media.Settings.cap) && Module.Loader.IsClientSideFiltersPassed(media.ClientSideFilters, Module.Loader.LogZoneFilter({
                Id: media.ZoneId,
                Name: media.ZoneName
            }))) {
                var link = event.target || event.srcElement;
                if (Module.Loader.IsDontTriggerForSelectorMatch(Module.Media.Settings.PopUnderDontTriggerSelector, link)) {
                    return
                }
                if (Module.Media.Settings.PopUnderTriggerOnSelector && !Module.Loader.IsTriggerOnSelectorMatch(Module.Media.Settings.PopUnderTriggerOnSelector, link, Module.Media.Settings.PopUnderTriggerOnSelectorDepth)) {
                    return
                }
                if (Module.Loader.IsIgnoreElement(link)) {
                    return
                }
                if (link.nodeName.toLowerCase() !== "a") {
                    link = Module.Loader.GetParentLink(link)
                }
                var doChromeSameTabAd = function() {
                    if (Module.Loader.SameTab) {
                        var client = new Module.Loader.Client();
                        var sameTab = typeof window.InfCustomChromeSTAFunc === "function" ? new Module.Loader.ExternalSameTab(function(evt) {
                                var currentUrl = top.document.location.href;
                                var target = evt.target || evt.srcElement;
                                window.InfCustomChromeSTAFunc(Module, target, currentUrl)
                            }
                        ) : new Module.Loader.SameTab({
                            clickAnywhere: Module.Media.Settings.SameTabAdSettings.ClickAnywhere,
                        });
                        if (!sameTab.isSupported(client)) {
                            Module.OnPopunderLoaded();
                            return
                        }
                        if (!sameTab.canShow(event)) {
                            Module.PopLoaded = false;
                            return
                        }
                        sameTab.setUrl(Module.CreateAdUrl(true));
                        sameTab.setOnSuccessCallback(function() {
                            Module.Loader.IncrementCap("InfNumPops" + media.ZoneId, "InfNumPopsExpire" + media.ZoneId, media.Settings.capLength);
                            Module.OnPopunderLoaded()
                        });
                        sameTab.show(event);
                        return
                    }
                    uaParser = new UAParser();
                    var userAgent = uaParser.getUA();
                    if (userAgent.indexOf("FBAN/FBIOS") > -1 || userAgent.indexOf("FB_IAB/FB4A") > -1 || userAgent.indexOf("FBAV") > -1) {
                        Module.OnPopunderLoaded();
                        return
                    }
                    var currentUrl = top.document.location.href;
                    if (typeof window.InfCustomChromeSTAFunc === "function") {
                        window.InfCustomChromeSTAFunc(Module, link, currentUrl)
                    } else {
                        if (link.tagName.toLowerCase() === "a" && link.getAttribute("href").lastIndexOf("javascript:", 0) !== 0 && link.getAttribute("href") !== "#") {
                            targetUrl = link.href.replace(reg, "")
                        } else {
                            if (Module.Media.Settings.SameTabAdSettings.ClickAnywhere) {
                                targetUrl = currentUrl
                            } else {
                                Module.PopLoaded = false;
                                return
                            }
                        }
                        event.preventDefault();
                        var reg = /#$/;
                        var targetUrl;
                        __MTT.TabHistoryRecorder(currentUrl, __MTT.TabHistoryStorageName);
                        var w;
                        var tabWinName = "inftabwindow_" + Math.floor((Math.random() * 100000000) + 1).toString();
                        try {
                            w = window.open(currentUrl, tabWinName);
                            w.history.replaceState({
                                previous: currentUrl
                            }, null, currentUrl);
                            w.addEventListener("popstate", function(e) {
                                w.location = e.state.previous
                            });
                            w.location = targetUrl
                        } catch (err) {
                            w = window.open(targetUrl, tabWinName)
                        }
                        w.focus();
                        Module.Loader.IncrementCap("InfNumPops" + media.ZoneId, "InfNumPopsExpire" + media.ZoneId, media.Settings.capLength);
                        link.setAttribute("data-tabunder", true);
                        Module.OnPopunderLoaded();
                        Module._Top.location.href = Module.CreateAdUrl(true)
                    }
                };
                var doChromeTabOver = function() {
                    if (Module.Loader.TabOver) {
                        var tabOver = new Module.Loader.TabOver();
                        showPop(tabOver);
                        return
                    }
                    Module.Loader.IncrementCap("InfNumPops" + media.ZoneId, "InfNumPopsExpire" + media.ZoneId, media.Settings.capLength);
                    var url = Module.CreateAdUrl(true);
                    var l = Module._Top.document.createElement("a");
                    l.setAttribute("data-tabunder", true);
                    Module.OnPopunderLoaded();
                    if (Module.Media.Settings.UseRemoteMediaHost === "true" && isAdblockPlusEnabled) {
                        if (Module.Media.Settings.UsePopCustomHost === "true") {
                            l.href = Module.Media.Settings.PopCustomHostUrl
                        } else {
                            l.href = Module._Top.document.location.href
                        }
                        setTimeout(function() {
                            w.location.href = url
                        }, Module.PopRedirectDelay)
                    } else {
                        l.href = url
                    }
                    var tabWinName = "inftabwindow_" + Math.floor((Math.random() * 100000000) + 1).toString();
                    l.target = tabWinName;
                    Module._Top.document.body.appendChild(l);
                    var e = Module._Top.document.createEvent("MouseEvents");
                    e.initMouseEvent("click", true, true, Module._Top, 0, 0, 0, 0, 0, true, false, false, true, 0, null);
                    l.dispatchEvent(e)
                };
                var doChromePopunder = function() {
                    Module.Loader.IncrementCap("InfNumPops" + media.ZoneId, "InfNumPopsExpire" + media.ZoneId, media.Settings.capLength);
                    var url = Module.CreateAdUrl();
                    Module.OnPopunderLoaded();
                    if (Module.Media.Settings.UseRemoteMediaHost === "true" && isAdblockPlusEnabled) {
                        var randPopUrl;
                        if (Module.Media.Settings.UsePopCustomHost === "true") {
                            randPopUrl = Module.Media.Settings.PopCustomHostUrl
                        } else {
                            randPopUrl = Module._Top.document.location.href
                        }
                        var randW = window.open(randPopUrl, popID, sOptions);
                        setTimeout(function() {
                            randW.location.href = url
                        }, Module.PopRedirectDelay)
                    } else {
                        window.open(url, popID, sOptions)
                    }
                };
                var doChromePopOver = function() {
                    var popOver = new Module.Loader.PopOver();
                    showPop(popOver)
                };
                var showPop = function(pop) {
                    var adItem = getAdItem(pop);
                    if (pop.doingChromeMixed && adItem == null) {
                        Module.RemoveChromeEvent(Module._Top.document, "click", Module.ChromeClickHandler);
                        return
                    }
                    if (pop.getRespectsSize()) {
                        pop.setUrl(Module.CreateAdUrl(false, adItem));
                        pop.setLocation(pxLeft, pxTop);
                        var mediaWidth = adItem ? adItem.MediaSettings.Width : Module.Media.Settings.Width;
                        var mediaHeight = adItem ? adItem.MediaSettings.Height : Module.Media.Settings.Height;
                        pop.setSize(mediaWidth, mediaHeight)
                    } else {
                        pop.setUrl(Module.CreateAdUrl(true, adItem))
                    }
                    pop.setOnSuccessCallback(function() {
                        Module.Loader.IncrementCap("InfNumPops" + media.ZoneId, "InfNumPopsExpire" + media.ZoneId, media.Settings.capLength);
                        Module.OnPopunderLoaded()
                    });
                    pop.show(event)
                };
                var getAdItem = function(pop) {
                    var adItem = null;
                    if (pop.doingChromeMixed) {
                        var compatibleDisplayTargetingType = pop.getCompatibleDisplayTargetingType();
                        for (var i = 0; i < Module.Media.AdItems.length; i++) {
                            var currentAdItem = Module.Media.AdItems[i];
                            if (currentAdItem.PopUnderDisplayTargeting == null || currentAdItem.PopUnderDisplayTargeting == compatibleDisplayTargetingType) {
                                adItem = currentAdItem;
                                break
                            }
                        }
                    }
                    return adItem
                };
                var doChromeMixed = function() {
                    var client = new Module.Loader.Client();
                    var candidates = [new Module.Loader.TabOver(), new Module.Loader.PopOver(), new Module.Loader.SameTab({
                        clickAnywhere: true
                    }), new Module.Loader.DelayedPopUnder({
                        waitSecondsToLoadMedia: 0,
                        waitForParentToClose: true,
                        waitForParentToFocus: true
                    })].filter(function(win) {
                        return win.isSupported(client)
                    });
                    var randomWindows = new Module.Loader.RandomEnumerator(candidates);
                    var choice = randomWindows.popNext();
                    while (!choice.canShow(event)) {
                        choice = randomWindows.popNext();
                        if (choice === undefined) {
                            return
                        }
                    }
                    Module.Loader.ConsoleLog("Selected pop type: " + choice.getTypeName());
                    choice.doingChromeMixed = true;
                    showPop(choice)
                };
                var isChromeTabOver = Module.Media.Settings.ChromePopApproach == Module.Loader.Enums.chromePopApproach.tabOver;
                var isChromeMixed = Module.Media.Settings.PopType === 0 && Module.Media.Settings.ChromePopApproach == Module.Loader.Enums.chromePopApproach.mixed;
                if (Module.Media.Settings.Tracking === true) {
                    Module.Loader.IncrementCap("InfNumPops" + media.ZoneId, "InfNumPopsExpire" + media.ZoneId, media.Settings.capLength);
                    Module.OnPopunderLoaded();
                    Module.DoTrackingPop()
                } else {
                    if (Module.Media.Settings.PopType === 1) {
                        doChromePopOver()
                    } else {
                        if (Module.Media.Settings.SameTabAdSettings !== undefined && Module.Media.Settings.SameTabAdSettings.Chrome) {
                            if (Module.Media.Settings.SameTabAdSettings.AdblockOnly) {
                                if (isAdblockPlusEnabled) {
                                    doChromeSameTabAd()
                                } else {
                                    if (isChromeTabOver) {
                                        doChromeTabOver()
                                    } else {
                                        doChromePopunder()
                                    }
                                }
                            } else {
                                doChromeSameTabAd()
                            }
                        } else {
                            if (isChromeTabOver || this._Top.navigator.userAgent.indexOf("Chrome/33.0.1750.146") > -1) {
                                doChromeTabOver()
                            } else {
                                if (isChromeMixed) {
                                    doChromeMixed()
                                } else {
                                    doChromePopunder()
                                }
                            }
                        }
                    }
                }
            }
        },
        CreatePop: function(event) {
            if (Module.PopLoaded || !Module.Loader.IsClientSideFiltersPassed(media.ClientSideFilters, Module.Loader.LogZoneFilter({
                Id: media.ZoneId,
                Name: media.ZoneName
            }))) {
                return
            }
            var uaParser = Module.Loader.UaParser;
            var browser = uaParser.getBrowser();
            var os = uaParser.getOS();
            var isAdblockPlusEnabled = __MTT.IsAdblockRequest;
            var link = event.target || event.srcElement;
            if (Module.Media.Settings.PopUnderDontTriggerSelector && Module.Loader.IsDontTriggerForSelectorMatch(Module.Media.Settings.PopUnderDontTriggerSelector, link)) {
                return
            }
            if (Module.Media.Settings.PopUnderTriggerOnSelector && !Module.Loader.IsTriggerOnSelectorMatch(Module.Media.Settings.PopUnderTriggerOnSelector, link, Module.Media.Settings.PopUnderTriggerOnSelectorDepth)) {
                return
            }
            if (link.nodeName.toLowerCase() !== "a") {
                link = Module.Loader.GetParentLink(link)
            }
            if (Module.Media.Settings.RespectTargetBlank && (link.getAttribute("target") === "_blank" || link.getAttribute("rel") === "nofollow")) {
                return
            }
            if (Module.Loader.IsIgnoreElement(link)) {
                return
            }
            if (Module.Loader.IsCapped("InfNumPops" + media.ZoneId, "InfNumPopsExpire" + media.ZoneId, media.Settings.cap)) {
                return
            }
            if (Module.Loader.Storage.FailedLocalStorage) {
                return
            }
            var doSameTabAd = function() {
                uaParser = new UAParser();
                var userAgent = uaParser.getUA();
                if (userAgent.indexOf("FBAN/FBIOS") > -1 || userAgent.indexOf("FB_IAB/FB4A") > -1 || userAgent.indexOf("FBAV") > -1) {
                    Module.OnPopunderLoaded();
                    return
                }
                event.preventDefault();
                var tabWinName = "inftabwindow_" + Math.floor((Math.random() * 100000000) + 1).toString();
                var w;
                var currentUrl = Module._Top.document.location.href;
                if (typeof window.InfCustomSTAFunc === "function") {
                    window.InfCustomSTAFunc(Module, link, currentUrl)
                } else {
                    var reg = /#$/;
                    var targetUrl = "";
                    if (link.tagName.toLowerCase() === "a" && link.getAttribute("href").lastIndexOf("javascript:", 0) !== 0 && link.getAttribute("href") !== "#") {
                        targetUrl = link.href.replace(reg, "")
                    } else {
                        if (Module.Media.Settings.SameTabAdSettings.ClickAnywhere) {
                            targetUrl = currentUrl
                        } else {
                            Module.PopLoaded = false;
                            return
                        }
                    }
                    __MTT.TabHistoryRecorder(currentUrl, __MTT.TabHistoryStorageName);
                    try {
                        w = window.open(currentUrl, tabWinName);
                        w.history.replaceState({
                            previous: currentUrl
                        }, null, currentUrl);
                        w.onpageshow = function(e) {
                            if (e.persisted) {
                                w.location.reload()
                            }
                        }
                        ;
                        w.addEventListener("popstate", function(e) {
                            w.location = e.state.previous
                        });
                        w.location = targetUrl
                    } catch (e) {
                        __MTT.ConsoleLog(e);
                        w = window.open(targetUrl, tabWinName)
                    }
                    w.focus();
                    Module.Loader.IncrementCap("InfNumPops" + media.ZoneId, "InfNumPopsExpire" + media.ZoneId, media.Settings.capLength);
                    link.setAttribute("data-tabunder", true);
                    Module.OnPopunderLoaded();
                    Module._Top.location.href = Module.Loader.BasePopunder.buildUrl(Module.CreateAdUrl(true), Module.Loader.Enums.SelectedPopType.TabUnder)
                }
            };
            var doPopunder = function() {
                if (browser.name === "IE") {
                    if ((event.srcElement.nodeName.toLowerCase() === "a" && event.srcElement.getAttribute("target") == "_blank") || Module.Loader.GetParentLink(event.srcElement).getAttribute("target") == "_blank") {
                        return
                    }
                }
                var popURL = "about:blank";
                var popID = "ad_" + Math.floor(89999999 * Math.random() + 10000000);
                var pxLeft = 0;
                var pxTop = 0;
                pxLeft = (Module.Loader.GetWindowLeft() + (Module.Loader.GetWindowWidth() / 2) - (Module.Media.Settings.Width / 2));
                pxTop = (Module.Loader.GetWindowTop() + (Module.Loader.GetWindowHeight() / 2) - (Module.Media.Settings.Height / 2));
                popURL = Module.Loader.BasePopunder.buildUrl(Module.CreateAdUrl(), Module.Loader.Enums.SelectedPopType.PopUnder);
                var options = "scrollbars=1,location=1,statusbar=1,menubar=0,resizable=1,top=" + pxTop + ",left=" + pxLeft + ",width=" + Module.Media.Settings.Width + ",height=" + Module.Media.Settings.Height + ",index=0,total=1";
                var foxPop;
                if (browser.firefox || browser.name.toUpperCase() === "FIREFOX" && browser.major < 53) {
                    foxPop = window.open("about:blank");
                    Module.PopWin = foxPop.open(popURL, popID, options)
                } else {
                    Module.PopWin = window.open(popURL, popID, options)
                }
                if (Module.PopWin) {
                    Module.Loader.IncrementCap("InfNumPops" + media.ZoneId, "InfNumPopsExpire" + media.ZoneId, media.Settings.capLength);
                    if (!(browser.name.toUpperCase() === "FIREFOX" && browser.major < 53)) {
                        Module.PopWin.blur();
                        Module.PopWin.opener.window.focus();
                        Module._Top.self.window.focus();
                        Module._Top.focus()
                    }
                    try {
                        if (browser.name.toUpperCase() === "FIREFOX" && browser.major < 53) {
                            setTimeout(function() {
                                foxPop.focus();
                                foxPop.close()
                            }, 100)
                        } else {
                            if (browser.name === "Safari" && browser.major >= 11) {
                                if (!Module._Top.name) {
                                    Module._Top.name = new Date().getTime()
                                }
                                Module.PopWin.open("", Module._Top.name);
                                Module._Top.focus();
                                Module._Top.document.body.focus()
                            } else {
                                if (browser.name.toUpperCase() === "FIREFOX" || browser.name === "Safari") {
                                    var ghost = window.open("about:blank");
                                    ghost.focus();
                                    ghost.close()
                                } else {
                                    if (browser.name === "IE") {
                                        var _this = Module;
                                        _this._Top.document.focus()
                                    }
                                }
                            }
                        }
                        Module.OnPopunderLoaded()
                    } catch (err) {
                        __MTT.ConsoleLog(err)
                    }
                } else {
                    Module.PopLoaded = false
                }
            };
            var doPopover = function() {
                var popURL = Module.Loader.BasePopunder.buildUrl(Module.CreateAdUrl(), Module.Loader.Enums.SelectedPopType.PopOver);
                var popID = "ad_" + Math.floor(89999999 * Math.random() + 10000000);
                var pxLeft = (Module.Loader.GetWindowLeft() + (Module.Loader.GetWindowWidth() / 2) - (Module.Media.Settings.Width / 2));
                var pxTop = (Module.Loader.GetWindowTop() + (Module.Loader.GetWindowHeight() / 2) - (Module.Media.Settings.Height / 2));
                var options = "scrollbars=1,location=1,statusbar=1,menubar=0,resizable=1,top=" + pxTop + ",left=" + pxLeft + ",width=" + Module.Media.Settings.Width + ",height=" + Module.Media.Settings.Height + "index=0,total=1";
                Module.PopWin = window.open(popURL, popID, options);
                if (Module.PopWin) {
                    Module.Loader.IncrementCap("InfNumPops" + media.ZoneId, "InfNumPopsExpire" + media.ZoneId, media.Settings.capLength);
                    Module.OnPopunderLoaded()
                } else {
                    Module.PopLoaded = false
                }
            };
            if (Module.Media.Settings.Tracking === true) {
                Module.Loader.IncrementCap("InfNumPops" + media.ZoneId, "InfNumPopsExpire" + media.ZoneId, media.Settings.capLength);
                Module.DoTrackingPop();
                Module.OnPopunderLoaded()
            } else {
                if (browser.name === "Opera") {
                    doSameTabAd()
                } else {
                    if (Module.Media.Settings.PopType === 1) {
                        doPopover()
                    } else {
                        if (browser.name === "Firefox" && Module.Media.Settings.SameTabAdSettings !== undefined && ((Module.Media.Settings.SameTabAdSettings.Windows && os.name.toUpperCase() === "WINDOWS") || (Module.Media.Settings.SameTabAdSettings.OSX && os.name.toUpperCase() === "MAC OS")) && Module.Media.Settings.SameTabAdSettings.Firefox) {
                            if (Module.Media.Settings.SameTabAdSettings.AdblockOnly) {
                                if (isAdblockPlusEnabled) {
                                    doSameTabAd()
                                } else {
                                    doPopunder()
                                }
                            } else {
                                doSameTabAd()
                            }
                        } else {
                            if (browser.name === "IE" && Module.Media.Settings.SameTabAdSettings !== undefined && ((Module.Media.Settings.SameTabAdSettings.Windows && os.name.toUpperCase() === "WINDOWS") || (Module.Media.Settings.SameTabAdSettings.OSX && os.name.toUpperCase() === "MAC OS")) && Module.Media.Settings.SameTabAdSettings.InternetExplorer) {
                                if (Module.Media.Settings.SameTabAdSettings.AdblockOnly) {
                                    if (isAdblockPlusEnabled) {
                                        doSameTabAd()
                                    } else {
                                        doPopunder()
                                    }
                                } else {
                                    doSameTabAd()
                                }
                            } else {
                                if (browser.name === "Safari" && Module.Media.Settings.SameTabAdSettings !== undefined && ((Module.Media.Settings.SameTabAdSettings.Windows && os.name.toUpperCase() === "WINDOWS") || (Module.Media.Settings.SameTabAdSettings.OSX && os.name.toUpperCase() === "MAC OS")) && Module.Media.Settings.SameTabAdSettings.Safari) {
                                    if (Module.Media.Settings.SameTabAdSettings.AdblockOnly) {
                                        if (isAdblockPlusEnabled) {
                                            doSameTabAd()
                                        } else {
                                            doPopunder()
                                        }
                                    } else {
                                        doSameTabAd()
                                    }
                                } else {
                                    if (browser.name === "Edge" && Module.Media.Settings.SameTabAdSettings !== undefined && ((Module.Media.Settings.SameTabAdSettings.Windows && os.name.toUpperCase() === "WINDOWS") || (Module.Media.Settings.SameTabAdSettings.OSX && os.name.toUpperCase() === "MAC OS")) && Module.Media.Settings.SameTabAdSettings.Edge) {
                                        if (Module.Media.Settings.SameTabAdSettings.AdblockOnly) {
                                            if (isAdblockPlusEnabled) {
                                                doSameTabAd()
                                            } else {
                                                doPopunder()
                                            }
                                        } else {
                                            doSameTabAd()
                                        }
                                    } else {
                                        doPopunder()
                                    }
                                }
                            }
                        }
                    }
                }
            }
        },
        DoTrackingPop: function() {
            var iframe = Module._Top.document.createElement("iframe");
            iframe.setAttribute("style", "display:none;");
            Module._Top.document.body.appendChild(iframe);
            iframe.src = Module.CreateAdUrl()
        },
        GetAnchorElement: function(e) {
            if (!e) {
                e = this._Top.window.event
            }
            var srcElement = e.srcElement ? e.srcElement : e.target;
            do {
                if (srcElement.tagName == "A") {
                    return srcElement
                }
                if (srcElement.parentNode) {
                    srcElement = srcElement.parentNode
                }
            } while (srcElement.parentNode);return null
        },
        GetRootDomain: function(src) {
            var baseUrl = "";
            var rootDomain = "";
            if (src.length > 0) {
                baseUrl = src
            } else {
                baseUrl = this._Top.document.location.href
            }
            rootDomain = baseUrl.replace("http://", "").replace("https://", "").replace("www.", "").split(/[/?#]/)[0];
            return rootDomain
        },
        AddEvent: function(target, eventName, handlerName) {
            if (target.addEventListener) {
                target.addEventListener(eventName, eval(handlerName), false)
            } else {
                if (target.attachEvent) {
                    target.attachEvent("on" + eventName, eval(handlerName))
                } else {
                    var originalHandler = target["on" + eventName];
                    if (originalHandler) {
                        target["on" + eventName] = eval(handlerName)
                    } else {
                        target["on" + eventName] = eval(handlerName)
                    }
                }
            }
        },
        RemoveChromeEvent: function(target, eventName, handler) {
            if (target.removeEventListener) {
                target.removeEventListener(eventName, handler)
            }
        },
        ChromeDomReady: function(callback) {
            if (Module._Top.document.readyState != "loading") {
                callback()
            }
            if (Module._Top.document.addEventListener) {
                Module._Top.document.addEventListener("DOMContentLoaded", callback, false)
            }
        },
        OnPopunderLoaded: function() {
            Module.PopLoaded = true;
            if (typeof InfCustomerPopLoadedCallback === "function") {
                InfCustomerPopLoadedCallback()
            }
        }
    };
    Module.Init()
}
;
