var w = 250;
var h = 600;
var l = (screen.width-120)-(w/2);
var t = (screen.height/3)-(h/2);
chrome.browserAction.onClicked.addListener(function(activeTab)
{
    //var newURL = "index.html";
    chrome.windows.create({
    url: 'index.html',
    type: 'panel',
    state: 'normal',
    width: w,
    height: h,
    left: l,
    top: t,

});
});

/*
chrome.windows.create({ url: 'index.html', type: 'panel',
width: 400,
height: 600

 });
 */
//  var newURL = "http://www.youtube.com/watch?v=oHg5SJYRHA0";
