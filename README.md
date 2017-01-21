# Paper Card Modal
https://stivsk.github.io/paper_card_modal/
## First, get the crew
#### Primero, conseguir la tripulación
Add the <b>paperCardModal.css</b> then <b>papperCardModal.js</b> and <b>finally</b> your <b>main.js</b>
<html lang="en">
<body>


	<link rel="stylesheet" href="./PaperCardModal/src/css/paperCardModal.css">
</body>
</html>

<html lang="en">
<body>


	<script src="./PaperCardModal/src/js/paperCardModal.js"></script>
	<script src="./main.js"></script>
</body>
</html>

## Put your rudder
Add the <b>button</b> which gonna call the <b>modal</b>, give it an <b>id</b> and add some <b>classes</b>, like so
<html lang="en">
<body>
	
	<button id="btn_modal" class="btn raised">Paper Card Modal !</button>

</body>
</html>

## Sail the ship
in your <b>main.js</b> you can <b>make a modal</b> by two ways
```javascript
(function () {

  var $ = document;

  // Make your modal
  makeModal(
    $.getElementById('btn_modal'),   // get the rudder (button) by its id
    {
      'txt_title': 'Modal Title',    // give it a title
      'txt_body': 'Modal text',      // add some text to the body
      'img_header': 'path_to_image'  // add a header image
    }
  );
  
})();
```
```javascript
(function () {

  var $ = document;

  var rudder = $.getElementById('btn_modal'); // get the rudder (button) by its id
  var info = {
                'txt_title': 'Modal Title',    // add a title
                'txt_body': 'Modal text',      // add some text to the body
                'img_header': 'path_to_image'  // add a header image
              }

  makeModal(rudder, info); // Make your modal
  
})();
```
