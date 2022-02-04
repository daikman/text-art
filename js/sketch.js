let fontSize, img;

function preload() {
  // load the image
  img = loadImage('images/me.png');
}

function setup() {
  pixelDensity(2)

  // create canvas the same size as the default image
  cnv = createCanvas(img.width, img.height);
  cnv.parent("canvas")

  // set default text input
  document.getElementById("text-input").innerHTML = words;
  words = document.getElementById("text-input").value;

  display()

}

function display() {
  resizeCanvas(img.width, img.height)
  // draw background colour
  background(0);

  // set monospace font (important)
  textFont("monospace");
  textStyle(BOLD);

  // set font size and letters starting position
  let area = img.width * img.height
  let fontSize = (sqrt(2)*sqrt(area))/sqrt(words.length)

  textSize(fontSize);

  printLetters(words, fontSize);
}

function printLetters(words, fontSize) {
  let x = 0;
  let y = 0;

  let nRows = ceil(img.height / fontSize)
  let yOffset = img.height / nRows

  let nPerRow = img.width / (fontSize/2)
  let xOffset = img.width / nPerRow

  textAlign(LEFT, TOP)

  for (let i in words) {
    if (y < height) {

      let letter = words[i];

      col = img.get(x, y)

      for (let i in col) {
        col[i] = map(col[i], 0, 255, 10, 240);
      }

      fill(col[0], col[1], col[2]);
      text(letter, x, y);

      x += xOffset;

      if (x >= width - fontSize/2) {
        y += yOffset;
        x = 0;
      }
    }
  }
}

function setImg(file) {
  let url = URL.createObjectURL(file);
  img = loadImage(url)
  document.getElementById('img-preview').src = url
}

function save() {
  toSave = cnv.get(0, 0, cnv.width, cnv.height);
  toSave.save('text-art.png');
}
