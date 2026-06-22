/* @ds-bundle: {"format":3,"namespace":"TulcoStudioDesignSystem_ac5776","components":[{"name":"Avatar","sourcePath":"components/core/Avatar.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Checkbox","sourcePath":"components/core/Checkbox.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"ICON_NAMES","sourcePath":"components/core/Icon.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Input","sourcePath":"components/core/Input.jsx"},{"name":"Logo","sourcePath":"components/core/Logo.jsx"},{"name":"Radio","sourcePath":"components/core/Radio.jsx"},{"name":"Select","sourcePath":"components/core/Select.jsx"},{"name":"Switch","sourcePath":"components/core/Switch.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Textarea","sourcePath":"components/core/Textarea.jsx"}],"sourceHashes":{"components/core/Avatar.jsx":"a969bebf2623","components/core/Badge.jsx":"9c127aa258eb","components/core/Button.jsx":"c9f8de79f18f","components/core/Card.jsx":"6683a0211c30","components/core/Checkbox.jsx":"45aaa725af1c","components/core/Icon.jsx":"b791be6a42b0","components/core/IconButton.jsx":"01daac481342","components/core/Input.jsx":"a07d4513451f","components/core/Logo.jsx":"01f3e8d51930","components/core/Radio.jsx":"f8293f72de9c","components/core/Select.jsx":"2bacffa7ffc1","components/core/Switch.jsx":"8ca82386e862","components/core/Tag.jsx":"a1e50b63a5e5","components/core/Textarea.jsx":"25941a7d9f40","ui_kits/website/Footer.jsx":"7fc49ec16cf4","ui_kits/website/Header.jsx":"930cd0b8cdd3","ui_kits/website/Landing.jsx":"a1853de7a56a"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.TulcoStudioDesignSystem_ac5776 = window.TulcoStudioDesignSystem_ac5776 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Tulco Studio — Avatar. Initials or image; square (default) or round. */
function Avatar({
  src,
  name = "",
  size = 40,
  shape = "square",
  style,
  ...rest
}) {
  const initials = name.split(" ").map(w => w[0]).filter(Boolean).slice(0, 2).join("").toUpperCase();
  const radius = shape === "round" ? "50%" : "var(--radius-md)";
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      width: size,
      height: size,
      flex: "none",
      borderRadius: radius,
      background: src ? "var(--bg-subtle)" : "var(--accent-soft)",
      color: "var(--accent-hover)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      overflow: "hidden",
      fontFamily: "var(--font-sans)",
      fontWeight: "var(--weight-semibold)",
      fontSize: size * 0.4,
      letterSpacing: "-0.02em",
      userSelect: "none",
      ...style
    }
  }, rest), src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: name,
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover"
    }
  }) : initials);
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Tulco Studio — Badge. Small square status chip, mono uppercase (blueprint label). */
function Badge({
  tone = "neutral",
  children,
  style,
  ...rest
}) {
  const tones = {
    neutral: {
      background: "var(--bg-subtle)",
      color: "var(--text-secondary)"
    },
    blue: {
      background: "var(--accent-soft)",
      color: "var(--accent-hover)"
    },
    success: {
      background: "var(--success-bg)",
      color: "var(--success)"
    },
    warning: {
      background: "var(--warning-bg)",
      color: "var(--warning)"
    },
    danger: {
      background: "var(--danger-bg)",
      color: "var(--danger)"
    },
    solid: {
      background: "var(--accent)",
      color: "#fff"
    }
  };
  const t = tones[tone] || tones.neutral;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 5,
      fontFamily: "var(--font-mono)",
      fontSize: "11px",
      fontWeight: 600,
      textTransform: "uppercase",
      letterSpacing: "0.04em",
      lineHeight: 1,
      padding: "4px 8px",
      borderRadius: "var(--radius-sm)",
      ...t,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Tulco Studio — Button
 * One typeface, soft 10px corners, blue primary, hover darkens (never lightens).
 */
function Button({
  variant = "primary",
  size = "md",
  disabled = false,
  iconLeft = null,
  iconRight = null,
  fullWidth = false,
  type = "button",
  onClick,
  children,
  style,
  ...rest
}) {
  const sizes = {
    sm: {
      fontSize: "var(--text-sm)",
      padding: "0 14px",
      height: 34,
      gap: 6
    },
    md: {
      fontSize: "var(--text-base)",
      padding: "0 18px",
      height: 42,
      gap: 8
    },
    lg: {
      fontSize: "var(--text-md)",
      padding: "0 24px",
      height: 50,
      gap: 8
    }
  };
  const variants = {
    primary: {
      background: "var(--accent)",
      color: "var(--text-on-blue)",
      border: "1px solid var(--accent)"
    },
    secondary: {
      background: "var(--white)",
      color: "var(--text-primary)",
      border: "1px solid var(--border-strong)"
    },
    ghost: {
      background: "transparent",
      color: "var(--text-primary)",
      border: "1px solid transparent"
    },
    danger: {
      background: "var(--danger)",
      color: "#fff",
      border: "1px solid var(--danger)"
    }
  };
  const s = sizes[size] || sizes.md;
  const v = variants[variant] || variants.primary;
  const [hover, setHover] = React.useState(false);
  const [active, setActive] = React.useState(false);
  const hoverStyle = !disabled && hover ? {
    primary: {
      background: "var(--accent-hover)",
      borderColor: "var(--accent-hover)"
    },
    secondary: {
      background: "var(--bg-subtle)"
    },
    ghost: {
      background: "var(--bg-subtle)"
    },
    danger: {
      filter: "brightness(0.92)"
    }
  }[variant] : null;
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setActive(false);
    },
    onMouseDown: () => setActive(true),
    onMouseUp: () => setActive(false),
    style: {
      fontFamily: "var(--font-sans)",
      fontWeight: "var(--weight-semibold)",
      letterSpacing: "var(--tracking-normal)",
      lineHeight: 1,
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      gap: s.gap,
      height: s.height,
      padding: s.padding,
      width: fullWidth ? "100%" : "auto",
      fontSize: s.fontSize,
      borderRadius: "var(--radius-md)",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.45 : 1,
      transform: active && !disabled ? "translateY(1px)" : "none",
      transition: "background var(--duration-fast) var(--ease-out), filter var(--duration-fast) var(--ease-out), transform var(--duration-fast) var(--ease-out)",
      ...v,
      ...hoverStyle,
      ...style
    }
  }, rest), iconLeft, children, iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Tulco Studio — Card
 * Structural surface: SHARP corners (never rounded), hairline border, the
 * trait does the work — shadows are almost absent. The `marked` variant lays
 * a blue "beam" (top rule) across the head as the brand signature.
 */
