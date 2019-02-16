"use strict";
const DEG_TO_RAD = 0.01745329252;
const drawCircle = (ctx, circle, scale = 1) => {
    ctx.beginPath();
    ctx.arc(circle.x, circle.y, circle.radius * scale, 0, 2 * Math.PI);
    ctx.fillStyle = "pink";
    ctx.fill();
    ctx.stroke();
};
const drawHalfEllipse = (ctx, ellipse, smaller = false, scale = 1) => {
    ctx.beginPath();
    ctx.ellipse(ellipse.x, ellipse.y, 10 * scale, 24 * scale, 
    // ellipse.xRadius,
    // ellipse.yRadius,
    ellipse.rotation * DEG_TO_RAD, 0, smaller ? Math.PI * .5 : Math.PI * .85);
    ctx.fillStyle = "pink";
    ctx.fill();
    ctx.stroke();
};
const drawFlower = (ctx, location) => {
    drawCircle(ctx, Object.assign({}, location, { radius: 10 }));
    drawHalfEllipse(ctx, Object.assign({}, location, { rotation: 0 * 72 }));
    drawHalfEllipse(ctx, Object.assign({}, location, { rotation: 1 * 72 }));
    drawHalfEllipse(ctx, Object.assign({}, location, { rotation: 2 * 72 }));
    drawHalfEllipse(ctx, Object.assign({}, location, { rotation: 3 * 72 }));
    drawHalfEllipse(ctx, Object.assign({}, location, { rotation: 4 * 72 }));
    drawHalfEllipse(ctx, Object.assign({}, location, { rotation: 0 * 72 }), true);
};
function draw() {
    var canvas = document.getElementById('canvas');
    if (canvas && canvas.getContext) {
        var ctx = canvas.getContext('2d');
        if (ctx) {
            drawFlower(ctx, { x: 100, y: 100 });
            // drawCircle(ctx, { x: 100, y:100, radius:3 })
            // drawCircle(ctx, { x: 96, y:97, radius:3 })
            // drawCircle(ctx, { x: 104, y:97, radius:3 })
            // drawCircle(ctx, { x: 98, y:93, radius:3 })
            // drawCircle(ctx, { x: 102, y:93, radius:3 })
        }
        else {
            console.log("context was null");
        }
    }
    else {
        console.log("canvas or getContext was null");
    }
}
//# sourceMappingURL=index.js.map