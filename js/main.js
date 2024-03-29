

// var fonts = ['times', 'verdana', 'arial'];
// var currentFont = 0

// function changeFont() {
//   document.body.style.fontFamily = fonts[currentFont++ % fonts.length]
// }

// setInterval(changeFont, 1000);

var element_baris = document.getElementById('baris-cavusoglu'),
element_e01 = document.getElementById('e-01'),   
element_e02 = document.getElementById('e-02'),   
element_e03 = document.getElementById('e-03'),   
element_e04 = document.getElementById('e-04'),

element_p01 = document.getElementById('p-01'),          
element_p02 = document.getElementById('p-02'),
element_p03 = document.getElementById('p-03');
element_p04 = document.getElementById('p-04'),
element_p05 = document.getElementById('p-05'),
element_p06 = document.getElementById('p-06'),
element_p07 = document.getElementById('p-07'),
element_p08 = document.getElementById('p-08'),

element_bio = document.getElementById('bio'),
element_contact = document.getElementById('contact'),
element_press = document.getElementById('press'),
element_images = document.getElementById('images'),
element_insp = document.getElementById('insp'),
element_color = document.getElementById('color');

function updateDateTime() {
  // create a new `Date` object
const today = new Date();

  var dd = today.getDate();
  var mm = today.getMonth()+1; 
  var yyyy = today.getFullYear();
  if(dd<10) {
    dd='0'+dd;
  } 
  if(mm<10) {
    mm='0'+mm;
  } 
  // get the current date and time as a string
  var now = dd+''+mm+''+yyyy;
  const currentDateTime = now.toLocaleString();

  // update the `textContent` property of the `span` element with the `id` of `datetime`
  document.querySelector('#date').textContent = currentDateTime;
}
setInterval(updateDateTime, 1000);
debugger;
console.log("");
var line1 = new LeaderLine(element_baris, element_p04, {
size:2,
startPlug: 'square',
endPlug: 'hand',
/*dropShadow: {dx: 30, dy: 30, blur: 5},*/
middleLabel: LeaderLine.captionLabel('line 1', {fontSize: 14}),
color: 'black',
});

var line2 = new LeaderLine(element_p04, element_p01, {
size:2,
startPlug: 'hand',
endPlug: 'hand',
/*dropShadow: {dx: 30, dy: 30, blur: 5},*/
middleLabel: LeaderLine.captionLabel('line 2', {fontSize: 14}),
color: 'black'
});

var line3 = new LeaderLine(LeaderLine.pointAnchor(element_baris, {x: 50, y:33}), element_p01, {
size:2,
startPlug: 'square',
endPlug: 'hand',
/*dropShadow: {dx: 30, dy: 30, blur: 5},*/
middleLabel: LeaderLine.captionLabel('line 3', {fontSize: 14}),
color: 'black'
});
line3.setOptions({startSocket: 'bottom', endSocket: 'left'});
line3.path = 'grid';

var line4 = new LeaderLine(element_p01, element_p02, {
size:2,
startPlug: 'hand',
endPlug: 'hand',
/*dropShadow: {dx: 30, dy: 30, blur: 5},*/
middleLabel: LeaderLine.captionLabel('line 4', {fontSize: 14}),
color: 'black'
});
line4.path = 'grid';

var line5 = new LeaderLine(element_baris, element_bio, {
size:2,
startPlug: 'square',
endPlug: 'hand',
/*dropShadow: {dx: 30, dy: 30, blur: 5},*/
middleLabel: LeaderLine.captionLabel('line 5', {fontSize: 14}),
color: 'black'
});
line5.setOptions({startSocket: 'right', endSocket: 'top'});
line5.path = 'grid';

var line6 = new LeaderLine(element_p02, element_p03, {
size:2,
startPlug: 'arrow2',
endPlug: 'arrow2',
/*dropShadow: {dx: 30, dy: 30, blur: 5},*/
middleLabel: LeaderLine.captionLabel('line 6', {fontSize: 14}),
color: 'black'
});
line6.setOptions({startSocket: 'top', endSocket: 'bottom'});

var line7 = new LeaderLine(element_p03, element_p05, {
size:2,
startPlug: 'hand',
endPlug: 'hand',
/*dropShadow: {dx: 30, dy: 30, blur: 5},*/
middleLabel: LeaderLine.captionLabel('line 7', {fontSize: 14}),
color: 'black'
});
line7.setOptions({startSocket: 'top', endSocket: 'top'});
line7.path = 'grid';

var line8 = new LeaderLine(element_p04, element_p06, {
dash: {animation: true},
/*dash:true,*/
size:2,
startPlug: 'square',
endPlug: 'square',
/*dropShadow: {dx: 30, dy: 30, blur: 5},*/
middleLabel: LeaderLine.captionLabel('line 8', {fontSize: 14}),
color: 'black'
});
line8.setOptions({startSocket: 'right', endSocket: 'bottom'});
line8.path = 'grid';