function Card({
  variant = "default",
  padding = "lg",
  interactive = false,
  onClick,
  children,
  style,
  ...rest
}) {
  const pads = {
    none: 0,
    sm: "var(--space-4)",
    md: "var(--space-5)",
    lg: "var(--space-6)"
  };
  const variants = {
    default: {
      background: "var(--surface-card)",
      border: "1px solid var(--border-default)",
      boxShadow: "none"
    },
    raised: {
      background: "var(--surface-card)",
      border: "1px solid var(--border-default)",
      boxShadow: "var(--shadow-sm)"
    },
    marked: {
      background: "var(--surface-card)",
      border: "1px solid var(--border-default)",
      borderTop: "var(--rule-accent) solid var(--accent)",
      boxShadow: "none"
    },
    tint: {
      background: "var(--surface-tint)",
      border: "1px solid var(--accent-soft)",
      boxShadow: "none"
    },
    ink: {
      background: "var(--surface-ink)",
      border: "1px solid var(--noir)",
      boxShadow: "none",
      color: "var(--text-on-ink)"
    }
  };
  const [hover, setHover] = React.useState(false);
  const v = variants[variant] || variants.default;
  return /*#__PURE__*/React.createElement("div", _extends({
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      position: "relative",
      borderRadius: "var(--radius-card)",
      padding: pads[padding] ?? pads.lg,
      cursor: interactive ? "pointer" : "default",
      transition: "border-color var(--duration-base) var(--ease-out), box-shadow var(--duration-base) var(--ease-out)",
      ...v,
      ...(interactive && hover ? {
        borderColor: "var(--accent)",
        boxShadow: "var(--shadow-md)"
      } : null),
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Checkbox.jsx
try { (() => {
/** Tulco Studio — Checkbox. Square, 4px radius, blue when checked. */
function Checkbox({
  checked = false,
  disabled = false,
  label,
  onChange,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 10,
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.5 : 1,
      fontFamily: "var(--font-sans)",
      fontSize: "var(--text-base)",
      color: "var(--text-primary)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    onClick: () => !disabled && onChange && onChange(!checked),
    style: {
      width: 20,
      height: 20,
      flex: "none",
      borderRadius: "var(--radius-xs)",
      border: `1px solid ${checked ? "var(--accent)" : "var(--border-strong)"}`,
      background: checked ? "var(--accent)" : "var(--white)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      transition: "background var(--duration-fast) var(--ease-out), border-color var(--duration-fast) var(--ease-out)"
    }
  }, checked && /*#__PURE__*/React.createElement("svg", {
    width: "13",
    height: "13",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "#fff",
    strokeWidth: "3",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M20 6L9 17l-5-5"
  }))), label && /*#__PURE__*/React.createElement("span", null, label));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Tulco Studio — Icon
 * Bespoke icon system. Every glyph is constructed from the brand's two
 * structural primitives: BEAMS (orthogonal bars) and STRUTS (45° diagonals),
 * on a 24px grid with squared joins and butt caps — never round.
 * Each name maps to a concept in the Tulco offer (back-office sur-mesure).
 *
 * Line icons inherit `currentColor`. Size with the type scale (16/20/24).
 */
const PATHS = {
  // Diagnostic « Ops & Gains » — square lens + diagonal strut handle
  diagnostic: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
    x: "4",
    y: "4",
    width: "11",
    height: "11"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "7",
    y1: "8",
    x2: "12",
    y2: "8"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "7",
    y1: "11",
    x2: "10",
    y2: "11"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "14.5",
    y1: "14.5",
    x2: "21",
    y2: "21"
  })),
  // Operations / flux — workflow nodes joined by struts
  operations: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
    x: "3",
    y: "3.5",
    width: "5",
    height: "5"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "16",
    y: "3.5",
    width: "5",
    height: "5"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "9.5",
    y: "15",
    width: "5",
    height: "5"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "6",
    y1: "8.5",
    x2: "12",
    y2: "15"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "18",
    y1: "8.5",
    x2: "12",
    y2: "15"
  })),
  // Automatisation — squared bolt, struts only
  automation: /*#__PURE__*/React.createElement("polygon", {
    points: "14 2 6 13 11 13 10 22 18 11 13 11 14 2"
  }),
  // Facturation — invoice with a folded (strut) corner + rows
  facturation: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M5 3 H14 L19 8 V21 H5 Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M14 3 V8 H19"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "8",
    y1: "12",
    x2: "15",
    y2: "12"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "8",
    y1: "16",
    x2: "13",
    y2: "16"
  })),
  // RH / SIRH — square head + strut shoulders
  rh: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
    x: "9",
    y: "3",
    width: "6",
    height: "6"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M4 21 L8 14 H16 L20 21"
  })),
  // Portail client — framed portal + arrow entering
  portail: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
    x: "5",
    y: "3",
    width: "14",
    height: "18"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "12",
    y1: "3",
    x2: "12",
    y2: "21"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "8",
    y1: "12",
    x2: "14",
    y2: "12"
  }), /*#__PURE__*/React.createElement("polyline", {
    points: "12 9 15 12 12 15"
  })),
  // Dashboard / pilotage — panel grid + bars
  dashboard: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
    x: "3",
    y: "4",
    width: "18",
    height: "16"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "11",
    y1: "4",
    x2: "11",
    y2: "20"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "11",
    y1: "12",
    x2: "21",
    y2: "12"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "6",
    y1: "16",
    x2: "6",
    y2: "11"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "8.5",
    y1: "16",
    x2: "8.5",
    y2: "13"
  })),
  // Gain / ROI — rising struts on a baseline beam, arrowhead
  gain: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("line", {
    x1: "3",
    y1: "20",
    x2: "21",
    y2: "20"
  }), /*#__PURE__*/React.createElement("polyline", {
    points: "5 16 10 11 13 14 19 7"
  }), /*#__PURE__*/React.createElement("polyline", {
    points: "15 7 19 7 19 11"
  })),
  // Valeur / euros — stacked offset beams (filled), value accruing
  valeur: /*#__PURE__*/React.createElement("g", {
    fill: "currentColor",
    stroke: "none"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "4",
    y: "5",
    width: "15",
    height: "3"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "6",
    y: "11",
    width: "13",
    height: "3"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "8",
    y: "17",
    width: "11",
    height: "3"
  })),
  // Excel / chaos (avant) — rigid grid broken by a diagonal strut
  chaos: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
    x: "4",
    y: "4",
    width: "16",
    height: "16"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "4",
    y1: "9.3",
    x2: "20",
    y2: "9.3"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "4",
    y1: "14.6",
    x2: "20",
    y2: "14.6"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "9.3",
    y1: "4",
    x2: "9.3",
    y2: "20"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "14.6",
    y1: "4",
    x2: "14.6",
    y2: "20"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "5",
    y1: "19",
    x2: "19",
    y2: "5"
  })),
  // Structure (après) — a truss : « ça tient »
  structure: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M3 20 L12 5 L21 20 Z"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "12",
    y1: "5",
    x2: "12",
    y2: "20"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "3",
    y1: "20",
    x2: "12",
    y2: "12.5"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "21",
    y1: "20",
    x2: "12",
    y2: "12.5"
  })),
  // Méthode / 6 semaines — schedule, one day set
  methode: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
    x: "3",
    y: "5",
    width: "18",
    height: "16"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "3",
    y1: "10",
    x2: "21",
    y2: "10"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "8",
    y1: "3",
    x2: "8",
    y2: "7"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "16",
    y1: "3",
    x2: "16",
    y2: "7"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "6",
    y: "13",
    width: "5",
    height: "5",
    fill: "currentColor",
    stroke: "none"
  })),
  // Interlocuteur unique, senior — single figure + check strut
  contact: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
    x: "7",
    y: "4",
    width: "6",
    height: "6"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3 21 L6 15 H14 L17 21"
  }), /*#__PURE__*/React.createElement("polyline", {
    points: "16 7 18 9 22 5"
  })),
  // The brand unit — beam shouldered by a strut (the étai, squared)
  beam: /*#__PURE__*/React.createElement("g", {
    fill: "currentColor",
    stroke: "none"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "3",
    y: "5",
    width: "14",
    height: "3.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M6 20 L9.5 20 L17 9 L13.5 9 Z"
  }))
};
function Icon({
  name,
  size = 24,
  stroke = 2,
  color = "currentColor",
  title,
  style,
  ...rest
}) {
  const glyph = PATHS[name] || null;
  return /*#__PURE__*/React.createElement("svg", _extends({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: stroke,
    strokeLinecap: "square",
    strokeLinejoin: "miter",
    role: title ? "img" : "presentation",
    "aria-label": title,
    "aria-hidden": title ? undefined : true,
    style: {
      display: "inline-block",
      flex: "none",
      ...style
    }
  }, rest), title ? /*#__PURE__*/React.createElement("title", null, title) : null, glyph);
}

