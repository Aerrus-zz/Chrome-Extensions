function open_win()
{
	var links = ['https://www.facebook.com', 'https://www.google.com'];
	
	for(var i = 0; i < links.length; i++)
	{
		chrome.tabs.create({url: links[i]});
		//window.open(links[i], "_blank");
	}
	
}

var obutton = document.querySelector("#btnOpenWindows");
obutton.addEventListener("click", open_win());