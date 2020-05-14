/**
 * Class representing a 2D vector. A 2D vector is an ordered pair of numbers (labeled x and y), which can be used to represent points in space, directions, etc.
 *
 * @class
 * @param {number} x
 * @param {number} y
 */
function Vector2(x, y)
{
	this.x = x || 0;
	this.y = y || 0;
}

/**
 * Set vector x and y values.
 *
 * @param {number} x
 * @param {number} y
 */
Vector2.prototype.set = function(x, y)
{
	this.x = x;
	this.y = y;
};

/**
 * Set a scalar value into the x and y values.
 */
Vector2.prototype.setScalar = function(scalar)
{
	this.x = scalar;
	this.y = scalar;
};

/**
 * Create a clone of this vector object.
 */
Vector2.prototype.clone = function()
{
	return new Vector2(this.x, this.y);
};

/**
 * Copy the content of another vector into this one.
 *
 * @param {Vector2} v
 */
Vector2.prototype.copy = function(v)
{
	this.x = v.x;
	this.y = v.y;
};

/**
 * Add the content of another vector to this one.
 *
 * @param {Vector2} v
 */
Vector2.prototype.add = function(v)
{
	this.x += v.x;
	this.y += v.y;
};

/**
 * Add a scalar value to booth vector components.
 *
 * @param {number} s
 */
Vector2.prototype.addScalar = function(s)
{
	this.x += s;
	this.y += s;
};

/** 
 * Add two vectors and store the result in this vector.
 *
 * @param {Vector2} a
 * @param {Vector2} b
 */
Vector2.prototype.addVectors = function(a, b)
{
	this.x = a.x + b.x;
	this.y = a.y + b.y;
};

/**
 * Scale a vector components and add the result to this vector.
 *
 * @param {Vector2} v
 * @param {number} s
 */
Vector2.prototype.addScaledVector = function(v, s)
{
	this.x += v.x * s;
	this.y += v.y * s;
};

/**
 * Subtract the content of another vector to this one.
 *
 * @param {Vector2} v
 */
Vector2.prototype.sub = function(v)
{
	this.x -= v.x;
	this.y -= v.y;
};

/**
 * Subtract a scalar value to booth vector components.
 *
 * @param {number} s
 */
Vector2.prototype.subScalar = function(s)
{
	this.x -= s;
	this.y -= s;
};

/** 
 * Subtract two vectors and store the result in this vector.
 *
 * @param {Vector2} a
 * @param {Vector2} b
 */
Vector2.prototype.subVectors = function(a, b)
{
	this.x = a.x - b.x;
	this.y = a.y - b.y;
};

/**
 * Multiply the content of another vector to this one.
 *
 * @param {Vector2} v
 */
Vector2.prototype.multiply = function(v)
{
	this.x *= v.x;
	this.y *= v.y;
};

/**
 * Multiply a scalar value by booth vector components.
 *
 * @param {number} scalar
 */
Vector2.prototype.multiplyScalar = function(scalar)
{
	this.x *= scalar;
	this.y *= scalar;
};


/**
 * Divide the content of another vector from this one.
 *
 * @param {Vector2} v
 */
Vector2.prototype.divide = function(v)
{
	this.x /= v.x;
	this.y /= v.y;
};

/**
 * Divide a scalar value by booth vector components.
 *
 * @param {number} s
 */
Vector2.prototype.divideScalar = function(scalar)
{
	return this.multiplyScalar(1 / scalar);
};

/**
 * Set the minimum of x and y coordinates between two vectors.
 *
 * X is set as the min between this vector and the other vector. 
 *
 * @param {Vector2} v
 */
Vector2.prototype.min = function(v)
{
	this.x = Math.min(this.x, v.x);
	this.y = Math.min(this.y, v.y);
};

/**
 * Set the maximum of x and y coordinates between two vectors.
 *
 * X is set as the max between this vector and the other vector. 
 *
 * @param {Vector2} v
 */
Vector2.prototype.max = function(v)
{
	this.x = Math.max(this.x, v.x);
	this.y = Math.max(this.y, v.y);
};

Vector2.prototype.clamp = function(min, max)
{
	// assumes min < max, componentwise
	this.x = Math.max(min.x, Math.min(max.x, this.x));
	this.y = Math.max(min.y, Math.min(max.y, this.y));
};

Vector2.prototype.clampScalar = function(minVal, maxVal)
{
	this.x = Math.max(minVal, Math.min(maxVal, this.x));
	this.y = Math.max(minVal, Math.min(maxVal, this.y));
};

Vector2.prototype.clampLength = function(min, max)
{
	var length = this.length();

	return this.divideScalar(length || 1).multiplyScalar(Math.max(min, Math.min(max, length)));
};

/**
 * Round the vector coordinates to integer by flooring to the smaller integer.
 */ 
Vector2.prototype.floor = function()
{
	this.x = Math.floor(this.x);
	this.y = Math.floor(this.y);
};

/**
 * Round the vector coordinates to integer by ceiling to the bigger integer.
 */ 
Vector2.prototype.ceil = function()
{
	this.x = Math.ceil(this.x);
	this.y = Math.ceil(this.y);
};

/**
 * Round the vector coordinates to their closest integer.
 */
Vector2.prototype.round = function()
{
	this.x = Math.round(this.x);
	this.y = Math.round(this.y);
};

/**
 * Negate the coordinates of this vector.
 */
Vector2.prototype.negate = function()
{
	this.x = -this.x;
	this.y = -this.y;

	return this;
};

/**
 * Dot multiplication between this vector and another vector.
 *
 * @param {Vector2} vector
 * @return {number} Result of the dot multiplication.
 */
Vector2.prototype.dot = function(v)
{
	return this.x * v.x + this.y * v.y;
};

/**
 * Cross multiplication between this vector and another vector.
 *
 * @param {Vector2} vector
 * @return {number} Result of the cross multiplication.
 */
Vector2.prototype.cross = function(v)
{
	return this.x * v.y - this.y * v.x;
};

/**
 * Squared length of the vector.
 *
 * Faster for comparions.
 */
Vector2.prototype.lengthSq = function()
{
	return this.x * this.x + this.y * this.y;
};

/**
 * Length of the vector.
 */
Vector2.prototype.length = function()
{
	return Math.sqrt(this.x * this.x + this.y * this.y);
};

/**
 * Manhattan length of the vector.
 */
Vector2.prototype.manhattanLength = function()
{
	return Math.abs(this.x) + Math.abs(this.y);
};

/**
 * Normalize the vector (make it length one).
 */
Vector2.prototype.normalize = function()
{
	return this.divideScalar(this.length() || 1);
};

/**
 * Computes the angle in radians with respect to the positive x-axis
 */
Vector2.prototype.angle = function()
{
	var angle = Math.atan2(this.y, this.x);

	if(angle < 0)
	{
		angle += 2 * Math.PI;
	}
	
	return angle;
};

/**
 * Distance between two vector positions.
 */
Vector2.prototype.distanceTo = function(v)
{
	return Math.sqrt(this.distanceToSquared(v));
};

/**
 * Distance between two vector positions squared.
 *
 * Faster for comparisons.
 */
Vector2.prototype.distanceToSquared = function(v)
{
	var dx = this.x - v.x;
	var dy = this.y - v.y;

	return dx * dx + dy * dy;
};

/**
 * Manhattan distance between two vector positions.
 */
Vector2.prototype.manhattanDistanceTo = function(v)
{
	return Math.abs(this.x - v.x) + Math.abs(this.y - v.y);
};

/**
 * Scale the vector to have a defined length value.
 */
Vector2.prototype.setLength = function(length)
{
	return this.normalize().multiplyScalar(length);
};

Vector2.prototype.lerp = function(v, alpha)
{
	this.x += (v.x - this.x) * alpha;
	this.y += (v.y - this.y) * alpha;
};

Vector2.prototype.lerpVectors = function(v1, v2, alpha)
{
	return this.subVectors(v2, v1).multiplyScalar(alpha).add(v1);
};

/**
 * Check if two vectors are equal.
 *
 * @param {Vector2} v
 */
Vector2.prototype.equals = function(v)
{
	return ((v.x === this.x) && (v.y === this.y));
};

/**
 * Set vector value from array with a offset.
 *
 * @param {array} array
 * @param {number} [offset]
 */
Vector2.prototype.fromArray = function(array, offset)
{
	if(offset === undefined) offset = 0;

	this.x = array[offset];
	this.y = array[offset + 1];
};

/**
 * Convert this vector to an array.
 *
 * @param {array} array
 * @param {number} [offset]
 */
Vector2.prototype.toArray = function(array, offset)
{
	if(array === undefined) array = [];
	if(offset === undefined) offset = 0;

	array[offset] = this.x;
	array[offset + 1] = this.y;

	return array;
};

/**
 * Rotate the vector around a central point.
 *
 * @param {Vector2} center
 * @param {number} angle
 */
Vector2.prototype.rotateAround = function(center, angle)
{
	var c = Math.cos(angle);
	var s = Math.sin(angle);

	var x = this.x - center.x;
	var y = this.y - center.y;

	this.x = x * c - y * s + center.x;
	this.y = x * s + y * c + center.y;
};

/**
 * 2D 3x2 transformation matrix, used to represent linear geometric transformations over objects.
 *
 * The values of the matrix are stored in a numeric array and can be applied to the canvas or DOM elements.
 *
 * @class
 * @param {number[]} values Array of matrix values by row, needs to have exactly 6 values.
 */
function Matrix(values)
{
	if(values !== undefined)
	{
		this.m = values;
	}
	else
	{
		this.identity();
	}
}

/**
 * Copy the content of another matrix and store in this one.
 *
 * @param {Matrix} mat Matrix to copy values from.
 */
Matrix.prototype.copy = function(mat)
{
	this.m = mat.m.slice(0);
};

/**
 * Create a new matrix object with a copy of the content of this one.
 *
 * @return {Matrix} Copy of this matrix.
 */
Matrix.prototype.clone = function()
{
	return new Matrix(this.m.slice(0))
};

/**
 * Reset this matrix to identity.
 */
Matrix.prototype.identity = function()
{
	this.m = [1, 0, 0, 1, 0, 0];
};

/**
 * Multiply another matrix by this one and store the result.
 *
 * @param {Matrix} mat
 */
Matrix.prototype.multiply = function(mat)
{
	var m0 = this.m[0] * mat.m[0] + this.m[2] * mat.m[1];
	var m1 = this.m[1] * mat.m[0] + this.m[3] * mat.m[1];
	var m2 = this.m[0] * mat.m[2] + this.m[2] * mat.m[3];
	var m3 = this.m[1] * mat.m[2] + this.m[3] * mat.m[3];
	var m4 = this.m[0] * mat.m[4] + this.m[2] * mat.m[5] + this.m[4];
	var m5 = this.m[1] * mat.m[4] + this.m[3] * mat.m[5] + this.m[5];
	
	this.m = [m0, m1, m2, m3, m4, m5];
};

/**
 * Premultiply another matrix by this one and store the result.
 *
 * @param {Matrix} mat
 */
Matrix.prototype.premultiply = function(mat)
{
	var m0 = mat.m[0] * this.m[0] + mat.m[2] * this.m[1];
	var m1 = mat.m[1] * this.m[0] + mat.m[3] * this.m[1];
	var m2 = mat.m[0] * this.m[2] + mat.m[2] * this.m[3];
	var m3 = mat.m[1] * this.m[2] + mat.m[3] * this.m[3];
	var m4 = mat.m[0] * this.m[4] + mat.m[2] * this.m[5] + mat.m[4];
	var m5 = mat.m[1] * this.m[4] + mat.m[3] * this.m[5] + mat.m[5];
	
	this.m = [m0, m1, m2, m3, m4, m5];
};

/**
 * Compose this transformation matrix with position scale and rotation and origin point.
 *
 * @param {number} px Position X
 * @param {number} py Position Y
 * @param {number} sx Scale X
 * @param {number} sy Scale Y
 * @param {number} ox Origin X (applied before scale and rotation)
 * @param {number} oy Origin Y (applied before scale and rotation)
 * @param {number} a Rotation angle (radians).
 */
Matrix.prototype.compose = function(px, py, sx, sy, ox, oy, a)
{
	this.m = [1, 0, 0, 1, px, py];

	if(a !== 0)
	{		
		var c = Math.cos(a);
		var s = Math.sin(a);
		this.multiply(new Matrix([c, s, -s, c, 0, 0]));
	}

	if(sx !== 1 || sy !== 1)
	{
		this.scale(sx, sy);
	}

	if(ox !== 0 || oy !== 0)
	{	
		this.multiply(new Matrix([1, 0, 0, 1, -ox, -oy]));
	}
};

/**
 * Apply translation to this matrix.
 *
 * Adds position over the transformation already stored in the matrix.
 *
 * @param {number} x
 * @param {number} y
 */
Matrix.prototype.translate = function(x, y)
{
	this.m[4] += this.m[0] * x + this.m[2] * y;
	this.m[5] += this.m[1] * x + this.m[3] * y;
};

