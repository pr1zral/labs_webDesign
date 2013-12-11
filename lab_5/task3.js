/**
 * Created by Evgeniy Baranuk on 11.12.13.
 */
window.onload = function() {
    function process() {
        var result = "";

        var os = "Unidentified";
        if (window.navigator.userAgent.indexOf("Windows NT 6.2") != -1) os = "Windows 8";
        if (window.navigator.userAgent.indexOf("Windows NT 6.1") != -1) os = "Windows 7";
        if (window.navigator.userAgent.indexOf("Windows NT 6.0") != -1) os = "Windows Vista";
        if (window.navigator.userAgent.indexOf("Windows NT 5.1") != -1) os = "Windows XP";
        if (window.navigator.userAgent.indexOf("Windows NT 5.0") != -1) os = "Windows 2000";
        if (window.navigator.userAgent.indexOf("Mac")!= -1)             os = "Mac/iOS";
        if (window.navigator.userAgent.indexOf("X11")!= -1)             os = "UNIX";
        if (window.navigator.userAgent.indexOf("Linux")!= -1)           os = "Linux";
        result += "OS:" + os + "\n";

        var tmp;
        var browserVersion = navigator.userAgent.match(/(opera|chrome|safari|firefox|msie)\/?\s*(\.?\d+(\.\d+)*)/i);
        if(browserVersion && (tmp= navigator.userAgent.match(/version\/([\.\d]+)/i))!= null)
            browserVersion[2] = tmp[1];

        browserVersion = browserVersion ? [browserVersion[1], browserVersion[2]]: [navigator.appName, navigator.appVersion,'-?'];

        result += "Browser: " + browserVersion + "\n";

        var language = window.navigator.userLanguage || window.navigator.language;

        result+= "Browser language: " + language + "\n";
        if(navigator.cookieEnabled) {
            result+= "Cookie: enabled\n";
        } else {
            result+= "Cookie: disabled\n";
        }

        if (navigator.onLine) {
            result+= "Network status: online\n";
        } else {
            result+= "Network status: offline\n";
        }

        result+= "Resolution: " + window.screen.availWidth + "x" + window.screen.availHeight;
        result+= "\n"	+ "Color depth: " + screen.colorDepth +"\n" + document.URL;

        alert(result);
    }
    setInterval(process, 3000);
}
