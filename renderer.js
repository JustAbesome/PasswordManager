module.exports = (res, pageName, data) => {
	const pages = [
		{
			name: 'home',
			title: 'Home'
		},
		{
			name: 'add',
			title: 'Add password'
		},
		{
			name: 'password',
			title: 'Password page'
		}
	]

	if(typeof res !== 'undefined'||
		typeof pageName !=='undefined'){
		done=false;
		pages.forEach((page) => {
			if (page.name === pageName){
				done=true;
				dataToSend = page;
				if(typeof data !== 'undefined'){
					for (var attrname in data) { page[attrname] = data[attrname]; }
				}
				res.render("pages/" + page.name, dataToSend);
				console.log("Rendered " + page.name + " page.\nData:")
				console.log(dataToSend);
			}
		});
		if(!done){
			throw 'Error: invalid page'
		}
	} else {
		throw 'Error: not enough arguments';
	}

}