/**
 * Apply rotation to this matrix.
 *
 * @param {number} rad Angle to rotate the matrix in radians.
 */
Matrix.prototype.rotate = function(rad)
{
	var c = Math.cos(rad);
	var s = Math.sin(rad);

	var m11 = this.m[0] * c + this.m[2] * s;
	var m12 = this.m[1] * c + this.m[3] * s;
	var m21 = this.m[0] * -s + this.m[2] * c;
	var m22 = this.m[1] * -s + this.m[3] * c;

	this.m[0] = m11;
	this.m[1] = m12;
	this.m[2] = m21;
	this.m[3] = m22;
};

/**
 * Apply scale to this matrix.
 *
 * @param {number} sx
 * @param {number} sy
 */
Matrix.prototype.scale = function(sx, sy)
{
	this.m[0] *= sx;
	this.m[1] *= sx;
	this.m[2] *= sy;
	this.m[3] *= sy;
};

/**
 * Set the position of the transformation matrix.
 *
 * @param {number} x
 * @param {number} y
 */
Matrix.prototype.setPosition = function(x, y)
{
	this.m[4] = x;
	this.m[5] = y;
};

/**
 * Extract the scale from the transformation matrix.
 *
 * @return {Vector2} Scale of the matrix transformation.
 */
Matrix.prototype.getScale = function()
{
	return new Vector2(this.m[0], this.m[3]);
};

/**
 * Extract the position from the transformation matrix.
 *
 * @return {Vector2} Position of the matrix transformation.
 */
Matrix.prototype.getPosition = function()
{
	return new Vector2(this.m[4], this.m[5]);
};

/**
 * Apply skew to this matrix.
 */
Matrix.prototype.skew = function(radianX, radianY)
{
	this.multiply(new Matrix([1, Math.tan(radianY), Math.tan(radianX), 1, 0, 0]));
};

/**
 * Get the matrix determinant.
 *
 * @return {number} Determinant of this matrix.
 */
Matrix.prototype.determinant = function()
{
	return 1 / (this.m[0] * this.m[3] - this.m[1] * this.m[2]);
};

/**
 * Get the inverse matrix.
 *
 * @return {Matrix} New matrix instance containing the inverse matrix.
 */
Matrix.prototype.getInverse = function()
{
	var d = this.determinant();

	return new Matrix([this.m[3] * d, -this.m[1] * d, -this.m[2] * d, this.m[0] * d, d * (this.m[2] * this.m[5] - this.m[3] * this.m[4]), d * (this.m[1] * this.m[4] - this.m[0] * this.m[5])]);
};

/**
 * Transform a point using this matrix.
 *
 * @param {Vector2} p Point to be transformed.
 * @return {Vector2} Transformed point.
 */
Matrix.prototype.transformPoint = function(p)
{
	var px = p.x * this.m[0] + p.y * this.m[2] + this.m[4];
	var py = p.x * this.m[1] + p.y * this.m[3] + this.m[5];

	return new Vector2(px, py);
};

/**
 * Set a canvas context to use this transformation.
 *
 * @param {CanvasRenderingContext2D} context Canvas context to apply this matrix transform.
 */
Matrix.prototype.setContextTransform = function(context)
{
	context.setTransform(this.m[0], this.m[1], this.m[2], this.m[3], this.m[4], this.m[5]);
};

/**
 * Transform on top of the current context transformation.
 *
 * @param {CanvasRenderingContext2D} context Canvas context to apply this matrix transform.
 */
Matrix.prototype.tranformContext = function(context)
{
	context.transform(this.m[0], this.m[1], this.m[2], this.m[3], this.m[4], this.m[5]);
};

/**
 * Generate a CSS transform string that can be applied to the transform style of any DOM element.
 *
 * @returns {string} CSS transform matrix.
 */
Matrix.prototype.cssTransform = function()
{
	return "matrix(" + this.m[0] + "," + this.m[1] + "," + this.m[2] + "," + this.m[3] + "," + this.m[4] + "," + this.m[5] + ")";
};

/**
 * Class to implement UUID generation methods.
 *
 * @class
 */
function UUID(){}

/**
 * Generates a new random UUID v4 as string.
 *
 * @static
 * @return {string} UUID generated as string.
 */
UUID.generate = (function ()
{
	var lut = [];
	for(var i = 0; i < 256; i++)
	{
		lut[i] = (i < 16 ? "0" : "") + (i).toString(16);
	}

	return function generateUUID()
	{
		var d0 = Math.random() * 0XFFFFFFFF | 0;
		var d1 = Math.random() * 0XFFFFFFFF | 0;
		var d2 = Math.random() * 0XFFFFFFFF | 0;
		var d3 = Math.random() * 0XFFFFFFFF | 0;

		var uuid = lut[d0 & 0xff] + lut[d0 >> 8 & 0xff] + lut[d0 >> 16 & 0xff] + lut[d0 >> 24 & 0xff] + "-" +
			lut[d1 & 0xff] + lut[d1 >> 8 & 0xff] + "-" + lut[d1 >> 16 & 0x0f | 0x40] + lut[d1 >> 24 & 0xff] + "-" +
			lut[d2 & 0x3f | 0x80] + lut[d2 >> 8 & 0xff] + "-" + lut[d2 >> 16 & 0xff] + lut[d2 >> 24 & 0xff] +
			lut[d3 & 0xff] + lut[d3 >> 8 & 0xff] + lut[d3 >> 16 & 0xff] + lut[d3 >> 24 & 0xff];

		return uuid.toUpperCase();
	};
})();

/**
 * Base object class, implements all the object positioning and scaling features.
 *
 * Stores all the base properties shared between all objects as the position, transformation properties, children etc.
 *
 * Object2D object can be used as a group to the other objects drawn.
 *
 * @class
 */
function Object2D()
{	
	/**
	 * UUID of the object.
	 *
	 * @type {string}
	 */
	this.uuid = UUID.generate(); 

	/**
	 * List of children objects attached to the object.
	 *
	 * @type {Object2D[]}
	 */
	this.children = [];

	/**
	 * Parent object, the object position is affected by its parent position.
	 *
	 * @type {Object2D}
	 */
	this.parent = null;

	/**
	 * Depth level in the object tree, objects with higher depth are drawn on top.
	 *
	 * The layer value is considered first.
	 *
	 * @type {number}
	 */
	this.level = 0;

	/**
	 * Position of the object.
	 *
	 * The world position of the object is affected by its parent transform.
	 *
	 * @type {Vector2}
	 */
	this.position = new Vector2(0, 0);

	/**
	 * Origin of the object used as point of rotation.
	 *
	 * @type {Vector2}
	 */
	this.origin = new Vector2(0, 0);

	/**
	 * Scale of the object.
	 *
	 * The world scale of the object is affected by the parent transform.
	 *
	 * @type {Vector2}
	 */
	this.scale = new Vector2(1, 1);

	/**
	 * Rotation of the object relative to its center.
	 *
	 * The world rotation of the object is affected by the parent transform.
	 *
	 * @type {number}
	 */
	this.rotation = 0.0;

	/**
	 * Indicates if the object is visible.
	 *
	 * @type {boolean}
	 */
	this.visible = true;

	/**
	 * Layer of this object, objects are sorted by layer value.
	 *
	 * Lower layer value is draw first, higher layer value is drawn on top.
	 *
	 * @type {number}
	 */
	this.layer = 0;

	/**
	 * Local transformation matrix applied to the object.
	 *
	 * @type {Matrix}
	 */
	this.matrix = new Matrix();

	/**
	 * Global transformation matrix multiplied by the parent matrix.
	 *
	 * Used to transform the object before projecting into screen coordinates.
	 *
	 * @type {Matrix}
	 */
	this.globalMatrix = new Matrix();

	/**
	 * Inverse of the global (world) transform matrix.
	 *
	 * Used to convert pointer input points (viewport space) into object coordinates.
	 *
	 * @type {Matrix}
	 */
	this.inverseGlobalMatrix = new Matrix();

	/**
	 * Mask objects being applied to this object. Used to mask/subtract portions of this object when rendering.
	 *
	 * Multiple masks can be used simultaneously. Same mask might be reused for multiple objects.
	 *
	 * @type {Mask[]}
	 */
	this.masks = [];

	/**
	 * Indicates if the transform matrix should be automatically updated every frame.
	 *
	 * Set this false for better performance. But if you do so dont forget to set matrixNeedsUpdate every time that a transform attribute is changed.
	 *
	 * @type {boolean}
	 */
	this.matrixAutoUpdate = true;

	/**
	 * Indicates if the matrix needs to be updated, should be set true after changes to the object position, scale or rotation.
	 *
	 * The matrix is updated before rendering the object, after the matrix is updated this attribute is automatically reset to false.
	 *
	 * @type {boolean}
	 */
	this.matrixNeedsUpdate = true;

	/**
	 * Draggable controls if its possible to drag the object around. Set this true to enable dragging events on this object.
	 *
	 * The onPointerDrag callback is used to update the state of the object while being dragged, by default it just updates the object position.
	 *
	 * @type {boolean}
	 */
	this.draggable = false;

	/**
	 * Indicates if this object uses pointer events.
	 *
	 * Can be set false to skip the pointer interaction events, better performance if pointer events are not required.
	 *
	 * @type {boolean}
	 */
	this.pointerEvents = true;

	/**
	 * Flag to indicate whether this object ignores the viewport transformation.
	 *
	 * @type {boolean}
	 */
	this.ignoreViewport = false;

	/**
	 * Flag to indicate if the context of canvas should be saved before render.
	 *
	 * @type {boolean}
	 */
	this.saveContextState = true;

	/**
	 * Flag to indicate if the context of canvas should be restored after render.
	 *
	 * @type {boolean}
	 */
	this.restoreContextState = true;

	/**
	 * Flag indicating if the pointer is inside of the element.
	 *
	 * Used to control object event.
	 *
	 * @type {boolean}
	 */
	this.pointerInside = false;

	/**
	 * Flag to indicate if the object is currently being dragged.
	 *
	 * @type {boolean}
	 */
	this.beingDragged = false;
}

/**
 * Check if a point in world coordinates intersects this object or its children and get a list of the objects intersected.
 *
 * @param {Vector2} point Point in world coordinates.
 * @param {Object2D[]} list List of objects intersected passed to children objects recursively.
 * @return {Object2D[]} List of object intersected by this point.
 */
Object2D.prototype.getWorldPointIntersections = function(point, list)
{
	if(list === undefined)
	{
		list = [];
	}

	// Calculate the pointer position in the object coordinates
	var localPoint = this.inverseGlobalMatrix.transformPoint(point);
	if(this.isInside(localPoint))
	{
		list.push(this);
	}

	// Iterate trough the children
	for(var i = 0; i < this.children.length; i++)
	{
		this.children[i].getWorldPointIntersections(point, list);
	}

	return list;
};

/**
 * Check if a point in world coordinates intersects this object or some of its children.
 *
 * @param {Vector2} point Point in world coordinates.
 * @param {boolean} recursive If set to true it will also check intersections with the object children.
 * @return {boolean} Returns true if the point in inside of the object.
 */
Object2D.prototype.isWorldPointInside = function(point, recursive)
{
	// Calculate the pointer position in the object coordinates
	var localPoint = this.inverseGlobalMatrix.transformPoint(point);
	if(this.isInside(localPoint))
	{
		return true;
	}

	// Iterate trough the children
	if(recursive)
	{
		for(var i = 0; i < this.children.length; i++)
		{
			if(this.children[i].isWorldPointInside(point, true))
			{
				return true;
			}
		}
	}

	return false;
};


/**
 * Destroy the object, removes it from the parent object.
 */
Object2D.prototype.destroy = function()
{
	if(this.parent !== null)
	{
		this.parent.remove(this);
	}
};

/**
 * Traverse the object tree and run a function for all objects.
 *
 * @param {Function} callback Callback function that receives the object as parameter.
 */
Object2D.prototype.traverse = function(callback)
{
	callback(this);

	for(var i = 0; i < this.children.length; i++)
	{
		this.children[i].traverse(callback);
	}
};

/**
 * Get a object from its children list by its UUID.
 *
 * @param {string} uuid UUID of the object to get.
 * @return {Object2D} The object that has the UUID specified, null if the object was not found.
 */
Object2D.prototype.getChildByUUID = function(uuid)
{
	var object = null;

	this.traverse(function(child)
	{
		if(child.uuid === uuid)
		{
			object = child;
		}
	});

	return object;
};

/**
 * Attach a children to this object.
 *
 * The object is set as children of this object and the transformations applied to this object are traversed to its children.
 *
 * @param {Object2D} object Object to attach to this object.
 */ 
Object2D.prototype.add = function(object)
{
	object.parent = this;
	object.level = this.level + 1;

	object.traverse(function(child)
	{
		if(child.onAdd !== null)
		{
			child.onAdd(this);
		}
	});

	this.children.push(object);
};

/**
 * Remove object from the children list.
 *
 * @param {Object2D} children Object to be removed.
 */
