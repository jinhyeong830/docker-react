/**
 *
 * @param classNames css class 이름
 * @returns 인자로 들어온 classNames 를 합친 하나의 문자열
 */
export function classJoin(...classNames: string[]) {
  // ["border red-500", "bordr"] ===> "border"
  return classNames.join(' ');
}
