(function () {
	var $ = document;
	//Creates a new modal in the way you see below
	// makeModal(btn_trigger, {'txt_title':'','txt_body':'', 'img_header':''});
	makeModal(
		$.getElementById('btn_modal'),
		{
			'txt_title': 'Modal by Structure',
			'txt_body': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere temporibus velit omnis in sed non facilis, tempore fugiat pariatur? Rerum quibusdam amet fugit consequuntur exercitationem ullam at veniam quod tenetur.',
			'img_header': 'http://pre07.deviantart.net/f3e9/th/pre/f/2016/114/2/d/mountains___flat_design_wallpaper_by_sebastian456-d9yo7m1.png'
		}
	);

	makeModal(
		$.getElementById('btn_modal_2'),
		{
			'txt_title': 'Modal 2 ! by Structure',
			'txt_body': '2 ! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere temporibus velit omnis in sed non facilis, tempore fugiat pariatur? Rerum quibusdam amet fugit consequuntur exercitationem ullam at veniam quod tenetur.',
			'img_header':'http://graphicdesignjunction.com/wp-content/uploads/2013/03/minimal+wallpapers+33.jpg'
		}
	);
})();