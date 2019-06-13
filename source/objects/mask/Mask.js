"use strict";

import {Object2D} from "../../Object2D.js";
import {Vector2} from "../../math/Vector2.js";
import {Box2} from "../../math/Box2.js";

/**
 * A mask can be used to set the drawing region.
 *
 * Masks are treated as objects their shape is used to filter other objects shape.
 *
 * Multiple mask objects can be active simulatenously, they have to be attached to the object mask list to filter the render region.
 *
 * A mask objects is draw using the context.clip() method.
 *
 * @class
 */
function Mask()
{
	Object2D.call(this);
}

Mask.prototype = Object.create(Object2D.prototype);

Mask.prototype.isMask = true;

/**
 * Clip the canvas context, to ensure that next objects being drawn are cliped to the path stored here.
 *
 * @param {CanvasContext} context Canvas 2d drawing context.
 * @param {Viewport} viewport Viewport applied to the canvas.
 * @param {DOM} canvas DOM canvas element where the content is being drawn.
 */
Mask.prototype.clip = function(context, viewport, canvas){};

export {Mask};