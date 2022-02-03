let words, fontSize, img;

function preload() {
  // load the image
  img = loadImage('big.jpg');
}

function setup() {
  pixelDensity(2)
  
  // resize
  img.resize(img.width*4, img.height*4);
  
  // create canvas the same size as the image
  createCanvas(img.width, img.height);
  // draw background colour
  background(0);
  
  // get words
  words = biggie;
  
  // set monospace font (important)
  textFont("monospace");
  textStyle(BOLD);
  
  // set font size and letters starting position
  fontSize = 24;
  let l = fontSize;
  let dis = 0;
  textSize(fontSize);
  
  for (let i in words) {
    if (l < height) {
      let letter = words[i];
    
      col = img.get(dis, l)
      
      for (let i in col) {
        col[i] = map(col[i], 0, 255, 10, 240);
      }
      
      fill(col[0], col[1], col[2]);
      text(letter, dis, l);
      
      dis += fontSize/2;
      
      if (dis >= width) {
        l += fontSize;
        dis = 0;
      }
    }
  }
}