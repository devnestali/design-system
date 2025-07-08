"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.tsx
var index_exports = {};
__export(index_exports, {
  Avatar: () => Avatar2,
  Box: () => Box,
  Button: () => Button,
  Checkbox: () => Checkbox2,
  Heading: () => Heading,
  MultiStep: () => MultiStep,
  Text: () => Text,
  TextArea: () => TextArea,
  TextInput: () => TextInput,
  Toast: () => Toast2,
  Tooltip: () => Tooltip2,
  config: () => config,
  createTheme: () => createTheme,
  css: () => css,
  getCssText: () => getCssText,
  globalCss: () => globalCss,
  keyframes: () => keyframes,
  styled: () => styled,
  theme: () => theme
});
module.exports = __toCommonJS(index_exports);

// src/styles/index.ts
var import_react = require("@stitches/react");

// ../tokens/dist/index.mjs
var colors = {
  white: "#fff",
  gray100: "#e1e1e6",
  gray200: "#a9a9b2",
  gray400: "#7c7c8a",
  gray500: "#505059",
  gray600: "#323238",
  gray700: "#29292e",
  gray800: "#202024",
  gray900: "#121214",
  green300: "#00b37e",
  green500: "#00875f",
  green700: "#015f43",
  green900: "#00291d"
};
var space = {
  1: "0.25rem",
  2: "0.5rem",
  3: "0.75rem",
  4: "1rem",
  5: "1.25rem",
  6: "1.5rem",
  7: "1.75rem",
  8: "2rem",
  10: "2.5rem",
  12: "3rem",
  16: "4rem",
  20: "5rem",
  40: "10rem",
  64: "16rem",
  80: "20rem"
};
var radius = {
  px: "1px",
  xs: "4px",
  sm: "6px",
  md: "8px",
  lg: "16px",
  full: "9999px"
};
var fonts = {
  default: "Roboto, sans-serif",
  code: "monospace"
};
var fontSizes = {
  xxs: "0.625rem",
  // 10px
  xs: "0.75rem",
  // 12px
  sm: "0.875rem",
  // 14px
  md: "1rem",
  // 16px
  lg: "1.125rem",
  // 18px
  xl: "1.25rem",
  // 20px
  "2xl": "1.5rem",
  // 24px
  "4xl": "2rem",
  // 32px
  "5xl": "2.25rem",
  // 36px
  "6xl": "3rem",
  // 48px
  "7xl": "4rem",
  // 64px
  "8xl": "5rem",
  // 80px
  "9xl": "6rem"
  // 96px
};
var fontWeights = {
  regular: "400",
  medium: "500",
  bold: "700"
};
var lineHeights = {
  shorter: "125%",
  short: "140%",
  base: "160%",
  tall: "180%"
};

// src/styles/index.ts
var {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config
} = (0, import_react.createStitches)({
  themeMap: __spreadProps(__spreadValues({}, import_react.defaultThemeMap), {
    height: "space",
    width: "space"
  }),
  theme: {
    colors,
    fontSizes,
    fontWeights,
    fonts,
    lineHeights,
    radii: radius,
    space
  }
});

// src/components/Box.tsx
var Box = styled("div", {
  padding: "$6",
  borderRadius: "$md",
  backgroundColor: "$gray800",
  border: "1px solid $gray600"
});
Box.displayName = "Box";

// src/components/Heading.tsx
var Heading = styled("h2", {
  fontFamily: "$default",
  lineHeight: "$shorter",
  margin: 0,
  color: "$gray100",
  variants: {
    size: {
      sm: { fontSize: "$xl" },
      md: { fontSize: "$2xl" },
      lg: { fontSize: "$4xl" },
      "2xl": { fontSize: "$5xl" },
      "3xl": { fontSize: "$6xl" },
      "4xl": { fontSize: "$7xl" },
      "5xl": { fontSize: "$8xl" },
      "6xl": { fontSize: "$9xl" }
    }
  },
  defaultVariants: {
    size: "md"
  }
});
Heading.displayName = "Heading";

