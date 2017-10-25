			
			function pagePostMessage() {
		
			var toCelsius = '" scrolling="no" frameborder="0" width="640" height="360" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true"';
			var homePage = "https://moviz4up.blogspot.com/search/label/";
		

	document.write('<div class="watchPopup active" id="srvdwld"></div>'),
		


	document.getElementById("srvdwld").innerHTML ='<div class="serversWatch"><h2>سيرفرات المشاهدة</h2><ul><li class="active" data-id="1">سيرفر 1</li><li data-id="2">سيرفر 2</li><li data-id="3">سيرفر 3</li><li data-id="4">سيرفر 4</li><li data-id="5">سيرفر 5</li><li data-id="6">سيرفر 6</li><li data-id="7">سيرفر 7</li><li data-id="8">سيرفر 8</li></ul></div><div class="embedCode"><div class="tvScreen"><div class="s1"><iframe src="' + srv1 + '' + toCelsius + '></iframe></div><div class="s2" style="display:none;"><iframe src="' + srv2 + '' + toCelsius + '></iframe></div><div class="s3" style="display:none;"><iframe src="' + srv3 + '' + toCelsius + '></iframe></div><div class="s4" style="display:none;"><iframe src="' + srv4 + '' + toCelsius + '></iframe></div><div class="s5" style="display:none;"><iframe src="' + srv5 + '' + toCelsius + '></iframe></div><div class="s6" style="display:none;"><iframe src="' + srv6 + '' + toCelsius + '></iframe></div><div class="s7" style="display:none;"><iframe src="' + srv7 + '' + toCelsius + '></iframe></div><div class="s8" style="display:none;"><iframe src="' + srv8 + '' + toCelsius + '></iframe></div></div></div>'+'<div class="downloadSection"><h2>سيرفرات التحميل</h2><div class="servers2 servers"><a href="'+Openload+'" target="_blank" class="download_links">Openload</a><a href="'+ fichier +'" target="_blank" class="download_links">1fichier</a><a href="'+Uptobox+'" target="_blank" class="download_links">Uptobox</a><a href="'+Filerio+'" target="_blank" class="download_links">Filerio</a></div></div>';
	
	
	document.getElementById("separator3").innerHTML ='<div class="tags"><p><span>الجودة :</span><a href="'+ homePage +'+ quality +'">'+ quality +'</a></p><p><span>القسم :</span> <a expr:href="data:label.url"><data:label.name/></a></p><p><span>السنة :</span><a href="'+ homePage +''+ year + '">'+ year +'</a></p><p><span>النوع :</span><a href="'+ homePage +''+ types +'">'+ types +'</a><a class="imdbICon" target="_blank" href="'+ imdb +'"><i class="fa fa-film"></i> IMDB</a><a class="showTrailer" target="_blank" href="'+ yutb +'"><i class="fa fa-youtube-play"></i> مشاهدة الاعلان</a></div>';
	
	
