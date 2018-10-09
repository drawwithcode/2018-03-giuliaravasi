function preload(){
  // put preload code here
}

var myColors = ['salmon', 'darkorchid', 'crimson', 'darkorange',
'gold', 'lightgreen', 'paleturquoise', 'dodgerblue', 'rosybrown',
'maroon', 'Aquamarine', 'SpringGreen', 'Tomato', 'LightCoral',
'MediumPurple', 'Pink']

function setup() {
  createCanvas(windowWidth, windowHeight);
  background('#e6ffff');
  frameRate(5)

}

function draw() {
  for(var x = 30; x < width; x += 130){

  for(var y = 30; y < height; y += 130) {

    var r = random(0, myColors.length - 1);
    r = Math.round(r);

    if(random()<0.8) {
      fill(myColors[r]);
      noStroke();
      ellipse(x, y, 40);
    } else {
      fill(200);
      noStroke();
      ellipse(x, y, 40);
    }
    }
  }
  for(var x = 95; x < width; x += 130){

  for(var y = 30; y < height; y += 130) {

    var r = random(0, myColors.length - 1);
    r = Math.round(r);

    if(random()<0.8) {
      fill(myColors[r]);
      noStroke();
      ellipse(x, y, 30);
    } else {
      fill(200);
      noStroke();
      ellipse(x, y, 30);
    }
    }
  }
  for(var x = 30; x < width; x += 130){

  for(var y = 95; y < height; y += 130) {

    var r = random(0, myColors.length - 1);
    r = Math.round(r);

    if(random()<0.8) {
      fill(myColors[r]);
      noStroke();
      ellipse(x, y, 20);
    } else {
      fill(200);
      noStroke();
      ellipse(x, y, 20);
    }
    }
  }
  for(var x = 95; x < width; x += 130){

  for(var y = 95; y < height; y += 130) {

    var r = random(0, myColors.length - 1);
    r = Math.round(r);

    if(random()<0.8) {
      fill(myColors[r]);
      noStroke();
      ellipse(x, y, 50);
    } else {
      fill(180);
      noStroke();
      ellipse(x, y, 50);
    }
    }
  }
}