// src/components/Text.tsx
var Text = styled("p", {
  fontFamily: "$default",
  lineHeight: "$base",
  margin: 0,
  color: "$gray100",
  variants: {
    size: {
      xxs: { fontSize: "$xxs" },
      xs: { fontSize: "$xs" },
      sm: { fontSize: "$sm" },
      md: { fontSize: "$md" },
      lg: { fontSize: "$lg" },
      xl: { fontSize: "$xl" },
      "2xl": { fontSize: "$2xl" },
      "4xl": { fontSize: "$4xl" },
      "5xl": { fontSize: "$5xl" },
      "6xl": { fontSize: "$6xl" },
      "7xl": { fontSize: "$7xl" },
      "8xl": { fontSize: "$8xl" },
      "9xl": { fontSize: "$9xl" }
    }
  },
  defaultVariants: {
    size: "md"
  }
});
Text.displayName = "Text";

// src/components/Avatar/styles.ts
var Avatar = __toESM(require("@radix-ui/react-avatar"));
var AvatarContainer = styled(Avatar.Root, {
  borderRadius: "$full",
  display: "inline-block",
  width: "$16",
  height: "$16",
  overflow: "hidden"
});
var AvatarImage2 = styled(Avatar.AvatarImage, {
  width: "100%",
  height: "100%",
  objectFit: "cover",
  borderRadius: "inherit"
});
var AvatarFallback2 = styled(Avatar.AvatarFallback, {
  width: "100%",
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "$gray600",
  color: "$gray800",
  svg: {
    width: "$6",
    height: "$6"
  }
});

// src/components/Avatar/index.tsx
var import_phosphor_react = require("phosphor-react");
var import_jsx_runtime = require("react/jsx-runtime");
function Avatar2(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AvatarContainer, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AvatarImage2, __spreadValues({}, props)),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AvatarFallback2, { delayMs: 600, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_phosphor_react.User, {}) })
  ] });
}
Avatar2.displayName = "Avatar";

// src/components/Button.tsx
var Button = styled("button", {
  all: "unset",
  borderRadius: "$sm",
  fontSize: "$sm",
  fontWeight: "$medium",
  fontFamily: "$default",
  textAlign: "center",
  minWidth: 120,
  boxSizing: "border-box",
  padding: "0 $4",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "$2",
  cursor: "pointer",
  svg: {
    width: "$4",
    height: "$4"
  },
  "&:disabled": {
    cursor: "not-allowed"
  },
  "&:focus": {
    boxShadow: "0 0 0 2px $colors$gray-100"
  },
  variants: {
    variant: {
      primary: {
        color: "$white",
        background: "$green500",
        "&:not(:disabled):hover": {
          background: "$green300"
        },
        "&:disabled": {
          backgroundColor: "$gray200"
        }
      },
      secondary: {
        color: "$green300",
        border: "2px solid $green500",
        "&:not(:disabled):hover": {
          background: "$green500",
          color: "$white"
        },
        "&:disabled": {
          color: "$gray200",
          borderColor: "$gray200"
        }
      },
      tertiary: {
        color: "$gray100",
        "&:not(:disabled):hover": {
          color: "$white"
        },
        "&:disabled": {
          color: "$gray600"
        }
      }
    },
    size: {
      sm: {
        height: 38
      },
      md: {
        height: 46
      }
    }
  },
  defaultVariants: {
    variant: "primary",
    size: "md"
  }
});
Button.displayName = "Button";

// src/components/TextInput/index.tsx
var import_react2 = require("react");

// src/components/TextInput/styles.ts
var TextInputContainer = styled("div", {
  backgroundColor: "$gray900",
  borderRadius: "$sm",
  boxSizing: "border-box",
  border: "2px solid $gray900",
  display: "flex",
  alignItems: "center",
  variants: {
    size: {
      sm: {
        padding: "$2 $3"
      },
      md: {
        padding: "$3 $4"
      }
    }
  },
  "&:has(input:focus)": {
    borderColor: "$green300"
  },
  "&:has(input:disabled)": {
    opacity: 0.5,
    cursor: "not-allowed"
  },
  defaultVariants: {
    size: "md"
  }
});
var Prefix = styled("span", {
  fontFamily: "$default",
  fontSize: "$sm",
  color: "$gray400",
  fontWeight: "$regular"
});
var Input = styled("input", {
  fontFamily: "$default",
  fontSize: "$sm",
  color: "$white",
  fontWeight: "$regular",
  background: "transparent",
  border: "0",
  width: "100%",
  "&:focus": {
    outline: "none"
  },
  "&:disabled": {
    cursor: "not-allowed"
  },
  "&::placeholder": {
    color: "$gray400"
  }
});

