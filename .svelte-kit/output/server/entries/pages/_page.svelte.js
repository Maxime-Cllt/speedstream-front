import { ac as ssr_context, s as sanitize_props, a as spread_props, b as slot, c as attr_class, ad as clsx, ab as derived$1, d as stringify, e as escape_html, ae as attr_style, f as attr, af as ensure_array_like, ag as attributes, ah as bind_props, ai as store_get, aj as unsubscribe_stores } from "../../chunks/index2.js";
import "clsx";
import { I as Icon, L as Lane, s as settings, Z as Zap, d as displaySettings } from "../../chunks/settings.js";
import { d as derived, w as writable } from "../../chunks/index.js";
import "echarts";
import { format } from "date-fns";
function onDestroy(fn) {
  /** @type {SSRContext} */
  ssr_context.r.on_destroy(fn);
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
function Chart_column($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    ["path", { "d": "M3 3v16a2 2 0 0 0 2 2h16" }],
    ["path", { "d": "M18 17V9" }],
    ["path", { "d": "M13 17V5" }],
    ["path", { "d": "M8 17v-3" }]
  ];
  Icon($$renderer, spread_props([
    { name: "chart-column" },
    $$sanitized_props,
    {
      /**
       * @component @name ChartColumn
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMyAzdjE2YTIgMiAwIDAgMCAyIDJoMTYiIC8+CiAgPHBhdGggZD0iTTE4IDE3VjkiIC8+CiAgPHBhdGggZD0iTTEzIDE3VjUiIC8+CiAgPHBhdGggZD0iTTggMTd2LTMiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/chart-column
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
function Eye($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    [
      "path",
      {
        "d": "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"
      }
    ],
    ["circle", { "cx": "12", "cy": "12", "r": "3" }]
  ];
  Icon($$renderer, spread_props([
    { name: "eye" },
    $$sanitized_props,
    {
      /**
       * @component @name Eye
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMi4wNjIgMTIuMzQ4YTEgMSAwIDAgMSAwLS42OTYgMTAuNzUgMTAuNzUgMCAwIDEgMTkuODc2IDAgMSAxIDAgMCAxIDAgLjY5NiAxMC43NSAxMC43NSAwIDAgMS0xOS44NzYgMCIgLz4KICA8Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIzIiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/eye
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
function Hash($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    ["line", { "x1": "4", "x2": "20", "y1": "9", "y2": "9" }],
    ["line", { "x1": "4", "x2": "20", "y1": "15", "y2": "15" }],
    ["line", { "x1": "10", "x2": "8", "y1": "3", "y2": "21" }],
    ["line", { "x1": "16", "x2": "14", "y1": "3", "y2": "21" }]
  ];
  Icon($$renderer, spread_props([
    { name: "hash" },
    $$sanitized_props,
    {
      /**
       * @component @name Hash
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8bGluZSB4MT0iNCIgeDI9IjIwIiB5MT0iOSIgeTI9IjkiIC8+CiAgPGxpbmUgeDE9IjQiIHgyPSIyMCIgeTE9IjE1IiB5Mj0iMTUiIC8+CiAgPGxpbmUgeDE9IjEwIiB4Mj0iOCIgeTE9IjMiIHkyPSIyMSIgLz4KICA8bGluZSB4MT0iMTYiIHgyPSIxNCIgeTE9IjMiIHkyPSIyMSIgLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/hash
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
function Minus($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [["path", { "d": "M5 12h14" }]];
  Icon($$renderer, spread_props([
    { name: "minus" },
    $$sanitized_props,
    {
      /**
       * @component @name Minus
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNNSAxMmgxNCIgLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/minus
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
function Moon($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    [
      "path",
      {
        "d": "M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"
      }
    ]
  ];
  Icon($$renderer, spread_props([
    { name: "moon" },
    $$sanitized_props,
    {
      /**
       * @component @name Moon
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMjAuOTg1IDEyLjQ4NmE5IDkgMCAxIDEtOS40NzMtOS40NzJjLjQwNS0uMDIyLjYxNy40Ni40MDIuODAzYTYgNiAwIDAgMCA4LjI2OCA4LjI2OGMuMzQ0LS4yMTUuODI1LS4wMDQuODAzLjQwMSIgLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/moon
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
function Route($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    ["circle", { "cx": "6", "cy": "19", "r": "3" }],
    [
      "path",
      { "d": "M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15" }
    ],
    ["circle", { "cx": "18", "cy": "5", "r": "3" }]
  ];
  Icon($$renderer, spread_props([
    { name: "route" },
    $$sanitized_props,
    {
      /**
       * @component @name Route
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8Y2lyY2xlIGN4PSI2IiBjeT0iMTkiIHI9IjMiIC8+CiAgPHBhdGggZD0iTTkgMTloOC41YTMuNSAzLjUgMCAwIDAgMC03aC0xMWEzLjUgMy41IDAgMCAxIDAtN0gxNSIgLz4KICA8Y2lyY2xlIGN4PSIxOCIgY3k9IjUiIHI9IjMiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/route
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
function Sigma($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    [
      "path",
      {
        "d": "M18 7V5a1 1 0 0 0-1-1H6.5a.5.5 0 0 0-.4.8l4.5 6a2 2 0 0 1 0 2.4l-4.5 6a.5.5 0 0 0 .4.8H17a1 1 0 0 0 1-1v-2"
      }
    ]
  ];
  Icon($$renderer, spread_props([
    { name: "sigma" },
    $$sanitized_props,
    {
      /**
       * @component @name Sigma
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMTggN1Y1YTEgMSAwIDAgMC0xLTFINi41YS41LjUgMCAwIDAtLjQuOGw0LjUgNmEyIDIgMCAwIDEgMCAyLjRsLTQuNSA2YS41LjUgMCAwIDAgLjQuOEgxN2ExIDEgMCAwIDAgMS0xdi0yIiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/sigma
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
function Sun($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    ["circle", { "cx": "12", "cy": "12", "r": "4" }],
    ["path", { "d": "M12 2v2" }],
    ["path", { "d": "M12 20v2" }],
    ["path", { "d": "m4.93 4.93 1.41 1.41" }],
    ["path", { "d": "m17.66 17.66 1.41 1.41" }],
    ["path", { "d": "M2 12h2" }],
    ["path", { "d": "M20 12h2" }],
    ["path", { "d": "m6.34 17.66-1.41 1.41" }],
    ["path", { "d": "m19.07 4.93-1.41 1.41" }]
  ];
  Icon($$renderer, spread_props([
    { name: "sun" },
    $$sanitized_props,
    {
      /**
       * @component @name Sun
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSI0IiAvPgogIDxwYXRoIGQ9Ik0xMiAydjIiIC8+CiAgPHBhdGggZD0iTTEyIDIwdjIiIC8+CiAgPHBhdGggZD0ibTQuOTMgNC45MyAxLjQxIDEuNDEiIC8+CiAgPHBhdGggZD0ibTE3LjY2IDE3LjY2IDEuNDEgMS40MSIgLz4KICA8cGF0aCBkPSJNMiAxMmgyIiAvPgogIDxwYXRoIGQ9Ik0yMCAxMmgyIiAvPgogIDxwYXRoIGQ9Im02LjM0IDE3LjY2LTEuNDEgMS40MSIgLz4KICA8cGF0aCBkPSJtMTkuMDcgNC45My0xLjQxIDEuNDEiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/sun
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
function Sunrise($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    ["path", { "d": "M12 2v8" }],
    ["path", { "d": "m4.93 10.93 1.41 1.41" }],
    ["path", { "d": "M2 18h2" }],
    ["path", { "d": "M20 18h2" }],
    ["path", { "d": "m19.07 10.93-1.41 1.41" }],
    ["path", { "d": "M22 22H2" }],
    ["path", { "d": "m8 6 4-4 4 4" }],
    ["path", { "d": "M16 18a4 4 0 0 0-8 0" }]
  ];
  Icon($$renderer, spread_props([
    { name: "sunrise" },
    $$sanitized_props,
    {
      /**
       * @component @name Sunrise
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMTIgMnY4IiAvPgogIDxwYXRoIGQ9Im00LjkzIDEwLjkzIDEuNDEgMS40MSIgLz4KICA8cGF0aCBkPSJNMiAxOGgyIiAvPgogIDxwYXRoIGQ9Ik0yMCAxOGgyIiAvPgogIDxwYXRoIGQ9Im0xOS4wNyAxMC45My0xLjQxIDEuNDEiIC8+CiAgPHBhdGggZD0iTTIyIDIySDIiIC8+CiAgPHBhdGggZD0ibTggNiA0LTQgNCA0IiAvPgogIDxwYXRoIGQ9Ik0xNiAxOGE0IDQgMCAwIDAtOCAwIiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/sunrise
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
function Sunset($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    ["path", { "d": "M12 10V2" }],
    ["path", { "d": "m4.93 10.93 1.41 1.41" }],
    ["path", { "d": "M2 18h2" }],
    ["path", { "d": "M20 18h2" }],
    ["path", { "d": "m19.07 10.93-1.41 1.41" }],
    ["path", { "d": "M22 22H2" }],
    ["path", { "d": "m16 6-4 4-4-4" }],
    ["path", { "d": "M16 18a4 4 0 0 0-8 0" }]
  ];
  Icon($$renderer, spread_props([
    { name: "sunset" },
    $$sanitized_props,
    {
      /**
       * @component @name Sunset
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMTIgMTBWMiIgLz4KICA8cGF0aCBkPSJtNC45MyAxMC45MyAxLjQxIDEuNDEiIC8+CiAgPHBhdGggZD0iTTIgMThoMiIgLz4KICA8cGF0aCBkPSJNMjAgMThoMiIgLz4KICA8cGF0aCBkPSJtMTkuMDcgMTAuOTMtMS40MSAxLjQxIiAvPgogIDxwYXRoIGQ9Ik0yMiAyMkgyIiAvPgogIDxwYXRoIGQ9Im0xNiA2LTQgNC00LTQiIC8+CiAgPHBhdGggZD0iTTE2IDE4YTQgNCAwIDAgMC04IDAiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/sunset
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
function Trending_down($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    ["path", { "d": "M16 17h6v-6" }],
    ["path", { "d": "m22 17-8.5-8.5-5 5L2 7" }]
  ];
  Icon($$renderer, spread_props([
    { name: "trending-down" },
    $$sanitized_props,
    {
      /**
       * @component @name TrendingDown
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMTYgMTdoNnYtNiIgLz4KICA8cGF0aCBkPSJtMjIgMTctOC41LTguNS01IDVMMiA3IiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/trending-down
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
function Waves($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    [
      "path",
      {
        "d": "M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"
      }
    ],
    [
      "path",
      {
        "d": "M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"
      }
    ],
    [
      "path",
      {
        "d": "M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"
      }
    ]
  ];
  Icon($$renderer, spread_props([
    { name: "waves" },
    $$sanitized_props,
    {
      /**
       * @component @name Waves
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMiA2Yy42LjUgMS4yIDEgMi41IDFDNyA3IDcgNSA5LjUgNWMyLjYgMCAyLjQgMiA1IDIgMi41IDAgMi41LTIgNS0yIDEuMyAwIDEuOS41IDIuNSAxIiAvPgogIDxwYXRoIGQ9Ik0yIDEyYy42LjUgMS4yIDEgMi41IDEgMi41IDAgMi41LTIgNS0yIDIuNiAwIDIuNCAyIDUgMiAyLjUgMCAyLjUtMiA1LTIgMS4zIDAgMS45LjUgMi41IDEiIC8+CiAgPHBhdGggZD0iTTIgMThjLjYuNSAxLjIgMSAyLjUgMSAyLjUgMCAyLjUtMiA1LTIgMi42IDAgMi40IDIgNSAyIDIuNSAwIDIuNS0yIDUtMiAxLjMgMCAxLjkuNSAyLjUgMSIgLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/waves
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
function Wifi_off($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    ["path", { "d": "M12 20h.01" }],
    ["path", { "d": "M8.5 16.429a5 5 0 0 1 7 0" }],
    ["path", { "d": "M5 12.859a10 10 0 0 1 5.17-2.69" }],
    ["path", { "d": "M19 12.859a10 10 0 0 0-2.007-1.523" }],
    ["path", { "d": "M2 8.82a15 15 0 0 1 4.177-2.643" }],
    ["path", { "d": "M22 8.82a15 15 0 0 0-11.288-3.764" }],
    ["path", { "d": "m2 2 20 20" }]
  ];
  Icon($$renderer, spread_props([
    { name: "wifi-off" },
    $$sanitized_props,
    {
      /**
       * @component @name WifiOff
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMTIgMjBoLjAxIiAvPgogIDxwYXRoIGQ9Ik04LjUgMTYuNDI5YTUgNSAwIDAgMSA3IDAiIC8+CiAgPHBhdGggZD0iTTUgMTIuODU5YTEwIDEwIDAgMCAxIDUuMTctMi42OSIgLz4KICA8cGF0aCBkPSJNMTkgMTIuODU5YTEwIDEwIDAgMCAwLTIuMDA3LTEuNTIzIiAvPgogIDxwYXRoIGQ9Ik0yIDguODJhMTUgMTUgMCAwIDEgNC4xNzctMi42NDMiIC8+CiAgPHBhdGggZD0iTTIyIDguODJhMTUgMTUgMCAwIDAtMTEuMjg4LTMuNzY0IiAvPgogIDxwYXRoIGQ9Im0yIDIgMjAgMjAiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/wifi-off
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
function Wifi($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    ["path", { "d": "M12 20h.01" }],
    ["path", { "d": "M2 8.82a15 15 0 0 1 20 0" }],
    ["path", { "d": "M5 12.859a10 10 0 0 1 14 0" }],
    ["path", { "d": "M8.5 16.429a5 5 0 0 1 7 0" }]
  ];
  Icon($$renderer, spread_props([
    { name: "wifi" },
    $$sanitized_props,
    {
      /**
       * @component @name Wifi
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMTIgMjBoLjAxIiAvPgogIDxwYXRoIGQ9Ik0yIDguODJhMTUgMTUgMCAwIDEgMjAgMCIgLz4KICA8cGF0aCBkPSJNNSAxMi44NTlhMTAgMTAgMCAwIDEgMTQgMCIgLz4KICA8cGF0aCBkPSJNOC41IDE2LjQyOWE1IDUgMCAwIDEgNyAwIiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/wifi
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
const isConnected = writable(false);
const isLoading = writable(false);
const connectionError = writable(null);
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
    return { avgSpeed: 0, maxSpeed: 0, minSpeed: 0, totalReadings: 0 };
  }
  const speeds = $filteredData.map((d) => d.speed);
  const avgSpeed = speeds.reduce((a, b) => a + b, 0) / speeds.length;
  return {
    avgSpeed: Math.round(avgSpeed * 10) / 10,
    maxSpeed: Math.round(Math.max(...speeds) * 10) / 10,
    minSpeed: Math.round(Math.min(...speeds) * 10) / 10,
    totalReadings: $filteredData.length
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
  $$renderer.component(($$renderer2) => {
    let {
      class: className = "",
      title,
      value,
      subtitle,
      icon: Icon2,
      isNewRecord = false,
      trend,
      trendValue
    } = $$props;
    let cardClasses = derived$1(() => [
      "group relative overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl",
      isNewRecord ? "border border-amber-500/50 bg-gradient-to-br from-amber-500/10 via-card to-card shadow-lg shadow-amber-500/10 hover:shadow-amber-500/20" : "border-border/50 bg-gradient-to-br from-card via-card to-muted/20 shadow-sm hover:border-primary/30",
      className
    ].filter(Boolean).join(" "));
    let titleClasses = derived$1(() => isNewRecord ? "text-amber-600 dark:text-amber-400 font-semibold" : "text-muted-foreground font-medium");
    let valueClasses = derived$1(() => isNewRecord ? "text-amber-600 dark:text-amber-400" : "text-foreground");
    let iconBgClasses = derived$1(() => isNewRecord ? "bg-gradient-to-br from-amber-400 to-amber-600 shadow-lg shadow-amber-500/30" : "bg-gradient-to-br from-primary/80 to-primary/40 shadow-md shadow-primary/20");
    let iconClasses = derived$1(() => isNewRecord ? "h-5 w-5 text-white" : "h-4 w-4 text-primary-foreground");
    const TrendIcon = derived$1(() => trend === "up" ? Trending_up : trend === "down" ? Trending_down : Minus);
    const trendColor = derived$1(() => trend === "up" ? "text-emerald-500" : trend === "down" ? "text-rose-500" : "text-muted-foreground");
    Card($$renderer2, {
      class: cardClasses(),
      children: ($$renderer3) => {
        if (isNewRecord) {
          $$renderer3.push("<!--[-->");
          $$renderer3.push(`<div class="absolute -top-6 -right-6 h-24 w-24 rounded-full bg-amber-500/20 blur-3xl transition-all duration-500 group-hover:bg-amber-500/40"></div> <div class="absolute -bottom-4 -left-4 h-16 w-16 rounded-full bg-amber-400/10 blur-2xl transition-all duration-500 group-hover:bg-amber-400/30"></div>`);
        } else {
          $$renderer3.push("<!--[!-->");
          $$renderer3.push(`<div class="absolute -top-4 -right-4 h-20 w-20 rounded-full bg-primary/5 blur-2xl transition-all duration-500 group-hover:bg-primary/10"></div>`);
        }
        $$renderer3.push(`<!--]--> `);
        Card_header($$renderer3, {
          class: "relative z-10 flex flex-row items-center justify-between space-y-0 pb-3",
          children: ($$renderer4) => {
            Card_title($$renderer4, {
              class: `text-sm tracking-wide ${stringify(titleClasses())}`,
              children: ($$renderer5) => {
                $$renderer5.push(`<!---->${escape_html(title)}`);
              }
            });
            $$renderer4.push(`<!----> <div${attr_class(`flex h-10 w-10 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 ${stringify(iconBgClasses())}`)}>`);
            if (isNewRecord) {
              $$renderer4.push("<!--[-->");
              Trophy($$renderer4, { class: iconClasses() });
            } else {
              $$renderer4.push("<!--[!-->");
              if (Icon2) {
                $$renderer4.push("<!--[-->");
                Icon2($$renderer4, { class: iconClasses() });
                $$renderer4.push("<!--]-->");
              } else {
                $$renderer4.push("<!--[!-->");
                $$renderer4.push("<!--]-->");
              }
            }
            $$renderer4.push(`<!--]--></div>`);
          }
        });
        $$renderer3.push(`<!----> `);
        Card_content($$renderer3, {
          class: "relative z-10 pt-0",
          children: ($$renderer4) => {
            $$renderer4.push(`<div class="flex items-end justify-between"><div><div${attr_class(`text-4xl font-extrabold tracking-tight transition-colors ${stringify(valueClasses())}`)}>${escape_html(value)}</div></div> `);
            if (isNewRecord) {
              $$renderer4.push("<!--[-->");
              $$renderer4.push(`<span class="mb-1 inline-flex items-center rounded-full bg-amber-100 px-2.5 py-0.5 text-[10px] font-bold tracking-wider text-amber-700 uppercase shadow-sm dark:bg-amber-500/20 dark:text-amber-400">`);
              Trophy($$renderer4, { class: "mr-1 h-3 w-3" });
              $$renderer4.push(`<!----> Record</span>`);
            } else if (trend && trendValue) {
              $$renderer4.push("<!--[1-->");
              $$renderer4.push(`<div${attr_class(`flex items-center gap-1 rounded-full bg-muted/50 px-2 py-1 text-xs font-medium ${stringify(trendColor())}`)}>`);
              if (TrendIcon()) {
                $$renderer4.push("<!--[-->");
                TrendIcon()($$renderer4, { class: "h-3.5 w-3.5" });
                $$renderer4.push("<!--]-->");
              } else {
                $$renderer4.push("<!--[!-->");
                $$renderer4.push("<!--]-->");
              }
              $$renderer4.push(` <span>${escape_html(trendValue)}</span></div>`);
            } else {
              $$renderer4.push("<!--[!-->");
            }
            $$renderer4.push(`<!--]--></div> `);
            if (subtitle && !isNewRecord) {
              $$renderer4.push("<!--[-->");
              $$renderer4.push(`<p class="mt-2 text-xs text-muted-foreground/80">${escape_html(subtitle)}</p>`);
            } else if (isNewRecord) {
              $$renderer4.push("<!--[1-->");
              $$renderer4.push(`<p class="mt-2 text-sm font-medium text-amber-600/90 dark:text-amber-400/90">${escape_html(subtitle ? subtitle : "Nouveau record battu !")}</p>`);
            } else {
              $$renderer4.push("<!--[!-->");
            }
            $$renderer4.push(`<!--]-->`);
          }
        });
        $$renderer3.push(`<!---->`);
      }
    });
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
    let minSpeed = derived$1(() => Math.min(...data.map((d) => d.speed).filter((s) => s !== null && !isNaN(s))));
    let maxSpeed = derived$1(() => Math.max(...data.map((d) => d.speed).filter((s) => s !== null && !isNaN(s))));
    let option = derived$1(() => ({
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "line",
          lineStyle: { color: "rgba(255, 255, 255, 0.3)", width: 1, type: "dashed" }
        },
        backgroundColor: "rgba(15, 23, 42, 0.95)",
        borderColor: "rgba(255, 255, 255, 0.1)",
        textStyle: {
          color: "#f1f5f9",
          fontFamily: "system-ui, sans-serif",
          fontSize: 12
        },
        padding: [12, 16],
        cornerRadius: 8,
        extraCssText: "box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4); backdrop-filter: blur(8px);"
      },
      legend: {
        data: [
          {
            name: "Voie gauche",
            icon: "roundRect",
            itemWidth: 12,
            itemHeight: 4
          },
          {
            name: "Voie droite",
            icon: "roundRect",
            itemWidth: 12,
            itemHeight: 4
          }
        ],
        textStyle: { color: "#94a3b8", fontFamily: "system-ui, sans-serif" },
        top: 8,
        itemGap: 24
      },
      grid: {
        left: "2%",
        right: "2%",
        bottom: "2%",
        top: "18%",
        containLabel: true
      },
      xAxis: {
        type: "category",
        boundaryGap: false,
        data: processedData().timestamps,
        axisLine: { lineStyle: { color: "rgba(148, 163, 184, 0.2)" } },
        axisTick: { show: false },
        axisLabel: {
          color: "#64748b",
          fontFamily: "system-ui, sans-serif",
          fontSize: 11,
          interval: Math.floor(processedData().timestamps.length / 8)
        }
      },
      yAxis: {
        type: "value",
        name: "km/h",
        nameTextStyle: {
          color: "#64748b",
          fontFamily: "system-ui, sans-serif",
          fontSize: 11,
          padding: [0, 30, 0, 0]
        },
        axisLine: { show: false },
        axisTick: { show: false },
        axisLabel: {
          color: "#64748b",
          fontFamily: "system-ui, sans-serif",
          fontSize: 11
        },
        splitLine: {
          lineStyle: { color: "rgba(148, 163, 184, 0.1)", type: "dashed" }
        }
      },
      series: [
        {
          name: "Voie gauche",
          type: "line",
          smooth: 0.35,
          symbol: "circle",
          symbolSize: 6,
          showSymbol: false,
          sampling: "lttb",
          connectNulls: true,
          triggerLineEvent: true,
          itemStyle: { color: "#0ea5e9" },
          lineStyle: {
            width: 3,
            shadowColor: "rgba(14, 165, 233, 0.5)",
            shadowBlur: 8,
            shadowOffsetY: 4
          },
          areaStyle: {
            color: {
              type: "linear",
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [
                { offset: 0, color: "rgba(14, 165, 233, 0.25)" },
                { offset: 0.5, color: "rgba(14, 165, 233, 0.08)" },
                { offset: 1, color: "rgba(14, 165, 233, 0.02)" }
              ]
            }
          },
          emphasis: {
            focus: "series",
            itemStyle: { borderColor: "#fff", borderWidth: 2 }
          },
          data: processedData().leftSpeeds
        },
        {
          name: "Voie droite",
          type: "line",
          smooth: 0.35,
          symbol: "circle",
          symbolSize: 6,
          showSymbol: false,
          sampling: "lttb",
          connectNulls: true,
          triggerLineEvent: true,
          itemStyle: { color: "#f97316" },
          lineStyle: {
            width: 3,
            shadowColor: "rgba(249, 115, 22, 0.5)",
            shadowBlur: 8,
            shadowOffsetY: 4
          },
          areaStyle: {
            color: {
              type: "linear",
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [
                { offset: 0, color: "rgba(249, 115, 22, 0.25)" },
                { offset: 0.5, color: "rgba(249, 115, 22, 0.08)" },
                { offset: 1, color: "rgba(249, 115, 22, 0.02)" }
              ]
            }
          },
          emphasis: {
            focus: "series",
            itemStyle: { borderColor: "#fff", borderWidth: 2 }
          },
          data: processedData().rightSpeeds
        }
      ],
      animation: true,
      animationDuration: 800,
      animationEasing: "cubicOut"
    }));
    Card($$renderer2, {
      class: "overflow-hidden border-border/50 bg-linear-to-b from-card to-card/50",
      children: ($$renderer3) => {
        Card_header($$renderer3, {
          class: "pb-4",
          children: ($$renderer4) => {
            $$renderer4.push(`<div class="flex items-center justify-between"><div>`);
            Card_title($$renderer4, {
              class: "flex items-center gap-2 text-lg",
              children: ($$renderer5) => {
                $$renderer5.push(`<div class="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10">`);
                Activity($$renderer5, { class: "h-4 w-4 text-primary" });
                $$renderer5.push(`<!----></div> ${escape_html(title)}`);
              }
            });
            $$renderer4.push(`<!----> `);
            if (description) {
              $$renderer4.push("<!--[-->");
              Card_description($$renderer4, {
                class: "mt-1",
                children: ($$renderer5) => {
                  $$renderer5.push(`<!---->${escape_html(description)}`);
                }
              });
            } else {
              $$renderer4.push("<!--[!-->");
            }
            $$renderer4.push(`<!--]--></div> `);
            if (data.length > 0) {
              $$renderer4.push("<!--[-->");
              $$renderer4.push(`<div class="flex items-center gap-3 rounded-xl bg-muted/50 p-2 pr-3"><div class="flex items-center gap-1.5"><div class="h-2 w-2 rounded-full bg-sky-500"></div> <span class="text-xs font-medium text-muted-foreground">Min: <span class="text-foreground">${escape_html(minSpeed().toFixed(1))}</span></span></div> <div class="h-4 w-px bg-border"></div> <div class="flex items-center gap-1.5"><div class="h-2 w-2 rounded-full bg-orange-500"></div> <span class="text-xs font-medium text-muted-foreground">Max: <span class="text-foreground">${escape_html(maxSpeed().toFixed(1))}</span></span></div></div>`);
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
              $$renderer4.push(`<div class="flex h-[320px] flex-col items-center justify-center gap-3 rounded-xl border-2 border-dashed border-muted-foreground/20 bg-muted/5"><div class="flex h-14 w-14 items-center justify-center rounded-full bg-muted">`);
              Waves($$renderer4, { class: "h-7 w-7 text-muted-foreground/50" });
              $$renderer4.push(`<!----></div> <p class="text-sm font-medium text-muted-foreground">Aucune donnée disponible</p> <p class="text-xs text-muted-foreground/70">Les données apparaîtront ici</p></div>`);
            } else {
              $$renderer4.push("<!--[!-->");
              Echart($$renderer4, { option: option(), style: "height: 320px" });
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
      const total = leftCount + rightCount;
      return {
        leftCount,
        rightCount,
        leftPercent: total > 0 ? Math.round(leftCount / total * 100) : 0,
        rightPercent: total > 0 ? Math.round(rightCount / total * 100) : 0
      };
    });
    let option = derived$1(() => ({
      tooltip: {
        trigger: "item",
        formatter: "{b}: {c} ({d}%)",
        backgroundColor: "rgba(15, 23, 42, 0.95)",
        borderColor: "rgba(255, 255, 255, 0.1)",
        textStyle: { color: "#f1f5f9", fontFamily: "system-ui, sans-serif" },
        padding: [12, 16],
        cornerRadius: 8,
        extraCssText: "box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4); backdrop-filter: blur(8px);"
      },
      legend: {
        orient: "vertical",
        left: "left",
        textStyle: { color: "#94a3b8", fontFamily: "system-ui, sans-serif" },
        itemWidth: 12,
        itemHeight: 8,
        itemGap: 16
      },
      series: [
        {
          name: "Voies",
          type: "pie",
          radius: ["45%", "75%"],
          center: ["55%", "50%"],
          avoidLabelOverlap: false,
          itemStyle: {
            borderRadius: 8,
            borderColor: "rgba(15, 23, 42, 0.8)",
            borderWidth: 3
          },
          label: {
            show: true,
            position: "outside",
            formatter: "{b}\n{d}%",
            color: "#f1f5f9",
            fontSize: 12,
            fontFamily: "system-ui, sans-serif",
            lineHeight: 18
          },
          emphasis: {
            label: { show: true, fontSize: 14, fontWeight: "bold" },
            itemStyle: {
              shadowBlur: 20,
              shadowOffsetX: 0,
              shadowColor: "rgba(0, 0, 0, 0.5)"
            }
          },
          labelLine: {
            show: true,
            lineStyle: { color: "rgba(255, 255, 255, 0.3)" },
            smooth: 0.2
          },
          data: [
            {
              value: processedData().leftCount,
              name: "Voie gauche",
              itemStyle: { color: "#0ea5e9" }
            },
            {
              value: processedData().rightCount,
              name: "Voie droite",
              itemStyle: { color: "#f97316" }
            }
          ]
        }
      ],
      animation: true,
      animationDuration: 1e3,
      animationEasing: "cubicOut"
    }));
    Card($$renderer2, {
      class: "overflow-hidden border-border/50 bg-gradient-to-b from-card to-card/50",
      children: ($$renderer3) => {
        Card_header($$renderer3, {
          class: "pb-4",
          children: ($$renderer4) => {
            Card_title($$renderer4, {
              class: "flex items-center gap-2 text-lg",
              children: ($$renderer5) => {
                $$renderer5.push(`<div class="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10">`);
                Route($$renderer5, { class: "h-4 w-4 text-primary" });
                $$renderer5.push(`<!----></div> Répartition par voie`);
              }
            });
            $$renderer4.push(`<!----> `);
            Card_description($$renderer4, {
              class: "mt-1",
              children: ($$renderer5) => {
                $$renderer5.push(`<!---->Distribution des passages entre les deux voies`);
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
              $$renderer4.push(`<div class="flex h-[300px] flex-col items-center justify-center gap-3 rounded-xl border-2 border-dashed border-muted-foreground/20 bg-muted/5"><div class="flex h-14 w-14 items-center justify-center rounded-full bg-muted">`);
              Waves($$renderer4, { class: "h-7 w-7 text-muted-foreground/50" });
              $$renderer4.push(`<!----></div> <p class="text-sm font-medium text-muted-foreground">Aucune donnée disponible</p></div>`);
            } else {
              $$renderer4.push("<!--[!-->");
              Echart($$renderer4, { option: option(), style: "height: 300px" });
              $$renderer4.push(`<!----> <div class="mt-4 grid grid-cols-2 gap-4"><div class="group relative overflow-hidden rounded-xl border border-sky-500/20 bg-gradient-to-br from-sky-500/10 to-transparent p-4 transition-all hover:border-sky-500/40"><div class="absolute -top-4 -right-4 h-16 w-16 rounded-full bg-sky-500/10 blur-2xl transition-all duration-500 group-hover:bg-sky-500/20"></div> <div class="relative z-10"><div class="flex items-center gap-2"><div class="h-2.5 w-2.5 rounded-full bg-sky-500"></div> <span class="text-xs font-medium text-muted-foreground">Voie gauche</span></div> <div class="mt-2 text-2xl font-bold text-sky-500">${escape_html(processedData().leftCount)}</div> <div class="text-xs text-muted-foreground/70">${escape_html(processedData().leftPercent)}% du trafic</div></div></div> <div class="group relative overflow-hidden rounded-xl border border-orange-500/20 bg-gradient-to-br from-orange-500/10 to-transparent p-4 transition-all hover:border-orange-500/40"><div class="absolute -top-4 -right-4 h-16 w-16 rounded-full bg-orange-500/10 blur-2xl transition-all duration-500 group-hover:bg-orange-500/20"></div> <div class="relative z-10"><div class="flex items-center gap-2"><div class="h-2.5 w-2.5 rounded-full bg-orange-500"></div> <span class="text-xs font-medium text-muted-foreground">Voie droite</span></div> <div class="mt-2 text-2xl font-bold text-orange-500">${escape_html(processedData().rightCount)}</div> <div class="text-xs text-muted-foreground/70">${escape_html(processedData().rightPercent)}% du trafic</div></div></div></div>`);
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
      const sortedIndices = avgSpeeds.map((_, i) => i).sort((a, b) => avgSpeeds[b] - avgSpeeds[a]);
      const sortedSensors = sortedIndices.map((i) => sensors2[i]);
      const sortedAvgSpeeds = sortedIndices.map((i) => avgSpeeds[i]);
      const sortedCounts = sortedIndices.map((i) => sensorData[sensors2[i]].count);
      return {
        sensors: sortedSensors,
        avgSpeeds: sortedAvgSpeeds,
        counts: sortedCounts
      };
    });
    let option = derived$1(() => ({
      tooltip: {
        trigger: "axis",
        axisPointer: { type: "shadow" },
        backgroundColor: "rgba(15, 23, 42, 0.95)",
        borderColor: "rgba(255, 255, 255, 0.1)",
        textStyle: {
          color: "#f1f5f9",
          fontFamily: "system-ui, sans-serif",
          fontSize: 12
        },
        padding: [12, 16],
        cornerRadius: 8,
        extraCssText: "box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4); backdrop-filter: blur(8px);",
        formatter: (params) => {
          const sensor = params[0].name;
          const idx = processedData().sensors.indexOf(sensor);
          const count = processedData().counts[idx];
          return `<strong>${sensor}</strong><br/>Vitesse moyenne: <strong>${params[0].value} km/h</strong><br/>Passages: <strong>${count}</strong>`;
        }
      },
      grid: {
        left: "2%",
        right: "4%",
        bottom: "2%",
        top: "12%",
        containLabel: true
      },
      xAxis: {
        type: "category",
        data: processedData().sensors,
        axisLabel: {
          rotate: 45,
          color: "#64748b",
          fontFamily: "system-ui, sans-serif",
          fontSize: 11
        },
        axisLine: { lineStyle: { color: "rgba(148, 163, 184, 0.2)" } },
        axisTick: { show: false }
      },
      yAxis: {
        type: "value",
        name: "km/h",
        nameTextStyle: {
          color: "#64748b",
          fontFamily: "system-ui, sans-serif",
          fontSize: 11,
          padding: [0, 30, 0, 0]
        },
        axisLine: { show: false },
        axisTick: { show: false },
        axisLabel: {
          color: "#64748b",
          fontFamily: "system-ui, sans-serif",
          fontSize: 11
        },
        splitLine: {
          lineStyle: { color: "rgba(148, 163, 184, 0.1)", type: "dashed" }
        }
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
                { offset: 0, color: "#ef4444" },
                { offset: 1, color: "#ea580c" }
              ]
            },
            borderRadius: [4, 4, 0, 0]
          },
          emphasis: {
            itemStyle: { shadowBlur: 10, shadowColor: "rgba(239, 68, 68, 0.5)" }
          }
        }
      ],
      animation: true,
      animationDuration: 800,
      animationEasing: "cubicOut"
    }));
    Card($$renderer2, {
      class: "overflow-hidden border-border/50 bg-gradient-to-b from-card to-card/50",
      children: ($$renderer3) => {
        Card_header($$renderer3, {
          class: "pb-4",
          children: ($$renderer4) => {
            Card_title($$renderer4, {
              class: "flex items-center gap-2 text-lg",
              children: ($$renderer5) => {
                $$renderer5.push(`<div class="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10">`);
                Radio($$renderer5, { class: "h-4 w-4 text-primary" });
                $$renderer5.push(`<!----></div> Statistiques par-capteur`);
              }
            });
            $$renderer4.push(`<!----> `);
            Card_description($$renderer4, {
              class: "mt-1",
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
              $$renderer4.push(`<div class="flex h-[300px] flex-col items-center justify-center gap-3 rounded-xl border-2 border-dashed border-muted-foreground/20 bg-muted/5"><div class="flex h-14 w-14 items-center justify-center rounded-full bg-muted">`);
              Waves($$renderer4, { class: "h-7 w-7 text-muted-foreground/50" });
              $$renderer4.push(`<!----></div> <p class="text-sm font-medium text-muted-foreground">Aucune donnée disponible</p></div>`);
            } else {
              $$renderer4.push("<!--[!-->");
              Echart($$renderer4, { option: option(), style: "height: 300px" });
              $$renderer4.push(`<!----> <div class="mt-4 flex items-center justify-center rounded-xl bg-muted/30 p-3"><div class="flex items-center gap-2"><div class="flex h-8 w-8 items-center justify-center rounded-lg bg-red-500/10">`);
              Activity($$renderer4, { class: "h-4 w-4 text-red-500" });
              $$renderer4.push(`<!----></div> <div><div class="text-xs text-muted-foreground">Total capteurs actifs</div> <div class="text-sm font-bold text-red-500">${escape_html(processedData().sensors.length)}</div></div></div></div>`);
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
        axisPointer: {
          type: "cross",
          crossStyle: { color: "#999" },
          lineStyle: { color: "rgba(255, 255, 255, 0.3)", width: 1, type: "dashed" }
        },
        backgroundColor: "rgba(15, 23, 42, 0.95)",
        borderColor: "rgba(255, 255, 255, 0.1)",
        textStyle: {
          color: "#f1f5f9",
          fontFamily: "system-ui, sans-serif",
          fontSize: 12
        },
        padding: [12, 16],
        cornerRadius: 8,
        extraCssText: "box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4); backdrop-filter: blur(8px);"
      },
      legend: {
        data: ["Vitesse moyenne", "Nombre de passages"],
        textStyle: { color: "#94a3b8", fontFamily: "system-ui, sans-serif" },
        top: 8,
        itemGap: 24
      },
      grid: {
        left: "2%",
        right: "2%",
        bottom: "2%",
        top: "18%",
        containLabel: true
      },
      xAxis: {
        type: "category",
        data: processedData().hours,
        axisLabel: {
          color: "#64748b",
          fontFamily: "system-ui, sans-serif",
          fontSize: 11,
          interval: Math.floor(processedData().hours.length / 10)
        },
        axisLine: { lineStyle: { color: "rgba(148, 163, 184, 0.2)" } },
        axisTick: { show: false }
      },
      yAxis: [
        {
          type: "value",
          name: "km/h",
          position: "left",
          nameTextStyle: {
            color: "#64748b",
            fontFamily: "system-ui, sans-serif",
            fontSize: 11,
            padding: [0, 30, 0, 0]
          },
          axisLine: { show: false },
          axisTick: { show: false },
          axisLabel: {
            color: "#64748b",
            fontFamily: "system-ui, sans-serif",
            fontSize: 11
          },
          splitLine: {
            lineStyle: { color: "rgba(148, 163, 184, 0.1)", type: "dashed" }
          }
        },
        {
          type: "value",
          name: "Passages",
          position: "right",
          nameTextStyle: {
            color: "#64748b",
            fontFamily: "system-ui, sans-serif",
            fontSize: 11,
            padding: [0, 0, 0, 30]
          },
          axisLine: { show: false },
          axisTick: { show: false },
          axisLabel: {
            color: "#64748b",
            fontFamily: "system-ui, sans-serif",
            fontSize: 11
          },
          splitLine: { show: false }
        }
      ],
      series: [
        {
          name: "Vitesse moyenne",
          type: "line",
          yAxisIndex: 0,
          data: processedData().avgSpeeds,
          smooth: 0.35,
          symbol: "circle",
          symbolSize: 6,
          showSymbol: false,
          itemStyle: { color: "#ec4899" },
          lineStyle: {
            width: 3,
            shadowColor: "rgba(236, 72, 153, 0.5)",
            shadowBlur: 8,
            shadowOffsetY: 4
          },
          areaStyle: {
            color: {
              type: "linear",
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [
                { offset: 0, color: "rgba(236, 72, 153, 0.25)" },
                { offset: 0.5, color: "rgba(236, 72, 153, 0.08)" },
                { offset: 1, color: "rgba(236, 72, 153, 0.02)" }
              ]
            }
          },
          emphasis: { focus: "series" }
        },
        {
          name: "Nombre de passages",
          type: "bar",
          yAxisIndex: 1,
          data: processedData().counts,
          itemStyle: {
            color: {
              type: "linear",
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [
                { offset: 0, color: "#6366f1" },
                { offset: 1, color: "#4f46e5" }
              ]
            },
            borderRadius: [4, 4, 0, 0]
          },
          barWidth: "50%",
          emphasis: { focus: "series" }
        }
      ],
      animation: true,
      animationDuration: 800,
      animationEasing: "cubicOut"
    }));
    Card($$renderer2, {
      class: "overflow-hidden border-border/50 bg-gradient-to-b from-card to-card/50",
      children: ($$renderer3) => {
        Card_header($$renderer3, {
          class: "pb-4",
          children: ($$renderer4) => {
            Card_title($$renderer4, {
              class: "flex items-center gap-2 text-lg",
              children: ($$renderer5) => {
                $$renderer5.push(`<div class="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10">`);
                Clock($$renderer5, { class: "h-4 w-4 text-primary" });
                $$renderer5.push(`<!----></div> Tendance horaire`);
              }
            });
            $$renderer4.push(`<!----> `);
            Card_description($$renderer4, {
              class: "mt-1",
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
              $$renderer4.push(`<div class="flex h-[350px] flex-col items-center justify-center gap-3 rounded-xl border-2 border-dashed border-muted-foreground/20 bg-muted/5"><div class="flex h-14 w-14 items-center justify-center rounded-full bg-muted">`);
              Waves($$renderer4, { class: "h-7 w-7 text-muted-foreground/50" });
              $$renderer4.push(`<!----></div> <p class="text-sm font-medium text-muted-foreground">Aucune donnée disponible</p></div>`);
            } else {
              $$renderer4.push("<!--[!-->");
              Echart($$renderer4, { option: option(), style: "height: 350px" });
              $$renderer4.push(`<!----> <div class="mt-4 flex items-center justify-between rounded-xl bg-muted/30 p-3"><div class="flex items-center gap-2"><div class="flex h-8 w-8 items-center justify-center rounded-lg bg-pink-500/10">`);
              Trending_up($$renderer4, { class: "h-4 w-4 text-pink-500" });
              $$renderer4.push(`<!----></div> <div><div class="text-xs text-muted-foreground">Vitesse moy.</div> <div class="text-sm font-bold">${escape_html(Math.round(processedData().avgSpeeds.reduce((a, b) => a + b, 0) / (processedData().avgSpeeds.length || 1)))} km/h</div></div></div> <div class="h-8 w-px bg-border"></div> <div class="flex items-center gap-2"><div class="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-500/10">`);
              Chart_column($$renderer4, { class: "h-4 w-4 text-indigo-500" });
              $$renderer4.push(`<!----></div> <div><div class="text-xs text-muted-foreground">Total passages</div> <div class="text-sm font-bold">${escape_html(processedData().counts.reduce((a, b) => a + b, 0))}</div></div></div></div>`);
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
              $$renderer4.push(`<button class="flex items-center gap-1 rounded-md border px-3 py-1.5 text-sm hover:bg-accent">`);
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
              $$renderer4.push(`<div class="flex h-[300px] items-center justify-center text-muted-foreground">Aucune donnée disponible</div>`);
            } else {
              $$renderer4.push("<!--[!-->");
              $$renderer4.push(`<div class="overflow-x-auto rounded-md border"><table class="w-full text-sm"><thead><tr class="border-b"><th${attr_style(`width:${stringify(colWidthId)}px`)} class="relative p-0"><button class="flex h-9 w-full items-center justify-start gap-1 px-3 text-left text-xs font-medium hover:bg-muted">ID `);
              {
                $$renderer4.push("<!--[-->");
                Arrow_up_down($$renderer4, { class: "h-3 w-3" });
              }
              $$renderer4.push(`<!--]--></button> <span role="separator" class="group absolute top-0 right-0 flex h-full w-2 cursor-col-resize items-center justify-center hover:bg-primary/50 active:bg-primary">`);
              Grip_vertical($$renderer4, {
                class: "h-4 w-4 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100"
              });
              $$renderer4.push(`<!----></span></th><th${attr_style(`width:${stringify(colWidthSensor)}px`)} class="relative p-0"><button class="flex h-9 w-full items-center justify-start gap-1 px-3 text-left text-xs font-medium hover:bg-muted">Capteur `);
              {
                $$renderer4.push("<!--[-->");
                Arrow_up_down($$renderer4, { class: "h-3 w-3" });
              }
              $$renderer4.push(`<!--]--></button> <span role="separator" class="group absolute top-0 right-0 flex h-full w-2 cursor-col-resize items-center justify-center hover:bg-primary/50 active:bg-primary">`);
              Grip_vertical($$renderer4, {
                class: "h-4 w-4 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100"
              });
              $$renderer4.push(`<!----></span></th><th${attr_style(`width:${stringify(colWidthSpeed)}px`)} class="relative p-0"><button class="flex h-9 w-full items-center justify-start gap-1 px-3 text-left text-xs font-medium hover:bg-muted">Vitesse `);
              {
                $$renderer4.push("<!--[-->");
                Arrow_up_down($$renderer4, { class: "h-3 w-3" });
              }
              $$renderer4.push(`<!--]--></button> <span role="separator" class="group absolute top-0 right-0 flex h-full w-2 cursor-col-resize items-center justify-center hover:bg-primary/50 active:bg-primary">`);
              Grip_vertical($$renderer4, {
                class: "h-4 w-4 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100"
              });
              $$renderer4.push(`<!----></span></th><th${attr_style(`width:${stringify(colWidthLane)}px`)} class="relative p-0"><button class="flex h-9 w-full items-center justify-start gap-1 px-3 text-left text-xs font-medium hover:bg-muted">Voie `);
              {
                $$renderer4.push("<!--[-->");
                Arrow_up_down($$renderer4, { class: "h-3 w-3" });
              }
              $$renderer4.push(`<!--]--></button> <span role="separator" class="group absolute top-0 right-0 flex h-full w-2 cursor-col-resize items-center justify-center hover:bg-primary/50 active:bg-primary">`);
              Grip_vertical($$renderer4, {
                class: "h-4 w-4 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100"
              });
              $$renderer4.push(`<!----></span></th><th${attr_style(`width:${stringify(colWidthDate)}px`)} class="relative p-0"><button class="flex h-9 w-full items-center justify-start gap-1 px-3 text-left text-xs font-medium hover:bg-muted">Date &amp; Heure `);
              {
                $$renderer4.push("<!--[-->");
                Arrow_up_down($$renderer4, { class: "h-3 w-3" });
              }
              $$renderer4.push(`<!--]--></button> <span role="separator" class="group absolute top-0 right-0 flex h-full w-2 cursor-col-resize items-center justify-center hover:bg-primary/50 active:bg-primary">`);
              Grip_vertical($$renderer4, {
                class: "h-4 w-4 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100"
              });
              $$renderer4.push(`<!----></span></th></tr><tr class="border-b"><th${attr_style(`width:${stringify(colWidthId)}px`)} class="p-1"><div class="relative">`);
              Search($$renderer4, { class: "absolute top-2 left-2 h-3 w-3 text-muted-foreground" });
              $$renderer4.push(`<!----> <input class="h-7 w-full rounded border bg-background pl-7 text-xs" placeholder="ID..."${attr("value", filterIdValue)}/></div></th><th${attr_style(`width:${stringify(colWidthSensor)}px`)} class="p-1"><div class="relative">`);
              Search($$renderer4, { class: "absolute top-2 left-2 h-3 w-3 text-muted-foreground" });
              $$renderer4.push(`<!----> <input class="h-7 w-full rounded border bg-background pl-7 text-xs" placeholder="Rechercher..."${attr("value", filterSensorValue)}/></div></th><th${attr_style(`width:${stringify(colWidthSpeed)}px`)} class="p-1"><div class="relative">`);
              Search($$renderer4, { class: "absolute top-2 left-2 h-3 w-3 text-muted-foreground" });
              $$renderer4.push(`<!----> <input class="h-7 w-full rounded border bg-background pl-7 text-xs" placeholder="Vitesse..."${attr("value", filterSpeedValue)}/></div></th><th${attr_style(`width:${stringify(colWidthLane)}px`)} class="p-1"><div class="relative">`);
              Search($$renderer4, { class: "absolute top-2 left-2 h-3 w-3 text-muted-foreground" });
              $$renderer4.push(`<!----> <input class="h-7 w-full rounded border bg-background pl-7 text-xs" placeholder="Voie..."${attr("value", filterLaneValue)}/></div></th><th${attr_style(`width:${stringify(colWidthDate)}px`)} class="p-1"><div class="relative">`);
              Search($$renderer4, { class: "absolute top-2 left-2 h-3 w-3 text-muted-foreground" });
              $$renderer4.push(`<!----> <input class="h-7 w-full rounded border bg-background pl-7 text-xs" placeholder="Date..."${attr("value", filterDateValue)}/></div></th></tr></thead><tbody>`);
              if (paginatedData().length === 0) {
                $$renderer4.push("<!--[-->");
                $$renderer4.push(`<tr><td colspan="5" class="h-24 text-center text-muted-foreground">Aucun résultat trouvé</td></tr>`);
              } else {
                $$renderer4.push("<!--[!-->");
                $$renderer4.push(`<!--[-->`);
                const each_array = ensure_array_like(paginatedData());
                for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
                  let record = each_array[$$index];
                  $$renderer4.push(`<tr class="border-b transition-colors hover:bg-muted/50"><td${attr_style(`width:${stringify(colWidthId)}px`)} class="px-3 py-2 font-mono text-sm">${escape_html(record.id)}</td><td${attr_style(`width:${stringify(colWidthSensor)}px`)} class="px-3 py-2">${escape_html(record.sensor_name || "Unknown")}</td><td${attr_style(`width:${stringify(colWidthSpeed)}px`)} class="px-3 py-2"><span class="font-semibold">${escape_html(record.speed)} km/h</span></td><td${attr_style(`width:${stringify(colWidthLane)}px`)} class="px-3 py-2"><span${attr_class(`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ${stringify(record.lane === Lane.Left ? "border-transparent bg-primary text-primary-foreground" : "border-transparent bg-secondary text-secondary-foreground")}`)}>${escape_html(record.lane === Lane.Left ? "Gauche" : "Droite")}</span></td><td${attr_style(`width:${stringify(colWidthDate)}px`)} class="px-3 py-2 text-sm text-muted-foreground">${escape_html(format(new Date(record.created_at), "dd/MM/yyyy HH:mm:ss"))}</td></tr>`);
                }
                $$renderer4.push(`<!--]-->`);
              }
              $$renderer4.push(`<!--]--></tbody></table></div> <div class="mt-4 flex items-center justify-between"><div class="flex items-center gap-4"><div class="flex items-center gap-2"><span class="text-sm text-muted-foreground">Lignes par page:</span> `);
              $$renderer4.select(
                {
                  class: "h-8 rounded border bg-background px-2 text-sm",
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
              $$renderer4.push(`</div> <div class="text-sm text-muted-foreground">${escape_html(totalPages() > 0 ? `Page ${currentPage} sur ${totalPages()}` : "Aucune page")}</div></div> `);
              if (totalPages() > 1) {
                $$renderer4.push("<!--[-->");
                $$renderer4.push(`<div class="flex gap-2"><button class="rounded-md border px-3 py-1.5 text-sm hover:bg-accent disabled:opacity-50"${attr("disabled", currentPage === 1, true)}>Précédent</button> <button class="rounded-md border px-3 py-1.5 text-sm hover:bg-accent disabled:opacity-50"${attr("disabled", currentPage === totalPages(), true)}>Suivant</button></div>`);
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
    let peakRange = derived$1(() => {
      const max = Math.max(...processedData().values);
      const idx = processedData().values.indexOf(max);
      return processedData().labels[idx] || "-";
    });
    let option = derived$1(() => ({
      tooltip: {
        trigger: "axis",
        axisPointer: { type: "shadow" },
        backgroundColor: "rgba(15, 23, 42, 0.95)",
        borderColor: "rgba(255, 255, 255, 0.1)",
        textStyle: {
          color: "#f1f5f9",
          fontFamily: "system-ui, sans-serif",
          fontSize: 12
        },
        padding: [12, 16],
        cornerRadius: 8,
        extraCssText: "box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4); backdrop-filter: blur(8px);",
        formatter: (params) => `<strong>${params[0].axisValue} km/h</strong><br/>Nombre de passages: <strong>${params[0].value}</strong>`
      },
      grid: {
        left: "2%",
        right: "4%",
        bottom: "2%",
        top: "3%",
        containLabel: true
      },
      xAxis: {
        type: "category",
        data: processedData().labels,
        axisLabel: {
          rotate: 45,
          color: "#64748b",
          fontFamily: "system-ui, sans-serif",
          fontSize: 11
        },
        axisLine: { lineStyle: { color: "rgba(148, 163, 184, 0.2)" } },
        axisTick: { show: false }
      },
      yAxis: {
        type: "value",
        name: "Nombre",
        nameTextStyle: {
          color: "#64748b",
          fontFamily: "system-ui, sans-serif",
          fontSize: 11,
          padding: [0, 0, 0, 30]
        },
        axisLine: { show: false },
        axisTick: { show: false },
        axisLabel: {
          color: "#64748b",
          fontFamily: "system-ui, sans-serif",
          fontSize: 11
        },
        splitLine: {
          lineStyle: { color: "rgba(148, 163, 184, 0.1)", type: "dashed" }
        }
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
                { offset: 0.5, color: "#14b8a6" },
                { offset: 1, color: "#0d9488" }
              ]
            },
            borderRadius: [4, 4, 0, 0]
          },
          emphasis: {
            itemStyle: { shadowBlur: 10, shadowColor: "rgba(16, 185, 129, 0.5)" }
          }
        }
      ],
      animation: true,
      animationDuration: 800,
      animationEasing: "cubicOut"
    }));
    Card($$renderer2, {
      class: "overflow-hidden border-border/50 bg-gradient-to-b from-card to-card/50",
      children: ($$renderer3) => {
        Card_header($$renderer3, {
          class: "pb-4",
          children: ($$renderer4) => {
            Card_title($$renderer4, {
              class: "flex items-center gap-2 text-lg",
              children: ($$renderer5) => {
                $$renderer5.push(`<div class="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10">`);
                Chart_column($$renderer5, { class: "h-4 w-4 text-primary" });
                $$renderer5.push(`<!----></div> Distribution des vitesses`);
              }
            });
            $$renderer4.push(`<!----> `);
            Card_description($$renderer4, {
              class: "mt-1",
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
              $$renderer4.push(`<div class="flex h-[300px] flex-col items-center justify-center gap-3 rounded-xl border-2 border-dashed border-muted-foreground/20 bg-muted/5"><div class="flex h-14 w-14 items-center justify-center rounded-full bg-muted">`);
              Waves($$renderer4, { class: "h-7 w-7 text-muted-foreground/50" });
              $$renderer4.push(`<!----></div> <p class="text-sm font-medium text-muted-foreground">Aucune donnée disponible</p></div>`);
            } else {
              $$renderer4.push("<!--[!-->");
              Echart($$renderer4, { option: option(), style: "height: 300px" });
              $$renderer4.push(`<!----> <div class="mt-4 flex items-center justify-center rounded-xl bg-muted/30 p-3"><div class="flex items-center gap-2"><div class="flex h-8 w-8 items-center justify-center rounded-lg bg-teal-500/10">`);
              Gauge($$renderer4, { class: "h-4 w-4 text-teal-500" });
              $$renderer4.push(`<!----></div> <div><div class="text-xs text-muted-foreground">Plage de vitesse la plus fréquente</div> <div class="text-sm font-bold text-teal-500">${escape_html(peakRange())} km/h</div></div></div></div>`);
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
      const sortedIndices = averageSpeeds.map((_, i) => i).sort((a, b) => averageSpeeds[b] - averageSpeeds[a]);
      const sortedNames = sortedIndices.map((i) => sensorNames[i]);
      const sortedSpeeds = sortedIndices.map((i) => averageSpeeds[i]);
      return { sensorNames: sortedNames, averageSpeeds: sortedSpeeds };
    });
    let option = derived$1(() => ({
      tooltip: {
        trigger: "axis",
        axisPointer: { type: "shadow" },
        backgroundColor: "rgba(15, 23, 42, 0.95)",
        borderColor: "rgba(255, 255, 255, 0.1)",
        textStyle: {
          color: "#f1f5f9",
          fontFamily: "system-ui, sans-serif",
          fontSize: 12
        },
        padding: [12, 16],
        cornerRadius: 8,
        extraCssText: "box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4); backdrop-filter: blur(8px);",
        formatter: (params) => `<strong>${params[0].axisValue}</strong><br/>Vitesse moyenne: <strong>${params[0].value} km/h</strong>`
      },
      grid: {
        left: "2%",
        right: "4%",
        bottom: "2%",
        top: "3%",
        containLabel: true
      },
      xAxis: {
        type: "category",
        data: processedData().sensorNames,
        axisLabel: {
          rotate: 45,
          color: "#64748b",
          fontFamily: "system-ui, sans-serif",
          fontSize: 11
        },
        axisLine: { lineStyle: { color: "rgba(148, 163, 184, 0.2)" } },
        axisTick: { show: false }
      },
      yAxis: {
        type: "value",
        name: "km/h",
        nameTextStyle: {
          color: "#64748b",
          fontFamily: "system-ui, sans-serif",
          fontSize: 11,
          padding: [0, 30, 0, 0]
        },
        axisLine: { show: false },
        axisTick: { show: false },
        axisLabel: {
          color: "#64748b",
          fontFamily: "system-ui, sans-serif",
          fontSize: 11
        },
        splitLine: {
          lineStyle: { color: "rgba(148, 163, 184, 0.1)", type: "dashed" }
        }
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
          emphasis: {
            itemStyle: { shadowBlur: 10, shadowColor: "rgba(139, 92, 246, 0.5)" }
          },
          label: {
            show: true,
            position: "top",
            formatter: "{c}",
            color: "#94a3b8",
            fontSize: 10,
            fontFamily: "system-ui, sans-serif"
          }
        }
      ],
      animation: true,
      animationDuration: 800,
      animationEasing: "cubicOut"
    }));
    Card($$renderer2, {
      class: "overflow-hidden border-border/50 bg-gradient-to-b from-card to-card/50",
      children: ($$renderer3) => {
        Card_header($$renderer3, {
          class: "pb-4",
          children: ($$renderer4) => {
            Card_title($$renderer4, {
              class: "flex items-center gap-2 text-lg",
              children: ($$renderer5) => {
                $$renderer5.push(`<div class="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10">`);
                Radio($$renderer5, { class: "h-4 w-4 text-primary" });
                $$renderer5.push(`<!----></div> Vitesse moyenne par-capteur`);
              }
            });
            $$renderer4.push(`<!----> `);
            Card_description($$renderer4, {
              class: "mt-1",
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
              $$renderer4.push(`<div class="flex h-[350px] flex-col items-center justify-center gap-3 rounded-xl border-2 border-dashed border-muted-foreground/20 bg-muted/5"><div class="flex h-14 w-14 items-center justify-center rounded-full bg-muted">`);
              Waves($$renderer4, { class: "h-7 w-7 text-muted-foreground/50" });
              $$renderer4.push(`<!----></div> <p class="text-sm font-medium text-muted-foreground">Aucune donnée disponible</p></div>`);
            } else {
              $$renderer4.push("<!--[!-->");
              Echart($$renderer4, { option: option(), style: "height: 350px" });
              $$renderer4.push(`<!----> <div class="mt-4 flex items-center justify-center rounded-xl bg-muted/30 p-3"><div class="flex items-center gap-2"><div class="flex h-8 w-8 items-center justify-center rounded-lg bg-violet-500/10">`);
              Gauge($$renderer4, { class: "h-4 w-4 text-violet-500" });
              $$renderer4.push(`<!----></div> <div><div class="text-xs text-muted-foreground">Vitesse la plus élevée</div> <div class="text-sm font-bold text-violet-500">${escape_html(Math.max(...processedData().averageSpeeds))} km/h</div></div></div></div>`);
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
        backgroundColor: "rgba(15, 23, 42, 0.95)",
        borderColor: "rgba(255, 255, 255, 0.1)",
        textStyle: {
          color: "#f1f5f9",
          fontFamily: "system-ui, sans-serif",
          fontSize: 12
        },
        padding: [12, 16],
        cornerRadius: 8,
        extraCssText: "box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4); backdrop-filter: blur(8px);",
        formatter: (params) => {
          const hour = processedData().hours[params.data[0]];
          const sensor = processedData().sensors[params.data[1]];
          const value = params.data[2];
          return `<strong>${sensor}</strong><br/>${hour}<br/>Passages: <strong>${value}</strong>`;
        }
      },
      grid: {
        left: "18%",
        right: "4%",
        bottom: "18%",
        top: "3%",
        containLabel: false
      },
      xAxis: {
        type: "category",
        data: processedData().hours,
        splitArea: { show: false },
        axisLabel: {
          color: "#64748b",
          fontFamily: "system-ui, sans-serif",
          fontSize: 11
        },
        axisLine: { lineStyle: { color: "rgba(148, 163, 184, 0.2)" } },
        axisTick: { show: false }
      },
      yAxis: {
        type: "category",
        data: processedData().sensors,
        splitArea: { show: false },
        axisLabel: {
          color: "#64748b",
          fontFamily: "system-ui, sans-serif",
          fontSize: 11
        },
        axisLine: { lineStyle: { color: "rgba(148, 163, 184, 0.2)" } },
        axisTick: { show: false }
      },
      visualMap: {
        min: 0,
        max: processedData().maxValue,
        calculable: true,
        orient: "horizontal",
        left: "center",
        bottom: "0%",
        textStyle: { color: "#64748b", fontFamily: "system-ui, sans-serif" },
        inRange: {
          color: [
            "#0f172a",
            "#1e3a5f",
            "#2563eb",
            "#3b82f6",
            "#60a5fa",
            "#93c5fd",
            "#bfdbfe",
            "#dbeafe"
          ]
        },
        itemHeight: 8,
        itemWidth: 16,
        borderRadius: 4
      },
      series: [
        {
          name: "Activité",
          type: "heatmap",
          data: processedData().heatmapData,
          label: { show: false },
          itemStyle: {
            borderColor: "rgba(15, 23, 42, 0.6)",
            borderWidth: 2,
            borderRadius: 3
          },
          emphasis: {
            itemStyle: {
              shadowBlur: 15,
              shadowColor: "rgba(59, 130, 246, 0.6)",
              borderColor: "#60a5fa",
              borderWidth: 2
            }
          }
        }
      ],
      animation: true,
      animationDuration: 800,
      animationEasing: "cubicOut"
    }));
    Card($$renderer2, {
      class: "overflow-hidden border-border/50 bg-gradient-to-b from-card to-card/50",
      children: ($$renderer3) => {
        Card_header($$renderer3, {
          class: "pb-4",
          children: ($$renderer4) => {
            Card_title($$renderer4, {
              class: "flex items-center gap-2 text-lg",
              children: ($$renderer5) => {
                $$renderer5.push(`<div class="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10">`);
                Activity($$renderer5, { class: "h-4 w-4 text-primary" });
                $$renderer5.push(`<!----></div> Heatmap d'activité`);
              }
            });
            $$renderer4.push(`<!----> `);
            Card_description($$renderer4, {
              class: "mt-1",
              children: ($$renderer5) => {
                $$renderer5.push(`<!---->Densité de passages par-capteur et par heure`);
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
              $$renderer4.push(`<div class="flex h-[400px] flex-col items-center justify-center gap-3 rounded-xl border-2 border-dashed border-muted-foreground/20 bg-muted/5"><div class="flex h-14 w-14 items-center justify-center rounded-full bg-muted">`);
              Waves($$renderer4, { class: "h-7 w-7 text-muted-foreground/50" });
              $$renderer4.push(`<!----></div> <p class="text-sm font-medium text-muted-foreground">Aucune donnée disponible</p></div>`);
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
        backgroundColor: "rgba(15, 23, 42, 0.95)",
        borderColor: "rgba(255, 255, 255, 0.1)",
        textStyle: {
          color: "#f1f5f9",
          fontFamily: "system-ui, sans-serif",
          fontSize: 12
        },
        padding: [12, 16],
        cornerRadius: 8,
        extraCssText: "box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4); backdrop-filter: blur(8px);",
        axisPointer: { type: "shadow" }
      },
      legend: {
        data: ["Corridor Gauche", "Corridor Droit"],
        textStyle: { color: "#94a3b8", fontFamily: "system-ui, sans-serif" },
        top: 8,
        itemGap: 24
      },
      grid: {
        left: "2%",
        right: "2%",
        bottom: "2%",
        top: "18%",
        containLabel: true
      },
      xAxis: {
        type: "category",
        data: ["Vitesse Moyenne", "Vitesse Max", "Vitesse Min", "Passages"],
        axisLabel: {
          color: "#64748b",
          fontFamily: "system-ui, sans-serif",
          fontSize: 11
        },
        axisLine: { lineStyle: { color: "rgba(148, 163, 184, 0.2)" } },
        axisTick: { show: false }
      },
      yAxis: {
        type: "value",
        axisLabel: {
          color: "#64748b",
          fontFamily: "system-ui, sans-serif",
          fontSize: 11
        },
        axisLine: { show: false },
        axisTick: { show: false },
        splitLine: {
          lineStyle: { color: "rgba(148, 163, 184, 0.1)", type: "dashed" }
        }
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
                { offset: 0, color: "#0ea5e9" },
                { offset: 1, color: "#0284c7" }
              ]
            },
            borderRadius: [4, 4, 0, 0]
          },
          barWidth: "35%"
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
                { offset: 1, color: "#db2777" }
              ]
            },
            borderRadius: [4, 4, 0, 0]
          },
          barWidth: "35%"
        }
      ],
      animation: true,
      animationDuration: 800,
      animationEasing: "cubicOut"
    }));
    Card($$renderer2, {
      class: "overflow-hidden border-border/50 bg-gradient-to-b from-card to-card/50",
      children: ($$renderer3) => {
        Card_header($$renderer3, {
          class: "pb-4",
          children: ($$renderer4) => {
            Card_title($$renderer4, {
              class: "flex items-center gap-2 text-lg",
              children: ($$renderer5) => {
                $$renderer5.push(`<div class="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10">`);
                Arrow_left_right($$renderer5, { class: "h-4 w-4 text-primary" });
                $$renderer5.push(`<!----></div> Comparaison des corridors`);
              }
            });
            $$renderer4.push(`<!----> `);
            Card_description($$renderer4, {
              class: "mt-1",
              children: ($$renderer5) => {
                $$renderer5.push(`<!---->Performance comparative entre les deux voies`);
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
              $$renderer4.push(`<div class="flex h-[350px] flex-col items-center justify-center gap-3 rounded-xl border-2 border-dashed border-muted-foreground/20 bg-muted/5"><div class="flex h-14 w-14 items-center justify-center rounded-full bg-muted">`);
              Waves($$renderer4, { class: "h-7 w-7 text-muted-foreground/50" });
              $$renderer4.push(`<!----></div> <p class="text-sm font-medium text-muted-foreground">Aucune donnée disponible</p></div>`);
            } else {
              $$renderer4.push("<!--[!-->");
              Echart($$renderer4, { option: option(), style: "height: 350px" });
              $$renderer4.push(`<!----> <div class="mt-4 grid grid-cols-2 gap-4"><div class="group relative overflow-hidden rounded-xl border border-sky-500/30 bg-gradient-to-br from-sky-500/10 to-transparent p-4 transition-all hover:border-sky-500/50"><div class="absolute -top-4 -right-4 h-16 w-16 rounded-full bg-sky-500/10 blur-2xl transition-all duration-500 group-hover:bg-sky-500/20"></div> <div class="relative z-10"><div class="mb-3 flex items-center gap-2"><div class="h-2.5 w-2.5 rounded-full bg-sky-500"></div> <span class="text-sm font-semibold text-sky-500">Corridor Gauche</span></div> <div class="text-3xl font-bold text-sky-500">${escape_html(processedData().leftStats.count)}</div> <div class="text-xs text-muted-foreground/70">passages enregistrés</div> <div class="mt-3 flex items-center gap-3 text-xs"><span class="flex items-center gap-1 text-muted-foreground">`);
              Gauge($$renderer4, { class: "h-3 w-3" });
              $$renderer4.push(`<!----> ${escape_html(processedData().leftStats.avg)} km/h moy.</span></div></div></div> <div class="group relative overflow-hidden rounded-xl border border-pink-500/30 bg-gradient-to-br from-pink-500/10 to-transparent p-4 transition-all hover:border-pink-500/50"><div class="absolute -top-4 -right-4 h-16 w-16 rounded-full bg-pink-500/10 blur-2xl transition-all duration-500 group-hover:bg-pink-500/20"></div> <div class="relative z-10"><div class="mb-3 flex items-center gap-2"><div class="h-2.5 w-2.5 rounded-full bg-pink-500"></div> <span class="text-sm font-semibold text-pink-500">Corridor Droit</span></div> <div class="text-3xl font-bold text-pink-500">${escape_html(processedData().rightStats.count)}</div> <div class="text-xs text-muted-foreground/70">passages enregistrés</div> <div class="mt-3 flex items-center gap-3 text-xs"><span class="flex items-center gap-1 text-muted-foreground">`);
              Gauge($$renderer4, { class: "h-3 w-3" });
              $$renderer4.push(`<!----> ${escape_html(processedData().rightStats.avg)} km/h moy.</span></div></div></div></div>`);
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
      if (cv < 10) return {
        label: "Très Consistant",
        color: "bg-emerald-500",
        text: "text-emerald-500",
        border: "border-emerald-500/30",
        icon: "text-emerald-400"
      };
      if (cv < 20) return {
        label: "Consistant",
        color: "bg-blue-500",
        text: "text-blue-500",
        border: "border-blue-500/30",
        icon: "text-blue-400"
      };
      if (cv < 30) return {
        label: "Modéré",
        color: "bg-yellow-500",
        text: "text-yellow-500",
        border: "border-yellow-500/30",
        icon: "text-yellow-400"
      };
      return {
        label: "Variable",
        color: "bg-red-500",
        text: "text-red-500",
        border: "border-red-500/30",
        icon: "text-red-400"
      };
    });
    const rangeColors = ["#3b82f6", "#8b5cf6", "#ec4899", "#f59e0b", "#10b981"];
    let option = derived$1(() => ({
      tooltip: {
        trigger: "item",
        backgroundColor: "rgba(15, 23, 42, 0.95)",
        borderColor: "rgba(255, 255, 255, 0.1)",
        textStyle: { color: "#f1f5f9", fontFamily: "system-ui, sans-serif" },
        padding: [12, 16],
        cornerRadius: 8,
        extraCssText: "box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4); backdrop-filter: blur(8px);",
        formatter: (params) => `${params.name}: ${params.value} passages (${params.percent}%)`
      },
      legend: {
        orient: "vertical",
        right: "5%",
        top: "center",
        textStyle: { color: "#94a3b8", fontFamily: "system-ui, sans-serif" },
        itemWidth: 12,
        itemHeight: 8,
        itemGap: 12
      },
      series: [
        {
          name: "Distribution des vitesses",
          type: "pie",
          radius: ["45%", "75%"],
          center: ["35%", "50%"],
          avoidLabelOverlap: false,
          itemStyle: {
            borderRadius: 6,
            borderColor: "rgba(15, 23, 42, 0.8)",
            borderWidth: 2
          },
          label: { show: false },
          emphasis: {
            label: { show: true, fontSize: 14, fontWeight: "bold", color: "#fff" },
            itemStyle: { shadowBlur: 20, shadowColor: "rgba(0, 0, 0, 0.5)" }
          },
          labelLine: { show: false },
          data: Object.entries(stats2().speedRanges).map(([range, count], index) => ({
            value: count,
            name: `${range} km/h`,
            itemStyle: { color: rangeColors[index] }
          }))
        }
      ],
      animation: true,
      animationDuration: 1e3,
      animationEasing: "cubicOut"
    }));
    Card($$renderer2, {
      class: "overflow-hidden border-border/50 bg-gradient-to-b from-card to-card/50",
      children: ($$renderer3) => {
        Card_header($$renderer3, {
          class: "pb-4",
          children: ($$renderer4) => {
            Card_title($$renderer4, {
              class: "flex items-center gap-2 text-lg",
              children: ($$renderer5) => {
                $$renderer5.push(`<div class="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10">`);
                Target($$renderer5, { class: "h-4 w-4 text-primary" });
                $$renderer5.push(`<!----></div> Consistance des vitesses`);
              }
            });
            $$renderer4.push(`<!----> `);
            Card_description($$renderer4, {
              class: "mt-1",
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
              $$renderer4.push(`<div class="flex h-[350px] flex-col items-center justify-center gap-3 rounded-xl border-2 border-dashed border-muted-foreground/20 bg-muted/5"><div class="flex h-14 w-14 items-center justify-center rounded-full bg-muted">`);
              Waves($$renderer4, { class: "h-7 w-7 text-muted-foreground/50" });
              $$renderer4.push(`<!----></div> <p class="text-sm font-medium text-muted-foreground">Aucune donnée disponible</p></div>`);
            } else {
              $$renderer4.push("<!--[!-->");
              $$renderer4.push(`<div class="mb-4 flex items-center justify-between rounded-xl bg-muted/30 p-3"><div class="flex items-center gap-2"><div${attr_class(`flex h-8 w-8 items-center justify-center rounded-lg ${stringify(consistencyLevel().color)}/10`)}>`);
              Activity($$renderer4, { class: `h-4 w-4 ${stringify(consistencyLevel().icon)}` });
              $$renderer4.push(`<!----></div> <div><div class="text-xs text-muted-foreground">Niveau de consistance</div> <div${attr_class(`text-sm font-semibold ${stringify(consistencyLevel().text)}`)}>${escape_html(consistencyLevel().label)}</div></div></div> <div class="flex items-center gap-2 rounded-full bg-muted px-3 py-1.5">`);
              Sigma($$renderer4, { class: "h-4 w-4 text-muted-foreground" });
              $$renderer4.push(`<!----> <span class="text-sm font-medium">CV: <span class="text-foreground">${escape_html(stats2().coefficientOfVariation)}%</span></span></div></div> `);
              Echart($$renderer4, { option: option(), style: "height: 300px" });
              $$renderer4.push(`<!----> <div class="mt-4 grid grid-cols-2 gap-3 lg:grid-cols-4"><div class="group relative overflow-hidden rounded-xl border border-blue-500/20 bg-gradient-to-br from-blue-500/10 to-transparent p-3 transition-all hover:border-blue-500/40"><div class="relative z-10"><div class="mb-1 flex items-center gap-1.5">`);
              Gauge($$renderer4, { class: "h-3.5 w-3.5 text-blue-500" });
              $$renderer4.push(`<!----> <span class="text-xs text-muted-foreground">Moyenne</span></div> <div class="text-xl font-bold text-blue-500">${escape_html(stats2().mean)} <span class="text-xs font-normal">km/h</span></div></div></div> <div class="group relative overflow-hidden rounded-xl border border-purple-500/20 bg-gradient-to-br from-purple-500/10 to-transparent p-3 transition-all hover:border-purple-500/40"><div class="relative z-10"><div class="mb-1 flex items-center gap-1.5">`);
              Hash($$renderer4, { class: "h-3.5 w-3.5 text-purple-500" });
              $$renderer4.push(`<!----> <span class="text-xs text-muted-foreground">Médiane</span></div> <div class="text-xl font-bold text-purple-500">${escape_html(stats2().median)} <span class="text-xs font-normal">km/h</span></div></div></div> <div class="group relative overflow-hidden rounded-xl border border-amber-500/20 bg-gradient-to-br from-amber-500/10 to-transparent p-3 transition-all hover:border-amber-500/40"><div class="relative z-10"><div class="mb-1 flex items-center gap-1.5">`);
              Activity($$renderer4, { class: "h-3.5 w-3.5 text-amber-500" });
              $$renderer4.push(`<!----> <span class="text-xs text-muted-foreground">Écart-type</span></div> <div class="text-xl font-bold text-amber-500">${escape_html(stats2().stdDev)}</div></div></div> <div class="group relative overflow-hidden rounded-xl border border-rose-500/20 bg-gradient-to-br from-rose-500/10 to-transparent p-3 transition-all hover:border-rose-500/40"><div class="relative z-10"><div class="mb-1 flex items-center gap-1.5">`);
              Sigma($$renderer4, { class: "h-3.5 w-3.5 text-rose-500" });
              $$renderer4.push(`<!----> <span class="text-xs text-muted-foreground">Variance</span></div> <div class="text-xl font-bold text-rose-500">${escape_html(stats2().variance)}</div></div></div></div>`);
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
      if (index === 0) return "bg-gradient-to-br from-yellow-400 to-yellow-600 text-white shadow-lg shadow-yellow-500/30";
      if (index === 1) return "bg-gradient-to-br from-gray-300 to-gray-500 text-white shadow-lg shadow-gray-400/30";
      if (index === 2) return "bg-gradient-to-br from-amber-600 to-amber-800 text-white shadow-lg shadow-amber-600/30";
      return "bg-muted text-muted-foreground";
    }
    function rankBadge(index) {
      if (index === 0) return "🏆";
      if (index === 1) return "🥈";
      if (index === 2) return "🥉";
      return `#${index + 1}`;
    }
    Card($$renderer2, {
      class: "overflow-hidden border-border/50 bg-gradient-to-b from-card to-card/50",
      children: ($$renderer3) => {
        Card_header($$renderer3, {
          class: "pb-4",
          children: ($$renderer4) => {
            Card_title($$renderer4, {
              class: "flex items-center gap-2 text-lg",
              children: ($$renderer5) => {
                $$renderer5.push(`<div class="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10">`);
                Radio($$renderer5, { class: "h-4 w-4 text-primary" });
                $$renderer5.push(`<!----></div> Top-capteurs actifs`);
              }
            });
            $$renderer4.push(`<!----> `);
            Card_description($$renderer4, {
              class: "mt-1",
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
              $$renderer4.push(`<div class="flex h-[300px] flex-col items-center justify-center gap-3 rounded-xl border-2 border-dashed border-muted-foreground/20 bg-muted/5"><div class="flex h-14 w-14 items-center justify-center rounded-full bg-muted">`);
              Waves($$renderer4, { class: "h-7 w-7 text-muted-foreground/50" });
              $$renderer4.push(`<!----></div> <p class="text-sm font-medium text-muted-foreground">Aucune donnée disponible</p></div>`);
            } else {
              $$renderer4.push("<!--[!-->");
              $$renderer4.push(`<div class="space-y-3"><!--[-->`);
              const each_array = ensure_array_like(topSensors());
              for (let index = 0, $$length = each_array.length; index < $$length; index++) {
                let sensor = each_array[index];
                $$renderer4.push(`<div class="group relative overflow-hidden rounded-xl border border-border/50 bg-gradient-to-br from-muted/30 to-muted/10 p-4 transition-all hover:scale-[1.01] hover:border-primary/30 hover:shadow-md"><div class="absolute -top-4 -right-4 h-20 w-20 rounded-full bg-primary/5 blur-2xl transition-all duration-500 group-hover:bg-primary/10"></div> <div class="relative z-10"><div class="mb-3 flex items-start justify-between"><div class="flex items-center gap-3"><div${attr_class(`flex h-10 w-10 items-center justify-center rounded-xl font-bold ${stringify(rankClass(index))}`)}>${escape_html(rankBadge(index))}</div> <div><div class="flex items-center gap-2 text-base font-semibold">${escape_html(sensor.name)} `);
                if (index === 0) {
                  $$renderer4.push("<!--[-->");
                  Zap($$renderer4, { class: "h-4 w-4 text-yellow-500" });
                } else {
                  $$renderer4.push("<!--[!-->");
                }
                $$renderer4.push(`<!--]--></div> <div class="text-xs text-muted-foreground">${escape_html(sensor.count)} passages enregistrés</div></div></div> <span class="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-0.5 text-xs font-semibold text-emerald-500">Actif</span></div> <div class="grid grid-cols-3 gap-2"><div class="rounded-lg border border-blue-500/20 bg-gradient-to-br from-blue-500/10 to-transparent p-2.5 transition-all hover:border-blue-500/40"><div class="mb-1 flex items-center gap-1 text-xs text-muted-foreground">`);
                Activity($$renderer4, { class: "h-3 w-3" });
                $$renderer4.push(`<!----> Moyenne</div> <div class="text-sm font-bold text-blue-500">${escape_html(sensor.avgSpeed)} km/h</div></div> <div class="rounded-lg border border-green-500/20 bg-gradient-to-br from-green-500/10 to-transparent p-2.5 transition-all hover:border-green-500/40"><div class="mb-1 flex items-center gap-1 text-xs text-muted-foreground">`);
                Trending_up($$renderer4, { class: "h-3 w-3" });
                $$renderer4.push(`<!----> Max</div> <div class="text-sm font-bold text-green-500">${escape_html(sensor.maxSpeed)} km/h</div></div> <div class="rounded-lg border border-orange-500/20 bg-gradient-to-br from-orange-500/10 to-transparent p-2.5 transition-all hover:border-orange-500/40"><div class="mb-1 flex items-center gap-1 text-xs text-muted-foreground">`);
                Trending_up($$renderer4, { class: "h-3 w-3 rotate-180" });
                $$renderer4.push(`<!----> Min</div> <div class="text-sm font-bold text-orange-500">${escape_html(sensor.minSpeed)} km/h</div></div></div></div></div>`);
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
    const periodIcons = {
      "Matin (6h-12h)": Sunrise,
      "Après-midi (12h-18h)": Sun,
      "Soirée (18h-22h)": Sunset,
      "Nuit (22h-6h)": Moon
    };
    const periodColors = {
      "Matin (6h-12h)": {
        bg: "from-amber-500/20 to-amber-500/5",
        border: "border-amber-500/30",
        text: "text-amber-500",
        icon: "text-amber-400"
      },
      "Après-midi (12h-18h)": {
        bg: "from-orange-500/20 to-orange-500/5",
        border: "border-orange-500/30",
        text: "text-orange-500",
        icon: "text-orange-400"
      },
      "Soirée (18h-22h)": {
        bg: "from-purple-500/20 to-purple-500/5",
        border: "border-purple-500/30",
        text: "text-purple-500",
        icon: "text-purple-400"
      },
      "Nuit (22h-6h)": {
        bg: "from-indigo-500/20 to-indigo-500/5",
        border: "border-indigo-500/30",
        text: "text-indigo-500",
        icon: "text-indigo-400"
      }
    };
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
        backgroundColor: "rgba(15, 23, 42, 0.95)",
        borderColor: "rgba(255, 255, 255, 0.1)",
        textStyle: {
          color: "#f1f5f9",
          fontFamily: "system-ui, sans-serif",
          fontSize: 12
        },
        padding: [12, 16],
        cornerRadius: 8,
        extraCssText: "box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4); backdrop-filter: blur(8px);",
        axisPointer: { type: "shadow" }
      },
      legend: {
        data: ["Vitesse moyenne", "Vitesse max", "Nombre de passages"],
        textStyle: { color: "#94a3b8", fontFamily: "system-ui, sans-serif" },
        top: 8,
        itemGap: 24
      },
      grid: {
        left: "2%",
        right: "2%",
        bottom: "2%",
        top: "20%",
        containLabel: true
      },
      xAxis: {
        type: "category",
        data: processedData().periods,
        axisLabel: {
          color: "#64748b",
          fontFamily: "system-ui, sans-serif",
          fontSize: 11,
          interval: 0
        },
        axisLine: { lineStyle: { color: "rgba(148, 163, 184, 0.2)" } },
        axisTick: { show: false }
      },
      yAxis: [
        {
          type: "value",
          name: "km/h",
          position: "left",
          nameTextStyle: {
            color: "#64748b",
            fontFamily: "system-ui, sans-serif",
            fontSize: 11,
            padding: [0, 30, 0, 0]
          },
          axisLine: { show: false },
          axisTick: { show: false },
          axisLabel: {
            color: "#64748b",
            fontFamily: "system-ui, sans-serif",
            fontSize: 11
          },
          splitLine: {
            lineStyle: { color: "rgba(148, 163, 184, 0.1)", type: "dashed" }
          }
        },
        {
          type: "value",
          name: "Passages",
          position: "right",
          nameTextStyle: {
            color: "#64748b",
            fontFamily: "system-ui, sans-serif",
            fontSize: 11,
            padding: [0, 0, 0, 30]
          },
          axisLine: { show: false },
          axisTick: { show: false },
          axisLabel: {
            color: "#64748b",
            fontFamily: "system-ui, sans-serif",
            fontSize: 11
          },
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
          },
          barWidth: "30%"
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
          },
          barWidth: "30%"
        },
        {
          name: "Nombre de passages",
          type: "line",
          yAxisIndex: 1,
          data: processedData().periodStats.map((s) => s.count),
          smooth: 0.35,
          symbol: "circle",
          symbolSize: 8,
          showSymbol: false,
          itemStyle: { color: "#ec4899" },
          lineStyle: {
            width: 3,
            shadowColor: "rgba(236, 72, 153, 0.5)",
            shadowBlur: 8,
            shadowOffsetY: 4
          },
          areaStyle: {
            color: {
              type: "linear",
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [
                { offset: 0, color: "rgba(236, 72, 153, 0.25)" },
                { offset: 1, color: "rgba(236, 72, 153, 0.02)" }
              ]
            }
          }
        }
      ],
      animation: true,
      animationDuration: 800,
      animationEasing: "cubicOut"
    }));
    Card($$renderer2, {
      class: "overflow-hidden border-border/50 bg-gradient-to-b from-card to-card/50",
      children: ($$renderer3) => {
        Card_header($$renderer3, {
          class: "pb-4",
          children: ($$renderer4) => {
            Card_title($$renderer4, {
              class: "flex items-center gap-2 text-lg",
              children: ($$renderer5) => {
                $$renderer5.push(`<div class="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10">`);
                Clock($$renderer5, { class: "h-4 w-4 text-primary" });
                $$renderer5.push(`<!----></div> Analyse par période`);
              }
            });
            $$renderer4.push(`<!----> `);
            Card_description($$renderer4, {
              class: "mt-1",
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
              $$renderer4.push(`<div class="flex h-[350px] flex-col items-center justify-center gap-3 rounded-xl border-2 border-dashed border-muted-foreground/20 bg-muted/5"><div class="flex h-14 w-14 items-center justify-center rounded-full bg-muted">`);
              Activity($$renderer4, { class: "h-7 w-7 text-muted-foreground/50" });
              $$renderer4.push(`<!----></div> <p class="text-sm font-medium text-muted-foreground">Aucune donnée disponible</p></div>`);
            } else {
              $$renderer4.push("<!--[!-->");
              Echart($$renderer4, { option: option(), style: "height: 350px" });
              $$renderer4.push(`<!----> <div class="mt-4 grid grid-cols-2 gap-3 lg:grid-cols-4"><!--[-->`);
              const each_array = ensure_array_like(processedData().periodStats);
              for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
                let stat = each_array[$$index];
                const colors = periodColors[stat.period];
                const Icon2 = periodIcons[stat.period];
                $$renderer4.push(`<div${attr_class(`group relative overflow-hidden rounded-xl border ${stringify(colors.border)} bg-gradient-to-br ${stringify(colors.bg)} p-3 transition-all hover:scale-[1.02]`)}><div class="relative z-10"><div class="mb-2 flex items-center gap-2">`);
                if (Icon2) {
                  $$renderer4.push("<!--[-->");
                  Icon2($$renderer4, { class: `h-4 w-4 ${stringify(colors.icon)}` });
                  $$renderer4.push("<!--]-->");
                } else {
                  $$renderer4.push("<!--[!-->");
                  $$renderer4.push("<!--]-->");
                }
                $$renderer4.push(` <span class="text-xs font-medium text-muted-foreground">${escape_html(stat.period.split(" ")[0])}</span></div> <div${attr_class(`text-lg font-bold ${stringify(colors.text)}`)}>${escape_html(stat.count)}</div> <div class="text-xs text-muted-foreground/70">passages</div></div></div>`);
              }
              $$renderer4.push(`<!--]--></div> <div class="mt-4 flex items-center justify-between rounded-xl border border-primary/20 bg-primary/5 p-4"><div class="flex items-center gap-3"><div class="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">`);
              Zap($$renderer4, { class: "h-5 w-5 text-primary" });
              $$renderer4.push(`<!----></div> <div><div class="text-xs text-muted-foreground">Période la plus active</div> <div class="text-base font-bold">${escape_html(mostActivePeriod().period)}</div></div></div> <div class="text-right"><div class="text-xs text-muted-foreground">Passages</div> <div class="text-xl font-bold text-primary">${escape_html(mostActivePeriod().count)}</div></div></div>`);
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
              $$renderer5.push(`<!----> <div class="mt-6 space-y-6"><div class="space-y-3"><h3 class="text-sm font-semibold">Source des données</h3> <div class="grid grid-cols-2 gap-2"><button${attr_class(`rounded-md px-3 py-2 text-sm font-medium transition-colors ${stringify(store_get($$store_subs ??= {}, "$settings", settings).dataMode === "simulation" ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground")}`)}>Simulation</button> <button${attr_class(`rounded-md px-3 py-2 text-sm font-medium transition-colors ${stringify(store_get($$store_subs ??= {}, "$settings", settings).dataMode === "api" ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground")}`)}>API Live</button></div></div> `);
              if (store_get($$store_subs ??= {}, "$settings", settings).dataMode === "api") {
                $$renderer5.push("<!--[-->");
                $$renderer5.push(`<div class="space-y-4 border-t pt-4"><div class="flex items-center justify-between"><h3 class="text-sm font-semibold">Configuration API</h3> <div class="flex items-center gap-1.5 text-xs">`);
                if (store_get($$store_subs ??= {}, "$connectionError", connectionError)) {
                  $$renderer5.push("<!--[-->");
                  Wifi_off($$renderer5, { class: "h-3.5 w-3.5 text-destructive" });
                  $$renderer5.push(`<!----> <span class="text-destructive">Erreur</span>`);
                } else if (store_get($$store_subs ??= {}, "$isConnected", isConnected)) {
                  $$renderer5.push("<!--[1-->");
                  Wifi($$renderer5, { class: "h-3.5 w-3.5 text-green-500" });
                  $$renderer5.push(`<!----> <span class="text-green-500">Connecté</span>`);
                } else {
                  $$renderer5.push("<!--[!-->");
                  $$renderer5.push(`<div class="h-2 w-2 animate-pulse rounded-full bg-yellow-500"></div> <span class="text-muted-foreground">En attente...</span>`);
                }
                $$renderer5.push(`<!--]--></div></div> <div class="space-y-1">`);
                Label($$renderer5, {
                  class: "text-xs",
                  children: ($$renderer6) => {
                    $$renderer6.push(`<!---->URL de l'API`);
                  },
                  $$slots: { default: true }
                });
                $$renderer5.push(`<!----> <input type="url" class="bg-background h-8 w-full rounded border px-2 text-sm" placeholder="http://localhost:8080"${attr("value", store_get($$store_subs ??= {}, "$settings", settings).apiUrl)}/></div> <div class="space-y-1">`);
                Label($$renderer5, {
                  class: "text-xs",
                  children: ($$renderer6) => {
                    $$renderer6.push(`<!---->Token d'authentification`);
                  },
                  $$slots: { default: true }
                });
                $$renderer5.push(`<!----> <div class="relative"><input${attr("type", "password")} class="bg-background h-8 w-full rounded border px-2 pr-8 text-sm" placeholder="Bearer token..."${attr("value", store_get($$store_subs ??= {}, "$settings", settings).apiToken)}/> <button type="button" class="absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground">`);
                {
                  $$renderer5.push("<!--[!-->");
                  Eye($$renderer5, { class: "h-3.5 w-3.5" });
                }
                $$renderer5.push(`<!--]--></button></div></div> `);
                if (store_get($$store_subs ??= {}, "$connectionError", connectionError)) {
                  $$renderer5.push("<!--[-->");
                  $$renderer5.push(`<p class="rounded-md bg-destructive/10 px-3 py-2 text-xs text-destructive">${escape_html(store_get($$store_subs ??= {}, "$connectionError", connectionError))}</p>`);
                } else {
                  $$renderer5.push("<!--[!-->");
                }
                $$renderer5.push(`<!--]--></div>`);
              } else {
                $$renderer5.push("<!--[!-->");
              }
              $$renderer5.push(`<!--]--> <div class="space-y-4 border-t pt-4"><h3 class="text-sm font-semibold">Période de données</h3> `);
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
    const isSimulation = derived$1(() => store_get($$store_subs ??= {}, "$settings", settings).dataMode === "simulation");
    $$renderer2.push(`<div class="flex min-h-screen flex-col"><header class="border-border bg-card border-b"><div class="mx-auto px-6 py-6"><div class="flex items-center justify-between"><div><h1 class="text-foreground flex items-center gap-3 text-4xl font-bold">`);
    Zap($$renderer2, { class: "text-primary h-8 w-8" });
    $$renderer2.push(`<!----> RaceTrack Analytics</h1> <p class="text-muted-foreground mt-1">Racing Speed Analytics Dashboard</p></div> <div class="flex items-center gap-4"><div class="flex items-center gap-2"><span${attr_class(`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors ${stringify(isSimulation() ? "border-transparent bg-primary text-primary-foreground" : "border-transparent bg-secondary text-secondary-foreground")}`)}>${escape_html(isSimulation() ? "SIMULATION" : "API LIVE")}</span> <div${attr_class(`h-2 w-2 rounded-full ${stringify(store_get($$store_subs ??= {}, "$connectionError", connectionError) ? "bg-destructive" : store_get($$store_subs ??= {}, "$isConnected", isConnected) ? "animate-pulse bg-green-500" : "bg-yellow-500")}`)}></div> <span class="text-muted-foreground text-sm">`);
    if (isSimulation()) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`Données simulées`);
    } else if (store_get($$store_subs ??= {}, "$connectionError", connectionError)) {
      $$renderer2.push("<!--[1-->");
      $$renderer2.push(`Erreur de connexion`);
    } else if (store_get($$store_subs ??= {}, "$isConnected", isConnected)) {
      $$renderer2.push("<!--[2-->");
      $$renderer2.push(`SSE connecté`);
    } else {
      $$renderer2.push("<!--[!-->");
      $$renderer2.push(`Connexion en cours...`);
    }
    $$renderer2.push(`<!--]--></span></div> `);
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
