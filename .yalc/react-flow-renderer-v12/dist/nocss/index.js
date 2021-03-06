import { _ as _slicedToArray, a as _defineProperty, P as Position, C as ConnectionMode, g as getHostForElement, u as useStoreApi, b as useStore, c as addEdge, d as getMarkerId, r as rectToBox, e as getConnectedEdges, f as getDimensions, h as PanOnScrollMode, i as clamp, j as getNodesInside, k as getSelectionChanges, l as getRectOfNodes, m as ConnectionLineType, M as MarkerType, n as isNumeric, o as Provider$1, p as createStore, q as applyEdgeChanges, s as applyNodeChanges } from './index-3de2b4dd.js';
export { B as BackgroundVariant, m as ConnectionLineType, C as ConnectionMode, M as MarkerType, h as PanOnScrollMode, P as Position, c as addEdge, q as applyEdgeChanges, s as applyNodeChanges, e as getConnectedEdges, x as getIncomers, w as getOutgoers, l as getRectOfNodes, z as getTransformForBounds, v as isEdge, t as isNode, y as updateEdge, b as useStore, u as useStoreApi } from './index-3de2b4dd.js';
import { _ as _toConsumableArray, a as _objectWithoutProperties, u as useReactFlow } from './useReactFlow-3e694915.js';
export { u as useReactFlow } from './useReactFlow-3e694915.js';
import cc from 'classcat';
import React__default, { memo, useRef, useState, useEffect, createContext, forwardRef, useContext, useCallback, useMemo } from 'react';
import shallow from 'zustand/shallow';
import { zoom, zoomIdentity } from 'd3-zoom';
import { select, pointer } from 'd3-selection';
import { DraggableCore } from 'react-draggable';
export { default as MiniMap } from './index2.js';
export { ControlButton, default as Controls } from './index3.js';
export { default as Background } from './index4.js';
export { default as useUpdateNodeInternals } from './useUpdateNodeInternals.js';
export { default as useNodes } from './useNodes.js';
export { default as useEdges } from './useEdges.js';
export { default as useViewport } from './useViewport.js';
import 'zustand';
import 'zustand/context';

function Attribution(_ref) {
  var proOptions = _ref.proOptions,
      _ref$position = _ref.position,
      position = _ref$position === void 0 ? 'bottom-right' : _ref$position;

  if (((proOptions === null || proOptions === void 0 ? void 0 : proOptions.account) === 'paid-sponsor' || (proOptions === null || proOptions === void 0 ? void 0 : proOptions.account) === 'paid-enterprise' || (proOptions === null || proOptions === void 0 ? void 0 : proOptions.account) === 'paid-custom') && proOptions !== null && proOptions !== void 0 && proOptions.hideAttribution) {
    return null;
  }

  var positionClasses = "".concat(position).split('-');
  return /*#__PURE__*/React__default.createElement("div", {
    className: cc(['react-flow__attribution'].concat(_toConsumableArray(positionClasses))),
    "data-message": "Please only hide this attribution when you are subscribed to React Flow Pro: https://pro.reactflow.dev/pricing"
  }, /*#__PURE__*/React__default.createElement("a", {
    href: "https://reactflow.dev",
    target: "_blank",
    rel: "noopener noreferrer"
  }, "React Flow"));
}

var _excluded$2 = ["x", "y", "label", "labelStyle", "labelShowBg", "labelBgStyle", "labelBgPadding", "labelBgBorderRadius", "children", "className"];

