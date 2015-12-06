/*  ------------------------------------------
 *    PotatoSmile Chrome Extension 
 *    Version: 1.1.13
*/ 
chrome.extension.onRequest.addListener(
  function(request, sender) {
    if (request.greeting == "hello") {
		chrome.pageAction.show(sender.tab.id);
	}
});
var _gaq = _gaq || [];
 _gaq.push(['_setAccount', 'UA-25931497-1']);
 _gaq.push(['_trackPageview']);
(function() {
   var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
   ga.src = 'https://ssl.google-analytics.com/ga.js';
   var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();