/** Names available in the Tulco icon set. */
const ICON_NAMES = Object.keys(PATHS);
Object.assign(__ds_scope, { Icon, ICON_NAMES });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Tulco Studio — IconButton
 * Square, icon-only control. Same hover/press language as Button.
 */
function IconButton({
  variant = "ghost",
  size = "md",
  disabled = false,
  label,
  onClick,
  children,
  style,
  ...rest
}) {
  const sizes = {
    sm: 30,
    md: 38,
    lg: 46
  };
  const dim = sizes[size] || sizes.md;
  const variants = {
    primary: {
      background: "var(--accent)",
      color: "#fff",
      border: "1px solid var(--accent)"
    },
    secondary: {
      background: "var(--white)",
      color: "var(--text-primary)",
      border: "1px solid var(--border-strong)"
    },
    ghost: {
      background: "transparent",
      color: "var(--text-secondary)",
      border: "1px solid transparent"
    }
  };
  const v = variants[variant] || variants.ghost;
  const [hover, setHover] = React.useState(false);
  const hoverBg = !disabled && hover ? variant === "primary" ? {
    background: "var(--accent-hover)",
    borderColor: "var(--accent-hover)"
  } : {
    background: "var(--bg-subtle)"
  } : null;
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-label": label,
    title: label,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      width: dim,
      height: dim,
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "var(--radius-md)",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.45 : 1,
      transition: "background var(--duration-fast) var(--ease-out)",
      ...v,
      ...hoverBg,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Tulco Studio — Input
 * Hairline border, 10px radius, blue focus ring.
 */
function Input({
  size = "md",
  invalid = false,
  disabled = false,
  prefix = null,
  type = "text",
  style,
  ...rest
}) {
  const sizes = {
    sm: {
      height: 34,
      fontSize: "var(--text-sm)",
      padding: "0 10px"
    },
    md: {
      height: 42,
      fontSize: "var(--text-base)",
      padding: "0 12px"
    },
    lg: {
      height: 50,
      fontSize: "var(--text-md)",
      padding: "0 14px"
    }
  };
  const s = sizes[size] || sizes.md;
  const [focus, setFocus] = React.useState(false);
  const borderColor = invalid ? "var(--danger)" : focus ? "var(--border-focus)" : "var(--border-default)";
  const field = /*#__PURE__*/React.createElement("input", _extends({
    type: type,
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: s.fontSize,
      color: "var(--text-primary)",
      height: s.height,
      width: "100%",
      padding: prefix ? "0 12px 0 0" : s.padding,
      border: "none",
      outline: "none",
      background: "transparent",
      ...(prefix ? null : {})
    }
  }, rest));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      padding: prefix ? "0 0 0 12px" : 0,
      background: disabled ? "var(--bg-subtle)" : "var(--white)",
      border: `1px solid ${borderColor}`,
      borderRadius: "var(--radius-md)",
      boxShadow: focus && !invalid ? "var(--shadow-focus)" : "none",
      opacity: disabled ? 0.6 : 1,
      transition: "border-color var(--duration-fast) var(--ease-out), box-shadow var(--duration-fast) var(--ease-out)",
      ...style
    }
  }, prefix && /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--text-tertiary)",
      display: "inline-flex"
    }
  }, prefix), field);
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Input.jsx", error: String((e && e.message) || e) }); }

