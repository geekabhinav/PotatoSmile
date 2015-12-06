/*  ------------------------------------------
 * 	 	PotatoSmile Chrome Extension 
 * 		Version: 1.1.13
*/
/* 
 * I'm using an array with codes for all smiley URL's at imgur.
 * It's structured in such a way that the script looks for the next array value > 4 in length and uses it as the image code.
 */ 
 var sm = [ 
":)", ":-)", "=)", "QLjms",
":|" , ":-|", "=|","8fVcR",
":P", ":-P", ":p", ":-p","=P","4CGcp",
":D", ":-D", "=D", "QBxXu",
"B-)", "B)", "A3CSG",
":>" , ":->", "CUGvj",
"(:|", "aCbBf",
":-\\",":\\","jehOm",
":-/", "UBGL1",
":x",":X","<3","08Ogt",
':">',':*>',"9jhM2",
"\\m/","7keAc",
":(", ":-(","=(", "eYVqm",
";)", ";-)", "vxDH0",
";;)", "IVpqv",
";))","ZW0Ws",
">:D<", "0vaD8",
':-"', "0jXiT",
':*',':-*',"pPF2k",
"</3","<\\3","geX5Y",
":-?","Kb36j",
":o",":-o",":-O",":O","TSrCt",
":@","x(","x-(","JHms3",
"#:-s","#:-S","dU3kZ",
">:)","VDTK1",
":((",":'(","LjFg5",
":))","LVLAr",
"xD","nLikz",
"/:)","BTRXw",
"<:-P","<:-p","418da",
":-b",":-B","W171t",
"8-|","veAL4",
"[-(","uqStJ",
"[-x","[-X","ztdkR",
"|:D|","|:d|","Hw0hf",
"\\:D/","\\:d/","bWfje",
">:/","aSaQO",
":-<",":<","FGtn1",
">:P",">:p","6IN1e",
"^:)^","lWW18",
":-ww", "pX4Gv",
":-h", "79Uo4",
":-v",":-V","zmI8l",
":-w", "DaHok",
":-ss",":-SS","7l6If",
":-s",":-S",":s",":S","Z79aK",
":-t", "GHEYX",
":-l",":-L","luE4c",
":-lo",":-LO","SsSbG",
"8->", "34HUx",
":-??", "GLXLV",
"%-(","gEYA8",
"X_X","x_X","X_x","x_x","jNOcT",
":!!",":-!!", "1sryR",
":-q", "trWl5",
":-bd", "kQWrE",
"=P~","=p~","e0jSB",
"=D>","=d>","WLkbB",
":-@","EkXn4",
"L-)","l-)","S5mYs",
"O:-)","DDq3H",
"(~~)","lzzyJ",
"^_^","Dew7Y",
":fp:",":FP:","APDLB"
];

function smileylove(obj){
	obj.each(function(){
		if(!$(this).hasClass('norep')){
		if($(this).hasClass('_kso')) {
			var u = $(this).text();
			var i; var match;
			//The MASSIVE regex !
			var re  = /(([lbx8%\[]|([~\|\)\(\^<>\\#>\/o]+)?([:]|[\=]|[;]+)?)-?_?([\!\)@\(\'\/\|\"><\*\^\\?3]+|[fpxqdsvhbtwoml]+[~\|:<>\/]?))/gi;
			while (match = re.exec(u)) {
				i = $.inArray(match[1],sm);
				if(i>-1){
					while(sm[i].length < 5) {
						++i;
					}
					u = u.replace(match[1],'<img src="https://imgur.com/'+sm[i]+'.gif" />');
								$(this).html(u);
					if($(this).text != u )
						$(this).addClass('norep');
				}
			}
			hide_fb_emo();

		} else {
		$(this).contents().each(function(){
			if(this.nodeType == 3){
				var u = this.nodeValue;
				var i; var match;
				var re  = /(([lbx8%\[]|([~\|\)\(\^<>\\#>\/o]+)?([:]|[\=]|[;]+)?)-?_?([\!\)@\(\'\/\|\"><\*\^\\?3]+|[fpxqdsvhbtwoml]+[~\|:<>\/]?))/gi;
				while (match = re.exec(u)) {
					i = $.inArray(match[1],sm);
					if(i>-1){
						while(sm[i].length < 5) {
							++i;
						}
						$(this).replaceWith(u.replace(match[1],'<img src="http://imgur.com/'+sm[i]+'.gif" />'));
					}
				}
			}
		});
		}
		}
	});
}
function checkForValidUrl(tabId, changeInfo, tab) {
		// If the word 'facebook' is found in the tab's URL...
		if (tab.url.indexOf('facebook.com') > -1) {
		  // ... show the page action.
		  chrome.pageAction.show(tabId);
		}
}
function hide_fb_emo(){
	$('.emoticon_text').each(function(){
		$(this).removeClass('emoticon_text').next().hide();
	});
}
function listener() {
	for(var i = 0; i < list_of_elements.length; i++) {
		smileylove($(list_of_elements[i]));
	}
	chrome.extension.sendRequest({greeting: "hello"}, function(response) {
		//set any response you want
	});
}
var list_of_elements = [
	'span.userContent',
	'div.userContent',
	'div.UFICommentContent span',
	'span.hasCaption',
	'.messages ._kso',
	'li.webMessengerMessageGroup div p'
];
$(document).ready(listener);
// $(document).on('contentchanged', 'body', listener);
$(document).mutationSummary("connect", listener, [{ all: true }]);
