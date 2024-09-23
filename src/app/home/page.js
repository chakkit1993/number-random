"use client";
import React, { useRef, useEffect, useState } from "react";

export default function page(props) {
  const canvasRef = useRef(null);
  const image = new Image();
  const [value, setValue] = useState("Hello");
  const [num3D, setNum3D] = useState([]);
  const [num2D, setNum2D] = useState([]);
  //const num = getRandomInteger(0, 999);

  useEffect(() => {
    draw();
    // image.onload = () => {
    //   console.log("Image loaded");
    //   context.drawImage(image, 0, 0);
    // };
  }, [value, num3D, num2D]);

  const getRandomInteger = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min)) + min;
  };

  const draw = () => {
    image.onload = async () => {
      const canvas = canvasRef.current;
      const context = canvas.getContext("2d");
      canvas.width = image.naturalWidth;
      canvas.height = image.naturalHeight;
      context.drawImage(image, 0, 0, image.naturalWidth, image.naturalHeight);

      // context.fillStyle = "#000000";
      // context.fillRect(0, 0, context.canvas.width, context.canvas.height);

      //const x = image.naturalWidth / 2;
      //writeLineCenter(context, canvas);

      const x = canvas.width / 2;
      const y = 200;
      writeText(
        context,
        { text: value, x: x, y: y },
        {
          fontSize: 100,
          fontFamily: "Sans-serif",
          color: "white",
          textAlign: "center",
        }
      );
      let left_x = 300;
      let left_y = 400;
      // left
      writeText(context, {
        text: ("000" + num3D[1]).slice(-3),
        x: left_x,
        y: left_y,
      });
      writeText(context, {
        text: ("000" + num3D[2]).slice(-3),
        x: left_x,
        y: left_y * 1.5,
      });
      writeText(context, {
        text: ("000" + num3D[3]).slice(-3),
        x: left_x,
        y: left_y * 2,
      });
      let right_x = image.naturalWidth - 400;
      let right_y = 400;
      //right
      writeText(context, {
        text: ("000" + num3D[4]).slice(-3),
        x: right_x,
        y: right_y,
      });
      writeText(context, {
        text: ("000" + num3D[5]).slice(-3),
        x: right_x,
        y: right_y * 1.5,
      });
      writeText(context, {
        text: ("000" + num3D[6]).slice(-3),
        x: right_x,
        y: right_y * 2,
      });

      let center_x = image.naturalWidth / 2;
      let center_y = 400;
      //center
      writeText(context, {
        text: ("00" + num2D[0]).slice(-2),
        x: center_x + 150,
        y: center_y,
      });
      writeText(context, {
        text: ("00" + num2D[1]).slice(-2),
        x: center_x + 150,
        y: center_y * 1.5,
      });
      writeText(context, {
        text: ("00" + num2D[2]).slice(-2),
        x: center_x + 150,
        y: center_y * 2,
      });

      let center2_x = image.naturalWidth / 2;
      let center2_y = 400;
      //center
      writeText(context, {
        text: ("00" + num2D[3]).slice(-2),
        x: center2_x - 200,
        y: center2_y,
      });
      writeText(context, {
        text: ("00" + num2D[4]).slice(-2),
        x: center2_x - 200,
        y: center2_y * 1.5,
      });
      writeText(context, {
        text: ("00" + num2D[5]).slice(-2),
        x: center2_x - 200,
        y: center2_y * 2,
      });

      // writeText(context, { text: "Clue Mediator!", x: x, y: y });

      // writeText(
      //   context,
      //   { text: "Welcome to ", x: x, y: y },
      //   { textAlign: "right" }
      // );
      // writeText(
      //   context,
      //   { text: "www.cluemediator.com", x: x, y: y },
      //   { fontSize: 30, color: "green", textAlign: "center" }
      // );

      writeText(
        context,
        {
          text: getFormattedDate(),
          x: image.naturalWidth - 400,
          y: 35,
        },
        {
          fontSize: 70,
          fontFamily: "Sans-serif",
          color: "white",
          textAlign: "center",
        }
      );
    };

    image.src = "./images/pic2.jpg";
  };

  const writeLineCenter = (ctx, canvas) => {
    const x = canvas.width / 2;
    const y = 200;

    ctx.moveTo(x, 0);
    ctx.lineTo(x, canvas.height);
    ctx.stroke();
  };
  // write a text
  const writeText = (ctx, info, style = {}) => {
    const { text, x, y } = info;
    const {
      fontSize = 100,
      fontFamily = "Sans-serif",
      color = "white",
      textAlign = "left",
      textBaseline = "top",
    } = style;

    ctx.beginPath();
    ctx.font = fontSize + "px " + fontFamily;
    ctx.textAlign = textAlign;
    ctx.textBaseline = textBaseline;
    ctx.lineWidth = 8;
    ctx.strokeStyle = "black";
    const txtdim = ctx.measureText(text);
    const txtwidth = txtdim.width;
    const txtheight =
      txtdim.actualBoundingBoxAscent + txtdim.actualBoundingBoxDescent;

    ctx.strokeText(text, x, y);
    ctx.fillStyle = color;
    ctx.fillText(text, x, y);
    ctx.stroke();
  };

  const handleInputChange = (event) => {
    setValue(event.target.value);
    console.log(event.target.value);
    //draw();
  };
  const handleonClick = (event) => {
    console.log("handleonClick");
    let data3D = [
      getRandom3D(),
      getRandom3D(),
      getRandom3D(),
      getRandom3D(),
      getRandom3D(),
      getRandom3D(),
      getRandom3D(),
      getRandom3D(),
      getRandom3D(),
      getRandom3D(),
    ];

    let data2D = [
      getRandom2D(),
      getRandom2D(),
      getRandom2D(),
      getRandom2D(),
      getRandom2D(),
      getRandom2D(),
    ];

    //console.log(data);
    setNum3D(data3D);
    setNum2D(data2D);

    //draw();
  };

  function getRandom3D() {
    return getRandomInteger(0, 999);
  }

  function getRandom2D() {
    return getRandomInteger(0, 99);
  }

  function getFormattedDate() {
    var date = new Date();
    var str = date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear();
    // var str =
    //   date.getFullYear() +
    //   "-" +
    //   (date.getMonth() + 1) +
    //   "-" +
    //   date.getDate() +
    //   " " +
    //   date.getHours() +
    //   ":" +
    //   date.getMinutes() +
    //   ":" +
    //   date.getSeconds();

    return str;
  }

  return (
    <div>
      <div>Home</div>
      <div className="flex justify-center">
        {" "}
        <canvas ref={canvasRef} {...props} width={512} height={480} />
      </div>
      <input
        className="border-2 m-8"
        type="text"
        value={value}
        onChange={handleInputChange}
        onKeyUp={(e) => {
          //console.log(e.key);
        }}
      />
      <button
        onClick={handleonClick}
        class="rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2"
        type="button"
      >
        Button
      </button>
    </div>
  );
}