// components/core/Logo.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Tulco Studio — Logo
 * Renders the official mark/lockup from inline SVG (never redraw by hand).
 * The étai symbol: a beam shouldered by a diagonal strut.
 */
function Logo({
  variant = "horizontal",
  tone = "blue",
  height = 32,
  style,
  ...rest
}) {
  // tone → colors. On dark, use tone="white".
  const ink = tone === "white" ? "#FFFFFF" : "#14171C";
  const mark = tone === "white" ? "#FFFFFF" : tone === "ink" ? "#14171C" : "#003EC7";
  const studioFill = tone === "white" ? "#FFFFFF" : "#14171C";
  const studioOpacity = tone === "white" ? 0.6 : 1;
  const Mark = props => /*#__PURE__*/React.createElement("g", props, /*#__PURE__*/React.createElement("rect", {
    x: "20",
    y: "22",
    width: "60",
    height: "14",
    rx: "5",
    fill: mark
  }), /*#__PURE__*/React.createElement("path", {
    d: "M28 80 L44 80 L66 38 L50 38 Z",
    fill: mark
  }));
  if (variant === "symbol") {
    return /*#__PURE__*/React.createElement("svg", _extends({
      viewBox: "0 0 100 100",
      height: height,
      style: style,
      "aria-label": "Tulco Studio"
    }, rest), /*#__PURE__*/React.createElement(Mark, null));
  }
  if (variant === "app-icon") {
    return /*#__PURE__*/React.createElement("svg", _extends({
      viewBox: "0 0 100 100",
      height: height,
      style: style,
      "aria-label": "Tulco Studio"
    }, rest), /*#__PURE__*/React.createElement("rect", {
      width: "100",
      height: "100",
      rx: "22",
      fill: "#003EC7"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "20",
      y: "22",
      width: "60",
      height: "14",
      rx: "5",
      fill: "#FFFFFF"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M28 80 L44 80 L66 38 L50 38 Z",
      fill: "#FFFFFF"
    }));
  }
  if (variant === "stacked") {
    return /*#__PURE__*/React.createElement("svg", _extends({
      viewBox: "0 0 320 200",
      height: height,
      style: style,
      "aria-label": "Tulco Studio"
    }, rest), /*#__PURE__*/React.createElement("g", {
      transform: "translate(116,12) scale(0.88)"
    }, /*#__PURE__*/React.createElement("rect", {
      x: "20",
      y: "22",
      width: "60",
      height: "14",
      rx: "5",
      fill: mark
    }), /*#__PURE__*/React.createElement("path", {
      d: "M28 80 L44 80 L66 38 L50 38 Z",
      fill: mark
    })), /*#__PURE__*/React.createElement("text", {
      x: "160",
      y: "184",
      textAnchor: "middle",
      fontFamily: "var(--font-sans), Switzer, sans-serif",
      fontSize: "54",
      letterSpacing: "-2"
    }, /*#__PURE__*/React.createElement("tspan", {
      fontWeight: "600",
      fill: ink
    }, "Tulco"), /*#__PURE__*/React.createElement("tspan", {
      fontWeight: "400",
      fill: ink,
      dx: "5"
    }, "Studio")));
  }
  // horizontal (default)
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 480 110",
    height: height,
    style: style,
    "aria-label": "Tulco Studio"
  }, rest), /*#__PURE__*/React.createElement("g", {
    transform: "translate(4,11) scale(0.88)"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "20",
    y: "22",
    width: "60",
    height: "14",
    rx: "5",
    fill: mark
  }), /*#__PURE__*/React.createElement("path", {
    d: "M28 80 L44 80 L66 38 L50 38 Z",
    fill: mark
  })), /*#__PURE__*/React.createElement("text", {
    x: "98",
    y: "80",
    fontFamily: "var(--font-sans), Switzer, sans-serif",
    fontSize: "70",
    letterSpacing: "-2.5"
  }, /*#__PURE__*/React.createElement("tspan", {
    fontWeight: "600",
    fill: ink
  }, "Tulco"), /*#__PURE__*/React.createElement("tspan", {
    fontWeight: "400",
    fill: studioFill,
    fillOpacity: studioOpacity,
    dx: "6",
    letterSpacing: "-1"
  }, "Studio")));
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Logo.jsx", error: String((e && e.message) || e) }); }

// components/core/Radio.jsx
try { (() => {
/** Tulco Studio — Radio. Round, blue dot when selected. */
function Radio({
  checked = false,
  disabled = false,
  label,
  name,
  value,
  onChange,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 10,
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.5 : 1,
      fontFamily: "var(--font-sans)",
      fontSize: "var(--text-base)",
      color: "var(--text-primary)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    onClick: () => !disabled && onChange && onChange(value),
    style: {
      width: 20,
      height: 20,
      flex: "none",
      borderRadius: "50%",
      border: `1px solid ${checked ? "var(--accent)" : "var(--border-strong)"}`,
      background: "var(--white)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      transition: "border-color var(--duration-fast) var(--ease-out)"
    }
  }, checked && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 10,
      height: 10,
      borderRadius: "50%",
      background: "var(--accent)"
    }
  })), label && /*#__PURE__*/React.createElement("span", null, label));
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Radio.jsx", error: String((e && e.message) || e) }); }

