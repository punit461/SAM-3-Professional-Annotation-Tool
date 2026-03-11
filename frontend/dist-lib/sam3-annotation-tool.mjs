import { jsxs as Y, jsx as v, Fragment as bt } from "react/jsx-runtime";
import ae, { forwardRef as xr, createElement as zn, useState as Ae, useRef as nt, useEffect as $e, useImperativeHandle as ho, useCallback as Oe } from "react";
import mo from "react-dom";
/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var po = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const go = (t) => t.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase().trim(), we = (t, r) => {
  const e = xr(
    ({ color: n = "currentColor", size: o = 24, strokeWidth: s = 2, absoluteStrokeWidth: a, className: i = "", children: d, ...f }, m) => zn(
      "svg",
      {
        ref: m,
        ...po,
        width: o,
        height: o,
        stroke: n,
        strokeWidth: a ? Number(s) * 24 / Number(o) : s,
        className: ["lucide", `lucide-${go(t)}`, i].join(" "),
        ...f
      },
      [
        ...r.map(([l, x]) => zn(l, x)),
        ...Array.isArray(d) ? d : [d]
      ]
    )
  );
  return e.displayName = `${t}`, e;
};
/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const yo = we("AlertCircle", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
  ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }]
]);
/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const bo = we("Brush", [
  ["path", { d: "m9.06 11.9 8.07-8.06a2.85 2.85 0 1 1 4.03 4.03l-8.06 8.08", key: "1styjt" }],
  [
    "path",
    {
      d: "M7.07 14.94c-1.66 0-3 1.35-3 3.02 0 1.33-2.5 1.52-2 2.02 1.08 1.1 2.49 2.02 4 2.02 2.2 0 4-1.8 4-4.04a3.01 3.01 0 0 0-3-3.02z",
      key: "z0l1mu"
    }
  ]
]);
/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const sn = we("Check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Sn = we("ChevronDown", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]
]);
/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xo = we("ChevronLeft", [
  ["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]
]);
/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const vr = we("ChevronRight", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]
]);
/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const vo = we("CloudOff", [
  ["path", { d: "m2 2 20 20", key: "1ooewy" }],
  ["path", { d: "M5.782 5.782A7 7 0 0 0 9 19h8.5a4.5 4.5 0 0 0 1.307-.193", key: "yfwify" }],
  [
    "path",
    { d: "M21.532 16.5A4.5 4.5 0 0 0 17.5 10h-1.79A7.008 7.008 0 0 0 10 5.07", key: "jlfiyv" }
  ]
]);
/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const wo = we("Cloud", [
  ["path", { d: "M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z", key: "p7xjir" }]
]);
/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _o = we("Copy", [
  ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2", key: "17jyea" }],
  ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2", key: "zix9uf" }]
]);
/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Pn = we("Download", [
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
  ["polyline", { points: "7 10 12 15 17 10", key: "2ggqvy" }],
  ["line", { x1: "12", x2: "12", y1: "15", y2: "3", key: "1vk2je" }]
]);
/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const wr = we("EyeOff", [
  ["path", { d: "M9.88 9.88a3 3 0 1 0 4.24 4.24", key: "1jxqfv" }],
  [
    "path",
    {
      d: "M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68",
      key: "9wicm4"
    }
  ],
  [
    "path",
    { d: "M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61", key: "1jreej" }
  ],
  ["line", { x1: "2", x2: "22", y1: "2", y2: "22", key: "a6p6uj" }]
]);
/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _r = we("Eye", [
  ["path", { d: "M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z", key: "rwhkz3" }],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
]);
/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ko = we("FileJson", [
  [
    "path",
    { d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z", key: "1nnpy2" }
  ],
  ["polyline", { points: "14 2 14 8 20 8", key: "1ew0cm" }],
  [
    "path",
    { d: "M10 12a1 1 0 0 0-1 1v1a1 1 0 0 1-1 1 1 1 0 0 1 1 1v1a1 1 0 0 0 1 1", key: "1oajmo" }
  ],
  [
    "path",
    { d: "M14 18a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1 1 1 0 0 1-1-1v-1a1 1 0 0 0-1-1", key: "mpwhp6" }
  ]
]);
/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Dn = we("FileText", [
  [
    "path",
    { d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z", key: "1nnpy2" }
  ],
  ["polyline", { points: "14 2 14 8 20 8", key: "1ew0cm" }],
  ["line", { x1: "16", x2: "8", y1: "13", y2: "13", key: "14keom" }],
  ["line", { x1: "16", x2: "8", y1: "17", y2: "17", key: "17nazh" }],
  ["line", { x1: "10", x2: "8", y1: "9", y2: "9", key: "1a5vjj" }]
]);
/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const yn = we("FolderOpen", [
  [
    "path",
    {
      d: "m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",
      key: "usdka0"
    }
  ]
]);
/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const So = we("Hand", [
  ["path", { d: "M18 11V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0", key: "aigmz7" }],
  ["path", { d: "M14 10V4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v2", key: "1n6bmn" }],
  ["path", { d: "M10 10.5V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v8", key: "a9iiix" }],
  [
    "path",
    {
      d: "M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15",
      key: "1s1gnw"
    }
  ]
]);
/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Yt = we("Image", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2", key: "1m3agn" }],
  ["circle", { cx: "9", cy: "9", r: "2", key: "af1f0g" }],
  ["path", { d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21", key: "1xmnt7" }]
]);
/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const kr = we("Keyboard", [
  ["rect", { width: "20", height: "16", x: "2", y: "4", rx: "2", ry: "2", key: "15u882" }],
  ["path", { d: "M6 8h.001", key: "1ej0i3" }],
  ["path", { d: "M10 8h.001", key: "1x2st2" }],
  ["path", { d: "M14 8h.001", key: "1vkmyp" }],
  ["path", { d: "M18 8h.001", key: "kfsenl" }],
  ["path", { d: "M8 12h.001", key: "1sjpby" }],
  ["path", { d: "M12 12h.001", key: "al75ts" }],
  ["path", { d: "M16 12h.001", key: "931bgk" }],
  ["path", { d: "M7 16h10", key: "wp8him" }]
]);
/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Mn = we("Layers", [
  [
    "path",
    {
      d: "m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z",
      key: "8b97xw"
    }
  ],
  ["path", { d: "m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65", key: "dd6zsq" }],
  ["path", { d: "m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65", key: "ep9fru" }]
]);
/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Eo = we("Loader2", [
  ["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]
]);
/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Co = we("Maximize", [
  ["path", { d: "M8 3H5a2 2 0 0 0-2 2v3", key: "1dcmit" }],
  ["path", { d: "M21 8V5a2 2 0 0 0-2-2h-3", key: "1e4gt3" }],
  ["path", { d: "M3 16v3a2 2 0 0 0 2 2h3", key: "wsl5sc" }],
  ["path", { d: "M16 21h3a2 2 0 0 0 2-2v-3", key: "18trek" }]
]);
/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const No = we("Minus", [["path", { d: "M5 12h14", key: "1ays0h" }]]);
/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ao = we("MousePointer2", [
  ["path", { d: "m4 4 7.07 17 2.51-7.39L21 11.07z", key: "1vqm48" }]
]);
/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const To = we("Pen", [
  ["path", { d: "M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z", key: "5qss01" }]
]);
/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Io = we("Pentagon", [
  [
    "path",
    {
      d: "M3.5 8.7c-.7.5-1 1.4-.7 2.2l2.8 8.7c.3.8 1 1.4 1.9 1.4h9.1c.9 0 1.6-.6 1.9-1.4l2.8-8.7c.3-.8 0-1.7-.7-2.2l-7.4-5.3a2.1 2.1 0 0 0-2.4 0Z",
      key: "hsj90r"
    }
  ]
]);
/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Oo = we("Play", [
  ["polygon", { points: "5 3 19 12 5 21 5 3", key: "191637" }]
]);
/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ro = we("PlusCircle", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M8 12h8", key: "1wcyev" }],
  ["path", { d: "M12 8v8", key: "napkw2" }]
]);
/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Sr = we("Plus", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
]);
/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const zo = we("Redo2", [
  ["path", { d: "m15 14 5-5-5-5", key: "12vg1m" }],
  ["path", { d: "M20 9H9.5A5.5 5.5 0 0 0 4 14.5v0A5.5 5.5 0 0 0 9.5 20H13", key: "19mnr4" }]
]);
/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Po = we("RefreshCw", [
  ["path", { d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8", key: "v9h5vc" }],
  ["path", { d: "M21 3v5h-5", key: "1q7to0" }],
  ["path", { d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16", key: "3uifl3" }],
  ["path", { d: "M8 16H3v5", key: "1cv678" }]
]);
/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Do = we("RotateCcw", [
  ["path", { d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8", key: "1357e3" }],
  ["path", { d: "M3 3v5h5", key: "1xhq8a" }]
]);
/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Mo = we("Send", [
  ["path", { d: "m22 2-7 20-4-9-9-4Z", key: "1q3vgg" }],
  ["path", { d: "M22 2 11 13", key: "nzbqef" }]
]);
/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Lo = we("Slash", [["path", { d: "M22 2 2 22", key: "y4kqgn" }]]);
/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Bo = we("SlidersHorizontal", [
  ["line", { x1: "21", x2: "14", y1: "4", y2: "4", key: "obuewd" }],
  ["line", { x1: "10", x2: "3", y1: "4", y2: "4", key: "1q6298" }],
  ["line", { x1: "21", x2: "12", y1: "12", y2: "12", key: "1iu8h1" }],
  ["line", { x1: "8", x2: "3", y1: "12", y2: "12", key: "ntss68" }],
  ["line", { x1: "21", x2: "16", y1: "20", y2: "20", key: "14d8ph" }],
  ["line", { x1: "12", x2: "3", y1: "20", y2: "20", key: "m0wm8r" }],
  ["line", { x1: "14", x2: "14", y1: "2", y2: "6", key: "14e1ph" }],
  ["line", { x1: "8", x2: "8", y1: "10", y2: "14", key: "1i6ji0" }],
  ["line", { x1: "16", x2: "16", y1: "18", y2: "22", key: "1lctlv" }]
]);
/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Fo = we("Sparkles", [
  [
    "path",
    {
      d: "m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z",
      key: "17u4zn"
    }
  ],
  ["path", { d: "M5 3v4", key: "bklmnn" }],
  ["path", { d: "M19 17v4", key: "iiml17" }],
  ["path", { d: "M3 5h4", key: "nem4j1" }],
  ["path", { d: "M17 19h4", key: "lbex7p" }]
]);
/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Uo = we("Square", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }]
]);
/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const jo = we("Sun", [
  ["circle", { cx: "12", cy: "12", r: "4", key: "4exip2" }],
  ["path", { d: "M12 2v2", key: "tus03m" }],
  ["path", { d: "M12 20v2", key: "1lh1kg" }],
  ["path", { d: "m4.93 4.93 1.41 1.41", key: "149t6j" }],
  ["path", { d: "m17.66 17.66 1.41 1.41", key: "ptbguv" }],
  ["path", { d: "M2 12h2", key: "1t8f8n" }],
  ["path", { d: "M20 12h2", key: "1q8mjw" }],
  ["path", { d: "m6.34 17.66-1.41 1.41", key: "1m8zz5" }],
  ["path", { d: "m19.07 4.93-1.41 1.41", key: "1shlcs" }]
]);
/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ho = we("Tag", [
  [
    "path",
    {
      d: "M12 2H2v10l9.29 9.29c.94.94 2.48.94 3.42 0l6.58-6.58c.94-.94.94-2.48 0-3.42L12 2Z",
      key: "14b2ls"
    }
  ],
  ["path", { d: "M7 7h.01", key: "7u93v4" }]
]);
/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Xt = we("Trash2", [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
  ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }],
  ["line", { x1: "10", x2: "10", y1: "11", y2: "17", key: "1uufr5" }],
  ["line", { x1: "14", x2: "14", y1: "11", y2: "17", key: "xtxkd" }]
]);
/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Wo = we("Type", [
  ["polyline", { points: "4 7 4 4 20 4 20 7", key: "1nosan" }],
  ["line", { x1: "9", x2: "15", y1: "20", y2: "20", key: "swin9y" }],
  ["line", { x1: "12", x2: "12", y1: "4", y2: "20", key: "1tx1rr" }]
]);
/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $o = we("Undo2", [
  ["path", { d: "M9 14 4 9l5-5", key: "102s5s" }],
  ["path", { d: "M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5v0a5.5 5.5 0 0 1-5.5 5.5H11", key: "llx8ln" }]
]);
/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ko = we("Upload", [
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
  ["polyline", { points: "17 8 12 3 7 8", key: "t8dd8p" }],
  ["line", { x1: "12", x2: "12", y1: "3", y2: "15", key: "widbto" }]
]);
/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xt = we("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]);
/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Zo = we("ZoomIn", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["line", { x1: "21", x2: "16.65", y1: "21", y2: "16.65", key: "13gj7c" }],
  ["line", { x1: "11", x2: "11", y1: "8", y2: "14", key: "1vmskp" }],
  ["line", { x1: "8", x2: "14", y1: "11", y2: "11", key: "durymu" }]
]);
/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qo = we("ZoomOut", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["line", { x1: "21", x2: "16.65", y1: "21", y2: "16.65", key: "13gj7c" }],
  ["line", { x1: "8", x2: "14", y1: "11", y2: "11", key: "durymu" }]
]);
function Ye({ content: t, shortcut: r, children: e, position: n = "bottom", delay: o = 400 }) {
  const [s, a] = Ae(!1), i = nt(null), d = () => {
    i.current = setTimeout(() => a(!0), o);
  }, f = () => {
    i.current && clearTimeout(i.current), a(!1);
  };
  return $e(() => () => {
    i.current && clearTimeout(i.current);
  }, []), /* @__PURE__ */ Y("div", { className: "relative inline-flex", onMouseEnter: d, onMouseLeave: f, children: [
    e,
    s && /* @__PURE__ */ Y(
      "div",
      {
        className: `absolute z-[200] flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-xs font-medium bg-surface-800 text-white shadow-lg whitespace-nowrap pointer-events-none animate-fade-in ${{
          top: "bottom-full left-1/2 -translate-x-1/2 mb-2",
          bottom: "top-full left-1/2 -translate-x-1/2 mt-2",
          left: "right-full top-1/2 -translate-y-1/2 mr-2",
          right: "left-full top-1/2 -translate-y-1/2 ml-2"
        }[n]}`,
        children: [
          /* @__PURE__ */ v("span", { children: t }),
          r && /* @__PURE__ */ v("span", { className: "text-surface-400 bg-surface-700 px-1.5 py-0.5 rounded text-2xs font-semibold", children: r })
        ]
      }
    )
  ] });
}
const Vo = {}, Ln = (t) => {
  let r;
  const e = /* @__PURE__ */ new Set(), n = (m, l) => {
    const x = typeof m == "function" ? m(r) : m;
    if (!Object.is(x, r)) {
      const p = r;
      r = l ?? (typeof x != "object" || x === null) ? x : Object.assign({}, r, x), e.forEach((h) => h(r, p));
    }
  }, o = () => r, d = { setState: n, getState: o, getInitialState: () => f, subscribe: (m) => (e.add(m), () => e.delete(m)), destroy: () => {
    (Vo ? "lib" : void 0) !== "production" && console.warn(
      "[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."
    ), e.clear();
  } }, f = r = t(n, o, d);
  return d;
}, Yo = (t) => t ? Ln(t) : Ln;
var Ft = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Er(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var bn = { exports: {} }, an = {}, Ut = { exports: {} }, ln = {};
/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Bn;
function Xo() {
  if (Bn) return ln;
  Bn = 1;
  var t = ae;
  function r(l, x) {
    return l === x && (l !== 0 || 1 / l === 1 / x) || l !== l && x !== x;
  }
  var e = typeof Object.is == "function" ? Object.is : r, n = t.useState, o = t.useEffect, s = t.useLayoutEffect, a = t.useDebugValue;
  function i(l, x) {
    var p = x(), h = n({ inst: { value: p, getSnapshot: x } }), c = h[0].inst, g = h[1];
    return s(
      function() {
        c.value = p, c.getSnapshot = x, d(c) && g({ inst: c });
      },
      [l, p, x]
    ), o(
      function() {
        return d(c) && g({ inst: c }), l(function() {
          d(c) && g({ inst: c });
        });
      },
      [l]
    ), a(p), p;
  }
  function d(l) {
    var x = l.getSnapshot;
    l = l.value;
    try {
      var p = x();
      return !e(l, p);
    } catch {
      return !0;
    }
  }
  function f(l, x) {
    return x();
  }
  var m = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? f : i;
  return ln.useSyncExternalStore = t.useSyncExternalStore !== void 0 ? t.useSyncExternalStore : m, ln;
}
var cn = {};
/**
 * @license React
 * use-sync-external-store-shim.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Fn;
function Go() {
  return Fn || (Fn = 1, process.env.NODE_ENV !== "production" && function() {
    function t(p, h) {
      return p === h && (p !== 0 || 1 / p === 1 / h) || p !== p && h !== h;
    }
    function r(p, h) {
      m || o.startTransition === void 0 || (m = !0, console.error(
        "You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."
      ));
      var c = h();
      if (!l) {
        var g = h();
        s(c, g) || (console.error(
          "The result of getSnapshot should be cached to avoid an infinite loop"
        ), l = !0);
      }
      g = a({
        inst: { value: c, getSnapshot: h }
      });
      var b = g[0].inst, _ = g[1];
      return d(
        function() {
          b.value = c, b.getSnapshot = h, e(b) && _({ inst: b });
        },
        [p, c, h]
      ), i(
        function() {
          return e(b) && _({ inst: b }), p(function() {
            e(b) && _({ inst: b });
          });
        },
        [p]
      ), f(c), c;
    }
    function e(p) {
      var h = p.getSnapshot;
      p = p.value;
      try {
        var c = h();
        return !s(p, c);
      } catch {
        return !0;
      }
    }
    function n(p, h) {
      return h();
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var o = ae, s = typeof Object.is == "function" ? Object.is : t, a = o.useState, i = o.useEffect, d = o.useLayoutEffect, f = o.useDebugValue, m = !1, l = !1, x = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? n : r;
    cn.useSyncExternalStore = o.useSyncExternalStore !== void 0 ? o.useSyncExternalStore : x, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  }()), cn;
}
var Un;
function Cr() {
  return Un || (Un = 1, process.env.NODE_ENV === "production" ? Ut.exports = Xo() : Ut.exports = Go()), Ut.exports;
}
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var jn;
function Jo() {
  if (jn) return an;
  jn = 1;
  var t = ae, r = Cr();
  function e(f, m) {
    return f === m && (f !== 0 || 1 / f === 1 / m) || f !== f && m !== m;
  }
  var n = typeof Object.is == "function" ? Object.is : e, o = r.useSyncExternalStore, s = t.useRef, a = t.useEffect, i = t.useMemo, d = t.useDebugValue;
  return an.useSyncExternalStoreWithSelector = function(f, m, l, x, p) {
    var h = s(null);
    if (h.current === null) {
      var c = { hasValue: !1, value: null };
      h.current = c;
    } else c = h.current;
    h = i(
      function() {
        function b(P) {
          if (!_) {
            if (_ = !0, k = P, P = x(P), p !== void 0 && c.hasValue) {
              var z = c.value;
              if (p(z, P))
                return C = z;
            }
            return C = P;
          }
          if (z = C, n(k, P)) return z;
          var Z = x(P);
          return p !== void 0 && p(z, Z) ? (k = P, z) : (k = P, C = Z);
        }
        var _ = !1, k, C, A = l === void 0 ? null : l;
        return [
          function() {
            return b(m());
          },
          A === null ? void 0 : function() {
            return b(A());
          }
        ];
      },
      [m, l, x, p]
    );
    var g = o(f, h[0], h[1]);
    return a(
      function() {
        c.hasValue = !0, c.value = g;
      },
      [g]
    ), d(g), g;
  }, an;
}
var dn = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Hn;
function Qo() {
  return Hn || (Hn = 1, process.env.NODE_ENV !== "production" && function() {
    function t(f, m) {
      return f === m && (f !== 0 || 1 / f === 1 / m) || f !== f && m !== m;
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var r = ae, e = Cr(), n = typeof Object.is == "function" ? Object.is : t, o = e.useSyncExternalStore, s = r.useRef, a = r.useEffect, i = r.useMemo, d = r.useDebugValue;
    dn.useSyncExternalStoreWithSelector = function(f, m, l, x, p) {
      var h = s(null);
      if (h.current === null) {
        var c = { hasValue: !1, value: null };
        h.current = c;
      } else c = h.current;
      h = i(
        function() {
          function b(P) {
            if (!_) {
              if (_ = !0, k = P, P = x(P), p !== void 0 && c.hasValue) {
                var z = c.value;
                if (p(z, P))
                  return C = z;
              }
              return C = P;
            }
            if (z = C, n(k, P))
              return z;
            var Z = x(P);
            return p !== void 0 && p(z, Z) ? (k = P, z) : (k = P, C = Z);
          }
          var _ = !1, k, C, A = l === void 0 ? null : l;
          return [
            function() {
              return b(m());
            },
            A === null ? void 0 : function() {
              return b(A());
            }
          ];
        },
        [m, l, x, p]
      );
      var g = o(f, h[0], h[1]);
      return a(
        function() {
          c.hasValue = !0, c.value = g;
        },
        [g]
      ), d(g), g;
    }, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  }()), dn;
}
process.env.NODE_ENV === "production" ? bn.exports = Jo() : bn.exports = Qo();
var es = bn.exports;
const ts = /* @__PURE__ */ Er(es), Nr = {}, { useDebugValue: ns } = ae, { useSyncExternalStoreWithSelector: rs } = ts;
let Wn = !1;
const os = (t) => t;
function ss(t, r = os, e) {
  (Nr ? "lib" : void 0) !== "production" && e && !Wn && (console.warn(
    "[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"
  ), Wn = !0);
  const n = rs(
    t.subscribe,
    t.getState,
    t.getServerState || t.getInitialState,
    r,
    e
  );
  return ns(n), n;
}
const $n = (t) => {
  (Nr ? "lib" : void 0) !== "production" && typeof t != "function" && console.warn(
    "[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`."
  );
  const r = typeof t == "function" ? Yo(t) : t, e = (n, o) => ss(r, n, o);
  return Object.assign(e, r), e;
}, as = (t) => t ? $n(t) : $n, is = [], At = [
  "#EF4444",
  "#F97316",
  "#F59E0B",
  "#EAB308",
  "#84CC16",
  "#22C55E",
  "#10B981",
  "#14B8A6",
  "#06B6D4",
  "#0EA5E9",
  "#3B82F6",
  "#6366F1",
  "#8B5CF6",
  "#A855F7",
  "#D946EF",
  "#EC4899",
  "#F43F5E",
  "#78716C",
  "#64748B",
  "#0F172A"
];
let Kn = 0;
const un = () => {
  const t = At[Kn % At.length];
  return Kn++, t;
};
function En(t) {
  const [r, e] = t.size, n = new Uint8Array(r * e);
  let o = 0, s = 0;
  for (const a of t.counts) {
    for (let i = 0; i < a; i++)
      o < n.length && (n[o] = s, o++);
    s = 1 - s;
  }
  return n;
}
function ls(t, r, e) {
  const n = [];
  let o = 0, s = 0;
  for (let a = 0; a < t.length; a++)
    t[a] === o ? s++ : (n.push(s), o = t[a], s = 1);
  return n.push(s), {
    counts: n,
    size: [e, r]
  };
}
function cs(t) {
  const [r, e] = t.size, n = En(t);
  let o = e, s = r, a = -1, i = -1, d = 0;
  for (let f = 0; f < r; f++)
    for (let m = 0; m < e; m++) {
      const l = f * e + m;
      n[l] === 1 && (d++, m < o && (o = m), m > a && (a = m), f < s && (s = f), f > i && (i = f));
    }
  return d === 0 ? { bbox: [0, 0, 0, 0], area: 0 } : {
    bbox: [o, s, a - o + 1, i - s + 1],
    area: d
  };
}
function ds(t, r, e) {
  const [n, o] = t.size, s = En(t), a = new Uint8Array(n * o), i = Math.round(r), d = Math.round(e);
  for (let f = 0; f < n; f++)
    for (let m = 0; m < o; m++) {
      const l = f * o + m;
      if (s[l] === 1) {
        const x = m + i, p = f + d;
        if (x >= 0 && x < o && p >= 0 && p < n) {
          const h = p * o + x;
          a[h] = 1;
        }
      }
    }
  return ls(a, o, n);
}
const jt = (t) => {
  if (!(typeof window > "u" || !t) && t.startsWith("blob:"))
    try {
      URL.revokeObjectURL(t);
    } catch (r) {
      console.warn("Failed to revoke object URL", r);
    }
}, Zn = {
  currentImage: null,
  images: [],
  annotations: [],
  selectedAnnotationIds: [],
  copiedAnnotations: [],
  currentTool: "hand",
  confidenceThreshold: 0.5,
  brushSize: 12,
  lineThickness: 4,
  drawMode: "add",
  brightness: 0,
  contrast: 0,
  enhancementMode: "none",
  tempPoints: [],
  tempBox: null,
  textPrompt: "",
  previewMask: null,
  polygonPoints: [],
  templateImage: null,
  templateBox: null,
  isPasting: !1,
  pasteOffset: null,
  categories: is,
  currentCategoryId: 0,
  // 0 means no category selected yet
  history: [],
  historyIndex: -1,
  isLoading: !1,
  error: null,
  showShortcuts: !1,
  shortcutOverrides: {}
}, ft = as((t, r) => ({
  ...Zn,
  // Image operations
  setCurrentImage: (e) => t({ currentImage: e }),
  addImage: (e) => t((n) => ({
    images: [...n.images, e],
    currentImage: n.currentImage || e
  })),
  addImages: (e) => t((n) => ({
    images: [...n.images, ...e],
    currentImage: n.currentImage || e[0] || null
  })),
  // For loading projects - directly set image list
  setImages: (e) => t((n) => (n.images.forEach((o) => jt(o.url)), {
    images: e,
    currentImage: e[0] || null
  })),
  removeImage: (e) => t((n) => {
    var f, m;
    const o = n.images.find((l) => l.id === e);
    o && jt(o.url);
    const s = n.images.filter((l) => l.id !== e), a = n.annotations.filter((l) => l.imageId !== e);
    let i = n.currentImage;
    if (((f = n.currentImage) == null ? void 0 : f.id) === e) {
      const l = n.images.findIndex((x) => x.id === e);
      i = s[l] || s[l - 1] || null;
    }
    const d = n.selectedAnnotationIds.filter(
      (l) => a.some((x) => x.id === l)
    );
    return {
      images: s,
      annotations: a,
      currentImage: i,
      selectedAnnotationIds: d,
      templateImage: ((m = n.templateImage) == null ? void 0 : m.id) === e ? null : n.templateImage
    };
  }),
  // Annotation operations
  addAnnotation: (e) => {
    const o = r().categories.find((a) => a.id === e.categoryId), s = {
      ...e,
      id: `ann_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      color: (o == null ? void 0 : o.color) || un(),
      visible: !0,
      selected: !1
    };
    t((a) => ({
      annotations: [...a.annotations, s]
    })), r().saveToHistory();
  },
  // Batch add annotations (avoid multiple state updates)
  addAnnotations: (e) => {
    const n = r(), o = e.map((s, a) => {
      const i = n.categories.find((d) => d.id === s.categoryId);
      return {
        ...s,
        id: `ann_${Date.now()}_${a}_${Math.random().toString(36).substr(2, 9)}`,
        color: (i == null ? void 0 : i.color) || un(),
        visible: !0,
        selected: !1
      };
    });
    t((s) => ({
      annotations: [...s.annotations, ...o]
    })), setTimeout(() => r().saveToHistory(), 100);
  },
  // For loading projects - directly set annotation list
  setAnnotations: (e) => t({
    annotations: e,
    selectedAnnotationIds: []
  }),
  updateAnnotation: (e, n) => {
    t((o) => ({
      annotations: o.annotations.map(
        (s) => s.id === e ? { ...s, ...n } : s
      )
    })), r().saveToHistory();
  },
  deleteAnnotation: (e) => {
    t((n) => ({
      annotations: n.annotations.filter((o) => o.id !== e),
      selectedAnnotationIds: n.selectedAnnotationIds.filter((o) => o !== e)
    })), r().saveToHistory();
  },
  deleteSelectedAnnotations: () => {
    t((e) => ({
      annotations: e.annotations.filter(
        (n) => !e.selectedAnnotationIds.includes(n.id)
      ),
      selectedAnnotationIds: []
    })), r().saveToHistory();
  },
  clearAllAnnotations: () => {
    t((e) => ({
      annotations: e.currentImage ? e.annotations.filter((n) => n.imageId !== e.currentImage.id) : [],
      selectedAnnotationIds: []
    })), r().saveToHistory();
  },
  selectAnnotation: (e, n = !1) => {
    t((o) => {
      if (n) {
        const s = o.selectedAnnotationIds.includes(e);
        return {
          selectedAnnotationIds: s ? o.selectedAnnotationIds.filter((a) => a !== e) : [...o.selectedAnnotationIds, e],
          annotations: o.annotations.map((a) => ({
            ...a,
            selected: s ? a.id !== e && o.selectedAnnotationIds.includes(a.id) : a.id === e || o.selectedAnnotationIds.includes(a.id)
          }))
        };
      }
      return {
        selectedAnnotationIds: [e],
        annotations: o.annotations.map((s) => ({
          ...s,
          selected: s.id === e
        }))
      };
    });
  },
  deselectAll: () => t((e) => ({
    selectedAnnotationIds: [],
    annotations: e.annotations.map((n) => ({ ...n, selected: !1 }))
  })),
  selectAll: () => t((e) => ({
    selectedAnnotationIds: e.annotations.map((n) => n.id),
    annotations: e.annotations.map((n) => ({ ...n, selected: !0 }))
  })),
  toggleAnnotationVisibility: (e) => t((n) => ({
    annotations: n.annotations.map(
      (o) => o.id === e ? { ...o, visible: !o.visible } : o
    )
  })),
  setAllAnnotationsVisibility: (e) => t((n) => ({
    annotations: n.currentImage ? n.annotations.map(
      (o) => o.imageId === n.currentImage.id ? { ...o, visible: e } : o
    ) : n.annotations
  })),
  // Copy selected annotations
  copySelectedAnnotations: () => {
    const e = r(), n = e.annotations.filter(
      (o) => e.selectedAnnotationIds.includes(o.id)
    );
    n.length > 0 && (t({ copiedAnnotations: n }), console.log(`[copySelectedAnnotations] Copied ${n.length} annotations`));
  },
  // Enter paste mode (triggered by Ctrl+V)
  startPasting: () => {
    const e = r();
    if (e.copiedAnnotations.length === 0) {
      console.log("[startPasting] No annotations to paste");
      return;
    }
    if (!e.currentImage) {
      console.log("[startPasting] No current image");
      return;
    }
    t({ isPasting: !0, pasteOffset: { x: 0, y: 0 } }), console.log("[startPasting] Entered paste mode, click target position");
  },
  // Confirm paste at specified position
  confirmPaste: (e, n) => {
    const o = r(), { copiedAnnotations: s, currentImage: a, annotations: i } = o;
    if (s.length === 0 || !a) {
      t({ isPasting: !1, pasteOffset: null });
      return;
    }
    let d = 0, f = 0, m = 0;
    s.forEach((g) => {
      const b = En(g.segmentation), [_, k] = g.segmentation.size;
      for (let C = 0; C < _; C++)
        for (let A = 0; A < k; A++) {
          const P = C * k + A;
          b[P] === 1 && (d += A, f += C, m++);
        }
    });
    const l = m > 0 ? d / m : 0, x = m > 0 ? f / m : 0, p = e - l, h = n - x, c = s.map((g, b) => {
      const _ = ds(g.segmentation, p, h), { bbox: k, area: C } = cs(_);
      return {
        ...g,
        id: `ann_${Date.now()}_${b}_${Math.random().toString(36).substr(2, 9)}`,
        imageId: a.id,
        bbox: k,
        area: C,
        segmentation: _,
        selected: !1
      };
    }).filter((g) => g.area > 0);
    t({
      annotations: [...i, ...c],
      selectedAnnotationIds: c.map((g) => g.id),
      isPasting: !1,
      pasteOffset: null
    }), console.log(`[confirmPaste] Pasted ${c.length} annotations at position (${e}, ${n}), offset (${p}, ${h})`), r().saveToHistory();
  },
  // Cancel paste mode
  cancelPaste: () => {
    t({ isPasting: !1, pasteOffset: null }), console.log("[cancelPaste] Cancelled paste mode");
  },
  // Tool operations
  setCurrentTool: (e) => t({
    currentTool: e,
    tempPoints: [],
    tempBox: null,
    previewMask: null,
    polygonPoints: []
  }),
  setConfidenceThreshold: (e) => t({ confidenceThreshold: e }),
  setBrushSize: (e) => t({ brushSize: Math.max(1, Math.min(100, e)) }),
  setLineThickness: (e) => t({ lineThickness: Math.max(1, Math.min(50, e)) }),
  setDrawMode: (e) => t({ drawMode: e }),
  // Image enhancement operations
  setBrightness: (e) => t({ brightness: Math.max(-100, Math.min(100, e)) }),
  setContrast: (e) => t({ contrast: Math.max(-100, Math.min(100, e)) }),
  setEnhancementMode: (e) => t({ enhancementMode: e }),
  resetEnhancement: () => t({
    brightness: 0,
    contrast: 0,
    enhancementMode: "none"
  }),
  // Temporary drawing operations
  addTempPoint: (e) => t((n) => ({
    tempPoints: [...n.tempPoints, e]
  })),
  clearTempPoints: () => t({ tempPoints: [], previewMask: null }),
  setTempBox: (e) => t({ tempBox: e }),
  setTextPrompt: (e) => t({ textPrompt: e }),
  setPreviewMask: (e) => t({ previewMask: e }),
  // Polygon drawing operations
  addPolygonPoint: (e) => t((n) => ({
    polygonPoints: [...n.polygonPoints, e]
  })),
  clearPolygonPoints: () => t({ polygonPoints: [] }),
  // Template operations
  setTemplateImage: (e) => t({ templateImage: e }),
  setTemplateBox: (e) => t({ templateBox: e }),
  // Category operations
  setCurrentCategoryId: (e) => t({ currentCategoryId: e }),
  addCategory: (e, n) => t((o) => {
    const a = (o.categories.length > 0 ? Math.max(...o.categories.map((d) => d.id)) : 0) + 1, i = {
      id: a,
      name: e,
      color: n || un(),
      supercategory: ""
    };
    return {
      categories: [...o.categories, i],
      currentCategoryId: o.currentCategoryId || a
    };
  }),
  deleteCategory: (e) => t((n) => {
    const o = n.categories.filter((a) => a.id !== e);
    let s = n.currentCategoryId;
    return n.currentCategoryId === e && (s = o.length > 0 ? o[0].id : 0), {
      categories: o,
      currentCategoryId: s
    };
  }),
  updateCategory: (e, n) => t((o) => {
    const s = o.categories.map(
      (i) => i.id === e ? { ...i, ...n } : i
    );
    let a = o.annotations;
    return (n.color || n.name) && (a = o.annotations.map((i) => i.categoryId === e ? {
      ...i,
      ...n.color && { color: n.color },
      ...n.name && { categoryName: n.name }
    } : i)), {
      categories: s,
      annotations: a
    };
  }),
  // For loading projects - directly set category list
  setCategories: (e) => {
    var n;
    return t({
      categories: e,
      currentCategoryId: ((n = e[0]) == null ? void 0 : n.id) || 0
    });
  },
  // History operations
  saveToHistory: () => t((e) => {
    const n = e.history.slice(0, e.historyIndex + 1), o = {
      annotations: JSON.parse(JSON.stringify(e.annotations)),
      timestamp: Date.now()
    }, s = [...n, o].slice(-50);
    return {
      history: s,
      historyIndex: s.length - 1
    };
  }),
  undo: () => t((e) => {
    if (e.historyIndex <= 0) return e;
    const n = e.historyIndex - 1, o = e.history[n];
    return {
      annotations: JSON.parse(JSON.stringify(o.annotations)),
      historyIndex: n,
      selectedAnnotationIds: []
    };
  }),
  redo: () => t((e) => {
    if (e.historyIndex >= e.history.length - 1) return e;
    const n = e.historyIndex + 1, o = e.history[n];
    return {
      annotations: JSON.parse(JSON.stringify(o.annotations)),
      historyIndex: n,
      selectedAnnotationIds: []
    };
  }),
  // UI operations
  setLoading: (e) => t({ isLoading: e }),
  setError: (e) => t({ error: e }),
  toggleShortcuts: () => t((e) => ({ showShortcuts: !e.showShortcuts })),
  setShortcutOverride: (e, n) => t((o) => {
    const s = n.trim().toLowerCase(), a = { ...o.shortcutOverrides };
    return s ? s.length !== 1 ? o : (Object.entries(a).forEach(([i, d]) => {
      i !== e && d === s && delete a[i];
    }), a[e] = s, { shortcutOverrides: a }) : (delete a[e], { shortcutOverrides: a });
  }),
  resetShortcutOverrides: () => t({ shortcutOverrides: {} }),
  // Reset
  reset: () => {
    const e = r();
    e.images.forEach((n) => jt(n.url)), e.templateImage && jt(e.templateImage.url), t({ ...Zn });
  }
}));
function yt({ tool: t, icon: r, label: e, shortcut: n, currentTool: o, onClick: s }) {
  const a = o === t;
  return /* @__PURE__ */ v(Ye, { content: e, shortcut: n, children: /* @__PURE__ */ v(
    "button",
    {
      onClick: () => s(t),
      "aria-label": `${e} (${n})`,
      className: `
          relative flex items-center justify-center w-8 h-8 rounded-lg transition-all duration-200
          ${a ? "bg-brand-600 text-white shadow-sm shadow-brand-300/40 scale-[1.02]" : "text-surface-500 hover:text-surface-700 hover:bg-white hover:shadow-sm"}
        `,
      children: r
    }
  ) });
}
function qn({ trigger: t, children: r, align: e = "left" }) {
  const [n, o] = Ae(!1), s = nt(null);
  return $e(() => {
    if (!n) return;
    function a(i) {
      s.current && !s.current.contains(i.target) && o(!1);
    }
    return document.addEventListener("mousedown", a), () => document.removeEventListener("mousedown", a);
  }, [n]), /* @__PURE__ */ Y("div", { className: "relative", ref: s, children: [
    /* @__PURE__ */ v("div", { onClick: () => o((a) => !a), children: t }),
    n && /* @__PURE__ */ v("div", { className: `absolute top-full mt-2 ${e === "right" ? "right-0" : "left-0"} bg-white rounded-xl shadow-float border border-surface-200/60 p-3 z-[200] min-w-[220px] animate-scale-in`, children: r })
  ] });
}
function Rt() {
  return /* @__PURE__ */ v("div", { className: "w-px h-6 bg-surface-200/60 mx-1 shrink-0" });
}
function us({ onExport: t, onUploadImages: r }) {
  const [e, n] = Ae(!1), [o, s] = Ae(!1), [a, i] = Ae("coco"), [d, f] = Ae(!0), m = nt(null);
  $e(() => {
    function h(c) {
      m.current && !m.current.contains(c.target) && n(!1);
    }
    return document.addEventListener("mousedown", h), () => document.removeEventListener("mousedown", h);
  }, []);
  const l = (h) => {
    i(h), n(!1), s(!0);
  }, x = () => {
    s(!1), t({ format: a, includeImages: d });
  }, p = {
    coco: /* @__PURE__ */ v(ko, { size: 16, className: "text-blue-500" }),
    "yolo-seg": /* @__PURE__ */ v(Dn, { size: 16, className: "text-emerald-500" }),
    "yolo-bbox": /* @__PURE__ */ v(Dn, { size: 16, className: "text-amber-500" })
  };
  return /* @__PURE__ */ Y(bt, { children: [
    o && /* @__PURE__ */ v("div", { className: "fixed inset-0 bg-surface-900/40 backdrop-blur-sm flex items-center justify-center z-[9999] animate-fade-in", children: /* @__PURE__ */ Y("div", { className: "bg-white rounded-2xl shadow-float p-6 w-[420px] animate-scale-in", children: [
      /* @__PURE__ */ Y("div", { className: "flex items-center justify-between mb-5", children: [
        /* @__PURE__ */ v("h3", { className: "text-base font-semibold text-surface-800", children: "Export Settings" }),
        /* @__PURE__ */ v("button", { onClick: () => s(!1), className: "icon-btn", children: /* @__PURE__ */ v(xt, { size: 18 }) })
      ] }),
      /* @__PURE__ */ Y("div", { className: "mb-4", children: [
        /* @__PURE__ */ v("div", { className: "text-sm text-surface-500 mb-1", children: "Format" }),
        /* @__PURE__ */ Y("div", { className: "flex items-center gap-2 px-3 py-2.5 bg-surface-50 rounded-lg border border-surface-200", children: [
          p[a],
          /* @__PURE__ */ v("span", { className: "font-medium text-sm text-surface-700", children: a === "coco" ? "COCO Format" : a === "yolo-seg" ? "YOLO Segmentation" : "YOLO Detection" })
        ] })
      ] }),
      /* @__PURE__ */ v("div", { className: "mb-6", children: /* @__PURE__ */ Y("label", { className: "flex items-center gap-3 cursor-pointer p-3 rounded-xl hover:bg-surface-50 border border-surface-200 transition-colors", children: [
        /* @__PURE__ */ v("input", { type: "checkbox", checked: d, onChange: (h) => f(h.target.checked), className: "w-4 h-4 rounded border-surface-300 text-brand-600 focus:ring-brand-500" }),
        /* @__PURE__ */ Y("div", { className: "flex items-center gap-2.5", children: [
          /* @__PURE__ */ v(Yt, { size: 18, className: "text-surface-400" }),
          /* @__PURE__ */ Y("div", { children: [
            /* @__PURE__ */ v("div", { className: "text-sm font-medium text-surface-700", children: "Include Images" }),
            /* @__PURE__ */ v("div", { className: "text-xs text-surface-400", children: "Package images into ZIP file" })
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ Y("div", { className: "flex gap-2.5 justify-end", children: [
        /* @__PURE__ */ v("button", { onClick: () => s(!1), className: "btn-ghost", children: "Cancel" }),
        /* @__PURE__ */ Y("button", { onClick: x, className: "btn-primary", children: [
          /* @__PURE__ */ v(Pn, { size: 15 }),
          "Export"
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ Y("div", { className: "flex items-center gap-1.5 pr-3 mr-1 border-r border-surface-200/40 shrink-0", children: [
      /* @__PURE__ */ Y("label", { className: "btn-primary cursor-pointer text-xs py-1.5 px-3 shadow-sm shadow-brand-200/30", children: [
        /* @__PURE__ */ v(Ko, { size: 14 }),
        /* @__PURE__ */ v("span", { children: "Upload" }),
        /* @__PURE__ */ v("input", { type: "file", accept: "image/*", multiple: !0, className: "hidden", onChange: (h) => {
          const c = h.target.files;
          c && r && (r(Array.from(c)), h.target.value = "");
        } })
      ] }),
      /* @__PURE__ */ Y("div", { className: "relative", ref: m, children: [
        /* @__PURE__ */ Y("button", { onClick: () => n(!e), className: "btn-secondary text-xs py-1.5 px-3", children: [
          /* @__PURE__ */ v(Pn, { size: 14 }),
          /* @__PURE__ */ v("span", { children: "Export" }),
          /* @__PURE__ */ v(Sn, { size: 12, className: `transition-transform duration-200 ${e ? "rotate-180" : ""}` })
        ] }),
        e && /* @__PURE__ */ v("div", { className: "absolute top-full left-0 mt-1.5 bg-white rounded-xl shadow-float border border-surface-200/60 py-1 z-[100] min-w-[200px] animate-slide-down", children: [
          { format: "coco", label: "COCO Format", ext: ".json" },
          { format: "yolo-seg", label: "YOLO Segmentation", ext: ".txt" },
          { format: "yolo-bbox", label: "YOLO Detection", ext: ".txt" }
        ].map(({ format: h, label: c, ext: g }) => /* @__PURE__ */ Y("button", { onClick: () => l(h), className: "w-full px-3.5 py-2.5 text-left text-sm hover:bg-surface-50 flex items-center gap-2.5 transition-colors", children: [
          p[h],
          /* @__PURE__ */ v("span", { className: "font-medium text-surface-700", children: c }),
          /* @__PURE__ */ v("span", { className: "text-surface-300 text-xs ml-auto", children: g })
        ] }, h)) })
      ] })
    ] })
  ] });
}
function fs({ scale: t, onZoomIn: r, onZoomOut: e, onZoomFit: n, onZoom100: o }) {
  const [s, a] = Ae(!0), {
    currentTool: i,
    setCurrentTool: d,
    confidenceThreshold: f,
    setConfidenceThreshold: m,
    brushSize: l,
    setBrushSize: x,
    lineThickness: p,
    setLineThickness: h,
    drawMode: c,
    setDrawMode: g,
    brightness: b,
    contrast: _,
    enhancementMode: k,
    setBrightness: C,
    setContrast: A,
    setEnhancementMode: P,
    resetEnhancement: z,
    undo: Z,
    redo: M,
    deleteSelectedAnnotations: G,
    clearAllAnnotations: le,
    setAllAnnotationsVisibility: N,
    selectedAnnotationIds: L,
    history: y,
    historyIndex: W,
    toggleShortcuts: re,
    annotations: F,
    currentImage: me
  } = ft(), U = W > 0, te = W < y.length - 1, I = L.length > 0, O = me ? F.some((Q) => Q.imageId === me.id) : !1;
  return /* @__PURE__ */ v("div", { className: "bg-white/95 backdrop-blur-md border-b border-surface-200/40 relative z-40 shadow-[0_1px_3px_rgba(0,0,0,0.04)]", children: /* @__PURE__ */ Y("div", { className: "flex items-center gap-1 px-3 py-1.5", children: [
    /* @__PURE__ */ Y("div", { className: "flex items-center gap-0.5", children: [
      /* @__PURE__ */ v(yt, { tool: "hand", icon: /* @__PURE__ */ v(So, { size: 16 }), label: "Pan", shortcut: "H", currentTool: i, onClick: d }),
      /* @__PURE__ */ v(yt, { tool: "pointer", icon: /* @__PURE__ */ v(Ao, { size: 16 }), label: "Select", shortcut: "V", currentTool: i, onClick: d })
    ] }),
    /* @__PURE__ */ v(Rt, {}),
    /* @__PURE__ */ Y("div", { className: "flex items-center gap-0.5 bg-brand-50/50 rounded-lg px-1.5 py-0.5", children: [
      /* @__PURE__ */ v("span", { className: "text-2xs text-brand-400 font-semibold mx-0.5 select-none", children: "AI" }),
      /* @__PURE__ */ v(yt, { tool: "add-point", icon: /* @__PURE__ */ v(Sr, { size: 16 }), label: "Point", shortcut: "P", currentTool: i, onClick: d }),
      /* @__PURE__ */ v(yt, { tool: "box", icon: /* @__PURE__ */ v(Uo, { size: 16 }), label: "Box", shortcut: "B", currentTool: i, onClick: d }),
      /* @__PURE__ */ v(yt, { tool: "text", icon: /* @__PURE__ */ v(Wo, { size: 16 }), label: "Text", shortcut: "T", currentTool: i, onClick: d }),
      /* @__PURE__ */ v(yt, { tool: "template", icon: /* @__PURE__ */ v(_o, { size: 16 }), label: "Template", shortcut: "M", currentTool: i, onClick: d })
    ] }),
    /* @__PURE__ */ v(Rt, {}),
    /* @__PURE__ */ Y("div", { className: "flex items-center gap-0.5 bg-surface-50 rounded-lg px-1.5 py-0.5", children: [
      /* @__PURE__ */ v("span", { className: "text-2xs text-surface-400 font-semibold mx-0.5 select-none", children: "Draw" }),
      /* @__PURE__ */ v(yt, { tool: "polygon", icon: /* @__PURE__ */ v(Io, { size: 16 }), label: "Polygon", shortcut: "G", currentTool: i, onClick: d }),
      /* @__PURE__ */ v(yt, { tool: "brush", icon: /* @__PURE__ */ v(bo, { size: 16 }), label: "Brush", shortcut: "R", currentTool: i, onClick: d }),
      /* @__PURE__ */ v(yt, { tool: "line", icon: /* @__PURE__ */ v(Lo, { size: 16 }), label: "Line", shortcut: "L", currentTool: i, onClick: d })
    ] }),
    (i === "brush" || i === "polygon") && /* @__PURE__ */ Y(bt, { children: [
      /* @__PURE__ */ v(Rt, {}),
      /* @__PURE__ */ Y("div", { className: "flex items-center bg-surface-100 rounded-lg p-0.5 gap-0.5 animate-fade-in", children: [
        /* @__PURE__ */ v(Ye, { content: "Add Mode", children: /* @__PURE__ */ Y(
          "button",
          {
            onClick: () => g("add"),
            className: `flex items-center gap-1 px-2 py-1 rounded-md text-xs font-medium transition-all ${c === "add" ? "bg-brand-600 text-white shadow-sm" : "text-surface-500 hover:text-surface-700"}`,
            children: [
              /* @__PURE__ */ v(Ro, { size: 14 }),
              " Add"
            ]
          }
        ) }),
        /* @__PURE__ */ v(Ye, { content: "Remove Mode (Erase)", children: /* @__PURE__ */ Y(
          "button",
          {
            onClick: () => g("remove"),
            className: `flex items-center gap-1 px-2 py-1 rounded-md text-xs font-medium transition-all ${c === "remove" ? "bg-rose-500 text-white shadow-sm" : "text-surface-500 hover:text-surface-700"}`,
            children: [
              /* @__PURE__ */ v(No, { size: 14 }),
              " Remove"
            ]
          }
        ) })
      ] })
    ] }),
    (i === "brush" || i === "line") && /* @__PURE__ */ Y("div", { className: "flex items-center gap-1.5 ml-1 animate-fade-in", children: [
      /* @__PURE__ */ v("span", { className: "text-2xs text-surface-400 font-medium", children: i === "brush" ? "Size" : "Width" }),
      /* @__PURE__ */ v(
        "input",
        {
          type: "range",
          min: "1",
          max: i === "brush" ? "64" : "24",
          step: "1",
          value: i === "brush" ? l : p,
          onChange: (Q) => {
            const K = parseInt(Q.target.value, 10);
            i === "brush" ? x(K) : h(K);
          },
          className: "slider-modern w-16"
        }
      ),
      /* @__PURE__ */ v("span", { className: "text-2xs font-semibold text-surface-600 w-5 text-right tabular-nums", children: i === "brush" ? l : p })
    ] }),
    /* @__PURE__ */ v(Rt, {}),
    /* @__PURE__ */ Y("div", { className: "flex items-center gap-0.5", children: [
      /* @__PURE__ */ v(Ye, { content: "Undo", shortcut: "Ctrl+Z", children: /* @__PURE__ */ v("button", { onClick: Z, disabled: !U, className: "icon-btn !p-1", "aria-label": "Undo", children: /* @__PURE__ */ v($o, { size: 16 }) }) }),
      /* @__PURE__ */ v(Ye, { content: "Redo", shortcut: "Ctrl+Y", children: /* @__PURE__ */ v("button", { onClick: M, disabled: !te, className: "icon-btn !p-1", "aria-label": "Redo", children: /* @__PURE__ */ v(zo, { size: 16 }) }) }),
      /* @__PURE__ */ v(Ye, { content: "Delete Selected", shortcut: "Del", children: /* @__PURE__ */ v("button", { onClick: G, disabled: !I, className: `icon-btn !p-1 ${I ? "hover:!text-rose-500 hover:!bg-rose-50" : ""}`, "aria-label": "Delete Selected", children: /* @__PURE__ */ v(Xt, { size: 16 }) }) }),
      /* @__PURE__ */ v(Ye, { content: "Clear All", children: /* @__PURE__ */ v("button", { onClick: () => {
        confirm("Clear all annotations on the current image? This action can be undone.") && le();
      }, className: "icon-btn !p-1 hover:!text-rose-500 hover:!bg-rose-50", "aria-label": "Clear All", children: /* @__PURE__ */ v(xt, { size: 16 }) }) }),
      /* @__PURE__ */ v(Ye, { content: s ? "Hide All Annotations" : "Show All Annotations", children: /* @__PURE__ */ v("button", { onClick: () => {
        const Q = !s;
        a(Q), N(Q);
      }, disabled: !O, className: "icon-btn !p-1", "aria-label": "Toggle Visibility", children: s ? /* @__PURE__ */ v(_r, { size: 16 }) : /* @__PURE__ */ v(wr, { size: 16 }) }) })
    ] }),
    /* @__PURE__ */ v(Rt, {}),
    /* @__PURE__ */ v(
      qn,
      {
        trigger: /* @__PURE__ */ v(Ye, { content: "Confidence Threshold", children: /* @__PURE__ */ Y("button", { className: "flex items-center gap-1 px-2 py-1 rounded-lg text-xs font-medium text-surface-500 hover:text-surface-700 hover:bg-surface-100 transition-colors", children: [
          /* @__PURE__ */ v(Bo, { size: 14 }),
          /* @__PURE__ */ Y("span", { className: "tabular-nums", children: [
            (f * 100).toFixed(0),
            "%"
          ] })
        ] }) }),
        children: /* @__PURE__ */ Y("div", { className: "space-y-2 w-48", children: [
          /* @__PURE__ */ v("div", { className: "text-xs font-semibold text-surface-700", children: "Confidence Threshold" }),
          /* @__PURE__ */ v("input", { type: "range", min: "0", max: "1", step: "0.05", value: f, onChange: (Q) => m(parseFloat(Q.target.value)), className: "slider-modern w-full" }),
          /* @__PURE__ */ Y("div", { className: "text-xs text-surface-500 text-center tabular-nums", children: [
            (f * 100).toFixed(0),
            "%"
          ] })
        ] })
      }
    ),
    /* @__PURE__ */ v(
      qn,
      {
        trigger: /* @__PURE__ */ v(Ye, { content: "Image Enhancement", children: /* @__PURE__ */ v("button", { className: "flex items-center justify-center w-8 h-8 rounded-lg text-surface-500 hover:text-surface-700 hover:bg-surface-100 transition-colors", children: /* @__PURE__ */ v(jo, { size: 16 }) }) }),
        children: /* @__PURE__ */ Y("div", { className: "space-y-3 w-52", children: [
          /* @__PURE__ */ Y("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ v("span", { className: "text-xs font-semibold text-surface-700", children: "Enhancement" }),
            /* @__PURE__ */ v("button", { onClick: z, className: "icon-btn !p-1", "aria-label": "Reset", children: /* @__PURE__ */ v(Do, { size: 13 }) })
          ] }),
          /* @__PURE__ */ Y("div", { className: "space-y-1", children: [
            /* @__PURE__ */ Y("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ v("label", { className: "text-2xs font-medium text-surface-500", children: "Brightness" }),
              /* @__PURE__ */ v("span", { className: "text-2xs font-semibold text-surface-400 tabular-nums bg-surface-100 px-1.5 py-0.5 rounded", children: b })
            ] }),
            /* @__PURE__ */ v("input", { type: "range", min: -100, max: 100, value: b, onChange: (Q) => C(Number(Q.target.value)), className: "slider-modern w-full" })
          ] }),
          /* @__PURE__ */ Y("div", { className: "space-y-1", children: [
            /* @__PURE__ */ Y("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ v("label", { className: "text-2xs font-medium text-surface-500", children: "Contrast" }),
              /* @__PURE__ */ v("span", { className: "text-2xs font-semibold text-surface-400 tabular-nums bg-surface-100 px-1.5 py-0.5 rounded", children: _ })
            ] }),
            /* @__PURE__ */ v("input", { type: "range", min: -100, max: 100, value: _, onChange: (Q) => A(Number(Q.target.value)), className: "slider-modern w-full" })
          ] }),
          /* @__PURE__ */ Y("div", { className: "space-y-1", children: [
            /* @__PURE__ */ v("label", { className: "text-2xs font-medium text-surface-500", children: "Mode" }),
            /* @__PURE__ */ v("div", { className: "segmented-control", children: ["none", "auto", "histogram"].map((Q) => /* @__PURE__ */ v("button", { onClick: () => P(Q), className: `segmented-control-item ${k === Q ? "active" : ""}`, children: Q === "none" ? "None" : Q === "auto" ? "Auto" : "Hist" }, Q)) })
          ] })
        ] })
      }
    ),
    /* @__PURE__ */ Y("div", { className: "flex items-center gap-0.5 bg-surface-50 rounded-lg px-1 py-0.5", children: [
      /* @__PURE__ */ v(Ye, { content: "Zoom Out", children: /* @__PURE__ */ v("button", { onClick: e, className: "icon-btn !p-1", "aria-label": "Zoom Out", children: /* @__PURE__ */ v(qo, { size: 15 }) }) }),
      /* @__PURE__ */ Y("span", { className: "text-2xs font-semibold text-surface-500 tabular-nums w-10 text-center select-none", children: [
        Math.round(t * 100),
        "%"
      ] }),
      /* @__PURE__ */ v(Ye, { content: "Zoom In", children: /* @__PURE__ */ v("button", { onClick: r, className: "icon-btn !p-1", "aria-label": "Zoom In", children: /* @__PURE__ */ v(Zo, { size: 15 }) }) }),
      /* @__PURE__ */ v(Ye, { content: "Fit to View", children: /* @__PURE__ */ v("button", { onClick: n, className: "icon-btn !p-1", "aria-label": "Fit", children: /* @__PURE__ */ v(Co, { size: 14 }) }) }),
      /* @__PURE__ */ v(Ye, { content: "Actual Size (100%)", children: /* @__PURE__ */ v("button", { onClick: o, className: "text-2xs font-bold px-1.5 py-1 rounded-md text-surface-400 hover:text-surface-700 hover:bg-surface-200/60 transition-colors", "aria-label": "100%", children: "1:1" }) })
    ] }),
    /* @__PURE__ */ v("div", { className: "flex-1" }),
    /* @__PURE__ */ v(Ye, { content: "Keyboard Shortcuts", shortcut: "?", children: /* @__PURE__ */ v("button", { onClick: re, className: "icon-btn !p-1", "aria-label": "Keyboard Shortcuts", children: /* @__PURE__ */ v(kr, { size: 16 }) }) })
  ] }) });
}
function Ar(t, r) {
  return function() {
    return t.apply(r, arguments);
  };
}
const { toString: hs } = Object.prototype, { getPrototypeOf: Cn } = Object, { iterator: Qt, toStringTag: Tr } = Symbol, en = /* @__PURE__ */ ((t) => (r) => {
  const e = hs.call(r);
  return t[e] || (t[e] = e.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), lt = (t) => (t = t.toLowerCase(), (r) => en(r) === t), tn = (t) => (r) => typeof r === t, { isArray: It } = Array, Tt = tn("undefined");
function Dt(t) {
  return t !== null && !Tt(t) && t.constructor !== null && !Tt(t.constructor) && Qe(t.constructor.isBuffer) && t.constructor.isBuffer(t);
}
const Ir = lt("ArrayBuffer");
function ms(t) {
  let r;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? r = ArrayBuffer.isView(t) : r = t && t.buffer && Ir(t.buffer), r;
}
const ps = tn("string"), Qe = tn("function"), Or = tn("number"), Mt = (t) => t !== null && typeof t == "object", gs = (t) => t === !0 || t === !1, Zt = (t) => {
  if (en(t) !== "object")
    return !1;
  const r = Cn(t);
  return (r === null || r === Object.prototype || Object.getPrototypeOf(r) === null) && !(Tr in t) && !(Qt in t);
}, ys = (t) => {
  if (!Mt(t) || Dt(t))
    return !1;
  try {
    return Object.keys(t).length === 0 && Object.getPrototypeOf(t) === Object.prototype;
  } catch {
    return !1;
  }
}, bs = lt("Date"), xs = lt("File"), vs = lt("Blob"), ws = lt("FileList"), _s = (t) => Mt(t) && Qe(t.pipe), ks = (t) => {
  let r;
  return t && (typeof FormData == "function" && t instanceof FormData || Qe(t.append) && ((r = en(t)) === "formdata" || // detect form-data instance
  r === "object" && Qe(t.toString) && t.toString() === "[object FormData]"));
}, Ss = lt("URLSearchParams"), [Es, Cs, Ns, As] = ["ReadableStream", "Request", "Response", "Headers"].map(lt), Ts = (t) => t.trim ? t.trim() : t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Lt(t, r, { allOwnKeys: e = !1 } = {}) {
  if (t === null || typeof t > "u")
    return;
  let n, o;
  if (typeof t != "object" && (t = [t]), It(t))
    for (n = 0, o = t.length; n < o; n++)
      r.call(null, t[n], n, t);
  else {
    if (Dt(t))
      return;
    const s = e ? Object.getOwnPropertyNames(t) : Object.keys(t), a = s.length;
    let i;
    for (n = 0; n < a; n++)
      i = s[n], r.call(null, t[i], i, t);
  }
}
function Rr(t, r) {
  if (Dt(t))
    return null;
  r = r.toLowerCase();
  const e = Object.keys(t);
  let n = e.length, o;
  for (; n-- > 0; )
    if (o = e[n], r === o.toLowerCase())
      return o;
  return null;
}
const kt = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, zr = (t) => !Tt(t) && t !== kt;
function xn() {
  const { caseless: t, skipUndefined: r } = zr(this) && this || {}, e = {}, n = (o, s) => {
    const a = t && Rr(e, s) || s;
    Zt(e[a]) && Zt(o) ? e[a] = xn(e[a], o) : Zt(o) ? e[a] = xn({}, o) : It(o) ? e[a] = o.slice() : (!r || !Tt(o)) && (e[a] = o);
  };
  for (let o = 0, s = arguments.length; o < s; o++)
    arguments[o] && Lt(arguments[o], n);
  return e;
}
const Is = (t, r, e, { allOwnKeys: n } = {}) => (Lt(r, (o, s) => {
  e && Qe(o) ? t[s] = Ar(o, e) : t[s] = o;
}, { allOwnKeys: n }), t), Os = (t) => (t.charCodeAt(0) === 65279 && (t = t.slice(1)), t), Rs = (t, r, e, n) => {
  t.prototype = Object.create(r.prototype, n), t.prototype.constructor = t, Object.defineProperty(t, "super", {
    value: r.prototype
  }), e && Object.assign(t.prototype, e);
}, zs = (t, r, e, n) => {
  let o, s, a;
  const i = {};
  if (r = r || {}, t == null) return r;
  do {
    for (o = Object.getOwnPropertyNames(t), s = o.length; s-- > 0; )
      a = o[s], (!n || n(a, t, r)) && !i[a] && (r[a] = t[a], i[a] = !0);
    t = e !== !1 && Cn(t);
  } while (t && (!e || e(t, r)) && t !== Object.prototype);
  return r;
}, Ps = (t, r, e) => {
  t = String(t), (e === void 0 || e > t.length) && (e = t.length), e -= r.length;
  const n = t.indexOf(r, e);
  return n !== -1 && n === e;
}, Ds = (t) => {
  if (!t) return null;
  if (It(t)) return t;
  let r = t.length;
  if (!Or(r)) return null;
  const e = new Array(r);
  for (; r-- > 0; )
    e[r] = t[r];
  return e;
}, Ms = /* @__PURE__ */ ((t) => (r) => t && r instanceof t)(typeof Uint8Array < "u" && Cn(Uint8Array)), Ls = (t, r) => {
  const n = (t && t[Qt]).call(t);
  let o;
  for (; (o = n.next()) && !o.done; ) {
    const s = o.value;
    r.call(t, s[0], s[1]);
  }
}, Bs = (t, r) => {
  let e;
  const n = [];
  for (; (e = t.exec(r)) !== null; )
    n.push(e);
  return n;
}, Fs = lt("HTMLFormElement"), Us = (t) => t.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(e, n, o) {
    return n.toUpperCase() + o;
  }
), Vn = (({ hasOwnProperty: t }) => (r, e) => t.call(r, e))(Object.prototype), js = lt("RegExp"), Pr = (t, r) => {
  const e = Object.getOwnPropertyDescriptors(t), n = {};
  Lt(e, (o, s) => {
    let a;
    (a = r(o, s, t)) !== !1 && (n[s] = a || o);
  }), Object.defineProperties(t, n);
}, Hs = (t) => {
  Pr(t, (r, e) => {
    if (Qe(t) && ["arguments", "caller", "callee"].indexOf(e) !== -1)
      return !1;
    const n = t[e];
    if (Qe(n)) {
      if (r.enumerable = !1, "writable" in r) {
        r.writable = !1;
        return;
      }
      r.set || (r.set = () => {
        throw Error("Can not rewrite read-only method '" + e + "'");
      });
    }
  });
}, Ws = (t, r) => {
  const e = {}, n = (o) => {
    o.forEach((s) => {
      e[s] = !0;
    });
  };
  return It(t) ? n(t) : n(String(t).split(r)), e;
}, $s = () => {
}, Ks = (t, r) => t != null && Number.isFinite(t = +t) ? t : r;
function Zs(t) {
  return !!(t && Qe(t.append) && t[Tr] === "FormData" && t[Qt]);
}
const qs = (t) => {
  const r = new Array(10), e = (n, o) => {
    if (Mt(n)) {
      if (r.indexOf(n) >= 0)
        return;
      if (Dt(n))
        return n;
      if (!("toJSON" in n)) {
        r[o] = n;
        const s = It(n) ? [] : {};
        return Lt(n, (a, i) => {
          const d = e(a, o + 1);
          !Tt(d) && (s[i] = d);
        }), r[o] = void 0, s;
      }
    }
    return n;
  };
  return e(t, 0);
}, Vs = lt("AsyncFunction"), Ys = (t) => t && (Mt(t) || Qe(t)) && Qe(t.then) && Qe(t.catch), Dr = ((t, r) => t ? setImmediate : r ? ((e, n) => (kt.addEventListener("message", ({ source: o, data: s }) => {
  o === kt && s === e && n.length && n.shift()();
}, !1), (o) => {
  n.push(o), kt.postMessage(e, "*");
}))(`axios@${Math.random()}`, []) : (e) => setTimeout(e))(
  typeof setImmediate == "function",
  Qe(kt.postMessage)
), Xs = typeof queueMicrotask < "u" ? queueMicrotask.bind(kt) : typeof process < "u" && process.nextTick || Dr, Gs = (t) => t != null && Qe(t[Qt]), j = {
  isArray: It,
  isArrayBuffer: Ir,
  isBuffer: Dt,
  isFormData: ks,
  isArrayBufferView: ms,
  isString: ps,
  isNumber: Or,
  isBoolean: gs,
  isObject: Mt,
  isPlainObject: Zt,
  isEmptyObject: ys,
  isReadableStream: Es,
  isRequest: Cs,
  isResponse: Ns,
  isHeaders: As,
  isUndefined: Tt,
  isDate: bs,
  isFile: xs,
  isBlob: vs,
  isRegExp: js,
  isFunction: Qe,
  isStream: _s,
  isURLSearchParams: Ss,
  isTypedArray: Ms,
  isFileList: ws,
  forEach: Lt,
  merge: xn,
  extend: Is,
  trim: Ts,
  stripBOM: Os,
  inherits: Rs,
  toFlatObject: zs,
  kindOf: en,
  kindOfTest: lt,
  endsWith: Ps,
  toArray: Ds,
  forEachEntry: Ls,
  matchAll: Bs,
  isHTMLForm: Fs,
  hasOwnProperty: Vn,
  hasOwnProp: Vn,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: Pr,
  freezeMethods: Hs,
  toObjectSet: Ws,
  toCamelCase: Us,
  noop: $s,
  toFiniteNumber: Ks,
  findKey: Rr,
  global: kt,
  isContextDefined: zr,
  isSpecCompliantForm: Zs,
  toJSONObject: qs,
  isAsyncFn: Vs,
  isThenable: Ys,
  setImmediate: Dr,
  asap: Xs,
  isIterable: Gs
};
function Ce(t, r, e, n, o) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = t, this.name = "AxiosError", r && (this.code = r), e && (this.config = e), n && (this.request = n), o && (this.response = o, this.status = o.status ? o.status : null);
}
j.inherits(Ce, Error, {
  toJSON: function() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: j.toJSONObject(this.config),
      code: this.code,
      status: this.status
    };
  }
});
const Mr = Ce.prototype, Lr = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL"
  // eslint-disable-next-line func-names
].forEach((t) => {
  Lr[t] = { value: t };
});
Object.defineProperties(Ce, Lr);
Object.defineProperty(Mr, "isAxiosError", { value: !0 });
Ce.from = (t, r, e, n, o, s) => {
  const a = Object.create(Mr);
  j.toFlatObject(t, a, function(m) {
    return m !== Error.prototype;
  }, (f) => f !== "isAxiosError");
  const i = t && t.message ? t.message : "Error", d = r == null && t ? t.code : r;
  return Ce.call(a, i, d, e, n, o), t && a.cause == null && Object.defineProperty(a, "cause", { value: t, configurable: !0 }), a.name = t && t.name || "Error", s && Object.assign(a, s), a;
};
const Js = null;
function vn(t) {
  return j.isPlainObject(t) || j.isArray(t);
}
function Br(t) {
  return j.endsWith(t, "[]") ? t.slice(0, -2) : t;
}
function Yn(t, r, e) {
  return t ? t.concat(r).map(function(o, s) {
    return o = Br(o), !e && s ? "[" + o + "]" : o;
  }).join(e ? "." : "") : r;
}
function Qs(t) {
  return j.isArray(t) && !t.some(vn);
}
const ea = j.toFlatObject(j, {}, null, function(r) {
  return /^is[A-Z]/.test(r);
});
function nn(t, r, e) {
  if (!j.isObject(t))
    throw new TypeError("target must be an object");
  r = r || new FormData(), e = j.toFlatObject(e, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(c, g) {
    return !j.isUndefined(g[c]);
  });
  const n = e.metaTokens, o = e.visitor || m, s = e.dots, a = e.indexes, d = (e.Blob || typeof Blob < "u" && Blob) && j.isSpecCompliantForm(r);
  if (!j.isFunction(o))
    throw new TypeError("visitor must be a function");
  function f(h) {
    if (h === null) return "";
    if (j.isDate(h))
      return h.toISOString();
    if (j.isBoolean(h))
      return h.toString();
    if (!d && j.isBlob(h))
      throw new Ce("Blob is not supported. Use a Buffer instead.");
    return j.isArrayBuffer(h) || j.isTypedArray(h) ? d && typeof Blob == "function" ? new Blob([h]) : Buffer.from(h) : h;
  }
  function m(h, c, g) {
    let b = h;
    if (h && !g && typeof h == "object") {
      if (j.endsWith(c, "{}"))
        c = n ? c : c.slice(0, -2), h = JSON.stringify(h);
      else if (j.isArray(h) && Qs(h) || (j.isFileList(h) || j.endsWith(c, "[]")) && (b = j.toArray(h)))
        return c = Br(c), b.forEach(function(k, C) {
          !(j.isUndefined(k) || k === null) && r.append(
            // eslint-disable-next-line no-nested-ternary
            a === !0 ? Yn([c], C, s) : a === null ? c : c + "[]",
            f(k)
          );
        }), !1;
    }
    return vn(h) ? !0 : (r.append(Yn(g, c, s), f(h)), !1);
  }
  const l = [], x = Object.assign(ea, {
    defaultVisitor: m,
    convertValue: f,
    isVisitable: vn
  });
  function p(h, c) {
    if (!j.isUndefined(h)) {
      if (l.indexOf(h) !== -1)
        throw Error("Circular reference detected in " + c.join("."));
      l.push(h), j.forEach(h, function(b, _) {
        (!(j.isUndefined(b) || b === null) && o.call(
          r,
          b,
          j.isString(_) ? _.trim() : _,
          c,
          x
        )) === !0 && p(b, c ? c.concat(_) : [_]);
      }), l.pop();
    }
  }
  if (!j.isObject(t))
    throw new TypeError("data must be an object");
  return p(t), r;
}
function Xn(t) {
  const r = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g, function(n) {
    return r[n];
  });
}
function Nn(t, r) {
  this._pairs = [], t && nn(t, this, r);
}
const Fr = Nn.prototype;
Fr.append = function(r, e) {
  this._pairs.push([r, e]);
};
Fr.toString = function(r) {
  const e = r ? function(n) {
    return r.call(this, n, Xn);
  } : Xn;
  return this._pairs.map(function(o) {
    return e(o[0]) + "=" + e(o[1]);
  }, "").join("&");
};
function ta(t) {
  return encodeURIComponent(t).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+");
}
function Ur(t, r, e) {
  if (!r)
    return t;
  const n = e && e.encode || ta;
  j.isFunction(e) && (e = {
    serialize: e
  });
  const o = e && e.serialize;
  let s;
  if (o ? s = o(r, e) : s = j.isURLSearchParams(r) ? r.toString() : new Nn(r, e).toString(n), s) {
    const a = t.indexOf("#");
    a !== -1 && (t = t.slice(0, a)), t += (t.indexOf("?") === -1 ? "?" : "&") + s;
  }
  return t;
}
class Gn {
  constructor() {
    this.handlers = [];
  }
  /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   *
   * @return {Number} An ID used to remove interceptor later
   */
  use(r, e, n) {
    return this.handlers.push({
      fulfilled: r,
      rejected: e,
      synchronous: n ? n.synchronous : !1,
      runWhen: n ? n.runWhen : null
    }), this.handlers.length - 1;
  }
  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {void}
   */
  eject(r) {
    this.handlers[r] && (this.handlers[r] = null);
  }
  /**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */
  clear() {
    this.handlers && (this.handlers = []);
  }
  /**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   *
   * @returns {void}
   */
  forEach(r) {
    j.forEach(this.handlers, function(n) {
      n !== null && r(n);
    });
  }
}
const jr = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, na = typeof URLSearchParams < "u" ? URLSearchParams : Nn, ra = typeof FormData < "u" ? FormData : null, oa = typeof Blob < "u" ? Blob : null, sa = {
  isBrowser: !0,
  classes: {
    URLSearchParams: na,
    FormData: ra,
    Blob: oa
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, An = typeof window < "u" && typeof document < "u", wn = typeof navigator == "object" && navigator || void 0, aa = An && (!wn || ["ReactNative", "NativeScript", "NS"].indexOf(wn.product) < 0), ia = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", la = An && window.location.href || "http://localhost", ca = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: An,
  hasStandardBrowserEnv: aa,
  hasStandardBrowserWebWorkerEnv: ia,
  navigator: wn,
  origin: la
}, Symbol.toStringTag, { value: "Module" })), Ze = {
  ...ca,
  ...sa
};
function da(t, r) {
  return nn(t, new Ze.classes.URLSearchParams(), {
    visitor: function(e, n, o, s) {
      return Ze.isNode && j.isBuffer(e) ? (this.append(n, e.toString("base64")), !1) : s.defaultVisitor.apply(this, arguments);
    },
    ...r
  });
}
function ua(t) {
  return j.matchAll(/\w+|\[(\w*)]/g, t).map((r) => r[0] === "[]" ? "" : r[1] || r[0]);
}
function fa(t) {
  const r = {}, e = Object.keys(t);
  let n;
  const o = e.length;
  let s;
  for (n = 0; n < o; n++)
    s = e[n], r[s] = t[s];
  return r;
}
function Hr(t) {
  function r(e, n, o, s) {
    let a = e[s++];
    if (a === "__proto__") return !0;
    const i = Number.isFinite(+a), d = s >= e.length;
    return a = !a && j.isArray(o) ? o.length : a, d ? (j.hasOwnProp(o, a) ? o[a] = [o[a], n] : o[a] = n, !i) : ((!o[a] || !j.isObject(o[a])) && (o[a] = []), r(e, n, o[a], s) && j.isArray(o[a]) && (o[a] = fa(o[a])), !i);
  }
  if (j.isFormData(t) && j.isFunction(t.entries)) {
    const e = {};
    return j.forEachEntry(t, (n, o) => {
      r(ua(n), o, e, 0);
    }), e;
  }
  return null;
}
function ha(t, r, e) {
  if (j.isString(t))
    try {
      return (r || JSON.parse)(t), j.trim(t);
    } catch (n) {
      if (n.name !== "SyntaxError")
        throw n;
    }
  return (e || JSON.stringify)(t);
}
const Bt = {
  transitional: jr,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(r, e) {
    const n = e.getContentType() || "", o = n.indexOf("application/json") > -1, s = j.isObject(r);
    if (s && j.isHTMLForm(r) && (r = new FormData(r)), j.isFormData(r))
      return o ? JSON.stringify(Hr(r)) : r;
    if (j.isArrayBuffer(r) || j.isBuffer(r) || j.isStream(r) || j.isFile(r) || j.isBlob(r) || j.isReadableStream(r))
      return r;
    if (j.isArrayBufferView(r))
      return r.buffer;
    if (j.isURLSearchParams(r))
      return e.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), r.toString();
    let i;
    if (s) {
      if (n.indexOf("application/x-www-form-urlencoded") > -1)
        return da(r, this.formSerializer).toString();
      if ((i = j.isFileList(r)) || n.indexOf("multipart/form-data") > -1) {
        const d = this.env && this.env.FormData;
        return nn(
          i ? { "files[]": r } : r,
          d && new d(),
          this.formSerializer
        );
      }
    }
    return s || o ? (e.setContentType("application/json", !1), ha(r)) : r;
  }],
  transformResponse: [function(r) {
    const e = this.transitional || Bt.transitional, n = e && e.forcedJSONParsing, o = this.responseType === "json";
    if (j.isResponse(r) || j.isReadableStream(r))
      return r;
    if (r && j.isString(r) && (n && !this.responseType || o)) {
      const a = !(e && e.silentJSONParsing) && o;
      try {
        return JSON.parse(r, this.parseReviver);
      } catch (i) {
        if (a)
          throw i.name === "SyntaxError" ? Ce.from(i, Ce.ERR_BAD_RESPONSE, this, null, this.response) : i;
      }
    }
    return r;
  }],
  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: Ze.classes.FormData,
    Blob: Ze.classes.Blob
  },
  validateStatus: function(r) {
    return r >= 200 && r < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0
    }
  }
};
j.forEach(["delete", "get", "head", "post", "put", "patch"], (t) => {
  Bt.headers[t] = {};
});
const ma = j.toObjectSet([
  "age",
  "authorization",
  "content-length",
  "content-type",
  "etag",
  "expires",
  "from",
  "host",
  "if-modified-since",
  "if-unmodified-since",
  "last-modified",
  "location",
  "max-forwards",
  "proxy-authorization",
  "referer",
  "retry-after",
  "user-agent"
]), pa = (t) => {
  const r = {};
  let e, n, o;
  return t && t.split(`
`).forEach(function(a) {
    o = a.indexOf(":"), e = a.substring(0, o).trim().toLowerCase(), n = a.substring(o + 1).trim(), !(!e || r[e] && ma[e]) && (e === "set-cookie" ? r[e] ? r[e].push(n) : r[e] = [n] : r[e] = r[e] ? r[e] + ", " + n : n);
  }), r;
}, Jn = Symbol("internals");
function zt(t) {
  return t && String(t).trim().toLowerCase();
}
function qt(t) {
  return t === !1 || t == null ? t : j.isArray(t) ? t.map(qt) : String(t);
}
function ga(t) {
  const r = /* @__PURE__ */ Object.create(null), e = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let n;
  for (; n = e.exec(t); )
    r[n[1]] = n[2];
  return r;
}
const ya = (t) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());
function fn(t, r, e, n, o) {
  if (j.isFunction(n))
    return n.call(this, r, e);
  if (o && (r = e), !!j.isString(r)) {
    if (j.isString(n))
      return r.indexOf(n) !== -1;
    if (j.isRegExp(n))
      return n.test(r);
  }
}
function ba(t) {
  return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (r, e, n) => e.toUpperCase() + n);
}
function xa(t, r) {
  const e = j.toCamelCase(" " + r);
  ["get", "set", "has"].forEach((n) => {
    Object.defineProperty(t, n + e, {
      value: function(o, s, a) {
        return this[n].call(this, r, o, s, a);
      },
      configurable: !0
    });
  });
}
let et = class {
  constructor(r) {
    r && this.set(r);
  }
  set(r, e, n) {
    const o = this;
    function s(i, d, f) {
      const m = zt(d);
      if (!m)
        throw new Error("header name must be a non-empty string");
      const l = j.findKey(o, m);
      (!l || o[l] === void 0 || f === !0 || f === void 0 && o[l] !== !1) && (o[l || d] = qt(i));
    }
    const a = (i, d) => j.forEach(i, (f, m) => s(f, m, d));
    if (j.isPlainObject(r) || r instanceof this.constructor)
      a(r, e);
    else if (j.isString(r) && (r = r.trim()) && !ya(r))
      a(pa(r), e);
    else if (j.isObject(r) && j.isIterable(r)) {
      let i = {}, d, f;
      for (const m of r) {
        if (!j.isArray(m))
          throw TypeError("Object iterator must return a key-value pair");
        i[f = m[0]] = (d = i[f]) ? j.isArray(d) ? [...d, m[1]] : [d, m[1]] : m[1];
      }
      a(i, e);
    } else
      r != null && s(e, r, n);
    return this;
  }
  get(r, e) {
    if (r = zt(r), r) {
      const n = j.findKey(this, r);
      if (n) {
        const o = this[n];
        if (!e)
          return o;
        if (e === !0)
          return ga(o);
        if (j.isFunction(e))
          return e.call(this, o, n);
        if (j.isRegExp(e))
          return e.exec(o);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(r, e) {
    if (r = zt(r), r) {
      const n = j.findKey(this, r);
      return !!(n && this[n] !== void 0 && (!e || fn(this, this[n], n, e)));
    }
    return !1;
  }
  delete(r, e) {
    const n = this;
    let o = !1;
    function s(a) {
      if (a = zt(a), a) {
        const i = j.findKey(n, a);
        i && (!e || fn(n, n[i], i, e)) && (delete n[i], o = !0);
      }
    }
    return j.isArray(r) ? r.forEach(s) : s(r), o;
  }
  clear(r) {
    const e = Object.keys(this);
    let n = e.length, o = !1;
    for (; n--; ) {
      const s = e[n];
      (!r || fn(this, this[s], s, r, !0)) && (delete this[s], o = !0);
    }
    return o;
  }
  normalize(r) {
    const e = this, n = {};
    return j.forEach(this, (o, s) => {
      const a = j.findKey(n, s);
      if (a) {
        e[a] = qt(o), delete e[s];
        return;
      }
      const i = r ? ba(s) : String(s).trim();
      i !== s && delete e[s], e[i] = qt(o), n[i] = !0;
    }), this;
  }
  concat(...r) {
    return this.constructor.concat(this, ...r);
  }
  toJSON(r) {
    const e = /* @__PURE__ */ Object.create(null);
    return j.forEach(this, (n, o) => {
      n != null && n !== !1 && (e[o] = r && j.isArray(n) ? n.join(", ") : n);
    }), e;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([r, e]) => r + ": " + e).join(`
`);
  }
  getSetCookie() {
    return this.get("set-cookie") || [];
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(r) {
    return r instanceof this ? r : new this(r);
  }
  static concat(r, ...e) {
    const n = new this(r);
    return e.forEach((o) => n.set(o)), n;
  }
  static accessor(r) {
    const n = (this[Jn] = this[Jn] = {
      accessors: {}
    }).accessors, o = this.prototype;
    function s(a) {
      const i = zt(a);
      n[i] || (xa(o, a), n[i] = !0);
    }
    return j.isArray(r) ? r.forEach(s) : s(r), this;
  }
};
et.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
j.reduceDescriptors(et.prototype, ({ value: t }, r) => {
  let e = r[0].toUpperCase() + r.slice(1);
  return {
    get: () => t,
    set(n) {
      this[e] = n;
    }
  };
});
j.freezeMethods(et);
function hn(t, r) {
  const e = this || Bt, n = r || e, o = et.from(n.headers);
  let s = n.data;
  return j.forEach(t, function(i) {
    s = i.call(e, s, o.normalize(), r ? r.status : void 0);
  }), o.normalize(), s;
}
function Wr(t) {
  return !!(t && t.__CANCEL__);
}
function Ot(t, r, e) {
  Ce.call(this, t ?? "canceled", Ce.ERR_CANCELED, r, e), this.name = "CanceledError";
}
j.inherits(Ot, Ce, {
  __CANCEL__: !0
});
function $r(t, r, e) {
  const n = e.config.validateStatus;
  !e.status || !n || n(e.status) ? t(e) : r(new Ce(
    "Request failed with status code " + e.status,
    [Ce.ERR_BAD_REQUEST, Ce.ERR_BAD_RESPONSE][Math.floor(e.status / 100) - 4],
    e.config,
    e.request,
    e
  ));
}
function va(t) {
  const r = /^([-+\w]{1,25})(:?\/\/|:)/.exec(t);
  return r && r[1] || "";
}
function wa(t, r) {
  t = t || 10;
  const e = new Array(t), n = new Array(t);
  let o = 0, s = 0, a;
  return r = r !== void 0 ? r : 1e3, function(d) {
    const f = Date.now(), m = n[s];
    a || (a = f), e[o] = d, n[o] = f;
    let l = s, x = 0;
    for (; l !== o; )
      x += e[l++], l = l % t;
    if (o = (o + 1) % t, o === s && (s = (s + 1) % t), f - a < r)
      return;
    const p = m && f - m;
    return p ? Math.round(x * 1e3 / p) : void 0;
  };
}
function _a(t, r) {
  let e = 0, n = 1e3 / r, o, s;
  const a = (f, m = Date.now()) => {
    e = m, o = null, s && (clearTimeout(s), s = null), t(...f);
  };
  return [(...f) => {
    const m = Date.now(), l = m - e;
    l >= n ? a(f, m) : (o = f, s || (s = setTimeout(() => {
      s = null, a(o);
    }, n - l)));
  }, () => o && a(o)];
}
const Gt = (t, r, e = 3) => {
  let n = 0;
  const o = wa(50, 250);
  return _a((s) => {
    const a = s.loaded, i = s.lengthComputable ? s.total : void 0, d = a - n, f = o(d), m = a <= i;
    n = a;
    const l = {
      loaded: a,
      total: i,
      progress: i ? a / i : void 0,
      bytes: d,
      rate: f || void 0,
      estimated: f && i && m ? (i - a) / f : void 0,
      event: s,
      lengthComputable: i != null,
      [r ? "download" : "upload"]: !0
    };
    t(l);
  }, e);
}, Qn = (t, r) => {
  const e = t != null;
  return [(n) => r[0]({
    lengthComputable: e,
    total: t,
    loaded: n
  }), r[1]];
}, er = (t) => (...r) => j.asap(() => t(...r)), ka = Ze.hasStandardBrowserEnv ? /* @__PURE__ */ ((t, r) => (e) => (e = new URL(e, Ze.origin), t.protocol === e.protocol && t.host === e.host && (r || t.port === e.port)))(
  new URL(Ze.origin),
  Ze.navigator && /(msie|trident)/i.test(Ze.navigator.userAgent)
) : () => !0, Sa = Ze.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(t, r, e, n, o, s, a) {
      if (typeof document > "u") return;
      const i = [`${t}=${encodeURIComponent(r)}`];
      j.isNumber(e) && i.push(`expires=${new Date(e).toUTCString()}`), j.isString(n) && i.push(`path=${n}`), j.isString(o) && i.push(`domain=${o}`), s === !0 && i.push("secure"), j.isString(a) && i.push(`SameSite=${a}`), document.cookie = i.join("; ");
    },
    read(t) {
      if (typeof document > "u") return null;
      const r = document.cookie.match(new RegExp("(?:^|; )" + t + "=([^;]*)"));
      return r ? decodeURIComponent(r[1]) : null;
    },
    remove(t) {
      this.write(t, "", Date.now() - 864e5, "/");
    }
  }
) : (
  // Non-standard browser env (web workers, react-native) lack needed support.
  {
    write() {
    },
    read() {
      return null;
    },
    remove() {
    }
  }
);
function Ea(t) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(t);
}
function Ca(t, r) {
  return r ? t.replace(/\/?\/$/, "") + "/" + r.replace(/^\/+/, "") : t;
}
function Kr(t, r, e) {
  let n = !Ea(r);
  return t && (n || e == !1) ? Ca(t, r) : r;
}
const tr = (t) => t instanceof et ? { ...t } : t;
function Et(t, r) {
  r = r || {};
  const e = {};
  function n(f, m, l, x) {
    return j.isPlainObject(f) && j.isPlainObject(m) ? j.merge.call({ caseless: x }, f, m) : j.isPlainObject(m) ? j.merge({}, m) : j.isArray(m) ? m.slice() : m;
  }
  function o(f, m, l, x) {
    if (j.isUndefined(m)) {
      if (!j.isUndefined(f))
        return n(void 0, f, l, x);
    } else return n(f, m, l, x);
  }
  function s(f, m) {
    if (!j.isUndefined(m))
      return n(void 0, m);
  }
  function a(f, m) {
    if (j.isUndefined(m)) {
      if (!j.isUndefined(f))
        return n(void 0, f);
    } else return n(void 0, m);
  }
  function i(f, m, l) {
    if (l in r)
      return n(f, m);
    if (l in t)
      return n(void 0, f);
  }
  const d = {
    url: s,
    method: s,
    data: s,
    baseURL: a,
    transformRequest: a,
    transformResponse: a,
    paramsSerializer: a,
    timeout: a,
    timeoutMessage: a,
    withCredentials: a,
    withXSRFToken: a,
    adapter: a,
    responseType: a,
    xsrfCookieName: a,
    xsrfHeaderName: a,
    onUploadProgress: a,
    onDownloadProgress: a,
    decompress: a,
    maxContentLength: a,
    maxBodyLength: a,
    beforeRedirect: a,
    transport: a,
    httpAgent: a,
    httpsAgent: a,
    cancelToken: a,
    socketPath: a,
    responseEncoding: a,
    validateStatus: i,
    headers: (f, m, l) => o(tr(f), tr(m), l, !0)
  };
  return j.forEach(Object.keys({ ...t, ...r }), function(m) {
    const l = d[m] || o, x = l(t[m], r[m], m);
    j.isUndefined(x) && l !== i || (e[m] = x);
  }), e;
}
const Zr = (t) => {
  const r = Et({}, t);
  let { data: e, withXSRFToken: n, xsrfHeaderName: o, xsrfCookieName: s, headers: a, auth: i } = r;
  if (r.headers = a = et.from(a), r.url = Ur(Kr(r.baseURL, r.url, r.allowAbsoluteUrls), t.params, t.paramsSerializer), i && a.set(
    "Authorization",
    "Basic " + btoa((i.username || "") + ":" + (i.password ? unescape(encodeURIComponent(i.password)) : ""))
  ), j.isFormData(e)) {
    if (Ze.hasStandardBrowserEnv || Ze.hasStandardBrowserWebWorkerEnv)
      a.setContentType(void 0);
    else if (j.isFunction(e.getHeaders)) {
      const d = e.getHeaders(), f = ["content-type", "content-length"];
      Object.entries(d).forEach(([m, l]) => {
        f.includes(m.toLowerCase()) && a.set(m, l);
      });
    }
  }
  if (Ze.hasStandardBrowserEnv && (n && j.isFunction(n) && (n = n(r)), n || n !== !1 && ka(r.url))) {
    const d = o && s && Sa.read(s);
    d && a.set(o, d);
  }
  return r;
}, Na = typeof XMLHttpRequest < "u", Aa = Na && function(t) {
  return new Promise(function(e, n) {
    const o = Zr(t);
    let s = o.data;
    const a = et.from(o.headers).normalize();
    let { responseType: i, onUploadProgress: d, onDownloadProgress: f } = o, m, l, x, p, h;
    function c() {
      p && p(), h && h(), o.cancelToken && o.cancelToken.unsubscribe(m), o.signal && o.signal.removeEventListener("abort", m);
    }
    let g = new XMLHttpRequest();
    g.open(o.method.toUpperCase(), o.url, !0), g.timeout = o.timeout;
    function b() {
      if (!g)
        return;
      const k = et.from(
        "getAllResponseHeaders" in g && g.getAllResponseHeaders()
      ), A = {
        data: !i || i === "text" || i === "json" ? g.responseText : g.response,
        status: g.status,
        statusText: g.statusText,
        headers: k,
        config: t,
        request: g
      };
      $r(function(z) {
        e(z), c();
      }, function(z) {
        n(z), c();
      }, A), g = null;
    }
    "onloadend" in g ? g.onloadend = b : g.onreadystatechange = function() {
      !g || g.readyState !== 4 || g.status === 0 && !(g.responseURL && g.responseURL.indexOf("file:") === 0) || setTimeout(b);
    }, g.onabort = function() {
      g && (n(new Ce("Request aborted", Ce.ECONNABORTED, t, g)), g = null);
    }, g.onerror = function(C) {
      const A = C && C.message ? C.message : "Network Error", P = new Ce(A, Ce.ERR_NETWORK, t, g);
      P.event = C || null, n(P), g = null;
    }, g.ontimeout = function() {
      let C = o.timeout ? "timeout of " + o.timeout + "ms exceeded" : "timeout exceeded";
      const A = o.transitional || jr;
      o.timeoutErrorMessage && (C = o.timeoutErrorMessage), n(new Ce(
        C,
        A.clarifyTimeoutError ? Ce.ETIMEDOUT : Ce.ECONNABORTED,
        t,
        g
      )), g = null;
    }, s === void 0 && a.setContentType(null), "setRequestHeader" in g && j.forEach(a.toJSON(), function(C, A) {
      g.setRequestHeader(A, C);
    }), j.isUndefined(o.withCredentials) || (g.withCredentials = !!o.withCredentials), i && i !== "json" && (g.responseType = o.responseType), f && ([x, h] = Gt(f, !0), g.addEventListener("progress", x)), d && g.upload && ([l, p] = Gt(d), g.upload.addEventListener("progress", l), g.upload.addEventListener("loadend", p)), (o.cancelToken || o.signal) && (m = (k) => {
      g && (n(!k || k.type ? new Ot(null, t, g) : k), g.abort(), g = null);
    }, o.cancelToken && o.cancelToken.subscribe(m), o.signal && (o.signal.aborted ? m() : o.signal.addEventListener("abort", m)));
    const _ = va(o.url);
    if (_ && Ze.protocols.indexOf(_) === -1) {
      n(new Ce("Unsupported protocol " + _ + ":", Ce.ERR_BAD_REQUEST, t));
      return;
    }
    g.send(s || null);
  });
}, Ta = (t, r) => {
  const { length: e } = t = t ? t.filter(Boolean) : [];
  if (r || e) {
    let n = new AbortController(), o;
    const s = function(f) {
      if (!o) {
        o = !0, i();
        const m = f instanceof Error ? f : this.reason;
        n.abort(m instanceof Ce ? m : new Ot(m instanceof Error ? m.message : m));
      }
    };
    let a = r && setTimeout(() => {
      a = null, s(new Ce(`timeout ${r} of ms exceeded`, Ce.ETIMEDOUT));
    }, r);
    const i = () => {
      t && (a && clearTimeout(a), a = null, t.forEach((f) => {
        f.unsubscribe ? f.unsubscribe(s) : f.removeEventListener("abort", s);
      }), t = null);
    };
    t.forEach((f) => f.addEventListener("abort", s));
    const { signal: d } = n;
    return d.unsubscribe = () => j.asap(i), d;
  }
}, Ia = function* (t, r) {
  let e = t.byteLength;
  if (e < r) {
    yield t;
    return;
  }
  let n = 0, o;
  for (; n < e; )
    o = n + r, yield t.slice(n, o), n = o;
}, Oa = async function* (t, r) {
  for await (const e of Ra(t))
    yield* Ia(e, r);
}, Ra = async function* (t) {
  if (t[Symbol.asyncIterator]) {
    yield* t;
    return;
  }
  const r = t.getReader();
  try {
    for (; ; ) {
      const { done: e, value: n } = await r.read();
      if (e)
        break;
      yield n;
    }
  } finally {
    await r.cancel();
  }
}, nr = (t, r, e, n) => {
  const o = Oa(t, r);
  let s = 0, a, i = (d) => {
    a || (a = !0, n && n(d));
  };
  return new ReadableStream({
    async pull(d) {
      try {
        const { done: f, value: m } = await o.next();
        if (f) {
          i(), d.close();
          return;
        }
        let l = m.byteLength;
        if (e) {
          let x = s += l;
          e(x);
        }
        d.enqueue(new Uint8Array(m));
      } catch (f) {
        throw i(f), f;
      }
    },
    cancel(d) {
      return i(d), o.return();
    }
  }, {
    highWaterMark: 2
  });
}, rr = 64 * 1024, { isFunction: Ht } = j, za = (({ Request: t, Response: r }) => ({
  Request: t,
  Response: r
}))(j.global), {
  ReadableStream: or,
  TextEncoder: sr
} = j.global, ar = (t, ...r) => {
  try {
    return !!t(...r);
  } catch {
    return !1;
  }
}, Pa = (t) => {
  t = j.merge.call({
    skipUndefined: !0
  }, za, t);
  const { fetch: r, Request: e, Response: n } = t, o = r ? Ht(r) : typeof fetch == "function", s = Ht(e), a = Ht(n);
  if (!o)
    return !1;
  const i = o && Ht(or), d = o && (typeof sr == "function" ? /* @__PURE__ */ ((h) => (c) => h.encode(c))(new sr()) : async (h) => new Uint8Array(await new e(h).arrayBuffer())), f = s && i && ar(() => {
    let h = !1;
    const c = new e(Ze.origin, {
      body: new or(),
      method: "POST",
      get duplex() {
        return h = !0, "half";
      }
    }).headers.has("Content-Type");
    return h && !c;
  }), m = a && i && ar(() => j.isReadableStream(new n("").body)), l = {
    stream: m && ((h) => h.body)
  };
  o && ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((h) => {
    !l[h] && (l[h] = (c, g) => {
      let b = c && c[h];
      if (b)
        return b.call(c);
      throw new Ce(`Response type '${h}' is not supported`, Ce.ERR_NOT_SUPPORT, g);
    });
  });
  const x = async (h) => {
    if (h == null)
      return 0;
    if (j.isBlob(h))
      return h.size;
    if (j.isSpecCompliantForm(h))
      return (await new e(Ze.origin, {
        method: "POST",
        body: h
      }).arrayBuffer()).byteLength;
    if (j.isArrayBufferView(h) || j.isArrayBuffer(h))
      return h.byteLength;
    if (j.isURLSearchParams(h) && (h = h + ""), j.isString(h))
      return (await d(h)).byteLength;
  }, p = async (h, c) => {
    const g = j.toFiniteNumber(h.getContentLength());
    return g ?? x(c);
  };
  return async (h) => {
    let {
      url: c,
      method: g,
      data: b,
      signal: _,
      cancelToken: k,
      timeout: C,
      onDownloadProgress: A,
      onUploadProgress: P,
      responseType: z,
      headers: Z,
      withCredentials: M = "same-origin",
      fetchOptions: G
    } = Zr(h), le = r || fetch;
    z = z ? (z + "").toLowerCase() : "text";
    let N = Ta([_, k && k.toAbortSignal()], C), L = null;
    const y = N && N.unsubscribe && (() => {
      N.unsubscribe();
    });
    let W;
    try {
      if (P && f && g !== "get" && g !== "head" && (W = await p(Z, b)) !== 0) {
        let I = new e(c, {
          method: "POST",
          body: b,
          duplex: "half"
        }), O;
        if (j.isFormData(b) && (O = I.headers.get("content-type")) && Z.setContentType(O), I.body) {
          const [T, J] = Qn(
            W,
            Gt(er(P))
          );
          b = nr(I.body, rr, T, J);
        }
      }
      j.isString(M) || (M = M ? "include" : "omit");
      const re = s && "credentials" in e.prototype, F = {
        ...G,
        signal: N,
        method: g.toUpperCase(),
        headers: Z.normalize().toJSON(),
        body: b,
        duplex: "half",
        credentials: re ? M : void 0
      };
      L = s && new e(c, F);
      let me = await (s ? le(L, G) : le(c, F));
      const U = m && (z === "stream" || z === "response");
      if (m && (A || U && y)) {
        const I = {};
        ["status", "statusText", "headers"].forEach(($) => {
          I[$] = me[$];
        });
        const O = j.toFiniteNumber(me.headers.get("content-length")), [T, J] = A && Qn(
          O,
          Gt(er(A), !0)
        ) || [];
        me = new n(
          nr(me.body, rr, T, () => {
            J && J(), y && y();
          }),
          I
        );
      }
      z = z || "text";
      let te = await l[j.findKey(l, z) || "text"](me, h);
      return !U && y && y(), await new Promise((I, O) => {
        $r(I, O, {
          data: te,
          headers: et.from(me.headers),
          status: me.status,
          statusText: me.statusText,
          config: h,
          request: L
        });
      });
    } catch (re) {
      throw y && y(), re && re.name === "TypeError" && /Load failed|fetch/i.test(re.message) ? Object.assign(
        new Ce("Network Error", Ce.ERR_NETWORK, h, L),
        {
          cause: re.cause || re
        }
      ) : Ce.from(re, re && re.code, h, L);
    }
  };
}, Da = /* @__PURE__ */ new Map(), qr = (t) => {
  let r = t && t.env || {};
  const { fetch: e, Request: n, Response: o } = r, s = [
    n,
    o,
    e
  ];
  let a = s.length, i = a, d, f, m = Da;
  for (; i--; )
    d = s[i], f = m.get(d), f === void 0 && m.set(d, f = i ? /* @__PURE__ */ new Map() : Pa(r)), m = f;
  return f;
};
qr();
const Tn = {
  http: Js,
  xhr: Aa,
  fetch: {
    get: qr
  }
};
j.forEach(Tn, (t, r) => {
  if (t) {
    try {
      Object.defineProperty(t, "name", { value: r });
    } catch {
    }
    Object.defineProperty(t, "adapterName", { value: r });
  }
});
const ir = (t) => `- ${t}`, Ma = (t) => j.isFunction(t) || t === null || t === !1;
function La(t, r) {
  t = j.isArray(t) ? t : [t];
  const { length: e } = t;
  let n, o;
  const s = {};
  for (let a = 0; a < e; a++) {
    n = t[a];
    let i;
    if (o = n, !Ma(n) && (o = Tn[(i = String(n)).toLowerCase()], o === void 0))
      throw new Ce(`Unknown adapter '${i}'`);
    if (o && (j.isFunction(o) || (o = o.get(r))))
      break;
    s[i || "#" + a] = o;
  }
  if (!o) {
    const a = Object.entries(s).map(
      ([d, f]) => `adapter ${d} ` + (f === !1 ? "is not supported by the environment" : "is not available in the build")
    );
    let i = e ? a.length > 1 ? `since :
` + a.map(ir).join(`
`) : " " + ir(a[0]) : "as no adapter specified";
    throw new Ce(
      "There is no suitable adapter to dispatch the request " + i,
      "ERR_NOT_SUPPORT"
    );
  }
  return o;
}
const Vr = {
  /**
   * Resolve an adapter from a list of adapter names or functions.
   * @type {Function}
   */
  getAdapter: La,
  /**
   * Exposes all known adapters
   * @type {Object<string, Function|Object>}
   */
  adapters: Tn
};
function mn(t) {
  if (t.cancelToken && t.cancelToken.throwIfRequested(), t.signal && t.signal.aborted)
    throw new Ot(null, t);
}
function lr(t) {
  return mn(t), t.headers = et.from(t.headers), t.data = hn.call(
    t,
    t.transformRequest
  ), ["post", "put", "patch"].indexOf(t.method) !== -1 && t.headers.setContentType("application/x-www-form-urlencoded", !1), Vr.getAdapter(t.adapter || Bt.adapter, t)(t).then(function(n) {
    return mn(t), n.data = hn.call(
      t,
      t.transformResponse,
      n
    ), n.headers = et.from(n.headers), n;
  }, function(n) {
    return Wr(n) || (mn(t), n && n.response && (n.response.data = hn.call(
      t,
      t.transformResponse,
      n.response
    ), n.response.headers = et.from(n.response.headers))), Promise.reject(n);
  });
}
const Yr = "1.13.2", rn = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((t, r) => {
  rn[t] = function(n) {
    return typeof n === t || "a" + (r < 1 ? "n " : " ") + t;
  };
});
const cr = {};
rn.transitional = function(r, e, n) {
  function o(s, a) {
    return "[Axios v" + Yr + "] Transitional option '" + s + "'" + a + (n ? ". " + n : "");
  }
  return (s, a, i) => {
    if (r === !1)
      throw new Ce(
        o(a, " has been removed" + (e ? " in " + e : "")),
        Ce.ERR_DEPRECATED
      );
    return e && !cr[a] && (cr[a] = !0, console.warn(
      o(
        a,
        " has been deprecated since v" + e + " and will be removed in the near future"
      )
    )), r ? r(s, a, i) : !0;
  };
};
rn.spelling = function(r) {
  return (e, n) => (console.warn(`${n} is likely a misspelling of ${r}`), !0);
};
function Ba(t, r, e) {
  if (typeof t != "object")
    throw new Ce("options must be an object", Ce.ERR_BAD_OPTION_VALUE);
  const n = Object.keys(t);
  let o = n.length;
  for (; o-- > 0; ) {
    const s = n[o], a = r[s];
    if (a) {
      const i = t[s], d = i === void 0 || a(i, s, t);
      if (d !== !0)
        throw new Ce("option " + s + " must be " + d, Ce.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (e !== !0)
      throw new Ce("Unknown option " + s, Ce.ERR_BAD_OPTION);
  }
}
const Vt = {
  assertOptions: Ba,
  validators: rn
}, dt = Vt.validators;
let St = class {
  constructor(r) {
    this.defaults = r || {}, this.interceptors = {
      request: new Gn(),
      response: new Gn()
    };
  }
  /**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */
  async request(r, e) {
    try {
      return await this._request(r, e);
    } catch (n) {
      if (n instanceof Error) {
        let o = {};
        Error.captureStackTrace ? Error.captureStackTrace(o) : o = new Error();
        const s = o.stack ? o.stack.replace(/^.+\n/, "") : "";
        try {
          n.stack ? s && !String(n.stack).endsWith(s.replace(/^.+\n.+\n/, "")) && (n.stack += `
` + s) : n.stack = s;
        } catch {
        }
      }
      throw n;
    }
  }
  _request(r, e) {
    typeof r == "string" ? (e = e || {}, e.url = r) : e = r || {}, e = Et(this.defaults, e);
    const { transitional: n, paramsSerializer: o, headers: s } = e;
    n !== void 0 && Vt.assertOptions(n, {
      silentJSONParsing: dt.transitional(dt.boolean),
      forcedJSONParsing: dt.transitional(dt.boolean),
      clarifyTimeoutError: dt.transitional(dt.boolean)
    }, !1), o != null && (j.isFunction(o) ? e.paramsSerializer = {
      serialize: o
    } : Vt.assertOptions(o, {
      encode: dt.function,
      serialize: dt.function
    }, !0)), e.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? e.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : e.allowAbsoluteUrls = !0), Vt.assertOptions(e, {
      baseUrl: dt.spelling("baseURL"),
      withXsrfToken: dt.spelling("withXSRFToken")
    }, !0), e.method = (e.method || this.defaults.method || "get").toLowerCase();
    let a = s && j.merge(
      s.common,
      s[e.method]
    );
    s && j.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (h) => {
        delete s[h];
      }
    ), e.headers = et.concat(a, s);
    const i = [];
    let d = !0;
    this.interceptors.request.forEach(function(c) {
      typeof c.runWhen == "function" && c.runWhen(e) === !1 || (d = d && c.synchronous, i.unshift(c.fulfilled, c.rejected));
    });
    const f = [];
    this.interceptors.response.forEach(function(c) {
      f.push(c.fulfilled, c.rejected);
    });
    let m, l = 0, x;
    if (!d) {
      const h = [lr.bind(this), void 0];
      for (h.unshift(...i), h.push(...f), x = h.length, m = Promise.resolve(e); l < x; )
        m = m.then(h[l++], h[l++]);
      return m;
    }
    x = i.length;
    let p = e;
    for (; l < x; ) {
      const h = i[l++], c = i[l++];
      try {
        p = h(p);
      } catch (g) {
        c.call(this, g);
        break;
      }
    }
    try {
      m = lr.call(this, p);
    } catch (h) {
      return Promise.reject(h);
    }
    for (l = 0, x = f.length; l < x; )
      m = m.then(f[l++], f[l++]);
    return m;
  }
  getUri(r) {
    r = Et(this.defaults, r);
    const e = Kr(r.baseURL, r.url, r.allowAbsoluteUrls);
    return Ur(e, r.params, r.paramsSerializer);
  }
};
j.forEach(["delete", "get", "head", "options"], function(r) {
  St.prototype[r] = function(e, n) {
    return this.request(Et(n || {}, {
      method: r,
      url: e,
      data: (n || {}).data
    }));
  };
});
j.forEach(["post", "put", "patch"], function(r) {
  function e(n) {
    return function(s, a, i) {
      return this.request(Et(i || {}, {
        method: r,
        headers: n ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: s,
        data: a
      }));
    };
  }
  St.prototype[r] = e(), St.prototype[r + "Form"] = e(!0);
});
let Fa = class Xr {
  constructor(r) {
    if (typeof r != "function")
      throw new TypeError("executor must be a function.");
    let e;
    this.promise = new Promise(function(s) {
      e = s;
    });
    const n = this;
    this.promise.then((o) => {
      if (!n._listeners) return;
      let s = n._listeners.length;
      for (; s-- > 0; )
        n._listeners[s](o);
      n._listeners = null;
    }), this.promise.then = (o) => {
      let s;
      const a = new Promise((i) => {
        n.subscribe(i), s = i;
      }).then(o);
      return a.cancel = function() {
        n.unsubscribe(s);
      }, a;
    }, r(function(s, a, i) {
      n.reason || (n.reason = new Ot(s, a, i), e(n.reason));
    });
  }
  /**
   * Throws a `CanceledError` if cancellation has been requested.
   */
  throwIfRequested() {
    if (this.reason)
      throw this.reason;
  }
  /**
   * Subscribe to the cancel signal
   */
  subscribe(r) {
    if (this.reason) {
      r(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(r) : this._listeners = [r];
  }
  /**
   * Unsubscribe from the cancel signal
   */
  unsubscribe(r) {
    if (!this._listeners)
      return;
    const e = this._listeners.indexOf(r);
    e !== -1 && this._listeners.splice(e, 1);
  }
  toAbortSignal() {
    const r = new AbortController(), e = (n) => {
      r.abort(n);
    };
    return this.subscribe(e), r.signal.unsubscribe = () => this.unsubscribe(e), r.signal;
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let r;
    return {
      token: new Xr(function(o) {
        r = o;
      }),
      cancel: r
    };
  }
};
function Ua(t) {
  return function(e) {
    return t.apply(null, e);
  };
}
function ja(t) {
  return j.isObject(t) && t.isAxiosError === !0;
}
const _n = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511,
  WebServerIsDown: 521,
  ConnectionTimedOut: 522,
  OriginIsUnreachable: 523,
  TimeoutOccurred: 524,
  SslHandshakeFailed: 525,
  InvalidSslCertificate: 526
};
Object.entries(_n).forEach(([t, r]) => {
  _n[r] = t;
});
function Gr(t) {
  const r = new St(t), e = Ar(St.prototype.request, r);
  return j.extend(e, St.prototype, r, { allOwnKeys: !0 }), j.extend(e, r, null, { allOwnKeys: !0 }), e.create = function(o) {
    return Gr(Et(t, o));
  }, e;
}
const Le = Gr(Bt);
Le.Axios = St;
Le.CanceledError = Ot;
Le.CancelToken = Fa;
Le.isCancel = Wr;
Le.VERSION = Yr;
Le.toFormData = nn;
Le.AxiosError = Ce;
Le.Cancel = Le.CanceledError;
Le.all = function(r) {
  return Promise.all(r);
};
Le.spread = Ua;
Le.isAxiosError = ja;
Le.mergeConfig = Et;
Le.AxiosHeaders = et;
Le.formToJSON = (t) => Hr(j.isHTMLForm(t) ? new FormData(t) : t);
Le.getAdapter = Vr.getAdapter;
Le.HttpStatusCode = _n;
Le.default = Le;
const {
  Axios: ol,
  AxiosError: sl,
  CanceledError: al,
  isCancel: il,
  CancelToken: ll,
  VERSION: cl,
  all: dl,
  Cancel: ul,
  isAxiosError: fl,
  spread: hl,
  toFormData: ml,
  AxiosHeaders: pl,
  HttpStatusCode: gl,
  formToJSON: yl,
  getAdapter: bl,
  mergeConfig: xl
} = Le;
function Wt(t) {
  throw new Error('Could not dynamically require "' + t + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var Jr = { exports: {} };
/*!

JSZip v3.10.1 - A JavaScript class for generating and reading zip files
<http://stuartk.com/jszip>

(c) 2009-2016 Stuart Knightley <stuart [at] stuartk.com>
Dual licenced under the MIT license or GPLv3. See https://raw.github.com/Stuk/jszip/main/LICENSE.markdown.

JSZip uses the library pako released under the MIT license :
https://github.com/nodeca/pako/blob/main/LICENSE
*/
(function(t, r) {
  (function(e) {
    t.exports = e();
  })(function() {
    return function e(n, o, s) {
      function a(f, m) {
        if (!o[f]) {
          if (!n[f]) {
            var l = typeof Wt == "function" && Wt;
            if (!m && l) return l(f, !0);
            if (i) return i(f, !0);
            var x = new Error("Cannot find module '" + f + "'");
            throw x.code = "MODULE_NOT_FOUND", x;
          }
          var p = o[f] = { exports: {} };
          n[f][0].call(p.exports, function(h) {
            var c = n[f][1][h];
            return a(c || h);
          }, p, p.exports, e, n, o, s);
        }
        return o[f].exports;
      }
      for (var i = typeof Wt == "function" && Wt, d = 0; d < s.length; d++) a(s[d]);
      return a;
    }({ 1: [function(e, n, o) {
      var s = e("./utils"), a = e("./support"), i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
      o.encode = function(d) {
        for (var f, m, l, x, p, h, c, g = [], b = 0, _ = d.length, k = _, C = s.getTypeOf(d) !== "string"; b < d.length; ) k = _ - b, l = C ? (f = d[b++], m = b < _ ? d[b++] : 0, b < _ ? d[b++] : 0) : (f = d.charCodeAt(b++), m = b < _ ? d.charCodeAt(b++) : 0, b < _ ? d.charCodeAt(b++) : 0), x = f >> 2, p = (3 & f) << 4 | m >> 4, h = 1 < k ? (15 & m) << 2 | l >> 6 : 64, c = 2 < k ? 63 & l : 64, g.push(i.charAt(x) + i.charAt(p) + i.charAt(h) + i.charAt(c));
        return g.join("");
      }, o.decode = function(d) {
        var f, m, l, x, p, h, c = 0, g = 0, b = "data:";
        if (d.substr(0, b.length) === b) throw new Error("Invalid base64 input, it looks like a data url.");
        var _, k = 3 * (d = d.replace(/[^A-Za-z0-9+/=]/g, "")).length / 4;
        if (d.charAt(d.length - 1) === i.charAt(64) && k--, d.charAt(d.length - 2) === i.charAt(64) && k--, k % 1 != 0) throw new Error("Invalid base64 input, bad content length.");
        for (_ = a.uint8array ? new Uint8Array(0 | k) : new Array(0 | k); c < d.length; ) f = i.indexOf(d.charAt(c++)) << 2 | (x = i.indexOf(d.charAt(c++))) >> 4, m = (15 & x) << 4 | (p = i.indexOf(d.charAt(c++))) >> 2, l = (3 & p) << 6 | (h = i.indexOf(d.charAt(c++))), _[g++] = f, p !== 64 && (_[g++] = m), h !== 64 && (_[g++] = l);
        return _;
      };
    }, { "./support": 30, "./utils": 32 }], 2: [function(e, n, o) {
      var s = e("./external"), a = e("./stream/DataWorker"), i = e("./stream/Crc32Probe"), d = e("./stream/DataLengthProbe");
      function f(m, l, x, p, h) {
        this.compressedSize = m, this.uncompressedSize = l, this.crc32 = x, this.compression = p, this.compressedContent = h;
      }
      f.prototype = { getContentWorker: function() {
        var m = new a(s.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker()).pipe(new d("data_length")), l = this;
        return m.on("end", function() {
          if (this.streamInfo.data_length !== l.uncompressedSize) throw new Error("Bug : uncompressed data size mismatch");
        }), m;
      }, getCompressedWorker: function() {
        return new a(s.Promise.resolve(this.compressedContent)).withStreamInfo("compressedSize", this.compressedSize).withStreamInfo("uncompressedSize", this.uncompressedSize).withStreamInfo("crc32", this.crc32).withStreamInfo("compression", this.compression);
      } }, f.createWorkerFrom = function(m, l, x) {
        return m.pipe(new i()).pipe(new d("uncompressedSize")).pipe(l.compressWorker(x)).pipe(new d("compressedSize")).withStreamInfo("compression", l);
      }, n.exports = f;
    }, { "./external": 6, "./stream/Crc32Probe": 25, "./stream/DataLengthProbe": 26, "./stream/DataWorker": 27 }], 3: [function(e, n, o) {
      var s = e("./stream/GenericWorker");
      o.STORE = { magic: "\0\0", compressWorker: function() {
        return new s("STORE compression");
      }, uncompressWorker: function() {
        return new s("STORE decompression");
      } }, o.DEFLATE = e("./flate");
    }, { "./flate": 7, "./stream/GenericWorker": 28 }], 4: [function(e, n, o) {
      var s = e("./utils"), a = function() {
        for (var i, d = [], f = 0; f < 256; f++) {
          i = f;
          for (var m = 0; m < 8; m++) i = 1 & i ? 3988292384 ^ i >>> 1 : i >>> 1;
          d[f] = i;
        }
        return d;
      }();
      n.exports = function(i, d) {
        return i !== void 0 && i.length ? s.getTypeOf(i) !== "string" ? function(f, m, l, x) {
          var p = a, h = x + l;
          f ^= -1;
          for (var c = x; c < h; c++) f = f >>> 8 ^ p[255 & (f ^ m[c])];
          return -1 ^ f;
        }(0 | d, i, i.length, 0) : function(f, m, l, x) {
          var p = a, h = x + l;
          f ^= -1;
          for (var c = x; c < h; c++) f = f >>> 8 ^ p[255 & (f ^ m.charCodeAt(c))];
          return -1 ^ f;
        }(0 | d, i, i.length, 0) : 0;
      };
    }, { "./utils": 32 }], 5: [function(e, n, o) {
      o.base64 = !1, o.binary = !1, o.dir = !1, o.createFolders = !0, o.date = null, o.compression = null, o.compressionOptions = null, o.comment = null, o.unixPermissions = null, o.dosPermissions = null;
    }, {}], 6: [function(e, n, o) {
      var s = null;
      s = typeof Promise < "u" ? Promise : e("lie"), n.exports = { Promise: s };
    }, { lie: 37 }], 7: [function(e, n, o) {
      var s = typeof Uint8Array < "u" && typeof Uint16Array < "u" && typeof Uint32Array < "u", a = e("pako"), i = e("./utils"), d = e("./stream/GenericWorker"), f = s ? "uint8array" : "array";
      function m(l, x) {
        d.call(this, "FlateWorker/" + l), this._pako = null, this._pakoAction = l, this._pakoOptions = x, this.meta = {};
      }
      o.magic = "\b\0", i.inherits(m, d), m.prototype.processChunk = function(l) {
        this.meta = l.meta, this._pako === null && this._createPako(), this._pako.push(i.transformTo(f, l.data), !1);
      }, m.prototype.flush = function() {
        d.prototype.flush.call(this), this._pako === null && this._createPako(), this._pako.push([], !0);
      }, m.prototype.cleanUp = function() {
        d.prototype.cleanUp.call(this), this._pako = null;
      }, m.prototype._createPako = function() {
        this._pako = new a[this._pakoAction]({ raw: !0, level: this._pakoOptions.level || -1 });
        var l = this;
        this._pako.onData = function(x) {
          l.push({ data: x, meta: l.meta });
        };
      }, o.compressWorker = function(l) {
        return new m("Deflate", l);
      }, o.uncompressWorker = function() {
        return new m("Inflate", {});
      };
    }, { "./stream/GenericWorker": 28, "./utils": 32, pako: 38 }], 8: [function(e, n, o) {
      function s(p, h) {
        var c, g = "";
        for (c = 0; c < h; c++) g += String.fromCharCode(255 & p), p >>>= 8;
        return g;
      }
      function a(p, h, c, g, b, _) {
        var k, C, A = p.file, P = p.compression, z = _ !== f.utf8encode, Z = i.transformTo("string", _(A.name)), M = i.transformTo("string", f.utf8encode(A.name)), G = A.comment, le = i.transformTo("string", _(G)), N = i.transformTo("string", f.utf8encode(G)), L = M.length !== A.name.length, y = N.length !== G.length, W = "", re = "", F = "", me = A.dir, U = A.date, te = { crc32: 0, compressedSize: 0, uncompressedSize: 0 };
        h && !c || (te.crc32 = p.crc32, te.compressedSize = p.compressedSize, te.uncompressedSize = p.uncompressedSize);
        var I = 0;
        h && (I |= 8), z || !L && !y || (I |= 2048);
        var O = 0, T = 0;
        me && (O |= 16), b === "UNIX" ? (T = 798, O |= function($, Ee) {
          var Q = $;
          return $ || (Q = Ee ? 16893 : 33204), (65535 & Q) << 16;
        }(A.unixPermissions, me)) : (T = 20, O |= function($) {
          return 63 & ($ || 0);
        }(A.dosPermissions)), k = U.getUTCHours(), k <<= 6, k |= U.getUTCMinutes(), k <<= 5, k |= U.getUTCSeconds() / 2, C = U.getUTCFullYear() - 1980, C <<= 4, C |= U.getUTCMonth() + 1, C <<= 5, C |= U.getUTCDate(), L && (re = s(1, 1) + s(m(Z), 4) + M, W += "up" + s(re.length, 2) + re), y && (F = s(1, 1) + s(m(le), 4) + N, W += "uc" + s(F.length, 2) + F);
        var J = "";
        return J += `
\0`, J += s(I, 2), J += P.magic, J += s(k, 2), J += s(C, 2), J += s(te.crc32, 4), J += s(te.compressedSize, 4), J += s(te.uncompressedSize, 4), J += s(Z.length, 2), J += s(W.length, 2), { fileRecord: l.LOCAL_FILE_HEADER + J + Z + W, dirRecord: l.CENTRAL_FILE_HEADER + s(T, 2) + J + s(le.length, 2) + "\0\0\0\0" + s(O, 4) + s(g, 4) + Z + W + le };
      }
      var i = e("../utils"), d = e("../stream/GenericWorker"), f = e("../utf8"), m = e("../crc32"), l = e("../signature");
      function x(p, h, c, g) {
        d.call(this, "ZipFileWorker"), this.bytesWritten = 0, this.zipComment = h, this.zipPlatform = c, this.encodeFileName = g, this.streamFiles = p, this.accumulate = !1, this.contentBuffer = [], this.dirRecords = [], this.currentSourceOffset = 0, this.entriesCount = 0, this.currentFile = null, this._sources = [];
      }
      i.inherits(x, d), x.prototype.push = function(p) {
        var h = p.meta.percent || 0, c = this.entriesCount, g = this._sources.length;
        this.accumulate ? this.contentBuffer.push(p) : (this.bytesWritten += p.data.length, d.prototype.push.call(this, { data: p.data, meta: { currentFile: this.currentFile, percent: c ? (h + 100 * (c - g - 1)) / c : 100 } }));
      }, x.prototype.openedSource = function(p) {
        this.currentSourceOffset = this.bytesWritten, this.currentFile = p.file.name;
        var h = this.streamFiles && !p.file.dir;
        if (h) {
          var c = a(p, h, !1, this.currentSourceOffset, this.zipPlatform, this.encodeFileName);
          this.push({ data: c.fileRecord, meta: { percent: 0 } });
        } else this.accumulate = !0;
      }, x.prototype.closedSource = function(p) {
        this.accumulate = !1;
        var h = this.streamFiles && !p.file.dir, c = a(p, h, !0, this.currentSourceOffset, this.zipPlatform, this.encodeFileName);
        if (this.dirRecords.push(c.dirRecord), h) this.push({ data: function(g) {
          return l.DATA_DESCRIPTOR + s(g.crc32, 4) + s(g.compressedSize, 4) + s(g.uncompressedSize, 4);
        }(p), meta: { percent: 100 } });
        else for (this.push({ data: c.fileRecord, meta: { percent: 0 } }); this.contentBuffer.length; ) this.push(this.contentBuffer.shift());
        this.currentFile = null;
      }, x.prototype.flush = function() {
        for (var p = this.bytesWritten, h = 0; h < this.dirRecords.length; h++) this.push({ data: this.dirRecords[h], meta: { percent: 100 } });
        var c = this.bytesWritten - p, g = function(b, _, k, C, A) {
          var P = i.transformTo("string", A(C));
          return l.CENTRAL_DIRECTORY_END + "\0\0\0\0" + s(b, 2) + s(b, 2) + s(_, 4) + s(k, 4) + s(P.length, 2) + P;
        }(this.dirRecords.length, c, p, this.zipComment, this.encodeFileName);
        this.push({ data: g, meta: { percent: 100 } });
      }, x.prototype.prepareNextSource = function() {
        this.previous = this._sources.shift(), this.openedSource(this.previous.streamInfo), this.isPaused ? this.previous.pause() : this.previous.resume();
      }, x.prototype.registerPrevious = function(p) {
        this._sources.push(p);
        var h = this;
        return p.on("data", function(c) {
          h.processChunk(c);
        }), p.on("end", function() {
          h.closedSource(h.previous.streamInfo), h._sources.length ? h.prepareNextSource() : h.end();
        }), p.on("error", function(c) {
          h.error(c);
        }), this;
      }, x.prototype.resume = function() {
        return !!d.prototype.resume.call(this) && (!this.previous && this._sources.length ? (this.prepareNextSource(), !0) : this.previous || this._sources.length || this.generatedError ? void 0 : (this.end(), !0));
      }, x.prototype.error = function(p) {
        var h = this._sources;
        if (!d.prototype.error.call(this, p)) return !1;
        for (var c = 0; c < h.length; c++) try {
          h[c].error(p);
        } catch {
        }
        return !0;
      }, x.prototype.lock = function() {
        d.prototype.lock.call(this);
        for (var p = this._sources, h = 0; h < p.length; h++) p[h].lock();
      }, n.exports = x;
    }, { "../crc32": 4, "../signature": 23, "../stream/GenericWorker": 28, "../utf8": 31, "../utils": 32 }], 9: [function(e, n, o) {
      var s = e("../compressions"), a = e("./ZipFileWorker");
      o.generateWorker = function(i, d, f) {
        var m = new a(d.streamFiles, f, d.platform, d.encodeFileName), l = 0;
        try {
          i.forEach(function(x, p) {
            l++;
            var h = function(_, k) {
              var C = _ || k, A = s[C];
              if (!A) throw new Error(C + " is not a valid compression method !");
              return A;
            }(p.options.compression, d.compression), c = p.options.compressionOptions || d.compressionOptions || {}, g = p.dir, b = p.date;
            p._compressWorker(h, c).withStreamInfo("file", { name: x, dir: g, date: b, comment: p.comment || "", unixPermissions: p.unixPermissions, dosPermissions: p.dosPermissions }).pipe(m);
          }), m.entriesCount = l;
        } catch (x) {
          m.error(x);
        }
        return m;
      };
    }, { "../compressions": 3, "./ZipFileWorker": 8 }], 10: [function(e, n, o) {
      function s() {
        if (!(this instanceof s)) return new s();
        if (arguments.length) throw new Error("The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.");
        this.files = /* @__PURE__ */ Object.create(null), this.comment = null, this.root = "", this.clone = function() {
          var a = new s();
          for (var i in this) typeof this[i] != "function" && (a[i] = this[i]);
          return a;
        };
      }
      (s.prototype = e("./object")).loadAsync = e("./load"), s.support = e("./support"), s.defaults = e("./defaults"), s.version = "3.10.1", s.loadAsync = function(a, i) {
        return new s().loadAsync(a, i);
      }, s.external = e("./external"), n.exports = s;
    }, { "./defaults": 5, "./external": 6, "./load": 11, "./object": 15, "./support": 30 }], 11: [function(e, n, o) {
      var s = e("./utils"), a = e("./external"), i = e("./utf8"), d = e("./zipEntries"), f = e("./stream/Crc32Probe"), m = e("./nodejsUtils");
      function l(x) {
        return new a.Promise(function(p, h) {
          var c = x.decompressed.getContentWorker().pipe(new f());
          c.on("error", function(g) {
            h(g);
          }).on("end", function() {
            c.streamInfo.crc32 !== x.decompressed.crc32 ? h(new Error("Corrupted zip : CRC32 mismatch")) : p();
          }).resume();
        });
      }
      n.exports = function(x, p) {
        var h = this;
        return p = s.extend(p || {}, { base64: !1, checkCRC32: !1, optimizedBinaryString: !1, createFolders: !1, decodeFileName: i.utf8decode }), m.isNode && m.isStream(x) ? a.Promise.reject(new Error("JSZip can't accept a stream when loading a zip file.")) : s.prepareContent("the loaded zip file", x, !0, p.optimizedBinaryString, p.base64).then(function(c) {
          var g = new d(p);
          return g.load(c), g;
        }).then(function(c) {
          var g = [a.Promise.resolve(c)], b = c.files;
          if (p.checkCRC32) for (var _ = 0; _ < b.length; _++) g.push(l(b[_]));
          return a.Promise.all(g);
        }).then(function(c) {
          for (var g = c.shift(), b = g.files, _ = 0; _ < b.length; _++) {
            var k = b[_], C = k.fileNameStr, A = s.resolve(k.fileNameStr);
            h.file(A, k.decompressed, { binary: !0, optimizedBinaryString: !0, date: k.date, dir: k.dir, comment: k.fileCommentStr.length ? k.fileCommentStr : null, unixPermissions: k.unixPermissions, dosPermissions: k.dosPermissions, createFolders: p.createFolders }), k.dir || (h.file(A).unsafeOriginalName = C);
          }
          return g.zipComment.length && (h.comment = g.zipComment), h;
        });
      };
    }, { "./external": 6, "./nodejsUtils": 14, "./stream/Crc32Probe": 25, "./utf8": 31, "./utils": 32, "./zipEntries": 33 }], 12: [function(e, n, o) {
      var s = e("../utils"), a = e("../stream/GenericWorker");
      function i(d, f) {
        a.call(this, "Nodejs stream input adapter for " + d), this._upstreamEnded = !1, this._bindStream(f);
      }
      s.inherits(i, a), i.prototype._bindStream = function(d) {
        var f = this;
        (this._stream = d).pause(), d.on("data", function(m) {
          f.push({ data: m, meta: { percent: 0 } });
        }).on("error", function(m) {
          f.isPaused ? this.generatedError = m : f.error(m);
        }).on("end", function() {
          f.isPaused ? f._upstreamEnded = !0 : f.end();
        });
      }, i.prototype.pause = function() {
        return !!a.prototype.pause.call(this) && (this._stream.pause(), !0);
      }, i.prototype.resume = function() {
        return !!a.prototype.resume.call(this) && (this._upstreamEnded ? this.end() : this._stream.resume(), !0);
      }, n.exports = i;
    }, { "../stream/GenericWorker": 28, "../utils": 32 }], 13: [function(e, n, o) {
      var s = e("readable-stream").Readable;
      function a(i, d, f) {
        s.call(this, d), this._helper = i;
        var m = this;
        i.on("data", function(l, x) {
          m.push(l) || m._helper.pause(), f && f(x);
        }).on("error", function(l) {
          m.emit("error", l);
        }).on("end", function() {
          m.push(null);
        });
      }
      e("../utils").inherits(a, s), a.prototype._read = function() {
        this._helper.resume();
      }, n.exports = a;
    }, { "../utils": 32, "readable-stream": 16 }], 14: [function(e, n, o) {
      n.exports = { isNode: typeof Buffer < "u", newBufferFrom: function(s, a) {
        if (Buffer.from && Buffer.from !== Uint8Array.from) return Buffer.from(s, a);
        if (typeof s == "number") throw new Error('The "data" argument must not be a number');
        return new Buffer(s, a);
      }, allocBuffer: function(s) {
        if (Buffer.alloc) return Buffer.alloc(s);
        var a = new Buffer(s);
        return a.fill(0), a;
      }, isBuffer: function(s) {
        return Buffer.isBuffer(s);
      }, isStream: function(s) {
        return s && typeof s.on == "function" && typeof s.pause == "function" && typeof s.resume == "function";
      } };
    }, {}], 15: [function(e, n, o) {
      function s(A, P, z) {
        var Z, M = i.getTypeOf(P), G = i.extend(z || {}, m);
        G.date = G.date || /* @__PURE__ */ new Date(), G.compression !== null && (G.compression = G.compression.toUpperCase()), typeof G.unixPermissions == "string" && (G.unixPermissions = parseInt(G.unixPermissions, 8)), G.unixPermissions && 16384 & G.unixPermissions && (G.dir = !0), G.dosPermissions && 16 & G.dosPermissions && (G.dir = !0), G.dir && (A = b(A)), G.createFolders && (Z = g(A)) && _.call(this, Z, !0);
        var le = M === "string" && G.binary === !1 && G.base64 === !1;
        z && z.binary !== void 0 || (G.binary = !le), (P instanceof l && P.uncompressedSize === 0 || G.dir || !P || P.length === 0) && (G.base64 = !1, G.binary = !0, P = "", G.compression = "STORE", M = "string");
        var N = null;
        N = P instanceof l || P instanceof d ? P : h.isNode && h.isStream(P) ? new c(A, P) : i.prepareContent(A, P, G.binary, G.optimizedBinaryString, G.base64);
        var L = new x(A, N, G);
        this.files[A] = L;
      }
      var a = e("./utf8"), i = e("./utils"), d = e("./stream/GenericWorker"), f = e("./stream/StreamHelper"), m = e("./defaults"), l = e("./compressedObject"), x = e("./zipObject"), p = e("./generate"), h = e("./nodejsUtils"), c = e("./nodejs/NodejsStreamInputAdapter"), g = function(A) {
        A.slice(-1) === "/" && (A = A.substring(0, A.length - 1));
        var P = A.lastIndexOf("/");
        return 0 < P ? A.substring(0, P) : "";
      }, b = function(A) {
        return A.slice(-1) !== "/" && (A += "/"), A;
      }, _ = function(A, P) {
        return P = P !== void 0 ? P : m.createFolders, A = b(A), this.files[A] || s.call(this, A, null, { dir: !0, createFolders: P }), this.files[A];
      };
      function k(A) {
        return Object.prototype.toString.call(A) === "[object RegExp]";
      }
      var C = { load: function() {
        throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.");
      }, forEach: function(A) {
        var P, z, Z;
        for (P in this.files) Z = this.files[P], (z = P.slice(this.root.length, P.length)) && P.slice(0, this.root.length) === this.root && A(z, Z);
      }, filter: function(A) {
        var P = [];
        return this.forEach(function(z, Z) {
          A(z, Z) && P.push(Z);
        }), P;
      }, file: function(A, P, z) {
        if (arguments.length !== 1) return A = this.root + A, s.call(this, A, P, z), this;
        if (k(A)) {
          var Z = A;
          return this.filter(function(G, le) {
            return !le.dir && Z.test(G);
          });
        }
        var M = this.files[this.root + A];
        return M && !M.dir ? M : null;
      }, folder: function(A) {
        if (!A) return this;
        if (k(A)) return this.filter(function(M, G) {
          return G.dir && A.test(M);
        });
        var P = this.root + A, z = _.call(this, P), Z = this.clone();
        return Z.root = z.name, Z;
      }, remove: function(A) {
        A = this.root + A;
        var P = this.files[A];
        if (P || (A.slice(-1) !== "/" && (A += "/"), P = this.files[A]), P && !P.dir) delete this.files[A];
        else for (var z = this.filter(function(M, G) {
          return G.name.slice(0, A.length) === A;
        }), Z = 0; Z < z.length; Z++) delete this.files[z[Z].name];
        return this;
      }, generate: function() {
        throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.");
      }, generateInternalStream: function(A) {
        var P, z = {};
        try {
          if ((z = i.extend(A || {}, { streamFiles: !1, compression: "STORE", compressionOptions: null, type: "", platform: "DOS", comment: null, mimeType: "application/zip", encodeFileName: a.utf8encode })).type = z.type.toLowerCase(), z.compression = z.compression.toUpperCase(), z.type === "binarystring" && (z.type = "string"), !z.type) throw new Error("No output type specified.");
          i.checkSupport(z.type), z.platform !== "darwin" && z.platform !== "freebsd" && z.platform !== "linux" && z.platform !== "sunos" || (z.platform = "UNIX"), z.platform === "win32" && (z.platform = "DOS");
          var Z = z.comment || this.comment || "";
          P = p.generateWorker(this, z, Z);
        } catch (M) {
          (P = new d("error")).error(M);
        }
        return new f(P, z.type || "string", z.mimeType);
      }, generateAsync: function(A, P) {
        return this.generateInternalStream(A).accumulate(P);
      }, generateNodeStream: function(A, P) {
        return (A = A || {}).type || (A.type = "nodebuffer"), this.generateInternalStream(A).toNodejsStream(P);
      } };
      n.exports = C;
    }, { "./compressedObject": 2, "./defaults": 5, "./generate": 9, "./nodejs/NodejsStreamInputAdapter": 12, "./nodejsUtils": 14, "./stream/GenericWorker": 28, "./stream/StreamHelper": 29, "./utf8": 31, "./utils": 32, "./zipObject": 35 }], 16: [function(e, n, o) {
      n.exports = e("stream");
    }, { stream: void 0 }], 17: [function(e, n, o) {
      var s = e("./DataReader");
      function a(i) {
        s.call(this, i);
        for (var d = 0; d < this.data.length; d++) i[d] = 255 & i[d];
      }
      e("../utils").inherits(a, s), a.prototype.byteAt = function(i) {
        return this.data[this.zero + i];
      }, a.prototype.lastIndexOfSignature = function(i) {
        for (var d = i.charCodeAt(0), f = i.charCodeAt(1), m = i.charCodeAt(2), l = i.charCodeAt(3), x = this.length - 4; 0 <= x; --x) if (this.data[x] === d && this.data[x + 1] === f && this.data[x + 2] === m && this.data[x + 3] === l) return x - this.zero;
        return -1;
      }, a.prototype.readAndCheckSignature = function(i) {
        var d = i.charCodeAt(0), f = i.charCodeAt(1), m = i.charCodeAt(2), l = i.charCodeAt(3), x = this.readData(4);
        return d === x[0] && f === x[1] && m === x[2] && l === x[3];
      }, a.prototype.readData = function(i) {
        if (this.checkOffset(i), i === 0) return [];
        var d = this.data.slice(this.zero + this.index, this.zero + this.index + i);
        return this.index += i, d;
      }, n.exports = a;
    }, { "../utils": 32, "./DataReader": 18 }], 18: [function(e, n, o) {
      var s = e("../utils");
      function a(i) {
        this.data = i, this.length = i.length, this.index = 0, this.zero = 0;
      }
      a.prototype = { checkOffset: function(i) {
        this.checkIndex(this.index + i);
      }, checkIndex: function(i) {
        if (this.length < this.zero + i || i < 0) throw new Error("End of data reached (data length = " + this.length + ", asked index = " + i + "). Corrupted zip ?");
      }, setIndex: function(i) {
        this.checkIndex(i), this.index = i;
      }, skip: function(i) {
        this.setIndex(this.index + i);
      }, byteAt: function() {
      }, readInt: function(i) {
        var d, f = 0;
        for (this.checkOffset(i), d = this.index + i - 1; d >= this.index; d--) f = (f << 8) + this.byteAt(d);
        return this.index += i, f;
      }, readString: function(i) {
        return s.transformTo("string", this.readData(i));
      }, readData: function() {
      }, lastIndexOfSignature: function() {
      }, readAndCheckSignature: function() {
      }, readDate: function() {
        var i = this.readInt(4);
        return new Date(Date.UTC(1980 + (i >> 25 & 127), (i >> 21 & 15) - 1, i >> 16 & 31, i >> 11 & 31, i >> 5 & 63, (31 & i) << 1));
      } }, n.exports = a;
    }, { "../utils": 32 }], 19: [function(e, n, o) {
      var s = e("./Uint8ArrayReader");
      function a(i) {
        s.call(this, i);
      }
      e("../utils").inherits(a, s), a.prototype.readData = function(i) {
        this.checkOffset(i);
        var d = this.data.slice(this.zero + this.index, this.zero + this.index + i);
        return this.index += i, d;
      }, n.exports = a;
    }, { "../utils": 32, "./Uint8ArrayReader": 21 }], 20: [function(e, n, o) {
      var s = e("./DataReader");
      function a(i) {
        s.call(this, i);
      }
      e("../utils").inherits(a, s), a.prototype.byteAt = function(i) {
        return this.data.charCodeAt(this.zero + i);
      }, a.prototype.lastIndexOfSignature = function(i) {
        return this.data.lastIndexOf(i) - this.zero;
      }, a.prototype.readAndCheckSignature = function(i) {
        return i === this.readData(4);
      }, a.prototype.readData = function(i) {
        this.checkOffset(i);
        var d = this.data.slice(this.zero + this.index, this.zero + this.index + i);
        return this.index += i, d;
      }, n.exports = a;
    }, { "../utils": 32, "./DataReader": 18 }], 21: [function(e, n, o) {
      var s = e("./ArrayReader");
      function a(i) {
        s.call(this, i);
      }
      e("../utils").inherits(a, s), a.prototype.readData = function(i) {
        if (this.checkOffset(i), i === 0) return new Uint8Array(0);
        var d = this.data.subarray(this.zero + this.index, this.zero + this.index + i);
        return this.index += i, d;
      }, n.exports = a;
    }, { "../utils": 32, "./ArrayReader": 17 }], 22: [function(e, n, o) {
      var s = e("../utils"), a = e("../support"), i = e("./ArrayReader"), d = e("./StringReader"), f = e("./NodeBufferReader"), m = e("./Uint8ArrayReader");
      n.exports = function(l) {
        var x = s.getTypeOf(l);
        return s.checkSupport(x), x !== "string" || a.uint8array ? x === "nodebuffer" ? new f(l) : a.uint8array ? new m(s.transformTo("uint8array", l)) : new i(s.transformTo("array", l)) : new d(l);
      };
    }, { "../support": 30, "../utils": 32, "./ArrayReader": 17, "./NodeBufferReader": 19, "./StringReader": 20, "./Uint8ArrayReader": 21 }], 23: [function(e, n, o) {
      o.LOCAL_FILE_HEADER = "PK", o.CENTRAL_FILE_HEADER = "PK", o.CENTRAL_DIRECTORY_END = "PK", o.ZIP64_CENTRAL_DIRECTORY_LOCATOR = "PK\x07", o.ZIP64_CENTRAL_DIRECTORY_END = "PK", o.DATA_DESCRIPTOR = "PK\x07\b";
    }, {}], 24: [function(e, n, o) {
      var s = e("./GenericWorker"), a = e("../utils");
      function i(d) {
        s.call(this, "ConvertWorker to " + d), this.destType = d;
      }
      a.inherits(i, s), i.prototype.processChunk = function(d) {
        this.push({ data: a.transformTo(this.destType, d.data), meta: d.meta });
      }, n.exports = i;
    }, { "../utils": 32, "./GenericWorker": 28 }], 25: [function(e, n, o) {
      var s = e("./GenericWorker"), a = e("../crc32");
      function i() {
        s.call(this, "Crc32Probe"), this.withStreamInfo("crc32", 0);
      }
      e("../utils").inherits(i, s), i.prototype.processChunk = function(d) {
        this.streamInfo.crc32 = a(d.data, this.streamInfo.crc32 || 0), this.push(d);
      }, n.exports = i;
    }, { "../crc32": 4, "../utils": 32, "./GenericWorker": 28 }], 26: [function(e, n, o) {
      var s = e("../utils"), a = e("./GenericWorker");
      function i(d) {
        a.call(this, "DataLengthProbe for " + d), this.propName = d, this.withStreamInfo(d, 0);
      }
      s.inherits(i, a), i.prototype.processChunk = function(d) {
        if (d) {
          var f = this.streamInfo[this.propName] || 0;
          this.streamInfo[this.propName] = f + d.data.length;
        }
        a.prototype.processChunk.call(this, d);
      }, n.exports = i;
    }, { "../utils": 32, "./GenericWorker": 28 }], 27: [function(e, n, o) {
      var s = e("../utils"), a = e("./GenericWorker");
      function i(d) {
        a.call(this, "DataWorker");
        var f = this;
        this.dataIsReady = !1, this.index = 0, this.max = 0, this.data = null, this.type = "", this._tickScheduled = !1, d.then(function(m) {
          f.dataIsReady = !0, f.data = m, f.max = m && m.length || 0, f.type = s.getTypeOf(m), f.isPaused || f._tickAndRepeat();
        }, function(m) {
          f.error(m);
        });
      }
      s.inherits(i, a), i.prototype.cleanUp = function() {
        a.prototype.cleanUp.call(this), this.data = null;
      }, i.prototype.resume = function() {
        return !!a.prototype.resume.call(this) && (!this._tickScheduled && this.dataIsReady && (this._tickScheduled = !0, s.delay(this._tickAndRepeat, [], this)), !0);
      }, i.prototype._tickAndRepeat = function() {
        this._tickScheduled = !1, this.isPaused || this.isFinished || (this._tick(), this.isFinished || (s.delay(this._tickAndRepeat, [], this), this._tickScheduled = !0));
      }, i.prototype._tick = function() {
        if (this.isPaused || this.isFinished) return !1;
        var d = null, f = Math.min(this.max, this.index + 16384);
        if (this.index >= this.max) return this.end();
        switch (this.type) {
          case "string":
            d = this.data.substring(this.index, f);
            break;
          case "uint8array":
            d = this.data.subarray(this.index, f);
            break;
          case "array":
          case "nodebuffer":
            d = this.data.slice(this.index, f);
        }
        return this.index = f, this.push({ data: d, meta: { percent: this.max ? this.index / this.max * 100 : 0 } });
      }, n.exports = i;
    }, { "../utils": 32, "./GenericWorker": 28 }], 28: [function(e, n, o) {
      function s(a) {
        this.name = a || "default", this.streamInfo = {}, this.generatedError = null, this.extraStreamInfo = {}, this.isPaused = !0, this.isFinished = !1, this.isLocked = !1, this._listeners = { data: [], end: [], error: [] }, this.previous = null;
      }
      s.prototype = { push: function(a) {
        this.emit("data", a);
      }, end: function() {
        if (this.isFinished) return !1;
        this.flush();
        try {
          this.emit("end"), this.cleanUp(), this.isFinished = !0;
        } catch (a) {
          this.emit("error", a);
        }
        return !0;
      }, error: function(a) {
        return !this.isFinished && (this.isPaused ? this.generatedError = a : (this.isFinished = !0, this.emit("error", a), this.previous && this.previous.error(a), this.cleanUp()), !0);
      }, on: function(a, i) {
        return this._listeners[a].push(i), this;
      }, cleanUp: function() {
        this.streamInfo = this.generatedError = this.extraStreamInfo = null, this._listeners = [];
      }, emit: function(a, i) {
        if (this._listeners[a]) for (var d = 0; d < this._listeners[a].length; d++) this._listeners[a][d].call(this, i);
      }, pipe: function(a) {
        return a.registerPrevious(this);
      }, registerPrevious: function(a) {
        if (this.isLocked) throw new Error("The stream '" + this + "' has already been used.");
        this.streamInfo = a.streamInfo, this.mergeStreamInfo(), this.previous = a;
        var i = this;
        return a.on("data", function(d) {
          i.processChunk(d);
        }), a.on("end", function() {
          i.end();
        }), a.on("error", function(d) {
          i.error(d);
        }), this;
      }, pause: function() {
        return !this.isPaused && !this.isFinished && (this.isPaused = !0, this.previous && this.previous.pause(), !0);
      }, resume: function() {
        if (!this.isPaused || this.isFinished) return !1;
        var a = this.isPaused = !1;
        return this.generatedError && (this.error(this.generatedError), a = !0), this.previous && this.previous.resume(), !a;
      }, flush: function() {
      }, processChunk: function(a) {
        this.push(a);
      }, withStreamInfo: function(a, i) {
        return this.extraStreamInfo[a] = i, this.mergeStreamInfo(), this;
      }, mergeStreamInfo: function() {
        for (var a in this.extraStreamInfo) Object.prototype.hasOwnProperty.call(this.extraStreamInfo, a) && (this.streamInfo[a] = this.extraStreamInfo[a]);
      }, lock: function() {
        if (this.isLocked) throw new Error("The stream '" + this + "' has already been used.");
        this.isLocked = !0, this.previous && this.previous.lock();
      }, toString: function() {
        var a = "Worker " + this.name;
        return this.previous ? this.previous + " -> " + a : a;
      } }, n.exports = s;
    }, {}], 29: [function(e, n, o) {
      var s = e("../utils"), a = e("./ConvertWorker"), i = e("./GenericWorker"), d = e("../base64"), f = e("../support"), m = e("../external"), l = null;
      if (f.nodestream) try {
        l = e("../nodejs/NodejsStreamOutputAdapter");
      } catch {
      }
      function x(h, c) {
        return new m.Promise(function(g, b) {
          var _ = [], k = h._internalType, C = h._outputType, A = h._mimeType;
          h.on("data", function(P, z) {
            _.push(P), c && c(z);
          }).on("error", function(P) {
            _ = [], b(P);
          }).on("end", function() {
            try {
              var P = function(z, Z, M) {
                switch (z) {
                  case "blob":
                    return s.newBlob(s.transformTo("arraybuffer", Z), M);
                  case "base64":
                    return d.encode(Z);
                  default:
                    return s.transformTo(z, Z);
                }
              }(C, function(z, Z) {
                var M, G = 0, le = null, N = 0;
                for (M = 0; M < Z.length; M++) N += Z[M].length;
                switch (z) {
                  case "string":
                    return Z.join("");
                  case "array":
                    return Array.prototype.concat.apply([], Z);
                  case "uint8array":
                    for (le = new Uint8Array(N), M = 0; M < Z.length; M++) le.set(Z[M], G), G += Z[M].length;
                    return le;
                  case "nodebuffer":
                    return Buffer.concat(Z);
                  default:
                    throw new Error("concat : unsupported type '" + z + "'");
                }
              }(k, _), A);
              g(P);
            } catch (z) {
              b(z);
            }
            _ = [];
          }).resume();
        });
      }
      function p(h, c, g) {
        var b = c;
        switch (c) {
          case "blob":
          case "arraybuffer":
            b = "uint8array";
            break;
          case "base64":
            b = "string";
        }
        try {
          this._internalType = b, this._outputType = c, this._mimeType = g, s.checkSupport(b), this._worker = h.pipe(new a(b)), h.lock();
        } catch (_) {
          this._worker = new i("error"), this._worker.error(_);
        }
      }
      p.prototype = { accumulate: function(h) {
        return x(this, h);
      }, on: function(h, c) {
        var g = this;
        return h === "data" ? this._worker.on(h, function(b) {
          c.call(g, b.data, b.meta);
        }) : this._worker.on(h, function() {
          s.delay(c, arguments, g);
        }), this;
      }, resume: function() {
        return s.delay(this._worker.resume, [], this._worker), this;
      }, pause: function() {
        return this._worker.pause(), this;
      }, toNodejsStream: function(h) {
        if (s.checkSupport("nodestream"), this._outputType !== "nodebuffer") throw new Error(this._outputType + " is not supported by this method");
        return new l(this, { objectMode: this._outputType !== "nodebuffer" }, h);
      } }, n.exports = p;
    }, { "../base64": 1, "../external": 6, "../nodejs/NodejsStreamOutputAdapter": 13, "../support": 30, "../utils": 32, "./ConvertWorker": 24, "./GenericWorker": 28 }], 30: [function(e, n, o) {
      if (o.base64 = !0, o.array = !0, o.string = !0, o.arraybuffer = typeof ArrayBuffer < "u" && typeof Uint8Array < "u", o.nodebuffer = typeof Buffer < "u", o.uint8array = typeof Uint8Array < "u", typeof ArrayBuffer > "u") o.blob = !1;
      else {
        var s = new ArrayBuffer(0);
        try {
          o.blob = new Blob([s], { type: "application/zip" }).size === 0;
        } catch {
          try {
            var a = new (self.BlobBuilder || self.WebKitBlobBuilder || self.MozBlobBuilder || self.MSBlobBuilder)();
            a.append(s), o.blob = a.getBlob("application/zip").size === 0;
          } catch {
            o.blob = !1;
          }
        }
      }
      try {
        o.nodestream = !!e("readable-stream").Readable;
      } catch {
        o.nodestream = !1;
      }
    }, { "readable-stream": 16 }], 31: [function(e, n, o) {
      for (var s = e("./utils"), a = e("./support"), i = e("./nodejsUtils"), d = e("./stream/GenericWorker"), f = new Array(256), m = 0; m < 256; m++) f[m] = 252 <= m ? 6 : 248 <= m ? 5 : 240 <= m ? 4 : 224 <= m ? 3 : 192 <= m ? 2 : 1;
      f[254] = f[254] = 1;
      function l() {
        d.call(this, "utf-8 decode"), this.leftOver = null;
      }
      function x() {
        d.call(this, "utf-8 encode");
      }
      o.utf8encode = function(p) {
        return a.nodebuffer ? i.newBufferFrom(p, "utf-8") : function(h) {
          var c, g, b, _, k, C = h.length, A = 0;
          for (_ = 0; _ < C; _++) (64512 & (g = h.charCodeAt(_))) == 55296 && _ + 1 < C && (64512 & (b = h.charCodeAt(_ + 1))) == 56320 && (g = 65536 + (g - 55296 << 10) + (b - 56320), _++), A += g < 128 ? 1 : g < 2048 ? 2 : g < 65536 ? 3 : 4;
          for (c = a.uint8array ? new Uint8Array(A) : new Array(A), _ = k = 0; k < A; _++) (64512 & (g = h.charCodeAt(_))) == 55296 && _ + 1 < C && (64512 & (b = h.charCodeAt(_ + 1))) == 56320 && (g = 65536 + (g - 55296 << 10) + (b - 56320), _++), g < 128 ? c[k++] = g : (g < 2048 ? c[k++] = 192 | g >>> 6 : (g < 65536 ? c[k++] = 224 | g >>> 12 : (c[k++] = 240 | g >>> 18, c[k++] = 128 | g >>> 12 & 63), c[k++] = 128 | g >>> 6 & 63), c[k++] = 128 | 63 & g);
          return c;
        }(p);
      }, o.utf8decode = function(p) {
        return a.nodebuffer ? s.transformTo("nodebuffer", p).toString("utf-8") : function(h) {
          var c, g, b, _, k = h.length, C = new Array(2 * k);
          for (c = g = 0; c < k; ) if ((b = h[c++]) < 128) C[g++] = b;
          else if (4 < (_ = f[b])) C[g++] = 65533, c += _ - 1;
          else {
            for (b &= _ === 2 ? 31 : _ === 3 ? 15 : 7; 1 < _ && c < k; ) b = b << 6 | 63 & h[c++], _--;
            1 < _ ? C[g++] = 65533 : b < 65536 ? C[g++] = b : (b -= 65536, C[g++] = 55296 | b >> 10 & 1023, C[g++] = 56320 | 1023 & b);
          }
          return C.length !== g && (C.subarray ? C = C.subarray(0, g) : C.length = g), s.applyFromCharCode(C);
        }(p = s.transformTo(a.uint8array ? "uint8array" : "array", p));
      }, s.inherits(l, d), l.prototype.processChunk = function(p) {
        var h = s.transformTo(a.uint8array ? "uint8array" : "array", p.data);
        if (this.leftOver && this.leftOver.length) {
          if (a.uint8array) {
            var c = h;
            (h = new Uint8Array(c.length + this.leftOver.length)).set(this.leftOver, 0), h.set(c, this.leftOver.length);
          } else h = this.leftOver.concat(h);
          this.leftOver = null;
        }
        var g = function(_, k) {
          var C;
          for ((k = k || _.length) > _.length && (k = _.length), C = k - 1; 0 <= C && (192 & _[C]) == 128; ) C--;
          return C < 0 || C === 0 ? k : C + f[_[C]] > k ? C : k;
        }(h), b = h;
        g !== h.length && (a.uint8array ? (b = h.subarray(0, g), this.leftOver = h.subarray(g, h.length)) : (b = h.slice(0, g), this.leftOver = h.slice(g, h.length))), this.push({ data: o.utf8decode(b), meta: p.meta });
      }, l.prototype.flush = function() {
        this.leftOver && this.leftOver.length && (this.push({ data: o.utf8decode(this.leftOver), meta: {} }), this.leftOver = null);
      }, o.Utf8DecodeWorker = l, s.inherits(x, d), x.prototype.processChunk = function(p) {
        this.push({ data: o.utf8encode(p.data), meta: p.meta });
      }, o.Utf8EncodeWorker = x;
    }, { "./nodejsUtils": 14, "./stream/GenericWorker": 28, "./support": 30, "./utils": 32 }], 32: [function(e, n, o) {
      var s = e("./support"), a = e("./base64"), i = e("./nodejsUtils"), d = e("./external");
      function f(c) {
        return c;
      }
      function m(c, g) {
        for (var b = 0; b < c.length; ++b) g[b] = 255 & c.charCodeAt(b);
        return g;
      }
      e("setimmediate"), o.newBlob = function(c, g) {
        o.checkSupport("blob");
        try {
          return new Blob([c], { type: g });
        } catch {
          try {
            var b = new (self.BlobBuilder || self.WebKitBlobBuilder || self.MozBlobBuilder || self.MSBlobBuilder)();
            return b.append(c), b.getBlob(g);
          } catch {
            throw new Error("Bug : can't construct the Blob.");
          }
        }
      };
      var l = { stringifyByChunk: function(c, g, b) {
        var _ = [], k = 0, C = c.length;
        if (C <= b) return String.fromCharCode.apply(null, c);
        for (; k < C; ) g === "array" || g === "nodebuffer" ? _.push(String.fromCharCode.apply(null, c.slice(k, Math.min(k + b, C)))) : _.push(String.fromCharCode.apply(null, c.subarray(k, Math.min(k + b, C)))), k += b;
        return _.join("");
      }, stringifyByChar: function(c) {
        for (var g = "", b = 0; b < c.length; b++) g += String.fromCharCode(c[b]);
        return g;
      }, applyCanBeUsed: { uint8array: function() {
        try {
          return s.uint8array && String.fromCharCode.apply(null, new Uint8Array(1)).length === 1;
        } catch {
          return !1;
        }
      }(), nodebuffer: function() {
        try {
          return s.nodebuffer && String.fromCharCode.apply(null, i.allocBuffer(1)).length === 1;
        } catch {
          return !1;
        }
      }() } };
      function x(c) {
        var g = 65536, b = o.getTypeOf(c), _ = !0;
        if (b === "uint8array" ? _ = l.applyCanBeUsed.uint8array : b === "nodebuffer" && (_ = l.applyCanBeUsed.nodebuffer), _) for (; 1 < g; ) try {
          return l.stringifyByChunk(c, b, g);
        } catch {
          g = Math.floor(g / 2);
        }
        return l.stringifyByChar(c);
      }
      function p(c, g) {
        for (var b = 0; b < c.length; b++) g[b] = c[b];
        return g;
      }
      o.applyFromCharCode = x;
      var h = {};
      h.string = { string: f, array: function(c) {
        return m(c, new Array(c.length));
      }, arraybuffer: function(c) {
        return h.string.uint8array(c).buffer;
      }, uint8array: function(c) {
        return m(c, new Uint8Array(c.length));
      }, nodebuffer: function(c) {
        return m(c, i.allocBuffer(c.length));
      } }, h.array = { string: x, array: f, arraybuffer: function(c) {
        return new Uint8Array(c).buffer;
      }, uint8array: function(c) {
        return new Uint8Array(c);
      }, nodebuffer: function(c) {
        return i.newBufferFrom(c);
      } }, h.arraybuffer = { string: function(c) {
        return x(new Uint8Array(c));
      }, array: function(c) {
        return p(new Uint8Array(c), new Array(c.byteLength));
      }, arraybuffer: f, uint8array: function(c) {
        return new Uint8Array(c);
      }, nodebuffer: function(c) {
        return i.newBufferFrom(new Uint8Array(c));
      } }, h.uint8array = { string: x, array: function(c) {
        return p(c, new Array(c.length));
      }, arraybuffer: function(c) {
        return c.buffer;
      }, uint8array: f, nodebuffer: function(c) {
        return i.newBufferFrom(c);
      } }, h.nodebuffer = { string: x, array: function(c) {
        return p(c, new Array(c.length));
      }, arraybuffer: function(c) {
        return h.nodebuffer.uint8array(c).buffer;
      }, uint8array: function(c) {
        return p(c, new Uint8Array(c.length));
      }, nodebuffer: f }, o.transformTo = function(c, g) {
        if (g = g || "", !c) return g;
        o.checkSupport(c);
        var b = o.getTypeOf(g);
        return h[b][c](g);
      }, o.resolve = function(c) {
        for (var g = c.split("/"), b = [], _ = 0; _ < g.length; _++) {
          var k = g[_];
          k === "." || k === "" && _ !== 0 && _ !== g.length - 1 || (k === ".." ? b.pop() : b.push(k));
        }
        return b.join("/");
      }, o.getTypeOf = function(c) {
        return typeof c == "string" ? "string" : Object.prototype.toString.call(c) === "[object Array]" ? "array" : s.nodebuffer && i.isBuffer(c) ? "nodebuffer" : s.uint8array && c instanceof Uint8Array ? "uint8array" : s.arraybuffer && c instanceof ArrayBuffer ? "arraybuffer" : void 0;
      }, o.checkSupport = function(c) {
        if (!s[c.toLowerCase()]) throw new Error(c + " is not supported by this platform");
      }, o.MAX_VALUE_16BITS = 65535, o.MAX_VALUE_32BITS = -1, o.pretty = function(c) {
        var g, b, _ = "";
        for (b = 0; b < (c || "").length; b++) _ += "\\x" + ((g = c.charCodeAt(b)) < 16 ? "0" : "") + g.toString(16).toUpperCase();
        return _;
      }, o.delay = function(c, g, b) {
        setImmediate(function() {
          c.apply(b || null, g || []);
        });
      }, o.inherits = function(c, g) {
        function b() {
        }
        b.prototype = g.prototype, c.prototype = new b();
      }, o.extend = function() {
        var c, g, b = {};
        for (c = 0; c < arguments.length; c++) for (g in arguments[c]) Object.prototype.hasOwnProperty.call(arguments[c], g) && b[g] === void 0 && (b[g] = arguments[c][g]);
        return b;
      }, o.prepareContent = function(c, g, b, _, k) {
        return d.Promise.resolve(g).then(function(C) {
          return s.blob && (C instanceof Blob || ["[object File]", "[object Blob]"].indexOf(Object.prototype.toString.call(C)) !== -1) && typeof FileReader < "u" ? new d.Promise(function(A, P) {
            var z = new FileReader();
            z.onload = function(Z) {
              A(Z.target.result);
            }, z.onerror = function(Z) {
              P(Z.target.error);
            }, z.readAsArrayBuffer(C);
          }) : C;
        }).then(function(C) {
          var A = o.getTypeOf(C);
          return A ? (A === "arraybuffer" ? C = o.transformTo("uint8array", C) : A === "string" && (k ? C = a.decode(C) : b && _ !== !0 && (C = function(P) {
            return m(P, s.uint8array ? new Uint8Array(P.length) : new Array(P.length));
          }(C))), C) : d.Promise.reject(new Error("Can't read the data of '" + c + "'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?"));
        });
      };
    }, { "./base64": 1, "./external": 6, "./nodejsUtils": 14, "./support": 30, setimmediate: 54 }], 33: [function(e, n, o) {
      var s = e("./reader/readerFor"), a = e("./utils"), i = e("./signature"), d = e("./zipEntry"), f = e("./support");
      function m(l) {
        this.files = [], this.loadOptions = l;
      }
      m.prototype = { checkSignature: function(l) {
        if (!this.reader.readAndCheckSignature(l)) {
          this.reader.index -= 4;
          var x = this.reader.readString(4);
          throw new Error("Corrupted zip or bug: unexpected signature (" + a.pretty(x) + ", expected " + a.pretty(l) + ")");
        }
      }, isSignature: function(l, x) {
        var p = this.reader.index;
        this.reader.setIndex(l);
        var h = this.reader.readString(4) === x;
        return this.reader.setIndex(p), h;
      }, readBlockEndOfCentral: function() {
        this.diskNumber = this.reader.readInt(2), this.diskWithCentralDirStart = this.reader.readInt(2), this.centralDirRecordsOnThisDisk = this.reader.readInt(2), this.centralDirRecords = this.reader.readInt(2), this.centralDirSize = this.reader.readInt(4), this.centralDirOffset = this.reader.readInt(4), this.zipCommentLength = this.reader.readInt(2);
        var l = this.reader.readData(this.zipCommentLength), x = f.uint8array ? "uint8array" : "array", p = a.transformTo(x, l);
        this.zipComment = this.loadOptions.decodeFileName(p);
      }, readBlockZip64EndOfCentral: function() {
        this.zip64EndOfCentralSize = this.reader.readInt(8), this.reader.skip(4), this.diskNumber = this.reader.readInt(4), this.diskWithCentralDirStart = this.reader.readInt(4), this.centralDirRecordsOnThisDisk = this.reader.readInt(8), this.centralDirRecords = this.reader.readInt(8), this.centralDirSize = this.reader.readInt(8), this.centralDirOffset = this.reader.readInt(8), this.zip64ExtensibleData = {};
        for (var l, x, p, h = this.zip64EndOfCentralSize - 44; 0 < h; ) l = this.reader.readInt(2), x = this.reader.readInt(4), p = this.reader.readData(x), this.zip64ExtensibleData[l] = { id: l, length: x, value: p };
      }, readBlockZip64EndOfCentralLocator: function() {
        if (this.diskWithZip64CentralDirStart = this.reader.readInt(4), this.relativeOffsetEndOfZip64CentralDir = this.reader.readInt(8), this.disksCount = this.reader.readInt(4), 1 < this.disksCount) throw new Error("Multi-volumes zip are not supported");
      }, readLocalFiles: function() {
        var l, x;
        for (l = 0; l < this.files.length; l++) x = this.files[l], this.reader.setIndex(x.localHeaderOffset), this.checkSignature(i.LOCAL_FILE_HEADER), x.readLocalPart(this.reader), x.handleUTF8(), x.processAttributes();
      }, readCentralDir: function() {
        var l;
        for (this.reader.setIndex(this.centralDirOffset); this.reader.readAndCheckSignature(i.CENTRAL_FILE_HEADER); ) (l = new d({ zip64: this.zip64 }, this.loadOptions)).readCentralPart(this.reader), this.files.push(l);
        if (this.centralDirRecords !== this.files.length && this.centralDirRecords !== 0 && this.files.length === 0) throw new Error("Corrupted zip or bug: expected " + this.centralDirRecords + " records in central dir, got " + this.files.length);
      }, readEndOfCentral: function() {
        var l = this.reader.lastIndexOfSignature(i.CENTRAL_DIRECTORY_END);
        if (l < 0) throw this.isSignature(0, i.LOCAL_FILE_HEADER) ? new Error("Corrupted zip: can't find end of central directory") : new Error("Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html");
        this.reader.setIndex(l);
        var x = l;
        if (this.checkSignature(i.CENTRAL_DIRECTORY_END), this.readBlockEndOfCentral(), this.diskNumber === a.MAX_VALUE_16BITS || this.diskWithCentralDirStart === a.MAX_VALUE_16BITS || this.centralDirRecordsOnThisDisk === a.MAX_VALUE_16BITS || this.centralDirRecords === a.MAX_VALUE_16BITS || this.centralDirSize === a.MAX_VALUE_32BITS || this.centralDirOffset === a.MAX_VALUE_32BITS) {
          if (this.zip64 = !0, (l = this.reader.lastIndexOfSignature(i.ZIP64_CENTRAL_DIRECTORY_LOCATOR)) < 0) throw new Error("Corrupted zip: can't find the ZIP64 end of central directory locator");
          if (this.reader.setIndex(l), this.checkSignature(i.ZIP64_CENTRAL_DIRECTORY_LOCATOR), this.readBlockZip64EndOfCentralLocator(), !this.isSignature(this.relativeOffsetEndOfZip64CentralDir, i.ZIP64_CENTRAL_DIRECTORY_END) && (this.relativeOffsetEndOfZip64CentralDir = this.reader.lastIndexOfSignature(i.ZIP64_CENTRAL_DIRECTORY_END), this.relativeOffsetEndOfZip64CentralDir < 0)) throw new Error("Corrupted zip: can't find the ZIP64 end of central directory");
          this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir), this.checkSignature(i.ZIP64_CENTRAL_DIRECTORY_END), this.readBlockZip64EndOfCentral();
        }
        var p = this.centralDirOffset + this.centralDirSize;
        this.zip64 && (p += 20, p += 12 + this.zip64EndOfCentralSize);
        var h = x - p;
        if (0 < h) this.isSignature(x, i.CENTRAL_FILE_HEADER) || (this.reader.zero = h);
        else if (h < 0) throw new Error("Corrupted zip: missing " + Math.abs(h) + " bytes.");
      }, prepareReader: function(l) {
        this.reader = s(l);
      }, load: function(l) {
        this.prepareReader(l), this.readEndOfCentral(), this.readCentralDir(), this.readLocalFiles();
      } }, n.exports = m;
    }, { "./reader/readerFor": 22, "./signature": 23, "./support": 30, "./utils": 32, "./zipEntry": 34 }], 34: [function(e, n, o) {
      var s = e("./reader/readerFor"), a = e("./utils"), i = e("./compressedObject"), d = e("./crc32"), f = e("./utf8"), m = e("./compressions"), l = e("./support");
      function x(p, h) {
        this.options = p, this.loadOptions = h;
      }
      x.prototype = { isEncrypted: function() {
        return (1 & this.bitFlag) == 1;
      }, useUTF8: function() {
        return (2048 & this.bitFlag) == 2048;
      }, readLocalPart: function(p) {
        var h, c;
        if (p.skip(22), this.fileNameLength = p.readInt(2), c = p.readInt(2), this.fileName = p.readData(this.fileNameLength), p.skip(c), this.compressedSize === -1 || this.uncompressedSize === -1) throw new Error("Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)");
        if ((h = function(g) {
          for (var b in m) if (Object.prototype.hasOwnProperty.call(m, b) && m[b].magic === g) return m[b];
          return null;
        }(this.compressionMethod)) === null) throw new Error("Corrupted zip : compression " + a.pretty(this.compressionMethod) + " unknown (inner file : " + a.transformTo("string", this.fileName) + ")");
        this.decompressed = new i(this.compressedSize, this.uncompressedSize, this.crc32, h, p.readData(this.compressedSize));
      }, readCentralPart: function(p) {
        this.versionMadeBy = p.readInt(2), p.skip(2), this.bitFlag = p.readInt(2), this.compressionMethod = p.readString(2), this.date = p.readDate(), this.crc32 = p.readInt(4), this.compressedSize = p.readInt(4), this.uncompressedSize = p.readInt(4);
        var h = p.readInt(2);
        if (this.extraFieldsLength = p.readInt(2), this.fileCommentLength = p.readInt(2), this.diskNumberStart = p.readInt(2), this.internalFileAttributes = p.readInt(2), this.externalFileAttributes = p.readInt(4), this.localHeaderOffset = p.readInt(4), this.isEncrypted()) throw new Error("Encrypted zip are not supported");
        p.skip(h), this.readExtraFields(p), this.parseZIP64ExtraField(p), this.fileComment = p.readData(this.fileCommentLength);
      }, processAttributes: function() {
        this.unixPermissions = null, this.dosPermissions = null;
        var p = this.versionMadeBy >> 8;
        this.dir = !!(16 & this.externalFileAttributes), p == 0 && (this.dosPermissions = 63 & this.externalFileAttributes), p == 3 && (this.unixPermissions = this.externalFileAttributes >> 16 & 65535), this.dir || this.fileNameStr.slice(-1) !== "/" || (this.dir = !0);
      }, parseZIP64ExtraField: function() {
        if (this.extraFields[1]) {
          var p = s(this.extraFields[1].value);
          this.uncompressedSize === a.MAX_VALUE_32BITS && (this.uncompressedSize = p.readInt(8)), this.compressedSize === a.MAX_VALUE_32BITS && (this.compressedSize = p.readInt(8)), this.localHeaderOffset === a.MAX_VALUE_32BITS && (this.localHeaderOffset = p.readInt(8)), this.diskNumberStart === a.MAX_VALUE_32BITS && (this.diskNumberStart = p.readInt(4));
        }
      }, readExtraFields: function(p) {
        var h, c, g, b = p.index + this.extraFieldsLength;
        for (this.extraFields || (this.extraFields = {}); p.index + 4 < b; ) h = p.readInt(2), c = p.readInt(2), g = p.readData(c), this.extraFields[h] = { id: h, length: c, value: g };
        p.setIndex(b);
      }, handleUTF8: function() {
        var p = l.uint8array ? "uint8array" : "array";
        if (this.useUTF8()) this.fileNameStr = f.utf8decode(this.fileName), this.fileCommentStr = f.utf8decode(this.fileComment);
        else {
          var h = this.findExtraFieldUnicodePath();
          if (h !== null) this.fileNameStr = h;
          else {
            var c = a.transformTo(p, this.fileName);
            this.fileNameStr = this.loadOptions.decodeFileName(c);
          }
          var g = this.findExtraFieldUnicodeComment();
          if (g !== null) this.fileCommentStr = g;
          else {
            var b = a.transformTo(p, this.fileComment);
            this.fileCommentStr = this.loadOptions.decodeFileName(b);
          }
        }
      }, findExtraFieldUnicodePath: function() {
        var p = this.extraFields[28789];
        if (p) {
          var h = s(p.value);
          return h.readInt(1) !== 1 || d(this.fileName) !== h.readInt(4) ? null : f.utf8decode(h.readData(p.length - 5));
        }
        return null;
      }, findExtraFieldUnicodeComment: function() {
        var p = this.extraFields[25461];
        if (p) {
          var h = s(p.value);
          return h.readInt(1) !== 1 || d(this.fileComment) !== h.readInt(4) ? null : f.utf8decode(h.readData(p.length - 5));
        }
        return null;
      } }, n.exports = x;
    }, { "./compressedObject": 2, "./compressions": 3, "./crc32": 4, "./reader/readerFor": 22, "./support": 30, "./utf8": 31, "./utils": 32 }], 35: [function(e, n, o) {
      function s(h, c, g) {
        this.name = h, this.dir = g.dir, this.date = g.date, this.comment = g.comment, this.unixPermissions = g.unixPermissions, this.dosPermissions = g.dosPermissions, this._data = c, this._dataBinary = g.binary, this.options = { compression: g.compression, compressionOptions: g.compressionOptions };
      }
      var a = e("./stream/StreamHelper"), i = e("./stream/DataWorker"), d = e("./utf8"), f = e("./compressedObject"), m = e("./stream/GenericWorker");
      s.prototype = { internalStream: function(h) {
        var c = null, g = "string";
        try {
          if (!h) throw new Error("No output type specified.");
          var b = (g = h.toLowerCase()) === "string" || g === "text";
          g !== "binarystring" && g !== "text" || (g = "string"), c = this._decompressWorker();
          var _ = !this._dataBinary;
          _ && !b && (c = c.pipe(new d.Utf8EncodeWorker())), !_ && b && (c = c.pipe(new d.Utf8DecodeWorker()));
        } catch (k) {
          (c = new m("error")).error(k);
        }
        return new a(c, g, "");
      }, async: function(h, c) {
        return this.internalStream(h).accumulate(c);
      }, nodeStream: function(h, c) {
        return this.internalStream(h || "nodebuffer").toNodejsStream(c);
      }, _compressWorker: function(h, c) {
        if (this._data instanceof f && this._data.compression.magic === h.magic) return this._data.getCompressedWorker();
        var g = this._decompressWorker();
        return this._dataBinary || (g = g.pipe(new d.Utf8EncodeWorker())), f.createWorkerFrom(g, h, c);
      }, _decompressWorker: function() {
        return this._data instanceof f ? this._data.getContentWorker() : this._data instanceof m ? this._data : new i(this._data);
      } };
      for (var l = ["asText", "asBinary", "asNodeBuffer", "asUint8Array", "asArrayBuffer"], x = function() {
        throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.");
      }, p = 0; p < l.length; p++) s.prototype[l[p]] = x;
      n.exports = s;
    }, { "./compressedObject": 2, "./stream/DataWorker": 27, "./stream/GenericWorker": 28, "./stream/StreamHelper": 29, "./utf8": 31 }], 36: [function(e, n, o) {
      (function(s) {
        var a, i, d = s.MutationObserver || s.WebKitMutationObserver;
        if (d) {
          var f = 0, m = new d(h), l = s.document.createTextNode("");
          m.observe(l, { characterData: !0 }), a = function() {
            l.data = f = ++f % 2;
          };
        } else if (s.setImmediate || s.MessageChannel === void 0) a = "document" in s && "onreadystatechange" in s.document.createElement("script") ? function() {
          var c = s.document.createElement("script");
          c.onreadystatechange = function() {
            h(), c.onreadystatechange = null, c.parentNode.removeChild(c), c = null;
          }, s.document.documentElement.appendChild(c);
        } : function() {
          setTimeout(h, 0);
        };
        else {
          var x = new s.MessageChannel();
          x.port1.onmessage = h, a = function() {
            x.port2.postMessage(0);
          };
        }
        var p = [];
        function h() {
          var c, g;
          i = !0;
          for (var b = p.length; b; ) {
            for (g = p, p = [], c = -1; ++c < b; ) g[c]();
            b = p.length;
          }
          i = !1;
        }
        n.exports = function(c) {
          p.push(c) !== 1 || i || a();
        };
      }).call(this, typeof Ft < "u" ? Ft : typeof self < "u" ? self : typeof window < "u" ? window : {});
    }, {}], 37: [function(e, n, o) {
      var s = e("immediate");
      function a() {
      }
      var i = {}, d = ["REJECTED"], f = ["FULFILLED"], m = ["PENDING"];
      function l(b) {
        if (typeof b != "function") throw new TypeError("resolver must be a function");
        this.state = m, this.queue = [], this.outcome = void 0, b !== a && c(this, b);
      }
      function x(b, _, k) {
        this.promise = b, typeof _ == "function" && (this.onFulfilled = _, this.callFulfilled = this.otherCallFulfilled), typeof k == "function" && (this.onRejected = k, this.callRejected = this.otherCallRejected);
      }
      function p(b, _, k) {
        s(function() {
          var C;
          try {
            C = _(k);
          } catch (A) {
            return i.reject(b, A);
          }
          C === b ? i.reject(b, new TypeError("Cannot resolve promise with itself")) : i.resolve(b, C);
        });
      }
      function h(b) {
        var _ = b && b.then;
        if (b && (typeof b == "object" || typeof b == "function") && typeof _ == "function") return function() {
          _.apply(b, arguments);
        };
      }
      function c(b, _) {
        var k = !1;
        function C(z) {
          k || (k = !0, i.reject(b, z));
        }
        function A(z) {
          k || (k = !0, i.resolve(b, z));
        }
        var P = g(function() {
          _(A, C);
        });
        P.status === "error" && C(P.value);
      }
      function g(b, _) {
        var k = {};
        try {
          k.value = b(_), k.status = "success";
        } catch (C) {
          k.status = "error", k.value = C;
        }
        return k;
      }
      (n.exports = l).prototype.finally = function(b) {
        if (typeof b != "function") return this;
        var _ = this.constructor;
        return this.then(function(k) {
          return _.resolve(b()).then(function() {
            return k;
          });
        }, function(k) {
          return _.resolve(b()).then(function() {
            throw k;
          });
        });
      }, l.prototype.catch = function(b) {
        return this.then(null, b);
      }, l.prototype.then = function(b, _) {
        if (typeof b != "function" && this.state === f || typeof _ != "function" && this.state === d) return this;
        var k = new this.constructor(a);
        return this.state !== m ? p(k, this.state === f ? b : _, this.outcome) : this.queue.push(new x(k, b, _)), k;
      }, x.prototype.callFulfilled = function(b) {
        i.resolve(this.promise, b);
      }, x.prototype.otherCallFulfilled = function(b) {
        p(this.promise, this.onFulfilled, b);
      }, x.prototype.callRejected = function(b) {
        i.reject(this.promise, b);
      }, x.prototype.otherCallRejected = function(b) {
        p(this.promise, this.onRejected, b);
      }, i.resolve = function(b, _) {
        var k = g(h, _);
        if (k.status === "error") return i.reject(b, k.value);
        var C = k.value;
        if (C) c(b, C);
        else {
          b.state = f, b.outcome = _;
          for (var A = -1, P = b.queue.length; ++A < P; ) b.queue[A].callFulfilled(_);
        }
        return b;
      }, i.reject = function(b, _) {
        b.state = d, b.outcome = _;
        for (var k = -1, C = b.queue.length; ++k < C; ) b.queue[k].callRejected(_);
        return b;
      }, l.resolve = function(b) {
        return b instanceof this ? b : i.resolve(new this(a), b);
      }, l.reject = function(b) {
        var _ = new this(a);
        return i.reject(_, b);
      }, l.all = function(b) {
        var _ = this;
        if (Object.prototype.toString.call(b) !== "[object Array]") return this.reject(new TypeError("must be an array"));
        var k = b.length, C = !1;
        if (!k) return this.resolve([]);
        for (var A = new Array(k), P = 0, z = -1, Z = new this(a); ++z < k; ) M(b[z], z);
        return Z;
        function M(G, le) {
          _.resolve(G).then(function(N) {
            A[le] = N, ++P !== k || C || (C = !0, i.resolve(Z, A));
          }, function(N) {
            C || (C = !0, i.reject(Z, N));
          });
        }
      }, l.race = function(b) {
        var _ = this;
        if (Object.prototype.toString.call(b) !== "[object Array]") return this.reject(new TypeError("must be an array"));
        var k = b.length, C = !1;
        if (!k) return this.resolve([]);
        for (var A = -1, P = new this(a); ++A < k; ) z = b[A], _.resolve(z).then(function(Z) {
          C || (C = !0, i.resolve(P, Z));
        }, function(Z) {
          C || (C = !0, i.reject(P, Z));
        });
        var z;
        return P;
      };
    }, { immediate: 36 }], 38: [function(e, n, o) {
      var s = {};
      (0, e("./lib/utils/common").assign)(s, e("./lib/deflate"), e("./lib/inflate"), e("./lib/zlib/constants")), n.exports = s;
    }, { "./lib/deflate": 39, "./lib/inflate": 40, "./lib/utils/common": 41, "./lib/zlib/constants": 44 }], 39: [function(e, n, o) {
      var s = e("./zlib/deflate"), a = e("./utils/common"), i = e("./utils/strings"), d = e("./zlib/messages"), f = e("./zlib/zstream"), m = Object.prototype.toString, l = 0, x = -1, p = 0, h = 8;
      function c(b) {
        if (!(this instanceof c)) return new c(b);
        this.options = a.assign({ level: x, method: h, chunkSize: 16384, windowBits: 15, memLevel: 8, strategy: p, to: "" }, b || {});
        var _ = this.options;
        _.raw && 0 < _.windowBits ? _.windowBits = -_.windowBits : _.gzip && 0 < _.windowBits && _.windowBits < 16 && (_.windowBits += 16), this.err = 0, this.msg = "", this.ended = !1, this.chunks = [], this.strm = new f(), this.strm.avail_out = 0;
        var k = s.deflateInit2(this.strm, _.level, _.method, _.windowBits, _.memLevel, _.strategy);
        if (k !== l) throw new Error(d[k]);
        if (_.header && s.deflateSetHeader(this.strm, _.header), _.dictionary) {
          var C;
          if (C = typeof _.dictionary == "string" ? i.string2buf(_.dictionary) : m.call(_.dictionary) === "[object ArrayBuffer]" ? new Uint8Array(_.dictionary) : _.dictionary, (k = s.deflateSetDictionary(this.strm, C)) !== l) throw new Error(d[k]);
          this._dict_set = !0;
        }
      }
      function g(b, _) {
        var k = new c(_);
        if (k.push(b, !0), k.err) throw k.msg || d[k.err];
        return k.result;
      }
      c.prototype.push = function(b, _) {
        var k, C, A = this.strm, P = this.options.chunkSize;
        if (this.ended) return !1;
        C = _ === ~~_ ? _ : _ === !0 ? 4 : 0, typeof b == "string" ? A.input = i.string2buf(b) : m.call(b) === "[object ArrayBuffer]" ? A.input = new Uint8Array(b) : A.input = b, A.next_in = 0, A.avail_in = A.input.length;
        do {
          if (A.avail_out === 0 && (A.output = new a.Buf8(P), A.next_out = 0, A.avail_out = P), (k = s.deflate(A, C)) !== 1 && k !== l) return this.onEnd(k), !(this.ended = !0);
          A.avail_out !== 0 && (A.avail_in !== 0 || C !== 4 && C !== 2) || (this.options.to === "string" ? this.onData(i.buf2binstring(a.shrinkBuf(A.output, A.next_out))) : this.onData(a.shrinkBuf(A.output, A.next_out)));
        } while ((0 < A.avail_in || A.avail_out === 0) && k !== 1);
        return C === 4 ? (k = s.deflateEnd(this.strm), this.onEnd(k), this.ended = !0, k === l) : C !== 2 || (this.onEnd(l), !(A.avail_out = 0));
      }, c.prototype.onData = function(b) {
        this.chunks.push(b);
      }, c.prototype.onEnd = function(b) {
        b === l && (this.options.to === "string" ? this.result = this.chunks.join("") : this.result = a.flattenChunks(this.chunks)), this.chunks = [], this.err = b, this.msg = this.strm.msg;
      }, o.Deflate = c, o.deflate = g, o.deflateRaw = function(b, _) {
        return (_ = _ || {}).raw = !0, g(b, _);
      }, o.gzip = function(b, _) {
        return (_ = _ || {}).gzip = !0, g(b, _);
      };
    }, { "./utils/common": 41, "./utils/strings": 42, "./zlib/deflate": 46, "./zlib/messages": 51, "./zlib/zstream": 53 }], 40: [function(e, n, o) {
      var s = e("./zlib/inflate"), a = e("./utils/common"), i = e("./utils/strings"), d = e("./zlib/constants"), f = e("./zlib/messages"), m = e("./zlib/zstream"), l = e("./zlib/gzheader"), x = Object.prototype.toString;
      function p(c) {
        if (!(this instanceof p)) return new p(c);
        this.options = a.assign({ chunkSize: 16384, windowBits: 0, to: "" }, c || {});
        var g = this.options;
        g.raw && 0 <= g.windowBits && g.windowBits < 16 && (g.windowBits = -g.windowBits, g.windowBits === 0 && (g.windowBits = -15)), !(0 <= g.windowBits && g.windowBits < 16) || c && c.windowBits || (g.windowBits += 32), 15 < g.windowBits && g.windowBits < 48 && !(15 & g.windowBits) && (g.windowBits |= 15), this.err = 0, this.msg = "", this.ended = !1, this.chunks = [], this.strm = new m(), this.strm.avail_out = 0;
        var b = s.inflateInit2(this.strm, g.windowBits);
        if (b !== d.Z_OK) throw new Error(f[b]);
        this.header = new l(), s.inflateGetHeader(this.strm, this.header);
      }
      function h(c, g) {
        var b = new p(g);
        if (b.push(c, !0), b.err) throw b.msg || f[b.err];
        return b.result;
      }
      p.prototype.push = function(c, g) {
        var b, _, k, C, A, P, z = this.strm, Z = this.options.chunkSize, M = this.options.dictionary, G = !1;
        if (this.ended) return !1;
        _ = g === ~~g ? g : g === !0 ? d.Z_FINISH : d.Z_NO_FLUSH, typeof c == "string" ? z.input = i.binstring2buf(c) : x.call(c) === "[object ArrayBuffer]" ? z.input = new Uint8Array(c) : z.input = c, z.next_in = 0, z.avail_in = z.input.length;
        do {
          if (z.avail_out === 0 && (z.output = new a.Buf8(Z), z.next_out = 0, z.avail_out = Z), (b = s.inflate(z, d.Z_NO_FLUSH)) === d.Z_NEED_DICT && M && (P = typeof M == "string" ? i.string2buf(M) : x.call(M) === "[object ArrayBuffer]" ? new Uint8Array(M) : M, b = s.inflateSetDictionary(this.strm, P)), b === d.Z_BUF_ERROR && G === !0 && (b = d.Z_OK, G = !1), b !== d.Z_STREAM_END && b !== d.Z_OK) return this.onEnd(b), !(this.ended = !0);
          z.next_out && (z.avail_out !== 0 && b !== d.Z_STREAM_END && (z.avail_in !== 0 || _ !== d.Z_FINISH && _ !== d.Z_SYNC_FLUSH) || (this.options.to === "string" ? (k = i.utf8border(z.output, z.next_out), C = z.next_out - k, A = i.buf2string(z.output, k), z.next_out = C, z.avail_out = Z - C, C && a.arraySet(z.output, z.output, k, C, 0), this.onData(A)) : this.onData(a.shrinkBuf(z.output, z.next_out)))), z.avail_in === 0 && z.avail_out === 0 && (G = !0);
        } while ((0 < z.avail_in || z.avail_out === 0) && b !== d.Z_STREAM_END);
        return b === d.Z_STREAM_END && (_ = d.Z_FINISH), _ === d.Z_FINISH ? (b = s.inflateEnd(this.strm), this.onEnd(b), this.ended = !0, b === d.Z_OK) : _ !== d.Z_SYNC_FLUSH || (this.onEnd(d.Z_OK), !(z.avail_out = 0));
      }, p.prototype.onData = function(c) {
        this.chunks.push(c);
      }, p.prototype.onEnd = function(c) {
        c === d.Z_OK && (this.options.to === "string" ? this.result = this.chunks.join("") : this.result = a.flattenChunks(this.chunks)), this.chunks = [], this.err = c, this.msg = this.strm.msg;
      }, o.Inflate = p, o.inflate = h, o.inflateRaw = function(c, g) {
        return (g = g || {}).raw = !0, h(c, g);
      }, o.ungzip = h;
    }, { "./utils/common": 41, "./utils/strings": 42, "./zlib/constants": 44, "./zlib/gzheader": 47, "./zlib/inflate": 49, "./zlib/messages": 51, "./zlib/zstream": 53 }], 41: [function(e, n, o) {
      var s = typeof Uint8Array < "u" && typeof Uint16Array < "u" && typeof Int32Array < "u";
      o.assign = function(d) {
        for (var f = Array.prototype.slice.call(arguments, 1); f.length; ) {
          var m = f.shift();
          if (m) {
            if (typeof m != "object") throw new TypeError(m + "must be non-object");
            for (var l in m) m.hasOwnProperty(l) && (d[l] = m[l]);
          }
        }
        return d;
      }, o.shrinkBuf = function(d, f) {
        return d.length === f ? d : d.subarray ? d.subarray(0, f) : (d.length = f, d);
      };
      var a = { arraySet: function(d, f, m, l, x) {
        if (f.subarray && d.subarray) d.set(f.subarray(m, m + l), x);
        else for (var p = 0; p < l; p++) d[x + p] = f[m + p];
      }, flattenChunks: function(d) {
        var f, m, l, x, p, h;
        for (f = l = 0, m = d.length; f < m; f++) l += d[f].length;
        for (h = new Uint8Array(l), f = x = 0, m = d.length; f < m; f++) p = d[f], h.set(p, x), x += p.length;
        return h;
      } }, i = { arraySet: function(d, f, m, l, x) {
        for (var p = 0; p < l; p++) d[x + p] = f[m + p];
      }, flattenChunks: function(d) {
        return [].concat.apply([], d);
      } };
      o.setTyped = function(d) {
        d ? (o.Buf8 = Uint8Array, o.Buf16 = Uint16Array, o.Buf32 = Int32Array, o.assign(o, a)) : (o.Buf8 = Array, o.Buf16 = Array, o.Buf32 = Array, o.assign(o, i));
      }, o.setTyped(s);
    }, {}], 42: [function(e, n, o) {
      var s = e("./common"), a = !0, i = !0;
      try {
        String.fromCharCode.apply(null, [0]);
      } catch {
        a = !1;
      }
      try {
        String.fromCharCode.apply(null, new Uint8Array(1));
      } catch {
        i = !1;
      }
      for (var d = new s.Buf8(256), f = 0; f < 256; f++) d[f] = 252 <= f ? 6 : 248 <= f ? 5 : 240 <= f ? 4 : 224 <= f ? 3 : 192 <= f ? 2 : 1;
      function m(l, x) {
        if (x < 65537 && (l.subarray && i || !l.subarray && a)) return String.fromCharCode.apply(null, s.shrinkBuf(l, x));
        for (var p = "", h = 0; h < x; h++) p += String.fromCharCode(l[h]);
        return p;
      }
      d[254] = d[254] = 1, o.string2buf = function(l) {
        var x, p, h, c, g, b = l.length, _ = 0;
        for (c = 0; c < b; c++) (64512 & (p = l.charCodeAt(c))) == 55296 && c + 1 < b && (64512 & (h = l.charCodeAt(c + 1))) == 56320 && (p = 65536 + (p - 55296 << 10) + (h - 56320), c++), _ += p < 128 ? 1 : p < 2048 ? 2 : p < 65536 ? 3 : 4;
        for (x = new s.Buf8(_), c = g = 0; g < _; c++) (64512 & (p = l.charCodeAt(c))) == 55296 && c + 1 < b && (64512 & (h = l.charCodeAt(c + 1))) == 56320 && (p = 65536 + (p - 55296 << 10) + (h - 56320), c++), p < 128 ? x[g++] = p : (p < 2048 ? x[g++] = 192 | p >>> 6 : (p < 65536 ? x[g++] = 224 | p >>> 12 : (x[g++] = 240 | p >>> 18, x[g++] = 128 | p >>> 12 & 63), x[g++] = 128 | p >>> 6 & 63), x[g++] = 128 | 63 & p);
        return x;
      }, o.buf2binstring = function(l) {
        return m(l, l.length);
      }, o.binstring2buf = function(l) {
        for (var x = new s.Buf8(l.length), p = 0, h = x.length; p < h; p++) x[p] = l.charCodeAt(p);
        return x;
      }, o.buf2string = function(l, x) {
        var p, h, c, g, b = x || l.length, _ = new Array(2 * b);
        for (p = h = 0; p < b; ) if ((c = l[p++]) < 128) _[h++] = c;
        else if (4 < (g = d[c])) _[h++] = 65533, p += g - 1;
        else {
          for (c &= g === 2 ? 31 : g === 3 ? 15 : 7; 1 < g && p < b; ) c = c << 6 | 63 & l[p++], g--;
          1 < g ? _[h++] = 65533 : c < 65536 ? _[h++] = c : (c -= 65536, _[h++] = 55296 | c >> 10 & 1023, _[h++] = 56320 | 1023 & c);
        }
        return m(_, h);
      }, o.utf8border = function(l, x) {
        var p;
        for ((x = x || l.length) > l.length && (x = l.length), p = x - 1; 0 <= p && (192 & l[p]) == 128; ) p--;
        return p < 0 || p === 0 ? x : p + d[l[p]] > x ? p : x;
      };
    }, { "./common": 41 }], 43: [function(e, n, o) {
      n.exports = function(s, a, i, d) {
        for (var f = 65535 & s | 0, m = s >>> 16 & 65535 | 0, l = 0; i !== 0; ) {
          for (i -= l = 2e3 < i ? 2e3 : i; m = m + (f = f + a[d++] | 0) | 0, --l; ) ;
          f %= 65521, m %= 65521;
        }
        return f | m << 16 | 0;
      };
    }, {}], 44: [function(e, n, o) {
      n.exports = { Z_NO_FLUSH: 0, Z_PARTIAL_FLUSH: 1, Z_SYNC_FLUSH: 2, Z_FULL_FLUSH: 3, Z_FINISH: 4, Z_BLOCK: 5, Z_TREES: 6, Z_OK: 0, Z_STREAM_END: 1, Z_NEED_DICT: 2, Z_ERRNO: -1, Z_STREAM_ERROR: -2, Z_DATA_ERROR: -3, Z_BUF_ERROR: -5, Z_NO_COMPRESSION: 0, Z_BEST_SPEED: 1, Z_BEST_COMPRESSION: 9, Z_DEFAULT_COMPRESSION: -1, Z_FILTERED: 1, Z_HUFFMAN_ONLY: 2, Z_RLE: 3, Z_FIXED: 4, Z_DEFAULT_STRATEGY: 0, Z_BINARY: 0, Z_TEXT: 1, Z_UNKNOWN: 2, Z_DEFLATED: 8 };
    }, {}], 45: [function(e, n, o) {
      var s = function() {
        for (var a, i = [], d = 0; d < 256; d++) {
          a = d;
          for (var f = 0; f < 8; f++) a = 1 & a ? 3988292384 ^ a >>> 1 : a >>> 1;
          i[d] = a;
        }
        return i;
      }();
      n.exports = function(a, i, d, f) {
        var m = s, l = f + d;
        a ^= -1;
        for (var x = f; x < l; x++) a = a >>> 8 ^ m[255 & (a ^ i[x])];
        return -1 ^ a;
      };
    }, {}], 46: [function(e, n, o) {
      var s, a = e("../utils/common"), i = e("./trees"), d = e("./adler32"), f = e("./crc32"), m = e("./messages"), l = 0, x = 4, p = 0, h = -2, c = -1, g = 4, b = 2, _ = 8, k = 9, C = 286, A = 30, P = 19, z = 2 * C + 1, Z = 15, M = 3, G = 258, le = G + M + 1, N = 42, L = 113, y = 1, W = 2, re = 3, F = 4;
      function me(u, V) {
        return u.msg = m[V], V;
      }
      function U(u) {
        return (u << 1) - (4 < u ? 9 : 0);
      }
      function te(u) {
        for (var V = u.length; 0 <= --V; ) u[V] = 0;
      }
      function I(u) {
        var V = u.state, H = V.pending;
        H > u.avail_out && (H = u.avail_out), H !== 0 && (a.arraySet(u.output, V.pending_buf, V.pending_out, H, u.next_out), u.next_out += H, V.pending_out += H, u.total_out += H, u.avail_out -= H, V.pending -= H, V.pending === 0 && (V.pending_out = 0));
      }
      function O(u, V) {
        i._tr_flush_block(u, 0 <= u.block_start ? u.block_start : -1, u.strstart - u.block_start, V), u.block_start = u.strstart, I(u.strm);
      }
      function T(u, V) {
        u.pending_buf[u.pending++] = V;
      }
      function J(u, V) {
        u.pending_buf[u.pending++] = V >>> 8 & 255, u.pending_buf[u.pending++] = 255 & V;
      }
      function $(u, V) {
        var H, E, S = u.max_chain_length, R = u.strstart, X = u.prev_length, ee = u.nice_match, D = u.strstart > u.w_size - le ? u.strstart - (u.w_size - le) : 0, ne = u.window, ue = u.w_mask, se = u.prev, pe = u.strstart + G, Re = ne[R + X - 1], Ne = ne[R + X];
        u.prev_length >= u.good_match && (S >>= 2), ee > u.lookahead && (ee = u.lookahead);
        do
          if (ne[(H = V) + X] === Ne && ne[H + X - 1] === Re && ne[H] === ne[R] && ne[++H] === ne[R + 1]) {
            R += 2, H++;
            do
              ;
            while (ne[++R] === ne[++H] && ne[++R] === ne[++H] && ne[++R] === ne[++H] && ne[++R] === ne[++H] && ne[++R] === ne[++H] && ne[++R] === ne[++H] && ne[++R] === ne[++H] && ne[++R] === ne[++H] && R < pe);
            if (E = G - (pe - R), R = pe - G, X < E) {
              if (u.match_start = V, ee <= (X = E)) break;
              Re = ne[R + X - 1], Ne = ne[R + X];
            }
          }
        while ((V = se[V & ue]) > D && --S != 0);
        return X <= u.lookahead ? X : u.lookahead;
      }
      function Ee(u) {
        var V, H, E, S, R, X, ee, D, ne, ue, se = u.w_size;
        do {
          if (S = u.window_size - u.lookahead - u.strstart, u.strstart >= se + (se - le)) {
            for (a.arraySet(u.window, u.window, se, se, 0), u.match_start -= se, u.strstart -= se, u.block_start -= se, V = H = u.hash_size; E = u.head[--V], u.head[V] = se <= E ? E - se : 0, --H; ) ;
            for (V = H = se; E = u.prev[--V], u.prev[V] = se <= E ? E - se : 0, --H; ) ;
            S += se;
          }
          if (u.strm.avail_in === 0) break;
          if (X = u.strm, ee = u.window, D = u.strstart + u.lookahead, ne = S, ue = void 0, ue = X.avail_in, ne < ue && (ue = ne), H = ue === 0 ? 0 : (X.avail_in -= ue, a.arraySet(ee, X.input, X.next_in, ue, D), X.state.wrap === 1 ? X.adler = d(X.adler, ee, ue, D) : X.state.wrap === 2 && (X.adler = f(X.adler, ee, ue, D)), X.next_in += ue, X.total_in += ue, ue), u.lookahead += H, u.lookahead + u.insert >= M) for (R = u.strstart - u.insert, u.ins_h = u.window[R], u.ins_h = (u.ins_h << u.hash_shift ^ u.window[R + 1]) & u.hash_mask; u.insert && (u.ins_h = (u.ins_h << u.hash_shift ^ u.window[R + M - 1]) & u.hash_mask, u.prev[R & u.w_mask] = u.head[u.ins_h], u.head[u.ins_h] = R, R++, u.insert--, !(u.lookahead + u.insert < M)); ) ;
        } while (u.lookahead < le && u.strm.avail_in !== 0);
      }
      function Q(u, V) {
        for (var H, E; ; ) {
          if (u.lookahead < le) {
            if (Ee(u), u.lookahead < le && V === l) return y;
            if (u.lookahead === 0) break;
          }
          if (H = 0, u.lookahead >= M && (u.ins_h = (u.ins_h << u.hash_shift ^ u.window[u.strstart + M - 1]) & u.hash_mask, H = u.prev[u.strstart & u.w_mask] = u.head[u.ins_h], u.head[u.ins_h] = u.strstart), H !== 0 && u.strstart - H <= u.w_size - le && (u.match_length = $(u, H)), u.match_length >= M) if (E = i._tr_tally(u, u.strstart - u.match_start, u.match_length - M), u.lookahead -= u.match_length, u.match_length <= u.max_lazy_match && u.lookahead >= M) {
            for (u.match_length--; u.strstart++, u.ins_h = (u.ins_h << u.hash_shift ^ u.window[u.strstart + M - 1]) & u.hash_mask, H = u.prev[u.strstart & u.w_mask] = u.head[u.ins_h], u.head[u.ins_h] = u.strstart, --u.match_length != 0; ) ;
            u.strstart++;
          } else u.strstart += u.match_length, u.match_length = 0, u.ins_h = u.window[u.strstart], u.ins_h = (u.ins_h << u.hash_shift ^ u.window[u.strstart + 1]) & u.hash_mask;
          else E = i._tr_tally(u, 0, u.window[u.strstart]), u.lookahead--, u.strstart++;
          if (E && (O(u, !1), u.strm.avail_out === 0)) return y;
        }
        return u.insert = u.strstart < M - 1 ? u.strstart : M - 1, V === x ? (O(u, !0), u.strm.avail_out === 0 ? re : F) : u.last_lit && (O(u, !1), u.strm.avail_out === 0) ? y : W;
      }
      function K(u, V) {
        for (var H, E, S; ; ) {
          if (u.lookahead < le) {
            if (Ee(u), u.lookahead < le && V === l) return y;
            if (u.lookahead === 0) break;
          }
          if (H = 0, u.lookahead >= M && (u.ins_h = (u.ins_h << u.hash_shift ^ u.window[u.strstart + M - 1]) & u.hash_mask, H = u.prev[u.strstart & u.w_mask] = u.head[u.ins_h], u.head[u.ins_h] = u.strstart), u.prev_length = u.match_length, u.prev_match = u.match_start, u.match_length = M - 1, H !== 0 && u.prev_length < u.max_lazy_match && u.strstart - H <= u.w_size - le && (u.match_length = $(u, H), u.match_length <= 5 && (u.strategy === 1 || u.match_length === M && 4096 < u.strstart - u.match_start) && (u.match_length = M - 1)), u.prev_length >= M && u.match_length <= u.prev_length) {
            for (S = u.strstart + u.lookahead - M, E = i._tr_tally(u, u.strstart - 1 - u.prev_match, u.prev_length - M), u.lookahead -= u.prev_length - 1, u.prev_length -= 2; ++u.strstart <= S && (u.ins_h = (u.ins_h << u.hash_shift ^ u.window[u.strstart + M - 1]) & u.hash_mask, H = u.prev[u.strstart & u.w_mask] = u.head[u.ins_h], u.head[u.ins_h] = u.strstart), --u.prev_length != 0; ) ;
            if (u.match_available = 0, u.match_length = M - 1, u.strstart++, E && (O(u, !1), u.strm.avail_out === 0)) return y;
          } else if (u.match_available) {
            if ((E = i._tr_tally(u, 0, u.window[u.strstart - 1])) && O(u, !1), u.strstart++, u.lookahead--, u.strm.avail_out === 0) return y;
          } else u.match_available = 1, u.strstart++, u.lookahead--;
        }
        return u.match_available && (E = i._tr_tally(u, 0, u.window[u.strstart - 1]), u.match_available = 0), u.insert = u.strstart < M - 1 ? u.strstart : M - 1, V === x ? (O(u, !0), u.strm.avail_out === 0 ? re : F) : u.last_lit && (O(u, !1), u.strm.avail_out === 0) ? y : W;
      }
      function oe(u, V, H, E, S) {
        this.good_length = u, this.max_lazy = V, this.nice_length = H, this.max_chain = E, this.func = S;
      }
      function ye() {
        this.strm = null, this.status = 0, this.pending_buf = null, this.pending_buf_size = 0, this.pending_out = 0, this.pending = 0, this.wrap = 0, this.gzhead = null, this.gzindex = 0, this.method = _, this.last_flush = -1, this.w_size = 0, this.w_bits = 0, this.w_mask = 0, this.window = null, this.window_size = 0, this.prev = null, this.head = null, this.ins_h = 0, this.hash_size = 0, this.hash_bits = 0, this.hash_mask = 0, this.hash_shift = 0, this.block_start = 0, this.match_length = 0, this.prev_match = 0, this.match_available = 0, this.strstart = 0, this.match_start = 0, this.lookahead = 0, this.prev_length = 0, this.max_chain_length = 0, this.max_lazy_match = 0, this.level = 0, this.strategy = 0, this.good_match = 0, this.nice_match = 0, this.dyn_ltree = new a.Buf16(2 * z), this.dyn_dtree = new a.Buf16(2 * (2 * A + 1)), this.bl_tree = new a.Buf16(2 * (2 * P + 1)), te(this.dyn_ltree), te(this.dyn_dtree), te(this.bl_tree), this.l_desc = null, this.d_desc = null, this.bl_desc = null, this.bl_count = new a.Buf16(Z + 1), this.heap = new a.Buf16(2 * C + 1), te(this.heap), this.heap_len = 0, this.heap_max = 0, this.depth = new a.Buf16(2 * C + 1), te(this.depth), this.l_buf = 0, this.lit_bufsize = 0, this.last_lit = 0, this.d_buf = 0, this.opt_len = 0, this.static_len = 0, this.matches = 0, this.insert = 0, this.bi_buf = 0, this.bi_valid = 0;
      }
      function ve(u) {
        var V;
        return u && u.state ? (u.total_in = u.total_out = 0, u.data_type = b, (V = u.state).pending = 0, V.pending_out = 0, V.wrap < 0 && (V.wrap = -V.wrap), V.status = V.wrap ? N : L, u.adler = V.wrap === 2 ? 0 : 1, V.last_flush = l, i._tr_init(V), p) : me(u, h);
      }
      function _e(u) {
        var V = ve(u);
        return V === p && function(H) {
          H.window_size = 2 * H.w_size, te(H.head), H.max_lazy_match = s[H.level].max_lazy, H.good_match = s[H.level].good_length, H.nice_match = s[H.level].nice_length, H.max_chain_length = s[H.level].max_chain, H.strstart = 0, H.block_start = 0, H.lookahead = 0, H.insert = 0, H.match_length = H.prev_length = M - 1, H.match_available = 0, H.ins_h = 0;
        }(u.state), V;
      }
      function De(u, V, H, E, S, R) {
        if (!u) return h;
        var X = 1;
        if (V === c && (V = 6), E < 0 ? (X = 0, E = -E) : 15 < E && (X = 2, E -= 16), S < 1 || k < S || H !== _ || E < 8 || 15 < E || V < 0 || 9 < V || R < 0 || g < R) return me(u, h);
        E === 8 && (E = 9);
        var ee = new ye();
        return (u.state = ee).strm = u, ee.wrap = X, ee.gzhead = null, ee.w_bits = E, ee.w_size = 1 << ee.w_bits, ee.w_mask = ee.w_size - 1, ee.hash_bits = S + 7, ee.hash_size = 1 << ee.hash_bits, ee.hash_mask = ee.hash_size - 1, ee.hash_shift = ~~((ee.hash_bits + M - 1) / M), ee.window = new a.Buf8(2 * ee.w_size), ee.head = new a.Buf16(ee.hash_size), ee.prev = new a.Buf16(ee.w_size), ee.lit_bufsize = 1 << S + 6, ee.pending_buf_size = 4 * ee.lit_bufsize, ee.pending_buf = new a.Buf8(ee.pending_buf_size), ee.d_buf = 1 * ee.lit_bufsize, ee.l_buf = 3 * ee.lit_bufsize, ee.level = V, ee.strategy = R, ee.method = H, _e(u);
      }
      s = [new oe(0, 0, 0, 0, function(u, V) {
        var H = 65535;
        for (H > u.pending_buf_size - 5 && (H = u.pending_buf_size - 5); ; ) {
          if (u.lookahead <= 1) {
            if (Ee(u), u.lookahead === 0 && V === l) return y;
            if (u.lookahead === 0) break;
          }
          u.strstart += u.lookahead, u.lookahead = 0;
          var E = u.block_start + H;
          if ((u.strstart === 0 || u.strstart >= E) && (u.lookahead = u.strstart - E, u.strstart = E, O(u, !1), u.strm.avail_out === 0) || u.strstart - u.block_start >= u.w_size - le && (O(u, !1), u.strm.avail_out === 0)) return y;
        }
        return u.insert = 0, V === x ? (O(u, !0), u.strm.avail_out === 0 ? re : F) : (u.strstart > u.block_start && (O(u, !1), u.strm.avail_out), y);
      }), new oe(4, 4, 8, 4, Q), new oe(4, 5, 16, 8, Q), new oe(4, 6, 32, 32, Q), new oe(4, 4, 16, 16, K), new oe(8, 16, 32, 32, K), new oe(8, 16, 128, 128, K), new oe(8, 32, 128, 256, K), new oe(32, 128, 258, 1024, K), new oe(32, 258, 258, 4096, K)], o.deflateInit = function(u, V) {
        return De(u, V, _, 15, 8, 0);
      }, o.deflateInit2 = De, o.deflateReset = _e, o.deflateResetKeep = ve, o.deflateSetHeader = function(u, V) {
        return u && u.state ? u.state.wrap !== 2 ? h : (u.state.gzhead = V, p) : h;
      }, o.deflate = function(u, V) {
        var H, E, S, R;
        if (!u || !u.state || 5 < V || V < 0) return u ? me(u, h) : h;
        if (E = u.state, !u.output || !u.input && u.avail_in !== 0 || E.status === 666 && V !== x) return me(u, u.avail_out === 0 ? -5 : h);
        if (E.strm = u, H = E.last_flush, E.last_flush = V, E.status === N) if (E.wrap === 2) u.adler = 0, T(E, 31), T(E, 139), T(E, 8), E.gzhead ? (T(E, (E.gzhead.text ? 1 : 0) + (E.gzhead.hcrc ? 2 : 0) + (E.gzhead.extra ? 4 : 0) + (E.gzhead.name ? 8 : 0) + (E.gzhead.comment ? 16 : 0)), T(E, 255 & E.gzhead.time), T(E, E.gzhead.time >> 8 & 255), T(E, E.gzhead.time >> 16 & 255), T(E, E.gzhead.time >> 24 & 255), T(E, E.level === 9 ? 2 : 2 <= E.strategy || E.level < 2 ? 4 : 0), T(E, 255 & E.gzhead.os), E.gzhead.extra && E.gzhead.extra.length && (T(E, 255 & E.gzhead.extra.length), T(E, E.gzhead.extra.length >> 8 & 255)), E.gzhead.hcrc && (u.adler = f(u.adler, E.pending_buf, E.pending, 0)), E.gzindex = 0, E.status = 69) : (T(E, 0), T(E, 0), T(E, 0), T(E, 0), T(E, 0), T(E, E.level === 9 ? 2 : 2 <= E.strategy || E.level < 2 ? 4 : 0), T(E, 3), E.status = L);
        else {
          var X = _ + (E.w_bits - 8 << 4) << 8;
          X |= (2 <= E.strategy || E.level < 2 ? 0 : E.level < 6 ? 1 : E.level === 6 ? 2 : 3) << 6, E.strstart !== 0 && (X |= 32), X += 31 - X % 31, E.status = L, J(E, X), E.strstart !== 0 && (J(E, u.adler >>> 16), J(E, 65535 & u.adler)), u.adler = 1;
        }
        if (E.status === 69) if (E.gzhead.extra) {
          for (S = E.pending; E.gzindex < (65535 & E.gzhead.extra.length) && (E.pending !== E.pending_buf_size || (E.gzhead.hcrc && E.pending > S && (u.adler = f(u.adler, E.pending_buf, E.pending - S, S)), I(u), S = E.pending, E.pending !== E.pending_buf_size)); ) T(E, 255 & E.gzhead.extra[E.gzindex]), E.gzindex++;
          E.gzhead.hcrc && E.pending > S && (u.adler = f(u.adler, E.pending_buf, E.pending - S, S)), E.gzindex === E.gzhead.extra.length && (E.gzindex = 0, E.status = 73);
        } else E.status = 73;
        if (E.status === 73) if (E.gzhead.name) {
          S = E.pending;
          do {
            if (E.pending === E.pending_buf_size && (E.gzhead.hcrc && E.pending > S && (u.adler = f(u.adler, E.pending_buf, E.pending - S, S)), I(u), S = E.pending, E.pending === E.pending_buf_size)) {
              R = 1;
              break;
            }
            R = E.gzindex < E.gzhead.name.length ? 255 & E.gzhead.name.charCodeAt(E.gzindex++) : 0, T(E, R);
          } while (R !== 0);
          E.gzhead.hcrc && E.pending > S && (u.adler = f(u.adler, E.pending_buf, E.pending - S, S)), R === 0 && (E.gzindex = 0, E.status = 91);
        } else E.status = 91;
        if (E.status === 91) if (E.gzhead.comment) {
          S = E.pending;
          do {
            if (E.pending === E.pending_buf_size && (E.gzhead.hcrc && E.pending > S && (u.adler = f(u.adler, E.pending_buf, E.pending - S, S)), I(u), S = E.pending, E.pending === E.pending_buf_size)) {
              R = 1;
              break;
            }
            R = E.gzindex < E.gzhead.comment.length ? 255 & E.gzhead.comment.charCodeAt(E.gzindex++) : 0, T(E, R);
          } while (R !== 0);
          E.gzhead.hcrc && E.pending > S && (u.adler = f(u.adler, E.pending_buf, E.pending - S, S)), R === 0 && (E.status = 103);
        } else E.status = 103;
        if (E.status === 103 && (E.gzhead.hcrc ? (E.pending + 2 > E.pending_buf_size && I(u), E.pending + 2 <= E.pending_buf_size && (T(E, 255 & u.adler), T(E, u.adler >> 8 & 255), u.adler = 0, E.status = L)) : E.status = L), E.pending !== 0) {
          if (I(u), u.avail_out === 0) return E.last_flush = -1, p;
        } else if (u.avail_in === 0 && U(V) <= U(H) && V !== x) return me(u, -5);
        if (E.status === 666 && u.avail_in !== 0) return me(u, -5);
        if (u.avail_in !== 0 || E.lookahead !== 0 || V !== l && E.status !== 666) {
          var ee = E.strategy === 2 ? function(D, ne) {
            for (var ue; ; ) {
              if (D.lookahead === 0 && (Ee(D), D.lookahead === 0)) {
                if (ne === l) return y;
                break;
              }
              if (D.match_length = 0, ue = i._tr_tally(D, 0, D.window[D.strstart]), D.lookahead--, D.strstart++, ue && (O(D, !1), D.strm.avail_out === 0)) return y;
            }
            return D.insert = 0, ne === x ? (O(D, !0), D.strm.avail_out === 0 ? re : F) : D.last_lit && (O(D, !1), D.strm.avail_out === 0) ? y : W;
          }(E, V) : E.strategy === 3 ? function(D, ne) {
            for (var ue, se, pe, Re, Ne = D.window; ; ) {
              if (D.lookahead <= G) {
                if (Ee(D), D.lookahead <= G && ne === l) return y;
                if (D.lookahead === 0) break;
              }
              if (D.match_length = 0, D.lookahead >= M && 0 < D.strstart && (se = Ne[pe = D.strstart - 1]) === Ne[++pe] && se === Ne[++pe] && se === Ne[++pe]) {
                Re = D.strstart + G;
                do
                  ;
                while (se === Ne[++pe] && se === Ne[++pe] && se === Ne[++pe] && se === Ne[++pe] && se === Ne[++pe] && se === Ne[++pe] && se === Ne[++pe] && se === Ne[++pe] && pe < Re);
                D.match_length = G - (Re - pe), D.match_length > D.lookahead && (D.match_length = D.lookahead);
              }
              if (D.match_length >= M ? (ue = i._tr_tally(D, 1, D.match_length - M), D.lookahead -= D.match_length, D.strstart += D.match_length, D.match_length = 0) : (ue = i._tr_tally(D, 0, D.window[D.strstart]), D.lookahead--, D.strstart++), ue && (O(D, !1), D.strm.avail_out === 0)) return y;
            }
            return D.insert = 0, ne === x ? (O(D, !0), D.strm.avail_out === 0 ? re : F) : D.last_lit && (O(D, !1), D.strm.avail_out === 0) ? y : W;
          }(E, V) : s[E.level].func(E, V);
          if (ee !== re && ee !== F || (E.status = 666), ee === y || ee === re) return u.avail_out === 0 && (E.last_flush = -1), p;
          if (ee === W && (V === 1 ? i._tr_align(E) : V !== 5 && (i._tr_stored_block(E, 0, 0, !1), V === 3 && (te(E.head), E.lookahead === 0 && (E.strstart = 0, E.block_start = 0, E.insert = 0))), I(u), u.avail_out === 0)) return E.last_flush = -1, p;
        }
        return V !== x ? p : E.wrap <= 0 ? 1 : (E.wrap === 2 ? (T(E, 255 & u.adler), T(E, u.adler >> 8 & 255), T(E, u.adler >> 16 & 255), T(E, u.adler >> 24 & 255), T(E, 255 & u.total_in), T(E, u.total_in >> 8 & 255), T(E, u.total_in >> 16 & 255), T(E, u.total_in >> 24 & 255)) : (J(E, u.adler >>> 16), J(E, 65535 & u.adler)), I(u), 0 < E.wrap && (E.wrap = -E.wrap), E.pending !== 0 ? p : 1);
      }, o.deflateEnd = function(u) {
        var V;
        return u && u.state ? (V = u.state.status) !== N && V !== 69 && V !== 73 && V !== 91 && V !== 103 && V !== L && V !== 666 ? me(u, h) : (u.state = null, V === L ? me(u, -3) : p) : h;
      }, o.deflateSetDictionary = function(u, V) {
        var H, E, S, R, X, ee, D, ne, ue = V.length;
        if (!u || !u.state || (R = (H = u.state).wrap) === 2 || R === 1 && H.status !== N || H.lookahead) return h;
        for (R === 1 && (u.adler = d(u.adler, V, ue, 0)), H.wrap = 0, ue >= H.w_size && (R === 0 && (te(H.head), H.strstart = 0, H.block_start = 0, H.insert = 0), ne = new a.Buf8(H.w_size), a.arraySet(ne, V, ue - H.w_size, H.w_size, 0), V = ne, ue = H.w_size), X = u.avail_in, ee = u.next_in, D = u.input, u.avail_in = ue, u.next_in = 0, u.input = V, Ee(H); H.lookahead >= M; ) {
          for (E = H.strstart, S = H.lookahead - (M - 1); H.ins_h = (H.ins_h << H.hash_shift ^ H.window[E + M - 1]) & H.hash_mask, H.prev[E & H.w_mask] = H.head[H.ins_h], H.head[H.ins_h] = E, E++, --S; ) ;
          H.strstart = E, H.lookahead = M - 1, Ee(H);
        }
        return H.strstart += H.lookahead, H.block_start = H.strstart, H.insert = H.lookahead, H.lookahead = 0, H.match_length = H.prev_length = M - 1, H.match_available = 0, u.next_in = ee, u.input = D, u.avail_in = X, H.wrap = R, p;
      }, o.deflateInfo = "pako deflate (from Nodeca project)";
    }, { "../utils/common": 41, "./adler32": 43, "./crc32": 45, "./messages": 51, "./trees": 52 }], 47: [function(e, n, o) {
      n.exports = function() {
        this.text = 0, this.time = 0, this.xflags = 0, this.os = 0, this.extra = null, this.extra_len = 0, this.name = "", this.comment = "", this.hcrc = 0, this.done = !1;
      };
    }, {}], 48: [function(e, n, o) {
      n.exports = function(s, a) {
        var i, d, f, m, l, x, p, h, c, g, b, _, k, C, A, P, z, Z, M, G, le, N, L, y, W;
        i = s.state, d = s.next_in, y = s.input, f = d + (s.avail_in - 5), m = s.next_out, W = s.output, l = m - (a - s.avail_out), x = m + (s.avail_out - 257), p = i.dmax, h = i.wsize, c = i.whave, g = i.wnext, b = i.window, _ = i.hold, k = i.bits, C = i.lencode, A = i.distcode, P = (1 << i.lenbits) - 1, z = (1 << i.distbits) - 1;
        e: do {
          k < 15 && (_ += y[d++] << k, k += 8, _ += y[d++] << k, k += 8), Z = C[_ & P];
          t: for (; ; ) {
            if (_ >>>= M = Z >>> 24, k -= M, (M = Z >>> 16 & 255) === 0) W[m++] = 65535 & Z;
            else {
              if (!(16 & M)) {
                if (!(64 & M)) {
                  Z = C[(65535 & Z) + (_ & (1 << M) - 1)];
                  continue t;
                }
                if (32 & M) {
                  i.mode = 12;
                  break e;
                }
                s.msg = "invalid literal/length code", i.mode = 30;
                break e;
              }
              G = 65535 & Z, (M &= 15) && (k < M && (_ += y[d++] << k, k += 8), G += _ & (1 << M) - 1, _ >>>= M, k -= M), k < 15 && (_ += y[d++] << k, k += 8, _ += y[d++] << k, k += 8), Z = A[_ & z];
              n: for (; ; ) {
                if (_ >>>= M = Z >>> 24, k -= M, !(16 & (M = Z >>> 16 & 255))) {
                  if (!(64 & M)) {
                    Z = A[(65535 & Z) + (_ & (1 << M) - 1)];
                    continue n;
                  }
                  s.msg = "invalid distance code", i.mode = 30;
                  break e;
                }
                if (le = 65535 & Z, k < (M &= 15) && (_ += y[d++] << k, (k += 8) < M && (_ += y[d++] << k, k += 8)), p < (le += _ & (1 << M) - 1)) {
                  s.msg = "invalid distance too far back", i.mode = 30;
                  break e;
                }
                if (_ >>>= M, k -= M, (M = m - l) < le) {
                  if (c < (M = le - M) && i.sane) {
                    s.msg = "invalid distance too far back", i.mode = 30;
                    break e;
                  }
                  if (L = b, (N = 0) === g) {
                    if (N += h - M, M < G) {
                      for (G -= M; W[m++] = b[N++], --M; ) ;
                      N = m - le, L = W;
                    }
                  } else if (g < M) {
                    if (N += h + g - M, (M -= g) < G) {
                      for (G -= M; W[m++] = b[N++], --M; ) ;
                      if (N = 0, g < G) {
                        for (G -= M = g; W[m++] = b[N++], --M; ) ;
                        N = m - le, L = W;
                      }
                    }
                  } else if (N += g - M, M < G) {
                    for (G -= M; W[m++] = b[N++], --M; ) ;
                    N = m - le, L = W;
                  }
                  for (; 2 < G; ) W[m++] = L[N++], W[m++] = L[N++], W[m++] = L[N++], G -= 3;
                  G && (W[m++] = L[N++], 1 < G && (W[m++] = L[N++]));
                } else {
                  for (N = m - le; W[m++] = W[N++], W[m++] = W[N++], W[m++] = W[N++], 2 < (G -= 3); ) ;
                  G && (W[m++] = W[N++], 1 < G && (W[m++] = W[N++]));
                }
                break;
              }
            }
            break;
          }
        } while (d < f && m < x);
        d -= G = k >> 3, _ &= (1 << (k -= G << 3)) - 1, s.next_in = d, s.next_out = m, s.avail_in = d < f ? f - d + 5 : 5 - (d - f), s.avail_out = m < x ? x - m + 257 : 257 - (m - x), i.hold = _, i.bits = k;
      };
    }, {}], 49: [function(e, n, o) {
      var s = e("../utils/common"), a = e("./adler32"), i = e("./crc32"), d = e("./inffast"), f = e("./inftrees"), m = 1, l = 2, x = 0, p = -2, h = 1, c = 852, g = 592;
      function b(N) {
        return (N >>> 24 & 255) + (N >>> 8 & 65280) + ((65280 & N) << 8) + ((255 & N) << 24);
      }
      function _() {
        this.mode = 0, this.last = !1, this.wrap = 0, this.havedict = !1, this.flags = 0, this.dmax = 0, this.check = 0, this.total = 0, this.head = null, this.wbits = 0, this.wsize = 0, this.whave = 0, this.wnext = 0, this.window = null, this.hold = 0, this.bits = 0, this.length = 0, this.offset = 0, this.extra = 0, this.lencode = null, this.distcode = null, this.lenbits = 0, this.distbits = 0, this.ncode = 0, this.nlen = 0, this.ndist = 0, this.have = 0, this.next = null, this.lens = new s.Buf16(320), this.work = new s.Buf16(288), this.lendyn = null, this.distdyn = null, this.sane = 0, this.back = 0, this.was = 0;
      }
      function k(N) {
        var L;
        return N && N.state ? (L = N.state, N.total_in = N.total_out = L.total = 0, N.msg = "", L.wrap && (N.adler = 1 & L.wrap), L.mode = h, L.last = 0, L.havedict = 0, L.dmax = 32768, L.head = null, L.hold = 0, L.bits = 0, L.lencode = L.lendyn = new s.Buf32(c), L.distcode = L.distdyn = new s.Buf32(g), L.sane = 1, L.back = -1, x) : p;
      }
      function C(N) {
        var L;
        return N && N.state ? ((L = N.state).wsize = 0, L.whave = 0, L.wnext = 0, k(N)) : p;
      }
      function A(N, L) {
        var y, W;
        return N && N.state ? (W = N.state, L < 0 ? (y = 0, L = -L) : (y = 1 + (L >> 4), L < 48 && (L &= 15)), L && (L < 8 || 15 < L) ? p : (W.window !== null && W.wbits !== L && (W.window = null), W.wrap = y, W.wbits = L, C(N))) : p;
      }
      function P(N, L) {
        var y, W;
        return N ? (W = new _(), (N.state = W).window = null, (y = A(N, L)) !== x && (N.state = null), y) : p;
      }
      var z, Z, M = !0;
      function G(N) {
        if (M) {
          var L;
          for (z = new s.Buf32(512), Z = new s.Buf32(32), L = 0; L < 144; ) N.lens[L++] = 8;
          for (; L < 256; ) N.lens[L++] = 9;
          for (; L < 280; ) N.lens[L++] = 7;
          for (; L < 288; ) N.lens[L++] = 8;
          for (f(m, N.lens, 0, 288, z, 0, N.work, { bits: 9 }), L = 0; L < 32; ) N.lens[L++] = 5;
          f(l, N.lens, 0, 32, Z, 0, N.work, { bits: 5 }), M = !1;
        }
        N.lencode = z, N.lenbits = 9, N.distcode = Z, N.distbits = 5;
      }
      function le(N, L, y, W) {
        var re, F = N.state;
        return F.window === null && (F.wsize = 1 << F.wbits, F.wnext = 0, F.whave = 0, F.window = new s.Buf8(F.wsize)), W >= F.wsize ? (s.arraySet(F.window, L, y - F.wsize, F.wsize, 0), F.wnext = 0, F.whave = F.wsize) : (W < (re = F.wsize - F.wnext) && (re = W), s.arraySet(F.window, L, y - W, re, F.wnext), (W -= re) ? (s.arraySet(F.window, L, y - W, W, 0), F.wnext = W, F.whave = F.wsize) : (F.wnext += re, F.wnext === F.wsize && (F.wnext = 0), F.whave < F.wsize && (F.whave += re))), 0;
      }
      o.inflateReset = C, o.inflateReset2 = A, o.inflateResetKeep = k, o.inflateInit = function(N) {
        return P(N, 15);
      }, o.inflateInit2 = P, o.inflate = function(N, L) {
        var y, W, re, F, me, U, te, I, O, T, J, $, Ee, Q, K, oe, ye, ve, _e, De, u, V, H, E, S = 0, R = new s.Buf8(4), X = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15];
        if (!N || !N.state || !N.output || !N.input && N.avail_in !== 0) return p;
        (y = N.state).mode === 12 && (y.mode = 13), me = N.next_out, re = N.output, te = N.avail_out, F = N.next_in, W = N.input, U = N.avail_in, I = y.hold, O = y.bits, T = U, J = te, V = x;
        e: for (; ; ) switch (y.mode) {
          case h:
            if (y.wrap === 0) {
              y.mode = 13;
              break;
            }
            for (; O < 16; ) {
              if (U === 0) break e;
              U--, I += W[F++] << O, O += 8;
            }
            if (2 & y.wrap && I === 35615) {
              R[y.check = 0] = 255 & I, R[1] = I >>> 8 & 255, y.check = i(y.check, R, 2, 0), O = I = 0, y.mode = 2;
              break;
            }
            if (y.flags = 0, y.head && (y.head.done = !1), !(1 & y.wrap) || (((255 & I) << 8) + (I >> 8)) % 31) {
              N.msg = "incorrect header check", y.mode = 30;
              break;
            }
            if ((15 & I) != 8) {
              N.msg = "unknown compression method", y.mode = 30;
              break;
            }
            if (O -= 4, u = 8 + (15 & (I >>>= 4)), y.wbits === 0) y.wbits = u;
            else if (u > y.wbits) {
              N.msg = "invalid window size", y.mode = 30;
              break;
            }
            y.dmax = 1 << u, N.adler = y.check = 1, y.mode = 512 & I ? 10 : 12, O = I = 0;
            break;
          case 2:
            for (; O < 16; ) {
              if (U === 0) break e;
              U--, I += W[F++] << O, O += 8;
            }
            if (y.flags = I, (255 & y.flags) != 8) {
              N.msg = "unknown compression method", y.mode = 30;
              break;
            }
            if (57344 & y.flags) {
              N.msg = "unknown header flags set", y.mode = 30;
              break;
            }
            y.head && (y.head.text = I >> 8 & 1), 512 & y.flags && (R[0] = 255 & I, R[1] = I >>> 8 & 255, y.check = i(y.check, R, 2, 0)), O = I = 0, y.mode = 3;
          case 3:
            for (; O < 32; ) {
              if (U === 0) break e;
              U--, I += W[F++] << O, O += 8;
            }
            y.head && (y.head.time = I), 512 & y.flags && (R[0] = 255 & I, R[1] = I >>> 8 & 255, R[2] = I >>> 16 & 255, R[3] = I >>> 24 & 255, y.check = i(y.check, R, 4, 0)), O = I = 0, y.mode = 4;
          case 4:
            for (; O < 16; ) {
              if (U === 0) break e;
              U--, I += W[F++] << O, O += 8;
            }
            y.head && (y.head.xflags = 255 & I, y.head.os = I >> 8), 512 & y.flags && (R[0] = 255 & I, R[1] = I >>> 8 & 255, y.check = i(y.check, R, 2, 0)), O = I = 0, y.mode = 5;
          case 5:
            if (1024 & y.flags) {
              for (; O < 16; ) {
                if (U === 0) break e;
                U--, I += W[F++] << O, O += 8;
              }
              y.length = I, y.head && (y.head.extra_len = I), 512 & y.flags && (R[0] = 255 & I, R[1] = I >>> 8 & 255, y.check = i(y.check, R, 2, 0)), O = I = 0;
            } else y.head && (y.head.extra = null);
            y.mode = 6;
          case 6:
            if (1024 & y.flags && (U < ($ = y.length) && ($ = U), $ && (y.head && (u = y.head.extra_len - y.length, y.head.extra || (y.head.extra = new Array(y.head.extra_len)), s.arraySet(y.head.extra, W, F, $, u)), 512 & y.flags && (y.check = i(y.check, W, $, F)), U -= $, F += $, y.length -= $), y.length)) break e;
            y.length = 0, y.mode = 7;
          case 7:
            if (2048 & y.flags) {
              if (U === 0) break e;
              for ($ = 0; u = W[F + $++], y.head && u && y.length < 65536 && (y.head.name += String.fromCharCode(u)), u && $ < U; ) ;
              if (512 & y.flags && (y.check = i(y.check, W, $, F)), U -= $, F += $, u) break e;
            } else y.head && (y.head.name = null);
            y.length = 0, y.mode = 8;
          case 8:
            if (4096 & y.flags) {
              if (U === 0) break e;
              for ($ = 0; u = W[F + $++], y.head && u && y.length < 65536 && (y.head.comment += String.fromCharCode(u)), u && $ < U; ) ;
              if (512 & y.flags && (y.check = i(y.check, W, $, F)), U -= $, F += $, u) break e;
            } else y.head && (y.head.comment = null);
            y.mode = 9;
          case 9:
            if (512 & y.flags) {
              for (; O < 16; ) {
                if (U === 0) break e;
                U--, I += W[F++] << O, O += 8;
              }
              if (I !== (65535 & y.check)) {
                N.msg = "header crc mismatch", y.mode = 30;
                break;
              }
              O = I = 0;
            }
            y.head && (y.head.hcrc = y.flags >> 9 & 1, y.head.done = !0), N.adler = y.check = 0, y.mode = 12;
            break;
          case 10:
            for (; O < 32; ) {
              if (U === 0) break e;
              U--, I += W[F++] << O, O += 8;
            }
            N.adler = y.check = b(I), O = I = 0, y.mode = 11;
          case 11:
            if (y.havedict === 0) return N.next_out = me, N.avail_out = te, N.next_in = F, N.avail_in = U, y.hold = I, y.bits = O, 2;
            N.adler = y.check = 1, y.mode = 12;
          case 12:
            if (L === 5 || L === 6) break e;
          case 13:
            if (y.last) {
              I >>>= 7 & O, O -= 7 & O, y.mode = 27;
              break;
            }
            for (; O < 3; ) {
              if (U === 0) break e;
              U--, I += W[F++] << O, O += 8;
            }
            switch (y.last = 1 & I, O -= 1, 3 & (I >>>= 1)) {
              case 0:
                y.mode = 14;
                break;
              case 1:
                if (G(y), y.mode = 20, L !== 6) break;
                I >>>= 2, O -= 2;
                break e;
              case 2:
                y.mode = 17;
                break;
              case 3:
                N.msg = "invalid block type", y.mode = 30;
            }
            I >>>= 2, O -= 2;
            break;
          case 14:
            for (I >>>= 7 & O, O -= 7 & O; O < 32; ) {
              if (U === 0) break e;
              U--, I += W[F++] << O, O += 8;
            }
            if ((65535 & I) != (I >>> 16 ^ 65535)) {
              N.msg = "invalid stored block lengths", y.mode = 30;
              break;
            }
            if (y.length = 65535 & I, O = I = 0, y.mode = 15, L === 6) break e;
          case 15:
            y.mode = 16;
          case 16:
            if ($ = y.length) {
              if (U < $ && ($ = U), te < $ && ($ = te), $ === 0) break e;
              s.arraySet(re, W, F, $, me), U -= $, F += $, te -= $, me += $, y.length -= $;
              break;
            }
            y.mode = 12;
            break;
          case 17:
            for (; O < 14; ) {
              if (U === 0) break e;
              U--, I += W[F++] << O, O += 8;
            }
            if (y.nlen = 257 + (31 & I), I >>>= 5, O -= 5, y.ndist = 1 + (31 & I), I >>>= 5, O -= 5, y.ncode = 4 + (15 & I), I >>>= 4, O -= 4, 286 < y.nlen || 30 < y.ndist) {
              N.msg = "too many length or distance symbols", y.mode = 30;
              break;
            }
            y.have = 0, y.mode = 18;
          case 18:
            for (; y.have < y.ncode; ) {
              for (; O < 3; ) {
                if (U === 0) break e;
                U--, I += W[F++] << O, O += 8;
              }
              y.lens[X[y.have++]] = 7 & I, I >>>= 3, O -= 3;
            }
            for (; y.have < 19; ) y.lens[X[y.have++]] = 0;
            if (y.lencode = y.lendyn, y.lenbits = 7, H = { bits: y.lenbits }, V = f(0, y.lens, 0, 19, y.lencode, 0, y.work, H), y.lenbits = H.bits, V) {
              N.msg = "invalid code lengths set", y.mode = 30;
              break;
            }
            y.have = 0, y.mode = 19;
          case 19:
            for (; y.have < y.nlen + y.ndist; ) {
              for (; oe = (S = y.lencode[I & (1 << y.lenbits) - 1]) >>> 16 & 255, ye = 65535 & S, !((K = S >>> 24) <= O); ) {
                if (U === 0) break e;
                U--, I += W[F++] << O, O += 8;
              }
              if (ye < 16) I >>>= K, O -= K, y.lens[y.have++] = ye;
              else {
                if (ye === 16) {
                  for (E = K + 2; O < E; ) {
                    if (U === 0) break e;
                    U--, I += W[F++] << O, O += 8;
                  }
                  if (I >>>= K, O -= K, y.have === 0) {
                    N.msg = "invalid bit length repeat", y.mode = 30;
                    break;
                  }
                  u = y.lens[y.have - 1], $ = 3 + (3 & I), I >>>= 2, O -= 2;
                } else if (ye === 17) {
                  for (E = K + 3; O < E; ) {
                    if (U === 0) break e;
                    U--, I += W[F++] << O, O += 8;
                  }
                  O -= K, u = 0, $ = 3 + (7 & (I >>>= K)), I >>>= 3, O -= 3;
                } else {
                  for (E = K + 7; O < E; ) {
                    if (U === 0) break e;
                    U--, I += W[F++] << O, O += 8;
                  }
                  O -= K, u = 0, $ = 11 + (127 & (I >>>= K)), I >>>= 7, O -= 7;
                }
                if (y.have + $ > y.nlen + y.ndist) {
                  N.msg = "invalid bit length repeat", y.mode = 30;
                  break;
                }
                for (; $--; ) y.lens[y.have++] = u;
              }
            }
            if (y.mode === 30) break;
            if (y.lens[256] === 0) {
              N.msg = "invalid code -- missing end-of-block", y.mode = 30;
              break;
            }
            if (y.lenbits = 9, H = { bits: y.lenbits }, V = f(m, y.lens, 0, y.nlen, y.lencode, 0, y.work, H), y.lenbits = H.bits, V) {
              N.msg = "invalid literal/lengths set", y.mode = 30;
              break;
            }
            if (y.distbits = 6, y.distcode = y.distdyn, H = { bits: y.distbits }, V = f(l, y.lens, y.nlen, y.ndist, y.distcode, 0, y.work, H), y.distbits = H.bits, V) {
              N.msg = "invalid distances set", y.mode = 30;
              break;
            }
            if (y.mode = 20, L === 6) break e;
          case 20:
            y.mode = 21;
          case 21:
            if (6 <= U && 258 <= te) {
              N.next_out = me, N.avail_out = te, N.next_in = F, N.avail_in = U, y.hold = I, y.bits = O, d(N, J), me = N.next_out, re = N.output, te = N.avail_out, F = N.next_in, W = N.input, U = N.avail_in, I = y.hold, O = y.bits, y.mode === 12 && (y.back = -1);
              break;
            }
            for (y.back = 0; oe = (S = y.lencode[I & (1 << y.lenbits) - 1]) >>> 16 & 255, ye = 65535 & S, !((K = S >>> 24) <= O); ) {
              if (U === 0) break e;
              U--, I += W[F++] << O, O += 8;
            }
            if (oe && !(240 & oe)) {
              for (ve = K, _e = oe, De = ye; oe = (S = y.lencode[De + ((I & (1 << ve + _e) - 1) >> ve)]) >>> 16 & 255, ye = 65535 & S, !(ve + (K = S >>> 24) <= O); ) {
                if (U === 0) break e;
                U--, I += W[F++] << O, O += 8;
              }
              I >>>= ve, O -= ve, y.back += ve;
            }
            if (I >>>= K, O -= K, y.back += K, y.length = ye, oe === 0) {
              y.mode = 26;
              break;
            }
            if (32 & oe) {
              y.back = -1, y.mode = 12;
              break;
            }
            if (64 & oe) {
              N.msg = "invalid literal/length code", y.mode = 30;
              break;
            }
            y.extra = 15 & oe, y.mode = 22;
          case 22:
            if (y.extra) {
              for (E = y.extra; O < E; ) {
                if (U === 0) break e;
                U--, I += W[F++] << O, O += 8;
              }
              y.length += I & (1 << y.extra) - 1, I >>>= y.extra, O -= y.extra, y.back += y.extra;
            }
            y.was = y.length, y.mode = 23;
          case 23:
            for (; oe = (S = y.distcode[I & (1 << y.distbits) - 1]) >>> 16 & 255, ye = 65535 & S, !((K = S >>> 24) <= O); ) {
              if (U === 0) break e;
              U--, I += W[F++] << O, O += 8;
            }
            if (!(240 & oe)) {
              for (ve = K, _e = oe, De = ye; oe = (S = y.distcode[De + ((I & (1 << ve + _e) - 1) >> ve)]) >>> 16 & 255, ye = 65535 & S, !(ve + (K = S >>> 24) <= O); ) {
                if (U === 0) break e;
                U--, I += W[F++] << O, O += 8;
              }
              I >>>= ve, O -= ve, y.back += ve;
            }
            if (I >>>= K, O -= K, y.back += K, 64 & oe) {
              N.msg = "invalid distance code", y.mode = 30;
              break;
            }
            y.offset = ye, y.extra = 15 & oe, y.mode = 24;
          case 24:
            if (y.extra) {
              for (E = y.extra; O < E; ) {
                if (U === 0) break e;
                U--, I += W[F++] << O, O += 8;
              }
              y.offset += I & (1 << y.extra) - 1, I >>>= y.extra, O -= y.extra, y.back += y.extra;
            }
            if (y.offset > y.dmax) {
              N.msg = "invalid distance too far back", y.mode = 30;
              break;
            }
            y.mode = 25;
          case 25:
            if (te === 0) break e;
            if ($ = J - te, y.offset > $) {
              if (($ = y.offset - $) > y.whave && y.sane) {
                N.msg = "invalid distance too far back", y.mode = 30;
                break;
              }
              Ee = $ > y.wnext ? ($ -= y.wnext, y.wsize - $) : y.wnext - $, $ > y.length && ($ = y.length), Q = y.window;
            } else Q = re, Ee = me - y.offset, $ = y.length;
            for (te < $ && ($ = te), te -= $, y.length -= $; re[me++] = Q[Ee++], --$; ) ;
            y.length === 0 && (y.mode = 21);
            break;
          case 26:
            if (te === 0) break e;
            re[me++] = y.length, te--, y.mode = 21;
            break;
          case 27:
            if (y.wrap) {
              for (; O < 32; ) {
                if (U === 0) break e;
                U--, I |= W[F++] << O, O += 8;
              }
              if (J -= te, N.total_out += J, y.total += J, J && (N.adler = y.check = y.flags ? i(y.check, re, J, me - J) : a(y.check, re, J, me - J)), J = te, (y.flags ? I : b(I)) !== y.check) {
                N.msg = "incorrect data check", y.mode = 30;
                break;
              }
              O = I = 0;
            }
            y.mode = 28;
          case 28:
            if (y.wrap && y.flags) {
              for (; O < 32; ) {
                if (U === 0) break e;
                U--, I += W[F++] << O, O += 8;
              }
              if (I !== (4294967295 & y.total)) {
                N.msg = "incorrect length check", y.mode = 30;
                break;
              }
              O = I = 0;
            }
            y.mode = 29;
          case 29:
            V = 1;
            break e;
          case 30:
            V = -3;
            break e;
          case 31:
            return -4;
          case 32:
          default:
            return p;
        }
        return N.next_out = me, N.avail_out = te, N.next_in = F, N.avail_in = U, y.hold = I, y.bits = O, (y.wsize || J !== N.avail_out && y.mode < 30 && (y.mode < 27 || L !== 4)) && le(N, N.output, N.next_out, J - N.avail_out) ? (y.mode = 31, -4) : (T -= N.avail_in, J -= N.avail_out, N.total_in += T, N.total_out += J, y.total += J, y.wrap && J && (N.adler = y.check = y.flags ? i(y.check, re, J, N.next_out - J) : a(y.check, re, J, N.next_out - J)), N.data_type = y.bits + (y.last ? 64 : 0) + (y.mode === 12 ? 128 : 0) + (y.mode === 20 || y.mode === 15 ? 256 : 0), (T == 0 && J === 0 || L === 4) && V === x && (V = -5), V);
      }, o.inflateEnd = function(N) {
        if (!N || !N.state) return p;
        var L = N.state;
        return L.window && (L.window = null), N.state = null, x;
      }, o.inflateGetHeader = function(N, L) {
        var y;
        return N && N.state && 2 & (y = N.state).wrap ? ((y.head = L).done = !1, x) : p;
      }, o.inflateSetDictionary = function(N, L) {
        var y, W = L.length;
        return N && N.state ? (y = N.state).wrap !== 0 && y.mode !== 11 ? p : y.mode === 11 && a(1, L, W, 0) !== y.check ? -3 : le(N, L, W, W) ? (y.mode = 31, -4) : (y.havedict = 1, x) : p;
      }, o.inflateInfo = "pako inflate (from Nodeca project)";
    }, { "../utils/common": 41, "./adler32": 43, "./crc32": 45, "./inffast": 48, "./inftrees": 50 }], 50: [function(e, n, o) {
      var s = e("../utils/common"), a = [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0], i = [16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18, 19, 19, 19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 16, 72, 78], d = [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577, 0, 0], f = [16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22, 23, 23, 24, 24, 25, 25, 26, 26, 27, 27, 28, 28, 29, 29, 64, 64];
      n.exports = function(m, l, x, p, h, c, g, b) {
        var _, k, C, A, P, z, Z, M, G, le = b.bits, N = 0, L = 0, y = 0, W = 0, re = 0, F = 0, me = 0, U = 0, te = 0, I = 0, O = null, T = 0, J = new s.Buf16(16), $ = new s.Buf16(16), Ee = null, Q = 0;
        for (N = 0; N <= 15; N++) J[N] = 0;
        for (L = 0; L < p; L++) J[l[x + L]]++;
        for (re = le, W = 15; 1 <= W && J[W] === 0; W--) ;
        if (W < re && (re = W), W === 0) return h[c++] = 20971520, h[c++] = 20971520, b.bits = 1, 0;
        for (y = 1; y < W && J[y] === 0; y++) ;
        for (re < y && (re = y), N = U = 1; N <= 15; N++) if (U <<= 1, (U -= J[N]) < 0) return -1;
        if (0 < U && (m === 0 || W !== 1)) return -1;
        for ($[1] = 0, N = 1; N < 15; N++) $[N + 1] = $[N] + J[N];
        for (L = 0; L < p; L++) l[x + L] !== 0 && (g[$[l[x + L]]++] = L);
        if (z = m === 0 ? (O = Ee = g, 19) : m === 1 ? (O = a, T -= 257, Ee = i, Q -= 257, 256) : (O = d, Ee = f, -1), N = y, P = c, me = L = I = 0, C = -1, A = (te = 1 << (F = re)) - 1, m === 1 && 852 < te || m === 2 && 592 < te) return 1;
        for (; ; ) {
          for (Z = N - me, G = g[L] < z ? (M = 0, g[L]) : g[L] > z ? (M = Ee[Q + g[L]], O[T + g[L]]) : (M = 96, 0), _ = 1 << N - me, y = k = 1 << F; h[P + (I >> me) + (k -= _)] = Z << 24 | M << 16 | G | 0, k !== 0; ) ;
          for (_ = 1 << N - 1; I & _; ) _ >>= 1;
          if (_ !== 0 ? (I &= _ - 1, I += _) : I = 0, L++, --J[N] == 0) {
            if (N === W) break;
            N = l[x + g[L]];
          }
          if (re < N && (I & A) !== C) {
            for (me === 0 && (me = re), P += y, U = 1 << (F = N - me); F + me < W && !((U -= J[F + me]) <= 0); ) F++, U <<= 1;
            if (te += 1 << F, m === 1 && 852 < te || m === 2 && 592 < te) return 1;
            h[C = I & A] = re << 24 | F << 16 | P - c | 0;
          }
        }
        return I !== 0 && (h[P + I] = N - me << 24 | 64 << 16 | 0), b.bits = re, 0;
      };
    }, { "../utils/common": 41 }], 51: [function(e, n, o) {
      n.exports = { 2: "need dictionary", 1: "stream end", 0: "", "-1": "file error", "-2": "stream error", "-3": "data error", "-4": "insufficient memory", "-5": "buffer error", "-6": "incompatible version" };
    }, {}], 52: [function(e, n, o) {
      var s = e("../utils/common"), a = 0, i = 1;
      function d(S) {
        for (var R = S.length; 0 <= --R; ) S[R] = 0;
      }
      var f = 0, m = 29, l = 256, x = l + 1 + m, p = 30, h = 19, c = 2 * x + 1, g = 15, b = 16, _ = 7, k = 256, C = 16, A = 17, P = 18, z = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0], Z = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13], M = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7], G = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15], le = new Array(2 * (x + 2));
      d(le);
      var N = new Array(2 * p);
      d(N);
      var L = new Array(512);
      d(L);
      var y = new Array(256);
      d(y);
      var W = new Array(m);
      d(W);
      var re, F, me, U = new Array(p);
      function te(S, R, X, ee, D) {
        this.static_tree = S, this.extra_bits = R, this.extra_base = X, this.elems = ee, this.max_length = D, this.has_stree = S && S.length;
      }
      function I(S, R) {
        this.dyn_tree = S, this.max_code = 0, this.stat_desc = R;
      }
      function O(S) {
        return S < 256 ? L[S] : L[256 + (S >>> 7)];
      }
      function T(S, R) {
        S.pending_buf[S.pending++] = 255 & R, S.pending_buf[S.pending++] = R >>> 8 & 255;
      }
      function J(S, R, X) {
        S.bi_valid > b - X ? (S.bi_buf |= R << S.bi_valid & 65535, T(S, S.bi_buf), S.bi_buf = R >> b - S.bi_valid, S.bi_valid += X - b) : (S.bi_buf |= R << S.bi_valid & 65535, S.bi_valid += X);
      }
      function $(S, R, X) {
        J(S, X[2 * R], X[2 * R + 1]);
      }
      function Ee(S, R) {
        for (var X = 0; X |= 1 & S, S >>>= 1, X <<= 1, 0 < --R; ) ;
        return X >>> 1;
      }
      function Q(S, R, X) {
        var ee, D, ne = new Array(g + 1), ue = 0;
        for (ee = 1; ee <= g; ee++) ne[ee] = ue = ue + X[ee - 1] << 1;
        for (D = 0; D <= R; D++) {
          var se = S[2 * D + 1];
          se !== 0 && (S[2 * D] = Ee(ne[se]++, se));
        }
      }
      function K(S) {
        var R;
        for (R = 0; R < x; R++) S.dyn_ltree[2 * R] = 0;
        for (R = 0; R < p; R++) S.dyn_dtree[2 * R] = 0;
        for (R = 0; R < h; R++) S.bl_tree[2 * R] = 0;
        S.dyn_ltree[2 * k] = 1, S.opt_len = S.static_len = 0, S.last_lit = S.matches = 0;
      }
      function oe(S) {
        8 < S.bi_valid ? T(S, S.bi_buf) : 0 < S.bi_valid && (S.pending_buf[S.pending++] = S.bi_buf), S.bi_buf = 0, S.bi_valid = 0;
      }
      function ye(S, R, X, ee) {
        var D = 2 * R, ne = 2 * X;
        return S[D] < S[ne] || S[D] === S[ne] && ee[R] <= ee[X];
      }
      function ve(S, R, X) {
        for (var ee = S.heap[X], D = X << 1; D <= S.heap_len && (D < S.heap_len && ye(R, S.heap[D + 1], S.heap[D], S.depth) && D++, !ye(R, ee, S.heap[D], S.depth)); ) S.heap[X] = S.heap[D], X = D, D <<= 1;
        S.heap[X] = ee;
      }
      function _e(S, R, X) {
        var ee, D, ne, ue, se = 0;
        if (S.last_lit !== 0) for (; ee = S.pending_buf[S.d_buf + 2 * se] << 8 | S.pending_buf[S.d_buf + 2 * se + 1], D = S.pending_buf[S.l_buf + se], se++, ee === 0 ? $(S, D, R) : ($(S, (ne = y[D]) + l + 1, R), (ue = z[ne]) !== 0 && J(S, D -= W[ne], ue), $(S, ne = O(--ee), X), (ue = Z[ne]) !== 0 && J(S, ee -= U[ne], ue)), se < S.last_lit; ) ;
        $(S, k, R);
      }
      function De(S, R) {
        var X, ee, D, ne = R.dyn_tree, ue = R.stat_desc.static_tree, se = R.stat_desc.has_stree, pe = R.stat_desc.elems, Re = -1;
        for (S.heap_len = 0, S.heap_max = c, X = 0; X < pe; X++) ne[2 * X] !== 0 ? (S.heap[++S.heap_len] = Re = X, S.depth[X] = 0) : ne[2 * X + 1] = 0;
        for (; S.heap_len < 2; ) ne[2 * (D = S.heap[++S.heap_len] = Re < 2 ? ++Re : 0)] = 1, S.depth[D] = 0, S.opt_len--, se && (S.static_len -= ue[2 * D + 1]);
        for (R.max_code = Re, X = S.heap_len >> 1; 1 <= X; X--) ve(S, ne, X);
        for (D = pe; X = S.heap[1], S.heap[1] = S.heap[S.heap_len--], ve(S, ne, 1), ee = S.heap[1], S.heap[--S.heap_max] = X, S.heap[--S.heap_max] = ee, ne[2 * D] = ne[2 * X] + ne[2 * ee], S.depth[D] = (S.depth[X] >= S.depth[ee] ? S.depth[X] : S.depth[ee]) + 1, ne[2 * X + 1] = ne[2 * ee + 1] = D, S.heap[1] = D++, ve(S, ne, 1), 2 <= S.heap_len; ) ;
        S.heap[--S.heap_max] = S.heap[1], function(Ne, Fe) {
          var Me, Ie, Ue, ze, ot, st, We = Fe.dyn_tree, ht = Fe.max_code, qe = Fe.stat_desc.static_tree, xe = Fe.stat_desc.has_stree, ct = Fe.stat_desc.extra_bits, vt = Fe.stat_desc.extra_base, at = Fe.stat_desc.max_length, rt = 0;
          for (ze = 0; ze <= g; ze++) Ne.bl_count[ze] = 0;
          for (We[2 * Ne.heap[Ne.heap_max] + 1] = 0, Me = Ne.heap_max + 1; Me < c; Me++) at < (ze = We[2 * We[2 * (Ie = Ne.heap[Me]) + 1] + 1] + 1) && (ze = at, rt++), We[2 * Ie + 1] = ze, ht < Ie || (Ne.bl_count[ze]++, ot = 0, vt <= Ie && (ot = ct[Ie - vt]), st = We[2 * Ie], Ne.opt_len += st * (ze + ot), xe && (Ne.static_len += st * (qe[2 * Ie + 1] + ot)));
          if (rt !== 0) {
            do {
              for (ze = at - 1; Ne.bl_count[ze] === 0; ) ze--;
              Ne.bl_count[ze]--, Ne.bl_count[ze + 1] += 2, Ne.bl_count[at]--, rt -= 2;
            } while (0 < rt);
            for (ze = at; ze !== 0; ze--) for (Ie = Ne.bl_count[ze]; Ie !== 0; ) ht < (Ue = Ne.heap[--Me]) || (We[2 * Ue + 1] !== ze && (Ne.opt_len += (ze - We[2 * Ue + 1]) * We[2 * Ue], We[2 * Ue + 1] = ze), Ie--);
          }
        }(S, R), Q(ne, Re, S.bl_count);
      }
      function u(S, R, X) {
        var ee, D, ne = -1, ue = R[1], se = 0, pe = 7, Re = 4;
        for (ue === 0 && (pe = 138, Re = 3), R[2 * (X + 1) + 1] = 65535, ee = 0; ee <= X; ee++) D = ue, ue = R[2 * (ee + 1) + 1], ++se < pe && D === ue || (se < Re ? S.bl_tree[2 * D] += se : D !== 0 ? (D !== ne && S.bl_tree[2 * D]++, S.bl_tree[2 * C]++) : se <= 10 ? S.bl_tree[2 * A]++ : S.bl_tree[2 * P]++, ne = D, Re = (se = 0) === ue ? (pe = 138, 3) : D === ue ? (pe = 6, 3) : (pe = 7, 4));
      }
      function V(S, R, X) {
        var ee, D, ne = -1, ue = R[1], se = 0, pe = 7, Re = 4;
        for (ue === 0 && (pe = 138, Re = 3), ee = 0; ee <= X; ee++) if (D = ue, ue = R[2 * (ee + 1) + 1], !(++se < pe && D === ue)) {
          if (se < Re) for (; $(S, D, S.bl_tree), --se != 0; ) ;
          else D !== 0 ? (D !== ne && ($(S, D, S.bl_tree), se--), $(S, C, S.bl_tree), J(S, se - 3, 2)) : se <= 10 ? ($(S, A, S.bl_tree), J(S, se - 3, 3)) : ($(S, P, S.bl_tree), J(S, se - 11, 7));
          ne = D, Re = (se = 0) === ue ? (pe = 138, 3) : D === ue ? (pe = 6, 3) : (pe = 7, 4);
        }
      }
      d(U);
      var H = !1;
      function E(S, R, X, ee) {
        J(S, (f << 1) + (ee ? 1 : 0), 3), function(D, ne, ue, se) {
          oe(D), T(D, ue), T(D, ~ue), s.arraySet(D.pending_buf, D.window, ne, ue, D.pending), D.pending += ue;
        }(S, R, X);
      }
      o._tr_init = function(S) {
        H || (function() {
          var R, X, ee, D, ne, ue = new Array(g + 1);
          for (D = ee = 0; D < m - 1; D++) for (W[D] = ee, R = 0; R < 1 << z[D]; R++) y[ee++] = D;
          for (y[ee - 1] = D, D = ne = 0; D < 16; D++) for (U[D] = ne, R = 0; R < 1 << Z[D]; R++) L[ne++] = D;
          for (ne >>= 7; D < p; D++) for (U[D] = ne << 7, R = 0; R < 1 << Z[D] - 7; R++) L[256 + ne++] = D;
          for (X = 0; X <= g; X++) ue[X] = 0;
          for (R = 0; R <= 143; ) le[2 * R + 1] = 8, R++, ue[8]++;
          for (; R <= 255; ) le[2 * R + 1] = 9, R++, ue[9]++;
          for (; R <= 279; ) le[2 * R + 1] = 7, R++, ue[7]++;
          for (; R <= 287; ) le[2 * R + 1] = 8, R++, ue[8]++;
          for (Q(le, x + 1, ue), R = 0; R < p; R++) N[2 * R + 1] = 5, N[2 * R] = Ee(R, 5);
          re = new te(le, z, l + 1, x, g), F = new te(N, Z, 0, p, g), me = new te(new Array(0), M, 0, h, _);
        }(), H = !0), S.l_desc = new I(S.dyn_ltree, re), S.d_desc = new I(S.dyn_dtree, F), S.bl_desc = new I(S.bl_tree, me), S.bi_buf = 0, S.bi_valid = 0, K(S);
      }, o._tr_stored_block = E, o._tr_flush_block = function(S, R, X, ee) {
        var D, ne, ue = 0;
        0 < S.level ? (S.strm.data_type === 2 && (S.strm.data_type = function(se) {
          var pe, Re = 4093624447;
          for (pe = 0; pe <= 31; pe++, Re >>>= 1) if (1 & Re && se.dyn_ltree[2 * pe] !== 0) return a;
          if (se.dyn_ltree[18] !== 0 || se.dyn_ltree[20] !== 0 || se.dyn_ltree[26] !== 0) return i;
          for (pe = 32; pe < l; pe++) if (se.dyn_ltree[2 * pe] !== 0) return i;
          return a;
        }(S)), De(S, S.l_desc), De(S, S.d_desc), ue = function(se) {
          var pe;
          for (u(se, se.dyn_ltree, se.l_desc.max_code), u(se, se.dyn_dtree, se.d_desc.max_code), De(se, se.bl_desc), pe = h - 1; 3 <= pe && se.bl_tree[2 * G[pe] + 1] === 0; pe--) ;
          return se.opt_len += 3 * (pe + 1) + 5 + 5 + 4, pe;
        }(S), D = S.opt_len + 3 + 7 >>> 3, (ne = S.static_len + 3 + 7 >>> 3) <= D && (D = ne)) : D = ne = X + 5, X + 4 <= D && R !== -1 ? E(S, R, X, ee) : S.strategy === 4 || ne === D ? (J(S, 2 + (ee ? 1 : 0), 3), _e(S, le, N)) : (J(S, 4 + (ee ? 1 : 0), 3), function(se, pe, Re, Ne) {
          var Fe;
          for (J(se, pe - 257, 5), J(se, Re - 1, 5), J(se, Ne - 4, 4), Fe = 0; Fe < Ne; Fe++) J(se, se.bl_tree[2 * G[Fe] + 1], 3);
          V(se, se.dyn_ltree, pe - 1), V(se, se.dyn_dtree, Re - 1);
        }(S, S.l_desc.max_code + 1, S.d_desc.max_code + 1, ue + 1), _e(S, S.dyn_ltree, S.dyn_dtree)), K(S), ee && oe(S);
      }, o._tr_tally = function(S, R, X) {
        return S.pending_buf[S.d_buf + 2 * S.last_lit] = R >>> 8 & 255, S.pending_buf[S.d_buf + 2 * S.last_lit + 1] = 255 & R, S.pending_buf[S.l_buf + S.last_lit] = 255 & X, S.last_lit++, R === 0 ? S.dyn_ltree[2 * X]++ : (S.matches++, R--, S.dyn_ltree[2 * (y[X] + l + 1)]++, S.dyn_dtree[2 * O(R)]++), S.last_lit === S.lit_bufsize - 1;
      }, o._tr_align = function(S) {
        J(S, 2, 3), $(S, k, le), function(R) {
          R.bi_valid === 16 ? (T(R, R.bi_buf), R.bi_buf = 0, R.bi_valid = 0) : 8 <= R.bi_valid && (R.pending_buf[R.pending++] = 255 & R.bi_buf, R.bi_buf >>= 8, R.bi_valid -= 8);
        }(S);
      };
    }, { "../utils/common": 41 }], 53: [function(e, n, o) {
      n.exports = function() {
        this.input = null, this.next_in = 0, this.avail_in = 0, this.total_in = 0, this.output = null, this.next_out = 0, this.avail_out = 0, this.total_out = 0, this.msg = "", this.state = null, this.data_type = 2, this.adler = 0;
      };
    }, {}], 54: [function(e, n, o) {
      (function(s) {
        (function(a, i) {
          if (!a.setImmediate) {
            var d, f, m, l, x = 1, p = {}, h = !1, c = a.document, g = Object.getPrototypeOf && Object.getPrototypeOf(a);
            g = g && g.setTimeout ? g : a, d = {}.toString.call(a.process) === "[object process]" ? function(C) {
              process.nextTick(function() {
                _(C);
              });
            } : function() {
              if (a.postMessage && !a.importScripts) {
                var C = !0, A = a.onmessage;
                return a.onmessage = function() {
                  C = !1;
                }, a.postMessage("", "*"), a.onmessage = A, C;
              }
            }() ? (l = "setImmediate$" + Math.random() + "$", a.addEventListener ? a.addEventListener("message", k, !1) : a.attachEvent("onmessage", k), function(C) {
              a.postMessage(l + C, "*");
            }) : a.MessageChannel ? ((m = new MessageChannel()).port1.onmessage = function(C) {
              _(C.data);
            }, function(C) {
              m.port2.postMessage(C);
            }) : c && "onreadystatechange" in c.createElement("script") ? (f = c.documentElement, function(C) {
              var A = c.createElement("script");
              A.onreadystatechange = function() {
                _(C), A.onreadystatechange = null, f.removeChild(A), A = null;
              }, f.appendChild(A);
            }) : function(C) {
              setTimeout(_, 0, C);
            }, g.setImmediate = function(C) {
              typeof C != "function" && (C = new Function("" + C));
              for (var A = new Array(arguments.length - 1), P = 0; P < A.length; P++) A[P] = arguments[P + 1];
              var z = { callback: C, args: A };
              return p[x] = z, d(x), x++;
            }, g.clearImmediate = b;
          }
          function b(C) {
            delete p[C];
          }
          function _(C) {
            if (h) setTimeout(_, 0, C);
            else {
              var A = p[C];
              if (A) {
                h = !0;
                try {
                  (function(P) {
                    var z = P.callback, Z = P.args;
                    switch (Z.length) {
                      case 0:
                        z();
                        break;
                      case 1:
                        z(Z[0]);
                        break;
                      case 2:
                        z(Z[0], Z[1]);
                        break;
                      case 3:
                        z(Z[0], Z[1], Z[2]);
                        break;
                      default:
                        z.apply(i, Z);
                    }
                  })(A);
                } finally {
                  b(C), h = !1;
                }
              }
            }
          }
          function k(C) {
            C.source === a && typeof C.data == "string" && C.data.indexOf(l) === 0 && _(+C.data.slice(l.length));
          }
        })(typeof self > "u" ? s === void 0 ? this : s : self);
      }).call(this, typeof Ft < "u" ? Ft : typeof self < "u" ? self : typeof window < "u" ? window : {});
    }, {}] }, {}, [10])(10);
  });
})(Jr);
var Ha = Jr.exports;
const Qr = /* @__PURE__ */ Er(Ha);
let eo = "/api";
const Ct = Le.create({
  baseURL: eo,
  timeout: 6e4
  // 60 seconds for segmentation
});
function Wa(t) {
  eo = t, Ct.defaults.baseURL = t;
}
async function dr(t) {
  console.log("[uploadImage] Start processing file:", t.name, t.type, t.size);
  try {
    const r = new FormData();
    r.append("file", t);
    const n = (await Ct.post("/upload", r, {
      headers: { "Content-Type": "multipart/form-data" },
      timeout: 12e4
      // 2 minutes, large files need more time
    })).data;
    console.log("[uploadImage] Backend response:", n);
    const o = n.image_url || "", s = {
      id: n.id || n.image_id || `img_${Date.now()}`,
      fileName: n.file_name || t.name,
      width: n.width ?? 800,
      height: n.height ?? 600,
      url: o,
      file: t,
      isLocalOnly: !1
    };
    return console.log("[uploadImage] Return ImageInfo:", s.id, "image URL length:", o.length), s;
  } catch (r) {
    console.warn("[uploadImage] Backend upload failed, trying local conversion:", r);
    try {
      const { url: e, width: n, height: o } = await $a(t), s = {
        id: `local_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
        fileName: t.name,
        width: n,
        height: o,
        url: e,
        file: t,
        isLocalOnly: !0
      };
      return console.log("[uploadImage] Return local ImageInfo:", s.id), s;
    } catch (e) {
      throw console.error("[uploadImage] Local conversion also failed:", e), new Error(`Cannot load image ${t.name}: format not supported or file corrupted`);
    }
  }
}
async function $a(t) {
  console.log("[convertImageToDataUrl] Start conversion:", t.name, t.type);
  try {
    const r = await createImageBitmap(t);
    console.log("[convertImageToDataUrl] createImageBitmap success:", r.width, "x", r.height);
    const e = document.createElement("canvas");
    e.width = r.width, e.height = r.height;
    const n = e.getContext("2d");
    if (!n)
      throw new Error("Cannot create canvas context");
    n.drawImage(r, 0, 0), r.close();
    const o = e.toDataURL("image/jpeg", 0.92);
    return console.log("[convertImageToDataUrl] Conversion complete, data URL length:", o.length), {
      url: o,
      width: e.width,
      height: e.height
    };
  } catch (r) {
    return console.warn("[convertImageToDataUrl] createImageBitmap failed, trying Image element:", r), new Promise((e, n) => {
      const o = URL.createObjectURL(t), s = new Image();
      s.onload = () => {
        const a = document.createElement("canvas");
        a.width = s.naturalWidth, a.height = s.naturalHeight;
        const i = a.getContext("2d");
        if (!i) {
          URL.revokeObjectURL(o), n(new Error("Cannot create canvas context"));
          return;
        }
        i.drawImage(s, 0, 0);
        const d = a.toDataURL("image/jpeg", 0.92);
        URL.revokeObjectURL(o), e({
          url: d,
          width: s.naturalWidth,
          height: s.naturalHeight
        });
      }, s.onerror = (a) => {
        URL.revokeObjectURL(o), console.error("[convertImageToDataUrl] Image loading also failed:", a), n(new Error(`Cannot load image: ${t.name}`));
      }, s.src = o;
    });
  }
}
async function ur(t, r, e = 0.5) {
  return (await Ct.post("/segment/text", {
    image_id: t,
    prompt: r,
    confidence_threshold: e
  })).data.results;
}
async function to(t, r, e = 0.5, n = !1) {
  return (await Ct.post("/segment/points", {
    image_id: t,
    points: r.map((s) => ({ x: s.x, y: s.y, label: s.label })),
    confidence_threshold: e,
    reset_mask: n
  })).data.results;
}
async function no(t, r, e = !0, n = 0.5) {
  return (await Ct.post("/segment/box", {
    image_id: t,
    box: { x1: r.x1, y1: r.y1, x2: r.x2, y2: r.y2 },
    label: e,
    confidence_threshold: n
  })).data.results;
}
async function ro(t, r, e, n = 0.5) {
  return (await Ct.post("/segment/template", {
    image_id: t,
    template_image_id: r,
    template_box: {
      x1: e.x1,
      y1: e.y1,
      x2: e.x2,
      y2: e.y2
    },
    confidence_threshold: n
  })).data.results;
}
async function Ka(t, r, e) {
  return (await Ct.post("/export/coco", {
    images: t.map((o) => ({
      id: o.id,
      file_name: o.fileName,
      width: o.width,
      height: o.height
    })),
    annotations: r.map((o, s) => ({
      id: s + 1,
      image_id: o.imageId,
      category_id: o.categoryId,
      category_name: o.categoryName,
      segmentation: o.segmentation,
      bbox: o.bbox,
      area: o.area,
      score: o.score
    })),
    categories: e.map((o) => ({
      id: o.id,
      name: o.name,
      supercategory: o.supercategory || ""
    }))
  })).data;
}
function oo(t) {
  var a;
  const r = t.split(","), e = ((a = r[0].match(/:(.*?);/)) == null ? void 0 : a[1]) || "image/png", n = atob(r[1]);
  let o = n.length;
  const s = new Uint8Array(o);
  for (; o--; )
    s[o] = n.charCodeAt(o);
  return new Blob([s], { type: e });
}
function Jt(t) {
  return {
    "image/jpeg": ".jpg",
    "image/png": ".png",
    "image/webp": ".webp",
    "image/bmp": ".bmp",
    "image/gif": ".gif"
  }[t] || ".png";
}
async function Za(t, r, e = "annotations_coco.zip") {
  const n = new Qr();
  n.file("instances_default.json", JSON.stringify(t, null, 2));
  for (const i of r)
    if (i.url)
      try {
        if (i.url.startsWith("data:")) {
          const d = oo(i.url), f = Jt(d.type), m = i.fileName.includes(".") ? i.fileName : `${i.fileName}${f}`;
          n.file(m, d);
        } else if (i.url.startsWith("blob:")) {
          const f = await (await fetch(i.url)).blob(), m = Jt(f.type), l = i.fileName.includes(".") ? i.fileName : `${i.fileName}${m}`;
          n.file(l, f);
        }
      } catch (d) {
        console.warn(`[downloadCOCOWithImages] Cannot add image ${i.fileName}:`, d);
      }
  const o = await n.generateAsync({ type: "blob" }), s = URL.createObjectURL(o), a = document.createElement("a");
  a.href = s, a.download = e, document.body.appendChild(a), a.click(), document.body.removeChild(a), URL.revokeObjectURL(s);
}
function qa(t, r = "instances_default.json") {
  const e = new Blob([JSON.stringify(t, null, 2)], { type: "application/json" }), n = URL.createObjectURL(e), o = document.createElement("a");
  o.href = n, o.download = r, document.body.appendChild(o), o.click(), document.body.removeChild(o), URL.revokeObjectURL(n);
}
function Va(t) {
  const [r, e] = t.size, n = Array.from({ length: r }, () => Array(e).fill(!1));
  let o = 0, s = !1;
  for (const a of t.counts) {
    for (let i = 0; i < a; i++) {
      const d = o % r, f = Math.floor(o / r);
      d < r && f < e && (n[d][f] = s), o++;
    }
    s = !s;
  }
  return n;
}
function Ya(t, r, e) {
  var m, l, x, p;
  const n = [], o = [];
  for (let h = 0; h < e; h++)
    for (let c = 0; c < r; c++)
      t[h][c] && (c === 0 || c === r - 1 || h === 0 || h === e - 1 || !((m = t[h - 1]) != null && m[c]) || !((l = t[h + 1]) != null && l[c]) || !((x = t[h]) != null && x[c - 1]) || !((p = t[h]) != null && p[c + 1])) && o.push({ x: c, y: h });
  if (o.length === 0) return n;
  const s = o.reduce((h, c) => h + c.x, 0) / o.length, a = o.reduce((h, c) => h + c.y, 0) / o.length;
  o.sort((h, c) => {
    const g = Math.atan2(h.y - a, h.x - s), b = Math.atan2(c.y - a, c.x - s);
    return g - b;
  });
  const d = Math.max(1, Math.floor(o.length / 100)), f = [];
  for (let h = 0; h < o.length; h += d)
    f.push(o[h].x, o[h].y);
  return f.length >= 6 && n.push(f), n;
}
function Xa(t, r, e, n, o = !0) {
  const s = n.get(t.categoryId) ?? 0;
  if (o && t.segmentation)
    try {
      const h = Va(t.segmentation), c = Ya(h, r, e);
      if (c.length > 0 && c[0].length >= 6) {
        const g = c[0].map(
          (b, _) => _ % 2 === 0 ? (b / r).toFixed(6) : (b / e).toFixed(6)
          // y
        );
        return `${s} ${g.join(" ")}`;
      }
    } catch (h) {
      console.warn("[annotationToYOLO] RLE conversion failed, using bbox instead:", h);
    }
  const [a, i, d, f] = t.bbox, m = ((a + d / 2) / r).toFixed(6), l = ((i + f / 2) / e).toFixed(6), x = (d / r).toFixed(6), p = (f / e).toFixed(6);
  return `${s} ${m} ${l} ${x} ${p}`;
}
async function fr(t, r, e, n = "annotations_yolo.zip", o = !0, s = !0) {
  const a = new Qr(), i = a.folder("obj_train_data"), d = /* @__PURE__ */ new Map();
  e.forEach((c, g) => {
    d.set(c.id, g);
  });
  const f = e.map((c) => c.name).join(`
`);
  a.file("obj.names", f);
  const m = `classes = ${e.length}
train = data/train.txt
names = data/obj.names
backup = backup/
`;
  a.file("obj.data", m);
  const l = [];
  for (const c of t) {
    const b = r.filter((k) => k.imageId === c.id).map(
      (k) => Xa(k, c.width, c.height, d, o)
    ), _ = c.fileName.replace(/\.[^/.]+$/, "");
    if (i && i.file(`${_}.txt`, b.join(`
`)), l.push(`data/obj_train_data/${c.fileName}`), s && c.url && i)
      try {
        if (c.url.startsWith("data:")) {
          const k = oo(c.url), C = Jt(k.type), A = c.fileName.includes(".") ? c.fileName : `${c.fileName}${C}`;
          i.file(A, k);
        } else if (c.url.startsWith("blob:")) {
          const C = await (await fetch(c.url)).blob(), A = Jt(C.type), P = c.fileName.includes(".") ? c.fileName : `${c.fileName}${A}`;
          i.file(P, C);
        }
      } catch (k) {
        console.warn(`[downloadYOLOWithImages] Cannot add image ${c.fileName}:`, k);
      }
  }
  a.file("train.txt", l.join(`
`));
  const x = await a.generateAsync({ type: "blob" }), p = URL.createObjectURL(x), h = document.createElement("a");
  h.href = p, h.download = n, document.body.appendChild(h), h.click(), document.body.removeChild(h), URL.revokeObjectURL(p);
}
function Nt(t) {
  const [r, e] = t.size, n = new Uint8Array(r * e);
  let o = 0, s = 0;
  for (const a of t.counts) {
    const i = Math.min(o + a, n.length);
    for (let d = o; d < i; d++)
      n[d] = s;
    o = i, s = 1 - s;
  }
  return n;
}
function Ga(t, r, e) {
  const n = /* @__PURE__ */ new Set(), o = [];
  let s = -1, a = -1;
  e: for (let x = 0; x < e; x++)
    for (let p = 0; p < r; p++) {
      const h = x * r + p;
      if (t[h] === 1 && (p === 0 || t[h - 1] === 0)) {
        s = p, a = x;
        break e;
      }
    }
  if (s === -1) return o;
  const i = [1, 1, 0, -1, -1, -1, 0, 1], d = [0, 1, 1, 1, 0, -1, -1, -1];
  let f = s, m = a, l = 0;
  do {
    const x = m * r + f;
    n.has(x) || (o.push({ x: f, y: m }), n.add(x));
    let p = !1;
    const h = (l + 5) % 8;
    for (let c = 0; c < 8; c++) {
      const g = (h + c) % 8, b = f + i[g], _ = m + d[g];
      if (b >= 0 && b < r && _ >= 0 && _ < e) {
        const k = _ * r + b;
        if (t[k] === 1) {
          let C = !1;
          for (let A = 0; A < 8; A++) {
            const P = b + i[A], z = _ + d[A];
            if (P < 0 || P >= r || z < 0 || z >= e || t[z * r + P] === 0) {
              C = !0;
              break;
            }
          }
          if (C) {
            f = b, m = _, l = g, p = !0;
            break;
          }
        }
      }
    }
    if (!p) break;
  } while (f !== s || m !== a);
  return o;
}
function Ja(t, r, e) {
  const n = e.x - r.x, o = e.y - r.y;
  if (n === 0 && o === 0)
    return Math.sqrt((t.x - r.x) ** 2 + (t.y - r.y) ** 2);
  const s = Math.max(0, Math.min(
    1,
    ((t.x - r.x) * n + (t.y - r.y) * o) / (n * n + o * o)
  )), a = r.x + s * n, i = r.y + s * o;
  return Math.sqrt((t.x - a) ** 2 + (t.y - i) ** 2);
}
function Pt(t, r) {
  if (t.length <= 2) return t;
  let e = 0, n = 0;
  const o = t[0], s = t[t.length - 1];
  for (let a = 1; a < t.length - 1; a++) {
    const i = Ja(t[a], o, s);
    i > e && (e = i, n = a);
  }
  if (e > r) {
    const a = Pt(t.slice(0, n + 1), r), i = Pt(t.slice(n), r);
    return [...a.slice(0, -1), ...i];
  } else
    return [o, s];
}
function Qa(t, r = 20) {
  if (t.length <= r) return t;
  let e = 1 / 0, n = -1 / 0, o = 1 / 0, s = -1 / 0;
  for (const m of t)
    e = Math.min(e, m.x), n = Math.max(n, m.x), o = Math.min(o, m.y), s = Math.max(s, m.y);
  let i = Math.sqrt((n - e) ** 2 + (s - o) ** 2) * 0.01, d = Pt(t, i), f = 0;
  for (; d.length > r && f < 20; )
    i *= 1.5, d = Pt(t, i), f++;
  for (; d.length < Math.min(8, r) && i > 1 && f < 30; )
    i *= 0.7, d = Pt(t, i), f++;
  return d;
}
function hr(t, r, e) {
  const n = new Uint8Array(r * e);
  if (t.length < 3) return n;
  for (let o = 0; o < e; o++) {
    const s = [];
    for (let a = 0; a < t.length; a++) {
      const i = t[a], d = t[(a + 1) % t.length];
      if (i.y <= o && d.y > o || d.y <= o && i.y > o) {
        const f = i.x + (o - i.y) / (d.y - i.y) * (d.x - i.x);
        s.push(f);
      }
    }
    s.sort((a, i) => a - i);
    for (let a = 0; a < s.length; a += 2)
      if (a + 1 < s.length) {
        const i = Math.max(0, Math.floor(s[a])), d = Math.min(r - 1, Math.ceil(s[a + 1]));
        for (let f = i; f <= d; f++)
          n[o * r + f] = 1;
      }
  }
  return n;
}
function $t(t, r, e) {
  const n = [];
  let o = 0, s = 0;
  for (let a = 0; a < t.length; a++)
    t[a] === o ? s++ : (n.push(s), o = 1 - o, s = 1);
  return n.push(s), t[0] === 1 && n.unshift(0), {
    counts: n,
    size: [e, r]
  };
}
function ei(t, r, e, n) {
  const o = document.createElement("canvas");
  o.width = r, o.height = e;
  const s = o.getContext("2d");
  if (!s || t.length < 2) return new Uint8Array(r * e);
  s.clearRect(0, 0, r, e), s.strokeStyle = "#ffffff", s.lineCap = "round", s.lineJoin = "round", s.lineWidth = n, s.beginPath(), s.moveTo(t[0].x, t[0].y);
  for (let d = 1; d < t.length; d++)
    s.lineTo(t[d].x, t[d].y);
  s.stroke();
  const a = s.getImageData(0, 0, r, e).data, i = new Uint8Array(r * e);
  for (let d = 0; d < i.length; d++)
    i[d] = a[d * 4 + 3] > 0 ? 1 : 0;
  return i;
}
function ti(t, r, e, n, o) {
  const s = document.createElement("canvas");
  s.width = e, s.height = n;
  const a = s.getContext("2d");
  if (!a) return new Uint8Array(e * n);
  a.clearRect(0, 0, e, n), a.strokeStyle = "#ffffff", a.lineCap = "round", a.lineJoin = "round", a.lineWidth = o, a.beginPath(), a.moveTo(t.x, t.y), a.lineTo(r.x, r.y), a.stroke();
  const i = a.getImageData(0, 0, e, n).data, d = new Uint8Array(e * n);
  for (let f = 0; f < d.length; f++)
    d[f] = i[f * 4 + 3] > 0 ? 1 : 0;
  return d;
}
function pn(t, r, e, n, o) {
  if (e === 0 && n === 0 && o === "none") return;
  const s = t.getImageData(0, 0, r.width, r.height), a = s.data;
  if (o === "histogram" || o === "auto") {
    const m = new Array(256).fill(0), l = new Uint8Array(r.width * r.height);
    for (let c = 0; c < l.length; c++) {
      const g = a[c * 4], b = a[c * 4 + 1], _ = a[c * 4 + 2], k = Math.max(0, Math.min(255, Math.round(0.299 * g + 0.587 * b + 0.114 * _)));
      l[c] = k, m[k]++;
    }
    const x = new Array(256).fill(0);
    x[0] = m[0];
    for (let c = 1; c < 256; c++) x[c] = x[c - 1] + m[c];
    const p = l.length, h = x.find((c) => c > 0) || 0;
    for (let c = 0; c < l.length; c++) {
      const g = l[c], b = Math.round((x[g] - h) / Math.max(1, p - h) * 255), _ = g === 0 ? 0 : b / g;
      a[c * 4] = Math.max(0, Math.min(255, Math.round(a[c * 4] * _))), a[c * 4 + 1] = Math.max(0, Math.min(255, Math.round(a[c * 4 + 1] * _))), a[c * 4 + 2] = Math.max(0, Math.min(255, Math.round(a[c * 4 + 2] * _)));
    }
  }
  const i = o === "auto" ? n + 10 : n, d = 259 * (i + 255) / (255 * (259 - i)), f = o === "auto" ? e + 5 : e;
  for (let m = 0; m < a.length; m += 4)
    a[m] = Math.max(0, Math.min(255, d * (a[m] - 128) + 128 + f)), a[m + 1] = Math.max(0, Math.min(255, d * (a[m + 1] - 128) + 128 + f)), a[m + 2] = Math.max(0, Math.min(255, d * (a[m + 2] - 128) + 128 + f));
  t.putImageData(s, 0, 0);
}
function gn(t, r, e, n, o, s = 0.4) {
  const a = t.createImageData(e, n), i = a.data, d = parseInt(o.slice(1, 3), 16), f = parseInt(o.slice(3, 5), 16), m = parseInt(o.slice(5, 7), 16);
  for (let l = 0; l < r.length; l++)
    if (r[l]) {
      const x = l * 4;
      i[x] = d, i[x + 1] = f, i[x + 2] = m, i[x + 3] = Math.floor(s * 255);
    }
  t.putImageData(a, 0, 0);
}
const ni = xr(function({ onSegmentRequest: r, onScaleChange: e }, n) {
  const o = nt(null), s = nt(null), a = nt(null), i = nt(null), d = nt(null), [f, m] = Ae(1), [l, x] = Ae({ x: 0, y: 0 }), [p, h] = Ae(!1), [c, g] = Ae({ x: 0, y: 0 }), [b, _] = Ae(!1), [k, C] = Ae({ x: 0, y: 0 }), [A, P] = Ae(!1), [z, Z] = Ae([]), [M, G] = Ae(null), [le, N] = Ae(null), [L, y] = Ae(null), [W, re] = Ae(null), [F, me] = Ae([]), [U, te] = Ae(null), [I, O] = Ae(null), {
    currentImage: T,
    annotations: J,
    currentTool: $,
    selectedAnnotationIds: Ee,
    tempPoints: Q,
    tempBox: K,
    previewMask: oe,
    templateImage: ye,
    templateBox: ve,
    isPasting: _e,
    copiedAnnotations: De,
    polygonPoints: u,
    setTempBox: V,
    addTempPoint: H,
    clearTempPoints: E,
    setPreviewMask: S,
    setTemplateImage: R,
    setTemplateBox: X,
    addPolygonPoint: ee,
    clearPolygonPoints: D,
    updateAnnotation: ne,
    selectAnnotation: ue,
    deselectAll: se,
    addAnnotation: pe,
    addAnnotations: Re,
    confirmPaste: Ne,
    cancelPaste: Fe,
    categories: Me,
    currentCategoryId: Ie,
    confidenceThreshold: Ue,
    brushSize: ze,
    lineThickness: ot,
    brightness: st,
    contrast: We,
    enhancementMode: ht,
    setLoading: qe,
    setError: xe
  } = ft();
  ho(n, () => ({
    zoomIn() {
      m((B) => Math.min(5, B * 1.2));
    },
    zoomOut() {
      m((B) => Math.max(0.1, B / 1.2));
    },
    zoomFit() {
      if (!T || !a.current) return;
      const B = a.current, w = Math.min(B.clientWidth / T.width, B.clientHeight / T.height);
      m(w), x({
        x: (B.clientWidth - T.width * w) / 2,
        y: (B.clientHeight - T.height * w) / 2
      });
    },
    zoom100() {
      if (!T || !a.current) return;
      const B = a.current;
      m(1), x({
        x: (B.clientWidth - T.width) / 2,
        y: (B.clientHeight - T.height) / 2
      });
    }
  }), [T]), $e(() => {
    e == null || e(f);
  }, [f, e]);
  const ct = Oe((B, w) => {
    if (!a.current || !T) return { x: 0, y: 0 };
    const ie = a.current.getBoundingClientRect(), q = (B - ie.left - l.x) / f, ce = (w - ie.top - l.y) / f;
    return {
      x: Math.max(0, Math.min(q, T.width)),
      y: Math.max(0, Math.min(ce, T.height))
    };
  }, [f, l, T]), vt = Oe(() => {
    var fe, be;
    const B = o.current, w = B == null ? void 0 : B.getContext("2d");
    if (!B || !w || !T) {
      console.log("[drawMainCanvas] Missing required elements:", { canvas: !!B, ctx: !!w, currentImage: !!T });
      return;
    }
    if (console.log("[drawMainCanvas] currentImage:", {
      id: T.id,
      fileName: T.fileName,
      width: T.width,
      height: T.height,
      urlType: typeof T.url,
      urlLength: ((fe = T.url) == null ? void 0 : fe.length) || 0,
      urlStart: ((be = T.url) == null ? void 0 : be.substring(0, 60)) || "(empty)",
      hasFile: !!T.file
    }), i.current && d.current === T.id && i.current.complete && i.current.naturalWidth > 0) {
      console.log("[drawMainCanvas] Using cached image"), B.width = T.width, B.height = T.height, w.drawImage(i.current, 0, 0), pn(w, B, st, We, ht);
      return;
    }
    const ie = async (de) => {
      try {
        console.log("[loadImageFromFile] Using createImageBitmap to load:", de.name);
        const ge = await createImageBitmap(de);
        console.log("[loadImageFromFile] Success:", ge.width, "x", ge.height), B.width = ge.width, B.height = ge.height, w.drawImage(ge, 0, 0), pn(w, B, st, We, ht);
        const he = document.createElement("canvas");
        he.width = ge.width, he.height = ge.height;
        const Se = he.getContext("2d");
        if (Se) {
          Se.drawImage(ge, 0, 0);
          const Te = he.toDataURL("image/jpeg", 0.92), He = new Image();
          He.onload = () => {
            i.current = He, d.current = T.id;
          }, He.src = Te;
        }
        ge.close();
      } catch (ge) {
        throw console.error("[loadImageFromFile] createImageBitmap failed:", ge), ge;
      }
    }, q = (de, ge = !1) => {
      console.log("[loadImage] Loading image, src length:", de.length, "start:", de.substring(0, 60));
      const he = new Image();
      /^https?:\/\//i.test(de) && (he.crossOrigin = "anonymous"), he.onload = () => {
        console.log("[loadImage] Image loaded successfully:", he.naturalWidth, "x", he.naturalHeight), i.current = he, d.current = T.id, B.width = he.naturalWidth || T.width, B.height = he.naturalHeight || T.height, w.drawImage(he, 0, 0), pn(w, B, st, We, ht);
      }, he.onerror = async () => {
        if (console.error("[loadImage] img.onerror triggered, isRetry:", ge, "hasFile:", !!T.file), !ge && T.file) {
          console.warn("[loadImage] Trying to load from File using createImageBitmap...");
          try {
            await ie(T.file);
            return;
          } catch (Se) {
            console.error("[loadImage] createImageBitmap also failed:", Se);
          }
        }
        console.error("[loadImage] Final failure, src:", de.substring(0, 100)), B.width = T.width || 800, B.height = T.height || 600, w.fillStyle = "#374151", w.fillRect(0, 0, B.width, B.height), w.fillStyle = "#9ca3af", w.font = "16px sans-serif", w.textAlign = "center", w.fillText("Image load failed", B.width / 2, B.height / 2);
      }, he.src = de;
    };
    let ce = T.url;
    if (!ce || ce === "")
      if (T.file) {
        ie(T.file).catch(() => {
          B.width = T.width || 800, B.height = T.height || 600, w.fillStyle = "#374151", w.fillRect(0, 0, B.width, B.height), w.fillStyle = "#9ca3af", w.font = "16px sans-serif", w.textAlign = "center", w.fillText("Cannot read file", B.width / 2, B.height / 2);
        });
        return;
      } else {
        B.width = T.width || 800, B.height = T.height || 600, w.fillStyle = "#374151", w.fillRect(0, 0, B.width, B.height), w.fillStyle = "#9ca3af", w.font = "16px sans-serif", w.textAlign = "center", w.fillText("No image source", B.width / 2, B.height / 2);
        return;
      }
    q(ce);
  }, [T, st, We, ht]), at = Oe(() => {
    const B = s.current, w = B == null ? void 0 : B.getContext("2d");
    if (!B || !w || !T) return;
    if (B.width = T.width, B.height = T.height, w.clearRect(0, 0, B.width, B.height), J.filter((q) => q.imageId === T.id).forEach((q) => {
      if (q.visible)
        try {
          const ce = Nt(q.segmentation), [fe, be] = q.segmentation.size, de = document.createElement("canvas");
          de.width = be, de.height = fe;
          const ge = de.getContext("2d");
          if (ge && (gn(ge, ce, be, fe, q.color, q.selected ? 0.6 : 0.4), w.drawImage(de, 0, 0)), q.selected && W === q.id && F.length > 0) {
            w.beginPath(), w.moveTo(F[0].x, F[0].y);
            for (let he = 1; he < F.length; he++)
              w.lineTo(F[he].x, F[he].y);
            if (w.closePath(), w.strokeStyle = "#ffffff", w.lineWidth = 3, w.stroke(), w.strokeStyle = "#000000", w.lineWidth = 1, w.stroke(), F.forEach((he, Se) => {
              const Te = U === Se, He = (Te ? 5 : 4) / f, it = He + 1 / f, tt = 1.5 / f, gt = 1 / f;
              w.beginPath(), w.arc(he.x, he.y, it, 0, Math.PI * 2), w.fillStyle = "rgba(0, 0, 0, 0.5)", w.fill(), w.beginPath(), w.arc(he.x, he.y, He, 0, Math.PI * 2), w.fillStyle = Te ? "#fbbf24" : "#ffffff", w.fill(), w.strokeStyle = "#1f2937", w.lineWidth = gt, w.stroke(), w.beginPath(), w.arc(he.x, he.y, tt, 0, Math.PI * 2), w.fillStyle = "#1f2937", w.fill();
            }), I) {
              const he = 4 / f, Se = he + 1 / f;
              w.beginPath(), w.arc(I.x, I.y, Se, 0, Math.PI * 2), w.fillStyle = "rgba(0, 0, 0, 0.3)", w.fill(), w.beginPath(), w.arc(I.x, I.y, he, 0, Math.PI * 2), w.fillStyle = "#22c55e", w.fill(), w.strokeStyle = "#ffffff", w.lineWidth = 1 / f, w.stroke();
              const Te = 2 / f;
              w.beginPath(), w.moveTo(I.x - Te, I.y), w.lineTo(I.x + Te, I.y), w.moveTo(I.x, I.y - Te), w.lineTo(I.x, I.y + Te), w.strokeStyle = "#ffffff", w.lineWidth = 1 / f, w.stroke();
            }
          } else if (q.selected) {
            w.strokeStyle = q.color, w.lineWidth = 2, w.setLineDash([5, 5]);
            const [he, Se, Te, He] = q.bbox;
            w.strokeRect(he, Se, Te, He), w.setLineDash([]);
          }
        } catch (ce) {
          console.warn("Failed to draw annotation:", ce);
        }
    }), oe)
      try {
        const q = Nt(oe.mask_rle), [ce, fe] = oe.mask_rle.size, be = document.createElement("canvas");
        be.width = fe, be.height = ce;
        const de = be.getContext("2d");
        de && (gn(de, q, fe, ce, "#3b82f6", 0.5), w.drawImage(be, 0, 0));
        const [ge, he, Se, Te] = oe.box;
        w.strokeStyle = "#3b82f6", w.lineWidth = 2, w.setLineDash([5, 5]), w.strokeRect(ge, he, Se - ge, Te - he), w.setLineDash([]), w.fillStyle = "#3b82f6", w.font = "bold 14px Arial", w.textAlign = "left", w.textBaseline = "top", w.fillText(`Score: ${(oe.score * 100).toFixed(1)}%`, ge, he - 20);
      } catch (q) {
        console.warn("Failed to draw preview mask:", q);
      }
    if (Q.forEach((q) => {
      w.beginPath(), w.arc(q.x, q.y, 6, 0, Math.PI * 2), w.fillStyle = q.label === 1 ? "#22c55e" : "#ef4444", w.fill(), w.strokeStyle = "#ffffff", w.lineWidth = 2, w.stroke(), w.fillStyle = "#ffffff", w.font = "bold 10px Arial", w.textAlign = "center", w.textBaseline = "middle", w.fillText(q.label === 1 ? "+" : "-", q.x, q.y);
    }), K) {
      const q = $ === "template", ce = q ? "rgba(168, 85, 247, 0.15)" : "rgba(59, 130, 246, 0.15)", fe = q ? "#9333ea" : "#2563eb", be = q ? "#7c3aed" : "#1d4ed8";
      w.fillStyle = ce, w.fillRect(
        K.x1,
        K.y1,
        K.x2 - K.x1,
        K.y2 - K.y1
      ), w.strokeStyle = fe, w.lineWidth = 3, w.setLineDash([8, 4]), w.strokeRect(
        K.x1,
        K.y1,
        K.x2 - K.x1,
        K.y2 - K.y1
      ), w.setLineDash([]);
      const de = 12;
      w.strokeStyle = be, w.lineWidth = 4, w.setLineDash([]), w.beginPath(), w.moveTo(K.x1, K.y1 + de), w.lineTo(K.x1, K.y1), w.lineTo(K.x1 + de, K.y1), w.stroke(), w.beginPath(), w.moveTo(K.x2 - de, K.y1), w.lineTo(K.x2, K.y1), w.lineTo(K.x2, K.y1 + de), w.stroke(), w.beginPath(), w.moveTo(K.x1, K.y2 - de), w.lineTo(K.x1, K.y2), w.lineTo(K.x1 + de, K.y2), w.stroke(), w.beginPath(), w.moveTo(K.x2 - de, K.y2), w.lineTo(K.x2, K.y2), w.lineTo(K.x2, K.y2 - de), w.stroke(), q && (w.fillStyle = "rgba(168, 85, 247, 0.9)", w.font = "bold 14px Arial", w.textAlign = "center", w.fillText("Select template region", (K.x1 + K.x2) / 2, K.y1 - 10));
    }
    if ($ === "template" && ye && ve && T && ye.id === T.id && (w.strokeStyle = "#10b981", w.lineWidth = 3, w.setLineDash([4, 4]), w.strokeRect(
      ve.x1,
      ve.y1,
      ve.x2 - ve.x1,
      ve.y2 - ve.y1
    ), w.setLineDash([]), w.fillStyle = "rgba(16, 185, 129, 0.9)", w.font = "bold 12px Arial", w.textAlign = "center", w.fillText("✓ Template Selected", (ve.x1 + ve.x2) / 2, ve.y1 - 8)), _e && De.length > 0 && L) {
      let q = 0, ce = 0, fe = 0;
      De.forEach((Se) => {
        const Te = Nt(Se.segmentation), [He, it] = Se.segmentation.size;
        for (let tt = 0; tt < He; tt++)
          for (let gt = 0; gt < it; gt++) {
            const on = tt * it + gt;
            Te[on] === 1 && (q += gt, ce += tt, fe++);
          }
      });
      const be = fe > 0 ? q / fe : 0, de = fe > 0 ? ce / fe : 0, ge = L.x - be, he = L.y - de;
      De.forEach((Se) => {
        try {
          const Te = Nt(Se.segmentation), [He, it] = Se.segmentation.size, tt = document.createElement("canvas");
          tt.width = it, tt.height = He;
          const gt = tt.getContext("2d");
          gt && gn(gt, Te, it, He, "#f97316", 0.5), w.drawImage(tt, ge, he);
          const [on, co, uo, fo] = Se.bbox;
          w.strokeStyle = "#f97316", w.lineWidth = 2, w.setLineDash([5, 5]), w.strokeRect(on + ge, co + he, uo, fo), w.setLineDash([]);
        } catch (Te) {
          console.warn("Failed to draw paste preview:", Te);
        }
      }), w.fillStyle = "rgba(249, 115, 22, 0.9)", w.font = "bold 14px Arial", w.textAlign = "center", w.textBaseline = "bottom", w.fillText("Click to place / Right-click to cancel", L.x, L.y - 15), w.strokeStyle = "#f97316", w.lineWidth = 2, w.beginPath(), w.moveTo(L.x - 10, L.y), w.lineTo(L.x + 10, L.y), w.moveTo(L.x, L.y - 10), w.lineTo(L.x, L.y + 10), w.stroke();
    }
    if ($ === "polygon" && u.length > 0) {
      w.beginPath(), w.moveTo(u[0].x, u[0].y);
      for (let q = 1; q < u.length; q++)
        w.lineTo(u[q].x, u[q].y);
      if (L && (w.lineTo(L.x, L.y), u.length >= 2 && (w.setLineDash([4, 4]), w.lineTo(u[0].x, u[0].y), w.setLineDash([]))), w.strokeStyle = "#ffffff", w.lineWidth = 4, w.stroke(), w.strokeStyle = "#10b981", w.lineWidth = 2, w.stroke(), u.forEach((q, ce) => {
        const fe = ce === 0, be = fe ? 10 : 7;
        w.beginPath(), w.arc(q.x, q.y, be + 2, 0, Math.PI * 2), w.fillStyle = "rgba(0, 0, 0, 0.5)", w.fill(), w.beginPath(), w.arc(q.x, q.y, be, 0, Math.PI * 2), w.fillStyle = fe ? "#fbbf24" : "#ffffff", w.fill(), w.strokeStyle = "#10b981", w.lineWidth = 2, w.stroke(), fe && u.length >= 3 && (w.fillStyle = "#10b981", w.font = "bold 10px Arial", w.textAlign = "center", w.textBaseline = "bottom", w.fillText("Close", q.x, q.y - 14));
      }), u.length > 0) {
        const q = u[u.length - 1];
        w.fillStyle = "rgba(16, 185, 129, 0.9)", w.font = "bold 12px Arial", w.textAlign = "left", w.textBaseline = "top";
        const ce = u.length >= 3 ? "Left-click to continue / Enter or click start to close / Esc to cancel" : `Added ${u.length} points, at least 3 points needed`;
        w.fillText(ce, q.x + 15, q.y);
      }
    }
    if ($ === "brush" && z.length > 1) {
      w.beginPath(), w.moveTo(z[0].x, z[0].y);
      for (let q = 1; q < z.length; q++)
        w.lineTo(z[q].x, z[q].y);
      w.strokeStyle = "rgba(34, 197, 94, 0.85)", w.lineWidth = ze, w.lineCap = "round", w.lineJoin = "round", w.stroke();
    }
    $ === "line" && M && le && (w.beginPath(), w.moveTo(M.x, M.y), w.lineTo(le.x, le.y), w.strokeStyle = "rgba(249, 115, 22, 0.95)", w.lineWidth = ot, w.lineCap = "round", w.stroke());
  }, [T, J, Q, K, oe, F, W, U, $, ye, ve, _e, De, L, u, f, I, z, M, le, ze, ot]);
  $e(() => {
    if (Ee.length === 1) {
      const B = J.find((w) => w.id === Ee[0]);
      if (B && B.id !== W) {
        const w = Nt(B.segmentation), [ie, q] = B.segmentation.size, ce = Ga(w, q, ie), fe = Qa(ce, 16);
        me(fe.map((be, de) => ({ ...be, index: de }))), re(B.id);
      }
    } else
      me([]), re(null);
  }, [Ee, J, W]);
  const rt = Oe((B, w) => {
    const ie = 10 / f;
    for (let q = 0; q < F.length; q++) {
      const ce = F[q].x - B, fe = F[q].y - w;
      if (Math.sqrt(ce * ce + fe * fe) < ie)
        return q;
    }
    return null;
  }, [F, f]), ke = Oe((B, w, ie, q, ce, fe) => {
    const be = ce - ie, de = fe - q, ge = be * be + de * de;
    if (ge === 0)
      return {
        distance: Math.sqrt((B - ie) ** 2 + (w - q) ** 2),
        point: { x: ie, y: q }
      };
    let he = ((B - ie) * be + (w - q) * de) / ge;
    he = Math.max(0, Math.min(1, he));
    const Se = ie + he * be, Te = q + he * de;
    return {
      distance: Math.sqrt((B - Se) ** 2 + (w - Te) ** 2),
      point: { x: Se, y: Te }
    };
  }, []), Pe = Oe((B, w) => {
    if (F.length < 2) return null;
    let ie = 1 / 0, q = -1, ce = { x: 0, y: 0 };
    for (let fe = 0; fe < F.length; fe++) {
      const be = F[fe], de = F[(fe + 1) % F.length], ge = ke(B, w, be.x, be.y, de.x, de.y);
      ge.distance < ie && (ie = ge.distance, q = fe + 1, ce = ge.point);
    }
    return q === -1 ? null : {
      insertIndex: q === F.length ? F.length : q,
      point: ce,
      distance: ie
    };
  }, [F, ke]), je = Oe((B, w) => {
    if (!W || F.length < 3) return !1;
    const ie = 15 / f, q = Pe(B, w);
    if (!q || q.distance > ie) return !1;
    const fe = [
      ...F.slice(0, q.insertIndex),
      { x: q.point.x, y: q.point.y, index: q.insertIndex },
      ...F.slice(q.insertIndex)
    ].map((be, de) => ({ ...be, index: de }));
    return me(fe), !0;
  }, [W, F, f, Pe]), Ke = Oe((B, w) => {
    if (!T) return null;
    const ie = J.filter((q) => q.imageId === T.id && q.visible);
    for (let q = ie.length - 1; q >= 0; q--) {
      const ce = ie[q], [fe, be] = ce.segmentation.size, [de, ge, he, Se] = ce.bbox;
      if (B < de || B > de + he || w < ge || w > ge + Se)
        continue;
      const Te = Nt(ce.segmentation), He = Math.floor(B), it = Math.floor(w);
      if (He >= 0 && He < be && it >= 0 && it < fe) {
        const tt = it * be + He;
        if (Te[tt] === 1)
          return ce.id;
      }
    }
    return null;
  }, [T, J]), mt = Oe(async (B, w, ie) => {
    if (console.log("[addPointAndUpdatePreview] Add point, x:", B, "y:", w, "label:", ie, "(", ie === 1 ? "positive" : "negative", ")"), !T || T.isLocalOnly) {
      T != null && T.isLocalOnly && xe("Local images cannot be segmented with SAM3. Please make sure the backend connection is working.");
      return;
    }
    if (!Ie) {
      xe("Please select or create a category first.");
      return;
    }
    const q = { x: B, y: w, label: ie }, ce = [...Q, q], fe = Q.length === 0;
    if (H(q), !ce.some((de) => de.label === 1)) {
      xe("Please left-click the object you want to segment first");
      return;
    }
    try {
      qe(!0), xe(null), console.log("[addPointAndUpdatePreview] Call API to update preview:", {
        imageId: T.id,
        points: ce,
        positiveCount: ce.filter((ge) => ge.label === 1).length,
        negativeCount: ce.filter((ge) => ge.label === 0).length,
        isFirstPoint: fe,
        resetMask: fe
      });
      const de = await to(
        T.id,
        ce,
        Ue,
        fe
        // resetMask: reset mask state on first point
      );
      if (console.log("[addPointAndUpdatePreview] Results:", de.length, "segmentations"), de.length > 0) {
        const ge = de.reduce((he, Se) => he.score > Se.score ? he : Se);
        S({
          mask_rle: ge.mask_rle,
          box: ge.box,
          score: ge.score,
          area: ge.area
        });
      } else
        console.warn("[addPointAndUpdatePreview] No segmentation results"), S(null);
    } catch (de) {
      console.error("[addPointAndUpdatePreview] Error:", de), xe(de instanceof Error ? de.message : "Segmentation failed");
    } finally {
      qe(!1);
    }
  }, [T, Ie, Q, Ue, qe, xe, H, S]), Be = Oe(async (B) => {
    if (console.log("[updateBoxPreview] Box selection complete, box:", B), !T || T.isLocalOnly) {
      T != null && T.isLocalOnly && xe("Local images cannot be segmented with SAM3. Please make sure the backend connection is working.");
      return;
    }
    if (!Ie) {
      xe("Please select or create a category first.");
      return;
    }
    try {
      qe(!0), xe(null);
      const w = await no(
        T.id,
        B,
        !0,
        // positive label
        Ue
      );
      if (console.log("[updateBoxPreview] Results:", w.length, "segmentations"), w.length > 0) {
        const ie = w.reduce((q, ce) => q.score > ce.score ? q : ce);
        S({
          mask_rle: ie.mask_rle,
          box: ie.box,
          score: ie.score,
          area: ie.area
        }), V(null);
      } else
        console.warn("[updateBoxPreview] No segmentation results"), S(null), V(null);
    } catch (w) {
      console.error("[updateBoxPreview] Error:", w), xe(w instanceof Error ? w.message : "Segmentation failed"), V(null);
    } finally {
      qe(!1);
    }
  }, [T, Ie, Ue, qe, xe, S, V]), Ve = Oe((B) => {
    if (console.log("[saveTemplate] Save template:", B), !T) {
      xe("Please select an image first.");
      return;
    }
    R(T), X(B), V(null), console.log("[saveTemplate] Template saved, imageId:", T.id);
  }, [T, R, X, V, xe]), wt = Oe(async () => {
    if (console.log("[applyTemplate] Apply template"), !T || T.isLocalOnly) {
      xe("Please select an uploaded image first.");
      return;
    }
    if (!ye || !ve) {
      xe("Please select a template first (draw a box around an example object in the image).");
      return;
    }
    if (!Ie) {
      xe("Please select or create a category first.");
      return;
    }
    try {
      qe(!0), xe(null), console.log("[applyTemplate] Call API:", {
        imageId: T.id,
        templateImageId: ye.id,
        templateBox: ve
      });
      const B = await ro(
        T.id,
        ye.id,
        ve,
        Ue
      );
      if (console.log("[applyTemplate] Results:", B.length, "segmentations"), B.length > 0) {
        const w = Me.find((ce) => ce.id === Ie), ie = (w == null ? void 0 : w.name) || "object", q = B.map((ce) => ({
          imageId: T.id,
          categoryId: Ie,
          categoryName: ie,
          segmentation: ce.mask_rle,
          bbox: ce.box,
          score: ce.score,
          area: ce.area
        }));
        Re(q), S(null), console.log(`[applyTemplate] Added ${B.length} annotations`);
      } else
        xe("No similar objects were found."), S(null);
    } catch (B) {
      console.error("[applyTemplate] Error:", B), xe(B instanceof Error ? B.message : "Template matching failed.");
    } finally {
      qe(!1);
    }
  }, [T, ye, ve, Ie, Me, Ue, qe, xe, S, Re]), Xe = Oe(() => {
    R(null), X(null), console.log("[clearTemplate] Template cleared");
  }, [R, X]), Ge = Oe(() => {
    if (console.log("[confirmSegmentation] Confirm segmentation"), !T || !oe) {
      xe("No segmentation result available to confirm.");
      return;
    }
    if (!Ie) {
      xe("Please select or create a category first.");
      return;
    }
    const B = Me.find((w) => w.id === Ie);
    if (!B) {
      xe("Selected category not found.");
      return;
    }
    pe({
      imageId: T.id,
      categoryId: B.id,
      categoryName: B.name,
      segmentation: oe.mask_rle,
      bbox: oe.box,
      area: oe.area,
      score: oe.score
    }), E(), xe(null), console.log("[confirmSegmentation] Annotation created successfully");
  }, [T, oe, Ie, Me, pe, E, xe]), _t = Oe(() => {
    if (console.log("[confirmPolygon] Confirm polygon, vertex count:", u.length), !T) {
      xe("Please select an image first.");
      return;
    }
    if (u.length < 3) {
      xe("A polygon requires at least 3 vertices.");
      return;
    }
    if (!Ie) {
      xe("Please select or create a category first.");
      return;
    }
    const B = Me.find((Te) => Te.id === Ie);
    if (!B) {
      xe("Selected category not found.");
      return;
    }
    const w = T.width, ie = T.height, q = hr(u, w, ie), ce = $t(q, w, ie), fe = q.reduce((Te, He) => Te + He, 0);
    let be = w, de = ie, ge = 0, he = 0;
    for (const Te of u)
      be = Math.min(be, Te.x), de = Math.min(de, Te.y), ge = Math.max(ge, Te.x), he = Math.max(he, Te.y);
    const Se = [be, de, ge - be, he - de];
    pe({
      imageId: T.id,
      categoryId: B.id,
      categoryName: B.name,
      segmentation: ce,
      bbox: Se,
      area: fe,
      score: 1
      // Manual annotation score is 1.0
    }), D(), xe(null), console.log("[confirmPolygon] Polygon annotation created successfully");
  }, [T, u, Ie, Me, pe, D, xe]), pt = Oe((B) => {
    if (!T) return;
    if (B.button === 1) {
      B.preventDefault(), h(!0), g({ x: B.clientX - l.x, y: B.clientY - l.y });
      return;
    }
    const { x: w, y: ie } = ct(B.clientX, B.clientY);
    if (_e) {
      B.button === 0 ? Ne(w, ie) : B.button === 2 && Fe();
      return;
    }
    if ($ === "polygon") {
      if (B.button === 0) {
        if (u.length >= 3) {
          const q = u[0], ce = Math.sqrt((w - q.x) ** 2 + (ie - q.y) ** 2), fe = 15 / f;
          if (ce < fe) {
            _t();
            return;
          }
        }
        ee({ x: w, y: ie });
      }
      return;
    }
    if (F.length > 0) {
      const q = rt(w, ie);
      if (q !== null) {
        te(q);
        return;
      }
      if (B.detail === 2 && je(w, ie))
        return;
    }
    if ($ === "hand")
      h(!0), g({ x: B.clientX - l.x, y: B.clientY - l.y });
    else if ($ === "brush")
      B.button === 0 && (P(!0), Z([{ x: w, y: ie }]));
    else if ($ === "line")
      B.button === 0 && (G({ x: w, y: ie }), N({ x: w, y: ie }));
    else if ($ === "pointer") {
      const q = Ke(w, ie);
      if (q) {
        ue(q, B.ctrlKey || B.metaKey || B.shiftKey);
        return;
      } else
        !B.ctrlKey && !B.metaKey && !B.shiftKey && se();
      h(!0), g({ x: B.clientX - l.x, y: B.clientY - l.y });
    } else $ === "add-point" || $ === "remove-point" ? B.button === 0 && mt(w, ie, 1) : ($ === "box" || $ === "template") && (_(!0), C({ x: w, y: ie }), V({ x1: w, y1: ie, x2: w, y2: ie }));
  }, [T, $, ct, l, V, F, rt, Ke, ue, se, mt, _e, Ne, Fe, u, f, ee, _t, je]), On = Oe((B) => {
    if (B.preventDefault(), console.log("[handleContextMenu] Right-click, currentTool:", $), ($ === "add-point" || $ === "remove-point") && T) {
      const { x: w, y: ie } = ct(B.clientX, B.clientY);
      console.log("[handleContextMenu] Adding negative point, x:", w, "y:", ie), mt(w, ie, 0);
    }
  }, [$, T, ct, mt]);
  $e(() => {
    const B = (w) => {
      const ie = $ === "add-point" || $ === "remove-point", q = $ === "box", ce = $ === "template", fe = $ === "polygon";
      !ie && !q && !ce && !fe || (w.key === "Enter" ? (w.preventDefault(), fe && u.length >= 3 ? (console.log("[handleKeyDown] Enter pressed, confirming polygon"), _t()) : ce && ye && ve && !oe ? T && T.id === ye.id ? (console.log("[handleKeyDown] Enter pressed, applying template (same image)"), wt()) : (console.log("[handleKeyDown] Cross-image templates are not supported"), xe('The template feature only supports matching within the same image. For cross-image use, please use the "text" tool.')) : oe && (console.log("[handleKeyDown] Enter pressed, confirming segmentation"), Ge())) : w.key === "Escape" && (w.preventDefault(), console.log("[handleKeyDown] Escape pressed — clearing temporary UI state"), _(!1), h(!1), y(null), te(null), O(null), fe ? D() : (E(), S(null), ce && Xe()), xe(null)));
    };
    return window.addEventListener("keydown", B), () => window.removeEventListener("keydown", B);
  }, [$, Ge, _t, E, D, S, xe, ye, ve, oe, wt, Xe, u, T]);
  const ao = Oe((B) => {
    if (!T) return;
    const { x: w, y: ie } = ct(B.clientX, B.clientY);
    if (_e) {
      y({ x: w, y: ie });
      return;
    }
    if ($ === "polygon" && u.length > 0 && y({ x: w, y: ie }), A) {
      Z((q) => [...q, { x: w, y: ie }]);
      return;
    }
    if ($ === "line" && M) {
      N({ x: w, y: ie });
      return;
    }
    if (U !== null) {
      const q = [...F];
      q[U] = { ...q[U], x: w, y: ie }, me(q), O(null);
      return;
    }
    if (W && F.length >= 3 && !p && !b)
      if (rt(w, ie) === null) {
        const ce = 15 / f, fe = Pe(w, ie);
        fe && fe.distance < ce ? O(fe.point) : O(null);
      } else
        O(null);
    else
      O(null);
    p ? x({
      x: B.clientX - c.x,
      y: B.clientY - c.y
    }) : b && V({
      x1: Math.min(k.x, w),
      y1: Math.min(k.y, ie),
      x2: Math.max(k.x, w),
      y2: Math.max(k.y, ie)
    });
  }, [T, p, b, c, k, ct, V, U, F, _e, $, u, W, f, rt, Pe, A, M]), Rn = Oe(() => {
    if (A) {
      if (T && z.length > 1 && Ie) {
        const B = Me.find((w) => w.id === Ie);
        if (!B)
          xe("Please select or create a category first.");
        else {
          const w = ei(z, T.width, T.height, ze), ie = $t(w, T.width, T.height), q = w.reduce((ce, fe) => ce + fe, 0);
          if (q > 0) {
            let ce = T.width, fe = T.height, be = 0, de = 0;
            for (let ge = 0; ge < T.height; ge++)
              for (let he = 0; he < T.width; he++) {
                const Se = ge * T.width + he;
                w[Se] === 1 && (ce = Math.min(ce, he), fe = Math.min(fe, ge), be = Math.max(be, he), de = Math.max(de, ge));
              }
            pe({
              imageId: T.id,
              categoryId: B.id,
              categoryName: B.name,
              segmentation: ie,
              bbox: [ce, fe, be - ce + 1, de - fe + 1],
              area: q,
              score: 1
            });
          }
        }
      }
      P(!1), Z([]);
      return;
    }
    if (M && le) {
      if (T && Ie) {
        const B = Me.find((w) => w.id === Ie);
        if (!B)
          xe("Please select or create a category first.");
        else if (Math.sqrt((le.x - M.x) ** 2 + (le.y - M.y) ** 2) >= 2) {
          const ie = ti(M, le, T.width, T.height, ot), q = $t(ie, T.width, T.height), ce = ie.reduce((fe, be) => fe + be, 0);
          if (ce > 0) {
            let fe = T.width, be = T.height, de = 0, ge = 0;
            for (let he = 0; he < T.height; he++)
              for (let Se = 0; Se < T.width; Se++) {
                const Te = he * T.width + Se;
                ie[Te] === 1 && (fe = Math.min(fe, Se), be = Math.min(be, he), de = Math.max(de, Se), ge = Math.max(ge, he));
              }
            pe({
              imageId: T.id,
              categoryId: B.id,
              categoryName: B.name,
              segmentation: q,
              bbox: [fe, be, de - fe + 1, ge - be + 1],
              area: ce,
              score: 1
            });
          }
        }
      }
      G(null), N(null);
      return;
    }
    if (U !== null && W && F.length >= 3) {
      const B = J.find((w) => w.id === W);
      if (B) {
        const [w, ie] = B.segmentation.size, q = hr(F, ie, w), ce = $t(q, ie, w), fe = q.reduce((Se, Te) => Se + Te, 0);
        let be = ie, de = w, ge = 0, he = 0;
        for (const Se of F)
          be = Math.min(be, Se.x), de = Math.min(de, Se.y), ge = Math.max(ge, Se.x), he = Math.max(he, Se.y);
        ne(W, {
          segmentation: ce,
          bbox: [be, de, ge - be, he - de],
          area: fe
        });
      }
      te(null);
      return;
    }
    h(!1), b && K && (_(!1), Math.abs((K.x2 - K.x1) * (K.y2 - K.y1)) < 100 ? V(null) : $ === "template" ? Ve(K) : Be(K));
  }, [b, K, V, U, W, F, J, ne, Be, $, Ve, A, T, z, Ie, Me, ze, pe, xe, M, le, ot]), io = Oe((B) => {
    if (B.preventDefault(), !a.current) return;
    const w = a.current.getBoundingClientRect(), ie = B.clientX - w.left, q = B.clientY - w.top, ce = (ie - l.x) / f, fe = (q - l.y) / f, be = B.deltaY > 0 ? 0.9 : 1.1, de = Math.max(0.1, Math.min(5, f * be)), ge = ie - ce * de, he = q - fe * de;
    m(de), x({ x: ge, y: he });
  }, [f, l]);
  $e(() => {
    vt();
  }, [vt]), $e(() => {
    at();
  }, [at]), $e(() => {
    if (!T || !a.current) return;
    const B = a.current, w = B.clientWidth / T.width, ie = B.clientHeight / T.height, q = Math.min(w, ie, 1);
    m(q), x({
      x: (B.clientWidth - T.width * q) / 2,
      y: (B.clientHeight - T.height * q) / 2
    });
  }, [T]);
  const lo = () => {
    if (p) return "cursor-grabbing";
    if (_e) return "tool-paste";
    switch ($) {
      case "hand":
        return "tool-hand";
      case "pointer":
        return "tool-pointer";
      case "add-point":
        return "tool-add-point";
      case "remove-point":
        return "tool-remove-point";
      case "box":
        return "tool-box";
      case "brush":
        return "tool-brush";
      case "line":
        return "tool-line";
      case "text":
        return "tool-text";
      case "template":
        return "tool-template";
      case "polygon":
        return "tool-polygon";
      default:
        return "";
    }
  };
  return T ? /* @__PURE__ */ v(
    "div",
    {
      ref: a,
      className: `flex-1 overflow-hidden bg-surface-900 relative annotation-canvas ${lo()}`,
      onMouseDown: pt,
      onMouseMove: ao,
      onMouseUp: Rn,
      onMouseLeave: Rn,
      onWheel: io,
      onContextMenu: On,
      onAuxClick: (B) => B.preventDefault(),
      children: /* @__PURE__ */ Y(
        "div",
        {
          style: {
            transform: `translate(${l.x}px, ${l.y}px) scale(${f})`,
            transformOrigin: "0 0",
            position: "absolute"
          },
          children: [
            /* @__PURE__ */ v(
              "canvas",
              {
                ref: o,
                style: { position: "absolute", top: 0, left: 0 }
              }
            ),
            /* @__PURE__ */ v(
              "canvas",
              {
                ref: s,
                style: { position: "absolute", top: 0, left: 0, pointerEvents: "none" }
              }
            )
          ]
        }
      )
    }
  ) : /* @__PURE__ */ v("div", { className: "flex-1 flex items-center justify-center empty-canvas-bg", children: /* @__PURE__ */ Y("div", { className: "text-center animate-fade-in", children: [
    /* @__PURE__ */ v("div", { className: "w-16 h-16 mx-auto mb-4 rounded-2xl bg-surface-100 flex items-center justify-center", children: /* @__PURE__ */ Y("svg", { width: "32", height: "32", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round", className: "text-surface-300", children: [
      /* @__PURE__ */ v("rect", { x: "3", y: "3", width: "18", height: "18", rx: "2" }),
      /* @__PURE__ */ v("circle", { cx: "8.5", cy: "8.5", r: "1.5" }),
      /* @__PURE__ */ v("path", { d: "m21 15-5-5L5 21" })
    ] }) }),
    /* @__PURE__ */ v("p", { className: "text-sm font-medium text-surface-500 mb-1", children: "Upload an image to start" }),
    /* @__PURE__ */ v("p", { className: "text-xs text-surface-300", children: "JPG, PNG, WebP, BMP supported" })
  ] }) });
}), ri = {
  brand: "bg-brand-100 text-brand-700",
  surface: "bg-surface-100 text-surface-500",
  success: "bg-emerald-100 text-emerald-700",
  danger: "bg-rose-100 text-rose-700",
  warning: "bg-amber-100 text-amber-700"
}, oi = {
  sm: "text-2xs px-1.5 py-0.5",
  md: "text-xs px-2 py-0.5"
};
function si({ children: t, variant: r = "surface", size: e = "sm" }) {
  return /* @__PURE__ */ v("span", { className: `inline-flex items-center font-semibold rounded-full ${ri[r]} ${oi[e]}`, children: t });
}
function mr({ icon: t, title: r, description: e, compact: n }) {
  return /* @__PURE__ */ Y("div", { className: `flex flex-col items-center justify-center text-center ${n ? "py-6" : "py-10"}`, children: [
    /* @__PURE__ */ v("div", { className: `mb-3 text-surface-300 ${n ? "" : "scale-125"}`, children: t }),
    /* @__PURE__ */ v("p", { className: "text-sm font-medium text-surface-400", children: r }),
    e && /* @__PURE__ */ v("p", { className: "text-xs text-surface-300 mt-1", children: e })
  ] });
}
function pr({ icon: t, title: r, count: e, collapsed: n, onToggle: o, action: s }) {
  return /* @__PURE__ */ Y("div", { className: "flex items-center justify-between gap-2", children: [
    /* @__PURE__ */ Y(
      "button",
      {
        onClick: o,
        className: "flex items-center gap-2 flex-1 min-w-0 group",
        disabled: !o,
        children: [
          t && /* @__PURE__ */ v("span", { className: "text-surface-400 flex-shrink-0", children: t }),
          /* @__PURE__ */ v("span", { className: "section-title truncate", children: r }),
          e !== void 0 && /* @__PURE__ */ v("span", { className: "badge badge-surface", children: e }),
          o && /* @__PURE__ */ v(
            Sn,
            {
              size: 14,
              className: `text-surface-400 transition-transform duration-200 ml-auto ${n ? "-rotate-90" : ""}`
            }
          )
        ]
      }
    ),
    s && /* @__PURE__ */ v("div", { className: "flex-shrink-0", children: s })
  ] });
}
function ai() {
  const {
    annotations: t,
    currentImage: r,
    selectedAnnotationIds: e,
    selectAnnotation: n,
    toggleAnnotationVisibility: o,
    setAllAnnotationsVisibility: s,
    deleteAnnotation: a,
    updateAnnotation: i,
    categories: d,
    currentCategoryId: f,
    setCurrentCategoryId: m,
    addCategory: l,
    deleteCategory: x,
    updateCategory: p
  } = ft(), h = r ? t.filter((Q) => Q.imageId === r.id) : [], [c, g] = Ae(/* @__PURE__ */ new Set()), [b, _] = Ae(!1), [k, C] = Ae(""), [A, P] = Ae(At[0]), [z, Z] = Ae(null), [M, G] = Ae(""), [le, N] = Ae(null), [L, y] = Ae(null), [W, re] = Ae(null), F = (Q, K) => {
    const oe = d.find((ye) => ye.id === K);
    oe && i(Q, {
      categoryId: K,
      categoryName: oe.name,
      color: oe.color
    }), y(null);
  }, me = (Q, K, oe) => {
    const ye = oe.ctrlKey || oe.metaKey;
    if (oe.shiftKey && W !== null) {
      const _e = Math.min(W, K), De = Math.max(W, K);
      h.slice(_e, De + 1).map((V) => V.id).forEach((V, H) => {
        n(V, H > 0);
      });
    } else
      n(Q, ye), re(K);
  }, U = (Q) => {
    const K = new Set(c);
    K.has(Q) ? K.delete(Q) : K.add(Q), g(K);
  }, te = () => {
    k.trim() && (l(k.trim(), A), C(""), P(At[0]), _(!1), N(null));
  }, I = (Q) => {
    Z(Q.id), G(Q.name);
  }, O = () => {
    z && M.trim() && (p(z, { name: M.trim() }), Z(null), G(""));
  }, T = (Q) => {
    confirm("Are you sure you want to delete this category? Related annotations will not be deleted.") && x(Q);
  }, J = (Q, K) => {
    p(Q, { color: K }), N(null);
  }, $ = h.reduce((Q, K) => {
    const oe = K.categoryId;
    return Q[oe] || (Q[oe] = []), Q[oe].push(K), Q;
  }, {}), Ee = h.length > 0 && h.every((Q) => Q.visible);
  return /* @__PURE__ */ Y("div", { className: "flex-1 flex flex-col overflow-hidden bg-white", children: [
    /* @__PURE__ */ Y("div", { className: "sidebar-section", children: [
      /* @__PURE__ */ v(
        pr,
        {
          icon: /* @__PURE__ */ v(yn, { size: 14 }),
          title: "Categories",
          count: d.length,
          action: /* @__PURE__ */ v(
            "button",
            {
              onClick: () => _(!0),
              className: "icon-btn !p-1 hover:!text-brand-500 hover:!bg-brand-50",
              "aria-label": "Add Category",
              children: /* @__PURE__ */ v(Sr, { size: 14 })
            }
          )
        }
      ),
      b && /* @__PURE__ */ Y("div", { className: "mt-3 space-y-2 animate-slide-down", children: [
        /* @__PURE__ */ Y("div", { className: "flex gap-1.5", children: [
          /* @__PURE__ */ v(
            "button",
            {
              onClick: () => N(le === "new" ? null : "new"),
              className: "p-2 border border-surface-200 rounded-lg hover:bg-surface-50 transition-all",
              title: "Select color",
              children: /* @__PURE__ */ v(
                "div",
                {
                  className: "w-4 h-4 rounded",
                  style: { backgroundColor: A }
                }
              )
            }
          ),
          /* @__PURE__ */ v(
            "input",
            {
              type: "text",
              value: k,
              onChange: (Q) => C(Q.target.value),
              placeholder: "Category name...",
              className: "flex-1 p-2 text-sm border border-surface-200 rounded-lg focus:ring-2 focus:ring-brand-500/20 focus:border-brand-400 bg-white transition-all",
              autoFocus: !0,
              onKeyDown: (Q) => {
                Q.key === "Enter" && te(), Q.key === "Escape" && (_(!1), C(""), N(null));
              }
            }
          ),
          /* @__PURE__ */ v(
            "button",
            {
              onClick: te,
              disabled: !k.trim(),
              className: "p-2 bg-brand-600 text-white rounded-lg hover:bg-brand-700 disabled:opacity-40 disabled:cursor-not-allowed transition-all",
              children: /* @__PURE__ */ v(sn, { size: 14 })
            }
          ),
          /* @__PURE__ */ v(
            "button",
            {
              onClick: () => {
                _(!1), C(""), N(null);
              },
              className: "icon-btn !p-2",
              children: /* @__PURE__ */ v(xt, { size: 14 })
            }
          )
        ] }),
        le === "new" && /* @__PURE__ */ v("div", { className: "p-2.5 bg-surface-50 rounded-lg border border-surface-200 animate-fade-in", children: /* @__PURE__ */ v("div", { className: "grid grid-cols-10 gap-1", children: At.map((Q) => /* @__PURE__ */ v(
          "button",
          {
            onClick: () => {
              P(Q), N(null);
            },
            className: `w-5 h-5 rounded-md transition-all hover:scale-110 ${A === Q ? "ring-2 ring-offset-1 ring-brand-400" : ""}`,
            style: { backgroundColor: Q }
          },
          Q
        )) }) })
      ] }),
      d.length === 0 ? /* @__PURE__ */ v(
        mr,
        {
          icon: /* @__PURE__ */ v(yn, { size: 28, strokeWidth: 1.5 }),
          title: "No categories",
          description: "Click + to add a category",
          compact: !0
        }
      ) : /* @__PURE__ */ v("div", { className: "space-y-0.5 mt-3 max-h-44 overflow-y-auto", children: d.map((Q, K) => /* @__PURE__ */ Y("div", { className: "relative", children: [
        /* @__PURE__ */ Y(
          "div",
          {
            className: `
                    group flex items-center gap-2 px-2.5 py-2 rounded-lg cursor-pointer transition-all duration-200
                    ${f === Q.id ? "bg-brand-50/80 border border-brand-200/60 shadow-sm" : "border border-transparent hover:bg-surface-50 hover:border-surface-200/60"}
                  `,
            onClick: () => m(Q.id),
            children: [
              /* @__PURE__ */ v(
                "button",
                {
                  onClick: (oe) => {
                    oe.stopPropagation(), N(le === Q.id ? null : Q.id);
                  },
                  className: "w-3.5 h-3.5 rounded-full flex-shrink-0 hover:ring-2 hover:ring-offset-1 hover:ring-surface-300 transition-all shadow-sm",
                  style: { backgroundColor: Q.color },
                  title: "Click to change color"
                }
              ),
              z === Q.id ? /* @__PURE__ */ v(
                "input",
                {
                  type: "text",
                  value: M,
                  onChange: (oe) => G(oe.target.value),
                  className: "flex-1 p-1 text-sm border border-brand-300 rounded-md focus:outline-none focus:ring-1 focus:ring-brand-400",
                  autoFocus: !0,
                  onClick: (oe) => oe.stopPropagation(),
                  onKeyDown: (oe) => {
                    oe.key === "Enter" && O(), oe.key === "Escape" && (Z(null), G(""));
                  }
                }
              ) : /* @__PURE__ */ Y("span", { className: "flex-1 text-sm text-surface-600 truncate", children: [
                K < 9 && /* @__PURE__ */ v("span", { className: "text-surface-300 mr-1 text-xs", children: K + 1 }),
                Q.name
              ] }),
              /* @__PURE__ */ Y("div", { className: "flex items-center gap-0.5 opacity-0 group-hover:opacity-100 transition-opacity", children: [
                z === Q.id ? /* @__PURE__ */ v(
                  "button",
                  {
                    onClick: (oe) => {
                      oe.stopPropagation(), O();
                    },
                    className: "p-1 hover:bg-brand-100 rounded text-brand-600",
                    children: /* @__PURE__ */ v(sn, { size: 13 })
                  }
                ) : /* @__PURE__ */ v(
                  "button",
                  {
                    onClick: (oe) => {
                      oe.stopPropagation(), I(Q);
                    },
                    className: "p-1 hover:bg-surface-200 rounded text-surface-400",
                    children: /* @__PURE__ */ v(To, { size: 13 })
                  }
                ),
                /* @__PURE__ */ v(
                  "button",
                  {
                    onClick: (oe) => {
                      oe.stopPropagation(), T(Q.id);
                    },
                    className: "p-1 hover:bg-rose-50 rounded text-surface-400 hover:text-rose-500",
                    children: /* @__PURE__ */ v(Xt, { size: 13 })
                  }
                )
              ] })
            ]
          }
        ),
        le === Q.id && /* @__PURE__ */ v("div", { className: "absolute left-0 right-0 mt-1 p-2.5 bg-white rounded-lg border border-surface-200 shadow-float z-10 animate-fade-in", children: /* @__PURE__ */ v("div", { className: "grid grid-cols-10 gap-1", children: At.map((oe) => /* @__PURE__ */ v(
          "button",
          {
            onClick: () => J(Q.id, oe),
            className: `w-5 h-5 rounded-md transition-all hover:scale-110 ${Q.color === oe ? "ring-2 ring-offset-1 ring-brand-400" : ""}`,
            style: { backgroundColor: oe }
          },
          oe
        )) }) })
      ] }, Q.id)) })
    ] }),
    /* @__PURE__ */ Y("div", { className: "flex-1 overflow-y-auto", children: [
      /* @__PURE__ */ v("div", { className: "sidebar-section border-b-0", children: /* @__PURE__ */ v(
        pr,
        {
          icon: /* @__PURE__ */ v(Mn, { size: 14 }),
          title: "Annotations",
          count: h.length,
          action: /* @__PURE__ */ v(
            "button",
            {
              onClick: () => s(!Ee),
              disabled: h.length === 0,
              className: "btn-ghost !text-2xs disabled:opacity-40 disabled:cursor-not-allowed",
              children: Ee ? "Hide All" : "Show All"
            }
          )
        }
      ) }),
      /* @__PURE__ */ Y("div", { className: "px-3 pb-3", children: [
        d.map((Q) => {
          const K = $[Q.id] || [];
          if (K.length === 0) return null;
          const oe = c.has(Q.id);
          return /* @__PURE__ */ Y("div", { className: "mb-1", children: [
            /* @__PURE__ */ Y(
              "button",
              {
                onClick: () => U(Q.id),
                className: "w-full flex items-center gap-2 px-2.5 py-2 hover:bg-surface-50 rounded-lg text-left transition-all duration-150",
                children: [
                  oe ? /* @__PURE__ */ v(Sn, { size: 14, className: "text-surface-400" }) : /* @__PURE__ */ v(vr, { size: 14, className: "text-surface-400" }),
                  /* @__PURE__ */ v(
                    "span",
                    {
                      className: "w-2.5 h-2.5 rounded-full shadow-sm",
                      style: { backgroundColor: Q.color }
                    }
                  ),
                  /* @__PURE__ */ v("span", { className: "flex-1 text-sm font-medium text-surface-600", children: Q.name }),
                  /* @__PURE__ */ v(si, { variant: "surface", children: K.length })
                ]
              }
            ),
            oe && /* @__PURE__ */ v("div", { className: "ml-5 mt-0.5 space-y-0.5 animate-slide-down", children: K.map((ye) => {
              const ve = h.findIndex((_e) => _e.id === ye.id);
              return /* @__PURE__ */ Y("div", { className: "relative", children: [
                /* @__PURE__ */ Y(
                  "div",
                  {
                    onClick: (_e) => {
                      L !== ye.id && me(ye.id, ve, _e);
                    },
                    className: `
                              flex items-center gap-2 px-2.5 py-2 rounded-lg cursor-pointer text-sm transition-all duration-200
                              ${e.includes(ye.id) ? "bg-brand-50/80 border border-brand-200/60 shadow-sm" : "border border-transparent hover:bg-surface-50 hover:border-surface-200/40"}
                            `,
                    children: [
                      /* @__PURE__ */ v(
                        "span",
                        {
                          className: "w-2 h-2 rounded-full flex-shrink-0",
                          style: { backgroundColor: ye.color }
                        }
                      ),
                      /* @__PURE__ */ Y("span", { className: "flex-1 truncate text-surface-500 text-xs", children: [
                        ye.categoryName,
                        " #",
                        ye.id.slice(-4)
                      ] }),
                      /* @__PURE__ */ Y("span", { className: "text-2xs font-semibold text-surface-300 tabular-nums", children: [
                        (ye.score * 100).toFixed(0),
                        "%"
                      ] }),
                      /* @__PURE__ */ v(
                        "button",
                        {
                          onClick: (_e) => {
                            _e.stopPropagation(), y(
                              L === ye.id ? null : ye.id
                            );
                          },
                          className: "p-0.5 hover:bg-brand-50 rounded text-surface-300 hover:text-brand-500 transition-all",
                          title: "Change category",
                          children: /* @__PURE__ */ v(Ho, { size: 12 })
                        }
                      ),
                      /* @__PURE__ */ v(
                        "button",
                        {
                          onClick: (_e) => {
                            _e.stopPropagation(), o(ye.id);
                          },
                          className: "p-0.5 hover:bg-surface-100 rounded text-surface-300 hover:text-surface-500 transition-all",
                          title: ye.visible ? "Hide" : "Show",
                          children: ye.visible ? /* @__PURE__ */ v(_r, { size: 12 }) : /* @__PURE__ */ v(wr, { size: 12 })
                        }
                      ),
                      /* @__PURE__ */ v(
                        "button",
                        {
                          onClick: (_e) => {
                            _e.stopPropagation(), a(ye.id);
                          },
                          className: "p-0.5 hover:bg-rose-50 rounded text-surface-300 hover:text-rose-500 transition-all",
                          title: "Delete",
                          children: /* @__PURE__ */ v(Xt, { size: 12 })
                        }
                      )
                    ]
                  }
                ),
                L === ye.id && /* @__PURE__ */ Y("div", { className: "absolute left-0 right-0 top-full mt-1 bg-white border border-surface-200 rounded-lg shadow-float z-10 overflow-hidden animate-slide-down", children: [
                  /* @__PURE__ */ v("div", { className: "px-3 py-2 text-2xs text-surface-400 font-medium border-b border-surface-100", children: "Move to category" }),
                  /* @__PURE__ */ v("div", { className: "max-h-36 overflow-y-auto", children: d.map((_e) => /* @__PURE__ */ Y(
                    "button",
                    {
                      onClick: (De) => {
                        De.stopPropagation(), F(ye.id, _e.id);
                      },
                      className: `
                                    w-full flex items-center gap-2 px-3 py-2 text-sm text-left transition-colors
                                    ${_e.id === ye.categoryId ? "bg-brand-50/60 text-brand-600" : "hover:bg-surface-50 text-surface-500"}
                                  `,
                      children: [
                        /* @__PURE__ */ v(
                          "span",
                          {
                            className: "w-2.5 h-2.5 rounded-full",
                            style: { backgroundColor: _e.color }
                          }
                        ),
                        /* @__PURE__ */ v("span", { className: "flex-1 text-xs", children: _e.name }),
                        _e.id === ye.categoryId && /* @__PURE__ */ v(sn, { size: 13, className: "text-brand-500" })
                      ]
                    },
                    _e.id
                  )) })
                ] })
              ] }, ye.id);
            }) })
          ] }, Q.id);
        }),
        h.length === 0 && /* @__PURE__ */ v(
          mr,
          {
            icon: /* @__PURE__ */ v(Mn, { size: 28, strokeWidth: 1.5 }),
            title: "No annotations",
            description: "Use tools to start annotating",
            compact: !0
          }
        )
      ] })
    ] })
  ] });
}
function ii({ onSubmit: t }) {
  const { textPrompt: r, setTextPrompt: e, currentTool: n, setCurrentTool: o, isLoading: s } = ft(), [a, i] = Ae(r), d = (l) => {
    l.preventDefault(), a.trim() && (e(a.trim()), t(a.trim()));
  }, f = () => {
    i(""), e(""), o("pointer");
  }, m = () => {
    i(""), e("");
  };
  return $e(() => {
    const l = (x) => {
      x.key === "Escape" && n === "text" && f();
    };
    return window.addEventListener("keydown", l), () => window.removeEventListener("keydown", l);
  }, [n]), n !== "text" ? null : /* @__PURE__ */ v("div", { className: "absolute top-20 left-1/2 transform -translate-x-1/2 z-10", children: /* @__PURE__ */ Y("div", { className: "glass-panel p-5 min-w-[440px] animate-slide-down shadow-float", children: [
    /* @__PURE__ */ Y("div", { className: "flex items-center justify-between mb-3", children: [
      /* @__PURE__ */ Y("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ v("div", { className: "p-1.5 bg-brand-50 rounded-lg", children: /* @__PURE__ */ v(Fo, { size: 14, className: "text-brand-500" }) }),
        /* @__PURE__ */ v("span", { className: "text-sm font-semibold text-surface-700", children: "Text Prompt" }),
        /* @__PURE__ */ v("span", { className: "text-2xs text-surface-400 bg-surface-100 px-1.5 py-0.5 rounded-md", children: "Describe to segment" })
      ] }),
      /* @__PURE__ */ v(
        "button",
        {
          type: "button",
          onClick: f,
          className: "icon-btn",
          title: "Close (Esc)",
          children: /* @__PURE__ */ v(xt, { size: 16 })
        }
      )
    ] }),
    /* @__PURE__ */ v("form", { onSubmit: d, children: /* @__PURE__ */ Y("div", { className: "flex gap-2.5", children: [
      /* @__PURE__ */ Y("div", { className: "flex-1 relative", children: [
        /* @__PURE__ */ v(
          "input",
          {
            type: "text",
            value: a,
            onChange: (l) => i(l.target.value),
            placeholder: "e.g., red car, person in white, cat...",
            className: "w-full p-3 pr-10 border border-surface-200/80 rounded-xl focus:ring-2 focus:ring-brand-500/20 focus:border-brand-400 transition-all bg-white/90 text-sm placeholder:text-surface-300",
            autoFocus: !0,
            disabled: s
          }
        ),
        a && /* @__PURE__ */ v(
          "button",
          {
            type: "button",
            onClick: m,
            className: "absolute right-3 top-1/2 -translate-y-1/2 text-surface-300 hover:text-surface-500 transition-colors",
            title: "Clear text",
            children: /* @__PURE__ */ v(xt, { size: 18 })
          }
        )
      ] }),
      /* @__PURE__ */ Y(
        "button",
        {
          type: "submit",
          disabled: !a.trim() || s,
          className: `
                flex items-center gap-2 px-5 py-3 rounded-xl font-medium transition-all text-sm
                ${a.trim() && !s ? "btn-primary" : "bg-surface-100 text-surface-400 cursor-not-allowed"}
              `,
          children: [
            /* @__PURE__ */ v(Mo, { size: 16 }),
            "Segment"
          ]
        }
      )
    ] }) }),
    /* @__PURE__ */ Y("div", { className: "mt-2.5 text-2xs text-surface-400 flex items-center gap-2", children: [
      /* @__PURE__ */ v("kbd", { className: "kbd !h-4 !min-w-[16px] !text-[9px]", children: "Enter" }),
      " ",
      /* @__PURE__ */ v("span", { children: "Confirm" }),
      /* @__PURE__ */ v("span", { className: "text-surface-200", children: "|" }),
      /* @__PURE__ */ v("kbd", { className: "kbd !h-4 !min-w-[16px] !text-[9px]", children: "Esc" }),
      " ",
      /* @__PURE__ */ v("span", { children: "Close" })
    ] })
  ] }) });
}
const li = [
  // Tool switching
  { key: "h", description: "Pan Tool", action: "tool-hand" },
  { key: "v", description: "Select Tool", action: "tool-pointer" },
  { key: "=", description: "Add Point Tool", action: "tool-add-point" },
  { key: "+", description: "Add Point Tool", action: "tool-add-point" },
  { key: "-", description: "Remove Point Tool", action: "tool-remove-point" },
  { key: "b", description: "Box Tool", action: "tool-box" },
  { key: "r", description: "Brush Tool", action: "tool-brush" },
  { key: "l", description: "Line Tool", action: "tool-line" },
  { key: "t", description: "Text Prompt", action: "tool-text" },
  { key: "m", description: "Template Match", action: "tool-template" },
  { key: "p", description: "Polygon Tool", action: "tool-polygon" },
  // Edit operations
  { key: "z", ctrlKey: !0, description: "Undo", action: "undo" },
  { key: "y", ctrlKey: !0, description: "Redo", action: "redo" },
  { key: "z", ctrlKey: !0, shiftKey: !0, description: "Redo", action: "redo" },
  { key: "Delete", description: "Delete Selected", action: "delete" },
  { key: "Backspace", description: "Delete Selected", action: "delete" },
  // Selection operations
  { key: "a", ctrlKey: !0, description: "Select All", action: "select-all" },
  { key: "d", ctrlKey: !0, description: "Deselect All", action: "deselect-all" },
  { key: "Escape", description: "Cancel/Clear", action: "cancel" },
  // Confirm operation
  { key: "Enter", description: "Confirm Annotation", action: "confirm" },
  { key: " ", description: "Confirm Annotation", action: "confirm" },
  // Category quick select (1-9)
  { key: "1", description: "Select Category 1", action: "category-1" },
  { key: "2", description: "Select Category 2", action: "category-2" },
  { key: "3", description: "Select Category 3", action: "category-3" },
  { key: "4", description: "Select Category 4", action: "category-4" },
  { key: "5", description: "Select Category 5", action: "category-5" },
  { key: "6", description: "Select Category 6", action: "category-6" },
  { key: "7", description: "Select Category 7", action: "category-7" },
  { key: "8", description: "Select Category 8", action: "category-8" },
  { key: "9", description: "Select Category 9", action: "category-9" },
  // Other
  { key: "c", ctrlKey: !0, description: "Copy Selected Annotations", action: "copy" },
  { key: "v", ctrlKey: !0, description: "Paste Annotations", action: "paste" },
  { key: "?", description: "Show Shortcuts", action: "show-shortcuts" },
  { key: "/", ctrlKey: !0, description: "Show Shortcuts", action: "show-shortcuts" }
], ci = {
  "tool-hand": "hand",
  "tool-pointer": "pointer",
  "tool-add-point": "add-point",
  "tool-remove-point": "remove-point",
  "tool-box": "box",
  "tool-brush": "brush",
  "tool-line": "line",
  "tool-text": "text",
  "tool-template": "template",
  "tool-polygon": "polygon"
}, so = (t = {}) => li.map((r) => {
  const e = t[r.action];
  return !e || r.ctrlKey || r.shiftKey || r.altKey ? r : {
    ...r,
    key: e
  };
}), di = (t = {}) => {
  const r = so(t), e = {};
  return r.forEach((n) => {
    n.action.startsWith("tool-") && !n.ctrlKey && !n.shiftKey && !n.altKey && (e[n.key.toLowerCase()] = n.action);
  }), e;
};
function ui({ onConfirm: t } = {}) {
  const {
    setCurrentTool: r,
    undo: e,
    redo: n,
    deleteSelectedAnnotations: o,
    selectAll: s,
    deselectAll: a,
    clearTempPoints: i,
    setTempBox: d,
    setCurrentCategoryId: f,
    categories: m,
    toggleShortcuts: l,
    currentTool: x,
    copySelectedAnnotations: p,
    startPasting: h,
    cancelPaste: c,
    isPasting: g,
    shortcutOverrides: b
  } = ft(), _ = Oe((k) => {
    if ((k.target instanceof HTMLInputElement || k.target instanceof HTMLTextAreaElement) && k.key !== "Escape")
      return;
    const { key: C, ctrlKey: A, shiftKey: P, altKey: z } = k;
    if (!A && !P && !z) {
      const M = di(b)[C.toLowerCase()];
      if (M) {
        const G = ci[M];
        if (G) {
          r(G), k.preventDefault();
          return;
        }
      }
    }
    if (A && !P && !z)
      switch (C.toLowerCase()) {
        case "z":
          e(), k.preventDefault();
          return;
        case "y":
          n(), k.preventDefault();
          return;
        case "a":
          s(), k.preventDefault();
          return;
        case "d":
          a(), k.preventDefault();
          return;
        case "c":
          p(), k.preventDefault();
          return;
        case "v":
          h(), k.preventDefault();
          return;
        case "/":
          l(), k.preventDefault();
          return;
      }
    if (A && P && C.toLowerCase() === "z") {
      n(), k.preventDefault();
      return;
    }
    if (C === "Delete" || C === "Backspace") {
      o(), k.preventDefault();
      return;
    }
    if (C === "Escape") {
      if (g) {
        c(), k.preventDefault();
        return;
      }
      i(), d(null), a(), k.preventDefault();
      return;
    }
    if (C === " " && x !== "pointer") {
      t == null || t(), k.preventDefault();
      return;
    }
    if (!A && !P && !z) {
      const Z = parseInt(C, 10);
      if (Z >= 1 && Z <= 9) {
        const M = m[Z - 1];
        if (M) {
          f(M.id), k.preventDefault();
          return;
        }
      }
    }
    if (C === "?") {
      l(), k.preventDefault();
      return;
    }
  }, [
    r,
    e,
    n,
    o,
    s,
    a,
    i,
    d,
    f,
    m,
    l,
    x,
    p,
    h,
    c,
    g,
    b,
    t
  ]);
  $e(() => (window.addEventListener("keydown", _), () => {
    window.removeEventListener("keydown", _);
  }), [_]);
}
function fi(t) {
  const r = [];
  t.ctrlKey && r.push("Ctrl"), t.shiftKey && r.push("Shift"), t.altKey && r.push("Alt");
  let e = t.key;
  return e === " " && (e = "Space"), e === "Escape" && (e = "Esc"), e === "Delete" && (e = "Del"), e === "Backspace" && (e = "⌫"), r.push(e.toUpperCase()), r.join(" + ");
}
function hi(t = {}) {
  return so(t);
}
function mi() {
  const { showShortcuts: t, toggleShortcuts: r, shortcutOverrides: e, setShortcutOverride: n, resetShortcutOverrides: o } = ft();
  if (!t)
    return null;
  const s = hi(e), a = {
    Tools: s.filter((i) => i.action.startsWith("tool-")),
    Edit: s.filter((i) => ["undo", "redo", "delete"].includes(i.action)),
    Selection: s.filter((i) => ["select-all", "deselect-all", "cancel", "confirm"].includes(i.action)),
    Categories: s.filter((i) => i.action.startsWith("category-")),
    Other: s.filter((i) => ["save", "show-shortcuts"].includes(i.action))
  };
  return /* @__PURE__ */ v("div", { className: "fixed inset-0 bg-surface-900/40 backdrop-blur-sm flex items-center justify-center z-50", children: /* @__PURE__ */ Y("div", { className: "bg-white rounded-2xl shadow-float max-w-2xl w-full mx-4 max-h-[80vh] overflow-hidden animate-scale-in", children: [
    /* @__PURE__ */ Y("div", { className: "flex items-center justify-between px-5 py-4 border-b border-surface-100", children: [
      /* @__PURE__ */ Y("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ v("div", { className: "p-2 bg-brand-50 rounded-xl", children: /* @__PURE__ */ v(kr, { size: 18, className: "text-brand-500" }) }),
        /* @__PURE__ */ v("h2", { className: "text-base font-semibold text-surface-800", children: "Keyboard Shortcuts" })
      ] }),
      /* @__PURE__ */ Y("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ v(
          "button",
          {
            onClick: o,
            className: "btn-ghost !text-xs",
            children: "Reset Keys"
          }
        ),
        /* @__PURE__ */ v(
          "button",
          {
            onClick: r,
            className: "icon-btn",
            children: /* @__PURE__ */ v(xt, { size: 18 })
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ Y("div", { className: "p-5 overflow-y-auto max-h-[calc(80vh-140px)]", children: [
      /* @__PURE__ */ Y("div", { className: "mb-6 p-4 bg-brand-50/40 rounded-xl border border-brand-100", children: [
        /* @__PURE__ */ v("h3", { className: "text-2xs font-semibold text-brand-500 mb-3 uppercase tracking-wider", children: "Point Segmentation Guide (Press P to toggle)" }),
        /* @__PURE__ */ Y("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ Y("div", { className: "flex items-center justify-between py-1.5", children: [
            /* @__PURE__ */ v("span", { className: "text-sm text-surface-600", children: "Positive Point - Select Object" }),
            /* @__PURE__ */ v("kbd", { className: "kbd !text-emerald-600 !bg-emerald-50 !border-emerald-200", children: "Left Click" })
          ] }),
          /* @__PURE__ */ Y("div", { className: "flex items-center justify-between py-1.5", children: [
            /* @__PURE__ */ v("span", { className: "text-sm text-surface-600", children: "Negative Point - Exclude Area" }),
            /* @__PURE__ */ v("kbd", { className: "kbd !text-rose-600 !bg-rose-50 !border-rose-200", children: "Right Click" })
          ] }),
          /* @__PURE__ */ Y("div", { className: "flex items-center justify-between py-1.5", children: [
            /* @__PURE__ */ v("span", { className: "text-sm text-surface-600", children: "Confirm Segmentation" }),
            /* @__PURE__ */ v("kbd", { className: "kbd !text-brand-600 !bg-brand-50 !border-brand-200", children: "Enter" })
          ] }),
          /* @__PURE__ */ Y("div", { className: "flex items-center justify-between py-1.5", children: [
            /* @__PURE__ */ v("span", { className: "text-sm text-surface-600", children: "Cancel / Clear Points" }),
            /* @__PURE__ */ v("kbd", { className: "kbd", children: "Esc" })
          ] })
        ] }),
        /* @__PURE__ */ v("div", { className: "mt-3 pt-3 border-t border-brand-200/60", children: /* @__PURE__ */ v("p", { className: "text-xs text-brand-600", children: "Workflow: Left click on object → Right click to exclude → Press Enter when satisfied" }) })
      ] }),
      /* @__PURE__ */ v("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: Object.entries(a).map(([i, d]) => /* @__PURE__ */ Y("div", { children: [
        /* @__PURE__ */ v("h3", { className: "text-2xs font-semibold text-surface-400 mb-3 uppercase tracking-wider", children: i }),
        /* @__PURE__ */ v("div", { className: "space-y-1.5 bg-surface-50/50 rounded-xl p-3", children: d.map((f, m) => /* @__PURE__ */ Y(
          "div",
          {
            className: "flex items-center justify-between py-1.5",
            children: [
              /* @__PURE__ */ v("span", { className: "text-sm text-surface-600", children: f.description }),
              i === "Tools" ? /* @__PURE__ */ v(
                "input",
                {
                  type: "text",
                  value: f.key,
                  onChange: (l) => {
                    const x = l.target.value.trim().toLowerCase();
                    x.length <= 1 && n(f.action, x);
                  },
                  maxLength: 1,
                  className: "w-12 text-center px-2 py-1 text-xs font-medium text-surface-600 bg-white border border-surface-200 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-200"
                }
              ) : /* @__PURE__ */ v("kbd", { className: "kbd", children: fi(f) })
            ]
          },
          m
        )) })
      ] }, i)) })
    ] }),
    /* @__PURE__ */ v("div", { className: "px-5 py-3 border-t border-surface-100 bg-surface-50/50", children: /* @__PURE__ */ Y("p", { className: "text-xs text-surface-400 text-center", children: [
      "Press ",
      /* @__PURE__ */ v("kbd", { className: "kbd mx-0.5", children: "?" }),
      " or",
      /* @__PURE__ */ v("kbd", { className: "kbd mx-0.5", children: "Ctrl + /" }),
      "to view this help anytime"
    ] }) })
  ] }) });
}
function pi({ children: t }) {
  const {
    images: r,
    currentImage: e,
    setCurrentImage: n,
    removeImage: o,
    annotations: s
  } = ft(), [a, i] = Ae(/* @__PURE__ */ new Set()), [d, f] = Ae(/* @__PURE__ */ new Set()), m = Oe((g) => {
    i((b) => new Set(b).add(g));
  }, []), l = Oe((g) => {
    f((b) => new Set(b).add(g));
  }, []);
  if (r.length === 0)
    return /* @__PURE__ */ v("div", { className: "bg-white/95 backdrop-blur-md border-b border-surface-200/40 shadow-[0_1px_2px_rgba(0,0,0,0.03)] relative z-50", children: /* @__PURE__ */ v("div", { className: "flex items-center gap-2 px-3 py-1.5", children: t }) });
  const x = e ? r.findIndex((g) => g.id === e.id) : -1, p = () => {
    x > 0 && n(r[x - 1]);
  }, h = () => {
    x < r.length - 1 && n(r[x + 1]);
  }, c = (g) => s.filter((b) => b.imageId === g).length;
  return /* @__PURE__ */ v("div", { className: "bg-white/95 backdrop-blur-md border-b border-surface-200/40 shadow-[0_1px_2px_rgba(0,0,0,0.03)] relative z-50", children: /* @__PURE__ */ Y("div", { className: "flex items-center gap-2 px-3 py-1.5", children: [
    t,
    /* @__PURE__ */ v(
      "button",
      {
        onClick: p,
        disabled: x <= 0,
        className: "icon-btn disabled:opacity-30 disabled:cursor-not-allowed",
        children: /* @__PURE__ */ v(xo, { size: 16 })
      }
    ),
    /* @__PURE__ */ v("div", { className: "flex-1 overflow-x-auto", children: /* @__PURE__ */ v("div", { className: "flex gap-2 py-1", children: r.map((g, b) => {
      const _ = (e == null ? void 0 : e.id) === g.id, k = c(g.id), C = a.has(g.id), A = d.has(g.id);
      return /* @__PURE__ */ Y(
        "div",
        {
          className: `
                    relative group flex-shrink-0 cursor-pointer rounded-lg overflow-hidden transition-all duration-200
                    ${_ ? "ring-2 ring-brand-500 ring-offset-2 shadow-sm" : "ring-1 ring-surface-200 hover:ring-2 hover:ring-brand-300 hover:ring-offset-1 hover:shadow-sm"}
                  `,
          onClick: () => n(g),
          children: [
            !C && !A && /* @__PURE__ */ v("div", { className: "absolute inset-0 w-16 h-12 bg-surface-100 animate-pulse flex items-center justify-center", children: /* @__PURE__ */ v("div", { className: "w-5 h-5 border-2 border-surface-300 border-t-transparent rounded-full animate-spin" }) }),
            A && /* @__PURE__ */ v("div", { className: "absolute inset-0 w-16 h-12 bg-red-100 flex items-center justify-center", children: /* @__PURE__ */ v(xt, { size: 16, className: "text-red-500" }) }),
            /* @__PURE__ */ v(
              "img",
              {
                src: g.url,
                alt: g.fileName,
                className: `
                      w-16 h-12 object-cover transition-opacity duration-300
                      ${C ? "opacity-100" : "opacity-0"}
                    `,
                onLoad: () => m(g.id),
                onError: () => l(g.id)
              }
            ),
            /* @__PURE__ */ v("div", { className: "absolute top-0.5 left-0.5 bg-black/50 text-white text-xs px-1.5 py-0.5 rounded", children: b + 1 }),
            k > 0 && /* @__PURE__ */ v("div", { className: "absolute bottom-0.5 right-0.5 bg-brand-600 text-white text-2xs px-1.5 py-0.5 rounded-full font-semibold", children: k }),
            /* @__PURE__ */ v(
              "button",
              {
                onClick: (P) => {
                  P.stopPropagation(), o(g.id);
                },
                className: "absolute top-0.5 right-0.5 bg-red-500/80 text-white p-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity",
                children: /* @__PURE__ */ v(xt, { size: 12 })
              }
            )
          ]
        },
        g.id
      );
    }) }) }),
    /* @__PURE__ */ v(
      "button",
      {
        onClick: h,
        disabled: x >= r.length - 1,
        className: "icon-btn disabled:opacity-30 disabled:cursor-not-allowed",
        children: /* @__PURE__ */ v(vr, { size: 16 })
      }
    ),
    /* @__PURE__ */ Y("div", { className: "flex items-center gap-2 pl-3 border-l border-surface-200/60 text-xs text-surface-400 font-medium tabular-nums", children: [
      /* @__PURE__ */ v(Yt, { size: 14, className: "text-surface-300" }),
      /* @__PURE__ */ Y("span", { children: [
        x + 1,
        /* @__PURE__ */ v("span", { className: "text-surface-300", children: "/" }),
        r.length
      ] }),
      a.size < r.length && /* @__PURE__ */ Y("span", { className: "text-brand-500 text-2xs", children: [
        "Loading ",
        a.size,
        "/",
        r.length
      ] })
    ] })
  ] }) });
}
function gi() {
  const {
    templateImage: t,
    templateBox: r,
    currentTool: e,
    currentImage: n,
    confidenceThreshold: o,
    currentCategoryId: s,
    categories: a,
    setTemplateImage: i,
    setTemplateBox: d,
    setPreviewMask: f,
    setLoading: m,
    setError: l,
    addAnnotations: x
  } = ft(), p = nt(null), [h, c] = Ae(null);
  $e(() => {
    if (!t || !r) {
      c(null);
      return;
    }
    const _ = new window.Image();
    _.crossOrigin = "anonymous", _.onload = () => {
      const k = p.current;
      if (!k) return;
      const C = k.getContext("2d");
      if (!C) return;
      const { x1: A, y1: P, x2: z, y2: Z } = r, M = z - A, G = Z - P, le = 80, N = Math.min(le / M, le / G, 1), L = Math.round(M * N), y = Math.round(G * N);
      k.width = L, k.height = y, C.drawImage(
        _,
        A,
        P,
        M,
        G,
        0,
        0,
        L,
        y
      ), c(k.toDataURL("image/jpeg", 0.8));
    }, _.src = t.url;
  }, [t, r]);
  const g = () => {
    i(null), d(null);
  }, b = Oe(async () => {
    if (!(!n || !t || !r)) {
      if (n.isLocalOnly) {
        l("Please ensure image is uploaded to backend first");
        return;
      }
      if (n.id !== t.id) {
        l('Template feature only supports same-image detection. For cross-image detection, use "Text Tool".');
        return;
      }
      try {
        m(!0), l(null);
        const _ = await ro(
          n.id,
          t.id,
          r,
          o
        );
        if (console.log(`[applyTemplate] Found ${_.length} similar objects`), _.length > 0) {
          const k = a.find((P) => P.id === s), C = (k == null ? void 0 : k.name) || "object", A = _.map((P) => ({
            imageId: n.id,
            categoryId: s,
            categoryName: C,
            segmentation: P.mask_rle,
            bbox: P.box,
            score: P.score,
            area: P.area
          }));
          x(A), f(null), console.log(`[applyTemplate] Added ${_.length} annotations`);
        } else
          l("No similar objects found"), f(null);
      } catch (_) {
        l(_ instanceof Error ? _.message : "Template matching failed");
      } finally {
        m(!1);
      }
    }
  }, [n, t, r, o, s, a, m, l, f, x]);
  return e !== "template" ? null : /* @__PURE__ */ v("div", { className: "fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50", children: /* @__PURE__ */ Y("div", { className: "glass-panel p-4 flex items-center gap-4 animate-slide-up", children: [
    t && r ? /* @__PURE__ */ Y(bt, { children: [
      /* @__PURE__ */ Y("div", { className: "relative", children: [
        /* @__PURE__ */ v("canvas", { ref: p, className: "hidden" }),
        h ? /* @__PURE__ */ v(
          "img",
          {
            src: h,
            alt: "Template thumbnail",
            className: "w-16 h-16 object-cover rounded-lg border-2 border-brand-400"
          }
        ) : /* @__PURE__ */ v("div", { className: "w-16 h-16 bg-brand-50 rounded-lg flex items-center justify-center", children: /* @__PURE__ */ v(Yt, { size: 24, className: "text-brand-400" }) }),
        /* @__PURE__ */ v("div", { className: "absolute -top-2 -right-2 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center", children: /* @__PURE__ */ v("span", { className: "text-white text-xs", children: "✓" }) })
      ] }),
      /* @__PURE__ */ Y("div", { className: "flex flex-col", children: [
        /* @__PURE__ */ v("span", { className: "text-sm font-medium text-brand-700", children: "Template Selected" }),
        /* @__PURE__ */ Y("span", { className: "text-xs text-brand-500", children: [
          "From: ",
          t.fileName.length > 15 ? t.fileName.slice(0, 15) + "..." : t.fileName
        ] }),
        /* @__PURE__ */ Y("span", { className: "text-xs text-surface-400", children: [
          Math.round(r.x2 - r.x1),
          " × ",
          Math.round(r.y2 - r.y1),
          " px"
        ] }),
        n && n.id !== t.id && /* @__PURE__ */ v("span", { className: "text-xs text-amber-600 font-medium", children: "⚠️ For cross-image use Text tool" })
      ] }),
      /* @__PURE__ */ Y("div", { className: "flex gap-2 ml-2", children: [
        n && n.id === t.id && /* @__PURE__ */ Y(
          "button",
          {
            onClick: b,
            className: "btn-primary !text-sm gap-1.5",
            title: "Apply Template (Enter)",
            children: [
              /* @__PURE__ */ v(Oo, { size: 16 }),
              "Apply"
            ]
          }
        ),
        /* @__PURE__ */ Y(
          "button",
          {
            onClick: g,
            className: "btn-secondary !text-sm gap-1.5",
            title: "Clear Template (Escape)",
            children: [
              /* @__PURE__ */ v(xt, { size: 16 }),
              "Clear"
            ]
          }
        )
      ] })
    ] }) : /* @__PURE__ */ v(bt, { children: /* @__PURE__ */ Y("div", { className: "flex items-center gap-3 text-brand-500", children: [
      /* @__PURE__ */ v("div", { className: "w-12 h-12 bg-brand-50 rounded-lg flex items-center justify-center border-2 border-dashed border-brand-200", children: /* @__PURE__ */ v(Yt, { size: 24, className: "text-brand-400" }) }),
      /* @__PURE__ */ Y("div", { className: "flex flex-col", children: [
        /* @__PURE__ */ v("span", { className: "text-sm font-medium", children: "No Template Selected" }),
        /* @__PURE__ */ v("span", { className: "text-xs text-surface-400", children: "Draw a box on image to create template" })
      ] })
    ] }) }),
    /* @__PURE__ */ v("div", { className: "border-l border-surface-200 pl-4 ml-2", children: /* @__PURE__ */ Y("div", { className: "text-xs text-surface-400 leading-relaxed", children: [
      /* @__PURE__ */ Y("p", { children: [
        /* @__PURE__ */ v("strong", { children: "1." }),
        " Draw box to create template"
      ] }),
      /* @__PURE__ */ Y("p", { children: [
        /* @__PURE__ */ v("strong", { children: "2." }),
        " Press ",
        /* @__PURE__ */ v("kbd", { className: "kbd", children: "Enter" }),
        " to find similar objects"
      ] }),
      /* @__PURE__ */ v("p", { className: "text-amber-500", children: "Same-image detection only" })
    ] }) })
  ] }) });
}
function yi({ autoSaveData: t, onRecover: r, onDiscard: e }) {
  const [n, o] = Ae(!1), s = nt(null), i = new Date(t.savedAt).toLocaleString("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit"
  }), d = () => {
    var m;
    (m = s.current) == null || m.click();
  }, f = (m) => {
    const l = m.target.files;
    l && l.length > 0 && (o(!0), r(l));
  };
  return /* @__PURE__ */ v("div", { className: "fixed inset-0 bg-surface-900/40 backdrop-blur-sm flex items-center justify-center z-50", children: /* @__PURE__ */ Y("div", { className: "bg-white rounded-2xl shadow-float max-w-md w-full mx-4 overflow-hidden animate-scale-in", children: [
    /* @__PURE__ */ v("div", { className: "bg-gradient-to-r from-brand-500 to-brand-600 px-6 py-4", children: /* @__PURE__ */ Y("div", { className: "flex items-center gap-3 text-white", children: [
      /* @__PURE__ */ v(yo, { size: 22 }),
      /* @__PURE__ */ v("h2", { className: "text-lg font-bold", children: "Unsaved Work Found" })
    ] }) }),
    /* @__PURE__ */ Y("div", { className: "p-6", children: [
      /* @__PURE__ */ Y("div", { className: "bg-brand-50/60 border border-brand-100 rounded-xl p-4 mb-4", children: [
        /* @__PURE__ */ Y("p", { className: "text-brand-700 text-sm mb-2", children: [
          "Last saved: ",
          /* @__PURE__ */ v("span", { className: "font-medium", children: i })
        ] }),
        /* @__PURE__ */ Y("div", { className: "flex gap-4 text-xs text-brand-600 font-medium", children: [
          /* @__PURE__ */ Y("span", { children: [
            t.images.length,
            " images"
          ] }),
          /* @__PURE__ */ Y("span", { children: [
            t.annotations.length,
            " annotations"
          ] }),
          /* @__PURE__ */ Y("span", { children: [
            t.categories.length,
            " categories"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ Y("p", { className: "text-surface-500 text-sm mb-4", children: [
        "To recover your work, please select the ",
        /* @__PURE__ */ v("strong", { children: "same image folder" }),
        ". The system will automatically match and restore annotations based on filenames."
      ] }),
      t.images.length > 0 && /* @__PURE__ */ Y("div", { className: "bg-surface-50 rounded-lg p-3 mb-4 max-h-32 overflow-y-auto", children: [
        /* @__PURE__ */ v("p", { className: "text-2xs text-surface-400 mb-2 font-medium", children: "Required image files:" }),
        /* @__PURE__ */ Y("div", { className: "flex flex-wrap gap-1", children: [
          t.images.slice(0, 10).map((m, l) => /* @__PURE__ */ v(
            "span",
            {
              className: "text-2xs bg-surface-100 text-surface-600 px-2 py-0.5 rounded",
              children: m.fileName
            },
            l
          )),
          t.images.length > 10 && /* @__PURE__ */ Y("span", { className: "text-2xs text-surface-400", children: [
            "...and ",
            t.images.length - 10,
            " more"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ v(
        "input",
        {
          ref: s,
          type: "file",
          accept: "image/jpeg,image/png,image/webp,image/bmp",
          onChange: f,
          className: "hidden",
          multiple: !0,
          webkitdirectory: "",
          directory: ""
        }
      ),
      /* @__PURE__ */ Y("div", { className: "flex gap-3", children: [
        /* @__PURE__ */ v(
          "button",
          {
            onClick: d,
            disabled: n,
            className: "flex-1 btn-primary !py-3 !rounded-xl gap-2 disabled:opacity-50 disabled:cursor-not-allowed",
            children: n ? /* @__PURE__ */ Y(bt, { children: [
              /* @__PURE__ */ v(Po, { size: 16, className: "animate-spin" }),
              /* @__PURE__ */ v("span", { children: "Recovering..." })
            ] }) : /* @__PURE__ */ Y(bt, { children: [
              /* @__PURE__ */ v(yn, { size: 16 }),
              /* @__PURE__ */ v("span", { children: "Select Folder & Recover" })
            ] })
          }
        ),
        /* @__PURE__ */ Y(
          "button",
          {
            onClick: e,
            disabled: n,
            className: "btn-secondary !py-3 !rounded-xl gap-2 disabled:opacity-50",
            title: "Discard saved data",
            children: [
              /* @__PURE__ */ v(Xt, { size: 18 }),
              /* @__PURE__ */ v("span", { children: "Discard" })
            ]
          }
        )
      ] })
    ] })
  ] }) });
}
function bi({ lastSavedAt: t, isSaving: r }) {
  return !t && !r ? null : /* @__PURE__ */ v("div", { className: "fixed bottom-4 right-4 z-30", children: /* @__PURE__ */ v("div", { className: "glass-panel px-3 py-1.5 flex items-center gap-2 text-xs animate-fade-in", children: r ? /* @__PURE__ */ Y(bt, { children: [
    /* @__PURE__ */ v(Eo, { size: 13, className: "text-brand-500 animate-spin" }),
    /* @__PURE__ */ v("span", { className: "text-surface-500", children: "Saving..." })
  ] }) : t ? /* @__PURE__ */ Y(bt, { children: [
    /* @__PURE__ */ v(wo, { size: 13, className: "text-emerald-500" }),
    /* @__PURE__ */ Y("span", { className: "text-surface-400", children: [
      "Auto-saved at ",
      ((n) => n.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
      }))(t)
    ] })
  ] }) : /* @__PURE__ */ Y(bt, { children: [
    /* @__PURE__ */ v(vo, { size: 13, className: "text-surface-300" }),
    /* @__PURE__ */ v("span", { className: "text-surface-300", children: "Not saved" })
  ] }) }) });
}
function xi(t) {
  if (typeof document > "u") return;
  let r = document.head || document.getElementsByTagName("head")[0], e = document.createElement("style");
  e.type = "text/css", r.appendChild(e), e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
const vi = (t) => {
  switch (t) {
    case "success":
      return ki;
    case "info":
      return Ei;
    case "warning":
      return Si;
    case "error":
      return Ci;
    default:
      return null;
  }
}, wi = Array(12).fill(0), _i = ({ visible: t, className: r }) => /* @__PURE__ */ ae.createElement("div", {
  className: [
    "sonner-loading-wrapper",
    r
  ].filter(Boolean).join(" "),
  "data-visible": t
}, /* @__PURE__ */ ae.createElement("div", {
  className: "sonner-spinner"
}, wi.map((e, n) => /* @__PURE__ */ ae.createElement("div", {
  className: "sonner-loading-bar",
  key: `spinner-bar-${n}`
})))), ki = /* @__PURE__ */ ae.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  height: "20",
  width: "20"
}, /* @__PURE__ */ ae.createElement("path", {
  fillRule: "evenodd",
  d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",
  clipRule: "evenodd"
})), Si = /* @__PURE__ */ ae.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  fill: "currentColor",
  height: "20",
  width: "20"
}, /* @__PURE__ */ ae.createElement("path", {
  fillRule: "evenodd",
  d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",
  clipRule: "evenodd"
})), Ei = /* @__PURE__ */ ae.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  height: "20",
  width: "20"
}, /* @__PURE__ */ ae.createElement("path", {
  fillRule: "evenodd",
  d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",
  clipRule: "evenodd"
})), Ci = /* @__PURE__ */ ae.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  height: "20",
  width: "20"
}, /* @__PURE__ */ ae.createElement("path", {
  fillRule: "evenodd",
  d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",
  clipRule: "evenodd"
})), Ni = /* @__PURE__ */ ae.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "12",
  height: "12",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "1.5",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, /* @__PURE__ */ ae.createElement("line", {
  x1: "18",
  y1: "6",
  x2: "6",
  y2: "18"
}), /* @__PURE__ */ ae.createElement("line", {
  x1: "6",
  y1: "6",
  x2: "18",
  y2: "18"
})), Ai = () => {
  const [t, r] = ae.useState(document.hidden);
  return ae.useEffect(() => {
    const e = () => {
      r(document.hidden);
    };
    return document.addEventListener("visibilitychange", e), () => window.removeEventListener("visibilitychange", e);
  }, []), t;
};
let kn = 1;
class Ti {
  constructor() {
    this.subscribe = (r) => (this.subscribers.push(r), () => {
      const e = this.subscribers.indexOf(r);
      this.subscribers.splice(e, 1);
    }), this.publish = (r) => {
      this.subscribers.forEach((e) => e(r));
    }, this.addToast = (r) => {
      this.publish(r), this.toasts = [
        ...this.toasts,
        r
      ];
    }, this.create = (r) => {
      var e;
      const { message: n, ...o } = r, s = typeof (r == null ? void 0 : r.id) == "number" || ((e = r.id) == null ? void 0 : e.length) > 0 ? r.id : kn++, a = this.toasts.find((d) => d.id === s), i = r.dismissible === void 0 ? !0 : r.dismissible;
      return this.dismissedToasts.has(s) && this.dismissedToasts.delete(s), a ? this.toasts = this.toasts.map((d) => d.id === s ? (this.publish({
        ...d,
        ...r,
        id: s,
        title: n
      }), {
        ...d,
        ...r,
        id: s,
        dismissible: i,
        title: n
      }) : d) : this.addToast({
        title: n,
        ...o,
        dismissible: i,
        id: s
      }), s;
    }, this.dismiss = (r) => (r ? (this.dismissedToasts.add(r), requestAnimationFrame(() => this.subscribers.forEach((e) => e({
      id: r,
      dismiss: !0
    })))) : this.toasts.forEach((e) => {
      this.subscribers.forEach((n) => n({
        id: e.id,
        dismiss: !0
      }));
    }), r), this.message = (r, e) => this.create({
      ...e,
      message: r
    }), this.error = (r, e) => this.create({
      ...e,
      message: r,
      type: "error"
    }), this.success = (r, e) => this.create({
      ...e,
      type: "success",
      message: r
    }), this.info = (r, e) => this.create({
      ...e,
      type: "info",
      message: r
    }), this.warning = (r, e) => this.create({
      ...e,
      type: "warning",
      message: r
    }), this.loading = (r, e) => this.create({
      ...e,
      type: "loading",
      message: r
    }), this.promise = (r, e) => {
      if (!e)
        return;
      let n;
      e.loading !== void 0 && (n = this.create({
        ...e,
        promise: r,
        type: "loading",
        message: e.loading,
        description: typeof e.description != "function" ? e.description : void 0
      }));
      const o = Promise.resolve(r instanceof Function ? r() : r);
      let s = n !== void 0, a;
      const i = o.then(async (f) => {
        if (a = [
          "resolve",
          f
        ], ae.isValidElement(f))
          s = !1, this.create({
            id: n,
            type: "default",
            message: f
          });
        else if (Oi(f) && !f.ok) {
          s = !1;
          const l = typeof e.error == "function" ? await e.error(`HTTP error! status: ${f.status}`) : e.error, x = typeof e.description == "function" ? await e.description(`HTTP error! status: ${f.status}`) : e.description, h = typeof l == "object" && !ae.isValidElement(l) ? l : {
            message: l
          };
          this.create({
            id: n,
            type: "error",
            description: x,
            ...h
          });
        } else if (f instanceof Error) {
          s = !1;
          const l = typeof e.error == "function" ? await e.error(f) : e.error, x = typeof e.description == "function" ? await e.description(f) : e.description, h = typeof l == "object" && !ae.isValidElement(l) ? l : {
            message: l
          };
          this.create({
            id: n,
            type: "error",
            description: x,
            ...h
          });
        } else if (e.success !== void 0) {
          s = !1;
          const l = typeof e.success == "function" ? await e.success(f) : e.success, x = typeof e.description == "function" ? await e.description(f) : e.description, h = typeof l == "object" && !ae.isValidElement(l) ? l : {
            message: l
          };
          this.create({
            id: n,
            type: "success",
            description: x,
            ...h
          });
        }
      }).catch(async (f) => {
        if (a = [
          "reject",
          f
        ], e.error !== void 0) {
          s = !1;
          const m = typeof e.error == "function" ? await e.error(f) : e.error, l = typeof e.description == "function" ? await e.description(f) : e.description, p = typeof m == "object" && !ae.isValidElement(m) ? m : {
            message: m
          };
          this.create({
            id: n,
            type: "error",
            description: l,
            ...p
          });
        }
      }).finally(() => {
        s && (this.dismiss(n), n = void 0), e.finally == null || e.finally.call(e);
      }), d = () => new Promise((f, m) => i.then(() => a[0] === "reject" ? m(a[1]) : f(a[1])).catch(m));
      return typeof n != "string" && typeof n != "number" ? {
        unwrap: d
      } : Object.assign(n, {
        unwrap: d
      });
    }, this.custom = (r, e) => {
      const n = (e == null ? void 0 : e.id) || kn++;
      return this.create({
        jsx: r(n),
        id: n,
        ...e
      }), n;
    }, this.getActiveToasts = () => this.toasts.filter((r) => !this.dismissedToasts.has(r.id)), this.subscribers = [], this.toasts = [], this.dismissedToasts = /* @__PURE__ */ new Set();
  }
}
const Je = new Ti(), Ii = (t, r) => {
  const e = (r == null ? void 0 : r.id) || kn++;
  return Je.addToast({
    title: t,
    ...r,
    id: e
  }), e;
}, Oi = (t) => t && typeof t == "object" && "ok" in t && typeof t.ok == "boolean" && "status" in t && typeof t.status == "number", Ri = Ii, zi = () => Je.toasts, Pi = () => Je.getActiveToasts(), Di = Object.assign(Ri, {
  success: Je.success,
  info: Je.info,
  warning: Je.warning,
  error: Je.error,
  custom: Je.custom,
  message: Je.message,
  promise: Je.promise,
  dismiss: Je.dismiss,
  loading: Je.loading
}, {
  getHistory: zi,
  getToasts: Pi
});
xi("[data-sonner-toaster][dir=ltr],html[dir=ltr]{--toast-icon-margin-start:-3px;--toast-icon-margin-end:4px;--toast-svg-margin-start:-1px;--toast-svg-margin-end:0px;--toast-button-margin-start:auto;--toast-button-margin-end:0;--toast-close-button-start:0;--toast-close-button-end:unset;--toast-close-button-transform:translate(-35%, -35%)}[data-sonner-toaster][dir=rtl],html[dir=rtl]{--toast-icon-margin-start:4px;--toast-icon-margin-end:-3px;--toast-svg-margin-start:0px;--toast-svg-margin-end:-1px;--toast-button-margin-start:0;--toast-button-margin-end:auto;--toast-close-button-start:unset;--toast-close-button-end:0;--toast-close-button-transform:translate(35%, -35%)}[data-sonner-toaster]{position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1:hsl(0, 0%, 99%);--gray2:hsl(0, 0%, 97.3%);--gray3:hsl(0, 0%, 95.1%);--gray4:hsl(0, 0%, 93%);--gray5:hsl(0, 0%, 90.9%);--gray6:hsl(0, 0%, 88.7%);--gray7:hsl(0, 0%, 85.8%);--gray8:hsl(0, 0%, 78%);--gray9:hsl(0, 0%, 56.1%);--gray10:hsl(0, 0%, 52.3%);--gray11:hsl(0, 0%, 43.5%);--gray12:hsl(0, 0%, 9%);--border-radius:8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:0;z-index:999999999;transition:transform .4s ease}@media (hover:none) and (pointer:coarse){[data-sonner-toaster][data-lifted=true]{transform:none}}[data-sonner-toaster][data-x-position=right]{right:var(--offset-right)}[data-sonner-toaster][data-x-position=left]{left:var(--offset-left)}[data-sonner-toaster][data-x-position=center]{left:50%;transform:translateX(-50%)}[data-sonner-toaster][data-y-position=top]{top:var(--offset-top)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--offset-bottom)}[data-sonner-toast]{--y:translateY(100%);--lift-amount:calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:0;overflow-wrap:anywhere}[data-sonner-toast][data-styled=true]{padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px rgba(0,0,0,.1);width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}[data-sonner-toast]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-y-position=top]{top:0;--y:translateY(-100%);--lift:1;--lift-amount:calc(1 * var(--gap))}[data-sonner-toast][data-y-position=bottom]{bottom:0;--y:translateY(100%);--lift:-1;--lift-amount:calc(var(--lift) * var(--gap))}[data-sonner-toast][data-styled=true] [data-description]{font-weight:400;line-height:1.4;color:#3f3f3f}[data-rich-colors=true][data-sonner-toast][data-styled=true] [data-description]{color:inherit}[data-sonner-toaster][data-sonner-theme=dark] [data-description]{color:#e8e8e8}[data-sonner-toast][data-styled=true] [data-title]{font-weight:500;line-height:1.5;color:inherit}[data-sonner-toast][data-styled=true] [data-icon]{display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}[data-sonner-toast][data-promise=true] [data-icon]>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}[data-sonner-toast][data-styled=true] [data-icon]>*{flex-shrink:0}[data-sonner-toast][data-styled=true] [data-icon] svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}[data-sonner-toast][data-styled=true] [data-content]{display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;font-weight:500;cursor:pointer;outline:0;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}[data-sonner-toast][data-styled=true] [data-button]:focus-visible{box-shadow:0 0 0 2px rgba(0,0,0,.4)}[data-sonner-toast][data-styled=true] [data-button]:first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}[data-sonner-toast][data-styled=true] [data-cancel]{color:var(--normal-text);background:rgba(0,0,0,.08)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-styled=true] [data-cancel]{background:rgba(255,255,255,.3)}[data-sonner-toast][data-styled=true] [data-close-button]{position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);background:var(--normal-bg);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast][data-styled=true] [data-close-button]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-styled=true] [data-disabled=true]{cursor:not-allowed}[data-sonner-toast][data-styled=true]:hover [data-close-button]:hover{background:var(--gray2);border-color:var(--gray5)}[data-sonner-toast][data-swiping=true]::before{content:'';position:absolute;left:-100%;right:-100%;height:100%;z-index:-1}[data-sonner-toast][data-y-position=top][data-swiping=true]::before{bottom:50%;transform:scaleY(3) translateY(50%)}[data-sonner-toast][data-y-position=bottom][data-swiping=true]::before{top:50%;transform:scaleY(3) translateY(-50%)}[data-sonner-toast][data-swiping=false][data-removed=true]::before{content:'';position:absolute;inset:0;transform:scaleY(2)}[data-sonner-toast][data-expanded=true]::after{content:'';position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}[data-sonner-toast][data-mounted=true]{--y:translateY(0);opacity:1}[data-sonner-toast][data-expanded=false][data-front=false]{--scale:var(--toasts-before) * 0.05 + 1;--y:translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}[data-sonner-toast]>*{transition:opacity .4s}[data-sonner-toast][data-x-position=right]{right:0}[data-sonner-toast][data-x-position=left]{left:0}[data-sonner-toast][data-expanded=false][data-front=false][data-styled=true]>*{opacity:0}[data-sonner-toast][data-visible=false]{opacity:0;pointer-events:none}[data-sonner-toast][data-mounted=true][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}[data-sonner-toast][data-removed=true][data-front=true][data-swipe-out=false]{--y:translateY(calc(var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=false]{--y:translateY(40%);opacity:0;transition:transform .5s,opacity .2s}[data-sonner-toast][data-removed=true][data-front=false]::before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y,0)) translateX(var(--swipe-amount-x,0));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width:600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-sonner-theme=light]{--normal-bg:#fff;--normal-border:var(--gray4);--normal-text:var(--gray12);--success-bg:hsl(143, 85%, 96%);--success-border:hsl(145, 92%, 87%);--success-text:hsl(140, 100%, 27%);--info-bg:hsl(208, 100%, 97%);--info-border:hsl(221, 91%, 93%);--info-text:hsl(210, 92%, 45%);--warning-bg:hsl(49, 100%, 97%);--warning-border:hsl(49, 91%, 84%);--warning-text:hsl(31, 92%, 45%);--error-bg:hsl(359, 100%, 97%);--error-border:hsl(359, 100%, 94%);--error-text:hsl(360, 100%, 45%)}[data-sonner-toaster][data-sonner-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg:#000;--normal-border:hsl(0, 0%, 20%);--normal-text:var(--gray1)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg:#fff;--normal-border:var(--gray3);--normal-text:var(--gray12)}[data-sonner-toaster][data-sonner-theme=dark]{--normal-bg:#000;--normal-bg-hover:hsl(0, 0%, 12%);--normal-border:hsl(0, 0%, 20%);--normal-border-hover:hsl(0, 0%, 25%);--normal-text:var(--gray1);--success-bg:hsl(150, 100%, 6%);--success-border:hsl(147, 100%, 12%);--success-text:hsl(150, 86%, 65%);--info-bg:hsl(215, 100%, 6%);--info-border:hsl(223, 43%, 17%);--info-text:hsl(216, 87%, 65%);--warning-bg:hsl(64, 100%, 6%);--warning-border:hsl(60, 100%, 9%);--warning-text:hsl(46, 87%, 65%);--error-bg:hsl(358, 76%, 10%);--error-border:hsl(357, 89%, 16%);--error-text:hsl(358, 100%, 81%)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size:16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:first-child{animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}100%{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}100%{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}100%{opacity:.15}}@media (prefers-reduced-motion){.sonner-loading-bar,[data-sonner-toast],[data-sonner-toast]>*{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}");
function Kt(t) {
  return t.label !== void 0;
}
const Mi = 3, Li = "24px", Bi = "16px", gr = 4e3, Fi = 356, Ui = 14, ji = 45, Hi = 200;
function ut(...t) {
  return t.filter(Boolean).join(" ");
}
function Wi(t) {
  const [r, e] = t.split("-"), n = [];
  return r && n.push(r), e && n.push(e), n;
}
const $i = (t) => {
  var r, e, n, o, s, a, i, d, f;
  const { invert: m, toast: l, unstyled: x, interacting: p, setHeights: h, visibleToasts: c, heights: g, index: b, toasts: _, expanded: k, removeToast: C, defaultRichColors: A, closeButton: P, style: z, cancelButtonStyle: Z, actionButtonStyle: M, className: G = "", descriptionClassName: le = "", duration: N, position: L, gap: y, expandByDefault: W, classNames: re, icons: F, closeButtonAriaLabel: me = "Close toast" } = t, [U, te] = ae.useState(null), [I, O] = ae.useState(null), [T, J] = ae.useState(!1), [$, Ee] = ae.useState(!1), [Q, K] = ae.useState(!1), [oe, ye] = ae.useState(!1), [ve, _e] = ae.useState(!1), [De, u] = ae.useState(0), [V, H] = ae.useState(0), E = ae.useRef(l.duration || N || gr), S = ae.useRef(null), R = ae.useRef(null), X = b === 0, ee = b + 1 <= c, D = l.type, ne = l.dismissible !== !1, ue = l.className || "", se = l.descriptionClassName || "", pe = ae.useMemo(() => g.findIndex((ke) => ke.toastId === l.id) || 0, [
    g,
    l.id
  ]), Re = ae.useMemo(() => {
    var ke;
    return (ke = l.closeButton) != null ? ke : P;
  }, [
    l.closeButton,
    P
  ]), Ne = ae.useMemo(() => l.duration || N || gr, [
    l.duration,
    N
  ]), Fe = ae.useRef(0), Me = ae.useRef(0), Ie = ae.useRef(0), Ue = ae.useRef(null), [ze, ot] = L.split("-"), st = ae.useMemo(() => g.reduce((ke, Pe, je) => je >= pe ? ke : ke + Pe.height, 0), [
    g,
    pe
  ]), We = Ai(), ht = l.invert || m, qe = D === "loading";
  Me.current = ae.useMemo(() => pe * y + st, [
    pe,
    st
  ]), ae.useEffect(() => {
    E.current = Ne;
  }, [
    Ne
  ]), ae.useEffect(() => {
    J(!0);
  }, []), ae.useEffect(() => {
    const ke = R.current;
    if (ke) {
      const Pe = ke.getBoundingClientRect().height;
      return H(Pe), h((je) => [
        {
          toastId: l.id,
          height: Pe,
          position: l.position
        },
        ...je
      ]), () => h((je) => je.filter((Ke) => Ke.toastId !== l.id));
    }
  }, [
    h,
    l.id
  ]), ae.useLayoutEffect(() => {
    if (!T) return;
    const ke = R.current, Pe = ke.style.height;
    ke.style.height = "auto";
    const je = ke.getBoundingClientRect().height;
    ke.style.height = Pe, H(je), h((Ke) => Ke.find((Be) => Be.toastId === l.id) ? Ke.map((Be) => Be.toastId === l.id ? {
      ...Be,
      height: je
    } : Be) : [
      {
        toastId: l.id,
        height: je,
        position: l.position
      },
      ...Ke
    ]);
  }, [
    T,
    l.title,
    l.description,
    h,
    l.id,
    l.jsx,
    l.action,
    l.cancel
  ]);
  const xe = ae.useCallback(() => {
    Ee(!0), u(Me.current), h((ke) => ke.filter((Pe) => Pe.toastId !== l.id)), setTimeout(() => {
      C(l);
    }, Hi);
  }, [
    l,
    C,
    h,
    Me
  ]);
  ae.useEffect(() => {
    if (l.promise && D === "loading" || l.duration === 1 / 0 || l.type === "loading") return;
    let ke;
    return k || p || We ? (() => {
      if (Ie.current < Fe.current) {
        const Ke = (/* @__PURE__ */ new Date()).getTime() - Fe.current;
        E.current = E.current - Ke;
      }
      Ie.current = (/* @__PURE__ */ new Date()).getTime();
    })() : (() => {
      E.current !== 1 / 0 && (Fe.current = (/* @__PURE__ */ new Date()).getTime(), ke = setTimeout(() => {
        l.onAutoClose == null || l.onAutoClose.call(l, l), xe();
      }, E.current));
    })(), () => clearTimeout(ke);
  }, [
    k,
    p,
    l,
    D,
    We,
    xe
  ]), ae.useEffect(() => {
    l.delete && (xe(), l.onDismiss == null || l.onDismiss.call(l, l));
  }, [
    xe,
    l.delete
  ]);
  function ct() {
    var ke;
    if (F != null && F.loading) {
      var Pe;
      return /* @__PURE__ */ ae.createElement("div", {
        className: ut(re == null ? void 0 : re.loader, l == null || (Pe = l.classNames) == null ? void 0 : Pe.loader, "sonner-loader"),
        "data-visible": D === "loading"
      }, F.loading);
    }
    return /* @__PURE__ */ ae.createElement(_i, {
      className: ut(re == null ? void 0 : re.loader, l == null || (ke = l.classNames) == null ? void 0 : ke.loader),
      visible: D === "loading"
    });
  }
  const vt = l.icon || (F == null ? void 0 : F[D]) || vi(D);
  var at, rt;
  return /* @__PURE__ */ ae.createElement("li", {
    tabIndex: 0,
    ref: R,
    className: ut(G, ue, re == null ? void 0 : re.toast, l == null || (r = l.classNames) == null ? void 0 : r.toast, re == null ? void 0 : re.default, re == null ? void 0 : re[D], l == null || (e = l.classNames) == null ? void 0 : e[D]),
    "data-sonner-toast": "",
    "data-rich-colors": (at = l.richColors) != null ? at : A,
    "data-styled": !(l.jsx || l.unstyled || x),
    "data-mounted": T,
    "data-promise": !!l.promise,
    "data-swiped": ve,
    "data-removed": $,
    "data-visible": ee,
    "data-y-position": ze,
    "data-x-position": ot,
    "data-index": b,
    "data-front": X,
    "data-swiping": Q,
    "data-dismissible": ne,
    "data-type": D,
    "data-invert": ht,
    "data-swipe-out": oe,
    "data-swipe-direction": I,
    "data-expanded": !!(k || W && T),
    "data-testid": l.testId,
    style: {
      "--index": b,
      "--toasts-before": b,
      "--z-index": _.length - b,
      "--offset": `${$ ? De : Me.current}px`,
      "--initial-height": W ? "auto" : `${V}px`,
      ...z,
      ...l.style
    },
    onDragEnd: () => {
      K(!1), te(null), Ue.current = null;
    },
    onPointerDown: (ke) => {
      ke.button !== 2 && (qe || !ne || (S.current = /* @__PURE__ */ new Date(), u(Me.current), ke.target.setPointerCapture(ke.pointerId), ke.target.tagName !== "BUTTON" && (K(!0), Ue.current = {
        x: ke.clientX,
        y: ke.clientY
      })));
    },
    onPointerUp: () => {
      var ke, Pe, je;
      if (oe || !ne) return;
      Ue.current = null;
      const Ke = Number(((ke = R.current) == null ? void 0 : ke.style.getPropertyValue("--swipe-amount-x").replace("px", "")) || 0), mt = Number(((Pe = R.current) == null ? void 0 : Pe.style.getPropertyValue("--swipe-amount-y").replace("px", "")) || 0), Be = (/* @__PURE__ */ new Date()).getTime() - ((je = S.current) == null ? void 0 : je.getTime()), Ve = U === "x" ? Ke : mt, wt = Math.abs(Ve) / Be;
      if (Math.abs(Ve) >= ji || wt > 0.11) {
        u(Me.current), l.onDismiss == null || l.onDismiss.call(l, l), O(U === "x" ? Ke > 0 ? "right" : "left" : mt > 0 ? "down" : "up"), xe(), ye(!0);
        return;
      } else {
        var Xe, Ge;
        (Xe = R.current) == null || Xe.style.setProperty("--swipe-amount-x", "0px"), (Ge = R.current) == null || Ge.style.setProperty("--swipe-amount-y", "0px");
      }
      _e(!1), K(!1), te(null);
    },
    onPointerMove: (ke) => {
      var Pe, je, Ke;
      if (!Ue.current || !ne || ((Pe = window.getSelection()) == null ? void 0 : Pe.toString().length) > 0) return;
      const Be = ke.clientY - Ue.current.y, Ve = ke.clientX - Ue.current.x;
      var wt;
      const Xe = (wt = t.swipeDirections) != null ? wt : Wi(L);
      !U && (Math.abs(Ve) > 1 || Math.abs(Be) > 1) && te(Math.abs(Ve) > Math.abs(Be) ? "x" : "y");
      let Ge = {
        x: 0,
        y: 0
      };
      const _t = (pt) => 1 / (1.5 + Math.abs(pt) / 20);
      if (U === "y") {
        if (Xe.includes("top") || Xe.includes("bottom"))
          if (Xe.includes("top") && Be < 0 || Xe.includes("bottom") && Be > 0)
            Ge.y = Be;
          else {
            const pt = Be * _t(Be);
            Ge.y = Math.abs(pt) < Math.abs(Be) ? pt : Be;
          }
      } else if (U === "x" && (Xe.includes("left") || Xe.includes("right")))
        if (Xe.includes("left") && Ve < 0 || Xe.includes("right") && Ve > 0)
          Ge.x = Ve;
        else {
          const pt = Ve * _t(Ve);
          Ge.x = Math.abs(pt) < Math.abs(Ve) ? pt : Ve;
        }
      (Math.abs(Ge.x) > 0 || Math.abs(Ge.y) > 0) && _e(!0), (je = R.current) == null || je.style.setProperty("--swipe-amount-x", `${Ge.x}px`), (Ke = R.current) == null || Ke.style.setProperty("--swipe-amount-y", `${Ge.y}px`);
    }
  }, Re && !l.jsx && D !== "loading" ? /* @__PURE__ */ ae.createElement("button", {
    "aria-label": me,
    "data-disabled": qe,
    "data-close-button": !0,
    onClick: qe || !ne ? () => {
    } : () => {
      xe(), l.onDismiss == null || l.onDismiss.call(l, l);
    },
    className: ut(re == null ? void 0 : re.closeButton, l == null || (n = l.classNames) == null ? void 0 : n.closeButton)
  }, (rt = F == null ? void 0 : F.close) != null ? rt : Ni) : null, (D || l.icon || l.promise) && l.icon !== null && ((F == null ? void 0 : F[D]) !== null || l.icon) ? /* @__PURE__ */ ae.createElement("div", {
    "data-icon": "",
    className: ut(re == null ? void 0 : re.icon, l == null || (o = l.classNames) == null ? void 0 : o.icon)
  }, l.promise || l.type === "loading" && !l.icon ? l.icon || ct() : null, l.type !== "loading" ? vt : null) : null, /* @__PURE__ */ ae.createElement("div", {
    "data-content": "",
    className: ut(re == null ? void 0 : re.content, l == null || (s = l.classNames) == null ? void 0 : s.content)
  }, /* @__PURE__ */ ae.createElement("div", {
    "data-title": "",
    className: ut(re == null ? void 0 : re.title, l == null || (a = l.classNames) == null ? void 0 : a.title)
  }, l.jsx ? l.jsx : typeof l.title == "function" ? l.title() : l.title), l.description ? /* @__PURE__ */ ae.createElement("div", {
    "data-description": "",
    className: ut(le, se, re == null ? void 0 : re.description, l == null || (i = l.classNames) == null ? void 0 : i.description)
  }, typeof l.description == "function" ? l.description() : l.description) : null), /* @__PURE__ */ ae.isValidElement(l.cancel) ? l.cancel : l.cancel && Kt(l.cancel) ? /* @__PURE__ */ ae.createElement("button", {
    "data-button": !0,
    "data-cancel": !0,
    style: l.cancelButtonStyle || Z,
    onClick: (ke) => {
      Kt(l.cancel) && ne && (l.cancel.onClick == null || l.cancel.onClick.call(l.cancel, ke), xe());
    },
    className: ut(re == null ? void 0 : re.cancelButton, l == null || (d = l.classNames) == null ? void 0 : d.cancelButton)
  }, l.cancel.label) : null, /* @__PURE__ */ ae.isValidElement(l.action) ? l.action : l.action && Kt(l.action) ? /* @__PURE__ */ ae.createElement("button", {
    "data-button": !0,
    "data-action": !0,
    style: l.actionButtonStyle || M,
    onClick: (ke) => {
      Kt(l.action) && (l.action.onClick == null || l.action.onClick.call(l.action, ke), !ke.defaultPrevented && xe());
    },
    className: ut(re == null ? void 0 : re.actionButton, l == null || (f = l.classNames) == null ? void 0 : f.actionButton)
  }, l.action.label) : null);
};
function yr() {
  if (typeof window > "u" || typeof document > "u") return "ltr";
  const t = document.documentElement.getAttribute("dir");
  return t === "auto" || !t ? window.getComputedStyle(document.documentElement).direction : t;
}
function Ki(t, r) {
  const e = {};
  return [
    t,
    r
  ].forEach((n, o) => {
    const s = o === 1, a = s ? "--mobile-offset" : "--offset", i = s ? Bi : Li;
    function d(f) {
      [
        "top",
        "right",
        "bottom",
        "left"
      ].forEach((m) => {
        e[`${a}-${m}`] = typeof f == "number" ? `${f}px` : f;
      });
    }
    typeof n == "number" || typeof n == "string" ? d(n) : typeof n == "object" ? [
      "top",
      "right",
      "bottom",
      "left"
    ].forEach((f) => {
      n[f] === void 0 ? e[`${a}-${f}`] = i : e[`${a}-${f}`] = typeof n[f] == "number" ? `${n[f]}px` : n[f];
    }) : d(i);
  }), e;
}
const Zi = /* @__PURE__ */ ae.forwardRef(function(r, e) {
  const { id: n, invert: o, position: s = "bottom-right", hotkey: a = [
    "altKey",
    "KeyT"
  ], expand: i, closeButton: d, className: f, offset: m, mobileOffset: l, theme: x = "light", richColors: p, duration: h, style: c, visibleToasts: g = Mi, toastOptions: b, dir: _ = yr(), gap: k = Ui, icons: C, containerAriaLabel: A = "Notifications" } = r, [P, z] = ae.useState([]), Z = ae.useMemo(() => n ? P.filter((T) => T.toasterId === n) : P.filter((T) => !T.toasterId), [
    P,
    n
  ]), M = ae.useMemo(() => Array.from(new Set([
    s
  ].concat(Z.filter((T) => T.position).map((T) => T.position)))), [
    Z,
    s
  ]), [G, le] = ae.useState([]), [N, L] = ae.useState(!1), [y, W] = ae.useState(!1), [re, F] = ae.useState(x !== "system" ? x : typeof window < "u" && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"), me = ae.useRef(null), U = a.join("+").replace(/Key/g, "").replace(/Digit/g, ""), te = ae.useRef(null), I = ae.useRef(!1), O = ae.useCallback((T) => {
    z((J) => {
      var $;
      return ($ = J.find((Ee) => Ee.id === T.id)) != null && $.delete || Je.dismiss(T.id), J.filter(({ id: Ee }) => Ee !== T.id);
    });
  }, []);
  return ae.useEffect(() => Je.subscribe((T) => {
    if (T.dismiss) {
      requestAnimationFrame(() => {
        z((J) => J.map(($) => $.id === T.id ? {
          ...$,
          delete: !0
        } : $));
      });
      return;
    }
    setTimeout(() => {
      mo.flushSync(() => {
        z((J) => {
          const $ = J.findIndex((Ee) => Ee.id === T.id);
          return $ !== -1 ? [
            ...J.slice(0, $),
            {
              ...J[$],
              ...T
            },
            ...J.slice($ + 1)
          ] : [
            T,
            ...J
          ];
        });
      });
    });
  }), [
    P
  ]), ae.useEffect(() => {
    if (x !== "system") {
      F(x);
      return;
    }
    if (x === "system" && (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? F("dark") : F("light")), typeof window > "u") return;
    const T = window.matchMedia("(prefers-color-scheme: dark)");
    try {
      T.addEventListener("change", ({ matches: J }) => {
        F(J ? "dark" : "light");
      });
    } catch {
      T.addListener(({ matches: $ }) => {
        try {
          F($ ? "dark" : "light");
        } catch (Ee) {
          console.error(Ee);
        }
      });
    }
  }, [
    x
  ]), ae.useEffect(() => {
    P.length <= 1 && L(!1);
  }, [
    P
  ]), ae.useEffect(() => {
    const T = (J) => {
      var $;
      if (a.every((K) => J[K] || J.code === K)) {
        var Q;
        L(!0), (Q = me.current) == null || Q.focus();
      }
      J.code === "Escape" && (document.activeElement === me.current || ($ = me.current) != null && $.contains(document.activeElement)) && L(!1);
    };
    return document.addEventListener("keydown", T), () => document.removeEventListener("keydown", T);
  }, [
    a
  ]), ae.useEffect(() => {
    if (me.current)
      return () => {
        te.current && (te.current.focus({
          preventScroll: !0
        }), te.current = null, I.current = !1);
      };
  }, [
    me.current
  ]), // Remove item from normal navigation flow, only available via hotkey
  /* @__PURE__ */ ae.createElement("section", {
    ref: e,
    "aria-label": `${A} ${U}`,
    tabIndex: -1,
    "aria-live": "polite",
    "aria-relevant": "additions text",
    "aria-atomic": "false",
    suppressHydrationWarning: !0
  }, M.map((T, J) => {
    var $;
    const [Ee, Q] = T.split("-");
    return Z.length ? /* @__PURE__ */ ae.createElement("ol", {
      key: T,
      dir: _ === "auto" ? yr() : _,
      tabIndex: -1,
      ref: me,
      className: f,
      "data-sonner-toaster": !0,
      "data-sonner-theme": re,
      "data-y-position": Ee,
      "data-x-position": Q,
      style: {
        "--front-toast-height": `${(($ = G[0]) == null ? void 0 : $.height) || 0}px`,
        "--width": `${Fi}px`,
        "--gap": `${k}px`,
        ...c,
        ...Ki(m, l)
      },
      onBlur: (K) => {
        I.current && !K.currentTarget.contains(K.relatedTarget) && (I.current = !1, te.current && (te.current.focus({
          preventScroll: !0
        }), te.current = null));
      },
      onFocus: (K) => {
        K.target instanceof HTMLElement && K.target.dataset.dismissible === "false" || I.current || (I.current = !0, te.current = K.relatedTarget);
      },
      onMouseEnter: () => L(!0),
      onMouseMove: () => L(!0),
      onMouseLeave: () => {
        y || L(!1);
      },
      onDragEnd: () => L(!1),
      onPointerDown: (K) => {
        K.target instanceof HTMLElement && K.target.dataset.dismissible === "false" || W(!0);
      },
      onPointerUp: () => W(!1)
    }, Z.filter((K) => !K.position && J === 0 || K.position === T).map((K, oe) => {
      var ye, ve;
      return /* @__PURE__ */ ae.createElement($i, {
        key: K.id,
        icons: C,
        index: oe,
        toast: K,
        defaultRichColors: p,
        duration: (ye = b == null ? void 0 : b.duration) != null ? ye : h,
        className: b == null ? void 0 : b.className,
        descriptionClassName: b == null ? void 0 : b.descriptionClassName,
        invert: o,
        visibleToasts: g,
        closeButton: (ve = b == null ? void 0 : b.closeButton) != null ? ve : d,
        interacting: y,
        position: T,
        style: b == null ? void 0 : b.style,
        unstyled: b == null ? void 0 : b.unstyled,
        classNames: b == null ? void 0 : b.classNames,
        cancelButtonStyle: b == null ? void 0 : b.cancelButtonStyle,
        actionButtonStyle: b == null ? void 0 : b.actionButtonStyle,
        closeButtonAriaLabel: b == null ? void 0 : b.closeButtonAriaLabel,
        removeToast: O,
        toasts: Z.filter((_e) => _e.position == K.position),
        heights: G.filter((_e) => _e.position == K.position),
        setHeights: le,
        expandByDefault: i,
        gap: k,
        expanded: N,
        swipeDirections: r.swipeDirections
      });
    })) : null;
  }));
}), In = "sam3_annotation_autosave", qi = 2e3;
function Vi() {
  try {
    const t = localStorage.getItem(In);
    if (!t) return null;
    const r = JSON.parse(t);
    return !r.version || !r.images || !r.annotations ? null : r;
  } catch (t) {
    return console.warn("[AutoSave] Failed to read auto-save data:", t), null;
  }
}
function br() {
  try {
    localStorage.removeItem(In), console.log("[AutoSave] Auto-save data cleared");
  } catch (t) {
    console.warn("[AutoSave] Failed to clear auto-save data:", t);
  }
}
function Yi() {
  const t = nt(null), [r, e] = Ae(null), [n, o] = Ae(!1), {
    images: s,
    annotations: a,
    categories: i,
    currentImage: d,
    currentCategoryId: f
  } = ft(), m = Oe(() => {
    if (!(s.length === 0 && a.length === 0 && i.length === 0)) {
      o(!0);
      try {
        const x = /* @__PURE__ */ new Date(), p = {
          version: "1.0",
          savedAt: x.toISOString(),
          images: s.map((h) => ({
            id: h.id,
            fileName: h.fileName,
            width: h.width,
            height: h.height
          })),
          annotations: a.map((h) => ({
            ...h,
            selected: !1
            // Clear selection state
          })),
          categories: i,
          currentImageFileName: (d == null ? void 0 : d.fileName) || null,
          currentCategoryId: f
        };
        localStorage.setItem(In, JSON.stringify(p)), e(x), console.log("[AutoSave] Auto-saved", {
          images: s.length,
          annotations: a.length,
          categories: i.length
        });
      } catch (x) {
        console.warn("[AutoSave] Auto-save failed:", x);
      } finally {
        o(!1);
      }
    }
  }, [s, a, i, d, f]), l = Oe(() => {
    t.current && clearTimeout(t.current), t.current = setTimeout(() => {
      m();
    }, qi);
  }, [m]);
  return $e(() => (l(), () => {
    t.current && clearTimeout(t.current);
  }), [s, a, i, l]), $e(() => {
    const x = () => {
      t.current && clearTimeout(t.current), m();
    };
    return window.addEventListener("beforeunload", x), () => {
      window.removeEventListener("beforeunload", x);
    };
  }, [m]), {
    saveNow: m,
    lastSavedAt: r,
    isSaving: n
  };
}
function Xi(t, r) {
  const e = /* @__PURE__ */ new Map();
  r.forEach((i) => {
    e.set(i.fileName, i.id);
  });
  const n = /* @__PURE__ */ new Map();
  t.images.forEach((i) => {
    const d = e.get(i.fileName);
    d && n.set(i.id, d);
  });
  const o = [];
  let s = 0;
  t.annotations.forEach((i) => {
    const d = n.get(i.imageId);
    d ? o.push({
      ...i,
      imageId: d,
      // Generate new annotation ID to avoid conflicts
      id: `restored_${i.id}_${Date.now()}_${Math.random().toString(36).substr(2, 5)}`
    }) : s++;
  });
  let a = null;
  return t.currentImageFileName && (a = e.get(t.currentImageFileName) || null), {
    matchedAnnotations: o,
    matchedCategories: t.categories,
    matchedCount: o.length,
    unmatchedCount: s,
    currentImageId: a
  };
}
function Gi() {
  const [t, r] = Ae(null), e = nt(null), [n, o] = Ae(1), {
    currentImage: s,
    setImages: a,
    setCurrentImage: i,
    addAnnotations: d,
    setAnnotations: f,
    currentCategoryId: m,
    setCurrentCategoryId: l,
    categories: x,
    setCategories: p,
    tempPoints: h,
    tempBox: c,
    textPrompt: g,
    clearTempPoints: b,
    setTempBox: _,
    setLoading: k,
    setError: C,
    isLoading: A,
    error: P,
    confidenceThreshold: z,
    images: Z,
    annotations: M
  } = ft(), { lastSavedAt: G, isSaving: le } = Yi();
  $e(() => {
    const U = Vi();
    U && U.annotations.length > 0 && r(U);
  }, []);
  const N = Oe((U) => {
    if (console.log("[handleSegmentationResults] Processing", U.length, "results"), console.log("[handleSegmentationResults] currentCategoryId:", m), m === 0) {
      C("Please add and select a category first"), console.log("[handleSegmentationResults] No category selected, returning");
      return;
    }
    const te = x.find((O) => O.id === m);
    console.log("[handleSegmentationResults] Using category:", te == null ? void 0 : te.name);
    const I = U.map((O) => ({
      imageId: s.id,
      categoryId: m,
      categoryName: (te == null ? void 0 : te.name) || "Uncategorized",
      segmentation: O.mask_rle,
      bbox: O.box,
      area: O.area,
      score: O.score
    }));
    d(I), console.log("[handleSegmentationResults] Complete, added", I.length, "annotations");
  }, [s, m, x, d, C]), L = Oe(async () => {
    if (s) {
      if (m === 0) {
        C("Please add and select a category first");
        return;
      }
      if (s.isLocalOnly) {
        C("Image not uploaded to backend yet. Cannot segment. Please confirm backend service and re-upload image.");
        return;
      }
      k(!0), C(null);
      try {
        let U = [];
        h.length > 0 ? (U = await to(
          s.id,
          h,
          z
        ), b()) : c ? (U = await no(
          s.id,
          c,
          !0,
          z
        ), _(null)) : g && (U = await ur(
          s.id,
          g,
          z
        )), U.length > 0 ? N(U) : C("No objects detected matching criteria");
      } catch (U) {
        C(U.message || "Segmentation failed");
      } finally {
        k(!1);
      }
    }
  }, [
    s,
    h,
    c,
    g,
    z,
    b,
    _,
    N,
    k,
    C
  ]), y = Oe(async (U) => {
    if (console.log("[handleTextSubmit] Starting, prompt:", U), !s) {
      console.log("[handleTextSubmit] No current image");
      return;
    }
    if (s.isLocalOnly) {
      C("Image not uploaded to backend yet. Cannot use text prompts. Please re-upload and confirm service.");
      return;
    }
    k(!0), C(null);
    try {
      console.log("[handleTextSubmit] Calling API, imageId:", s.id);
      const te = await ur(
        s.id,
        U,
        z
      );
      console.log("[handleTextSubmit] Got results:", te.length), te.length > 0 ? (N(te), console.log("[handleTextSubmit] Processing complete")) : C("No objects detected matching criteria");
    } catch (te) {
      console.error("[handleTextSubmit] Error:", te), C(te.message || "Segmentation failed");
    } finally {
      console.log("[handleTextSubmit] Ending, setting loading=false"), setTimeout(() => {
        k(!1), console.log("[handleTextSubmit] loading set to false");
      }, 0);
    }
  }, [s, z, N, k, C]), W = Oe(async (U) => {
    if (U.length !== 0) {
      k(!0), C(null);
      try {
        const te = [];
        for (const I of U) {
          if (!I.type.startsWith("image/")) {
            console.warn(`Skipping non-image file: ${I.name}`);
            continue;
          }
          try {
            const O = await dr(I);
            te.push(O);
          } catch (O) {
            console.error(`Upload failed ${I.name}:`, O), C(`Upload ${I.name} failed: ${O.message}`);
          }
        }
        te.length > 0 && (a([...Z, ...te]), s || i(te[0]), console.log(`Successfully uploaded ${te.length} images`));
      } catch (te) {
        C(te.message || "Upload failed");
      } finally {
        k(!1);
      }
    }
  }, [Z, s, a, i, k, C]), re = Oe(async (U) => {
    const { format: te, includeImages: I } = U;
    if (M.length === 0) {
      C("No annotations to export");
      return;
    }
    k(!0);
    try {
      switch (te) {
        case "coco":
          const O = await Ka(Z, M, x);
          I ? await Za(O, Z, "annotations_coco.zip") : qa(O, "instances_default.json");
          break;
        case "yolo-seg":
          await fr(Z, M, x, "annotations_yolo_seg.zip", !0, I);
          break;
        case "yolo-bbox":
          await fr(Z, M, x, "annotations_yolo_bbox.zip", !1, I);
          break;
      }
    } catch (O) {
      C(O.message || "Export failed");
    } finally {
      k(!1);
    }
  }, [Z, M, x, k, C]), F = Oe(async (U) => {
    if (t) {
      k(!0), C(null);
      try {
        const te = [];
        for (const O of Array.from(U)) {
          if (!O.type.startsWith("image/")) continue;
          const T = await dr(O);
          te.push(T);
        }
        if (te.length === 0) {
          C("No valid image files found"), k(!1);
          return;
        }
        const I = Xi(
          t,
          te.map((O) => ({
            id: O.id,
            fileName: O.fileName,
            width: O.width,
            height: O.height
          }))
        );
        if (a(te), I.matchedCategories.length > 0 && (p(I.matchedCategories), l(t.currentCategoryId || I.matchedCategories[0].id)), I.matchedAnnotations.length > 0 && f(I.matchedAnnotations), I.currentImageId) {
          const O = te.find((T) => T.id === I.currentImageId);
          O && i(O);
        }
        I.unmatchedCount > 0 ? C(`Recovered ${I.matchedCount} annotations, ${I.unmatchedCount} annotations could not be recovered due to image mismatch`) : console.log(`[Recovery] Successfully recovered ${I.matchedCount} annotations`), br(), r(null);
      } catch (te) {
        C(te.message || "Recovery failed");
      } finally {
        k(!1);
      }
    }
  }, [t, a, f, p, l, i, k, C]), me = Oe(() => {
    br(), r(null);
  }, []);
  return ui({
    onConfirm: L
  }), /* @__PURE__ */ Y("div", { className: "h-screen flex flex-col bg-surface-100", children: [
    /* @__PURE__ */ v(Zi, { position: "bottom-center", richColors: !0, closeButton: !0 }),
    /* @__PURE__ */ v(pi, { children: /* @__PURE__ */ v(
      us,
      {
        onExport: re,
        onUploadImages: W
      }
    ) }),
    /* @__PURE__ */ v(
      fs,
      {
        scale: n,
        onZoomIn: () => {
          var U;
          return (U = e.current) == null ? void 0 : U.zoomIn();
        },
        onZoomOut: () => {
          var U;
          return (U = e.current) == null ? void 0 : U.zoomOut();
        },
        onZoomFit: () => {
          var U;
          return (U = e.current) == null ? void 0 : U.zoomFit();
        },
        onZoom100: () => {
          var U;
          return (U = e.current) == null ? void 0 : U.zoom100();
        }
      }
    ),
    /* @__PURE__ */ Y("div", { className: "flex-1 flex overflow-hidden relative", children: [
      /* @__PURE__ */ v(ni, { ref: e, onSegmentRequest: L, onScaleChange: o }),
      /* @__PURE__ */ Y("div", { className: "w-80 flex flex-col shrink-0 bg-white border-l border-surface-200/40 overflow-hidden shadow-[-1px_0_3px_rgba(0,0,0,0.03)]", children: [
        /* @__PURE__ */ v(ii, { onSubmit: y }),
        /* @__PURE__ */ v(ai, {})
      ] })
    ] }),
    /* @__PURE__ */ v(gi, {}),
    /* @__PURE__ */ v(bi, { lastSavedAt: G, isSaving: le }),
    A && /* @__PURE__ */ v("div", { className: "fixed inset-0 bg-surface-900/25 backdrop-blur-[3px] flex items-center justify-center z-40 animate-fade-in", children: /* @__PURE__ */ Y("div", { className: "bg-white rounded-2xl p-5 shadow-float flex items-center gap-3.5 animate-scale-in border border-surface-100", children: [
      /* @__PURE__ */ v("div", { className: "w-5 h-5 border-2 border-brand-500 border-t-transparent rounded-full animate-spin" }),
      /* @__PURE__ */ v("span", { className: "text-sm text-surface-600 font-medium", children: "Processing..." })
    ] }) }),
    P && /* @__PURE__ */ v(Ji, { message: P, onDismiss: () => C(null) }),
    /* @__PURE__ */ v(mi, {}),
    t && /* @__PURE__ */ v(
      yi,
      {
        autoSaveData: t,
        onRecover: F,
        onDiscard: me
      }
    )
  ] });
}
function Ji({ message: t, onDismiss: r }) {
  return $e(() => {
    Di.error(t, { duration: 5e3 });
    const e = setTimeout(r, 5500);
    return () => clearTimeout(e);
  }, [t, r]), null;
}
function vl({
  apiBaseUrl: t = "/api",
  className: r = "",
  style: e
}) {
  const n = nt(!1);
  return $e(() => {
    n.current || (Wa(t), n.current = !0);
  }, [t]), /* @__PURE__ */ v("div", { className: `sam3-annotation-tool ${r}`, style: { height: "100%", ...e }, children: /* @__PURE__ */ v(Gi, {}) });
}
export {
  vl as SAM3AnnotationTool,
  ft as useAnnotationStore
};
