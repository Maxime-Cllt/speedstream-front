import { a7 as ssr_context, a8 as sanitize_props, a9 as rest_props, aa as fallback, ab as attributes, ac as clsx, ad as ensure_array_like, ae as element, af as slot, ag as bind_props, ah as spread_props, ai as attr_class, e as escape_html, aj as stringify, ak as attr_style, a6 as derived$1, a as attr, al as store_get, am as unsubscribe_stores } from "../../chunks/index2.js";
import "clsx";
import { d as derived, w as writable } from "../../chunks/index.js";
import "echarts";
import { format } from "date-fns";
function onDestroy(fn) {
  /** @type {SSRContext} */
  ssr_context.r.on_destroy(fn);
}
const defaultAttributes = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": 2,
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
};
const hasA11yProp = (props) => {
  for (const prop in props) {
    if (prop.startsWith("aria-") || prop === "role" || prop === "title") {
      return true;
    }
  }
  return false;
};
const mergeClasses = (...classes) => classes.filter((className, index, array) => {
  return Boolean(className) && className.trim() !== "" && array.indexOf(className) === index;
}).join(" ").trim();
function Icon($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, [
    "name",
    "color",
    "size",
    "strokeWidth",
    "absoluteStrokeWidth",
    "iconNode"
  ]);
  $$renderer.component(($$renderer2) => {
    let name = fallback($$props["name"], void 0);
    let color = fallback($$props["color"], "currentColor");
    let size = fallback($$props["size"], 24);
    let strokeWidth = fallback($$props["strokeWidth"], 2);
    let absoluteStrokeWidth = fallback($$props["absoluteStrokeWidth"], false);
    let iconNode = fallback($$props["iconNode"], () => [], true);
    $$renderer2.push(`<svg${attributes(
      {
        ...defaultAttributes,
        ...!hasA11yProp($$restProps) ? { "aria-hidden": "true" } : void 0,
        ...$$restProps,
        width: size,
        height: size,
        stroke: color,
        "stroke-width": absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,
        class: clsx(mergeClasses("lucide-icon", "lucide", name ? `lucide-${name}` : "", $$sanitized_props.class))
      },
      void 0,
      void 0,
      void 0,
      3
    )}><!--[-->`);
    const each_array = ensure_array_like(iconNode);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let [tag, attrs] = each_array[$$index];
      element($$renderer2, tag, () => {
        $$renderer2.push(`${attributes({ ...attrs }, void 0, void 0, void 0, 3)}`);
      });
    }
    $$renderer2.push(`<!--]--><!--[-->`);
    slot($$renderer2, $$props, "default", {});
    $$renderer2.push(`<!--]--></svg>`);
    bind_props($$props, {
      name,
      color,
      size,
      strokeWidth,
      absoluteStrokeWidth,
      iconNode
    });
  });
}
function Activity($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    [
      "path",
      {
        "d": "M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"
      }
    ]
  ];
  Icon($$renderer, spread_props([
    { name: "activity" },
    $$sanitized_props,
    {
      /**
       * @component @name Activity
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMjIgMTJoLTIuNDhhMiAyIDAgMCAwLTEuOTMgMS40NmwtMi4zNSA4LjM2YS4yNS4yNSAwIDAgMS0uNDggMEw5LjI0IDIuMThhLjI1LjI1IDAgMCAwLS40OCAwbC0yLjM1IDguMzZBMiAyIDAgMCAxIDQuNDkgMTJIMiIgLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/activity
       * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
       *
       * @param {Object} props - Lucide icons props and any valid SVG attribute
       * @returns {FunctionalComponent} Svelte component
       *
       */
      iconNode,
      children: ($$renderer2) => {
        $$renderer2.push(`<!--[-->`);
        slot($$renderer2, $$props, "default", {});
        $$renderer2.push(`<!--]-->`);
      },
      $$slots: { default: true }
    }
  ]));
}
function Arrow_left_right($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    ["path", { "d": "M8 3 4 7l4 4" }],
    ["path", { "d": "M4 7h16" }],
    ["path", { "d": "m16 21 4-4-4-4" }],
    ["path", { "d": "M20 17H4" }]
  ];
  Icon($$renderer, spread_props([
    { name: "arrow-left-right" },
    $$sanitized_props,
    {
      /**
       * @component @name ArrowLeftRight
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNOCAzIDQgN2w0IDQiIC8+CiAgPHBhdGggZD0iTTQgN2gxNiIgLz4KICA8cGF0aCBkPSJtMTYgMjEgNC00LTQtNCIgLz4KICA8cGF0aCBkPSJNMjAgMTdINCIgLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/arrow-left-right
       * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
       *
       * @param {Object} props - Lucide icons props and any valid SVG attribute
       * @returns {FunctionalComponent} Svelte component
       *
       */
      iconNode,
      children: ($$renderer2) => {
        $$renderer2.push(`<!--[-->`);
        slot($$renderer2, $$props, "default", {});
        $$renderer2.push(`<!--]-->`);
      },
      $$slots: { default: true }
    }
  ]));
}
function Arrow_up_down($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    ["path", { "d": "m21 16-4 4-4-4" }],
    ["path", { "d": "M17 20V4" }],
    ["path", { "d": "m3 8 4-4 4 4" }],
    ["path", { "d": "M7 4v16" }]
  ];
  Icon($$renderer, spread_props([
    { name: "arrow-up-down" },
    $$sanitized_props,
    {
      /**
       * @component @name ArrowUpDown
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJtMjEgMTYtNCA0LTQtNCIgLz4KICA8cGF0aCBkPSJNMTcgMjBWNCIgLz4KICA8cGF0aCBkPSJtMyA4IDQtNCA0IDQiIC8+CiAgPHBhdGggZD0iTTcgNHYxNiIgLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/arrow-up-down
       * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
       *
       * @param {Object} props - Lucide icons props and any valid SVG attribute
       * @returns {FunctionalComponent} Svelte component
       *
       */
      iconNode,
      children: ($$renderer2) => {
        $$renderer2.push(`<!--[-->`);
        slot($$renderer2, $$props, "default", {});
        $$renderer2.push(`<!--]-->`);
      },
      $$slots: { default: true }
    }
  ]));
}
function Clock($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    ["circle", { "cx": "12", "cy": "12", "r": "10" }],
    ["path", { "d": "M12 6v6l4 2" }]
  ];
  Icon($$renderer, spread_props([
    { name: "clock" },
    $$sanitized_props,
    {
      /**
       * @component @name Clock
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIxMCIgLz4KICA8cGF0aCBkPSJNMTIgNnY2bDQgMiIgLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/clock
       * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
       *
       * @param {Object} props - Lucide icons props and any valid SVG attribute
       * @returns {FunctionalComponent} Svelte component
       *
       */
      iconNode,
      children: ($$renderer2) => {
        $$renderer2.push(`<!--[-->`);
        slot($$renderer2, $$props, "default", {});
        $$renderer2.push(`<!--]-->`);
      },
      $$slots: { default: true }
    }
  ]));
}
function Gauge($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    ["path", { "d": "m12 14 4-4" }],
    ["path", { "d": "M3.34 19a10 10 0 1 1 17.32 0" }]
  ];
  Icon($$renderer, spread_props([
    { name: "gauge" },
    $$sanitized_props,
    {
      /**
       * @component @name Gauge
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJtMTIgMTQgNC00IiAvPgogIDxwYXRoIGQ9Ik0zLjM0IDE5YTEwIDEwIDAgMSAxIDE3LjMyIDAiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/gauge
       * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
       *
       * @param {Object} props - Lucide icons props and any valid SVG attribute
       * @returns {FunctionalComponent} Svelte component
       *
       */
      iconNode,
      children: ($$renderer2) => {
        $$renderer2.push(`<!--[-->`);
        slot($$renderer2, $$props, "default", {});
        $$renderer2.push(`<!--]-->`);
      },
      $$slots: { default: true }
    }
  ]));
}
function Grip_vertical($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    ["circle", { "cx": "9", "cy": "12", "r": "1" }],
    ["circle", { "cx": "9", "cy": "5", "r": "1" }],
    ["circle", { "cx": "9", "cy": "19", "r": "1" }],
    ["circle", { "cx": "15", "cy": "12", "r": "1" }],
    ["circle", { "cx": "15", "cy": "5", "r": "1" }],
    ["circle", { "cx": "15", "cy": "19", "r": "1" }]
  ];
  Icon($$renderer, spread_props([
    { name: "grip-vertical" },
    $$sanitized_props,
    {
      /**
       * @component @name GripVertical
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8Y2lyY2xlIGN4PSI5IiBjeT0iMTIiIHI9IjEiIC8+CiAgPGNpcmNsZSBjeD0iOSIgY3k9IjUiIHI9IjEiIC8+CiAgPGNpcmNsZSBjeD0iOSIgY3k9IjE5IiByPSIxIiAvPgogIDxjaXJjbGUgY3g9IjE1IiBjeT0iMTIiIHI9IjEiIC8+CiAgPGNpcmNsZSBjeD0iMTUiIGN5PSI1IiByPSIxIiAvPgogIDxjaXJjbGUgY3g9IjE1IiBjeT0iMTkiIHI9IjEiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/grip-vertical
       * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
       *
       * @param {Object} props - Lucide icons props and any valid SVG attribute
       * @returns {FunctionalComponent} Svelte component
       *
       */
      iconNode,
      children: ($$renderer2) => {
        $$renderer2.push(`<!--[-->`);
        slot($$renderer2, $$props, "default", {});
        $$renderer2.push(`<!--]-->`);
      },
      $$slots: { default: true }
    }
  ]));
}
function Radio($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    ["path", { "d": "M16.247 7.761a6 6 0 0 1 0 8.478" }],
    ["path", { "d": "M19.075 4.933a10 10 0 0 1 0 14.134" }],
    ["path", { "d": "M4.925 19.067a10 10 0 0 1 0-14.134" }],
    ["path", { "d": "M7.753 16.239a6 6 0 0 1 0-8.478" }],
    ["circle", { "cx": "12", "cy": "12", "r": "2" }]
  ];
  Icon($$renderer, spread_props([
    { name: "radio" },
    $$sanitized_props,
    {
      /**
       * @component @name Radio
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMTYuMjQ3IDcuNzYxYTYgNiAwIDAgMSAwIDguNDc4IiAvPgogIDxwYXRoIGQ9Ik0xOS4wNzUgNC45MzNhMTAgMTAgMCAwIDEgMCAxNC4xMzQiIC8+CiAgPHBhdGggZD0iTTQuOTI1IDE5LjA2N2ExMCAxMCAwIDAgMSAwLTE0LjEzNCIgLz4KICA8cGF0aCBkPSJNNy43NTMgMTYuMjM5YTYgNiAwIDAgMSAwLTguNDc4IiAvPgogIDxjaXJjbGUgY3g9IjEyIiBjeT0iMTIiIHI9IjIiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/radio
       * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
       *
       * @param {Object} props - Lucide icons props and any valid SVG attribute
       * @returns {FunctionalComponent} Svelte component
       *
       */
      iconNode,
      children: ($$renderer2) => {
        $$renderer2.push(`<!--[-->`);
        slot($$renderer2, $$props, "default", {});
        $$renderer2.push(`<!--]-->`);
      },
      $$slots: { default: true }
    }
  ]));
}
function Rotate_ccw($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    [
      "path",
      { "d": "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" }
    ],
    ["path", { "d": "M3 3v5h5" }]
  ];
  Icon($$renderer, spread_props([
    { name: "rotate-ccw" },
    $$sanitized_props,
    {
      /**
       * @component @name RotateCcw
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMyAxMmE5IDkgMCAxIDAgOS05IDkuNzUgOS43NSAwIDAgMC02Ljc0IDIuNzRMMyA4IiAvPgogIDxwYXRoIGQ9Ik0zIDN2NWg1IiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/rotate-ccw
       * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
       *
       * @param {Object} props - Lucide icons props and any valid SVG attribute
       * @returns {FunctionalComponent} Svelte component
       *
       */
      iconNode,
      children: ($$renderer2) => {
        $$renderer2.push(`<!--[-->`);
        slot($$renderer2, $$props, "default", {});
        $$renderer2.push(`<!--]-->`);
      },
      $$slots: { default: true }
    }
  ]));
}
function Search($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    ["path", { "d": "m21 21-4.34-4.34" }],
    ["circle", { "cx": "11", "cy": "11", "r": "8" }]
  ];
  Icon($$renderer, spread_props([
    { name: "search" },
    $$sanitized_props,
    {
      /**
       * @component @name Search
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJtMjEgMjEtNC4zNC00LjM0IiAvPgogIDxjaXJjbGUgY3g9IjExIiBjeT0iMTEiIHI9IjgiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/search
       * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
       *
       * @param {Object} props - Lucide icons props and any valid SVG attribute
       * @returns {FunctionalComponent} Svelte component
       *
       */
      iconNode,
      children: ($$renderer2) => {
        $$renderer2.push(`<!--[-->`);
        slot($$renderer2, $$props, "default", {});
        $$renderer2.push(`<!--]-->`);
      },
      $$slots: { default: true }
    }
  ]));
}
function Settings($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    [
      "path",
      {
        "d": "M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"
      }
    ],
    ["circle", { "cx": "12", "cy": "12", "r": "3" }]
  ];
  Icon($$renderer, spread_props([
    { name: "settings" },
    $$sanitized_props,
    {
      /**
       * @component @name Settings
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNOS42NzEgNC4xMzZhMi4zNCAyLjM0IDAgMCAxIDQuNjU5IDAgMi4zNCAyLjM0IDAgMCAwIDMuMzE5IDEuOTE1IDIuMzQgMi4zNCAwIDAgMSAyLjMzIDQuMDMzIDIuMzQgMi4zNCAwIDAgMCAwIDMuODMxIDIuMzQgMi4zNCAwIDAgMS0yLjMzIDQuMDMzIDIuMzQgMi4zNCAwIDAgMC0zLjMxOSAxLjkxNSAyLjM0IDIuMzQgMCAwIDEtNC42NTkgMCAyLjM0IDIuMzQgMCAwIDAtMy4zMi0xLjkxNSAyLjM0IDIuMzQgMCAwIDEtMi4zMy00LjAzMyAyLjM0IDIuMzQgMCAwIDAgMC0zLjgzMUEyLjM0IDIuMzQgMCAwIDEgNi4zNSA2LjA1MWEyLjM0IDIuMzQgMCAwIDAgMy4zMTktMS45MTUiIC8+CiAgPGNpcmNsZSBjeD0iMTIiIGN5PSIxMiIgcj0iMyIgLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/settings
       * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
       *
       * @param {Object} props - Lucide icons props and any valid SVG attribute
       * @returns {FunctionalComponent} Svelte component
       *
       */
      iconNode,
      children: ($$renderer2) => {
        $$renderer2.push(`<!--[-->`);
        slot($$renderer2, $$props, "default", {});
        $$renderer2.push(`<!--]-->`);
      },
      $$slots: { default: true }
    }
  ]));
}
function Target($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    ["circle", { "cx": "12", "cy": "12", "r": "10" }],
    ["circle", { "cx": "12", "cy": "12", "r": "6" }],
    ["circle", { "cx": "12", "cy": "12", "r": "2" }]
  ];
  Icon($$renderer, spread_props([
    { name: "target" },
    $$sanitized_props,
    {
      /**
       * @component @name Target
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIxMCIgLz4KICA8Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSI2IiAvPgogIDxjaXJjbGUgY3g9IjEyIiBjeT0iMTIiIHI9IjIiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/target
       * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
       *
       * @param {Object} props - Lucide icons props and any valid SVG attribute
       * @returns {FunctionalComponent} Svelte component
       *
       */
      iconNode,
      children: ($$renderer2) => {
        $$renderer2.push(`<!--[-->`);
        slot($$renderer2, $$props, "default", {});
        $$renderer2.push(`<!--]-->`);
      },
      $$slots: { default: true }
    }
  ]));
}
function Trending_up($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    ["path", { "d": "M16 7h6v6" }],
    ["path", { "d": "m22 7-8.5 8.5-5-5L2 17" }]
  ];
  Icon($$renderer, spread_props([
    { name: "trending-up" },
    $$sanitized_props,
    {
      /**
       * @component @name TrendingUp
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMTYgN2g2djYiIC8+CiAgPHBhdGggZD0ibTIyIDctOC41IDguNS01LTVMMiAxNyIgLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/trending-up
       * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
       *
       * @param {Object} props - Lucide icons props and any valid SVG attribute
       * @returns {FunctionalComponent} Svelte component
       *
       */
      iconNode,
      children: ($$renderer2) => {
        $$renderer2.push(`<!--[-->`);
        slot($$renderer2, $$props, "default", {});
        $$renderer2.push(`<!--]-->`);
      },
      $$slots: { default: true }
    }
  ]));
}
function Trophy($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    [
      "path",
      {
        "d": "M10 14.66v1.626a2 2 0 0 1-.976 1.696A5 5 0 0 0 7 21.978"
      }
    ],
    [
      "path",
      {
        "d": "M14 14.66v1.626a2 2 0 0 0 .976 1.696A5 5 0 0 1 17 21.978"
      }
    ],
    ["path", { "d": "M18 9h1.5a1 1 0 0 0 0-5H18" }],
    ["path", { "d": "M4 22h16" }],
    [
      "path",
      { "d": "M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z" }
    ],
    ["path", { "d": "M6 9H4.5a1 1 0 0 1 0-5H6" }]
  ];
  Icon($$renderer, spread_props([
    { name: "trophy" },
    $$sanitized_props,
    {
      /**
       * @component @name Trophy
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMTAgMTQuNjZ2MS42MjZhMiAyIDAgMCAxLS45NzYgMS42OTZBNSA1IDAgMCAwIDcgMjEuOTc4IiAvPgogIDxwYXRoIGQ9Ik0xNCAxNC42NnYxLjYyNmEyIDIgMCAwIDAgLjk3NiAxLjY5NkE1IDUgMCAwIDEgMTcgMjEuOTc4IiAvPgogIDxwYXRoIGQ9Ik0xOCA5aDEuNWExIDEgMCAwIDAgMC01SDE4IiAvPgogIDxwYXRoIGQ9Ik00IDIyaDE2IiAvPgogIDxwYXRoIGQ9Ik02IDlhNiA2IDAgMCAwIDEyIDBWM2ExIDEgMCAwIDAtMS0xSDdhMSAxIDAgMCAwLTEgMXoiIC8+CiAgPHBhdGggZD0iTTYgOUg0LjVhMSAxIDAgMCAxIDAtNUg2IiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/trophy
       * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
       *
       * @param {Object} props - Lucide icons props and any valid SVG attribute
       * @returns {FunctionalComponent} Svelte component
       *
       */
      iconNode,
      children: ($$renderer2) => {
        $$renderer2.push(`<!--[-->`);
        slot($$renderer2, $$props, "default", {});
        $$renderer2.push(`<!--]-->`);
      },
      $$slots: { default: true }
    }
  ]));
}
function X($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    ["path", { "d": "M18 6 6 18" }],
    ["path", { "d": "m6 6 12 12" }]
  ];
  Icon($$renderer, spread_props([
    { name: "x" },
    $$sanitized_props,
    {
      /**
       * @component @name X
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMTggNiA2IDE4IiAvPgogIDxwYXRoIGQ9Im02IDYgMTIgMTIiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/x
       * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
       *
       * @param {Object} props - Lucide icons props and any valid SVG attribute
       * @returns {FunctionalComponent} Svelte component
       *
       */
      iconNode,
      children: ($$renderer2) => {
        $$renderer2.push(`<!--[-->`);
        slot($$renderer2, $$props, "default", {});
        $$renderer2.push(`<!--]-->`);
      },
      $$slots: { default: true }
    }
  ]));
}
function Zap($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    [
      "path",
      {
        "d": "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"
      }
    ]
  ];
  Icon($$renderer, spread_props([
    { name: "zap" },
    $$sanitized_props,
    {
      /**
       * @component @name Zap
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNNCAxNGExIDEgMCAwIDEtLjc4LTEuNjNsOS45LTEwLjJhLjUuNSAwIDAgMSAuODYuNDZsLTEuOTIgNi4wMkExIDEgMCAwIDAgMTMgMTBoN2ExIDEgMCAwIDEgLjc4IDEuNjNsLTkuOSAxMC4yYS41LjUgMCAwIDEtLjg2LS40NmwxLjkyLTYuMDJBMSAxIDAgMCAwIDExIDE0eiIgLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/zap
       * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
       *
       * @param {Object} props - Lucide icons props and any valid SVG attribute
       * @returns {FunctionalComponent} Svelte component
       *
       */
      iconNode,
      children: ($$renderer2) => {
        $$renderer2.push(`<!--[-->`);
        slot($$renderer2, $$props, "default", {});
        $$renderer2.push(`<!--]-->`);
      },
      $$slots: { default: true }
    }
  ]));
}
var Lane = /* @__PURE__ */ ((Lane2) => {
  Lane2["Left"] = "Left";
  Lane2["Right"] = "Right";
  return Lane2;
})(Lane || {});
const defaultSettings = {
  selectedSensors: [],
  selectedLanes: [Lane.Left, Lane.Right],
  dateRangeMode: "realtime",
  customStartDate: null,
  customEndDate: null,
  updateInterval: 3e3,
  maxDataPoints: 120,
  apiUrl: "http://192.168.1.100:8080",
  showLaneDistribution: true,
  showSensorStats: true,
  showSpeedChart: true,
  showHourlyTrend: true,
  showSpeedRecords: true,
  showSpeedDistribution: true,
  showAverageSpeedBySensor: true,
  showActivityHeatmap: true,
  showLanePerformance: true,
  showSpeedConsistency: true,
  showTopSensors: true,
  showTimePeriodAnalysis: true,
  speedThresholdMin: 80,
  speedThresholdMax: 350,
  enableAlerts: false
};
const STORAGE_KEY = "speedstream-settings";
function loadSettings() {
  if (typeof window !== "undefined") {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        return { ...defaultSettings, ...JSON.parse(stored) };
      } catch (e) {
        console.error("Error loading settings:", e);
      }
    }
  }
  return defaultSettings;
}
function createSettingsStore() {
  const { subscribe, set, update } = writable(defaultSettings);
  return {
    subscribe,
    set: (value) => {
      if (typeof window !== "undefined") {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(value));
      }
      set(value);
    },
    update: (fn) => {
      update((current) => {
        const newValue = fn(current);
        if (typeof window !== "undefined") {
          localStorage.setItem(STORAGE_KEY, JSON.stringify(newValue));
        }
        return newValue;
      });
    },
    reset: () => {
      if (typeof window !== "undefined") {
        localStorage.removeItem(STORAGE_KEY);
      }
      set(defaultSettings);
    },
    init: () => {
      set(loadSettings());
    }
  };
}
const settings = createSettingsStore();
const displaySettings = derived(settings, ($settings) => ({
  showLaneDistribution: $settings.showLaneDistribution,
  showSensorStats: $settings.showSensorStats,
  showSpeedChart: $settings.showSpeedChart,
  showHourlyTrend: $settings.showHourlyTrend,
  showSpeedRecords: $settings.showSpeedRecords,
  showSpeedDistribution: $settings.showSpeedDistribution,
  showAverageSpeedBySensor: $settings.showAverageSpeedBySensor,
  showActivityHeatmap: $settings.showActivityHeatmap,
  showLanePerformance: $settings.showLanePerformance,
  showSpeedConsistency: $settings.showSpeedConsistency,
  showTopSensors: $settings.showTopSensors,
  showTimePeriodAnalysis: $settings.showTimePeriodAnalysis
}));
derived(settings, ($settings) => ({
  selectedSensors: $settings.selectedSensors,
  selectedLanes: $settings.selectedLanes,
  dateRangeMode: $settings.dateRangeMode,
  customStartDate: $settings.customStartDate,
  customEndDate: $settings.customEndDate,
  speedThresholdMin: $settings.speedThresholdMin,
  speedThresholdMax: $settings.speedThresholdMax,
  enableAlerts: $settings.enableAlerts
}));
derived(settings, ($settings) => ({
  updateInterval: $settings.updateInterval,
  maxDataPoints: $settings.maxDataPoints,
  apiUrl: $settings.apiUrl
}));
const sensors = [
  "Sector 1 Entry",
  "Sector 1 Exit",
  "Sector 2 Entry",
  "Sector 2 Exit",
  "Sector 3 Entry",
  "Sector 3 Exit",
  "Finish Line",
  "Pit Entry"
];
function generateSpeedData(count) {
  const data = [];
  const now = /* @__PURE__ */ new Date();
  for (let i = 0; i < count; i++) {
    const minutesAgo = count - i;
    const timestamp = new Date(now.getTime() - minutesAgo * 60 * 1e3);
    const baseSpeed = 150 + Math.random() * 150;
    const variation = (Math.random() - 0.5) * 40;
    const speed = Math.max(80, Math.min(350, baseSpeed + variation));
    data.push({
      id: i + 1,
      sensor_name: sensors[Math.floor(Math.random() * sensors.length)],
      speed: Math.round(speed * 10) / 10,
      lane: Math.random() > 0.5 ? Lane.Left : Lane.Right,
      created_at: timestamp.toISOString()
    });
  }
  return data.sort((a, b) => new Date(a.created_at).getTime() - new Date(b.created_at).getTime());
}
const mockSpeedData = generateSpeedData(120);
const speedData = writable(mockSpeedData);
const isConnected = writable(true);
const isLoading = writable(false);
mockSpeedData.length;
const filteredData = derived([speedData, settings], ([$speedData, $settings]) => {
  return $speedData.filter((data) => {
    const sensorMatch = $settings.selectedSensors.length === 0 || $settings.selectedSensors.includes(data.sensor_name || "");
    const laneMatch = $settings.selectedLanes.includes(data.lane);
    const speedMatch = !$settings.enableAlerts || data.speed >= $settings.speedThresholdMin && data.speed <= $settings.speedThresholdMax;
    return sensorMatch && laneMatch && speedMatch;
  });
});
const availableSensors = derived(speedData, ($speedData) => {
  const sensorNames = $speedData.map((d) => d.sensor_name).filter((name) => name !== null && name !== void 0);
  return Array.from(new Set(sensorNames)).sort();
});
const stats = derived(filteredData, ($filteredData) => {
  if ($filteredData.length === 0) {
    return {
      avgSpeed: 0,
      maxSpeed: 0,
      minSpeed: 0,
      totalReadings: 0
    };
  }
  const speeds = $filteredData.map((d) => d.speed);
  const avgSpeed = speeds.reduce((a, b) => a + b, 0) / speeds.length;
  const maxSpeed = Math.max(...speeds);
  const minSpeed = Math.min(...speeds);
  const totalReadings = $filteredData.length;
  return {
    avgSpeed: Math.round(avgSpeed * 10) / 10,
    maxSpeed: Math.round(maxSpeed * 10) / 10,
    minSpeed: Math.round(minSpeed * 10) / 10,
    totalReadings
  };
});
function Card($$renderer, $$props) {
  let { class: className = "", children } = $$props;
  $$renderer.push(`<div${attr_class("bg-card text-card-foreground rounded-lg border shadow-sm " + className)}>`);
  children($$renderer);
  $$renderer.push(`<!----></div>`);
}
function Card_header($$renderer, $$props) {
  let { class: className = "", children } = $$props;
  $$renderer.push(`<header${attr_class(clsx(className))}>`);
  children($$renderer);
  $$renderer.push(`<!----></header>`);
}
function Card_title($$renderer, $$props) {
  let { class: className = "", children } = $$props;
  $$renderer.push(`<h3${attr_class(className + " text-lg leading-none font-semibold tracking-tight")}>`);
  children($$renderer);
  $$renderer.push(`<!----></h3>`);
}
function Card_content($$renderer, $$props) {
  let { class: className = "", children } = $$props;
  $$renderer.push(`<div${attr_class(clsx(className))}>`);
  children($$renderer);
  $$renderer.push(`<!----></div>`);
}
function Stat_card($$renderer, $$props) {
  let {
    class: className = "",
    title,
    value,
    subtitle,
    icon: Icon2,
    isNewRecord = false
  } = $$props;
  Card($$renderer, {
    class: className + " border-l-primary relative overflow-hidden border-l-4 transition-all duration-300 " + (isNewRecord ? "animate-new-record border-yellow-500 shadow-xl shadow-yellow-500/50" : ""),
    children: ($$renderer2) => {
      if (isNewRecord) {
        $$renderer2.push("<!--[-->");
        $$renderer2.push(`<div class="pointer-events-none absolute inset-0 animate-pulse bg-gradient-to-br from-yellow-500/20 via-orange-500/20 to-red-500/20"></div> <div class="absolute top-2 right-2 animate-bounce">`);
        Trophy($$renderer2, { class: "h-6 w-6 text-yellow-500 drop-shadow-lg" });
        $$renderer2.push(`<!----></div>`);
      } else {
        $$renderer2.push("<!--[!-->");
      }
      $$renderer2.push(`<!--]--> `);
      Card_header($$renderer2, {
        class: `flex flex-row items-center justify-between space-y-0 pb-2 ${stringify(isNewRecord ? "relative z-10" : "")}`,
        children: ($$renderer3) => {
          Card_title($$renderer3, {
            class: `text-sm font-medium ${stringify(isNewRecord ? "font-bold text-yellow-600 dark:text-yellow-400" : "")}`,
            children: ($$renderer4) => {
              $$renderer4.push(`<!---->${escape_html(title)}`);
            }
          });
          $$renderer3.push(`<!----> `);
          if (Icon2) {
            $$renderer3.push("<!--[-->");
            Icon2($$renderer3, {
              class: `text-muted-foreground h-4 w-4 transition-all ${stringify(isNewRecord ? "scale-125 text-yellow-500" : "")}`
            });
            $$renderer3.push("<!--]-->");
          } else {
            $$renderer3.push("<!--[!-->");
            $$renderer3.push("<!--]-->");
          }
        }
      });
      $$renderer2.push(`<!----> `);
      Card_content($$renderer2, {
        class: isNewRecord ? "relative z-10" : "",
        children: ($$renderer3) => {
          $$renderer3.push(`<div${attr_class(`text-2xl font-bold transition-all ${stringify(isNewRecord ? "scale-110 text-yellow-600 dark:text-yellow-400" : "")}`)}>${escape_html(value)}</div> `);
          if (subtitle) {
            $$renderer3.push("<!--[-->");
            $$renderer3.push(`<p${attr_class(`text-muted-foreground text-xs ${stringify(isNewRecord ? "font-semibold text-yellow-700 dark:text-yellow-300" : "")}`)}>${escape_html(isNewRecord ? "🎉 Nouveau record!" : subtitle)}</p>`);
          } else {
            $$renderer3.push("<!--[!-->");
          }
          $$renderer3.push(`<!--]-->`);
        }
      });
      $$renderer2.push(`<!---->`);
    }
  });
}
function Card_description($$renderer, $$props) {
  let { class: className = "", children } = $$props;
  $$renderer.push(`<p${attr_class(className + " text-muted-foreground text-sm")}>`);
  children($$renderer);
  $$renderer.push(`<!----></p>`);
}
function Echart($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { option, style = "height: 300px", class: className = "" } = $$props;
    let chart = null;
    onDestroy(() => {
      chart?.dispose();
      chart = null;
    });
    $$renderer2.push(`<div${attr_style(style)}${attr_class(clsx(className))}></div>`);
  });
}
function Speed_chart($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { data, title = "Vitesses en temps réel", description } = $$props;
    let processedData = derived$1(() => {
      const leftLaneData = data.filter((d) => d.lane === Lane.Left);
      const rightLaneData = data.filter((d) => d.lane === Lane.Right);
      const allTimestamps = Array.from(new Set(data.map((d) => d.created_at))).sort();
      const leftLaneMap = new Map(leftLaneData.map((d) => [d.created_at, d.speed]));
      const rightLaneMap = new Map(rightLaneData.map((d) => [d.created_at, d.speed]));
      const leftSpeeds = allTimestamps.map((ts) => leftLaneMap.get(ts) ?? null);
      const rightSpeeds = allTimestamps.map((ts) => rightLaneMap.get(ts) ?? null);
      const timestamps = allTimestamps.map((ts) => format(new Date(ts), "HH:mm"));
      return { leftSpeeds, rightSpeeds, timestamps };
    });
    let option = derived$1(() => ({
      tooltip: {
        trigger: "axis",
        axisPointer: { type: "cross" },
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        borderColor: "#333",
        textStyle: { color: "#fff" }
      },
      legend: {
        data: ["Voie gauche", "Voie droite"],
        textStyle: { color: "#999" },
        top: "0%"
      },
      grid: {
        left: "3%",
        right: "4%",
        bottom: "3%",
        top: "12%",
        containLabel: true
      },
      xAxis: {
        type: "category",
        boundaryGap: false,
        data: processedData().timestamps,
        axisLine: { lineStyle: { color: "#999" } }
      },
      yAxis: {
        type: "value",
        name: "Vitesse (km/h)",
        nameTextStyle: { color: "#999" },
        axisLine: { lineStyle: { color: "#999" } },
        splitLine: { lineStyle: { color: "#333", opacity: 0.3 } }
      },
      series: [
        {
          name: "Voie gauche",
          type: "line",
          smooth: true,
          symbol: "circle",
          symbolSize: 5,
          sampling: "lttb",
          connectNulls: false,
          itemStyle: { color: "#3b82f6" },
          lineStyle: { width: 2 },
          areaStyle: {
            color: {
              type: "linear",
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [
                { offset: 0, color: "rgba(59, 130, 246, 0.3)" },
                { offset: 1, color: "rgba(59, 130, 246, 0.05)" }
              ]
            }
          },
          data: processedData().leftSpeeds
        },
        {
          name: "Voie droite",
          type: "line",
          smooth: true,
          symbol: "circle",
          symbolSize: 5,
          sampling: "lttb",
          connectNulls: false,
          itemStyle: { color: "#f97316" },
          lineStyle: { width: 2 },
          areaStyle: {
            color: {
              type: "linear",
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [
                { offset: 0, color: "rgba(249, 115, 22, 0.3)" },
                { offset: 1, color: "rgba(249, 115, 22, 0.05)" }
              ]
            }
          },
          data: processedData().rightSpeeds
        }
      ]
    }));
    Card($$renderer2, {
      children: ($$renderer3) => {
        Card_header($$renderer3, {
          children: ($$renderer4) => {
            Card_title($$renderer4, {
              children: ($$renderer5) => {
                $$renderer5.push(`<!---->${escape_html(title)}`);
              }
            });
            $$renderer4.push(`<!----> `);
            if (description) {
              $$renderer4.push("<!--[-->");
              Card_description($$renderer4, {
                children: ($$renderer5) => {
                  $$renderer5.push(`<!---->${escape_html(description)}`);
                }
              });
            } else {
              $$renderer4.push("<!--[!-->");
            }
            $$renderer4.push(`<!--]-->`);
          }
        });
        $$renderer3.push(`<!----> `);
        Card_content($$renderer3, {
          children: ($$renderer4) => {
            if (data.length === 0) {
              $$renderer4.push("<!--[-->");
              $$renderer4.push(`<div class="text-muted-foreground flex h-[300px] items-center justify-center">Aucune donnée disponible</div>`);
            } else {
              $$renderer4.push("<!--[!-->");
              Echart($$renderer4, { option: option(), style: "height: 300px" });
            }
            $$renderer4.push(`<!--]-->`);
          }
        });
        $$renderer3.push(`<!---->`);
      }
    });
  });
}
function Lane_distribution($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { data } = $$props;
    let processedData = derived$1(() => {
      const leftCount = data.filter((d) => d.lane === Lane.Left).length;
      const rightCount = data.filter((d) => d.lane === Lane.Right).length;
      return { leftCount, rightCount };
    });
    let option = derived$1(() => ({
      tooltip: {
        trigger: "item",
        formatter: "{b}: {c} ({d}%)",
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        borderColor: "#333",
        textStyle: { color: "#fff" }
      },
      legend: {
        orient: "vertical",
        left: "left",
        textStyle: { color: "#666" }
      },
      series: [
        {
          name: "Voies",
          type: "pie",
          radius: ["40%", "70%"],
          avoidLabelOverlap: false,
          itemStyle: { borderRadius: 10, borderColor: "#fff", borderWidth: 2 },
          label: { show: true, formatter: "{b}\n{d}%", color: "#333" },
          emphasis: { label: { show: true, fontSize: 16, fontWeight: "bold" } },
          data: [
            {
              value: processedData().leftCount,
              name: "Voie gauche",
              itemStyle: { color: "#3b82f6" }
            },
            {
              value: processedData().rightCount,
              name: "Voie droite",
              itemStyle: { color: "#f97316" }
            }
          ]
        }
      ]
    }));
    Card($$renderer2, {
      children: ($$renderer3) => {
        Card_header($$renderer3, {
          children: ($$renderer4) => {
            Card_title($$renderer4, {
              children: ($$renderer5) => {
                $$renderer5.push(`<!---->Répartition par voie`);
              }
            });
            $$renderer4.push(`<!----> `);
            Card_description($$renderer4, {
              children: ($$renderer5) => {
                $$renderer5.push(`<!---->Distribution des passages par voie`);
              }
            });
            $$renderer4.push(`<!---->`);
          }
        });
        $$renderer3.push(`<!----> `);
        Card_content($$renderer3, {
          children: ($$renderer4) => {
            if (data.length === 0) {
              $$renderer4.push("<!--[-->");
              $$renderer4.push(`<div class="text-muted-foreground flex h-[300px] items-center justify-center">Aucune donnée disponible</div>`);
            } else {
              $$renderer4.push("<!--[!-->");
              Echart($$renderer4, { option: option(), style: "height: 300px" });
            }
            $$renderer4.push(`<!--]-->`);
          }
        });
        $$renderer3.push(`<!---->`);
      }
    });
  });
}
function Sensor_stats($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { data } = $$props;
    let processedData = derived$1(() => {
      const sensorData = data.reduce(
        (acc, curr) => {
          const sensorName = curr.sensor_name || "Unknown";
          if (!acc[sensorName]) acc[sensorName] = { speeds: [], count: 0 };
          acc[sensorName].speeds.push(curr.speed);
          acc[sensorName].count++;
          return acc;
        },
        {}
      );
      const sensors2 = Object.keys(sensorData);
      const avgSpeeds = sensors2.map((sensor) => Math.round(sensorData[sensor].speeds.reduce((a, b) => a + b, 0) / sensorData[sensor].speeds.length * 10) / 10);
      return { sensorData, sensors: sensors2, avgSpeeds };
    });
    let option = derived$1(() => ({
      tooltip: {
        trigger: "axis",
        axisPointer: { type: "shadow" },
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        borderColor: "#333",
        textStyle: { color: "#fff" },
        formatter: (params) => {
          const sensor = params[0].name;
          const avgSpeed = params[0].value;
          const count = processedData().sensorData[sensor]?.count ?? 0;
          return `${sensor}<br/>Vitesse moyenne: ${avgSpeed} km/h<br/>Passages: ${count}`;
        }
      },
      grid: {
        left: "3%",
        right: "4%",
        bottom: "3%",
        top: "10%",
        containLabel: true
      },
      xAxis: {
        type: "category",
        data: processedData().sensors,
        axisLabel: { rotate: 45, color: "#666" },
        axisLine: { lineStyle: { color: "#999" } }
      },
      yAxis: {
        type: "value",
        name: "Vitesse moy. (km/h)",
        nameTextStyle: { color: "#999" },
        axisLine: { lineStyle: { color: "#999" } },
        splitLine: { lineStyle: { color: "#333", opacity: 0.3 } }
      },
      series: [
        {
          name: "Vitesse moyenne",
          type: "bar",
          data: processedData().avgSpeeds,
          itemStyle: {
            color: {
              type: "linear",
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [
                { offset: 0, color: "#dc2626" },
                { offset: 1, color: "#ea580c" }
              ]
            },
            borderRadius: [4, 4, 0, 0]
          }
        }
      ]
    }));
    Card($$renderer2, {
      children: ($$renderer3) => {
        Card_header($$renderer3, {
          children: ($$renderer4) => {
            Card_title($$renderer4, {
              children: ($$renderer5) => {
                $$renderer5.push(`<!---->Statistiques par capteur`);
              }
            });
            $$renderer4.push(`<!----> `);
            Card_description($$renderer4, {
              children: ($$renderer5) => {
                $$renderer5.push(`<!---->Vitesse moyenne par point de mesure`);
              }
            });
            $$renderer4.push(`<!---->`);
          }
        });
        $$renderer3.push(`<!----> `);
        Card_content($$renderer3, {
          children: ($$renderer4) => {
            if (data.length === 0) {
              $$renderer4.push("<!--[-->");
              $$renderer4.push(`<div class="text-muted-foreground flex h-[300px] items-center justify-center">Aucune donnée disponible</div>`);
            } else {
              $$renderer4.push("<!--[!-->");
              Echart($$renderer4, { option: option(), style: "height: 300px" });
            }
            $$renderer4.push(`<!--]-->`);
          }
        });
        $$renderer3.push(`<!---->`);
      }
    });
  });
}
function Hourly_trend($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { data } = $$props;
    let processedData = derived$1(() => {
      const hourlyData = data.reduce(
        (acc, curr) => {
          const hour = format(new Date(curr.created_at), "HH:00");
          if (!acc[hour]) acc[hour] = { speeds: [], count: 0 };
          acc[hour].speeds.push(curr.speed);
          acc[hour].count += 1;
          return acc;
        },
        {}
      );
      const hours = Object.keys(hourlyData).sort();
      const avgSpeeds = hours.map((hour) => {
        const speeds = hourlyData[hour].speeds;
        return Math.round(speeds.reduce((a, b) => a + b, 0) / speeds.length * 10) / 10;
      });
      const counts = hours.map((hour) => hourlyData[hour].count);
      return { hours, avgSpeeds, counts };
    });
    let option = derived$1(() => ({
      tooltip: {
        trigger: "axis",
        axisPointer: { type: "cross" },
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        borderColor: "#333",
        textStyle: { color: "#fff" }
      },
      legend: {
        data: ["Vitesse moyenne", "Nombre de passages"],
        textStyle: { color: "#999" },
        top: "0%"
      },
      grid: {
        left: "3%",
        right: "4%",
        bottom: "3%",
        top: "12%",
        containLabel: true
      },
      xAxis: {
        type: "category",
        data: processedData().hours,
        axisLabel: { color: "#999" },
        axisLine: { lineStyle: { color: "#999" } }
      },
      yAxis: [
        {
          type: "value",
          name: "Vitesse (km/h)",
          position: "left",
          nameTextStyle: { color: "#999" },
          axisLine: { lineStyle: { color: "#999" } },
          axisLabel: { color: "#999" },
          splitLine: { lineStyle: { color: "#333", opacity: 0.3 } }
        },
        {
          type: "value",
          name: "Passages",
          position: "right",
          nameTextStyle: { color: "#999" },
          axisLine: { lineStyle: { color: "#999" } },
          axisLabel: { color: "#999" },
          splitLine: { show: false }
        }
      ],
      series: [
        {
          name: "Vitesse moyenne",
          type: "line",
          yAxisIndex: 0,
          data: processedData().avgSpeeds,
          smooth: true,
          itemStyle: { color: "#ec4899" },
          lineStyle: { width: 3 },
          symbol: "circle",
          symbolSize: 8,
          areaStyle: {
            color: {
              type: "linear",
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [
                { offset: 0, color: "rgba(236, 72, 153, 0.3)" },
                { offset: 1, color: "rgba(236, 72, 153, 0.05)" }
              ]
            }
          }
        },
        {
          name: "Nombre de passages",
          type: "bar",
          yAxisIndex: 1,
          data: processedData().counts,
          itemStyle: { color: "rgba(99, 102, 241, 0.6)", borderRadius: [4, 4, 0, 0] }
        }
      ]
    }));
    Card($$renderer2, {
      children: ($$renderer3) => {
        Card_header($$renderer3, {
          children: ($$renderer4) => {
            Card_title($$renderer4, {
              children: ($$renderer5) => {
                $$renderer5.push(`<!---->Tendance horaire`);
              }
            });
            $$renderer4.push(`<!----> `);
            Card_description($$renderer4, {
              children: ($$renderer5) => {
                $$renderer5.push(`<!---->Vitesse moyenne et volume d'activité par heure`);
              }
            });
            $$renderer4.push(`<!---->`);
          }
        });
        $$renderer3.push(`<!----> `);
        Card_content($$renderer3, {
          children: ($$renderer4) => {
            if (data.length === 0) {
              $$renderer4.push("<!--[-->");
              $$renderer4.push(`<div class="text-muted-foreground flex h-[350px] items-center justify-center">Aucune donnée disponible</div>`);
            } else {
              $$renderer4.push("<!--[!-->");
              Echart($$renderer4, { option: option(), style: "height: 350px" });
            }
            $$renderer4.push(`<!--]-->`);
          }
        });
        $$renderer3.push(`<!---->`);
      }
    });
  });
}
function Speed_records($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { data } = $$props;
    let filterIdValue = "";
    let filterSensorValue = "";
    let filterSpeedValue = "";
    let filterLaneValue = "";
    let filterDateValue = "";
    let currentPage = 1;
    let itemsPerPage = 20;
    let colWidthId = 60;
    let colWidthSensor = 200;
    let colWidthSpeed = 120;
    let colWidthLane = 100;
    let colWidthDate = 180;
    let hasActiveFilters = derived$1(() => filterDateValue !== "");
    let filteredAndSortedData = derived$1(() => {
      let filtered = [...data];
      return filtered;
    });
    let totalPages = derived$1(() => Math.ceil(filteredAndSortedData().length / itemsPerPage));
    let paginatedData = derived$1(() => filteredAndSortedData().slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage));
    Card($$renderer2, {
      children: ($$renderer3) => {
        Card_header($$renderer3, {
          children: ($$renderer4) => {
            $$renderer4.push(`<div class="flex items-center justify-between"><div>`);
            Card_title($$renderer4, {
              class: "flex items-center gap-2",
              children: ($$renderer5) => {
                Trophy($$renderer5, { class: "h-5 w-5 text-yellow-500" });
                $$renderer5.push(`<!----> Enregistrements de vitesse`);
              }
            });
            $$renderer4.push(`<!----> `);
            Card_description($$renderer4, {
              children: ($$renderer5) => {
                $$renderer5.push(`<!---->${escape_html(filteredAndSortedData().length)} enregistrement${escape_html(filteredAndSortedData().length > 1 ? "s" : "")} trouvé${escape_html(filteredAndSortedData().length > 1 ? "s" : "")}`);
              }
            });
            $$renderer4.push(`<!----></div> `);
            if (hasActiveFilters()) {
              $$renderer4.push("<!--[-->");
              $$renderer4.push(`<button class="hover:bg-accent flex items-center gap-1 rounded-md border px-3 py-1.5 text-sm">`);
              X($$renderer4, { class: "h-4 w-4" });
              $$renderer4.push(`<!----> Effacer les filtres</button>`);
            } else {
              $$renderer4.push("<!--[!-->");
            }
            $$renderer4.push(`<!--]--></div>`);
          }
        });
        $$renderer3.push(`<!----> `);
        Card_content($$renderer3, {
          children: ($$renderer4) => {
            if (data.length === 0) {
              $$renderer4.push("<!--[-->");
              $$renderer4.push(`<div class="text-muted-foreground flex h-[300px] items-center justify-center">Aucune donnée disponible</div>`);
            } else {
              $$renderer4.push("<!--[!-->");
              $$renderer4.push(`<div class="overflow-x-auto rounded-md border"><table class="w-full text-sm"><thead><tr class="border-b"><th${attr_style(`width:${stringify(colWidthId)}px`)} class="relative p-0"><button class="hover:bg-muted flex h-9 w-full items-center justify-start gap-1 px-3 text-left text-xs font-medium">ID `);
              {
                $$renderer4.push("<!--[-->");
                Arrow_up_down($$renderer4, { class: "h-3 w-3" });
              }
              $$renderer4.push(`<!--]--></button> <div class="hover:bg-primary/50 active:bg-primary group absolute top-0 right-0 flex h-full w-2 cursor-col-resize items-center justify-center">`);
              Grip_vertical($$renderer4, {
                class: "text-muted-foreground h-4 w-4 opacity-0 transition-opacity group-hover:opacity-100"
              });
              $$renderer4.push(`<!----></div></th><th${attr_style(`width:${stringify(colWidthSensor)}px`)} class="relative p-0"><button class="hover:bg-muted flex h-9 w-full items-center justify-start gap-1 px-3 text-left text-xs font-medium">Capteur `);
              {
                $$renderer4.push("<!--[-->");
                Arrow_up_down($$renderer4, { class: "h-3 w-3" });
              }
              $$renderer4.push(`<!--]--></button> <div class="hover:bg-primary/50 active:bg-primary group absolute top-0 right-0 flex h-full w-2 cursor-col-resize items-center justify-center">`);
              Grip_vertical($$renderer4, {
                class: "text-muted-foreground h-4 w-4 opacity-0 transition-opacity group-hover:opacity-100"
              });
              $$renderer4.push(`<!----></div></th><th${attr_style(`width:${stringify(colWidthSpeed)}px`)} class="relative p-0"><button class="hover:bg-muted flex h-9 w-full items-center justify-start gap-1 px-3 text-left text-xs font-medium">Vitesse `);
              {
                $$renderer4.push("<!--[-->");
                Arrow_up_down($$renderer4, { class: "h-3 w-3" });
              }
              $$renderer4.push(`<!--]--></button> <div class="hover:bg-primary/50 active:bg-primary group absolute top-0 right-0 flex h-full w-2 cursor-col-resize items-center justify-center">`);
              Grip_vertical($$renderer4, {
                class: "text-muted-foreground h-4 w-4 opacity-0 transition-opacity group-hover:opacity-100"
              });
              $$renderer4.push(`<!----></div></th><th${attr_style(`width:${stringify(colWidthLane)}px`)} class="relative p-0"><button class="hover:bg-muted flex h-9 w-full items-center justify-start gap-1 px-3 text-left text-xs font-medium">Voie `);
              {
                $$renderer4.push("<!--[-->");
                Arrow_up_down($$renderer4, { class: "h-3 w-3" });
              }
              $$renderer4.push(`<!--]--></button> <div class="hover:bg-primary/50 active:bg-primary group absolute top-0 right-0 flex h-full w-2 cursor-col-resize items-center justify-center">`);
              Grip_vertical($$renderer4, {
                class: "text-muted-foreground h-4 w-4 opacity-0 transition-opacity group-hover:opacity-100"
              });
              $$renderer4.push(`<!----></div></th><th${attr_style(`width:${stringify(colWidthDate)}px`)} class="relative p-0"><button class="hover:bg-muted flex h-9 w-full items-center justify-start gap-1 px-3 text-left text-xs font-medium">Date &amp; Heure `);
              {
                $$renderer4.push("<!--[-->");
                Arrow_up_down($$renderer4, { class: "h-3 w-3" });
              }
              $$renderer4.push(`<!--]--></button> <div class="hover:bg-primary/50 active:bg-primary group absolute top-0 right-0 flex h-full w-2 cursor-col-resize items-center justify-center">`);
              Grip_vertical($$renderer4, {
                class: "text-muted-foreground h-4 w-4 opacity-0 transition-opacity group-hover:opacity-100"
              });
              $$renderer4.push(`<!----></div></th></tr><tr class="border-b"><th${attr_style(`width:${stringify(colWidthId)}px`)} class="p-1"><div class="relative">`);
              Search($$renderer4, { class: "text-muted-foreground absolute top-2 left-2 h-3 w-3" });
              $$renderer4.push(`<!----> <input class="bg-background h-7 w-full rounded border pl-7 text-xs" placeholder="ID..."${attr("value", filterIdValue)}/></div></th><th${attr_style(`width:${stringify(colWidthSensor)}px`)} class="p-1"><div class="relative">`);
              Search($$renderer4, { class: "text-muted-foreground absolute top-2 left-2 h-3 w-3" });
              $$renderer4.push(`<!----> <input class="bg-background h-7 w-full rounded border pl-7 text-xs" placeholder="Rechercher..."${attr("value", filterSensorValue)}/></div></th><th${attr_style(`width:${stringify(colWidthSpeed)}px`)} class="p-1"><div class="relative">`);
              Search($$renderer4, { class: "text-muted-foreground absolute top-2 left-2 h-3 w-3" });
              $$renderer4.push(`<!----> <input class="bg-background h-7 w-full rounded border pl-7 text-xs" placeholder="Vitesse..."${attr("value", filterSpeedValue)}/></div></th><th${attr_style(`width:${stringify(colWidthLane)}px`)} class="p-1"><div class="relative">`);
              Search($$renderer4, { class: "text-muted-foreground absolute top-2 left-2 h-3 w-3" });
              $$renderer4.push(`<!----> <input class="bg-background h-7 w-full rounded border pl-7 text-xs" placeholder="Voie..."${attr("value", filterLaneValue)}/></div></th><th${attr_style(`width:${stringify(colWidthDate)}px`)} class="p-1"><div class="relative">`);
              Search($$renderer4, { class: "text-muted-foreground absolute top-2 left-2 h-3 w-3" });
              $$renderer4.push(`<!----> <input class="bg-background h-7 w-full rounded border pl-7 text-xs" placeholder="Date..."${attr("value", filterDateValue)}/></div></th></tr></thead><tbody>`);
              if (paginatedData().length === 0) {
                $$renderer4.push("<!--[-->");
                $$renderer4.push(`<tr><td colspan="5" class="text-muted-foreground h-24 text-center">Aucun résultat trouvé</td></tr>`);
              } else {
                $$renderer4.push("<!--[!-->");
                $$renderer4.push(`<!--[-->`);
                const each_array = ensure_array_like(paginatedData());
                for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
                  let record = each_array[$$index];
                  $$renderer4.push(`<tr class="hover:bg-muted/50 border-b transition-colors"><td${attr_style(`width:${stringify(colWidthId)}px`)} class="px-3 py-2 font-mono text-sm">${escape_html(record.id)}</td><td${attr_style(`width:${stringify(colWidthSensor)}px`)} class="px-3 py-2">${escape_html(record.sensor_name || "Unknown")}</td><td${attr_style(`width:${stringify(colWidthSpeed)}px`)} class="px-3 py-2"><span class="font-semibold">${escape_html(record.speed)} km/h</span></td><td${attr_style(`width:${stringify(colWidthLane)}px`)} class="px-3 py-2"><span${attr_class(`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ${stringify(record.lane === Lane.Left ? "border-transparent bg-primary text-primary-foreground" : "border-transparent bg-secondary text-secondary-foreground")}`)}>${escape_html(record.lane === Lane.Left ? "Gauche" : "Droite")}</span></td><td${attr_style(`width:${stringify(colWidthDate)}px`)} class="text-muted-foreground px-3 py-2 text-sm">${escape_html(format(new Date(record.created_at), "dd/MM/yyyy HH:mm:ss"))}</td></tr>`);
                }
                $$renderer4.push(`<!--]-->`);
              }
              $$renderer4.push(`<!--]--></tbody></table></div> <div class="mt-4 flex items-center justify-between"><div class="flex items-center gap-4"><div class="flex items-center gap-2"><span class="text-muted-foreground text-sm">Lignes par page:</span> `);
              $$renderer4.select(
                {
                  class: "bg-background h-8 rounded border px-2 text-sm",
                  value: itemsPerPage,
                  onchange: () => currentPage = 1
                },
                ($$renderer5) => {
                  $$renderer5.option({ value: 10 }, ($$renderer6) => {
                    $$renderer6.push(`10`);
                  });
                  $$renderer5.option({ value: 20 }, ($$renderer6) => {
                    $$renderer6.push(`20`);
                  });
                  $$renderer5.option({ value: 50 }, ($$renderer6) => {
                    $$renderer6.push(`50`);
                  });
                  $$renderer5.option({ value: 100 }, ($$renderer6) => {
                    $$renderer6.push(`100`);
                  });
                }
              );
              $$renderer4.push(`</div> <div class="text-muted-foreground text-sm">${escape_html(totalPages() > 0 ? `Page ${currentPage} sur ${totalPages()}` : "Aucune page")}</div></div> `);
              if (totalPages() > 1) {
                $$renderer4.push("<!--[-->");
                $$renderer4.push(`<div class="flex gap-2"><button class="hover:bg-accent rounded-md border px-3 py-1.5 text-sm disabled:opacity-50"${attr("disabled", currentPage === 1, true)}>Précédent</button> <button class="hover:bg-accent rounded-md border px-3 py-1.5 text-sm disabled:opacity-50"${attr("disabled", currentPage === totalPages(), true)}>Suivant</button></div>`);
              } else {
                $$renderer4.push("<!--[!-->");
              }
              $$renderer4.push(`<!--]--></div>`);
            }
            $$renderer4.push(`<!--]-->`);
          }
        });
        $$renderer3.push(`<!---->`);
      }
    });
  });
}
function Speed_distribution($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { data } = $$props;
    const binSize = 25;
    let processedData = derived$1(() => {
      const minSpeed = 0;
      const maxSpeed = 400;
      const bins = {};
      for (let i = minSpeed; i < maxSpeed; i += binSize) {
        bins[`${i}-${i + binSize}`] = 0;
      }
      data.forEach((d) => {
        const binIndex = Math.floor(d.speed / binSize) * binSize;
        const rangeLabel = `${binIndex}-${binIndex + binSize}`;
        if (bins[rangeLabel] !== void 0) bins[rangeLabel] += 1;
      });
      return { labels: Object.keys(bins), values: Object.values(bins) };
    });
    let option = derived$1(() => ({
      tooltip: {
        trigger: "axis",
        axisPointer: { type: "shadow" },
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        borderColor: "#333",
        textStyle: { color: "#fff" },
        formatter: (params) => `${params[0].axisValue} km/h<br/>Nombre de passages: ${params[0].value}`
      },
      grid: {
        left: "3%",
        right: "4%",
        bottom: "3%",
        top: "3%",
        containLabel: true
      },
      xAxis: {
        type: "category",
        data: processedData().labels,
        axisLabel: { rotate: 45, color: "#999", fontSize: 11 },
        axisLine: { lineStyle: { color: "#999" } }
      },
      yAxis: {
        type: "value",
        name: "Nombre",
        nameTextStyle: { color: "#999" },
        axisLine: { lineStyle: { color: "#999" } },
        splitLine: { lineStyle: { color: "#333", opacity: 0.3 } }
      },
      series: [
        {
          name: "Distribution",
          type: "bar",
          data: processedData().values,
          itemStyle: {
            color: {
              type: "linear",
              x: 0,
              y: 0,
              x2: 1,
              y2: 0,
              colorStops: [
                { offset: 0, color: "#10b981" },
                { offset: 1, color: "#14b8a6" }
              ]
            },
            borderRadius: [4, 4, 0, 0]
          }
        }
      ]
    }));
    Card($$renderer2, {
      children: ($$renderer3) => {
        Card_header($$renderer3, {
          children: ($$renderer4) => {
            Card_title($$renderer4, {
              children: ($$renderer5) => {
                $$renderer5.push(`<!---->Distribution des vitesses`);
              }
            });
            $$renderer4.push(`<!----> `);
            Card_description($$renderer4, {
              children: ($$renderer5) => {
                $$renderer5.push(`<!---->Répartition des vitesses par plages de 25 km/h`);
              }
            });
            $$renderer4.push(`<!---->`);
          }
        });
        $$renderer3.push(`<!----> `);
        Card_content($$renderer3, {
          children: ($$renderer4) => {
            if (data.length === 0) {
              $$renderer4.push("<!--[-->");
              $$renderer4.push(`<div class="text-muted-foreground flex h-[300px] items-center justify-center">Aucune donnée disponible</div>`);
            } else {
              $$renderer4.push("<!--[!-->");
              Echart($$renderer4, { option: option(), style: "height: 300px" });
            }
            $$renderer4.push(`<!--]-->`);
          }
        });
        $$renderer3.push(`<!---->`);
      }
    });
  });
}
function Average_speed_by_sensor($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { data } = $$props;
    let processedData = derived$1(() => {
      const sensorStats = data.reduce(
        (acc, curr) => {
          const sensor = curr.sensor_name || "Unknown";
          if (!acc[sensor]) acc[sensor] = { total: 0, count: 0 };
          acc[sensor].total += curr.speed;
          acc[sensor].count += 1;
          return acc;
        },
        {}
      );
      const sensorNames = Object.keys(sensorStats);
      const averageSpeeds = sensorNames.map((sensor) => Math.round(sensorStats[sensor].total / sensorStats[sensor].count * 10) / 10);
      return { sensorNames, averageSpeeds };
    });
    let option = derived$1(() => ({
      tooltip: {
        trigger: "axis",
        axisPointer: { type: "shadow" },
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        borderColor: "#333",
        textStyle: { color: "#fff" },
        formatter: (params) => `${params[0].axisValue}<br/>Vitesse moyenne: ${params[0].value} km/h`
      },
      grid: {
        left: "3%",
        right: "4%",
        bottom: "3%",
        top: "3%",
        containLabel: true
      },
      xAxis: {
        type: "category",
        data: processedData().sensorNames,
        axisLabel: { rotate: 45, color: "#999", fontSize: 11 },
        axisLine: { lineStyle: { color: "#999" } }
      },
      yAxis: {
        type: "value",
        name: "Vitesse (km/h)",
        nameTextStyle: { color: "#999" },
        axisLine: { lineStyle: { color: "#999" } },
        splitLine: { lineStyle: { color: "#333", opacity: 0.3 } }
      },
      series: [
        {
          name: "Vitesse moyenne",
          type: "bar",
          data: processedData().averageSpeeds,
          itemStyle: {
            color: {
              type: "linear",
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [
                { offset: 0, color: "#8b5cf6" },
                { offset: 1, color: "#6366f1" }
              ]
            },
            borderRadius: [4, 4, 0, 0]
          },
          label: {
            show: true,
            position: "top",
            formatter: "{c} km/h",
            color: "#999",
            fontSize: 10
          }
        }
      ]
    }));
    Card($$renderer2, {
      children: ($$renderer3) => {
        Card_header($$renderer3, {
          children: ($$renderer4) => {
            Card_title($$renderer4, {
              children: ($$renderer5) => {
                $$renderer5.push(`<!---->Vitesse moyenne par capteur`);
              }
            });
            $$renderer4.push(`<!----> `);
            Card_description($$renderer4, {
              children: ($$renderer5) => {
                $$renderer5.push(`<!---->Comparaison des performances sur chaque secteur`);
              }
            });
            $$renderer4.push(`<!---->`);
          }
        });
        $$renderer3.push(`<!----> `);
        Card_content($$renderer3, {
          children: ($$renderer4) => {
            if (data.length === 0) {
              $$renderer4.push("<!--[-->");
              $$renderer4.push(`<div class="text-muted-foreground flex h-[350px] items-center justify-center">Aucune donnée disponible</div>`);
            } else {
              $$renderer4.push("<!--[!-->");
              Echart($$renderer4, { option: option(), style: "height: 350px" });
            }
            $$renderer4.push(`<!--]-->`);
          }
        });
        $$renderer3.push(`<!---->`);
      }
    });
  });
}
function Activity_heatmap($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { data } = $$props;
    let processedData = derived$1(() => {
      const sensors2 = Array.from(new Set(data.map((d) => d.sensor_name || "Unknown")));
      const hours = Array.from(new Set(data.map((d) => format(new Date(d.created_at), "HH:00")))).sort();
      const activityMap = {};
      sensors2.forEach((sensor) => {
        activityMap[sensor] = {};
        hours.forEach((hour) => activityMap[sensor][hour] = 0);
      });
      data.forEach((d) => {
        const sensor = d.sensor_name || "Unknown";
        const hour = format(new Date(d.created_at), "HH:00");
        if (activityMap[sensor] && activityMap[sensor][hour] !== void 0) {
          activityMap[sensor][hour] += 1;
        }
      });
      const heatmapData = [];
      hours.forEach((hour, hourIdx) => {
        sensors2.forEach((sensor, sensorIdx) => {
          heatmapData.push([hourIdx, sensorIdx, activityMap[sensor][hour] || 0]);
        });
      });
      const maxValue = Math.max(...heatmapData.map((d) => d[2]), 1);
      return { sensors: sensors2, hours, heatmapData, maxValue };
    });
    let option = derived$1(() => ({
      tooltip: {
        position: "top",
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        borderColor: "#333",
        textStyle: { color: "#fff" },
        formatter: (params) => {
          const hour = processedData().hours[params.data[0]];
          const sensor = processedData().sensors[params.data[1]];
          const value = params.data[2];
          return `${sensor}<br/>${hour}<br/>Passages: ${value}`;
        }
      },
      grid: {
        left: "15%",
        right: "4%",
        bottom: "15%",
        top: "3%",
        containLabel: false
      },
      xAxis: {
        type: "category",
        data: processedData().hours,
        splitArea: { show: true },
        axisLabel: { color: "#999", fontSize: 11 },
        axisLine: { lineStyle: { color: "#999" } }
      },
      yAxis: {
        type: "category",
        data: processedData().sensors,
        splitArea: { show: true },
        axisLabel: { color: "#999", fontSize: 11 },
        axisLine: { lineStyle: { color: "#999" } }
      },
      visualMap: {
        min: 0,
        max: processedData().maxValue,
        calculable: true,
        orient: "horizontal",
        left: "center",
        bottom: "0%",
        textStyle: { color: "#999" },
        inRange: {
          color: [
            "#313695",
            "#4575b4",
            "#74add1",
            "#abd9e9",
            "#e0f3f8",
            "#ffffbf",
            "#fee090",
            "#fdae61",
            "#f46d43",
            "#d73027",
            "#a50026"
          ]
        }
      },
      series: [
        {
          name: "Activité",
          type: "heatmap",
          data: processedData().heatmapData,
          label: { show: false },
          emphasis: {
            itemStyle: { shadowBlur: 10, shadowColor: "rgba(0, 0, 0, 0.5)" }
          }
        }
      ]
    }));
    Card($$renderer2, {
      children: ($$renderer3) => {
        Card_header($$renderer3, {
          children: ($$renderer4) => {
            Card_title($$renderer4, {
              children: ($$renderer5) => {
                $$renderer5.push(`<!---->Heatmap d'activité`);
              }
            });
            $$renderer4.push(`<!----> `);
            Card_description($$renderer4, {
              children: ($$renderer5) => {
                $$renderer5.push(`<!---->Densité de passages par capteur et par heure`);
              }
            });
            $$renderer4.push(`<!---->`);
          }
        });
        $$renderer3.push(`<!----> `);
        Card_content($$renderer3, {
          children: ($$renderer4) => {
            if (data.length === 0) {
              $$renderer4.push("<!--[-->");
              $$renderer4.push(`<div class="text-muted-foreground flex h-[400px] items-center justify-center">Aucune donnée disponible</div>`);
            } else {
              $$renderer4.push("<!--[!-->");
              Echart($$renderer4, { option: option(), style: "height: 400px" });
            }
            $$renderer4.push(`<!--]-->`);
          }
        });
        $$renderer3.push(`<!---->`);
      }
    });
  });
}
function Lane_performance($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { data } = $$props;
    let processedData = derived$1(() => {
      const leftLaneData = data.filter((d) => d.lane === Lane.Left);
      const rightLaneData = data.filter((d) => d.lane === Lane.Right);
      const calculateStats = (laneData) => {
        if (laneData.length === 0) return { avg: 0, max: 0, min: 0, count: 0 };
        const speeds = laneData.map((d) => d.speed);
        return {
          avg: Math.round(speeds.reduce((a, b) => a + b, 0) / speeds.length * 10) / 10,
          max: Math.max(...speeds),
          min: Math.min(...speeds),
          count: laneData.length
        };
      };
      return {
        leftStats: calculateStats(leftLaneData),
        rightStats: calculateStats(rightLaneData)
      };
    });
    let option = derived$1(() => ({
      tooltip: {
        trigger: "axis",
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        borderColor: "#333",
        textStyle: { color: "#fff" },
        axisPointer: { type: "shadow" }
      },
      legend: {
        data: ["Corridor Gauche", "Corridor Droit"],
        textStyle: { color: "#999" },
        top: "0%"
      },
      grid: {
        left: "3%",
        right: "4%",
        bottom: "3%",
        top: "15%",
        containLabel: true
      },
      xAxis: {
        type: "category",
        data: [
          "Vitesse Moyenne",
          "Vitesse Max",
          "Vitesse Min",
          "Nombre de Passages"
        ],
        axisLabel: { color: "#999", interval: 0, rotate: 15 },
        axisLine: { lineStyle: { color: "#999" } }
      },
      yAxis: {
        type: "value",
        axisLabel: { color: "#999" },
        axisLine: { lineStyle: { color: "#999" } },
        splitLine: { lineStyle: { color: "#333", opacity: 0.3 } }
      },
      series: [
        {
          name: "Corridor Gauche",
          type: "bar",
          data: [
            processedData().leftStats.avg,
            processedData().leftStats.max,
            processedData().leftStats.min,
            processedData().leftStats.count
          ],
          itemStyle: {
            color: {
              type: "linear",
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [
                { offset: 0, color: "#3b82f6" },
                { offset: 1, color: "#1d4ed8" }
              ]
            },
            borderRadius: [4, 4, 0, 0]
          },
          barWidth: "40%"
        },
        {
          name: "Corridor Droit",
          type: "bar",
          data: [
            processedData().rightStats.avg,
            processedData().rightStats.max,
            processedData().rightStats.min,
            processedData().rightStats.count
          ],
          itemStyle: {
            color: {
              type: "linear",
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [
                { offset: 0, color: "#ec4899" },
                { offset: 1, color: "#be185d" }
              ]
            },
            borderRadius: [4, 4, 0, 0]
          },
          barWidth: "40%"
        }
      ]
    }));
    Card($$renderer2, {
      children: ($$renderer3) => {
        Card_header($$renderer3, {
          children: ($$renderer4) => {
            Card_title($$renderer4, {
              class: "flex items-center gap-2",
              children: ($$renderer5) => {
                Arrow_left_right($$renderer5, { class: "text-primary h-5 w-5" });
                $$renderer5.push(`<!----> Comparaison des corridors`);
              }
            });
            $$renderer4.push(`<!----> `);
            Card_description($$renderer4, {
              children: ($$renderer5) => {
                $$renderer5.push(`<!---->Performance comparative entre corridors gauche et droit`);
              }
            });
            $$renderer4.push(`<!---->`);
          }
        });
        $$renderer3.push(`<!----> `);
        Card_content($$renderer3, {
          children: ($$renderer4) => {
            if (data.length === 0) {
              $$renderer4.push("<!--[-->");
              $$renderer4.push(`<div class="text-muted-foreground flex h-[350px] items-center justify-center">Aucune donnée disponible</div>`);
            } else {
              $$renderer4.push("<!--[!-->");
              Echart($$renderer4, { option: option(), style: "height: 350px" });
              $$renderer4.push(`<!----> <div class="mt-4 grid grid-cols-2 gap-4"><div class="rounded-lg border border-blue-500/20 bg-blue-500/10 p-3"><div class="text-muted-foreground mb-1 text-sm">Corridor Gauche</div> <div class="text-2xl font-bold text-blue-500">${escape_html(processedData().leftStats.count)}</div> <div class="text-muted-foreground text-xs">passages enregistrés</div></div> <div class="rounded-lg border border-pink-500/20 bg-pink-500/10 p-3"><div class="text-muted-foreground mb-1 text-sm">Corridor Droit</div> <div class="text-2xl font-bold text-pink-500">${escape_html(processedData().rightStats.count)}</div> <div class="text-muted-foreground text-xs">passages enregistrés</div></div></div>`);
            }
            $$renderer4.push(`<!--]-->`);
          }
        });
        $$renderer3.push(`<!---->`);
      }
    });
  });
}
function Speed_consistency($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { data } = $$props;
    let stats2 = derived$1(() => {
      if (data.length === 0) {
        return {
          mean: 0,
          median: 0,
          stdDev: 0,
          variance: 0,
          coefficientOfVariation: 0,
          speedRanges: {}
        };
      }
      const speeds = data.map((d) => d.speed).sort((a, b) => a - b);
      const mean = speeds.reduce((a, b) => a + b, 0) / speeds.length;
      const median = speeds[Math.floor(speeds.length / 2)];
      const squaredDiffs = speeds.map((speed) => Math.pow(speed - mean, 2));
      const variance = squaredDiffs.reduce((a, b) => a + b, 0) / speeds.length;
      const stdDev = Math.sqrt(variance);
      const coefficientOfVariation = stdDev / mean * 100;
      const ranges = ["0-50", "50-100", "100-150", "150-200", "200+"];
      const speedRanges = ranges.reduce(
        (acc, range) => {
          acc[range] = 0;
          return acc;
        },
        {}
      );
      speeds.forEach((speed) => {
        if (speed < 50) speedRanges["0-50"]++;
        else if (speed < 100) speedRanges["50-100"]++;
        else if (speed < 150) speedRanges["100-150"]++;
        else if (speed < 200) speedRanges["150-200"]++;
        else speedRanges["200+"]++;
      });
      return {
        mean: Math.round(mean * 10) / 10,
        median: Math.round(median * 10) / 10,
        stdDev: Math.round(stdDev * 10) / 10,
        variance: Math.round(variance * 10) / 10,
        coefficientOfVariation: Math.round(coefficientOfVariation * 10) / 10,
        speedRanges
      };
    });
    let consistencyLevel = derived$1(() => {
      const cv = stats2().coefficientOfVariation;
      if (cv < 10) return { label: "Très Consistant", color: "bg-green-500" };
      if (cv < 20) return { label: "Consistant", color: "bg-blue-500" };
      if (cv < 30) return { label: "Modéré", color: "bg-yellow-500" };
      return { label: "Variable", color: "bg-red-500" };
    });
    let option = derived$1(() => ({
      tooltip: {
        trigger: "item",
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        borderColor: "#333",
        textStyle: { color: "#fff" },
        formatter: (params) => `${params.name}: ${params.value} passages (${params.percent}%)`
      },
      legend: {
        orient: "vertical",
        right: "5%",
        top: "center",
        textStyle: { color: "#999" }
      },
      series: [
        {
          name: "Distribution des vitesses",
          type: "pie",
          radius: ["40%", "70%"],
          center: ["35%", "50%"],
          avoidLabelOverlap: false,
          itemStyle: { borderRadius: 10, borderColor: "#1a1a1a", borderWidth: 2 },
          label: { show: false },
          emphasis: {
            label: { show: true, fontSize: 16, fontWeight: "bold", color: "#fff" }
          },
          labelLine: { show: false },
          data: Object.entries(stats2().speedRanges).map(([range, count]) => ({ value: count, name: `${range} km/h` })),
          color: ["#3b82f6", "#8b5cf6", "#ec4899", "#f59e0b", "#10b981"]
        }
      ]
    }));
    Card($$renderer2, {
      children: ($$renderer3) => {
        Card_header($$renderer3, {
          children: ($$renderer4) => {
            Card_title($$renderer4, {
              class: "flex items-center gap-2",
              children: ($$renderer5) => {
                Target($$renderer5, { class: "text-primary h-5 w-5" });
                $$renderer5.push(`<!----> Consistance des vitesses`);
              }
            });
            $$renderer4.push(`<!----> `);
            Card_description($$renderer4, {
              children: ($$renderer5) => {
                $$renderer5.push(`<!---->Analyse de la variabilité et distribution des vitesses`);
              }
            });
            $$renderer4.push(`<!---->`);
          }
        });
        $$renderer3.push(`<!----> `);
        Card_content($$renderer3, {
          children: ($$renderer4) => {
            if (data.length === 0) {
              $$renderer4.push("<!--[-->");
              $$renderer4.push(`<div class="text-muted-foreground flex h-[350px] items-center justify-center">Aucune donnée disponible</div>`);
            } else {
              $$renderer4.push("<!--[!-->");
              $$renderer4.push(`<div class="mb-4 flex items-center justify-between"><div class="flex items-center gap-2"><span class="text-muted-foreground text-sm">Niveau de consistance:</span> <span${attr_class(`rounded-full px-2.5 py-0.5 text-xs font-semibold text-white ${stringify(consistencyLevel().color)}`)}>${escape_html(consistencyLevel().label)}</span></div> <div class="text-muted-foreground text-sm">CV: ${escape_html(stats2().coefficientOfVariation)}%</div></div> `);
              Echart($$renderer4, { option: option(), style: "height: 300px" });
              $$renderer4.push(`<!----> <div class="mt-4 grid grid-cols-4 gap-3"><div class="bg-card rounded-lg border p-3"><div class="text-muted-foreground mb-1 text-xs">Moyenne</div> <div class="text-lg font-bold">${escape_html(stats2().mean)} km/h</div></div> <div class="bg-card rounded-lg border p-3"><div class="text-muted-foreground mb-1 text-xs">Médiane</div> <div class="text-lg font-bold">${escape_html(stats2().median)} km/h</div></div> <div class="bg-card rounded-lg border p-3"><div class="text-muted-foreground mb-1 text-xs">Écart-type</div> <div class="text-lg font-bold">${escape_html(stats2().stdDev)}</div></div> <div class="bg-card rounded-lg border p-3"><div class="text-muted-foreground mb-1 text-xs">Variance</div> <div class="text-lg font-bold">${escape_html(stats2().variance)}</div></div></div>`);
            }
            $$renderer4.push(`<!--]-->`);
          }
        });
        $$renderer3.push(`<!---->`);
      }
    });
  });
}
function Top_sensors($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { data } = $$props;
    let topSensors = derived$1(() => {
      const sensorData = data.reduce(
        (acc, curr) => {
          const sensorName = curr.sensor_name || "Unknown";
          if (!acc[sensorName]) acc[sensorName] = { name: sensorName, speeds: [], count: 0 };
          acc[sensorName].speeds.push(curr.speed);
          acc[sensorName].count += 1;
          return acc;
        },
        {}
      );
      return Object.values(sensorData).map((sensor) => {
        const avgSpeed = sensor.speeds.reduce((a, b) => a + b, 0) / sensor.speeds.length;
        return {
          name: sensor.name,
          count: sensor.count,
          avgSpeed: Math.round(avgSpeed * 10) / 10,
          maxSpeed: Math.round(Math.max(...sensor.speeds) * 10) / 10,
          minSpeed: Math.round(Math.min(...sensor.speeds) * 10) / 10
        };
      }).sort((a, b) => b.count - a.count).slice(0, 5);
    });
    function rankClass(index) {
      if (index === 0) return "bg-yellow-500 text-white";
      if (index === 1) return "bg-gray-400 text-white";
      if (index === 2) return "bg-amber-600 text-white";
      return "bg-muted text-muted-foreground";
    }
    Card($$renderer2, {
      children: ($$renderer3) => {
        Card_header($$renderer3, {
          children: ($$renderer4) => {
            Card_title($$renderer4, {
              class: "flex items-center gap-2",
              children: ($$renderer5) => {
                Radio($$renderer5, { class: "text-primary h-5 w-5" });
                $$renderer5.push(`<!----> Top capteurs actifs`);
              }
            });
            $$renderer4.push(`<!----> `);
            Card_description($$renderer4, {
              children: ($$renderer5) => {
                $$renderer5.push(`<!---->Les 5 capteurs les plus actifs avec leurs statistiques`);
              }
            });
            $$renderer4.push(`<!---->`);
          }
        });
        $$renderer3.push(`<!----> `);
        Card_content($$renderer3, {
          children: ($$renderer4) => {
            if (data.length === 0) {
              $$renderer4.push("<!--[-->");
              $$renderer4.push(`<div class="text-muted-foreground flex h-[300px] items-center justify-center">Aucune donnée disponible</div>`);
            } else {
              $$renderer4.push("<!--[!-->");
              $$renderer4.push(`<div class="space-y-4"><!--[-->`);
              const each_array = ensure_array_like(topSensors());
              for (let index = 0, $$length = each_array.length; index < $$length; index++) {
                let sensor = each_array[index];
                $$renderer4.push(`<div class="bg-card hover:bg-accent/50 rounded-lg border p-4 transition-colors"><div class="mb-3 flex items-start justify-between"><div class="flex items-center gap-3"><div${attr_class(`flex h-10 w-10 items-center justify-center rounded-full font-bold ${stringify(rankClass(index))}`)}>#${escape_html(index + 1)}</div> <div><div class="flex items-center gap-2 text-lg font-semibold">${escape_html(sensor.name)} `);
                Zap($$renderer4, { class: "h-4 w-4 text-yellow-500" });
                $$renderer4.push(`<!----></div> <div class="text-muted-foreground text-sm">${escape_html(sensor.count)} passages enregistrés</div></div></div> <span class="bg-primary/10 rounded-full border px-2.5 py-0.5 text-xs font-semibold">Actif</span></div> <div class="grid grid-cols-3 gap-3"><div class="rounded border border-blue-500/20 bg-blue-500/10 p-2"><div class="text-muted-foreground mb-1 text-xs">Moyenne</div> <div class="text-sm font-bold text-blue-500">${escape_html(sensor.avgSpeed)} km/h</div></div> <div class="rounded border border-green-500/20 bg-green-500/10 p-2"><div class="text-muted-foreground mb-1 flex items-center gap-1 text-xs">`);
                Trending_up($$renderer4, { class: "h-3 w-3" });
                $$renderer4.push(`<!----> Max</div> <div class="text-sm font-bold text-green-500">${escape_html(sensor.maxSpeed)} km/h</div></div> <div class="rounded border border-orange-500/20 bg-orange-500/10 p-2"><div class="text-muted-foreground mb-1 text-xs">Min</div> <div class="text-sm font-bold text-orange-500">${escape_html(sensor.minSpeed)} km/h</div></div></div></div>`);
              }
              $$renderer4.push(`<!--]--></div>`);
            }
            $$renderer4.push(`<!--]-->`);
          }
        });
        $$renderer3.push(`<!---->`);
      }
    });
  });
}
function Time_period_analysis($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { data } = $$props;
    const periods = [
      "Matin (6h-12h)",
      "Après-midi (12h-18h)",
      "Soirée (18h-22h)",
      "Nuit (22h-6h)"
    ];
    function getTimePeriod(hour) {
      if (hour >= 6 && hour < 12) return "Matin (6h-12h)";
      if (hour >= 12 && hour < 18) return "Après-midi (12h-18h)";
      if (hour >= 18 && hour < 22) return "Soirée (18h-22h)";
      return "Nuit (22h-6h)";
    }
    let processedData = derived$1(() => {
      const periodData = data.reduce(
        (acc, curr) => {
          const hour = new Date(curr.created_at).getHours();
          const period = getTimePeriod(hour);
          if (!acc[period]) acc[period] = { speeds: [], count: 0 };
          acc[period].speeds.push(curr.speed);
          acc[period].count += 1;
          return acc;
        },
        {}
      );
      const periodStats = periods.map((period) => {
        const pd = periodData[period];
        if (!pd || pd.speeds.length === 0) return { period, avgSpeed: 0, maxSpeed: 0, count: 0 };
        const avgSpeed = pd.speeds.reduce((a, b) => a + b, 0) / pd.speeds.length;
        return {
          period,
          avgSpeed: Math.round(avgSpeed * 10) / 10,
          maxSpeed: Math.round(Math.max(...pd.speeds) * 10) / 10,
          count: pd.count
        };
      });
      return { periods, periodStats };
    });
    let mostActivePeriod = derived$1(() => processedData().periodStats.reduce((max, curr) => curr.count > max.count ? curr : max, { period: "-", avgSpeed: 0, maxSpeed: 0, count: 0 }));
    let option = derived$1(() => ({
      tooltip: {
        trigger: "axis",
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        borderColor: "#333",
        textStyle: { color: "#fff" },
        axisPointer: { type: "shadow" }
      },
      legend: {
        data: ["Vitesse moyenne", "Vitesse max", "Nombre de passages"],
        textStyle: { color: "#999" },
        top: "0%"
      },
      grid: {
        left: "3%",
        right: "4%",
        bottom: "3%",
        top: "15%",
        containLabel: true
      },
      xAxis: {
        type: "category",
        data: processedData().periods,
        axisLabel: { color: "#999", interval: 0, rotate: 15 },
        axisLine: { lineStyle: { color: "#999" } }
      },
      yAxis: [
        {
          type: "value",
          name: "Vitesse (km/h)",
          position: "left",
          nameTextStyle: { color: "#999" },
          axisLabel: { color: "#999" },
          axisLine: { lineStyle: { color: "#999" } },
          splitLine: { lineStyle: { color: "#333", opacity: 0.3 } }
        },
        {
          type: "value",
          name: "Passages",
          position: "right",
          nameTextStyle: { color: "#999" },
          axisLabel: { color: "#999" },
          axisLine: { lineStyle: { color: "#999" } },
          splitLine: { show: false }
        }
      ],
      series: [
        {
          name: "Vitesse moyenne",
          type: "bar",
          yAxisIndex: 0,
          data: processedData().periodStats.map((s) => s.avgSpeed),
          itemStyle: {
            color: {
              type: "linear",
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [
                { offset: 0, color: "#3b82f6" },
                { offset: 1, color: "#1d4ed8" }
              ]
            },
            borderRadius: [4, 4, 0, 0]
          }
        },
        {
          name: "Vitesse max",
          type: "bar",
          yAxisIndex: 0,
          data: processedData().periodStats.map((s) => s.maxSpeed),
          itemStyle: {
            color: {
              type: "linear",
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [
                { offset: 0, color: "#10b981" },
                { offset: 1, color: "#059669" }
              ]
            },
            borderRadius: [4, 4, 0, 0]
          }
        },
        {
          name: "Nombre de passages",
          type: "line",
          yAxisIndex: 1,
          data: processedData().periodStats.map((s) => s.count),
          smooth: true,
          itemStyle: { color: "#ec4899" },
          lineStyle: { width: 3 },
          symbol: "circle",
          symbolSize: 8,
          areaStyle: {
            color: {
              type: "linear",
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [
                { offset: 0, color: "rgba(236, 72, 153, 0.3)" },
                { offset: 1, color: "rgba(236, 72, 153, 0.05)" }
              ]
            }
          }
        }
      ]
    }));
    Card($$renderer2, {
      children: ($$renderer3) => {
        Card_header($$renderer3, {
          children: ($$renderer4) => {
            Card_title($$renderer4, {
              class: "flex items-center gap-2",
              children: ($$renderer5) => {
                Clock($$renderer5, { class: "text-primary h-5 w-5" });
                $$renderer5.push(`<!----> Analyse par période`);
              }
            });
            $$renderer4.push(`<!----> `);
            Card_description($$renderer4, {
              children: ($$renderer5) => {
                $$renderer5.push(`<!---->Vitesses et activité selon les périodes de la journée`);
              }
            });
            $$renderer4.push(`<!---->`);
          }
        });
        $$renderer3.push(`<!----> `);
        Card_content($$renderer3, {
          children: ($$renderer4) => {
            if (data.length === 0) {
              $$renderer4.push("<!--[-->");
              $$renderer4.push(`<div class="text-muted-foreground flex h-[350px] items-center justify-center">Aucune donnée disponible</div>`);
            } else {
              $$renderer4.push("<!--[!-->");
              Echart($$renderer4, { option: option(), style: "height: 350px" });
              $$renderer4.push(`<!----> <div class="border-primary/20 bg-primary/10 mt-4 rounded-lg border p-3"><div class="flex items-center justify-between"><div><div class="text-muted-foreground text-sm">Période la plus active</div> <div class="text-primary text-lg font-bold">${escape_html(mostActivePeriod().period)}</div></div> <div class="text-right"><div class="text-muted-foreground text-sm">Passages</div> <div class="text-lg font-bold">${escape_html(mostActivePeriod().count)}</div></div></div></div>`);
            }
            $$renderer4.push(`<!--]-->`);
          }
        });
        $$renderer3.push(`<!---->`);
      }
    });
  });
}
function Button($$renderer, $$props) {
  let {
    variant = "default",
    size = "default",
    class: className = "",
    children,
    $$slots,
    $$events,
    ...rest
  } = $$props;
  const variantClasses = {
    default: "bg-primary text-primary-foreground hover:bg-primary/90",
    destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
    outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
    secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
    ghost: "hover:bg-accent hover:text-accent-foreground",
    link: "text-primary underline-offset-4 hover:underline"
  };
  const sizeClasses = {
    default: "h-10 px-4 py-2",
    sm: "h-9 rounded-md px-3",
    lg: "h-11 rounded-md px-8",
    icon: "h-10 w-10"
  };
  $$renderer.push(`<button${attributes({
    class: className + " ring-offset-background focus-visible:ring-ring inline-flex items-center justify-center rounded-md text-sm font-medium whitespace-nowrap transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 " + variantClasses[variant] + " " + sizeClasses[size],
    ...rest
  })}>`);
  children($$renderer);
  $$renderer.push(`<!----></button>`);
}
function Switch($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { checked = void 0, $$slots, $$events, ...rest } = $$props;
    $$renderer2.push(`<input${attributes(
      {
        type: "checkbox",
        checked,
        class: "peer border-primary ring-offset-background focus-visible:ring-ring data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground h-4 w-4 shrink-0 rounded-sm border focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
        ...rest
      },
      void 0,
      void 0,
      void 0,
      4
    )}/>`);
    bind_props($$props, { checked });
  });
}
function Label($$renderer, $$props) {
  let { class: className = "", children, $$slots, $$events, ...rest } = $$props;
  $$renderer.push(`<label${attributes({
    class: className + " text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
    ...rest
  })}>`);
  children($$renderer);
  $$renderer.push(`<!----></label>`);
}
function Select($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      value = void 0,
      onValueChange,
      options,
      placeholder = "Select...",
      class: className = ""
    } = $$props;
    $$renderer2.push(`<div${attr_class(className + " relative")}><button type="button" class="border-input bg-background ring-offset-background placeholder:text-muted-foreground focus:ring-ring flex h-10 w-full items-center justify-between rounded-md border px-3 py-2 text-sm focus:ring-2 focus:ring-offset-2 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"><span${attr_class(clsx(value ? "" : "text-muted-foreground"))}>${escape_html(value ? options.find((o) => o.value === value)?.label : placeholder)}</span> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4 opacity-50"><path d="m6 9 6 6 6-6"></path></svg></button> `);
    {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--></div>`);
    bind_props($$props, { value });
  });
}
function Sheet($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { open = false, onOpenChange, children } = $$props;
    if (open) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<div class="fixed inset-0 z-50 bg-black/80" role="button" tabindex="0"></div> <div class="bg-background fixed inset-y-0 right-0 z-50 h-full w-full border-l p-6 shadow-lg transition-transform duration-300 sm:w-3/4 sm:max-w-md" style="transform: translateX(0%);">`);
      children($$renderer2);
      $$renderer2.push(`<!----></div>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]-->`);
    bind_props($$props, { open });
  });
}
function Sheet_trigger($$renderer, $$props) {
  let { asChild = false, children } = $$props;
  if (asChild) {
    $$renderer.push("<!--[-->");
    children($$renderer);
    $$renderer.push(`<!---->`);
  } else {
    $$renderer.push("<!--[!-->");
    children($$renderer);
    $$renderer.push(`<!---->`);
  }
  $$renderer.push(`<!--]-->`);
}
function Sheet_content($$renderer, $$props) {
  let { class: className = "", children } = $$props;
  $$renderer.push(`<div${attr_class(clsx(className))}>`);
  children($$renderer);
  $$renderer.push(`<!----></div>`);
}
function Sheet_header($$renderer, $$props) {
  let { class: className = "", children } = $$props;
  $$renderer.push(`<div${attr_class(className + " flex flex-col space-y-2 text-center sm:text-left")}>`);
  children($$renderer);
  $$renderer.push(`<!----></div>`);
}
function Sheet_title($$renderer, $$props) {
  let { class: className = "", children } = $$props;
  $$renderer.push(`<h2${attr_class(className + " text-foreground text-lg font-semibold")}>`);
  children($$renderer);
  $$renderer.push(`<!----></h2>`);
}
function Sheet_description($$renderer, $$props) {
  let { class: className = "", children } = $$props;
  $$renderer.push(`<p${attr_class(className + " text-muted-foreground text-sm")}>`);
  children($$renderer);
  $$renderer.push(`<!----></p>`);
}
function Settings_panel($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let { availableSensors: availableSensors2 } = $$props;
    let open = false;
    const updateIntervals = [
      { value: "1000", label: "1 seconde" },
      { value: "3000", label: "3 secondes" },
      { value: "5000", label: "5 secondes" },
      { value: "10000", label: "10 secondes" }
    ];
    const maxDataPointsOptions = [
      { value: "50", label: "50 points" },
      { value: "100", label: "100 points" },
      { value: "120", label: "120 points" },
      { value: "200", label: "200 points" }
    ];
    const dateRangeModes = [
      { value: "realtime", label: "Temps réel" },
      { value: "today", label: "Aujourd'hui" },
      { value: "custom", label: "Période personnalisée" }
    ];
    function toggleSensor(sensor) {
      const currentSensors = store_get($$store_subs ??= {}, "$settings", settings).selectedSensors;
      const newSensors = currentSensors.includes(sensor) ? currentSensors.filter((s) => s !== sensor) : [...currentSensors, sensor];
      settings.update((s) => ({ ...s, selectedSensors: newSensors }));
    }
    function toggleLane(lane) {
      const currentLanes = store_get($$store_subs ??= {}, "$settings", settings).selectedLanes;
      const newLanes = currentLanes.includes(lane) ? currentLanes.filter((l) => l !== lane) : [...currentLanes, lane];
      settings.update((s) => ({ ...s, selectedLanes: newLanes }));
    }
    function isSensorSelected(sensor) {
      return store_get($$store_subs ??= {}, "$settings", settings).selectedSensors.length === 0 || store_get($$store_subs ??= {}, "$settings", settings).selectedSensors.includes(sensor);
    }
    function toggleChart(key, value) {
      settings.update((s) => ({ ...s, [key]: value }));
    }
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      Sheet($$renderer3, {
        onOpenChange: (o) => open = o,
        get open() {
          return open;
        },
        set open($$value) {
          open = $$value;
          $$settled = false;
        },
        children: ($$renderer4) => {
          Sheet_trigger($$renderer4, {
            asChild: true,
            children: ($$renderer5) => {
              Button($$renderer5, {
                variant: "outline",
                size: "icon",
                children: ($$renderer6) => {
                  Settings($$renderer6, { class: "h-5 w-5" });
                },
                $$slots: { default: true }
              });
            }
          });
          $$renderer4.push(`<!----> `);
          Sheet_content($$renderer4, {
            class: "w-full overflow-y-auto sm:max-w-md",
            children: ($$renderer5) => {
              Sheet_header($$renderer5, {
                children: ($$renderer6) => {
                  Sheet_title($$renderer6, {
                    class: "flex items-center gap-2",
                    children: ($$renderer7) => {
                      Settings($$renderer7, { class: "h-5 w-5" });
                      $$renderer7.push(`<!----> Paramètres`);
                    }
                  });
                  $$renderer6.push(`<!----> `);
                  Sheet_description($$renderer6, {
                    children: ($$renderer7) => {
                      $$renderer7.push(`<!---->Configurez les options d'affichage et de filtrage des données`);
                    }
                  });
                  $$renderer6.push(`<!---->`);
                }
              });
              $$renderer5.push(`<!----> <div class="mt-6 space-y-6"><div class="space-y-4 border-t pt-4"><h3 class="text-sm font-semibold">Période de données</h3> `);
              Select($$renderer5, {
                value: store_get($$store_subs ??= {}, "$settings", settings).dateRangeMode,
                options: dateRangeModes,
                onValueChange: (value) => settings.update((s) => ({ ...s, dateRangeMode: value }))
              });
              $$renderer5.push(`<!----></div> <div class="space-y-4 border-t pt-4"><div class="flex items-center justify-between"><h3 class="text-sm font-semibold">Capteurs</h3> `);
              if (store_get($$store_subs ??= {}, "$settings", settings).selectedSensors.length > 0) {
                $$renderer5.push("<!--[-->");
                Button($$renderer5, {
                  variant: "ghost",
                  size: "sm",
                  onclick: () => settings.update((s) => ({ ...s, selectedSensors: [] })),
                  children: ($$renderer6) => {
                    $$renderer6.push(`<!---->Tout afficher`);
                  },
                  $$slots: { default: true }
                });
              } else {
                $$renderer5.push("<!--[!-->");
              }
              $$renderer5.push(`<!--]--></div> <div class="space-y-2">`);
              if (availableSensors2.length === 0) {
                $$renderer5.push("<!--[-->");
                $$renderer5.push(`<p class="text-muted-foreground py-4 text-center text-sm">Aucun capteur détecté</p>`);
              } else {
                $$renderer5.push("<!--[!-->");
                $$renderer5.push(`<!--[-->`);
                const each_array = ensure_array_like(availableSensors2);
                for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
                  let sensor = each_array[$$index];
                  $$renderer5.push(`<div class="flex items-center justify-between">`);
                  Label($$renderer5, {
                    for: `sensor-${sensor}`,
                    class: "cursor-pointer text-sm",
                    children: ($$renderer6) => {
                      $$renderer6.push(`<!---->${escape_html(sensor)}`);
                    },
                    $$slots: { default: true }
                  });
                  $$renderer5.push(`<!----> `);
                  Switch($$renderer5, {
                    id: `sensor-${sensor}`,
                    checked: isSensorSelected(sensor),
                    onchange: () => toggleSensor(sensor)
                  });
                  $$renderer5.push(`<!----></div>`);
                }
                $$renderer5.push(`<!--]-->`);
              }
              $$renderer5.push(`<!--]--></div></div> <div class="space-y-4 border-t pt-4"><h3 class="text-sm font-semibold">Voies</h3> <div class="space-y-2"><div class="flex items-center justify-between">`);
              Label($$renderer5, {
                for: "lane-left",
                class: "cursor-pointer text-sm",
                children: ($$renderer6) => {
                  $$renderer6.push(`<!---->Voie gauche`);
                },
                $$slots: { default: true }
              });
              $$renderer5.push(`<!----> `);
              Switch($$renderer5, {
                id: "lane-left",
                checked: store_get($$store_subs ??= {}, "$settings", settings).selectedLanes.includes(Lane.Left),
                onchange: () => toggleLane(Lane.Left)
              });
              $$renderer5.push(`<!----></div> <div class="flex items-center justify-between">`);
              Label($$renderer5, {
                for: "lane-right",
                class: "cursor-pointer text-sm",
                children: ($$renderer6) => {
                  $$renderer6.push(`<!---->Voie droite`);
                },
                $$slots: { default: true }
              });
              $$renderer5.push(`<!----> `);
              Switch($$renderer5, {
                id: "lane-right",
                checked: store_get($$store_subs ??= {}, "$settings", settings).selectedLanes.includes(Lane.Right),
                onchange: () => toggleLane(Lane.Right)
              });
              $$renderer5.push(`<!----></div></div></div> <div class="space-y-4 border-t pt-4"><h3 class="text-sm font-semibold">Seuils de vitesse</h3> <div class="space-y-3"><div class="flex items-center justify-between">`);
              Label($$renderer5, {
                for: "enable-alerts",
                class: "cursor-pointer text-sm",
                children: ($$renderer6) => {
                  $$renderer6.push(`<!---->Filtrer par seuils`);
                },
                $$slots: { default: true }
              });
              $$renderer5.push(`<!----> `);
              Switch($$renderer5, {
                id: "enable-alerts",
                checked: store_get($$store_subs ??= {}, "$settings", settings).enableAlerts,
                onchange: (e) => settings.update((s) => ({ ...s, enableAlerts: e.currentTarget.checked }))
              });
              $$renderer5.push(`<!----></div> `);
              if (store_get($$store_subs ??= {}, "$settings", settings).enableAlerts) {
                $$renderer5.push("<!--[-->");
                $$renderer5.push(`<div class="space-y-2"><div class="flex items-center gap-3">`);
                Label($$renderer5, {
                  class: "w-16 shrink-0 text-xs",
                  children: ($$renderer6) => {
                    $$renderer6.push(`<!---->Min (km/h)`);
                  },
                  $$slots: { default: true }
                });
                $$renderer5.push(`<!----> <input type="number" class="bg-background h-8 w-full rounded border px-2 text-sm" min="0" max="500"${attr("value", store_get($$store_subs ??= {}, "$settings", settings).speedThresholdMin)}/></div> <div class="flex items-center gap-3">`);
                Label($$renderer5, {
                  class: "w-16 shrink-0 text-xs",
                  children: ($$renderer6) => {
                    $$renderer6.push(`<!---->Max (km/h)`);
                  },
                  $$slots: { default: true }
                });
                $$renderer5.push(`<!----> <input type="number" class="bg-background h-8 w-full rounded border px-2 text-sm" min="0" max="500"${attr("value", store_get($$store_subs ??= {}, "$settings", settings).speedThresholdMax)}/></div></div>`);
              } else {
                $$renderer5.push("<!--[!-->");
              }
              $$renderer5.push(`<!--]--></div></div> <div class="space-y-4 border-t pt-4"><h3 class="text-sm font-semibold">Mise à jour des données</h3> <div class="space-y-2">`);
              Label($$renderer5, {
                class: "text-sm",
                children: ($$renderer6) => {
                  $$renderer6.push(`<!---->Intervalle de rafraîchissement`);
                },
                $$slots: { default: true }
              });
              $$renderer5.push(`<!----> `);
              Select($$renderer5, {
                value: store_get($$store_subs ??= {}, "$settings", settings).updateInterval.toString(),
                options: updateIntervals,
                onValueChange: (value) => settings.update((s) => ({ ...s, updateInterval: parseInt(value) }))
              });
              $$renderer5.push(`<!----></div> <div class="space-y-2">`);
              Label($$renderer5, {
                class: "text-sm",
                children: ($$renderer6) => {
                  $$renderer6.push(`<!---->Nombre de points de données`);
                },
                $$slots: { default: true }
              });
              $$renderer5.push(`<!----> `);
              Select($$renderer5, {
                value: store_get($$store_subs ??= {}, "$settings", settings).maxDataPoints.toString(),
                options: maxDataPointsOptions,
                onValueChange: (value) => settings.update((s) => ({ ...s, maxDataPoints: parseInt(value) }))
              });
              $$renderer5.push(`<!----></div></div> <div class="space-y-4 border-t pt-4"><h3 class="text-sm font-semibold">Graphiques de base</h3> <div class="space-y-2"><div class="flex items-center justify-between">`);
              Label($$renderer5, {
                for: "show-chart",
                class: "cursor-pointer text-sm",
                children: ($$renderer6) => {
                  $$renderer6.push(`<!---->Graphique de vitesses`);
                },
                $$slots: { default: true }
              });
              $$renderer5.push(`<!----> `);
              Switch($$renderer5, {
                id: "show-chart",
                checked: store_get($$store_subs ??= {}, "$settings", settings).showSpeedChart,
                onchange: (e) => toggleChart("showSpeedChart", e.currentTarget.checked)
              });
              $$renderer5.push(`<!----></div> <div class="flex items-center justify-between">`);
              Label($$renderer5, {
                for: "show-lane",
                class: "cursor-pointer text-sm",
                children: ($$renderer6) => {
                  $$renderer6.push(`<!---->Distribution des voies`);
                },
                $$slots: { default: true }
              });
              $$renderer5.push(`<!----> `);
              Switch($$renderer5, {
                id: "show-lane",
                checked: store_get($$store_subs ??= {}, "$settings", settings).showLaneDistribution,
                onchange: (e) => toggleChart("showLaneDistribution", e.currentTarget.checked)
              });
              $$renderer5.push(`<!----></div> <div class="flex items-center justify-between">`);
              Label($$renderer5, {
                for: "show-sensor",
                class: "cursor-pointer text-sm",
                children: ($$renderer6) => {
                  $$renderer6.push(`<!---->Statistiques des capteurs`);
                },
                $$slots: { default: true }
              });
              $$renderer5.push(`<!----> `);
              Switch($$renderer5, {
                id: "show-sensor",
                checked: store_get($$store_subs ??= {}, "$settings", settings).showSensorStats,
                onchange: (e) => toggleChart("showSensorStats", e.currentTarget.checked)
              });
              $$renderer5.push(`<!----></div></div></div> <div class="space-y-4 border-t pt-4"><h3 class="text-sm font-semibold">Analyses avancées</h3> <div class="space-y-2"><div class="flex items-center justify-between">`);
              Label($$renderer5, {
                for: "show-hourly",
                class: "cursor-pointer text-sm",
                children: ($$renderer6) => {
                  $$renderer6.push(`<!---->Tendance horaire`);
                },
                $$slots: { default: true }
              });
              $$renderer5.push(`<!----> `);
              Switch($$renderer5, {
                id: "show-hourly",
                checked: store_get($$store_subs ??= {}, "$settings", settings).showHourlyTrend,
                onchange: (e) => toggleChart("showHourlyTrend", e.currentTarget.checked)
              });
              $$renderer5.push(`<!----></div> <div class="flex items-center justify-between">`);
              Label($$renderer5, {
                for: "show-records",
                class: "cursor-pointer text-sm",
                children: ($$renderer6) => {
                  $$renderer6.push(`<!---->Enregistrements`);
                },
                $$slots: { default: true }
              });
              $$renderer5.push(`<!----> `);
              Switch($$renderer5, {
                id: "show-records",
                checked: store_get($$store_subs ??= {}, "$settings", settings).showSpeedRecords,
                onchange: (e) => toggleChart("showSpeedRecords", e.currentTarget.checked)
              });
              $$renderer5.push(`<!----></div> <div class="flex items-center justify-between">`);
              Label($$renderer5, {
                for: "show-dist",
                class: "cursor-pointer text-sm",
                children: ($$renderer6) => {
                  $$renderer6.push(`<!---->Distribution des vitesses`);
                },
                $$slots: { default: true }
              });
              $$renderer5.push(`<!----> `);
              Switch($$renderer5, {
                id: "show-dist",
                checked: store_get($$store_subs ??= {}, "$settings", settings).showSpeedDistribution,
                onchange: (e) => toggleChart("showSpeedDistribution", e.currentTarget.checked)
              });
              $$renderer5.push(`<!----></div> <div class="flex items-center justify-between">`);
              Label($$renderer5, {
                for: "show-avg-sensor",
                class: "cursor-pointer text-sm",
                children: ($$renderer6) => {
                  $$renderer6.push(`<!---->Vitesse moy. par capteur`);
                },
                $$slots: { default: true }
              });
              $$renderer5.push(`<!----> `);
              Switch($$renderer5, {
                id: "show-avg-sensor",
                checked: store_get($$store_subs ??= {}, "$settings", settings).showAverageSpeedBySensor,
                onchange: (e) => toggleChart("showAverageSpeedBySensor", e.currentTarget.checked)
              });
              $$renderer5.push(`<!----></div> <div class="flex items-center justify-between">`);
              Label($$renderer5, {
                for: "show-heatmap",
                class: "cursor-pointer text-sm",
                children: ($$renderer6) => {
                  $$renderer6.push(`<!---->Heatmap d'activité`);
                },
                $$slots: { default: true }
              });
              $$renderer5.push(`<!----> `);
              Switch($$renderer5, {
                id: "show-heatmap",
                checked: store_get($$store_subs ??= {}, "$settings", settings).showActivityHeatmap,
                onchange: (e) => toggleChart("showActivityHeatmap", e.currentTarget.checked)
              });
              $$renderer5.push(`<!----></div> <div class="flex items-center justify-between">`);
              Label($$renderer5, {
                for: "show-lane-perf",
                class: "cursor-pointer text-sm",
                children: ($$renderer6) => {
                  $$renderer6.push(`<!---->Performance des corridors`);
                },
                $$slots: { default: true }
              });
              $$renderer5.push(`<!----> `);
              Switch($$renderer5, {
                id: "show-lane-perf",
                checked: store_get($$store_subs ??= {}, "$settings", settings).showLanePerformance,
                onchange: (e) => toggleChart("showLanePerformance", e.currentTarget.checked)
              });
              $$renderer5.push(`<!----></div> <div class="flex items-center justify-between">`);
              Label($$renderer5, {
                for: "show-consistency",
                class: "cursor-pointer text-sm",
                children: ($$renderer6) => {
                  $$renderer6.push(`<!---->Consistance des vitesses`);
                },
                $$slots: { default: true }
              });
              $$renderer5.push(`<!----> `);
              Switch($$renderer5, {
                id: "show-consistency",
                checked: store_get($$store_subs ??= {}, "$settings", settings).showSpeedConsistency,
                onchange: (e) => toggleChart("showSpeedConsistency", e.currentTarget.checked)
              });
              $$renderer5.push(`<!----></div> <div class="flex items-center justify-between">`);
              Label($$renderer5, {
                for: "show-top-sensors",
                class: "cursor-pointer text-sm",
                children: ($$renderer6) => {
                  $$renderer6.push(`<!---->Top capteurs`);
                },
                $$slots: { default: true }
              });
              $$renderer5.push(`<!----> `);
              Switch($$renderer5, {
                id: "show-top-sensors",
                checked: store_get($$store_subs ??= {}, "$settings", settings).showTopSensors,
                onchange: (e) => toggleChart("showTopSensors", e.currentTarget.checked)
              });
              $$renderer5.push(`<!----></div> <div class="flex items-center justify-between">`);
              Label($$renderer5, {
                for: "show-time-period",
                class: "cursor-pointer text-sm",
                children: ($$renderer6) => {
                  $$renderer6.push(`<!---->Analyse par période`);
                },
                $$slots: { default: true }
              });
              $$renderer5.push(`<!----> `);
              Switch($$renderer5, {
                id: "show-time-period",
                checked: store_get($$store_subs ??= {}, "$settings", settings).showTimePeriodAnalysis,
                onchange: (e) => toggleChart("showTimePeriodAnalysis", e.currentTarget.checked)
              });
              $$renderer5.push(`<!----></div></div></div> <div class="border-t pt-4">`);
              Button($$renderer5, {
                variant: "outline",
                class: "w-full",
                onclick: () => settings.reset(),
                children: ($$renderer6) => {
                  Rotate_ccw($$renderer6, { class: "mr-2 h-4 w-4" });
                  $$renderer6.push(`<!----> Réinitialiser les paramètres`);
                },
                $$slots: { default: true }
              });
              $$renderer5.push(`<!----></div></div>`);
            }
          });
          $$renderer4.push(`<!---->`);
        },
        $$slots: { default: true }
      });
    }
    do {
      $$settled = true;
      $$inner_renderer = $$renderer2.copy();
      $$render_inner($$inner_renderer);
    } while (!$$settled);
    $$renderer2.subsume($$inner_renderer);
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let hasNewRecord = false;
    onDestroy(() => {
    });
    $$renderer2.push(`<div class="min-h-screen bg-background"><header class="border-border bg-card border-b"><div class="mx-auto px-6 py-6"><div class="flex items-center justify-between"><div><h1 class="text-foreground flex items-center gap-3 text-4xl font-bold">`);
    Zap($$renderer2, { class: "text-primary h-8 w-8" });
    $$renderer2.push(`<!----> RaceTrack Analytics</h1> <p class="text-muted-foreground mt-1">Racing Speed Analytics Dashboard</p></div> <div class="flex items-center gap-4"><div class="flex items-center gap-2"><span${attr_class(`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors ${stringify(
      "border-transparent bg-primary text-primary-foreground"
    )}`)}>🎮 SIMULATION</span> <div${attr_class(`h-2 w-2 rounded-full ${stringify(store_get($$store_subs ??= {}, "$isConnected", isConnected) ? "animate-pulse bg-green-500" : "bg-yellow-500")}`)}></div> <span class="text-muted-foreground text-sm">Données simulées</span></div> `);
    Settings_panel($$renderer2, {
      availableSensors: store_get($$store_subs ??= {}, "$availableSensors", availableSensors)
    });
    $$renderer2.push(`<!----></div></div></div></header> <main class="mx-auto px-6 py-8">`);
    if (store_get($$store_subs ??= {}, "$isLoading", isLoading)) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<div class="flex h-64 items-center justify-center"><div class="text-muted-foreground">Chargement des données...</div></div>`);
    } else {
      $$renderer2.push("<!--[!-->");
      $$renderer2.push(`<div class="mb-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">`);
      Stat_card($$renderer2, {
        title: "Vitesse Moyenne",
        value: `${stringify(store_get($$store_subs ??= {}, "$stats", stats).avgSpeed)} km/h`,
        subtitle: "Sur les données filtrées",
        icon: Gauge
      });
      $$renderer2.push(`<!----> `);
      Stat_card($$renderer2, {
        title: "Vitesse Maximale",
        value: `${stringify(store_get($$store_subs ??= {}, "$stats", stats).maxSpeed)} km/h`,
        subtitle: "Record de la session",
        icon: Trending_up,
        isNewRecord: hasNewRecord
      });
      $$renderer2.push(`<!----> `);
      Stat_card($$renderer2, {
        title: "Vitesse Minimale",
        value: `${stringify(store_get($$store_subs ??= {}, "$stats", stats).minSpeed)} km/h`,
        subtitle: "Plus basse vitesse",
        icon: Activity
      });
      $$renderer2.push(`<!----> `);
      Stat_card($$renderer2, {
        title: "Total Passages",
        value: store_get($$store_subs ??= {}, "$stats", stats).totalReadings,
        subtitle: "Lectures capteurs",
        icon: Zap
      });
      $$renderer2.push(`<!----></div> `);
      if (store_get($$store_subs ??= {}, "$displaySettings", displaySettings).showSpeedChart) {
        $$renderer2.push("<!--[-->");
        $$renderer2.push(`<div class="mb-8">`);
        Speed_chart($$renderer2, {
          data: store_get($$store_subs ??= {}, "$filteredData", filteredData),
          title: "Évolution des vitesses",
          description: `Vitesses enregistrées (simulation - mise à jour toutes les ${stringify(store_get($$store_subs ??= {}, "$settings", settings).updateInterval / 1e3)}s)`
        });
        $$renderer2.push(`<!----></div>`);
      } else {
        $$renderer2.push("<!--[!-->");
      }
      $$renderer2.push(`<!--]--> `);
      if (store_get($$store_subs ??= {}, "$displaySettings", displaySettings).showLaneDistribution || store_get($$store_subs ??= {}, "$displaySettings", displaySettings).showSensorStats) {
        $$renderer2.push("<!--[-->");
        $$renderer2.push(`<div class="mb-8 grid gap-6 lg:grid-cols-2">`);
        if (store_get($$store_subs ??= {}, "$displaySettings", displaySettings).showLaneDistribution) {
          $$renderer2.push("<!--[-->");
          Lane_distribution($$renderer2, {
            data: store_get($$store_subs ??= {}, "$filteredData", filteredData)
          });
        } else {
          $$renderer2.push("<!--[!-->");
        }
        $$renderer2.push(`<!--]--> `);
        if (store_get($$store_subs ??= {}, "$displaySettings", displaySettings).showSensorStats) {
          $$renderer2.push("<!--[-->");
          Sensor_stats($$renderer2, {
            data: store_get($$store_subs ??= {}, "$filteredData", filteredData)
          });
        } else {
          $$renderer2.push("<!--[!-->");
        }
        $$renderer2.push(`<!--]--></div>`);
      } else {
        $$renderer2.push("<!--[!-->");
      }
      $$renderer2.push(`<!--]--> `);
      if (store_get($$store_subs ??= {}, "$displaySettings", displaySettings).showHourlyTrend || store_get($$store_subs ??= {}, "$displaySettings", displaySettings).showSpeedRecords || store_get($$store_subs ??= {}, "$displaySettings", displaySettings).showSpeedDistribution || store_get($$store_subs ??= {}, "$displaySettings", displaySettings).showAverageSpeedBySensor || store_get($$store_subs ??= {}, "$displaySettings", displaySettings).showActivityHeatmap || store_get($$store_subs ??= {}, "$displaySettings", displaySettings).showLanePerformance || store_get($$store_subs ??= {}, "$displaySettings", displaySettings).showSpeedConsistency || store_get($$store_subs ??= {}, "$displaySettings", displaySettings).showTopSensors || store_get($$store_subs ??= {}, "$displaySettings", displaySettings).showTimePeriodAnalysis) {
        $$renderer2.push("<!--[-->");
        $$renderer2.push(`<h2 class="text-foreground mb-6 text-2xl font-bold">Analyses avancées</h2> `);
        if (store_get($$store_subs ??= {}, "$displaySettings", displaySettings).showHourlyTrend) {
          $$renderer2.push("<!--[-->");
          $$renderer2.push(`<div class="mb-8">`);
          Hourly_trend($$renderer2, {
            data: store_get($$store_subs ??= {}, "$filteredData", filteredData)
          });
          $$renderer2.push(`<!----></div>`);
        } else {
          $$renderer2.push("<!--[!-->");
        }
        $$renderer2.push(`<!--]--> `);
        if (store_get($$store_subs ??= {}, "$displaySettings", displaySettings).showSpeedRecords) {
          $$renderer2.push("<!--[-->");
          $$renderer2.push(`<div class="mb-8">`);
          Speed_records($$renderer2, {
            data: store_get($$store_subs ??= {}, "$filteredData", filteredData)
          });
          $$renderer2.push(`<!----></div>`);
        } else {
          $$renderer2.push("<!--[!-->");
        }
        $$renderer2.push(`<!--]--> `);
        if (store_get($$store_subs ??= {}, "$displaySettings", displaySettings).showSpeedDistribution || store_get($$store_subs ??= {}, "$displaySettings", displaySettings).showAverageSpeedBySensor) {
          $$renderer2.push("<!--[-->");
          $$renderer2.push(`<div class="mb-8 grid gap-6 lg:grid-cols-2">`);
          if (store_get($$store_subs ??= {}, "$displaySettings", displaySettings).showSpeedDistribution) {
            $$renderer2.push("<!--[-->");
            Speed_distribution($$renderer2, {
              data: store_get($$store_subs ??= {}, "$filteredData", filteredData)
            });
          } else {
            $$renderer2.push("<!--[!-->");
          }
          $$renderer2.push(`<!--]--> `);
          if (store_get($$store_subs ??= {}, "$displaySettings", displaySettings).showAverageSpeedBySensor) {
            $$renderer2.push("<!--[-->");
            Average_speed_by_sensor($$renderer2, {
              data: store_get($$store_subs ??= {}, "$filteredData", filteredData)
            });
          } else {
            $$renderer2.push("<!--[!-->");
          }
          $$renderer2.push(`<!--]--></div>`);
        } else {
          $$renderer2.push("<!--[!-->");
        }
        $$renderer2.push(`<!--]--> `);
        if (store_get($$store_subs ??= {}, "$displaySettings", displaySettings).showActivityHeatmap) {
          $$renderer2.push("<!--[-->");
          $$renderer2.push(`<div class="mb-8">`);
          Activity_heatmap($$renderer2, {
            data: store_get($$store_subs ??= {}, "$filteredData", filteredData)
          });
          $$renderer2.push(`<!----></div>`);
        } else {
          $$renderer2.push("<!--[!-->");
        }
        $$renderer2.push(`<!--]--> `);
        if (store_get($$store_subs ??= {}, "$displaySettings", displaySettings).showLanePerformance || store_get($$store_subs ??= {}, "$displaySettings", displaySettings).showSpeedConsistency) {
          $$renderer2.push("<!--[-->");
          $$renderer2.push(`<div class="mb-8 grid gap-6 lg:grid-cols-2">`);
          if (store_get($$store_subs ??= {}, "$displaySettings", displaySettings).showLanePerformance) {
            $$renderer2.push("<!--[-->");
            Lane_performance($$renderer2, {
              data: store_get($$store_subs ??= {}, "$filteredData", filteredData)
            });
          } else {
            $$renderer2.push("<!--[!-->");
          }
          $$renderer2.push(`<!--]--> `);
          if (store_get($$store_subs ??= {}, "$displaySettings", displaySettings).showSpeedConsistency) {
            $$renderer2.push("<!--[-->");
            Speed_consistency($$renderer2, {
              data: store_get($$store_subs ??= {}, "$filteredData", filteredData)
            });
          } else {
            $$renderer2.push("<!--[!-->");
          }
          $$renderer2.push(`<!--]--></div>`);
        } else {
          $$renderer2.push("<!--[!-->");
        }
        $$renderer2.push(`<!--]--> `);
        if (store_get($$store_subs ??= {}, "$displaySettings", displaySettings).showTopSensors || store_get($$store_subs ??= {}, "$displaySettings", displaySettings).showTimePeriodAnalysis) {
          $$renderer2.push("<!--[-->");
          $$renderer2.push(`<div class="mb-8 grid gap-6 lg:grid-cols-2">`);
          if (store_get($$store_subs ??= {}, "$displaySettings", displaySettings).showTopSensors) {
            $$renderer2.push("<!--[-->");
            Top_sensors($$renderer2, {
              data: store_get($$store_subs ??= {}, "$filteredData", filteredData)
            });
          } else {
            $$renderer2.push("<!--[!-->");
          }
          $$renderer2.push(`<!--]--> `);
          if (store_get($$store_subs ??= {}, "$displaySettings", displaySettings).showTimePeriodAnalysis) {
            $$renderer2.push("<!--[-->");
            Time_period_analysis($$renderer2, {
              data: store_get($$store_subs ??= {}, "$filteredData", filteredData)
            });
          } else {
            $$renderer2.push("<!--[!-->");
          }
          $$renderer2.push(`<!--]--></div>`);
        } else {
          $$renderer2.push("<!--[!-->");
        }
        $$renderer2.push(`<!--]-->`);
      } else {
        $$renderer2.push("<!--[!-->");
      }
      $$renderer2.push(`<!--]--> <div class="border-border bg-card mt-8 rounded-lg border p-6"><div class="flex items-start gap-4"><div class="bg-primary/10 flex h-10 w-10 items-center justify-center rounded-full">`);
      Activity($$renderer2, { class: "text-primary h-5 w-5" });
      $$renderer2.push(`<!----></div> <div><h3 class="mb-1 text-lg font-semibold">À propos de RaceTrack Analytics</h3> <p class="text-muted-foreground text-sm">Système de Business Intelligence pour l'analyse des données de vitesse collectées par
							capteurs sur circuit. Mode SIMULATION : Les données affichées sont générées
							aléatoirement pour la démonstration de l'interface.</p></div></div></div>`);
    }
    $$renderer2.push(`<!--]--></main></div>`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}
export {
  _page as default
};
