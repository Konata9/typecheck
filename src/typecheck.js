export default function typecheck(target) {
  let typeStr = Object.prototype.toString.call(target)
  return typeStr.toLowerCase().slice(8, typeStr.length - 1)
}