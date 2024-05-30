/**
 * Checks if two dom elements overlap
 *
 * @param {Element} domElement a first dom element
 * @param {Element} domElement second dom element
 * @param {number} reduce hit box by n
 * @return {boolean} if overlapping
 */
export default function overlap(el, sheep, reduce = 12) {

  const getBoundingClientRect = element => {
    let {top, right, bottom, left} = element.getBoundingClientRect()
    top += reduce;
    right += reduce;
    left -= reduce;
    bottom -= reduce;
    return {top, right, bottom, left};
  }

  const a = getBoundingClientRect(el);
  const b = getBoundingClientRect(sheep);

  return !(
    a.top > b.bottom ||
    a.right < b.left ||
    a.bottom < b.top ||
    a.left > b.right
  );
}