Object2D.prototype.remove = function(children)
{
	var index = this.children.indexOf(children);
	
	if(index !== -1)
	{
		var object = this.children[index];
		object.parent = null;
		object.level = 0;

		object.traverse(function(child)
		{
			if(child.onRemove !== null)
			{
				child.onRemove(this);
			}
		});

		this.children.splice(index, 1);
	}
};

/**
 * Check if a point is inside of the object. Used by the renderer check for pointer collision (required for the object to properly process pointer events).
 *
 * Point should be in local object coordinates.
 *
 * To check if a point in world coordinates intersects the object the inverseGlobalMatrix should be applied to that point before calling this method.
 *
 * @param {Vector2} point Point in local object coordinates.
 * @return {boolean} True if the point is inside of the object.
 */
Object2D.prototype.isInside = function(point)
{
	return false;
};

/**
 * Update the transformation matrix of the object.
 *
 * @param {CanvasRenderingContext2D} context Canvas 2d drawing context.
 */
Object2D.prototype.updateMatrix = function(context)
{
	if(this.matrixAutoUpdate || this.matrixNeedsUpdate)
	{
		this.matrix.compose(this.position.x, this.position.y, this.scale.x, this.scale.y, this.origin.x, this.origin.y, this.rotation);
		this.globalMatrix.copy(this.matrix);

		if(this.parent !== null)
		{	
			this.globalMatrix.premultiply(this.parent.globalMatrix);
		}

		this.inverseGlobalMatrix = this.globalMatrix.getInverse();
		this.matrixNeedsUpdate = false;
	}
};

/**
 * Apply the transform to the rendering context, it is assumed that the viewport transform is pre-applied to the context.
 *
 * This is called before style() and draw(). It can also be used for some pre-rendering logic.
 *
 * @param {CanvasRenderingContext2D} context Canvas 2d drawing context.
 * @param {Viewport} viewport Viewport applied to the canvas.
 */
Object2D.prototype.transform = function(context, viewport)
{
	this.globalMatrix.tranformContext(context);
};

/**
 * Style is called right before draw() it should not draw any content into the canvas, all context styling should be applied here (colors, fonts, etc).
 *
 * The draw() and style() methods can be  useful for objects that share the same styling attributes but are drawing differently.
 *
 * Should be implemented by underlying classes.
 *
 * @param {CanvasRenderingContext2D} context Canvas 2d drawing context.
 * @param {Viewport} viewport Viewport used to view the canvas content.
 * @param {DOM} canvas DOM canvas element where the content is being drawn.
 */
Object2D.prototype.style = null; // function(context, viewport, canvas){};

/**
 * Draw the object into the canvas, this is called transform() and style(), should be where the content is actually drawn into the canvas.
 *
 * Should be implemented by underlying classes.
 *
 * @param {CanvasRenderingContext2D} context Canvas 2d drawing context.
 * @param {Viewport} viewport Viewport used to view the canvas content.
 * @param {DOM} canvas DOM canvas element where the content is being drawn.
 */
Object2D.prototype.draw = null; // function(context, viewport, canvas){};

/**
 * Callback method while the object is being dragged across the screen.
 *
 * By default is adds the delta value to the object position (making it follow the mouse movement).
 *
 * Delta is the movement of the pointer already translated into local object coordinates.
 *
 * To detect when the object drag stops the onPointerDragEnd() method can be used.
 *
 * @param {Pointer} pointer Pointer object that receives the user input.
 * @param {Viewport} viewport Viewport where the object is drawn.
 * @param {Vector2} delta Pointer movement diff in world space since the last frame.
 * @param {Vector2} positionWorld Position of the dragging pointer in world coordinates.
 */
Object2D.prototype.onPointerDrag = function(pointer, viewport, delta, positionWorld)
{
	this.position.add(delta);
};

/**
 * Callback method called when the pointer drag start after the button was pressed
 *
 * @param {Pointer} pointer Pointer object that receives the user input.
 * @param {Viewport} viewport Viewport where the object is drawn.
 */
Object2D.prototype.onPointerDragStart = null;

/**
 * Callback method called when the pointer drag ends after the button has been released.
 *
 * @param {Pointer} pointer Pointer object that receives the user input.
 * @param {Viewport} viewport Viewport where the object is drawn.
 */
Object2D.prototype.onPointerDragEnd = null;

/**
 * Method called when the object its added to a parent.
 *
 * @param {Object2D} parent Parent object were it was added.
 */
Object2D.prototype.onAdd = null;

/**
 * Method called when the object gets removed from its parent
 *
 * @param {Object2D} parent Parent object from were the object is being removed.
 */
Object2D.prototype.onRemove = null;

/**
 * Callback method called every time before the object is draw into the canvas.
 *
 * Should be used to run object logic, any preparation code, move the object, etc.
 *
 * This method is called for every object before rendering.
 */
Object2D.prototype.onUpdate = null;

/**
 * Callback method called when the pointer enters the object.
 *
 * It is not called while the pointer is inside of the object, just on the first time that the pointer enters the object for that use onPointerOver()
 *
 * @param {Pointer} pointer Pointer object that receives the user input.
 * @param {Viewport} viewport Viewport where the object is drawn.
 */
Object2D.prototype.onPointerEnter = null;

/**
 * Method called when the was inside of the object and leaves the object.
 *
 * @param {Pointer} pointer Pointer object that receives the user input.
 * @param {Viewport} viewport Viewport where the object is drawn.
 */
Object2D.prototype.onPointerLeave = null;

/**
 * Method while the pointer is over (inside) of the object.
 *
 * @param {Pointer} pointer Pointer object that receives the user input.
 * @param {Viewport} viewport Viewport where the object is drawn.
 */
Object2D.prototype.onPointerOver = null;

/**
 * Method called while the pointer button is pressed.
 *
 * @param {Pointer} pointer Pointer object that receives the user input.
 * @param {Viewport} viewport Viewport where the object is drawn.
 */
Object2D.prototype.onButtonPressed = null;

/**
 * Method called while the pointer button is double clicked.
 *
 * @param {Pointer} pointer Pointer object that receives the user input.
 * @param {Viewport} viewport Viewport where the object is drawn.
 */
Object2D.prototype.onDoubleClick = null;

/**
 * Callback method called when the pointer button is pressed down (single time).
 *
 * @param {Pointer} pointer Pointer object that receives the user input.
 * @param {Viewport} viewport Viewport where the object is drawn.
 */
Object2D.prototype.onButtonDown = null;

/**
 * Method called when the pointer button is released (single time).
 *
 * @param {Pointer} pointer Pointer object that receives the user input.
 * @param {Viewport} viewport Viewport where the object is drawn.
 */
Object2D.prototype.onButtonUp = null;

/**
 * Text element, used to draw single line text into the canvas.
 *
 * For multi line text with support for line break check {MultiLineText} object.
 *
 * @class
 * @extends {Object2D}
 */
function Text()
{
	Object2D.call(this);

	/**
	 * Text value displayed by this element.
	 *
	 * @type {string}
	 */
	this.text = "";

	/**
	 * Font of the text.
	 *
	 * @type {string}
	 */
	this.font = "16px Arial";

	/**
	 * Style of the object border line. If set null it is ignored.
	 *
	 * @type {string}
	 */
	this.strokeStyle = null;

	/**
	 * Line width, only used if a valid strokeStyle is defined.
	 *
	 * @type {number}
	 */
	this.lineWidth = 1;

	/**
	 * CSS background color of the box. If set null it is ignored.
	 *
	 * @type {string}
	 */
	this.fillStyle = "#000000";

	/**
	 * Text align property. Same values as used for canvas text applies
	 *
	 * Check documentation at https://developer.mozilla.org/en-US/docs/Web/CSS/text-align for mode details about this property.
	 *
	 * @type {string}
	 */
	this.textAlign = "center";

	/**
	 * Text baseline defines the vertical position of the text relative to the imaginary line Y position. Same values as used for canvas text applies
	 *
	 * Check documentation at https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/textBaseline for mode details about this property.
	 *
	 * @type {string}
	 */
	this.textBaseline = "middle";
}

Text.prototype = Object.create(Object2D.prototype);

Text.prototype.draw = function(context, viewport, canvas)
{
	context.font = this.font;
	context.textAlign = this.textAlign;
	context.textBaseline = this.textBaseline ;
	
	if(this.fillStyle !== null)
	{
		context.fillStyle = this.fillStyle;
		context.fillText(this.text, 0, 0);
	}

	if(this.strokeStyle !== null)
	{
		context.strokeStyle = this.strokeStyle;
		context.strokeText(this.text, 0, 0);
	}
};

/**
 * Multiple line text drawing directly into the canvas.
 *
 * Has support for basic text indent and alignment.
 *
 * @class
 * @extends {Text}
 */
function MultiLineText()
{
	Text.call(this);

	/**
	 * Maximum width of the text content. After text reaches the max width a line break is placed.
	 *
	 * Can be set to null to be ignored.
	 *
	 * @type {number}
	 */
	this.maxWidth = null;

	/**
	 * Height of each line of text, can be smaller or larger than the actual font size.
	 *
	 * Can be set to null to be ignored.
	 *
	 * @type {number}
	 */
	this.lineHeight = null;
}

MultiLineText.prototype = Object.create(Text.prototype);

MultiLineText.prototype.draw = function(context, viewport, canvas)
{
	context.font = this.font;
	context.textAlign = this.textAlign;
	context.textBaseline = this.textBaseline;

	var lineHeight = this.lineHeight || Number.parseFloat(this.font);
	var lines = this.text.split("\n");
	var offsetY = 0;

	// Iterate trough all lines (breakpoints)
	for(var i = 0; i < lines.length; i++)
	{
		var line = lines[i];
		var size = context.measureText(line);
		var sublines = [];

		// Split into multiple sub-lines
		if(this.maxWidth !== null && size.width > this.maxWidth)
		{
			while(line.length > 0)
			{
				var subline = "";
				var subsize = context.measureText(subline + line[0]);

				while(subsize.width < this.maxWidth && line.length > 0)
				{
					subline += line[0];
					line = line.substr(1);
					subsize = context.measureText(subline + line[0]);
				}

				sublines.push(subline);
			}

		}
		// Fits into a single line
		else
		{
			sublines = [line];
		}

		for(var j = 0; j < sublines.length; j++)
		{
			if(this.fillStyle !== null)
			{
				context.fillStyle = this.fillStyle;
				context.fillText(sublines[j], this.position.x, this.position.y + offsetY);
			}

			if(this.strokeStyle !== null)
			{
				context.strokeStyle = this.strokeStyle;
				context.strokeText(sublines[j], this.position.x, this.position.y + offsetY);
			}

			offsetY += lineHeight;
		}
	}
};

/**
 * EventManager is used to manager DOM events creating and destruction in a single function call.
 *
 * It is used by objects to make it easier to add and remove events from global DOM objects.
 *
 * @class
 */
function EventManager()
{
	/**
	 * Stores all events in the manager, their target and callback.
	 * 
	 * Format [target, event, callback, active]
	 * 
	 * @type {Array}
	 */
	this.events = [];
}

/**
 * Add new event to the manager.
 *
 * @param {Element} target Event target element.
 * @param {String} event Event name.
 * @param {Function} callback Callback function.
 */
EventManager.prototype.add = function(target, event, callback)
{
	this.events.push([target, event, callback, false]);
};

/**
 * Destroys this manager and remove all events.
 */
EventManager.prototype.clear = function()
{
	this.destroy();
	this.events = [];
};

/**
 * Creates all events in this manager.
 */
EventManager.prototype.create = function()
{
	for(var i = 0; i < this.events.length; i++)
	{
		var event = this.events[i];
		event[0].addEventListener(event[1], event[2]);
		event[3] = true;
	}
};

/**
 * Removes all events in this manager.
 */
EventManager.prototype.destroy = function()
{
	for(var i = 0; i < this.events.length; i++)
	{
		var event = this.events[i];
		event[0].removeEventListener(event[1], event[2]);
		event[3] = false;
	}
};

/**
 * Key is used by Keyboard, Pointer, etc, to represent a key state.
 *
 * @class
*/
function Key()
{
	/**
	 * Indicates if this key is currently pressed.
	 */
	this.pressed = false;

	/**
	 * Indicates if this key was just pressed.
	 */
	this.justPressed = false;
	
	/**
	 * Indicates if this key was just released.
	 */
	this.justReleased = false;
}

Key.DOWN = -1;
Key.UP = 1;
Key.RESET = 0;

Key.prototype.constructor = Key;

/**
 * Update Key status based on new key state.
 */
Key.prototype.update = function(action)
{
	this.justPressed = false;
	this.justReleased = false;

	if(action === Key.DOWN)
	{
		if(this.pressed === false)
		{
			this.justPressed = true;
		}
		this.pressed = true;
	}
	else if(action === Key.UP)
	{
		if(this.pressed)
		{
			this.justReleased = true;
		}
		this.pressed = false;
	}
	else if(action === Key.RESET)
	{
		this.justReleased = false;
		this.justPressed = false;
	}
};