// src/components/TextInput/index.tsx
var import_jsx_runtime2 = require("react/jsx-runtime");
var TextInput = (0, import_react2.forwardRef)(
  (_a, ref) => {
    var _b = _a, { prefix } = _b, props = __objRest(_b, ["prefix"]);
    return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(TextInputContainer, { children: [
      !!prefix && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Prefix, { children: prefix }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Input, __spreadValues({ ref }, props))
    ] });
  }
);
TextInput.displayName = "TextInput";

// src/components/TextArea.tsx
var TextArea = styled("textarea", {
  backgroundColor: "$gray900",
  padding: "$3 $4",
  borderRadius: "$sm",
  boxSizing: "border-box",
  border: "2px solid $gray900",
  fontFamily: "$default",
  fontSize: "$sm",
  color: "$white",
  fontWeight: "$regular",
  resize: "vertical",
  minHeight: 80,
  display: "flex",
  alignItems: "baseline",
  "&:focus": {
    outline: "none",
    borderColor: "$green300"
  },
  "&:disabled": {
    opacity: 0.5,
    cursor: "not-allowed"
  },
  "&:placeholder": {
    color: "$gray400"
  }
});
TextArea.displayName = "TextArea";

// src/components/Checkbox/index.tsx
var import_phosphor_react2 = require("phosphor-react");

// src/components/Checkbox/styles.ts
var Checkbox = __toESM(require("@radix-ui/react-checkbox"));
var CheckboxContainer = styled(Checkbox.Root, {
  all: "unset",
  width: "$6",
  height: "$6",
  backgroundColor: "$gray900",
  border: "2px solid $gray900",
  borderRadius: "$xs",
  lineHeight: 0,
  cursor: "pointer",
  overflow: "hidden",
  boxSizing: "border-box",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  '&:focus, &[data-state="checked"]': {
    borderColor: "$green500"
  },
  '&[data-state="checked"]': {
    backgroundColor: "$green300"
  }
});
var slideIn = keyframes({
  from: {
    transform: "translateX(-100%)"
  },
  to: {
    transform: "translateX(0)"
  }
});
var slideOut = keyframes({
  from: {
    transform: "translateX(0)"
  },
  to: {
    transform: "translateX(-100%)"
  }
});
var CheckboxIndicator = styled(Checkbox.Indicator, {
  color: "$white",
  width: "$4",
  height: "$4",
  '&[data-state="checked"]': {
    animation: `${slideIn} 200ms ease-out`
  },
  '&[data-state="unchecked"]': {
    animation: `${slideOut} 200ms ease-out`
  }
});

// src/components/Checkbox/index.tsx
var import_jsx_runtime3 = require("react/jsx-runtime");
function Checkbox2(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(CheckboxContainer, __spreadProps(__spreadValues({}, props), { children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(CheckboxIndicator, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_phosphor_react2.Check, { weight: "bold" }) }) }));
}
Checkbox2.displayName = "Checkbox";

// src/components/MultiStep/styles.ts
var MultiStepContainer = styled("div", {});
var Label = styled(Text, {
  color: "$gray200",
  defaultVariants: {
    size: "xs"
  }
});
var Steps = styled("div", {
  display: "grid",
  gridTemplateColumns: "repeat(var(--steps-size), 1fr)",
  gap: "$2",
  marginTop: "$1"
});
var Step = styled("div", {
  height: "$1",
  borderRadius: "$px",
  backgroundColor: "$gray600",
  variants: {
    active: {
      true: {
        backgroundColor: "$gray100"
      }
    }
  }
});

// src/components/MultiStep/index.tsx
var import_jsx_runtime4 = require("react/jsx-runtime");
function MultiStep({ size, currentStep = 1 }) {
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(MultiStepContainer, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(Label, { children: [
      "Passo ",
      currentStep,
      " de ",
      size
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
      Steps,
      {
        css: {
          "--steps-size": size
        },
        children: Array.from({ length: size }, (_, i) => i + 1).map((step) => {
          return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Step, { active: currentStep >= step }, step);
        })
      }
    )
  ] });
}
MultiStep.displayName = "MultiStep";

// src/components/Tooltip/index.tsx
var import_react_tooltip = require("@radix-ui/react-tooltip");

