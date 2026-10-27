// Équivalent minimal de react/jsx-runtime au-dessus de React.createElement.
const React = window.React;
export const Fragment = React.Fragment;
export function jsx(type, props, key) {
  const { children, ...rest } = props || {};
  if (key !== undefined) rest.key = key;
  return children === undefined ? React.createElement(type, rest) : React.createElement(type, rest, children);
}
export const jsxs = jsx;