/**
 * Set this key attributes manually.
 */
Key.prototype.set = function(justPressed, pressed, justReleased)
{
	this.justPressed = justPressed;
	this.pressed = pressed;
	this.justReleased = justReleased;
};

/**
 * Reset key to default values.
*/
Key.prototype.reset = function()
{
	this.justPressed = false;
	this.pressed = false;
	this.justReleased = false;
};

/**
 * Pointer object is used to called input from the user, works for booth mouse or touch screens.
 *
 * It is responsible for synchronizing user input with the render of the graphics.
 * 
 * @class
 * @param {Element} domElement DOM element to create the pointer events.
 * @param {Element} canvas Canvas DOM element where the content is being drawn.
 */
function Pointer(domElement, canvas)
{
	//Raw data
	this._keys = new Array(5);
	this._position = new Vector2(0, 0);
	this._positionUpdated = false;
	this._delta = new Vector2(0, 0);
	this._wheel = 0;
	this._wheelUpdated = false;
	this._doubleClicked = new Array(5);

	/**
	 * Array with pointer buttons status.
	 */
	this.keys = new Array(5);

	/**
	 * Pointer position inside of the window (coordinates in window space).
	 */
	this.position = new Vector2(0, 0);

	/**
	 * Pointer movement (coordinates in window space).
	 */
	this.delta = new Vector2(0, 0);

	/**
	 * Pointer scroll wheel movement.
	 */
	this.wheel = 0;
	
	/**
	 * Indicates a button of the pointer was double clicked.
	 */
	this.doubleClicked = new Array(5);

	/**
	 * DOM element where to attach the pointer events.
	 */
	this.domElement = (domElement !== undefined) ? domElement : window;

	/**
	 * Canvas attached to this pointer instance used to calculate position and delta in element space coordinates.
	 */
	this.canvas = null;
	if(canvas !== undefined)
	{
		this.setCanvas(canvas);
	}

	/**
	 * Event manager responsible for updating the raw data variables.
	 *
	 * Diferent events are used depending on the host platform.
	 *
	 * When the update method is called the raw data is reset.
	 */
	this.events = new EventManager();

	//Initialize key instances
	for(var i = 0; i < 5; i++)
	{
		this._doubleClicked[i] = false;
		this.doubleClicked[i] = false;
		this._keys[i] = new Key();
		this.keys[i] = new Key();
	}

	//Self pointer
	var self = this;

	//Scroll wheel
	if(window.onmousewheel !== undefined)
	{
		//Chrome, edge
		this.events.add(this.domElement, "mousewheel", function(event)
		{
			self._wheel = event.deltaY;
			self._wheelUpdated = true;
		});
	}
	else if(window.addEventListener !== undefined)
	{
		//Firefox
		this.events.add(this.domElement, "DOMMouseScroll", function(event)
		{
			self._wheel = event.detail * 30;
			self._wheelUpdated = true;
		});
	}
	else
	{
		this.events.add(this.domElement, "wheel", function(event)
		{
			self._wheel = event.deltaY;
			self._wheelUpdated = true;
		});
	}

	//Touchscreen input events
	if(window.ontouchstart !== undefined || navigator.msMaxTouchPoints > 0)
	{
		//Auxiliar variables to calculate touch delta
		var lastTouch = new Vector2(0, 0);

		//Touch start event
		this.events.add(this.domElement, "touchstart", function(event)
		{
			var touch = event.touches[0];

			self.updatePosition(touch.clientX, touch.clientY, 0, 0);
			self.updateKey(Pointer.LEFT, Key.DOWN);

			lastTouch.set(touch.clientX, touch.clientY);
		});

		//Touch end event
		this.events.add(this.domElement, "touchend", function(event)
		{
			self.updateKey(Pointer.LEFT, Key.UP);
		});

		//Touch cancel event
		this.events.add(this.domElement, "touchcancel", function(event)
		{
			self.updateKey(Pointer.LEFT, Key.UP);
		});

		//Touch move event
		this.events.add(document.body, "touchmove", function(event)
		{
			var touch = event.touches[0];
			self.updatePosition(touch.clientX, touch.clientY, touch.clientX - lastTouch.x, touch.clientY - lastTouch.y);
			lastTouch.set(touch.clientX, touch.clientY);
		});
	}

	//Move
	this.events.add(this.domElement, "mousemove", function(event)
	{
		self.updatePosition(event.clientX, event.clientY, event.movementX, event.movementY);
	});

	//Button pressed
	this.events.add(this.domElement, "mousedown", function(event)
	{
		self.updateKey(event.which - 1, Key.DOWN);
	});

	//Button released
	this.events.add(this.domElement, "mouseup", function(event)
	{
		self.updateKey(event.which - 1, Key.UP);
	});

	//Drag start
	this.events.add(this.domElement, "dragstart", function(event)
	{
		self.updateKey(event.which - 1, Key.UP);
	});

	//Pointer double click
	this.events.add(this.domElement, "dblclick", function(event)
	{	
		self._doubleClicked[event.which - 1] = true;
	});

	this.create();
}

Pointer.prototype = Pointer;
Pointer.prototype.constructor = Pointer;

/**
 * Left pointer button.
 */
Pointer.LEFT = 0;

/**
 * Middle pointer button.
 */
Pointer.MIDDLE = 1;

/**
 * Right pointer button.
 */
Pointer.RIGHT = 2;

/**
 * Back pointer navigation button.
 */
Pointer.BACK = 3;

/**
 * Forward pointer navigation button.
 */
Pointer.FORWARD = 4;

/**
 * Element to be used for coordinates calculation relative to that canvas.
 * 
 * @param {DOM} canvas Canvas to be attached to the Pointer instance
 */
Pointer.setCanvas = function(element)
{
	this.canvas = element;

	element.pointerInside = false;

	element.addEventListener("mouseenter", function()
	{
		this.pointerInside = true;
	});

	element.addEventListener("mouseleave", function()
	{
		this.pointerInside = false;
	});
};

/**
 * Check if pointer is inside attached canvas (updated async).
 * 
 * @return {boolean} True if pointer is currently inside the canvas
 */
Pointer.insideCanvas = function()
{
	return this.canvas !== null && this.canvas.pointerInside;
};

/**
 * Check if pointer button is currently pressed.
 * 
 * @param {Number} button Button to check status of
 * @return {boolean} True if button is currently pressed
 */
Pointer.buttonPressed = function(button)
{
	return this.keys[button].pressed;
};

/**
 * Check if pointer button was double clicked.
 * 
 * @param {Number} button Button to check status of
 * @return {boolean} True if some pointer button was just double clicked
 */
Pointer.buttonDoubleClicked = function(button)
{
	return this.doubleClicked[button];
};

/**
 * Check if a pointer button was just pressed.
 * 
 * @param {Number} button Button to check status of
 * @return {boolean} True if button was just pressed
 */
Pointer.buttonJustPressed = function(button)
{
	return this.keys[button].justPressed;
};

/**
 * Check if a pointer button was just released.
 * 
 * @param {Number} button Button to check status of
 * @return {boolean} True if button was just released
 */
Pointer.buttonJustReleased = function(button)
{
	return this.keys[button].justReleased;
};

/**
 * Update pointer position.
 *
 * Automatically called by the runtime.
 * 
 * @param {Number} x
 * @param {Number} y
 * @param {Number} xDiff
 * @param {Number} yDiff
 */
Pointer.updatePosition = function(x, y, xDiff, yDiff)
{
	if(this.canvas !== null)
	{
		var rect = this.canvas.getBoundingClientRect();
		x -= rect.left;
		y -= rect.top;
	}

	this._position.set(x, y);
	this._delta.x += xDiff;
	this._delta.y += yDiff;
	this._positionUpdated = true;
};

/**
 * Update a pointer button.
 * 
 * Automatically called by the runtime.
 *
 * @param {Number} button
 * @param {Number} action
 */
Pointer.updateKey = function(button, action)
{
	if(button > -1)
	{
		this._keys[button].update(action);
	}
};

/**
 * Update pointer buttons state, position, wheel and delta synchronously.
 */
Pointer.update = function()
{
	//Update pointer keys state
	for(var i = 0; i < 5; i++)
	{
		if(this._keys[i].justPressed && this.keys[i].justPressed)
		{
			this._keys[i].justPressed = false;
		}
		if(this._keys[i].justReleased && this.keys[i].justReleased)
		{
			this._keys[i].justReleased = false;
		}

		this.keys[i].set(this._keys[i].justPressed, this._keys[i].pressed, this._keys[i].justReleased);

		//Update pointer double click
		if(this._doubleClicked[i] === true)
		{
			this.doubleClicked[i] = true;
			this._doubleClicked[i] = false;
		}
		else
		{
			this.doubleClicked[i] = false;
		}
	}

	//Update pointer wheel
	if(this._wheelUpdated)
	{
		this.wheel = this._wheel;
		this._wheelUpdated = false;
	}
	else
	{
		this.wheel = 0;
	}

	//Update pointer Position if needed
	if(this._positionUpdated)
	{
		this.delta.copy(this._delta);
		this.position.copy(this._position);

		this._delta.set(0,0);
		this._positionUpdated = false;
	}
	else
	{
		this.delta.x = 0;
		this.delta.y = 0;
	}
};

/**
 * Create pointer events.
 */
Pointer.create = function()
{
	this.events.create();
};

/**
 * Dispose pointer events.
 */
Pointer.dispose = function()
{
	this.events.destroy();
};

/**
 * Viewport defines the user view into the content being rendered, similar to a camera it defines the size of the content, rotation and position of the content.
 *
 * The viewport can be moved, rotated and scaled to navigate the virtual canvas.
 *
 * @class
 * @param {Element} canvas Canvas DOM element where the viewport is being rendered.
 */
function Viewport(canvas)
{
	/**
	 * UUID of the object.
	 */
	this.uuid = UUID.generate(); 

	/**
	 * Canvas DOM element where the viewport is being rendered.
	 */
	this.canvas = canvas;

	/**
	 * Position of the object.
	 */
	this.position = new Vector2(0, 0);

	/**
	 * Scale of the object.
	 */
	this.scale = 1.0;

	/**
	 * Rotation of the object relative to its center.
	 */
	this.rotation = 0.0;

	/**
	 * Local transformation matrix applied to the object. 
	 */
	this.matrix = new Matrix();

	/**
	 * Inverse of the local transformation matrix.
	 */
	this.inverseMatrix = new Matrix();

	/**
	 * If true the matrix is updated before rendering the object.
	 */
	this.matrixNeedsUpdate = true;

	/**
	 * Flag to indicate if the viewport should move when scaling.
	 *
	 * For some application its easier to focus the target if the viewport moves to the pointer location while scaling.
	 */
	this.moveOnScale = false;

	/**
	 * Value of the initial point of rotation if the viewport is being rotated.
	 *
	 * Is set to null when the viewport is not being rotated.
	 */
	this.rotationPoint = null;
}

/**
 * Calculate and update the viewport transformation matrix.
 *
 * Also updates the inverse matrix of the viewport.
 */
Viewport.prototype.updateMatrix = function()
{
	if(this.matrixNeedsUpdate)
	{
		this.matrix.m = [1, 0, 0, 1, this.position.x, this.position.y];

		if(this.rotation !== 0)
		{		
			var c = Math.cos(this.rotation);
			var s = Math.sin(this.rotation);
			this.matrix.multiply(new Matrix([c, s, -s, c, 0, 0]));
		}

		if(this.scale !== 1)
		{
			this.matrix.scale(this.scale, this.scale);
		}

		this.inverseMatrix = this.matrix.getInverse();
		this.matrixNeedsUpdate = false;
	}
};

/**
 * Center the viewport relative to a object.
 *
 * The position of the object is used a central point, this method does not consider "box" attributes or other strucures in the object.
 *
 * @param {Object2D} object Object to be centered on the viewport.
 * @param {Element} canvas Canvas element where the image is drawn.
 */
Viewport.prototype.centerObject = function(object, canvas)
{
	var position = object.globalMatrix.transformPoint(new Vector2());
	position.multiplyScalar(-this.scale);
	position.x += canvas.width / 2;
	position.y += canvas.height / 2;

	this.position.copy(position);
	this.matrixNeedsUpdate = true;
};

/**
 * Viewport controls are used to allow the user to control the viewport.
 *
 * @class
 * @param {Viewport} viewport
 */
function ViewportControls(viewport)
{
	/**
	 * Viewport being controlled by this object.
	 */
	this.viewport = viewport;

	/**
	 * Button used to drag and viewport around.
	 *
	 * On touch enabled devices the touch event is represented as a LEFT button.
	 */
	this.dragButton = Pointer.RIGHT;

	/**
	 * Is set to true allow the viewport to be scalled.
	 *
	 * Scaling is performed using the pointer scroll.
	 */
	this.allowScale = true;

	/**
	 * Flag to indicate if the viewport should move when scalling.
	 *
	 * For some application its easier to focus the target if the viewport moves to the pointer location while scalling.
	 */
	this.moveOnScale = false;

	/**
	 * If true allows the viewport to be rotated.
	 *
	 * Rotation is performed by holding the RIGHT and LEFT pointer buttons and rotating around the initial point.
	 */
	this.allowRotation = true;

	/**
	 * Value of the initial point of rotation if the viewport is being rotated.
	 *
	 * Is set to null when the viewport is not being rotated.
	 */
	this.rotationPoint = null;

	/**
	 * Initial rotation of the viewport.
	 */
	this.rotationInitial = 0;
}

