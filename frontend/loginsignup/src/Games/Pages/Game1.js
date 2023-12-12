"use client";
import React, { useState, useEffect, useRef } from "react";
import "./palette.css";

export default function Game1() {
  const canvasRef = useRef(null);
  const [context, setContext] = useState(null);
  const [drawing, setDrawing] = useState(false);
  const [currentColor, setCurrentColor] = useState(null);
  const [lineWidth, setLineWidth] = useState(3);
  const [drawingActions, setDrawingActions] = useState([]);
  const [currentPath, setCurrentPath] = useState([]);
  const [currentStyle, setCurrentStyle] = useState({
    color: "black",
    lineWidth: 3,
  });
  const [background, setBackground] = useState("#000000");
  const colors = [
    "red",
    "blue",
    "yellow",
    "orange",
    "green",
    "purple",
    "pink",
    "brown",
    "white",
    "black",
  ];

  useEffect(() => {
    if (canvasRef.current) {
      const canvas = canvasRef.current;
      canvas.width = 900;
      canvas.height = 500;
      const ctx = canvas.getContext("2d");
      setContext(ctx);
      reDrawPreviousData(ctx);
    }// eslint-disable-next-line
  }, []);

  const startDrawing = (e) => {
    if (context) {
      context.beginPath();
      context.moveTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
      setDrawing(true);
    }
  };

  const draw = (e) => {
    if (!drawing) return;
    if (context) {
      context.strokeStyle = currentStyle.color;
      context.lineWidth = currentStyle.lineWidth;
      context.lineTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
      context.stroke();
      setCurrentPath([
        ...currentPath,
        { x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY },
      ]);
    }
  };

  const endDrawing = () => {
    setDrawing(false);
    context && context.closePath();
    if (currentPath.length > 0) {
      setDrawingActions([
        ...drawingActions,
        { path: currentPath, style: currentStyle },
      ]);
    }
    setCurrentPath([]);
  };

  const changeColor = (color) => {
    setCurrentColor(color);
    setCurrentStyle({ ...currentStyle, color });
  };

  const changeWidth = (width) => {
    setLineWidth(width);
    setCurrentStyle({ ...currentStyle, lineWidth: width });
  };

  const undoDrawing = () => {
    if (drawingActions.length > 0) {
      drawingActions.pop();
      const newContext = canvasRef.current.getContext("2d");
      newContext.clearRect(
        0,
        0,
        canvasRef.current.width,
        canvasRef.current.height
      );

      drawingActions.forEach(({ path, style }) => {
        newContext.beginPath();
        newContext.strokeStyle = style.color;
        newContext.lineWidth = style.lineWidth;
        newContext.moveTo(path[0].x, path[0].y);
        path.forEach((point) => {
          newContext.lineTo(point.x, point.y);
        });
        newContext.stroke();
      });
    }
  };

  const clearDrawing = () => {
    setDrawingActions([]);
    setCurrentPath([]);
    const newContext = canvasRef.current.getContext("2d");
    newContext.clearRect(
      0,
      0,
      canvasRef.current.width,
      canvasRef.current.height
    );
  };

  const reDrawPreviousData = (ctx) => {
    drawingActions.forEach(({ path, style }) => {
      ctx.beginPath();
      ctx.strokeStyle = style.color;
      ctx.lineWidth = style.width;
      ctx.moveTo(path[0].x, path[0].y);
      path.forEach((point) => {
        ctx.lineTo(point.x, point.y);
      });
      ctx.stroke();
    });
  };

  return (
    <div>
      <canvas
        ref={canvasRef}
        onMouseDown={startDrawing}
        onMouseMove={draw}
        onMouseUp={endDrawing}
        onMouseOut={endDrawing}
        style={{
            border:"10px"
          }}
      />
      <div>
        <div className="board" style={{    borderStyle:"12px"}}>
          <div>
            {currentColor !== null}
            <div className="container">
              {colors.map((color, index) => (
                <div className="card" key={index}>
                  <div
                    style={{
                      background: color,
                      filter: "brightness(85%)",
                      boxShadow: color === background ? "0 0 5px #000" : "",
                    }}
                    className="box"
                    onClick={() => {
                      setBackground(color);
                      changeColor(color);
                    }}
                  >
                    <div text={`color: ${color};`}>
                      <p
                        style={{ color: color === background ? "#000" : color }}
                        onClick={() => setCurrentColor(color)}
                      ></p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div>
          <div style={{display:"flex", flexDirection:"column"}}>
            <input
              type="range"
              min="1"
              max="10"
              value={lineWidth}
              onChange={(e) => changeWidth(e.target.value)}
              style={{width:"50%", marginLeft:"25%"}}
            />
          </div>
          <div style={{ display: "flex", justifyContent:"space-evenly",}}>
            <div>
              <button className="buttonblue" onClick={undoDrawing}>
                Undo
              </button>
            </div>
            <div>
              <button className="buttonred" onClick={clearDrawing}>
                Clear
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
