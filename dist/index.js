"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function typeCheck(params) {
    var typeStr = Object.prototype.toString.call(params);
    return typeStr.toLowerCase().slice(8, typeStr.length - 1);
}
exports.typeCheck = typeCheck;
exports.default = typeCheck;