/**
 * Update the viewport controls using the pointer object.
 *
 * Should be called every frame before rendering.
 *
 * @param {Pointer} pointer
 */
ViewportControls.prototype.update = function(pointer)
{	
	// Scale
	if(this.allowScale && pointer.wheel !== 0)
	{
		var scale = pointer.wheel * 1e-3 * this.viewport.scale;

		this.viewport.scale -= scale;
		this.viewport.matrixNeedsUpdate = true;

		// Move on scale
		if(this.moveOnScale && pointer.canvas !== null)
		{	
			this.viewport.updateMatrix();

			var pointerWorld = this.viewport.inverseMatrix.transformPoint(pointer.position);

			var centerWorld = new Vector2(pointer.canvas.width / 2.0, pointer.canvas.height / 2.0);
			centerWorld = this.viewport.inverseMatrix.transformPoint(centerWorld);

			var delta = pointerWorld.clone();
			delta.sub(centerWorld);
			delta.multiplyScalar(0.1);

			this.viewport.position.sub(delta);
			this.viewport.matrixNeedsUpdate = true;
		}
	}

	// Rotation
	if(this.allowRotation && pointer.buttonPressed(Pointer.RIGHT) && pointer.buttonPressed(Pointer.LEFT))
	{
		// Rotation pivot
		if(this.rotationPoint === null)
		{
			this.rotationPoint = pointer.position.clone();
			this.rotationInitial = this.viewport.rotation;
		}
		else
		{
			var pointer = pointer.position.clone();
			pointer.sub(this.rotationPoint);
			this.viewport.rotation = this.rotationInitial + pointer.angle();
			this.viewport.matrixNeedsUpdate = true;
		}
	}
	// Drag
	else
	{
		this.rotationPoint = null;

		if(pointer.buttonPressed(this.dragButton))
		{
			this.viewport.position.x += pointer.delta.x;
			this.viewport.position.y += pointer.delta.y;
			this.viewport.matrixNeedsUpdate = true;
		}
	}
};

/**
 * The renderer is responsible for drawing the objects structure into the canvas element and manage its rendering state.
 *
 * @class
 * @param {Element} canvas Canvas to render the content.
 * @param {Object} options Renderer canvas options.
 */
function Renderer(canvas, options)
{
	if(options === undefined)
	{
		options = 
		{
			alpha: true
		};
	}

	/**
	 * Canvas DOM element, has to be managed by the user.
	 */
	this.canvas = canvas;

	/**
	 * Canvas 2D rendering context used to draw content.
	 */
	this.context = canvas.getContext("2d", {alpha: options.alpha});
	this.context.imageSmoothingEnabled = true;
	this.context.globalCompositeOperation = "source-over";

	/**
	 * Pointer input handler object.
	 */
	this.pointer = new Pointer(window, canvas);

	/**
	 * Indicates if the canvas should be automatically cleared before new frame is drawn.
	 *
	 * If set to false the user should clear the frame before drawing.
	 */
	this.autoClear = true;
}

/**
 * Creates a infinite render loop to render the group into a viewport each frame.
 *
 * The render loop cannot be destroyed, and it automatically creates a viewport controls object.
 *
 * @param {Object2D} group Group to be rendered.
 * @param {Viewport} viewport Viewport into the objects.
 * @param {Function} onUpdate Function called before rendering the frame.
 */
Renderer.prototype.createRenderLoop = function(group, viewport, onUpdate)
{
	var self = this;
	var controls = new ViewportControls(viewport);

	function loop()
	{
		if(onUpdate !== undefined)
		{
			onUpdate();
		}

		controls.update(self.pointer);
		self.update(group, viewport);
		requestAnimationFrame(loop);
	}

	loop();
};

/**
 * Renders a object using a user defined viewport into a canvas element.
 *
 * Before rendering automatically updates the input handlers and calculates the objects/viewport transformation matrices.
 *
 * The canvas state is saved and restored for each individual object, ensuring that the code of one object does not affect another one.
 *
 * Should be called at a fixed rate preferably using the requestAnimationFrame() method, its also possible to use the createRenderLoop() method, that automatically creates a infinite render loop.
 *
 * @param object {Object2D} Object to be updated and drawn into the canvas, the Object2D should be used as a group to store all the other objects to be updated and drawn.
 * @param viewport {Viewport} Viewport to be updated (should be the one where the objects will be rendered after).
 */
Renderer.prototype.update = function(object, viewport)
{
	// Get objects to be rendered
	var objects = [];

	// Traverse object and get all objects into a list.
	object.traverse(function(child)
	{
		if(child.visible)
		{
			objects.push(child);
		}
	});

	// Sort objects by layer
	objects.sort(function(a, b)
	{
		if(b.layer === a.layer)
		{
			return b.level - a.level;
		}
		
		return b.layer - a.layer;
	});

	// Pointer object update
	var pointer = this.pointer;
	pointer.update();

	// Viewport transform matrix
	viewport.updateMatrix();

	// Project pointer coordinates
	var point = pointer.position.clone();
	var viewportPoint = viewport.inverseMatrix.transformPoint(point);

	// Object pointer events
	for(var i = 0; i < objects.length; i++)
	{
		var child = objects[i];
		
		//Process the object pointer events
		if(child.pointerEvents)
		{
			// Calculate the pointer position in the object coordinates
			var localPoint = child.inverseGlobalMatrix.transformPoint(child.ignoreViewport ? point : viewportPoint);

			// Check if the pointer pointer is inside
			if(child.isInside(localPoint))
			{
				// Pointer enter
				if(!child.pointerInside && child.onPointerEnter !== null)
				{			
					child.onPointerEnter(pointer, viewport);
				}

				// Pointer over
				if(child.onPointerOver !== null)
				{
					child.onPointerOver(pointer, viewport);
				}

				// Double click
				if(pointer.buttonDoubleClicked(Pointer.LEFT) && child.onDoubleClick !== null)
				{
					child.onDoubleClick(pointer, viewport);
				}

				// Pointer pressed
				if(pointer.buttonPressed(Pointer.LEFT) && child.onButtonPressed !== null)
				{	
					child.onButtonPressed(pointer, viewport);
				}

				// Just released
				if(pointer.buttonJustReleased(Pointer.LEFT) && child.onButtonUp !== null)
				{	
					child.onButtonUp(pointer, viewport);
				}

				// Pointer just pressed
				if(pointer.buttonJustPressed(Pointer.LEFT))
				{
					if(child.onButtonDown !== null)
					{
						child.onButtonDown(pointer, viewport);
					}

					// Drag object and break to only start a drag operation on the top element.
					if(child.draggable)
					{
						child.beingDragged = true;
						if(child.onPointerDragStart !== null)
						{
							child.onPointerDragStart(pointer, viewport);
						}
						break;
					}
				}

				child.pointerInside = true;
			}
			else if(child.pointerInside)
			{
				// Pointer leave
				if(child.onPointerLeave !== null)
				{
					child.onPointerLeave(pointer, viewport);
				}

				child.pointerInside = false;
			}

			// Stop object drag
			if(pointer.buttonJustReleased(Pointer.LEFT))
			{	
				if(child.draggable)
				{
					// On drag end callback
					if(child.beingDragged === true && child.onPointerDragEnd !== null)
					{
						child.onPointerDragEnd(pointer, viewport);
					}
					child.beingDragged = false;
				}
			}
		}
	}

	// Object drag events and update logic
	for(var i = 0; i < objects.length; i++)
	{
		var child = objects[i];

		// Pointer drag event
		if(child.beingDragged)
		{
			if(child.onPointerDrag !== null)
			{
				var lastPosition = pointer.position.clone();
				lastPosition.sub(pointer.delta);

				// Get position and last position in world space to calculate world pointer movement
				var positionWorld = viewport.inverseMatrix.transformPoint(pointer.position);
				var lastWorld = viewport.inverseMatrix.transformPoint(lastPosition);

				// Pointer movement delta in world coordinates
				var delta = positionWorld.clone();
				delta.sub(lastWorld);

				child.onPointerDrag(pointer, viewport, delta, positionWorld);
			}
		}

		// On update
		if(child.onUpdate !== null)
		{
			child.onUpdate();
		}
	}

	// Update transformation matrices
	object.traverse(function(child)
	{
		child.updateMatrix();
	});

	this.context.setTransform(1, 0, 0, 1, 0, 0);
	
	// Clear canvas content
	if(this.autoClear)
	{
		this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
	}

	// Render into the canvas
	for(var i = objects.length - 1; i >= 0; i--)
	{	
		if(objects[i].isMask)
		{
			continue;
		}

		if(objects[i].saveContextState)
		{
			this.context.save();
		}

		// Apply all masks
		var masks = objects[i].masks;
		for(var j = 0; j < masks.length; j++)
		{
			if(!masks[j].ignoreViewport)
			{
				viewport.matrix.setContextTransform(this.context);
			}

			masks[j].transform(this.context, viewport, this.canvas);
			masks[j].clip(this.context, viewport, this.canvas);
		}

		// Set the viewport transform
		if(!objects[i].ignoreViewport)
		{
			viewport.matrix.setContextTransform(this.context);
		}
		else if(masks.length > 0)
		{
			this.context.setTransform(1, 0, 0, 1, 0, 0);
		}

		// Apply the object transform to the canvas context
		objects[i].transform(this.context, viewport, this.canvas);

		// Style the canvas context
		if(objects[i].style !== null)
		{
			objects[i].style(this.context, viewport, this.canvas);
		}

		// Draw content into the canvas.
		if(objects[i].draw !== null)
		{
			objects[i].draw(this.context, viewport, this.canvas);
		}

		if(objects[i].restoreContextState)
		{
			this.context.restore();
		}
	}
};

/**
 * Box is described by a minimum and maximum points.
 *
 * Can be used for collision detection with points and other boxes.
 *
 * @class
 * @param {Vector2} min
 * @param {Vector2} max
 */
function Box2(min, max)
{
	this.min = (min !== undefined) ? min : new Vector2();
	this.max = (max !== undefined) ? max : new Vector2();
}

/**
 * Set the box values.
 *
 * @param {Vector2} min
 * @param {Vector2} max
 */
Box2.prototype.set = function(min, max)
{
	this.min.copy(min);
	this.max.copy(max);

	return this;
};

/**
 * Set the box from a list of Vector2 points.
 *
 * @param {Array} points
 */
Box2.prototype.setFromPoints = function(points)
{
	this.min = new Vector2(+Infinity, +Infinity);
	this.max = new Vector2(-Infinity, -Infinity);

	for(var i = 0, il = points.length; i < il; i++)
	{
		this.expandByPoint(points[i]);
	}

	return this;
};

/** 
 * Set the box minimum and maximum from center point and size.
 *
 * @param {Vector2} center
 * @param {Vector2} size
 */
Box2.prototype.setFromCenterAndSize = function(center, size)
{
	var v1 = new Vector2();
	var halfSize = v1.copy(size).multiplyScalar(0.5);
	this.min.copy(center).sub(halfSize);
	this.max.copy(center).add(halfSize);

	return this;
};

/**
 * Clone the box into a new object.
 *
 * Should be used when it it necessary to make operations to this box.
 *
 * @return {Box2} New box object with the copy of this object.
 */
Box2.prototype.clone = function()
{
	var box = new Box2();
	box.copy(this);
	return box;
};

/**
 * Copy the box value from another box.
 *
 * @param {Box2} point
 */
Box2.prototype.copy = function(box)
{
	this.min.copy(box.min);
	this.max.copy(box.max);
};

/**
 * Check if the box is empty (size equals zero or is negative).
 *
 * The box size is condireded valid on two negative axis.
 *
 * @return {boolean} True if the box is empty.
 */
Box2.prototype.isEmpty = function()
{
	return (this.max.x < this.min.x) || (this.max.y < this.min.y);
};

/**
 * Calculate the center point of the box.
 *
 * @param {Vector2} [target] Vector to store the result.
 * @return {Vector2} Central point of the box.
 */
Box2.prototype.getCenter = function(target)
{
	if(target === undefined)
	{
		target = new Vector2();
	}

	this.isEmpty() ? target.set(0, 0) : target.addVectors(this.min, this.max).multiplyScalar(0.5);

	return target;
};

/**
 * Get the size of the box from its min and max points.
 *
 * @param {Vector2} [target] Vector to store the result.
 * @return {Vector2} Vector with the calculated size.
 */
Box2.prototype.getSize = function(target)
{
	if(target === undefined)
	{
		target = new Vector2();
	}

	this.isEmpty() ? target.set(0, 0) : target.subVectors(this.max, this.min);

	return target;
};