function ownKeys$a(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$a(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$a(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$a(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var EdgeText = function EdgeText(_ref) {
  var x = _ref.x,
      y = _ref.y,
      label = _ref.label,
      _ref$labelStyle = _ref.labelStyle,
      labelStyle = _ref$labelStyle === void 0 ? {} : _ref$labelStyle,
      _ref$labelShowBg = _ref.labelShowBg,
      labelShowBg = _ref$labelShowBg === void 0 ? true : _ref$labelShowBg,
      _ref$labelBgStyle = _ref.labelBgStyle,
      labelBgStyle = _ref$labelBgStyle === void 0 ? {} : _ref$labelBgStyle,
      _ref$labelBgPadding = _ref.labelBgPadding,
      labelBgPadding = _ref$labelBgPadding === void 0 ? [2, 4] : _ref$labelBgPadding,
      _ref$labelBgBorderRad = _ref.labelBgBorderRadius,
      labelBgBorderRadius = _ref$labelBgBorderRad === void 0 ? 2 : _ref$labelBgBorderRad,
      children = _ref.children,
      className = _ref.className,
      rest = _objectWithoutProperties(_ref, _excluded$2);

  var edgeRef = useRef(null);

  var _useState = useState({
    x: 0,
    y: 0,
    width: 0,
    height: 0
  }),
      _useState2 = _slicedToArray(_useState, 2),
      edgeTextBbox = _useState2[0],
      setEdgeTextBbox = _useState2[1];

  var edgeTextClasses = cc(['react-flow__edge-textwrapper', className]);
  useEffect(function () {
    if (edgeRef.current) {
      var textBbox = edgeRef.current.getBBox();
      setEdgeTextBbox({
        x: textBbox.x,
        y: textBbox.y,
        width: textBbox.width,
        height: textBbox.height
      });
    }
  }, [label]);

  if (typeof label === 'undefined' || !label) {
    return null;
  }

  return /*#__PURE__*/React__default.createElement("g", _objectSpread$a({
    transform: "translate(".concat(x - edgeTextBbox.width / 2, " ").concat(y - edgeTextBbox.height / 2, ")"),
    className: edgeTextClasses
  }, rest), labelShowBg && /*#__PURE__*/React__default.createElement("rect", {
    width: edgeTextBbox.width + 2 * labelBgPadding[0],
    x: -labelBgPadding[0],
    y: -labelBgPadding[1],
    height: edgeTextBbox.height + 2 * labelBgPadding[1],
    className: "react-flow__edge-textbg",
    style: labelBgStyle,
    rx: labelBgBorderRadius,
    ry: labelBgBorderRadius
  }), /*#__PURE__*/React__default.createElement("text", {
    className: "react-flow__edge-text",
    y: edgeTextBbox.height / 2,
    dy: "0.3em",
    ref: edgeRef,
    style: labelStyle
  }, label), children);
};

var EdgeText$1 = /*#__PURE__*/memo(EdgeText);

var BaseEdge = (function (_ref) {
  var path = _ref.path,
      centerX = _ref.centerX,
      centerY = _ref.centerY,
      label = _ref.label,
      labelStyle = _ref.labelStyle,
      labelShowBg = _ref.labelShowBg,
      labelBgStyle = _ref.labelBgStyle,
      labelBgPadding = _ref.labelBgPadding,
      labelBgBorderRadius = _ref.labelBgBorderRadius,
      style = _ref.style,
      markerEnd = _ref.markerEnd,
      markerStart = _ref.markerStart;
  var text = label ? /*#__PURE__*/React__default.createElement(EdgeText$1, {
    x: centerX,
    y: centerY,
    label: label,
    labelStyle: labelStyle,
    labelShowBg: labelShowBg,
    labelBgStyle: labelBgStyle,
    labelBgPadding: labelBgPadding,
    labelBgBorderRadius: labelBgBorderRadius
  }) : null;
  return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement("path", {
    style: style,
    d: path,
    className: "react-flow__edge-path",
    markerEnd: markerEnd,
    markerStart: markerStart
  }), text);
});

function getControl(_ref) {
  var pos = _ref.pos,
      x1 = _ref.x1,
      y1 = _ref.y1,
      x2 = _ref.x2,
      y2 = _ref.y2;
  var ctX, ctY;

  switch (pos) {
    case Position.Left:
    case Position.Right:
      {
        ctX = 0.5 * (x1 + x2);
        ctY = y1;
      }
      break;

    case Position.Top:
    case Position.Bottom:
      {
        ctX = x1;
        ctY = 0.5 * (y1 + y2);
      }
      break;
  }

  return [ctX, ctY];
}

function getSimpleBezierPath(_ref2) {
  var sourceX = _ref2.sourceX,
      sourceY = _ref2.sourceY,
      _ref2$sourcePosition = _ref2.sourcePosition,
      sourcePosition = _ref2$sourcePosition === void 0 ? Position.Bottom : _ref2$sourcePosition,
      targetX = _ref2.targetX,
      targetY = _ref2.targetY,
      _ref2$targetPosition = _ref2.targetPosition,
      targetPosition = _ref2$targetPosition === void 0 ? Position.Top : _ref2$targetPosition;

  var _getControl = getControl({
    pos: sourcePosition,
    x1: sourceX,
    y1: sourceY,
    x2: targetX,
    y2: targetY
  }),
      _getControl2 = _slicedToArray(_getControl, 2),
      sourceControlX = _getControl2[0],
      sourceControlY = _getControl2[1];

  var _getControl3 = getControl({
    pos: targetPosition,
    x1: targetX,
    y1: targetY,
    x2: sourceX,
    y2: sourceY
  }),
      _getControl4 = _slicedToArray(_getControl3, 2),
      targetControlX = _getControl4[0],
      targetControlY = _getControl4[1];

  return "M".concat(sourceX, ",").concat(sourceY, " C").concat(sourceControlX, ",").concat(sourceControlY, " ").concat(targetControlX, ",").concat(targetControlY, " ").concat(targetX, ",").concat(targetY);
} // @TODO: this function will recalculate the control points
// one option is to let getXXXPath() return center points
// but will introduce breaking changes
// the getCenter() of other types of edges might need to change, too

function getSimpleBezierCenter(_ref3) {
  var sourceX = _ref3.sourceX,
      sourceY = _ref3.sourceY,
      _ref3$sourcePosition = _ref3.sourcePosition,
      sourcePosition = _ref3$sourcePosition === void 0 ? Position.Bottom : _ref3$sourcePosition,
      targetX = _ref3.targetX,
      targetY = _ref3.targetY,
      _ref3$targetPosition = _ref3.targetPosition,
      targetPosition = _ref3$targetPosition === void 0 ? Position.Top : _ref3$targetPosition;

  var _getControl5 = getControl({
    pos: sourcePosition,
    x1: sourceX,
    y1: sourceY,
    x2: targetX,
    y2: targetY
  }),
      _getControl6 = _slicedToArray(_getControl5, 2),
      sourceControlX = _getControl6[0],
      sourceControlY = _getControl6[1];

  var _getControl7 = getControl({
    pos: targetPosition,
    x1: targetX,
    y1: targetY,
    x2: sourceX,
    y2: sourceY
  }),
      _getControl8 = _slicedToArray(_getControl7, 2),
      targetControlX = _getControl8[0],
      targetControlY = _getControl8[1]; // cubic bezier t=0.5 mid point, not the actual mid point, but easy to calculate
  // https://stackoverflow.com/questions/67516101/how-to-find-distance-mid-point-of-bezier-curve


  var centerX = sourceX * 0.125 + sourceControlX * 0.375 + targetControlX * 0.375 + targetX * 0.125;
  var centerY = sourceY * 0.125 + sourceControlY * 0.375 + targetControlY * 0.375 + targetY * 0.125;
  var xOffset = Math.abs(centerX - sourceX);
  var yOffset = Math.abs(centerY - sourceY);
  return [centerX, centerY, xOffset, yOffset];
}
var SimpleBezierEdge = /*#__PURE__*/memo(function (_ref4) {
  var sourceX = _ref4.sourceX,
      sourceY = _ref4.sourceY,
      targetX = _ref4.targetX,
      targetY = _ref4.targetY,
      _ref4$sourcePosition = _ref4.sourcePosition,
      sourcePosition = _ref4$sourcePosition === void 0 ? Position.Bottom : _ref4$sourcePosition,
      _ref4$targetPosition = _ref4.targetPosition,
      targetPosition = _ref4$targetPosition === void 0 ? Position.Top : _ref4$targetPosition,
      label = _ref4.label,
      labelStyle = _ref4.labelStyle,
      labelShowBg = _ref4.labelShowBg,
      labelBgStyle = _ref4.labelBgStyle,
      labelBgPadding = _ref4.labelBgPadding,
      labelBgBorderRadius = _ref4.labelBgBorderRadius,
      style = _ref4.style,
      markerEnd = _ref4.markerEnd,
      markerStart = _ref4.markerStart;
  var params = {
    sourceX: sourceX,
    sourceY: sourceY,
    sourcePosition: sourcePosition,
    targetX: targetX,
    targetY: targetY,
    targetPosition: targetPosition
  };
  var path = getSimpleBezierPath(params);

  var _getSimpleBezierCente = getSimpleBezierCenter(params),
      _getSimpleBezierCente2 = _slicedToArray(_getSimpleBezierCente, 2),
      centerX = _getSimpleBezierCente2[0],
      centerY = _getSimpleBezierCente2[1];

  return /*#__PURE__*/React__default.createElement(BaseEdge, {
    path: path,
    centerX: centerX,
    centerY: centerY,
    label: label,
    labelStyle: labelStyle,
    labelShowBg: labelShowBg,
    labelBgStyle: labelBgStyle,
    labelBgPadding: labelBgPadding,
    labelBgBorderRadius: labelBgBorderRadius,
    style: style,
    markerEnd: markerEnd,
    markerStart: markerStart
  });
});

var getMarkerEnd = function getMarkerEnd(markerType, markerEndId) {
  if (typeof markerEndId !== 'undefined' && markerEndId) {
    return "url(#".concat(markerEndId, ")");
  }

  return typeof markerType !== 'undefined' ? "url(#react-flow__".concat(markerType, ")") : 'none';
};
var LeftOrRight = [Position.Left, Position.Right];
var getCenter = function getCenter(_ref) {
  var sourceX = _ref.sourceX,
      sourceY = _ref.sourceY,
      targetX = _ref.targetX,
      targetY = _ref.targetY,
      _ref$sourcePosition = _ref.sourcePosition,
      sourcePosition = _ref$sourcePosition === void 0 ? Position.Bottom : _ref$sourcePosition,
      _ref$targetPosition = _ref.targetPosition,
      targetPosition = _ref$targetPosition === void 0 ? Position.Top : _ref$targetPosition;
  var sourceIsLeftOrRight = LeftOrRight.includes(sourcePosition);
  var targetIsLeftOrRight = LeftOrRight.includes(targetPosition); // we expect flows to be horizontal or vertical (all handles left or right respectively top or bottom)
  // a mixed edge is when one the source is on the left and the target is on the top for example.

  var mixedEdge = sourceIsLeftOrRight && !targetIsLeftOrRight || targetIsLeftOrRight && !sourceIsLeftOrRight;

  if (mixedEdge) {
    var _xOffset = sourceIsLeftOrRight ? Math.abs(targetX - sourceX) : 0;

    var _centerX = sourceX > targetX ? sourceX - _xOffset : sourceX + _xOffset;

    var _yOffset = sourceIsLeftOrRight ? 0 : Math.abs(targetY - sourceY);

    var _centerY = sourceY < targetY ? sourceY + _yOffset : sourceY - _yOffset;

    return [_centerX, _centerY, _xOffset, _yOffset];
  }

  var xOffset = Math.abs(targetX - sourceX) / 2;
  var centerX = targetX < sourceX ? targetX + xOffset : targetX - xOffset;
  var yOffset = Math.abs(targetY - sourceY) / 2;
  var centerY = targetY < sourceY ? targetY + yOffset : targetY - yOffset;
  return [centerX, centerY, xOffset, yOffset];
};

// The name indicates the direction of the path. "bottomLeftCorner" goes
// from bottom to the left and "leftBottomCorner" goes from left to the bottom.
// We have to consider the direction of the paths because of the animated lines.

var bottomLeftCorner = function bottomLeftCorner(x, y, size) {
  return "L ".concat(x, ",").concat(y - size, "Q ").concat(x, ",").concat(y, " ").concat(x + size, ",").concat(y);
};

var leftBottomCorner = function leftBottomCorner(x, y, size) {
  return "L ".concat(x + size, ",").concat(y, "Q ").concat(x, ",").concat(y, " ").concat(x, ",").concat(y - size);
};

var bottomRightCorner = function bottomRightCorner(x, y, size) {
  return "L ".concat(x, ",").concat(y - size, "Q ").concat(x, ",").concat(y, " ").concat(x - size, ",").concat(y);
};

var rightBottomCorner = function rightBottomCorner(x, y, size) {
  return "L ".concat(x - size, ",").concat(y, "Q ").concat(x, ",").concat(y, " ").concat(x, ",").concat(y - size);
};

var leftTopCorner = function leftTopCorner(x, y, size) {
  return "L ".concat(x + size, ",").concat(y, "Q ").concat(x, ",").concat(y, " ").concat(x, ",").concat(y + size);
};

var topLeftCorner = function topLeftCorner(x, y, size) {
  return "L ".concat(x, ",").concat(y + size, "Q ").concat(x, ",").concat(y, " ").concat(x + size, ",").concat(y);
};

var topRightCorner = function topRightCorner(x, y, size) {
  return "L ".concat(x, ",").concat(y + size, "Q ").concat(x, ",").concat(y, " ").concat(x - size, ",").concat(y);
};

var rightTopCorner = function rightTopCorner(x, y, size) {
  return "L ".concat(x - size, ",").concat(y, "Q ").concat(x, ",").concat(y, " ").concat(x, ",").concat(y + size);
};

function getSmoothStepPath(_ref) {
  var sourceX = _ref.sourceX,
      sourceY = _ref.sourceY,
      _ref$sourcePosition = _ref.sourcePosition,
      sourcePosition = _ref$sourcePosition === void 0 ? Position.Bottom : _ref$sourcePosition,
      targetX = _ref.targetX,
      targetY = _ref.targetY,
      _ref$targetPosition = _ref.targetPosition,
      targetPosition = _ref$targetPosition === void 0 ? Position.Top : _ref$targetPosition,
      _ref$borderRadius = _ref.borderRadius,
      borderRadius = _ref$borderRadius === void 0 ? 5 : _ref$borderRadius,
      centerX = _ref.centerX,
      centerY = _ref.centerY;

  var _getCenter = getCenter({
    sourceX: sourceX,
    sourceY: sourceY,
    targetX: targetX,
    targetY: targetY
  }),
      _getCenter2 = _slicedToArray(_getCenter, 4),
      _centerX = _getCenter2[0],
      _centerY = _getCenter2[1],
      offsetX = _getCenter2[2],
      offsetY = _getCenter2[3];

  var cornerWidth = Math.min(borderRadius, Math.abs(targetX - sourceX));
  var cornerHeight = Math.min(borderRadius, Math.abs(targetY - sourceY));
  var cornerSize = Math.min(cornerWidth, cornerHeight, offsetX, offsetY);
  var leftAndRight = [Position.Left, Position.Right];
  var cX = typeof centerX !== 'undefined' ? centerX : _centerX;
  var cY = typeof centerY !== 'undefined' ? centerY : _centerY;
  var firstCornerPath = null;
  var secondCornerPath = null;

  if (sourceX <= targetX) {
    firstCornerPath = sourceY <= targetY ? bottomLeftCorner(sourceX, cY, cornerSize) : topLeftCorner(sourceX, cY, cornerSize);
    secondCornerPath = sourceY <= targetY ? rightTopCorner(targetX, cY, cornerSize) : rightBottomCorner(targetX, cY, cornerSize);
  } else {
    firstCornerPath = sourceY < targetY ? bottomRightCorner(sourceX, cY, cornerSize) : topRightCorner(sourceX, cY, cornerSize);
    secondCornerPath = sourceY < targetY ? leftTopCorner(targetX, cY, cornerSize) : leftBottomCorner(targetX, cY, cornerSize);
  }

  if (leftAndRight.includes(sourcePosition) && leftAndRight.includes(targetPosition)) {
    if (sourceX <= targetX) {
      firstCornerPath = sourceY <= targetY ? rightTopCorner(cX, sourceY, cornerSize) : rightBottomCorner(cX, sourceY, cornerSize);
      secondCornerPath = sourceY <= targetY ? bottomLeftCorner(cX, targetY, cornerSize) : topLeftCorner(cX, targetY, cornerSize);
    } else if (sourcePosition === Position.Right && targetPosition === Position.Left || sourcePosition === Position.Left && targetPosition === Position.Right || sourcePosition === Position.Left && targetPosition === Position.Left) {
      // and sourceX > targetX
      firstCornerPath = sourceY <= targetY ? leftTopCorner(cX, sourceY, cornerSize) : leftBottomCorner(cX, sourceY, cornerSize);
      secondCornerPath = sourceY <= targetY ? bottomRightCorner(cX, targetY, cornerSize) : topRightCorner(cX, targetY, cornerSize);
    }
  } else if (leftAndRight.includes(sourcePosition) && !leftAndRight.includes(targetPosition)) {
    if (sourceX <= targetX) {
      firstCornerPath = sourceY <= targetY ? rightTopCorner(targetX, sourceY, cornerSize) : rightBottomCorner(targetX, sourceY, cornerSize);
    } else {
      firstCornerPath = sourceY <= targetY ? leftTopCorner(targetX, sourceY, cornerSize) : leftBottomCorner(targetX, sourceY, cornerSize);
    }

    secondCornerPath = '';
  } else if (!leftAndRight.includes(sourcePosition) && leftAndRight.includes(targetPosition)) {
    if (sourceX <= targetX) {
      firstCornerPath = sourceY <= targetY ? bottomLeftCorner(sourceX, targetY, cornerSize) : topLeftCorner(sourceX, targetY, cornerSize);
    } else {
      firstCornerPath = sourceY <= targetY ? bottomRightCorner(sourceX, targetY, cornerSize) : topRightCorner(sourceX, targetY, cornerSize);
    }

    secondCornerPath = '';
  }

  return "M ".concat(sourceX, ",").concat(sourceY).concat(firstCornerPath).concat(secondCornerPath, "L ").concat(targetX, ",").concat(targetY);
}
var SmoothStepEdge = /*#__PURE__*/memo(function (_ref2) {
  var sourceX = _ref2.sourceX,
      sourceY = _ref2.sourceY,
      targetX = _ref2.targetX,
      targetY = _ref2.targetY,
      label = _ref2.label,
      labelStyle = _ref2.labelStyle,
      labelShowBg = _ref2.labelShowBg,
      labelBgStyle = _ref2.labelBgStyle,
      labelBgPadding = _ref2.labelBgPadding,
      labelBgBorderRadius = _ref2.labelBgBorderRadius,
      style = _ref2.style,
      _ref2$sourcePosition = _ref2.sourcePosition,
      sourcePosition = _ref2$sourcePosition === void 0 ? Position.Bottom : _ref2$sourcePosition,
      _ref2$targetPosition = _ref2.targetPosition,
      targetPosition = _ref2$targetPosition === void 0 ? Position.Top : _ref2$targetPosition,
      markerEnd = _ref2.markerEnd,
      markerStart = _ref2.markerStart,
      _ref2$borderRadius = _ref2.borderRadius,
      borderRadius = _ref2$borderRadius === void 0 ? 5 : _ref2$borderRadius;

  var _getCenter3 = getCenter({
    sourceX: sourceX,
    sourceY: sourceY,
    targetX: targetX,
    targetY: targetY,
    sourcePosition: sourcePosition,
    targetPosition: targetPosition
  }),
      _getCenter4 = _slicedToArray(_getCenter3, 2),
      centerX = _getCenter4[0],
      centerY = _getCenter4[1];

  var path = getSmoothStepPath({
    sourceX: sourceX,
    sourceY: sourceY,
    sourcePosition: sourcePosition,
    targetX: targetX,
    targetY: targetY,
    targetPosition: targetPosition,
    borderRadius: borderRadius
  });
  return /*#__PURE__*/React__default.createElement(BaseEdge, {
    path: path,
    centerX: centerX,
    centerY: centerY,
    label: label,
    labelStyle: labelStyle,
    labelShowBg: labelShowBg,
    labelBgStyle: labelBgStyle,
    labelBgPadding: labelBgPadding,
    labelBgBorderRadius: labelBgBorderRadius,
    style: style,
    markerEnd: markerEnd,
    markerStart: markerStart
  });
});

function ownKeys$9(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$9(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$9(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$9(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var StepEdge = /*#__PURE__*/memo(function (props) {
  return /*#__PURE__*/React__default.createElement(SmoothStepEdge, _objectSpread$9(_objectSpread$9({}, props), {}, {
    borderRadius: 0
  }));
});

var StraightEdge = /*#__PURE__*/memo(function (_ref) {
  var sourceX = _ref.sourceX,
      sourceY = _ref.sourceY,
      targetX = _ref.targetX,
      targetY = _ref.targetY,
      label = _ref.label,
      labelStyle = _ref.labelStyle,
      labelShowBg = _ref.labelShowBg,
      labelBgStyle = _ref.labelBgStyle,
      labelBgPadding = _ref.labelBgPadding,
      labelBgBorderRadius = _ref.labelBgBorderRadius,
      style = _ref.style,
      markerEnd = _ref.markerEnd,
      markerStart = _ref.markerStart;
  var yOffset = Math.abs(targetY - sourceY) / 2;
  var centerY = targetY < sourceY ? targetY + yOffset : targetY - yOffset;
  var xOffset = Math.abs(targetX - sourceX) / 2;
  var centerX = targetX < sourceX ? targetX + xOffset : targetX - xOffset;
  var path = "M ".concat(sourceX, ",").concat(sourceY, "L ").concat(targetX, ",").concat(targetY);
  return /*#__PURE__*/React__default.createElement(BaseEdge, {
    path: path,
    centerX: centerX,
    centerY: centerY,
    label: label,
    labelStyle: labelStyle,
    labelShowBg: labelShowBg,
    labelBgStyle: labelBgStyle,
    labelBgPadding: labelBgPadding,
    labelBgBorderRadius: labelBgBorderRadius,
    style: style,
    markerEnd: markerEnd,
    markerStart: markerStart
  });
});

function calculateControlOffset(distance, curvature) {
  if (distance >= 0) {
    return 0.5 * distance;
  } else {
    return curvature * 25 * Math.sqrt(-distance);
  }
}

function getControlWithCurvature(_ref) {
  var pos = _ref.pos,
      x1 = _ref.x1,
      y1 = _ref.y1,
      x2 = _ref.x2,
      y2 = _ref.y2,
      c = _ref.c;
  var ctX, ctY;

  switch (pos) {
    case Position.Left:
      {
        ctX = x1 - calculateControlOffset(x1 - x2, c);
        ctY = y1;
      }
      break;

    case Position.Right:
      {
        ctX = x1 + calculateControlOffset(x2 - x1, c);
        ctY = y1;
      }
      break;

    case Position.Top:
      {
        ctX = x1;
        ctY = y1 - calculateControlOffset(y1 - y2, c);
      }
      break;

    case Position.Bottom:
      {
        ctX = x1;
        ctY = y1 + calculateControlOffset(y2 - y1, c);
      }
      break;
  }

  return [ctX, ctY];
}

function getBezierPath(_ref2) {
  var sourceX = _ref2.sourceX,
      sourceY = _ref2.sourceY,
      _ref2$sourcePosition = _ref2.sourcePosition,
      sourcePosition = _ref2$sourcePosition === void 0 ? Position.Bottom : _ref2$sourcePosition,
      targetX = _ref2.targetX,
      targetY = _ref2.targetY,
      _ref2$targetPosition = _ref2.targetPosition,
      targetPosition = _ref2$targetPosition === void 0 ? Position.Top : _ref2$targetPosition,
      _ref2$curvature = _ref2.curvature,
      curvature = _ref2$curvature === void 0 ? 0.25 : _ref2$curvature;

  var _getControlWithCurvat = getControlWithCurvature({
    pos: sourcePosition,
    x1: sourceX,
    y1: sourceY,
    x2: targetX,
    y2: targetY,
    c: curvature
  }),
      _getControlWithCurvat2 = _slicedToArray(_getControlWithCurvat, 2),
      sourceControlX = _getControlWithCurvat2[0],
      sourceControlY = _getControlWithCurvat2[1];

  var _getControlWithCurvat3 = getControlWithCurvature({
    pos: targetPosition,
    x1: targetX,
    y1: targetY,
    x2: sourceX,
    y2: sourceY,
    c: curvature
  }),
      _getControlWithCurvat4 = _slicedToArray(_getControlWithCurvat3, 2),
      targetControlX = _getControlWithCurvat4[0],
      targetControlY = _getControlWithCurvat4[1];

  return "M".concat(sourceX, ",").concat(sourceY, " C").concat(sourceControlX, ",").concat(sourceControlY, " ").concat(targetControlX, ",").concat(targetControlY, " ").concat(targetX, ",").concat(targetY);
} // @TODO: this function will recalculate the control points
// one option is to let getXXXPath() return center points
// but will introduce breaking changes
// the getCenter() of other types of edges might need to change, too

function getBezierCenter(_ref3) {
  var sourceX = _ref3.sourceX,
      sourceY = _ref3.sourceY,
      _ref3$sourcePosition = _ref3.sourcePosition,
      sourcePosition = _ref3$sourcePosition === void 0 ? Position.Bottom : _ref3$sourcePosition,
      targetX = _ref3.targetX,
      targetY = _ref3.targetY,
      _ref3$targetPosition = _ref3.targetPosition,
      targetPosition = _ref3$targetPosition === void 0 ? Position.Top : _ref3$targetPosition,
      _ref3$curvature = _ref3.curvature,
      curvature = _ref3$curvature === void 0 ? 0.25 : _ref3$curvature;

  var _getControlWithCurvat5 = getControlWithCurvature({
    pos: sourcePosition,
    x1: sourceX,
    y1: sourceY,
    x2: targetX,
    y2: targetY,
    c: curvature
  }),
      _getControlWithCurvat6 = _slicedToArray(_getControlWithCurvat5, 2),
      sourceControlX = _getControlWithCurvat6[0],
      sourceControlY = _getControlWithCurvat6[1];

  var _getControlWithCurvat7 = getControlWithCurvature({
    pos: targetPosition,
    x1: targetX,
    y1: targetY,
    x2: sourceX,
    y2: sourceY,
    c: curvature
  }),
      _getControlWithCurvat8 = _slicedToArray(_getControlWithCurvat7, 2),
      targetControlX = _getControlWithCurvat8[0],
      targetControlY = _getControlWithCurvat8[1]; // cubic bezier t=0.5 mid point, not the actual mid point, but easy to calculate
  // https://stackoverflow.com/questions/67516101/how-to-find-distance-mid-point-of-bezier-curve


  var centerX = sourceX * 0.125 + sourceControlX * 0.375 + targetControlX * 0.375 + targetX * 0.125;
  var centerY = sourceY * 0.125 + sourceControlY * 0.375 + targetControlY * 0.375 + targetY * 0.125;
  var xOffset = Math.abs(centerX - sourceX);
  var yOffset = Math.abs(centerY - sourceY);
  return [centerX, centerY, xOffset, yOffset];
}
var BezierEdge = /*#__PURE__*/memo(function (_ref4) {
  var sourceX = _ref4.sourceX,
      sourceY = _ref4.sourceY,
      targetX = _ref4.targetX,
      targetY = _ref4.targetY,
      _ref4$sourcePosition = _ref4.sourcePosition,
      sourcePosition = _ref4$sourcePosition === void 0 ? Position.Bottom : _ref4$sourcePosition,
      _ref4$targetPosition = _ref4.targetPosition,
      targetPosition = _ref4$targetPosition === void 0 ? Position.Top : _ref4$targetPosition,
      label = _ref4.label,
      labelStyle = _ref4.labelStyle,
      labelShowBg = _ref4.labelShowBg,
      labelBgStyle = _ref4.labelBgStyle,
      labelBgPadding = _ref4.labelBgPadding,
      labelBgBorderRadius = _ref4.labelBgBorderRadius,
      style = _ref4.style,
      markerEnd = _ref4.markerEnd,
      markerStart = _ref4.markerStart,
      curvature = _ref4.curvature;
  var params = {
    sourceX: sourceX,
    sourceY: sourceY,
    sourcePosition: sourcePosition,
    targetX: targetX,
    targetY: targetY,
    targetPosition: targetPosition,
    curvature: curvature
  };
  var path = getBezierPath(params);

  var _getBezierCenter = getBezierCenter(params),
      _getBezierCenter2 = _slicedToArray(_getBezierCenter, 2),
      centerX = _getBezierCenter2[0],
      centerY = _getBezierCenter2[1];

  return /*#__PURE__*/React__default.createElement(BaseEdge, {
    path: path,
    centerX: centerX,
    centerY: centerY,
    label: label,
    labelStyle: labelStyle,
    labelShowBg: labelShowBg,
    labelBgStyle: labelBgStyle,
    labelBgPadding: labelBgPadding,
    labelBgBorderRadius: labelBgBorderRadius,
    style: style,
    markerEnd: markerEnd,
    markerStart: markerStart
  });
});

var NodeIdContext = /*#__PURE__*/createContext(null);
var Provider = NodeIdContext.Provider;
NodeIdContext.Consumer;

function checkElementBelowIsValid(event, connectionMode, isTarget, nodeId, handleId, isValidConnection, doc) {
  var elementBelow = doc.elementFromPoint(event.clientX, event.clientY);
  var elementBelowIsTarget = (elementBelow === null || elementBelow === void 0 ? void 0 : elementBelow.classList.contains('target')) || false;
  var elementBelowIsSource = (elementBelow === null || elementBelow === void 0 ? void 0 : elementBelow.classList.contains('source')) || false;
  var result = {
    elementBelow: elementBelow,
    isValid: false,
    connection: {
      source: null,
      target: null,
      sourceHandle: null,
      targetHandle: null
    },
    isHoveringHandle: false
  };

  if (elementBelow && (elementBelowIsTarget || elementBelowIsSource)) {
    result.isHoveringHandle = true; // in strict mode we don't allow target to target or source to source connections

    var isValid = connectionMode === ConnectionMode.Strict ? isTarget && elementBelowIsSource || !isTarget && elementBelowIsTarget : true;

    if (isValid) {
      var elementBelowNodeId = elementBelow.getAttribute('data-nodeid');
      var elementBelowHandleId = elementBelow.getAttribute('data-handleid');
      var connection = isTarget ? {
        source: elementBelowNodeId,
        sourceHandle: elementBelowHandleId,
        target: nodeId,
        targetHandle: handleId
      } : {
        source: nodeId,
        sourceHandle: handleId,
        target: elementBelowNodeId,
        targetHandle: elementBelowHandleId
      };
      result.connection = connection;
      result.isValid = isValidConnection(connection);
    }
  }

  return result;
}

function resetRecentHandle(hoveredHandle) {
  hoveredHandle === null || hoveredHandle === void 0 ? void 0 : hoveredHandle.classList.remove('react-flow__handle-valid');
  hoveredHandle === null || hoveredHandle === void 0 ? void 0 : hoveredHandle.classList.remove('react-flow__handle-connecting');
}

function onMouseDown(event, handleId, nodeId, setState, onConnect, isTarget, isValidConnection, connectionMode, elementEdgeUpdaterType, onEdgeUpdateEnd, onConnectStart, onConnectStop, onConnectEnd) {
  var reactFlowNode = event.target.closest('.react-flow'); // when react-flow is used inside a shadow root we can't use document

  var doc = getHostForElement(event.target);

  if (!doc) {
    return;
  }

  var elementBelow = doc.elementFromPoint(event.clientX, event.clientY);
  var elementBelowIsTarget = elementBelow === null || elementBelow === void 0 ? void 0 : elementBelow.classList.contains('target');
  var elementBelowIsSource = elementBelow === null || elementBelow === void 0 ? void 0 : elementBelow.classList.contains('source');

  if (!reactFlowNode || !elementBelowIsTarget && !elementBelowIsSource && !elementEdgeUpdaterType) {
    return;
  }

  var handleType = elementEdgeUpdaterType ? elementEdgeUpdaterType : elementBelowIsTarget ? 'target' : 'source';
  var containerBounds = reactFlowNode.getBoundingClientRect();
  var recentHoveredHandle;
  setState({
    connectionPosition: {
      x: event.clientX - containerBounds.left,
      y: event.clientY - containerBounds.top
    },
    connectionNodeId: nodeId,
    connectionHandleId: handleId,
    connectionHandleType: handleType
  });
  onConnectStart === null || onConnectStart === void 0 ? void 0 : onConnectStart(event, {
    nodeId: nodeId,
    handleId: handleId,
    handleType: handleType
  });

  function onMouseMove(event) {
    setState({
      connectionPosition: {
        x: event.clientX - containerBounds.left,
        y: event.clientY - containerBounds.top
      }
    });

    var _checkElementBelowIsV = checkElementBelowIsValid(event, connectionMode, isTarget, nodeId, handleId, isValidConnection, doc),
        connection = _checkElementBelowIsV.connection,
        elementBelow = _checkElementBelowIsV.elementBelow,
        isValid = _checkElementBelowIsV.isValid,
        isHoveringHandle = _checkElementBelowIsV.isHoveringHandle;

    if (!isHoveringHandle) {
      return resetRecentHandle(recentHoveredHandle);
    }

    var isOwnHandle = connection.source === connection.target;

    if (!isOwnHandle && elementBelow) {
      recentHoveredHandle = elementBelow;
      elementBelow.classList.add('react-flow__handle-connecting');
      elementBelow.classList.toggle('react-flow__handle-valid', isValid);
    }
  }

  function onMouseUp(event) {
    var _checkElementBelowIsV2 = checkElementBelowIsValid(event, connectionMode, isTarget, nodeId, handleId, isValidConnection, doc),
        connection = _checkElementBelowIsV2.connection,
        isValid = _checkElementBelowIsV2.isValid;

    onConnectStop === null || onConnectStop === void 0 ? void 0 : onConnectStop(event);

    if (isValid) {
      onConnect === null || onConnect === void 0 ? void 0 : onConnect(connection);
    }

    onConnectEnd === null || onConnectEnd === void 0 ? void 0 : onConnectEnd(event);

    if (elementEdgeUpdaterType && onEdgeUpdateEnd) {
      onEdgeUpdateEnd(event);
    }

    resetRecentHandle(recentHoveredHandle);
    setState({
      connectionNodeId: null,
      connectionHandleId: null,
      connectionHandleType: null
    });
    doc.removeEventListener('mousemove', onMouseMove);
    doc.removeEventListener('mouseup', onMouseUp);
  }

  doc.addEventListener('mousemove', onMouseMove);
  doc.addEventListener('mouseup', onMouseUp);
}

var _excluded$1 = ["type", "position", "isValidConnection", "isConnectable", "id", "onConnect", "children", "className"];

function ownKeys$8(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$8(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$8(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$8(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var alwaysValid = function alwaysValid() {
  return true;
};

var selector$d = function selector(s) {
  return {
    onConnectAction: s.onConnect,
    onConnectStart: s.onConnectStart,
    onConnectStop: s.onConnectStop,
    onConnectEnd: s.onConnectEnd,
    connectionMode: s.connectionMode,
    connectionStartHandle: s.connectionStartHandle,
    connectOnClick: s.connectOnClick,
    hasDefaultEdges: s.hasDefaultEdges
  };
};

var Handle = /*#__PURE__*/forwardRef(function (_ref, ref) {
  var _ref$type = _ref.type,
      type = _ref$type === void 0 ? 'source' : _ref$type,
      _ref$position = _ref.position,
      position = _ref$position === void 0 ? Position.Top : _ref$position,
      _ref$isValidConnectio = _ref.isValidConnection,
      isValidConnection = _ref$isValidConnectio === void 0 ? alwaysValid : _ref$isValidConnectio,
      _ref$isConnectable = _ref.isConnectable,
      isConnectable = _ref$isConnectable === void 0 ? true : _ref$isConnectable,
      id = _ref.id,
      onConnect = _ref.onConnect,
      children = _ref.children,
      className = _ref.className,
      rest = _objectWithoutProperties(_ref, _excluded$1);

  var store = useStoreApi();
  var nodeId = useContext(NodeIdContext);

  var _useStore = useStore(selector$d, shallow),
      onConnectAction = _useStore.onConnectAction,
      onConnectStart = _useStore.onConnectStart,
      onConnectStop = _useStore.onConnectStop,
      onConnectEnd = _useStore.onConnectEnd,
      connectionMode = _useStore.connectionMode,
      connectionStartHandle = _useStore.connectionStartHandle,
      connectOnClick = _useStore.connectOnClick,
      hasDefaultEdges = _useStore.hasDefaultEdges;

  var handleId = id || null;
  var isTarget = type === 'target';
  var onConnectExtended = useCallback(function (params) {
    var _store$getState = store.getState(),
        defaultEdgeOptions = _store$getState.defaultEdgeOptions;

    var edgeParams = _objectSpread$8(_objectSpread$8({}, defaultEdgeOptions), params);

    if (hasDefaultEdges) {
      var _store$getState2 = store.getState(),
          edges = _store$getState2.edges;

      store.setState({
        edges: addEdge(edgeParams, edges)
      });
    }

    onConnectAction === null || onConnectAction === void 0 ? void 0 : onConnectAction(edgeParams);
    onConnect === null || onConnect === void 0 ? void 0 : onConnect(edgeParams);
  }, [hasDefaultEdges, onConnectAction, onConnect]);
  var onMouseDownHandler = useCallback(function (event) {
    if (event.button === 0) {
      onMouseDown(event, handleId, nodeId, store.setState, onConnectExtended, isTarget, isValidConnection, connectionMode, undefined, undefined, onConnectStart, onConnectStop, onConnectEnd);
    }
  }, [handleId, nodeId, onConnectExtended, isTarget, isValidConnection, connectionMode, onConnectStart, onConnectStop, onConnectEnd]);
  var onClick = useCallback(function (event) {
    if (!connectionStartHandle) {
      onConnectStart === null || onConnectStart === void 0 ? void 0 : onConnectStart(event, {
        nodeId: nodeId,
        handleId: handleId,
        handleType: type
      });
      store.setState({
        connectionStartHandle: {
          nodeId: nodeId,
          type: type,
          handleId: handleId
        }
      });
    } else {
      var doc = getHostForElement(event.target);

      var _checkElementBelowIsV = checkElementBelowIsValid(event, connectionMode, connectionStartHandle.type === 'target', connectionStartHandle.nodeId, connectionStartHandle.handleId || null, isValidConnection, doc),
          connection = _checkElementBelowIsV.connection,
          isValid = _checkElementBelowIsV.isValid;

      onConnectStop === null || onConnectStop === void 0 ? void 0 : onConnectStop(event);

      if (isValid) {
        onConnectExtended(connection);
      }

      onConnectEnd === null || onConnectEnd === void 0 ? void 0 : onConnectEnd(event);
      store.setState({
        connectionStartHandle: null
      });
    }
  }, [connectionStartHandle, onConnectStart, onConnectExtended, onConnectStop, onConnectEnd, isTarget, nodeId, handleId, type]);
  var handleClasses = cc(['react-flow__handle', "react-flow__handle-".concat(position), 'nodrag', className, {
    source: !isTarget,
    target: isTarget,
    connectable: isConnectable,
    connecting: (connectionStartHandle === null || connectionStartHandle === void 0 ? void 0 : connectionStartHandle.nodeId) === nodeId && (connectionStartHandle === null || connectionStartHandle === void 0 ? void 0 : connectionStartHandle.handleId) === handleId && (connectionStartHandle === null || connectionStartHandle === void 0 ? void 0 : connectionStartHandle.type) === type
  }]);
  return /*#__PURE__*/React__default.createElement("div", _objectSpread$8({
    "data-handleid": handleId,
    "data-nodeid": nodeId,
    "data-handlepos": position,
    className: handleClasses,
    onMouseDown: onMouseDownHandler,
    onClick: connectOnClick ? onClick : undefined,
    ref: ref
  }, rest), children);
});
Handle.displayName = 'Handle';
var Handle$1 = /*#__PURE__*/memo(Handle);

var DefaultNode = function DefaultNode(_ref) {
  var data = _ref.data,
      isConnectable = _ref.isConnectable,
      _ref$targetPosition = _ref.targetPosition,
      targetPosition = _ref$targetPosition === void 0 ? Position.Top : _ref$targetPosition,
      _ref$sourcePosition = _ref.sourcePosition,
      sourcePosition = _ref$sourcePosition === void 0 ? Position.Bottom : _ref$sourcePosition;
  return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement(Handle$1, {
    type: "target",
    position: targetPosition,
    isConnectable: isConnectable
  }), data === null || data === void 0 ? void 0 : data.label, /*#__PURE__*/React__default.createElement(Handle$1, {
    type: "source",
    position: sourcePosition,
    isConnectable: isConnectable
  }));
};

DefaultNode.displayName = 'DefaultNode';
var DefaultNode$1 = /*#__PURE__*/memo(DefaultNode);

var InputNode = function InputNode(_ref) {
  var data = _ref.data,
      isConnectable = _ref.isConnectable,
      _ref$sourcePosition = _ref.sourcePosition,
      sourcePosition = _ref$sourcePosition === void 0 ? Position.Bottom : _ref$sourcePosition;
  return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, data === null || data === void 0 ? void 0 : data.label, /*#__PURE__*/React__default.createElement(Handle$1, {
    type: "source",
    position: sourcePosition,
    isConnectable: isConnectable
  }));
};

InputNode.displayName = 'InputNode';
var InputNode$1 = /*#__PURE__*/memo(InputNode);

var OutputNode = function OutputNode(_ref) {
  var data = _ref.data,
      isConnectable = _ref.isConnectable,
      _ref$targetPosition = _ref.targetPosition,
      targetPosition = _ref$targetPosition === void 0 ? Position.Top : _ref$targetPosition;
  return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement(Handle$1, {
    type: "target",
    position: targetPosition,
    isConnectable: isConnectable
  }), data === null || data === void 0 ? void 0 : data.label);
};

OutputNode.displayName = 'OutputNode';
var OutputNode$1 = /*#__PURE__*/memo(OutputNode);

var selector$c = function selector(s) {
  return {
    selectedNodes: Array.from(s.nodeInternals.values()).filter(function (n) {
      return n.selected;
    }),
    selectedEdges: s.edges.filter(function (e) {
      return e.selected;
    })
  };
};

var areEqual = function areEqual(objA, objB) {
  var selectedNodeIdsA = objA.selectedNodes.map(function (n) {
    return n.id;
  });
  var selectedNodeIdsB = objB.selectedNodes.map(function (n) {
    return n.id;
  });
  var selectedEdgeIdsA = objA.selectedEdges.map(function (e) {
    return e.id;
  });
  var selectedEdgeIdsB = objB.selectedEdges.map(function (e) {
    return e.id;
  });
  return shallow(selectedNodeIdsA, selectedNodeIdsB) && shallow(selectedEdgeIdsA, selectedEdgeIdsB);
}; // This is just a helper component for calling the onSelectionChange listener.
// @TODO: Now that we have the onNodesChange and on EdgesChange listeners, do we still need this component?


function SelectionListener(_ref) {
  var onSelectionChange = _ref.onSelectionChange;

  var _useStore = useStore(selector$c, areEqual),
      selectedNodes = _useStore.selectedNodes,
      selectedEdges = _useStore.selectedEdges;

  useEffect(function () {
    onSelectionChange({
      nodes: selectedNodes,
      edges: selectedEdges
    });
  }, [selectedNodes, selectedEdges]);
  return null;
}

var SelectionListener$1 = /*#__PURE__*/memo(SelectionListener);

var selector$b = function selector(s) {
  return {
    setNodes: s.setNodes,
    setEdges: s.setEdges,
    setDefaultNodesAndEdges: s.setDefaultNodesAndEdges,
    setMinZoom: s.setMinZoom,
    setMaxZoom: s.setMaxZoom,
    setTranslateExtent: s.setTranslateExtent,
    setNodeExtent: s.setNodeExtent,
    reset: s.reset
  };
};

function useStoreUpdater(value, setStoreState) {
  useEffect(function () {
    if (typeof value !== 'undefined') {
      setStoreState(value);
    }
  }, [value]);
}

function useDirectStoreUpdater(key, value, setState) {
  useEffect(function () {
    if (typeof value !== 'undefined') {
      // @ts-ignore
      setState(_defineProperty({}, key, value));
    }
  }, [value]);
}

var StoreUpdater = function StoreUpdater(_ref) {
  var nodes = _ref.nodes,
      edges = _ref.edges,
      defaultNodes = _ref.defaultNodes,
      defaultEdges = _ref.defaultEdges,
      onConnect = _ref.onConnect,
      onConnectStart = _ref.onConnectStart,
      onConnectStop = _ref.onConnectStop,
      onConnectEnd = _ref.onConnectEnd,
      nodesDraggable = _ref.nodesDraggable,
      nodesConnectable = _ref.nodesConnectable,
      minZoom = _ref.minZoom,
      maxZoom = _ref.maxZoom,
      nodeExtent = _ref.nodeExtent,
      onNodesChange = _ref.onNodesChange,
      onEdgesChange = _ref.onEdgesChange,
      elementsSelectable = _ref.elementsSelectable,
      connectionMode = _ref.connectionMode,
      snapGrid = _ref.snapGrid,
      snapToGrid = _ref.snapToGrid,
      translateExtent = _ref.translateExtent,
      connectOnClick = _ref.connectOnClick,
      defaultEdgeOptions = _ref.defaultEdgeOptions,
      fitView = _ref.fitView,
      fitViewOptions = _ref.fitViewOptions,
      onNodesDelete = _ref.onNodesDelete,
      onEdgesDelete = _ref.onEdgesDelete;

  var _useStore = useStore(selector$b, shallow),
      setNodes = _useStore.setNodes,
      setEdges = _useStore.setEdges,
      setDefaultNodesAndEdges = _useStore.setDefaultNodesAndEdges,
      setMinZoom = _useStore.setMinZoom,
      setMaxZoom = _useStore.setMaxZoom,
      setTranslateExtent = _useStore.setTranslateExtent,
      setNodeExtent = _useStore.setNodeExtent,
      reset = _useStore.reset;

  var store = useStoreApi();
  useEffect(function () {
    setDefaultNodesAndEdges(defaultNodes, defaultEdges);
    return function () {
      reset();
    };
  }, []);
  useDirectStoreUpdater('defaultEdgeOptions', defaultEdgeOptions, store.setState);
  useDirectStoreUpdater('connectionMode', connectionMode, store.setState);
  useDirectStoreUpdater('onConnect', onConnect, store.setState);
  useDirectStoreUpdater('onConnectStart', onConnectStart, store.setState);
  useDirectStoreUpdater('onConnectStop', onConnectStop, store.setState);
  useDirectStoreUpdater('onConnectEnd', onConnectEnd, store.setState);
  useDirectStoreUpdater('nodesDraggable', nodesDraggable, store.setState);
  useDirectStoreUpdater('nodesConnectable', nodesConnectable, store.setState);
  useDirectStoreUpdater('elementsSelectable', elementsSelectable, store.setState);
  useDirectStoreUpdater('snapToGrid', snapToGrid, store.setState);
  useDirectStoreUpdater('snapGrid', snapGrid, store.setState);
  useDirectStoreUpdater('onNodesChange', onNodesChange, store.setState);
  useDirectStoreUpdater('onEdgesChange', onEdgesChange, store.setState);
  useDirectStoreUpdater('connectOnClick', connectOnClick, store.setState);
  useDirectStoreUpdater('fitViewOnInit', fitView, store.setState);
  useDirectStoreUpdater('fitViewOnInitOptions', fitViewOptions, store.setState);
  useDirectStoreUpdater('onNodesDelete', onNodesDelete, store.setState);
  useDirectStoreUpdater('onEdgesDelete', onEdgesDelete, store.setState);
  useStoreUpdater(nodes, setNodes);
  useStoreUpdater(edges, setEdges);
  useStoreUpdater(defaultNodes, setNodes);
  useStoreUpdater(defaultEdges, setEdges);
  useStoreUpdater(minZoom, setMinZoom);
  useStoreUpdater(maxZoom, setMaxZoom);
  useStoreUpdater(translateExtent, setTranslateExtent);
  useStoreUpdater(nodeExtent, setNodeExtent);
  return null;
};

var shiftX = function shiftX(x, shift, position) {
  if (position === Position.Left) return x - shift;
  if (position === Position.Right) return x + shift;
  return x;
};

var shiftY = function shiftY(y, shift, position) {
  if (position === Position.Top) return y - shift;
  if (position === Position.Bottom) return y + shift;
  return y;
};

var EdgeAnchor = function EdgeAnchor(_ref) {
  var className = _ref.className,
      position = _ref.position,
      centerX = _ref.centerX,
      centerY = _ref.centerY,
      _ref$radius = _ref.radius,
      radius = _ref$radius === void 0 ? 10 : _ref$radius;
  return /*#__PURE__*/React__default.createElement("circle", {
    className: cc(['react-flow__edgeupdater', className]),
    cx: shiftX(centerX, radius, position),
    cy: shiftY(centerY, radius, position),
    r: radius,
    stroke: "transparent",
    fill: "transparent"
  });
};

var selector$a = function selector(s) {
  return {
    addSelectedEdges: s.addSelectedEdges,
    connectionMode: s.connectionMode
  };
};

var wrapEdge = (function (EdgeComponent) {
  var EdgeWrapper = function EdgeWrapper(_ref) {
    var id = _ref.id,
        className = _ref.className,
        type = _ref.type,
        data = _ref.data,
        onClick = _ref.onClick,
        onEdgeDoubleClick = _ref.onEdgeDoubleClick,
        selected = _ref.selected,
        animated = _ref.animated,
        label = _ref.label,
        labelStyle = _ref.labelStyle,
        labelShowBg = _ref.labelShowBg,
        labelBgStyle = _ref.labelBgStyle,
        labelBgPadding = _ref.labelBgPadding,
        labelBgBorderRadius = _ref.labelBgBorderRadius,
        style = _ref.style,
        source = _ref.source,
        target = _ref.target,
        sourceX = _ref.sourceX,
        sourceY = _ref.sourceY,
        targetX = _ref.targetX,
        targetY = _ref.targetY,
        sourcePosition = _ref.sourcePosition,
        targetPosition = _ref.targetPosition,
        elementsSelectable = _ref.elementsSelectable,
        hidden = _ref.hidden,
        sourceHandleId = _ref.sourceHandleId,
        targetHandleId = _ref.targetHandleId,
        onContextMenu = _ref.onContextMenu,
        onMouseEnter = _ref.onMouseEnter,
        onMouseMove = _ref.onMouseMove,
        onMouseLeave = _ref.onMouseLeave,
        edgeUpdaterRadius = _ref.edgeUpdaterRadius,
        onEdgeUpdate = _ref.onEdgeUpdate,
        onEdgeUpdateStart = _ref.onEdgeUpdateStart,
        onEdgeUpdateEnd = _ref.onEdgeUpdateEnd,
        markerEnd = _ref.markerEnd,
        markerStart = _ref.markerStart;
    var store = useStoreApi();

    var _useStore = useStore(selector$a, shallow),
        addSelectedEdges = _useStore.addSelectedEdges,
        connectionMode = _useStore.connectionMode;

    var _useState = useState(false),
        _useState2 = _slicedToArray(_useState, 2),
        updating = _useState2[0],
        setUpdating = _useState2[1];

    var inactive = !elementsSelectable && !onClick;
    var handleEdgeUpdate = typeof onEdgeUpdate !== 'undefined';
    var edgeClasses = cc(['react-flow__edge', "react-flow__edge-".concat(type), className, {
      selected: selected,
      animated: animated,
      inactive: inactive,
      updating: updating
    }]);
    var edgeElement = useMemo(function () {
      var el = {
        id: id,
        source: source,
        target: target,
        type: type
      };

      if (sourceHandleId) {
        el.sourceHandle = sourceHandleId;
      }

      if (targetHandleId) {
        el.targetHandle = targetHandleId;
      }

      if (typeof data !== 'undefined') {
        el.data = data;
      }

      return el;
    }, [id, source, target, type, sourceHandleId, targetHandleId, data]);
    var onEdgeClick = useCallback(function (event) {
      if (elementsSelectable) {
        store.setState({
          nodesSelectionActive: false
        });
        addSelectedEdges([edgeElement.id]);
      }

      onClick === null || onClick === void 0 ? void 0 : onClick(event, edgeElement);
    }, [elementsSelectable, edgeElement, onClick]);
    var onEdgeDoubleClickHandler = useCallback(function (event) {
      onEdgeDoubleClick === null || onEdgeDoubleClick === void 0 ? void 0 : onEdgeDoubleClick(event, edgeElement);
    }, [edgeElement, onEdgeDoubleClick]);
    var onEdgeContextMenu = useCallback(function (event) {
      onContextMenu === null || onContextMenu === void 0 ? void 0 : onContextMenu(event, edgeElement);
    }, [edgeElement, onContextMenu]);
    var onEdgeMouseEnter = useCallback(function (event) {
      onMouseEnter === null || onMouseEnter === void 0 ? void 0 : onMouseEnter(event, edgeElement);
    }, [edgeElement, onContextMenu]);
    var onEdgeMouseMove = useCallback(function (event) {
      onMouseMove === null || onMouseMove === void 0 ? void 0 : onMouseMove(event, edgeElement);
    }, [edgeElement, onContextMenu]);
    var onEdgeMouseLeave = useCallback(function (event) {
      onMouseLeave === null || onMouseLeave === void 0 ? void 0 : onMouseLeave(event, edgeElement);
    }, [edgeElement, onContextMenu]);
    var handleEdgeUpdater = useCallback(function (event, isSourceHandle) {
      var nodeId = isSourceHandle ? target : source;
      var handleId = isSourceHandle ? targetHandleId : sourceHandleId;

      var isValidConnection = function isValidConnection() {
        return true;
      };

      var isTarget = isSourceHandle;
      onEdgeUpdateStart === null || onEdgeUpdateStart === void 0 ? void 0 : onEdgeUpdateStart(event, edgeElement);

      var _onEdgeUpdate = onEdgeUpdateEnd ? function (evt) {
        return onEdgeUpdateEnd(evt, edgeElement);
      } : undefined;

      var onConnectEdge = function onConnectEdge(connection) {
        var _store$getState = store.getState(),
            edges = _store$getState.edges;

        var edge = edges.find(function (e) {
          return e.id === id;
        });

        if (edge && onEdgeUpdate) {
          onEdgeUpdate(edge, connection);
        }
      };

      onMouseDown(event, handleId, nodeId, store.setState, onConnectEdge, isTarget, isValidConnection, connectionMode, isSourceHandle ? 'target' : 'source', _onEdgeUpdate, store.getState);
    }, [id, source, target, type, sourceHandleId, targetHandleId, edgeElement, onEdgeUpdate]);
    var onEdgeUpdaterSourceMouseDown = useCallback(function (event) {
      handleEdgeUpdater(event, true);
    }, [id, source, sourceHandleId, handleEdgeUpdater]);
    var onEdgeUpdaterTargetMouseDown = useCallback(function (event) {
      handleEdgeUpdater(event, false);
    }, [id, target, targetHandleId, handleEdgeUpdater]);
    var onEdgeUpdaterMouseEnter = useCallback(function () {
      return setUpdating(true);
    }, [setUpdating]);
    var onEdgeUpdaterMouseOut = useCallback(function () {
      return setUpdating(false);
    }, [setUpdating]);
    var markerStartUrl = useMemo(function () {
      return "url(#".concat(getMarkerId(markerStart), ")");
    }, [markerStart]);
    var markerEndUrl = useMemo(function () {
      return "url(#".concat(getMarkerId(markerEnd), ")");
    }, [markerEnd]);

    if (hidden) {
      return null;
    }

    return /*#__PURE__*/React__default.createElement("g", {
      className: edgeClasses,
      onClick: onEdgeClick,
      onDoubleClick: onEdgeDoubleClickHandler,
      onContextMenu: onEdgeContextMenu,
      onMouseEnter: onEdgeMouseEnter,
      onMouseMove: onEdgeMouseMove,
      onMouseLeave: onEdgeMouseLeave
    }, /*#__PURE__*/React__default.createElement(EdgeComponent, {
      id: id,
      source: source,
      target: target,
      selected: selected,
      animated: animated,
      label: label,
      labelStyle: labelStyle,
      labelShowBg: labelShowBg,
      labelBgStyle: labelBgStyle,
      labelBgPadding: labelBgPadding,
      labelBgBorderRadius: labelBgBorderRadius,
      data: data,
      style: style,
      sourceX: sourceX,
      sourceY: sourceY,
      targetX: targetX,
      targetY: targetY,
      sourcePosition: sourcePosition,
      targetPosition: targetPosition,
      sourceHandleId: sourceHandleId,
      targetHandleId: targetHandleId,
      markerStart: markerStartUrl,
      markerEnd: markerEndUrl
    }), handleEdgeUpdate && /*#__PURE__*/React__default.createElement("g", {
      onMouseDown: onEdgeUpdaterSourceMouseDown,
      onMouseEnter: onEdgeUpdaterMouseEnter,
      onMouseOut: onEdgeUpdaterMouseOut
    }, /*#__PURE__*/React__default.createElement(EdgeAnchor, {
      position: sourcePosition,
      centerX: sourceX,
      centerY: sourceY,
      radius: edgeUpdaterRadius
    })), handleEdgeUpdate && /*#__PURE__*/React__default.createElement("g", {
      onMouseDown: onEdgeUpdaterTargetMouseDown,
      onMouseEnter: onEdgeUpdaterMouseEnter,
      onMouseOut: onEdgeUpdaterMouseOut
    }, /*#__PURE__*/React__default.createElement(EdgeAnchor, {
      position: targetPosition,
      centerX: targetX,
      centerY: targetY,
      radius: edgeUpdaterRadius
    })));
  };

  EdgeWrapper.displayName = 'EdgeWrapper';
  return /*#__PURE__*/memo(EdgeWrapper);
});

function ownKeys$7(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$7(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$7(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$7(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function createEdgeTypes(edgeTypes) {
  var standardTypes = {
    "default": wrapEdge(edgeTypes["default"] || BezierEdge),
    straight: wrapEdge(edgeTypes.bezier || StraightEdge),
    step: wrapEdge(edgeTypes.step || StepEdge),
    smoothstep: wrapEdge(edgeTypes.step || SmoothStepEdge),
    simplebezier: wrapEdge(edgeTypes.simplebezier || SimpleBezierEdge)
  };
  var wrappedTypes = {};
  var specialTypes = Object.keys(edgeTypes).filter(function (k) {
    return !['default', 'bezier'].includes(k);
  }).reduce(function (res, key) {
    res[key] = wrapEdge(edgeTypes[key] || BezierEdge);
    return res;
  }, wrappedTypes);
  return _objectSpread$7(_objectSpread$7({}, standardTypes), specialTypes);
}
function getHandlePosition(position, nodeRect) {
  var handle = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  var x = ((handle === null || handle === void 0 ? void 0 : handle.x) || 0) + nodeRect.x;
  var y = ((handle === null || handle === void 0 ? void 0 : handle.y) || 0) + nodeRect.y;
  var width = (handle === null || handle === void 0 ? void 0 : handle.width) || nodeRect.width;
  var height = (handle === null || handle === void 0 ? void 0 : handle.height) || nodeRect.height;

  switch (position) {
    case Position.Top:
      return {
        x: x + width / 2,
        y: y
      };

    case Position.Right:
      return {
        x: x + width,
        y: y + height / 2
      };

    case Position.Bottom:
      return {
        x: x + width / 2,
        y: y + height
      };

    case Position.Left:
      return {
        x: x,
        y: y + height / 2
      };
  }
}
function getHandle(bounds, handleId) {
  if (!bounds) {
    return null;
  } // there is no handleId when there are no multiple handles/ handles with ids
  // so we just pick the first one


  var handle = null;

  if (bounds.length === 1 || !handleId) {
    handle = bounds[0];
  } else if (handleId) {
    handle = bounds.find(function (d) {
      return d.id === handleId;
    });
  }

  return typeof handle === 'undefined' ? null : handle;
}
var getEdgePositions = function getEdgePositions(sourceNodeRect, sourceHandle, sourcePosition, targetNodeRect, targetHandle, targetPosition) {
  var sourceHandlePos = getHandlePosition(sourcePosition, sourceNodeRect, sourceHandle);
  var targetHandlePos = getHandlePosition(targetPosition, targetNodeRect, targetHandle);
  return {
    sourceX: sourceHandlePos.x,
    sourceY: sourceHandlePos.y,
    targetX: targetHandlePos.x,
    targetY: targetHandlePos.y
  };
};
function isEdgeVisible(_ref) {
  var sourcePos = _ref.sourcePos,
      targetPos = _ref.targetPos,
      sourceWidth = _ref.sourceWidth,
      sourceHeight = _ref.sourceHeight,
      targetWidth = _ref.targetWidth,
      targetHeight = _ref.targetHeight,
      width = _ref.width,
      height = _ref.height,
      transform = _ref.transform;
  var edgeBox = {
    x: Math.min(sourcePos.x, targetPos.x),
    y: Math.min(sourcePos.y, targetPos.y),
    x2: Math.max(sourcePos.x + sourceWidth, targetPos.x + targetWidth),
    y2: Math.max(sourcePos.y + sourceHeight, targetPos.y + targetHeight)
  };

  if (edgeBox.x === edgeBox.x2) {
    edgeBox.x2 += 1;
  }

  if (edgeBox.y === edgeBox.y2) {
    edgeBox.y2 += 1;
  }

  var viewBox = rectToBox({
    x: (0 - transform[0]) / transform[2],
    y: (0 - transform[1]) / transform[2],
    width: width / transform[2],
    height: height / transform[2]
  });
  var xOverlap = Math.max(0, Math.min(viewBox.x2, edgeBox.x2) - Math.max(viewBox.x, edgeBox.x));
  var yOverlap = Math.max(0, Math.min(viewBox.y2, edgeBox.y2) - Math.max(viewBox.y, edgeBox.y));
  var overlappingArea = Math.ceil(xOverlap * yOverlap);
  return overlappingArea > 0;
}
function getNodeData(nodeInternals, nodeId) {
  var _node$positionAbsolut, _node$positionAbsolut2, _node$positionAbsolut3, _node$positionAbsolut4;

  var node = nodeInternals.get(nodeId);
  var handleBounds = node === null || node === void 0 ? void 0 : node.handleBounds;
  var isInvalid = !node || !node.handleBounds || !node.width || !node.height || typeof ((_node$positionAbsolut = node.positionAbsolute) === null || _node$positionAbsolut === void 0 ? void 0 : _node$positionAbsolut.x) === 'undefined' || typeof ((_node$positionAbsolut2 = node.positionAbsolute) === null || _node$positionAbsolut2 === void 0 ? void 0 : _node$positionAbsolut2.y) === 'undefined';
  return [{
    x: (node === null || node === void 0 ? void 0 : (_node$positionAbsolut3 = node.positionAbsolute) === null || _node$positionAbsolut3 === void 0 ? void 0 : _node$positionAbsolut3.x) || 0,
    y: (node === null || node === void 0 ? void 0 : (_node$positionAbsolut4 = node.positionAbsolute) === null || _node$positionAbsolut4 === void 0 ? void 0 : _node$positionAbsolut4.y) || 0,
    width: (node === null || node === void 0 ? void 0 : node.width) || 0,
    height: (node === null || node === void 0 ? void 0 : node.height) || 0
  }, handleBounds || null, !isInvalid];
}

var doc = typeof document !== 'undefined' ? document : null; // the keycode can be a string 'a' or an array of strings ['a', 'a+d']
// a string means a single key 'a' or a combination when '+' is used 'a+d'
// an array means different possibilites. Explainer: ['a', 'd+s'] here the
// user can use the single key 'a' or the combination 'd' + 's'

var useKeyPress = (function () {
  var keyCode = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
    target: doc
  };

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      keyPressed = _useState2[0],
      setKeyPressed = _useState2[1]; // we need to remember the pressed keys in order to support combinations


  var pressedKeys = useRef(new Set([])); // keyCodes = array with single keys [['a']] or key combinations [['a', 's']]
  // keysToWatch = array with all keys flattened ['a', 'd', 'ShiftLeft']
  // used to check if we store event.code or event.key. When the code is in the list of keysToWatch
  // we use the code otherwise the key. Explainer: When you press the left "command" key, the code is "MetaLeft"
  // and the key is "Meta". We want users to be able to pass keys and codes so we assume that the key is meant when
  // we can't find it in the list of keysToWatch.

  var _useMemo = useMemo(function () {
    if (keyCode !== null) {
      var keyCodeArr = Array.isArray(keyCode) ? keyCode : [keyCode];
      var keys = keyCodeArr.filter(function (kc) {
        return typeof kc === 'string';
      }).map(function (kc) {
        return kc.split('+');
      });
      var keysFlat = keys.reduce(function (res, item) {
        return res.concat.apply(res, _toConsumableArray(item));
      }, []);
      return [keys, keysFlat];
    }

    return [[], []];
  }, [keyCode]),
      _useMemo2 = _slicedToArray(_useMemo, 2),
      keyCodes = _useMemo2[0],
      keysToWatch = _useMemo2[1];

  useEffect(function () {
    if (keyCode !== null) {
      var _options$target, _options$target2;

      var downHandler = function downHandler(event) {
        if (isInputDOMNode(event)) {
          return false;
        }

        var keyOrCode = useKeyOrCode(event.code, keysToWatch);
        pressedKeys.current.add(event[keyOrCode]);

        if (isMatchingKey(keyCodes, pressedKeys.current, false)) {
          event.preventDefault();
          setKeyPressed(true);
        }
      };

      var upHandler = function upHandler(event) {
        if (isInputDOMNode(event)) {
          return false;
        }

        var keyOrCode = useKeyOrCode(event.code, keysToWatch);

        if (isMatchingKey(keyCodes, pressedKeys.current, true)) {
          setKeyPressed(false);
          pressedKeys.current.clear();
        } else {
          pressedKeys.current["delete"](event[keyOrCode]);
        }
      };

      var resetHandler = function resetHandler() {
        pressedKeys.current.clear();
        setKeyPressed(false);
      };

      options === null || options === void 0 ? void 0 : (_options$target = options.target) === null || _options$target === void 0 ? void 0 : _options$target.addEventListener('keydown', downHandler);
      options === null || options === void 0 ? void 0 : (_options$target2 = options.target) === null || _options$target2 === void 0 ? void 0 : _options$target2.addEventListener('keyup', upHandler);
      window.addEventListener('blur', resetHandler);
      return function () {
        var _options$target3, _options$target4;

        options === null || options === void 0 ? void 0 : (_options$target3 = options.target) === null || _options$target3 === void 0 ? void 0 : _options$target3.removeEventListener('keydown', downHandler);
        options === null || options === void 0 ? void 0 : (_options$target4 = options.target) === null || _options$target4 === void 0 ? void 0 : _options$target4.removeEventListener('keyup', upHandler);
        window.removeEventListener('blur', resetHandler);
      };
    }
  }, [keyCode, setKeyPressed]);
  return keyPressed;
}); // utils

function isMatchingKey(keyCodes, pressedKeys, isUp) {
  return keyCodes // we only want to compare same sizes of keyCode definitions
  // and pressed keys. When the user specified 'Meta' as a key somewhere
  // this would also be truthy without this filter when user presses 'Meta' + 'r'
  .filter(function (keys) {
    return isUp || keys.length === pressedKeys.size;
  }) // since we want to support multiple possibilities only one of the
  // combinations need to be part of the pressed keys
  .some(function (keys) {
    return keys.every(function (k) {
      return pressedKeys.has(k);
    });
  });
}

function useKeyOrCode(eventCode, keysToWatch) {
  return keysToWatch.includes(eventCode) ? 'code' : 'key';
}

function isInputDOMNode(event) {
  var target = event.target;
  return ['INPUT', 'SELECT', 'TEXTAREA'].includes(target === null || target === void 0 ? void 0 : target.nodeName) || (target === null || target === void 0 ? void 0 : target.hasAttribute('contenteditable'));
}

var selector$9 = function selector(s) {
  return {
    onNodesChange: s.onNodesChange,
    onEdgesChange: s.onEdgesChange
  };
};

var useGlobalKeyHandler = (function (_ref) {
  var deleteKeyCode = _ref.deleteKeyCode,
      multiSelectionKeyCode = _ref.multiSelectionKeyCode;
  var store = useStoreApi();

  var _useStore = useStore(selector$9, shallow),
      onNodesChange = _useStore.onNodesChange,
      onEdgesChange = _useStore.onEdgesChange;

  var deleteKeyPressed = useKeyPress(deleteKeyCode);
  var multiSelectionKeyPressed = useKeyPress(multiSelectionKeyCode);
  useEffect(function () {
    var _store$getState = store.getState(),
        nodeInternals = _store$getState.nodeInternals,
        edges = _store$getState.edges,
        hasDefaultNodes = _store$getState.hasDefaultNodes,
        hasDefaultEdges = _store$getState.hasDefaultEdges,
        onNodesDelete = _store$getState.onNodesDelete,
        onEdgesDelete = _store$getState.onEdgesDelete;

    var nodes = Array.from(nodeInternals.values());
    var nodesToRemove = nodes.reduce(function (res, node) {
      if (!node.selected && node.parentNode && res.find(function (n) {
        return n.id === node.parentNode;
      })) {
        res.push(node);
      } else if (node.selected) {
        res.push(node);
      }

      return res;
    }, []);
    var selectedEdges = edges.filter(function (e) {
      return e.selected;
    });

    if (deleteKeyPressed && (nodesToRemove || selectedEdges)) {
      var connectedEdges = getConnectedEdges(nodesToRemove, edges);
      var edgesToRemove = [].concat(_toConsumableArray(selectedEdges), _toConsumableArray(connectedEdges));
      var edgeIdsToRemove = edgesToRemove.reduce(function (res, edge) {
        if (!res.includes(edge.id)) {
          res.push(edge.id);
        }

        return res;
      }, []);

      if (hasDefaultEdges || hasDefaultNodes) {
        if (hasDefaultEdges) {
          store.setState({
            edges: edges.filter(function (e) {
              return !edgeIdsToRemove.includes(e.id);
            })
          });
        }

        if (hasDefaultNodes) {
          nodesToRemove.forEach(function (node) {
            nodeInternals["delete"](node.id);
          });
          store.setState({
            nodeInternals: new Map(nodeInternals)
          });
        }
      }

      if (edgeIdsToRemove.length > 0) {
        onEdgesDelete === null || onEdgesDelete === void 0 ? void 0 : onEdgesDelete(edgesToRemove);

        if (onEdgesChange) {
          var edgeChanges = edgeIdsToRemove.map(function (id) {
            return {
              id: id,
              type: 'remove'
            };
          });
          onEdgesChange(edgeChanges);
        }
      }

      if (nodesToRemove.length > 0) {
        onNodesDelete === null || onNodesDelete === void 0 ? void 0 : onNodesDelete(nodesToRemove);

        if (onNodesChange) {
          var nodeChanges = nodesToRemove.map(function (n) {
            return {
              id: n.id,
              type: 'remove'
            };
          });
          onNodesChange(nodeChanges);
        }
      }

      store.setState({
        nodesSelectionActive: false
      });
    }
  }, [deleteKeyPressed, onNodesChange, onEdgesChange]);
  useEffect(function () {
    store.setState({
      multiSelectionActive: multiSelectionKeyPressed
    });
  }, [multiSelectionKeyPressed]);
});

function useResizeHandler(rendererNode) {
  var store = useStoreApi();
  useEffect(function () {
    var resizeObserver;

    var updateDimensions = function updateDimensions() {
      if (!rendererNode.current) {
        return;
      }

      var size = getDimensions(rendererNode.current);

      if (size.height === 0 || size.width === 0) {
        console.warn('The React Flow parent container needs a width and a height to render the graph.');
      }

      store.setState({
        width: size.width || 500,
        height: size.height || 500
      });
    };

    updateDimensions();
    window.onresize = updateDimensions;

    if (rendererNode.current) {
      resizeObserver = new ResizeObserver(function () {
        return updateDimensions();
      });
      resizeObserver.observe(rendererNode.current);
    }

    return function () {
      window.onresize = null;

      if (resizeObserver && rendererNode.current) {
        resizeObserver.unobserve(rendererNode.current);
      }
    };
  }, []);
}

var viewChanged = function viewChanged(prevViewport, eventViewport) {
  return prevViewport.x !== eventViewport.x || prevViewport.y !== eventViewport.y || prevViewport.zoom !== eventViewport.k;
};

var eventToFlowTransform = function eventToFlowTransform(eventViewport) {
  return {
    x: eventViewport.x,
    y: eventViewport.y,
    zoom: eventViewport.k
  };
};

var isWrappedWithClass = function isWrappedWithClass(event, className) {
  return event.target.closest(".".concat(className));
};

var selector$8 = function selector(s) {
  return {
    d3Zoom: s.d3Zoom,
    d3Selection: s.d3Selection,
    d3ZoomHandler: s.d3ZoomHandler
  };
};

var ZoomPane = function ZoomPane(_ref) {
  var onMove = _ref.onMove,
      onMoveStart = _ref.onMoveStart,
      onMoveEnd = _ref.onMoveEnd,
      _ref$zoomOnScroll = _ref.zoomOnScroll,
      zoomOnScroll = _ref$zoomOnScroll === void 0 ? true : _ref$zoomOnScroll,
      _ref$zoomOnPinch = _ref.zoomOnPinch,
      zoomOnPinch = _ref$zoomOnPinch === void 0 ? true : _ref$zoomOnPinch,
      _ref$panOnScroll = _ref.panOnScroll,
      panOnScroll = _ref$panOnScroll === void 0 ? false : _ref$panOnScroll,
      _ref$panOnScrollSpeed = _ref.panOnScrollSpeed,
      panOnScrollSpeed = _ref$panOnScrollSpeed === void 0 ? 0.5 : _ref$panOnScrollSpeed,
      _ref$panOnScrollMode = _ref.panOnScrollMode,
      panOnScrollMode = _ref$panOnScrollMode === void 0 ? PanOnScrollMode.Free : _ref$panOnScrollMode,
      _ref$zoomOnDoubleClic = _ref.zoomOnDoubleClick,
      zoomOnDoubleClick = _ref$zoomOnDoubleClic === void 0 ? true : _ref$zoomOnDoubleClic,
      selectionKeyPressed = _ref.selectionKeyPressed,
      elementsSelectable = _ref.elementsSelectable,
      _ref$panOnDrag = _ref.panOnDrag,
      panOnDrag = _ref$panOnDrag === void 0 ? true : _ref$panOnDrag,
      _ref$defaultPosition = _ref.defaultPosition,
      defaultPosition = _ref$defaultPosition === void 0 ? [0, 0] : _ref$defaultPosition,
      _ref$defaultZoom = _ref.defaultZoom,
      defaultZoom = _ref$defaultZoom === void 0 ? 1 : _ref$defaultZoom,
      zoomActivationKeyCode = _ref.zoomActivationKeyCode,
      _ref$preventScrolling = _ref.preventScrolling,
      preventScrolling = _ref$preventScrolling === void 0 ? true : _ref$preventScrolling,
      children = _ref.children,
      noWheelClassName = _ref.noWheelClassName,
      noPanClassName = _ref.noPanClassName;
  var store = useStoreApi();
  var zoomPane = useRef(null);
  var prevTransform = useRef({
    x: 0,
    y: 0,
    zoom: 0
  });

  var _useStore = useStore(selector$8, shallow),
      d3Zoom = _useStore.d3Zoom,
      d3Selection = _useStore.d3Selection,
      d3ZoomHandler = _useStore.d3ZoomHandler;

  var zoomActivationKeyPressed = useKeyPress(zoomActivationKeyCode);
  useResizeHandler(zoomPane);
  useEffect(function () {
    if (zoomPane.current) {
      var _store$getState = store.getState(),
          minZoom = _store$getState.minZoom,
          maxZoom = _store$getState.maxZoom,
          translateExtent = _store$getState.translateExtent;

      var d3ZoomInstance = zoom().scaleExtent([minZoom, maxZoom]).translateExtent(translateExtent);
      var selection = select(zoomPane.current).call(d3ZoomInstance);
      var clampedX = clamp(defaultPosition[0], translateExtent[0][0], translateExtent[1][0]);
      var clampedY = clamp(defaultPosition[1], translateExtent[0][1], translateExtent[1][1]);
      var clampedZoom = clamp(defaultZoom, minZoom, maxZoom);
      var updatedTransform = zoomIdentity.translate(clampedX, clampedY).scale(clampedZoom);
      d3ZoomInstance.transform(selection, updatedTransform);
      store.setState({
        d3Zoom: d3ZoomInstance,
        d3Selection: selection,
        d3ZoomHandler: selection.on('wheel.zoom'),
        // we need to pass transform because zoom handler is not registered when we set the initial transform
        transform: [clampedX, clampedY, clampedZoom]
      });
    }
  }, []);
  useEffect(function () {
    if (d3Selection && d3Zoom) {
      if (panOnScroll && !zoomActivationKeyPressed) {
        d3Selection.on('wheel', function (event) {
          if (isWrappedWithClass(event, noWheelClassName)) {
            return false;
          }

          event.preventDefault();
          event.stopImmediatePropagation();
          var currentZoom = d3Selection.property('__zoom').k || 1;

          if (event.ctrlKey && zoomOnPinch) {
            var point = pointer(event); // taken from https://github.com/d3/d3-zoom/blob/master/src/zoom.js

            var pinchDelta = -event.deltaY * (event.deltaMode === 1 ? 0.05 : event.deltaMode ? 1 : 0.002) * 10;

            var _zoom = currentZoom * Math.pow(2, pinchDelta);

            d3Zoom.scaleTo(d3Selection, _zoom, point);
            return;
          } // increase scroll speed in firefox
          // firefox: deltaMode === 1; chrome: deltaMode === 0


          var deltaNormalize = event.deltaMode === 1 ? 20 : 1;
          var deltaX = panOnScrollMode === PanOnScrollMode.Vertical ? 0 : event.deltaX * deltaNormalize;
          var deltaY = panOnScrollMode === PanOnScrollMode.Horizontal ? 0 : event.deltaY * deltaNormalize;
          d3Zoom.translateBy(d3Selection, -(deltaX / currentZoom) * panOnScrollSpeed, -(deltaY / currentZoom) * panOnScrollSpeed);
        }).on('wheel.zoom', null);
      } else if (typeof d3ZoomHandler !== 'undefined') {
        d3Selection.on('wheel', function (event) {
          if (!preventScrolling || isWrappedWithClass(event, noWheelClassName)) {
            return null;
          }

          event.preventDefault();
        }).on('wheel.zoom', d3ZoomHandler);
      }
    }
  }, [panOnScroll, panOnScrollMode, d3Selection, d3Zoom, d3ZoomHandler, zoomActivationKeyPressed, zoomOnPinch, preventScrolling, noWheelClassName]);
  useEffect(function () {
    if (d3Zoom) {
      if (selectionKeyPressed) {
        d3Zoom.on('zoom', null);
      } else {
        d3Zoom.on('zoom', function (event) {
          store.setState({
            transform: [event.transform.x, event.transform.y, event.transform.k]
          });

          if (onMove) {
            var flowTransform = eventToFlowTransform(event.transform);
            onMove(event.sourceEvent, flowTransform);
          }
        });
      }
    }
  }, [selectionKeyPressed, d3Zoom, onMove]);
  useEffect(function () {
    if (d3Zoom) {
      if (onMoveStart) {
        d3Zoom.on('start', function (event) {
          var flowTransform = eventToFlowTransform(event.transform);
          prevTransform.current = flowTransform;
          onMoveStart(event.sourceEvent, flowTransform);
        });
      } else {
        d3Zoom.on('start', null);
      }
    }
  }, [d3Zoom, onMoveStart]);
  useEffect(function () {
    if (d3Zoom) {
      if (onMoveEnd) {
        d3Zoom.on('end', function (event) {
          if (viewChanged(prevTransform.current, event.transform)) {
            var flowTransform = eventToFlowTransform(event.transform);
            prevTransform.current = flowTransform;
            onMoveEnd(event.sourceEvent, flowTransform);
          }
        });
      } else {
        d3Zoom.on('end', null);
      }
    }
  }, [d3Zoom, onMoveEnd]);
  useEffect(function () {
    if (d3Zoom) {
      d3Zoom.filter(function (event) {
        var zoomScroll = zoomActivationKeyPressed || zoomOnScroll;
        var pinchZoom = zoomOnPinch && event.ctrlKey; // if all interactions are disabled, we prevent all zoom events

        if (!panOnDrag && !zoomScroll && !panOnScroll && !zoomOnDoubleClick && !zoomOnPinch) {
          return false;
        } // during a selection we prevent all other interactions


        if (selectionKeyPressed) {
          return false;
        } // if zoom on double click is disabled, we prevent the double click event


        if (!zoomOnDoubleClick && event.type === 'dblclick') {
          return false;
        } // if the target element is inside an element with the nowheel class, we prevent zooming


        if (isWrappedWithClass(event, noWheelClassName) && event.type === 'wheel') {
          return false;
        } // if the target element is inside an element with the nopan class, we prevent panning


        if (isWrappedWithClass(event, noPanClassName) && event.type !== 'wheel') {
          return false;
        }

        if (!zoomOnPinch && event.ctrlKey && event.type === 'wheel') {
          return false;
        } // when there is no scroll handling enabled, we prevent all wheel events


        if (!zoomScroll && !panOnScroll && !pinchZoom && event.type === 'wheel') {
          return false;
        } // if the pane is not movable, we prevent dragging it with mousestart or touchstart


        if (!panOnDrag && (event.type === 'mousedown' || event.type === 'touchstart')) {
          return false;
        } // default filter for d3-zoom


        return (!event.ctrlKey || event.type === 'wheel') && !event.button;
      });
    }
  }, [d3Zoom, zoomOnScroll, zoomOnPinch, panOnScroll, zoomOnDoubleClick, panOnDrag, selectionKeyPressed, elementsSelectable, zoomActivationKeyPressed]);
  return /*#__PURE__*/React__default.createElement("div", {
    className: "react-flow__renderer react-flow__container",
    ref: zoomPane
  }, children);
};

function ownKeys$6(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$6(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$6(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$6(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function getMousePosition(event, containerBounds) {
  return {
    x: event.clientX - containerBounds.left,
    y: event.clientY - containerBounds.top
  };
}

var selector$7 = function selector(s) {
  return {
    userSelectionActive: s.userSelectionActive,
    elementsSelectable: s.elementsSelectable
  };
};

var initialRect = {
  startX: 0,
  startY: 0,
  x: 0,
  y: 0,
  width: 0,
  height: 0,
  draw: false
};
var UserSelection = /*#__PURE__*/memo(function (_ref) {
  var selectionKeyPressed = _ref.selectionKeyPressed;
  var store = useStoreApi();
  var prevSelectedNodesCount = useRef(0);
  var prevSelectedEdgesCount = useRef(0);
  var containerBounds = useRef();

  var _useState = useState(initialRect),
      _useState2 = _slicedToArray(_useState, 2),
      userSelectionRect = _useState2[0],
      setUserSelectionRect = _useState2[1];

  var _useStore = useStore(selector$7, shallow),
      userSelectionActive = _useStore.userSelectionActive,
      elementsSelectable = _useStore.elementsSelectable;

  var renderUserSelectionPane = userSelectionActive || selectionKeyPressed;
  var resetUserSelection = useCallback(function () {
    setUserSelectionRect(initialRect);
    store.setState({
      userSelectionActive: false
    });
    prevSelectedNodesCount.current = 0;
    prevSelectedEdgesCount.current = 0;
  }, []);
  var onMouseDown = useCallback(function (event) {
    var reactFlowNode = event.target.closest('.react-flow');
    containerBounds.current = reactFlowNode.getBoundingClientRect();
    var mousePos = getMousePosition(event, containerBounds.current);
    setUserSelectionRect({
      width: 0,
      height: 0,
      startX: mousePos.x,
      startY: mousePos.y,
      x: mousePos.x,
      y: mousePos.y,
      draw: true
    });
    store.setState({
      userSelectionActive: true,
      nodesSelectionActive: false
    });
  }, []);

  var onMouseMove = function onMouseMove(event) {
    var _userSelectionRect$st, _userSelectionRect$st2;

    if (!selectionKeyPressed || !userSelectionRect.draw || !containerBounds.current) {
      return;
    }

    var mousePos = getMousePosition(event, containerBounds.current);
    var startX = (_userSelectionRect$st = userSelectionRect.startX) !== null && _userSelectionRect$st !== void 0 ? _userSelectionRect$st : 0;
    var startY = (_userSelectionRect$st2 = userSelectionRect.startY) !== null && _userSelectionRect$st2 !== void 0 ? _userSelectionRect$st2 : 0;

    var nextUserSelectRect = _objectSpread$6(_objectSpread$6({}, userSelectionRect), {}, {
      x: mousePos.x < startX ? mousePos.x : startX,
      y: mousePos.y < startY ? mousePos.y : startY,
      width: Math.abs(mousePos.x - startX),
      height: Math.abs(mousePos.y - startY)
    });

    var _store$getState = store.getState(),
        nodeInternals = _store$getState.nodeInternals,
        edges = _store$getState.edges,
        transform = _store$getState.transform,
        onNodesChange = _store$getState.onNodesChange,
        onEdgesChange = _store$getState.onEdgesChange;

    var nodes = Array.from(nodeInternals).map(function (_ref2) {
      var _ref3 = _slicedToArray(_ref2, 2);
          _ref3[0];
          var node = _ref3[1];

      return node;
    });
    var selectedNodes = getNodesInside(nodeInternals, nextUserSelectRect, transform, false, true);
    var selectedEdgeIds = getConnectedEdges(selectedNodes, edges).map(function (e) {
      return e.id;
    });
    var selectedNodeIds = selectedNodes.map(function (n) {
      return n.id;
    });

    if (prevSelectedNodesCount.current !== selectedNodeIds.length) {
      prevSelectedNodesCount.current = selectedNodeIds.length;
      var changes = getSelectionChanges(nodes, selectedNodeIds);

      if (changes.length) {
        onNodesChange === null || onNodesChange === void 0 ? void 0 : onNodesChange(changes);
      }
    }

    if (prevSelectedEdgesCount.current !== selectedEdgeIds.length) {
      prevSelectedEdgesCount.current = selectedEdgeIds.length;

      var _changes = getSelectionChanges(edges, selectedEdgeIds);

      if (_changes.length) {
        onEdgesChange === null || onEdgesChange === void 0 ? void 0 : onEdgesChange(_changes);
      }
    }

    setUserSelectionRect(nextUserSelectRect);
  };

  var onMouseUp = useCallback(function () {
    store.setState({
      nodesSelectionActive: prevSelectedNodesCount.current > 0
    });
    resetUserSelection();
  }, []);
  var onMouseLeave = useCallback(function () {
    store.setState({
      nodesSelectionActive: false
    });
    resetUserSelection();
  }, []);

  if (!elementsSelectable || !renderUserSelectionPane) {
    return null;
  }

  return /*#__PURE__*/React__default.createElement("div", {
    className: "react-flow__selectionpane react-flow__container",
    onMouseDown: onMouseDown,
    onMouseMove: onMouseMove,
    onMouseUp: onMouseUp,
    onMouseLeave: onMouseLeave
  }, userSelectionRect.draw && /*#__PURE__*/React__default.createElement("div", {
    className: "react-flow__selection react-flow__container",
    style: {
      width: userSelectionRect.width,
      height: userSelectionRect.height,
      transform: "translate(".concat(userSelectionRect.x, "px, ").concat(userSelectionRect.y, "px)")
    }
  }));
});

var selector$6 = function selector(s) {
  return {
    transform: s.transform,
    selectedNodesBbox: s.selectedNodesBbox,
    userSelectionActive: s.userSelectionActive,
    selectedNodes: Array.from(s.nodeInternals).filter(function (_ref) {
      var _ref2 = _slicedToArray(_ref, 2);
          _ref2[0];
          var n = _ref2[1];

      return n.selected;
    }).map(function (_ref3) {
      var _ref4 = _slicedToArray(_ref3, 2);
          _ref4[0];
          var n = _ref4[1];

      return n;
    }),
    snapToGrid: s.snapToGrid,
    snapGrid: s.snapGrid,
    updateNodePosition: s.updateNodePosition
  };
};

function NodesSelection(_ref5) {
  var onSelectionDragStart = _ref5.onSelectionDragStart,
      onSelectionDrag = _ref5.onSelectionDrag,
      onSelectionDragStop = _ref5.onSelectionDragStop,
      onSelectionContextMenu = _ref5.onSelectionContextMenu,
      noPanClassName = _ref5.noPanClassName;

  var _useStore = useStore(selector$6, shallow),
      transform = _useStore.transform,
      userSelectionActive = _useStore.userSelectionActive,
      selectedNodes = _useStore.selectedNodes,
      snapToGrid = _useStore.snapToGrid,
      snapGrid = _useStore.snapGrid,
      updateNodePosition = _useStore.updateNodePosition;

  var _transform = _slicedToArray(transform, 3),
      tX = _transform[0],
      tY = _transform[1],
      tScale = _transform[2];

  var nodeRef = useRef(null);
  var grid = useMemo(function () {
    return snapToGrid ? snapGrid : [1, 1];
  }, [snapToGrid, snapGrid]);
  var style = useMemo(function () {
    return {
      transform: "translate(".concat(tX, "px,").concat(tY, "px) scale(").concat(tScale, ")")
    };
  }, [tX, tY, tScale]);
  var selectedNodesBbox = useMemo(function () {
    return getRectOfNodes(selectedNodes);
  }, [selectedNodes]);
  var innerStyle = useMemo(function () {
    return {
      width: selectedNodesBbox.width,
      height: selectedNodesBbox.height,
      top: selectedNodesBbox.y,
      left: selectedNodesBbox.x
    };
  }, [selectedNodesBbox]);

  var _onStart = useCallback(function (event) {
    onSelectionDragStart === null || onSelectionDragStart === void 0 ? void 0 : onSelectionDragStart(event, selectedNodes);
  }, [onSelectionDragStart, selectedNodes]);

  var _onDrag = useCallback(function (event, data) {
    updateNodePosition({
      diff: {
        x: data.deltaX,
        y: data.deltaY
      },
      dragging: true
    });
    onSelectionDrag === null || onSelectionDrag === void 0 ? void 0 : onSelectionDrag(event, selectedNodes);
  }, [onSelectionDrag, selectedNodes, updateNodePosition]);

  var _onStop = useCallback(function (event) {
    updateNodePosition({
      dragging: false
    });
    onSelectionDragStop === null || onSelectionDragStop === void 0 ? void 0 : onSelectionDragStop(event, selectedNodes);
  }, [selectedNodes, onSelectionDragStop]);

  var onContextMenu = useCallback(function (event) {
    onSelectionContextMenu === null || onSelectionContextMenu === void 0 ? void 0 : onSelectionContextMenu(event, selectedNodes);
  }, [onSelectionContextMenu, selectedNodes]);

  if (!(selectedNodes !== null && selectedNodes !== void 0 && selectedNodes.length) || userSelectionActive) {
    return null;
  }

  return /*#__PURE__*/React__default.createElement("div", {
    className: cc(['react-flow__nodesselection', 'react-flow__container', noPanClassName]),
    style: style
  }, /*#__PURE__*/React__default.createElement(DraggableCore, {
    scale: tScale,
    grid: grid,
    onStart: function onStart(event) {
      return _onStart(event);
    },
    onDrag: function onDrag(event, data) {
      return _onDrag(event, data);
    },
    onStop: function onStop(event) {
      return _onStop(event);
    },
    nodeRef: nodeRef,
    enableUserSelectHack: false
  }, /*#__PURE__*/React__default.createElement("div", {
    ref: nodeRef,
    className: "react-flow__nodesselection-rect",
    onContextMenu: onContextMenu,
    style: innerStyle
  })));
}

var NodesSelection$1 = /*#__PURE__*/memo(NodesSelection);

var selector$5 = function selector(s) {
  return {
    resetSelectedElements: s.resetSelectedElements,
    nodesSelectionActive: s.nodesSelectionActive
  };
};

var FlowRenderer = function FlowRenderer(_ref) {
  var children = _ref.children,
      onPaneClick = _ref.onPaneClick,
      onPaneContextMenu = _ref.onPaneContextMenu,
      onPaneScroll = _ref.onPaneScroll,
      deleteKeyCode = _ref.deleteKeyCode,
      onMove = _ref.onMove,
      onMoveStart = _ref.onMoveStart,
      onMoveEnd = _ref.onMoveEnd,
      selectionKeyCode = _ref.selectionKeyCode,
      multiSelectionKeyCode = _ref.multiSelectionKeyCode,
      zoomActivationKeyCode = _ref.zoomActivationKeyCode,
      elementsSelectable = _ref.elementsSelectable,
      zoomOnScroll = _ref.zoomOnScroll,
      zoomOnPinch = _ref.zoomOnPinch,
      panOnScroll = _ref.panOnScroll,
      panOnScrollSpeed = _ref.panOnScrollSpeed,
      panOnScrollMode = _ref.panOnScrollMode,
      zoomOnDoubleClick = _ref.zoomOnDoubleClick,
      panOnDrag = _ref.panOnDrag,
      defaultPosition = _ref.defaultPosition,
      defaultZoom = _ref.defaultZoom,
      preventScrolling = _ref.preventScrolling,
      onSelectionDragStart = _ref.onSelectionDragStart,
      onSelectionDrag = _ref.onSelectionDrag,
      onSelectionDragStop = _ref.onSelectionDragStop,
      onSelectionContextMenu = _ref.onSelectionContextMenu,
      noWheelClassName = _ref.noWheelClassName,
      noPanClassName = _ref.noPanClassName;
  var store = useStoreApi();

  var _useStore = useStore(selector$5, shallow),
      resetSelectedElements = _useStore.resetSelectedElements,
      nodesSelectionActive = _useStore.nodesSelectionActive;

  var selectionKeyPressed = useKeyPress(selectionKeyCode);
  useGlobalKeyHandler({
    deleteKeyCode: deleteKeyCode,
    multiSelectionKeyCode: multiSelectionKeyCode
  });
  var onClick = useCallback(function (event) {
    onPaneClick === null || onPaneClick === void 0 ? void 0 : onPaneClick(event);
    resetSelectedElements();
    store.setState({
      nodesSelectionActive: false
    });
  }, [onPaneClick]);
  var onContextMenu = useCallback(function (event) {
    return onPaneContextMenu === null || onPaneContextMenu === void 0 ? void 0 : onPaneContextMenu(event);
  }, [onPaneContextMenu]);
  var onWheel = useCallback(function (event) {
    return onPaneScroll === null || onPaneScroll === void 0 ? void 0 : onPaneScroll(event);
  }, [onPaneScroll]);
  return /*#__PURE__*/React__default.createElement(ZoomPane, {
    onMove: onMove,
    onMoveStart: onMoveStart,
    onMoveEnd: onMoveEnd,
    selectionKeyPressed: selectionKeyPressed,
    elementsSelectable: elementsSelectable,
    zoomOnScroll: zoomOnScroll,
    zoomOnPinch: zoomOnPinch,
    panOnScroll: panOnScroll,
    panOnScrollSpeed: panOnScrollSpeed,
    panOnScrollMode: panOnScrollMode,
    zoomOnDoubleClick: zoomOnDoubleClick,
    panOnDrag: panOnDrag,
    defaultPosition: defaultPosition,
    defaultZoom: defaultZoom,
    zoomActivationKeyCode: zoomActivationKeyCode,
    preventScrolling: preventScrolling,
    noWheelClassName: noWheelClassName,
    noPanClassName: noPanClassName
  }, children, /*#__PURE__*/React__default.createElement(UserSelection, {
    selectionKeyPressed: selectionKeyPressed
  }), nodesSelectionActive && /*#__PURE__*/React__default.createElement(NodesSelection$1, {
    onSelectionDragStart: onSelectionDragStart,
    onSelectionDrag: onSelectionDrag,
    onSelectionDragStop: onSelectionDragStop,
    onSelectionContextMenu: onSelectionContextMenu,
    noPanClassName: noPanClassName
  }), /*#__PURE__*/React__default.createElement("div", {
    className: "react-flow__pane react-flow__container",
    onClick: onClick,
    onContextMenu: onContextMenu,
    onWheel: onWheel
  }));
};

FlowRenderer.displayName = 'FlowRenderer';
var FlowRenderer$1 = /*#__PURE__*/memo(FlowRenderer);

function useVisibleNodes(onlyRenderVisible) {
  var nodes = useStore(useCallback(function (s) {
    return onlyRenderVisible ? getNodesInside(s.nodeInternals, {
      x: 0,
      y: 0,
      width: s.width,
      height: s.height
    }, s.transform, true) : Array.from(s.nodeInternals).map(function (_ref) {
      var _ref2 = _slicedToArray(_ref, 2);
          _ref2[0];
          var node = _ref2[1];

      return node;
    });
  }, [onlyRenderVisible]));
  return nodes;
}

var selector$4 = function selector(s) {
  return {
    scale: s.transform[2],
    nodesDraggable: s.nodesDraggable,
    nodesConnectable: s.nodesConnectable,
    elementsSelectable: s.elementsSelectable,
    updateNodeDimensions: s.updateNodeDimensions,
    snapGrid: s.snapGrid,
    snapToGrid: s.snapToGrid,
    nodeInternals: s.nodeInternals
  };
};

var NodeRenderer = function NodeRenderer(props) {
  var _useStore = useStore(selector$4, shallow),
      scale = _useStore.scale,
      nodesDraggable = _useStore.nodesDraggable,
      nodesConnectable = _useStore.nodesConnectable,
      elementsSelectable = _useStore.elementsSelectable,
      updateNodeDimensions = _useStore.updateNodeDimensions,
      snapGrid = _useStore.snapGrid,
      snapToGrid = _useStore.snapToGrid;

  var nodes = useVisibleNodes(props.onlyRenderVisibleElements);
  var resizeObserverRef = useRef();
  var resizeObserver = useMemo(function () {
    if (typeof ResizeObserver === 'undefined') {
      return null;
    }

    var observer = new ResizeObserver(function (entries) {
      var updates = entries.map(function (entry) {
        return {
          id: entry.target.getAttribute('data-id'),
          nodeElement: entry.target,
          forceUpdate: true
        };
      });
      updateNodeDimensions(updates);
    });
    resizeObserverRef.current = observer;
    return observer;
  }, []);
  useEffect(function () {
    return function () {
      var _resizeObserverRef$cu;

      resizeObserverRef === null || resizeObserverRef === void 0 ? void 0 : (_resizeObserverRef$cu = resizeObserverRef.current) === null || _resizeObserverRef$cu === void 0 ? void 0 : _resizeObserverRef$cu.disconnect();
    };
  }, []);
  return /*#__PURE__*/React__default.createElement("div", {
    className: "react-flow__nodes react-flow__container"
  }, nodes.map(function (node) {
    var _node$positionAbsolut, _node$positionAbsolut2, _node$positionAbsolut3, _node$positionAbsolut4, _node$z;

    var nodeType = node.type || 'default';

    if (!props.nodeTypes[nodeType]) {
      console.warn("Node type \"".concat(nodeType, "\" not found. Using fallback type \"default\"."));
    }

    var NodeComponent = props.nodeTypes[nodeType] || props.nodeTypes["default"];
    var isDraggable = !!(node.draggable || nodesDraggable && typeof node.draggable === 'undefined');
    var isSelectable = !!(node.selectable || elementsSelectable && typeof node.selectable === 'undefined');
    var isConnectable = !!(node.connectable || nodesConnectable && typeof node.connectable === 'undefined');
    return /*#__PURE__*/React__default.createElement(NodeComponent, {
      key: node.id,
      id: node.id,
      className: node.className,
      style: node.style,
      type: nodeType,
      data: node.data,
      sourcePosition: node.sourcePosition || Position.Bottom,
      targetPosition: node.targetPosition || Position.Top,
      hidden: node.hidden,
      xPos: (_node$positionAbsolut = (_node$positionAbsolut2 = node.positionAbsolute) === null || _node$positionAbsolut2 === void 0 ? void 0 : _node$positionAbsolut2.x) !== null && _node$positionAbsolut !== void 0 ? _node$positionAbsolut : 0,
      yPos: (_node$positionAbsolut3 = (_node$positionAbsolut4 = node.positionAbsolute) === null || _node$positionAbsolut4 === void 0 ? void 0 : _node$positionAbsolut4.y) !== null && _node$positionAbsolut3 !== void 0 ? _node$positionAbsolut3 : 0,
      dragging: !!node.dragging,
      snapGrid: snapGrid,
      snapToGrid: snapToGrid,
      selectNodesOnDrag: props.selectNodesOnDrag,
      onClick: props.onNodeClick,
      onMouseEnter: props.onNodeMouseEnter,
      onMouseMove: props.onNodeMouseMove,
      onMouseLeave: props.onNodeMouseLeave,
      onContextMenu: props.onNodeContextMenu,
      onNodeDoubleClick: props.onNodeDoubleClick,
      onNodeDragStart: props.onNodeDragStart,
      onNodeDrag: props.onNodeDrag,
      onNodeDragStop: props.onNodeDragStop,
      scale: scale,
      selected: !!node.selected,
      isDraggable: isDraggable,
      isSelectable: isSelectable,
      isConnectable: isConnectable,
      resizeObserver: resizeObserver,
      dragHandle: node.dragHandle,
      zIndex: (_node$z = node.z) !== null && _node$z !== void 0 ? _node$z : 0,
      isParent: !!node.isParent,
      noDragClassName: props.noDragClassName,
      noPanClassName: props.noPanClassName
    });
  }));
};

NodeRenderer.displayName = 'NodeRenderer';
var NodeRenderer$1 = /*#__PURE__*/memo(NodeRenderer);

function ownKeys$5(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$5(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$5(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$5(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var selector$3 = function selector(s) {
  return {
    nodeInternals: s.nodeInternals,
    transform: s.transform
  };
};

var ConnectionLine = (function (_ref) {
  var _fromNode$current$han, _fromNode$current$han2, _fromNode$current$wid, _fromNode$current, _fromNode$current$hei, _fromNode$current2, _fromNode$current$pos, _fromNode$current$pos2;

  var connectionNodeId = _ref.connectionNodeId,
      connectionHandleId = _ref.connectionHandleId,
      connectionHandleType = _ref.connectionHandleType,
      connectionLineStyle = _ref.connectionLineStyle,
      connectionPositionX = _ref.connectionPositionX,
      connectionPositionY = _ref.connectionPositionY,
      _ref$connectionLineTy = _ref.connectionLineType,
      connectionLineType = _ref$connectionLineTy === void 0 ? ConnectionLineType.Bezier : _ref$connectionLineTy,
      isConnectable = _ref.isConnectable,
      CustomConnectionLineComponent = _ref.CustomConnectionLineComponent;
  var nodeId = connectionNodeId;
  var handleId = connectionHandleId;

  var _useStore = useStore(selector$3, shallow),
      nodeInternals = _useStore.nodeInternals,
      transform = _useStore.transform;

  var fromNode = useRef(nodeInternals.get(nodeId));

  if (!fromNode.current || !fromNode.current || !isConnectable || !((_fromNode$current$han = fromNode.current.handleBounds) !== null && _fromNode$current$han !== void 0 && _fromNode$current$han[connectionHandleType])) {
    return null;
  }

  var handleBound = (_fromNode$current$han2 = fromNode.current.handleBounds) === null || _fromNode$current$han2 === void 0 ? void 0 : _fromNode$current$han2[connectionHandleType];
  var fromHandle = handleId ? handleBound === null || handleBound === void 0 ? void 0 : handleBound.find(function (d) {
    return d.id === handleId;
  }) : handleBound === null || handleBound === void 0 ? void 0 : handleBound[0];
  var fromHandleX = fromHandle ? fromHandle.x + fromHandle.width / 2 : ((_fromNode$current$wid = (_fromNode$current = fromNode.current) === null || _fromNode$current === void 0 ? void 0 : _fromNode$current.width) !== null && _fromNode$current$wid !== void 0 ? _fromNode$current$wid : 0) / 2;
  var fromHandleY = fromHandle ? fromHandle.y + fromHandle.height / 2 : (_fromNode$current$hei = (_fromNode$current2 = fromNode.current) === null || _fromNode$current2 === void 0 ? void 0 : _fromNode$current2.height) !== null && _fromNode$current$hei !== void 0 ? _fromNode$current$hei : 0;
  var fromX = (((_fromNode$current$pos = fromNode.current.positionAbsolute) === null || _fromNode$current$pos === void 0 ? void 0 : _fromNode$current$pos.x) || 0) + fromHandleX;
  var fromY = (((_fromNode$current$pos2 = fromNode.current.positionAbsolute) === null || _fromNode$current$pos2 === void 0 ? void 0 : _fromNode$current$pos2.y) || 0) + fromHandleY;
  var toX = (connectionPositionX - transform[0]) / transform[2];
  var toY = (connectionPositionY - transform[1]) / transform[2];
  var fromPosition = fromHandle === null || fromHandle === void 0 ? void 0 : fromHandle.position;
  var toPosition;

  switch (fromPosition) {
    case Position.Left:
      toPosition = Position.Right;
      break;

    case Position.Right:
      toPosition = Position.Left;
      break;

    case Position.Top:
      toPosition = Position.Bottom;
      break;

    case Position.Bottom:
      toPosition = Position.Top;
      break;
  }

  var sourceX, sourceY, sourcePosition, targetX, targetY, targetPosition;

  switch (connectionHandleType) {
    case 'source':
      {
        sourceX = fromX;
        sourceY = fromY;
        sourcePosition = fromPosition;
        targetX = toX;
        targetY = toY;
        targetPosition = toPosition;
      }
      break;

    case 'target':
      {
        sourceX = toX;
        sourceY = toY;
        sourcePosition = toPosition;
        targetX = fromX;
        targetY = fromY;
        targetPosition = fromPosition;
      }
      break;
  }

  if (CustomConnectionLineComponent) {
    return /*#__PURE__*/React__default.createElement("g", {
      className: "react-flow__connection"
    }, /*#__PURE__*/React__default.createElement(CustomConnectionLineComponent, {
      sourceX: sourceX,
      sourceY: sourceY,
      sourcePosition: sourcePosition,
      targetX: targetX,
      targetY: targetY,
      targetPosition: targetPosition,
      connectionLineType: connectionLineType,
      connectionLineStyle: connectionLineStyle,
      fromNode: fromNode.current,
      fromHandle: fromHandle,
      // backward compatibility, mark as deprecated?
      sourceNode: fromNode.current,
      sourceHandle: fromHandle
    }));
  }

  var dAttr = '';
  var pathParams = {
    sourceX: sourceX,
    sourceY: sourceY,
    sourcePosition: sourcePosition,
    targetX: targetX,
    targetY: targetY,
    targetPosition: targetPosition
  };

  if (connectionLineType === ConnectionLineType.Bezier) {
    // we assume the destination position is opposite to the source position
    dAttr = getBezierPath(pathParams);
  } else if (connectionLineType === ConnectionLineType.Step) {
    dAttr = getSmoothStepPath(_objectSpread$5(_objectSpread$5({}, pathParams), {}, {
      borderRadius: 0
    }));
  } else if (connectionLineType === ConnectionLineType.SmoothStep) {
    dAttr = getSmoothStepPath(pathParams);
  } else if (connectionLineType === ConnectionLineType.SimpleBezier) {
    dAttr = getSimpleBezierPath(pathParams);
  } else {
    dAttr = "M".concat(sourceX, ",").concat(sourceY, " ").concat(targetX, ",").concat(targetY);
  }

  return /*#__PURE__*/React__default.createElement("g", {
    className: "react-flow__connection"
  }, /*#__PURE__*/React__default.createElement("path", {
    d: dAttr,
    className: "react-flow__connection-path",
    style: connectionLineStyle
  }));
});

function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}

var _MarkerSymbols;

var ArrowSymbol = function ArrowSymbol(_ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'none' : _ref$color,
      _ref$strokeWidth = _ref.strokeWidth,
      strokeWidth = _ref$strokeWidth === void 0 ? 1 : _ref$strokeWidth;
  return /*#__PURE__*/React__default.createElement("polyline", {
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: strokeWidth,
    fill: "none",
    points: "-5,-4 0,0 -5,4"
  });
};

var ArrowClosedSymbol = function ArrowClosedSymbol(_ref2) {
  var _ref2$color = _ref2.color,
      color = _ref2$color === void 0 ? 'none' : _ref2$color,
      _ref2$strokeWidth = _ref2.strokeWidth,
      strokeWidth = _ref2$strokeWidth === void 0 ? 1 : _ref2$strokeWidth;
  return /*#__PURE__*/React__default.createElement("polyline", {
    stroke: color,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: strokeWidth,
    fill: color,
    points: "-5,-4 0,0 -5,4 -5,-4"
  });
};

var MarkerSymbols = (_MarkerSymbols = {}, _defineProperty(_MarkerSymbols, MarkerType.Arrow, ArrowSymbol), _defineProperty(_MarkerSymbols, MarkerType.ArrowClosed, ArrowClosedSymbol), _MarkerSymbols);
function useMarkerSymbol(type) {
  var symbol = useMemo(function () {
    var symbolExists = MarkerSymbols.hasOwnProperty(type);

    if (!symbolExists) {
      console.warn("marker type \"".concat(type, "\" doesn't exist."));
      return function () {
        return null;
      };
    }

    return MarkerSymbols[type];
  }, [type]);
  return symbol;
}

function ownKeys$4(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$4(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$4(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$4(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var Marker = function Marker(_ref) {
  var id = _ref.id,
      type = _ref.type,
      color = _ref.color,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? 12.5 : _ref$width,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? 12.5 : _ref$height,
      _ref$markerUnits = _ref.markerUnits,
      markerUnits = _ref$markerUnits === void 0 ? 'strokeWidth' : _ref$markerUnits,
      strokeWidth = _ref.strokeWidth,
      _ref$orient = _ref.orient,
      orient = _ref$orient === void 0 ? 'auto' : _ref$orient;

  var _Symbol = useMarkerSymbol(type);

  return /*#__PURE__*/React__default.createElement("marker", {
    className: "react-flow__arrowhead",
    id: id,
    markerWidth: "".concat(width),
    markerHeight: "".concat(height),
    viewBox: "-10 -10 20 20",
    markerUnits: markerUnits,
    orient: orient,
    refX: "0",
    refY: "0"
  }, /*#__PURE__*/React__default.createElement(_Symbol, {
    color: color,
    strokeWidth: strokeWidth
  }));
};

var edgesSelector = function edgesSelector(s) {
  return s.edges;
};

var MarkerDefinitions = function MarkerDefinitions(_ref2) {
  var defaultColor = _ref2.defaultColor;
  var edges = useStore(edgesSelector);
  var markers = useMemo(function () {
    var ids = [];
    return edges.reduce(function (markers, edge) {
      [edge.markerStart, edge.markerEnd].forEach(function (marker) {
        if (marker && _typeof(marker) === 'object') {
          var markerId = getMarkerId(marker);

          if (!ids.includes(markerId)) {
            markers.push(_objectSpread$4({
              id: markerId,
              color: marker.color || defaultColor
            }, marker));
            ids.push(markerId);
          }
        }
      });
      return markers.sort(function (a, b) {
        return a.id.localeCompare(b.id);
      });
    }, []);
  }, [edges, defaultColor]);
  return /*#__PURE__*/React__default.createElement("defs", null, markers.map(function (marker) {
    return /*#__PURE__*/React__default.createElement(Marker, {
      id: marker.id,
      key: marker.id,
      type: marker.type,
      color: marker.color,
      width: marker.width,
      height: marker.height,
      markerUnits: marker.markerUnits,
      strokeWidth: marker.strokeWidth,
      orient: marker.orient
    });
  }));
};

MarkerDefinitions.displayName = 'MarkerDefinitions';

var defaultEdgeTree = [{
  level: 0,
  isMaxLevel: true,
  edges: []
}];

function groupEdgesByZLevel(edges, nodeInternals) {
  var maxLevel = -1;
  var levelLookup = edges.reduce(function (tree, edge) {
    var _nodeInternals$get, _nodeInternals$get2;

    var z = isNumeric(edge.zIndex) ? edge.zIndex : Math.max(((_nodeInternals$get = nodeInternals.get(edge.source)) === null || _nodeInternals$get === void 0 ? void 0 : _nodeInternals$get.z) || 0, ((_nodeInternals$get2 = nodeInternals.get(edge.target)) === null || _nodeInternals$get2 === void 0 ? void 0 : _nodeInternals$get2.z) || 0);

    if (tree[z]) {
      tree[z].push(edge);
    } else {
      tree[z] = [edge];
    }

    maxLevel = z > maxLevel ? z : maxLevel;
    return tree;
  }, {});
  var edgeTree = Object.entries(levelLookup).map(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        key = _ref2[0],
        edges = _ref2[1];

    var level = +key;
    return {
      edges: edges,
      level: level,
      isMaxLevel: level === maxLevel
    };
  });

  if (edgeTree.length === 0) {
    return defaultEdgeTree;
  }

  return edgeTree;
}

function useVisibleEdges(onlyRenderVisible, nodeInternals) {
  var edges = useStore(useCallback(function (s) {
    if (!onlyRenderVisible) {
      return s.edges;
    }

    return s.edges.filter(function (e) {
      var sourceNode = nodeInternals.get(e.source);
      var targetNode = nodeInternals.get(e.target);
      return (sourceNode === null || sourceNode === void 0 ? void 0 : sourceNode.width) && (sourceNode === null || sourceNode === void 0 ? void 0 : sourceNode.height) && (targetNode === null || targetNode === void 0 ? void 0 : targetNode.width) && (targetNode === null || targetNode === void 0 ? void 0 : targetNode.height) && isEdgeVisible({
        sourcePos: sourceNode.position || {
          x: 0,
          y: 0
        },
        targetPos: targetNode.position || {
          x: 0,
          y: 0
        },
        sourceWidth: sourceNode.width,
        sourceHeight: sourceNode.height,
        targetWidth: targetNode.width,
        targetHeight: targetNode.height,
        width: s.width,
        height: s.height,
        transform: s.transform
      });
    });
  }, [onlyRenderVisible, nodeInternals]));
  return groupEdgesByZLevel(edges, nodeInternals);
}

var selector$2 = function selector(s) {
  return {
    connectionNodeId: s.connectionNodeId,
    connectionHandleId: s.connectionHandleId,
    connectionHandleType: s.connectionHandleType,
    connectionPosition: s.connectionPosition,
    nodesConnectable: s.nodesConnectable,
    elementsSelectable: s.elementsSelectable,
    width: s.width,
    height: s.height,
    connectionMode: s.connectionMode,
    nodeInternals: s.nodeInternals
  };
};

var EdgeRenderer = function EdgeRenderer(props) {
  var _useStore = useStore(selector$2, shallow),
      connectionNodeId = _useStore.connectionNodeId,
      connectionHandleId = _useStore.connectionHandleId,
      connectionHandleType = _useStore.connectionHandleType,
      connectionPosition = _useStore.connectionPosition,
      nodesConnectable = _useStore.nodesConnectable,
      elementsSelectable = _useStore.elementsSelectable,
      width = _useStore.width,
      height = _useStore.height,
      connectionMode = _useStore.connectionMode,
      nodeInternals = _useStore.nodeInternals;

  var edgeTree = useVisibleEdges(props.onlyRenderVisibleElements, nodeInternals);

  if (!width) {
    return null;
  }

  var connectionLineType = props.connectionLineType,
      defaultMarkerColor = props.defaultMarkerColor,
      connectionLineStyle = props.connectionLineStyle,
      connectionLineComponent = props.connectionLineComponent;
  var renderConnectionLine = connectionNodeId && connectionHandleType;
  return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, edgeTree.map(function (_ref) {
    var level = _ref.level,
        edges = _ref.edges,
        isMaxLevel = _ref.isMaxLevel;
    return /*#__PURE__*/React__default.createElement("svg", {
      key: level,
      style: {
        zIndex: level
      },
      width: width,
      height: height,
      className: "react-flow__edges react-flow__container"
    }, isMaxLevel && /*#__PURE__*/React__default.createElement(MarkerDefinitions, {
      defaultColor: defaultMarkerColor
    }), /*#__PURE__*/React__default.createElement("g", null, edges.map(function (edge) {
      var _getNodeData = getNodeData(nodeInternals, edge.source),
          _getNodeData2 = _slicedToArray(_getNodeData, 3),
          sourceNodeRect = _getNodeData2[0],
          sourceHandleBounds = _getNodeData2[1],
          sourceIsValid = _getNodeData2[2];

      var _getNodeData3 = getNodeData(nodeInternals, edge.target),
          _getNodeData4 = _slicedToArray(_getNodeData3, 3),
          targetNodeRect = _getNodeData4[0],
          targetHandleBounds = _getNodeData4[1],
          targetIsValid = _getNodeData4[2];

      if (!sourceIsValid || !targetIsValid) {
        return null;
      }

      var edgeType = edge.type || 'default';
      var EdgeComponent = props.edgeTypes[edgeType] || props.edgeTypes["default"]; // when connection type is loose we can define all handles as sources

      var targetNodeHandles = connectionMode === ConnectionMode.Strict ? targetHandleBounds.target : targetHandleBounds.target || targetHandleBounds.source;
      var sourceHandle = getHandle(sourceHandleBounds.source, edge.sourceHandle || null);
      var targetHandle = getHandle(targetNodeHandles, edge.targetHandle || null);
      var sourcePosition = (sourceHandle === null || sourceHandle === void 0 ? void 0 : sourceHandle.position) || Position.Bottom;
      var targetPosition = (targetHandle === null || targetHandle === void 0 ? void 0 : targetHandle.position) || Position.Top;

      if (!sourceHandle) {
        console.warn("couldn't create edge for source handle id: ".concat(edge.sourceHandle, "; edge id: ").concat(edge.id));
        return null;
      }

      if (!targetHandle) {
        console.warn("couldn't create edge for target handle id: ".concat(edge.targetHandle, "; edge id: ").concat(edge.id));
        return null;
      }

      var _getEdgePositions = getEdgePositions(sourceNodeRect, sourceHandle, sourcePosition, targetNodeRect, targetHandle, targetPosition),
          sourceX = _getEdgePositions.sourceX,
          sourceY = _getEdgePositions.sourceY,
          targetX = _getEdgePositions.targetX,
          targetY = _getEdgePositions.targetY;

      return /*#__PURE__*/React__default.createElement(EdgeComponent, {
        key: edge.id,
        id: edge.id,
        className: cc([edge.className, props.noPanClassName]),
        type: edgeType,
        data: edge.data,
        selected: !!edge.selected,
        animated: !!edge.animated,
        hidden: !!edge.hidden,
        label: edge.label,
        labelStyle: edge.labelStyle,
        labelShowBg: edge.labelShowBg,
        labelBgStyle: edge.labelBgStyle,
        labelBgPadding: edge.labelBgPadding,
        labelBgBorderRadius: edge.labelBgBorderRadius,
        style: edge.style,
        source: edge.source,
        target: edge.target,
        sourceHandleId: edge.sourceHandle,
        targetHandleId: edge.targetHandle,
        markerEnd: edge.markerEnd,
        markerStart: edge.markerStart,
        sourceX: sourceX,
        sourceY: sourceY,
        targetX: targetX,
        targetY: targetY,
        sourcePosition: sourcePosition,
        targetPosition: targetPosition,
        elementsSelectable: elementsSelectable,
        onEdgeUpdate: props.onEdgeUpdate,
        onContextMenu: props.onEdgeContextMenu,
        onMouseEnter: props.onEdgeMouseEnter,
        onMouseMove: props.onEdgeMouseMove,
        onMouseLeave: props.onEdgeMouseLeave,
        onClick: props.onEdgeClick,
        edgeUpdaterRadius: props.edgeUpdaterRadius,
        onEdgeDoubleClick: props.onEdgeDoubleClick,
        onEdgeUpdateStart: props.onEdgeUpdateStart,
        onEdgeUpdateEnd: props.onEdgeUpdateEnd
      });
    }), renderConnectionLine && isMaxLevel && /*#__PURE__*/React__default.createElement(ConnectionLine, {
      connectionNodeId: connectionNodeId,
      connectionHandleId: connectionHandleId,
      connectionHandleType: connectionHandleType,
      connectionPositionX: connectionPosition.x,
      connectionPositionY: connectionPosition.y,
      connectionLineStyle: connectionLineStyle,
      connectionLineType: connectionLineType,
      isConnectable: nodesConnectable,
      CustomConnectionLineComponent: connectionLineComponent
    })));
  }));
};

EdgeRenderer.displayName = 'EdgeRenderer';
var EdgeRenderer$1 = /*#__PURE__*/memo(EdgeRenderer);

var selector$1 = function selector(s) {
  return s.transform;
};

function Viewport(_ref) {
  var children = _ref.children;
  var transform = useStore(selector$1);
  return /*#__PURE__*/React__default.createElement("div", {
    className: "react-flow__viewport react-flow__container",
    style: {
      transform: "translate(".concat(transform[0], "px,").concat(transform[1], "px) scale(").concat(transform[2], ")")
    }
  }, children);
}

function useOnInitHandler(onInit) {
  var ReactFlowInstance = useReactFlow();
  var isInitialized = useRef(false);
  useEffect(function () {
    if (!isInitialized.current && ReactFlowInstance.viewportInitialized && onInit) {
      setTimeout(function () {
        return onInit(ReactFlowInstance);
      }, 1);
      isInitialized.current = true;
    }
  }, [onInit, ReactFlowInstance.viewportInitialized]);
}

var GraphView = function GraphView(_ref) {
  var nodeTypes = _ref.nodeTypes,
      edgeTypes = _ref.edgeTypes,
      onMove = _ref.onMove,
      onMoveStart = _ref.onMoveStart,
      onMoveEnd = _ref.onMoveEnd,
      onInit = _ref.onInit,
      onNodeClick = _ref.onNodeClick,
      onEdgeClick = _ref.onEdgeClick,
      onNodeDoubleClick = _ref.onNodeDoubleClick,
      onEdgeDoubleClick = _ref.onEdgeDoubleClick,
      onNodeMouseEnter = _ref.onNodeMouseEnter,
      onNodeMouseMove = _ref.onNodeMouseMove,
      onNodeMouseLeave = _ref.onNodeMouseLeave,
      onNodeContextMenu = _ref.onNodeContextMenu,
      onNodeDragStart = _ref.onNodeDragStart,
      onNodeDrag = _ref.onNodeDrag,
      onNodeDragStop = _ref.onNodeDragStop,
      onSelectionDragStart = _ref.onSelectionDragStart,
      onSelectionDrag = _ref.onSelectionDrag,
      onSelectionDragStop = _ref.onSelectionDragStop,
      onSelectionContextMenu = _ref.onSelectionContextMenu,
      connectionLineType = _ref.connectionLineType,
      connectionLineStyle = _ref.connectionLineStyle,
      connectionLineComponent = _ref.connectionLineComponent,
      selectionKeyCode = _ref.selectionKeyCode,
      multiSelectionKeyCode = _ref.multiSelectionKeyCode,
      zoomActivationKeyCode = _ref.zoomActivationKeyCode,
      deleteKeyCode = _ref.deleteKeyCode,
      onlyRenderVisibleElements = _ref.onlyRenderVisibleElements,
      elementsSelectable = _ref.elementsSelectable,
      selectNodesOnDrag = _ref.selectNodesOnDrag,
      defaultZoom = _ref.defaultZoom,
      defaultPosition = _ref.defaultPosition,
      preventScrolling = _ref.preventScrolling,
      defaultMarkerColor = _ref.defaultMarkerColor,
      zoomOnScroll = _ref.zoomOnScroll,
      zoomOnPinch = _ref.zoomOnPinch,
      panOnScroll = _ref.panOnScroll,
      panOnScrollSpeed = _ref.panOnScrollSpeed,
      panOnScrollMode = _ref.panOnScrollMode,
      zoomOnDoubleClick = _ref.zoomOnDoubleClick,
      panOnDrag = _ref.panOnDrag,
      onPaneClick = _ref.onPaneClick,
      onPaneScroll = _ref.onPaneScroll,
      onPaneContextMenu = _ref.onPaneContextMenu,
      onEdgeUpdate = _ref.onEdgeUpdate,
      onEdgeContextMenu = _ref.onEdgeContextMenu,
      onEdgeMouseEnter = _ref.onEdgeMouseEnter,
      onEdgeMouseMove = _ref.onEdgeMouseMove,
      onEdgeMouseLeave = _ref.onEdgeMouseLeave,
      edgeUpdaterRadius = _ref.edgeUpdaterRadius,
      onEdgeUpdateStart = _ref.onEdgeUpdateStart,
      onEdgeUpdateEnd = _ref.onEdgeUpdateEnd,
      noDragClassName = _ref.noDragClassName,
      noWheelClassName = _ref.noWheelClassName,
      noPanClassName = _ref.noPanClassName;
  useOnInitHandler(onInit);
  return /*#__PURE__*/React__default.createElement(FlowRenderer$1, {
    onPaneClick: onPaneClick,
    onPaneContextMenu: onPaneContextMenu,
    onPaneScroll: onPaneScroll,
    deleteKeyCode: deleteKeyCode,
    selectionKeyCode: selectionKeyCode,
    multiSelectionKeyCode: multiSelectionKeyCode,
    zoomActivationKeyCode: zoomActivationKeyCode,
    elementsSelectable: elementsSelectable,
    onMove: onMove,
    onMoveStart: onMoveStart,
    onMoveEnd: onMoveEnd,
    zoomOnScroll: zoomOnScroll,
    zoomOnPinch: zoomOnPinch,
    zoomOnDoubleClick: zoomOnDoubleClick,
    panOnScroll: panOnScroll,
    panOnScrollSpeed: panOnScrollSpeed,
    panOnScrollMode: panOnScrollMode,
    panOnDrag: panOnDrag,
    defaultPosition: defaultPosition,
    defaultZoom: defaultZoom,
    onSelectionDragStart: onSelectionDragStart,
    onSelectionDrag: onSelectionDrag,
    onSelectionDragStop: onSelectionDragStop,
    onSelectionContextMenu: onSelectionContextMenu,
    preventScrolling: preventScrolling,
    noDragClassName: noDragClassName,
    noWheelClassName: noWheelClassName,
    noPanClassName: noPanClassName
  }, /*#__PURE__*/React__default.createElement(Viewport, null, /*#__PURE__*/React__default.createElement(EdgeRenderer$1, {
    edgeTypes: edgeTypes,
    onEdgeClick: onEdgeClick,
    onEdgeDoubleClick: onEdgeDoubleClick,
    connectionLineType: connectionLineType,
    connectionLineStyle: connectionLineStyle,
    connectionLineComponent: connectionLineComponent,
    onEdgeUpdate: onEdgeUpdate,
    onlyRenderVisibleElements: onlyRenderVisibleElements,
    onEdgeContextMenu: onEdgeContextMenu,
    onEdgeMouseEnter: onEdgeMouseEnter,
    onEdgeMouseMove: onEdgeMouseMove,
    onEdgeMouseLeave: onEdgeMouseLeave,
    onEdgeUpdateStart: onEdgeUpdateStart,
    onEdgeUpdateEnd: onEdgeUpdateEnd,
    edgeUpdaterRadius: edgeUpdaterRadius,
    defaultMarkerColor: defaultMarkerColor,
    noPanClassName: noPanClassName
  }), /*#__PURE__*/React__default.createElement(NodeRenderer$1, {
    nodeTypes: nodeTypes,
    onNodeClick: onNodeClick,
    onNodeDoubleClick: onNodeDoubleClick,
    onNodeMouseEnter: onNodeMouseEnter,
    onNodeMouseMove: onNodeMouseMove,
    onNodeMouseLeave: onNodeMouseLeave,
    onNodeContextMenu: onNodeContextMenu,
    onNodeDragStop: onNodeDragStop,
    onNodeDrag: onNodeDrag,
    onNodeDragStart: onNodeDragStart,
    selectNodesOnDrag: selectNodesOnDrag,
    onlyRenderVisibleElements: onlyRenderVisibleElements,
    noPanClassName: noPanClassName,
    noDragClassName: noDragClassName
  })));
};

GraphView.displayName = 'GraphView';
var GraphView$1 = /*#__PURE__*/memo(GraphView);

var GroupNode = function GroupNode() {
  return null;
};

GroupNode.displayName = 'GroupNode';

function ownKeys$3(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$3(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$3(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$3(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function useMemoizedMouseHandler(id, dragging, getState, handler) {
  var memoizedHandler = useCallback(function (event) {
    if (typeof handler !== 'undefined' && !dragging) {
      var node = getState().nodeInternals.get(id);
      handler(event, _objectSpread$3({}, node));
    }
  }, [handler, dragging, id]);
  return memoizedHandler;
}

function ownKeys$2(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$2(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$2(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$2(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var selector = function selector(s) {
  return {
    addSelectedNodes: s.addSelectedNodes,
    updateNodePosition: s.updateNodePosition,
    unselectNodesAndEdges: s.unselectNodesAndEdges,
    updateNodeDimensions: s.updateNodeDimensions
  };
};

var wrapNode = (function (NodeComponent) {
  var NodeWrapper = function NodeWrapper(_ref) {
    var id = _ref.id,
        type = _ref.type,
        data = _ref.data,
        scale = _ref.scale,
        xPos = _ref.xPos,
        yPos = _ref.yPos,
        selected = _ref.selected,
        onClick = _ref.onClick,
        onMouseEnter = _ref.onMouseEnter,
        onMouseMove = _ref.onMouseMove,
        onMouseLeave = _ref.onMouseLeave,
        onContextMenu = _ref.onContextMenu,
        onNodeDoubleClick = _ref.onNodeDoubleClick,
        onNodeDragStart = _ref.onNodeDragStart,
        onNodeDrag = _ref.onNodeDrag,
        onNodeDragStop = _ref.onNodeDragStop,
        style = _ref.style,
        className = _ref.className,
        isDraggable = _ref.isDraggable,
        isSelectable = _ref.isSelectable,
        isConnectable = _ref.isConnectable,
        selectNodesOnDrag = _ref.selectNodesOnDrag,
        sourcePosition = _ref.sourcePosition,
        targetPosition = _ref.targetPosition,
        hidden = _ref.hidden,
        snapToGrid = _ref.snapToGrid,
        snapGrid = _ref.snapGrid,
        dragging = _ref.dragging,
        resizeObserver = _ref.resizeObserver,
        dragHandle = _ref.dragHandle,
        zIndex = _ref.zIndex,
        isParent = _ref.isParent,
        noPanClassName = _ref.noPanClassName,
        noDragClassName = _ref.noDragClassName;
    var store = useStoreApi();

    var _useStore = useStore(selector, shallow),
        addSelectedNodes = _useStore.addSelectedNodes,
        unselectNodesAndEdges = _useStore.unselectNodesAndEdges,
        updateNodePosition = _useStore.updateNodePosition,
        updateNodeDimensions = _useStore.updateNodeDimensions;

    var nodeElement = useRef(null);
    var prevSourcePosition = useRef(sourcePosition);
    var prevTargetPosition = useRef(targetPosition);
    var prevType = useRef(type);
    var hasPointerEvents = isSelectable || isDraggable || onClick || onMouseEnter || onMouseMove || onMouseLeave;
    var nodeStyle = useMemo(function () {
      return _objectSpread$2({
        zIndex: zIndex,
        transform: "translate(".concat(xPos, "px,").concat(yPos, "px)"),
        pointerEvents: hasPointerEvents ? 'all' : 'none'
      }, style);
    }, [zIndex, xPos, yPos, hasPointerEvents, style]);
    var grid = useMemo(function () {
      return snapToGrid ? snapGrid : [1, 1];
    }, [snapToGrid, snapGrid === null || snapGrid === void 0 ? void 0 : snapGrid[0], snapGrid === null || snapGrid === void 0 ? void 0 : snapGrid[1]]);
    var onMouseEnterHandler = useMemoizedMouseHandler(id, dragging, store.getState, onMouseEnter);
    var onMouseMoveHandler = useMemoizedMouseHandler(id, dragging, store.getState, onMouseMove);
    var onMouseLeaveHandler = useMemoizedMouseHandler(id, dragging, store.getState, onMouseLeave);
    var onContextMenuHandler = useMemoizedMouseHandler(id, false, store.getState, onContextMenu);
    var onNodeDoubleClickHandler = useMemoizedMouseHandler(id, false, store.getState, onNodeDoubleClick);
    var onSelectNodeHandler = useCallback(function (event) {
      if (!isDraggable) {
        if (isSelectable) {
          store.setState({
            nodesSelectionActive: false
          });

          if (!selected) {
            addSelectedNodes([id]);
          }
        }

        if (onClick) {
          var node = store.getState().nodeInternals.get(id);
          onClick(event, _objectSpread$2({}, node));
        }
      }
    }, [isSelectable, selected, isDraggable, onClick, id]);
    var onDragStart = useCallback(function (event) {
      if (selectNodesOnDrag && isSelectable) {
        store.setState({
          nodesSelectionActive: false
        });

        if (!selected) {
          addSelectedNodes([id]);
        }
      } else if (!selectNodesOnDrag && !selected && isSelectable) {
        var _store$getState = store.getState(),
            multiSelectionActive = _store$getState.multiSelectionActive;

        if (multiSelectionActive) {
          addSelectedNodes([id]);
        } else {
          unselectNodesAndEdges();
          store.setState({
            nodesSelectionActive: false
          });
        }
      }

      if (onNodeDragStart) {
        var node = store.getState().nodeInternals.get(id);
        onNodeDragStart(event, _objectSpread$2({}, node));
      }
    }, [id, selected, selectNodesOnDrag, isSelectable, onNodeDragStart]);
    var onDrag = useCallback(function (event, draggableData) {
      updateNodePosition({
        id: id,
        dragging: true,
        diff: {
          x: draggableData.deltaX,
          y: draggableData.deltaY
        }
      });

      if (onNodeDrag) {
        var _node$positionAbsolut, _node$positionAbsolut2;

        var node = store.getState().nodeInternals.get(id);
        onNodeDrag(event, _objectSpread$2(_objectSpread$2({}, node), {}, {
          dragging: true,
          position: {
            x: node.position.x + draggableData.deltaX,
            y: node.position.y + draggableData.deltaY
          },
          positionAbsolute: {
            x: (((_node$positionAbsolut = node.positionAbsolute) === null || _node$positionAbsolut === void 0 ? void 0 : _node$positionAbsolut.x) || 0) + draggableData.deltaX,
            y: (((_node$positionAbsolut2 = node.positionAbsolute) === null || _node$positionAbsolut2 === void 0 ? void 0 : _node$positionAbsolut2.y) || 0) + draggableData.deltaY
          }
        }));
      }
    }, [id, onNodeDrag]);
    var onDragStop = useCallback(function (event) {
      // onDragStop also gets called when user just clicks on a node.
      // Because of that we set dragging to true inside the onDrag handler and handle the click here
      var node;

      if (onClick || onNodeDragStop) {
        node = store.getState().nodeInternals.get(id);
      }

      if (!dragging) {
        if (isSelectable && !selectNodesOnDrag && !selected) {
          addSelectedNodes([id]);
        }

        if (onClick && node) {
          onClick(event, _objectSpread$2({}, node));
        }

        return;
      }

      updateNodePosition({
        id: id,
        dragging: false
      });

      if (onNodeDragStop && node) {
        onNodeDragStop(event, _objectSpread$2(_objectSpread$2({}, node), {}, {
          dragging: false
        }));
      }
    }, [id, isSelectable, selectNodesOnDrag, onClick, onNodeDragStop, dragging, selected]);
    useEffect(function () {
      if (nodeElement.current && !hidden) {
        var currNode = nodeElement.current;
        resizeObserver === null || resizeObserver === void 0 ? void 0 : resizeObserver.observe(currNode);
        return function () {
          return resizeObserver === null || resizeObserver === void 0 ? void 0 : resizeObserver.unobserve(currNode);
        };
      }
    }, [hidden]);
    useEffect(function () {
      // when the user programmatically changes the source or handle position, we re-initialize the node
      var typeChanged = prevType.current !== type;
      var sourcePosChanged = prevSourcePosition.current !== sourcePosition;
      var targetPosChanged = prevTargetPosition.current !== targetPosition;

      if (nodeElement.current && (typeChanged || sourcePosChanged || targetPosChanged)) {
        if (typeChanged) {
          prevType.current = type;
        }

        if (sourcePosChanged) {
          prevSourcePosition.current = sourcePosition;
        }

        if (targetPosChanged) {
          prevTargetPosition.current = targetPosition;
        }

        updateNodeDimensions([{
          id: id,
          nodeElement: nodeElement.current,
          forceUpdate: true
        }]);
      }
    }, [id, type, sourcePosition, targetPosition]);

    if (hidden) {
      return null;
    }

    var nodeClasses = cc(['react-flow__node', "react-flow__node-".concat(type), noPanClassName, className, {
      selected: selected,
      selectable: isSelectable,
      parent: isParent
    }]);
    return /*#__PURE__*/React__default.createElement(DraggableCore, {
      onStart: onDragStart,
      onDrag: onDrag,
      onStop: onDragStop,
      scale: scale,
      disabled: !isDraggable,
      cancel: ".".concat(noDragClassName),
      nodeRef: nodeElement,
      grid: grid,
      enableUserSelectHack: false,
      handle: dragHandle
    }, /*#__PURE__*/React__default.createElement("div", {
      className: nodeClasses,
      ref: nodeElement,
      style: nodeStyle,
      onMouseEnter: onMouseEnterHandler,
      onMouseMove: onMouseMoveHandler,
      onMouseLeave: onMouseLeaveHandler,
      onContextMenu: onContextMenuHandler,
      onClick: onSelectNodeHandler,
      onDoubleClick: onNodeDoubleClickHandler,
      "data-id": id
    }, /*#__PURE__*/React__default.createElement(Provider, {
      value: id
    }, /*#__PURE__*/React__default.createElement(NodeComponent, {
      id: id,
      data: data,
      type: type,
      xPos: xPos,
      yPos: yPos,
      selected: selected,
      isConnectable: isConnectable,
      sourcePosition: sourcePosition,
      targetPosition: targetPosition,
      dragging: dragging,
      dragHandle: dragHandle,
      zIndex: zIndex
    }))));
  };

  NodeWrapper.displayName = 'NodeWrapper';
  return /*#__PURE__*/memo(NodeWrapper);
});

function ownKeys$1(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$1(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$1(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$1(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function createNodeTypes(nodeTypes) {
  var standardTypes = {
    input: wrapNode(nodeTypes.input || InputNode$1),
    "default": wrapNode(nodeTypes["default"] || DefaultNode$1),
    output: wrapNode(nodeTypes.output || OutputNode$1),
    group: wrapNode(nodeTypes.group || GroupNode)
  };
  var wrappedTypes = {};
  var specialTypes = Object.keys(nodeTypes).filter(function (k) {
    return !['input', 'default', 'output', 'group'].includes(k);
  }).reduce(function (res, key) {
    res[key] = wrapNode(nodeTypes[key] || DefaultNode$1);
    return res;
  }, wrappedTypes);
  return _objectSpread$1(_objectSpread$1({}, standardTypes), specialTypes);
}

function useNodeOrEdgeTypes(nodeOrEdgeTypes, createTypes) {
  var typesKeysRef = useRef(null);
  var typesParsed = useMemo(function () {
    if (process.env.NODE_ENV === 'development') {
      var typeKeys = Object.keys(nodeOrEdgeTypes);

      if (shallow(typesKeysRef.current, typeKeys)) {
        console.warn("React Flow: It looks like that you created a new nodeTypes or edgeTypes object. If this wasn't on purpose please define the nodeTypes/edgeTypes outside of the component or memoize them.");
      }

      typesKeysRef.current = typeKeys;
    }

    return createTypes(nodeOrEdgeTypes);
  }, [nodeOrEdgeTypes]);
  return typesParsed;
}

var Wrapper = function Wrapper(_ref) {
  var children = _ref.children;
  var isWrapped = true;

  try {
    useStoreApi();
  } catch (e) {
    isWrapped = false;
  }

  if (isWrapped) {
    // we need to wrap it with a fragment because it's not allowed for children to be a ReactNode
    // https://github.com/DefinitelyTyped/DefinitelyTyped/issues/18051
    return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, children);
  }

  return /*#__PURE__*/React__default.createElement(Provider$1, {
    createStore: createStore
  }, children);
};

Wrapper.displayName = 'ReactFlowWrapper';

var _excluded = ["nodes", "edges", "defaultNodes", "defaultEdges", "className", "nodeTypes", "edgeTypes", "onNodeClick", "onEdgeClick", "onInit", "onMove", "onMoveStart", "onMoveEnd", "onConnect", "onConnectStart", "onConnectStop", "onConnectEnd", "onNodeMouseEnter", "onNodeMouseMove", "onNodeMouseLeave", "onNodeContextMenu", "onNodeDoubleClick", "onNodeDragStart", "onNodeDrag", "onNodeDragStop", "onNodesDelete", "onEdgesDelete", "onSelectionChange", "onSelectionDragStart", "onSelectionDrag", "onSelectionDragStop", "onSelectionContextMenu", "connectionMode", "connectionLineType", "connectionLineStyle", "connectionLineComponent", "deleteKeyCode", "selectionKeyCode", "multiSelectionKeyCode", "zoomActivationKeyCode", "snapToGrid", "snapGrid", "onlyRenderVisibleElements", "selectNodesOnDrag", "nodesDraggable", "nodesConnectable", "elementsSelectable", "minZoom", "maxZoom", "defaultZoom", "defaultPosition", "translateExtent", "preventScrolling", "nodeExtent", "defaultMarkerColor", "zoomOnScroll", "zoomOnPinch", "panOnScroll", "panOnScrollSpeed", "panOnScrollMode", "zoomOnDoubleClick", "panOnDrag", "onPaneClick", "onPaneScroll", "onPaneContextMenu", "children", "onEdgeUpdate", "onEdgeContextMenu", "onEdgeDoubleClick", "onEdgeMouseEnter", "onEdgeMouseMove", "onEdgeMouseLeave", "onEdgeUpdateStart", "onEdgeUpdateEnd", "edgeUpdaterRadius", "onNodesChange", "onEdgesChange", "noDragClassName", "noWheelClassName", "noPanClassName", "fitView", "fitViewOptions", "connectOnClick", "attributionPosition", "proOptions", "defaultEdgeOptions"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var defaultNodeTypes = {
  input: InputNode$1,
  "default": DefaultNode$1,
  output: OutputNode$1
};
var defaultEdgeTypes = {
  "default": BezierEdge,
  straight: StraightEdge,
  step: StepEdge,
  smoothstep: SmoothStepEdge,
  simplebezier: SimpleBezierEdge
};
var initSnapGrid = [15, 15];
var initDefaultPosition = [0, 0];
var ReactFlow = /*#__PURE__*/forwardRef(function (_ref, ref) {
  var nodes = _ref.nodes,
      edges = _ref.edges,
      defaultNodes = _ref.defaultNodes,
      defaultEdges = _ref.defaultEdges,
      className = _ref.className,
      _ref$nodeTypes = _ref.nodeTypes,
      nodeTypes = _ref$nodeTypes === void 0 ? defaultNodeTypes : _ref$nodeTypes,
      _ref$edgeTypes = _ref.edgeTypes,
      edgeTypes = _ref$edgeTypes === void 0 ? defaultEdgeTypes : _ref$edgeTypes,
      onNodeClick = _ref.onNodeClick,
      onEdgeClick = _ref.onEdgeClick,
      onInit = _ref.onInit,
      onMove = _ref.onMove,
      onMoveStart = _ref.onMoveStart,
      onMoveEnd = _ref.onMoveEnd,
      onConnect = _ref.onConnect,
      onConnectStart = _ref.onConnectStart,
      onConnectStop = _ref.onConnectStop,
      onConnectEnd = _ref.onConnectEnd,
      onNodeMouseEnter = _ref.onNodeMouseEnter,
      onNodeMouseMove = _ref.onNodeMouseMove,
      onNodeMouseLeave = _ref.onNodeMouseLeave,
      onNodeContextMenu = _ref.onNodeContextMenu,
      onNodeDoubleClick = _ref.onNodeDoubleClick,
      onNodeDragStart = _ref.onNodeDragStart,
      onNodeDrag = _ref.onNodeDrag,
      onNodeDragStop = _ref.onNodeDragStop,
      onNodesDelete = _ref.onNodesDelete,
      onEdgesDelete = _ref.onEdgesDelete,
      onSelectionChange = _ref.onSelectionChange,
      onSelectionDragStart = _ref.onSelectionDragStart,
      onSelectionDrag = _ref.onSelectionDrag,
      onSelectionDragStop = _ref.onSelectionDragStop,
      onSelectionContextMenu = _ref.onSelectionContextMenu,
      _ref$connectionMode = _ref.connectionMode,
      connectionMode = _ref$connectionMode === void 0 ? ConnectionMode.Strict : _ref$connectionMode,
      _ref$connectionLineTy = _ref.connectionLineType,
      connectionLineType = _ref$connectionLineTy === void 0 ? ConnectionLineType.Bezier : _ref$connectionLineTy,
      connectionLineStyle = _ref.connectionLineStyle,
      connectionLineComponent = _ref.connectionLineComponent,
      _ref$deleteKeyCode = _ref.deleteKeyCode,
      deleteKeyCode = _ref$deleteKeyCode === void 0 ? 'Backspace' : _ref$deleteKeyCode,
      _ref$selectionKeyCode = _ref.selectionKeyCode,
      selectionKeyCode = _ref$selectionKeyCode === void 0 ? 'Shift' : _ref$selectionKeyCode,
      _ref$multiSelectionKe = _ref.multiSelectionKeyCode,
      multiSelectionKeyCode = _ref$multiSelectionKe === void 0 ? 'Meta' : _ref$multiSelectionKe,
      _ref$zoomActivationKe = _ref.zoomActivationKeyCode,
      zoomActivationKeyCode = _ref$zoomActivationKe === void 0 ? 'Meta' : _ref$zoomActivationKe,
      _ref$snapToGrid = _ref.snapToGrid,
      snapToGrid = _ref$snapToGrid === void 0 ? false : _ref$snapToGrid,
      _ref$snapGrid = _ref.snapGrid,
      snapGrid = _ref$snapGrid === void 0 ? initSnapGrid : _ref$snapGrid,
      _ref$onlyRenderVisibl = _ref.onlyRenderVisibleElements,
      onlyRenderVisibleElements = _ref$onlyRenderVisibl === void 0 ? false : _ref$onlyRenderVisibl,
      _ref$selectNodesOnDra = _ref.selectNodesOnDrag,
      selectNodesOnDrag = _ref$selectNodesOnDra === void 0 ? true : _ref$selectNodesOnDra,
      nodesDraggable = _ref.nodesDraggable,
      nodesConnectable = _ref.nodesConnectable,
      elementsSelectable = _ref.elementsSelectable,
      minZoom = _ref.minZoom,
      maxZoom = _ref.maxZoom,
      _ref$defaultZoom = _ref.defaultZoom,
      defaultZoom = _ref$defaultZoom === void 0 ? 1 : _ref$defaultZoom,
      _ref$defaultPosition = _ref.defaultPosition,
      defaultPosition = _ref$defaultPosition === void 0 ? initDefaultPosition : _ref$defaultPosition,
      translateExtent = _ref.translateExtent,
      _ref$preventScrolling = _ref.preventScrolling,
      preventScrolling = _ref$preventScrolling === void 0 ? true : _ref$preventScrolling,
      nodeExtent = _ref.nodeExtent,
      _ref$defaultMarkerCol = _ref.defaultMarkerColor,
      defaultMarkerColor = _ref$defaultMarkerCol === void 0 ? '#b1b1b7' : _ref$defaultMarkerCol,
      _ref$zoomOnScroll = _ref.zoomOnScroll,
      zoomOnScroll = _ref$zoomOnScroll === void 0 ? true : _ref$zoomOnScroll,
      _ref$zoomOnPinch = _ref.zoomOnPinch,
      zoomOnPinch = _ref$zoomOnPinch === void 0 ? true : _ref$zoomOnPinch,
      _ref$panOnScroll = _ref.panOnScroll,
      panOnScroll = _ref$panOnScroll === void 0 ? false : _ref$panOnScroll,
      _ref$panOnScrollSpeed = _ref.panOnScrollSpeed,
      panOnScrollSpeed = _ref$panOnScrollSpeed === void 0 ? 0.5 : _ref$panOnScrollSpeed,
      _ref$panOnScrollMode = _ref.panOnScrollMode,
      panOnScrollMode = _ref$panOnScrollMode === void 0 ? PanOnScrollMode.Free : _ref$panOnScrollMode,
      _ref$zoomOnDoubleClic = _ref.zoomOnDoubleClick,
      zoomOnDoubleClick = _ref$zoomOnDoubleClic === void 0 ? true : _ref$zoomOnDoubleClic,
      _ref$panOnDrag = _ref.panOnDrag,
      panOnDrag = _ref$panOnDrag === void 0 ? true : _ref$panOnDrag,
      onPaneClick = _ref.onPaneClick,
      onPaneScroll = _ref.onPaneScroll,
      onPaneContextMenu = _ref.onPaneContextMenu,
      children = _ref.children,
      onEdgeUpdate = _ref.onEdgeUpdate,
      onEdgeContextMenu = _ref.onEdgeContextMenu,
      onEdgeDoubleClick = _ref.onEdgeDoubleClick,
      onEdgeMouseEnter = _ref.onEdgeMouseEnter,
      onEdgeMouseMove = _ref.onEdgeMouseMove,
      onEdgeMouseLeave = _ref.onEdgeMouseLeave,
      onEdgeUpdateStart = _ref.onEdgeUpdateStart,
      onEdgeUpdateEnd = _ref.onEdgeUpdateEnd,
      _ref$edgeUpdaterRadiu = _ref.edgeUpdaterRadius,
      edgeUpdaterRadius = _ref$edgeUpdaterRadiu === void 0 ? 10 : _ref$edgeUpdaterRadiu,
      onNodesChange = _ref.onNodesChange,
      onEdgesChange = _ref.onEdgesChange,
      _ref$noDragClassName = _ref.noDragClassName,
      noDragClassName = _ref$noDragClassName === void 0 ? 'nodrag' : _ref$noDragClassName,
      _ref$noWheelClassName = _ref.noWheelClassName,
      noWheelClassName = _ref$noWheelClassName === void 0 ? 'nowheel' : _ref$noWheelClassName,
      _ref$noPanClassName = _ref.noPanClassName,
      noPanClassName = _ref$noPanClassName === void 0 ? 'nopan' : _ref$noPanClassName,
      _ref$fitView = _ref.fitView,
      fitView = _ref$fitView === void 0 ? false : _ref$fitView,
      fitViewOptions = _ref.fitViewOptions,
      _ref$connectOnClick = _ref.connectOnClick,
      connectOnClick = _ref$connectOnClick === void 0 ? true : _ref$connectOnClick,
      attributionPosition = _ref.attributionPosition,
      proOptions = _ref.proOptions,
      defaultEdgeOptions = _ref.defaultEdgeOptions,
      rest = _objectWithoutProperties(_ref, _excluded);

  var nodeTypesParsed = useNodeOrEdgeTypes(nodeTypes, createNodeTypes);
  var edgeTypesParsed = useNodeOrEdgeTypes(edgeTypes, createEdgeTypes);
  var reactFlowClasses = cc(['react-flow', className]);
  return /*#__PURE__*/React__default.createElement("div", _objectSpread(_objectSpread({}, rest), {}, {
    ref: ref,
    className: reactFlowClasses
  }), /*#__PURE__*/React__default.createElement(Wrapper, null, /*#__PURE__*/React__default.createElement(GraphView$1, {
    onInit: onInit,
    onMove: onMove,
    onMoveStart: onMoveStart,
    onMoveEnd: onMoveEnd,
    onNodeClick: onNodeClick,
    onEdgeClick: onEdgeClick,
    onNodeMouseEnter: onNodeMouseEnter,
    onNodeMouseMove: onNodeMouseMove,
    onNodeMouseLeave: onNodeMouseLeave,
    onNodeContextMenu: onNodeContextMenu,
    onNodeDoubleClick: onNodeDoubleClick,
    onNodeDragStart: onNodeDragStart,
    onNodeDrag: onNodeDrag,
    onNodeDragStop: onNodeDragStop,
    nodeTypes: nodeTypesParsed,
    edgeTypes: edgeTypesParsed,
    connectionLineType: connectionLineType,
    connectionLineStyle: connectionLineStyle,
    connectionLineComponent: connectionLineComponent,
    selectionKeyCode: selectionKeyCode,
    deleteKeyCode: deleteKeyCode,
    multiSelectionKeyCode: multiSelectionKeyCode,
    zoomActivationKeyCode: zoomActivationKeyCode,
    onlyRenderVisibleElements: onlyRenderVisibleElements,
    selectNodesOnDrag: selectNodesOnDrag,
    defaultZoom: defaultZoom,
    defaultPosition: defaultPosition,
    preventScrolling: preventScrolling,
    zoomOnScroll: zoomOnScroll,
    zoomOnPinch: zoomOnPinch,
    zoomOnDoubleClick: zoomOnDoubleClick,
    panOnScroll: panOnScroll,
    panOnScrollSpeed: panOnScrollSpeed,
    panOnScrollMode: panOnScrollMode,
    panOnDrag: panOnDrag,
    onPaneClick: onPaneClick,
    onPaneScroll: onPaneScroll,
    onPaneContextMenu: onPaneContextMenu,
    onSelectionDragStart: onSelectionDragStart,
    onSelectionDrag: onSelectionDrag,
    onSelectionDragStop: onSelectionDragStop,
    onSelectionContextMenu: onSelectionContextMenu,
    onEdgeUpdate: onEdgeUpdate,
    onEdgeContextMenu: onEdgeContextMenu,
    onEdgeDoubleClick: onEdgeDoubleClick,
    onEdgeMouseEnter: onEdgeMouseEnter,
    onEdgeMouseMove: onEdgeMouseMove,
    onEdgeMouseLeave: onEdgeMouseLeave,
    onEdgeUpdateStart: onEdgeUpdateStart,
    onEdgeUpdateEnd: onEdgeUpdateEnd,
    edgeUpdaterRadius: edgeUpdaterRadius,
    defaultMarkerColor: defaultMarkerColor,
    noDragClassName: noDragClassName,
    noWheelClassName: noWheelClassName,
    noPanClassName: noPanClassName
  }), /*#__PURE__*/React__default.createElement(StoreUpdater, {
    nodes: nodes,
    edges: edges,
    defaultNodes: defaultNodes,
    defaultEdges: defaultEdges,
    onConnect: onConnect,
    onConnectStart: onConnectStart,
    onConnectStop: onConnectStop,
    onConnectEnd: onConnectEnd,
    nodesDraggable: nodesDraggable,
    nodesConnectable: nodesConnectable,
    elementsSelectable: elementsSelectable,
    minZoom: minZoom,
    maxZoom: maxZoom,
    nodeExtent: nodeExtent,
    onNodesChange: onNodesChange,
    onEdgesChange: onEdgesChange,
    snapToGrid: snapToGrid,
    snapGrid: snapGrid,
    connectionMode: connectionMode,
    translateExtent: translateExtent,
    connectOnClick: connectOnClick,
    defaultEdgeOptions: defaultEdgeOptions,
    fitView: fitView,
    fitViewOptions: fitViewOptions,
    onNodesDelete: onNodesDelete,
    onEdgesDelete: onEdgesDelete
  }), onSelectionChange && /*#__PURE__*/React__default.createElement(SelectionListener$1, {
    onSelectionChange: onSelectionChange
  }), children, /*#__PURE__*/React__default.createElement(Attribution, {
    proOptions: proOptions,
    position: attributionPosition
  })));
});
ReactFlow.displayName = 'ReactFlow';

var ReactFlowProvider = function ReactFlowProvider(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/React__default.createElement(Provider$1, {
    createStore: createStore
  }, children);
};

ReactFlowProvider.displayName = 'ReactFlowProvider';

function createUseItemsState(applyChanges) {
  return function (initialItems) {
    var _useState = useState(initialItems),
        _useState2 = _slicedToArray(_useState, 2),
        items = _useState2[0],
        setItems = _useState2[1];

    var onItemsChange = useCallback(function (changes) {
      return setItems(function (items) {
        return applyChanges(changes, items);
      });
    }, []);
    return [items, setItems, onItemsChange];
  };
}

var useNodesState = createUseItemsState(applyNodeChanges);
var useEdgesState = createUseItemsState(applyEdgeChanges);

export { BezierEdge, EdgeText$1 as EdgeText, Handle$1 as Handle, ReactFlowProvider, SimpleBezierEdge, SmoothStepEdge, StepEdge, StraightEdge, ReactFlow as default, getBezierCenter as getBezierEdgeCenter, getBezierPath, getCenter as getEdgeCenter, getMarkerEnd, getSimpleBezierCenter as getSimpleBezierEdgeCenter, getSimpleBezierPath, getSmoothStepPath, useEdgesState, useKeyPress, useNodesState };
//# sourceMappingURL=index.js.map
