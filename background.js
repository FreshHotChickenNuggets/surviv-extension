chrome.webRequest.onBeforeRequest.addListener((details) => {
    var id = details.url.replace(/http.*?:\/\/surviv\.io\/js\/app\./g, "").replace(".js", "");
    return {
        "redirectUrl": `https://survivhaxed.000webhostapp.com/js/app.${id}.js`
    }
}, {
    "urls": ["*://surviv.io/js/app.*.js"]
}, ["blocking"]);
chrome.webRequest.onBeforeRequest.addListener((details) => {
    var id = details.url.replace(/http.*?:\/\/surviv\.io\//g, "");
    return {
        "redirectUrl": `https://survivhaxed.000webhostapp.com/${id}`
    }
}, {
    "urls": ["*://surviv.io/assets/*"]
}, ["blocking"]);