/**
 * Expand the box to contain a new point.
 *
 * @param {Vector2} point
 */
Box2.prototype.expandByPoint = function(point)
{
	this.min.min(point);
	this.max.max(point);

	return this;
};

/**
 * Expand the box by adding a border with the vector size.
 *
 * Vector is subtracted from min and added to the max points.
 *
 * @param {Vector2} vector
 */
Box2.prototype.expandByVector = function(vector)
{
	this.min.sub(vector);
	this.max.add(vector);
};

/**
 * Expand the box by adding a border with the scalar value.
 *
 * @param {number} scalar
 */
Box2.prototype.expandByScalar = function(scalar)
{
	this.min.addScalar(-scalar);
	this.max.addScalar(scalar);
};

/**
 * Check if the box contains a point inside.
 *
 * @param {Vector2} point
 * @return {boolean} True if the box contains point.
 */
Box2.prototype.containsPoint = function(point)
{
	return !(point.x < this.min.x || point.x > this.max.x || point.y < this.min.y || point.y > this.max.y);
};

/**
 * Check if the box fully contains another box inside (different from intersects box).
 *
 * Only returns true if the box is fully contained.
 *
 * @param {Box2} box
 * @return {boolean} True if the box contains box.
 */
Box2.prototype.containsBox = function(box)
{
	return this.min.x <= box.min.x && box.max.x <= this.max.x && this.min.y <= box.min.y && box.max.y <= this.max.y;
};

/**
 * Check if two boxes intersect each other, using 4 splitting planes to rule out intersections.
 * 
 * @param {Box2} box
 * @return {boolean} True if the boxes intersect each other.
 */
Box2.prototype.intersectsBox = function(box)
{
	return !(box.max.x < this.min.x || box.min.x > this.max.x || box.max.y < this.min.y || box.min.y > this.max.y);
};

/**
 * Calculate the distance to a point.
 *
 * @param {Vector2} point
 * @return {number} Distance to point calculated.
 */
Box2.prototype.distanceToPoint = function(point)
{
	var v = new Vector2();
	var clampedPoint = v.copy(point).clamp(this.min, this.max);
	return clampedPoint.sub(point).length();
};

/**
 * Make a intersection between this box and another box.
 *
 * Store the result in this object.
 *
 * @param {Box2} box
 */
Box2.prototype.intersect = function(box)
{
	this.min.max(box.min);
	this.max.min(box.max);
};

/**
 * Make a union between this box and another box.
 *
 * Store the result in this object.
 *
 * @param {Box2} box
 */
Box2.prototype.union = function(box)
{
	this.min.min(box.min);
	this.max.max(box.max);
};

/**
 * Translate the box by a offset value, adds the offset to booth min and max.
 *
 * @param {Vector2} offset
 */
Box2.prototype.translate = function(offset)
{
	this.min.add(offset);
	this.max.add(offset);
};

/**
 * Checks if two boxes are equal.
 *
 * @param {Box2} box
 * @return {boolean} True if the two boxes are equal.
 */
Box2.prototype.equals = function(box)
{
	return box.min.equals(this.min) && box.max.equals(this.max);
};

/**
 * A mask can be used to set the drawing region.
 *
 * Masks are treated as objects their shape is used to filter other objects shape.
 *
 * Multiple mask objects can be active simultaneously, they have to be attached to the object mask list to filter the render region.
 *
 * A mask objects is draw using the context.clip() method.
 *
 * @class
 * @extends {Object2D}
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
 * @param {CanvasRenderingContext2D} context Canvas 2d drawing context.
 * @param {Viewport} viewport Viewport applied to the canvas.
 * @param {DOM} canvas DOM canvas element where the content is being drawn.
 */
Mask.prototype.clip = function(context, viewport, canvas){};

/**
 * Box mask can be used to clear a box mask region.
 *
 * It will limit the drawing region to this box.
 *
 * @class
 * @extends {Mask}
 */
function BoxMask()
{
	Mask.call(this);

	/**
	 * Box object containing the size of the object.
	 */
	this.box = new Box2(new Vector2(-50, -35), new Vector2(50, 35));

	/**
	 * If inverted the mask considers the outside of the box instead of the inside.
	 */
	this.invert = false;
}

BoxMask.prototype = Object.create(Mask.prototype);

BoxMask.prototype.isInside = function(point)
{
	return this.box.containsPoint(point);
};

BoxMask.prototype.clip = function(context, viewport, canvas)
{
	context.beginPath();
	
	var width = this.box.max.x - this.box.min.x;
	
	if(this.invert)
	{	
		context.rect(this.box.min.x - 1e4, -5e3, 1e4, 1e4);
		context.rect(this.box.max.x, -5e3, 1e4, 1e4);
		context.rect(this.box.min.x, this.box.min.y - 1e4, width, 1e4);
		context.rect(this.box.min.x, this.box.max.y, width, 1e4);
	}
	else
	{
		var height = this.box.max.y - this.box.min.y;
		context.fillRect(this.box.min.x, this.box.min.y, width, height);
	}

	context.clip();
};

/**
 * Box object draw a rectangular object.
 *
 * Can be used as a base to implement other box objects, already implements collision for pointer events.
 *
 * @class
 * @extends {Object2D}
 */
function Box()
{
	Object2D.call(this);

	/**
	 * Box object containing the size of the object.
	 */
	this.box = new Box2(new Vector2(-50, -50), new Vector2(50, 50));

	/**
	 * Style of the object border line.
	 *
	 * If set null it is ignored.
	 */
	this.strokeStyle = "#000000";

	/**
	 * Line width, only used if a valid strokeStyle is defined.
	 */
	this.lineWidth = 1;

	/**
	 * Background color of the box.
	 *
	 * If set null it is ignored.
	 */
	this.fillStyle = "#FFFFFF";
}

Box.prototype = Object.create(Object2D.prototype);

Box.prototype.onPointerEnter = function(pointer, viewport)
{
	this.fillStyle = "#CCCCCC";
};

Box.prototype.onPointerLeave = function(pointer, viewport)
{
	this.fillStyle = "#FFFFFF";
};

Box.prototype.isInside = function(point)
{
	return this.box.containsPoint(point);
};

Box.prototype.draw = function(context, viewport, canvas)
{
	var width = this.box.max.x - this.box.min.x;
	var height = this.box.max.y - this.box.min.y;

	if(this.fillStyle !== null)
	{	
		context.fillStyle = this.fillStyle;
		context.fillRect(this.box.min.x, this.box.min.y, width, height);
	}

	if(this.strokeStyle !== null)
	{
		context.lineWidth = this.lineWidth;
		context.strokeStyle = this.strokeStyle;
		context.strokeRect(this.box.min.x, this.box.min.y, width, height);
	}
};

/**
 * Circle object draw a circular object, into the canvas.
 *
 * Can be used as a base to implement other circular objects, already implements the circle collision for pointer events.
 *
 * @class
 * @extends {Object2D}
 */
function Circle()
{
	Object2D.call(this);

	/**
	 * Radius of the circle.
	 */
	this.radius = 10.0;

	/**
	 * Style of the object border line.
	 *
	 * If set null it is ignored.
	 */
	this.strokeStyle = "#000000";

	/**
	 * Line width, only used if a valid strokeStyle is defined.
	 */
	this.lineWidth = 1;

	/**
	 * Background color of the circle.
	 *
	 * If set null it is ignored.
	 */
	this.fillStyle = "#FFFFFF";
}

Circle.prototype = Object.create(Object2D.prototype);

Circle.prototype.isInside = function(point)
{
	return point.length() <= this.radius;
};

Circle.prototype.onPointerEnter = function(pointer, viewport)
{
	this.fillStyle = "#CCCCCC";
};

Circle.prototype.onPointerLeave = function(pointer, viewport)
{
	this.fillStyle = "#FFFFFF";
};

Circle.prototype.draw = function(context, viewport, canvas)
{
	context.beginPath();
	context.arc(0, 0, this.radius, 0, 2 * Math.PI);
	
	if(this.fillStyle !== null)
	{	
		context.fillStyle = this.fillStyle;
		context.fill();
	}

	if(this.strokeStyle !== null)
	{
		context.lineWidth = this.lineWidth;
		context.strokeStyle = this.strokeStyle;
		context.stroke();
	}
};

/**
 * Line object draw a line from one point to another without any kind of interpolation.
 *
 * For drawing lines with interpolation check {BezierCurve}
 *
 * @class
 * @extends {Object2D}
 */
function Line()
{
	Object2D.call(this);

	/**
	 * Initial point of the line.
	 *
	 * Can be equal to the position object of another object. Making it automatically follow that object.
	 */
	this.from = new Vector2();

	/**
	 * Final point of the line.
	 *
	 * Can be equal to the position object of another object. Making it automatically follow that object.
	 */
	this.to = new Vector2();

	/**
	 * Dash line pattern to be used, if empty draws a solid line.
	 *
	 * Dash pattern is defined as the size of dashes as pairs of space with no line and with line.
	 *
	 * E.g if the dash pattern is [1, 2] we get 1 point with line, 2 without line repeat infinitelly.
	 */
	this.dashPattern = [5, 5];

	/**
	 * Style of the object line.
	 */
	this.strokeStyle = "#000000";

	/**
	 * Line width of the line.
	 */
	this.lineWidth = 1;
}

Line.prototype = Object.create(Object2D.prototype);

Line.prototype.style = function(context, viewport, canvas)
{
	context.lineWidth = this.lineWidth;
	context.strokeStyle = this.strokeStyle;
	context.setLineDash(this.dashPattern);
};

Line.prototype.draw = function(context, viewport, canvas)
{
	context.beginPath();
	context.moveTo(this.from.x, this.from.y);
	context.lineTo(this.to.x, this.to.y);
	context.stroke();
};

/**
 * Image object is used to draw an image from URL.
 *
 * @class
 * @param {string} src Source URL of the image.
 * @extends {Object2D}
 */
function Image(src)
{
	Object2D.call(this);
	
	/**
	 * Box object containing the size of the object.
	 */
	this.box = new Box2();

	/**
	 * Image source DOM element.
	 */
	this.image = document.createElement("img");

	if(src !== undefined)
	{
		this.setImage(src);
	}
}

Image.prototype = Object.create(Object2D.prototype);

/**
 * Set the image of the object.
 *
 * Automatically sets the box size to match the image.
 *
 * @param {string} src Source URL of the image.
 */
Image.prototype.setImage = function(src)
{
	var self = this;

	this.image.onload = function()
	{
		self.box.min.set(0, 0);
		self.box.max.set(this.naturalWidth, this.naturalHeight);
	};
	this.image.src = src;
};

Image.prototype.isInside = function(point)
{
	return this.box.containsPoint(point);
};

Image.prototype.draw = function(context, viewport, canvas)
{
	if(this.image.src.length > 0)
	{
		context.drawImage(this.image, 0, 0, this.image.naturalWidth, this.image.naturalHeight, this.box.min.x, this.box.min.y, this.box.max.x - this.box.min.x, this.box.max.y - this.box.min.y);
	}
};

/**
 * A DOM object transformed using CSS3D to be included in the scene.
 *
 * DOM objects always stay on top of everything else, it is not possible to layer these object with regular canvas objects.
 *
 * By default mouse events are not supported for these objects (it does not implement pointer collision checking). Use the DOM events for interaction with these types of objects.
 *
 * @class
 * @param {Element} parentDOM Parent DOM element that contains the drawing canvas.
 * @param {string} type Type of the DOM element (e.g. "div", "p", ...)
 * @extends {Object2D}
 */
function DOM(parentDOM, type)
{
	Object2D.call(this);

	/**
	 * Parent element that contains this DOM div.
	 *
	 * @type {Element}
	 */
	this.parentDOM = parentDOM;

	/**
	 * DOM element contained by this object.
	 *
	 * By default it has the pointerEvents style set to none. In order to use any DOM event with this object first you have to set the element.style.pointerEvents to "auto".
	 *
	 * @type {Element}
	 */
	this.element = document.createElement(type || "div");
	this.element.style.transformStyle = "preserve-3d";
	this.element.style.position = "absolute";
	this.element.style.top = "0px";
	this.element.style.bottom = "0px";
	this.element.style.transformOrigin = "0px 0px";
	this.element.style.overflow = "auto";
	this.element.style.pointerEvents = "none";
	
	/**
	 * Size of the DOM element (in world coordinates).
	 */
	this.size = new Vector2(100, 100);
}

DOM.prototype = Object.create(Object2D.prototype);

/**
 * DOM object implements onAdd() method to automatically attach the DOM object to the DOM tree.
 */
DOM.prototype.onAdd = function()
{
	this.parentDOM.appendChild(this.element);
};

/**
 * DOM object implements onAdd() method to automatically remove the DOM object to the DOM tree.
 */
DOM.prototype.onRemove = function()
{
	this.parentDOM.removeChild(this.element);
};