var line9 = new LeaderLine(LeaderLine.pointAnchor(element_baris, {x: 30, y:33}), element_e01, {
dash:true,
size:2,
startPlug: 'square',
endPlug: 'square',
/*dropShadow: {dx: 30, dy: 30, blur: 5},*/
middleLabel: LeaderLine.captionLabel('line 9', {fontSize: 14}),
color: 'black'
});
line9.setOptions({startSocket: 'bottom', endSocket: 'bottom'});
line9.path = 'grid';

var line10 = new LeaderLine(element_baris, element_e02, {
dash:true,
size:2,
startPlug: 'square',
endPlug: 'square',
/*dropShadow: {dx: 30, dy: 30, blur: 5},*/
middleLabel: LeaderLine.captionLabel('line 10', {fontSize: 14}),
color: 'black'
});

var line11 = new LeaderLine(LeaderLine.pointAnchor(element_baris, {x: 85, y:33}), element_images, {
dash:true,
size:2,
startPlug: 'square',
endPlug: 'square',
/*dropShadow: {dx: 30, dy: 30, blur: 5},*/
middleLabel: LeaderLine.captionLabel('line 11', {fontSize: 14}),
color: 'black'
});
line11.setOptions({startSocket: 'bottom', endSocket: 'left'});
line11.path = 'grid';

var line12 = new LeaderLine(element_images, element_contact, {
dash:false,
size:2,
startPlug: 'square',
endPlug: 'square',
/*dropShadow: {dx: 30, dy: 30, blur: 5},*/
middleLabel: LeaderLine.captionLabel('line 12', {fontSize: 14}),
color: 'black'
});
line12.setOptions({startSocket: 'bottom', endSocket: 'top'});

var line13 = new LeaderLine(element_p05, element_p07, {
dash:true,
size:2,
startPlug: 'square',
endPlug: 'square',
/*dropShadow: {dx: 30, dy: 30, blur: 5},*/
middleLabel: LeaderLine.captionLabel('line 13', {fontSize: 14}),
color: 'black'
});

var line14 = new LeaderLine(element_p07, element_p08, {
dash:true,
size:2,
startPlug: 'square',
endPlug: 'square',
/*dropShadow: {dx: 30, dy: 30, blur: 5},*/
middleLabel: LeaderLine.captionLabel('line 14', {fontSize: 14}),
color: 'black'
});

var line15 = new LeaderLine(element_p03, element_insp, {
dash:true,
size:2,
startPlug: 'square',
endPlug: 'square',
/*dropShadow: {dx: 30, dy: 30, blur: 5},*/
middleLabel: LeaderLine.captionLabel('line 15', {fontSize: 14}),
color: 'black'
});
line15.setOptions({startSocket: 'left', endSocket: 'top'});
line15.path = 'grid';

var line16 = new LeaderLine(element_bio, element_press, {
dash: {animation: true},
size:2,
startPlug: 'square',
endPlug: 'square',
/*dropShadow: {dx: 30, dy: 30, blur: 5},*/
middleLabel: LeaderLine.captionLabel('line 16', {fontSize: 14}),
color: 'black'
});
line16.setOptions({startSocket: 'left', endSocket: 'top'});
line16.path = 'grid';

var line17 = new LeaderLine(LeaderLine.pointAnchor(element_baris, {x: 10, y:33}), element_e03, {
dash: {animation: true},
size:2,
startPlug: 'square',
endPlug: 'square',
/*dropShadow: {dx: 30, dy: 30, blur: 5},*/
middleLabel: LeaderLine.captionLabel('line 17', {fontSize: 14}),
color: 'black'
});
line17.setOptions({startSocket: 'bottom', endSocket: 'left'});
line17.path = 'grid';

var line18 = new LeaderLine(element_p08, element_color, {
size:2,
startPlug: 'arrow2',
endPlug: 'arrow2',
/*dropShadow: {dx: 30, dy: 30, blur: 5},*/
middleLabel: LeaderLine.captionLabel('line 18', {fontSize: 14}),
color: 'black'
});
line18.setOptions({startSocket: 'left', endSocket: 'right'});

var line19 = new LeaderLine(LeaderLine.pointAnchor(element_bio, {x: 75, y:0}), element_color, {
dash: {animation: true},
size:2,
startPlug: 'hand',
endPlug: 'square',
/*dropShadow: {dx: 30, dy: 30, blur: 5},*/
middleLabel: LeaderLine.captionLabel('line 19', {fontSize: 14}),
color: 'black'
});
line19.setOptions({startSocket: 'top', endSocket: 'top'});
line19.path = 'magnet';

var line20 = new LeaderLine(element_bio, element_e04, {
size:2,
startPlug: 'hand',
endPlug: 'arrow2',
/*dropShadow: {dx: 30, dy: 30, blur: 5},*/
middleLabel: LeaderLine.captionLabel('line 20', {fontSize: 14}),
color: 'black'
});
line20.setOptions({startSocket: 'right', endSocket: 'left'});