// components/core/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Tulco Studio — Select. Native select with brand chrome and chevron. */
function Select({
  size = "md",
  invalid = false,
  disabled = false,
  children,
  style,
  ...rest
}) {
  const sizes = {
    sm: {
      height: 34,
      fontSize: "var(--text-sm)"
    },
    md: {
      height: 42,
      fontSize: "var(--text-base)"
    },
    lg: {
      height: 50,
      fontSize: "var(--text-md)"
    }
  };
  const s = sizes[size] || sizes.md;
  const [focus, setFocus] = React.useState(false);
  const borderColor = invalid ? "var(--danger)" : focus ? "var(--border-focus)" : "var(--border-default)";
  const chevron = "data:image/svg+xml;utf8," + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="%2378716C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/></svg>');
  return /*#__PURE__*/React.createElement("select", _extends({
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: s.fontSize,
      color: "var(--text-primary)",
      height: s.height,
      width: "100%",
      padding: "0 38px 0 12px",
      background: `${disabled ? "var(--bg-subtle)" : "var(--white)"} url("${chevron}") no-repeat right 12px center`,
      border: `1px solid ${borderColor}`,
      borderRadius: "var(--radius-md)",
      outline: "none",
      appearance: "none",
      WebkitAppearance: "none",
      cursor: disabled ? "not-allowed" : "pointer",
      boxShadow: focus && !invalid ? "var(--shadow-focus)" : "none",
      opacity: disabled ? 0.6 : 1,
      transition: "border-color var(--duration-fast) var(--ease-out), box-shadow var(--duration-fast) var(--ease-out)",
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Select.jsx", error: String((e && e.message) || e) }); }

// components/core/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Tulco Studio — Switch. Square sliding toggle, blue when on. No bounce. */
function Switch({
  checked = false,
  disabled = false,
  onChange,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    role: "switch",
    "aria-checked": checked,
    disabled: disabled,
    onClick: () => !disabled && onChange && onChange(!checked),
    style: {
      width: 44,
      height: 24,
      flex: "none",
      borderRadius: "var(--radius-md)",
      border: `1px solid ${checked ? "var(--accent)" : "var(--border-strong)"}`,
      padding: 2,
      cursor: disabled ? "not-allowed" : "pointer",
      background: checked ? "var(--accent)" : "var(--gray-200)",
      opacity: disabled ? 0.5 : 1,
      display: "inline-flex",
      alignItems: "center",
      justifyContent: checked ? "flex-end" : "flex-start",
      transition: "background var(--duration-base) var(--ease-out), border-color var(--duration-base) var(--ease-out)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 18,
      height: 18,
      borderRadius: "1px",
      background: "#fff",
      boxShadow: "var(--shadow-sm)",
      transition: "transform var(--duration-base) var(--ease-out)"
    }
  }));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Switch.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Tulco Studio — Tag. Bordered label, optional removable. */
function Tag({
  removable = false,
  onRemove,
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      fontFamily: "var(--font-sans)",
      fontSize: "var(--text-sm)",
      fontWeight: "var(--weight-medium)",
      color: "var(--text-secondary)",
      lineHeight: 1,
      padding: "6px 10px",
      background: "var(--white)",
      border: "1px solid var(--border-default)",
      borderRadius: "var(--radius-sm)",
      ...style
    }
  }, rest), children, removable && /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onRemove,
    "aria-label": "Retirer",
    style: {
      display: "inline-flex",
      border: "none",
      background: "transparent",
      padding: 0,
      cursor: "pointer",
      color: "var(--text-tertiary)"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "13",
    height: "13",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.2",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M18 6L6 18M6 6l12 12"
  }))));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/core/Textarea.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Tulco Studio — Textarea. Matches Input styling, multi-line. */