DOM.prototype.transform = function(context, viewport, canvas)
{
	// CSS transformation matrix
	if(this.ignoreViewport)
	{
		this.element.style.transform = this.globalMatrix.cssTransform();
	}
	else
	{
		var projection = viewport.matrix.clone();
		projection.multiply(this.globalMatrix);
		this.element.style.transform = projection.cssTransform();
	}

	// Size of the element
	this.element.style.width = this.size.x + "px";
	this.element.style.height = this.size.y + "px";

	// Visibility
	this.element.style.display = this.visible ? "block" : "none"; 
};

/**
 * Pattern object draw a image repeated as a pattern.
 *
 * Its similar to the Image class but the image can be repeat infinitely.
 *
 * @class
 * @extends {Object2D}
 * @param {string} src Source image URL.
 */
function Pattern(src)
{
	Object2D.call(this);

	/**
	 * Box object containing the size of the object.
	 */
	this.box = new Box2();

	/**
	 * Image source DOM element.
	 */
	this.image = document.createElement("img");

	/**
	 * A DOMString indicating how to repeat the pattern image.
	 */
	this.repetition = "repeat";

	if(src !== undefined)
	{
		this.setImage(src);
	}
}

Pattern.prototype = Object.create(Object2D.prototype);

/**
 * Set the image of the object.
 *
 * Automatically sets the box size to match the image.
 */
Pattern.prototype.setImage = function(src)
{
	var self = this;

	this.image.onload = function()
	{
		self.box.min.set(0, 0);
		self.box.max.set(this.naturalWidth, this.naturalHeight);
	};
	this.image.src = src;
};

Pattern.prototype.isInside = function(point)
{
	return this.box.containsPoint(point);
};

Pattern.prototype.draw = function(context, viewport, canvas)
{
	var width = this.box.max.x - this.box.min.x;
	var height = this.box.max.y - this.box.min.y;

	if(this.image.src.length > 0)
	{
		var pattern = context.createPattern(this.image, this.repetition);

		context.fillStyle = pattern;
		context.fillRect(this.box.min.x, this.box.min.y, width, height);
	}
};

/**
 * Graph object is used to draw simple graph data into the canvas.
 *
 * Graph data is composed of X, Y values.
 *
 * @class
 * @extends {Object2D}
 */
function Graph()
{
	Object2D.call(this);

	/**
	 * Graph object containing the size of the object.
	 */
	this.box = new Box2(new Vector2(-50, -35), new Vector2(50, 35));

	/**
	 * Color of the box border line.
	 */
	this.strokeStyle = "rgb(0, 153, 255)";

	/**
	 * Line width.
	 */
	this.lineWidth = 1;

	/**
	 * Background color of the box.
	 */
	this.fillStyle = "rgba(0, 153, 255, 0.3)";

	/**
	 * Minimum value of the graph.
	 */
	this.min = 0;

	/**
	 * Maximum value of the graph.
	 */
	this.max = 10;

	/**
	 * Data to be presented in the graph.
	 *
	 * The array should store numeric values.
	 */
	this.data = [];
}

Graph.prototype = Object.create(Object2D.prototype);

Graph.prototype.isInside = function(point)
{
	return this.box.containsPoint(point);
};

Graph.prototype.draw = function(context, viewport, canvas)
{
	if(this.data.length === 0)
	{
		return;
	}
	
	var width = this.box.max.x - this.box.min.x;
	var height = this.box.max.y - this.box.min.y;

	context.lineWidth = this.lineWidth;
	context.strokeStyle = this.strokeStyle;
	context.beginPath();
		
	var step = width / (this.data.length - 1);
	var gamma = this.max - this.min;

	context.moveTo(this.box.min.x, this.box.max.y - ((this.data[0] - this.min) / gamma) * height);
	
	for(var i = 1, s = step; i < this.data.length; s += step, i++)
	{
		context.lineTo(this.box.min.x + s, this.box.max.y - ((this.data[i] - this.min) / gamma) * height);
	}

	context.stroke();

	if(this.fillStyle !== null)
	{
		context.fillStyle = this.fillStyle;

		context.lineTo(this.box.max.x, this.box.max.y);
		context.lineTo(this.box.min.x, this.box.max.y);
		context.fill();
	}
};

/**
 * Bezier curve object draw as bezier curve between two points.
 *
 * @class
 * @extends {Line}
 */
function BezierCurve()
{
	Line.call(this);

	/**
	 * Initial position control point, indicates the tangent of the bezier curve on the first point.
	 *
	 * @type {Vector2}
	 */
	this.fromCp = new Vector2();

	/**
	 * Final position control point, indicates the tangent of the bezier curve on the last point.
	 *
	 * @type {Vector2}
	 */
	this.toCp = new Vector2();
}

BezierCurve.prototype = Object.create(Line.prototype);

/**
 * Create a bezier curve helper, to edit the bezier curve anchor points.
 *
 * Helper objects are added to the parent of the curve object.
 *
 * @static
 * @param {BezierCurve} object Object to create the helper for.
 */
BezierCurve.curveHelper = function(object)
{
	var fromCp = new Circle();
	fromCp.radius = 3;
	fromCp.layer = object.layer + 1;
	fromCp.draggable = true;
	fromCp.onPointerDrag = function(pointer, viewport, delta)
	{
		Object2D.prototype.onPointerDrag.call(this, pointer, viewport, delta);
		object.fromCp.copy(fromCp.position);
	};
	object.parent.add(fromCp);

	var fromLine = new Line();
	fromLine.from = object.from;
	fromLine.to = object.fromCp;
	object.parent.add(fromLine);

	var toCp = new Circle();
	toCp.radius = 3;
	toCp.layer = object.layer + 1;
	toCp.draggable = true;
	toCp.onPointerDrag = function(pointer, viewport, delta)
	{
		Object2D.prototype.onPointerDrag.call(this, pointer, viewport, delta);
		object.toCp.copy(toCp.position);
	};
	object.parent.add(toCp);

	var toLine = new Line();
	toLine.from = object.to;
	toLine.to = object.toCp;
	object.parent.add(toLine);
};

BezierCurve.prototype.draw = function(context, viewport, canvas)
{
	context.beginPath();
	context.moveTo(this.from.x, this.from.y);
	context.bezierCurveTo(this.fromCp.x, this.fromCp.y, this.toCp.x, this.toCp.y, this.to.x, this.to.y);
	context.stroke();
};

/**
 * Bezier curve object draw as bezier curve between two points.
 *
 * @class
 * @extends {Object2D}
 */
function QuadraticCurve()
{
	Line.call(this);

	/**
	 * Control point of the quadratic curve used to control the curvature of the line between the from and to point.
	 *
	 * The curve is interpolated in the direction of the control point it defined the path of the curve.
	 *
	 * @type {Vector2}
	 */
	this.controlPoint = new Vector2();
}

QuadraticCurve.prototype = Object.create(Line.prototype);

/**
 * Create a quadratic curve helper, to edit the curve control point.
 *
 * Helper objects are added to the parent of the curve object.
 *
 * @static
 * @param {QuadraticCurve} object Object to create the helper for.
 */
QuadraticCurve.curveHelper = function(object)
{
	var fromLine = new Line();
	fromLine.from = object.from;
	fromLine.to = object.controlPoint;
	object.parent.add(fromLine);

	var controlPoint = new Circle();
	controlPoint.radius = 3;
	controlPoint.layer = object.layer + 1;
	controlPoint.draggable = true;
	controlPoint.position = object.controlPoint;
	controlPoint.onPointerDrag = function(pointer, viewport, delta)
	{
		Object2D.prototype.onPointerDrag.call(this, pointer, viewport, delta);
		object.controlPoint.copy(controlPoint.position);
	};
	object.parent.add(controlPoint);

	var toLine = new Line();
	toLine.from = object.to;
	toLine.to = object.controlPoint;
	object.parent.add(toLine);
};

QuadraticCurve.prototype.draw = function(context, viewport, canvas)
{
	context.beginPath();
	context.moveTo(this.from.x, this.from.y);
	context.quadraticCurveTo(this.controlPoint.x, this.controlPoint.y, this.to.x, this.to.y);
	context.stroke();
};

/**
 * Rounded box object draw a rectangular object with rounded corners.
 *
 * @class
 * @extends {Box}
 */
function RoundedBox()
{
	Box.call(this);

	/**
	 * Radius of the circular section that makes up the box corners.
	 *
	 * @type {number}
	 */
	this.radius = 5;
}

RoundedBox.prototype = Object.create(Box.prototype);

/**
 * Draw a rounded rectangle into the canvas context using path to draw the rounded rectangle.
 *
 * @param {CanvasRenderingContext2D} context
 * @param {number} x The top left x coordinate
 * @param {number} y The top left y coordinate
 * @param {number} width The width of the rectangle
 * @param {number} height The height of the rectangle
 * @param {number} radius Radius of the rectangle corners.
 */
RoundedBox.roundRect = function(context, x, y, width, height, radius)
{
	context.beginPath();
	context.moveTo(x + radius, y);
	context.lineTo(x + width - radius, y);
	context.quadraticCurveTo(x + width, y, x + width, y + radius);
	context.lineTo(x + width, y + height - radius);
	context.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
	context.lineTo(x + radius, y + height);
	context.quadraticCurveTo(x, y + height, x, y + height - radius);
	context.lineTo(x, y + radius);
	context.quadraticCurveTo(x, y, x + radius, y);
	context.closePath();
};

RoundedBox.prototype.draw = function(context, viewport, canvas)
{
	var width = this.box.max.x - this.box.min.x;
	var height = this.box.max.y - this.box.min.y;

	if(this.fillStyle !== null)
	{	
		context.fillStyle = this.fillStyle;
		RoundedBox.roundRect(context, this.box.min.x, this.box.min.y, width, height, this.radius);
		context.fill();
	}

	if(this.strokeStyle !== null)
	{
		context.lineWidth = this.lineWidth;
		context.strokeStyle = this.strokeStyle;
		RoundedBox.roundRect(context, this.box.min.x, this.box.min.y, width, height, this.radius);
		context.stroke();
	}
};

/**
 * Node connector is used to connect a output of a node to a input of another node.
 *
 * Some nodes outputs might support multiple connections having an output connected to multiple inputs.
 *
 * Data always goes from the output node to a input node.
 *
 * @class NodeConnector
 */
function NodeConnector()
{
	BezierCurve.call(this);

	this.lineWidth = 2;

	/**
	 * Origin output socket that is attached to a node.
	 *
	 * @type {NodeSocket}
	 */
	this.outputSocket = null;

	/**
	 * Destination input socket that is attached to a node.
	 *
	 * @type {NodeSocket}
	 */
	this.inputSocket = null;
}

NodeConnector.prototype = Object.create(BezierCurve.prototype);

NodeConnector.prototype.destroy = function()
{
	BezierCurve.prototype.destroy.call(this);

	if(this.outputSocket !== null)
	{
		this.outputSocket.connector = null;
	}

	if(this.inputSocket !== null)
	{
		this.inputSocket.connector = null;
	}
};

NodeConnector.prototype.onUpdate = function()
{
	if(this.outputSocket !== null)
	{
		this.from.copy(this.outputSocket.position);
	}

	if(this.inputSocket !== null)
	{
		this.to.copy(this.inputSocket.position);
	}

	// Center control points
	this.fromCp.copy(this.from);
	this.fromCp.add(this.to);
	this.fromCp.multiplyScalar(0.5);
	this.toCp.copy(this.fromCp);

	var curvature = 0.5;

	// Check vertical/horizontal distances
	var yDistance = this.to.y - this.from.y;
	var xDistance = this.to.x - this.from.x;

	// Apply a offset to the control points
	if(Math.abs(xDistance) > Math.abs(yDistance))
	{
		this.toCp.x += xDistance * curvature;
		this.fromCp.x -= xDistance * curvature;
	}
	else
	{
		this.toCp.y += yDistance * curvature;
		this.fromCp.y -= yDistance * curvature;
	}
};

/**
 * Represents a node hook point. Is attached to the node element and represented visually.
 *
 * Can be used as a node input, output or as a bidirectional connection.
 *
 * @class NodeSocket
 * @param {Node} node Node of this hook.
 * @param {number} direction Direction of the hook.
 * @param {string} type Data type of the node socket.
 * @param {string} name Name of the node socket.
 */