var line21 = new LeaderLine(LeaderLine.pointAnchor(element_bio, {x: 0, y:30}), element_e03, {
size:2,
startPlug: 'arrow2',
endPlug: 'hand',
/*dropShadow: {dx: 30, dy: 30, blur: 5},*/
middleLabel: LeaderLine.captionLabel('line 21', {fontSize: 14}),
color: 'black'
});
line21.path = 'grid';
line21.setOptions({startSocket: 'left', endSocket: 'right'});

var line22 = new LeaderLine(element_e01, element_e03, {
size:2,
dash:true,
startPlug: 'square',
endPlug: 'hand',
/*dropShadow: {dx: 30, dy: 30, blur: 5},*/
middleLabel: LeaderLine.captionLabel('line 22', {fontSize: 14}),
color: 'black'
});
line22.path = 'grid';
line22.setOptions({startSocket: 'right', endSocket: 'top'});


/* P 04 */
var listen_p4 = document.getElementById('p-04');

listen_p4.addEventListener('mouseover', AnimEvent.add(function() {
line1.position();
}), false);
listen_p4.addEventListener('mouseout', AnimEvent.add(function() {
line1.position();
}), false);

listen_p4.addEventListener('mouseover', AnimEvent.add(function() {
line2.position();
}), false);
listen_p4.addEventListener('mouseout', AnimEvent.add(function() {
line2.position();
}), false);

listen_p4.addEventListener('mouseover', AnimEvent.add(function() {
line8.position();
}), false);
listen_p4.addEventListener('mouseout', AnimEvent.add(function() {
line8.position();
}), false);


/* P 02 */
var listen_p2 = document.getElementById('p-02');

listen_p2.addEventListener('mouseover', AnimEvent.add(function() {
line4.position();
}), false);
listen_p2.addEventListener('mouseout', AnimEvent.add(function() {
line4.position();
}), false);

listen_p2.addEventListener('mouseover', AnimEvent.add(function() {
line6.position();
}), false);
listen_p2.addEventListener('mouseout', AnimEvent.add(function() {
line6.position();
}), false);

/* P 02 */
var listen_p1 = document.getElementById('p-01');

listen_p1.addEventListener('mouseover', AnimEvent.add(function() {
line3.position();
}), false);
listen_p1.addEventListener('mouseout', AnimEvent.add(function() {
line3.position();
}), false);

listen_p1.addEventListener('mouseover', AnimEvent.add(function() {
line4.position();
}), false);
listen_p1.addEventListener('mouseout', AnimEvent.add(function() {
line4.position();
}), false);

listen_p1.addEventListener('mouseover', AnimEvent.add(function() {
line2.position();
}), false);
listen_p1.addEventListener('mouseout', AnimEvent.add(function() {
line2.position();
}), false);

/* E 01 */
var listen_e1 = document.getElementById('e-01');

listen_e1.addEventListener('mouseover', AnimEvent.add(function() {
line9.position();
}), false);
listen_e1.addEventListener('mouseout', AnimEvent.add(function() {
line9.position();
}), false);

listen_e1.addEventListener('mouseover', AnimEvent.add(function() {
line22.position();
}), false);
listen_e1.addEventListener('mouseout', AnimEvent.add(function() {
line22.position();
}), false);

/* E 02 */
var listen_e2 = document.getElementById('e-02');

listen_e2.addEventListener('mouseover', AnimEvent.add(function() {
line10.position();
}), false);
listen_e2.addEventListener('mouseout', AnimEvent.add(function() {
line10.position();
}), false);

/* E 03 */
var listen_e3 = document.getElementById('e-03');

listen_e3.addEventListener('mouseover', AnimEvent.add(function() {
line17.position();
}), false);
listen_e3.addEventListener('mouseout', AnimEvent.add(function() {
line17.position();
}), false);

listen_e3.addEventListener('mouseover', AnimEvent.add(function() {
line21.position();
}), false);
listen_e3.addEventListener('mouseout', AnimEvent.add(function() {
line21.position();
}), false);

listen_e3.addEventListener('mouseover', AnimEvent.add(function() {
line22.position();
}), false);
listen_e3.addEventListener('mouseout', AnimEvent.add(function() {
line22.position();
}), false);

/* E 04 */
var listen_e4 = document.getElementById('e-04');

listen_e4.addEventListener('mouseover', AnimEvent.add(function() {
line20.position();
}), false);
listen_e4.addEventListener('mouseout', AnimEvent.add(function() {
line20.position();
}), false);

/* E 04 */
var listen_contact = document.getElementById('contact');

listen_contact.addEventListener('mouseover', AnimEvent.add(function() {
line12.position();
}), false);
listen_contact.addEventListener('mouseout', AnimEvent.add(function() {
line12.position();
}), false);
