function typeCheck(params: any): string {
  const typeStr = Object.prototype.toString.call(params);
  return typeStr.toLowerCase().slice(8, typeStr.length - 1);
}

export { typeCheck };
export default typeCheck;