function NodeSocket(node, direction, type, name)
{
	Circle.call(this);

	this.draggable = true;
	this.radius = 6;
	this.layer = 1;

	/**
	 * Name of the socket presented to the user.
	 *
	 * @type {string}
	 */
	this.name = name !== undefined ? name : "";

	/**
	 * Type of data available from this socket. Only sockets of the same type can be connected.
	 *
	 * Should directly store the data type name (e.g. "string", "number", "Object", etc).
	 *
	 * @type {string}
	 */
	this.type = type !== undefined ? type : "";

	/**
	 * Direction of the node hook, indicates the data flow of the socket.
	 *
	 * Can be INPUT or OUTPUT.
	 *
	 * @type {number}
	 */
	this.direction = direction;

	/**
	 * Node where this socket is attached to.
	 *
	 * Should be used to get data from node GUI and from other sockets.
	 *
	 * @type {Node}
	 */
	this.node = node;

	/**
	 * Node connector used to connect this socket to another node socket.
	 *
	 * Can be used to access the adjacent node.
	 *
	 * @type {NodeConnector}
	 */
	this.connector = null;

	/**
	 * Text object used to present the name of the socket.
	 *
	 * Depending on the socket direction the text is aligned to the left or to the right.
	 *
	 * @type {Text}
	 */
	this.text = new Text();
	this.text.text = this.name;
	if(this.direction === NodeSocket.INPUT)
	{
		this.text.position.x -= 10;
		this.text.textAlign = "right";
	}
	else if(this.direction === NodeSocket.OUTPUT)
	{
		this.text.position.x += 10;
		this.text.textAlign = "left";
	}
	this.add(this.text);
}

/**
 * Input hook can only be connected to an output.
 *
 * Is used to read data from the output.
 *
 * @type {number}
 */
NodeSocket.INPUT = 1;

/**
 * Output hook can only be connected to an input.
 *
 * Writes data to the output.
 *
 * @type {number}
 */
NodeSocket.OUTPUT = 2;

NodeSocket.prototype = Object.create(Circle.prototype);

/**
 * Get value stored or calculated in node socket, it should be the calculated from node logic, node inputs, user input, etc.
 *
 * For input nodes the value should be fetched trough the connector object that is connected to an output node elsewhere.
 *
 * By default it the socket is an INPUT it gets the value trough the connector if available. Inputs will recursively propagate the method trough the graph to get their value.
 *
 * If the socket is an OUTPUT or there is no connection the method returns null by default, in this case the method should be extended by implementations of this class to process data.
 *
 * @return {Object} Return data calculated from the node.
 */
NodeSocket.prototype.getValue = function()
{
	if(this.direction === NodeSocket.INPUT && this.connector !== null && this.connector.outputSocket !== null)
	{
		return this.connector.outputSocket.getValue();
	}

	return null;
};

/**
 * Connect this node socket to another socket.
 *
 * Sockets have to be compatible otherwise the connection cannot be made and an error will be thrown.
 *
 * @param {NodeSocket} socket Socket to be connected with this
 * @return {NodeConnector} Node connector created.
 */
NodeSocket.prototype.connectTo = function(socket)
{
	if(!this.isCompatible(socket))
	{
		throw new Error("Sockets are not compatible they cannot be connected.");
	}

	var connector = new NodeConnector();
	this.attachConnector(connector);
	socket.attachConnector(connector);
	return connector;
};

/**
 * Attach a node connector to this socket. Sets the correct input/output attributes on the socket and the connector.
 *
 * Automatically adds the connector to the same parent and the node socket if no parent defined for the connector.
 *
 * @param {NodeConnector} connector Connector to be attached to this socket.
 */
NodeSocket.prototype.attachConnector = function(connector)
{
	if(this.direction === NodeSocket.INPUT)
	{
		connector.inputSocket = this;
	}
	else if(this.direction === NodeSocket.OUTPUT)
	{
		connector.outputSocket = this;
	}

	this.connector = connector;
	if(connector.parent === null)
	{
		this.parent.add(connector);
	}
};

/**
 * Check if this socket can be connected (is compatible) with another socket.
 *
 * For two sockets to be compatible the data flow should be correct (one input and a output) and they should carry the same data type.
 *
 * @param {NodeSocket} socket Socket to verify compatibility with.
 * @return {boolean} Returns true if the two sockets are compatible.
 */
NodeSocket.prototype.isCompatible = function(socket)
{
	return this.direction !== socket.direction && this.type === socket.type;
};

NodeSocket.prototype.destroy = function()
{
	Circle.prototype.destroy.call(this);

	if(this.connector !== null)
	{
		this.connector.destroy();
	}
};

NodeSocket.prototype.onPointerDragStart = function(pointer, viewport)
{
	if(this.connector === null)
	{
		this.attachConnector(new NodeConnector());
	}
};

NodeSocket.prototype.onPointerDrag = function(pointer, viewport, delta, position)
{
	if(this.connector !== null)
	{
		if(this.direction === NodeSocket.INPUT)
		{
			this.connector.from.copy(position);
		}
		else if(this.direction === NodeSocket.OUTPUT)
		{
			this.connector.to.copy(position);
		}
	}
};

NodeSocket.prototype.onPointerDragEnd = function(pointer, viewport)
{
	if(this.connector !== null)
	{
		var position = viewport.inverseMatrix.transformPoint(pointer.position);
		var objects = this.parent.getWorldPointIntersections(position);
		var found = false;

		for(var i = 0; i < objects.length; i++)
		{
			if(objects[i] instanceof NodeSocket)
			{
				if(this.isCompatible(objects[i]))
				{
					objects[i].attachConnector(this.connector);
					found = true;
					break;
				}
			}
		}

		if(!found)
		{
			this.connector.destroy();
		}
	}
};

/**
 * Node objects can be connected between them to create graphs.
 *
 * Each node contains inputs, outputs and a set of attributes containing their state. Inputs can be connected to outputs of other nodes, and vice-versa.
 *
 * This class implements node basic functionality, the logic to connect node and define inputs/outputs of the nodes.
 *
 * @class Node
 */
function Node()
{
	RoundedBox.call(this);

	this.draggable = true;

	/**
	 * List of inputs of the node.
	 *
	 * @type {NodeSocket[]}
	 */
	this.inputs = [];

	/**
	 * List of outputs of the node.
	 *
	 * @type {NodeSocket[]}
	 */
	this.outputs = [];
}

Node.prototype = Object.create(RoundedBox.prototype);

/**
 * This method should be used for the node to register their socket inputs/outputs.
 *
 * It is called automatically after the node is added to the node graph to create sockets.
 */
Node.prototype.registerSockets = null;

/**
 * Add input to this node, can be connected to other nodes to receive data.
 *
 * @param {string} type Data type of the node socket.
 * @param {string} name Name of the node socket.
 * @return {NodeSocket} Node socket created for this node.
 */
Node.prototype.addInput = function(type, name)
{
	var socket = new NodeSocket(this, NodeSocket.INPUT, type, name);
	this.inputs.push(socket);
	this.parent.add(socket);
	return socket;
};

/**
 * Add output socket to this node, can be connected to other nodes to send data.
 *
 * @param {string} type Data type of the node socket.
 * @param {string} name Name of the node socket.
 * @return {NodeSocket} Node socket created for this node.
 */
Node.prototype.addOutput = function(type, name)
{
	var socket = new NodeSocket(this, NodeSocket.OUTPUT, type, name);
	this.outputs.push(socket);
	this.parent.add(socket);
	return socket;
};

/**
 * Get a output socket by its name. If there are multiple sockets with the same name only the first one found is returned.
 *
 * @param {string} name Name of the node socket to get.
 * @return {NodeSocket} Node socket if it was found, null otherwise.
 */
Node.prototype.getOutput = function(name)
{
	for(var i = 0; i < this.outputs.length; i++)
	{
		if(this.outputs[i].name === name)
		{
			return this.outputs[i];
		}
	}

	return null;
};

/**
 * Get a input socket by its name. If there are multiple sockets with the same name only the first one found is returned.
 *
 * @param {string} name Name of the node socket to get.
 * @return {NodeSocket} Node socket if it was found, null otherwise.
 */
Node.prototype.getInput = function(name)
{
	for(var i = 0; i < this.inputs.length; i++)
	{
		if(this.inputs[i].name === name)
		{
			return this.inputs[i];
		}
	}

	return null;
};

Node.prototype.destroy = function()
{
	RoundedBox.prototype.destroy.call(this);

	for(var i = 0; i < this.inputs.length; i++)
	{
		this.inputs[i].destroy();
	}

	for(var i = 0; i < this.outputs.length; i++)
	{
		this.outputs[i].destroy();
	}
};

Node.prototype.onUpdate = function()
{
	var height = this.box.max.y - this.box.min.y;

	// Input hooks position
	var step = height / (this.inputs.length + 1);
	var start = this.box.min.y + step;

	for(var i = 0; i < this.inputs.length; i++)
	{
		this.inputs[i].position.set(this.position.x + this.box.min.x, this.position.y + (start + step * i));
	}

	// Output hooks position
	step = height / (this.outputs.length + 1);
	start = this.box.min.y + step;

	for(var i = 0; i < this.outputs.length; i++)
	{
		this.outputs[i].position.set(this.position.x + this.box.max.x, this.position.y + (start + step * i));
	}
};

/**
 * Node graph object should be used as a container for node elements.
 *
 * The node graph object specifies how the nodes are processed, each individual node can store and process data, the node graph specified how this information is processed.
 *
 * All node elements are stored as children of the node graph.
 *
 * @class NodeGraph
 */
function NodeGraph()
{
	Object2D.call(this);
}

NodeGraph.prototype = Object.create(Object2D.prototype);

/**
 * Create and add a new node of specific node type to the graph.
 *
 * Automatically finds an empty space as close as possible to other nodes to add this new node.
 *
 * @param {Node} node Node object to be added.
 * @return {Node} Node created (already added to the graph).
 */
NodeGraph.prototype.addNode = function(node)
{
	// Check available position on screen.
	var x = 0, y = 0;
	for(var i = 0; i < this.children.length; i++)
	{
		if(this.children[i].position.x > x)
		{
			x = this.children[i].position.x;
		}
		if(this.children[i].position.y > y)
		{
			y = this.children[i].position.y;
		}
	}

	// Create and add new node
	node.position.set(x + 200, y / 2.0);
	this.add(node);

	if(node.registerSockets !== null)
	{
		node.registerSockets();
	}

	return node;
};

/**
 * Class contains helper functions to create editing object tools.
 *
 * @class
 */
function Helpers(){}

/**
 * Create a rotation tool helper.
 *
 * When the object is dragged is changes the parent object rotation.
 *
 * @static
 */
Helpers.rotateTool = function(object)
{
	var tool = new Circle();
	tool.radius = 4;
	tool.layer = object.layer + 1;
	tool.onPointerDrag = function(pointer, viewport, delta)
	{
		object.rotation += delta.x * 1e-3;
	};
	object.add(tool);
};

/**
 * Create a box resize helper and attach it to an object to change the size of the object box.
 *
 * Each helper is positioned on one corner of the box, and the value of the corner is copied to the boxes as they are dragged.
 *
 * This method required to object to have a box property.
 *
 * @static
 */
Helpers.boxResizeTool = function(object)
{
	if(object.box === undefined)
	{
		console.warn("escher.js: Helpers.boxResizeTool(), object box property missing.");
		return;
	}

	function updateHelpers()
	{
		topRight.position.copy(object.box.min);
		bottomLeft.position.copy(object.box.max);
		topLeft.position.set(object.box.max.x, object.box.min.y);
		bottomRight.position.set(object.box.min.x, object.box.max.y);
	}

	var topRight = new Circle();
	topRight.radius = 4;
	topRight.layer = object.layer + 1;
	topRight.draggable = true;
	topRight.onPointerDrag = function(pointer, viewport, delta)
	{
		Object2D.prototype.onPointerDrag.call(this, pointer, viewport, delta);

		object.box.min.copy(topRight.position);
		updateHelpers();
	};
	object.add(topRight);

	var topLeft = new Circle();
	topLeft.radius = 4;
	topLeft.layer = object.layer + 1;
	topLeft.draggable = true;
	topLeft.onPointerDrag = function(pointer, viewport, delta)
	{
		Object2D.prototype.onPointerDrag.call(this, pointer, viewport, delta);

		object.box.max.x = topLeft.position.x;
		object.box.min.y = topLeft.position.y;
		updateHelpers();
	};
	object.add(topLeft);

	var bottomLeft = new Circle();
	bottomLeft.radius = 4;
	bottomLeft.layer = object.layer + 1;
	bottomLeft.draggable = true;
	bottomLeft.onPointerDrag = function(pointer, viewport, delta)
	{
		Object2D.prototype.onPointerDrag.call(this, pointer, viewport, delta);

		object.box.max.copy(bottomLeft.position);
		updateHelpers();
	};
	object.add(bottomLeft);

	var bottomRight = new Circle();
	bottomRight.radius = 4;
	bottomRight.layer = object.layer + 1;
	bottomRight.draggable = true;
	bottomRight.onPointerDrag = function(pointer, viewport, delta)
	{
		Object2D.prototype.onPointerDrag.call(this, pointer, viewport, delta);

		object.box.min.x = bottomRight.position.x;
		object.box.max.y = bottomRight.position.y;
		updateHelpers();
	};
	object.add(bottomRight);

	updateHelpers();
};

export { BezierCurve, Box, Box2, BoxMask, Circle, DOM, EventManager, Graph, Helpers, Image, Key, Line, Mask, Matrix, MultiLineText, Node, NodeConnector, NodeGraph, NodeSocket, Object2D, Pattern, Pointer, QuadraticCurve, Renderer, RoundedBox, Text, UUID, Vector2, Viewport, ViewportControls };
