var request = require('request');
request('https://cdn.rawgit.com/metaraine/swatch/74580660c9229541622bbf1fd4198618d9f677e5/webcolors.json', function (error, response, body) {
  
  if (!error && response.statusCode == 200) {
	var rawColors = body	// do all stuff with rawColors in here
	var colors = JSON.parse(rawColors)
	for (var i = colors.length - 1; i >= 0; i--) {
		if(process.argv[2].toLowerCase() === colors[i].name.toLowerCase()) {
			console.log(colors[i].rgb.r, colors[i].rgb.g, colors[i].rgb.b)
		}
	};

  }
})