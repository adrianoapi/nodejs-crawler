
var request = require('request');
var cheerio = require('cheerio');

request('https://www.imdb.com/chart/moviemeter', function(err, response, body){
	if(err) console.log('Erro:' + err);

	var $ = cheerio.load(body);

	$('.lister-list tr').each(function(){
		
		var title  = $(this).find('.titleColumn a'      ).text().trim();
		var rating = $(this).find('.ratingColumn strong').text().trim();
		
		console.log('Título: ' + title + ' -  Nota: ' + rating);

	});

})