function Textarea({
  invalid = false,
  disabled = false,
  rows = 4,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const borderColor = invalid ? "var(--danger)" : focus ? "var(--border-focus)" : "var(--border-default)";
  return /*#__PURE__*/React.createElement("textarea", _extends({
    rows: rows,
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "var(--text-base)",
      lineHeight: "var(--leading-normal)",
      color: "var(--text-primary)",
      width: "100%",
      padding: "10px 12px",
      background: disabled ? "var(--bg-subtle)" : "var(--white)",
      border: `1px solid ${borderColor}`,
      borderRadius: "var(--radius-md)",
      outline: "none",
      resize: "vertical",
      boxShadow: focus && !invalid ? "var(--shadow-focus)" : "none",
      opacity: disabled ? 0.6 : 1,
      transition: "border-color var(--duration-fast) var(--ease-out), box-shadow var(--duration-fast) var(--ease-out)",
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Textarea.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Footer.jsx
try { (() => {
// Tulco Studio — Website footer.
function Footer({
  onNavigate
}) {
  const {
    Logo
  } = window.TulcoStudioDesignSystem_ac5776;
  const col = (title, links) => /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--text-xs)",
      fontWeight: 600,
      letterSpacing: "var(--tracking-wide)",
      textTransform: "uppercase",
      color: "rgba(255,255,255,0.45)"
    }
  }, title), links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    style: {
      fontSize: "var(--text-sm)",
      color: "rgba(255,255,255,0.7)",
      cursor: "pointer"
    }
  }, l)));
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: "var(--noir)",
      color: "#fff",
      padding: "clamp(48px,8vw,96px) clamp(20px,5vw,64px) 40px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      display: "flex",
      flexWrap: "wrap",
      gap: 48,
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 340,
      display: "flex",
      flexDirection: "column",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    variant: "horizontal",
    tone: "white",
    height: 24
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: "var(--text-sm)",
      lineHeight: 1.6,
      color: "rgba(255,255,255,0.6)"
    }
  }, "Je con\xE7ois les logiciels m\xE9tier que les PME bricolent sur Excel \u2014 op\xE9rations, facturation, RH, pilotage.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 64,
      flexWrap: "wrap"
    }
  }, col("Offre", ["Diagnostic Ops & Gains", "Build — 6 semaines", "Régie mensuelle"]), col("Contact", ["bonjour@tulco.studio", "LinkedIn", "Réserver un créneau"]))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "48px auto 0",
      paddingTop: 24,
      borderTop: "1px solid rgba(255,255,255,0.12)",
      display: "flex",
      justifyContent: "space-between",
      flexWrap: "wrap",
      gap: 12,
      fontFamily: "var(--font-mono)",
      fontSize: "11px",
      textTransform: "uppercase",
      letterSpacing: "0.04em",
      color: "rgba(255,255,255,0.4)"
    }
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 Tulco Studio"), /*#__PURE__*/React.createElement("span", null, "\xAB tulco \xBB \u2014 \xE9tai, soutien \xB7 sur-mesure")));
}
window.Footer = Footer;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Footer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Header.jsx
try { (() => {
// Tulco Studio — Landing header. Sticky, hairline rule, mono nav labels.
function Header({
  onBook
}) {
  const {
    Button,
    Logo
  } = window.TulcoStudioDesignSystem_ac5776;
  const items = [{
    id: "douleur",
    label: "Le constat"
  }, {
    id: "solution",
    label: "Ce que je livre"
  }, {
    id: "preuves",
    label: "Preuves"
  }, {
    id: "methode",
    label: "Méthode"
  }];
  const jump = id => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({
      top: el.offsetTop - 64,
      behavior: "smooth"
    });
  };
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: "sticky",
      top: 0,
      zIndex: 30,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "14px clamp(20px, 5vw, 64px)",
      background: "rgba(255,255,255,0.85)",
      backdropFilter: "blur(10px)",
      WebkitBackdropFilter: "blur(10px)",
      borderBottom: "1px solid var(--border-default)"
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    variant: "horizontal",
    tone: "blue",
    height: 24
  }), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 22
    }
  }, items.map(it => /*#__PURE__*/React.createElement("a", {
    key: it.id,
    onClick: () => jump(it.id),
    style: {
      cursor: "pointer",
      fontFamily: "var(--font-mono)",
      fontSize: "11px",
      textTransform: "uppercase",
      letterSpacing: "0.05em",
      color: "var(--text-tertiary)"
    }
  }, it.label)), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "sm",
    onClick: onBook
  }, "R\xE9server un diagnostic")));
}
window.Header = Header;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Header.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Landing.jsx
try { (() => {
// Tulco Studio — Landing. Built section-by-section from the offer brief (Offre_V1).
// Eyebrow helper (mono uppercase — the blueprint voice)
function Eyebrow({
  children,
  on = "light"
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "12px",
      fontWeight: 600,
      textTransform: "uppercase",
      letterSpacing: "0.08em",
      color: on === "dark" ? "rgba(255,255,255,0.55)" : "var(--accent)",
      marginBottom: 16
    }
  }, children);
}
const GRID_BG = {
  backgroundImage: "var(--grid-bg)",
  backgroundSize: "var(--grid-size) var(--grid-size)"
};
const PAD_X = "clamp(20px, 5vw, 64px)";
function Hero({
  onBook
}) {
  const {
    Button,
    Logo,
    Icon
  } = window.TulcoStudioDesignSystem_ac5776;
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: "relative",
      overflow: "hidden",
      borderBottom: "1px solid var(--border-default)",
      ...GRID_BG
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      right: "-4%",
      top: "6%",
      opacity: 0.05,
      pointerEvents: "none"
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    variant: "symbol",
    tone: "ink",
    height: 460
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: `clamp(56px,10vw,120px) ${PAD_X} clamp(48px,8vw,96px)`
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 880
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Logiciels m\xE9tier sur-mesure \xB7 PME"), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontWeight: 600,
      fontSize: "clamp(38px,6.4vw,82px)",
      lineHeight: "var(--leading-tight)",
      letterSpacing: "var(--tracking-display)",
      color: "var(--text-primary)"
    }
  }, "Vos \xE9quipes vivent dans Excel.", /*#__PURE__*/React.createElement("br", null), "Je construis le logiciel qui les en sort."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "28px 0 0",
      maxWidth: 600,
      fontSize: "var(--text-md)",
      lineHeight: "var(--leading-relaxed)",
      color: "var(--text-secondary)"
    }
  }, "Op\xE9rations, facturation, RH, pilotage. Des interfaces sur-mesure et des automatisations qui tiennent. Une premi\xE8re version en 6 semaines, \xE0 ROI mesurable."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 12,
      marginTop: 36,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    onClick: onBook,
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "diagnostic",
      size: 18,
      color: "#fff"
    })
  }, "R\xE9server un diagnostic"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "lg",
    onClick: () => {
      const e = document.getElementById("methode");
      if (e) window.scrollTo({
        top: e.offsetTop - 64,
        behavior: "smooth"
      });
    }
  }, "Voir la m\xE9thode")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 16,
      marginTop: 44,
      padding: "12px 16px",
      background: "var(--white)",
      border: "1px solid var(--border-default)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 8,
      color: "var(--danger)",
      fontFamily: "var(--font-mono)",
      fontSize: 12,
      textTransform: "uppercase",
      letterSpacing: "0.04em"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "chaos",
    size: 20,
    color: "var(--danger)"
  }), " Avant"), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 28,
      height: 1,
      background: "var(--border-strong)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 8,
      color: "var(--success)",
      fontFamily: "var(--font-mono)",
      fontSize: 12,
      textTransform: "uppercase",
      letterSpacing: "0.04em"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "structure",
    size: 20,
    color: "var(--success)"
  }), " Apr\xE8s")))));
}
function Pain() {
  const {
    Icon
  } = window.TulcoStudioDesignSystem_ac5776;
  const pains = [{
    i: "facturation",
    t: "Saisie en double",
    d: "Les mêmes données ressaisies d'un outil à l'autre, sources d'erreurs de facturation."
  }, {
    i: "operations",
    t: "Relances manuelles",
    d: "Le suivi client tenu à la main, à la mémoire et au fichier partagé."
  }, {
    i: "chaos",
    t: "Données éparpillées",
    d: "Excel, Airtable, mails : la vérité n'est nulle part, ou partout à la fois."
  }, {
    i: "dashboard",
    t: "Zéro visibilité",
    d: "Aucun pilotage temps réel. On découvre les problèmes trop tard."
  }];
  return /*#__PURE__*/React.createElement("section", {
    id: "douleur",
    style: {
      background: "var(--bg-subtle)",
      borderBottom: "1px solid var(--border-default)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: `clamp(48px,8vw,96px) ${PAD_X}`
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Vous vous reconnaissez ?"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: "0 0 40px",
      fontWeight: 600,
      fontSize: "clamp(26px,4vw,42px)",
      letterSpacing: "var(--tracking-heading)",
      maxWidth: 640
    }
  }, "Le back-office pilot\xE9 \xE0 la main co\xFBte des jours-homme chaque mois."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit,minmax(230px,1fr))",
      gap: 0,
      border: "1px solid var(--border-default)",
      background: "var(--white)"
    }
  }, pains.map((p, idx) => /*#__PURE__*/React.createElement("div", {
    key: p.t,
    style: {
      padding: "var(--space-6)",
      borderRight: "1px solid var(--border-default)",
      borderTop: idx === 0 ? "var(--rule-accent) solid var(--danger)" : "none"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: p.i,
    size: 26,
    color: "var(--danger)"
  }), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: "16px 0 6px",
      fontWeight: 600,
      fontSize: "var(--text-md)",
      letterSpacing: "var(--tracking-normal)"
    }
  }, p.t), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: "var(--text-sm)",
      lineHeight: 1.6,
      color: "var(--text-secondary)"
    }
  }, p.d))))));
}
function Solutions() {
  const {
    Card,
    Icon
  } = window.TulcoStudioDesignSystem_ac5776;
  const outs = [{
    i: "automation",
    t: "Automatisation des opérations",
    d: "Les tâches répétitives prises en charge, de bout en bout."
  }, {
    i: "structure",
    t: "Outil interne sur-mesure",
    d: "Développement sur-mesure quand le no-code plafonne."
  }, {
    i: "facturation",
    t: "Facturation automatisée",
    d: "Devis, factures, relances, sans ressaisie ni erreur."
  }, {
    i: "rh",
    t: "Brique RH & SIRH",
    d: "Congés, contrats, onboarding : centralisés et fiables."
  }, {
    i: "portail",
    t: "Portail client",
    d: "Vos clients en self-service, vos équipes soulagées."
  }, {
    i: "dashboard",
    t: "Dashboard de pilotage",
    d: "La visibilité temps réel sur l'activité, enfin."
  }];
  return /*#__PURE__*/React.createElement("section", {
    id: "solution",
    style: {
      borderBottom: "1px solid var(--border-default)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: `clamp(48px,8vw,96px) ${PAD_X}`
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Ce que je livre"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: "0 0 40px",
      fontWeight: 600,
      fontSize: "clamp(26px,4vw,42px)",
      letterSpacing: "var(--tracking-heading)",
      maxWidth: 640
    }
  }, "Un outil m\xE9tier core, livr\xE9 et adopt\xE9."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
      gap: 16
    }
  }, outs.map(o => /*#__PURE__*/React.createElement(Card, {
    key: o.t,
    variant: "marked",
    interactive: true
  }, /*#__PURE__*/React.createElement(Icon, {
    name: o.i,
    size: 28,
    color: "var(--accent)"
  }), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: "16px 0 8px",
      fontWeight: 600,
      fontSize: "var(--text-lg)",
      letterSpacing: "var(--tracking-normal)"
    }
  }, o.t), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: "var(--text-sm)",
      lineHeight: 1.6,
      color: "var(--text-secondary)"
    }
  }, o.d))))));
}
function Proof() {
  const kpis = [{
    client: "Joji Prod",
    val: "≈ 1",
    unit: "ETP économisé",
    note: "Production automatisée de bout en bout."
  }, {
    client: "Contentsquare",
    val: "≈ 6",
    unit: "jours / mois rendus",
    note: "Des dizaines de milliers d'€ sur le parc SaaS."
  }, {
    client: "Flat Checker",
    val: "×2",
    unit: "CA sur l'année",
    note: "Ops & facturation automatisées."
  }, {
    client: "Alfred Hub",
    val: "≈ 2 h",
    unit: "/ semaine / personne",
    note: "Temps rendu aux équipes accueil."
  }];
  return /*#__PURE__*/React.createElement("section", {
    id: "preuves",
    style: {
      background: "var(--surface-ink)",
      color: "var(--text-on-ink)",
      ...GRID_BG,
      backgroundBlendMode: "soft-light"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: `clamp(48px,8vw,96px) ${PAD_X}`
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 12,
      fontWeight: 600,
      textTransform: "uppercase",
      letterSpacing: "0.08em",
      color: "var(--accent-soft)",
      marginBottom: 16
    }
  }, "Preuves \xB7 avant / apr\xE8s"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: "0 0 44px",
      fontWeight: 600,
      fontSize: "clamp(26px,4vw,42px)",
      letterSpacing: "var(--tracking-heading)",
      maxWidth: 640
    }
  }, "Je ne vends pas des heures. Je vends un gain chiffr\xE9."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
      gap: 0,
      borderTop: "1px solid rgba(255,255,255,0.16)",
      borderLeft: "1px solid rgba(255,255,255,0.16)"
    }
  }, kpis.map(k => /*#__PURE__*/React.createElement("div", {
    key: k.client,
    style: {
      padding: "var(--space-6)",
      borderRight: "1px solid rgba(255,255,255,0.16)",
      borderBottom: "1px solid rgba(255,255,255,0.16)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      textTransform: "uppercase",
      letterSpacing: "0.06em",
      color: "rgba(255,255,255,0.5)"
    }
  }, k.client), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontWeight: 600,
      fontSize: "clamp(40px,5vw,60px)",
      letterSpacing: "-0.02em",
      color: "#fff",
      margin: "10px 0 2px",
      fontVariantNumeric: "tabular-nums"
    }
  }, k.val), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--text-sm)",
      fontWeight: 600,
      color: "var(--accent-soft)"
    }
  }, k.unit), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "12px 0 0",
      fontSize: "var(--text-sm)",
      lineHeight: 1.55,
      color: "rgba(255,255,255,0.6)"
    }
  }, k.note))))));
}
function Method() {
  const {
    Icon
  } = window.TulcoStudioDesignSystem_ac5776;
  const steps = [{
    w: "Semaine 1",
    t: "Cadrage",
    d: "On clarifie le problème, on aligne les équipes, on pose les fondations."
  }, {
    w: "Semaines 2 à 5",
    t: "Build",
    d: "Interfaces et automatisations. Développement sur-mesure quand il le faut."
  }, {
    w: "Semaine 6",
    t: "Déploiement & adoption",
    d: "Mise en main, prise en main, premiers gains mesurés."
  }];
  return /*#__PURE__*/React.createElement("section", {
    id: "methode",
    style: {
      borderBottom: "1px solid var(--border-default)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: `clamp(48px,8vw,96px) ${PAD_X}`
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "M\xE9thode \xB7 6 semaines"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: "0 0 8px",
      fontWeight: 600,
      fontSize: "clamp(26px,4vw,42px)",
      letterSpacing: "var(--tracking-heading)",
      maxWidth: 640
    }
  }, "Un cadre clair, un seul interlocuteur senior."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "0 0 44px",
      fontSize: "var(--text-md)",
      color: "var(--text-secondary)",
      maxWidth: 520
    }
  }, "Pas un junior d'agence sur votre dossier."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))",
      gap: 0,
      borderTop: "1px solid var(--border-default)"
    }
  }, steps.map((s, idx) => /*#__PURE__*/React.createElement("div", {
    key: s.t,
    style: {
      padding: "var(--space-6) var(--space-6) var(--space-6) 0",
      borderTop: "var(--rule-accent) solid var(--accent)",
      marginRight: idx < steps.length - 1 ? 24 : 0,
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 12,
      fontWeight: 600,
      textTransform: "uppercase",
      letterSpacing: "0.05em",
      color: "var(--accent)"
    }
  }, s.w), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: "10px 0 8px",
      fontWeight: 600,
      fontSize: "var(--text-lg)"
    }
  }, s.t), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: "var(--text-sm)",
      lineHeight: 1.6,
      color: "var(--text-secondary)"
    }
  }, s.d))))));
}
function About() {
  const {
    Avatar,
    Icon
  } = window.TulcoStudioDesignSystem_ac5776;
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--bg-subtle)",
      borderBottom: "1px solid var(--border-default)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: `clamp(48px,8vw,96px) ${PAD_X}`,
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
      gap: 40,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, null, "Qui suis-je"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: "0 0 16px",
      fontWeight: 600,
      fontSize: "clamp(26px,4vw,40px)",
      letterSpacing: "var(--tracking-heading)"
    }
  }, "Op\xE9rateur avant builder."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: "var(--text-md)",
      lineHeight: "var(--leading-relaxed)",
      color: "var(--text-secondary)",
      maxWidth: 460
    }
  }, "Un pass\xE9 d'op\xE9rations terrain en retail et merchandising (Volcom, Spyder), puis product builder. Je comprends votre m\xE9tier parce que je l'ai op\xE9r\xE9, et j'int\xE8gre de l'IA uniquement quand le gain est concret.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 16,
      background: "var(--white)",
      border: "1px solid var(--border-default)",
      borderTop: "var(--rule-accent) solid var(--accent)",
      padding: "var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: "Antoine Luizet",
    size: 56
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600,
      fontSize: "var(--text-md)"
    }
  }, "Antoine Luizet"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 12,
      color: "var(--text-tertiary)",
      textTransform: "uppercase",
      letterSpacing: "0.04em",
      marginTop: 4
    }
  }, "Tulco Studio \xB7 sur-mesure")))));
}
function FinalCTA({
  onBook
}) {
  const {
    Button,
    Icon
  } = window.TulcoStudioDesignSystem_ac5776;
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--accent)",
      color: "#fff"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: `clamp(48px,7vw,88px) ${PAD_X}`,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      flexWrap: "wrap",
      gap: 28
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontWeight: 600,
      fontSize: "clamp(28px,4vw,48px)",
      letterSpacing: "var(--tracking-heading)",
      maxWidth: 560
    }
  }, "Un back-office qui vous freine ?"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "12px 0 0",
      fontSize: "var(--text-md)",
      color: "rgba(255,255,255,0.8)"
    }
  }, "Diagnostic \xAB Ops & Gains \xBB, payant, d\xE9duit du build s'il est lanc\xE9.")), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "lg",
    onClick: onBook,
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "gain",
      size: 18,
      color: "var(--accent)"
    })
  }, "R\xE9server un diagnostic")));
}
function BookingModal({
  onClose
}) {
  const {
    Button,
    Input,
    Select,
    Textarea,
    Logo
  } = window.TulcoStudioDesignSystem_ac5776;
  const [sent, setSent] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: "fixed",
      inset: 0,
      zIndex: 60,
      background: "rgba(20,23,28,0.5)",
      backdropFilter: "blur(3px)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      width: "100%",
      maxWidth: 460,
      background: "var(--white)",
      border: "1px solid var(--border-default)",
      borderTop: "var(--rule-accent) solid var(--accent)",
      padding: "var(--space-8)"
    }
  }, sent ? /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      padding: "16px 0"
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: "0 0 8px",
      fontWeight: 600,
      fontSize: "var(--text-xl)",
      letterSpacing: "var(--tracking-heading)"
    }
  }, "Demande envoy\xE9e"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "0 0 24px",
      fontSize: "var(--text-sm)",
      color: "var(--text-secondary)"
    }
  }, "Je reviens vers vous sous 48 h pour caler le diagnostic."), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    onClick: onClose
  }, "Fermer")) : /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      setSent(true);
    },
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    variant: "horizontal",
    tone: "blue",
    height: 22
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      textTransform: "uppercase",
      letterSpacing: "0.05em",
      color: "var(--text-tertiary)"
    }
  }, "Diagnostic")), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: "4px 0 0",
      fontWeight: 600,
      fontSize: "var(--text-xl)",
      letterSpacing: "var(--tracking-heading)"
    }
  }, "R\xE9server un diagnostic Ops & Gains"), /*#__PURE__*/React.createElement(Input, {
    type: "email",
    placeholder: "vous@entreprise.com",
    required: true
  }), /*#__PURE__*/React.createElement(Select, {
    defaultValue: ""
  }, /*#__PURE__*/React.createElement("option", {
    value: "",
    disabled: true
  }, "Taille de l'\xE9quipe\u2026"), /*#__PURE__*/React.createElement("option", null, "10 \xE0 20 personnes"), /*#__PURE__*/React.createElement("option", null, "20 \xE0 35 personnes"), /*#__PURE__*/React.createElement("option", null, "35 \xE0 50 personnes")), /*#__PURE__*/React.createElement(Textarea, {
    rows: 3,
    placeholder: "O\xF9 vivez-vous dans Excel aujourd'hui ?"
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    type: "submit",
    fullWidth: true
  }, "Envoyer la demande"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 12,
      color: "var(--text-tertiary)",
      textAlign: "center"
    }
  }, "R\xE9ponse sous 48 h \xB7 1 500 \xE0 2 500 \u20AC d\xE9duits du build."))));
}
function Landing({
  onBook
}) {
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(Hero, {
    onBook: onBook
  }), /*#__PURE__*/React.createElement(Pain, null), /*#__PURE__*/React.createElement(Solutions, null), /*#__PURE__*/React.createElement(Proof, null), /*#__PURE__*/React.createElement(Method, null), /*#__PURE__*/React.createElement(About, null), /*#__PURE__*/React.createElement(FinalCTA, {
    onBook: onBook
  }));
}
Object.assign(window, {
  Landing,
  BookingModal
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Landing.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.ICON_NAMES = __ds_scope.ICON_NAMES;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Textarea = __ds_scope.Textarea;

})();
