interface simpleCircle {
  x: number,
  y: number,
  radius: number
}

const DEG_TO_RAD = 0.01745329252;

interface simpleEllipse {
  x: number;
  y: number;
  // xRadius: number;
  // yRadius: number;
  rotation: number;
}

interface coordinates {
  x: number;
  y: number;
}

const drawCircle = (ctx: CanvasRenderingContext2D, circle: simpleCircle, scale: number=1) => {
    ctx.beginPath();
    ctx.arc(circle.x, circle.y, circle.radius * scale, 0, 2 * Math.PI)
    ctx.fillStyle = "pink";
    ctx.fill();
    ctx.stroke();
};

const drawHalfEllipse = (ctx: CanvasRenderingContext2D, ellipse: simpleEllipse, smaller: boolean=false, scale: number=1) => {
    ctx.beginPath();
    ctx.ellipse(
      ellipse.x,
      ellipse.y,
      10 * scale,
      24 * scale,
      // ellipse.xRadius,
      // ellipse.yRadius,
      ellipse.rotation * DEG_TO_RAD,
      0,
      smaller ? Math.PI * .5 : Math.PI * .85);
    ctx.fillStyle = "pink";
    ctx.fill();
    ctx.stroke();
};

const drawFlower = (ctx: CanvasRenderingContext2D, location: coordinates) => {
  drawCircle(ctx, {...location, radius: 10})
  drawHalfEllipse(ctx, { ...location, rotation: 0 * 72 });
  drawHalfEllipse(ctx, { ...location, rotation: 1 * 72 });
  drawHalfEllipse(ctx, { ...location, rotation: 2 * 72 });
  drawHalfEllipse(ctx, { ...location, rotation: 3 * 72 });
  drawHalfEllipse(ctx, { ...location, rotation: 4 * 72 });
  drawHalfEllipse(ctx, { ...location, rotation: 0 * 72 }, true)
};

function draw() {
  var canvas = <HTMLCanvasElement>document.getElementById('canvas');
  if (canvas && canvas.getContext) {
    var ctx = canvas.getContext('2d');
    if(ctx){
      drawFlower(ctx, {x: 100, y: 100});
      // drawCircle(ctx, { x: 100, y:100, radius:3 })
      // drawCircle(ctx, { x: 96, y:97, radius:3 })
      // drawCircle(ctx, { x: 104, y:97, radius:3 })
      // drawCircle(ctx, { x: 98, y:93, radius:3 })
      // drawCircle(ctx, { x: 102, y:93, radius:3 })
    } else {
      console.log("context was null");
    }
  } else {
    console.log("canvas or getContext was null");
  }
}