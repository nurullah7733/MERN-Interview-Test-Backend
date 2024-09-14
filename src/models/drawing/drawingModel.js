const mongoose = require("mongoose");

const objectSchema = new mongoose.Schema(
  {
    type: { type: String, required: true }, // E.g., "line", "rect", "circle", "text"
    originX: { type: String },
    originY: { type: String },
    left: { type: Number },
    top: { type: Number },
    width: { type: Number },
    height: { type: Number },
    fill: { type: String },
    stroke: { type: String },
    strokeWidth: { type: Number },
    strokeDashArray: [{ type: Number }],
    strokeLineCap: { type: String },
    strokeDashOffset: { type: Number },
    strokeLineJoin: { type: String },
    strokeUniform: { type: Boolean },
    strokeMiterLimit: { type: Number },
    scaleX: { type: Number },
    scaleY: { type: Number },
    angle: { type: Number },
    flipX: { type: Boolean },
    flipY: { type: Boolean },
    opacity: { type: Number },
    shadow: {
      color: { type: String },
      blur: { type: Number },
      offsetX: { type: Number },
      offsetY: { type: Number },
    },
    visible: { type: Boolean },
    backgroundColor: { type: String },
    fillRule: { type: String },
    paintFirst: { type: String },
    globalCompositeOperation: { type: String },
    skewX: { type: Number },
    skewY: { type: Number },
    // For 'line' objects
    x1: { type: Number },
    x2: { type: Number },
    y1: { type: Number },
    y2: { type: Number },
    // For 'circle' objects
    radius: { type: Number },
    startAngle: { type: Number },
    endAngle: { type: Number },
    // For 'rect' objects
    rx: { type: Number },
    ry: { type: Number },
    // For 'text' objects
    fontFamily: { type: String },
    fontWeight: { type: String },
    fontSize: { type: Number },
    text: { type: String },
    underline: { type: Boolean },
    overline: { type: Boolean },
    linethrough: { type: Boolean },
    textAlign: { type: String },
    fontStyle: { type: String },
    lineHeight: { type: Number },
    textBackgroundColor: { type: String },
    charSpacing: { type: Number },
    direction: { type: String },
    path: { type: String },
    pathStartOffset: { type: Number },
    pathSide: { type: String },
    pathAlign: { type: String },
    minWidth: { type: Number },
    splitByGrapheme: { type: Boolean },
  },
  { _id: false }
);

// Main drawing schema
const drawingSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    objects: { objects: [objectSchema] },
  },
  { versionKey: false, timestamps: true }
);

const Drawing = mongoose.model("Drawing", drawingSchema);

module.exports = Drawing;