// src/components/Tooltip/styles.ts
var Tooltip = __toESM(require("@radix-ui/react-tooltip"));
var TooltipContentStyled = styled(Tooltip.TooltipContent, {
  backgroundColor: "$gray900",
  color: "$gray100",
  textAlign: "center",
  padding: "$2 $4",
  borderRadius: "$xs",
  time: {
    fontSize: "$sm",
    fontFamily: "$default"
  }
});
var TooltipInfo = styled("span", {
  fontSize: "$sm",
  fontFamily: "$default"
});

// src/components/Tooltip/index.tsx
var import_jsx_runtime5 = require("react/jsx-runtime");
function Tooltip2({ date, disponibility, children }) {
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_react_tooltip.TooltipProvider, { delayDuration: 300, children: /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(import_react_tooltip.Root, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_react_tooltip.TooltipTrigger, { asChild: true, children }),
    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_react_tooltip.TooltipPortal, { children: /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(TooltipContentStyled, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("time", { children: date }),
      " -",
      /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(TooltipInfo, { children: [
        " ",
        disponibility
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_react_tooltip.TooltipArrow, {})
    ] }) })
  ] }) });
}

// src/components/Toast/index.tsx
var import_react_toast = require("@radix-ui/react-toast");

// src/components/Toast/styles.ts
var Toast = __toESM(require("@radix-ui/react-toast"));
var slideUp = keyframes({
  from: { transform: "translateY(100%)" },
  to: { transform: "translateY(0)" }
});
var ToastContainer = styled(Toast.Root, {
  position: "relative",
  background: "$gray800",
  padding: "$3 $5",
  border: "1px solid $gray600",
  borderRadius: "$sm",
  display: "flex",
  flexDirection: "column",
  gap: "$1",
  width: "360px",
  height: "auto",
  animation: `${slideUp} 100ms ease-in`
});
var ToastTitle = styled(Toast.Title, {
  fontFamily: "$default",
  fontWeight: "$bold",
  fontSize: "$xl",
  color: "$white",
  lineHeight: "$base"
});
var ToastInfo = styled("div", {
  fontFamily: "$default",
  fontWeight: "$regular",
  fontSize: "$sm",
  color: "$gray200",
  lineHeight: "$base"
});
var ToastClose = styled(Toast.Close, {
  position: "absolute",
  top: 14,
  right: 18,
  color: "$gray200",
  width: "20px",
  height: "20px",
  cursor: "pointer"
});
var ToastViewport = styled(Toast.Viewport, {
  position: "fixed",
  bottom: 20,
  right: 20,
  width: "auto",
  maxWidth: "100vw",
  zIndex: 9999
});

// src/components/Toast/index.tsx
var import_phosphor_react3 = require("phosphor-react");
var import_react3 = require("react");
var import_jsx_runtime6 = require("react/jsx-runtime");
function Toast2(_a) {
  var _b = _a, {
    dayOfWeek,
    dateOfMonth,
    time,
    content
  } = _b, props = __objRest(_b, [
    "dayOfWeek",
    "dateOfMonth",
    "time",
    "content"
  ]);
  const [openToast, setOpenToast] = (0, import_react3.useState)(false);
  function handleClickToShowToast() {
    setTimeout(() => setOpenToast(true), 200);
  }
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(import_react_toast.ToastProvider, { swipeDirection: "right", children: [
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("button", __spreadProps(__spreadValues({ onClick: handleClickToShowToast }, props), { children: content })),
    /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(ToastContainer, { open: openToast, onOpenChange: setOpenToast, children: [
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(ToastTitle, { children: "Agendamento realizado" }),
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_react_toast.ToastDescription, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(ToastInfo, { children: [
        dayOfWeek,
        " ",
        /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("time", { children: [
          dateOfMonth,
          " "
        ] }),
        "\xE1s ",
        time,
        "h"
      ] }) }),
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(ToastClose, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_phosphor_react3.X, {}) })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(ToastViewport, {})
  ] });
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Avatar,
  Box,
  Button,
  Checkbox,
  Heading,
  MultiStep,
  Text,
  TextArea,
  TextInput,
  Toast,
  Tooltip,
  config,
  createTheme,
  css,
  getCssText,
  globalCss,
  keyframes,
  styled,
  theme
});
