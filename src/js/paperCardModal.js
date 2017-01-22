var $ = document;
// Creates a modal using, a button and a object with
// three string properties: 'txt_title', 'txt_body' 
// and 'img_header'.
function makeModal(btn, info){
	// We assign a listener to the button who calls 
	// the modal, and then, we show its respecting content
	btn.addEventListener('click', function(){ 
		// using showModal(info), who needs the info param
		// of the makeModal(btn, info) method, we organize
		// the respecting information into the modal structure
		showModal(info);
	});
}
// starts the modal operation
function showModal(info) {
	// Create the modal container
	var modal = $.createElement("DIV");
	// structure needs the parent container where it's
	// gonna be stored, an id for it, and the info object
	modalStructure(modal, 'modal_cont', info);		
}
// assign things where they belong
function setInformation(modalInfo, txt_title, cuerpo, img_header){
	txt_title.innerHTML = modalInfo.txt_title;
	cuerpo.innerHTML = modalInfo.txt_body;
	img_header.src = modalInfo.img_header;	
}
// add classes to an object
function addClasses(obj, classes){
	for (var i = classes.length - 1; i >= 0; i--) {
		obj.classList.add(classes[i]);
	}
}
// creates everything inside the modal
function modalInsideStructure(obj, modalInfo, global_container){
	// create elements of the inside structure
	var b = $.createElement('ARTICLE');
	var c = $.createElement('SECTION');
	var p = $.createElement('IMG');
	var t = $.createElement('HEADER');
	var x = $.createElement('I');
	// give them an id
	b.id = 'modal_body_id';
	c.id = 'modal_container_article_id';
	p.id = 'modal_image_id';
	t.id = 'modal_title_id';
	x.id = 'modal_icon_close_id';
	// add some classes
	b.classList.add('body_text');
	c.classList.add('article_container');
	p.classList.add('img_res');
	t.classList.add('title');
	x.classList.add('icon_close');
	// send the information
	setInformation(modalInfo, t, b, p);
	// nest title and body inside container
	c.append(t, b);
	// establishes whos gonna close the modal
	setModalCloser(x, global_container);
	// finally append the picture and the container
	// to the modal who calls it.
	obj.append(x, p, c);
}
// establishes whos gonna close the modal 
function setModalCloser(closer, container){
	closer.addEventListener('click', function(){
		container.classList.add('material_collapse');
		container.addEventListener('animationend', function(){
			container.remove();
		});
	});
}
// It structures the modal and give it's properties
function modalStructure(obj, id, modalWindow){
	// create the global container
	var global_container = $.createElement('DIV');
	// add some ids
	obj.id = id;
	global_container.id = 'modal_global_container_id';
	// add some classes
	addClasses(obj, 
		[
			'modal_container',
			'raised_5',
			'material'
		]
	);
	global_container.classList.add('global_container');
	// then, we create the inside structure
	modalInsideStructure(obj, modalWindow, global_container);
	// add it to the global container
	global_container.append(obj);
	// and finally we append it to the body
	$.body.insertBefore(global_container, $.body.firstChild);
}