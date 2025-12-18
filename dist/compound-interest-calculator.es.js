import * as P from "react";
import lr, { isValidElement as nr, forwardRef as et, useContext as Tt, createContext as bt, useState as De, useCallback as me, useMemo as kr, useRef as he, useImperativeHandle as A0, useEffect as Ie, PureComponent as T0, useLayoutEffect as jr, cloneElement as Us, createElement as Cv, Children as j0, memo as C0 } from "react";
import { createPortal as Ws } from "react-dom";
function cr(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var di = { exports: {} }, hn = {};
var Wc;
function M0() {
  if (Wc) return hn;
  Wc = 1;
  var e = lr, t = /* @__PURE__ */ Symbol.for("react.element"), r = /* @__PURE__ */ Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, i = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, a = { key: !0, ref: !0, __self: !0, __source: !0 };
  function o(u, s, c) {
    var l, f = {}, d = null, p = null;
    c !== void 0 && (d = "" + c), s.key !== void 0 && (d = "" + s.key), s.ref !== void 0 && (p = s.ref);
    for (l in s) n.call(s, l) && !a.hasOwnProperty(l) && (f[l] = s[l]);
    if (u && u.defaultProps) for (l in s = u.defaultProps, s) f[l] === void 0 && (f[l] = s[l]);
    return { $$typeof: t, type: u, key: d, ref: p, props: f, _owner: i.current };
  }
  return hn.Fragment = r, hn.jsx = o, hn.jsxs = o, hn;
}
var vn = {};
var Vc;
function D0() {
  return Vc || (Vc = 1, process.env.NODE_ENV !== "production" && (function() {
    var e = lr, t = /* @__PURE__ */ Symbol.for("react.element"), r = /* @__PURE__ */ Symbol.for("react.portal"), n = /* @__PURE__ */ Symbol.for("react.fragment"), i = /* @__PURE__ */ Symbol.for("react.strict_mode"), a = /* @__PURE__ */ Symbol.for("react.profiler"), o = /* @__PURE__ */ Symbol.for("react.provider"), u = /* @__PURE__ */ Symbol.for("react.context"), s = /* @__PURE__ */ Symbol.for("react.forward_ref"), c = /* @__PURE__ */ Symbol.for("react.suspense"), l = /* @__PURE__ */ Symbol.for("react.suspense_list"), f = /* @__PURE__ */ Symbol.for("react.memo"), d = /* @__PURE__ */ Symbol.for("react.lazy"), p = /* @__PURE__ */ Symbol.for("react.offscreen"), v = Symbol.iterator, h = "@@iterator";
    function m(g) {
      if (g === null || typeof g != "object")
        return null;
      var C = v && g[v] || g[h];
      return typeof C == "function" ? C : null;
    }
    var y = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function b(g) {
      {
        for (var C = arguments.length, I = new Array(C > 1 ? C - 1 : 0), q = 1; q < C; q++)
          I[q - 1] = arguments[q];
        w("error", g, I);
      }
    }
    function w(g, C, I) {
      {
        var q = y.ReactDebugCurrentFrame, Q = q.getStackAddendum();
        Q !== "" && (C += "%s", I = I.concat([Q]));
        var ae = I.map(function(G) {
          return String(G);
        });
        ae.unshift("Warning: " + C), Function.prototype.apply.call(console[g], console, ae);
      }
    }
    var _ = !1, O = !1, x = !1, S = !1, D = !1, k;
    k = /* @__PURE__ */ Symbol.for("react.module.reference");
    function $(g) {
      return !!(typeof g == "string" || typeof g == "function" || g === n || g === a || D || g === i || g === c || g === l || S || g === p || _ || O || x || typeof g == "object" && g !== null && (g.$$typeof === d || g.$$typeof === f || g.$$typeof === o || g.$$typeof === u || g.$$typeof === s || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      g.$$typeof === k || g.getModuleId !== void 0));
    }
    function j(g, C, I) {
      var q = g.displayName;
      if (q)
        return q;
      var Q = C.displayName || C.name || "";
      return Q !== "" ? I + "(" + Q + ")" : I;
    }
    function A(g) {
      return g.displayName || "Context";
    }
    function N(g) {
      if (g == null)
        return null;
      if (typeof g.tag == "number" && b("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof g == "function")
        return g.displayName || g.name || null;
      if (typeof g == "string")
        return g;
      switch (g) {
        case n:
          return "Fragment";
        case r:
          return "Portal";
        case a:
          return "Profiler";
        case i:
          return "StrictMode";
        case c:
          return "Suspense";
        case l:
          return "SuspenseList";
      }
      if (typeof g == "object")
        switch (g.$$typeof) {
          case u:
            var C = g;
            return A(C) + ".Consumer";
          case o:
            var I = g;
            return A(I._context) + ".Provider";
          case s:
            return j(g, g.render, "ForwardRef");
          case f:
            var q = g.displayName || null;
            return q !== null ? q : N(g.type) || "Memo";
          case d: {
            var Q = g, ae = Q._payload, G = Q._init;
            try {
              return N(G(ae));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var L = Object.assign, W = 0, K, V, te, X, Pe, qe, pe;
    function Be() {
    }
    Be.__reactDisabledLog = !0;
    function Ue() {
      {
        if (W === 0) {
          K = console.log, V = console.info, te = console.warn, X = console.error, Pe = console.group, qe = console.groupCollapsed, pe = console.groupEnd;
          var g = {
            configurable: !0,
            enumerable: !0,
            value: Be,
            writable: !0
          };
          Object.defineProperties(console, {
            info: g,
            log: g,
            warn: g,
            error: g,
            group: g,
            groupCollapsed: g,
            groupEnd: g
          });
        }
        W++;
      }
    }
    function xt() {
      {
        if (W--, W === 0) {
          var g = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: L({}, g, {
              value: K
            }),
            info: L({}, g, {
              value: V
            }),
            warn: L({}, g, {
              value: te
            }),
            error: L({}, g, {
              value: X
            }),
            group: L({}, g, {
              value: Pe
            }),
            groupCollapsed: L({}, g, {
              value: qe
            }),
            groupEnd: L({}, g, {
              value: pe
            })
          });
        }
        W < 0 && b("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var lt = y.ReactCurrentDispatcher, _e;
    function Ct(g, C, I) {
      {
        if (_e === void 0)
          try {
            throw Error();
          } catch (Q) {
            var q = Q.stack.trim().match(/\n( *(at )?)/);
            _e = q && q[1] || "";
          }
        return `
` + _e + g;
      }
    }
    var T = !1, B;
    {
      var H = typeof WeakMap == "function" ? WeakMap : Map;
      B = new H();
    }
    function M(g, C) {
      if (!g || T)
        return "";
      {
        var I = B.get(g);
        if (I !== void 0)
          return I;
      }
      var q;
      T = !0;
      var Q = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var ae;
      ae = lt.current, lt.current = null, Ue();
      try {
        if (C) {
          var G = function() {
            throw Error();
          };
          if (Object.defineProperty(G.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(G, []);
            } catch (Xe) {
              q = Xe;
            }
            Reflect.construct(g, [], G);
          } else {
            try {
              G.call();
            } catch (Xe) {
              q = Xe;
            }
            g.call(G.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Xe) {
            q = Xe;
          }
          g();
        }
      } catch (Xe) {
        if (Xe && q && typeof Xe.stack == "string") {
          for (var Y = Xe.stack.split(`
`), He = q.stack.split(`
`), we = Y.length - 1, Ee = He.length - 1; we >= 1 && Ee >= 0 && Y[we] !== He[Ee]; )
            Ee--;
          for (; we >= 1 && Ee >= 0; we--, Ee--)
            if (Y[we] !== He[Ee]) {
              if (we !== 1 || Ee !== 1)
                do
                  if (we--, Ee--, Ee < 0 || Y[we] !== He[Ee]) {
                    var ct = `
` + Y[we].replace(" at new ", " at ");
                    return g.displayName && ct.includes("<anonymous>") && (ct = ct.replace("<anonymous>", g.displayName)), typeof g == "function" && B.set(g, ct), ct;
                  }
                while (we >= 1 && Ee >= 0);
              break;
            }
        }
      } finally {
        T = !1, lt.current = ae, xt(), Error.prepareStackTrace = Q;
      }
      var zr = g ? g.displayName || g.name : "", yr = zr ? Ct(zr) : "";
      return typeof g == "function" && B.set(g, yr), yr;
    }
    function Ke(g, C, I) {
      return M(g, !1);
    }
    function re(g) {
      var C = g.prototype;
      return !!(C && C.isReactComponent);
    }
    function $e(g, C, I) {
      if (g == null)
        return "";
      if (typeof g == "function")
        return M(g, re(g));
      if (typeof g == "string")
        return Ct(g);
      switch (g) {
        case c:
          return Ct("Suspense");
        case l:
          return Ct("SuspenseList");
      }
      if (typeof g == "object")
        switch (g.$$typeof) {
          case s:
            return Ke(g.render);
          case f:
            return $e(g.type, C, I);
          case d: {
            var q = g, Q = q._payload, ae = q._init;
            try {
              return $e(ae(Q), C, I);
            } catch {
            }
          }
        }
      return "";
    }
    var Ce = Object.prototype.hasOwnProperty, Mt = {}, pn = y.ReactDebugCurrentFrame;
    function fi(g) {
      if (g) {
        var C = g._owner, I = $e(g.type, g._source, C ? C.type : null);
        pn.setExtraStackFrame(I);
      } else
        pn.setExtraStackFrame(null);
    }
    function a0(g, C, I, q, Q) {
      {
        var ae = Function.call.bind(Ce);
        for (var G in g)
          if (ae(g, G)) {
            var Y = void 0;
            try {
              if (typeof g[G] != "function") {
                var He = Error((q || "React class") + ": " + I + " type `" + G + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof g[G] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw He.name = "Invariant Violation", He;
              }
              Y = g[G](C, G, q, I, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (we) {
              Y = we;
            }
            Y && !(Y instanceof Error) && (fi(Q), b("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", q || "React class", I, G, typeof Y), fi(null)), Y instanceof Error && !(Y.message in Mt) && (Mt[Y.message] = !0, fi(Q), b("Failed %s type: %s", I, Y.message), fi(null));
          }
      }
    }
    var o0 = Array.isArray;
    function co(g) {
      return o0(g);
    }
    function u0(g) {
      {
        var C = typeof Symbol == "function" && Symbol.toStringTag, I = C && g[Symbol.toStringTag] || g.constructor.name || "Object";
        return I;
      }
    }
    function s0(g) {
      try {
        return Dc(g), !1;
      } catch {
        return !0;
      }
    }
    function Dc(g) {
      return "" + g;
    }
    function Ic(g) {
      if (s0(g))
        return b("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", u0(g)), Dc(g);
    }
    var Nc = y.ReactCurrentOwner, l0 = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, kc, Rc;
    function c0(g) {
      if (Ce.call(g, "ref")) {
        var C = Object.getOwnPropertyDescriptor(g, "ref").get;
        if (C && C.isReactWarning)
          return !1;
      }
      return g.ref !== void 0;
    }
    function f0(g) {
      if (Ce.call(g, "key")) {
        var C = Object.getOwnPropertyDescriptor(g, "key").get;
        if (C && C.isReactWarning)
          return !1;
      }
      return g.key !== void 0;
    }
    function d0(g, C) {
      typeof g.ref == "string" && Nc.current;
    }
    function p0(g, C) {
      {
        var I = function() {
          kc || (kc = !0, b("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", C));
        };
        I.isReactWarning = !0, Object.defineProperty(g, "key", {
          get: I,
          configurable: !0
        });
      }
    }
    function h0(g, C) {
      {
        var I = function() {
          Rc || (Rc = !0, b("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", C));
        };
        I.isReactWarning = !0, Object.defineProperty(g, "ref", {
          get: I,
          configurable: !0
        });
      }
    }
    var v0 = function(g, C, I, q, Q, ae, G) {
      var Y = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: g,
        key: C,
        ref: I,
        props: G,
        // Record the component responsible for creating this element.
        _owner: ae
      };
      return Y._store = {}, Object.defineProperty(Y._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(Y, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: q
      }), Object.defineProperty(Y, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Q
      }), Object.freeze && (Object.freeze(Y.props), Object.freeze(Y)), Y;
    };
    function m0(g, C, I, q, Q) {
      {
        var ae, G = {}, Y = null, He = null;
        I !== void 0 && (Ic(I), Y = "" + I), f0(C) && (Ic(C.key), Y = "" + C.key), c0(C) && (He = C.ref, d0(C, Q));
        for (ae in C)
          Ce.call(C, ae) && !l0.hasOwnProperty(ae) && (G[ae] = C[ae]);
        if (g && g.defaultProps) {
          var we = g.defaultProps;
          for (ae in we)
            G[ae] === void 0 && (G[ae] = we[ae]);
        }
        if (Y || He) {
          var Ee = typeof g == "function" ? g.displayName || g.name || "Unknown" : g;
          Y && p0(G, Ee), He && h0(G, Ee);
        }
        return v0(g, Y, He, Q, q, Nc.current, G);
      }
    }
    var fo = y.ReactCurrentOwner, $c = y.ReactDebugCurrentFrame;
    function Fr(g) {
      if (g) {
        var C = g._owner, I = $e(g.type, g._source, C ? C.type : null);
        $c.setExtraStackFrame(I);
      } else
        $c.setExtraStackFrame(null);
    }
    var po;
    po = !1;
    function ho(g) {
      return typeof g == "object" && g !== null && g.$$typeof === t;
    }
    function Lc() {
      {
        if (fo.current) {
          var g = N(fo.current.type);
          if (g)
            return `

Check the render method of \`` + g + "`.";
        }
        return "";
      }
    }
    function y0(g) {
      return "";
    }
    var Fc = {};
    function g0(g) {
      {
        var C = Lc();
        if (!C) {
          var I = typeof g == "string" ? g : g.displayName || g.name;
          I && (C = `

Check the top-level render call using <` + I + ">.");
        }
        return C;
      }
    }
    function zc(g, C) {
      {
        if (!g._store || g._store.validated || g.key != null)
          return;
        g._store.validated = !0;
        var I = g0(C);
        if (Fc[I])
          return;
        Fc[I] = !0;
        var q = "";
        g && g._owner && g._owner !== fo.current && (q = " It was passed a child from " + N(g._owner.type) + "."), Fr(g), b('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', I, q), Fr(null);
      }
    }
    function qc(g, C) {
      {
        if (typeof g != "object")
          return;
        if (co(g))
          for (var I = 0; I < g.length; I++) {
            var q = g[I];
            ho(q) && zc(q, C);
          }
        else if (ho(g))
          g._store && (g._store.validated = !0);
        else if (g) {
          var Q = m(g);
          if (typeof Q == "function" && Q !== g.entries)
            for (var ae = Q.call(g), G; !(G = ae.next()).done; )
              ho(G.value) && zc(G.value, C);
        }
      }
    }
    function b0(g) {
      {
        var C = g.type;
        if (C == null || typeof C == "string")
          return;
        var I;
        if (typeof C == "function")
          I = C.propTypes;
        else if (typeof C == "object" && (C.$$typeof === s || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        C.$$typeof === f))
          I = C.propTypes;
        else
          return;
        if (I) {
          var q = N(C);
          a0(I, g.props, "prop", q, g);
        } else if (C.PropTypes !== void 0 && !po) {
          po = !0;
          var Q = N(C);
          b("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", Q || "Unknown");
        }
        typeof C.getDefaultProps == "function" && !C.getDefaultProps.isReactClassApproved && b("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function w0(g) {
      {
        for (var C = Object.keys(g.props), I = 0; I < C.length; I++) {
          var q = C[I];
          if (q !== "children" && q !== "key") {
            Fr(g), b("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", q), Fr(null);
            break;
          }
        }
        g.ref !== null && (Fr(g), b("Invalid attribute `ref` supplied to `React.Fragment`."), Fr(null));
      }
    }
    var Bc = {};
    function Uc(g, C, I, q, Q, ae) {
      {
        var G = $(g);
        if (!G) {
          var Y = "";
          (g === void 0 || typeof g == "object" && g !== null && Object.keys(g).length === 0) && (Y += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var He = y0();
          He ? Y += He : Y += Lc();
          var we;
          g === null ? we = "null" : co(g) ? we = "array" : g !== void 0 && g.$$typeof === t ? (we = "<" + (N(g.type) || "Unknown") + " />", Y = " Did you accidentally export a JSX literal instead of a component?") : we = typeof g, b("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", we, Y);
        }
        var Ee = m0(g, C, I, Q, ae);
        if (Ee == null)
          return Ee;
        if (G) {
          var ct = C.children;
          if (ct !== void 0)
            if (q)
              if (co(ct)) {
                for (var zr = 0; zr < ct.length; zr++)
                  qc(ct[zr], g);
                Object.freeze && Object.freeze(ct);
              } else
                b("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              qc(ct, g);
        }
        if (Ce.call(C, "key")) {
          var yr = N(g), Xe = Object.keys(C).filter(function(S0) {
            return S0 !== "key";
          }), vo = Xe.length > 0 ? "{key: someKey, " + Xe.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Bc[yr + vo]) {
            var E0 = Xe.length > 0 ? "{" + Xe.join(": ..., ") + ": ...}" : "{}";
            b(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, vo, yr, E0, yr), Bc[yr + vo] = !0;
          }
        }
        return g === n ? w0(Ee) : b0(Ee), Ee;
      }
    }
    function O0(g, C, I) {
      return Uc(g, C, I, !0);
    }
    function x0(g, C, I) {
      return Uc(g, C, I, !1);
    }
    var P0 = x0, _0 = O0;
    vn.Fragment = n, vn.jsx = P0, vn.jsxs = _0;
  })()), vn;
}
var Kc;
function I0() {
  return Kc || (Kc = 1, process.env.NODE_ENV === "production" ? di.exports = M0() : di.exports = D0()), di.exports;
}
var F = I0();
function Mv(e) {
  var t, r, n = "";
  if (typeof e == "string" || typeof e == "number") n += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var i = e.length;
    for (t = 0; t < i; t++) e[t] && (r = Mv(e[t])) && (n && (n += " "), n += r);
  } else for (r in e) e[r] && (n && (n += " "), n += r);
  return n;
}
function Oe() {
  for (var e, t, r = 0, n = "", i = arguments.length; r < i; r++) (e = arguments[r]) && (t = Mv(e)) && (n && (n += " "), n += t);
  return n;
}
var N0 = ["dangerouslySetInnerHTML", "onCopy", "onCopyCapture", "onCut", "onCutCapture", "onPaste", "onPasteCapture", "onCompositionEnd", "onCompositionEndCapture", "onCompositionStart", "onCompositionStartCapture", "onCompositionUpdate", "onCompositionUpdateCapture", "onFocus", "onFocusCapture", "onBlur", "onBlurCapture", "onChange", "onChangeCapture", "onBeforeInput", "onBeforeInputCapture", "onInput", "onInputCapture", "onReset", "onResetCapture", "onSubmit", "onSubmitCapture", "onInvalid", "onInvalidCapture", "onLoad", "onLoadCapture", "onError", "onErrorCapture", "onKeyDown", "onKeyDownCapture", "onKeyPress", "onKeyPressCapture", "onKeyUp", "onKeyUpCapture", "onAbort", "onAbortCapture", "onCanPlay", "onCanPlayCapture", "onCanPlayThrough", "onCanPlayThroughCapture", "onDurationChange", "onDurationChangeCapture", "onEmptied", "onEmptiedCapture", "onEncrypted", "onEncryptedCapture", "onEnded", "onEndedCapture", "onLoadedData", "onLoadedDataCapture", "onLoadedMetadata", "onLoadedMetadataCapture", "onLoadStart", "onLoadStartCapture", "onPause", "onPauseCapture", "onPlay", "onPlayCapture", "onPlaying", "onPlayingCapture", "onProgress", "onProgressCapture", "onRateChange", "onRateChangeCapture", "onSeeked", "onSeekedCapture", "onSeeking", "onSeekingCapture", "onStalled", "onStalledCapture", "onSuspend", "onSuspendCapture", "onTimeUpdate", "onTimeUpdateCapture", "onVolumeChange", "onVolumeChangeCapture", "onWaiting", "onWaitingCapture", "onAuxClick", "onAuxClickCapture", "onClick", "onClickCapture", "onContextMenu", "onContextMenuCapture", "onDoubleClick", "onDoubleClickCapture", "onDrag", "onDragCapture", "onDragEnd", "onDragEndCapture", "onDragEnter", "onDragEnterCapture", "onDragExit", "onDragExitCapture", "onDragLeave", "onDragLeaveCapture", "onDragOver", "onDragOverCapture", "onDragStart", "onDragStartCapture", "onDrop", "onDropCapture", "onMouseDown", "onMouseDownCapture", "onMouseEnter", "onMouseLeave", "onMouseMove", "onMouseMoveCapture", "onMouseOut", "onMouseOutCapture", "onMouseOver", "onMouseOverCapture", "onMouseUp", "onMouseUpCapture", "onSelect", "onSelectCapture", "onTouchCancel", "onTouchCancelCapture", "onTouchEnd", "onTouchEndCapture", "onTouchMove", "onTouchMoveCapture", "onTouchStart", "onTouchStartCapture", "onPointerDown", "onPointerDownCapture", "onPointerMove", "onPointerMoveCapture", "onPointerUp", "onPointerUpCapture", "onPointerCancel", "onPointerCancelCapture", "onPointerEnter", "onPointerEnterCapture", "onPointerLeave", "onPointerLeaveCapture", "onPointerOver", "onPointerOverCapture", "onPointerOut", "onPointerOutCapture", "onGotPointerCapture", "onGotPointerCaptureCapture", "onLostPointerCapture", "onLostPointerCaptureCapture", "onScroll", "onScrollCapture", "onWheel", "onWheelCapture", "onAnimationStart", "onAnimationStartCapture", "onAnimationEnd", "onAnimationEndCapture", "onAnimationIteration", "onAnimationIterationCapture", "onTransitionEnd", "onTransitionEndCapture"];
function Vs(e) {
  if (typeof e != "string")
    return !1;
  var t = N0;
  return t.includes(e);
}
var k0 = [
  "aria-activedescendant",
  "aria-atomic",
  "aria-autocomplete",
  "aria-busy",
  "aria-checked",
  "aria-colcount",
  "aria-colindex",
  "aria-colspan",
  "aria-controls",
  "aria-current",
  "aria-describedby",
  "aria-details",
  "aria-disabled",
  "aria-errormessage",
  "aria-expanded",
  "aria-flowto",
  "aria-haspopup",
  "aria-hidden",
  "aria-invalid",
  "aria-keyshortcuts",
  "aria-label",
  "aria-labelledby",
  "aria-level",
  "aria-live",
  "aria-modal",
  "aria-multiline",
  "aria-multiselectable",
  "aria-orientation",
  "aria-owns",
  "aria-placeholder",
  "aria-posinset",
  "aria-pressed",
  "aria-readonly",
  "aria-relevant",
  "aria-required",
  "aria-roledescription",
  "aria-rowcount",
  "aria-rowindex",
  "aria-rowspan",
  "aria-selected",
  "aria-setsize",
  "aria-sort",
  "aria-valuemax",
  "aria-valuemin",
  "aria-valuenow",
  "aria-valuetext",
  "className",
  "color",
  "height",
  "id",
  "lang",
  "max",
  "media",
  "method",
  "min",
  "name",
  "style",
  /*
   * removed 'type' SVGElementPropKey because we do not currently use any SVG elements
   * that can use it, and it conflicts with the recharts prop 'type'
   * https://github.com/recharts/recharts/pull/3327
   * https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/type
   */
  // 'type',
  "target",
  "width",
  "role",
  "tabIndex",
  "accentHeight",
  "accumulate",
  "additive",
  "alignmentBaseline",
  "allowReorder",
  "alphabetic",
  "amplitude",
  "arabicForm",
  "ascent",
  "attributeName",
  "attributeType",
  "autoReverse",
  "azimuth",
  "baseFrequency",
  "baselineShift",
  "baseProfile",
  "bbox",
  "begin",
  "bias",
  "by",
  "calcMode",
  "capHeight",
  "clip",
  "clipPath",
  "clipPathUnits",
  "clipRule",
  "colorInterpolation",
  "colorInterpolationFilters",
  "colorProfile",
  "colorRendering",
  "contentScriptType",
  "contentStyleType",
  "cursor",
  "cx",
  "cy",
  "d",
  "decelerate",
  "descent",
  "diffuseConstant",
  "direction",
  "display",
  "divisor",
  "dominantBaseline",
  "dur",
  "dx",
  "dy",
  "edgeMode",
  "elevation",
  "enableBackground",
  "end",
  "exponent",
  "externalResourcesRequired",
  "fill",
  "fillOpacity",
  "fillRule",
  "filter",
  "filterRes",
  "filterUnits",
  "floodColor",
  "floodOpacity",
  "focusable",
  "fontFamily",
  "fontSize",
  "fontSizeAdjust",
  "fontStretch",
  "fontStyle",
  "fontVariant",
  "fontWeight",
  "format",
  "from",
  "fx",
  "fy",
  "g1",
  "g2",
  "glyphName",
  "glyphOrientationHorizontal",
  "glyphOrientationVertical",
  "glyphRef",
  "gradientTransform",
  "gradientUnits",
  "hanging",
  "horizAdvX",
  "horizOriginX",
  "href",
  "ideographic",
  "imageRendering",
  "in2",
  "in",
  "intercept",
  "k1",
  "k2",
  "k3",
  "k4",
  "k",
  "kernelMatrix",
  "kernelUnitLength",
  "kerning",
  "keyPoints",
  "keySplines",
  "keyTimes",
  "lengthAdjust",
  "letterSpacing",
  "lightingColor",
  "limitingConeAngle",
  "local",
  "markerEnd",
  "markerHeight",
  "markerMid",
  "markerStart",
  "markerUnits",
  "markerWidth",
  "mask",
  "maskContentUnits",
  "maskUnits",
  "mathematical",
  "mode",
  "numOctaves",
  "offset",
  "opacity",
  "operator",
  "order",
  "orient",
  "orientation",
  "origin",
  "overflow",
  "overlinePosition",
  "overlineThickness",
  "paintOrder",
  "panose1",
  "pathLength",
  "patternContentUnits",
  "patternTransform",
  "patternUnits",
  "pointerEvents",
  "pointsAtX",
  "pointsAtY",
  "pointsAtZ",
  "preserveAlpha",
  "preserveAspectRatio",
  "primitiveUnits",
  "r",
  "radius",
  "refX",
  "refY",
  "renderingIntent",
  "repeatCount",
  "repeatDur",
  "requiredExtensions",
  "requiredFeatures",
  "restart",
  "result",
  "rotate",
  "rx",
  "ry",
  "seed",
  "shapeRendering",
  "slope",
  "spacing",
  "specularConstant",
  "specularExponent",
  "speed",
  "spreadMethod",
  "startOffset",
  "stdDeviation",
  "stemh",
  "stemv",
  "stitchTiles",
  "stopColor",
  "stopOpacity",
  "strikethroughPosition",
  "strikethroughThickness",
  "string",
  "stroke",
  "strokeDasharray",
  "strokeDashoffset",
  "strokeLinecap",
  "strokeLinejoin",
  "strokeMiterlimit",
  "strokeOpacity",
  "strokeWidth",
  "surfaceScale",
  "systemLanguage",
  "tableValues",
  "targetX",
  "targetY",
  "textAnchor",
  "textDecoration",
  "textLength",
  "textRendering",
  "to",
  "transform",
  "u1",
  "u2",
  "underlinePosition",
  "underlineThickness",
  "unicode",
  "unicodeBidi",
  "unicodeRange",
  "unitsPerEm",
  "vAlphabetic",
  "values",
  "vectorEffect",
  "version",
  "vertAdvY",
  "vertOriginX",
  "vertOriginY",
  "vHanging",
  "vIdeographic",
  "viewTarget",
  "visibility",
  "vMathematical",
  "widths",
  "wordSpacing",
  "writingMode",
  "x1",
  "x2",
  "x",
  "xChannelSelector",
  "xHeight",
  "xlinkActuate",
  "xlinkArcrole",
  "xlinkHref",
  "xlinkRole",
  "xlinkShow",
  "xlinkTitle",
  "xlinkType",
  "xmlBase",
  "xmlLang",
  "xmlns",
  "xmlnsXlink",
  "xmlSpace",
  "y1",
  "y2",
  "y",
  "yChannelSelector",
  "z",
  "zoomAndPan",
  "ref",
  "key",
  "angle"
], R0 = new Set(k0);
function Dv(e) {
  return typeof e != "string" ? !1 : R0.has(e);
}
function Iv(e) {
  return typeof e == "string" && e.startsWith("data-");
}
function Gr(e) {
  if (typeof e != "object" || e === null)
    return {};
  var t = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && (Dv(r) || Iv(r)) && (t[r] = e[r]);
  return t;
}
function Hu(e) {
  if (e == null)
    return null;
  if (/* @__PURE__ */ nr(e) && typeof e.props == "object" && e.props !== null) {
    var t = e.props;
    return Gr(t);
  }
  return typeof e == "object" && !Array.isArray(e) ? Gr(e) : null;
}
function mt(e) {
  var t = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && (Dv(r) || Iv(r) || Vs(r)) && (t[r] = e[r]);
  return t;
}
var $0 = ["children", "width", "height", "viewBox", "className", "style", "title", "desc"];
function Yu() {
  return Yu = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Yu.apply(null, arguments);
}
function L0(e, t) {
  if (e == null) return {};
  var r, n, i = F0(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
  }
  return i;
}
function F0(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
var Ks = /* @__PURE__ */ et((e, t) => {
  var {
    children: r,
    width: n,
    height: i,
    viewBox: a,
    className: o,
    style: u,
    title: s,
    desc: c
  } = e, l = L0(e, $0), f = a || {
    width: n,
    height: i,
    x: 0,
    y: 0
  }, d = Oe("recharts-surface", o);
  return /* @__PURE__ */ P.createElement("svg", Yu({}, mt(l), {
    className: d,
    width: n,
    height: i,
    style: u,
    viewBox: "".concat(f.x, " ").concat(f.y, " ").concat(f.width, " ").concat(f.height),
    ref: t
  }), /* @__PURE__ */ P.createElement("title", null, s), /* @__PURE__ */ P.createElement("desc", null, c), r);
}), z0 = ["children", "className"];
function Gu() {
  return Gu = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Gu.apply(null, arguments);
}
function q0(e, t) {
  if (e == null) return {};
  var r, n, i = B0(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
  }
  return i;
}
function B0(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
var ar = /* @__PURE__ */ P.forwardRef((e, t) => {
  var {
    children: r,
    className: n
  } = e, i = q0(e, z0), a = Oe("recharts-layer", n);
  return /* @__PURE__ */ P.createElement("g", Gu({
    className: a
  }, mt(i), {
    ref: t
  }), r);
}), Nv = /* @__PURE__ */ bt(null), U0 = () => Tt(Nv);
function ue(e) {
  return function() {
    return e;
  };
}
const kv = Math.cos, Fi = Math.sin, jt = Math.sqrt, zi = Math.PI, Ea = 2 * zi, Xu = Math.PI, Zu = 2 * Xu, gr = 1e-6, W0 = Zu - gr;
function Rv(e) {
  this._ += e[0];
  for (let t = 1, r = e.length; t < r; ++t)
    this._ += arguments[t] + e[t];
}
function V0(e) {
  let t = Math.floor(e);
  if (!(t >= 0)) throw new Error(`invalid digits: ${e}`);
  if (t > 15) return Rv;
  const r = 10 ** t;
  return function(n) {
    this._ += n[0];
    for (let i = 1, a = n.length; i < a; ++i)
      this._ += Math.round(arguments[i] * r) / r + n[i];
  };
}
class K0 {
  constructor(t) {
    this._x0 = this._y0 = // start of current subpath
    this._x1 = this._y1 = null, this._ = "", this._append = t == null ? Rv : V0(t);
  }
  moveTo(t, r) {
    this._append`M${this._x0 = this._x1 = +t},${this._y0 = this._y1 = +r}`;
  }
  closePath() {
    this._x1 !== null && (this._x1 = this._x0, this._y1 = this._y0, this._append`Z`);
  }
  lineTo(t, r) {
    this._append`L${this._x1 = +t},${this._y1 = +r}`;
  }
  quadraticCurveTo(t, r, n, i) {
    this._append`Q${+t},${+r},${this._x1 = +n},${this._y1 = +i}`;
  }
  bezierCurveTo(t, r, n, i, a, o) {
    this._append`C${+t},${+r},${+n},${+i},${this._x1 = +a},${this._y1 = +o}`;
  }
  arcTo(t, r, n, i, a) {
    if (t = +t, r = +r, n = +n, i = +i, a = +a, a < 0) throw new Error(`negative radius: ${a}`);
    let o = this._x1, u = this._y1, s = n - t, c = i - r, l = o - t, f = u - r, d = l * l + f * f;
    if (this._x1 === null)
      this._append`M${this._x1 = t},${this._y1 = r}`;
    else if (d > gr) if (!(Math.abs(f * s - c * l) > gr) || !a)
      this._append`L${this._x1 = t},${this._y1 = r}`;
    else {
      let p = n - o, v = i - u, h = s * s + c * c, m = p * p + v * v, y = Math.sqrt(h), b = Math.sqrt(d), w = a * Math.tan((Xu - Math.acos((h + d - m) / (2 * y * b))) / 2), _ = w / b, O = w / y;
      Math.abs(_ - 1) > gr && this._append`L${t + _ * l},${r + _ * f}`, this._append`A${a},${a},0,0,${+(f * p > l * v)},${this._x1 = t + O * s},${this._y1 = r + O * c}`;
    }
  }
  arc(t, r, n, i, a, o) {
    if (t = +t, r = +r, n = +n, o = !!o, n < 0) throw new Error(`negative radius: ${n}`);
    let u = n * Math.cos(i), s = n * Math.sin(i), c = t + u, l = r + s, f = 1 ^ o, d = o ? i - a : a - i;
    this._x1 === null ? this._append`M${c},${l}` : (Math.abs(this._x1 - c) > gr || Math.abs(this._y1 - l) > gr) && this._append`L${c},${l}`, n && (d < 0 && (d = d % Zu + Zu), d > W0 ? this._append`A${n},${n},0,1,${f},${t - u},${r - s}A${n},${n},0,1,${f},${this._x1 = c},${this._y1 = l}` : d > gr && this._append`A${n},${n},0,${+(d >= Xu)},${f},${this._x1 = t + n * Math.cos(a)},${this._y1 = r + n * Math.sin(a)}`);
  }
  rect(t, r, n, i) {
    this._append`M${this._x0 = this._x1 = +t},${this._y0 = this._y1 = +r}h${n = +n}v${+i}h${-n}Z`;
  }
  toString() {
    return this._;
  }
}
function Hs(e) {
  let t = 3;
  return e.digits = function(r) {
    if (!arguments.length) return t;
    if (r == null)
      t = null;
    else {
      const n = Math.floor(r);
      if (!(n >= 0)) throw new RangeError(`invalid digits: ${r}`);
      t = n;
    }
    return e;
  }, () => new K0(t);
}
function Ys(e) {
  return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function $v(e) {
  this._context = e;
}
$v.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._point = 0;
  },
  lineEnd: function() {
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(e, t) {
    switch (e = +e, t = +t, this._point) {
      case 0:
        this._point = 1, this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t);
        break;
      case 1:
        this._point = 2;
      // falls through
      default:
        this._context.lineTo(e, t);
        break;
    }
  }
};
function Sa(e) {
  return new $v(e);
}
function Lv(e) {
  return e[0];
}
function Fv(e) {
  return e[1];
}
function zv(e, t) {
  var r = ue(!0), n = null, i = Sa, a = null, o = Hs(u);
  e = typeof e == "function" ? e : e === void 0 ? Lv : ue(e), t = typeof t == "function" ? t : t === void 0 ? Fv : ue(t);
  function u(s) {
    var c, l = (s = Ys(s)).length, f, d = !1, p;
    for (n == null && (a = i(p = o())), c = 0; c <= l; ++c)
      !(c < l && r(f = s[c], c, s)) === d && ((d = !d) ? a.lineStart() : a.lineEnd()), d && a.point(+e(f, c, s), +t(f, c, s));
    if (p) return a = null, p + "" || null;
  }
  return u.x = function(s) {
    return arguments.length ? (e = typeof s == "function" ? s : ue(+s), u) : e;
  }, u.y = function(s) {
    return arguments.length ? (t = typeof s == "function" ? s : ue(+s), u) : t;
  }, u.defined = function(s) {
    return arguments.length ? (r = typeof s == "function" ? s : ue(!!s), u) : r;
  }, u.curve = function(s) {
    return arguments.length ? (i = s, n != null && (a = i(n)), u) : i;
  }, u.context = function(s) {
    return arguments.length ? (s == null ? n = a = null : a = i(n = s), u) : n;
  }, u;
}
function pi(e, t, r) {
  var n = null, i = ue(!0), a = null, o = Sa, u = null, s = Hs(c);
  e = typeof e == "function" ? e : e === void 0 ? Lv : ue(+e), t = typeof t == "function" ? t : ue(t === void 0 ? 0 : +t), r = typeof r == "function" ? r : r === void 0 ? Fv : ue(+r);
  function c(f) {
    var d, p, v, h = (f = Ys(f)).length, m, y = !1, b, w = new Array(h), _ = new Array(h);
    for (a == null && (u = o(b = s())), d = 0; d <= h; ++d) {
      if (!(d < h && i(m = f[d], d, f)) === y)
        if (y = !y)
          p = d, u.areaStart(), u.lineStart();
        else {
          for (u.lineEnd(), u.lineStart(), v = d - 1; v >= p; --v)
            u.point(w[v], _[v]);
          u.lineEnd(), u.areaEnd();
        }
      y && (w[d] = +e(m, d, f), _[d] = +t(m, d, f), u.point(n ? +n(m, d, f) : w[d], r ? +r(m, d, f) : _[d]));
    }
    if (b) return u = null, b + "" || null;
  }
  function l() {
    return zv().defined(i).curve(o).context(a);
  }
  return c.x = function(f) {
    return arguments.length ? (e = typeof f == "function" ? f : ue(+f), n = null, c) : e;
  }, c.x0 = function(f) {
    return arguments.length ? (e = typeof f == "function" ? f : ue(+f), c) : e;
  }, c.x1 = function(f) {
    return arguments.length ? (n = f == null ? null : typeof f == "function" ? f : ue(+f), c) : n;
  }, c.y = function(f) {
    return arguments.length ? (t = typeof f == "function" ? f : ue(+f), r = null, c) : t;
  }, c.y0 = function(f) {
    return arguments.length ? (t = typeof f == "function" ? f : ue(+f), c) : t;
  }, c.y1 = function(f) {
    return arguments.length ? (r = f == null ? null : typeof f == "function" ? f : ue(+f), c) : r;
  }, c.lineX0 = c.lineY0 = function() {
    return l().x(e).y(t);
  }, c.lineY1 = function() {
    return l().x(e).y(r);
  }, c.lineX1 = function() {
    return l().x(n).y(t);
  }, c.defined = function(f) {
    return arguments.length ? (i = typeof f == "function" ? f : ue(!!f), c) : i;
  }, c.curve = function(f) {
    return arguments.length ? (o = f, a != null && (u = o(a)), c) : o;
  }, c.context = function(f) {
    return arguments.length ? (f == null ? a = u = null : u = o(a = f), c) : a;
  }, c;
}
class qv {
  constructor(t, r) {
    this._context = t, this._x = r;
  }
  areaStart() {
    this._line = 0;
  }
  areaEnd() {
    this._line = NaN;
  }
  lineStart() {
    this._point = 0;
  }
  lineEnd() {
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  }
  point(t, r) {
    switch (t = +t, r = +r, this._point) {
      case 0: {
        this._point = 1, this._line ? this._context.lineTo(t, r) : this._context.moveTo(t, r);
        break;
      }
      case 1:
        this._point = 2;
      // falls through
      default: {
        this._x ? this._context.bezierCurveTo(this._x0 = (this._x0 + t) / 2, this._y0, this._x0, r, t, r) : this._context.bezierCurveTo(this._x0, this._y0 = (this._y0 + r) / 2, t, this._y0, t, r);
        break;
      }
    }
    this._x0 = t, this._y0 = r;
  }
}
function H0(e) {
  return new qv(e, !0);
}
function Y0(e) {
  return new qv(e, !1);
}
const Gs = {
  draw(e, t) {
    const r = jt(t / zi);
    e.moveTo(r, 0), e.arc(0, 0, r, 0, Ea);
  }
}, G0 = {
  draw(e, t) {
    const r = jt(t / 5) / 2;
    e.moveTo(-3 * r, -r), e.lineTo(-r, -r), e.lineTo(-r, -3 * r), e.lineTo(r, -3 * r), e.lineTo(r, -r), e.lineTo(3 * r, -r), e.lineTo(3 * r, r), e.lineTo(r, r), e.lineTo(r, 3 * r), e.lineTo(-r, 3 * r), e.lineTo(-r, r), e.lineTo(-3 * r, r), e.closePath();
  }
}, Bv = jt(1 / 3), X0 = Bv * 2, Z0 = {
  draw(e, t) {
    const r = jt(t / X0), n = r * Bv;
    e.moveTo(0, -r), e.lineTo(n, 0), e.lineTo(0, r), e.lineTo(-n, 0), e.closePath();
  }
}, J0 = {
  draw(e, t) {
    const r = jt(t), n = -r / 2;
    e.rect(n, n, r, r);
  }
}, Q0 = 0.8908130915292852, Uv = Fi(zi / 10) / Fi(7 * zi / 10), ew = Fi(Ea / 10) * Uv, tw = -kv(Ea / 10) * Uv, rw = {
  draw(e, t) {
    const r = jt(t * Q0), n = ew * r, i = tw * r;
    e.moveTo(0, -r), e.lineTo(n, i);
    for (let a = 1; a < 5; ++a) {
      const o = Ea * a / 5, u = kv(o), s = Fi(o);
      e.lineTo(s * r, -u * r), e.lineTo(u * n - s * i, s * n + u * i);
    }
    e.closePath();
  }
}, mo = jt(3), nw = {
  draw(e, t) {
    const r = -jt(t / (mo * 3));
    e.moveTo(0, r * 2), e.lineTo(-mo * r, -r), e.lineTo(mo * r, -r), e.closePath();
  }
}, ft = -0.5, dt = jt(3) / 2, Ju = 1 / jt(12), iw = (Ju / 2 + 1) * 3, aw = {
  draw(e, t) {
    const r = jt(t / iw), n = r / 2, i = r * Ju, a = n, o = r * Ju + r, u = -a, s = o;
    e.moveTo(n, i), e.lineTo(a, o), e.lineTo(u, s), e.lineTo(ft * n - dt * i, dt * n + ft * i), e.lineTo(ft * a - dt * o, dt * a + ft * o), e.lineTo(ft * u - dt * s, dt * u + ft * s), e.lineTo(ft * n + dt * i, ft * i - dt * n), e.lineTo(ft * a + dt * o, ft * o - dt * a), e.lineTo(ft * u + dt * s, ft * s - dt * u), e.closePath();
  }
};
function ow(e, t) {
  let r = null, n = Hs(i);
  e = typeof e == "function" ? e : ue(e || Gs), t = typeof t == "function" ? t : ue(t === void 0 ? 64 : +t);
  function i() {
    let a;
    if (r || (r = a = n()), e.apply(this, arguments).draw(r, +t.apply(this, arguments)), a) return r = null, a + "" || null;
  }
  return i.type = function(a) {
    return arguments.length ? (e = typeof a == "function" ? a : ue(a), i) : e;
  }, i.size = function(a) {
    return arguments.length ? (t = typeof a == "function" ? a : ue(+a), i) : t;
  }, i.context = function(a) {
    return arguments.length ? (r = a ?? null, i) : r;
  }, i;
}
function qi() {
}
function Bi(e, t, r) {
  e._context.bezierCurveTo(
    (2 * e._x0 + e._x1) / 3,
    (2 * e._y0 + e._y1) / 3,
    (e._x0 + 2 * e._x1) / 3,
    (e._y0 + 2 * e._y1) / 3,
    (e._x0 + 4 * e._x1 + t) / 6,
    (e._y0 + 4 * e._y1 + r) / 6
  );
}
function Wv(e) {
  this._context = e;
}
Wv.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._y0 = this._y1 = NaN, this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 3:
        Bi(this, this._x1, this._y1);
      // falls through
      case 2:
        this._context.lineTo(this._x1, this._y1);
        break;
    }
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(e, t) {
    switch (e = +e, t = +t, this._point) {
      case 0:
        this._point = 1, this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t);
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3, this._context.lineTo((5 * this._x0 + this._x1) / 6, (5 * this._y0 + this._y1) / 6);
      // falls through
      default:
        Bi(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t;
  }
};
function uw(e) {
  return new Wv(e);
}
function Vv(e) {
  this._context = e;
}
Vv.prototype = {
  areaStart: qi,
  areaEnd: qi,
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = NaN, this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 1: {
        this._context.moveTo(this._x2, this._y2), this._context.closePath();
        break;
      }
      case 2: {
        this._context.moveTo((this._x2 + 2 * this._x3) / 3, (this._y2 + 2 * this._y3) / 3), this._context.lineTo((this._x3 + 2 * this._x2) / 3, (this._y3 + 2 * this._y2) / 3), this._context.closePath();
        break;
      }
      case 3: {
        this.point(this._x2, this._y2), this.point(this._x3, this._y3), this.point(this._x4, this._y4);
        break;
      }
    }
  },
  point: function(e, t) {
    switch (e = +e, t = +t, this._point) {
      case 0:
        this._point = 1, this._x2 = e, this._y2 = t;
        break;
      case 1:
        this._point = 2, this._x3 = e, this._y3 = t;
        break;
      case 2:
        this._point = 3, this._x4 = e, this._y4 = t, this._context.moveTo((this._x0 + 4 * this._x1 + e) / 6, (this._y0 + 4 * this._y1 + t) / 6);
        break;
      default:
        Bi(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t;
  }
};
function sw(e) {
  return new Vv(e);
}
function Kv(e) {
  this._context = e;
}
Kv.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._y0 = this._y1 = NaN, this._point = 0;
  },
  lineEnd: function() {
    (this._line || this._line !== 0 && this._point === 3) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(e, t) {
    switch (e = +e, t = +t, this._point) {
      case 0:
        this._point = 1;
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3;
        var r = (this._x0 + 4 * this._x1 + e) / 6, n = (this._y0 + 4 * this._y1 + t) / 6;
        this._line ? this._context.lineTo(r, n) : this._context.moveTo(r, n);
        break;
      case 3:
        this._point = 4;
      // falls through
      default:
        Bi(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t;
  }
};
function lw(e) {
  return new Kv(e);
}
function Hv(e) {
  this._context = e;
}
Hv.prototype = {
  areaStart: qi,
  areaEnd: qi,
  lineStart: function() {
    this._point = 0;
  },
  lineEnd: function() {
    this._point && this._context.closePath();
  },
  point: function(e, t) {
    e = +e, t = +t, this._point ? this._context.lineTo(e, t) : (this._point = 1, this._context.moveTo(e, t));
  }
};
function cw(e) {
  return new Hv(e);
}
function Hc(e) {
  return e < 0 ? -1 : 1;
}
function Yc(e, t, r) {
  var n = e._x1 - e._x0, i = t - e._x1, a = (e._y1 - e._y0) / (n || i < 0 && -0), o = (r - e._y1) / (i || n < 0 && -0), u = (a * i + o * n) / (n + i);
  return (Hc(a) + Hc(o)) * Math.min(Math.abs(a), Math.abs(o), 0.5 * Math.abs(u)) || 0;
}
function Gc(e, t) {
  var r = e._x1 - e._x0;
  return r ? (3 * (e._y1 - e._y0) / r - t) / 2 : t;
}
function yo(e, t, r) {
  var n = e._x0, i = e._y0, a = e._x1, o = e._y1, u = (a - n) / 3;
  e._context.bezierCurveTo(n + u, i + u * t, a - u, o - u * r, a, o);
}
function Ui(e) {
  this._context = e;
}
Ui.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._y0 = this._y1 = this._t0 = NaN, this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 2:
        this._context.lineTo(this._x1, this._y1);
        break;
      case 3:
        yo(this, this._t0, Gc(this, this._t0));
        break;
    }
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(e, t) {
    var r = NaN;
    if (e = +e, t = +t, !(e === this._x1 && t === this._y1)) {
      switch (this._point) {
        case 0:
          this._point = 1, this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t);
          break;
        case 1:
          this._point = 2;
          break;
        case 2:
          this._point = 3, yo(this, Gc(this, r = Yc(this, e, t)), r);
          break;
        default:
          yo(this, this._t0, r = Yc(this, e, t));
          break;
      }
      this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t, this._t0 = r;
    }
  }
};
function Yv(e) {
  this._context = new Gv(e);
}
(Yv.prototype = Object.create(Ui.prototype)).point = function(e, t) {
  Ui.prototype.point.call(this, t, e);
};
function Gv(e) {
  this._context = e;
}
Gv.prototype = {
  moveTo: function(e, t) {
    this._context.moveTo(t, e);
  },
  closePath: function() {
    this._context.closePath();
  },
  lineTo: function(e, t) {
    this._context.lineTo(t, e);
  },
  bezierCurveTo: function(e, t, r, n, i, a) {
    this._context.bezierCurveTo(t, e, n, r, a, i);
  }
};
function fw(e) {
  return new Ui(e);
}
function dw(e) {
  return new Yv(e);
}
function Xv(e) {
  this._context = e;
}
Xv.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x = [], this._y = [];
  },
  lineEnd: function() {
    var e = this._x, t = this._y, r = e.length;
    if (r)
      if (this._line ? this._context.lineTo(e[0], t[0]) : this._context.moveTo(e[0], t[0]), r === 2)
        this._context.lineTo(e[1], t[1]);
      else
        for (var n = Xc(e), i = Xc(t), a = 0, o = 1; o < r; ++a, ++o)
          this._context.bezierCurveTo(n[0][a], i[0][a], n[1][a], i[1][a], e[o], t[o]);
    (this._line || this._line !== 0 && r === 1) && this._context.closePath(), this._line = 1 - this._line, this._x = this._y = null;
  },
  point: function(e, t) {
    this._x.push(+e), this._y.push(+t);
  }
};
function Xc(e) {
  var t, r = e.length - 1, n, i = new Array(r), a = new Array(r), o = new Array(r);
  for (i[0] = 0, a[0] = 2, o[0] = e[0] + 2 * e[1], t = 1; t < r - 1; ++t) i[t] = 1, a[t] = 4, o[t] = 4 * e[t] + 2 * e[t + 1];
  for (i[r - 1] = 2, a[r - 1] = 7, o[r - 1] = 8 * e[r - 1] + e[r], t = 1; t < r; ++t) n = i[t] / a[t - 1], a[t] -= n, o[t] -= n * o[t - 1];
  for (i[r - 1] = o[r - 1] / a[r - 1], t = r - 2; t >= 0; --t) i[t] = (o[t] - i[t + 1]) / a[t];
  for (a[r - 1] = (e[r] + i[r - 1]) / 2, t = 0; t < r - 1; ++t) a[t] = 2 * e[t + 1] - i[t + 1];
  return [i, a];
}
function pw(e) {
  return new Xv(e);
}
function Aa(e, t) {
  this._context = e, this._t = t;
}
Aa.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x = this._y = NaN, this._point = 0;
  },
  lineEnd: function() {
    0 < this._t && this._t < 1 && this._point === 2 && this._context.lineTo(this._x, this._y), (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line >= 0 && (this._t = 1 - this._t, this._line = 1 - this._line);
  },
  point: function(e, t) {
    switch (e = +e, t = +t, this._point) {
      case 0:
        this._point = 1, this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t);
        break;
      case 1:
        this._point = 2;
      // falls through
      default: {
        if (this._t <= 0)
          this._context.lineTo(this._x, t), this._context.lineTo(e, t);
        else {
          var r = this._x * (1 - this._t) + e * this._t;
          this._context.lineTo(r, this._y), this._context.lineTo(r, t);
        }
        break;
      }
    }
    this._x = e, this._y = t;
  }
};
function hw(e) {
  return new Aa(e, 0.5);
}
function vw(e) {
  return new Aa(e, 0);
}
function mw(e) {
  return new Aa(e, 1);
}
function Cr(e, t) {
  if ((o = e.length) > 1)
    for (var r = 1, n, i, a = e[t[0]], o, u = a.length; r < o; ++r)
      for (i = a, a = e[t[r]], n = 0; n < u; ++n)
        a[n][1] += a[n][0] = isNaN(i[n][1]) ? i[n][0] : i[n][1];
}
function Qu(e) {
  for (var t = e.length, r = new Array(t); --t >= 0; ) r[t] = t;
  return r;
}
function yw(e, t) {
  return e[t];
}
function gw(e) {
  const t = [];
  return t.key = e, t;
}
function bw() {
  var e = ue([]), t = Qu, r = Cr, n = yw;
  function i(a) {
    var o = Array.from(e.apply(this, arguments), gw), u, s = o.length, c = -1, l;
    for (const f of a)
      for (u = 0, ++c; u < s; ++u)
        (o[u][c] = [0, +n(f, o[u].key, c, a)]).data = f;
    for (u = 0, l = Ys(t(o)); u < s; ++u)
      o[l[u]].index = u;
    return r(o, l), o;
  }
  return i.keys = function(a) {
    return arguments.length ? (e = typeof a == "function" ? a : ue(Array.from(a)), i) : e;
  }, i.value = function(a) {
    return arguments.length ? (n = typeof a == "function" ? a : ue(+a), i) : n;
  }, i.order = function(a) {
    return arguments.length ? (t = a == null ? Qu : typeof a == "function" ? a : ue(Array.from(a)), i) : t;
  }, i.offset = function(a) {
    return arguments.length ? (r = a ?? Cr, i) : r;
  }, i;
}
function ww(e, t) {
  if ((n = e.length) > 0) {
    for (var r, n, i = 0, a = e[0].length, o; i < a; ++i) {
      for (o = r = 0; r < n; ++r) o += e[r][i][1] || 0;
      if (o) for (r = 0; r < n; ++r) e[r][i][1] /= o;
    }
    Cr(e, t);
  }
}
function Ow(e, t) {
  if ((i = e.length) > 0) {
    for (var r = 0, n = e[t[0]], i, a = n.length; r < a; ++r) {
      for (var o = 0, u = 0; o < i; ++o) u += e[o][r][1] || 0;
      n[r][1] += n[r][0] = -u / 2;
    }
    Cr(e, t);
  }
}
function xw(e, t) {
  if (!(!((o = e.length) > 0) || !((a = (i = e[t[0]]).length) > 0))) {
    for (var r = 0, n = 1, i, a, o; n < a; ++n) {
      for (var u = 0, s = 0, c = 0; u < o; ++u) {
        for (var l = e[t[u]], f = l[n][1] || 0, d = l[n - 1][1] || 0, p = (f - d) / 2, v = 0; v < u; ++v) {
          var h = e[t[v]], m = h[n][1] || 0, y = h[n - 1][1] || 0;
          p += m - y;
        }
        s += f, c += p * f;
      }
      i[n - 1][1] += i[n - 1][0] = r, s && (r -= c / s);
    }
    i[n - 1][1] += i[n - 1][0] = r, Cr(e, t);
  }
}
var go = {}, bo = {}, Zc;
function Pw() {
  return Zc || (Zc = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    function t(r) {
      return r === "__proto__";
    }
    e.isUnsafeProperty = t;
  })(bo)), bo;
}
var wo = {}, Jc;
function Zv() {
  return Jc || (Jc = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    function t(r) {
      switch (typeof r) {
        case "number":
        case "symbol":
          return !1;
        case "string":
          return r.includes(".") || r.includes("[") || r.includes("]");
      }
    }
    e.isDeepKey = t;
  })(wo)), wo;
}
var Oo = {}, Qc;
function Xs() {
  return Qc || (Qc = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    function t(r) {
      return typeof r == "string" || typeof r == "symbol" ? r : Object.is(r?.valueOf?.(), -0) ? "-0" : String(r);
    }
    e.toKey = t;
  })(Oo)), Oo;
}
var xo = {}, Po = {}, ef;
function _w() {
  return ef || (ef = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    function t(r) {
      if (r == null)
        return "";
      if (typeof r == "string")
        return r;
      if (Array.isArray(r))
        return r.map(t).join(",");
      const n = String(r);
      return n === "0" && Object.is(Number(r), -0) ? "-0" : n;
    }
    e.toString = t;
  })(Po)), Po;
}
var tf;
function Zs() {
  return tf || (tf = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ _w(), r = /* @__PURE__ */ Xs();
    function n(i) {
      if (Array.isArray(i))
        return i.map(r.toKey);
      if (typeof i == "symbol")
        return [i];
      i = t.toString(i);
      const a = [], o = i.length;
      if (o === 0)
        return a;
      let u = 0, s = "", c = "", l = !1;
      for (i.charCodeAt(0) === 46 && (a.push(""), u++); u < o; ) {
        const f = i[u];
        c ? f === "\\" && u + 1 < o ? (u++, s += i[u]) : f === c ? c = "" : s += f : l ? f === '"' || f === "'" ? c = f : f === "]" ? (l = !1, a.push(s), s = "") : s += f : f === "[" ? (l = !0, s && (a.push(s), s = "")) : f === "." ? s && (a.push(s), s = "") : s += f, u++;
      }
      return s && a.push(s), a;
    }
    e.toPath = n;
  })(xo)), xo;
}
var rf;
function Js() {
  return rf || (rf = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ Pw(), r = /* @__PURE__ */ Zv(), n = /* @__PURE__ */ Xs(), i = /* @__PURE__ */ Zs();
    function a(u, s, c) {
      if (u == null)
        return c;
      switch (typeof s) {
        case "string": {
          if (t.isUnsafeProperty(s))
            return c;
          const l = u[s];
          return l === void 0 ? r.isDeepKey(s) ? a(u, i.toPath(s), c) : c : l;
        }
        case "number":
        case "symbol": {
          typeof s == "number" && (s = n.toKey(s));
          const l = u[s];
          return l === void 0 ? c : l;
        }
        default: {
          if (Array.isArray(s))
            return o(u, s, c);
          if (Object.is(s?.valueOf(), -0) ? s = "-0" : s = String(s), t.isUnsafeProperty(s))
            return c;
          const l = u[s];
          return l === void 0 ? c : l;
        }
      }
    }
    function o(u, s, c) {
      if (s.length === 0)
        return c;
      let l = u;
      for (let f = 0; f < s.length; f++) {
        if (l == null || t.isUnsafeProperty(s[f]))
          return c;
        l = l[s[f]];
      }
      return l === void 0 ? c : l;
    }
    e.get = a;
  })(go)), go;
}
var _o, nf;
function Ew() {
  return nf || (nf = 1, _o = Js().get), _o;
}
var Sw = /* @__PURE__ */ Ew();
const Sn = /* @__PURE__ */ cr(Sw);
var Aw = 4;
function rr(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Aw, r = 10 ** t, n = Math.round(e * r) / r;
  return Object.is(n, -0) ? 0 : n;
}
function ye(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++)
    r[n - 1] = arguments[n];
  return e.reduce((i, a, o) => {
    var u = r[o - 1];
    return typeof u == "string" ? i + u + a : u !== void 0 ? i + rr(u) + a : i + a;
  }, "");
}
var Je = (e) => e === 0 ? 0 : e > 0 ? 1 : -1, qt = (e) => typeof e == "number" && e != +e, Bt = (e) => typeof e == "string" && e.indexOf("%") === e.length - 1, z = (e) => (typeof e == "number" || e instanceof Number) && !qt(e), Ut = (e) => z(e) || typeof e == "string", Tw = 0, An = (e) => {
  var t = ++Tw;
  return "".concat(e || "").concat(t);
}, ot = function(t, r) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0, i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
  if (!z(t) && typeof t != "string")
    return n;
  var a;
  if (Bt(t)) {
    if (r == null)
      return n;
    var o = t.indexOf("%");
    a = r * parseFloat(t.slice(0, o)) / 100;
  } else
    a = +t;
  return qt(a) && (a = n), i && r != null && a > r && (a = r), a;
}, Jv = (e) => {
  if (!Array.isArray(e))
    return !1;
  for (var t = e.length, r = {}, n = 0; n < t; n++)
    if (!r[String(e[n])])
      r[String(e[n])] = !0;
    else
      return !0;
  return !1;
};
function Pt(e, t, r) {
  return z(e) && z(t) ? rr(e + r * (t - e)) : t;
}
function jw(e, t, r) {
  if (!(!e || !e.length))
    return e.find((n) => n && (typeof t == "function" ? t(n) : Sn(n, t)) === r);
}
var ut = (e) => e === null || typeof e > "u", Bn = (e) => ut(e) ? e : "".concat(e.charAt(0).toUpperCase()).concat(e.slice(1));
function Cw(e) {
  return e != null;
}
function Un() {
}
var Mw = ["type", "size", "sizeType"];
function es() {
  return es = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, es.apply(null, arguments);
}
function af(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function of(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? af(Object(r), !0).forEach(function(n) {
      Dw(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : af(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Dw(e, t, r) {
  return (t = Iw(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Iw(e) {
  var t = Nw(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function Nw(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function kw(e, t) {
  if (e == null) return {};
  var r, n, i = Rw(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
  }
  return i;
}
function Rw(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
var Qv = {
  symbolCircle: Gs,
  symbolCross: G0,
  symbolDiamond: Z0,
  symbolSquare: J0,
  symbolStar: rw,
  symbolTriangle: nw,
  symbolWye: aw
}, $w = Math.PI / 180, Lw = (e) => {
  var t = "symbol".concat(Bn(e));
  return Qv[t] || Gs;
}, Fw = (e, t, r) => {
  if (t === "area")
    return e;
  switch (r) {
    case "cross":
      return 5 * e * e / 9;
    case "diamond":
      return 0.5 * e * e / Math.sqrt(3);
    case "square":
      return e * e;
    case "star": {
      var n = 18 * $w;
      return 1.25 * e * e * (Math.tan(n) - Math.tan(n * 2) * Math.tan(n) ** 2);
    }
    case "triangle":
      return Math.sqrt(3) * e * e / 4;
    case "wye":
      return (21 - 10 * Math.sqrt(3)) * e * e / 8;
    default:
      return Math.PI * e * e / 4;
  }
}, zw = (e, t) => {
  Qv["symbol".concat(Bn(e))] = t;
}, Qs = (e) => {
  var {
    type: t = "circle",
    size: r = 64,
    sizeType: n = "area"
  } = e, i = kw(e, Mw), a = of(of({}, i), {}, {
    type: t,
    size: r,
    sizeType: n
  }), o = "circle";
  typeof t == "string" && (o = t);
  var u = () => {
    var d = Lw(o), p = ow().type(d).size(Fw(r, n, o)), v = p();
    if (v !== null)
      return v;
  }, {
    className: s,
    cx: c,
    cy: l
  } = a, f = mt(a);
  return z(c) && z(l) && z(r) ? /* @__PURE__ */ P.createElement("path", es({}, f, {
    className: Oe("recharts-symbols", s),
    transform: "translate(".concat(c, ", ").concat(l, ")"),
    d: u()
  })) : null;
};
Qs.registerSymbol = zw;
var em = (e) => "radius" in e && "startAngle" in e && "endAngle" in e, qw = (e, t) => {
  if (!e || typeof e == "function" || typeof e == "boolean")
    return null;
  var r = e;
  if (/* @__PURE__ */ nr(e) && (r = e.props), typeof r != "object" && typeof r != "function")
    return null;
  var n = {};
  return Object.keys(r).forEach((i) => {
    Vs(i) && (n[i] = ((a) => r[i](r, a)));
  }), n;
}, Bw = (e, t, r) => (n) => (e(t, r, n), null), tm = (e, t, r) => {
  if (e === null || typeof e != "object" && typeof e != "function")
    return null;
  var n = null;
  return Object.keys(e).forEach((i) => {
    var a = e[i];
    Vs(i) && typeof a == "function" && (n || (n = {}), n[i] = Bw(a, t, r));
  }), n;
};
function uf(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Uw(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? uf(Object(r), !0).forEach(function(n) {
      Ww(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : uf(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Ww(e, t, r) {
  return (t = Vw(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Vw(e) {
  var t = Kw(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function Kw(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function wt(e, t) {
  var r = Uw({}, e), n = t, i = Object.keys(t), a = i.reduce((o, u) => (o[u] === void 0 && n[u] !== void 0 && (o[u] = n[u]), o), r);
  return a;
}
function Wi() {
  return Wi = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Wi.apply(null, arguments);
}
function sf(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Hw(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? sf(Object(r), !0).forEach(function(n) {
      Yw(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : sf(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Yw(e, t, r) {
  return (t = Gw(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Gw(e) {
  var t = Xw(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function Xw(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var ht = 32, Zw = {
  align: "center",
  iconSize: 14,
  inactiveColor: "#ccc",
  layout: "horizontal",
  verticalAlign: "middle"
};
function Jw(e) {
  var {
    data: t,
    iconType: r,
    inactiveColor: n
  } = e, i = ht / 2, a = ht / 6, o = ht / 3, u = t.inactive ? n : t.color, s = r ?? t.type;
  if (s === "none")
    return null;
  if (s === "plainline") {
    var c;
    return /* @__PURE__ */ P.createElement("line", {
      strokeWidth: 4,
      fill: "none",
      stroke: u,
      strokeDasharray: (c = t.payload) === null || c === void 0 ? void 0 : c.strokeDasharray,
      x1: 0,
      y1: i,
      x2: ht,
      y2: i,
      className: "recharts-legend-icon"
    });
  }
  if (s === "line")
    return /* @__PURE__ */ P.createElement("path", {
      strokeWidth: 4,
      fill: "none",
      stroke: u,
      d: "M0,".concat(i, "h").concat(o, `
            A`).concat(a, ",").concat(a, ",0,1,1,").concat(2 * o, ",").concat(i, `
            H`).concat(ht, "M").concat(2 * o, ",").concat(i, `
            A`).concat(a, ",").concat(a, ",0,1,1,").concat(o, ",").concat(i),
      className: "recharts-legend-icon"
    });
  if (s === "rect")
    return /* @__PURE__ */ P.createElement("path", {
      stroke: "none",
      fill: u,
      d: "M0,".concat(ht / 8, "h").concat(ht, "v").concat(ht * 3 / 4, "h").concat(-ht, "z"),
      className: "recharts-legend-icon"
    });
  if (/* @__PURE__ */ P.isValidElement(t.legendIcon)) {
    var l = Hw({}, t);
    return delete l.legendIcon, /* @__PURE__ */ P.cloneElement(t.legendIcon, l);
  }
  return /* @__PURE__ */ P.createElement(Qs, {
    fill: u,
    cx: i,
    cy: i,
    size: ht,
    sizeType: "diameter",
    type: s
  });
}
function Qw(e) {
  var {
    payload: t,
    iconSize: r,
    layout: n,
    formatter: i,
    inactiveColor: a,
    iconType: o
  } = e, u = {
    x: 0,
    y: 0,
    width: ht,
    height: ht
  }, s = {
    display: n === "horizontal" ? "inline-block" : "block",
    marginRight: 10
  }, c = {
    display: "inline-block",
    verticalAlign: "middle",
    marginRight: 4
  };
  return t.map((l, f) => {
    var d = l.formatter || i, p = Oe({
      "recharts-legend-item": !0,
      ["legend-item-".concat(f)]: !0,
      inactive: l.inactive
    });
    if (l.type === "none")
      return null;
    var v = l.inactive ? a : l.color, h = d ? d(l.value, l, f) : l.value;
    return /* @__PURE__ */ P.createElement("li", Wi({
      className: p,
      style: s,
      key: "legend-item-".concat(f)
    }, tm(e, l, f)), /* @__PURE__ */ P.createElement(Ks, {
      width: r,
      height: r,
      viewBox: u,
      style: c,
      "aria-label": "".concat(h, " legend icon")
    }, /* @__PURE__ */ P.createElement(Jw, {
      data: l,
      iconType: o,
      inactiveColor: a
    })), /* @__PURE__ */ P.createElement("span", {
      className: "recharts-legend-item-text",
      style: {
        color: v
      }
    }, h));
  });
}
var eO = (e) => {
  var t = wt(e, Zw), {
    payload: r,
    layout: n,
    align: i
  } = t;
  if (!r || !r.length)
    return null;
  var a = {
    padding: 0,
    margin: 0,
    textAlign: n === "horizontal" ? i : "left"
  };
  return /* @__PURE__ */ P.createElement("ul", {
    className: "recharts-default-legend",
    style: a
  }, /* @__PURE__ */ P.createElement(Qw, Wi({}, t, {
    payload: r
  })));
}, Eo = {}, So = {}, lf;
function tO() {
  return lf || (lf = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    function t(r, n) {
      const i = /* @__PURE__ */ new Map();
      for (let a = 0; a < r.length; a++) {
        const o = r[a], u = n(o);
        i.has(u) || i.set(u, o);
      }
      return Array.from(i.values());
    }
    e.uniqBy = t;
  })(So)), So;
}
var Ao = {}, cf;
function rm() {
  return cf || (cf = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    function t(r) {
      return r;
    }
    e.identity = t;
  })(Ao)), Ao;
}
var To = {}, jo = {}, Co = {}, ff;
function rO() {
  return ff || (ff = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    function t(r) {
      return Number.isSafeInteger(r) && r >= 0;
    }
    e.isLength = t;
  })(Co)), Co;
}
var df;
function el() {
  return df || (df = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ rO();
    function r(n) {
      return n != null && typeof n != "function" && t.isLength(n.length);
    }
    e.isArrayLike = r;
  })(jo)), jo;
}
var Mo = {}, pf;
function nO() {
  return pf || (pf = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    function t(r) {
      return typeof r == "object" && r !== null;
    }
    e.isObjectLike = t;
  })(Mo)), Mo;
}
var hf;
function iO() {
  return hf || (hf = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ el(), r = /* @__PURE__ */ nO();
    function n(i) {
      return r.isObjectLike(i) && t.isArrayLike(i);
    }
    e.isArrayLikeObject = n;
  })(To)), To;
}
var Do = {}, Io = {}, vf;
function aO() {
  return vf || (vf = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ Js();
    function r(n) {
      return function(i) {
        return t.get(i, n);
      };
    }
    e.property = r;
  })(Io)), Io;
}
var No = {}, ko = {}, Ro = {}, $o = {}, mf;
function nm() {
  return mf || (mf = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    function t(r) {
      return r !== null && (typeof r == "object" || typeof r == "function");
    }
    e.isObject = t;
  })($o)), $o;
}
var Lo = {}, yf;
function im() {
  return yf || (yf = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    function t(r) {
      return r == null || typeof r != "object" && typeof r != "function";
    }
    e.isPrimitive = t;
  })(Lo)), Lo;
}
var Fo = {}, gf;
function am() {
  return gf || (gf = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    function t(r, n) {
      return r === n || Number.isNaN(r) && Number.isNaN(n);
    }
    e.eq = t;
  })(Fo)), Fo;
}
var bf;
function oO() {
  return bf || (bf = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ nm(), r = /* @__PURE__ */ im(), n = /* @__PURE__ */ am();
    function i(l, f, d) {
      return typeof d != "function" ? i(l, f, () => {
      }) : a(l, f, function p(v, h, m, y, b, w) {
        const _ = d(v, h, m, y, b, w);
        return _ !== void 0 ? !!_ : a(v, h, p, w);
      }, /* @__PURE__ */ new Map());
    }
    function a(l, f, d, p) {
      if (f === l)
        return !0;
      switch (typeof f) {
        case "object":
          return o(l, f, d, p);
        case "function":
          return Object.keys(f).length > 0 ? a(l, { ...f }, d, p) : n.eq(l, f);
        default:
          return t.isObject(l) ? typeof f == "string" ? f === "" : !0 : n.eq(l, f);
      }
    }
    function o(l, f, d, p) {
      if (f == null)
        return !0;
      if (Array.isArray(f))
        return s(l, f, d, p);
      if (f instanceof Map)
        return u(l, f, d, p);
      if (f instanceof Set)
        return c(l, f, d, p);
      const v = Object.keys(f);
      if (l == null || r.isPrimitive(l))
        return v.length === 0;
      if (v.length === 0)
        return !0;
      if (p?.has(f))
        return p.get(f) === l;
      p?.set(f, l);
      try {
        for (let h = 0; h < v.length; h++) {
          const m = v[h];
          if (!r.isPrimitive(l) && !(m in l) || f[m] === void 0 && l[m] !== void 0 || f[m] === null && l[m] !== null || !d(l[m], f[m], m, l, f, p))
            return !1;
        }
        return !0;
      } finally {
        p?.delete(f);
      }
    }
    function u(l, f, d, p) {
      if (f.size === 0)
        return !0;
      if (!(l instanceof Map))
        return !1;
      for (const [v, h] of f.entries()) {
        const m = l.get(v);
        if (d(m, h, v, l, f, p) === !1)
          return !1;
      }
      return !0;
    }
    function s(l, f, d, p) {
      if (f.length === 0)
        return !0;
      if (!Array.isArray(l))
        return !1;
      const v = /* @__PURE__ */ new Set();
      for (let h = 0; h < f.length; h++) {
        const m = f[h];
        let y = !1;
        for (let b = 0; b < l.length; b++) {
          if (v.has(b))
            continue;
          const w = l[b];
          let _ = !1;
          if (d(w, m, h, l, f, p) && (_ = !0), _) {
            v.add(b), y = !0;
            break;
          }
        }
        if (!y)
          return !1;
      }
      return !0;
    }
    function c(l, f, d, p) {
      return f.size === 0 ? !0 : l instanceof Set ? s([...l], [...f], d, p) : !1;
    }
    e.isMatchWith = i, e.isSetMatch = c;
  })(Ro)), Ro;
}
var wf;
function om() {
  return wf || (wf = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ oO();
    function r(n, i) {
      return t.isMatchWith(n, i, () => {
      });
    }
    e.isMatch = r;
  })(ko)), ko;
}
var zo = {}, qo = {}, Bo = {}, Of;
function uO() {
  return Of || (Of = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    function t(r) {
      return Object.getOwnPropertySymbols(r).filter((n) => Object.prototype.propertyIsEnumerable.call(r, n));
    }
    e.getSymbols = t;
  })(Bo)), Bo;
}
var Uo = {}, xf;
function um() {
  return xf || (xf = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    function t(r) {
      return r == null ? r === void 0 ? "[object Undefined]" : "[object Null]" : Object.prototype.toString.call(r);
    }
    e.getTag = t;
  })(Uo)), Uo;
}
var Wo = {}, Pf;
function sm() {
  return Pf || (Pf = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = "[object RegExp]", r = "[object String]", n = "[object Number]", i = "[object Boolean]", a = "[object Arguments]", o = "[object Symbol]", u = "[object Date]", s = "[object Map]", c = "[object Set]", l = "[object Array]", f = "[object Function]", d = "[object ArrayBuffer]", p = "[object Object]", v = "[object Error]", h = "[object DataView]", m = "[object Uint8Array]", y = "[object Uint8ClampedArray]", b = "[object Uint16Array]", w = "[object Uint32Array]", _ = "[object BigUint64Array]", O = "[object Int8Array]", x = "[object Int16Array]", S = "[object Int32Array]", D = "[object BigInt64Array]", k = "[object Float32Array]", $ = "[object Float64Array]";
    e.argumentsTag = a, e.arrayBufferTag = d, e.arrayTag = l, e.bigInt64ArrayTag = D, e.bigUint64ArrayTag = _, e.booleanTag = i, e.dataViewTag = h, e.dateTag = u, e.errorTag = v, e.float32ArrayTag = k, e.float64ArrayTag = $, e.functionTag = f, e.int16ArrayTag = x, e.int32ArrayTag = S, e.int8ArrayTag = O, e.mapTag = s, e.numberTag = n, e.objectTag = p, e.regexpTag = t, e.setTag = c, e.stringTag = r, e.symbolTag = o, e.uint16ArrayTag = b, e.uint32ArrayTag = w, e.uint8ArrayTag = m, e.uint8ClampedArrayTag = y;
  })(Wo)), Wo;
}
var Vo = {}, _f;
function sO() {
  return _f || (_f = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    function t(r) {
      return ArrayBuffer.isView(r) && !(r instanceof DataView);
    }
    e.isTypedArray = t;
  })(Vo)), Vo;
}
var Ef;
function lm() {
  return Ef || (Ef = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ uO(), r = /* @__PURE__ */ um(), n = /* @__PURE__ */ sm(), i = /* @__PURE__ */ im(), a = /* @__PURE__ */ sO();
    function o(l, f) {
      return u(l, void 0, l, /* @__PURE__ */ new Map(), f);
    }
    function u(l, f, d, p = /* @__PURE__ */ new Map(), v = void 0) {
      const h = v?.(l, f, d, p);
      if (h !== void 0)
        return h;
      if (i.isPrimitive(l))
        return l;
      if (p.has(l))
        return p.get(l);
      if (Array.isArray(l)) {
        const m = new Array(l.length);
        p.set(l, m);
        for (let y = 0; y < l.length; y++)
          m[y] = u(l[y], y, d, p, v);
        return Object.hasOwn(l, "index") && (m.index = l.index), Object.hasOwn(l, "input") && (m.input = l.input), m;
      }
      if (l instanceof Date)
        return new Date(l.getTime());
      if (l instanceof RegExp) {
        const m = new RegExp(l.source, l.flags);
        return m.lastIndex = l.lastIndex, m;
      }
      if (l instanceof Map) {
        const m = /* @__PURE__ */ new Map();
        p.set(l, m);
        for (const [y, b] of l)
          m.set(y, u(b, y, d, p, v));
        return m;
      }
      if (l instanceof Set) {
        const m = /* @__PURE__ */ new Set();
        p.set(l, m);
        for (const y of l)
          m.add(u(y, void 0, d, p, v));
        return m;
      }
      if (typeof Buffer < "u" && Buffer.isBuffer(l))
        return l.subarray();
      if (a.isTypedArray(l)) {
        const m = new (Object.getPrototypeOf(l)).constructor(l.length);
        p.set(l, m);
        for (let y = 0; y < l.length; y++)
          m[y] = u(l[y], y, d, p, v);
        return m;
      }
      if (l instanceof ArrayBuffer || typeof SharedArrayBuffer < "u" && l instanceof SharedArrayBuffer)
        return l.slice(0);
      if (l instanceof DataView) {
        const m = new DataView(l.buffer.slice(0), l.byteOffset, l.byteLength);
        return p.set(l, m), s(m, l, d, p, v), m;
      }
      if (typeof File < "u" && l instanceof File) {
        const m = new File([l], l.name, {
          type: l.type
        });
        return p.set(l, m), s(m, l, d, p, v), m;
      }
      if (typeof Blob < "u" && l instanceof Blob) {
        const m = new Blob([l], { type: l.type });
        return p.set(l, m), s(m, l, d, p, v), m;
      }
      if (l instanceof Error) {
        const m = new l.constructor();
        return p.set(l, m), m.message = l.message, m.name = l.name, m.stack = l.stack, m.cause = l.cause, s(m, l, d, p, v), m;
      }
      if (l instanceof Boolean) {
        const m = new Boolean(l.valueOf());
        return p.set(l, m), s(m, l, d, p, v), m;
      }
      if (l instanceof Number) {
        const m = new Number(l.valueOf());
        return p.set(l, m), s(m, l, d, p, v), m;
      }
      if (l instanceof String) {
        const m = new String(l.valueOf());
        return p.set(l, m), s(m, l, d, p, v), m;
      }
      if (typeof l == "object" && c(l)) {
        const m = Object.create(Object.getPrototypeOf(l));
        return p.set(l, m), s(m, l, d, p, v), m;
      }
      return l;
    }
    function s(l, f, d = l, p, v) {
      const h = [...Object.keys(f), ...t.getSymbols(f)];
      for (let m = 0; m < h.length; m++) {
        const y = h[m], b = Object.getOwnPropertyDescriptor(l, y);
        (b == null || b.writable) && (l[y] = u(f[y], y, d, p, v));
      }
    }
    function c(l) {
      switch (r.getTag(l)) {
        case n.argumentsTag:
        case n.arrayTag:
        case n.arrayBufferTag:
        case n.dataViewTag:
        case n.booleanTag:
        case n.dateTag:
        case n.float32ArrayTag:
        case n.float64ArrayTag:
        case n.int8ArrayTag:
        case n.int16ArrayTag:
        case n.int32ArrayTag:
        case n.mapTag:
        case n.numberTag:
        case n.objectTag:
        case n.regexpTag:
        case n.setTag:
        case n.stringTag:
        case n.symbolTag:
        case n.uint8ArrayTag:
        case n.uint8ClampedArrayTag:
        case n.uint16ArrayTag:
        case n.uint32ArrayTag:
          return !0;
        default:
          return !1;
      }
    }
    e.cloneDeepWith = o, e.cloneDeepWithImpl = u, e.copyProperties = s;
  })(qo)), qo;
}
var Sf;
function lO() {
  return Sf || (Sf = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ lm();
    function r(n) {
      return t.cloneDeepWithImpl(n, void 0, n, /* @__PURE__ */ new Map(), void 0);
    }
    e.cloneDeep = r;
  })(zo)), zo;
}
var Af;
function cO() {
  return Af || (Af = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ om(), r = /* @__PURE__ */ lO();
    function n(i) {
      return i = r.cloneDeep(i), (a) => t.isMatch(a, i);
    }
    e.matches = n;
  })(No)), No;
}
var Ko = {}, Ho = {}, Yo = {}, Tf;
function fO() {
  return Tf || (Tf = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ lm(), r = /* @__PURE__ */ sm();
    function n(i, a) {
      return t.cloneDeepWith(i, (o, u, s, c) => {
        const l = a?.(o, u, s, c);
        if (l !== void 0)
          return l;
        if (typeof i == "object")
          switch (Object.prototype.toString.call(i)) {
            case r.numberTag:
            case r.stringTag:
            case r.booleanTag: {
              const f = new i.constructor(i?.valueOf());
              return t.copyProperties(f, i), f;
            }
            case r.argumentsTag: {
              const f = {};
              return t.copyProperties(f, i), f.length = i.length, f[Symbol.iterator] = i[Symbol.iterator], f;
            }
            default:
              return;
          }
      });
    }
    e.cloneDeepWith = n;
  })(Yo)), Yo;
}
var jf;
function dO() {
  return jf || (jf = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ fO();
    function r(n) {
      return t.cloneDeepWith(n);
    }
    e.cloneDeep = r;
  })(Ho)), Ho;
}
var Go = {}, Xo = {}, Cf;
function cm() {
  return Cf || (Cf = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /^(?:0|[1-9]\d*)$/;
    function r(n, i = Number.MAX_SAFE_INTEGER) {
      switch (typeof n) {
        case "number":
          return Number.isInteger(n) && n >= 0 && n < i;
        case "symbol":
          return !1;
        case "string":
          return t.test(n);
      }
    }
    e.isIndex = r;
  })(Xo)), Xo;
}
var Zo = {}, Mf;
function pO() {
  return Mf || (Mf = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ um();
    function r(n) {
      return n !== null && typeof n == "object" && t.getTag(n) === "[object Arguments]";
    }
    e.isArguments = r;
  })(Zo)), Zo;
}
var Df;
function hO() {
  return Df || (Df = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ Zv(), r = /* @__PURE__ */ cm(), n = /* @__PURE__ */ pO(), i = /* @__PURE__ */ Zs();
    function a(o, u) {
      let s;
      if (Array.isArray(u) ? s = u : typeof u == "string" && t.isDeepKey(u) && o?.[u] == null ? s = i.toPath(u) : s = [u], s.length === 0)
        return !1;
      let c = o;
      for (let l = 0; l < s.length; l++) {
        const f = s[l];
        if ((c == null || !Object.hasOwn(c, f)) && !((Array.isArray(c) || n.isArguments(c)) && r.isIndex(f) && f < c.length))
          return !1;
        c = c[f];
      }
      return !0;
    }
    e.has = a;
  })(Go)), Go;
}
var If;
function vO() {
  return If || (If = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ om(), r = /* @__PURE__ */ Xs(), n = /* @__PURE__ */ dO(), i = /* @__PURE__ */ Js(), a = /* @__PURE__ */ hO();
    function o(u, s) {
      switch (typeof u) {
        case "object": {
          Object.is(u?.valueOf(), -0) && (u = "-0");
          break;
        }
        case "number": {
          u = r.toKey(u);
          break;
        }
      }
      return s = n.cloneDeep(s), function(c) {
        const l = i.get(c, u);
        return l === void 0 ? a.has(c, u) : s === void 0 ? l === void 0 : t.isMatch(l, s);
      };
    }
    e.matchesProperty = o;
  })(Ko)), Ko;
}
var Nf;
function mO() {
  return Nf || (Nf = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ rm(), r = /* @__PURE__ */ aO(), n = /* @__PURE__ */ cO(), i = /* @__PURE__ */ vO();
    function a(o) {
      if (o == null)
        return t.identity;
      switch (typeof o) {
        case "function":
          return o;
        case "object":
          return Array.isArray(o) && o.length === 2 ? i.matchesProperty(o[0], o[1]) : n.matches(o);
        case "string":
        case "symbol":
        case "number":
          return r.property(o);
      }
    }
    e.iteratee = a;
  })(Do)), Do;
}
var kf;
function yO() {
  return kf || (kf = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ tO(), r = /* @__PURE__ */ rm(), n = /* @__PURE__ */ iO(), i = /* @__PURE__ */ mO();
    function a(o, u = r.identity) {
      return n.isArrayLikeObject(o) ? t.uniqBy(Array.from(o), i.iteratee(u)) : [];
    }
    e.uniqBy = a;
  })(Eo)), Eo;
}
var Jo, Rf;
function gO() {
  return Rf || (Rf = 1, Jo = yO().uniqBy), Jo;
}
var bO = /* @__PURE__ */ gO();
const $f = /* @__PURE__ */ cr(bO);
function fm(e, t, r) {
  return t === !0 ? $f(e, r) : typeof t == "function" ? $f(e, t) : e;
}
var hi = { exports: {} }, Qo = {}, vi = { exports: {} }, eu = {};
var Lf;
function wO() {
  if (Lf) return eu;
  Lf = 1;
  var e = lr;
  function t(f, d) {
    return f === d && (f !== 0 || 1 / f === 1 / d) || f !== f && d !== d;
  }
  var r = typeof Object.is == "function" ? Object.is : t, n = e.useState, i = e.useEffect, a = e.useLayoutEffect, o = e.useDebugValue;
  function u(f, d) {
    var p = d(), v = n({ inst: { value: p, getSnapshot: d } }), h = v[0].inst, m = v[1];
    return a(
      function() {
        h.value = p, h.getSnapshot = d, s(h) && m({ inst: h });
      },
      [f, p, d]
    ), i(
      function() {
        return s(h) && m({ inst: h }), f(function() {
          s(h) && m({ inst: h });
        });
      },
      [f]
    ), o(p), p;
  }
  function s(f) {
    var d = f.getSnapshot;
    f = f.value;
    try {
      var p = d();
      return !r(f, p);
    } catch {
      return !0;
    }
  }
  function c(f, d) {
    return d();
  }
  var l = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? c : u;
  return eu.useSyncExternalStore = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : l, eu;
}
var tu = {};
var Ff;
function OO() {
  return Ff || (Ff = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(p, v) {
      return p === v && (p !== 0 || 1 / p === 1 / v) || p !== p && v !== v;
    }
    function t(p, v) {
      l || i.startTransition === void 0 || (l = !0, console.error(
        "You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."
      ));
      var h = v();
      if (!f) {
        var m = v();
        a(h, m) || (console.error(
          "The result of getSnapshot should be cached to avoid an infinite loop"
        ), f = !0);
      }
      m = o({
        inst: { value: h, getSnapshot: v }
      });
      var y = m[0].inst, b = m[1];
      return s(
        function() {
          y.value = h, y.getSnapshot = v, r(y) && b({ inst: y });
        },
        [p, h, v]
      ), u(
        function() {
          return r(y) && b({ inst: y }), p(function() {
            r(y) && b({ inst: y });
          });
        },
        [p]
      ), c(h), h;
    }
    function r(p) {
      var v = p.getSnapshot;
      p = p.value;
      try {
        var h = v();
        return !a(p, h);
      } catch {
        return !0;
      }
    }
    function n(p, v) {
      return v();
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var i = lr, a = typeof Object.is == "function" ? Object.is : e, o = i.useState, u = i.useEffect, s = i.useLayoutEffect, c = i.useDebugValue, l = !1, f = !1, d = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? n : t;
    tu.useSyncExternalStore = i.useSyncExternalStore !== void 0 ? i.useSyncExternalStore : d, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  })()), tu;
}
var zf;
function dm() {
  return zf || (zf = 1, process.env.NODE_ENV === "production" ? vi.exports = wO() : vi.exports = OO()), vi.exports;
}
var qf;
function xO() {
  if (qf) return Qo;
  qf = 1;
  var e = lr, t = dm();
  function r(c, l) {
    return c === l && (c !== 0 || 1 / c === 1 / l) || c !== c && l !== l;
  }
  var n = typeof Object.is == "function" ? Object.is : r, i = t.useSyncExternalStore, a = e.useRef, o = e.useEffect, u = e.useMemo, s = e.useDebugValue;
  return Qo.useSyncExternalStoreWithSelector = function(c, l, f, d, p) {
    var v = a(null);
    if (v.current === null) {
      var h = { hasValue: !1, value: null };
      v.current = h;
    } else h = v.current;
    v = u(
      function() {
        function y(x) {
          if (!b) {
            if (b = !0, w = x, x = d(x), p !== void 0 && h.hasValue) {
              var S = h.value;
              if (p(S, x))
                return _ = S;
            }
            return _ = x;
          }
          if (S = _, n(w, x)) return S;
          var D = d(x);
          return p !== void 0 && p(S, D) ? (w = x, S) : (w = x, _ = D);
        }
        var b = !1, w, _, O = f === void 0 ? null : f;
        return [
          function() {
            return y(l());
          },
          O === null ? void 0 : function() {
            return y(O());
          }
        ];
      },
      [l, f, d, p]
    );
    var m = i(c, v[0], v[1]);
    return o(
      function() {
        h.hasValue = !0, h.value = m;
      },
      [m]
    ), s(m), m;
  }, Qo;
}
var ru = {};
var Bf;
function PO() {
  return Bf || (Bf = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(c, l) {
      return c === l && (c !== 0 || 1 / c === 1 / l) || c !== c && l !== l;
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var t = lr, r = dm(), n = typeof Object.is == "function" ? Object.is : e, i = r.useSyncExternalStore, a = t.useRef, o = t.useEffect, u = t.useMemo, s = t.useDebugValue;
    ru.useSyncExternalStoreWithSelector = function(c, l, f, d, p) {
      var v = a(null);
      if (v.current === null) {
        var h = { hasValue: !1, value: null };
        v.current = h;
      } else h = v.current;
      v = u(
        function() {
          function y(x) {
            if (!b) {
              if (b = !0, w = x, x = d(x), p !== void 0 && h.hasValue) {
                var S = h.value;
                if (p(S, x))
                  return _ = S;
              }
              return _ = x;
            }
            if (S = _, n(w, x))
              return S;
            var D = d(x);
            return p !== void 0 && p(S, D) ? (w = x, S) : (w = x, _ = D);
          }
          var b = !1, w, _, O = f === void 0 ? null : f;
          return [
            function() {
              return y(l());
            },
            O === null ? void 0 : function() {
              return y(O());
            }
          ];
        },
        [l, f, d, p]
      );
      var m = i(c, v[0], v[1]);
      return o(
        function() {
          h.hasValue = !0, h.value = m;
        },
        [m]
      ), s(m), m;
    }, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  })()), ru;
}
var Uf;
function _O() {
  return Uf || (Uf = 1, process.env.NODE_ENV === "production" ? hi.exports = xO() : hi.exports = PO()), hi.exports;
}
var EO = _O(), tl = /* @__PURE__ */ bt(null), SO = (e) => e, xe = () => {
  var e = Tt(tl);
  return e ? e.store.dispatch : SO;
}, Ni = () => {
}, AO = () => Ni, TO = (e, t) => e === t;
function U(e) {
  var t = Tt(tl);
  return EO.useSyncExternalStoreWithSelector(t ? t.subscription.addNestedSub : AO, t ? t.store.getState : Ni, t ? t.store.getState : Ni, t ? e : Ni, TO);
}
var jO = (e, t, r) => {
  if (t.length === 1 && t[0] === r) {
    let n = !1;
    try {
      const i = {};
      e(i) === i && (n = !0);
    } catch {
    }
    if (n) {
      let i;
      try {
        throw new Error();
      } catch (a) {
        ({ stack: i } = a);
      }
      console.warn(
        `The result function returned its own inputs without modification. e.g
\`createSelector([state => state.todos], todos => todos)\`
This could lead to inefficient memoization and unnecessary re-renders.
Ensure transformation logic is in the result function, and extraction logic is in the input selectors.`,
        { stack: i }
      );
    }
  }
}, CO = (e, t, r) => {
  const { memoize: n, memoizeOptions: i } = t, { inputSelectorResults: a, inputSelectorResultsCopy: o } = e, u = n(() => ({}), ...i);
  if (!(u.apply(null, a) === u.apply(null, o))) {
    let c;
    try {
      throw new Error();
    } catch (l) {
      ({ stack: c } = l);
    }
    console.warn(
      `An input selector returned a different result when passed same arguments.
This means your output selector will likely run more frequently than intended.
Avoid returning a new reference inside your input selector, e.g.
\`createSelector([state => state.todos.map(todo => todo.id)], todoIds => todoIds.length)\``,
      {
        arguments: r,
        firstInputs: a,
        secondInputs: o,
        stack: c
      }
    );
  }
}, MO = {
  inputStabilityCheck: "once",
  identityFunctionCheck: "once"
};
function DO(e, t = `expected a function, instead received ${typeof e}`) {
  if (typeof e != "function")
    throw new TypeError(t);
}
function IO(e, t = `expected an object, instead received ${typeof e}`) {
  if (typeof e != "object")
    throw new TypeError(t);
}
function NO(e, t = "expected all items to be functions, instead received the following types: ") {
  if (!e.every((r) => typeof r == "function")) {
    const r = e.map(
      (n) => typeof n == "function" ? `function ${n.name || "unnamed"}()` : typeof n
    ).join(", ");
    throw new TypeError(`${t}[${r}]`);
  }
}
var Wf = (e) => Array.isArray(e) ? e : [e];
function kO(e) {
  const t = Array.isArray(e[0]) ? e[0] : e;
  return NO(
    t,
    "createSelector expects all input-selectors to be functions, but received the following types: "
  ), t;
}
function Vf(e, t) {
  const r = [], { length: n } = e;
  for (let i = 0; i < n; i++)
    r.push(e[i].apply(null, t));
  return r;
}
var RO = (e, t) => {
  const { identityFunctionCheck: r, inputStabilityCheck: n } = {
    ...MO,
    ...t
  };
  return {
    identityFunctionCheck: {
      shouldRun: r === "always" || r === "once" && e,
      run: jO
    },
    inputStabilityCheck: {
      shouldRun: n === "always" || n === "once" && e,
      run: CO
    }
  };
}, $O = class {
  constructor(e) {
    this.value = e;
  }
  deref() {
    return this.value;
  }
}, LO = typeof WeakRef < "u" ? WeakRef : $O, FO = 0, Kf = 1;
function mi() {
  return {
    s: FO,
    v: void 0,
    o: null,
    p: null
  };
}
function pm(e, t = {}) {
  let r = mi();
  const { resultEqualityCheck: n } = t;
  let i, a = 0;
  function o() {
    let u = r;
    const { length: s } = arguments;
    for (let f = 0, d = s; f < d; f++) {
      const p = arguments[f];
      if (typeof p == "function" || typeof p == "object" && p !== null) {
        let v = u.o;
        v === null && (u.o = v = /* @__PURE__ */ new WeakMap());
        const h = v.get(p);
        h === void 0 ? (u = mi(), v.set(p, u)) : u = h;
      } else {
        let v = u.p;
        v === null && (u.p = v = /* @__PURE__ */ new Map());
        const h = v.get(p);
        h === void 0 ? (u = mi(), v.set(p, u)) : u = h;
      }
    }
    const c = u;
    let l;
    if (u.s === Kf)
      l = u.v;
    else if (l = e.apply(null, arguments), a++, n) {
      const f = i?.deref?.() ?? i;
      f != null && n(f, l) && (l = f, a !== 0 && a--), i = typeof l == "object" && l !== null || typeof l == "function" ? new LO(l) : l;
    }
    return c.s = Kf, c.v = l, l;
  }
  return o.clearCache = () => {
    r = mi(), o.resetResultsCount();
  }, o.resultsCount = () => a, o.resetResultsCount = () => {
    a = 0;
  }, o;
}
function zO(e, ...t) {
  const r = typeof e == "function" ? {
    memoize: e,
    memoizeOptions: t
  } : e, n = (...i) => {
    let a = 0, o = 0, u, s = {}, c = i.pop();
    typeof c == "object" && (s = c, c = i.pop()), DO(
      c,
      `createSelector expects an output function after the inputs, but received: [${typeof c}]`
    );
    const l = {
      ...r,
      ...s
    }, {
      memoize: f,
      memoizeOptions: d = [],
      argsMemoize: p = pm,
      argsMemoizeOptions: v = [],
      devModeChecks: h = {}
    } = l, m = Wf(d), y = Wf(v), b = kO(i), w = f(function() {
      return a++, c.apply(
        null,
        arguments
      );
    }, ...m);
    let _ = !0;
    const O = p(function() {
      o++;
      const S = Vf(
        b,
        arguments
      );
      if (u = w.apply(null, S), process.env.NODE_ENV !== "production") {
        const { identityFunctionCheck: D, inputStabilityCheck: k } = RO(_, h);
        if (D.shouldRun && D.run(
          c,
          S,
          u
        ), k.shouldRun) {
          const $ = Vf(
            b,
            arguments
          );
          k.run(
            { inputSelectorResults: S, inputSelectorResultsCopy: $ },
            { memoize: f, memoizeOptions: m },
            arguments
          );
        }
        _ && (_ = !1);
      }
      return u;
    }, ...y);
    return Object.assign(O, {
      resultFunc: c,
      memoizedResultFunc: w,
      dependencies: b,
      dependencyRecomputations: () => o,
      resetDependencyRecomputations: () => {
        o = 0;
      },
      lastResult: () => u,
      recomputations: () => a,
      resetRecomputations: () => {
        a = 0;
      },
      memoize: f,
      argsMemoize: p
    });
  };
  return Object.assign(n, {
    withTypes: () => n
  }), n;
}
var E = /* @__PURE__ */ zO(pm), qO = Object.assign(
  (e, t = E) => {
    IO(
      e,
      `createStructuredSelector expects first argument to be an object where each property is a selector, instead received a ${typeof e}`
    );
    const r = Object.keys(e), n = r.map(
      (a) => e[a]
    );
    return t(
      n,
      (...a) => a.reduce((o, u, s) => (o[r[s]] = u, o), {})
    );
  },
  { withTypes: () => qO }
), nu = {}, iu = {}, au = {}, Hf;
function BO() {
  return Hf || (Hf = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    function t(n) {
      return typeof n == "symbol" ? 1 : n === null ? 2 : n === void 0 ? 3 : n !== n ? 4 : 0;
    }
    const r = (n, i, a) => {
      if (n !== i) {
        const o = t(n), u = t(i);
        if (o === u && o === 0) {
          if (n < i)
            return a === "desc" ? 1 : -1;
          if (n > i)
            return a === "desc" ? -1 : 1;
        }
        return a === "desc" ? u - o : o - u;
      }
      return 0;
    };
    e.compareValues = r;
  })(au)), au;
}
var ou = {}, uu = {}, Yf;
function hm() {
  return Yf || (Yf = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    function t(r) {
      return typeof r == "symbol" || r instanceof Symbol;
    }
    e.isSymbol = t;
  })(uu)), uu;
}
var Gf;
function UO() {
  return Gf || (Gf = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ hm(), r = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, n = /^\w*$/;
    function i(a, o) {
      return Array.isArray(a) ? !1 : typeof a == "number" || typeof a == "boolean" || a == null || t.isSymbol(a) ? !0 : typeof a == "string" && (n.test(a) || !r.test(a)) || o != null && Object.hasOwn(o, a);
    }
    e.isKey = i;
  })(ou)), ou;
}
var Xf;
function WO() {
  return Xf || (Xf = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ BO(), r = /* @__PURE__ */ UO(), n = /* @__PURE__ */ Zs();
    function i(a, o, u, s) {
      if (a == null)
        return [];
      u = s ? void 0 : u, Array.isArray(a) || (a = Object.values(a)), Array.isArray(o) || (o = o == null ? [null] : [o]), o.length === 0 && (o = [null]), Array.isArray(u) || (u = u == null ? [] : [u]), u = u.map((p) => String(p));
      const c = (p, v) => {
        let h = p;
        for (let m = 0; m < v.length && h != null; ++m)
          h = h[v[m]];
        return h;
      }, l = (p, v) => v == null || p == null ? v : typeof p == "object" && "key" in p ? Object.hasOwn(v, p.key) ? v[p.key] : c(v, p.path) : typeof p == "function" ? p(v) : Array.isArray(p) ? c(v, p) : typeof v == "object" ? v[p] : v, f = o.map((p) => (Array.isArray(p) && p.length === 1 && (p = p[0]), p == null || typeof p == "function" || Array.isArray(p) || r.isKey(p) ? p : { key: p, path: n.toPath(p) }));
      return a.map((p) => ({
        original: p,
        criteria: f.map((v) => l(v, p))
      })).slice().sort((p, v) => {
        for (let h = 0; h < f.length; h++) {
          const m = t.compareValues(p.criteria[h], v.criteria[h], u[h]);
          if (m !== 0)
            return m;
        }
        return 0;
      }).map((p) => p.original);
    }
    e.orderBy = i;
  })(iu)), iu;
}
var su = {}, Zf;
function VO() {
  return Zf || (Zf = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    function t(r, n = 1) {
      const i = [], a = Math.floor(n), o = (u, s) => {
        for (let c = 0; c < u.length; c++) {
          const l = u[c];
          Array.isArray(l) && s < a ? o(l, s + 1) : i.push(l);
        }
      };
      return o(r, 0), i;
    }
    e.flatten = t;
  })(su)), su;
}
var lu = {}, Jf;
function vm() {
  return Jf || (Jf = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ cm(), r = /* @__PURE__ */ el(), n = /* @__PURE__ */ nm(), i = /* @__PURE__ */ am();
    function a(o, u, s) {
      return n.isObject(s) && (typeof u == "number" && r.isArrayLike(s) && t.isIndex(u) && u < s.length || typeof u == "string" && u in s) ? i.eq(s[u], o) : !1;
    }
    e.isIterateeCall = a;
  })(lu)), lu;
}
var Qf;
function KO() {
  return Qf || (Qf = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ WO(), r = /* @__PURE__ */ VO(), n = /* @__PURE__ */ vm();
    function i(a, ...o) {
      const u = o.length;
      return u > 1 && n.isIterateeCall(a, o[0], o[1]) ? o = [] : u > 2 && n.isIterateeCall(o[0], o[1], o[2]) && (o = [o[0]]), t.orderBy(a, r.flatten(o), ["asc"]);
    }
    e.sortBy = i;
  })(nu)), nu;
}
var cu, ed;
function HO() {
  return ed || (ed = 1, cu = KO().sortBy), cu;
}
var YO = /* @__PURE__ */ HO();
const Ta = /* @__PURE__ */ cr(YO);
var mm = (e) => e.legend.settings, GO = (e) => e.legend.size, XO = (e) => e.legend.payload, ZO = E([XO, mm], (e, t) => {
  var {
    itemSorter: r
  } = t, n = e.flat(1);
  return r ? Ta(n, r) : n;
});
function JO() {
  return U(ZO);
}
var yi = 1;
function ym() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], [t, r] = De({
    height: 0,
    left: 0,
    top: 0,
    width: 0
  }), n = me(
    (i) => {
      if (i != null) {
        var a = i.getBoundingClientRect(), o = {
          height: a.height,
          left: a.left,
          top: a.top,
          width: a.width
        };
        (Math.abs(o.height - t.height) > yi || Math.abs(o.left - t.left) > yi || Math.abs(o.top - t.top) > yi || Math.abs(o.width - t.width) > yi) && r({
          height: o.height,
          left: o.left,
          top: o.top,
          width: o.width
        });
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [t.width, t.height, t.top, t.left, ...e]
  );
  return [t, n];
}
function We(e) {
  return `Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
}
var QO = typeof Symbol == "function" && Symbol.observable || "@@observable", td = QO, fu = () => Math.random().toString(36).substring(7).split("").join("."), ex = {
  INIT: `@@redux/INIT${/* @__PURE__ */ fu()}`,
  REPLACE: `@@redux/REPLACE${/* @__PURE__ */ fu()}`,
  PROBE_UNKNOWN_ACTION: () => `@@redux/PROBE_UNKNOWN_ACTION${fu()}`
}, Er = ex;
function Wn(e) {
  if (typeof e != "object" || e === null)
    return !1;
  let t = e;
  for (; Object.getPrototypeOf(t) !== null; )
    t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(e) === t || Object.getPrototypeOf(e) === null;
}
function tx(e) {
  if (e === void 0)
    return "undefined";
  if (e === null)
    return "null";
  const t = typeof e;
  switch (t) {
    case "boolean":
    case "string":
    case "number":
    case "symbol":
    case "function":
      return t;
  }
  if (Array.isArray(e))
    return "array";
  if (ix(e))
    return "date";
  if (nx(e))
    return "error";
  const r = rx(e);
  switch (r) {
    case "Symbol":
    case "Promise":
    case "WeakMap":
    case "WeakSet":
    case "Map":
    case "Set":
      return r;
  }
  return Object.prototype.toString.call(e).slice(8, -1).toLowerCase().replace(/\s/g, "");
}
function rx(e) {
  return typeof e.constructor == "function" ? e.constructor.name : null;
}
function nx(e) {
  return e instanceof Error || typeof e.message == "string" && e.constructor && typeof e.constructor.stackTraceLimit == "number";
}
function ix(e) {
  return e instanceof Date ? !0 : typeof e.toDateString == "function" && typeof e.getDate == "function" && typeof e.setDate == "function";
}
function Qt(e) {
  let t = typeof e;
  return process.env.NODE_ENV !== "production" && (t = tx(e)), t;
}
function gm(e, t, r) {
  if (typeof e != "function")
    throw new Error(process.env.NODE_ENV === "production" ? We(2) : `Expected the root reducer to be a function. Instead, received: '${Qt(e)}'`);
  if (typeof t == "function" && typeof r == "function" || typeof r == "function" && typeof arguments[3] == "function")
    throw new Error(process.env.NODE_ENV === "production" ? We(0) : "It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function. See https://redux.js.org/tutorials/fundamentals/part-4-store#creating-a-store-with-enhancers for an example.");
  if (typeof t == "function" && typeof r > "u" && (r = t, t = void 0), typeof r < "u") {
    if (typeof r != "function")
      throw new Error(process.env.NODE_ENV === "production" ? We(1) : `Expected the enhancer to be a function. Instead, received: '${Qt(r)}'`);
    return r(gm)(e, t);
  }
  let n = e, i = t, a = /* @__PURE__ */ new Map(), o = a, u = 0, s = !1;
  function c() {
    o === a && (o = /* @__PURE__ */ new Map(), a.forEach((m, y) => {
      o.set(y, m);
    }));
  }
  function l() {
    if (s)
      throw new Error(process.env.NODE_ENV === "production" ? We(3) : "You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");
    return i;
  }
  function f(m) {
    if (typeof m != "function")
      throw new Error(process.env.NODE_ENV === "production" ? We(4) : `Expected the listener to be a function. Instead, received: '${Qt(m)}'`);
    if (s)
      throw new Error(process.env.NODE_ENV === "production" ? We(5) : "You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api/store#subscribelistener for more details.");
    let y = !0;
    c();
    const b = u++;
    return o.set(b, m), function() {
      if (y) {
        if (s)
          throw new Error(process.env.NODE_ENV === "production" ? We(6) : "You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api/store#subscribelistener for more details.");
        y = !1, c(), o.delete(b), a = null;
      }
    };
  }
  function d(m) {
    if (!Wn(m))
      throw new Error(process.env.NODE_ENV === "production" ? We(7) : `Actions must be plain objects. Instead, the actual type was: '${Qt(m)}'. You may need to add middleware to your store setup to handle dispatching other values, such as 'redux-thunk' to handle dispatching functions. See https://redux.js.org/tutorials/fundamentals/part-4-store#middleware and https://redux.js.org/tutorials/fundamentals/part-6-async-logic#using-the-redux-thunk-middleware for examples.`);
    if (typeof m.type > "u")
      throw new Error(process.env.NODE_ENV === "production" ? We(8) : 'Actions may not have an undefined "type" property. You may have misspelled an action type string constant.');
    if (typeof m.type != "string")
      throw new Error(process.env.NODE_ENV === "production" ? We(17) : `Action "type" property must be a string. Instead, the actual type was: '${Qt(m.type)}'. Value was: '${m.type}' (stringified)`);
    if (s)
      throw new Error(process.env.NODE_ENV === "production" ? We(9) : "Reducers may not dispatch actions.");
    try {
      s = !0, i = n(i, m);
    } finally {
      s = !1;
    }
    return (a = o).forEach((b) => {
      b();
    }), m;
  }
  function p(m) {
    if (typeof m != "function")
      throw new Error(process.env.NODE_ENV === "production" ? We(10) : `Expected the nextReducer to be a function. Instead, received: '${Qt(m)}`);
    n = m, d({
      type: Er.REPLACE
    });
  }
  function v() {
    const m = f;
    return {
      /**
       * The minimal observable subscription method.
       * @param observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */
      subscribe(y) {
        if (typeof y != "object" || y === null)
          throw new Error(process.env.NODE_ENV === "production" ? We(11) : `Expected the observer to be an object. Instead, received: '${Qt(y)}'`);
        function b() {
          const _ = y;
          _.next && _.next(l());
        }
        return b(), {
          unsubscribe: m(b)
        };
      },
      [td]() {
        return this;
      }
    };
  }
  return d({
    type: Er.INIT
  }), {
    dispatch: d,
    subscribe: f,
    getState: l,
    replaceReducer: p,
    [td]: v
  };
}
function rd(e) {
  typeof console < "u" && typeof console.error == "function" && console.error(e);
  try {
    throw new Error(e);
  } catch {
  }
}
function ax(e, t, r, n) {
  const i = Object.keys(t), a = r && r.type === Er.INIT ? "preloadedState argument passed to createStore" : "previous state received by the reducer";
  if (i.length === 0)
    return "Store does not have a valid reducer. Make sure the argument passed to combineReducers is an object whose values are reducers.";
  if (!Wn(e))
    return `The ${a} has unexpected type of "${Qt(e)}". Expected argument to be an object with the following keys: "${i.join('", "')}"`;
  const o = Object.keys(e).filter((u) => !t.hasOwnProperty(u) && !n[u]);
  if (o.forEach((u) => {
    n[u] = !0;
  }), !(r && r.type === Er.REPLACE) && o.length > 0)
    return `Unexpected ${o.length > 1 ? "keys" : "key"} "${o.join('", "')}" found in ${a}. Expected to find one of the known reducer keys instead: "${i.join('", "')}". Unexpected keys will be ignored.`;
}
function ox(e) {
  Object.keys(e).forEach((t) => {
    const r = e[t];
    if (typeof r(void 0, {
      type: Er.INIT
    }) > "u")
      throw new Error(process.env.NODE_ENV === "production" ? We(12) : `The slice reducer for key "${t}" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined.`);
    if (typeof r(void 0, {
      type: Er.PROBE_UNKNOWN_ACTION()
    }) > "u")
      throw new Error(process.env.NODE_ENV === "production" ? We(13) : `The slice reducer for key "${t}" returned undefined when probed with a random type. Don't try to handle '${Er.INIT}' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined, but can be null.`);
  });
}
function bm(e) {
  const t = Object.keys(e), r = {};
  for (let o = 0; o < t.length; o++) {
    const u = t[o];
    process.env.NODE_ENV !== "production" && typeof e[u] > "u" && rd(`No reducer provided for key "${u}"`), typeof e[u] == "function" && (r[u] = e[u]);
  }
  const n = Object.keys(r);
  let i;
  process.env.NODE_ENV !== "production" && (i = {});
  let a;
  try {
    ox(r);
  } catch (o) {
    a = o;
  }
  return function(u = {}, s) {
    if (a)
      throw a;
    if (process.env.NODE_ENV !== "production") {
      const f = ax(u, r, s, i);
      f && rd(f);
    }
    let c = !1;
    const l = {};
    for (let f = 0; f < n.length; f++) {
      const d = n[f], p = r[d], v = u[d], h = p(v, s);
      if (typeof h > "u") {
        const m = s && s.type;
        throw new Error(process.env.NODE_ENV === "production" ? We(14) : `When called with an action of type ${m ? `"${String(m)}"` : "(unknown type)"}, the slice reducer for key "${d}" returned undefined. To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.`);
      }
      l[d] = h, c = c || h !== v;
    }
    return c = c || n.length !== Object.keys(u).length, c ? l : u;
  };
}
function Vi(...e) {
  return e.length === 0 ? (t) => t : e.length === 1 ? e[0] : e.reduce((t, r) => (...n) => t(r(...n)));
}
function ux(...e) {
  return (t) => (r, n) => {
    const i = t(r, n);
    let a = () => {
      throw new Error(process.env.NODE_ENV === "production" ? We(15) : "Dispatching while constructing your middleware is not allowed. Other middleware would not be applied to this dispatch.");
    };
    const o = {
      getState: i.getState,
      dispatch: (s, ...c) => a(s, ...c)
    }, u = e.map((s) => s(o));
    return a = Vi(...u)(i.dispatch), {
      ...i,
      dispatch: a
    };
  };
}
function rl(e) {
  return Wn(e) && "type" in e && typeof e.type == "string";
}
var wm = /* @__PURE__ */ Symbol.for("immer-nothing"), nd = /* @__PURE__ */ Symbol.for("immer-draftable"), Ge = /* @__PURE__ */ Symbol.for("immer-state"), sx = process.env.NODE_ENV !== "production" ? [
  // All error codes, starting by 0:
  function(e) {
    return `The plugin for '${e}' has not been loaded into Immer. To enable the plugin, import and call \`enable${e}()\` when initializing your application.`;
  },
  function(e) {
    return `produce can only be called on things that are draftable: plain objects, arrays, Map, Set or classes that are marked with '[immerable]: true'. Got '${e}'`;
  },
  "This object has been frozen and should not be mutated",
  function(e) {
    return "Cannot use a proxy that has been revoked. Did you pass an object from inside an immer function to an async process? " + e;
  },
  "An immer producer returned a new value *and* modified its draft. Either return a new value *or* modify the draft.",
  "Immer forbids circular references",
  "The first or second argument to `produce` must be a function",
  "The third argument to `produce` must be a function or undefined",
  "First argument to `createDraft` must be a plain object, an array, or an immerable object",
  "First argument to `finishDraft` must be a draft returned by `createDraft`",
  function(e) {
    return `'current' expects a draft, got: ${e}`;
  },
  "Object.defineProperty() cannot be used on an Immer draft",
  "Object.setPrototypeOf() cannot be used on an Immer draft",
  "Immer only supports deleting array indices",
  "Immer only supports setting array indices and the 'length' property",
  function(e) {
    return `'original' expects a draft, got: ${e}`;
  }
  // Note: if more errors are added, the errorOffset in Patches.ts should be increased
  // See Patches.ts for additional errors
] : [];
function nt(e, ...t) {
  if (process.env.NODE_ENV !== "production") {
    const r = sx[e], n = Or(r) ? r.apply(null, t) : r;
    throw new Error(`[Immer] ${n}`);
  }
  throw new Error(
    `[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`
  );
}
var at = Object, Xr = at.getPrototypeOf, Ki = "constructor", ja = "prototype", ts = "configurable", Hi = "enumerable", ki = "writable", Tn = "value", Wt = (e) => !!e && !!e[Ge];
function At(e) {
  return e ? Om(e) || Ca(e) || !!e[nd] || !!e[Ki]?.[nd] || Ma(e) || Da(e) : !1;
}
var lx = at[ja][Ki].toString(), id = /* @__PURE__ */ new WeakMap();
function Om(e) {
  if (!e || !nl(e))
    return !1;
  const t = Xr(e);
  if (t === null || t === at[ja])
    return !0;
  const r = at.hasOwnProperty.call(t, Ki) && t[Ki];
  if (r === Object)
    return !0;
  if (!Or(r))
    return !1;
  let n = id.get(r);
  return n === void 0 && (n = Function.toString.call(r), id.set(r, n)), n === lx;
}
function Vn(e, t, r = !0) {
  Kn(e) === 0 ? (r ? Reflect.ownKeys(e) : at.keys(e)).forEach((i) => {
    t(i, e[i], e);
  }) : e.forEach((n, i) => t(i, n, e));
}
function Kn(e) {
  const t = e[Ge];
  return t ? t.type_ : Ca(e) ? 1 : Ma(e) ? 2 : Da(e) ? 3 : 0;
}
var ad = (e, t, r = Kn(e)) => r === 2 ? e.has(t) : at[ja].hasOwnProperty.call(e, t), rs = (e, t, r = Kn(e)) => (
  // @ts-ignore
  r === 2 ? e.get(t) : e[t]
), Yi = (e, t, r, n = Kn(e)) => {
  n === 2 ? e.set(t, r) : n === 3 ? e.add(r) : e[t] = r;
};
function cx(e, t) {
  return e === t ? e !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
var Ca = Array.isArray, Ma = (e) => e instanceof Map, Da = (e) => e instanceof Set, nl = (e) => typeof e == "object", Or = (e) => typeof e == "function", du = (e) => typeof e == "boolean", Rt = (e) => e.copy_ || e.base_, il = (e) => e.modified_ ? e.copy_ : e.base_;
function ns(e, t) {
  if (Ma(e))
    return new Map(e);
  if (Da(e))
    return new Set(e);
  if (Ca(e))
    return Array[ja].slice.call(e);
  const r = Om(e);
  if (t === !0 || t === "class_only" && !r) {
    const n = at.getOwnPropertyDescriptors(e);
    delete n[Ge];
    let i = Reflect.ownKeys(n);
    for (let a = 0; a < i.length; a++) {
      const o = i[a], u = n[o];
      u[ki] === !1 && (u[ki] = !0, u[ts] = !0), (u.get || u.set) && (n[o] = {
        [ts]: !0,
        [ki]: !0,
        // could live with !!desc.set as well here...
        [Hi]: u[Hi],
        [Tn]: e[o]
      });
    }
    return at.create(Xr(e), n);
  } else {
    const n = Xr(e);
    if (n !== null && r)
      return { ...e };
    const i = at.create(n);
    return at.assign(i, e);
  }
}
function al(e, t = !1) {
  return Ia(e) || Wt(e) || !At(e) || (Kn(e) > 1 && at.defineProperties(e, {
    set: gi,
    add: gi,
    clear: gi,
    delete: gi
  }), at.freeze(e), t && Vn(
    e,
    (r, n) => {
      al(n, !0);
    },
    !1
  )), e;
}
function fx() {
  nt(2);
}
var gi = {
  [Tn]: fx
};
function Ia(e) {
  return e === null || !nl(e) ? !0 : at.isFrozen(e);
}
var Gi = "MapSet", is = "Patches", xm = {};
function Zr(e) {
  const t = xm[e];
  return t || nt(0, e), t;
}
var dx = (e) => !!xm[e], jn, Pm = () => jn, px = (e, t) => ({
  drafts_: [],
  parent_: e,
  immer_: t,
  // Whenever the modified draft contains a draft from another scope, we
  // need to prevent auto-freezing so the unowned draft can be finalized.
  canAutoFreeze_: !0,
  unfinalizedDrafts_: 0,
  handledSet_: /* @__PURE__ */ new Set(),
  processedForPatches_: /* @__PURE__ */ new Set(),
  mapSetPlugin_: dx(Gi) ? Zr(Gi) : void 0
});
function od(e, t) {
  t && (e.patchPlugin_ = Zr(is), e.patches_ = [], e.inversePatches_ = [], e.patchListener_ = t);
}
function as(e) {
  os(e), e.drafts_.forEach(hx), e.drafts_ = null;
}
function os(e) {
  e === jn && (jn = e.parent_);
}
var ud = (e) => jn = px(jn, e);
function hx(e) {
  const t = e[Ge];
  t.type_ === 0 || t.type_ === 1 ? t.revoke_() : t.revoked_ = !0;
}
function sd(e, t) {
  t.unfinalizedDrafts_ = t.drafts_.length;
  const r = t.drafts_[0];
  if (e !== void 0 && e !== r) {
    r[Ge].modified_ && (as(t), nt(4)), At(e) && (e = ld(t, e));
    const { patchPlugin_: i } = t;
    i && i.generateReplacementPatches_(
      r[Ge].base_,
      e,
      t
    );
  } else
    e = ld(t, r);
  return vx(t, e, !0), as(t), t.patches_ && t.patchListener_(t.patches_, t.inversePatches_), e !== wm ? e : void 0;
}
function ld(e, t) {
  if (Ia(t))
    return t;
  const r = t[Ge];
  if (!r)
    return ol(t, e.handledSet_, e);
  if (!Na(r, e))
    return t;
  if (!r.modified_)
    return r.base_;
  if (!r.finalized_) {
    const { callbacks_: n } = r;
    if (n)
      for (; n.length > 0; )
        n.pop()(e);
    Sm(r, e);
  }
  return r.copy_;
}
function vx(e, t, r = !1) {
  !e.parent_ && e.immer_.autoFreeze_ && e.canAutoFreeze_ && al(t, r);
}
function _m(e) {
  e.finalized_ = !0, e.scope_.unfinalizedDrafts_--;
}
var Na = (e, t) => e.scope_ === t, mx = [];
function Em(e, t, r, n) {
  const i = Rt(e), a = e.type_;
  if (n !== void 0 && rs(i, n, a) === t) {
    Yi(i, n, r, a);
    return;
  }
  if (!e.draftLocations_) {
    const u = e.draftLocations_ = /* @__PURE__ */ new Map();
    Vn(i, (s, c) => {
      if (Wt(c)) {
        const l = u.get(c) || [];
        l.push(s), u.set(c, l);
      }
    });
  }
  const o = e.draftLocations_.get(t) ?? mx;
  for (const u of o)
    Yi(i, u, r, a);
}
function yx(e, t, r) {
  e.callbacks_.push(function(i) {
    const a = t;
    if (!a || !Na(a, i))
      return;
    i.mapSetPlugin_?.fixSetContents(a);
    const o = il(a);
    Em(e, a.draft_ ?? a, o, r), Sm(a, i);
  });
}
function Sm(e, t) {
  if (e.modified_ && !e.finalized_ && (e.type_ === 3 || (e.assigned_?.size ?? 0) > 0)) {
    const { patchPlugin_: n } = t;
    if (n) {
      const i = n.getPath(e);
      i && n.generatePatches_(e, i, t);
    }
    _m(e);
  }
}
function gx(e, t, r) {
  const { scope_: n } = e;
  if (Wt(r)) {
    const i = r[Ge];
    Na(i, n) && i.callbacks_.push(function() {
      Ri(e);
      const o = il(i);
      Em(e, r, o, t);
    });
  } else At(r) && e.callbacks_.push(function() {
    const a = Rt(e);
    rs(a, t, e.type_) === r && n.drafts_.length > 1 && (e.assigned_.get(t) ?? !1) === !0 && e.copy_ && ol(
      rs(e.copy_, t, e.type_),
      n.handledSet_,
      n
    );
  });
}
function ol(e, t, r) {
  return !r.immer_.autoFreeze_ && r.unfinalizedDrafts_ < 1 || Wt(e) || t.has(e) || !At(e) || Ia(e) || (t.add(e), Vn(e, (n, i) => {
    if (Wt(i)) {
      const a = i[Ge];
      if (Na(a, r)) {
        const o = il(a);
        Yi(e, n, o, e.type_), _m(a);
      }
    } else At(i) && ol(i, t, r);
  })), e;
}
function bx(e, t) {
  const r = Ca(e), n = {
    type_: r ? 1 : 0,
    // Track which produce call this is associated with.
    scope_: t ? t.scope_ : Pm(),
    // True for both shallow and deep changes.
    modified_: !1,
    // Used during finalization.
    finalized_: !1,
    // Track which properties have been assigned (true) or deleted (false).
    // actually instantiated in `prepareCopy()`
    assigned_: void 0,
    // The parent draft state.
    parent_: t,
    // The base state.
    base_: e,
    // The base proxy.
    draft_: null,
    // set below
    // The base copy with any updated values.
    copy_: null,
    // Called by the `produce` function.
    revoke_: null,
    isManual_: !1,
    // `callbacks` actually gets assigned in `createProxy`
    callbacks_: void 0
  };
  let i = n, a = ul;
  r && (i = [n], a = Cn);
  const { revoke: o, proxy: u } = Proxy.revocable(i, a);
  return n.draft_ = u, n.revoke_ = o, [u, n];
}
var ul = {
  get(e, t) {
    if (t === Ge)
      return e;
    const r = Rt(e);
    if (!ad(r, t, e.type_))
      return wx(e, r, t);
    const n = r[t];
    if (e.finalized_ || !At(n))
      return n;
    if (n === pu(e.base_, t)) {
      Ri(e);
      const i = e.type_ === 1 ? +t : t, a = ss(e.scope_, n, e, i);
      return e.copy_[i] = a;
    }
    return n;
  },
  has(e, t) {
    return t in Rt(e);
  },
  ownKeys(e) {
    return Reflect.ownKeys(Rt(e));
  },
  set(e, t, r) {
    const n = Am(Rt(e), t);
    if (n?.set)
      return n.set.call(e.draft_, r), !0;
    if (!e.modified_) {
      const i = pu(Rt(e), t), a = i?.[Ge];
      if (a && a.base_ === r)
        return e.copy_[t] = r, e.assigned_.set(t, !1), !0;
      if (cx(r, i) && (r !== void 0 || ad(e.base_, t, e.type_)))
        return !0;
      Ri(e), us(e);
    }
    return e.copy_[t] === r && // special case: handle new props with value 'undefined'
    (r !== void 0 || t in e.copy_) || // special case: NaN
    Number.isNaN(r) && Number.isNaN(e.copy_[t]) || (e.copy_[t] = r, e.assigned_.set(t, !0), gx(e, t, r)), !0;
  },
  deleteProperty(e, t) {
    return Ri(e), pu(e.base_, t) !== void 0 || t in e.base_ ? (e.assigned_.set(t, !1), us(e)) : e.assigned_.delete(t), e.copy_ && delete e.copy_[t], !0;
  },
  // Note: We never coerce `desc.value` into an Immer draft, because we can't make
  // the same guarantee in ES5 mode.
  getOwnPropertyDescriptor(e, t) {
    const r = Rt(e), n = Reflect.getOwnPropertyDescriptor(r, t);
    return n && {
      [ki]: !0,
      [ts]: e.type_ !== 1 || t !== "length",
      [Hi]: n[Hi],
      [Tn]: r[t]
    };
  },
  defineProperty() {
    nt(11);
  },
  getPrototypeOf(e) {
    return Xr(e.base_);
  },
  setPrototypeOf() {
    nt(12);
  }
}, Cn = {};
Vn(ul, (e, t) => {
  Cn[e] = function() {
    const r = arguments;
    return r[0] = r[0][0], t.apply(this, r);
  };
});
Cn.deleteProperty = function(e, t) {
  return process.env.NODE_ENV !== "production" && isNaN(parseInt(t)) && nt(13), Cn.set.call(this, e, t, void 0);
};
Cn.set = function(e, t, r) {
  return process.env.NODE_ENV !== "production" && t !== "length" && isNaN(parseInt(t)) && nt(14), ul.set.call(this, e[0], t, r, e[0]);
};
function pu(e, t) {
  const r = e[Ge];
  return (r ? Rt(r) : e)[t];
}
function wx(e, t, r) {
  const n = Am(t, r);
  return n ? Tn in n ? n[Tn] : (
    // This is a very special case, if the prop is a getter defined by the
    // prototype, we should invoke it with the draft as context!
    n.get?.call(e.draft_)
  ) : void 0;
}
function Am(e, t) {
  if (!(t in e))
    return;
  let r = Xr(e);
  for (; r; ) {
    const n = Object.getOwnPropertyDescriptor(r, t);
    if (n)
      return n;
    r = Xr(r);
  }
}
function us(e) {
  e.modified_ || (e.modified_ = !0, e.parent_ && us(e.parent_));
}
function Ri(e) {
  e.copy_ || (e.assigned_ = /* @__PURE__ */ new Map(), e.copy_ = ns(
    e.base_,
    e.scope_.immer_.useStrictShallowCopy_
  ));
}
var Ox = class {
  constructor(t) {
    this.autoFreeze_ = !0, this.useStrictShallowCopy_ = !1, this.useStrictIteration_ = !1, this.produce = (r, n, i) => {
      if (Or(r) && !Or(n)) {
        const o = n;
        n = r;
        const u = this;
        return function(c = o, ...l) {
          return u.produce(c, (f) => n.call(this, f, ...l));
        };
      }
      Or(n) || nt(6), i !== void 0 && !Or(i) && nt(7);
      let a;
      if (At(r)) {
        const o = ud(this), u = ss(o, r, void 0);
        let s = !0;
        try {
          a = n(u), s = !1;
        } finally {
          s ? as(o) : os(o);
        }
        return od(o, i), sd(a, o);
      } else if (!r || !nl(r)) {
        if (a = n(r), a === void 0 && (a = r), a === wm && (a = void 0), this.autoFreeze_ && al(a, !0), i) {
          const o = [], u = [];
          Zr(is).generateReplacementPatches_(r, a, {
            patches_: o,
            inversePatches_: u
          }), i(o, u);
        }
        return a;
      } else
        nt(1, r);
    }, this.produceWithPatches = (r, n) => {
      if (Or(r))
        return (u, ...s) => this.produceWithPatches(u, (c) => r(c, ...s));
      let i, a;
      return [this.produce(r, n, (u, s) => {
        i = u, a = s;
      }), i, a];
    }, du(t?.autoFreeze) && this.setAutoFreeze(t.autoFreeze), du(t?.useStrictShallowCopy) && this.setUseStrictShallowCopy(t.useStrictShallowCopy), du(t?.useStrictIteration) && this.setUseStrictIteration(t.useStrictIteration);
  }
  createDraft(t) {
    At(t) || nt(8), Wt(t) && (t = St(t));
    const r = ud(this), n = ss(r, t, void 0);
    return n[Ge].isManual_ = !0, os(r), n;
  }
  finishDraft(t, r) {
    const n = t && t[Ge];
    (!n || !n.isManual_) && nt(9);
    const { scope_: i } = n;
    return od(i, r), sd(void 0, i);
  }
  /**
   * Pass true to automatically freeze all copies created by Immer.
   *
   * By default, auto-freezing is enabled.
   */
  setAutoFreeze(t) {
    this.autoFreeze_ = t;
  }
  /**
   * Pass true to enable strict shallow copy.
   *
   * By default, immer does not copy the object descriptors such as getter, setter and non-enumrable properties.
   */
  setUseStrictShallowCopy(t) {
    this.useStrictShallowCopy_ = t;
  }
  /**
   * Pass false to use faster iteration that skips non-enumerable properties
   * but still handles symbols for compatibility.
   *
   * By default, strict iteration is enabled (includes all own properties).
   */
  setUseStrictIteration(t) {
    this.useStrictIteration_ = t;
  }
  shouldUseStrictIteration() {
    return this.useStrictIteration_;
  }
  applyPatches(t, r) {
    let n;
    for (n = r.length - 1; n >= 0; n--) {
      const a = r[n];
      if (a.path.length === 0 && a.op === "replace") {
        t = a.value;
        break;
      }
    }
    n > -1 && (r = r.slice(n + 1));
    const i = Zr(is).applyPatches_;
    return Wt(t) ? i(t, r) : this.produce(
      t,
      (a) => i(a, r)
    );
  }
};
function ss(e, t, r, n) {
  const [i, a] = Ma(t) ? Zr(Gi).proxyMap_(t, r) : Da(t) ? Zr(Gi).proxySet_(t, r) : bx(t, r);
  return (r?.scope_ ?? Pm()).drafts_.push(i), a.callbacks_ = r?.callbacks_ ?? [], a.key_ = n, r && n !== void 0 ? yx(r, a, n) : a.callbacks_.push(function(s) {
    s.mapSetPlugin_?.fixSetContents(a);
    const { patchPlugin_: c } = s;
    a.modified_ && c && c.generatePatches_(a, [], s);
  }), i;
}
function St(e) {
  return Wt(e) || nt(10, e), Tm(e);
}
function Tm(e) {
  if (!At(e) || Ia(e))
    return e;
  const t = e[Ge];
  let r, n = !0;
  if (t) {
    if (!t.modified_)
      return t.base_;
    t.finalized_ = !0, r = ns(e, t.scope_.immer_.useStrictShallowCopy_), n = t.scope_.immer_.shouldUseStrictIteration();
  } else
    r = ns(e, !0);
  return Vn(
    r,
    (i, a) => {
      Yi(r, i, Tm(a));
    },
    n
  ), t && (t.finalized_ = !1), r;
}
var xx = new Ox(), jm = xx.produce;
function Cm(e) {
  return ({ dispatch: r, getState: n }) => (i) => (a) => typeof a == "function" ? a(r, n, e) : i(a);
}
var Px = Cm(), _x = Cm, Ex = typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : function() {
  if (arguments.length !== 0)
    return typeof arguments[0] == "object" ? Vi : Vi.apply(null, arguments);
}, Sx = (e) => e && typeof e.match == "function";
function yt(e, t) {
  function r(...n) {
    if (t) {
      let i = t(...n);
      if (!i)
        throw new Error(process.env.NODE_ENV === "production" ? J(0) : "prepareAction did not return an object");
      return {
        type: e,
        payload: i.payload,
        ..."meta" in i && {
          meta: i.meta
        },
        ..."error" in i && {
          error: i.error
        }
      };
    }
    return {
      type: e,
      payload: n[0]
    };
  }
  return r.toString = () => `${e}`, r.type = e, r.match = (n) => rl(n) && n.type === e, r;
}
function Ax(e) {
  return typeof e == "function" && "type" in e && // hasMatchFunction only wants Matchers but I don't see the point in rewriting it
  Sx(e);
}
function Tx(e) {
  const t = e ? `${e}`.split("/") : [], r = t[t.length - 1] || "actionCreator";
  return `Detected an action creator with type "${e || "unknown"}" being dispatched. 
Make sure you're calling the action creator before dispatching, i.e. \`dispatch(${r}())\` instead of \`dispatch(${r})\`. This is necessary even if the action has no payload.`;
}
function jx(e = {}) {
  if (process.env.NODE_ENV === "production")
    return () => (r) => (n) => r(n);
  const {
    isActionCreator: t = Ax
  } = e;
  return () => (r) => (n) => (t(n) && console.warn(Tx(n.type)), r(n));
}
function Mm(e, t) {
  let r = 0;
  return {
    measureTime(n) {
      const i = Date.now();
      try {
        return n();
      } finally {
        const a = Date.now();
        r += a - i;
      }
    },
    warnIfExceeded() {
      r > e && console.warn(`${t} took ${r}ms, which is more than the warning threshold of ${e}ms. 
If your state or actions are very large, you may want to disable the middleware as it might cause too much of a slowdown in development mode. See https://redux-toolkit.js.org/api/getDefaultMiddleware for instructions.
It is disabled in production builds, so you don't need to worry about that.`);
    }
  };
}
var Dm = class _n extends Array {
  constructor(...t) {
    super(...t), Object.setPrototypeOf(this, _n.prototype);
  }
  static get [Symbol.species]() {
    return _n;
  }
  concat(...t) {
    return super.concat.apply(this, t);
  }
  prepend(...t) {
    return t.length === 1 && Array.isArray(t[0]) ? new _n(...t[0].concat(this)) : new _n(...t.concat(this));
  }
};
function cd(e) {
  return At(e) ? jm(e, () => {
  }) : e;
}
function bi(e, t, r) {
  return e.has(t) ? e.get(t) : e.set(t, r(t)).get(t);
}
function Cx(e) {
  return typeof e != "object" || e == null || Object.isFrozen(e);
}
function Mx(e, t, r) {
  const n = Im(e, t, r);
  return {
    detectMutations() {
      return Nm(e, t, n, r);
    }
  };
}
function Im(e, t = [], r, n = "", i = /* @__PURE__ */ new Set()) {
  const a = {
    value: r
  };
  if (!e(r) && !i.has(r)) {
    i.add(r), a.children = {};
    const o = t.length > 0;
    for (const u in r) {
      const s = n ? n + "." + u : u;
      o && t.some((l) => l instanceof RegExp ? l.test(s) : s === l) || (a.children[u] = Im(e, t, r[u], s));
    }
  }
  return a;
}
function Nm(e, t = [], r, n, i = !1, a = "") {
  const o = r ? r.value : void 0, u = o === n;
  if (i && !u && !Number.isNaN(n))
    return {
      wasMutated: !0,
      path: a
    };
  if (e(o) || e(n))
    return {
      wasMutated: !1
    };
  const s = {};
  for (let l in r.children)
    s[l] = !0;
  for (let l in n)
    s[l] = !0;
  const c = t.length > 0;
  for (let l in s) {
    const f = a ? a + "." + l : l;
    if (c && t.some((v) => v instanceof RegExp ? v.test(f) : f === v))
      continue;
    const d = Nm(e, t, r.children[l], n[l], u, f);
    if (d.wasMutated)
      return d;
  }
  return {
    wasMutated: !1
  };
}
function Dx(e = {}) {
  if (process.env.NODE_ENV === "production")
    return () => (t) => (r) => t(r);
  {
    let t = function(u, s, c, l) {
      return JSON.stringify(u, r(s, l), c);
    }, r = function(u, s) {
      let c = [], l = [];
      return s || (s = function(f, d) {
        return c[0] === d ? "[Circular ~]" : "[Circular ~." + l.slice(0, c.indexOf(d)).join(".") + "]";
      }), function(f, d) {
        if (c.length > 0) {
          var p = c.indexOf(this);
          ~p ? c.splice(p + 1) : c.push(this), ~p ? l.splice(p, 1 / 0, f) : l.push(f), ~c.indexOf(d) && (d = s.call(this, f, d));
        } else c.push(d);
        return u == null ? d : u.call(this, f, d);
      };
    }, {
      isImmutable: n = Cx,
      ignoredPaths: i,
      warnAfter: a = 32
    } = e;
    const o = Mx.bind(null, n, i);
    return ({
      getState: u
    }) => {
      let s = u(), c = o(s), l;
      return (f) => (d) => {
        const p = Mm(a, "ImmutableStateInvariantMiddleware");
        p.measureTime(() => {
          if (s = u(), l = c.detectMutations(), c = o(s), l.wasMutated)
            throw new Error(process.env.NODE_ENV === "production" ? J(19) : `A state mutation was detected between dispatches, in the path '${l.path || ""}'.  This may cause incorrect behavior. (https://redux.js.org/style-guide/style-guide#do-not-mutate-state)`);
        });
        const v = f(d);
        return p.measureTime(() => {
          if (s = u(), l = c.detectMutations(), c = o(s), l.wasMutated)
            throw new Error(process.env.NODE_ENV === "production" ? J(20) : `A state mutation was detected inside a dispatch, in the path: ${l.path || ""}. Take a look at the reducer(s) handling the action ${t(d)}. (https://redux.js.org/style-guide/style-guide#do-not-mutate-state)`);
        }), p.warnIfExceeded(), v;
      };
    };
  }
}
function km(e) {
  const t = typeof e;
  return e == null || t === "string" || t === "boolean" || t === "number" || Array.isArray(e) || Wn(e);
}
function ls(e, t = "", r = km, n, i = [], a) {
  let o;
  if (!r(e))
    return {
      keyPath: t || "<root>",
      value: e
    };
  if (typeof e != "object" || e === null || a?.has(e)) return !1;
  const u = n != null ? n(e) : Object.entries(e), s = i.length > 0;
  for (const [c, l] of u) {
    const f = t ? t + "." + c : c;
    if (!(s && i.some((p) => p instanceof RegExp ? p.test(f) : f === p))) {
      if (!r(l))
        return {
          keyPath: f,
          value: l
        };
      if (typeof l == "object" && (o = ls(l, f, r, n, i, a), o))
        return o;
    }
  }
  return a && Rm(e) && a.add(e), !1;
}
function Rm(e) {
  if (!Object.isFrozen(e)) return !1;
  for (const t of Object.values(e))
    if (!(typeof t != "object" || t === null) && !Rm(t))
      return !1;
  return !0;
}
function Ix(e = {}) {
  if (process.env.NODE_ENV === "production")
    return () => (t) => (r) => t(r);
  {
    const {
      isSerializable: t = km,
      getEntries: r,
      ignoredActions: n = [],
      ignoredActionPaths: i = ["meta.arg", "meta.baseQueryMeta"],
      ignoredPaths: a = [],
      warnAfter: o = 32,
      ignoreState: u = !1,
      ignoreActions: s = !1,
      disableCache: c = !1
    } = e, l = !c && WeakSet ? /* @__PURE__ */ new WeakSet() : void 0;
    return (f) => (d) => (p) => {
      if (!rl(p))
        return d(p);
      const v = d(p), h = Mm(o, "SerializableStateInvariantMiddleware");
      return !s && !(n.length && n.indexOf(p.type) !== -1) && h.measureTime(() => {
        const m = ls(p, "", t, r, i, l);
        if (m) {
          const {
            keyPath: y,
            value: b
          } = m;
          console.error(`A non-serializable value was detected in an action, in the path: \`${y}\`. Value:`, b, `
Take a look at the logic that dispatched this action: `, p, `
(See https://redux.js.org/faq/actions#why-should-type-be-a-string-or-at-least-serializable-why-should-my-action-types-be-constants)`, `
(To allow non-serializable values see: https://redux-toolkit.js.org/usage/usage-guide#working-with-non-serializable-data)`);
        }
      }), u || (h.measureTime(() => {
        const m = f.getState(), y = ls(m, "", t, r, a, l);
        if (y) {
          const {
            keyPath: b,
            value: w
          } = y;
          console.error(`A non-serializable value was detected in the state, in the path: \`${b}\`. Value:`, w, `
Take a look at the reducer(s) handling this action type: ${p.type}.
(See https://redux.js.org/faq/organizing-state#can-i-put-functions-promises-or-other-non-serializable-items-in-my-store-state)`);
        }
      }), h.warnIfExceeded()), v;
    };
  }
}
function wi(e) {
  return typeof e == "boolean";
}
var Nx = () => function(t) {
  const {
    thunk: r = !0,
    immutableCheck: n = !0,
    serializableCheck: i = !0,
    actionCreatorCheck: a = !0
  } = t ?? {};
  let o = new Dm();
  if (r && (wi(r) ? o.push(Px) : o.push(_x(r.extraArgument))), process.env.NODE_ENV !== "production") {
    if (n) {
      let u = {};
      wi(n) || (u = n), o.unshift(Dx(u));
    }
    if (i) {
      let u = {};
      wi(i) || (u = i), o.push(Ix(u));
    }
    if (a) {
      let u = {};
      wi(a) || (u = a), o.unshift(jx(u));
    }
  }
  return o;
}, $m = "RTK_autoBatch", ce = () => (e) => ({
  payload: e,
  meta: {
    [$m]: !0
  }
}), fd = (e) => (t) => {
  setTimeout(t, e);
}, Lm = (e = {
  type: "raf"
}) => (t) => (...r) => {
  const n = t(...r);
  let i = !0, a = !1, o = !1;
  const u = /* @__PURE__ */ new Set(), s = e.type === "tick" ? queueMicrotask : e.type === "raf" ? (
    // requestAnimationFrame won't exist in SSR environments. Fall back to a vague approximation just to keep from erroring.
    typeof window < "u" && window.requestAnimationFrame ? window.requestAnimationFrame : fd(10)
  ) : e.type === "callback" ? e.queueNotification : fd(e.timeout), c = () => {
    o = !1, a && (a = !1, u.forEach((l) => l()));
  };
  return Object.assign({}, n, {
    // Override the base `store.subscribe` method to keep original listeners
    // from running if we're delaying notifications
    subscribe(l) {
      const f = () => i && l(), d = n.subscribe(f);
      return u.add(l), () => {
        d(), u.delete(l);
      };
    },
    // Override the base `store.dispatch` method so that we can check actions
    // for the `shouldAutoBatch` flag and determine if batching is active
    dispatch(l) {
      try {
        return i = !l?.meta?.[$m], a = !i, a && (o || (o = !0, s(c))), n.dispatch(l);
      } finally {
        i = !0;
      }
    }
  });
}, kx = (e) => function(r) {
  const {
    autoBatch: n = !0
  } = r ?? {};
  let i = new Dm(e);
  return n && i.push(Lm(typeof n == "object" ? n : void 0)), i;
};
function Rx(e) {
  const t = Nx(), {
    reducer: r = void 0,
    middleware: n,
    devTools: i = !0,
    duplicateMiddlewareCheck: a = !0,
    preloadedState: o = void 0,
    enhancers: u = void 0
  } = e || {};
  let s;
  if (typeof r == "function")
    s = r;
  else if (Wn(r))
    s = bm(r);
  else
    throw new Error(process.env.NODE_ENV === "production" ? J(1) : "`reducer` is a required argument, and must be a function or an object of functions that can be passed to combineReducers");
  if (process.env.NODE_ENV !== "production" && n && typeof n != "function")
    throw new Error(process.env.NODE_ENV === "production" ? J(2) : "`middleware` field must be a callback");
  let c;
  if (typeof n == "function") {
    if (c = n(t), process.env.NODE_ENV !== "production" && !Array.isArray(c))
      throw new Error(process.env.NODE_ENV === "production" ? J(3) : "when using a middleware builder function, an array of middleware must be returned");
  } else
    c = t();
  if (process.env.NODE_ENV !== "production" && c.some((h) => typeof h != "function"))
    throw new Error(process.env.NODE_ENV === "production" ? J(4) : "each middleware provided to configureStore must be a function");
  if (process.env.NODE_ENV !== "production" && a) {
    let h = /* @__PURE__ */ new Set();
    c.forEach((m) => {
      if (h.has(m))
        throw new Error(process.env.NODE_ENV === "production" ? J(42) : "Duplicate middleware references found when creating the store. Ensure that each middleware is only included once.");
      h.add(m);
    });
  }
  let l = Vi;
  i && (l = Ex({
    // Enable capture of stack traces for dispatched Redux actions
    trace: process.env.NODE_ENV !== "production",
    ...typeof i == "object" && i
  }));
  const f = ux(...c), d = kx(f);
  if (process.env.NODE_ENV !== "production" && u && typeof u != "function")
    throw new Error(process.env.NODE_ENV === "production" ? J(5) : "`enhancers` field must be a callback");
  let p = typeof u == "function" ? u(d) : d();
  if (process.env.NODE_ENV !== "production" && !Array.isArray(p))
    throw new Error(process.env.NODE_ENV === "production" ? J(6) : "`enhancers` callback must return an array");
  if (process.env.NODE_ENV !== "production" && p.some((h) => typeof h != "function"))
    throw new Error(process.env.NODE_ENV === "production" ? J(7) : "each enhancer provided to configureStore must be a function");
  process.env.NODE_ENV !== "production" && c.length && !p.includes(f) && console.error("middlewares were provided, but middleware enhancer was not included in final enhancers - make sure to call `getDefaultEnhancers`");
  const v = l(...p);
  return gm(s, o, v);
}
function Fm(e) {
  const t = {}, r = [];
  let n;
  const i = {
    addCase(a, o) {
      if (process.env.NODE_ENV !== "production") {
        if (r.length > 0)
          throw new Error(process.env.NODE_ENV === "production" ? J(26) : "`builder.addCase` should only be called before calling `builder.addMatcher`");
        if (n)
          throw new Error(process.env.NODE_ENV === "production" ? J(27) : "`builder.addCase` should only be called before calling `builder.addDefaultCase`");
      }
      const u = typeof a == "string" ? a : a.type;
      if (!u)
        throw new Error(process.env.NODE_ENV === "production" ? J(28) : "`builder.addCase` cannot be called with an empty action type");
      if (u in t)
        throw new Error(process.env.NODE_ENV === "production" ? J(29) : `\`builder.addCase\` cannot be called with two reducers for the same action type '${u}'`);
      return t[u] = o, i;
    },
    addAsyncThunk(a, o) {
      if (process.env.NODE_ENV !== "production" && n)
        throw new Error(process.env.NODE_ENV === "production" ? J(43) : "`builder.addAsyncThunk` should only be called before calling `builder.addDefaultCase`");
      return o.pending && (t[a.pending.type] = o.pending), o.rejected && (t[a.rejected.type] = o.rejected), o.fulfilled && (t[a.fulfilled.type] = o.fulfilled), o.settled && r.push({
        matcher: a.settled,
        reducer: o.settled
      }), i;
    },
    addMatcher(a, o) {
      if (process.env.NODE_ENV !== "production" && n)
        throw new Error(process.env.NODE_ENV === "production" ? J(30) : "`builder.addMatcher` should only be called before calling `builder.addDefaultCase`");
      return r.push({
        matcher: a,
        reducer: o
      }), i;
    },
    addDefaultCase(a) {
      if (process.env.NODE_ENV !== "production" && n)
        throw new Error(process.env.NODE_ENV === "production" ? J(31) : "`builder.addDefaultCase` can only be called once");
      return n = a, i;
    }
  };
  return e(i), [t, r, n];
}
function $x(e) {
  return typeof e == "function";
}
function Lx(e, t) {
  if (process.env.NODE_ENV !== "production" && typeof t == "object")
    throw new Error(process.env.NODE_ENV === "production" ? J(8) : "The object notation for `createReducer` has been removed. Please use the 'builder callback' notation instead: https://redux-toolkit.js.org/api/createReducer");
  let [r, n, i] = Fm(t), a;
  if ($x(e))
    a = () => cd(e());
  else {
    const u = cd(e);
    a = () => u;
  }
  function o(u = a(), s) {
    let c = [r[s.type], ...n.filter(({
      matcher: l
    }) => l(s)).map(({
      reducer: l
    }) => l)];
    return c.filter((l) => !!l).length === 0 && (c = [i]), c.reduce((l, f) => {
      if (f)
        if (Wt(l)) {
          const p = f(l, s);
          return p === void 0 ? l : p;
        } else {
          if (At(l))
            return jm(l, (d) => f(d, s));
          {
            const d = f(l, s);
            if (d === void 0) {
              if (l === null)
                return l;
              throw Error("A case reducer on a non-draftable value must not return undefined");
            }
            return d;
          }
        }
      return l;
    }, u);
  }
  return o.getInitialState = a, o;
}
var Fx = "ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW", zx = (e = 21) => {
  let t = "", r = e;
  for (; r--; )
    t += Fx[Math.random() * 64 | 0];
  return t;
}, qx = /* @__PURE__ */ Symbol.for("rtk-slice-createasyncthunk");
function Bx(e, t) {
  return `${e}/${t}`;
}
function Ux({
  creators: e
} = {}) {
  const t = e?.asyncThunk?.[qx];
  return function(n) {
    const {
      name: i,
      reducerPath: a = i
    } = n;
    if (!i)
      throw new Error(process.env.NODE_ENV === "production" ? J(11) : "`name` is a required option for createSlice");
    typeof process < "u" && process.env.NODE_ENV === "development" && n.initialState === void 0 && console.error("You must provide an `initialState` value that is not `undefined`. You may have misspelled `initialState`");
    const o = (typeof n.reducers == "function" ? n.reducers(Vx()) : n.reducers) || {}, u = Object.keys(o), s = {
      sliceCaseReducersByName: {},
      sliceCaseReducersByType: {},
      actionCreators: {},
      sliceMatchers: []
    }, c = {
      addCase(w, _) {
        const O = typeof w == "string" ? w : w.type;
        if (!O)
          throw new Error(process.env.NODE_ENV === "production" ? J(12) : "`context.addCase` cannot be called with an empty action type");
        if (O in s.sliceCaseReducersByType)
          throw new Error(process.env.NODE_ENV === "production" ? J(13) : "`context.addCase` cannot be called with two reducers for the same action type: " + O);
        return s.sliceCaseReducersByType[O] = _, c;
      },
      addMatcher(w, _) {
        return s.sliceMatchers.push({
          matcher: w,
          reducer: _
        }), c;
      },
      exposeAction(w, _) {
        return s.actionCreators[w] = _, c;
      },
      exposeCaseReducer(w, _) {
        return s.sliceCaseReducersByName[w] = _, c;
      }
    };
    u.forEach((w) => {
      const _ = o[w], O = {
        reducerName: w,
        type: Bx(i, w),
        createNotation: typeof n.reducers == "function"
      };
      Hx(_) ? Gx(O, _, c, t) : Kx(O, _, c);
    });
    function l() {
      if (process.env.NODE_ENV !== "production" && typeof n.extraReducers == "object")
        throw new Error(process.env.NODE_ENV === "production" ? J(14) : "The object notation for `createSlice.extraReducers` has been removed. Please use the 'builder callback' notation instead: https://redux-toolkit.js.org/api/createSlice");
      const [w = {}, _ = [], O = void 0] = typeof n.extraReducers == "function" ? Fm(n.extraReducers) : [n.extraReducers], x = {
        ...w,
        ...s.sliceCaseReducersByType
      };
      return Lx(n.initialState, (S) => {
        for (let D in x)
          S.addCase(D, x[D]);
        for (let D of s.sliceMatchers)
          S.addMatcher(D.matcher, D.reducer);
        for (let D of _)
          S.addMatcher(D.matcher, D.reducer);
        O && S.addDefaultCase(O);
      });
    }
    const f = (w) => w, d = /* @__PURE__ */ new Map(), p = /* @__PURE__ */ new WeakMap();
    let v;
    function h(w, _) {
      return v || (v = l()), v(w, _);
    }
    function m() {
      return v || (v = l()), v.getInitialState();
    }
    function y(w, _ = !1) {
      function O(S) {
        let D = S[w];
        if (typeof D > "u") {
          if (_)
            D = bi(p, O, m);
          else if (process.env.NODE_ENV !== "production")
            throw new Error(process.env.NODE_ENV === "production" ? J(15) : "selectSlice returned undefined for an uninjected slice reducer");
        }
        return D;
      }
      function x(S = f) {
        const D = bi(d, _, () => /* @__PURE__ */ new WeakMap());
        return bi(D, S, () => {
          const k = {};
          for (const [$, j] of Object.entries(n.selectors ?? {}))
            k[$] = Wx(j, S, () => bi(p, S, m), _);
          return k;
        });
      }
      return {
        reducerPath: w,
        getSelectors: x,
        get selectors() {
          return x(O);
        },
        selectSlice: O
      };
    }
    const b = {
      name: i,
      reducer: h,
      actions: s.actionCreators,
      caseReducers: s.sliceCaseReducersByName,
      getInitialState: m,
      ...y(a),
      injectInto(w, {
        reducerPath: _,
        ...O
      } = {}) {
        const x = _ ?? a;
        return w.inject({
          reducerPath: x,
          reducer: h
        }, O), {
          ...b,
          ...y(x, !0)
        };
      }
    };
    return b;
  };
}
function Wx(e, t, r, n) {
  function i(a, ...o) {
    let u = t(a);
    if (typeof u > "u") {
      if (n)
        u = r();
      else if (process.env.NODE_ENV !== "production")
        throw new Error(process.env.NODE_ENV === "production" ? J(16) : "selectState returned undefined for an uninjected slice reducer");
    }
    return e(u, ...o);
  }
  return i.unwrapped = e, i;
}
var tt = /* @__PURE__ */ Ux();
function Vx() {
  function e(t, r) {
    return {
      _reducerDefinitionType: "asyncThunk",
      payloadCreator: t,
      ...r
    };
  }
  return e.withTypes = () => e, {
    reducer(t) {
      return Object.assign({
        // hack so the wrapping function has the same name as the original
        // we need to create a wrapper so the `reducerDefinitionType` is not assigned to the original
        [t.name](...r) {
          return t(...r);
        }
      }[t.name], {
        _reducerDefinitionType: "reducer"
        /* reducer */
      });
    },
    preparedReducer(t, r) {
      return {
        _reducerDefinitionType: "reducerWithPrepare",
        prepare: t,
        reducer: r
      };
    },
    asyncThunk: e
  };
}
function Kx({
  type: e,
  reducerName: t,
  createNotation: r
}, n, i) {
  let a, o;
  if ("reducer" in n) {
    if (r && !Yx(n))
      throw new Error(process.env.NODE_ENV === "production" ? J(17) : "Please use the `create.preparedReducer` notation for prepared action creators with the `create` notation.");
    a = n.reducer, o = n.prepare;
  } else
    a = n;
  i.addCase(e, a).exposeCaseReducer(t, a).exposeAction(t, o ? yt(e, o) : yt(e));
}
function Hx(e) {
  return e._reducerDefinitionType === "asyncThunk";
}
function Yx(e) {
  return e._reducerDefinitionType === "reducerWithPrepare";
}
function Gx({
  type: e,
  reducerName: t
}, r, n, i) {
  if (!i)
    throw new Error(process.env.NODE_ENV === "production" ? J(18) : "Cannot use `create.asyncThunk` in the built-in `createSlice`. Use `buildCreateSlice({ creators: { asyncThunk: asyncThunkCreator } })` to create a customised version of `createSlice`.");
  const {
    payloadCreator: a,
    fulfilled: o,
    pending: u,
    rejected: s,
    settled: c,
    options: l
  } = r, f = i(e, a, l);
  n.exposeAction(t, f), o && n.addCase(f.fulfilled, o), u && n.addCase(f.pending, u), s && n.addCase(f.rejected, s), c && n.addMatcher(f.settled, c), n.exposeCaseReducer(t, {
    fulfilled: o || Oi,
    pending: u || Oi,
    rejected: s || Oi,
    settled: c || Oi
  });
}
function Oi() {
}
var Xx = "task", zm = "listener", qm = "completed", sl = "cancelled", Zx = `task-${sl}`, Jx = `task-${qm}`, cs = `${zm}-${sl}`, Qx = `${zm}-${qm}`, ka = class {
  constructor(e) {
    this.code = e, this.message = `${Xx} ${sl} (reason: ${e})`;
  }
  name = "TaskAbortError";
  message;
}, ll = (e, t) => {
  if (typeof e != "function")
    throw new TypeError(process.env.NODE_ENV === "production" ? J(32) : `${t} is not a function`);
}, Xi = () => {
}, Bm = (e, t = Xi) => (e.catch(t), e), Um = (e, t) => (e.addEventListener("abort", t, {
  once: !0
}), () => e.removeEventListener("abort", t)), Sr = (e) => {
  if (e.aborted)
    throw new ka(e.reason);
};
function Wm(e, t) {
  let r = Xi;
  return new Promise((n, i) => {
    const a = () => i(new ka(e.reason));
    if (e.aborted) {
      a();
      return;
    }
    r = Um(e, a), t.finally(() => r()).then(n, i);
  }).finally(() => {
    r = Xi;
  });
}
var e1 = async (e, t) => {
  try {
    return await Promise.resolve(), {
      status: "ok",
      value: await e()
    };
  } catch (r) {
    return {
      status: r instanceof ka ? "cancelled" : "rejected",
      error: r
    };
  } finally {
    t?.();
  }
}, Zi = (e) => (t) => Bm(Wm(e, t).then((r) => (Sr(e), r))), Vm = (e) => {
  const t = Zi(e);
  return (r) => t(new Promise((n) => setTimeout(n, r)));
}, {
  assign: Kr
} = Object, dd = {}, Hn = "listenerMiddleware", t1 = (e, t) => {
  const r = (n) => Um(e, () => n.abort(e.reason));
  return (n, i) => {
    ll(n, "taskExecutor");
    const a = new AbortController();
    r(a);
    const o = e1(async () => {
      Sr(e), Sr(a.signal);
      const u = await n({
        pause: Zi(a.signal),
        delay: Vm(a.signal),
        signal: a.signal
      });
      return Sr(a.signal), u;
    }, () => a.abort(Jx));
    return i?.autoJoin && t.push(o.catch(Xi)), {
      result: Zi(e)(o),
      cancel() {
        a.abort(Zx);
      }
    };
  };
}, r1 = (e, t) => {
  const r = async (n, i) => {
    Sr(t);
    let a = () => {
    };
    const u = [new Promise((s, c) => {
      let l = e({
        predicate: n,
        effect: (f, d) => {
          d.unsubscribe(), s([f, d.getState(), d.getOriginalState()]);
        }
      });
      a = () => {
        l(), c();
      };
    })];
    i != null && u.push(new Promise((s) => setTimeout(s, i, null)));
    try {
      const s = await Wm(t, Promise.race(u));
      return Sr(t), s;
    } finally {
      a();
    }
  };
  return (n, i) => Bm(r(n, i));
}, Km = (e) => {
  let {
    type: t,
    actionCreator: r,
    matcher: n,
    predicate: i,
    effect: a
  } = e;
  if (t)
    i = yt(t).match;
  else if (r)
    t = r.type, i = r.match;
  else if (n)
    i = n;
  else if (!i) throw new Error(process.env.NODE_ENV === "production" ? J(21) : "Creating or removing a listener requires one of the known fields for matching an action");
  return ll(a, "options.listener"), {
    predicate: i,
    type: t,
    effect: a
  };
}, Hm = /* @__PURE__ */ Kr((e) => {
  const {
    type: t,
    predicate: r,
    effect: n
  } = Km(e);
  return {
    id: zx(),
    effect: n,
    type: t,
    predicate: r,
    pending: /* @__PURE__ */ new Set(),
    unsubscribe: () => {
      throw new Error(process.env.NODE_ENV === "production" ? J(22) : "Unsubscribe not initialized");
    }
  };
}, {
  withTypes: () => Hm
}), pd = (e, t) => {
  const {
    type: r,
    effect: n,
    predicate: i
  } = Km(t);
  return Array.from(e.values()).find((a) => (typeof r == "string" ? a.type === r : a.predicate === i) && a.effect === n);
}, fs = (e) => {
  e.pending.forEach((t) => {
    t.abort(cs);
  });
}, n1 = (e, t) => () => {
  for (const r of t.keys())
    fs(r);
  e.clear();
}, hd = (e, t, r) => {
  try {
    e(t, r);
  } catch (n) {
    setTimeout(() => {
      throw n;
    }, 0);
  }
}, Ym = /* @__PURE__ */ Kr(/* @__PURE__ */ yt(`${Hn}/add`), {
  withTypes: () => Ym
}), i1 = /* @__PURE__ */ yt(`${Hn}/removeAll`), Gm = /* @__PURE__ */ Kr(/* @__PURE__ */ yt(`${Hn}/remove`), {
  withTypes: () => Gm
}), a1 = (...e) => {
  console.error(`${Hn}/error`, ...e);
}, Yn = (e = {}) => {
  const t = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map(), n = (p) => {
    const v = r.get(p) ?? 0;
    r.set(p, v + 1);
  }, i = (p) => {
    const v = r.get(p) ?? 1;
    v === 1 ? r.delete(p) : r.set(p, v - 1);
  }, {
    extra: a,
    onError: o = a1
  } = e;
  ll(o, "onError");
  const u = (p) => (p.unsubscribe = () => t.delete(p.id), t.set(p.id, p), (v) => {
    p.unsubscribe(), v?.cancelActive && fs(p);
  }), s = (p) => {
    const v = pd(t, p) ?? Hm(p);
    return u(v);
  };
  Kr(s, {
    withTypes: () => s
  });
  const c = (p) => {
    const v = pd(t, p);
    return v && (v.unsubscribe(), p.cancelActive && fs(v)), !!v;
  };
  Kr(c, {
    withTypes: () => c
  });
  const l = async (p, v, h, m) => {
    const y = new AbortController(), b = r1(s, y.signal), w = [];
    try {
      p.pending.add(y), n(p), await Promise.resolve(p.effect(
        v,
        // Use assign() rather than ... to avoid extra helper functions added to bundle
        Kr({}, h, {
          getOriginalState: m,
          condition: (_, O) => b(_, O).then(Boolean),
          take: b,
          delay: Vm(y.signal),
          pause: Zi(y.signal),
          extra: a,
          signal: y.signal,
          fork: t1(y.signal, w),
          unsubscribe: p.unsubscribe,
          subscribe: () => {
            t.set(p.id, p);
          },
          cancelActiveListeners: () => {
            p.pending.forEach((_, O, x) => {
              _ !== y && (_.abort(cs), x.delete(_));
            });
          },
          cancel: () => {
            y.abort(cs), p.pending.delete(y);
          },
          throwIfCancelled: () => {
            Sr(y.signal);
          }
        })
      ));
    } catch (_) {
      _ instanceof ka || hd(o, _, {
        raisedBy: "effect"
      });
    } finally {
      await Promise.all(w), y.abort(Qx), i(p), p.pending.delete(y);
    }
  }, f = n1(t, r);
  return {
    middleware: (p) => (v) => (h) => {
      if (!rl(h))
        return v(h);
      if (Ym.match(h))
        return s(h.payload);
      if (i1.match(h)) {
        f();
        return;
      }
      if (Gm.match(h))
        return c(h.payload);
      let m = p.getState();
      const y = () => {
        if (m === dd)
          throw new Error(process.env.NODE_ENV === "production" ? J(23) : `${Hn}: getOriginalState can only be called synchronously`);
        return m;
      };
      let b;
      try {
        if (b = v(h), t.size > 0) {
          const w = p.getState(), _ = Array.from(t.values());
          for (const O of _) {
            let x = !1;
            try {
              x = O.predicate(h, w, m);
            } catch (S) {
              x = !1, hd(o, S, {
                raisedBy: "predicate"
              });
            }
            x && l(O, h, p, y);
          }
        }
      } finally {
        m = dd;
      }
      return b;
    },
    startListening: s,
    stopListening: c,
    clearListeners: f
  };
};
function J(e) {
  return `Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
}
var o1 = {
  layoutType: "horizontal",
  width: 0,
  height: 0,
  margin: {
    top: 5,
    right: 5,
    bottom: 5,
    left: 5
  },
  scale: 1
}, Xm = tt({
  name: "chartLayout",
  initialState: o1,
  reducers: {
    setLayout(e, t) {
      e.layoutType = t.payload;
    },
    setChartSize(e, t) {
      e.width = t.payload.width, e.height = t.payload.height;
    },
    setMargin(e, t) {
      var r, n, i, a;
      e.margin.top = (r = t.payload.top) !== null && r !== void 0 ? r : 0, e.margin.right = (n = t.payload.right) !== null && n !== void 0 ? n : 0, e.margin.bottom = (i = t.payload.bottom) !== null && i !== void 0 ? i : 0, e.margin.left = (a = t.payload.left) !== null && a !== void 0 ? a : 0;
    },
    setScale(e, t) {
      e.scale = t.payload;
    }
  }
}), {
  setMargin: u1,
  setLayout: s1,
  setChartSize: l1,
  setScale: c1
} = Xm.actions, f1 = Xm.reducer;
function Zm(e, t, r) {
  return Array.isArray(e) && e && t + r !== 0 ? e.slice(t, r + 1) : e;
}
function je(e) {
  return Number.isFinite(e);
}
function or(e) {
  return typeof e == "number" && e > 0 && Number.isFinite(e);
}
function vd(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Wr(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? vd(Object(r), !0).forEach(function(n) {
      d1(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : vd(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function d1(e, t, r) {
  return (t = p1(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function p1(e) {
  var t = h1(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function h1(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function be(e, t, r) {
  return ut(e) || ut(t) ? r : Ut(t) ? Sn(e, t, r) : typeof t == "function" ? t(e) : r;
}
var v1 = (e, t, r) => {
  if (t && r) {
    var {
      width: n,
      height: i
    } = r, {
      align: a,
      verticalAlign: o,
      layout: u
    } = t;
    if ((u === "vertical" || u === "horizontal" && o === "middle") && a !== "center" && z(e[a]))
      return Wr(Wr({}, e), {}, {
        [a]: e[a] + (n || 0)
      });
    if ((u === "horizontal" || u === "vertical" && a === "center") && o !== "middle" && z(e[o]))
      return Wr(Wr({}, e), {}, {
        [o]: e[o] + (i || 0)
      });
  }
  return e;
}, Rr = (e, t) => e === "horizontal" && t === "xAxis" || e === "vertical" && t === "yAxis" || e === "centric" && t === "angleAxis" || e === "radial" && t === "radiusAxis", md = 1e-4, m1 = (e) => {
  var t = e.domain();
  if (!(!t || t.length <= 2)) {
    var r = t.length, n = e.range(), i = Math.min(n[0], n[1]) - md, a = Math.max(n[0], n[1]) + md, o = e(t[0]), u = e(t[r - 1]);
    (o < i || o > a || u < i || u > a) && e.domain([t[0], t[r - 1]]);
  }
}, y1 = (e) => {
  var t, r = e.length;
  if (!(r <= 0)) {
    var n = (t = e[0]) === null || t === void 0 ? void 0 : t.length;
    if (!(n == null || n <= 0))
      for (var i = 0; i < n; ++i)
        for (var a = 0, o = 0, u = 0; u < r; ++u) {
          var s = e[u], c = s?.[i];
          if (c != null) {
            var l = c[1], f = c[0], d = qt(l) ? f : l;
            d >= 0 ? (c[0] = a, c[1] = a + d, a = l) : (c[0] = o, c[1] = o + d, o = l);
          }
        }
  }
}, g1 = (e) => {
  var t, r = e.length;
  if (!(r <= 0)) {
    var n = (t = e[0]) === null || t === void 0 ? void 0 : t.length;
    if (!(n == null || n <= 0))
      for (var i = 0; i < n; ++i)
        for (var a = 0, o = 0; o < r; ++o) {
          var u = e[o], s = u?.[i];
          if (s != null) {
            var c = qt(s[1]) ? s[0] : s[1];
            c >= 0 ? (s[0] = a, s[1] = a + c, a = s[1]) : (s[0] = 0, s[1] = 0);
          }
        }
  }
}, b1 = {
  sign: y1,
  // @ts-expect-error definitelytyped types are incorrect
  expand: ww,
  // @ts-expect-error definitelytyped types are incorrect
  none: Cr,
  // @ts-expect-error definitelytyped types are incorrect
  silhouette: Ow,
  // @ts-expect-error definitelytyped types are incorrect
  wiggle: xw,
  positive: g1
}, w1 = (e, t, r) => {
  var n, i = (n = b1[r]) !== null && n !== void 0 ? n : Cr, a = bw().keys(t).value((u, s) => Number(be(u, s, 0))).order(Qu).offset(i), o = a(e);
  return o.forEach((u, s) => {
    u.forEach((c, l) => {
      var f = be(e[l], t[s], 0);
      Array.isArray(f) && f.length === 2 && z(f[0]) && z(f[1]) && (c[0] = f[0], c[1] = f[1]);
    });
  }), o;
}, O1 = (e) => {
  var t = e.flat(2).filter(z);
  return [Math.min(...t), Math.max(...t)];
}, x1 = (e) => [e[0] === 1 / 0 ? 0 : e[0], e[1] === -1 / 0 ? 0 : e[1]], P1 = (e, t, r) => {
  if (e != null)
    return x1(Object.keys(e).reduce((n, i) => {
      var a = e[i];
      if (!a)
        return n;
      var {
        stackedData: o
      } = a, u = o.reduce((s, c) => {
        var l = Zm(c, t, r), f = O1(l);
        return !je(f[0]) || !je(f[1]) ? s : [Math.min(s[0], f[0]), Math.max(s[1], f[1])];
      }, [1 / 0, -1 / 0]);
      return [Math.min(u[0], n[0]), Math.max(u[1], n[1])];
    }, [1 / 0, -1 / 0]));
}, yd = /^dataMin[\s]*-[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/, gd = /^dataMax[\s]*\+[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/, bd = (e, t, r) => {
  if (e && e.scale && e.scale.bandwidth) {
    var n = e.scale.bandwidth();
    return n;
  }
  if (e && t && t.length >= 2) {
    for (var i = Ta(t, (l) => l.coordinate), a = 1 / 0, o = 1, u = i.length; o < u; o++) {
      var s = i[o], c = i[o - 1];
      a = Math.min((s?.coordinate || 0) - (c?.coordinate || 0), a);
    }
    return a === 1 / 0 ? 0 : a;
  }
  return r ? void 0 : 0;
};
function wd(e) {
  var {
    tooltipEntrySettings: t,
    dataKey: r,
    payload: n,
    value: i,
    name: a
  } = e;
  return Wr(Wr({}, t), {}, {
    dataKey: r,
    payload: n,
    value: i,
    name: a
  });
}
function Jm(e, t) {
  if (e)
    return String(e);
  if (typeof t == "string")
    return t;
}
var _1 = (e, t) => {
  if (t === "horizontal")
    return e.chartX;
  if (t === "vertical")
    return e.chartY;
}, E1 = (e, t) => t === "centric" ? e.angle : e.radius, Gt = (e) => e.layout.width, Xt = (e) => e.layout.height, S1 = (e) => e.layout.scale, Qm = (e) => e.layout.margin, Ra = E((e) => e.cartesianAxis.xAxis, (e) => Object.values(e)), $a = E((e) => e.cartesianAxis.yAxis, (e) => Object.values(e)), ey = "data-recharts-item-index", ty = "data-recharts-item-id", Gn = 60;
function Od(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function xi(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Od(Object(r), !0).forEach(function(n) {
      A1(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Od(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function A1(e, t, r) {
  return (t = T1(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function T1(e) {
  var t = j1(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function j1(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var C1 = (e) => e.brush.height;
function M1(e) {
  var t = $a(e);
  return t.reduce((r, n) => {
    if (n.orientation === "left" && !n.mirror && !n.hide) {
      var i = typeof n.width == "number" ? n.width : Gn;
      return r + i;
    }
    return r;
  }, 0);
}
function D1(e) {
  var t = $a(e);
  return t.reduce((r, n) => {
    if (n.orientation === "right" && !n.mirror && !n.hide) {
      var i = typeof n.width == "number" ? n.width : Gn;
      return r + i;
    }
    return r;
  }, 0);
}
function I1(e) {
  var t = Ra(e);
  return t.reduce((r, n) => n.orientation === "top" && !n.mirror && !n.hide ? r + n.height : r, 0);
}
function N1(e) {
  var t = Ra(e);
  return t.reduce((r, n) => n.orientation === "bottom" && !n.mirror && !n.hide ? r + n.height : r, 0);
}
var Fe = E([Gt, Xt, Qm, C1, M1, D1, I1, N1, mm, GO], (e, t, r, n, i, a, o, u, s, c) => {
  var l = {
    left: (r.left || 0) + i,
    right: (r.right || 0) + a
  }, f = {
    top: (r.top || 0) + o,
    bottom: (r.bottom || 0) + u
  }, d = xi(xi({}, f), l), p = d.bottom;
  d.bottom += n, d = v1(d, s, c);
  var v = e - d.left - d.right, h = t - d.top - d.bottom;
  return xi(xi({
    brushBottom: p
  }, d), {}, {
    // never return negative values for height and width
    width: Math.max(v, 0),
    height: Math.max(h, 0)
  });
}), k1 = E(Fe, (e) => ({
  x: e.left,
  y: e.top,
  width: e.width,
  height: e.height
}));
E(Gt, Xt, (e, t) => ({
  x: 0,
  y: 0,
  width: e,
  height: t
}));
var R1 = /* @__PURE__ */ bt(null), fr = () => Tt(R1) != null, La = (e) => e.brush, Fa = E([La, Fe, Qm], (e, t, r) => ({
  height: e.height,
  x: z(e.x) ? e.x : t.left,
  y: z(e.y) ? e.y : t.top + t.height + t.brushBottom - (r?.bottom || 0),
  width: z(e.width) ? e.width : t.width
})), hu = {}, vu = {}, mu = {}, xd;
function $1() {
  return xd || (xd = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    function t(r, n, { signal: i, edges: a } = {}) {
      let o, u = null;
      const s = a != null && a.includes("leading"), c = a == null || a.includes("trailing"), l = () => {
        u !== null && (r.apply(o, u), o = void 0, u = null);
      }, f = () => {
        c && l(), h();
      };
      let d = null;
      const p = () => {
        d != null && clearTimeout(d), d = setTimeout(() => {
          d = null, f();
        }, n);
      }, v = () => {
        d !== null && (clearTimeout(d), d = null);
      }, h = () => {
        v(), o = void 0, u = null;
      }, m = () => {
        l();
      }, y = function(...b) {
        if (i?.aborted)
          return;
        o = this, u = b;
        const w = d == null;
        p(), s && w && l();
      };
      return y.schedule = p, y.cancel = h, y.flush = m, i?.addEventListener("abort", h, { once: !0 }), y;
    }
    e.debounce = t;
  })(mu)), mu;
}
var Pd;
function L1() {
  return Pd || (Pd = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ $1();
    function r(n, i = 0, a = {}) {
      typeof a != "object" && (a = {});
      const { leading: o = !1, trailing: u = !0, maxWait: s } = a, c = Array(2);
      o && (c[0] = "leading"), u && (c[1] = "trailing");
      let l, f = null;
      const d = t.debounce(function(...h) {
        l = n.apply(this, h), f = null;
      }, i, { edges: c }), p = function(...h) {
        return s != null && (f === null && (f = Date.now()), Date.now() - f >= s) ? (l = n.apply(this, h), f = Date.now(), d.cancel(), d.schedule(), l) : (d.apply(this, h), l);
      }, v = () => (d.flush(), l);
      return p.cancel = d.cancel, p.flush = v, p;
    }
    e.debounce = r;
  })(vu)), vu;
}
var _d;
function F1() {
  return _d || (_d = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ L1();
    function r(n, i = 0, a = {}) {
      const { leading: o = !0, trailing: u = !0 } = a;
      return t.debounce(n, i, {
        leading: o,
        maxWait: i,
        trailing: u
      });
    }
    e.throttle = r;
  })(hu)), hu;
}
var yu, Ed;
function z1() {
  return Ed || (Ed = 1, yu = F1().throttle), yu;
}
var q1 = /* @__PURE__ */ z1();
const B1 = /* @__PURE__ */ cr(q1);
var Sd = function(t, r) {
  for (var n = arguments.length, i = new Array(n > 2 ? n - 2 : 0), a = 2; a < n; a++)
    i[a - 2] = arguments[a];
  if (typeof console < "u" && console.warn && (r === void 0 && console.warn("LogUtils requires an error message argument"), !t))
    if (r === void 0)
      console.warn("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
    else {
      var o = 0;
      console.warn(r.replace(/%s/g, () => i[o++]));
    }
}, ry = (e, t, r) => {
  var {
    width: n = "100%",
    height: i = "100%",
    aspect: a,
    maxHeight: o
  } = r, u = Bt(n) ? e : Number(n), s = Bt(i) ? t : Number(i);
  return a && a > 0 && (u ? s = u / a : s && (u = s * a), o && s != null && s > o && (s = o)), {
    calculatedWidth: u,
    calculatedHeight: s
  };
}, U1 = {
  width: 0,
  height: 0,
  overflow: "visible"
}, W1 = {
  width: 0,
  overflowX: "visible"
}, V1 = {
  height: 0,
  overflowY: "visible"
}, K1 = {}, H1 = (e) => {
  var {
    width: t,
    height: r
  } = e, n = Bt(t), i = Bt(r);
  return n && i ? U1 : n ? W1 : i ? V1 : K1;
};
function Y1(e) {
  var {
    width: t,
    height: r,
    aspect: n
  } = e, i = t, a = r;
  return i === void 0 && a === void 0 ? (i = "100%", a = "100%") : i === void 0 ? i = n && n > 0 ? void 0 : "100%" : a === void 0 && (a = n && n > 0 ? void 0 : "100%"), {
    width: i,
    height: a
  };
}
function ds() {
  return ds = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, ds.apply(null, arguments);
}
function Ad(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Td(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Ad(Object(r), !0).forEach(function(n) {
      G1(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ad(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function G1(e, t, r) {
  return (t = X1(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function X1(e) {
  var t = Z1(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function Z1(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var ny = /* @__PURE__ */ bt({
  width: -1,
  height: -1
});
function J1(e) {
  return or(e.width) && or(e.height);
}
function iy(e) {
  var {
    children: t,
    width: r,
    height: n
  } = e, i = kr(() => ({
    width: r,
    height: n
  }), [r, n]);
  return J1(i) ? /* @__PURE__ */ P.createElement(ny.Provider, {
    value: i
  }, t) : null;
}
var cl = () => Tt(ny), Q1 = /* @__PURE__ */ et((e, t) => {
  var {
    aspect: r,
    initialDimension: n = {
      width: -1,
      height: -1
    },
    width: i,
    height: a,
    /*
     * default min-width to 0 if not specified - 'auto' causes issues with flexbox
     * https://github.com/recharts/recharts/issues/172
     */
    minWidth: o = 0,
    minHeight: u,
    maxHeight: s,
    children: c,
    debounce: l = 0,
    id: f,
    className: d,
    onResize: p,
    style: v = {}
  } = e, h = he(null), m = he();
  m.current = p, A0(t, () => h.current);
  var [y, b] = De({
    containerWidth: n.width,
    containerHeight: n.height
  }), w = me((D, k) => {
    b(($) => {
      var j = Math.round(D), A = Math.round(k);
      return $.containerWidth === j && $.containerHeight === A ? $ : {
        containerWidth: j,
        containerHeight: A
      };
    });
  }, []);
  Ie(() => {
    if (h.current == null || typeof ResizeObserver > "u")
      return Un;
    var D = (A) => {
      var N, {
        width: L,
        height: W
      } = A[0].contentRect;
      w(L, W), (N = m.current) === null || N === void 0 || N.call(m, L, W);
    };
    l > 0 && (D = B1(D, l, {
      trailing: !0,
      leading: !1
    }));
    var k = new ResizeObserver(D), {
      width: $,
      height: j
    } = h.current.getBoundingClientRect();
    return w($, j), k.observe(h.current), () => {
      k.disconnect();
    };
  }, [w, l]);
  var {
    containerWidth: _,
    containerHeight: O
  } = y;
  Sd(!r || r > 0, "The aspect(%s) must be greater than zero.", r);
  var {
    calculatedWidth: x,
    calculatedHeight: S
  } = ry(_, O, {
    width: i,
    height: a,
    aspect: r,
    maxHeight: s
  });
  return Sd(x != null && x > 0 || S != null && S > 0, `The width(%s) and height(%s) of chart should be greater than 0,
       please check the style of container, or the props width(%s) and height(%s),
       or add a minWidth(%s) or minHeight(%s) or use aspect(%s) to control the
       height and width.`, x, S, i, a, o, u, r), /* @__PURE__ */ P.createElement("div", {
    id: f ? "".concat(f) : void 0,
    className: Oe("recharts-responsive-container", d),
    style: Td(Td({}, v), {}, {
      width: i,
      height: a,
      minWidth: o,
      minHeight: u,
      maxHeight: s
    }),
    ref: h
  }, /* @__PURE__ */ P.createElement("div", {
    style: H1({
      width: i,
      height: a
    })
  }, /* @__PURE__ */ P.createElement(iy, {
    width: x,
    height: S
  }, c)));
}), eP = /* @__PURE__ */ et((e, t) => {
  var r = cl();
  if (or(r.width) && or(r.height))
    return e.children;
  var {
    width: n,
    height: i
  } = Y1({
    width: e.width,
    height: e.height,
    aspect: e.aspect
  }), {
    calculatedWidth: a,
    calculatedHeight: o
  } = ry(void 0, void 0, {
    width: n,
    height: i,
    aspect: e.aspect,
    maxHeight: e.maxHeight
  });
  return z(a) && z(o) ? /* @__PURE__ */ P.createElement(iy, {
    width: a,
    height: o
  }, e.children) : /* @__PURE__ */ P.createElement(Q1, ds({}, e, {
    width: n,
    height: i,
    ref: t
  }));
});
function ay(e) {
  if (e)
    return {
      x: e.x,
      y: e.y,
      upperWidth: "upperWidth" in e ? e.upperWidth : e.width,
      lowerWidth: "lowerWidth" in e ? e.lowerWidth : e.width,
      width: e.width,
      height: e.height
    };
}
var za = () => {
  var e, t = fr(), r = U(k1), n = U(Fa), i = (e = U(La)) === null || e === void 0 ? void 0 : e.padding;
  return !t || !n || !i ? r : {
    width: n.width - i.left - i.right,
    height: n.height - i.top - i.bottom,
    x: i.left,
    y: i.top
  };
}, tP = {
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  width: 0,
  height: 0,
  brushBottom: 0
}, rP = () => {
  var e;
  return (e = U(Fe)) !== null && e !== void 0 ? e : tP;
}, oy = () => U(Gt), uy = () => U(Xt), nP = () => U((e) => e.layout.margin), se = (e) => e.layout.layoutType, qa = () => U(se), iP = () => {
  var e = qa();
  return e !== void 0;
}, Ba = (e) => {
  var t = xe(), r = fr(), {
    width: n,
    height: i
  } = e, a = cl(), o = n, u = i;
  return a && (o = a.width > 0 ? a.width : n, u = a.height > 0 ? a.height : i), Ie(() => {
    !r && or(o) && or(u) && t(l1({
      width: o,
      height: u
    }));
  }, [t, r, o, u]), null;
}, sy = /* @__PURE__ */ Symbol.for("immer-nothing"), jd = /* @__PURE__ */ Symbol.for("immer-draftable"), st = /* @__PURE__ */ Symbol.for("immer-state"), aP = process.env.NODE_ENV !== "production" ? [
  // All error codes, starting by 0:
  function(e) {
    return `The plugin for '${e}' has not been loaded into Immer. To enable the plugin, import and call \`enable${e}()\` when initializing your application.`;
  },
  function(e) {
    return `produce can only be called on things that are draftable: plain objects, arrays, Map, Set or classes that are marked with '[immerable]: true'. Got '${e}'`;
  },
  "This object has been frozen and should not be mutated",
  function(e) {
    return "Cannot use a proxy that has been revoked. Did you pass an object from inside an immer function to an async process? " + e;
  },
  "An immer producer returned a new value *and* modified its draft. Either return a new value *or* modify the draft.",
  "Immer forbids circular references",
  "The first or second argument to `produce` must be a function",
  "The third argument to `produce` must be a function or undefined",
  "First argument to `createDraft` must be a plain object, an array, or an immerable object",
  "First argument to `finishDraft` must be a draft returned by `createDraft`",
  function(e) {
    return `'current' expects a draft, got: ${e}`;
  },
  "Object.defineProperty() cannot be used on an Immer draft",
  "Object.setPrototypeOf() cannot be used on an Immer draft",
  "Immer only supports deleting array indices",
  "Immer only supports setting array indices and the 'length' property",
  function(e) {
    return `'original' expects a draft, got: ${e}`;
  }
  // Note: if more errors are added, the errorOffset in Patches.ts should be increased
  // See Patches.ts for additional errors
] : [];
function Ze(e, ...t) {
  if (process.env.NODE_ENV !== "production") {
    const r = aP[e], n = typeof r == "function" ? r.apply(null, t) : r;
    throw new Error(`[Immer] ${n}`);
  }
  throw new Error(
    `[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`
  );
}
var Mn = Object.getPrototypeOf;
function Jr(e) {
  return !!e && !!e[st];
}
function Mr(e) {
  return e ? ly(e) || Array.isArray(e) || !!e[jd] || !!e.constructor?.[jd] || Xn(e) || Wa(e) : !1;
}
var oP = Object.prototype.constructor.toString(), Cd = /* @__PURE__ */ new WeakMap();
function ly(e) {
  if (!e || typeof e != "object")
    return !1;
  const t = Object.getPrototypeOf(e);
  if (t === null || t === Object.prototype)
    return !0;
  const r = Object.hasOwnProperty.call(t, "constructor") && t.constructor;
  if (r === Object)
    return !0;
  if (typeof r != "function")
    return !1;
  let n = Cd.get(r);
  return n === void 0 && (n = Function.toString.call(r), Cd.set(r, n)), n === oP;
}
function Ji(e, t, r = !0) {
  Ua(e) === 0 ? (r ? Reflect.ownKeys(e) : Object.keys(e)).forEach((i) => {
    t(i, e[i], e);
  }) : e.forEach((n, i) => t(i, n, e));
}
function Ua(e) {
  const t = e[st];
  return t ? t.type_ : Array.isArray(e) ? 1 : Xn(e) ? 2 : Wa(e) ? 3 : 0;
}
function ps(e, t) {
  return Ua(e) === 2 ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t);
}
function cy(e, t, r) {
  const n = Ua(e);
  n === 2 ? e.set(t, r) : n === 3 ? e.add(r) : e[t] = r;
}
function uP(e, t) {
  return e === t ? e !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
function Xn(e) {
  return e instanceof Map;
}
function Wa(e) {
  return e instanceof Set;
}
function br(e) {
  return e.copy_ || e.base_;
}
function hs(e, t) {
  if (Xn(e))
    return new Map(e);
  if (Wa(e))
    return new Set(e);
  if (Array.isArray(e))
    return Array.prototype.slice.call(e);
  const r = ly(e);
  if (t === !0 || t === "class_only" && !r) {
    const n = Object.getOwnPropertyDescriptors(e);
    delete n[st];
    let i = Reflect.ownKeys(n);
    for (let a = 0; a < i.length; a++) {
      const o = i[a], u = n[o];
      u.writable === !1 && (u.writable = !0, u.configurable = !0), (u.get || u.set) && (n[o] = {
        configurable: !0,
        writable: !0,
        // could live with !!desc.set as well here...
        enumerable: u.enumerable,
        value: e[o]
      });
    }
    return Object.create(Mn(e), n);
  } else {
    const n = Mn(e);
    if (n !== null && r)
      return { ...e };
    const i = Object.create(n);
    return Object.assign(i, e);
  }
}
function fl(e, t = !1) {
  return Va(e) || Jr(e) || !Mr(e) || (Ua(e) > 1 && Object.defineProperties(e, {
    set: Pi,
    add: Pi,
    clear: Pi,
    delete: Pi
  }), Object.freeze(e), t && Object.values(e).forEach((r) => fl(r, !0))), e;
}
function sP() {
  Ze(2);
}
var Pi = {
  value: sP
};
function Va(e) {
  return e === null || typeof e != "object" ? !0 : Object.isFrozen(e);
}
var lP = {};
function Dr(e) {
  const t = lP[e];
  return t || Ze(0, e), t;
}
var Dn;
function fy() {
  return Dn;
}
function cP(e, t) {
  return {
    drafts_: [],
    parent_: e,
    immer_: t,
    // Whenever the modified draft contains a draft from another scope, we
    // need to prevent auto-freezing so the unowned draft can be finalized.
    canAutoFreeze_: !0,
    unfinalizedDrafts_: 0
  };
}
function Md(e, t) {
  t && (Dr("Patches"), e.patches_ = [], e.inversePatches_ = [], e.patchListener_ = t);
}
function vs(e) {
  ms(e), e.drafts_.forEach(fP), e.drafts_ = null;
}
function ms(e) {
  e === Dn && (Dn = e.parent_);
}
function Dd(e) {
  return Dn = cP(Dn, e);
}
function fP(e) {
  const t = e[st];
  t.type_ === 0 || t.type_ === 1 ? t.revoke_() : t.revoked_ = !0;
}
function Id(e, t) {
  t.unfinalizedDrafts_ = t.drafts_.length;
  const r = t.drafts_[0];
  return e !== void 0 && e !== r ? (r[st].modified_ && (vs(t), Ze(4)), Mr(e) && (e = Qi(t, e), t.parent_ || ea(t, e)), t.patches_ && Dr("Patches").generateReplacementPatches_(
    r[st].base_,
    e,
    t.patches_,
    t.inversePatches_
  )) : e = Qi(t, r, []), vs(t), t.patches_ && t.patchListener_(t.patches_, t.inversePatches_), e !== sy ? e : void 0;
}
function Qi(e, t, r) {
  if (Va(t))
    return t;
  const n = e.immer_.shouldUseStrictIteration(), i = t[st];
  if (!i)
    return Ji(
      t,
      (a, o) => Nd(e, i, t, a, o, r),
      n
    ), t;
  if (i.scope_ !== e)
    return t;
  if (!i.modified_)
    return ea(e, i.base_, !0), i.base_;
  if (!i.finalized_) {
    i.finalized_ = !0, i.scope_.unfinalizedDrafts_--;
    const a = i.copy_;
    let o = a, u = !1;
    i.type_ === 3 && (o = new Set(a), a.clear(), u = !0), Ji(
      o,
      (s, c) => Nd(
        e,
        i,
        a,
        s,
        c,
        r,
        u
      ),
      n
    ), ea(e, a, !1), r && e.patches_ && Dr("Patches").generatePatches_(
      i,
      r,
      e.patches_,
      e.inversePatches_
    );
  }
  return i.copy_;
}
function Nd(e, t, r, n, i, a, o) {
  if (i == null || typeof i != "object" && !o)
    return;
  const u = Va(i);
  if (!(u && !o)) {
    if (process.env.NODE_ENV !== "production" && i === r && Ze(5), Jr(i)) {
      const s = a && t && t.type_ !== 3 && // Set objects are atomic since they have no keys.
      !ps(t.assigned_, n) ? a.concat(n) : void 0, c = Qi(e, i, s);
      if (cy(r, n, c), Jr(c))
        e.canAutoFreeze_ = !1;
      else
        return;
    } else o && r.add(i);
    if (Mr(i) && !u) {
      if (!e.immer_.autoFreeze_ && e.unfinalizedDrafts_ < 1 || t && t.base_ && t.base_[n] === i && u)
        return;
      Qi(e, i), (!t || !t.scope_.parent_) && typeof n != "symbol" && (Xn(r) ? r.has(n) : Object.prototype.propertyIsEnumerable.call(r, n)) && ea(e, i);
    }
  }
}
function ea(e, t, r = !1) {
  !e.parent_ && e.immer_.autoFreeze_ && e.canAutoFreeze_ && fl(t, r);
}
function dP(e, t) {
  const r = Array.isArray(e), n = {
    type_: r ? 1 : 0,
    // Track which produce call this is associated with.
    scope_: t ? t.scope_ : fy(),
    // True for both shallow and deep changes.
    modified_: !1,
    // Used during finalization.
    finalized_: !1,
    // Track which properties have been assigned (true) or deleted (false).
    assigned_: {},
    // The parent draft state.
    parent_: t,
    // The base state.
    base_: e,
    // The base proxy.
    draft_: null,
    // set below
    // The base copy with any updated values.
    copy_: null,
    // Called by the `produce` function.
    revoke_: null,
    isManual_: !1
  };
  let i = n, a = dl;
  r && (i = [n], a = In);
  const { revoke: o, proxy: u } = Proxy.revocable(i, a);
  return n.draft_ = u, n.revoke_ = o, u;
}
var dl = {
  get(e, t) {
    if (t === st)
      return e;
    const r = br(e);
    if (!ps(r, t))
      return pP(e, r, t);
    const n = r[t];
    return e.finalized_ || !Mr(n) ? n : n === gu(e.base_, t) ? (bu(e), e.copy_[t] = gs(n, e)) : n;
  },
  has(e, t) {
    return t in br(e);
  },
  ownKeys(e) {
    return Reflect.ownKeys(br(e));
  },
  set(e, t, r) {
    const n = dy(br(e), t);
    if (n?.set)
      return n.set.call(e.draft_, r), !0;
    if (!e.modified_) {
      const i = gu(br(e), t), a = i?.[st];
      if (a && a.base_ === r)
        return e.copy_[t] = r, e.assigned_[t] = !1, !0;
      if (uP(r, i) && (r !== void 0 || ps(e.base_, t)))
        return !0;
      bu(e), ys(e);
    }
    return e.copy_[t] === r && // special case: handle new props with value 'undefined'
    (r !== void 0 || t in e.copy_) || // special case: NaN
    Number.isNaN(r) && Number.isNaN(e.copy_[t]) || (e.copy_[t] = r, e.assigned_[t] = !0), !0;
  },
  deleteProperty(e, t) {
    return gu(e.base_, t) !== void 0 || t in e.base_ ? (e.assigned_[t] = !1, bu(e), ys(e)) : delete e.assigned_[t], e.copy_ && delete e.copy_[t], !0;
  },
  // Note: We never coerce `desc.value` into an Immer draft, because we can't make
  // the same guarantee in ES5 mode.
  getOwnPropertyDescriptor(e, t) {
    const r = br(e), n = Reflect.getOwnPropertyDescriptor(r, t);
    return n && {
      writable: !0,
      configurable: e.type_ !== 1 || t !== "length",
      enumerable: n.enumerable,
      value: r[t]
    };
  },
  defineProperty() {
    Ze(11);
  },
  getPrototypeOf(e) {
    return Mn(e.base_);
  },
  setPrototypeOf() {
    Ze(12);
  }
}, In = {};
Ji(dl, (e, t) => {
  In[e] = function() {
    return arguments[0] = arguments[0][0], t.apply(this, arguments);
  };
});
In.deleteProperty = function(e, t) {
  return process.env.NODE_ENV !== "production" && isNaN(parseInt(t)) && Ze(13), In.set.call(this, e, t, void 0);
};
In.set = function(e, t, r) {
  return process.env.NODE_ENV !== "production" && t !== "length" && isNaN(parseInt(t)) && Ze(14), dl.set.call(this, e[0], t, r, e[0]);
};
function gu(e, t) {
  const r = e[st];
  return (r ? br(r) : e)[t];
}
function pP(e, t, r) {
  const n = dy(t, r);
  return n ? "value" in n ? n.value : (
    // This is a very special case, if the prop is a getter defined by the
    // prototype, we should invoke it with the draft as context!
    n.get?.call(e.draft_)
  ) : void 0;
}
function dy(e, t) {
  if (!(t in e))
    return;
  let r = Mn(e);
  for (; r; ) {
    const n = Object.getOwnPropertyDescriptor(r, t);
    if (n)
      return n;
    r = Mn(r);
  }
}
function ys(e) {
  e.modified_ || (e.modified_ = !0, e.parent_ && ys(e.parent_));
}
function bu(e) {
  e.copy_ || (e.copy_ = hs(
    e.base_,
    e.scope_.immer_.useStrictShallowCopy_
  ));
}
var hP = class {
  constructor(e) {
    this.autoFreeze_ = !0, this.useStrictShallowCopy_ = !1, this.useStrictIteration_ = !0, this.produce = (t, r, n) => {
      if (typeof t == "function" && typeof r != "function") {
        const a = r;
        r = t;
        const o = this;
        return function(s = a, ...c) {
          return o.produce(s, (l) => r.call(this, l, ...c));
        };
      }
      typeof r != "function" && Ze(6), n !== void 0 && typeof n != "function" && Ze(7);
      let i;
      if (Mr(t)) {
        const a = Dd(this), o = gs(t, void 0);
        let u = !0;
        try {
          i = r(o), u = !1;
        } finally {
          u ? vs(a) : ms(a);
        }
        return Md(a, n), Id(i, a);
      } else if (!t || typeof t != "object") {
        if (i = r(t), i === void 0 && (i = t), i === sy && (i = void 0), this.autoFreeze_ && fl(i, !0), n) {
          const a = [], o = [];
          Dr("Patches").generateReplacementPatches_(t, i, a, o), n(a, o);
        }
        return i;
      } else
        Ze(1, t);
    }, this.produceWithPatches = (t, r) => {
      if (typeof t == "function")
        return (o, ...u) => this.produceWithPatches(o, (s) => t(s, ...u));
      let n, i;
      return [this.produce(t, r, (o, u) => {
        n = o, i = u;
      }), n, i];
    }, typeof e?.autoFreeze == "boolean" && this.setAutoFreeze(e.autoFreeze), typeof e?.useStrictShallowCopy == "boolean" && this.setUseStrictShallowCopy(e.useStrictShallowCopy), typeof e?.useStrictIteration == "boolean" && this.setUseStrictIteration(e.useStrictIteration);
  }
  createDraft(e) {
    Mr(e) || Ze(8), Jr(e) && (e = vP(e));
    const t = Dd(this), r = gs(e, void 0);
    return r[st].isManual_ = !0, ms(t), r;
  }
  finishDraft(e, t) {
    const r = e && e[st];
    (!r || !r.isManual_) && Ze(9);
    const { scope_: n } = r;
    return Md(n, t), Id(void 0, n);
  }
  /**
   * Pass true to automatically freeze all copies created by Immer.
   *
   * By default, auto-freezing is enabled.
   */
  setAutoFreeze(e) {
    this.autoFreeze_ = e;
  }
  /**
   * Pass true to enable strict shallow copy.
   *
   * By default, immer does not copy the object descriptors such as getter, setter and non-enumrable properties.
   */
  setUseStrictShallowCopy(e) {
    this.useStrictShallowCopy_ = e;
  }
  /**
   * Pass false to use faster iteration that skips non-enumerable properties
   * but still handles symbols for compatibility.
   *
   * By default, strict iteration is enabled (includes all own properties).
   */
  setUseStrictIteration(e) {
    this.useStrictIteration_ = e;
  }
  shouldUseStrictIteration() {
    return this.useStrictIteration_;
  }
  applyPatches(e, t) {
    let r;
    for (r = t.length - 1; r >= 0; r--) {
      const i = t[r];
      if (i.path.length === 0 && i.op === "replace") {
        e = i.value;
        break;
      }
    }
    r > -1 && (t = t.slice(r + 1));
    const n = Dr("Patches").applyPatches_;
    return Jr(e) ? n(e, t) : this.produce(
      e,
      (i) => n(i, t)
    );
  }
};
function gs(e, t) {
  const r = Xn(e) ? Dr("MapSet").proxyMap_(e, t) : Wa(e) ? Dr("MapSet").proxySet_(e, t) : dP(e, t);
  return (t ? t.scope_ : fy()).drafts_.push(r), r;
}
function vP(e) {
  return Jr(e) || Ze(10, e), py(e);
}
function py(e) {
  if (!Mr(e) || Va(e))
    return e;
  const t = e[st];
  let r, n = !0;
  if (t) {
    if (!t.modified_)
      return t.base_;
    t.finalized_ = !0, r = hs(e, t.scope_.immer_.useStrictShallowCopy_), n = t.scope_.immer_.shouldUseStrictIteration();
  } else
    r = hs(e, !0);
  return Ji(
    r,
    (i, a) => {
      cy(r, i, py(a));
    },
    n
  ), t && (t.finalized_ = !1), r;
}
var mP = new hP();
mP.produce;
var yP = {
  settings: {
    layout: "horizontal",
    align: "center",
    verticalAlign: "middle",
    itemSorter: "value"
  },
  size: {
    width: 0,
    height: 0
  },
  payload: []
}, hy = tt({
  name: "legend",
  initialState: yP,
  reducers: {
    setLegendSize(e, t) {
      e.size.width = t.payload.width, e.size.height = t.payload.height;
    },
    setLegendSettings(e, t) {
      e.settings.align = t.payload.align, e.settings.layout = t.payload.layout, e.settings.verticalAlign = t.payload.verticalAlign, e.settings.itemSorter = t.payload.itemSorter;
    },
    addLegendPayload: {
      reducer(e, t) {
        e.payload.push(t.payload);
      },
      prepare: ce()
    },
    replaceLegendPayload: {
      reducer(e, t) {
        var {
          prev: r,
          next: n
        } = t.payload, i = St(e).payload.indexOf(r);
        i > -1 && (e.payload[i] = n);
      },
      prepare: ce()
    },
    removeLegendPayload: {
      reducer(e, t) {
        var r = St(e).payload.indexOf(t.payload);
        r > -1 && e.payload.splice(r, 1);
      },
      prepare: ce()
    }
  }
}), {
  setLegendSize: kd,
  setLegendSettings: gP,
  addLegendPayload: bP,
  replaceLegendPayload: wP,
  removeLegendPayload: OP
} = hy.actions, xP = hy.reducer, PP = ["contextPayload"];
function bs() {
  return bs = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, bs.apply(null, arguments);
}
function Rd(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Qr(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Rd(Object(r), !0).forEach(function(n) {
      _P(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Rd(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function _P(e, t, r) {
  return (t = EP(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function EP(e) {
  var t = SP(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function SP(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function AP(e, t) {
  if (e == null) return {};
  var r, n, i = TP(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
  }
  return i;
}
function TP(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
function jP(e) {
  return e.value;
}
function CP(e) {
  var {
    contextPayload: t
  } = e, r = AP(e, PP), n = fm(t, e.payloadUniqBy, jP), i = Qr(Qr({}, r), {}, {
    payload: n
  });
  return /* @__PURE__ */ P.isValidElement(e.content) ? /* @__PURE__ */ P.cloneElement(e.content, i) : typeof e.content == "function" ? /* @__PURE__ */ P.createElement(e.content, i) : /* @__PURE__ */ P.createElement(eO, i);
}
function MP(e, t, r, n, i, a) {
  var {
    layout: o,
    align: u,
    verticalAlign: s
  } = t, c, l;
  return (!e || (e.left === void 0 || e.left === null) && (e.right === void 0 || e.right === null)) && (u === "center" && o === "vertical" ? c = {
    left: ((n || 0) - a.width) / 2
  } : c = u === "right" ? {
    right: r && r.right || 0
  } : {
    left: r && r.left || 0
  }), (!e || (e.top === void 0 || e.top === null) && (e.bottom === void 0 || e.bottom === null)) && (s === "middle" ? l = {
    top: ((i || 0) - a.height) / 2
  } : l = s === "bottom" ? {
    bottom: r && r.bottom || 0
  } : {
    top: r && r.top || 0
  }), Qr(Qr({}, c), l);
}
function DP(e) {
  var t = xe();
  return Ie(() => {
    t(gP(e));
  }, [t, e]), null;
}
function IP(e) {
  var t = xe();
  return Ie(() => (t(kd(e)), () => {
    t(kd({
      width: 0,
      height: 0
    }));
  }), [t, e]), null;
}
function NP(e, t, r, n) {
  return e === "vertical" && z(t) ? {
    height: t
  } : e === "horizontal" ? {
    width: r || n
  } : null;
}
var kP = {
  align: "center",
  iconSize: 14,
  itemSorter: "value",
  layout: "horizontal",
  verticalAlign: "bottom"
};
function vy(e) {
  var t = wt(e, kP), r = JO(), n = U0(), i = nP(), {
    width: a,
    height: o,
    wrapperStyle: u,
    portal: s
  } = t, [c, l] = ym([r]), f = oy(), d = uy();
  if (f == null || d == null)
    return null;
  var p = f - (i?.left || 0) - (i?.right || 0), v = NP(t.layout, o, a, p), h = s ? u : Qr(Qr({
    position: "absolute",
    width: v?.width || a || "auto",
    height: v?.height || o || "auto"
  }, MP(u, t, i, f, d, c)), u), m = s ?? n;
  if (m == null || r == null)
    return null;
  var y = /* @__PURE__ */ P.createElement("div", {
    className: "recharts-legend-wrapper",
    style: h,
    ref: l
  }, /* @__PURE__ */ P.createElement(DP, {
    layout: t.layout,
    align: t.align,
    verticalAlign: t.verticalAlign,
    itemSorter: t.itemSorter
  }), !s && /* @__PURE__ */ P.createElement(IP, {
    width: c.width,
    height: c.height
  }), /* @__PURE__ */ P.createElement(CP, bs({}, t, v, {
    margin: i,
    chartWidth: f,
    chartHeight: d,
    contextPayload: r
  })));
  return /* @__PURE__ */ Ws(y, m);
}
vy.displayName = "Legend";
function ws() {
  return ws = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, ws.apply(null, arguments);
}
function $d(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function wu(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? $d(Object(r), !0).forEach(function(n) {
      RP(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : $d(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function RP(e, t, r) {
  return (t = $P(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function $P(e) {
  var t = LP(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function LP(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function FP(e) {
  return Array.isArray(e) && Ut(e[0]) && Ut(e[1]) ? e.join(" ~ ") : e;
}
var zP = (e) => {
  var {
    separator: t = " : ",
    contentStyle: r = {},
    itemStyle: n = {},
    labelStyle: i = {},
    payload: a,
    formatter: o,
    itemSorter: u,
    wrapperClassName: s,
    labelClassName: c,
    label: l,
    labelFormatter: f,
    accessibilityLayer: d = !1
  } = e, p = () => {
    if (a && a.length) {
      var O = {
        padding: 0,
        margin: 0
      }, x = (u ? Ta(a, u) : a).map((S, D) => {
        if (S.type === "none")
          return null;
        var k = S.formatter || o || FP, {
          value: $,
          name: j
        } = S, A = $, N = j;
        if (k) {
          var L = k($, j, S, D, a);
          if (Array.isArray(L))
            [A, N] = L;
          else if (L != null)
            A = L;
          else
            return null;
        }
        var W = wu({
          display: "block",
          paddingTop: 4,
          paddingBottom: 4,
          color: S.color || "#000"
        }, n);
        return /* @__PURE__ */ P.createElement("li", {
          className: "recharts-tooltip-item",
          key: "tooltip-item-".concat(D),
          style: W
        }, Ut(N) ? /* @__PURE__ */ P.createElement("span", {
          className: "recharts-tooltip-item-name"
        }, N) : null, Ut(N) ? /* @__PURE__ */ P.createElement("span", {
          className: "recharts-tooltip-item-separator"
        }, t) : null, /* @__PURE__ */ P.createElement("span", {
          className: "recharts-tooltip-item-value"
        }, A), /* @__PURE__ */ P.createElement("span", {
          className: "recharts-tooltip-item-unit"
        }, S.unit || ""));
      });
      return /* @__PURE__ */ P.createElement("ul", {
        className: "recharts-tooltip-item-list",
        style: O
      }, x);
    }
    return null;
  }, v = wu({
    margin: 0,
    padding: 10,
    backgroundColor: "#fff",
    border: "1px solid #ccc",
    whiteSpace: "nowrap"
  }, r), h = wu({
    margin: 0
  }, i), m = !ut(l), y = m ? l : "", b = Oe("recharts-default-tooltip", s), w = Oe("recharts-tooltip-label", c);
  m && f && a !== void 0 && a !== null && (y = f(l, a));
  var _ = d ? {
    role: "status",
    "aria-live": "assertive"
  } : {};
  return /* @__PURE__ */ P.createElement("div", ws({
    className: b,
    style: v
  }, _), /* @__PURE__ */ P.createElement("p", {
    className: w,
    style: h
  }, /* @__PURE__ */ P.isValidElement(y) ? y : "".concat(y)), p());
}, mn = "recharts-tooltip-wrapper", qP = {
  visibility: "hidden"
};
function BP(e) {
  var {
    coordinate: t,
    translateX: r,
    translateY: n
  } = e;
  return Oe(mn, {
    ["".concat(mn, "-right")]: z(r) && t && z(t.x) && r >= t.x,
    ["".concat(mn, "-left")]: z(r) && t && z(t.x) && r < t.x,
    ["".concat(mn, "-bottom")]: z(n) && t && z(t.y) && n >= t.y,
    ["".concat(mn, "-top")]: z(n) && t && z(t.y) && n < t.y
  });
}
function Ld(e) {
  var {
    allowEscapeViewBox: t,
    coordinate: r,
    key: n,
    offsetTopLeft: i,
    position: a,
    reverseDirection: o,
    tooltipDimension: u,
    viewBox: s,
    viewBoxDimension: c
  } = e;
  if (a && z(a[n]))
    return a[n];
  var l = r[n] - u - (i > 0 ? i : 0), f = r[n] + i;
  if (t[n])
    return o[n] ? l : f;
  var d = s[n];
  if (d == null)
    return 0;
  if (o[n]) {
    var p = l, v = d;
    return p < v ? Math.max(f, d) : Math.max(l, d);
  }
  if (c == null)
    return 0;
  var h = f + u, m = d + c;
  return h > m ? Math.max(l, d) : Math.max(f, d);
}
function UP(e) {
  var {
    translateX: t,
    translateY: r,
    useTranslate3d: n
  } = e;
  return {
    transform: n ? "translate3d(".concat(t, "px, ").concat(r, "px, 0)") : "translate(".concat(t, "px, ").concat(r, "px)")
  };
}
function WP(e) {
  var {
    allowEscapeViewBox: t,
    coordinate: r,
    offsetTopLeft: n,
    position: i,
    reverseDirection: a,
    tooltipBox: o,
    useTranslate3d: u,
    viewBox: s
  } = e, c, l, f;
  return o.height > 0 && o.width > 0 && r ? (l = Ld({
    allowEscapeViewBox: t,
    coordinate: r,
    key: "x",
    offsetTopLeft: n,
    position: i,
    reverseDirection: a,
    tooltipDimension: o.width,
    viewBox: s,
    viewBoxDimension: s.width
  }), f = Ld({
    allowEscapeViewBox: t,
    coordinate: r,
    key: "y",
    offsetTopLeft: n,
    position: i,
    reverseDirection: a,
    tooltipDimension: o.height,
    viewBox: s,
    viewBoxDimension: s.height
  }), c = UP({
    translateX: l,
    translateY: f,
    useTranslate3d: u
  })) : c = qP, {
    cssProperties: c,
    cssClasses: BP({
      translateX: l,
      translateY: f,
      coordinate: r
    })
  };
}
function Fd(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function _i(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Fd(Object(r), !0).forEach(function(n) {
      Os(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Fd(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Os(e, t, r) {
  return (t = VP(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function VP(e) {
  var t = KP(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function KP(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
class HP extends T0 {
  constructor() {
    super(...arguments), Os(this, "state", {
      dismissed: !1,
      dismissedAtCoordinate: {
        x: 0,
        y: 0
      }
    }), Os(this, "handleKeyDown", (t) => {
      if (t.key === "Escape") {
        var r, n, i, a;
        this.setState({
          dismissed: !0,
          dismissedAtCoordinate: {
            x: (r = (n = this.props.coordinate) === null || n === void 0 ? void 0 : n.x) !== null && r !== void 0 ? r : 0,
            y: (i = (a = this.props.coordinate) === null || a === void 0 ? void 0 : a.y) !== null && i !== void 0 ? i : 0
          }
        });
      }
    });
  }
  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyDown);
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyDown);
  }
  componentDidUpdate() {
    var t, r;
    this.state.dismissed && (((t = this.props.coordinate) === null || t === void 0 ? void 0 : t.x) !== this.state.dismissedAtCoordinate.x || ((r = this.props.coordinate) === null || r === void 0 ? void 0 : r.y) !== this.state.dismissedAtCoordinate.y) && (this.state.dismissed = !1);
  }
  render() {
    var {
      active: t,
      allowEscapeViewBox: r,
      animationDuration: n,
      animationEasing: i,
      children: a,
      coordinate: o,
      hasPayload: u,
      isAnimationActive: s,
      offset: c,
      position: l,
      reverseDirection: f,
      useTranslate3d: d,
      viewBox: p,
      wrapperStyle: v,
      lastBoundingBox: h,
      innerRef: m,
      hasPortalFromProps: y
    } = this.props, {
      cssClasses: b,
      cssProperties: w
    } = WP({
      allowEscapeViewBox: r,
      coordinate: o,
      offsetTopLeft: c,
      position: l,
      reverseDirection: f,
      tooltipBox: {
        height: h.height,
        width: h.width
      },
      useTranslate3d: d,
      viewBox: p
    }), _ = y ? {} : _i(_i({
      transition: s && t ? "transform ".concat(n, "ms ").concat(i) : void 0
    }, w), {}, {
      pointerEvents: "none",
      visibility: !this.state.dismissed && t && u ? "visible" : "hidden",
      position: "absolute",
      top: 0,
      left: 0
    }), O = _i(_i({}, _), {}, {
      visibility: !this.state.dismissed && t && u ? "visible" : "hidden"
    }, v);
    return (
      // This element allow listening to the `Escape` key. See https://github.com/recharts/recharts/pull/2925
      /* @__PURE__ */ P.createElement("div", {
        // @ts-expect-error typescript library does not recognize xmlns attribute, but it's required for an HTML chunk inside SVG.
        xmlns: "http://www.w3.org/1999/xhtml",
        tabIndex: -1,
        className: b,
        style: O,
        ref: m
      }, a)
    );
  }
}
var my = () => {
  var e;
  return (e = U((t) => t.rootProps.accessibilityLayer)) !== null && e !== void 0 ? e : !0;
};
function xs() {
  return xs = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, xs.apply(null, arguments);
}
function zd(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function qd(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? zd(Object(r), !0).forEach(function(n) {
      YP(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : zd(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function YP(e, t, r) {
  return (t = GP(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function GP(e) {
  var t = XP(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function XP(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Bd = {
  curveBasisClosed: sw,
  curveBasisOpen: lw,
  curveBasis: uw,
  curveBumpX: H0,
  curveBumpY: Y0,
  curveLinearClosed: cw,
  curveLinear: Sa,
  curveMonotoneX: fw,
  curveMonotoneY: dw,
  curveNatural: pw,
  curveStep: hw,
  curveStepAfter: mw,
  curveStepBefore: vw
}, ta = (e) => je(e.x) && je(e.y), Ud = (e) => e.base != null && ta(e.base) && ta(e), yn = (e) => e.x, gn = (e) => e.y, ZP = (e, t) => {
  if (typeof e == "function")
    return e;
  var r = "curve".concat(Bn(e));
  return (r === "curveMonotone" || r === "curveBump") && t ? Bd["".concat(r).concat(t === "vertical" ? "Y" : "X")] : Bd[r] || Sa;
}, JP = (e) => {
  var {
    type: t = "linear",
    points: r = [],
    baseLine: n,
    layout: i,
    connectNulls: a = !1
  } = e, o = ZP(t, i), u = a ? r.filter(ta) : r, s;
  if (Array.isArray(n)) {
    var c = r.map((p, v) => qd(qd({}, p), {}, {
      base: n[v]
    }));
    i === "vertical" ? s = pi().y(gn).x1(yn).x0((p) => p.base.x) : s = pi().x(yn).y1(gn).y0((p) => p.base.y);
    var l = s.defined(Ud).curve(o), f = a ? c.filter(Ud) : c;
    return l(f);
  }
  i === "vertical" && z(n) ? s = pi().y(gn).x1(yn).x0(n) : z(n) ? s = pi().x(yn).y1(gn).y0(n) : s = zv().x(yn).y(gn);
  var d = s.defined(ta).curve(o);
  return d(u);
}, pl = (e) => {
  var {
    className: t,
    points: r,
    path: n,
    pathRef: i
  } = e, a = qa();
  if ((!r || !r.length) && !n)
    return null;
  var o = {
    type: e.type,
    points: e.points,
    baseLine: e.baseLine,
    layout: e.layout || a,
    connectNulls: e.connectNulls
  }, u = r && r.length ? JP(o) : n;
  return /* @__PURE__ */ P.createElement("path", xs({}, Gr(e), qw(e), {
    className: Oe("recharts-curve", t),
    d: u === null ? void 0 : u,
    ref: i
  }));
}, QP = ["x", "y", "top", "left", "width", "height", "className"];
function Ps() {
  return Ps = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Ps.apply(null, arguments);
}
function Wd(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function e_(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Wd(Object(r), !0).forEach(function(n) {
      t_(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Wd(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function t_(e, t, r) {
  return (t = r_(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function r_(e) {
  var t = n_(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function n_(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function i_(e, t) {
  if (e == null) return {};
  var r, n, i = a_(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
  }
  return i;
}
function a_(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
var o_ = (e, t, r, n, i, a) => "M".concat(e, ",").concat(i, "v").concat(n, "M").concat(a, ",").concat(t, "h").concat(r), u_ = (e) => {
  var {
    x: t = 0,
    y: r = 0,
    top: n = 0,
    left: i = 0,
    width: a = 0,
    height: o = 0,
    className: u
  } = e, s = i_(e, QP), c = e_({
    x: t,
    y: r,
    top: n,
    left: i,
    width: a,
    height: o
  }, s);
  return !z(t) || !z(r) || !z(a) || !z(o) || !z(n) || !z(i) ? null : /* @__PURE__ */ P.createElement("path", Ps({}, mt(c), {
    className: Oe("recharts-cross", u),
    d: o_(t, r, a, o, n, i)
  }));
};
function s_(e, t, r, n) {
  var i = n / 2;
  return {
    stroke: "none",
    fill: "#ccc",
    x: e === "horizontal" ? t.x - i : r.left + 0.5,
    y: e === "horizontal" ? r.top + 0.5 : t.y - i,
    width: e === "horizontal" ? n : r.width - 1,
    height: e === "horizontal" ? r.height - 1 : n
  };
}
function Vd(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Kd(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Vd(Object(r), !0).forEach(function(n) {
      l_(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Vd(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function l_(e, t, r) {
  return (t = c_(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function c_(e) {
  var t = f_(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function f_(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var d_ = (e) => e.replace(/([A-Z])/g, (t) => "-".concat(t.toLowerCase())), yy = (e, t, r) => e.map((n) => "".concat(d_(n), " ").concat(t, "ms ").concat(r)).join(","), p_ = (e, t) => [Object.keys(e), Object.keys(t)].reduce((r, n) => r.filter((i) => n.includes(i))), Nn = (e, t) => Object.keys(t).reduce((r, n) => Kd(Kd({}, r), {}, {
  [n]: e(n, t[n])
}), {});
function Hd(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Me(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Hd(Object(r), !0).forEach(function(n) {
      h_(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Hd(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function h_(e, t, r) {
  return (t = v_(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function v_(e) {
  var t = m_(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function m_(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var ra = (e, t, r) => e + (t - e) * r, _s = (e) => {
  var {
    from: t,
    to: r
  } = e;
  return t !== r;
}, gy = (e, t, r) => {
  var n = Nn((i, a) => {
    if (_s(a)) {
      var [o, u] = e(a.from, a.to, a.velocity);
      return Me(Me({}, a), {}, {
        from: o,
        velocity: u
      });
    }
    return a;
  }, t);
  return r < 1 ? Nn((i, a) => _s(a) && n[i] != null ? Me(Me({}, a), {}, {
    velocity: ra(a.velocity, n[i].velocity, r),
    from: ra(a.from, n[i].from, r)
  }) : a, t) : gy(e, n, r - 1);
};
function y_(e, t, r, n, i, a) {
  var o, u = n.reduce((d, p) => Me(Me({}, d), {}, {
    [p]: {
      from: e[p],
      velocity: 0,
      to: t[p]
    }
  }), {}), s = () => Nn((d, p) => p.from, u), c = () => !Object.values(u).filter(_s).length, l = null, f = (d) => {
    o || (o = d);
    var p = d - o, v = p / r.dt;
    u = gy(r, u, v), i(Me(Me(Me({}, e), t), s())), o = d, c() || (l = a.setTimeout(f));
  };
  return () => (l = a.setTimeout(f), () => {
    var d;
    (d = l) === null || d === void 0 || d();
  });
}
function g_(e, t, r, n, i, a, o) {
  var u = null, s = i.reduce((f, d) => {
    var p = e[d], v = t[d];
    return p == null || v == null ? f : Me(Me({}, f), {}, {
      [d]: [p, v]
    });
  }, {}), c, l = (f) => {
    c || (c = f);
    var d = (f - c) / n, p = Nn((h, m) => ra(...m, r(d)), s);
    if (a(Me(Me(Me({}, e), t), p)), d < 1)
      u = o.setTimeout(l);
    else {
      var v = Nn((h, m) => ra(...m, r(1)), s);
      a(Me(Me(Me({}, e), t), v));
    }
  };
  return () => (u = o.setTimeout(l), () => {
    var f;
    (f = u) === null || f === void 0 || f();
  });
}
const b_ = (e, t, r, n, i, a) => {
  var o = p_(e, t);
  return r == null ? () => (i(Me(Me({}, e), t)), () => {
  }) : r.isStepper === !0 ? y_(e, t, r, o, i, a) : g_(e, t, r, n, o, i, a);
};
var na = 1e-4, by = (e, t) => [0, 3 * e, 3 * t - 6 * e, 3 * e - 3 * t + 1], wy = (e, t) => e.map((r, n) => r * t ** n).reduce((r, n) => r + n), Yd = (e, t) => (r) => {
  var n = by(e, t);
  return wy(n, r);
}, w_ = (e, t) => (r) => {
  var n = by(e, t), i = [...n.map((a, o) => a * o).slice(1), 0];
  return wy(i, r);
}, O_ = (e) => {
  var t, r = e.split("(");
  if (r.length !== 2 || r[0] !== "cubic-bezier")
    return null;
  var n = (t = r[1]) === null || t === void 0 || (t = t.split(")")[0]) === null || t === void 0 ? void 0 : t.split(",");
  if (n == null || n.length !== 4)
    return null;
  var i = n.map((a) => parseFloat(a));
  return [i[0], i[1], i[2], i[3]];
}, x_ = function() {
  for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
    r[n] = arguments[n];
  if (r.length === 1)
    switch (r[0]) {
      case "linear":
        return [0, 0, 1, 1];
      case "ease":
        return [0.25, 0.1, 0.25, 1];
      case "ease-in":
        return [0.42, 0, 1, 1];
      case "ease-out":
        return [0.42, 0, 0.58, 1];
      case "ease-in-out":
        return [0, 0, 0.58, 1];
      default: {
        var i = O_(r[0]);
        if (i)
          return i;
      }
    }
  return r.length === 4 ? r : [0, 0, 1, 1];
}, P_ = (e, t, r, n) => {
  var i = Yd(e, r), a = Yd(t, n), o = w_(e, r), u = (c) => c > 1 ? 1 : c < 0 ? 0 : c, s = (c) => {
    for (var l = c > 1 ? 1 : c, f = l, d = 0; d < 8; ++d) {
      var p = i(f) - l, v = o(f);
      if (Math.abs(p - l) < na || v < na)
        return a(f);
      f = u(f - p / v);
    }
    return a(f);
  };
  return s.isStepper = !1, s;
}, Gd = function() {
  return P_(...x_(...arguments));
}, __ = function() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, {
    stiff: r = 100,
    damping: n = 8,
    dt: i = 17
  } = t, a = (o, u, s) => {
    var c = -(o - u) * r, l = s * n, f = s + (c - l) * i / 1e3, d = s * i / 1e3 + o;
    return Math.abs(d - u) < na && Math.abs(f) < na ? [u, 0] : [d, f];
  };
  return a.isStepper = !0, a.dt = i, a;
}, E_ = (e) => {
  if (typeof e == "string")
    switch (e) {
      case "ease":
      case "ease-in-out":
      case "ease-out":
      case "ease-in":
      case "linear":
        return Gd(e);
      case "spring":
        return __();
      default:
        if (e.split("(")[0] === "cubic-bezier")
          return Gd(e);
    }
  return typeof e == "function" ? e : null;
};
function S_(e) {
  var t, r = () => null, n = !1, i = null, a = (o) => {
    if (!n) {
      if (Array.isArray(o)) {
        if (!o.length)
          return;
        var u = o, [s, ...c] = u;
        if (typeof s == "number") {
          i = e.setTimeout(a.bind(null, c), s);
          return;
        }
        a(s), i = e.setTimeout(a.bind(null, c));
        return;
      }
      typeof o == "string" && (t = o, r(t)), typeof o == "object" && (t = o, r(t)), typeof o == "function" && o();
    }
  };
  return {
    stop: () => {
      n = !0;
    },
    start: (o) => {
      n = !1, i && (i(), i = null), a(o);
    },
    subscribe: (o) => (r = o, () => {
      r = () => null;
    }),
    getTimeoutController: () => e
  };
}
class A_ {
  setTimeout(t) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, n = performance.now(), i = null, a = (o) => {
      o - n >= r ? t(o) : typeof requestAnimationFrame == "function" && (i = requestAnimationFrame(a));
    };
    return i = requestAnimationFrame(a), () => {
      i != null && cancelAnimationFrame(i);
    };
  }
}
function T_() {
  return S_(new A_());
}
var j_ = /* @__PURE__ */ bt(T_);
function C_(e, t) {
  var r = Tt(j_);
  return kr(() => t ?? r(e), [e, t, r]);
}
var M_ = () => !(typeof window < "u" && window.document && window.document.createElement && window.setTimeout), hl = {
  isSsr: M_()
}, D_ = {
  begin: 0,
  duration: 1e3,
  easing: "ease",
  isActive: !0,
  canBegin: !0,
  onAnimationEnd: () => {
  },
  onAnimationStart: () => {
  }
}, Xd = {
  t: 0
}, Ou = {
  t: 1
};
function vl(e) {
  var t = wt(e, D_), {
    isActive: r,
    canBegin: n,
    duration: i,
    easing: a,
    begin: o,
    onAnimationEnd: u,
    onAnimationStart: s,
    children: c
  } = t, l = r === "auto" ? !hl.isSsr : r, f = C_(t.animationId, t.animationManager), [d, p] = De(l ? Xd : Ou), v = he(null);
  return Ie(() => {
    l || p(Ou);
  }, [l]), Ie(() => {
    if (!l || !n)
      return Un;
    var h = b_(Xd, Ou, E_(a), i, p, f.getTimeoutController()), m = () => {
      v.current = h();
    };
    return f.start([s, o, m, i, u]), () => {
      f.stop(), v.current && v.current(), u();
    };
  }, [l, n, i, a, o, s, u, f]), c(d.t);
}
function ml(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "animation-", r = he(An(t)), n = he(e);
  return n.current !== e && (r.current = An(t), n.current = e), r.current;
}
var I_ = ["radius"], N_ = ["radius"], Zd, Jd, Qd, ep, tp, rp, np, ip, ap, op;
function up(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function sp(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? up(Object(r), !0).forEach(function(n) {
      k_(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : up(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function k_(e, t, r) {
  return (t = R_(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function R_(e) {
  var t = $_(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function $_(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function ia() {
  return ia = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, ia.apply(null, arguments);
}
function lp(e, t) {
  if (e == null) return {};
  var r, n, i = L_(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
  }
  return i;
}
function L_(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
function Dt(e, t) {
  return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } }));
}
var cp = (e, t, r, n, i) => {
  var a = rr(r), o = rr(n), u = Math.min(Math.abs(a) / 2, Math.abs(o) / 2), s = o >= 0 ? 1 : -1, c = a >= 0 ? 1 : -1, l = o >= 0 && a >= 0 || o < 0 && a < 0 ? 1 : 0, f;
  if (u > 0 && i instanceof Array) {
    for (var d = [0, 0, 0, 0], p = 0, v = 4; p < v; p++)
      d[p] = i[p] > u ? u : i[p];
    f = ye(Zd || (Zd = Dt(["M", ",", ""])), e, t + s * d[0]), d[0] > 0 && (f += ye(Jd || (Jd = Dt(["A ", ",", ",0,0,", ",", ",", ""])), d[0], d[0], l, e + c * d[0], t)), f += ye(Qd || (Qd = Dt(["L ", ",", ""])), e + r - c * d[1], t), d[1] > 0 && (f += ye(ep || (ep = Dt(["A ", ",", ",0,0,", `,
        `, ",", ""])), d[1], d[1], l, e + r, t + s * d[1])), f += ye(tp || (tp = Dt(["L ", ",", ""])), e + r, t + n - s * d[2]), d[2] > 0 && (f += ye(rp || (rp = Dt(["A ", ",", ",0,0,", `,
        `, ",", ""])), d[2], d[2], l, e + r - c * d[2], t + n)), f += ye(np || (np = Dt(["L ", ",", ""])), e + c * d[3], t + n), d[3] > 0 && (f += ye(ip || (ip = Dt(["A ", ",", ",0,0,", `,
        `, ",", ""])), d[3], d[3], l, e, t + n - s * d[3])), f += "Z";
  } else if (u > 0 && i === +i && i > 0) {
    var h = Math.min(u, i);
    f = ye(ap || (ap = Dt(["M ", ",", `
            A `, ",", ",0,0,", ",", ",", `
            L `, ",", `
            A `, ",", ",0,0,", ",", ",", `
            L `, ",", `
            A `, ",", ",0,0,", ",", ",", `
            L `, ",", `
            A `, ",", ",0,0,", ",", ",", " Z"])), e, t + s * h, h, h, l, e + c * h, t, e + r - c * h, t, h, h, l, e + r, t + s * h, e + r, t + n - s * h, h, h, l, e + r - c * h, t + n, e + c * h, t + n, h, h, l, e, t + n - s * h);
  } else
    f = ye(op || (op = Dt(["M ", ",", " h ", " v ", " h ", " Z"])), e, t, r, n, -r);
  return f;
}, fp = {
  x: 0,
  y: 0,
  width: 0,
  height: 0,
  // The radius of border
  // The radius of four corners when radius is a number
  // The radius of left-top, right-top, right-bottom, left-bottom when radius is an array
  radius: 0,
  isAnimationActive: !1,
  isUpdateAnimationActive: !1,
  animationBegin: 0,
  animationDuration: 1500,
  animationEasing: "ease"
}, Oy = (e) => {
  var t = wt(e, fp), r = he(null), [n, i] = De(-1);
  Ie(() => {
    if (r.current && r.current.getTotalLength)
      try {
        var V = r.current.getTotalLength();
        V && i(V);
      } catch {
      }
  }, []);
  var {
    x: a,
    y: o,
    width: u,
    height: s,
    radius: c,
    className: l
  } = t, {
    animationEasing: f,
    animationDuration: d,
    animationBegin: p,
    isAnimationActive: v,
    isUpdateAnimationActive: h
  } = t, m = he(u), y = he(s), b = he(a), w = he(o), _ = kr(() => ({
    x: a,
    y: o,
    width: u,
    height: s,
    radius: c
  }), [a, o, u, s, c]), O = ml(_, "rectangle-");
  if (a !== +a || o !== +o || u !== +u || s !== +s || u === 0 || s === 0)
    return null;
  var x = Oe("recharts-rectangle", l);
  if (!h) {
    var S = mt(t), {
      radius: D
    } = S, k = lp(S, I_);
    return /* @__PURE__ */ P.createElement("path", ia({}, k, {
      x: rr(a),
      y: rr(o),
      width: rr(u),
      height: rr(s),
      radius: typeof c == "number" ? c : void 0,
      className: x,
      d: cp(a, o, u, s, c)
    }));
  }
  var $ = m.current, j = y.current, A = b.current, N = w.current, L = "0px ".concat(n === -1 ? 1 : n, "px"), W = "".concat(n, "px 0px"), K = yy(["strokeDasharray"], d, typeof f == "string" ? f : fp.animationEasing);
  return /* @__PURE__ */ P.createElement(vl, {
    animationId: O,
    key: O,
    canBegin: n > 0,
    duration: d,
    easing: f,
    isActive: h,
    begin: p
  }, (V) => {
    var te = Pt($, u, V), X = Pt(j, s, V), Pe = Pt(A, a, V), qe = Pt(N, o, V);
    r.current && (m.current = te, y.current = X, b.current = Pe, w.current = qe);
    var pe;
    v ? V > 0 ? pe = {
      transition: K,
      strokeDasharray: W
    } : pe = {
      strokeDasharray: L
    } : pe = {
      strokeDasharray: W
    };
    var Be = mt(t), {
      radius: Ue
    } = Be, xt = lp(Be, N_);
    return /* @__PURE__ */ P.createElement("path", ia({}, xt, {
      radius: typeof c == "number" ? c : void 0,
      className: x,
      d: cp(Pe, qe, te, X, c),
      ref: r,
      style: sp(sp({}, pe), t.style)
    }));
  });
};
function dp(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function pp(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? dp(Object(r), !0).forEach(function(n) {
      F_(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : dp(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function F_(e, t, r) {
  return (t = z_(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function z_(e) {
  var t = q_(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function q_(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var aa = Math.PI / 180, B_ = (e) => e * 180 / Math.PI, Ae = (e, t, r, n) => ({
  x: e + Math.cos(-aa * n) * r,
  y: t + Math.sin(-aa * n) * r
}), xy = function(t, r) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
  return Math.min(Math.abs(t - (n.left || 0) - (n.right || 0)), Math.abs(r - (n.top || 0) - (n.bottom || 0))) / 2;
}, U_ = (e, t) => {
  var {
    x: r,
    y: n
  } = e, {
    x: i,
    y: a
  } = t;
  return Math.sqrt((r - i) ** 2 + (n - a) ** 2);
}, W_ = (e, t) => {
  var {
    x: r,
    y: n
  } = e, {
    cx: i,
    cy: a
  } = t, o = U_({
    x: r,
    y: n
  }, {
    x: i,
    y: a
  });
  if (o <= 0)
    return {
      radius: o,
      angle: 0
    };
  var u = (r - i) / o, s = Math.acos(u);
  return n > a && (s = 2 * Math.PI - s), {
    radius: o,
    angle: B_(s),
    angleInRadian: s
  };
}, V_ = (e) => {
  var {
    startAngle: t,
    endAngle: r
  } = e, n = Math.floor(t / 360), i = Math.floor(r / 360), a = Math.min(n, i);
  return {
    startAngle: t - a * 360,
    endAngle: r - a * 360
  };
}, K_ = (e, t) => {
  var {
    startAngle: r,
    endAngle: n
  } = t, i = Math.floor(r / 360), a = Math.floor(n / 360), o = Math.min(i, a);
  return e + o * 360;
}, H_ = (e, t) => {
  var {
    chartX: r,
    chartY: n
  } = e, {
    radius: i,
    angle: a
  } = W_({
    x: r,
    y: n
  }, t), {
    innerRadius: o,
    outerRadius: u
  } = t;
  if (i < o || i > u || i === 0)
    return null;
  var {
    startAngle: s,
    endAngle: c
  } = V_(t), l = a, f;
  if (s <= c) {
    for (; l > c; )
      l -= 360;
    for (; l < s; )
      l += 360;
    f = l >= s && l <= c;
  } else {
    for (; l > s; )
      l -= 360;
    for (; l < c; )
      l += 360;
    f = l >= c && l <= s;
  }
  return f ? pp(pp({}, t), {}, {
    radius: i,
    angle: K_(l, t)
  }) : null;
};
function Py(e) {
  var {
    cx: t,
    cy: r,
    radius: n,
    startAngle: i,
    endAngle: a
  } = e, o = Ae(t, r, n, i), u = Ae(t, r, n, a);
  return {
    points: [o, u],
    cx: t,
    cy: r,
    radius: n,
    startAngle: i,
    endAngle: a
  };
}
var hp, vp, mp, yp, gp, bp, wp;
function Es() {
  return Es = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Es.apply(null, arguments);
}
function xr(e, t) {
  return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } }));
}
var Y_ = (e, t) => {
  var r = Je(t - e), n = Math.min(Math.abs(t - e), 359.999);
  return r * n;
}, Ei = (e) => {
  var {
    cx: t,
    cy: r,
    radius: n,
    angle: i,
    sign: a,
    isExternal: o,
    cornerRadius: u,
    cornerIsExternal: s
  } = e, c = u * (o ? 1 : -1) + n, l = Math.asin(u / c) / aa, f = s ? i : i + a * l, d = Ae(t, r, c, f), p = Ae(t, r, n, f), v = s ? i - a * l : i, h = Ae(t, r, c * Math.cos(l * aa), v);
  return {
    center: d,
    circleTangency: p,
    lineTangency: h,
    theta: l
  };
}, _y = (e) => {
  var {
    cx: t,
    cy: r,
    innerRadius: n,
    outerRadius: i,
    startAngle: a,
    endAngle: o
  } = e, u = Y_(a, o), s = a + u, c = Ae(t, r, i, a), l = Ae(t, r, i, s), f = ye(hp || (hp = xr(["M ", ",", `
    A `, ",", `,0,
    `, ",", `,
    `, ",", `
  `])), c.x, c.y, i, i, +(Math.abs(u) > 180), +(a > s), l.x, l.y);
  if (n > 0) {
    var d = Ae(t, r, n, a), p = Ae(t, r, n, s);
    f += ye(vp || (vp = xr(["L ", ",", `
            A `, ",", `,0,
            `, ",", `,
            `, ",", " Z"])), p.x, p.y, n, n, +(Math.abs(u) > 180), +(a <= s), d.x, d.y);
  } else
    f += ye(mp || (mp = xr(["L ", ",", " Z"])), t, r);
  return f;
}, G_ = (e) => {
  var {
    cx: t,
    cy: r,
    innerRadius: n,
    outerRadius: i,
    cornerRadius: a,
    forceCornerRadius: o,
    cornerIsExternal: u,
    startAngle: s,
    endAngle: c
  } = e, l = Je(c - s), {
    circleTangency: f,
    lineTangency: d,
    theta: p
  } = Ei({
    cx: t,
    cy: r,
    radius: i,
    angle: s,
    sign: l,
    cornerRadius: a,
    cornerIsExternal: u
  }), {
    circleTangency: v,
    lineTangency: h,
    theta: m
  } = Ei({
    cx: t,
    cy: r,
    radius: i,
    angle: c,
    sign: -l,
    cornerRadius: a,
    cornerIsExternal: u
  }), y = u ? Math.abs(s - c) : Math.abs(s - c) - p - m;
  if (y < 0)
    return o ? ye(yp || (yp = xr(["M ", ",", `
        a`, ",", ",0,0,1,", `,0
        a`, ",", ",0,0,1,", `,0
      `])), d.x, d.y, a, a, a * 2, a, a, -a * 2) : _y({
      cx: t,
      cy: r,
      innerRadius: n,
      outerRadius: i,
      startAngle: s,
      endAngle: c
    });
  var b = ye(gp || (gp = xr(["M ", ",", `
    A`, ",", ",0,0,", ",", ",", `
    A`, ",", ",0,", ",", ",", ",", `
    A`, ",", ",0,0,", ",", ",", `
  `])), d.x, d.y, a, a, +(l < 0), f.x, f.y, i, i, +(y > 180), +(l < 0), v.x, v.y, a, a, +(l < 0), h.x, h.y);
  if (n > 0) {
    var {
      circleTangency: w,
      lineTangency: _,
      theta: O
    } = Ei({
      cx: t,
      cy: r,
      radius: n,
      angle: s,
      sign: l,
      isExternal: !0,
      cornerRadius: a,
      cornerIsExternal: u
    }), {
      circleTangency: x,
      lineTangency: S,
      theta: D
    } = Ei({
      cx: t,
      cy: r,
      radius: n,
      angle: c,
      sign: -l,
      isExternal: !0,
      cornerRadius: a,
      cornerIsExternal: u
    }), k = u ? Math.abs(s - c) : Math.abs(s - c) - O - D;
    if (k < 0 && a === 0)
      return "".concat(b, "L").concat(t, ",").concat(r, "Z");
    b += ye(bp || (bp = xr(["L", ",", `
      A`, ",", ",0,0,", ",", ",", `
      A`, ",", ",0,", ",", ",", ",", `
      A`, ",", ",0,0,", ",", ",", "Z"])), S.x, S.y, a, a, +(l < 0), x.x, x.y, n, n, +(k > 180), +(l > 0), w.x, w.y, a, a, +(l < 0), _.x, _.y);
  } else
    b += ye(wp || (wp = xr(["L", ",", "Z"])), t, r);
  return b;
}, X_ = {
  cx: 0,
  cy: 0,
  innerRadius: 0,
  outerRadius: 0,
  startAngle: 0,
  endAngle: 0,
  cornerRadius: 0,
  forceCornerRadius: !1,
  cornerIsExternal: !1
}, Ey = (e) => {
  var t = wt(e, X_), {
    cx: r,
    cy: n,
    innerRadius: i,
    outerRadius: a,
    cornerRadius: o,
    forceCornerRadius: u,
    cornerIsExternal: s,
    startAngle: c,
    endAngle: l,
    className: f
  } = t;
  if (a < i || c === l)
    return null;
  var d = Oe("recharts-sector", f), p = a - i, v = ot(o, p, 0, !0), h;
  return v > 0 && Math.abs(c - l) < 360 ? h = G_({
    cx: r,
    cy: n,
    innerRadius: i,
    outerRadius: a,
    cornerRadius: Math.min(v, p / 2),
    forceCornerRadius: u,
    cornerIsExternal: s,
    startAngle: c,
    endAngle: l
  }) : h = _y({
    cx: r,
    cy: n,
    innerRadius: i,
    outerRadius: a,
    startAngle: c,
    endAngle: l
  }), /* @__PURE__ */ P.createElement("path", Es({}, mt(t), {
    className: d,
    d: h
  }));
};
function Z_(e, t, r) {
  if (e === "horizontal")
    return [{
      x: t.x,
      y: r.top
    }, {
      x: t.x,
      y: r.top + r.height
    }];
  if (e === "vertical")
    return [{
      x: r.left,
      y: t.y
    }, {
      x: r.left + r.width,
      y: t.y
    }];
  if (em(t)) {
    if (e === "centric") {
      var {
        cx: n,
        cy: i,
        innerRadius: a,
        outerRadius: o,
        angle: u
      } = t, s = Ae(n, i, a, u), c = Ae(n, i, o, u);
      return [{
        x: s.x,
        y: s.y
      }, {
        x: c.x,
        y: c.y
      }];
    }
    return Py(t);
  }
}
var xu = {}, Pu = {}, _u = {}, Op;
function J_() {
  return Op || (Op = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ hm();
    function r(n) {
      return t.isSymbol(n) ? NaN : Number(n);
    }
    e.toNumber = r;
  })(_u)), _u;
}
var xp;
function Q_() {
  return xp || (xp = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ J_();
    function r(n) {
      return n ? (n = t.toNumber(n), n === 1 / 0 || n === -1 / 0 ? (n < 0 ? -1 : 1) * Number.MAX_VALUE : n === n ? n : 0) : n === 0 ? n : 0;
    }
    e.toFinite = r;
  })(Pu)), Pu;
}
var Pp;
function eE() {
  return Pp || (Pp = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ vm(), r = /* @__PURE__ */ Q_();
    function n(i, a, o) {
      o && typeof o != "number" && t.isIterateeCall(i, a, o) && (a = o = void 0), i = r.toFinite(i), a === void 0 ? (a = i, i = 0) : a = r.toFinite(a), o = o === void 0 ? i < a ? 1 : -1 : r.toFinite(o);
      const u = Math.max(Math.ceil((a - i) / (o || 1)), 0), s = new Array(u);
      for (let c = 0; c < u; c++)
        s[c] = i, i += o;
      return s;
    }
    e.range = n;
  })(xu)), xu;
}
var Eu, _p;
function tE() {
  return _p || (_p = 1, Eu = eE().range), Eu;
}
var rE = /* @__PURE__ */ tE();
const Sy = /* @__PURE__ */ cr(rE);
function ir(e, t) {
  return e == null || t == null ? NaN : e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function nE(e, t) {
  return e == null || t == null ? NaN : t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function yl(e) {
  let t, r, n;
  e.length !== 2 ? (t = ir, r = (u, s) => ir(e(u), s), n = (u, s) => e(u) - s) : (t = e === ir || e === nE ? e : iE, r = e, n = e);
  function i(u, s, c = 0, l = u.length) {
    if (c < l) {
      if (t(s, s) !== 0) return l;
      do {
        const f = c + l >>> 1;
        r(u[f], s) < 0 ? c = f + 1 : l = f;
      } while (c < l);
    }
    return c;
  }
  function a(u, s, c = 0, l = u.length) {
    if (c < l) {
      if (t(s, s) !== 0) return l;
      do {
        const f = c + l >>> 1;
        r(u[f], s) <= 0 ? c = f + 1 : l = f;
      } while (c < l);
    }
    return c;
  }
  function o(u, s, c = 0, l = u.length) {
    const f = i(u, s, c, l - 1);
    return f > c && n(u[f - 1], s) > -n(u[f], s) ? f - 1 : f;
  }
  return { left: i, center: o, right: a };
}
function iE() {
  return 0;
}
function Ay(e) {
  return e === null ? NaN : +e;
}
function* aE(e, t) {
  for (let r of e)
    r != null && (r = +r) >= r && (yield r);
}
const oE = yl(ir), Zn = oE.right;
yl(Ay).center;
class Ep extends Map {
  constructor(t, r = lE) {
    if (super(), Object.defineProperties(this, { _intern: { value: /* @__PURE__ */ new Map() }, _key: { value: r } }), t != null) for (const [n, i] of t) this.set(n, i);
  }
  get(t) {
    return super.get(Sp(this, t));
  }
  has(t) {
    return super.has(Sp(this, t));
  }
  set(t, r) {
    return super.set(uE(this, t), r);
  }
  delete(t) {
    return super.delete(sE(this, t));
  }
}
function Sp({ _intern: e, _key: t }, r) {
  const n = t(r);
  return e.has(n) ? e.get(n) : r;
}
function uE({ _intern: e, _key: t }, r) {
  const n = t(r);
  return e.has(n) ? e.get(n) : (e.set(n, r), r);
}
function sE({ _intern: e, _key: t }, r) {
  const n = t(r);
  return e.has(n) && (r = e.get(n), e.delete(n)), r;
}
function lE(e) {
  return e !== null && typeof e == "object" ? e.valueOf() : e;
}
function cE(e = ir) {
  if (e === ir) return Ty;
  if (typeof e != "function") throw new TypeError("compare is not a function");
  return (t, r) => {
    const n = e(t, r);
    return n || n === 0 ? n : (e(r, r) === 0) - (e(t, t) === 0);
  };
}
function Ty(e, t) {
  return (e == null || !(e >= e)) - (t == null || !(t >= t)) || (e < t ? -1 : e > t ? 1 : 0);
}
const fE = Math.sqrt(50), dE = Math.sqrt(10), pE = Math.sqrt(2);
function oa(e, t, r) {
  const n = (t - e) / Math.max(0, r), i = Math.floor(Math.log10(n)), a = n / Math.pow(10, i), o = a >= fE ? 10 : a >= dE ? 5 : a >= pE ? 2 : 1;
  let u, s, c;
  return i < 0 ? (c = Math.pow(10, -i) / o, u = Math.round(e * c), s = Math.round(t * c), u / c < e && ++u, s / c > t && --s, c = -c) : (c = Math.pow(10, i) * o, u = Math.round(e / c), s = Math.round(t / c), u * c < e && ++u, s * c > t && --s), s < u && 0.5 <= r && r < 2 ? oa(e, t, r * 2) : [u, s, c];
}
function Ss(e, t, r) {
  if (t = +t, e = +e, r = +r, !(r > 0)) return [];
  if (e === t) return [e];
  const n = t < e, [i, a, o] = n ? oa(t, e, r) : oa(e, t, r);
  if (!(a >= i)) return [];
  const u = a - i + 1, s = new Array(u);
  if (n)
    if (o < 0) for (let c = 0; c < u; ++c) s[c] = (a - c) / -o;
    else for (let c = 0; c < u; ++c) s[c] = (a - c) * o;
  else if (o < 0) for (let c = 0; c < u; ++c) s[c] = (i + c) / -o;
  else for (let c = 0; c < u; ++c) s[c] = (i + c) * o;
  return s;
}
function As(e, t, r) {
  return t = +t, e = +e, r = +r, oa(e, t, r)[2];
}
function Ts(e, t, r) {
  t = +t, e = +e, r = +r;
  const n = t < e, i = n ? As(t, e, r) : As(e, t, r);
  return (n ? -1 : 1) * (i < 0 ? 1 / -i : i);
}
function Ap(e, t) {
  let r;
  for (const n of e)
    n != null && (r < n || r === void 0 && n >= n) && (r = n);
  return r;
}
function Tp(e, t) {
  let r;
  for (const n of e)
    n != null && (r > n || r === void 0 && n >= n) && (r = n);
  return r;
}
function jy(e, t, r = 0, n = 1 / 0, i) {
  if (t = Math.floor(t), r = Math.floor(Math.max(0, r)), n = Math.floor(Math.min(e.length - 1, n)), !(r <= t && t <= n)) return e;
  for (i = i === void 0 ? Ty : cE(i); n > r; ) {
    if (n - r > 600) {
      const s = n - r + 1, c = t - r + 1, l = Math.log(s), f = 0.5 * Math.exp(2 * l / 3), d = 0.5 * Math.sqrt(l * f * (s - f) / s) * (c - s / 2 < 0 ? -1 : 1), p = Math.max(r, Math.floor(t - c * f / s + d)), v = Math.min(n, Math.floor(t + (s - c) * f / s + d));
      jy(e, t, p, v, i);
    }
    const a = e[t];
    let o = r, u = n;
    for (bn(e, r, t), i(e[n], a) > 0 && bn(e, r, n); o < u; ) {
      for (bn(e, o, u), ++o, --u; i(e[o], a) < 0; ) ++o;
      for (; i(e[u], a) > 0; ) --u;
    }
    i(e[r], a) === 0 ? bn(e, r, u) : (++u, bn(e, u, n)), u <= t && (r = u + 1), t <= u && (n = u - 1);
  }
  return e;
}
function bn(e, t, r) {
  const n = e[t];
  e[t] = e[r], e[r] = n;
}
function hE(e, t, r) {
  if (e = Float64Array.from(aE(e)), !(!(n = e.length) || isNaN(t = +t))) {
    if (t <= 0 || n < 2) return Tp(e);
    if (t >= 1) return Ap(e);
    var n, i = (n - 1) * t, a = Math.floor(i), o = Ap(jy(e, a).subarray(0, a + 1)), u = Tp(e.subarray(a + 1));
    return o + (u - o) * (i - a);
  }
}
function vE(e, t, r = Ay) {
  if (!(!(n = e.length) || isNaN(t = +t))) {
    if (t <= 0 || n < 2) return +r(e[0], 0, e);
    if (t >= 1) return +r(e[n - 1], n - 1, e);
    var n, i = (n - 1) * t, a = Math.floor(i), o = +r(e[a], a, e), u = +r(e[a + 1], a + 1, e);
    return o + (u - o) * (i - a);
  }
}
function mE(e, t, r) {
  e = +e, t = +t, r = (i = arguments.length) < 2 ? (t = e, e = 0, 1) : i < 3 ? 1 : +r;
  for (var n = -1, i = Math.max(0, Math.ceil((t - e) / r)) | 0, a = new Array(i); ++n < i; )
    a[n] = e + n * r;
  return a;
}
function Ot(e, t) {
  switch (arguments.length) {
    case 0:
      break;
    case 1:
      this.range(e);
      break;
    default:
      this.range(t).domain(e);
      break;
  }
  return this;
}
function Zt(e, t) {
  switch (arguments.length) {
    case 0:
      break;
    case 1: {
      typeof e == "function" ? this.interpolator(e) : this.range(e);
      break;
    }
    default: {
      this.domain(e), typeof t == "function" ? this.interpolator(t) : this.range(t);
      break;
    }
  }
  return this;
}
const js = /* @__PURE__ */ Symbol("implicit");
function gl() {
  var e = new Ep(), t = [], r = [], n = js;
  function i(a) {
    let o = e.get(a);
    if (o === void 0) {
      if (n !== js) return n;
      e.set(a, o = t.push(a) - 1);
    }
    return r[o % r.length];
  }
  return i.domain = function(a) {
    if (!arguments.length) return t.slice();
    t = [], e = new Ep();
    for (const o of a)
      e.has(o) || e.set(o, t.push(o) - 1);
    return i;
  }, i.range = function(a) {
    return arguments.length ? (r = Array.from(a), i) : r.slice();
  }, i.unknown = function(a) {
    return arguments.length ? (n = a, i) : n;
  }, i.copy = function() {
    return gl(t, r).unknown(n);
  }, Ot.apply(i, arguments), i;
}
function bl() {
  var e = gl().unknown(void 0), t = e.domain, r = e.range, n = 0, i = 1, a, o, u = !1, s = 0, c = 0, l = 0.5;
  delete e.unknown;
  function f() {
    var d = t().length, p = i < n, v = p ? i : n, h = p ? n : i;
    a = (h - v) / Math.max(1, d - s + c * 2), u && (a = Math.floor(a)), v += (h - v - a * (d - s)) * l, o = a * (1 - s), u && (v = Math.round(v), o = Math.round(o));
    var m = mE(d).map(function(y) {
      return v + a * y;
    });
    return r(p ? m.reverse() : m);
  }
  return e.domain = function(d) {
    return arguments.length ? (t(d), f()) : t();
  }, e.range = function(d) {
    return arguments.length ? ([n, i] = d, n = +n, i = +i, f()) : [n, i];
  }, e.rangeRound = function(d) {
    return [n, i] = d, n = +n, i = +i, u = !0, f();
  }, e.bandwidth = function() {
    return o;
  }, e.step = function() {
    return a;
  }, e.round = function(d) {
    return arguments.length ? (u = !!d, f()) : u;
  }, e.padding = function(d) {
    return arguments.length ? (s = Math.min(1, c = +d), f()) : s;
  }, e.paddingInner = function(d) {
    return arguments.length ? (s = Math.min(1, d), f()) : s;
  }, e.paddingOuter = function(d) {
    return arguments.length ? (c = +d, f()) : c;
  }, e.align = function(d) {
    return arguments.length ? (l = Math.max(0, Math.min(1, d)), f()) : l;
  }, e.copy = function() {
    return bl(t(), [n, i]).round(u).paddingInner(s).paddingOuter(c).align(l);
  }, Ot.apply(f(), arguments);
}
function Cy(e) {
  var t = e.copy;
  return e.padding = e.paddingOuter, delete e.paddingInner, delete e.paddingOuter, e.copy = function() {
    return Cy(t());
  }, e;
}
function yE() {
  return Cy(bl.apply(null, arguments).paddingInner(1));
}
function wl(e, t, r) {
  e.prototype = t.prototype = r, r.constructor = e;
}
function My(e, t) {
  var r = Object.create(e.prototype);
  for (var n in t) r[n] = t[n];
  return r;
}
function Jn() {
}
var kn = 0.7, ua = 1 / kn, Hr = "\\s*([+-]?\\d+)\\s*", Rn = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", Nt = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", gE = /^#([0-9a-f]{3,8})$/, bE = new RegExp(`^rgb\\(${Hr},${Hr},${Hr}\\)$`), wE = new RegExp(`^rgb\\(${Nt},${Nt},${Nt}\\)$`), OE = new RegExp(`^rgba\\(${Hr},${Hr},${Hr},${Rn}\\)$`), xE = new RegExp(`^rgba\\(${Nt},${Nt},${Nt},${Rn}\\)$`), PE = new RegExp(`^hsl\\(${Rn},${Nt},${Nt}\\)$`), _E = new RegExp(`^hsla\\(${Rn},${Nt},${Nt},${Rn}\\)$`), jp = {
  aliceblue: 15792383,
  antiquewhite: 16444375,
  aqua: 65535,
  aquamarine: 8388564,
  azure: 15794175,
  beige: 16119260,
  bisque: 16770244,
  black: 0,
  blanchedalmond: 16772045,
  blue: 255,
  blueviolet: 9055202,
  brown: 10824234,
  burlywood: 14596231,
  cadetblue: 6266528,
  chartreuse: 8388352,
  chocolate: 13789470,
  coral: 16744272,
  cornflowerblue: 6591981,
  cornsilk: 16775388,
  crimson: 14423100,
  cyan: 65535,
  darkblue: 139,
  darkcyan: 35723,
  darkgoldenrod: 12092939,
  darkgray: 11119017,
  darkgreen: 25600,
  darkgrey: 11119017,
  darkkhaki: 12433259,
  darkmagenta: 9109643,
  darkolivegreen: 5597999,
  darkorange: 16747520,
  darkorchid: 10040012,
  darkred: 9109504,
  darksalmon: 15308410,
  darkseagreen: 9419919,
  darkslateblue: 4734347,
  darkslategray: 3100495,
  darkslategrey: 3100495,
  darkturquoise: 52945,
  darkviolet: 9699539,
  deeppink: 16716947,
  deepskyblue: 49151,
  dimgray: 6908265,
  dimgrey: 6908265,
  dodgerblue: 2003199,
  firebrick: 11674146,
  floralwhite: 16775920,
  forestgreen: 2263842,
  fuchsia: 16711935,
  gainsboro: 14474460,
  ghostwhite: 16316671,
  gold: 16766720,
  goldenrod: 14329120,
  gray: 8421504,
  green: 32768,
  greenyellow: 11403055,
  grey: 8421504,
  honeydew: 15794160,
  hotpink: 16738740,
  indianred: 13458524,
  indigo: 4915330,
  ivory: 16777200,
  khaki: 15787660,
  lavender: 15132410,
  lavenderblush: 16773365,
  lawngreen: 8190976,
  lemonchiffon: 16775885,
  lightblue: 11393254,
  lightcoral: 15761536,
  lightcyan: 14745599,
  lightgoldenrodyellow: 16448210,
  lightgray: 13882323,
  lightgreen: 9498256,
  lightgrey: 13882323,
  lightpink: 16758465,
  lightsalmon: 16752762,
  lightseagreen: 2142890,
  lightskyblue: 8900346,
  lightslategray: 7833753,
  lightslategrey: 7833753,
  lightsteelblue: 11584734,
  lightyellow: 16777184,
  lime: 65280,
  limegreen: 3329330,
  linen: 16445670,
  magenta: 16711935,
  maroon: 8388608,
  mediumaquamarine: 6737322,
  mediumblue: 205,
  mediumorchid: 12211667,
  mediumpurple: 9662683,
  mediumseagreen: 3978097,
  mediumslateblue: 8087790,
  mediumspringgreen: 64154,
  mediumturquoise: 4772300,
  mediumvioletred: 13047173,
  midnightblue: 1644912,
  mintcream: 16121850,
  mistyrose: 16770273,
  moccasin: 16770229,
  navajowhite: 16768685,
  navy: 128,
  oldlace: 16643558,
  olive: 8421376,
  olivedrab: 7048739,
  orange: 16753920,
  orangered: 16729344,
  orchid: 14315734,
  palegoldenrod: 15657130,
  palegreen: 10025880,
  paleturquoise: 11529966,
  palevioletred: 14381203,
  papayawhip: 16773077,
  peachpuff: 16767673,
  peru: 13468991,
  pink: 16761035,
  plum: 14524637,
  powderblue: 11591910,
  purple: 8388736,
  rebeccapurple: 6697881,
  red: 16711680,
  rosybrown: 12357519,
  royalblue: 4286945,
  saddlebrown: 9127187,
  salmon: 16416882,
  sandybrown: 16032864,
  seagreen: 3050327,
  seashell: 16774638,
  sienna: 10506797,
  silver: 12632256,
  skyblue: 8900331,
  slateblue: 6970061,
  slategray: 7372944,
  slategrey: 7372944,
  snow: 16775930,
  springgreen: 65407,
  steelblue: 4620980,
  tan: 13808780,
  teal: 32896,
  thistle: 14204888,
  tomato: 16737095,
  turquoise: 4251856,
  violet: 15631086,
  wheat: 16113331,
  white: 16777215,
  whitesmoke: 16119285,
  yellow: 16776960,
  yellowgreen: 10145074
};
wl(Jn, $n, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: Cp,
  // Deprecated! Use color.formatHex.
  formatHex: Cp,
  formatHex8: EE,
  formatHsl: SE,
  formatRgb: Mp,
  toString: Mp
});
function Cp() {
  return this.rgb().formatHex();
}
function EE() {
  return this.rgb().formatHex8();
}
function SE() {
  return Dy(this).formatHsl();
}
function Mp() {
  return this.rgb().formatRgb();
}
function $n(e) {
  var t, r;
  return e = (e + "").trim().toLowerCase(), (t = gE.exec(e)) ? (r = t[1].length, t = parseInt(t[1], 16), r === 6 ? Dp(t) : r === 3 ? new Qe(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : r === 8 ? Si(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : r === 4 ? Si(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = bE.exec(e)) ? new Qe(t[1], t[2], t[3], 1) : (t = wE.exec(e)) ? new Qe(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = OE.exec(e)) ? Si(t[1], t[2], t[3], t[4]) : (t = xE.exec(e)) ? Si(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = PE.exec(e)) ? kp(t[1], t[2] / 100, t[3] / 100, 1) : (t = _E.exec(e)) ? kp(t[1], t[2] / 100, t[3] / 100, t[4]) : jp.hasOwnProperty(e) ? Dp(jp[e]) : e === "transparent" ? new Qe(NaN, NaN, NaN, 0) : null;
}
function Dp(e) {
  return new Qe(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function Si(e, t, r, n) {
  return n <= 0 && (e = t = r = NaN), new Qe(e, t, r, n);
}
function AE(e) {
  return e instanceof Jn || (e = $n(e)), e ? (e = e.rgb(), new Qe(e.r, e.g, e.b, e.opacity)) : new Qe();
}
function Cs(e, t, r, n) {
  return arguments.length === 1 ? AE(e) : new Qe(e, t, r, n ?? 1);
}
function Qe(e, t, r, n) {
  this.r = +e, this.g = +t, this.b = +r, this.opacity = +n;
}
wl(Qe, Cs, My(Jn, {
  brighter(e) {
    return e = e == null ? ua : Math.pow(ua, e), new Qe(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? kn : Math.pow(kn, e), new Qe(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new Qe(Ar(this.r), Ar(this.g), Ar(this.b), sa(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: Ip,
  // Deprecated! Use color.formatHex.
  formatHex: Ip,
  formatHex8: TE,
  formatRgb: Np,
  toString: Np
}));
function Ip() {
  return `#${Pr(this.r)}${Pr(this.g)}${Pr(this.b)}`;
}
function TE() {
  return `#${Pr(this.r)}${Pr(this.g)}${Pr(this.b)}${Pr((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function Np() {
  const e = sa(this.opacity);
  return `${e === 1 ? "rgb(" : "rgba("}${Ar(this.r)}, ${Ar(this.g)}, ${Ar(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function sa(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function Ar(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function Pr(e) {
  return e = Ar(e), (e < 16 ? "0" : "") + e.toString(16);
}
function kp(e, t, r, n) {
  return n <= 0 ? e = t = r = NaN : r <= 0 || r >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new _t(e, t, r, n);
}
function Dy(e) {
  if (e instanceof _t) return new _t(e.h, e.s, e.l, e.opacity);
  if (e instanceof Jn || (e = $n(e)), !e) return new _t();
  if (e instanceof _t) return e;
  e = e.rgb();
  var t = e.r / 255, r = e.g / 255, n = e.b / 255, i = Math.min(t, r, n), a = Math.max(t, r, n), o = NaN, u = a - i, s = (a + i) / 2;
  return u ? (t === a ? o = (r - n) / u + (r < n) * 6 : r === a ? o = (n - t) / u + 2 : o = (t - r) / u + 4, u /= s < 0.5 ? a + i : 2 - a - i, o *= 60) : u = s > 0 && s < 1 ? 0 : o, new _t(o, u, s, e.opacity);
}
function jE(e, t, r, n) {
  return arguments.length === 1 ? Dy(e) : new _t(e, t, r, n ?? 1);
}
function _t(e, t, r, n) {
  this.h = +e, this.s = +t, this.l = +r, this.opacity = +n;
}
wl(_t, jE, My(Jn, {
  brighter(e) {
    return e = e == null ? ua : Math.pow(ua, e), new _t(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? kn : Math.pow(kn, e), new _t(this.h, this.s, this.l * e, this.opacity);
  },
  rgb() {
    var e = this.h % 360 + (this.h < 0) * 360, t = isNaN(e) || isNaN(this.s) ? 0 : this.s, r = this.l, n = r + (r < 0.5 ? r : 1 - r) * t, i = 2 * r - n;
    return new Qe(
      Su(e >= 240 ? e - 240 : e + 120, i, n),
      Su(e, i, n),
      Su(e < 120 ? e + 240 : e - 120, i, n),
      this.opacity
    );
  },
  clamp() {
    return new _t(Rp(this.h), Ai(this.s), Ai(this.l), sa(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const e = sa(this.opacity);
    return `${e === 1 ? "hsl(" : "hsla("}${Rp(this.h)}, ${Ai(this.s) * 100}%, ${Ai(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
  }
}));
function Rp(e) {
  return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function Ai(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function Su(e, t, r) {
  return (e < 60 ? t + (r - t) * e / 60 : e < 180 ? r : e < 240 ? t + (r - t) * (240 - e) / 60 : t) * 255;
}
const Ol = (e) => () => e;
function CE(e, t) {
  return function(r) {
    return e + r * t;
  };
}
function ME(e, t, r) {
  return e = Math.pow(e, r), t = Math.pow(t, r) - e, r = 1 / r, function(n) {
    return Math.pow(e + n * t, r);
  };
}
function DE(e) {
  return (e = +e) == 1 ? Iy : function(t, r) {
    return r - t ? ME(t, r, e) : Ol(isNaN(t) ? r : t);
  };
}
function Iy(e, t) {
  var r = t - e;
  return r ? CE(e, r) : Ol(isNaN(e) ? t : e);
}
const $p = (function e(t) {
  var r = DE(t);
  function n(i, a) {
    var o = r((i = Cs(i)).r, (a = Cs(a)).r), u = r(i.g, a.g), s = r(i.b, a.b), c = Iy(i.opacity, a.opacity);
    return function(l) {
      return i.r = o(l), i.g = u(l), i.b = s(l), i.opacity = c(l), i + "";
    };
  }
  return n.gamma = e, n;
})(1);
function IE(e, t) {
  t || (t = []);
  var r = e ? Math.min(t.length, e.length) : 0, n = t.slice(), i;
  return function(a) {
    for (i = 0; i < r; ++i) n[i] = e[i] * (1 - a) + t[i] * a;
    return n;
  };
}
function NE(e) {
  return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function kE(e, t) {
  var r = t ? t.length : 0, n = e ? Math.min(r, e.length) : 0, i = new Array(n), a = new Array(r), o;
  for (o = 0; o < n; ++o) i[o] = nn(e[o], t[o]);
  for (; o < r; ++o) a[o] = t[o];
  return function(u) {
    for (o = 0; o < n; ++o) a[o] = i[o](u);
    return a;
  };
}
function RE(e, t) {
  var r = /* @__PURE__ */ new Date();
  return e = +e, t = +t, function(n) {
    return r.setTime(e * (1 - n) + t * n), r;
  };
}
function la(e, t) {
  return e = +e, t = +t, function(r) {
    return e * (1 - r) + t * r;
  };
}
function $E(e, t) {
  var r = {}, n = {}, i;
  (e === null || typeof e != "object") && (e = {}), (t === null || typeof t != "object") && (t = {});
  for (i in t)
    i in e ? r[i] = nn(e[i], t[i]) : n[i] = t[i];
  return function(a) {
    for (i in r) n[i] = r[i](a);
    return n;
  };
}
var Ms = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, Au = new RegExp(Ms.source, "g");
function LE(e) {
  return function() {
    return e;
  };
}
function FE(e) {
  return function(t) {
    return e(t) + "";
  };
}
function zE(e, t) {
  var r = Ms.lastIndex = Au.lastIndex = 0, n, i, a, o = -1, u = [], s = [];
  for (e = e + "", t = t + ""; (n = Ms.exec(e)) && (i = Au.exec(t)); )
    (a = i.index) > r && (a = t.slice(r, a), u[o] ? u[o] += a : u[++o] = a), (n = n[0]) === (i = i[0]) ? u[o] ? u[o] += i : u[++o] = i : (u[++o] = null, s.push({ i: o, x: la(n, i) })), r = Au.lastIndex;
  return r < t.length && (a = t.slice(r), u[o] ? u[o] += a : u[++o] = a), u.length < 2 ? s[0] ? FE(s[0].x) : LE(t) : (t = s.length, function(c) {
    for (var l = 0, f; l < t; ++l) u[(f = s[l]).i] = f.x(c);
    return u.join("");
  });
}
function nn(e, t) {
  var r = typeof t, n;
  return t == null || r === "boolean" ? Ol(t) : (r === "number" ? la : r === "string" ? (n = $n(t)) ? (t = n, $p) : zE : t instanceof $n ? $p : t instanceof Date ? RE : NE(t) ? IE : Array.isArray(t) ? kE : typeof t.valueOf != "function" && typeof t.toString != "function" || isNaN(t) ? $E : la)(e, t);
}
function xl(e, t) {
  return e = +e, t = +t, function(r) {
    return Math.round(e * (1 - r) + t * r);
  };
}
function qE(e, t) {
  t === void 0 && (t = e, e = nn);
  for (var r = 0, n = t.length - 1, i = t[0], a = new Array(n < 0 ? 0 : n); r < n; ) a[r] = e(i, i = t[++r]);
  return function(o) {
    var u = Math.max(0, Math.min(n - 1, Math.floor(o *= n)));
    return a[u](o - u);
  };
}
function BE(e) {
  return function() {
    return e;
  };
}
function ca(e) {
  return +e;
}
var Lp = [0, 1];
function Ye(e) {
  return e;
}
function Ds(e, t) {
  return (t -= e = +e) ? function(r) {
    return (r - e) / t;
  } : BE(isNaN(t) ? NaN : 0.5);
}
function UE(e, t) {
  var r;
  return e > t && (r = e, e = t, t = r), function(n) {
    return Math.max(e, Math.min(t, n));
  };
}
function WE(e, t, r) {
  var n = e[0], i = e[1], a = t[0], o = t[1];
  return i < n ? (n = Ds(i, n), a = r(o, a)) : (n = Ds(n, i), a = r(a, o)), function(u) {
    return a(n(u));
  };
}
function VE(e, t, r) {
  var n = Math.min(e.length, t.length) - 1, i = new Array(n), a = new Array(n), o = -1;
  for (e[n] < e[0] && (e = e.slice().reverse(), t = t.slice().reverse()); ++o < n; )
    i[o] = Ds(e[o], e[o + 1]), a[o] = r(t[o], t[o + 1]);
  return function(u) {
    var s = Zn(e, u, 1, n) - 1;
    return a[s](i[s](u));
  };
}
function Qn(e, t) {
  return t.domain(e.domain()).range(e.range()).interpolate(e.interpolate()).clamp(e.clamp()).unknown(e.unknown());
}
function Ka() {
  var e = Lp, t = Lp, r = nn, n, i, a, o = Ye, u, s, c;
  function l() {
    var d = Math.min(e.length, t.length);
    return o !== Ye && (o = UE(e[0], e[d - 1])), u = d > 2 ? VE : WE, s = c = null, f;
  }
  function f(d) {
    return d == null || isNaN(d = +d) ? a : (s || (s = u(e.map(n), t, r)))(n(o(d)));
  }
  return f.invert = function(d) {
    return o(i((c || (c = u(t, e.map(n), la)))(d)));
  }, f.domain = function(d) {
    return arguments.length ? (e = Array.from(d, ca), l()) : e.slice();
  }, f.range = function(d) {
    return arguments.length ? (t = Array.from(d), l()) : t.slice();
  }, f.rangeRound = function(d) {
    return t = Array.from(d), r = xl, l();
  }, f.clamp = function(d) {
    return arguments.length ? (o = d ? !0 : Ye, l()) : o !== Ye;
  }, f.interpolate = function(d) {
    return arguments.length ? (r = d, l()) : r;
  }, f.unknown = function(d) {
    return arguments.length ? (a = d, f) : a;
  }, function(d, p) {
    return n = d, i = p, l();
  };
}
function Pl() {
  return Ka()(Ye, Ye);
}
function KE(e) {
  return Math.abs(e = Math.round(e)) >= 1e21 ? e.toLocaleString("en").replace(/,/g, "") : e.toString(10);
}
function fa(e, t) {
  if ((r = (e = t ? e.toExponential(t - 1) : e.toExponential()).indexOf("e")) < 0) return null;
  var r, n = e.slice(0, r);
  return [
    n.length > 1 ? n[0] + n.slice(2) : n,
    +e.slice(r + 1)
  ];
}
function en(e) {
  return e = fa(Math.abs(e)), e ? e[1] : NaN;
}
function HE(e, t) {
  return function(r, n) {
    for (var i = r.length, a = [], o = 0, u = e[0], s = 0; i > 0 && u > 0 && (s + u + 1 > n && (u = Math.max(1, n - s)), a.push(r.substring(i -= u, i + u)), !((s += u + 1) > n)); )
      u = e[o = (o + 1) % e.length];
    return a.reverse().join(t);
  };
}
function YE(e) {
  return function(t) {
    return t.replace(/[0-9]/g, function(r) {
      return e[+r];
    });
  };
}
var GE = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function Ln(e) {
  if (!(t = GE.exec(e))) throw new Error("invalid format: " + e);
  var t;
  return new _l({
    fill: t[1],
    align: t[2],
    sign: t[3],
    symbol: t[4],
    zero: t[5],
    width: t[6],
    comma: t[7],
    precision: t[8] && t[8].slice(1),
    trim: t[9],
    type: t[10]
  });
}
Ln.prototype = _l.prototype;
function _l(e) {
  this.fill = e.fill === void 0 ? " " : e.fill + "", this.align = e.align === void 0 ? ">" : e.align + "", this.sign = e.sign === void 0 ? "-" : e.sign + "", this.symbol = e.symbol === void 0 ? "" : e.symbol + "", this.zero = !!e.zero, this.width = e.width === void 0 ? void 0 : +e.width, this.comma = !!e.comma, this.precision = e.precision === void 0 ? void 0 : +e.precision, this.trim = !!e.trim, this.type = e.type === void 0 ? "" : e.type + "";
}
_l.prototype.toString = function() {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
function XE(e) {
  e: for (var t = e.length, r = 1, n = -1, i; r < t; ++r)
    switch (e[r]) {
      case ".":
        n = i = r;
        break;
      case "0":
        n === 0 && (n = r), i = r;
        break;
      default:
        if (!+e[r]) break e;
        n > 0 && (n = 0);
        break;
    }
  return n > 0 ? e.slice(0, n) + e.slice(i + 1) : e;
}
var Ny;
function ZE(e, t) {
  var r = fa(e, t);
  if (!r) return e + "";
  var n = r[0], i = r[1], a = i - (Ny = Math.max(-8, Math.min(8, Math.floor(i / 3))) * 3) + 1, o = n.length;
  return a === o ? n : a > o ? n + new Array(a - o + 1).join("0") : a > 0 ? n.slice(0, a) + "." + n.slice(a) : "0." + new Array(1 - a).join("0") + fa(e, Math.max(0, t + a - 1))[0];
}
function Fp(e, t) {
  var r = fa(e, t);
  if (!r) return e + "";
  var n = r[0], i = r[1];
  return i < 0 ? "0." + new Array(-i).join("0") + n : n.length > i + 1 ? n.slice(0, i + 1) + "." + n.slice(i + 1) : n + new Array(i - n.length + 2).join("0");
}
const zp = {
  "%": (e, t) => (e * 100).toFixed(t),
  b: (e) => Math.round(e).toString(2),
  c: (e) => e + "",
  d: KE,
  e: (e, t) => e.toExponential(t),
  f: (e, t) => e.toFixed(t),
  g: (e, t) => e.toPrecision(t),
  o: (e) => Math.round(e).toString(8),
  p: (e, t) => Fp(e * 100, t),
  r: Fp,
  s: ZE,
  X: (e) => Math.round(e).toString(16).toUpperCase(),
  x: (e) => Math.round(e).toString(16)
};
function qp(e) {
  return e;
}
var Bp = Array.prototype.map, Up = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function JE(e) {
  var t = e.grouping === void 0 || e.thousands === void 0 ? qp : HE(Bp.call(e.grouping, Number), e.thousands + ""), r = e.currency === void 0 ? "" : e.currency[0] + "", n = e.currency === void 0 ? "" : e.currency[1] + "", i = e.decimal === void 0 ? "." : e.decimal + "", a = e.numerals === void 0 ? qp : YE(Bp.call(e.numerals, String)), o = e.percent === void 0 ? "%" : e.percent + "", u = e.minus === void 0 ? "−" : e.minus + "", s = e.nan === void 0 ? "NaN" : e.nan + "";
  function c(f) {
    f = Ln(f);
    var d = f.fill, p = f.align, v = f.sign, h = f.symbol, m = f.zero, y = f.width, b = f.comma, w = f.precision, _ = f.trim, O = f.type;
    O === "n" ? (b = !0, O = "g") : zp[O] || (w === void 0 && (w = 12), _ = !0, O = "g"), (m || d === "0" && p === "=") && (m = !0, d = "0", p = "=");
    var x = h === "$" ? r : h === "#" && /[boxX]/.test(O) ? "0" + O.toLowerCase() : "", S = h === "$" ? n : /[%p]/.test(O) ? o : "", D = zp[O], k = /[defgprs%]/.test(O);
    w = w === void 0 ? 6 : /[gprs]/.test(O) ? Math.max(1, Math.min(21, w)) : Math.max(0, Math.min(20, w));
    function $(j) {
      var A = x, N = S, L, W, K;
      if (O === "c")
        N = D(j) + N, j = "";
      else {
        j = +j;
        var V = j < 0 || 1 / j < 0;
        if (j = isNaN(j) ? s : D(Math.abs(j), w), _ && (j = XE(j)), V && +j == 0 && v !== "+" && (V = !1), A = (V ? v === "(" ? v : u : v === "-" || v === "(" ? "" : v) + A, N = (O === "s" ? Up[8 + Ny / 3] : "") + N + (V && v === "(" ? ")" : ""), k) {
          for (L = -1, W = j.length; ++L < W; )
            if (K = j.charCodeAt(L), 48 > K || K > 57) {
              N = (K === 46 ? i + j.slice(L + 1) : j.slice(L)) + N, j = j.slice(0, L);
              break;
            }
        }
      }
      b && !m && (j = t(j, 1 / 0));
      var te = A.length + j.length + N.length, X = te < y ? new Array(y - te + 1).join(d) : "";
      switch (b && m && (j = t(X + j, X.length ? y - N.length : 1 / 0), X = ""), p) {
        case "<":
          j = A + j + N + X;
          break;
        case "=":
          j = A + X + j + N;
          break;
        case "^":
          j = X.slice(0, te = X.length >> 1) + A + j + N + X.slice(te);
          break;
        default:
          j = X + A + j + N;
          break;
      }
      return a(j);
    }
    return $.toString = function() {
      return f + "";
    }, $;
  }
  function l(f, d) {
    var p = c((f = Ln(f), f.type = "f", f)), v = Math.max(-8, Math.min(8, Math.floor(en(d) / 3))) * 3, h = Math.pow(10, -v), m = Up[8 + v / 3];
    return function(y) {
      return p(h * y) + m;
    };
  }
  return {
    format: c,
    formatPrefix: l
  };
}
var Ti, El, ky;
QE({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});
function QE(e) {
  return Ti = JE(e), El = Ti.format, ky = Ti.formatPrefix, Ti;
}
function eS(e) {
  return Math.max(0, -en(Math.abs(e)));
}
function tS(e, t) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(en(t) / 3))) * 3 - en(Math.abs(e)));
}
function rS(e, t) {
  return e = Math.abs(e), t = Math.abs(t) - e, Math.max(0, en(t) - en(e)) + 1;
}
function Ry(e, t, r, n) {
  var i = Ts(e, t, r), a;
  switch (n = Ln(n ?? ",f"), n.type) {
    case "s": {
      var o = Math.max(Math.abs(e), Math.abs(t));
      return n.precision == null && !isNaN(a = tS(i, o)) && (n.precision = a), ky(n, o);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      n.precision == null && !isNaN(a = rS(i, Math.max(Math.abs(e), Math.abs(t)))) && (n.precision = a - (n.type === "e"));
      break;
    }
    case "f":
    case "%": {
      n.precision == null && !isNaN(a = eS(i)) && (n.precision = a - (n.type === "%") * 2);
      break;
    }
  }
  return El(n);
}
function dr(e) {
  var t = e.domain;
  return e.ticks = function(r) {
    var n = t();
    return Ss(n[0], n[n.length - 1], r ?? 10);
  }, e.tickFormat = function(r, n) {
    var i = t();
    return Ry(i[0], i[i.length - 1], r ?? 10, n);
  }, e.nice = function(r) {
    r == null && (r = 10);
    var n = t(), i = 0, a = n.length - 1, o = n[i], u = n[a], s, c, l = 10;
    for (u < o && (c = o, o = u, u = c, c = i, i = a, a = c); l-- > 0; ) {
      if (c = As(o, u, r), c === s)
        return n[i] = o, n[a] = u, t(n);
      if (c > 0)
        o = Math.floor(o / c) * c, u = Math.ceil(u / c) * c;
      else if (c < 0)
        o = Math.ceil(o * c) / c, u = Math.floor(u * c) / c;
      else
        break;
      s = c;
    }
    return e;
  }, e;
}
function $y() {
  var e = Pl();
  return e.copy = function() {
    return Qn(e, $y());
  }, Ot.apply(e, arguments), dr(e);
}
function Ly(e) {
  var t;
  function r(n) {
    return n == null || isNaN(n = +n) ? t : n;
  }
  return r.invert = r, r.domain = r.range = function(n) {
    return arguments.length ? (e = Array.from(n, ca), r) : e.slice();
  }, r.unknown = function(n) {
    return arguments.length ? (t = n, r) : t;
  }, r.copy = function() {
    return Ly(e).unknown(t);
  }, e = arguments.length ? Array.from(e, ca) : [0, 1], dr(r);
}
function Fy(e, t) {
  e = e.slice();
  var r = 0, n = e.length - 1, i = e[r], a = e[n], o;
  return a < i && (o = r, r = n, n = o, o = i, i = a, a = o), e[r] = t.floor(i), e[n] = t.ceil(a), e;
}
function Wp(e) {
  return Math.log(e);
}
function Vp(e) {
  return Math.exp(e);
}
function nS(e) {
  return -Math.log(-e);
}
function iS(e) {
  return -Math.exp(-e);
}
function aS(e) {
  return isFinite(e) ? +("1e" + e) : e < 0 ? 0 : e;
}
function oS(e) {
  return e === 10 ? aS : e === Math.E ? Math.exp : (t) => Math.pow(e, t);
}
function uS(e) {
  return e === Math.E ? Math.log : e === 10 && Math.log10 || e === 2 && Math.log2 || (e = Math.log(e), (t) => Math.log(t) / e);
}
function Kp(e) {
  return (t, r) => -e(-t, r);
}
function Sl(e) {
  const t = e(Wp, Vp), r = t.domain;
  let n = 10, i, a;
  function o() {
    return i = uS(n), a = oS(n), r()[0] < 0 ? (i = Kp(i), a = Kp(a), e(nS, iS)) : e(Wp, Vp), t;
  }
  return t.base = function(u) {
    return arguments.length ? (n = +u, o()) : n;
  }, t.domain = function(u) {
    return arguments.length ? (r(u), o()) : r();
  }, t.ticks = (u) => {
    const s = r();
    let c = s[0], l = s[s.length - 1];
    const f = l < c;
    f && ([c, l] = [l, c]);
    let d = i(c), p = i(l), v, h;
    const m = u == null ? 10 : +u;
    let y = [];
    if (!(n % 1) && p - d < m) {
      if (d = Math.floor(d), p = Math.ceil(p), c > 0) {
        for (; d <= p; ++d)
          for (v = 1; v < n; ++v)
            if (h = d < 0 ? v / a(-d) : v * a(d), !(h < c)) {
              if (h > l) break;
              y.push(h);
            }
      } else for (; d <= p; ++d)
        for (v = n - 1; v >= 1; --v)
          if (h = d > 0 ? v / a(-d) : v * a(d), !(h < c)) {
            if (h > l) break;
            y.push(h);
          }
      y.length * 2 < m && (y = Ss(c, l, m));
    } else
      y = Ss(d, p, Math.min(p - d, m)).map(a);
    return f ? y.reverse() : y;
  }, t.tickFormat = (u, s) => {
    if (u == null && (u = 10), s == null && (s = n === 10 ? "s" : ","), typeof s != "function" && (!(n % 1) && (s = Ln(s)).precision == null && (s.trim = !0), s = El(s)), u === 1 / 0) return s;
    const c = Math.max(1, n * u / t.ticks().length);
    return (l) => {
      let f = l / a(Math.round(i(l)));
      return f * n < n - 0.5 && (f *= n), f <= c ? s(l) : "";
    };
  }, t.nice = () => r(Fy(r(), {
    floor: (u) => a(Math.floor(i(u))),
    ceil: (u) => a(Math.ceil(i(u)))
  })), t;
}
function zy() {
  const e = Sl(Ka()).domain([1, 10]);
  return e.copy = () => Qn(e, zy()).base(e.base()), Ot.apply(e, arguments), e;
}
function Hp(e) {
  return function(t) {
    return Math.sign(t) * Math.log1p(Math.abs(t / e));
  };
}
function Yp(e) {
  return function(t) {
    return Math.sign(t) * Math.expm1(Math.abs(t)) * e;
  };
}
function Al(e) {
  var t = 1, r = e(Hp(t), Yp(t));
  return r.constant = function(n) {
    return arguments.length ? e(Hp(t = +n), Yp(t)) : t;
  }, dr(r);
}
function qy() {
  var e = Al(Ka());
  return e.copy = function() {
    return Qn(e, qy()).constant(e.constant());
  }, Ot.apply(e, arguments);
}
function Gp(e) {
  return function(t) {
    return t < 0 ? -Math.pow(-t, e) : Math.pow(t, e);
  };
}
function sS(e) {
  return e < 0 ? -Math.sqrt(-e) : Math.sqrt(e);
}
function lS(e) {
  return e < 0 ? -e * e : e * e;
}
function Tl(e) {
  var t = e(Ye, Ye), r = 1;
  function n() {
    return r === 1 ? e(Ye, Ye) : r === 0.5 ? e(sS, lS) : e(Gp(r), Gp(1 / r));
  }
  return t.exponent = function(i) {
    return arguments.length ? (r = +i, n()) : r;
  }, dr(t);
}
function jl() {
  var e = Tl(Ka());
  return e.copy = function() {
    return Qn(e, jl()).exponent(e.exponent());
  }, Ot.apply(e, arguments), e;
}
function cS() {
  return jl.apply(null, arguments).exponent(0.5);
}
function Xp(e) {
  return Math.sign(e) * e * e;
}
function fS(e) {
  return Math.sign(e) * Math.sqrt(Math.abs(e));
}
function By() {
  var e = Pl(), t = [0, 1], r = !1, n;
  function i(a) {
    var o = fS(e(a));
    return isNaN(o) ? n : r ? Math.round(o) : o;
  }
  return i.invert = function(a) {
    return e.invert(Xp(a));
  }, i.domain = function(a) {
    return arguments.length ? (e.domain(a), i) : e.domain();
  }, i.range = function(a) {
    return arguments.length ? (e.range((t = Array.from(a, ca)).map(Xp)), i) : t.slice();
  }, i.rangeRound = function(a) {
    return i.range(a).round(!0);
  }, i.round = function(a) {
    return arguments.length ? (r = !!a, i) : r;
  }, i.clamp = function(a) {
    return arguments.length ? (e.clamp(a), i) : e.clamp();
  }, i.unknown = function(a) {
    return arguments.length ? (n = a, i) : n;
  }, i.copy = function() {
    return By(e.domain(), t).round(r).clamp(e.clamp()).unknown(n);
  }, Ot.apply(i, arguments), dr(i);
}
function Uy() {
  var e = [], t = [], r = [], n;
  function i() {
    var o = 0, u = Math.max(1, t.length);
    for (r = new Array(u - 1); ++o < u; ) r[o - 1] = vE(e, o / u);
    return a;
  }
  function a(o) {
    return o == null || isNaN(o = +o) ? n : t[Zn(r, o)];
  }
  return a.invertExtent = function(o) {
    var u = t.indexOf(o);
    return u < 0 ? [NaN, NaN] : [
      u > 0 ? r[u - 1] : e[0],
      u < r.length ? r[u] : e[e.length - 1]
    ];
  }, a.domain = function(o) {
    if (!arguments.length) return e.slice();
    e = [];
    for (let u of o) u != null && !isNaN(u = +u) && e.push(u);
    return e.sort(ir), i();
  }, a.range = function(o) {
    return arguments.length ? (t = Array.from(o), i()) : t.slice();
  }, a.unknown = function(o) {
    return arguments.length ? (n = o, a) : n;
  }, a.quantiles = function() {
    return r.slice();
  }, a.copy = function() {
    return Uy().domain(e).range(t).unknown(n);
  }, Ot.apply(a, arguments);
}
function Wy() {
  var e = 0, t = 1, r = 1, n = [0.5], i = [0, 1], a;
  function o(s) {
    return s != null && s <= s ? i[Zn(n, s, 0, r)] : a;
  }
  function u() {
    var s = -1;
    for (n = new Array(r); ++s < r; ) n[s] = ((s + 1) * t - (s - r) * e) / (r + 1);
    return o;
  }
  return o.domain = function(s) {
    return arguments.length ? ([e, t] = s, e = +e, t = +t, u()) : [e, t];
  }, o.range = function(s) {
    return arguments.length ? (r = (i = Array.from(s)).length - 1, u()) : i.slice();
  }, o.invertExtent = function(s) {
    var c = i.indexOf(s);
    return c < 0 ? [NaN, NaN] : c < 1 ? [e, n[0]] : c >= r ? [n[r - 1], t] : [n[c - 1], n[c]];
  }, o.unknown = function(s) {
    return arguments.length && (a = s), o;
  }, o.thresholds = function() {
    return n.slice();
  }, o.copy = function() {
    return Wy().domain([e, t]).range(i).unknown(a);
  }, Ot.apply(dr(o), arguments);
}
function Vy() {
  var e = [0.5], t = [0, 1], r, n = 1;
  function i(a) {
    return a != null && a <= a ? t[Zn(e, a, 0, n)] : r;
  }
  return i.domain = function(a) {
    return arguments.length ? (e = Array.from(a), n = Math.min(e.length, t.length - 1), i) : e.slice();
  }, i.range = function(a) {
    return arguments.length ? (t = Array.from(a), n = Math.min(e.length, t.length - 1), i) : t.slice();
  }, i.invertExtent = function(a) {
    var o = t.indexOf(a);
    return [e[o - 1], e[o]];
  }, i.unknown = function(a) {
    return arguments.length ? (r = a, i) : r;
  }, i.copy = function() {
    return Vy().domain(e).range(t).unknown(r);
  }, Ot.apply(i, arguments);
}
const Tu = /* @__PURE__ */ new Date(), ju = /* @__PURE__ */ new Date();
function Ne(e, t, r, n) {
  function i(a) {
    return e(a = arguments.length === 0 ? /* @__PURE__ */ new Date() : /* @__PURE__ */ new Date(+a)), a;
  }
  return i.floor = (a) => (e(a = /* @__PURE__ */ new Date(+a)), a), i.ceil = (a) => (e(a = new Date(a - 1)), t(a, 1), e(a), a), i.round = (a) => {
    const o = i(a), u = i.ceil(a);
    return a - o < u - a ? o : u;
  }, i.offset = (a, o) => (t(a = /* @__PURE__ */ new Date(+a), o == null ? 1 : Math.floor(o)), a), i.range = (a, o, u) => {
    const s = [];
    if (a = i.ceil(a), u = u == null ? 1 : Math.floor(u), !(a < o) || !(u > 0)) return s;
    let c;
    do
      s.push(c = /* @__PURE__ */ new Date(+a)), t(a, u), e(a);
    while (c < a && a < o);
    return s;
  }, i.filter = (a) => Ne((o) => {
    if (o >= o) for (; e(o), !a(o); ) o.setTime(o - 1);
  }, (o, u) => {
    if (o >= o)
      if (u < 0) for (; ++u <= 0; )
        for (; t(o, -1), !a(o); )
          ;
      else for (; --u >= 0; )
        for (; t(o, 1), !a(o); )
          ;
  }), r && (i.count = (a, o) => (Tu.setTime(+a), ju.setTime(+o), e(Tu), e(ju), Math.floor(r(Tu, ju))), i.every = (a) => (a = Math.floor(a), !isFinite(a) || !(a > 0) ? null : a > 1 ? i.filter(n ? (o) => n(o) % a === 0 : (o) => i.count(0, o) % a === 0) : i)), i;
}
const da = Ne(() => {
}, (e, t) => {
  e.setTime(+e + t);
}, (e, t) => t - e);
da.every = (e) => (e = Math.floor(e), !isFinite(e) || !(e > 0) ? null : e > 1 ? Ne((t) => {
  t.setTime(Math.floor(t / e) * e);
}, (t, r) => {
  t.setTime(+t + r * e);
}, (t, r) => (r - t) / e) : da);
da.range;
const Lt = 1e3, vt = Lt * 60, Ft = vt * 60, Vt = Ft * 24, Cl = Vt * 7, Zp = Vt * 30, Cu = Vt * 365, _r = Ne((e) => {
  e.setTime(e - e.getMilliseconds());
}, (e, t) => {
  e.setTime(+e + t * Lt);
}, (e, t) => (t - e) / Lt, (e) => e.getUTCSeconds());
_r.range;
const Ml = Ne((e) => {
  e.setTime(e - e.getMilliseconds() - e.getSeconds() * Lt);
}, (e, t) => {
  e.setTime(+e + t * vt);
}, (e, t) => (t - e) / vt, (e) => e.getMinutes());
Ml.range;
const Dl = Ne((e) => {
  e.setUTCSeconds(0, 0);
}, (e, t) => {
  e.setTime(+e + t * vt);
}, (e, t) => (t - e) / vt, (e) => e.getUTCMinutes());
Dl.range;
const Il = Ne((e) => {
  e.setTime(e - e.getMilliseconds() - e.getSeconds() * Lt - e.getMinutes() * vt);
}, (e, t) => {
  e.setTime(+e + t * Ft);
}, (e, t) => (t - e) / Ft, (e) => e.getHours());
Il.range;
const Nl = Ne((e) => {
  e.setUTCMinutes(0, 0, 0);
}, (e, t) => {
  e.setTime(+e + t * Ft);
}, (e, t) => (t - e) / Ft, (e) => e.getUTCHours());
Nl.range;
const ei = Ne(
  (e) => e.setHours(0, 0, 0, 0),
  (e, t) => e.setDate(e.getDate() + t),
  (e, t) => (t - e - (t.getTimezoneOffset() - e.getTimezoneOffset()) * vt) / Vt,
  (e) => e.getDate() - 1
);
ei.range;
const Ha = Ne((e) => {
  e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCDate(e.getUTCDate() + t);
}, (e, t) => (t - e) / Vt, (e) => e.getUTCDate() - 1);
Ha.range;
const Ky = Ne((e) => {
  e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCDate(e.getUTCDate() + t);
}, (e, t) => (t - e) / Vt, (e) => Math.floor(e / Vt));
Ky.range;
function $r(e) {
  return Ne((t) => {
    t.setDate(t.getDate() - (t.getDay() + 7 - e) % 7), t.setHours(0, 0, 0, 0);
  }, (t, r) => {
    t.setDate(t.getDate() + r * 7);
  }, (t, r) => (r - t - (r.getTimezoneOffset() - t.getTimezoneOffset()) * vt) / Cl);
}
const Ya = $r(0), pa = $r(1), dS = $r(2), pS = $r(3), tn = $r(4), hS = $r(5), vS = $r(6);
Ya.range;
pa.range;
dS.range;
pS.range;
tn.range;
hS.range;
vS.range;
function Lr(e) {
  return Ne((t) => {
    t.setUTCDate(t.getUTCDate() - (t.getUTCDay() + 7 - e) % 7), t.setUTCHours(0, 0, 0, 0);
  }, (t, r) => {
    t.setUTCDate(t.getUTCDate() + r * 7);
  }, (t, r) => (r - t) / Cl);
}
const Ga = Lr(0), ha = Lr(1), mS = Lr(2), yS = Lr(3), rn = Lr(4), gS = Lr(5), bS = Lr(6);
Ga.range;
ha.range;
mS.range;
yS.range;
rn.range;
gS.range;
bS.range;
const kl = Ne((e) => {
  e.setDate(1), e.setHours(0, 0, 0, 0);
}, (e, t) => {
  e.setMonth(e.getMonth() + t);
}, (e, t) => t.getMonth() - e.getMonth() + (t.getFullYear() - e.getFullYear()) * 12, (e) => e.getMonth());
kl.range;
const Rl = Ne((e) => {
  e.setUTCDate(1), e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCMonth(e.getUTCMonth() + t);
}, (e, t) => t.getUTCMonth() - e.getUTCMonth() + (t.getUTCFullYear() - e.getUTCFullYear()) * 12, (e) => e.getUTCMonth());
Rl.range;
const Kt = Ne((e) => {
  e.setMonth(0, 1), e.setHours(0, 0, 0, 0);
}, (e, t) => {
  e.setFullYear(e.getFullYear() + t);
}, (e, t) => t.getFullYear() - e.getFullYear(), (e) => e.getFullYear());
Kt.every = (e) => !isFinite(e = Math.floor(e)) || !(e > 0) ? null : Ne((t) => {
  t.setFullYear(Math.floor(t.getFullYear() / e) * e), t.setMonth(0, 1), t.setHours(0, 0, 0, 0);
}, (t, r) => {
  t.setFullYear(t.getFullYear() + r * e);
});
Kt.range;
const Ht = Ne((e) => {
  e.setUTCMonth(0, 1), e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCFullYear(e.getUTCFullYear() + t);
}, (e, t) => t.getUTCFullYear() - e.getUTCFullYear(), (e) => e.getUTCFullYear());
Ht.every = (e) => !isFinite(e = Math.floor(e)) || !(e > 0) ? null : Ne((t) => {
  t.setUTCFullYear(Math.floor(t.getUTCFullYear() / e) * e), t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
}, (t, r) => {
  t.setUTCFullYear(t.getUTCFullYear() + r * e);
});
Ht.range;
function Hy(e, t, r, n, i, a) {
  const o = [
    [_r, 1, Lt],
    [_r, 5, 5 * Lt],
    [_r, 15, 15 * Lt],
    [_r, 30, 30 * Lt],
    [a, 1, vt],
    [a, 5, 5 * vt],
    [a, 15, 15 * vt],
    [a, 30, 30 * vt],
    [i, 1, Ft],
    [i, 3, 3 * Ft],
    [i, 6, 6 * Ft],
    [i, 12, 12 * Ft],
    [n, 1, Vt],
    [n, 2, 2 * Vt],
    [r, 1, Cl],
    [t, 1, Zp],
    [t, 3, 3 * Zp],
    [e, 1, Cu]
  ];
  function u(c, l, f) {
    const d = l < c;
    d && ([c, l] = [l, c]);
    const p = f && typeof f.range == "function" ? f : s(c, l, f), v = p ? p.range(c, +l + 1) : [];
    return d ? v.reverse() : v;
  }
  function s(c, l, f) {
    const d = Math.abs(l - c) / f, p = yl(([, , m]) => m).right(o, d);
    if (p === o.length) return e.every(Ts(c / Cu, l / Cu, f));
    if (p === 0) return da.every(Math.max(Ts(c, l, f), 1));
    const [v, h] = o[d / o[p - 1][2] < o[p][2] / d ? p - 1 : p];
    return v.every(h);
  }
  return [u, s];
}
const [wS, OS] = Hy(Ht, Rl, Ga, Ky, Nl, Dl), [xS, PS] = Hy(Kt, kl, Ya, ei, Il, Ml);
function Mu(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(-1, e.m, e.d, e.H, e.M, e.S, e.L);
    return t.setFullYear(e.y), t;
  }
  return new Date(e.y, e.m, e.d, e.H, e.M, e.S, e.L);
}
function Du(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(Date.UTC(-1, e.m, e.d, e.H, e.M, e.S, e.L));
    return t.setUTCFullYear(e.y), t;
  }
  return new Date(Date.UTC(e.y, e.m, e.d, e.H, e.M, e.S, e.L));
}
function wn(e, t, r) {
  return { y: e, m: t, d: r, H: 0, M: 0, S: 0, L: 0 };
}
function _S(e) {
  var t = e.dateTime, r = e.date, n = e.time, i = e.periods, a = e.days, o = e.shortDays, u = e.months, s = e.shortMonths, c = On(i), l = xn(i), f = On(a), d = xn(a), p = On(o), v = xn(o), h = On(u), m = xn(u), y = On(s), b = xn(s), w = {
    a: V,
    A: te,
    b: X,
    B: Pe,
    c: null,
    d: nh,
    e: nh,
    f: HS,
    g: nA,
    G: aA,
    H: WS,
    I: VS,
    j: KS,
    L: Yy,
    m: YS,
    M: GS,
    p: qe,
    q: pe,
    Q: oh,
    s: uh,
    S: XS,
    u: ZS,
    U: JS,
    V: QS,
    w: eA,
    W: tA,
    x: null,
    X: null,
    y: rA,
    Y: iA,
    Z: oA,
    "%": ah
  }, _ = {
    a: Be,
    A: Ue,
    b: xt,
    B: lt,
    c: null,
    d: ih,
    e: ih,
    f: cA,
    g: wA,
    G: xA,
    H: uA,
    I: sA,
    j: lA,
    L: Xy,
    m: fA,
    M: dA,
    p: _e,
    q: Ct,
    Q: oh,
    s: uh,
    S: pA,
    u: hA,
    U: vA,
    V: mA,
    w: yA,
    W: gA,
    x: null,
    X: null,
    y: bA,
    Y: OA,
    Z: PA,
    "%": ah
  }, O = {
    a: $,
    A: j,
    b: A,
    B: N,
    c: L,
    d: th,
    e: th,
    f: zS,
    g: eh,
    G: Qp,
    H: rh,
    I: rh,
    j: RS,
    L: FS,
    m: kS,
    M: $S,
    p: k,
    q: NS,
    Q: BS,
    s: US,
    S: LS,
    u: jS,
    U: CS,
    V: MS,
    w: TS,
    W: DS,
    x: W,
    X: K,
    y: eh,
    Y: Qp,
    Z: IS,
    "%": qS
  };
  w.x = x(r, w), w.X = x(n, w), w.c = x(t, w), _.x = x(r, _), _.X = x(n, _), _.c = x(t, _);
  function x(T, B) {
    return function(H) {
      var M = [], Ke = -1, re = 0, $e = T.length, Ce, Mt, pn;
      for (H instanceof Date || (H = /* @__PURE__ */ new Date(+H)); ++Ke < $e; )
        T.charCodeAt(Ke) === 37 && (M.push(T.slice(re, Ke)), (Mt = Jp[Ce = T.charAt(++Ke)]) != null ? Ce = T.charAt(++Ke) : Mt = Ce === "e" ? " " : "0", (pn = B[Ce]) && (Ce = pn(H, Mt)), M.push(Ce), re = Ke + 1);
      return M.push(T.slice(re, Ke)), M.join("");
    };
  }
  function S(T, B) {
    return function(H) {
      var M = wn(1900, void 0, 1), Ke = D(M, T, H += "", 0), re, $e;
      if (Ke != H.length) return null;
      if ("Q" in M) return new Date(M.Q);
      if ("s" in M) return new Date(M.s * 1e3 + ("L" in M ? M.L : 0));
      if (B && !("Z" in M) && (M.Z = 0), "p" in M && (M.H = M.H % 12 + M.p * 12), M.m === void 0 && (M.m = "q" in M ? M.q : 0), "V" in M) {
        if (M.V < 1 || M.V > 53) return null;
        "w" in M || (M.w = 1), "Z" in M ? (re = Du(wn(M.y, 0, 1)), $e = re.getUTCDay(), re = $e > 4 || $e === 0 ? ha.ceil(re) : ha(re), re = Ha.offset(re, (M.V - 1) * 7), M.y = re.getUTCFullYear(), M.m = re.getUTCMonth(), M.d = re.getUTCDate() + (M.w + 6) % 7) : (re = Mu(wn(M.y, 0, 1)), $e = re.getDay(), re = $e > 4 || $e === 0 ? pa.ceil(re) : pa(re), re = ei.offset(re, (M.V - 1) * 7), M.y = re.getFullYear(), M.m = re.getMonth(), M.d = re.getDate() + (M.w + 6) % 7);
      } else ("W" in M || "U" in M) && ("w" in M || (M.w = "u" in M ? M.u % 7 : "W" in M ? 1 : 0), $e = "Z" in M ? Du(wn(M.y, 0, 1)).getUTCDay() : Mu(wn(M.y, 0, 1)).getDay(), M.m = 0, M.d = "W" in M ? (M.w + 6) % 7 + M.W * 7 - ($e + 5) % 7 : M.w + M.U * 7 - ($e + 6) % 7);
      return "Z" in M ? (M.H += M.Z / 100 | 0, M.M += M.Z % 100, Du(M)) : Mu(M);
    };
  }
  function D(T, B, H, M) {
    for (var Ke = 0, re = B.length, $e = H.length, Ce, Mt; Ke < re; ) {
      if (M >= $e) return -1;
      if (Ce = B.charCodeAt(Ke++), Ce === 37) {
        if (Ce = B.charAt(Ke++), Mt = O[Ce in Jp ? B.charAt(Ke++) : Ce], !Mt || (M = Mt(T, H, M)) < 0) return -1;
      } else if (Ce != H.charCodeAt(M++))
        return -1;
    }
    return M;
  }
  function k(T, B, H) {
    var M = c.exec(B.slice(H));
    return M ? (T.p = l.get(M[0].toLowerCase()), H + M[0].length) : -1;
  }
  function $(T, B, H) {
    var M = p.exec(B.slice(H));
    return M ? (T.w = v.get(M[0].toLowerCase()), H + M[0].length) : -1;
  }
  function j(T, B, H) {
    var M = f.exec(B.slice(H));
    return M ? (T.w = d.get(M[0].toLowerCase()), H + M[0].length) : -1;
  }
  function A(T, B, H) {
    var M = y.exec(B.slice(H));
    return M ? (T.m = b.get(M[0].toLowerCase()), H + M[0].length) : -1;
  }
  function N(T, B, H) {
    var M = h.exec(B.slice(H));
    return M ? (T.m = m.get(M[0].toLowerCase()), H + M[0].length) : -1;
  }
  function L(T, B, H) {
    return D(T, t, B, H);
  }
  function W(T, B, H) {
    return D(T, r, B, H);
  }
  function K(T, B, H) {
    return D(T, n, B, H);
  }
  function V(T) {
    return o[T.getDay()];
  }
  function te(T) {
    return a[T.getDay()];
  }
  function X(T) {
    return s[T.getMonth()];
  }
  function Pe(T) {
    return u[T.getMonth()];
  }
  function qe(T) {
    return i[+(T.getHours() >= 12)];
  }
  function pe(T) {
    return 1 + ~~(T.getMonth() / 3);
  }
  function Be(T) {
    return o[T.getUTCDay()];
  }
  function Ue(T) {
    return a[T.getUTCDay()];
  }
  function xt(T) {
    return s[T.getUTCMonth()];
  }
  function lt(T) {
    return u[T.getUTCMonth()];
  }
  function _e(T) {
    return i[+(T.getUTCHours() >= 12)];
  }
  function Ct(T) {
    return 1 + ~~(T.getUTCMonth() / 3);
  }
  return {
    format: function(T) {
      var B = x(T += "", w);
      return B.toString = function() {
        return T;
      }, B;
    },
    parse: function(T) {
      var B = S(T += "", !1);
      return B.toString = function() {
        return T;
      }, B;
    },
    utcFormat: function(T) {
      var B = x(T += "", _);
      return B.toString = function() {
        return T;
      }, B;
    },
    utcParse: function(T) {
      var B = S(T += "", !0);
      return B.toString = function() {
        return T;
      }, B;
    }
  };
}
var Jp = { "-": "", _: " ", 0: "0" }, ze = /^\s*\d+/, ES = /^%/, SS = /[\\^$*+?|[\]().{}]/g;
function Z(e, t, r) {
  var n = e < 0 ? "-" : "", i = (n ? -e : e) + "", a = i.length;
  return n + (a < r ? new Array(r - a + 1).join(t) + i : i);
}
function AS(e) {
  return e.replace(SS, "\\$&");
}
function On(e) {
  return new RegExp("^(?:" + e.map(AS).join("|") + ")", "i");
}
function xn(e) {
  return new Map(e.map((t, r) => [t.toLowerCase(), r]));
}
function TS(e, t, r) {
  var n = ze.exec(t.slice(r, r + 1));
  return n ? (e.w = +n[0], r + n[0].length) : -1;
}
function jS(e, t, r) {
  var n = ze.exec(t.slice(r, r + 1));
  return n ? (e.u = +n[0], r + n[0].length) : -1;
}
function CS(e, t, r) {
  var n = ze.exec(t.slice(r, r + 2));
  return n ? (e.U = +n[0], r + n[0].length) : -1;
}
function MS(e, t, r) {
  var n = ze.exec(t.slice(r, r + 2));
  return n ? (e.V = +n[0], r + n[0].length) : -1;
}
function DS(e, t, r) {
  var n = ze.exec(t.slice(r, r + 2));
  return n ? (e.W = +n[0], r + n[0].length) : -1;
}
function Qp(e, t, r) {
  var n = ze.exec(t.slice(r, r + 4));
  return n ? (e.y = +n[0], r + n[0].length) : -1;
}
function eh(e, t, r) {
  var n = ze.exec(t.slice(r, r + 2));
  return n ? (e.y = +n[0] + (+n[0] > 68 ? 1900 : 2e3), r + n[0].length) : -1;
}
function IS(e, t, r) {
  var n = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(t.slice(r, r + 6));
  return n ? (e.Z = n[1] ? 0 : -(n[2] + (n[3] || "00")), r + n[0].length) : -1;
}
function NS(e, t, r) {
  var n = ze.exec(t.slice(r, r + 1));
  return n ? (e.q = n[0] * 3 - 3, r + n[0].length) : -1;
}
function kS(e, t, r) {
  var n = ze.exec(t.slice(r, r + 2));
  return n ? (e.m = n[0] - 1, r + n[0].length) : -1;
}
function th(e, t, r) {
  var n = ze.exec(t.slice(r, r + 2));
  return n ? (e.d = +n[0], r + n[0].length) : -1;
}
function RS(e, t, r) {
  var n = ze.exec(t.slice(r, r + 3));
  return n ? (e.m = 0, e.d = +n[0], r + n[0].length) : -1;
}
function rh(e, t, r) {
  var n = ze.exec(t.slice(r, r + 2));
  return n ? (e.H = +n[0], r + n[0].length) : -1;
}
function $S(e, t, r) {
  var n = ze.exec(t.slice(r, r + 2));
  return n ? (e.M = +n[0], r + n[0].length) : -1;
}
function LS(e, t, r) {
  var n = ze.exec(t.slice(r, r + 2));
  return n ? (e.S = +n[0], r + n[0].length) : -1;
}
function FS(e, t, r) {
  var n = ze.exec(t.slice(r, r + 3));
  return n ? (e.L = +n[0], r + n[0].length) : -1;
}
function zS(e, t, r) {
  var n = ze.exec(t.slice(r, r + 6));
  return n ? (e.L = Math.floor(n[0] / 1e3), r + n[0].length) : -1;
}
function qS(e, t, r) {
  var n = ES.exec(t.slice(r, r + 1));
  return n ? r + n[0].length : -1;
}
function BS(e, t, r) {
  var n = ze.exec(t.slice(r));
  return n ? (e.Q = +n[0], r + n[0].length) : -1;
}
function US(e, t, r) {
  var n = ze.exec(t.slice(r));
  return n ? (e.s = +n[0], r + n[0].length) : -1;
}
function nh(e, t) {
  return Z(e.getDate(), t, 2);
}
function WS(e, t) {
  return Z(e.getHours(), t, 2);
}
function VS(e, t) {
  return Z(e.getHours() % 12 || 12, t, 2);
}
function KS(e, t) {
  return Z(1 + ei.count(Kt(e), e), t, 3);
}
function Yy(e, t) {
  return Z(e.getMilliseconds(), t, 3);
}
function HS(e, t) {
  return Yy(e, t) + "000";
}
function YS(e, t) {
  return Z(e.getMonth() + 1, t, 2);
}
function GS(e, t) {
  return Z(e.getMinutes(), t, 2);
}
function XS(e, t) {
  return Z(e.getSeconds(), t, 2);
}
function ZS(e) {
  var t = e.getDay();
  return t === 0 ? 7 : t;
}
function JS(e, t) {
  return Z(Ya.count(Kt(e) - 1, e), t, 2);
}
function Gy(e) {
  var t = e.getDay();
  return t >= 4 || t === 0 ? tn(e) : tn.ceil(e);
}
function QS(e, t) {
  return e = Gy(e), Z(tn.count(Kt(e), e) + (Kt(e).getDay() === 4), t, 2);
}
function eA(e) {
  return e.getDay();
}
function tA(e, t) {
  return Z(pa.count(Kt(e) - 1, e), t, 2);
}
function rA(e, t) {
  return Z(e.getFullYear() % 100, t, 2);
}
function nA(e, t) {
  return e = Gy(e), Z(e.getFullYear() % 100, t, 2);
}
function iA(e, t) {
  return Z(e.getFullYear() % 1e4, t, 4);
}
function aA(e, t) {
  var r = e.getDay();
  return e = r >= 4 || r === 0 ? tn(e) : tn.ceil(e), Z(e.getFullYear() % 1e4, t, 4);
}
function oA(e) {
  var t = e.getTimezoneOffset();
  return (t > 0 ? "-" : (t *= -1, "+")) + Z(t / 60 | 0, "0", 2) + Z(t % 60, "0", 2);
}
function ih(e, t) {
  return Z(e.getUTCDate(), t, 2);
}
function uA(e, t) {
  return Z(e.getUTCHours(), t, 2);
}
function sA(e, t) {
  return Z(e.getUTCHours() % 12 || 12, t, 2);
}
function lA(e, t) {
  return Z(1 + Ha.count(Ht(e), e), t, 3);
}
function Xy(e, t) {
  return Z(e.getUTCMilliseconds(), t, 3);
}
function cA(e, t) {
  return Xy(e, t) + "000";
}
function fA(e, t) {
  return Z(e.getUTCMonth() + 1, t, 2);
}
function dA(e, t) {
  return Z(e.getUTCMinutes(), t, 2);
}
function pA(e, t) {
  return Z(e.getUTCSeconds(), t, 2);
}
function hA(e) {
  var t = e.getUTCDay();
  return t === 0 ? 7 : t;
}
function vA(e, t) {
  return Z(Ga.count(Ht(e) - 1, e), t, 2);
}
function Zy(e) {
  var t = e.getUTCDay();
  return t >= 4 || t === 0 ? rn(e) : rn.ceil(e);
}
function mA(e, t) {
  return e = Zy(e), Z(rn.count(Ht(e), e) + (Ht(e).getUTCDay() === 4), t, 2);
}
function yA(e) {
  return e.getUTCDay();
}
function gA(e, t) {
  return Z(ha.count(Ht(e) - 1, e), t, 2);
}
function bA(e, t) {
  return Z(e.getUTCFullYear() % 100, t, 2);
}
function wA(e, t) {
  return e = Zy(e), Z(e.getUTCFullYear() % 100, t, 2);
}
function OA(e, t) {
  return Z(e.getUTCFullYear() % 1e4, t, 4);
}
function xA(e, t) {
  var r = e.getUTCDay();
  return e = r >= 4 || r === 0 ? rn(e) : rn.ceil(e), Z(e.getUTCFullYear() % 1e4, t, 4);
}
function PA() {
  return "+0000";
}
function ah() {
  return "%";
}
function oh(e) {
  return +e;
}
function uh(e) {
  return Math.floor(+e / 1e3);
}
var qr, Jy, Qy;
_A({
  dateTime: "%x, %X",
  date: "%-m/%-d/%Y",
  time: "%-I:%M:%S %p",
  periods: ["AM", "PM"],
  days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
});
function _A(e) {
  return qr = _S(e), Jy = qr.format, qr.parse, Qy = qr.utcFormat, qr.utcParse, qr;
}
function EA(e) {
  return new Date(e);
}
function SA(e) {
  return e instanceof Date ? +e : +/* @__PURE__ */ new Date(+e);
}
function $l(e, t, r, n, i, a, o, u, s, c) {
  var l = Pl(), f = l.invert, d = l.domain, p = c(".%L"), v = c(":%S"), h = c("%I:%M"), m = c("%I %p"), y = c("%a %d"), b = c("%b %d"), w = c("%B"), _ = c("%Y");
  function O(x) {
    return (s(x) < x ? p : u(x) < x ? v : o(x) < x ? h : a(x) < x ? m : n(x) < x ? i(x) < x ? y : b : r(x) < x ? w : _)(x);
  }
  return l.invert = function(x) {
    return new Date(f(x));
  }, l.domain = function(x) {
    return arguments.length ? d(Array.from(x, SA)) : d().map(EA);
  }, l.ticks = function(x) {
    var S = d();
    return e(S[0], S[S.length - 1], x ?? 10);
  }, l.tickFormat = function(x, S) {
    return S == null ? O : c(S);
  }, l.nice = function(x) {
    var S = d();
    return (!x || typeof x.range != "function") && (x = t(S[0], S[S.length - 1], x ?? 10)), x ? d(Fy(S, x)) : l;
  }, l.copy = function() {
    return Qn(l, $l(e, t, r, n, i, a, o, u, s, c));
  }, l;
}
function AA() {
  return Ot.apply($l(xS, PS, Kt, kl, Ya, ei, Il, Ml, _r, Jy).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments);
}
function TA() {
  return Ot.apply($l(wS, OS, Ht, Rl, Ga, Ha, Nl, Dl, _r, Qy).domain([Date.UTC(2e3, 0, 1), Date.UTC(2e3, 0, 2)]), arguments);
}
function Xa() {
  var e = 0, t = 1, r, n, i, a, o = Ye, u = !1, s;
  function c(f) {
    return f == null || isNaN(f = +f) ? s : o(i === 0 ? 0.5 : (f = (a(f) - r) * i, u ? Math.max(0, Math.min(1, f)) : f));
  }
  c.domain = function(f) {
    return arguments.length ? ([e, t] = f, r = a(e = +e), n = a(t = +t), i = r === n ? 0 : 1 / (n - r), c) : [e, t];
  }, c.clamp = function(f) {
    return arguments.length ? (u = !!f, c) : u;
  }, c.interpolator = function(f) {
    return arguments.length ? (o = f, c) : o;
  };
  function l(f) {
    return function(d) {
      var p, v;
      return arguments.length ? ([p, v] = d, o = f(p, v), c) : [o(0), o(1)];
    };
  }
  return c.range = l(nn), c.rangeRound = l(xl), c.unknown = function(f) {
    return arguments.length ? (s = f, c) : s;
  }, function(f) {
    return a = f, r = f(e), n = f(t), i = r === n ? 0 : 1 / (n - r), c;
  };
}
function pr(e, t) {
  return t.domain(e.domain()).interpolator(e.interpolator()).clamp(e.clamp()).unknown(e.unknown());
}
function eg() {
  var e = dr(Xa()(Ye));
  return e.copy = function() {
    return pr(e, eg());
  }, Zt.apply(e, arguments);
}
function tg() {
  var e = Sl(Xa()).domain([1, 10]);
  return e.copy = function() {
    return pr(e, tg()).base(e.base());
  }, Zt.apply(e, arguments);
}
function rg() {
  var e = Al(Xa());
  return e.copy = function() {
    return pr(e, rg()).constant(e.constant());
  }, Zt.apply(e, arguments);
}
function Ll() {
  var e = Tl(Xa());
  return e.copy = function() {
    return pr(e, Ll()).exponent(e.exponent());
  }, Zt.apply(e, arguments);
}
function jA() {
  return Ll.apply(null, arguments).exponent(0.5);
}
function ng() {
  var e = [], t = Ye;
  function r(n) {
    if (n != null && !isNaN(n = +n)) return t((Zn(e, n, 1) - 1) / (e.length - 1));
  }
  return r.domain = function(n) {
    if (!arguments.length) return e.slice();
    e = [];
    for (let i of n) i != null && !isNaN(i = +i) && e.push(i);
    return e.sort(ir), r;
  }, r.interpolator = function(n) {
    return arguments.length ? (t = n, r) : t;
  }, r.range = function() {
    return e.map((n, i) => t(i / (e.length - 1)));
  }, r.quantiles = function(n) {
    return Array.from({ length: n + 1 }, (i, a) => hE(e, a / n));
  }, r.copy = function() {
    return ng(t).domain(e);
  }, Zt.apply(r, arguments);
}
function Za() {
  var e = 0, t = 0.5, r = 1, n = 1, i, a, o, u, s, c = Ye, l, f = !1, d;
  function p(h) {
    return isNaN(h = +h) ? d : (h = 0.5 + ((h = +l(h)) - a) * (n * h < n * a ? u : s), c(f ? Math.max(0, Math.min(1, h)) : h));
  }
  p.domain = function(h) {
    return arguments.length ? ([e, t, r] = h, i = l(e = +e), a = l(t = +t), o = l(r = +r), u = i === a ? 0 : 0.5 / (a - i), s = a === o ? 0 : 0.5 / (o - a), n = a < i ? -1 : 1, p) : [e, t, r];
  }, p.clamp = function(h) {
    return arguments.length ? (f = !!h, p) : f;
  }, p.interpolator = function(h) {
    return arguments.length ? (c = h, p) : c;
  };
  function v(h) {
    return function(m) {
      var y, b, w;
      return arguments.length ? ([y, b, w] = m, c = qE(h, [y, b, w]), p) : [c(0), c(0.5), c(1)];
    };
  }
  return p.range = v(nn), p.rangeRound = v(xl), p.unknown = function(h) {
    return arguments.length ? (d = h, p) : d;
  }, function(h) {
    return l = h, i = h(e), a = h(t), o = h(r), u = i === a ? 0 : 0.5 / (a - i), s = a === o ? 0 : 0.5 / (o - a), n = a < i ? -1 : 1, p;
  };
}
function ig() {
  var e = dr(Za()(Ye));
  return e.copy = function() {
    return pr(e, ig());
  }, Zt.apply(e, arguments);
}
function ag() {
  var e = Sl(Za()).domain([0.1, 1, 10]);
  return e.copy = function() {
    return pr(e, ag()).base(e.base());
  }, Zt.apply(e, arguments);
}
function og() {
  var e = Al(Za());
  return e.copy = function() {
    return pr(e, og()).constant(e.constant());
  }, Zt.apply(e, arguments);
}
function Fl() {
  var e = Tl(Za());
  return e.copy = function() {
    return pr(e, Fl()).exponent(e.exponent());
  }, Zt.apply(e, arguments);
}
function CA() {
  return Fl.apply(null, arguments).exponent(0.5);
}
const En = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  scaleBand: bl,
  scaleDiverging: ig,
  scaleDivergingLog: ag,
  scaleDivergingPow: Fl,
  scaleDivergingSqrt: CA,
  scaleDivergingSymlog: og,
  scaleIdentity: Ly,
  scaleImplicit: js,
  scaleLinear: $y,
  scaleLog: zy,
  scaleOrdinal: gl,
  scalePoint: yE,
  scalePow: jl,
  scaleQuantile: Uy,
  scaleQuantize: Wy,
  scaleRadial: By,
  scaleSequential: eg,
  scaleSequentialLog: tg,
  scaleSequentialPow: Ll,
  scaleSequentialQuantile: ng,
  scaleSequentialSqrt: jA,
  scaleSequentialSymlog: rg,
  scaleSqrt: cS,
  scaleSymlog: qy,
  scaleThreshold: Vy,
  scaleTime: AA,
  scaleUtc: TA,
  tickFormat: Ry
}, Symbol.toStringTag, { value: "Module" }));
var hr = (e) => e.chartData, zl = E([hr], (e) => {
  var t = e.chartData != null ? e.chartData.length - 1 : 0;
  return {
    chartData: e.chartData,
    computedData: e.computedData,
    dataEndIndex: t,
    dataStartIndex: 0
  };
}), ug = (e, t, r, n) => n ? zl(e) : hr(e);
function ur(e) {
  if (Array.isArray(e) && e.length === 2) {
    var [t, r] = e;
    if (je(t) && je(r))
      return !0;
  }
  return !1;
}
function sh(e, t, r) {
  return r ? e : [Math.min(e[0], t[0]), Math.max(e[1], t[1])];
}
function sg(e, t) {
  if (t && typeof e != "function" && Array.isArray(e) && e.length === 2) {
    var [r, n] = e, i, a;
    if (je(r))
      i = r;
    else if (typeof r == "function")
      return;
    if (je(n))
      a = n;
    else if (typeof n == "function")
      return;
    var o = [i, a];
    if (ur(o))
      return o;
  }
}
function MA(e, t, r) {
  if (!(!r && t == null)) {
    if (typeof e == "function" && t != null)
      try {
        var n = e(t, r);
        if (ur(n))
          return sh(n, t, r);
      } catch {
      }
    if (Array.isArray(e) && e.length === 2) {
      var [i, a] = e, o, u;
      if (i === "auto")
        t != null && (o = Math.min(...t));
      else if (z(i))
        o = i;
      else if (typeof i == "function")
        try {
          t != null && (o = i(t?.[0]));
        } catch {
        }
      else if (typeof i == "string" && yd.test(i)) {
        var s = yd.exec(i);
        if (s == null || s[1] == null || t == null)
          o = void 0;
        else {
          var c = +s[1];
          o = t[0] - c;
        }
      } else
        o = t?.[0];
      if (a === "auto")
        t != null && (u = Math.max(...t));
      else if (z(a))
        u = a;
      else if (typeof a == "function")
        try {
          t != null && (u = a(t?.[1]));
        } catch {
        }
      else if (typeof a == "string" && gd.test(a)) {
        var l = gd.exec(a);
        if (l == null || l[1] == null || t == null)
          u = void 0;
        else {
          var f = +l[1];
          u = t[1] + f;
        }
      } else
        u = t?.[1];
      var d = [o, u];
      if (ur(d))
        return t == null ? d : sh(d, t, r);
    }
  }
}
var an = 1e9, DA = {
  // These values must be integers within the stated ranges (inclusive).
  // Most of these values can be changed during run-time using `Decimal.config`.
  // The maximum number of significant digits of the result of a calculation or base conversion.
  // E.g. `Decimal.config({ precision: 20 });`
  precision: 20,
  // 1 to MAX_DIGITS
  // The rounding mode used by default by `toInteger`, `toDecimalPlaces`, `toExponential`,
  // `toFixed`, `toPrecision` and `toSignificantDigits`.
  //
  // ROUND_UP         0 Away from zero.
  // ROUND_DOWN       1 Towards zero.
  // ROUND_CEIL       2 Towards +Infinity.
  // ROUND_FLOOR      3 Towards -Infinity.
  // ROUND_HALF_UP    4 Towards nearest neighbour. If equidistant, up.
  // ROUND_HALF_DOWN  5 Towards nearest neighbour. If equidistant, down.
  // ROUND_HALF_EVEN  6 Towards nearest neighbour. If equidistant, towards even neighbour.
  // ROUND_HALF_CEIL  7 Towards nearest neighbour. If equidistant, towards +Infinity.
  // ROUND_HALF_FLOOR 8 Towards nearest neighbour. If equidistant, towards -Infinity.
  //
  // E.g.
  // `Decimal.rounding = 4;`
  // `Decimal.rounding = Decimal.ROUND_HALF_UP;`
  rounding: 4,
  // 0 to 8
  // The exponent value at and beneath which `toString` returns exponential notation.
  // JavaScript numbers: -7
  toExpNeg: -7,
  // 0 to -MAX_E
  // The exponent value at and above which `toString` returns exponential notation.
  // JavaScript numbers: 21
  toExpPos: 21,
  // 0 to MAX_E
  // The natural logarithm of 10.
  // 115 digits
  LN10: "2.302585092994045684017991454684364207601101488628772976033327900967572609677352480235997205089598298341967784042286"
}, Bl, fe = !0, gt = "[DecimalError] ", Tr = gt + "Invalid argument: ", ql = gt + "Exponent out of range: ", on = Math.floor, wr = Math.pow, IA = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i, it, Le = 1e7, le = 7, lg = 9007199254740991, va = on(lg / le), R = {};
R.absoluteValue = R.abs = function() {
  var e = new this.constructor(this);
  return e.s && (e.s = 1), e;
};
R.comparedTo = R.cmp = function(e) {
  var t, r, n, i, a = this;
  if (e = new a.constructor(e), a.s !== e.s) return a.s || -e.s;
  if (a.e !== e.e) return a.e > e.e ^ a.s < 0 ? 1 : -1;
  for (n = a.d.length, i = e.d.length, t = 0, r = n < i ? n : i; t < r; ++t)
    if (a.d[t] !== e.d[t]) return a.d[t] > e.d[t] ^ a.s < 0 ? 1 : -1;
  return n === i ? 0 : n > i ^ a.s < 0 ? 1 : -1;
};
R.decimalPlaces = R.dp = function() {
  var e = this, t = e.d.length - 1, r = (t - e.e) * le;
  if (t = e.d[t], t) for (; t % 10 == 0; t /= 10) r--;
  return r < 0 ? 0 : r;
};
R.dividedBy = R.div = function(e) {
  return zt(this, new this.constructor(e));
};
R.dividedToIntegerBy = R.idiv = function(e) {
  var t = this, r = t.constructor;
  return oe(zt(t, new r(e), 0, 1), r.precision);
};
R.equals = R.eq = function(e) {
  return !this.cmp(e);
};
R.exponent = function() {
  return Te(this);
};
R.greaterThan = R.gt = function(e) {
  return this.cmp(e) > 0;
};
R.greaterThanOrEqualTo = R.gte = function(e) {
  return this.cmp(e) >= 0;
};
R.isInteger = R.isint = function() {
  return this.e > this.d.length - 2;
};
R.isNegative = R.isneg = function() {
  return this.s < 0;
};
R.isPositive = R.ispos = function() {
  return this.s > 0;
};
R.isZero = function() {
  return this.s === 0;
};
R.lessThan = R.lt = function(e) {
  return this.cmp(e) < 0;
};
R.lessThanOrEqualTo = R.lte = function(e) {
  return this.cmp(e) < 1;
};
R.logarithm = R.log = function(e) {
  var t, r = this, n = r.constructor, i = n.precision, a = i + 5;
  if (e === void 0)
    e = new n(10);
  else if (e = new n(e), e.s < 1 || e.eq(it)) throw Error(gt + "NaN");
  if (r.s < 1) throw Error(gt + (r.s ? "NaN" : "-Infinity"));
  return r.eq(it) ? new n(0) : (fe = !1, t = zt(Fn(r, a), Fn(e, a), a), fe = !0, oe(t, i));
};
R.minus = R.sub = function(e) {
  var t = this;
  return e = new t.constructor(e), t.s == e.s ? dg(t, e) : cg(t, (e.s = -e.s, e));
};
R.modulo = R.mod = function(e) {
  var t, r = this, n = r.constructor, i = n.precision;
  if (e = new n(e), !e.s) throw Error(gt + "NaN");
  return r.s ? (fe = !1, t = zt(r, e, 0, 1).times(e), fe = !0, r.minus(t)) : oe(new n(r), i);
};
R.naturalExponential = R.exp = function() {
  return fg(this);
};
R.naturalLogarithm = R.ln = function() {
  return Fn(this);
};
R.negated = R.neg = function() {
  var e = new this.constructor(this);
  return e.s = -e.s || 0, e;
};
R.plus = R.add = function(e) {
  var t = this;
  return e = new t.constructor(e), t.s == e.s ? cg(t, e) : dg(t, (e.s = -e.s, e));
};
R.precision = R.sd = function(e) {
  var t, r, n, i = this;
  if (e !== void 0 && e !== !!e && e !== 1 && e !== 0) throw Error(Tr + e);
  if (t = Te(i) + 1, n = i.d.length - 1, r = n * le + 1, n = i.d[n], n) {
    for (; n % 10 == 0; n /= 10) r--;
    for (n = i.d[0]; n >= 10; n /= 10) r++;
  }
  return e && t > r ? t : r;
};
R.squareRoot = R.sqrt = function() {
  var e, t, r, n, i, a, o, u = this, s = u.constructor;
  if (u.s < 1) {
    if (!u.s) return new s(0);
    throw Error(gt + "NaN");
  }
  for (e = Te(u), fe = !1, i = Math.sqrt(+u), i == 0 || i == 1 / 0 ? (t = It(u.d), (t.length + e) % 2 == 0 && (t += "0"), i = Math.sqrt(t), e = on((e + 1) / 2) - (e < 0 || e % 2), i == 1 / 0 ? t = "5e" + e : (t = i.toExponential(), t = t.slice(0, t.indexOf("e") + 1) + e), n = new s(t)) : n = new s(i.toString()), r = s.precision, i = o = r + 3; ; )
    if (a = n, n = a.plus(zt(u, a, o + 2)).times(0.5), It(a.d).slice(0, o) === (t = It(n.d)).slice(0, o)) {
      if (t = t.slice(o - 3, o + 1), i == o && t == "4999") {
        if (oe(a, r + 1, 0), a.times(a).eq(u)) {
          n = a;
          break;
        }
      } else if (t != "9999")
        break;
      o += 4;
    }
  return fe = !0, oe(n, r);
};
R.times = R.mul = function(e) {
  var t, r, n, i, a, o, u, s, c, l = this, f = l.constructor, d = l.d, p = (e = new f(e)).d;
  if (!l.s || !e.s) return new f(0);
  for (e.s *= l.s, r = l.e + e.e, s = d.length, c = p.length, s < c && (a = d, d = p, p = a, o = s, s = c, c = o), a = [], o = s + c, n = o; n--; ) a.push(0);
  for (n = c; --n >= 0; ) {
    for (t = 0, i = s + n; i > n; )
      u = a[i] + p[n] * d[i - n - 1] + t, a[i--] = u % Le | 0, t = u / Le | 0;
    a[i] = (a[i] + t) % Le | 0;
  }
  for (; !a[--o]; ) a.pop();
  return t ? ++r : a.shift(), e.d = a, e.e = r, fe ? oe(e, f.precision) : e;
};
R.toDecimalPlaces = R.todp = function(e, t) {
  var r = this, n = r.constructor;
  return r = new n(r), e === void 0 ? r : (kt(e, 0, an), t === void 0 ? t = n.rounding : kt(t, 0, 8), oe(r, e + Te(r) + 1, t));
};
R.toExponential = function(e, t) {
  var r, n = this, i = n.constructor;
  return e === void 0 ? r = Ir(n, !0) : (kt(e, 0, an), t === void 0 ? t = i.rounding : kt(t, 0, 8), n = oe(new i(n), e + 1, t), r = Ir(n, !0, e + 1)), r;
};
R.toFixed = function(e, t) {
  var r, n, i = this, a = i.constructor;
  return e === void 0 ? Ir(i) : (kt(e, 0, an), t === void 0 ? t = a.rounding : kt(t, 0, 8), n = oe(new a(i), e + Te(i) + 1, t), r = Ir(n.abs(), !1, e + Te(n) + 1), i.isneg() && !i.isZero() ? "-" + r : r);
};
R.toInteger = R.toint = function() {
  var e = this, t = e.constructor;
  return oe(new t(e), Te(e) + 1, t.rounding);
};
R.toNumber = function() {
  return +this;
};
R.toPower = R.pow = function(e) {
  var t, r, n, i, a, o, u = this, s = u.constructor, c = 12, l = +(e = new s(e));
  if (!e.s) return new s(it);
  if (u = new s(u), !u.s) {
    if (e.s < 1) throw Error(gt + "Infinity");
    return u;
  }
  if (u.eq(it)) return u;
  if (n = s.precision, e.eq(it)) return oe(u, n);
  if (t = e.e, r = e.d.length - 1, o = t >= r, a = u.s, o) {
    if ((r = l < 0 ? -l : l) <= lg) {
      for (i = new s(it), t = Math.ceil(n / le + 4), fe = !1; r % 2 && (i = i.times(u), ch(i.d, t)), r = on(r / 2), r !== 0; )
        u = u.times(u), ch(u.d, t);
      return fe = !0, e.s < 0 ? new s(it).div(i) : oe(i, n);
    }
  } else if (a < 0) throw Error(gt + "NaN");
  return a = a < 0 && e.d[Math.max(t, r)] & 1 ? -1 : 1, u.s = 1, fe = !1, i = e.times(Fn(u, n + c)), fe = !0, i = fg(i), i.s = a, i;
};
R.toPrecision = function(e, t) {
  var r, n, i = this, a = i.constructor;
  return e === void 0 ? (r = Te(i), n = Ir(i, r <= a.toExpNeg || r >= a.toExpPos)) : (kt(e, 1, an), t === void 0 ? t = a.rounding : kt(t, 0, 8), i = oe(new a(i), e, t), r = Te(i), n = Ir(i, e <= r || r <= a.toExpNeg, e)), n;
};
R.toSignificantDigits = R.tosd = function(e, t) {
  var r = this, n = r.constructor;
  return e === void 0 ? (e = n.precision, t = n.rounding) : (kt(e, 1, an), t === void 0 ? t = n.rounding : kt(t, 0, 8)), oe(new n(r), e, t);
};
R.toString = R.valueOf = R.val = R.toJSON = R[/* @__PURE__ */ Symbol.for("nodejs.util.inspect.custom")] = function() {
  var e = this, t = Te(e), r = e.constructor;
  return Ir(e, t <= r.toExpNeg || t >= r.toExpPos);
};
function cg(e, t) {
  var r, n, i, a, o, u, s, c, l = e.constructor, f = l.precision;
  if (!e.s || !t.s)
    return t.s || (t = new l(e)), fe ? oe(t, f) : t;
  if (s = e.d, c = t.d, o = e.e, i = t.e, s = s.slice(), a = o - i, a) {
    for (a < 0 ? (n = s, a = -a, u = c.length) : (n = c, i = o, u = s.length), o = Math.ceil(f / le), u = o > u ? o + 1 : u + 1, a > u && (a = u, n.length = 1), n.reverse(); a--; ) n.push(0);
    n.reverse();
  }
  for (u = s.length, a = c.length, u - a < 0 && (a = u, n = c, c = s, s = n), r = 0; a; )
    r = (s[--a] = s[a] + c[a] + r) / Le | 0, s[a] %= Le;
  for (r && (s.unshift(r), ++i), u = s.length; s[--u] == 0; ) s.pop();
  return t.d = s, t.e = i, fe ? oe(t, f) : t;
}
function kt(e, t, r) {
  if (e !== ~~e || e < t || e > r)
    throw Error(Tr + e);
}
function It(e) {
  var t, r, n, i = e.length - 1, a = "", o = e[0];
  if (i > 0) {
    for (a += o, t = 1; t < i; t++)
      n = e[t] + "", r = le - n.length, r && (a += er(r)), a += n;
    o = e[t], n = o + "", r = le - n.length, r && (a += er(r));
  } else if (o === 0)
    return "0";
  for (; o % 10 === 0; ) o /= 10;
  return a + o;
}
var zt = /* @__PURE__ */ (function() {
  function e(n, i) {
    var a, o = 0, u = n.length;
    for (n = n.slice(); u--; )
      a = n[u] * i + o, n[u] = a % Le | 0, o = a / Le | 0;
    return o && n.unshift(o), n;
  }
  function t(n, i, a, o) {
    var u, s;
    if (a != o)
      s = a > o ? 1 : -1;
    else
      for (u = s = 0; u < a; u++)
        if (n[u] != i[u]) {
          s = n[u] > i[u] ? 1 : -1;
          break;
        }
    return s;
  }
  function r(n, i, a) {
    for (var o = 0; a--; )
      n[a] -= o, o = n[a] < i[a] ? 1 : 0, n[a] = o * Le + n[a] - i[a];
    for (; !n[0] && n.length > 1; ) n.shift();
  }
  return function(n, i, a, o) {
    var u, s, c, l, f, d, p, v, h, m, y, b, w, _, O, x, S, D, k = n.constructor, $ = n.s == i.s ? 1 : -1, j = n.d, A = i.d;
    if (!n.s) return new k(n);
    if (!i.s) throw Error(gt + "Division by zero");
    for (s = n.e - i.e, S = A.length, O = j.length, p = new k($), v = p.d = [], c = 0; A[c] == (j[c] || 0); ) ++c;
    if (A[c] > (j[c] || 0) && --s, a == null ? b = a = k.precision : o ? b = a + (Te(n) - Te(i)) + 1 : b = a, b < 0) return new k(0);
    if (b = b / le + 2 | 0, c = 0, S == 1)
      for (l = 0, A = A[0], b++; (c < O || l) && b--; c++)
        w = l * Le + (j[c] || 0), v[c] = w / A | 0, l = w % A | 0;
    else {
      for (l = Le / (A[0] + 1) | 0, l > 1 && (A = e(A, l), j = e(j, l), S = A.length, O = j.length), _ = S, h = j.slice(0, S), m = h.length; m < S; ) h[m++] = 0;
      D = A.slice(), D.unshift(0), x = A[0], A[1] >= Le / 2 && ++x;
      do
        l = 0, u = t(A, h, S, m), u < 0 ? (y = h[0], S != m && (y = y * Le + (h[1] || 0)), l = y / x | 0, l > 1 ? (l >= Le && (l = Le - 1), f = e(A, l), d = f.length, m = h.length, u = t(f, h, d, m), u == 1 && (l--, r(f, S < d ? D : A, d))) : (l == 0 && (u = l = 1), f = A.slice()), d = f.length, d < m && f.unshift(0), r(h, f, m), u == -1 && (m = h.length, u = t(A, h, S, m), u < 1 && (l++, r(h, S < m ? D : A, m))), m = h.length) : u === 0 && (l++, h = [0]), v[c++] = l, u && h[0] ? h[m++] = j[_] || 0 : (h = [j[_]], m = 1);
      while ((_++ < O || h[0] !== void 0) && b--);
    }
    return v[0] || v.shift(), p.e = s, oe(p, o ? a + Te(p) + 1 : a);
  };
})();
function fg(e, t) {
  var r, n, i, a, o, u, s = 0, c = 0, l = e.constructor, f = l.precision;
  if (Te(e) > 16) throw Error(ql + Te(e));
  if (!e.s) return new l(it);
  for (fe = !1, u = f, o = new l(0.03125); e.abs().gte(0.1); )
    e = e.times(o), c += 5;
  for (n = Math.log(wr(2, c)) / Math.LN10 * 2 + 5 | 0, u += n, r = i = a = new l(it), l.precision = u; ; ) {
    if (i = oe(i.times(e), u), r = r.times(++s), o = a.plus(zt(i, r, u)), It(o.d).slice(0, u) === It(a.d).slice(0, u)) {
      for (; c--; ) a = oe(a.times(a), u);
      return l.precision = f, t == null ? (fe = !0, oe(a, f)) : a;
    }
    a = o;
  }
}
function Te(e) {
  for (var t = e.e * le, r = e.d[0]; r >= 10; r /= 10) t++;
  return t;
}
function Iu(e, t, r) {
  if (t > e.LN10.sd())
    throw fe = !0, r && (e.precision = r), Error(gt + "LN10 precision limit exceeded");
  return oe(new e(e.LN10), t);
}
function er(e) {
  for (var t = ""; e--; ) t += "0";
  return t;
}
function Fn(e, t) {
  var r, n, i, a, o, u, s, c, l, f = 1, d = 10, p = e, v = p.d, h = p.constructor, m = h.precision;
  if (p.s < 1) throw Error(gt + (p.s ? "NaN" : "-Infinity"));
  if (p.eq(it)) return new h(0);
  if (t == null ? (fe = !1, c = m) : c = t, p.eq(10))
    return t == null && (fe = !0), Iu(h, c);
  if (c += d, h.precision = c, r = It(v), n = r.charAt(0), a = Te(p), Math.abs(a) < 15e14) {
    for (; n < 7 && n != 1 || n == 1 && r.charAt(1) > 3; )
      p = p.times(e), r = It(p.d), n = r.charAt(0), f++;
    a = Te(p), n > 1 ? (p = new h("0." + r), a++) : p = new h(n + "." + r.slice(1));
  } else
    return s = Iu(h, c + 2, m).times(a + ""), p = Fn(new h(n + "." + r.slice(1)), c - d).plus(s), h.precision = m, t == null ? (fe = !0, oe(p, m)) : p;
  for (u = o = p = zt(p.minus(it), p.plus(it), c), l = oe(p.times(p), c), i = 3; ; ) {
    if (o = oe(o.times(l), c), s = u.plus(zt(o, new h(i), c)), It(s.d).slice(0, c) === It(u.d).slice(0, c))
      return u = u.times(2), a !== 0 && (u = u.plus(Iu(h, c + 2, m).times(a + ""))), u = zt(u, new h(f), c), h.precision = m, t == null ? (fe = !0, oe(u, m)) : u;
    u = s, i += 2;
  }
}
function lh(e, t) {
  var r, n, i;
  for ((r = t.indexOf(".")) > -1 && (t = t.replace(".", "")), (n = t.search(/e/i)) > 0 ? (r < 0 && (r = n), r += +t.slice(n + 1), t = t.substring(0, n)) : r < 0 && (r = t.length), n = 0; t.charCodeAt(n) === 48; ) ++n;
  for (i = t.length; t.charCodeAt(i - 1) === 48; ) --i;
  if (t = t.slice(n, i), t) {
    if (i -= n, r = r - n - 1, e.e = on(r / le), e.d = [], n = (r + 1) % le, r < 0 && (n += le), n < i) {
      for (n && e.d.push(+t.slice(0, n)), i -= le; n < i; ) e.d.push(+t.slice(n, n += le));
      t = t.slice(n), n = le - t.length;
    } else
      n -= i;
    for (; n--; ) t += "0";
    if (e.d.push(+t), fe && (e.e > va || e.e < -va)) throw Error(ql + r);
  } else
    e.s = 0, e.e = 0, e.d = [0];
  return e;
}
function oe(e, t, r) {
  var n, i, a, o, u, s, c, l, f = e.d;
  for (o = 1, a = f[0]; a >= 10; a /= 10) o++;
  if (n = t - o, n < 0)
    n += le, i = t, c = f[l = 0];
  else {
    if (l = Math.ceil((n + 1) / le), a = f.length, l >= a) return e;
    for (c = a = f[l], o = 1; a >= 10; a /= 10) o++;
    n %= le, i = n - le + o;
  }
  if (r !== void 0 && (a = wr(10, o - i - 1), u = c / a % 10 | 0, s = t < 0 || f[l + 1] !== void 0 || c % a, s = r < 4 ? (u || s) && (r == 0 || r == (e.s < 0 ? 3 : 2)) : u > 5 || u == 5 && (r == 4 || s || r == 6 && // Check whether the digit to the left of the rounding digit is odd.
  (n > 0 ? i > 0 ? c / wr(10, o - i) : 0 : f[l - 1]) % 10 & 1 || r == (e.s < 0 ? 8 : 7))), t < 1 || !f[0])
    return s ? (a = Te(e), f.length = 1, t = t - a - 1, f[0] = wr(10, (le - t % le) % le), e.e = on(-t / le) || 0) : (f.length = 1, f[0] = e.e = e.s = 0), e;
  if (n == 0 ? (f.length = l, a = 1, l--) : (f.length = l + 1, a = wr(10, le - n), f[l] = i > 0 ? (c / wr(10, o - i) % wr(10, i) | 0) * a : 0), s)
    for (; ; )
      if (l == 0) {
        (f[0] += a) == Le && (f[0] = 1, ++e.e);
        break;
      } else {
        if (f[l] += a, f[l] != Le) break;
        f[l--] = 0, a = 1;
      }
  for (n = f.length; f[--n] === 0; ) f.pop();
  if (fe && (e.e > va || e.e < -va))
    throw Error(ql + Te(e));
  return e;
}
function dg(e, t) {
  var r, n, i, a, o, u, s, c, l, f, d = e.constructor, p = d.precision;
  if (!e.s || !t.s)
    return t.s ? t.s = -t.s : t = new d(e), fe ? oe(t, p) : t;
  if (s = e.d, f = t.d, n = t.e, c = e.e, s = s.slice(), o = c - n, o) {
    for (l = o < 0, l ? (r = s, o = -o, u = f.length) : (r = f, n = c, u = s.length), i = Math.max(Math.ceil(p / le), u) + 2, o > i && (o = i, r.length = 1), r.reverse(), i = o; i--; ) r.push(0);
    r.reverse();
  } else {
    for (i = s.length, u = f.length, l = i < u, l && (u = i), i = 0; i < u; i++)
      if (s[i] != f[i]) {
        l = s[i] < f[i];
        break;
      }
    o = 0;
  }
  for (l && (r = s, s = f, f = r, t.s = -t.s), u = s.length, i = f.length - u; i > 0; --i) s[u++] = 0;
  for (i = f.length; i > o; ) {
    if (s[--i] < f[i]) {
      for (a = i; a && s[--a] === 0; ) s[a] = Le - 1;
      --s[a], s[i] += Le;
    }
    s[i] -= f[i];
  }
  for (; s[--u] === 0; ) s.pop();
  for (; s[0] === 0; s.shift()) --n;
  return s[0] ? (t.d = s, t.e = n, fe ? oe(t, p) : t) : new d(0);
}
function Ir(e, t, r) {
  var n, i = Te(e), a = It(e.d), o = a.length;
  return t ? (r && (n = r - o) > 0 ? a = a.charAt(0) + "." + a.slice(1) + er(n) : o > 1 && (a = a.charAt(0) + "." + a.slice(1)), a = a + (i < 0 ? "e" : "e+") + i) : i < 0 ? (a = "0." + er(-i - 1) + a, r && (n = r - o) > 0 && (a += er(n))) : i >= o ? (a += er(i + 1 - o), r && (n = r - i - 1) > 0 && (a = a + "." + er(n))) : ((n = i + 1) < o && (a = a.slice(0, n) + "." + a.slice(n)), r && (n = r - o) > 0 && (i + 1 === o && (a += "."), a += er(n))), e.s < 0 ? "-" + a : a;
}
function ch(e, t) {
  if (e.length > t)
    return e.length = t, !0;
}
function pg(e) {
  var t, r, n;
  function i(a) {
    var o = this;
    if (!(o instanceof i)) return new i(a);
    if (o.constructor = i, a instanceof i) {
      o.s = a.s, o.e = a.e, o.d = (a = a.d) ? a.slice() : a;
      return;
    }
    if (typeof a == "number") {
      if (a * 0 !== 0)
        throw Error(Tr + a);
      if (a > 0)
        o.s = 1;
      else if (a < 0)
        a = -a, o.s = -1;
      else {
        o.s = 0, o.e = 0, o.d = [0];
        return;
      }
      if (a === ~~a && a < 1e7) {
        o.e = 0, o.d = [a];
        return;
      }
      return lh(o, a.toString());
    } else if (typeof a != "string")
      throw Error(Tr + a);
    if (a.charCodeAt(0) === 45 ? (a = a.slice(1), o.s = -1) : o.s = 1, IA.test(a)) lh(o, a);
    else throw Error(Tr + a);
  }
  if (i.prototype = R, i.ROUND_UP = 0, i.ROUND_DOWN = 1, i.ROUND_CEIL = 2, i.ROUND_FLOOR = 3, i.ROUND_HALF_UP = 4, i.ROUND_HALF_DOWN = 5, i.ROUND_HALF_EVEN = 6, i.ROUND_HALF_CEIL = 7, i.ROUND_HALF_FLOOR = 8, i.clone = pg, i.config = i.set = NA, e === void 0 && (e = {}), e)
    for (n = ["precision", "rounding", "toExpNeg", "toExpPos", "LN10"], t = 0; t < n.length; ) e.hasOwnProperty(r = n[t++]) || (e[r] = this[r]);
  return i.config(e), i;
}
function NA(e) {
  if (!e || typeof e != "object")
    throw Error(gt + "Object expected");
  var t, r, n, i = [
    "precision",
    1,
    an,
    "rounding",
    0,
    8,
    "toExpNeg",
    -1 / 0,
    0,
    "toExpPos",
    0,
    1 / 0
  ];
  for (t = 0; t < i.length; t += 3)
    if ((n = e[r = i[t]]) !== void 0)
      if (on(n) === n && n >= i[t + 1] && n <= i[t + 2]) this[r] = n;
      else throw Error(Tr + r + ": " + n);
  if ((n = e[r = "LN10"]) !== void 0)
    if (n == Math.LN10) this[r] = new this(n);
    else throw Error(Tr + r + ": " + n);
  return this;
}
var Bl = pg(DA);
it = new Bl(1);
const ee = Bl;
var kA = (e) => e, hg = {}, vg = (e) => e === hg, fh = (e) => function t() {
  return arguments.length === 0 || arguments.length === 1 && vg(arguments.length <= 0 ? void 0 : arguments[0]) ? t : e(...arguments);
}, mg = (e, t) => e === 1 ? t : fh(function() {
  for (var r = arguments.length, n = new Array(r), i = 0; i < r; i++)
    n[i] = arguments[i];
  var a = n.filter((o) => o !== hg).length;
  return a >= e ? t(...n) : mg(e - a, fh(function() {
    for (var o = arguments.length, u = new Array(o), s = 0; s < o; s++)
      u[s] = arguments[s];
    var c = n.map((l) => vg(l) ? u.shift() : l);
    return t(...c, ...u);
  }));
}), RA = (e) => mg(e.length, e), Is = (e, t) => {
  for (var r = [], n = e; n < t; ++n)
    r[n - e] = n;
  return r;
}, $A = RA((e, t) => Array.isArray(t) ? t.map(e) : Object.keys(t).map((r) => t[r]).map(e)), LA = function() {
  for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
    r[n] = arguments[n];
  if (!r.length)
    return kA;
  var i = r.reverse(), a = i[0], o = i.slice(1);
  return function() {
    return o.reduce((u, s) => s(u), a(...arguments));
  };
};
function yg(e) {
  var t;
  return e === 0 ? t = 1 : t = Math.floor(new ee(e).abs().log(10).toNumber()) + 1, t;
}
function gg(e, t, r) {
  for (var n = new ee(e), i = 0, a = []; n.lt(t) && i < 1e5; )
    a.push(n.toNumber()), n = n.add(r), i++;
  return a;
}
var bg = (e) => {
  var [t, r] = e, [n, i] = [t, r];
  return t > r && ([n, i] = [r, t]), [n, i];
}, wg = (e, t, r) => {
  if (e.lte(0))
    return new ee(0);
  var n = yg(e.toNumber()), i = new ee(10).pow(n), a = e.div(i), o = n !== 1 ? 0.05 : 0.1, u = new ee(Math.ceil(a.div(o).toNumber())).add(r).mul(o), s = u.mul(i);
  return t ? new ee(s.toNumber()) : new ee(Math.ceil(s.toNumber()));
}, FA = (e, t, r) => {
  var n = new ee(1), i = new ee(e);
  if (!i.isint() && r) {
    var a = Math.abs(e);
    a < 1 ? (n = new ee(10).pow(yg(e) - 1), i = new ee(Math.floor(i.div(n).toNumber())).mul(n)) : a > 1 && (i = new ee(Math.floor(e)));
  } else e === 0 ? i = new ee(Math.floor((t - 1) / 2)) : r || (i = new ee(Math.floor(e)));
  var o = Math.floor((t - 1) / 2), u = LA($A((s) => i.add(new ee(s - o).mul(n)).toNumber()), Is);
  return u(0, t);
}, Og = function(t, r, n, i) {
  var a = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : 0;
  if (!Number.isFinite((r - t) / (n - 1)))
    return {
      step: new ee(0),
      tickMin: new ee(0),
      tickMax: new ee(0)
    };
  var o = wg(new ee(r).sub(t).div(n - 1), i, a), u;
  t <= 0 && r >= 0 ? u = new ee(0) : (u = new ee(t).add(r).div(2), u = u.sub(new ee(u).mod(o)));
  var s = Math.ceil(u.sub(t).div(o).toNumber()), c = Math.ceil(new ee(r).sub(u).div(o).toNumber()), l = s + c + 1;
  return l > n ? Og(t, r, n, i, a + 1) : (l < n && (c = r > 0 ? c + (n - l) : c, s = r > 0 ? s : s + (n - l)), {
    step: o,
    tickMin: u.sub(new ee(s).mul(o)),
    tickMax: u.add(new ee(c).mul(o))
  });
}, zA = function(t) {
  var [r, n] = t, i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 6, a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0, o = Math.max(i, 2), [u, s] = bg([r, n]);
  if (u === -1 / 0 || s === 1 / 0) {
    var c = s === 1 / 0 ? [u, ...Is(0, i - 1).map(() => 1 / 0)] : [...Is(0, i - 1).map(() => -1 / 0), s];
    return r > n ? c.reverse() : c;
  }
  if (u === s)
    return FA(u, i, a);
  var {
    step: l,
    tickMin: f,
    tickMax: d
  } = Og(u, s, o, a, 0), p = gg(f, d.add(new ee(0.1).mul(l)), l);
  return r > n ? p.reverse() : p;
}, qA = function(t, r) {
  var [n, i] = t, a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0, [o, u] = bg([n, i]);
  if (o === -1 / 0 || u === 1 / 0)
    return [n, i];
  if (o === u)
    return [o];
  var s = Math.max(r, 2), c = wg(new ee(u).sub(o).div(s - 1), a, 0), l = [...gg(new ee(o), new ee(u), c), u];
  return a === !1 && (l = l.map((f) => Math.round(f))), n > i ? l.reverse() : l;
}, BA = (e) => e.rootProps.barCategoryGap, ti = (e) => e.rootProps.stackOffset, xg = (e) => e.rootProps.reverseStackOrder, Ul = (e) => e.options.chartName, Wl = (e) => e.rootProps.syncId, Pg = (e) => e.rootProps.syncMethod, Vl = (e) => e.options.eventEmitter, Et = {
  /**
   * CartesianGrid and PolarGrid
   */
  grid: -100,
  /**
   * Background of Bar and RadialBar.
   * This is not visible by default but can be enabled by setting background={true} on Bar or RadialBar.
   */
  barBackground: -50,
  /*
   * other chart elements or custom elements without specific zIndex
   * render in here, at zIndex 0
   */
  /**
   * Area, Pie, Radar, and ReferenceArea
   */
  area: 100,
  /**
   * Cursor is embedded inside Tooltip and controlled by it.
   * The Tooltip itself has a separate portal and is not included in the zIndex system;
   * Cursor is the decoration inside the chart area. CursorRectangle is a rectangle box.
   * It renders below bar so that in a stacked bar chart the cursor rectangle does not hide the other bars.
   */
  cursorRectangle: 200,
  /**
   * Bar and RadialBar
   */
  bar: 300,
  /**
   * Line and ReferenceLine, and ErrorBor
   */
  line: 400,
  /**
   * XAxis and YAxis and PolarAngleAxis and PolarRadiusAxis ticks and lines and children
   */
  axis: 500,
  /**
   * Scatter and ReferenceDot,
   * and Dots of Line and Area and Radar if they have dot=true
   */
  scatter: 600,
  /**
   * Hovering over a Bar or RadialBar renders a highlight rectangle
   */
  activeBar: 1e3,
  /**
   * Cursor is embedded inside Tooltip and controlled by it.
   * The Tooltip itself has a separate portal and is not included in the zIndex system;
   * Cursor is the decoration inside the chart area, usually a cross or a box.
   * CursorLine is a line cursor rendered in Line, Area, Scatter, Radar charts.
   * It renders above the Line and Scatter so that it is always visible.
   * It renders below active dot so that the dot is always visible and shows the current point.
   * We're also assuming that the active dot is small enough that it does not fully cover the cursor line.
   *
   * This also applies to the radial cursor in RadialBarChart.
   */
  cursorLine: 1100,
  /**
   * Hovering over a Point in Line, Area, Scatter, Radar renders a highlight dot
   */
  activeDot: 1200,
  /**
   * LabelList and Label, including Axis labels
   */
  label: 2e3
}, $t = {
  allowDuplicatedCategory: !0,
  // if I set this to false then Tooltip synchronisation stops working in Radar, wtf
  angleAxisId: 0,
  reversed: !1,
  scale: "auto",
  tick: !0,
  type: "category"
}, rt = {
  allowDataOverflow: !1,
  allowDuplicatedCategory: !0,
  radiusAxisId: 0,
  scale: "auto",
  tick: !0,
  tickCount: 5,
  type: "number"
}, Ja = (e, t) => {
  if (!(!e || !t))
    return e != null && e.reversed ? [t[1], t[0]] : t;
}, UA = {
  allowDataOverflow: !1,
  allowDecimals: !1,
  allowDuplicatedCategory: !1,
  // defaultPolarAngleAxisProps.allowDuplicatedCategory has it set to true but the actual axis rendering ignores the prop because reasons,
  dataKey: void 0,
  domain: void 0,
  id: $t.angleAxisId,
  includeHidden: !1,
  name: void 0,
  reversed: $t.reversed,
  scale: $t.scale,
  tick: $t.tick,
  tickCount: void 0,
  ticks: void 0,
  type: $t.type,
  unit: void 0
}, WA = {
  allowDataOverflow: rt.allowDataOverflow,
  allowDecimals: !1,
  allowDuplicatedCategory: rt.allowDuplicatedCategory,
  dataKey: void 0,
  domain: void 0,
  id: rt.radiusAxisId,
  includeHidden: !1,
  name: void 0,
  reversed: !1,
  scale: rt.scale,
  tick: rt.tick,
  tickCount: rt.tickCount,
  ticks: void 0,
  type: rt.type,
  unit: void 0
}, VA = {
  allowDataOverflow: !1,
  allowDecimals: !1,
  allowDuplicatedCategory: $t.allowDuplicatedCategory,
  dataKey: void 0,
  domain: void 0,
  id: $t.angleAxisId,
  includeHidden: !1,
  name: void 0,
  reversed: !1,
  scale: $t.scale,
  tick: $t.tick,
  tickCount: void 0,
  ticks: void 0,
  type: "number",
  unit: void 0
}, KA = {
  allowDataOverflow: rt.allowDataOverflow,
  allowDecimals: !1,
  allowDuplicatedCategory: rt.allowDuplicatedCategory,
  dataKey: void 0,
  domain: void 0,
  id: rt.radiusAxisId,
  includeHidden: !1,
  name: void 0,
  reversed: !1,
  scale: rt.scale,
  tick: rt.tick,
  tickCount: rt.tickCount,
  ticks: void 0,
  type: "category",
  unit: void 0
}, Kl = (e, t) => e.polarAxis.angleAxis[t] != null ? e.polarAxis.angleAxis[t] : e.layout.layoutType === "radial" ? VA : UA, Hl = (e, t) => e.polarAxis.radiusAxis[t] != null ? e.polarAxis.radiusAxis[t] : e.layout.layoutType === "radial" ? KA : WA, Qa = (e) => e.polarOptions, Yl = E([Gt, Xt, Fe], xy), _g = E([Qa, Yl], (e, t) => {
  if (e != null)
    return ot(e.innerRadius, t, 0);
}), Eg = E([Qa, Yl], (e, t) => {
  if (e != null)
    return ot(e.outerRadius, t, t * 0.8);
}), HA = (e) => {
  if (e == null)
    return [0, 0];
  var {
    startAngle: t,
    endAngle: r
  } = e;
  return [t, r];
}, Sg = E([Qa], HA);
E([Kl, Sg], Ja);
var Ag = E([Yl, _g, Eg], (e, t, r) => {
  if (!(e == null || t == null || r == null))
    return [t, r];
});
E([Hl, Ag], Ja);
var Tg = E([se, Qa, _g, Eg, Gt, Xt], (e, t, r, n, i, a) => {
  if (!(e !== "centric" && e !== "radial" || t == null || r == null || n == null)) {
    var {
      cx: o,
      cy: u,
      startAngle: s,
      endAngle: c
    } = t;
    return {
      cx: ot(o, i, i / 2),
      cy: ot(u, a, a / 2),
      innerRadius: r,
      outerRadius: n,
      startAngle: s,
      endAngle: c,
      clockWise: !1
      // this property look useful, why not use it?
    };
  }
}), de = (e, t) => t, ri = (e, t, r) => r;
function jg(e) {
  return e?.id;
}
function Cg(e, t, r) {
  var {
    chartData: n = []
  } = t, {
    allowDuplicatedCategory: i,
    dataKey: a
  } = r, o = /* @__PURE__ */ new Map();
  return e.forEach((u) => {
    var s, c = (s = u.data) !== null && s !== void 0 ? s : n;
    if (!(c == null || c.length === 0)) {
      var l = jg(u);
      c.forEach((f, d) => {
        var p = a == null || i ? d : String(be(f, a, null)), v = be(f, u.dataKey, 0), h;
        o.has(p) ? h = o.get(p) : h = {}, Object.assign(h, {
          [l]: v
        }), o.set(p, h);
      });
    }
  }), Array.from(o.values());
}
function Gl(e) {
  return "stackId" in e && e.stackId != null && e.dataKey != null;
}
var eo = (e, t) => e === t ? !0 : e == null || t == null ? !1 : e[0] === t[0] && e[1] === t[1];
function to(e, t) {
  return Array.isArray(e) && Array.isArray(t) && e.length === 0 && t.length === 0 ? !0 : e === t;
}
function YA(e, t) {
  if (e.length === t.length) {
    for (var r = 0; r < e.length; r++)
      if (e[r] !== t[r])
        return !1;
    return !0;
  }
  return !1;
}
var ke = (e) => {
  var t = se(e);
  return t === "horizontal" ? "xAxis" : t === "vertical" ? "yAxis" : t === "centric" ? "angleAxis" : "radiusAxis";
}, un = (e) => e.tooltip.settings.axisId;
function dh(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function ma(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? dh(Object(r), !0).forEach(function(n) {
      GA(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : dh(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function GA(e, t, r) {
  return (t = XA(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function XA(e) {
  var t = ZA(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function ZA(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Ns = [0, "auto"], JA = {
  allowDataOverflow: !1,
  allowDecimals: !0,
  allowDuplicatedCategory: !0,
  angle: 0,
  dataKey: void 0,
  domain: void 0,
  height: 30,
  hide: !0,
  id: 0,
  includeHidden: !1,
  interval: "preserveEnd",
  minTickGap: 5,
  mirror: !1,
  name: void 0,
  orientation: "bottom",
  padding: {
    left: 0,
    right: 0
  },
  reversed: !1,
  scale: "auto",
  tick: !0,
  tickCount: 5,
  tickFormatter: void 0,
  ticks: void 0,
  type: "category",
  unit: void 0
}, QA = (e, t) => e.cartesianAxis.xAxis[t], vr = (e, t) => {
  var r = QA(e, t);
  return r ?? JA;
}, eT = {
  allowDataOverflow: !1,
  allowDecimals: !0,
  allowDuplicatedCategory: !0,
  angle: 0,
  dataKey: void 0,
  domain: Ns,
  hide: !0,
  id: 0,
  includeHidden: !1,
  interval: "preserveEnd",
  minTickGap: 5,
  mirror: !1,
  name: void 0,
  orientation: "left",
  padding: {
    top: 0,
    bottom: 0
  },
  reversed: !1,
  scale: "auto",
  tick: !0,
  tickCount: 5,
  tickFormatter: void 0,
  ticks: void 0,
  type: "number",
  unit: void 0,
  width: Gn
}, tT = (e, t) => e.cartesianAxis.yAxis[t], mr = (e, t) => {
  var r = tT(e, t);
  return r ?? eT;
}, rT = {
  domain: [0, "auto"],
  includeHidden: !1,
  reversed: !1,
  allowDataOverflow: !1,
  allowDuplicatedCategory: !1,
  dataKey: void 0,
  id: 0,
  name: "",
  range: [64, 64],
  scale: "auto",
  type: "number",
  unit: ""
}, Xl = (e, t) => {
  var r = e.cartesianAxis.zAxis[t];
  return r ?? rT;
}, ve = (e, t, r) => {
  switch (t) {
    case "xAxis":
      return vr(e, r);
    case "yAxis":
      return mr(e, r);
    case "zAxis":
      return Xl(e, r);
    case "angleAxis":
      return Kl(e, r);
    case "radiusAxis":
      return Hl(e, r);
    default:
      throw new Error("Unexpected axis type: ".concat(t));
  }
}, nT = (e, t, r) => {
  switch (t) {
    case "xAxis":
      return vr(e, r);
    case "yAxis":
      return mr(e, r);
    default:
      throw new Error("Unexpected axis type: ".concat(t));
  }
}, ni = (e, t, r) => {
  switch (t) {
    case "xAxis":
      return vr(e, r);
    case "yAxis":
      return mr(e, r);
    case "angleAxis":
      return Kl(e, r);
    case "radiusAxis":
      return Hl(e, r);
    default:
      throw new Error("Unexpected axis type: ".concat(t));
  }
}, Mg = (e) => e.graphicalItems.cartesianItems.some((t) => t.type === "bar") || e.graphicalItems.polarItems.some((t) => t.type === "radialBar");
function Zl(e, t) {
  return (r) => {
    switch (e) {
      case "xAxis":
        return "xAxisId" in r && r.xAxisId === t;
      case "yAxis":
        return "yAxisId" in r && r.yAxisId === t;
      case "zAxis":
        return "zAxisId" in r && r.zAxisId === t;
      case "angleAxis":
        return "angleAxisId" in r && r.angleAxisId === t;
      case "radiusAxis":
        return "radiusAxisId" in r && r.radiusAxisId === t;
      default:
        return !1;
    }
  };
}
var iT = (e) => e.graphicalItems.cartesianItems, aT = E([de, ri], Zl), Jl = (e, t, r) => e.filter(r).filter((n) => t?.includeHidden === !0 ? !0 : !n.hide), ii = E([iT, ve, aT], Jl, {
  memoizeOptions: {
    resultEqualityCheck: to
  }
}), Dg = E([ii], (e) => e.filter((t) => t.type === "area" || t.type === "bar").filter(Gl)), Ig = (e) => e.filter((t) => !("stackId" in t) || t.stackId === void 0), oT = E([ii], Ig), Ql = (e) => e.map((t) => t.data).filter(Boolean).flat(1), uT = E([ii], Ql, {
  memoizeOptions: {
    resultEqualityCheck: to
  }
}), ec = (e, t) => {
  var {
    chartData: r = [],
    dataStartIndex: n,
    dataEndIndex: i
  } = t;
  return e.length > 0 ? e : r.slice(n, i + 1);
}, tc = E([uT, ug], ec), rc = (e, t, r) => t?.dataKey != null ? e.map((n) => ({
  value: be(n, t.dataKey)
})) : r.length > 0 ? r.map((n) => n.dataKey).flatMap((n) => e.map((i) => ({
  value: be(i, n)
}))) : e.map((n) => ({
  value: n
})), ro = E([tc, ve, ii], rc);
function Ng(e, t) {
  switch (e) {
    case "xAxis":
      return t.direction === "x";
    case "yAxis":
      return t.direction === "y";
    default:
      return !1;
  }
}
function $i(e) {
  if (Ut(e) || e instanceof Date) {
    var t = Number(e);
    if (je(t))
      return t;
  }
}
function ph(e) {
  if (Array.isArray(e)) {
    var t = [$i(e[0]), $i(e[1])];
    return ur(t) ? t : void 0;
  }
  var r = $i(e);
  if (r != null)
    return [r, r];
}
function Yt(e) {
  return e.map($i).filter(Cw);
}
function sT(e, t, r) {
  return !r || typeof t != "number" || qt(t) ? [] : r.length ? Yt(r.flatMap((n) => {
    var i = be(e, n.dataKey), a, o;
    if (Array.isArray(i) ? [a, o] = i : a = o = i, !(!je(a) || !je(o)))
      return [t - a, t + o];
  })) : [];
}
var Re = (e) => {
  var t = ke(e), r = un(e);
  return ni(e, t, r);
}, ai = E([Re], (e) => e?.dataKey), lT = E([Dg, ug, Re], Cg), kg = (e, t, r, n) => {
  var i = {}, a = t.reduce((o, u) => {
    if (u.stackId == null)
      return o;
    var s = o[u.stackId];
    return s == null && (s = []), s.push(u), o[u.stackId] = s, o;
  }, i);
  return Object.fromEntries(Object.entries(a).map((o) => {
    var [u, s] = o, c = n ? [...s].reverse() : s, l = c.map(jg);
    return [u, {
      // @ts-expect-error getStackedData requires that the input is array of objects, Recharts does not test for that
      stackedData: w1(e, l, r),
      graphicalItems: c
    }];
  }));
}, cT = E([lT, Dg, ti, xg], kg), Rg = (e, t, r, n) => {
  var {
    dataStartIndex: i,
    dataEndIndex: a
  } = t;
  if (n == null && r !== "zAxis") {
    var o = P1(e, i, a);
    if (!(o != null && o[0] === 0 && o[1] === 0))
      return o;
  }
}, fT = E([ve], (e) => e.allowDataOverflow), nc = (e) => {
  var t;
  if (e == null || !("domain" in e))
    return Ns;
  if (e.domain != null)
    return e.domain;
  if ("ticks" in e && e.ticks != null) {
    if (e.type === "number") {
      var r = Yt(e.ticks);
      return [Math.min(...r), Math.max(...r)];
    }
    if (e.type === "category")
      return e.ticks.map(String);
  }
  return (t = e?.domain) !== null && t !== void 0 ? t : Ns;
}, ic = E([ve], nc), ac = E([ic, fT], sg), dT = E([cT, hr, de, ac], Rg, {
  memoizeOptions: {
    resultEqualityCheck: eo
  }
}), no = (e) => e.errorBars, pT = (e, t, r) => e.flatMap((n) => t[n.id]).filter(Boolean).filter((n) => Ng(r, n)), ya = function() {
  for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
    r[n] = arguments[n];
  var i = r.filter(Boolean);
  if (i.length !== 0) {
    var a = i.flat(), o = Math.min(...a), u = Math.max(...a);
    return [o, u];
  }
}, oc = (e, t, r, n, i) => {
  var a, o;
  if (r.length > 0 && e.forEach((u) => {
    r.forEach((s) => {
      var c, l, f = (c = n[s.id]) === null || c === void 0 ? void 0 : c.filter((y) => Ng(i, y)), d = be(u, (l = t.dataKey) !== null && l !== void 0 ? l : s.dataKey), p = sT(u, d, f);
      if (p.length >= 2) {
        var v = Math.min(...p), h = Math.max(...p);
        (a == null || v < a) && (a = v), (o == null || h > o) && (o = h);
      }
      var m = ph(d);
      m != null && (a = a == null ? m[0] : Math.min(a, m[0]), o = o == null ? m[1] : Math.max(o, m[1]));
    });
  }), t?.dataKey != null && e.forEach((u) => {
    var s = ph(be(u, t.dataKey));
    s != null && (a = a == null ? s[0] : Math.min(a, s[0]), o = o == null ? s[1] : Math.max(o, s[1]));
  }), je(a) && je(o))
    return [a, o];
}, hT = E([tc, ve, oT, no, de], oc, {
  memoizeOptions: {
    resultEqualityCheck: eo
  }
});
function vT(e) {
  var {
    value: t
  } = e;
  if (Ut(t) || t instanceof Date)
    return t;
}
var mT = (e, t, r) => {
  var n = e.map(vT).filter((i) => i != null);
  return r && (t.dataKey == null || t.allowDuplicatedCategory && Jv(n)) ? Sy(0, e.length) : t.allowDuplicatedCategory ? n : Array.from(new Set(n));
}, $g = (e) => e.referenceElements.dots, sn = (e, t, r) => e.filter((n) => n.ifOverflow === "extendDomain").filter((n) => t === "xAxis" ? n.xAxisId === r : n.yAxisId === r), yT = E([$g, de, ri], sn), Lg = (e) => e.referenceElements.areas, gT = E([Lg, de, ri], sn), Fg = (e) => e.referenceElements.lines, bT = E([Fg, de, ri], sn), zg = (e, t) => {
  if (e != null) {
    var r = Yt(e.map((n) => t === "xAxis" ? n.x : n.y));
    if (r.length !== 0)
      return [Math.min(...r), Math.max(...r)];
  }
}, wT = E(yT, de, zg), qg = (e, t) => {
  if (e != null) {
    var r = Yt(e.flatMap((n) => [t === "xAxis" ? n.x1 : n.y1, t === "xAxis" ? n.x2 : n.y2]));
    if (r.length !== 0)
      return [Math.min(...r), Math.max(...r)];
  }
}, OT = E([gT, de], qg);
function xT(e) {
  var t;
  if (e.x != null)
    return Yt([e.x]);
  var r = (t = e.segment) === null || t === void 0 ? void 0 : t.map((n) => n.x);
  return r == null || r.length === 0 ? [] : Yt(r);
}
function PT(e) {
  var t;
  if (e.y != null)
    return Yt([e.y]);
  var r = (t = e.segment) === null || t === void 0 ? void 0 : t.map((n) => n.y);
  return r == null || r.length === 0 ? [] : Yt(r);
}
var Bg = (e, t) => {
  if (e != null) {
    var r = e.flatMap((n) => t === "xAxis" ? xT(n) : PT(n));
    if (r.length !== 0)
      return [Math.min(...r), Math.max(...r)];
  }
}, _T = E([bT, de], Bg), ET = E(wT, _T, OT, (e, t, r) => ya(e, r, t)), uc = (e, t, r, n, i, a, o, u) => {
  if (r != null)
    return r;
  var s = o === "vertical" && u === "xAxis" || o === "horizontal" && u === "yAxis", c = s ? ya(n, a, i) : ya(a, i);
  return MA(t, c, e.allowDataOverflow);
}, ST = E([ve, ic, ac, dT, hT, ET, se, de], uc, {
  memoizeOptions: {
    resultEqualityCheck: eo
  }
}), AT = [0, 1], sc = (e, t, r, n, i, a, o) => {
  if (!((e == null || r == null || r.length === 0) && o === void 0)) {
    var {
      dataKey: u,
      type: s
    } = e, c = Rr(t, a);
    if (c && u == null) {
      var l;
      return Sy(0, (l = r?.length) !== null && l !== void 0 ? l : 0);
    }
    return s === "category" ? mT(n, e, c) : i === "expand" ? AT : o;
  }
}, lc = E([ve, se, tc, ro, ti, de, ST], sc), Ug = (e, t, r, n, i) => {
  if (e != null) {
    var {
      scale: a,
      type: o
    } = e;
    if (a === "auto")
      return t === "radial" && i === "radiusAxis" ? "band" : t === "radial" && i === "angleAxis" ? "linear" : o === "category" && n && (n.indexOf("LineChart") >= 0 || n.indexOf("AreaChart") >= 0 || n.indexOf("ComposedChart") >= 0 && !r) ? "point" : o === "category" ? "band" : "linear";
    if (typeof a == "string") {
      var u = "scale".concat(Bn(a));
      return u in En ? u : "point";
    }
  }
}, ln = E([ve, se, Mg, Ul, de], Ug);
function TT(e) {
  if (e != null) {
    if (e in En)
      return En[e]();
    var t = "scale".concat(Bn(e));
    if (t in En)
      return En[t]();
  }
}
function cc(e, t, r, n) {
  if (!(r == null || n == null)) {
    if (typeof e.scale == "function")
      return e.scale.copy().domain(r).range(n);
    var i = TT(t);
    if (i != null) {
      var a = i.domain(r).range(n);
      return m1(a), a;
    }
  }
}
var fc = (e, t, r) => {
  var n = nc(t);
  if (!(r !== "auto" && r !== "linear")) {
    if (t != null && t.tickCount && Array.isArray(n) && (n[0] === "auto" || n[1] === "auto") && ur(e))
      return zA(e, t.tickCount, t.allowDecimals);
    if (t != null && t.tickCount && t.type === "number" && ur(e))
      return qA(e, t.tickCount, t.allowDecimals);
  }
}, dc = E([lc, ni, ln], fc), pc = (e, t, r, n) => {
  if (
    /*
     * Angle axis for some reason uses nice ticks when rendering axis tick labels,
     * but doesn't use nice ticks for extending domain like all the other axes do.
     * Not really sure why? Is there a good reason,
     * or is it just because someone added support for nice ticks to the other axes and forgot this one?
     */
    n !== "angleAxis" && e?.type === "number" && ur(t) && Array.isArray(r) && r.length > 0
  ) {
    var i = t[0], a = r[0], o = t[1], u = r[r.length - 1];
    return [Math.min(i, a), Math.max(o, u)];
  }
  return t;
}, jT = E([ve, lc, dc, de], pc), CT = E(ro, ve, (e, t) => {
  if (!(!t || t.type !== "number")) {
    var r = 1 / 0, n = Array.from(Yt(e.map((f) => f.value))).sort((f, d) => f - d), i = n[0], a = n[n.length - 1];
    if (i == null || a == null)
      return 1 / 0;
    var o = a - i;
    if (o === 0)
      return 1 / 0;
    for (var u = 0; u < n.length - 1; u++) {
      var s = n[u], c = n[u + 1];
      if (!(s == null || c == null)) {
        var l = c - s;
        r = Math.min(r, l);
      }
    }
    return r / o;
  }
}), Wg = E(CT, se, BA, Fe, (e, t, r, n, i) => i, (e, t, r, n, i) => {
  if (!je(e))
    return 0;
  var a = t === "vertical" ? n.height : n.width;
  if (i === "gap")
    return e * a / 2;
  if (i === "no-gap") {
    var o = ot(r, e * a), u = e * a / 2;
    return u - o - (u - o) / a * o;
  }
  return 0;
}), MT = (e, t, r) => {
  var n = vr(e, t);
  return n == null || typeof n.padding != "string" ? 0 : Wg(e, "xAxis", t, r, n.padding);
}, DT = (e, t, r) => {
  var n = mr(e, t);
  return n == null || typeof n.padding != "string" ? 0 : Wg(e, "yAxis", t, r, n.padding);
}, IT = E(vr, MT, (e, t) => {
  var r, n;
  if (e == null)
    return {
      left: 0,
      right: 0
    };
  var {
    padding: i
  } = e;
  return typeof i == "string" ? {
    left: t,
    right: t
  } : {
    left: ((r = i.left) !== null && r !== void 0 ? r : 0) + t,
    right: ((n = i.right) !== null && n !== void 0 ? n : 0) + t
  };
}), NT = E(mr, DT, (e, t) => {
  var r, n;
  if (e == null)
    return {
      top: 0,
      bottom: 0
    };
  var {
    padding: i
  } = e;
  return typeof i == "string" ? {
    top: t,
    bottom: t
  } : {
    top: ((r = i.top) !== null && r !== void 0 ? r : 0) + t,
    bottom: ((n = i.bottom) !== null && n !== void 0 ? n : 0) + t
  };
}), kT = E([Fe, IT, Fa, La, (e, t, r) => r], (e, t, r, n, i) => {
  var {
    padding: a
  } = n;
  return i ? [a.left, r.width - a.right] : [e.left + t.left, e.left + e.width - t.right];
}), RT = E([Fe, se, NT, Fa, La, (e, t, r) => r], (e, t, r, n, i, a) => {
  var {
    padding: o
  } = i;
  return a ? [n.height - o.bottom, o.top] : t === "horizontal" ? [e.top + e.height - r.bottom, e.top + r.top] : [e.top + r.top, e.top + e.height - r.bottom];
}), oi = (e, t, r, n) => {
  var i;
  switch (t) {
    case "xAxis":
      return kT(e, r, n);
    case "yAxis":
      return RT(e, r, n);
    case "zAxis":
      return (i = Xl(e, r)) === null || i === void 0 ? void 0 : i.range;
    case "angleAxis":
      return Sg(e);
    case "radiusAxis":
      return Ag(e, r);
    default:
      return;
  }
}, Vg = E([ve, oi], Ja), io = E([ve, ln, jT, Vg], cc);
E([ii, no, de], pT);
function Kg(e, t) {
  return e.id < t.id ? -1 : e.id > t.id ? 1 : 0;
}
var ao = (e, t) => t, oo = (e, t, r) => r, $T = E(Ra, ao, oo, (e, t, r) => e.filter((n) => n.orientation === t).filter((n) => n.mirror === r).sort(Kg)), LT = E($a, ao, oo, (e, t, r) => e.filter((n) => n.orientation === t).filter((n) => n.mirror === r).sort(Kg)), Hg = (e, t) => ({
  width: e.width,
  height: t.height
}), FT = (e, t) => {
  var r = typeof t.width == "number" ? t.width : Gn;
  return {
    width: r,
    height: e.height
  };
};
E(Fe, vr, Hg);
var zT = (e, t, r) => {
  switch (t) {
    case "top":
      return e.top;
    case "bottom":
      return r - e.bottom;
    default:
      return 0;
  }
}, qT = (e, t, r) => {
  switch (t) {
    case "left":
      return e.left;
    case "right":
      return r - e.right;
    default:
      return 0;
  }
}, BT = E(Xt, Fe, $T, ao, oo, (e, t, r, n, i) => {
  var a = {}, o;
  return r.forEach((u) => {
    var s = Hg(t, u);
    o == null && (o = zT(t, n, e));
    var c = n === "top" && !i || n === "bottom" && i;
    a[u.id] = o - Number(c) * s.height, o += (c ? -1 : 1) * s.height;
  }), a;
}), UT = E(Gt, Fe, LT, ao, oo, (e, t, r, n, i) => {
  var a = {}, o;
  return r.forEach((u) => {
    var s = FT(t, u);
    o == null && (o = qT(t, n, e));
    var c = n === "left" && !i || n === "right" && i;
    a[u.id] = o - Number(c) * s.width, o += (c ? -1 : 1) * s.width;
  }), a;
}), WT = (e, t) => {
  var r = vr(e, t);
  if (r != null)
    return BT(e, r.orientation, r.mirror);
};
E([Fe, vr, WT, (e, t) => t], (e, t, r, n) => {
  if (t != null) {
    var i = r?.[n];
    return i == null ? {
      x: e.left,
      y: 0
    } : {
      x: e.left,
      y: i
    };
  }
});
var VT = (e, t) => {
  var r = mr(e, t);
  if (r != null)
    return UT(e, r.orientation, r.mirror);
};
E([Fe, mr, VT, (e, t) => t], (e, t, r, n) => {
  if (t != null) {
    var i = r?.[n];
    return i == null ? {
      x: 0,
      y: e.top
    } : {
      x: i,
      y: e.top
    };
  }
});
E(Fe, mr, (e, t) => {
  var r = typeof t.width == "number" ? t.width : Gn;
  return {
    width: r,
    height: e.height
  };
});
var Yg = (e, t, r, n) => {
  if (r != null) {
    var {
      allowDuplicatedCategory: i,
      type: a,
      dataKey: o
    } = r, u = Rr(e, n), s = t.map((c) => c.value);
    if (o && u && a === "category" && i && Jv(s))
      return s;
  }
}, hc = E([se, ro, ve, de], Yg), Gg = (e, t, r, n) => {
  if (!(r == null || r.dataKey == null)) {
    var {
      type: i,
      scale: a
    } = r, o = Rr(e, n);
    if (o && (i === "number" || a !== "auto"))
      return t.map((u) => u.value);
  }
}, vc = E([se, ro, ni, de], Gg);
E([se, nT, ln, io, hc, vc, oi, dc, de], (e, t, r, n, i, a, o, u, s) => {
  if (t != null) {
    var c = Rr(e, s);
    return {
      angle: t.angle,
      interval: t.interval,
      minTickGap: t.minTickGap,
      orientation: t.orientation,
      tick: t.tick,
      tickCount: t.tickCount,
      tickFormatter: t.tickFormatter,
      ticks: t.ticks,
      type: t.type,
      unit: t.unit,
      axisType: s,
      categoricalDomain: a,
      duplicateDomain: i,
      isCategorical: c,
      niceTicks: u,
      range: o,
      realScaleType: r,
      scale: n
    };
  }
});
var KT = (e, t, r, n, i, a, o, u, s) => {
  if (!(t == null || n == null)) {
    var c = Rr(e, s), {
      type: l,
      ticks: f,
      tickCount: d
    } = t, p = r === "scaleBand" && typeof n.bandwidth == "function" ? n.bandwidth() / 2 : 2, v = l === "category" && n.bandwidth ? n.bandwidth() / p : 0;
    v = s === "angleAxis" && a != null && a.length >= 2 ? Je(a[0] - a[1]) * 2 * v : v;
    var h = f || i;
    if (h) {
      var m = h.map((y, b) => {
        var w = o ? o.indexOf(y) : y;
        return {
          index: b,
          // If the scaleContent is not a number, the coordinate will be NaN.
          // That could be the case for example with a PointScale and a string as domain.
          coordinate: n(w) + v,
          value: y,
          offset: v
        };
      });
      return m.filter((y) => je(y.coordinate));
    }
    return c && u ? u.map((y, b) => ({
      coordinate: n(y) + v,
      value: y,
      index: b,
      offset: v
    })).filter((y) => je(y.coordinate)) : n.ticks ? n.ticks(d).map((y) => ({
      coordinate: n(y) + v,
      value: y,
      offset: v
    })) : n.domain().map((y, b) => ({
      coordinate: n(y) + v,
      value: o ? o[y] : y,
      index: b,
      offset: v
    }));
  }
};
E([se, ni, ln, io, dc, oi, hc, vc, de], KT);
var HT = (e, t, r, n, i, a, o) => {
  if (!(t == null || r == null || n == null || n[0] === n[1])) {
    var u = Rr(e, o), {
      tickCount: s
    } = t, c = 0;
    return c = o === "angleAxis" && n?.length >= 2 ? Je(n[0] - n[1]) * 2 * c : c, u && a ? a.map((l, f) => ({
      coordinate: r(l) + c,
      value: l,
      index: f,
      offset: c
    })) : r.ticks ? r.ticks(s).map((l) => ({
      coordinate: r(l) + c,
      value: l,
      offset: c
    })) : r.domain().map((l, f) => ({
      coordinate: r(l) + c,
      value: i ? i[l] : l,
      index: f,
      offset: c
    }));
  }
};
E([se, ni, io, oi, hc, vc, de], HT);
E(ve, io, (e, t) => {
  if (!(e == null || t == null))
    return ma(ma({}, e), {}, {
      scale: t
    });
});
var YT = E([ve, ln, lc, Vg], cc);
E((e, t, r) => Xl(e, r), YT, (e, t) => {
  if (!(e == null || t == null))
    return ma(ma({}, e), {}, {
      scale: t
    });
});
var GT = E([se, Ra, $a], (e, t, r) => {
  switch (e) {
    case "horizontal":
      return t.some((n) => n.reversed) ? "right-to-left" : "left-to-right";
    case "vertical":
      return r.some((n) => n.reversed) ? "bottom-to-top" : "top-to-bottom";
    // TODO: make this better. For now, right arrow triggers "forward", left arrow "back"
    // however, the tooltip moves an unintuitive direction because of how the indices are rendered
    case "centric":
    case "radial":
      return "left-to-right";
    default:
      return;
  }
}), Xg = (e) => e.options.defaultTooltipEventType, Zg = (e) => e.options.validateTooltipEventTypes;
function Jg(e, t, r) {
  if (e == null)
    return t;
  var n = e ? "axis" : "item";
  return r == null ? t : r.includes(n) ? n : t;
}
function mc(e, t) {
  var r = Xg(e), n = Zg(e);
  return Jg(t, r, n);
}
function XT(e) {
  return U((t) => mc(t, e));
}
var Qg = (e, t) => {
  var r, n = Number(t);
  if (!(qt(n) || t == null))
    return n >= 0 ? e == null || (r = e[n]) === null || r === void 0 ? void 0 : r.value : void 0;
}, ZT = (e) => e.tooltip.settings, tr = {
  active: !1,
  index: null,
  dataKey: void 0,
  graphicalItemId: void 0,
  coordinate: void 0
}, JT = {
  itemInteraction: {
    click: tr,
    hover: tr
  },
  axisInteraction: {
    click: tr,
    hover: tr
  },
  keyboardInteraction: tr,
  syncInteraction: {
    active: !1,
    index: null,
    dataKey: void 0,
    label: void 0,
    coordinate: void 0,
    sourceViewBox: void 0,
    graphicalItemId: void 0
  },
  tooltipItemPayloads: [],
  settings: {
    shared: void 0,
    trigger: "hover",
    axisId: 0,
    active: !1,
    defaultIndex: void 0
  }
}, eb = tt({
  name: "tooltip",
  initialState: JT,
  reducers: {
    addTooltipEntrySettings: {
      reducer(e, t) {
        e.tooltipItemPayloads.push(t.payload);
      },
      prepare: ce()
    },
    replaceTooltipEntrySettings: {
      reducer(e, t) {
        var {
          prev: r,
          next: n
        } = t.payload, i = St(e).tooltipItemPayloads.indexOf(r);
        i > -1 && (e.tooltipItemPayloads[i] = n);
      },
      prepare: ce()
    },
    removeTooltipEntrySettings: {
      reducer(e, t) {
        var r = St(e).tooltipItemPayloads.indexOf(t.payload);
        r > -1 && e.tooltipItemPayloads.splice(r, 1);
      },
      prepare: ce()
    },
    setTooltipSettingsState(e, t) {
      e.settings = t.payload;
    },
    setActiveMouseOverItemIndex(e, t) {
      e.syncInteraction.active = !1, e.keyboardInteraction.active = !1, e.itemInteraction.hover.active = !0, e.itemInteraction.hover.index = t.payload.activeIndex, e.itemInteraction.hover.dataKey = t.payload.activeDataKey, e.itemInteraction.hover.graphicalItemId = t.payload.activeGraphicalItemId, e.itemInteraction.hover.coordinate = t.payload.activeCoordinate;
    },
    mouseLeaveChart(e) {
      e.itemInteraction.hover.active = !1, e.axisInteraction.hover.active = !1;
    },
    mouseLeaveItem(e) {
      e.itemInteraction.hover.active = !1;
    },
    setActiveClickItemIndex(e, t) {
      e.syncInteraction.active = !1, e.itemInteraction.click.active = !0, e.keyboardInteraction.active = !1, e.itemInteraction.click.index = t.payload.activeIndex, e.itemInteraction.click.dataKey = t.payload.activeDataKey, e.itemInteraction.click.graphicalItemId = t.payload.activeGraphicalItemId, e.itemInteraction.click.coordinate = t.payload.activeCoordinate;
    },
    setMouseOverAxisIndex(e, t) {
      e.syncInteraction.active = !1, e.axisInteraction.hover.active = !0, e.keyboardInteraction.active = !1, e.axisInteraction.hover.index = t.payload.activeIndex, e.axisInteraction.hover.dataKey = t.payload.activeDataKey, e.axisInteraction.hover.coordinate = t.payload.activeCoordinate;
    },
    setMouseClickAxisIndex(e, t) {
      e.syncInteraction.active = !1, e.keyboardInteraction.active = !1, e.axisInteraction.click.active = !0, e.axisInteraction.click.index = t.payload.activeIndex, e.axisInteraction.click.dataKey = t.payload.activeDataKey, e.axisInteraction.click.coordinate = t.payload.activeCoordinate;
    },
    setSyncInteraction(e, t) {
      e.syncInteraction = t.payload;
    },
    setKeyboardInteraction(e, t) {
      e.keyboardInteraction.active = t.payload.active, e.keyboardInteraction.index = t.payload.activeIndex, e.keyboardInteraction.coordinate = t.payload.activeCoordinate;
    }
  }
}), {
  addTooltipEntrySettings: QT,
  replaceTooltipEntrySettings: ej,
  removeTooltipEntrySettings: tj,
  setTooltipSettingsState: rj,
  setActiveMouseOverItemIndex: tb,
  mouseLeaveItem: nj,
  mouseLeaveChart: rb,
  setActiveClickItemIndex: ij,
  setMouseOverAxisIndex: nb,
  setMouseClickAxisIndex: aj,
  setSyncInteraction: ks,
  setKeyboardInteraction: Rs
} = eb.actions, oj = eb.reducer;
function hh(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function ji(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? hh(Object(r), !0).forEach(function(n) {
      uj(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : hh(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function uj(e, t, r) {
  return (t = sj(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function sj(e) {
  var t = lj(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function lj(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function cj(e, t, r) {
  return t === "axis" ? r === "click" ? e.axisInteraction.click : e.axisInteraction.hover : r === "click" ? e.itemInteraction.click : e.itemInteraction.hover;
}
function fj(e) {
  return e.index != null;
}
var ib = (e, t, r, n) => {
  if (t == null)
    return tr;
  var i = cj(e, t, r);
  if (i == null)
    return tr;
  if (i.active)
    return i;
  if (e.keyboardInteraction.active)
    return e.keyboardInteraction;
  if (e.syncInteraction.active && e.syncInteraction.index != null)
    return e.syncInteraction;
  var a = e.settings.active === !0;
  if (fj(i)) {
    if (a)
      return ji(ji({}, i), {}, {
        active: !0
      });
  } else if (n != null)
    return {
      active: !0,
      coordinate: void 0,
      dataKey: void 0,
      index: n,
      graphicalItemId: void 0
    };
  return ji(ji({}, tr), {}, {
    coordinate: i.coordinate
  });
};
function dj(e) {
  if (typeof e == "number")
    return Number.isFinite(e) ? e : void 0;
  if (e instanceof Date) {
    var t = e.valueOf();
    return Number.isFinite(t) ? t : void 0;
  }
  var r = Number(e);
  return Number.isFinite(r) ? r : void 0;
}
function pj(e, t) {
  var r = dj(e), n = t[0], i = t[1];
  if (r === void 0)
    return !1;
  var a = Math.min(n, i), o = Math.max(n, i);
  return r >= a && r <= o;
}
function hj(e, t, r) {
  if (r == null || t == null)
    return !0;
  var n = be(e, t);
  return n == null || !ur(r) ? !0 : pj(n, r);
}
var yc = (e, t, r, n) => {
  var i = e?.index;
  if (i == null)
    return null;
  var a = Number(i);
  if (!je(a))
    return i;
  var o = 0, u = 1 / 0;
  t.length > 0 && (u = t.length - 1);
  var s = Math.max(o, Math.min(a, u)), c = t[s];
  return c == null || hj(c, r, n) ? String(s) : null;
}, ab = (e, t, r, n, i, a, o, u) => {
  if (!(a == null || u == null)) {
    var s = o[0], c = s == null ? void 0 : u(s.positions, a);
    if (c != null)
      return c;
    var l = i?.[Number(a)];
    if (l)
      switch (r) {
        case "horizontal":
          return {
            x: l.coordinate,
            y: (n.top + t) / 2
          };
        default:
          return {
            x: (n.left + e) / 2,
            y: l.coordinate
          };
      }
  }
}, ob = (e, t, r, n) => {
  if (t === "axis")
    return e.tooltipItemPayloads;
  if (e.tooltipItemPayloads.length === 0)
    return [];
  var i;
  if (r === "hover" ? i = e.itemInteraction.hover.graphicalItemId : i = e.itemInteraction.click.graphicalItemId, i == null && n != null) {
    var a = e.tooltipItemPayloads[0];
    return a != null ? [a] : [];
  }
  return e.tooltipItemPayloads.filter((o) => {
    var u;
    return ((u = o.settings) === null || u === void 0 ? void 0 : u.graphicalItemId) === i;
  });
}, ui = (e) => e.options.tooltipPayloadSearcher, cn = (e) => e.tooltip;
function vh(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function mh(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? vh(Object(r), !0).forEach(function(n) {
      vj(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : vh(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function vj(e, t, r) {
  return (t = mj(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function mj(e) {
  var t = yj(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function yj(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function gj(e, t) {
  return e ?? t;
}
var ub = (e, t, r, n, i, a, o) => {
  if (!(t == null || a == null)) {
    var {
      chartData: u,
      computedData: s,
      dataStartIndex: c,
      dataEndIndex: l
    } = r, f = [];
    return e.reduce((d, p) => {
      var v, {
        dataDefinedOnItem: h,
        settings: m
      } = p, y = gj(h, u), b = Array.isArray(y) ? Zm(y, c, l) : y, w = (v = m?.dataKey) !== null && v !== void 0 ? v : n, _ = m?.nameKey, O;
      if (n && Array.isArray(b) && /*
       * findEntryInArray won't work for Scatter because Scatter provides an array of arrays
       * as tooltip payloads and findEntryInArray is not prepared to handle that.
       * Sad but also ScatterChart only allows 'item' tooltipEventType
       * and also this is only a problem if there are multiple Scatters and each has its own data array
       * so let's fix that some other time.
       */
      !Array.isArray(b[0]) && /*
       * If the tooltipEventType is 'axis', we should search for the dataKey in the sliced data
       * because thanks to allowDuplicatedCategory=false, the order of elements in the array
       * no longer matches the order of elements in the original data
       * and so we need to search by the active dataKey + label rather than by index.
       *
       * The same happens if multiple graphical items are present in the chart
       * and each of them has its own data array. Those arrays get concatenated
       * and again the tooltip index no longer matches the original data.
       *
       * On the other hand the tooltipEventType 'item' should always search by index
       * because we get the index from interacting over the individual elements
       * which is always accurate, irrespective of the allowDuplicatedCategory setting.
       */
      o === "axis" ? O = jw(b, n, i) : O = a(b, t, s, _), Array.isArray(O))
        O.forEach((S) => {
          var D = mh(mh({}, m), {}, {
            // @ts-expect-error we're assuming that item has name and unit properties
            name: S.name,
            // @ts-expect-error we're assuming that item has name and unit properties
            unit: S.unit,
            // color and fill are erased to keep 100% the identical behaviour to recharts 2.x - but there's nothing stopping us from returning them here. It's technically a breaking change.
            color: void 0,
            // color and fill are erased to keep 100% the identical behaviour to recharts 2.x - but there's nothing stopping us from returning them here. It's technically a breaking change.
            fill: void 0
          });
          d.push(wd({
            tooltipEntrySettings: D,
            // @ts-expect-error we're assuming that item has name and unit properties
            dataKey: S.dataKey,
            // @ts-expect-error we're assuming that item has name and unit properties
            payload: S.payload,
            // @ts-expect-error getValueByDataKey does not validate the output type
            value: be(S.payload, S.dataKey),
            // @ts-expect-error we're assuming that item has name and unit properties
            name: S.name
          }));
        });
      else {
        var x;
        d.push(wd({
          tooltipEntrySettings: m,
          dataKey: w,
          payload: O,
          // @ts-expect-error getValueByDataKey does not validate the output type
          value: be(O, w),
          // @ts-expect-error getValueByDataKey does not validate the output type
          name: (x = be(O, _)) !== null && x !== void 0 ? x : m?.name
        }));
      }
      return d;
    }, f);
  }
}, gc = E([Re, se, Mg, Ul, ke], Ug), bj = E([(e) => e.graphicalItems.cartesianItems, (e) => e.graphicalItems.polarItems], (e, t) => [...e, ...t]), wj = E([ke, un], Zl), fn = E([bj, Re, wj], Jl, {
  memoizeOptions: {
    resultEqualityCheck: to
  }
}), Oj = E([fn], (e) => e.filter(Gl)), xj = E([fn], Ql, {
  memoizeOptions: {
    resultEqualityCheck: to
  }
}), dn = E([xj, hr], ec), Pj = E([Oj, hr, Re], Cg), bc = E([dn, Re, fn], rc), sb = E([Re], nc), _j = E([Re], (e) => e.allowDataOverflow), lb = E([sb, _j], sg), Ej = E([fn], (e) => e.filter(Gl)), Sj = E([Pj, Ej, ti, xg], kg), Aj = E([Sj, hr, ke, lb], Rg), Tj = E([fn], Ig), jj = E([dn, Re, Tj, no, ke], oc, {
  memoizeOptions: {
    resultEqualityCheck: eo
  }
}), Cj = E([$g, ke, un], sn), Mj = E([Cj, ke], zg), Dj = E([Lg, ke, un], sn), Ij = E([Dj, ke], qg), Nj = E([Fg, ke, un], sn), kj = E([Nj, ke], Bg), Rj = E([Mj, kj, Ij], ya), $j = E([Re, sb, lb, Aj, jj, Rj, se, ke], uc), si = E([Re, se, dn, bc, ti, ke, $j], sc), Lj = E([si, Re, gc], fc), Fj = E([Re, si, Lj, ke], pc), cb = (e) => {
  var t = ke(e), r = un(e), n = !1;
  return oi(e, t, r, n);
}, fb = E([Re, cb], Ja), db = E([Re, gc, Fj, fb], cc), zj = E([se, bc, Re, ke], Yg), qj = E([se, bc, Re, ke], Gg), Bj = (e, t, r, n, i, a, o, u) => {
  if (t) {
    var {
      type: s
    } = t, c = Rr(e, u);
    if (n) {
      var l = r === "scaleBand" && n.bandwidth ? n.bandwidth() / 2 : 2, f = s === "category" && n.bandwidth ? n.bandwidth() / l : 0;
      return f = u === "angleAxis" && i != null && i?.length >= 2 ? Je(i[0] - i[1]) * 2 * f : f, c && o ? o.map((d, p) => ({
        coordinate: n(d) + f,
        value: d,
        index: p,
        offset: f
      })) : n.domain().map((d, p) => ({
        coordinate: n(d) + f,
        value: a ? a[d] : d,
        index: p,
        offset: f
      }));
    }
  }
}, Jt = E([se, Re, gc, db, cb, zj, qj, ke], Bj), wc = E([Xg, Zg, ZT], (e, t, r) => Jg(r.shared, e, t)), pb = (e) => e.tooltip.settings.trigger, Oc = (e) => e.tooltip.settings.defaultIndex, li = E([cn, wc, pb, Oc], ib), zn = E([li, dn, ai, si], yc), hb = E([Jt, zn], Qg), vb = E([li], (e) => {
  if (e)
    return e.dataKey;
}), Uj = E([li], (e) => {
  if (e)
    return e.graphicalItemId;
}), mb = E([cn, wc, pb, Oc], ob), Wj = E([Gt, Xt, se, Fe, Jt, Oc, mb, ui], ab), Vj = E([li, Wj], (e, t) => e != null && e.coordinate ? e.coordinate : t), Kj = E([li], (e) => {
  var t;
  return (t = e?.active) !== null && t !== void 0 ? t : !1;
}), Hj = E([mb, zn, hr, ai, hb, ui, wc], ub);
E([Hj], (e) => {
  if (e != null) {
    var t = e.map((r) => r.payload).filter((r) => r != null);
    return Array.from(new Set(t));
  }
});
function yh(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function gh(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? yh(Object(r), !0).forEach(function(n) {
      Yj(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : yh(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Yj(e, t, r) {
  return (t = Gj(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Gj(e) {
  var t = Xj(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function Xj(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Zj = () => U(Re), Jj = () => {
  var e = Zj(), t = U(Jt), r = U(db);
  return bd(!e || !r ? void 0 : gh(gh({}, e), {}, {
    scale: r
  }), t);
};
function bh(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Br(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? bh(Object(r), !0).forEach(function(n) {
      Qj(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : bh(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Qj(e, t, r) {
  return (t = eC(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function eC(e) {
  var t = tC(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function tC(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var rC = (e, t, r, n) => {
  var i = t.find((a) => a && a.index === r);
  if (i) {
    if (e === "horizontal")
      return {
        x: i.coordinate,
        y: n.chartY
      };
    if (e === "vertical")
      return {
        x: n.chartX,
        y: i.coordinate
      };
  }
  return {
    x: 0,
    y: 0
  };
}, nC = (e, t, r, n) => {
  var i = t.find((c) => c && c.index === r);
  if (i) {
    if (e === "centric") {
      var a = i.coordinate, {
        radius: o
      } = n;
      return Br(Br(Br({}, n), Ae(n.cx, n.cy, o, a)), {}, {
        angle: a,
        radius: o
      });
    }
    var u = i.coordinate, {
      angle: s
    } = n;
    return Br(Br(Br({}, n), Ae(n.cx, n.cy, u, s)), {}, {
      angle: s,
      radius: u
    });
  }
  return {
    angle: 0,
    clockWise: !1,
    cx: 0,
    cy: 0,
    endAngle: 0,
    innerRadius: 0,
    outerRadius: 0,
    radius: 0,
    startAngle: 0,
    x: 0,
    y: 0
  };
};
function iC(e, t) {
  var {
    chartX: r,
    chartY: n
  } = e;
  return r >= t.left && r <= t.left + t.width && n >= t.top && n <= t.top + t.height;
}
var yb = (e, t, r, n, i) => {
  var a, o = (a = t?.length) !== null && a !== void 0 ? a : 0;
  if (o <= 1 || e == null)
    return 0;
  if (n === "angleAxis" && i != null && Math.abs(Math.abs(i[1] - i[0]) - 360) <= 1e-6)
    for (var u = 0; u < o; u++) {
      var s, c, l, f, d, p = u > 0 ? (s = r[u - 1]) === null || s === void 0 ? void 0 : s.coordinate : (c = r[o - 1]) === null || c === void 0 ? void 0 : c.coordinate, v = (l = r[u]) === null || l === void 0 ? void 0 : l.coordinate, h = u >= o - 1 ? (f = r[0]) === null || f === void 0 ? void 0 : f.coordinate : (d = r[u + 1]) === null || d === void 0 ? void 0 : d.coordinate, m = void 0;
      if (!(p == null || v == null || h == null))
        if (Je(v - p) !== Je(h - v)) {
          var y = [];
          if (Je(h - v) === Je(i[1] - i[0])) {
            m = h;
            var b = v + i[1] - i[0];
            y[0] = Math.min(b, (b + p) / 2), y[1] = Math.max(b, (b + p) / 2);
          } else {
            m = p;
            var w = h + i[1] - i[0];
            y[0] = Math.min(v, (w + v) / 2), y[1] = Math.max(v, (w + v) / 2);
          }
          var _ = [Math.min(v, (m + v) / 2), Math.max(v, (m + v) / 2)];
          if (e > _[0] && e <= _[1] || e >= y[0] && e <= y[1]) {
            var O;
            return (O = r[u]) === null || O === void 0 ? void 0 : O.index;
          }
        } else {
          var x = Math.min(p, h), S = Math.max(p, h);
          if (e > (x + v) / 2 && e <= (S + v) / 2) {
            var D;
            return (D = r[u]) === null || D === void 0 ? void 0 : D.index;
          }
        }
    }
  else if (t)
    for (var k = 0; k < o; k++) {
      var $ = t[k];
      if ($ != null) {
        var j = t[k + 1], A = t[k - 1];
        if (k === 0 && j != null && e <= ($.coordinate + j.coordinate) / 2 || k === o - 1 && A != null && e > ($.coordinate + A.coordinate) / 2 || k > 0 && k < o - 1 && A != null && j != null && e > ($.coordinate + A.coordinate) / 2 && e <= ($.coordinate + j.coordinate) / 2)
          return $.index;
      }
    }
  return -1;
}, aC = () => U(Ul), xc = (e, t) => t, gb = (e, t, r) => r, Pc = (e, t, r, n) => n, oC = E(Jt, (e) => Ta(e, (t) => t.coordinate)), _c = E([cn, xc, gb, Pc], ib), Ec = E([_c, dn, ai, si], yc), uC = (e, t, r) => {
  if (t != null) {
    var n = cn(e);
    return t === "axis" ? r === "hover" ? n.axisInteraction.hover.dataKey : n.axisInteraction.click.dataKey : r === "hover" ? n.itemInteraction.hover.dataKey : n.itemInteraction.click.dataKey;
  }
}, bb = E([cn, xc, gb, Pc], ob), ga = E([Gt, Xt, se, Fe, Jt, Pc, bb, ui], ab), sC = E([_c, ga], (e, t) => {
  var r;
  return (r = e.coordinate) !== null && r !== void 0 ? r : t;
}), wb = E([Jt, Ec], Qg), lC = E([bb, Ec, hr, ai, wb, ui, xc], ub), cC = E([_c, Ec], (e, t) => ({
  isActive: e.active && t != null,
  activeIndex: t
})), fC = (e, t, r, n, i, a, o) => {
  if (!(!e || !r || !n || !i) && iC(e, o)) {
    var u = _1(e, t), s = yb(u, a, i, r, n), c = rC(t, i, s, e);
    return {
      activeIndex: String(s),
      activeCoordinate: c
    };
  }
}, dC = (e, t, r, n, i, a, o) => {
  if (!(!e || !n || !i || !a || !r)) {
    var u = H_(e, r);
    if (u) {
      var s = E1(u, t), c = yb(s, o, a, n, i), l = nC(t, a, c, u);
      return {
        activeIndex: String(c),
        activeCoordinate: l
      };
    }
  }
}, pC = (e, t, r, n, i, a, o, u) => {
  if (!(!e || !t || !n || !i || !a))
    return t === "horizontal" || t === "vertical" ? fC(e, t, n, i, a, o, u) : dC(e, t, r, n, i, a, o);
}, hC = E((e) => e.zIndex.zIndexMap, (e, t) => t, (e, t, r) => r, (e, t, r) => {
  if (t != null) {
    var n = e[t];
    if (n != null)
      return r ? n.panoramaElement : n.element;
  }
}), vC = E((e) => e.zIndex.zIndexMap, (e) => {
  var t = Object.keys(e).map((n) => parseInt(n, 10)).concat(Object.values(Et)), r = Array.from(new Set(t));
  return r.sort((n, i) => n - i);
}, {
  memoizeOptions: {
    resultEqualityCheck: YA
  }
});
function wh(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Oh(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? wh(Object(r), !0).forEach(function(n) {
      mC(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : wh(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function mC(e, t, r) {
  return (t = yC(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function yC(e) {
  var t = gC(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function gC(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var bC = {}, wC = {
  zIndexMap: Object.values(Et).reduce((e, t) => Oh(Oh({}, e), {}, {
    [t]: {
      element: void 0,
      panoramaElement: void 0,
      consumers: 0
    }
  }), bC)
}, OC = new Set(Object.values(Et));
function xC(e) {
  return OC.has(e);
}
var Ob = tt({
  name: "zIndex",
  initialState: wC,
  reducers: {
    registerZIndexPortal: {
      reducer: (e, t) => {
        var {
          zIndex: r
        } = t.payload;
        e.zIndexMap[r] ? e.zIndexMap[r].consumers += 1 : e.zIndexMap[r] = {
          consumers: 1,
          element: void 0,
          panoramaElement: void 0
        };
      },
      prepare: ce()
    },
    unregisterZIndexPortal: {
      reducer: (e, t) => {
        var {
          zIndex: r
        } = t.payload;
        e.zIndexMap[r] && (e.zIndexMap[r].consumers -= 1, e.zIndexMap[r].consumers <= 0 && !xC(r) && delete e.zIndexMap[r]);
      },
      prepare: ce()
    },
    registerZIndexPortalElement: {
      reducer: (e, t) => {
        var {
          zIndex: r,
          element: n,
          isPanorama: i
        } = t.payload;
        e.zIndexMap[r] ? i ? e.zIndexMap[r].panoramaElement = n : e.zIndexMap[r].element = n : e.zIndexMap[r] = {
          consumers: 0,
          element: i ? void 0 : n,
          panoramaElement: i ? n : void 0
        };
      },
      prepare: ce()
    },
    unregisterZIndexPortalElement: {
      reducer: (e, t) => {
        var {
          zIndex: r
        } = t.payload;
        e.zIndexMap[r] && (t.payload.isPanorama ? e.zIndexMap[r].panoramaElement = void 0 : e.zIndexMap[r].element = void 0);
      },
      prepare: ce()
    }
  }
}), {
  registerZIndexPortal: PC,
  unregisterZIndexPortal: _C,
  registerZIndexPortalElement: EC,
  unregisterZIndexPortalElement: SC
} = Ob.actions, AC = Ob.reducer;
function ci(e) {
  var {
    zIndex: t,
    children: r
  } = e, n = iP(), i = n && t !== void 0 && t !== 0, a = fr(), o = xe();
  jr(() => i ? (o(PC({
    zIndex: t
  })), () => {
    o(_C({
      zIndex: t
    }));
  }) : Un, [o, t, i]);
  var u = U((s) => hC(s, t, a));
  return i ? u ? /* @__PURE__ */ Ws(r, u) : null : r;
}
function $s() {
  return $s = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, $s.apply(null, arguments);
}
function xh(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Ci(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? xh(Object(r), !0).forEach(function(n) {
      TC(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : xh(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function TC(e, t, r) {
  return (t = jC(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function jC(e) {
  var t = CC(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function CC(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function MC(e) {
  var {
    cursor: t,
    cursorComp: r,
    cursorProps: n
  } = e;
  return /* @__PURE__ */ nr(t) ? /* @__PURE__ */ Us(t, n) : /* @__PURE__ */ Cv(r, n);
}
function DC(e) {
  var t, {
    coordinate: r,
    payload: n,
    index: i,
    offset: a,
    tooltipAxisBandSize: o,
    layout: u,
    cursor: s,
    tooltipEventType: c,
    chartName: l
  } = e, f = r, d = n, p = i;
  if (!s || !f || l !== "ScatterChart" && c !== "axis")
    return null;
  var v, h, m;
  if (l === "ScatterChart")
    v = f, h = u_, m = Et.cursorLine;
  else if (l === "BarChart")
    v = s_(u, f, a, o), h = Oy, m = Et.cursorRectangle;
  else if (u === "radial" && em(f)) {
    var {
      cx: y,
      cy: b,
      radius: w,
      startAngle: _,
      endAngle: O
    } = Py(f);
    v = {
      cx: y,
      cy: b,
      startAngle: _,
      endAngle: O,
      innerRadius: w,
      outerRadius: w
    }, h = Ey, m = Et.cursorLine;
  } else
    v = {
      points: Z_(u, f, a)
    }, h = pl, m = Et.cursorLine;
  var x = typeof s == "object" && "className" in s ? s.className : void 0, S = Ci(Ci(Ci(Ci({
    stroke: "#ccc",
    pointerEvents: "none"
  }, a), v), Hu(s)), {}, {
    payload: d,
    payloadIndex: p,
    className: Oe("recharts-tooltip-cursor", x)
  });
  return /* @__PURE__ */ P.createElement(ci, {
    zIndex: (t = e.zIndex) !== null && t !== void 0 ? t : m
  }, /* @__PURE__ */ P.createElement(MC, {
    cursor: s,
    cursorComp: h,
    cursorProps: S
  }));
}
function IC(e) {
  var t = Jj(), r = rP(), n = qa(), i = aC();
  return t == null || r == null || n == null || i == null ? null : /* @__PURE__ */ P.createElement(DC, $s({}, e, {
    offset: r,
    layout: n,
    tooltipAxisBandSize: t,
    chartName: i
  }));
}
var xb = /* @__PURE__ */ bt(null), NC = () => Tt(xb), Nu = { exports: {} }, Ph;
function kC() {
  return Ph || (Ph = 1, (function(e) {
    var t = Object.prototype.hasOwnProperty, r = "~";
    function n() {
    }
    Object.create && (n.prototype = /* @__PURE__ */ Object.create(null), new n().__proto__ || (r = !1));
    function i(s, c, l) {
      this.fn = s, this.context = c, this.once = l || !1;
    }
    function a(s, c, l, f, d) {
      if (typeof l != "function")
        throw new TypeError("The listener must be a function");
      var p = new i(l, f || s, d), v = r ? r + c : c;
      return s._events[v] ? s._events[v].fn ? s._events[v] = [s._events[v], p] : s._events[v].push(p) : (s._events[v] = p, s._eventsCount++), s;
    }
    function o(s, c) {
      --s._eventsCount === 0 ? s._events = new n() : delete s._events[c];
    }
    function u() {
      this._events = new n(), this._eventsCount = 0;
    }
    u.prototype.eventNames = function() {
      var c = [], l, f;
      if (this._eventsCount === 0) return c;
      for (f in l = this._events)
        t.call(l, f) && c.push(r ? f.slice(1) : f);
      return Object.getOwnPropertySymbols ? c.concat(Object.getOwnPropertySymbols(l)) : c;
    }, u.prototype.listeners = function(c) {
      var l = r ? r + c : c, f = this._events[l];
      if (!f) return [];
      if (f.fn) return [f.fn];
      for (var d = 0, p = f.length, v = new Array(p); d < p; d++)
        v[d] = f[d].fn;
      return v;
    }, u.prototype.listenerCount = function(c) {
      var l = r ? r + c : c, f = this._events[l];
      return f ? f.fn ? 1 : f.length : 0;
    }, u.prototype.emit = function(c, l, f, d, p, v) {
      var h = r ? r + c : c;
      if (!this._events[h]) return !1;
      var m = this._events[h], y = arguments.length, b, w;
      if (m.fn) {
        switch (m.once && this.removeListener(c, m.fn, void 0, !0), y) {
          case 1:
            return m.fn.call(m.context), !0;
          case 2:
            return m.fn.call(m.context, l), !0;
          case 3:
            return m.fn.call(m.context, l, f), !0;
          case 4:
            return m.fn.call(m.context, l, f, d), !0;
          case 5:
            return m.fn.call(m.context, l, f, d, p), !0;
          case 6:
            return m.fn.call(m.context, l, f, d, p, v), !0;
        }
        for (w = 1, b = new Array(y - 1); w < y; w++)
          b[w - 1] = arguments[w];
        m.fn.apply(m.context, b);
      } else {
        var _ = m.length, O;
        for (w = 0; w < _; w++)
          switch (m[w].once && this.removeListener(c, m[w].fn, void 0, !0), y) {
            case 1:
              m[w].fn.call(m[w].context);
              break;
            case 2:
              m[w].fn.call(m[w].context, l);
              break;
            case 3:
              m[w].fn.call(m[w].context, l, f);
              break;
            case 4:
              m[w].fn.call(m[w].context, l, f, d);
              break;
            default:
              if (!b) for (O = 1, b = new Array(y - 1); O < y; O++)
                b[O - 1] = arguments[O];
              m[w].fn.apply(m[w].context, b);
          }
      }
      return !0;
    }, u.prototype.on = function(c, l, f) {
      return a(this, c, l, f, !1);
    }, u.prototype.once = function(c, l, f) {
      return a(this, c, l, f, !0);
    }, u.prototype.removeListener = function(c, l, f, d) {
      var p = r ? r + c : c;
      if (!this._events[p]) return this;
      if (!l)
        return o(this, p), this;
      var v = this._events[p];
      if (v.fn)
        v.fn === l && (!d || v.once) && (!f || v.context === f) && o(this, p);
      else {
        for (var h = 0, m = [], y = v.length; h < y; h++)
          (v[h].fn !== l || d && !v[h].once || f && v[h].context !== f) && m.push(v[h]);
        m.length ? this._events[p] = m.length === 1 ? m[0] : m : o(this, p);
      }
      return this;
    }, u.prototype.removeAllListeners = function(c) {
      var l;
      return c ? (l = r ? r + c : c, this._events[l] && o(this, l)) : (this._events = new n(), this._eventsCount = 0), this;
    }, u.prototype.off = u.prototype.removeListener, u.prototype.addListener = u.prototype.on, u.prefixed = r, u.EventEmitter = u, e.exports = u;
  })(Nu)), Nu.exports;
}
var RC = kC();
const $C = /* @__PURE__ */ cr(RC);
var qn = new $C(), Ls = "recharts.syncEvent.tooltip", _h = "recharts.syncEvent.brush";
function LC(e, t) {
  if (t) {
    var r = Number.parseInt(t, 10);
    if (!qt(r))
      return e?.[r];
  }
}
var FC = {
  chartName: "",
  tooltipPayloadSearcher: void 0,
  eventEmitter: void 0,
  defaultTooltipEventType: "axis"
}, Pb = tt({
  name: "options",
  initialState: FC,
  reducers: {
    createEventEmitter: (e) => {
      e.eventEmitter == null && (e.eventEmitter = /* @__PURE__ */ Symbol("rechartsEventEmitter"));
    }
  }
}), zC = Pb.reducer, {
  createEventEmitter: qC
} = Pb.actions;
function BC(e) {
  return e.tooltip.syncInteraction;
}
var UC = {
  chartData: void 0,
  computedData: void 0,
  dataStartIndex: 0,
  dataEndIndex: 0
}, _b = tt({
  name: "chartData",
  initialState: UC,
  reducers: {
    setChartData(e, t) {
      if (e.chartData = t.payload, t.payload == null) {
        e.dataStartIndex = 0, e.dataEndIndex = 0;
        return;
      }
      t.payload.length > 0 && e.dataEndIndex !== t.payload.length - 1 && (e.dataEndIndex = t.payload.length - 1);
    },
    setComputedData(e, t) {
      e.computedData = t.payload;
    },
    setDataStartEndIndexes(e, t) {
      var {
        startIndex: r,
        endIndex: n
      } = t.payload;
      r != null && (e.dataStartIndex = r), n != null && (e.dataEndIndex = n);
    }
  }
}), {
  setChartData: Eh,
  setDataStartEndIndexes: WC,
  setComputedData: xk
} = _b.actions, VC = _b.reducer, KC = ["x", "y"];
function Sh(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Ur(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Sh(Object(r), !0).forEach(function(n) {
      HC(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Sh(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function HC(e, t, r) {
  return (t = YC(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function YC(e) {
  var t = GC(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function GC(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function XC(e, t) {
  if (e == null) return {};
  var r, n, i = ZC(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
  }
  return i;
}
function ZC(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
function JC() {
  var e = U(Wl), t = U(Vl), r = xe(), n = U(Pg), i = U(Jt), a = qa(), o = za(), u = U((s) => s.rootProps.className);
  Ie(() => {
    if (e == null)
      return Un;
    var s = (c, l, f) => {
      if (t !== f && e === c) {
        if (n === "index") {
          var d;
          if (o && l !== null && l !== void 0 && (d = l.payload) !== null && d !== void 0 && d.coordinate && l.payload.sourceViewBox) {
            var p = l.payload.coordinate, {
              x: v,
              y: h
            } = p, m = XC(p, KC), {
              x: y,
              y: b,
              width: w,
              height: _
            } = l.payload.sourceViewBox, O = Ur(Ur({}, m), {}, {
              x: o.x + (w ? (v - y) / w : 0) * o.width,
              y: o.y + (_ ? (h - b) / _ : 0) * o.height
            });
            r(Ur(Ur({}, l), {}, {
              payload: Ur(Ur({}, l.payload), {}, {
                coordinate: O
              })
            }));
          } else
            r(l);
          return;
        }
        if (i != null) {
          var x;
          if (typeof n == "function") {
            var S = {
              activeTooltipIndex: l.payload.index == null ? void 0 : Number(l.payload.index),
              isTooltipActive: l.payload.active,
              activeIndex: l.payload.index == null ? void 0 : Number(l.payload.index),
              activeLabel: l.payload.label,
              activeDataKey: l.payload.dataKey,
              activeCoordinate: l.payload.coordinate
            }, D = n(i, S);
            x = i[D];
          } else n === "value" && (x = i.find((K) => String(K.value) === l.payload.label));
          var {
            coordinate: k
          } = l.payload;
          if (x == null || l.payload.active === !1 || k == null || o == null) {
            r(ks({
              active: !1,
              coordinate: void 0,
              dataKey: void 0,
              index: null,
              label: void 0,
              sourceViewBox: void 0,
              graphicalItemId: void 0
            }));
            return;
          }
          var {
            x: $,
            y: j
          } = k, A = Math.min($, o.x + o.width), N = Math.min(j, o.y + o.height), L = {
            x: a === "horizontal" ? x.coordinate : A,
            y: a === "horizontal" ? N : x.coordinate
          }, W = ks({
            active: l.payload.active,
            coordinate: L,
            dataKey: l.payload.dataKey,
            index: String(x.index),
            label: l.payload.label,
            sourceViewBox: l.payload.sourceViewBox,
            graphicalItemId: l.payload.graphicalItemId
          });
          r(W);
        }
      }
    };
    return qn.on(Ls, s), () => {
      qn.off(Ls, s);
    };
  }, [u, r, t, e, n, i, a, o]);
}
function QC() {
  var e = U(Wl), t = U(Vl), r = xe();
  Ie(() => {
    if (e == null)
      return Un;
    var n = (i, a, o) => {
      t !== o && e === i && r(WC(a));
    };
    return qn.on(_h, n), () => {
      qn.off(_h, n);
    };
  }, [r, t, e]);
}
function eM() {
  var e = xe();
  Ie(() => {
    e(qC());
  }, [e]), JC(), QC();
}
function tM(e, t, r, n, i, a) {
  var o = U((p) => uC(p, e, t)), u = U(Vl), s = U(Wl), c = U(Pg), l = U(BC), f = l?.active, d = za();
  Ie(() => {
    if (!f && s != null && u != null) {
      var p = ks({
        active: a,
        coordinate: r,
        dataKey: o,
        index: i,
        label: typeof n == "number" ? String(n) : n,
        sourceViewBox: d,
        graphicalItemId: void 0
      });
      qn.emit(Ls, s, p, u);
    }
  }, [f, r, o, i, n, u, s, c, a, d]);
}
function Ah(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Th(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Ah(Object(r), !0).forEach(function(n) {
      rM(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ah(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function rM(e, t, r) {
  return (t = nM(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function nM(e) {
  var t = iM(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function iM(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function aM(e) {
  return e.dataKey;
}
function oM(e, t) {
  return /* @__PURE__ */ P.isValidElement(e) ? /* @__PURE__ */ P.cloneElement(e, t) : typeof e == "function" ? /* @__PURE__ */ P.createElement(e, t) : /* @__PURE__ */ P.createElement(zP, t);
}
var jh = [], uM = {
  allowEscapeViewBox: {
    x: !1,
    y: !1
  },
  animationDuration: 400,
  animationEasing: "ease",
  axisId: 0,
  contentStyle: {},
  cursor: !0,
  filterNull: !0,
  includeHidden: !1,
  isAnimationActive: "auto",
  itemSorter: "name",
  itemStyle: {},
  labelStyle: {},
  offset: 10,
  reverseDirection: {
    x: !1,
    y: !1
  },
  separator: " : ",
  trigger: "hover",
  useTranslate3d: !1,
  wrapperStyle: {}
};
function sM(e) {
  var t, r, n = wt(e, uM), {
    active: i,
    allowEscapeViewBox: a,
    animationDuration: o,
    animationEasing: u,
    content: s,
    filterNull: c,
    isAnimationActive: l,
    offset: f,
    payloadUniqBy: d,
    position: p,
    reverseDirection: v,
    useTranslate3d: h,
    wrapperStyle: m,
    cursor: y,
    shared: b,
    trigger: w,
    defaultIndex: _,
    portal: O,
    axisId: x
  } = n, S = xe(), D = typeof _ == "number" ? String(_) : _;
  Ie(() => {
    S(rj({
      shared: b,
      trigger: w,
      axisId: x,
      active: i,
      defaultIndex: D
    }));
  }, [S, b, w, x, i, D]);
  var k = za(), $ = my(), j = XT(b), {
    activeIndex: A,
    isActive: N
  } = (t = U((_e) => cC(_e, j, w, D))) !== null && t !== void 0 ? t : {}, L = U((_e) => lC(_e, j, w, D)), W = U((_e) => wb(_e, j, w, D)), K = U((_e) => sC(_e, j, w, D)), V = L, te = NC(), X = (r = i ?? N) !== null && r !== void 0 ? r : !1, [Pe, qe] = ym([V, X]), pe = j === "axis" ? W : void 0;
  tM(j, w, K, pe, A, X);
  var Be = O ?? te;
  if (Be == null || k == null || j == null)
    return null;
  var Ue = V ?? jh;
  X || (Ue = jh), c && Ue.length && (Ue = fm(Ue.filter((_e) => _e.value != null && (_e.hide !== !0 || n.includeHidden)), d, aM));
  var xt = Ue.length > 0, lt = /* @__PURE__ */ P.createElement(HP, {
    allowEscapeViewBox: a,
    animationDuration: o,
    animationEasing: u,
    isAnimationActive: l,
    active: X,
    coordinate: K,
    hasPayload: xt,
    offset: f,
    position: p,
    reverseDirection: v,
    useTranslate3d: h,
    viewBox: k,
    wrapperStyle: m,
    lastBoundingBox: Pe,
    innerRef: qe,
    hasPortalFromProps: !!O
  }, oM(s, Th(Th({}, n), {}, {
    payload: Ue,
    label: pe,
    active: X,
    activeIndex: A,
    coordinate: K,
    accessibilityLayer: $
  })));
  return /* @__PURE__ */ P.createElement(P.Fragment, null, /* @__PURE__ */ Ws(lt, Be), X && /* @__PURE__ */ P.createElement(IC, {
    cursor: y,
    tooltipEventType: j,
    coordinate: K,
    payload: Ue,
    index: A
  }));
}
var Yr = (e) => null;
Yr.displayName = "Cell";
function lM(e, t, r) {
  return (t = cM(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function cM(e) {
  var t = fM(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function fM(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
class dM {
  constructor(t) {
    lM(this, "cache", /* @__PURE__ */ new Map()), this.maxSize = t;
  }
  get(t) {
    var r = this.cache.get(t);
    return r !== void 0 && (this.cache.delete(t), this.cache.set(t, r)), r;
  }
  set(t, r) {
    if (this.cache.has(t))
      this.cache.delete(t);
    else if (this.cache.size >= this.maxSize) {
      var n = this.cache.keys().next().value;
      n != null && this.cache.delete(n);
    }
    this.cache.set(t, r);
  }
  clear() {
    this.cache.clear();
  }
  size() {
    return this.cache.size;
  }
}
function Ch(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function pM(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Ch(Object(r), !0).forEach(function(n) {
      hM(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ch(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function hM(e, t, r) {
  return (t = vM(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function vM(e) {
  var t = mM(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function mM(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var yM = {
  cacheSize: 2e3,
  enableCache: !0
}, Eb = pM({}, yM), Mh = new dM(Eb.cacheSize), gM = {
  position: "absolute",
  top: "-20000px",
  left: 0,
  padding: 0,
  margin: 0,
  border: "none",
  whiteSpace: "pre"
}, Dh = "recharts_measurement_span";
function bM(e, t) {
  var r = t.fontSize || "", n = t.fontFamily || "", i = t.fontWeight || "", a = t.fontStyle || "", o = t.letterSpacing || "", u = t.textTransform || "";
  return "".concat(e, "|").concat(r, "|").concat(n, "|").concat(i, "|").concat(a, "|").concat(o, "|").concat(u);
}
var Ih = (e, t) => {
  try {
    var r = document.getElementById(Dh);
    r || (r = document.createElement("span"), r.setAttribute("id", Dh), r.setAttribute("aria-hidden", "true"), document.body.appendChild(r)), Object.assign(r.style, gM, t), r.textContent = "".concat(e);
    var n = r.getBoundingClientRect();
    return {
      width: n.width,
      height: n.height
    };
  } catch {
    return {
      width: 0,
      height: 0
    };
  }
}, Nh = function(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  if (t == null || hl.isSsr)
    return {
      width: 0,
      height: 0
    };
  if (!Eb.enableCache)
    return Ih(t, r);
  var n = bM(t, r), i = Mh.get(n);
  if (i)
    return i;
  var a = Ih(t, r);
  return Mh.set(n, a), a;
}, Sb;
function wM(e, t, r) {
  return (t = OM(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function OM(e) {
  var t = xM(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function xM(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var kh = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([*/])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/, Rh = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([+-])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/, PM = /^px|cm|vh|vw|em|rem|%|mm|in|pt|pc|ex|ch|vmin|vmax|Q$/, _M = /(-?\d+(?:\.\d+)?)([a-zA-Z%]+)?/, EM = {
  cm: 96 / 2.54,
  mm: 96 / 25.4,
  pt: 96 / 72,
  pc: 96 / 6,
  in: 96,
  Q: 96 / (2.54 * 40),
  px: 1
}, SM = ["cm", "mm", "pt", "pc", "in", "Q", "px"];
function AM(e) {
  return SM.includes(e);
}
var Vr = "NaN";
function TM(e, t) {
  return e * EM[t];
}
class Ve {
  static parse(t) {
    var r, [, n, i] = (r = _M.exec(t)) !== null && r !== void 0 ? r : [];
    return n == null ? Ve.NaN : new Ve(parseFloat(n), i ?? "");
  }
  constructor(t, r) {
    this.num = t, this.unit = r, this.num = t, this.unit = r, qt(t) && (this.unit = ""), r !== "" && !PM.test(r) && (this.num = NaN, this.unit = ""), AM(r) && (this.num = TM(t, r), this.unit = "px");
  }
  add(t) {
    return this.unit !== t.unit ? new Ve(NaN, "") : new Ve(this.num + t.num, this.unit);
  }
  subtract(t) {
    return this.unit !== t.unit ? new Ve(NaN, "") : new Ve(this.num - t.num, this.unit);
  }
  multiply(t) {
    return this.unit !== "" && t.unit !== "" && this.unit !== t.unit ? new Ve(NaN, "") : new Ve(this.num * t.num, this.unit || t.unit);
  }
  divide(t) {
    return this.unit !== "" && t.unit !== "" && this.unit !== t.unit ? new Ve(NaN, "") : new Ve(this.num / t.num, this.unit || t.unit);
  }
  toString() {
    return "".concat(this.num).concat(this.unit);
  }
  isNaN() {
    return qt(this.num);
  }
}
Sb = Ve;
wM(Ve, "NaN", new Sb(NaN, ""));
function Ab(e) {
  if (e == null || e.includes(Vr))
    return Vr;
  for (var t = e; t.includes("*") || t.includes("/"); ) {
    var r, [, n, i, a] = (r = kh.exec(t)) !== null && r !== void 0 ? r : [], o = Ve.parse(n ?? ""), u = Ve.parse(a ?? ""), s = i === "*" ? o.multiply(u) : o.divide(u);
    if (s.isNaN())
      return Vr;
    t = t.replace(kh, s.toString());
  }
  for (; t.includes("+") || /.-\d+(?:\.\d+)?/.test(t); ) {
    var c, [, l, f, d] = (c = Rh.exec(t)) !== null && c !== void 0 ? c : [], p = Ve.parse(l ?? ""), v = Ve.parse(d ?? ""), h = f === "+" ? p.add(v) : p.subtract(v);
    if (h.isNaN())
      return Vr;
    t = t.replace(Rh, h.toString());
  }
  return t;
}
var $h = /\(([^()]*)\)/;
function jM(e) {
  for (var t = e, r; (r = $h.exec(t)) != null; ) {
    var [, n] = r;
    t = t.replace($h, Ab(n));
  }
  return t;
}
function CM(e) {
  var t = e.replace(/\s+/g, "");
  return t = jM(t), t = Ab(t), t;
}
function MM(e) {
  try {
    return CM(e);
  } catch {
    return Vr;
  }
}
function ku(e) {
  var t = MM(e.slice(5, -1));
  return t === Vr ? "" : t;
}
var DM = ["x", "y", "lineHeight", "capHeight", "fill", "scaleToFit", "textAnchor", "verticalAnchor"], IM = ["dx", "dy", "angle", "className", "breakAll"];
function Fs() {
  return Fs = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Fs.apply(null, arguments);
}
function Lh(e, t) {
  if (e == null) return {};
  var r, n, i = NM(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
  }
  return i;
}
function NM(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
var Tb = /[ \f\n\r\t\v\u2028\u2029]+/, jb = (e) => {
  var {
    children: t,
    breakAll: r,
    style: n
  } = e;
  try {
    var i = [];
    ut(t) || (r ? i = t.toString().split("") : i = t.toString().split(Tb));
    var a = i.map((u) => ({
      word: u,
      width: Nh(u, n).width
    })), o = r ? 0 : Nh(" ", n).width;
    return {
      wordsWithComputedWidth: a,
      spaceWidth: o
    };
  } catch {
    return null;
  }
};
function kM(e) {
  return e === "start" || e === "middle" || e === "end" || e === "inherit";
}
var Cb = (e, t, r, n) => e.reduce((i, a) => {
  var {
    word: o,
    width: u
  } = a, s = i[i.length - 1];
  if (s && u != null && (t == null || n || s.width + u + r < Number(t)))
    s.words.push(o), s.width += u + r;
  else {
    var c = {
      words: [o],
      width: u
    };
    i.push(c);
  }
  return i;
}, []), Mb = (e) => e.reduce((t, r) => t.width > r.width ? t : r), RM = "…", Fh = (e, t, r, n, i, a, o, u) => {
  var s = e.slice(0, t), c = jb({
    breakAll: r,
    style: n,
    children: s + RM
  });
  if (!c)
    return [!1, []];
  var l = Cb(c.wordsWithComputedWidth, a, o, u), f = l.length > i || Mb(l).width > Number(a);
  return [f, l];
}, $M = (e, t, r, n, i) => {
  var {
    maxLines: a,
    children: o,
    style: u,
    breakAll: s
  } = e, c = z(a), l = String(o), f = Cb(t, n, r, i);
  if (!c || i)
    return f;
  var d = f.length > a || Mb(f).width > Number(n);
  if (!d)
    return f;
  for (var p = 0, v = l.length - 1, h = 0, m; p <= v && h <= l.length - 1; ) {
    var y = Math.floor((p + v) / 2), b = y - 1, [w, _] = Fh(l, b, s, u, a, n, r, i), [O] = Fh(l, y, s, u, a, n, r, i);
    if (!w && !O && (p = y + 1), w && O && (v = y - 1), !w && O) {
      m = _;
      break;
    }
    h++;
  }
  return m || f;
}, zh = (e) => {
  var t = ut(e) ? [] : e.toString().split(Tb);
  return [{
    words: t,
    width: void 0
  }];
}, LM = (e) => {
  var {
    width: t,
    scaleToFit: r,
    children: n,
    style: i,
    breakAll: a,
    maxLines: o
  } = e;
  if ((t || r) && !hl.isSsr) {
    var u, s, c = jb({
      breakAll: a,
      children: n,
      style: i
    });
    if (c) {
      var {
        wordsWithComputedWidth: l,
        spaceWidth: f
      } = c;
      u = l, s = f;
    } else
      return zh(n);
    return $M({
      breakAll: a,
      children: n,
      maxLines: o,
      style: i
    }, u, s, t, !!r);
  }
  return zh(n);
}, Db = "#808080", FM = {
  angle: 0,
  breakAll: !1,
  // Magic number from d3
  capHeight: "0.71em",
  fill: Db,
  lineHeight: "1em",
  scaleToFit: !1,
  textAnchor: "start",
  // Maintain compat with existing charts / default SVG behavior
  verticalAnchor: "end",
  x: 0,
  y: 0
}, Sc = /* @__PURE__ */ et((e, t) => {
  var r = wt(e, FM), {
    x: n,
    y: i,
    lineHeight: a,
    capHeight: o,
    fill: u,
    scaleToFit: s,
    textAnchor: c,
    verticalAnchor: l
  } = r, f = Lh(r, DM), d = kr(() => LM({
    breakAll: f.breakAll,
    children: f.children,
    maxLines: f.maxLines,
    scaleToFit: s,
    style: f.style,
    width: f.width
  }), [f.breakAll, f.children, f.maxLines, s, f.style, f.width]), {
    dx: p,
    dy: v,
    angle: h,
    className: m,
    breakAll: y
  } = f, b = Lh(f, IM);
  if (!Ut(n) || !Ut(i) || d.length === 0)
    return null;
  var w = Number(n) + (z(p) ? p : 0), _ = Number(i) + (z(v) ? v : 0);
  if (!je(w) || !je(_))
    return null;
  var O;
  switch (l) {
    case "start":
      O = ku("calc(".concat(o, ")"));
      break;
    case "middle":
      O = ku("calc(".concat((d.length - 1) / 2, " * -").concat(a, " + (").concat(o, " / 2))"));
      break;
    default:
      O = ku("calc(".concat(d.length - 1, " * -").concat(a, ")"));
      break;
  }
  var x = [];
  if (s) {
    var S = d[0].width, {
      width: D
    } = f;
    x.push("scale(".concat(z(D) && z(S) ? D / S : 1, ")"));
  }
  return h && x.push("rotate(".concat(h, ", ").concat(w, ", ").concat(_, ")")), x.length && (b.transform = x.join(" ")), /* @__PURE__ */ P.createElement("text", Fs({}, mt(b), {
    ref: t,
    x: w,
    y: _,
    className: Oe("recharts-text", m),
    textAnchor: c,
    fill: u.includes("url") ? Db : u
  }), d.map((k, $) => {
    var j = k.words.join(y ? "" : " ");
    return (
      // duplicate words will cause duplicate keys which is why we add the array index here
      /* @__PURE__ */ P.createElement("tspan", {
        x: w,
        dy: $ === 0 ? O : a,
        key: "".concat(j, "-").concat($)
      }, j)
    );
  }));
});
Sc.displayName = "Text";
var zM = ["labelRef"], qM = ["content"];
function qh(e, t) {
  if (e == null) return {};
  var r, n, i = BM(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
  }
  return i;
}
function BM(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
function Bh(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Se(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Bh(Object(r), !0).forEach(function(n) {
      UM(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Bh(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function UM(e, t, r) {
  return (t = WM(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function WM(e) {
  var t = VM(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function VM(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function ba() {
  return ba = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, ba.apply(null, arguments);
}
var KM = /* @__PURE__ */ bt(null), HM = () => {
  var e = Tt(KM), t = za();
  return e || ay(t);
}, YM = /* @__PURE__ */ bt(null), GM = () => {
  var e = Tt(YM), t = U(Tg);
  return e || t;
}, XM = (e) => {
  var {
    value: t,
    formatter: r
  } = e, n = ut(e.children) ? t : e.children;
  return typeof r == "function" ? r(n) : n;
}, ZM = (e) => e != null && typeof e == "function", JM = (e, t) => {
  var r = Je(t - e), n = Math.min(Math.abs(t - e), 360);
  return r * n;
}, QM = (e, t, r, n, i) => {
  var {
    offset: a,
    className: o
  } = e, {
    cx: u,
    cy: s,
    innerRadius: c,
    outerRadius: l,
    startAngle: f,
    endAngle: d,
    clockWise: p
  } = i, v = (c + l) / 2, h = JM(f, d), m = h >= 0 ? 1 : -1, y, b;
  switch (t) {
    case "insideStart":
      y = f + m * a, b = p;
      break;
    case "insideEnd":
      y = d - m * a, b = !p;
      break;
    case "end":
      y = d + m * a, b = p;
      break;
    default:
      throw new Error("Unsupported position ".concat(t));
  }
  b = h <= 0 ? b : !b;
  var w = Ae(u, s, v, y), _ = Ae(u, s, v, y + (b ? 1 : -1) * 359), O = "M".concat(w.x, ",").concat(w.y, `
    A`).concat(v, ",").concat(v, ",0,1,").concat(b ? 0 : 1, `,
    `).concat(_.x, ",").concat(_.y), x = ut(e.id) ? An("recharts-radial-line-") : e.id;
  return /* @__PURE__ */ P.createElement("text", ba({}, n, {
    dominantBaseline: "central",
    className: Oe("recharts-radial-bar-label", o)
  }), /* @__PURE__ */ P.createElement("defs", null, /* @__PURE__ */ P.createElement("path", {
    id: x,
    d: O
  })), /* @__PURE__ */ P.createElement("textPath", {
    xlinkHref: "#".concat(x)
  }, r));
}, eD = (e, t, r) => {
  var {
    cx: n,
    cy: i,
    innerRadius: a,
    outerRadius: o,
    startAngle: u,
    endAngle: s
  } = e, c = (u + s) / 2;
  if (r === "outside") {
    var {
      x: l,
      y: f
    } = Ae(n, i, o + t, c);
    return {
      x: l,
      y: f,
      textAnchor: l >= n ? "start" : "end",
      verticalAnchor: "middle"
    };
  }
  if (r === "center")
    return {
      x: n,
      y: i,
      textAnchor: "middle",
      verticalAnchor: "middle"
    };
  if (r === "centerTop")
    return {
      x: n,
      y: i,
      textAnchor: "middle",
      verticalAnchor: "start"
    };
  if (r === "centerBottom")
    return {
      x: n,
      y: i,
      textAnchor: "middle",
      verticalAnchor: "end"
    };
  var d = (a + o) / 2, {
    x: p,
    y: v
  } = Ae(n, i, d, c);
  return {
    x: p,
    y: v,
    textAnchor: "middle",
    verticalAnchor: "middle"
  };
}, zs = (e) => "cx" in e && z(e.cx), tD = (e, t) => {
  var {
    parentViewBox: r,
    offset: n,
    position: i
  } = e, a;
  r != null && !zs(r) && (a = r);
  var {
    x: o,
    y: u,
    upperWidth: s,
    lowerWidth: c,
    height: l
  } = t, f = o, d = o + (s - c) / 2, p = (f + d) / 2, v = (s + c) / 2, h = f + s / 2, m = l >= 0 ? 1 : -1, y = m * n, b = m > 0 ? "end" : "start", w = m > 0 ? "start" : "end", _ = s >= 0 ? 1 : -1, O = _ * n, x = _ > 0 ? "end" : "start", S = _ > 0 ? "start" : "end";
  if (i === "top") {
    var D = {
      x: f + s / 2,
      y: u - y,
      textAnchor: "middle",
      verticalAnchor: b
    };
    return Se(Se({}, D), a ? {
      height: Math.max(u - a.y, 0),
      width: s
    } : {});
  }
  if (i === "bottom") {
    var k = {
      x: d + c / 2,
      y: u + l + y,
      textAnchor: "middle",
      verticalAnchor: w
    };
    return Se(Se({}, k), a ? {
      height: Math.max(a.y + a.height - (u + l), 0),
      width: c
    } : {});
  }
  if (i === "left") {
    var $ = {
      x: p - O,
      y: u + l / 2,
      textAnchor: x,
      verticalAnchor: "middle"
    };
    return Se(Se({}, $), a ? {
      width: Math.max($.x - a.x, 0),
      height: l
    } : {});
  }
  if (i === "right") {
    var j = {
      x: p + v + O,
      y: u + l / 2,
      textAnchor: S,
      verticalAnchor: "middle"
    };
    return Se(Se({}, j), a ? {
      width: Math.max(a.x + a.width - j.x, 0),
      height: l
    } : {});
  }
  var A = a ? {
    width: v,
    height: l
  } : {};
  return i === "insideLeft" ? Se({
    x: p + O,
    y: u + l / 2,
    textAnchor: S,
    verticalAnchor: "middle"
  }, A) : i === "insideRight" ? Se({
    x: p + v - O,
    y: u + l / 2,
    textAnchor: x,
    verticalAnchor: "middle"
  }, A) : i === "insideTop" ? Se({
    x: f + s / 2,
    y: u + y,
    textAnchor: "middle",
    verticalAnchor: w
  }, A) : i === "insideBottom" ? Se({
    x: d + c / 2,
    y: u + l - y,
    textAnchor: "middle",
    verticalAnchor: b
  }, A) : i === "insideTopLeft" ? Se({
    x: f + O,
    y: u + y,
    textAnchor: S,
    verticalAnchor: w
  }, A) : i === "insideTopRight" ? Se({
    x: f + s - O,
    y: u + y,
    textAnchor: x,
    verticalAnchor: w
  }, A) : i === "insideBottomLeft" ? Se({
    x: d + O,
    y: u + l - y,
    textAnchor: S,
    verticalAnchor: b
  }, A) : i === "insideBottomRight" ? Se({
    x: d + c - O,
    y: u + l - y,
    textAnchor: x,
    verticalAnchor: b
  }, A) : i && typeof i == "object" && (z(i.x) || Bt(i.x)) && (z(i.y) || Bt(i.y)) ? Se({
    x: o + ot(i.x, v),
    y: u + ot(i.y, l),
    textAnchor: "end",
    verticalAnchor: "end"
  }, A) : Se({
    x: h,
    y: u + l / 2,
    textAnchor: "middle",
    verticalAnchor: "middle"
  }, A);
}, rD = {
  angle: 0,
  offset: 5,
  zIndex: Et.label,
  position: "middle",
  textBreakAll: !1
};
function Ib(e) {
  var t = wt(e, rD), {
    viewBox: r,
    position: n,
    value: i,
    children: a,
    content: o,
    className: u = "",
    textBreakAll: s,
    labelRef: c
  } = t, l = GM(), f = HM(), d = n === "center" ? f : l ?? f, p, v, h;
  if (r == null ? p = d : zs(r) ? p = r : p = ay(r), !p || ut(i) && ut(a) && !/* @__PURE__ */ nr(o) && typeof o != "function")
    return null;
  var m = Se(Se({}, t), {}, {
    viewBox: p
  });
  if (/* @__PURE__ */ nr(o)) {
    var {
      labelRef: y
    } = m, b = qh(m, zM);
    return /* @__PURE__ */ Us(o, b);
  }
  if (typeof o == "function") {
    var {
      content: w
    } = m, _ = qh(m, qM);
    if (v = /* @__PURE__ */ Cv(o, _), /* @__PURE__ */ nr(v))
      return v;
  } else
    v = XM(t);
  var O = mt(t);
  if (zs(p)) {
    if (n === "insideStart" || n === "insideEnd" || n === "end")
      return QM(t, n, v, O, p);
    h = eD(p, t.offset, t.position);
  } else
    h = tD(t, p);
  return /* @__PURE__ */ P.createElement(ci, {
    zIndex: t.zIndex
  }, /* @__PURE__ */ P.createElement(Sc, ba({
    ref: c,
    className: Oe("recharts-label", u)
  }, O, h, {
    /*
     * textAnchor is decided by default based on the `position`
     * but we allow overriding via props for precise control.
     */
    textAnchor: kM(O.textAnchor) ? O.textAnchor : h.textAnchor,
    breakAll: s
  }), v));
}
Ib.displayName = "Label";
var Ru = {}, $u = {}, Uh;
function nD() {
  return Uh || (Uh = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    function t(r) {
      return r[r.length - 1];
    }
    e.last = t;
  })($u)), $u;
}
var Lu = {}, Wh;
function iD() {
  return Wh || (Wh = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    function t(r) {
      return Array.isArray(r) ? r : Array.from(r);
    }
    e.toArray = t;
  })(Lu)), Lu;
}
var Vh;
function aD() {
  return Vh || (Vh = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ nD(), r = /* @__PURE__ */ iD(), n = /* @__PURE__ */ el();
    function i(a) {
      if (n.isArrayLike(a))
        return t.last(r.toArray(a));
    }
    e.last = i;
  })(Ru)), Ru;
}
var Fu, Kh;
function oD() {
  return Kh || (Kh = 1, Fu = aD().last), Fu;
}
var uD = /* @__PURE__ */ oD();
const sD = /* @__PURE__ */ cr(uD);
var lD = ["valueAccessor"], cD = ["dataKey", "clockWise", "id", "textBreakAll", "zIndex"];
function wa() {
  return wa = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, wa.apply(null, arguments);
}
function Hh(e, t) {
  if (e == null) return {};
  var r, n, i = fD(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
  }
  return i;
}
function fD(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
var dD = (e) => Array.isArray(e.value) ? sD(e.value) : e.value, Nb = /* @__PURE__ */ bt(void 0);
Nb.Provider;
var kb = /* @__PURE__ */ bt(void 0), pD = kb.Provider;
function hD() {
  return Tt(Nb);
}
function vD() {
  return Tt(kb);
}
function Li(e) {
  var {
    valueAccessor: t = dD
  } = e, r = Hh(e, lD), {
    dataKey: n,
    clockWise: i,
    id: a,
    textBreakAll: o,
    zIndex: u
  } = r, s = Hh(r, cD), c = hD(), l = vD(), f = c || l;
  return !f || !f.length ? null : /* @__PURE__ */ P.createElement(ci, {
    zIndex: u ?? Et.label
  }, /* @__PURE__ */ P.createElement(ar, {
    className: "recharts-label-list"
  }, f.map((d, p) => {
    var v, h = ut(n) ? t(d, p) : be(d && d.payload, n), m = ut(a) ? {} : {
      id: "".concat(a, "-").concat(p)
    };
    return /* @__PURE__ */ P.createElement(Ib, wa({
      key: "label-".concat(p)
    }, mt(d), s, m, {
      /*
       * Prefer to use the explicit fill from LabelList props.
       * Only in an absence of that, fall back to the fill of the entry.
       * The entry fill can be quite difficult to see especially in Bar, Pie, RadialBar in inside positions.
       * On the other hand it's quite convenient in Scatter, Line, or when the position is outside the Bar, Pie filled shapes.
       */
      fill: (v = r.fill) !== null && v !== void 0 ? v : d.fill,
      parentViewBox: d.parentViewBox,
      value: h,
      textBreakAll: o,
      viewBox: d.viewBox,
      index: p,
      zIndex: 0
    }));
  })));
}
Li.displayName = "LabelList";
function mD(e) {
  var {
    label: t
  } = e;
  return t ? t === !0 ? /* @__PURE__ */ P.createElement(Li, {
    key: "labelList-implicit"
  }) : /* @__PURE__ */ P.isValidElement(t) || ZM(t) ? /* @__PURE__ */ P.createElement(Li, {
    key: "labelList-implicit",
    content: t
  }) : typeof t == "object" ? /* @__PURE__ */ P.createElement(Li, wa({
    key: "labelList-implicit"
  }, t, {
    type: String(t.type)
  })) : null : null;
}
var Rb = (e) => e.graphicalItems.polarItems, yD = E([de, ri], Zl), uo = E([Rb, ve, yD], Jl), gD = E([uo], Ql), so = E([gD, zl], ec), bD = E([so, ve, uo], rc);
E([so, ve, uo], (e, t, r) => r.length > 0 ? e.flatMap((n) => r.flatMap((i) => {
  var a, o = be(n, (a = t.dataKey) !== null && a !== void 0 ? a : i.dataKey);
  return {
    value: o,
    errorDomain: []
    // polar charts do not have error bars
  };
})).filter(Boolean) : t?.dataKey != null ? e.map((n) => ({
  value: be(n, t.dataKey),
  errorDomain: []
})) : e.map((n) => ({
  value: n,
  errorDomain: []
})));
var Yh = () => {
}, wD = E([so, ve, uo, no, de], oc), OD = E([ve, ic, ac, Yh, wD, Yh, se, de], uc), $b = E([ve, se, so, bD, ti, de, OD], sc), xD = E([$b, ve, ln], fc);
E([ve, $b, xD, de], pc);
var PD = {
  radiusAxis: {},
  angleAxis: {}
}, Lb = tt({
  name: "polarAxis",
  initialState: PD,
  reducers: {
    addRadiusAxis(e, t) {
      e.radiusAxis[t.payload.id] = t.payload;
    },
    removeRadiusAxis(e, t) {
      delete e.radiusAxis[t.payload.id];
    },
    addAngleAxis(e, t) {
      e.angleAxis[t.payload.id] = t.payload;
    },
    removeAngleAxis(e, t) {
      delete e.angleAxis[t.payload.id];
    }
  }
}), {
  addRadiusAxis: Pk,
  removeRadiusAxis: _k,
  addAngleAxis: Ek,
  removeAngleAxis: Sk
} = Lb.actions, _D = Lb.reducer;
function Gh(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Xh(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Gh(Object(r), !0).forEach(function(n) {
      ED(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Gh(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function ED(e, t, r) {
  return (t = SD(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function SD(e) {
  var t = AD(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function AD(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var TD = (e, t) => t, Ac = E([Rb, TD], (e, t) => e.filter((r) => r.type === "pie").find((r) => r.id === t)), jD = [], Tc = (e, t, r) => r?.length === 0 ? jD : r, Fb = E([zl, Ac, Tc], (e, t, r) => {
  var {
    chartData: n
  } = e;
  if (t != null) {
    var i;
    if (t?.data != null && t.data.length > 0 ? i = t.data : i = n, (!i || !i.length) && r != null && (i = r.map((a) => Xh(Xh({}, t.presentationProps), a.props))), i != null)
      return i;
  }
}), CD = E([Fb, Ac, Tc], (e, t, r) => {
  if (!(e == null || t == null))
    return e.map((n, i) => {
      var a, o = be(n, t.nameKey, t.name), u;
      return r != null && (a = r[i]) !== null && a !== void 0 && (a = a.props) !== null && a !== void 0 && a.fill ? u = r[i].props.fill : typeof n == "object" && n != null && "fill" in n ? u = n.fill : u = t.fill, {
        value: Jm(o, t.dataKey),
        color: u,
        // @ts-expect-error we need a better typing for our data inputs
        payload: n,
        type: t.legendType
      };
    });
}), MD = E([Fb, Ac, Tc, Fe], (e, t, r, n) => {
  if (!(t == null || e == null))
    return RI({
      offset: n,
      pieSettings: t,
      displayedData: e,
      cells: r
    });
}), Mi = { exports: {} }, ne = {};
var Zh;
function DD() {
  if (Zh) return ne;
  Zh = 1;
  var e = /* @__PURE__ */ Symbol.for("react.transitional.element"), t = /* @__PURE__ */ Symbol.for("react.portal"), r = /* @__PURE__ */ Symbol.for("react.fragment"), n = /* @__PURE__ */ Symbol.for("react.strict_mode"), i = /* @__PURE__ */ Symbol.for("react.profiler"), a = /* @__PURE__ */ Symbol.for("react.consumer"), o = /* @__PURE__ */ Symbol.for("react.context"), u = /* @__PURE__ */ Symbol.for("react.forward_ref"), s = /* @__PURE__ */ Symbol.for("react.suspense"), c = /* @__PURE__ */ Symbol.for("react.suspense_list"), l = /* @__PURE__ */ Symbol.for("react.memo"), f = /* @__PURE__ */ Symbol.for("react.lazy"), d = /* @__PURE__ */ Symbol.for("react.view_transition"), p = /* @__PURE__ */ Symbol.for("react.client.reference");
  function v(h) {
    if (typeof h == "object" && h !== null) {
      var m = h.$$typeof;
      switch (m) {
        case e:
          switch (h = h.type, h) {
            case r:
            case i:
            case n:
            case s:
            case c:
            case d:
              return h;
            default:
              switch (h = h && h.$$typeof, h) {
                case o:
                case u:
                case f:
                case l:
                  return h;
                case a:
                  return h;
                default:
                  return m;
              }
          }
        case t:
          return m;
      }
    }
  }
  return ne.ContextConsumer = a, ne.ContextProvider = o, ne.Element = e, ne.ForwardRef = u, ne.Fragment = r, ne.Lazy = f, ne.Memo = l, ne.Portal = t, ne.Profiler = i, ne.StrictMode = n, ne.Suspense = s, ne.SuspenseList = c, ne.isContextConsumer = function(h) {
    return v(h) === a;
  }, ne.isContextProvider = function(h) {
    return v(h) === o;
  }, ne.isElement = function(h) {
    return typeof h == "object" && h !== null && h.$$typeof === e;
  }, ne.isForwardRef = function(h) {
    return v(h) === u;
  }, ne.isFragment = function(h) {
    return v(h) === r;
  }, ne.isLazy = function(h) {
    return v(h) === f;
  }, ne.isMemo = function(h) {
    return v(h) === l;
  }, ne.isPortal = function(h) {
    return v(h) === t;
  }, ne.isProfiler = function(h) {
    return v(h) === i;
  }, ne.isStrictMode = function(h) {
    return v(h) === n;
  }, ne.isSuspense = function(h) {
    return v(h) === s;
  }, ne.isSuspenseList = function(h) {
    return v(h) === c;
  }, ne.isValidElementType = function(h) {
    return typeof h == "string" || typeof h == "function" || h === r || h === i || h === n || h === s || h === c || typeof h == "object" && h !== null && (h.$$typeof === f || h.$$typeof === l || h.$$typeof === o || h.$$typeof === a || h.$$typeof === u || h.$$typeof === p || h.getModuleId !== void 0);
  }, ne.typeOf = v, ne;
}
var ie = {};
var Jh;
function ID() {
  return Jh || (Jh = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(h) {
      if (typeof h == "object" && h !== null) {
        var m = h.$$typeof;
        switch (m) {
          case t:
            switch (h = h.type, h) {
              case n:
              case a:
              case i:
              case c:
              case l:
              case p:
                return h;
              default:
                switch (h = h && h.$$typeof, h) {
                  case u:
                  case s:
                  case d:
                  case f:
                    return h;
                  case o:
                    return h;
                  default:
                    return m;
                }
            }
          case r:
            return m;
        }
      }
    }
    var t = /* @__PURE__ */ Symbol.for("react.transitional.element"), r = /* @__PURE__ */ Symbol.for("react.portal"), n = /* @__PURE__ */ Symbol.for("react.fragment"), i = /* @__PURE__ */ Symbol.for("react.strict_mode"), a = /* @__PURE__ */ Symbol.for("react.profiler"), o = /* @__PURE__ */ Symbol.for("react.consumer"), u = /* @__PURE__ */ Symbol.for("react.context"), s = /* @__PURE__ */ Symbol.for("react.forward_ref"), c = /* @__PURE__ */ Symbol.for("react.suspense"), l = /* @__PURE__ */ Symbol.for("react.suspense_list"), f = /* @__PURE__ */ Symbol.for("react.memo"), d = /* @__PURE__ */ Symbol.for("react.lazy"), p = /* @__PURE__ */ Symbol.for("react.view_transition"), v = /* @__PURE__ */ Symbol.for("react.client.reference");
    ie.ContextConsumer = o, ie.ContextProvider = u, ie.Element = t, ie.ForwardRef = s, ie.Fragment = n, ie.Lazy = d, ie.Memo = f, ie.Portal = r, ie.Profiler = a, ie.StrictMode = i, ie.Suspense = c, ie.SuspenseList = l, ie.isContextConsumer = function(h) {
      return e(h) === o;
    }, ie.isContextProvider = function(h) {
      return e(h) === u;
    }, ie.isElement = function(h) {
      return typeof h == "object" && h !== null && h.$$typeof === t;
    }, ie.isForwardRef = function(h) {
      return e(h) === s;
    }, ie.isFragment = function(h) {
      return e(h) === n;
    }, ie.isLazy = function(h) {
      return e(h) === d;
    }, ie.isMemo = function(h) {
      return e(h) === f;
    }, ie.isPortal = function(h) {
      return e(h) === r;
    }, ie.isProfiler = function(h) {
      return e(h) === a;
    }, ie.isStrictMode = function(h) {
      return e(h) === i;
    }, ie.isSuspense = function(h) {
      return e(h) === c;
    }, ie.isSuspenseList = function(h) {
      return e(h) === l;
    }, ie.isValidElementType = function(h) {
      return typeof h == "string" || typeof h == "function" || h === n || h === a || h === i || h === c || h === l || typeof h == "object" && h !== null && (h.$$typeof === d || h.$$typeof === f || h.$$typeof === u || h.$$typeof === o || h.$$typeof === s || h.$$typeof === v || h.getModuleId !== void 0);
    }, ie.typeOf = e;
  })()), ie;
}
var Qh;
function ND() {
  return Qh || (Qh = 1, process.env.NODE_ENV === "production" ? Mi.exports = /* @__PURE__ */ DD() : Mi.exports = /* @__PURE__ */ ID()), Mi.exports;
}
var kD = /* @__PURE__ */ ND(), ev = (e) => typeof e == "string" ? e : e ? e.displayName || e.name || "Component" : "", tv = null, zu = null, zb = (e) => {
  if (e === tv && Array.isArray(zu))
    return zu;
  var t = [];
  return j0.forEach(e, (r) => {
    ut(r) || (kD.isFragment(r) ? t = t.concat(zb(r.props.children)) : t.push(r));
  }), zu = t, tv = e, t;
};
function qb(e, t) {
  var r = [], n = [];
  return Array.isArray(t) ? n = t.map((i) => ev(i)) : n = [ev(t)], zb(e).forEach((i) => {
    var a = Sn(i, "type.displayName") || Sn(i, "type.name");
    a && n.indexOf(a) !== -1 && r.push(i);
  }), r;
}
var qu = {}, rv;
function RD() {
  return rv || (rv = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    function t(r) {
      if (typeof r != "object" || r == null)
        return !1;
      if (Object.getPrototypeOf(r) === null)
        return !0;
      if (Object.prototype.toString.call(r) !== "[object Object]") {
        const i = r[Symbol.toStringTag];
        return i == null || !Object.getOwnPropertyDescriptor(r, Symbol.toStringTag)?.writable ? !1 : r.toString() === `[object ${i}]`;
      }
      let n = r;
      for (; Object.getPrototypeOf(n) !== null; )
        n = Object.getPrototypeOf(n);
      return Object.getPrototypeOf(r) === n;
    }
    e.isPlainObject = t;
  })(qu)), qu;
}
var Bu, nv;
function $D() {
  return nv || (nv = 1, Bu = RD().isPlainObject), Bu;
}
var LD = /* @__PURE__ */ $D();
const FD = /* @__PURE__ */ cr(LD);
var iv, av, ov, uv, sv;
function lv(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function cv(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? lv(Object(r), !0).forEach(function(n) {
      zD(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : lv(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function zD(e, t, r) {
  return (t = qD(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function qD(e) {
  var t = BD(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function BD(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Oa() {
  return Oa = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Oa.apply(null, arguments);
}
function Pn(e, t) {
  return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } }));
}
var fv = (e, t, r, n, i) => {
  var a = r - n, o;
  return o = ye(iv || (iv = Pn(["M ", ",", ""])), e, t), o += ye(av || (av = Pn(["L ", ",", ""])), e + r, t), o += ye(ov || (ov = Pn(["L ", ",", ""])), e + r - a / 2, t + i), o += ye(uv || (uv = Pn(["L ", ",", ""])), e + r - a / 2 - n, t + i), o += ye(sv || (sv = Pn(["L ", ",", " Z"])), e, t), o;
}, UD = {
  x: 0,
  y: 0,
  upperWidth: 0,
  lowerWidth: 0,
  height: 0,
  isUpdateAnimationActive: !1,
  animationBegin: 0,
  animationDuration: 1500,
  animationEasing: "ease"
}, WD = (e) => {
  var t = wt(e, UD), {
    x: r,
    y: n,
    upperWidth: i,
    lowerWidth: a,
    height: o,
    className: u
  } = t, {
    animationEasing: s,
    animationDuration: c,
    animationBegin: l,
    isUpdateAnimationActive: f
  } = t, d = he(null), [p, v] = De(-1), h = he(i), m = he(a), y = he(o), b = he(r), w = he(n), _ = ml(e, "trapezoid-");
  if (Ie(() => {
    if (d.current && d.current.getTotalLength)
      try {
        var L = d.current.getTotalLength();
        L && v(L);
      } catch {
      }
  }, []), r !== +r || n !== +n || i !== +i || a !== +a || o !== +o || i === 0 && a === 0 || o === 0)
    return null;
  var O = Oe("recharts-trapezoid", u);
  if (!f)
    return /* @__PURE__ */ P.createElement("g", null, /* @__PURE__ */ P.createElement("path", Oa({}, mt(t), {
      className: O,
      d: fv(r, n, i, a, o)
    })));
  var x = h.current, S = m.current, D = y.current, k = b.current, $ = w.current, j = "0px ".concat(p === -1 ? 1 : p, "px"), A = "".concat(p, "px 0px"), N = yy(["strokeDasharray"], c, s);
  return /* @__PURE__ */ P.createElement(vl, {
    animationId: _,
    key: _,
    canBegin: p > 0,
    duration: c,
    easing: s,
    isActive: f,
    begin: l
  }, (L) => {
    var W = Pt(x, i, L), K = Pt(S, a, L), V = Pt(D, o, L), te = Pt(k, r, L), X = Pt($, n, L);
    d.current && (h.current = W, m.current = K, y.current = V, b.current = te, w.current = X);
    var Pe = L > 0 ? {
      transition: N,
      strokeDasharray: A
    } : {
      strokeDasharray: j
    };
    return /* @__PURE__ */ P.createElement("path", Oa({}, mt(t), {
      className: O,
      d: fv(te, X, W, K, V),
      ref: d,
      style: cv(cv({}, Pe), t.style)
    }));
  });
}, VD = ["option", "shapeType", "activeClassName"];
function KD(e, t) {
  if (e == null) return {};
  var r, n, i = HD(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
  }
  return i;
}
function HD(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
function dv(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function xa(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? dv(Object(r), !0).forEach(function(n) {
      YD(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : dv(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function YD(e, t, r) {
  return (t = GD(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function GD(e) {
  var t = XD(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function XD(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function ZD(e, t) {
  return xa(xa({}, t), e);
}
function JD(e, t) {
  return e === "symbols";
}
function pv(e) {
  var {
    shapeType: t,
    elementProps: r
  } = e;
  switch (t) {
    case "rectangle":
      return /* @__PURE__ */ P.createElement(Oy, r);
    case "trapezoid":
      return /* @__PURE__ */ P.createElement(WD, r);
    case "sector":
      return /* @__PURE__ */ P.createElement(Ey, r);
    case "symbols":
      if (JD(t))
        return /* @__PURE__ */ P.createElement(Qs, r);
      break;
    case "curve":
      return /* @__PURE__ */ P.createElement(pl, r);
    default:
      return null;
  }
}
function QD(e) {
  return /* @__PURE__ */ nr(e) ? e.props : e;
}
function eI(e) {
  var {
    option: t,
    shapeType: r,
    activeClassName: n = "recharts-active-shape"
  } = e, i = KD(e, VD), a;
  if (/* @__PURE__ */ nr(t))
    a = /* @__PURE__ */ Us(t, xa(xa({}, i), QD(t)));
  else if (typeof t == "function")
    a = t(i, i.index);
  else if (FD(t) && typeof t != "boolean") {
    var o = ZD(t, i);
    a = /* @__PURE__ */ P.createElement(pv, {
      shapeType: r,
      elementProps: o
    });
  } else {
    var u = i;
    a = /* @__PURE__ */ P.createElement(pv, {
      shapeType: r,
      elementProps: u
    });
  }
  return i.isActive ? /* @__PURE__ */ P.createElement(ar, {
    className: n
  }, a) : a;
}
var tI = (e, t, r) => {
  var n = xe();
  return (i, a) => (o) => {
    e?.(i, a, o), n(tb({
      activeIndex: String(a),
      activeDataKey: t,
      activeCoordinate: i.tooltipPosition,
      activeGraphicalItemId: r
    }));
  };
}, rI = (e) => {
  var t = xe();
  return (r, n) => (i) => {
    e?.(r, n, i), t(nj());
  };
}, nI = (e, t, r) => {
  var n = xe();
  return (i, a) => (o) => {
    e?.(i, a, o), n(ij({
      activeIndex: String(a),
      activeDataKey: t,
      activeCoordinate: i.tooltipPosition,
      activeGraphicalItemId: r
    }));
  };
};
function iI(e) {
  var {
    tooltipEntrySettings: t
  } = e, r = xe(), n = fr(), i = he(null);
  return jr(() => {
    n || (i.current === null ? r(QT(t)) : i.current !== t && r(ej({
      prev: i.current,
      next: t
    })), i.current = t);
  }, [t, r, n]), jr(() => () => {
    i.current && (r(tj(i.current)), i.current = null);
  }, [r]), null;
}
function aI(e) {
  var {
    legendPayload: t
  } = e, r = xe(), n = U(se), i = he(null);
  return jr(() => {
    n !== "centric" && n !== "radial" || (i.current === null ? r(bP(t)) : i.current !== t && r(wP({
      prev: i.current,
      next: t
    })), i.current = t);
  }, [r, n, t]), jr(() => () => {
    i.current && (r(OP(i.current)), i.current = null);
  }, [r]), null;
}
var Uu, oI = () => {
  var [e] = P.useState(() => An("uid-"));
  return e;
}, uI = (Uu = P.useId) !== null && Uu !== void 0 ? Uu : oI;
function sI(e, t) {
  var r = uI();
  return t || (e ? "".concat(e, "-").concat(r) : r);
}
var lI = /* @__PURE__ */ bt(void 0), cI = (e) => {
  var {
    id: t,
    type: r,
    children: n
  } = e, i = sI("recharts-".concat(r), t);
  return /* @__PURE__ */ P.createElement(lI.Provider, {
    value: i
  }, n(i));
}, fI = {
  cartesianItems: [],
  polarItems: []
}, Bb = tt({
  name: "graphicalItems",
  initialState: fI,
  reducers: {
    addCartesianGraphicalItem: {
      reducer(e, t) {
        e.cartesianItems.push(t.payload);
      },
      prepare: ce()
    },
    replaceCartesianGraphicalItem: {
      reducer(e, t) {
        var {
          prev: r,
          next: n
        } = t.payload, i = St(e).cartesianItems.indexOf(r);
        i > -1 && (e.cartesianItems[i] = n);
      },
      prepare: ce()
    },
    removeCartesianGraphicalItem: {
      reducer(e, t) {
        var r = St(e).cartesianItems.indexOf(t.payload);
        r > -1 && e.cartesianItems.splice(r, 1);
      },
      prepare: ce()
    },
    addPolarGraphicalItem: {
      reducer(e, t) {
        e.polarItems.push(t.payload);
      },
      prepare: ce()
    },
    removePolarGraphicalItem: {
      reducer(e, t) {
        var r = St(e).polarItems.indexOf(t.payload);
        r > -1 && e.polarItems.splice(r, 1);
      },
      prepare: ce()
    }
  }
}), {
  addCartesianGraphicalItem: Ak,
  replaceCartesianGraphicalItem: Tk,
  removeCartesianGraphicalItem: jk,
  addPolarGraphicalItem: dI,
  removePolarGraphicalItem: pI
} = Bb.actions, hI = Bb.reducer;
function vI(e) {
  var t = xe();
  return jr(() => (t(dI(e)), () => {
    t(pI(e));
  }), [t, e]), null;
}
var mI = ["key"], yI = ["onMouseEnter", "onClick", "onMouseLeave"], gI = ["id"], bI = ["id"];
function hv(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function ge(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? hv(Object(r), !0).forEach(function(n) {
      wI(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : hv(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function wI(e, t, r) {
  return (t = OI(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function OI(e) {
  var t = xI(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function xI(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function sr() {
  return sr = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, sr.apply(null, arguments);
}
function lo(e, t) {
  if (e == null) return {};
  var r, n, i = PI(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
  }
  return i;
}
function PI(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
function _I(e) {
  var t = kr(() => qb(e.children, Yr), [e.children]), r = U((n) => CD(n, e.id, t));
  return r == null ? null : /* @__PURE__ */ P.createElement(aI, {
    legendPayload: r
  });
}
var EI = /* @__PURE__ */ P.memo((e) => {
  var {
    dataKey: t,
    nameKey: r,
    sectors: n,
    stroke: i,
    strokeWidth: a,
    fill: o,
    name: u,
    hide: s,
    tooltipType: c,
    id: l
  } = e, f = {
    dataDefinedOnItem: n.map((d) => d.tooltipPayload),
    positions: n.map((d) => d.tooltipPosition),
    settings: {
      stroke: i,
      strokeWidth: a,
      fill: o,
      dataKey: t,
      nameKey: r,
      name: Jm(u, t),
      hide: s,
      type: c,
      color: o,
      unit: "",
      // why doesn't Pie support unit?
      graphicalItemId: l
    }
  };
  return /* @__PURE__ */ P.createElement(iI, {
    tooltipEntrySettings: f
  });
}), SI = (e, t) => e > t ? "start" : e < t ? "end" : "middle", AI = (e, t, r) => ot(typeof t == "function" ? t(e) : t, r, r * 0.8), TI = (e, t, r) => {
  var {
    top: n,
    left: i,
    width: a,
    height: o
  } = t, u = xy(a, o), s = i + ot(e.cx, a, a / 2), c = n + ot(e.cy, o, o / 2), l = ot(e.innerRadius, u, 0), f = AI(r, e.outerRadius, u), d = e.maxRadius || Math.sqrt(a * a + o * o) / 2;
  return {
    cx: s,
    cy: c,
    innerRadius: l,
    outerRadius: f,
    maxRadius: d
  };
}, jI = (e, t) => {
  var r = Je(t - e), n = Math.min(Math.abs(t - e), 360);
  return r * n;
};
function CI(e) {
  return e && typeof e == "object" && "className" in e && typeof e.className == "string" ? e.className : "";
}
var MI = (e, t) => {
  if (/* @__PURE__ */ P.isValidElement(e))
    return /* @__PURE__ */ P.cloneElement(e, t);
  if (typeof e == "function")
    return e(t);
  var r = Oe("recharts-pie-label-line", typeof e != "boolean" ? e.className : ""), {
    key: n
  } = t, i = lo(t, mI);
  return /* @__PURE__ */ P.createElement(pl, sr({}, i, {
    type: "linear",
    className: r
  }));
}, DI = (e, t, r) => {
  if (/* @__PURE__ */ P.isValidElement(e))
    return /* @__PURE__ */ P.cloneElement(e, t);
  var n = r;
  if (typeof e == "function" && (n = e(t), /* @__PURE__ */ P.isValidElement(n)))
    return n;
  var i = Oe("recharts-pie-label-text", CI(e));
  return /* @__PURE__ */ P.createElement(Sc, sr({}, t, {
    alignmentBaseline: "middle",
    className: i
  }), n);
};
function II(e) {
  var {
    sectors: t,
    props: r,
    showLabels: n
  } = e, {
    label: i,
    labelLine: a,
    dataKey: o
  } = r;
  if (!n || !i || !t)
    return null;
  var u = Gr(r), s = Hu(i), c = Hu(a), l = typeof i == "object" && "offsetRadius" in i && typeof i.offsetRadius == "number" && i.offsetRadius || 20, f = t.map((d, p) => {
    var v = (d.startAngle + d.endAngle) / 2, h = Ae(d.cx, d.cy, d.outerRadius + l, v), m = ge(ge(ge(ge({}, u), d), {}, {
      // @ts-expect-error customLabelProps is contributing unknown props
      stroke: "none"
    }, s), {}, {
      index: p,
      textAnchor: SI(h.x, d.cx)
    }, h), y = ge(ge(ge(ge({}, u), d), {}, {
      // @ts-expect-error customLabelLineProps is contributing unknown props
      fill: "none",
      // @ts-expect-error customLabelLineProps is contributing unknown props
      stroke: d.fill
    }, c), {}, {
      index: p,
      points: [Ae(d.cx, d.cy, d.outerRadius, v), h],
      key: "line"
    });
    return /* @__PURE__ */ P.createElement(ci, {
      zIndex: Et.label,
      key: "label-".concat(d.startAngle, "-").concat(d.endAngle, "-").concat(d.midAngle, "-").concat(p)
    }, /* @__PURE__ */ P.createElement(ar, null, a && MI(a, y), DI(i, m, be(d, o))));
  });
  return /* @__PURE__ */ P.createElement(ar, {
    className: "recharts-pie-labels"
  }, f);
}
function NI(e) {
  var {
    sectors: t,
    props: r,
    showLabels: n
  } = e, {
    label: i
  } = r;
  return typeof i == "object" && i != null && "position" in i ? /* @__PURE__ */ P.createElement(mD, {
    label: i
  }) : /* @__PURE__ */ P.createElement(II, {
    sectors: t,
    props: r,
    showLabels: n
  });
}
function kI(e) {
  var {
    sectors: t,
    activeShape: r,
    inactiveShape: n,
    allOtherPieProps: i,
    shape: a,
    id: o
  } = e, u = U(zn), s = U(vb), c = U(Uj), {
    onMouseEnter: l,
    onClick: f,
    onMouseLeave: d
  } = i, p = lo(i, yI), v = tI(l, i.dataKey, o), h = rI(d), m = nI(f, i.dataKey, o);
  return t == null || t.length === 0 ? null : /* @__PURE__ */ P.createElement(P.Fragment, null, t.map((y, b) => {
    if (y?.startAngle === 0 && y?.endAngle === 0 && t.length !== 1) return null;
    var w = c == null || c === o, _ = String(b) === u && (s == null || i.dataKey === s) && w, O = u ? n : null, x = r && _ ? r : O, S = ge(ge({}, y), {}, {
      stroke: y.stroke,
      tabIndex: -1,
      [ey]: b,
      [ty]: o
    });
    return /* @__PURE__ */ P.createElement(ar, sr({
      key: "sector-".concat(y?.startAngle, "-").concat(y?.endAngle, "-").concat(y.midAngle, "-").concat(b),
      tabIndex: -1,
      className: "recharts-pie-sector"
    }, tm(p, y, b), {
      // @ts-expect-error the types need a bit of attention
      onMouseEnter: v(y, b),
      onMouseLeave: h(y, b),
      onClick: m(y, b)
    }), /* @__PURE__ */ P.createElement(eI, sr({
      option: a ?? x,
      index: b,
      shapeType: "sector",
      isActive: _
    }, S)));
  }));
}
function RI(e) {
  var t, {
    pieSettings: r,
    displayedData: n,
    cells: i,
    offset: a
  } = e, {
    cornerRadius: o,
    startAngle: u,
    endAngle: s,
    dataKey: c,
    nameKey: l,
    tooltipType: f
  } = r, d = Math.abs(r.minAngle), p = jI(u, s), v = Math.abs(p), h = n.length <= 1 ? 0 : (t = r.paddingAngle) !== null && t !== void 0 ? t : 0, m = n.filter((x) => be(x, c, 0) !== 0).length, y = (v >= 360 ? m : m - 1) * h, b = v - m * d - y, w = n.reduce((x, S) => {
    var D = be(S, c, 0);
    return x + (z(D) ? D : 0);
  }, 0), _;
  if (w > 0) {
    var O;
    _ = n.map((x, S) => {
      var D = be(x, c, 0), k = be(x, l, S), $ = TI(r, a, x), j = (z(D) ? D : 0) / w, A, N = ge(ge({}, x), i && i[S] && i[S].props);
      S ? A = O.endAngle + Je(p) * h * (D !== 0 ? 1 : 0) : A = u;
      var L = A + Je(p) * ((D !== 0 ? d : 0) + j * b), W = (A + L) / 2, K = ($.innerRadius + $.outerRadius) / 2, V = [{
        name: k,
        value: D,
        payload: N,
        dataKey: c,
        type: f,
        graphicalItemId: r.id
      }], te = Ae($.cx, $.cy, K, W);
      return O = ge(ge(ge(ge({}, r.presentationProps), {}, {
        percent: j,
        cornerRadius: typeof o == "string" ? parseFloat(o) : o,
        name: k,
        tooltipPayload: V,
        midAngle: W,
        middleRadius: K,
        tooltipPosition: te
      }, N), $), {}, {
        value: D,
        dataKey: c,
        startAngle: A,
        endAngle: L,
        payload: N,
        paddingAngle: Je(p) * h
      }), O;
    });
  }
  return _;
}
function $I(e) {
  var {
    showLabels: t,
    sectors: r,
    children: n
  } = e, i = kr(() => !t || !r ? [] : r.map((a) => ({
    value: a.value,
    payload: a.payload,
    clockWise: !1,
    parentViewBox: void 0,
    viewBox: {
      cx: a.cx,
      cy: a.cy,
      innerRadius: a.innerRadius,
      outerRadius: a.outerRadius,
      startAngle: a.startAngle,
      endAngle: a.endAngle,
      clockWise: !1
    },
    fill: a.fill
  })), [r, t]);
  return /* @__PURE__ */ P.createElement(pD, {
    value: t ? i : void 0
  }, n);
}
function LI(e) {
  var {
    props: t,
    previousSectorsRef: r,
    id: n
  } = e, {
    sectors: i,
    isAnimationActive: a,
    animationBegin: o,
    animationDuration: u,
    animationEasing: s,
    activeShape: c,
    inactiveShape: l,
    onAnimationStart: f,
    onAnimationEnd: d
  } = t, p = ml(t, "recharts-pie-"), v = r.current, [h, m] = De(!1), y = me(() => {
    typeof d == "function" && d(), m(!1);
  }, [d]), b = me(() => {
    typeof f == "function" && f(), m(!0);
  }, [f]);
  return /* @__PURE__ */ P.createElement($I, {
    showLabels: !h,
    sectors: i
  }, /* @__PURE__ */ P.createElement(vl, {
    animationId: p,
    begin: o,
    duration: u,
    isActive: a,
    easing: s,
    onAnimationStart: b,
    onAnimationEnd: y,
    key: p
  }, (w) => {
    var _ = [], O = i && i[0], x = O?.startAngle;
    return i?.forEach((S, D) => {
      var k = v && v[D], $ = D > 0 ? Sn(S, "paddingAngle", 0) : 0;
      if (k) {
        var j = Pt(k.endAngle - k.startAngle, S.endAngle - S.startAngle, w), A = ge(ge({}, S), {}, {
          startAngle: x + $,
          endAngle: x + j + $
        });
        _.push(A), x = A.endAngle;
      } else {
        var {
          endAngle: N,
          startAngle: L
        } = S, W = Pt(0, N - L, w), K = ge(ge({}, S), {}, {
          startAngle: x + $,
          endAngle: x + W + $
        });
        _.push(K), x = K.endAngle;
      }
    }), r.current = _, /* @__PURE__ */ P.createElement(ar, null, /* @__PURE__ */ P.createElement(kI, {
      sectors: _,
      activeShape: c,
      inactiveShape: l,
      allOtherPieProps: t,
      shape: t.shape,
      id: n
    }));
  }), /* @__PURE__ */ P.createElement(NI, {
    showLabels: !h,
    sectors: i,
    props: t
  }), t.children);
}
var FI = {
  animationBegin: 400,
  animationDuration: 1500,
  animationEasing: "ease",
  cx: "50%",
  cy: "50%",
  dataKey: "value",
  endAngle: 360,
  fill: "#808080",
  hide: !1,
  innerRadius: 0,
  isAnimationActive: "auto",
  label: !1,
  labelLine: !0,
  legendType: "rect",
  minAngle: 0,
  nameKey: "name",
  outerRadius: "80%",
  paddingAngle: 0,
  rootTabIndex: 0,
  startAngle: 0,
  stroke: "#fff",
  zIndex: Et.area
};
function zI(e) {
  var {
    id: t
  } = e, r = lo(e, gI), {
    hide: n,
    className: i,
    rootTabIndex: a
  } = e, o = kr(() => qb(e.children, Yr), [e.children]), u = U((l) => MD(l, t, o)), s = he(null), c = Oe("recharts-pie", i);
  return n || u == null ? (s.current = null, /* @__PURE__ */ P.createElement(ar, {
    tabIndex: a,
    className: c
  })) : /* @__PURE__ */ P.createElement(ci, {
    zIndex: e.zIndex
  }, /* @__PURE__ */ P.createElement(EI, {
    dataKey: e.dataKey,
    nameKey: e.nameKey,
    sectors: u,
    stroke: e.stroke,
    strokeWidth: e.strokeWidth,
    fill: e.fill,
    name: e.name,
    hide: e.hide,
    tooltipType: e.tooltipType,
    id: t
  }), /* @__PURE__ */ P.createElement(ar, {
    tabIndex: a,
    className: c
  }, /* @__PURE__ */ P.createElement(LI, {
    props: ge(ge({}, r), {}, {
      sectors: u
    }),
    previousSectorsRef: s,
    id: t
  })));
}
function Ub(e) {
  var t = wt(e, FI), {
    id: r
  } = t, n = lo(t, bI), i = Gr(n);
  return /* @__PURE__ */ P.createElement(cI, {
    id: r,
    type: "pie"
  }, (a) => /* @__PURE__ */ P.createElement(P.Fragment, null, /* @__PURE__ */ P.createElement(vI, {
    type: "pie",
    id: a,
    data: n.data,
    dataKey: n.dataKey,
    hide: n.hide,
    angleAxisId: 0,
    radiusAxisId: 0,
    name: n.name,
    nameKey: n.nameKey,
    tooltipType: n.tooltipType,
    legendType: n.legendType,
    fill: n.fill,
    cx: n.cx,
    cy: n.cy,
    startAngle: n.startAngle,
    endAngle: n.endAngle,
    paddingAngle: n.paddingAngle,
    minAngle: n.minAngle,
    innerRadius: n.innerRadius,
    outerRadius: n.outerRadius,
    cornerRadius: n.cornerRadius,
    presentationProps: i,
    maxRadius: t.maxRadius
  }), /* @__PURE__ */ P.createElement(_I, sr({}, n, {
    id: a
  })), /* @__PURE__ */ P.createElement(zI, sr({}, n, {
    id: a
  }))));
}
Ub.displayName = "Pie";
function vv(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function mv(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? vv(Object(r), !0).forEach(function(n) {
      qI(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : vv(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function qI(e, t, r) {
  return (t = BI(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function BI(e) {
  var t = UI(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function UI(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var WI = {
  xAxis: {},
  yAxis: {},
  zAxis: {}
}, Wb = tt({
  name: "cartesianAxis",
  initialState: WI,
  reducers: {
    addXAxis: {
      reducer(e, t) {
        e.xAxis[t.payload.id] = t.payload;
      },
      prepare: ce()
    },
    replaceXAxis: {
      reducer(e, t) {
        var {
          prev: r,
          next: n
        } = t.payload;
        e.xAxis[r.id] !== void 0 && (r.id !== n.id && delete e.xAxis[r.id], e.xAxis[n.id] = n);
      },
      prepare: ce()
    },
    removeXAxis: {
      reducer(e, t) {
        delete e.xAxis[t.payload.id];
      },
      prepare: ce()
    },
    addYAxis: {
      reducer(e, t) {
        e.yAxis[t.payload.id] = t.payload;
      },
      prepare: ce()
    },
    replaceYAxis: {
      reducer(e, t) {
        var {
          prev: r,
          next: n
        } = t.payload;
        e.yAxis[r.id] !== void 0 && (r.id !== n.id && delete e.yAxis[r.id], e.yAxis[n.id] = n);
      },
      prepare: ce()
    },
    removeYAxis: {
      reducer(e, t) {
        delete e.yAxis[t.payload.id];
      },
      prepare: ce()
    },
    addZAxis: {
      reducer(e, t) {
        e.zAxis[t.payload.id] = t.payload;
      },
      prepare: ce()
    },
    replaceZAxis: {
      reducer(e, t) {
        var {
          prev: r,
          next: n
        } = t.payload;
        e.zAxis[r.id] !== void 0 && (r.id !== n.id && delete e.zAxis[r.id], e.zAxis[n.id] = n);
      },
      prepare: ce()
    },
    removeZAxis: {
      reducer(e, t) {
        delete e.zAxis[t.payload.id];
      },
      prepare: ce()
    },
    updateYAxisWidth(e, t) {
      var {
        id: r,
        width: n
      } = t.payload, i = e.yAxis[r];
      if (i) {
        var a = i.widthHistory || [];
        if (a.length === 3 && a[0] === a[2] && n === a[1] && n !== i.width && Math.abs(n - a[0]) <= 1)
          return;
        var o = [...a, n].slice(-3);
        e.yAxis[r] = mv(mv({}, e.yAxis[r]), {}, {
          width: n,
          widthHistory: o
        });
      }
    }
  }
}), {
  addXAxis: Ck,
  replaceXAxis: Mk,
  removeXAxis: Dk,
  addYAxis: Ik,
  replaceYAxis: Nk,
  removeYAxis: kk,
  addZAxis: Rk,
  replaceZAxis: $k,
  removeZAxis: Lk,
  updateYAxisWidth: Fk
} = Wb.actions, VI = Wb.reducer, KI = E([Fe], (e) => ({
  top: e.top,
  bottom: e.bottom,
  left: e.left,
  right: e.right
})), HI = E([KI, Gt, Xt], (e, t, r) => {
  if (!(!e || t == null || r == null))
    return {
      x: e.left,
      y: e.top,
      width: Math.max(0, t - e.left - e.right),
      height: Math.max(0, r - e.top - e.bottom)
    };
}), YI = () => U(HI), GI = (e) => {
  var {
    chartData: t
  } = e, r = xe(), n = fr();
  return Ie(() => n ? () => {
  } : (r(Eh(t)), () => {
    r(Eh(void 0));
  }), [t, r, n]), null;
}, yv = {
  x: 0,
  y: 0,
  width: 0,
  height: 0,
  padding: {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  }
}, Vb = tt({
  name: "brush",
  initialState: yv,
  reducers: {
    setBrushSettings(e, t) {
      return t.payload == null ? yv : t.payload;
    }
  }
}), {
  setBrushSettings: zk
} = Vb.actions, XI = Vb.reducer, ZI = {
  dots: [],
  areas: [],
  lines: []
}, Kb = tt({
  name: "referenceElements",
  initialState: ZI,
  reducers: {
    addDot: (e, t) => {
      e.dots.push(t.payload);
    },
    removeDot: (e, t) => {
      var r = St(e).dots.findIndex((n) => n === t.payload);
      r !== -1 && e.dots.splice(r, 1);
    },
    addArea: (e, t) => {
      e.areas.push(t.payload);
    },
    removeArea: (e, t) => {
      var r = St(e).areas.findIndex((n) => n === t.payload);
      r !== -1 && e.areas.splice(r, 1);
    },
    addLine: (e, t) => {
      e.lines.push(t.payload);
    },
    removeLine: (e, t) => {
      var r = St(e).lines.findIndex((n) => n === t.payload);
      r !== -1 && e.lines.splice(r, 1);
    }
  }
}), {
  addDot: qk,
  removeDot: Bk,
  addArea: Uk,
  removeArea: Wk,
  addLine: Vk,
  removeLine: Kk
} = Kb.actions, JI = Kb.reducer, QI = /* @__PURE__ */ bt(void 0), eN = (e) => {
  var {
    children: t
  } = e, [r] = De("".concat(An("recharts"), "-clip")), n = YI();
  if (n == null)
    return null;
  var {
    x: i,
    y: a,
    width: o,
    height: u
  } = n;
  return /* @__PURE__ */ P.createElement(QI.Provider, {
    value: r
  }, /* @__PURE__ */ P.createElement("defs", null, /* @__PURE__ */ P.createElement("clipPath", {
    id: r
  }, /* @__PURE__ */ P.createElement("rect", {
    x: i,
    y: a,
    height: u,
    width: o
  }))), t);
}, tN = {}, Hb = tt({
  name: "errorBars",
  initialState: tN,
  reducers: {
    addErrorBar: (e, t) => {
      var {
        itemId: r,
        errorBar: n
      } = t.payload;
      e[r] || (e[r] = []), e[r].push(n);
    },
    replaceErrorBar: (e, t) => {
      var {
        itemId: r,
        prev: n,
        next: i
      } = t.payload;
      e[r] && (e[r] = e[r].map((a) => a.dataKey === n.dataKey && a.direction === n.direction ? i : a));
    },
    removeErrorBar: (e, t) => {
      var {
        itemId: r,
        errorBar: n
      } = t.payload;
      e[r] && (e[r] = e[r].filter((i) => i.dataKey !== n.dataKey || i.direction !== n.direction));
    }
  }
}), {
  addErrorBar: Hk,
  replaceErrorBar: Yk,
  removeErrorBar: Gk
} = Hb.actions, rN = Hb.reducer, Di = { exports: {} }, Wu = {};
var gv;
function nN() {
  if (gv) return Wu;
  gv = 1;
  var e = lr;
  function t(s, c) {
    return s === c && (s !== 0 || 1 / s === 1 / c) || s !== s && c !== c;
  }
  var r = typeof Object.is == "function" ? Object.is : t, n = e.useSyncExternalStore, i = e.useRef, a = e.useEffect, o = e.useMemo, u = e.useDebugValue;
  return Wu.useSyncExternalStoreWithSelector = function(s, c, l, f, d) {
    var p = i(null);
    if (p.current === null) {
      var v = { hasValue: !1, value: null };
      p.current = v;
    } else v = p.current;
    p = o(
      function() {
        function m(O) {
          if (!y) {
            if (y = !0, b = O, O = f(O), d !== void 0 && v.hasValue) {
              var x = v.value;
              if (d(x, O))
                return w = x;
            }
            return w = O;
          }
          if (x = w, r(b, O)) return x;
          var S = f(O);
          return d !== void 0 && d(x, S) ? (b = O, x) : (b = O, w = S);
        }
        var y = !1, b, w, _ = l === void 0 ? null : l;
        return [
          function() {
            return m(c());
          },
          _ === null ? void 0 : function() {
            return m(_());
          }
        ];
      },
      [c, l, f, d]
    );
    var h = n(s, p[0], p[1]);
    return a(
      function() {
        v.hasValue = !0, v.value = h;
      },
      [h]
    ), u(h), h;
  }, Wu;
}
var Vu = {};
var bv;
function iN() {
  return bv || (bv = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(s, c) {
      return s === c && (s !== 0 || 1 / s === 1 / c) || s !== s && c !== c;
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var t = lr, r = typeof Object.is == "function" ? Object.is : e, n = t.useSyncExternalStore, i = t.useRef, a = t.useEffect, o = t.useMemo, u = t.useDebugValue;
    Vu.useSyncExternalStoreWithSelector = function(s, c, l, f, d) {
      var p = i(null);
      if (p.current === null) {
        var v = { hasValue: !1, value: null };
        p.current = v;
      } else v = p.current;
      p = o(
        function() {
          function m(O) {
            if (!y) {
              if (y = !0, b = O, O = f(O), d !== void 0 && v.hasValue) {
                var x = v.value;
                if (d(x, O))
                  return w = x;
              }
              return w = O;
            }
            if (x = w, r(b, O))
              return x;
            var S = f(O);
            return d !== void 0 && d(x, S) ? (b = O, x) : (b = O, w = S);
          }
          var y = !1, b, w, _ = l === void 0 ? null : l;
          return [
            function() {
              return m(c());
            },
            _ === null ? void 0 : function() {
              return m(_());
            }
          ];
        },
        [c, l, f, d]
      );
      var h = n(s, p[0], p[1]);
      return a(
        function() {
          v.hasValue = !0, v.value = h;
        },
        [h]
      ), u(h), h;
    }, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  })()), Vu;
}
var wv;
function aN() {
  return wv || (wv = 1, process.env.NODE_ENV === "production" ? Di.exports = nN() : Di.exports = iN()), Di.exports;
}
aN();
function oN(e) {
  e();
}
function uN() {
  let e = null, t = null;
  return {
    clear() {
      e = null, t = null;
    },
    notify() {
      oN(() => {
        let r = e;
        for (; r; )
          r.callback(), r = r.next;
      });
    },
    get() {
      const r = [];
      let n = e;
      for (; n; )
        r.push(n), n = n.next;
      return r;
    },
    subscribe(r) {
      let n = !0;
      const i = t = {
        callback: r,
        next: null,
        prev: t
      };
      return i.prev ? i.prev.next = i : e = i, function() {
        !n || e === null || (n = !1, i.next ? i.next.prev = i.prev : t = i.prev, i.prev ? i.prev.next = i.next : e = i.next);
      };
    }
  };
}
var Ov = {
  notify() {
  },
  get: () => []
};
function sN(e, t) {
  let r, n = Ov, i = 0, a = !1;
  function o(h) {
    l();
    const m = n.subscribe(h);
    let y = !1;
    return () => {
      y || (y = !0, m(), f());
    };
  }
  function u() {
    n.notify();
  }
  function s() {
    v.onStateChange && v.onStateChange();
  }
  function c() {
    return a;
  }
  function l() {
    i++, r || (r = e.subscribe(s), n = uN());
  }
  function f() {
    i--, r && i === 0 && (r(), r = void 0, n.clear(), n = Ov);
  }
  function d() {
    a || (a = !0, l());
  }
  function p() {
    a && (a = !1, f());
  }
  const v = {
    addNestedSub: o,
    notifyNestedSubs: u,
    handleChangeWrapper: s,
    isSubscribed: c,
    trySubscribe: d,
    tryUnsubscribe: p,
    getListeners: () => n
  };
  return v;
}
var lN = () => typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", cN = /* @__PURE__ */ lN(), fN = () => typeof navigator < "u" && navigator.product === "ReactNative", dN = /* @__PURE__ */ fN(), pN = () => cN || dN ? P.useLayoutEffect : P.useEffect, hN = /* @__PURE__ */ pN();
function xv(e, t) {
  return e === t ? e !== 0 || t !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
function vN(e, t) {
  if (xv(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  const r = Object.keys(e), n = Object.keys(t);
  if (r.length !== n.length) return !1;
  for (let i = 0; i < r.length; i++)
    if (!Object.prototype.hasOwnProperty.call(t, r[i]) || !xv(e[r[i]], t[r[i]]))
      return !1;
  return !0;
}
var mN = /* @__PURE__ */ Symbol.for("react-redux-context"), yN = typeof globalThis < "u" ? globalThis : (
  /* fall back to a per-module scope (pre-8.1 behaviour) if `globalThis` is not available */
  {}
);
function gN() {
  if (!P.createContext) return {};
  const e = yN[mN] ??= /* @__PURE__ */ new Map();
  let t = e.get(P.createContext);
  return t || (t = P.createContext(
    null
  ), process.env.NODE_ENV !== "production" && (t.displayName = "ReactRedux"), e.set(P.createContext, t)), t;
}
var bN = /* @__PURE__ */ gN();
function wN(e) {
  const { children: t, context: r, serverState: n, store: i } = e, a = P.useMemo(() => {
    const s = sN(i), c = {
      store: i,
      subscription: s,
      getServerState: n ? () => n : void 0
    };
    if (process.env.NODE_ENV === "production")
      return c;
    {
      const { identityFunctionCheck: l = "once", stabilityCheck: f = "once" } = e;
      return /* @__PURE__ */ Object.assign(c, {
        stabilityCheck: f,
        identityFunctionCheck: l
      });
    }
  }, [i, n]), o = P.useMemo(() => i.getState(), [i]);
  hN(() => {
    const { subscription: s } = a;
    return s.onStateChange = s.notifyNestedSubs, s.trySubscribe(), o !== i.getState() && s.notifyNestedSubs(), () => {
      s.tryUnsubscribe(), s.onStateChange = void 0;
    };
  }, [a, o]);
  const u = r || bN;
  return /* @__PURE__ */ P.createElement(u.Provider, { value: a }, t);
}
var ON = wN, xN = /* @__PURE__ */ new Set([
  "axisLine",
  "tickLine",
  "activeBar",
  "activeDot",
  "activeLabel",
  "activeShape",
  "allowEscapeViewBox",
  "background",
  "cursor",
  "dot",
  "label",
  "line",
  "margin",
  "padding",
  "position",
  "shape",
  "style",
  "tick",
  "wrapperStyle",
  // radius can be an array of 4 numbers, easy to compare shallowly
  "radius"
]);
function PN(e, t) {
  return e == null && t == null ? !0 : typeof e == "number" && typeof t == "number" ? e === t || e !== e && t !== t : e === t;
}
function _N(e, t) {
  var r = /* @__PURE__ */ new Set([...Object.keys(e), ...Object.keys(t)]);
  for (var n of r)
    if (xN.has(n)) {
      if (e[n] == null && t[n] == null)
        continue;
      if (!vN(e[n], t[n]))
        return !1;
    } else if (!PN(e[n], t[n]))
      return !1;
  return !0;
}
var EN = (e, t) => t, jc = E([EN, se, Tg, ke, fb, Jt, oC, Fe], pC), Cc = (e) => {
  var t = e.currentTarget.getBoundingClientRect(), r = t.width / e.currentTarget.offsetWidth, n = t.height / e.currentTarget.offsetHeight;
  return {
    /*
     * Here it's important to use:
     * - event.clientX and event.clientY to get the mouse position relative to the viewport, including scroll.
     * - pageX and pageY are not used because they are relative to the whole document, and ignore scroll.
     * - rect.left and rect.top are used to get the position of the chart relative to the viewport.
     * - offsetX and offsetY are not used because they are relative to the offset parent
     *  which may or may not be the same as the clientX and clientY, depending on the position of the chart in the DOM
     *  and surrounding element styles. CSS position: relative, absolute, fixed, will change the offset parent.
     * - scaleX and scaleY are necessary for when the chart element is scaled using CSS `transform: scale(N)`.
     */
    chartX: Math.round((e.clientX - t.left) / r),
    chartY: Math.round((e.clientY - t.top) / n)
  };
}, Yb = yt("mouseClick"), Gb = Yn();
Gb.startListening({
  actionCreator: Yb,
  effect: (e, t) => {
    var r = e.payload, n = jc(t.getState(), Cc(r));
    n?.activeIndex != null && t.dispatch(aj({
      activeIndex: n.activeIndex,
      activeDataKey: void 0,
      activeCoordinate: n.activeCoordinate
    }));
  }
});
var qs = yt("mouseMove"), Xb = Yn(), Ii = null;
Xb.startListening({
  actionCreator: qs,
  effect: (e, t) => {
    var r = e.payload;
    Ii !== null && cancelAnimationFrame(Ii);
    var n = Cc(r);
    Ii = requestAnimationFrame(() => {
      var i = t.getState(), a = mc(i, i.tooltip.settings.shared);
      if (a === "axis") {
        var o = jc(i, n);
        o?.activeIndex != null ? t.dispatch(nb({
          activeIndex: o.activeIndex,
          activeDataKey: void 0,
          activeCoordinate: o.activeCoordinate
        })) : t.dispatch(rb());
      }
      Ii = null;
    });
  }
});
function SN(e, t) {
  return t instanceof HTMLElement ? "HTMLElement <".concat(t.tagName, ' class="').concat(t.className, '">') : t === window ? "global.window" : e === "children" && typeof t == "object" && t !== null ? "<<CHILDREN>>" : t;
}
var Pv = {
  accessibilityLayer: !0,
  barCategoryGap: "10%",
  barGap: 4,
  barSize: void 0,
  className: void 0,
  maxBarSize: void 0,
  stackOffset: "none",
  syncId: void 0,
  syncMethod: "index",
  baseValue: void 0,
  reverseStackOrder: !1
}, Zb = tt({
  name: "rootProps",
  initialState: Pv,
  reducers: {
    updateOptions: (e, t) => {
      var r;
      e.accessibilityLayer = t.payload.accessibilityLayer, e.barCategoryGap = t.payload.barCategoryGap, e.barGap = (r = t.payload.barGap) !== null && r !== void 0 ? r : Pv.barGap, e.barSize = t.payload.barSize, e.maxBarSize = t.payload.maxBarSize, e.stackOffset = t.payload.stackOffset, e.syncId = t.payload.syncId, e.syncMethod = t.payload.syncMethod, e.className = t.payload.className, e.baseValue = t.payload.baseValue, e.reverseStackOrder = t.payload.reverseStackOrder;
    }
  }
}), AN = Zb.reducer, {
  updateOptions: TN
} = Zb.actions, Jb = tt({
  name: "polarOptions",
  initialState: null,
  reducers: {
    updatePolarOptions: (e, t) => t.payload
  }
}), {
  updatePolarOptions: jN
} = Jb.actions, CN = Jb.reducer, Qb = yt("keyDown"), e0 = yt("focus"), Mc = Yn();
Mc.startListening({
  actionCreator: Qb,
  effect: (e, t) => {
    var r = t.getState(), n = r.rootProps.accessibilityLayer !== !1;
    if (n) {
      var {
        keyboardInteraction: i
      } = r.tooltip, a = e.payload;
      if (!(a !== "ArrowRight" && a !== "ArrowLeft" && a !== "Enter")) {
        var o = yc(i, dn(r), ai(r), si(r)), u = o == null ? -1 : Number(o);
        if (!(!Number.isFinite(u) || u < 0)) {
          var s = Jt(r);
          if (a === "Enter") {
            var c = ga(r, "axis", "hover", String(i.index));
            t.dispatch(Rs({
              active: !i.active,
              activeIndex: i.index,
              activeCoordinate: c
            }));
            return;
          }
          var l = GT(r), f = l === "left-to-right" ? 1 : -1, d = a === "ArrowRight" ? 1 : -1, p = u + d * f;
          if (!(s == null || p >= s.length || p < 0)) {
            var v = ga(r, "axis", "hover", String(p));
            t.dispatch(Rs({
              active: !0,
              activeIndex: p.toString(),
              activeCoordinate: v
            }));
          }
        }
      }
    }
  }
});
Mc.startListening({
  actionCreator: e0,
  effect: (e, t) => {
    var r = t.getState(), n = r.rootProps.accessibilityLayer !== !1;
    if (n) {
      var {
        keyboardInteraction: i
      } = r.tooltip;
      if (!i.active && i.index == null) {
        var a = "0", o = ga(r, "axis", "hover", String(a));
        t.dispatch(Rs({
          active: !0,
          activeIndex: a,
          activeCoordinate: o
        }));
      }
    }
  }
});
var pt = yt("externalEvent"), t0 = Yn(), Ku = /* @__PURE__ */ new Map();
t0.startListening({
  actionCreator: pt,
  effect: (e, t) => {
    var {
      handler: r,
      reactEvent: n
    } = e.payload;
    if (r != null) {
      n.persist();
      var i = n.type, a = Ku.get(i);
      a !== void 0 && cancelAnimationFrame(a);
      var o = requestAnimationFrame(() => {
        try {
          var u = t.getState(), s = {
            activeCoordinate: Vj(u),
            activeDataKey: vb(u),
            activeIndex: zn(u),
            activeLabel: hb(u),
            activeTooltipIndex: zn(u),
            isTooltipActive: Kj(u)
          };
          r(s, n);
        } finally {
          Ku.delete(i);
        }
      });
      Ku.set(i, o);
    }
  }
});
var MN = E([cn], (e) => e.tooltipItemPayloads), DN = E([MN, ui, (e, t) => t, (e, t, r) => r], (e, t, r, n) => {
  var i = e.find((u) => u.settings.graphicalItemId === n);
  if (i != null) {
    var {
      positions: a
    } = i;
    if (a != null) {
      var o = t(a, r);
      return o;
    }
  }
}), r0 = yt("touchMove"), n0 = Yn();
n0.startListening({
  actionCreator: r0,
  effect: (e, t) => {
    var r = e.payload;
    if (!(r.touches == null || r.touches.length === 0)) {
      var n = t.getState(), i = mc(n, n.tooltip.settings.shared);
      if (i === "axis") {
        var a = r.touches[0];
        if (a == null)
          return;
        var o = jc(n, Cc({
          clientX: a.clientX,
          clientY: a.clientY,
          currentTarget: r.currentTarget
        }));
        o?.activeIndex != null && t.dispatch(nb({
          activeIndex: o.activeIndex,
          activeDataKey: void 0,
          activeCoordinate: o.activeCoordinate
        }));
      } else if (i === "item") {
        var u, s = r.touches[0];
        if (document.elementFromPoint == null || s == null)
          return;
        var c = document.elementFromPoint(s.clientX, s.clientY);
        if (!c || !c.getAttribute)
          return;
        var l = c.getAttribute(ey), f = (u = c.getAttribute(ty)) !== null && u !== void 0 ? u : void 0, d = fn(n).find((h) => h.id === f);
        if (l == null || d == null || f == null)
          return;
        var {
          dataKey: p
        } = d, v = DN(n, l, f);
        t.dispatch(tb({
          activeDataKey: p,
          activeIndex: l,
          activeCoordinate: v,
          activeGraphicalItemId: f
        }));
      }
    }
  }
});
var IN = bm({
  brush: XI,
  cartesianAxis: VI,
  chartData: VC,
  errorBars: rN,
  graphicalItems: hI,
  layout: f1,
  legend: xP,
  options: zC,
  polarAxis: _D,
  polarOptions: CN,
  referenceElements: JI,
  rootProps: AN,
  tooltip: oj,
  zIndex: AC
}), NN = function(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "Chart";
  return Rx({
    reducer: IN,
    // redux-toolkit v1 types are unhappy with the preloadedState type. Remove the `as any` when bumping to v2
    preloadedState: t,
    // @ts-expect-error redux-toolkit v1 types are unhappy with the middleware array. Remove this comment when bumping to v2
    middleware: (n) => {
      var i;
      return n({
        serializableCheck: !1,
        immutableCheck: !["commonjs", "es6", "production"].includes((i = "es6") !== null && i !== void 0 ? i : "")
      }).concat([Gb.middleware, Xb.middleware, Mc.middleware, t0.middleware, n0.middleware]);
    },
    /*
     * I can't find out how to satisfy typescript here.
     * We return `EnhancerArray<[StoreEnhancer<{}, {}>, StoreEnhancer]>` from this function,
     * but the types say we should return `EnhancerArray<StoreEnhancer<{}, {}>`.
     * Looks like it's badly inferred generics, but it won't allow me to provide the correct type manually either.
     * So let's just ignore the error for now.
     */
    // @ts-expect-error mismatched generics
    enhancers: (n) => {
      var i = n;
      return typeof n == "function" && (i = n()), i.concat(Lm({
        type: "raf"
      }));
    },
    devTools: {
      serialize: {
        replacer: SN
      },
      name: "recharts-".concat(r)
    }
  });
};
function kN(e) {
  var {
    preloadedState: t,
    children: r,
    reduxStoreName: n
  } = e, i = fr(), a = he(null);
  if (i)
    return r;
  a.current == null && (a.current = NN(t, n));
  var o = tl;
  return /* @__PURE__ */ P.createElement(ON, {
    context: o,
    store: a.current
  }, r);
}
function RN(e) {
  var {
    layout: t,
    margin: r
  } = e, n = xe(), i = fr();
  return Ie(() => {
    i || (n(s1(t)), n(u1(r)));
  }, [n, i, t, r]), null;
}
var $N = /* @__PURE__ */ C0(RN, _N);
function LN(e) {
  var t = xe();
  return Ie(() => {
    t(TN(e));
  }, [t, e]), null;
}
function _v(e) {
  var {
    zIndex: t,
    isPanorama: r
  } = e, n = he(null), i = xe();
  return jr(() => (n.current && i(EC({
    zIndex: t,
    element: n.current,
    isPanorama: r
  })), () => {
    i(SC({
      zIndex: t,
      isPanorama: r
    }));
  }), [i, t, r]), /* @__PURE__ */ P.createElement("g", {
    tabIndex: -1,
    ref: n
  });
}
function Ev(e) {
  var {
    children: t,
    isPanorama: r
  } = e, n = U(vC);
  if (!n || n.length === 0)
    return t;
  var i = n.filter((o) => o < 0), a = n.filter((o) => o > 0);
  return /* @__PURE__ */ P.createElement(P.Fragment, null, i.map((o) => /* @__PURE__ */ P.createElement(_v, {
    key: o,
    zIndex: o,
    isPanorama: r
  })), t, a.map((o) => /* @__PURE__ */ P.createElement(_v, {
    key: o,
    zIndex: o,
    isPanorama: r
  })));
}
var FN = ["children"];
function zN(e, t) {
  if (e == null) return {};
  var r, n, i = qN(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
  }
  return i;
}
function qN(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
function Pa() {
  return Pa = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Pa.apply(null, arguments);
}
var BN = {
  width: "100%",
  height: "100%",
  /*
   * display: block is necessary here because the default for an SVG is display: inline,
   * which in some browsers (Chrome) adds a little bit of extra space above and below the SVG
   * to make space for the descender of letters like "g" and "y". This throws off the height calculation
   * and causes the container to grow indefinitely on each render with responsive=true.
   * Display: block removes that extra space.
   *
   * Interestingly, Firefox does not have this problem, but it doesn't hurt to add the style anyway.
   */
  display: "block"
}, UN = /* @__PURE__ */ et((e, t) => {
  var r = oy(), n = uy(), i = my();
  if (!or(r) || !or(n))
    return null;
  var {
    children: a,
    otherAttributes: o,
    title: u,
    desc: s
  } = e, c, l;
  return o != null && (typeof o.tabIndex == "number" ? c = o.tabIndex : c = i ? 0 : void 0, typeof o.role == "string" ? l = o.role : l = i ? "application" : void 0), /* @__PURE__ */ P.createElement(Ks, Pa({}, o, {
    title: u,
    desc: s,
    role: l,
    tabIndex: c,
    width: r,
    height: n,
    style: BN,
    ref: t
  }), a);
}), WN = (e) => {
  var {
    children: t
  } = e, r = U(Fa);
  if (!r)
    return null;
  var {
    width: n,
    height: i,
    y: a,
    x: o
  } = r;
  return /* @__PURE__ */ P.createElement(Ks, {
    width: n,
    height: i,
    x: o,
    y: a
  }, t);
}, Sv = /* @__PURE__ */ et((e, t) => {
  var {
    children: r
  } = e, n = zN(e, FN), i = fr();
  return i ? /* @__PURE__ */ P.createElement(WN, null, /* @__PURE__ */ P.createElement(Ev, {
    isPanorama: !0
  }, r)) : /* @__PURE__ */ P.createElement(UN, Pa({
    ref: t
  }, n), /* @__PURE__ */ P.createElement(Ev, {
    isPanorama: !1
  }, r));
});
function VN() {
  var e = xe(), [t, r] = De(null), n = U(S1);
  return Ie(() => {
    if (t != null) {
      var i = t.getBoundingClientRect(), a = i.width / t.offsetWidth;
      je(a) && a !== n && e(c1(a));
    }
  }, [t, e, n]), r;
}
function Av(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function KN(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Av(Object(r), !0).forEach(function(n) {
      HN(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Av(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function HN(e, t, r) {
  return (t = YN(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function YN(e) {
  var t = GN(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function GN(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Nr() {
  return Nr = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Nr.apply(null, arguments);
}
var XN = () => (eM(), null);
function _a(e) {
  if (typeof e == "number")
    return e;
  if (typeof e == "string") {
    var t = parseFloat(e);
    if (!Number.isNaN(t))
      return t;
  }
  return 0;
}
var ZN = /* @__PURE__ */ et((e, t) => {
  var r, n, i = he(null), [a, o] = De({
    containerWidth: _a((r = e.style) === null || r === void 0 ? void 0 : r.width),
    containerHeight: _a((n = e.style) === null || n === void 0 ? void 0 : n.height)
  }), u = me((c, l) => {
    o((f) => {
      var d = Math.round(c), p = Math.round(l);
      return f.containerWidth === d && f.containerHeight === p ? f : {
        containerWidth: d,
        containerHeight: p
      };
    });
  }, []), s = me((c) => {
    if (typeof t == "function" && t(c), c != null && typeof ResizeObserver < "u") {
      var {
        width: l,
        height: f
      } = c.getBoundingClientRect();
      u(l, f);
      var d = (v) => {
        var {
          width: h,
          height: m
        } = v[0].contentRect;
        u(h, m);
      }, p = new ResizeObserver(d);
      p.observe(c), i.current = p;
    }
  }, [t, u]);
  return Ie(() => () => {
    var c = i.current;
    c?.disconnect();
  }, [u]), /* @__PURE__ */ P.createElement(P.Fragment, null, /* @__PURE__ */ P.createElement(Ba, {
    width: a.containerWidth,
    height: a.containerHeight
  }), /* @__PURE__ */ P.createElement("div", Nr({
    ref: s
  }, e)));
}), JN = /* @__PURE__ */ et((e, t) => {
  var {
    width: r,
    height: n
  } = e, [i, a] = De({
    containerWidth: _a(r),
    containerHeight: _a(n)
  }), o = me((s, c) => {
    a((l) => {
      var f = Math.round(s), d = Math.round(c);
      return l.containerWidth === f && l.containerHeight === d ? l : {
        containerWidth: f,
        containerHeight: d
      };
    });
  }, []), u = me((s) => {
    if (typeof t == "function" && t(s), s != null) {
      var {
        width: c,
        height: l
      } = s.getBoundingClientRect();
      o(c, l);
    }
  }, [t, o]);
  return /* @__PURE__ */ P.createElement(P.Fragment, null, /* @__PURE__ */ P.createElement(Ba, {
    width: i.containerWidth,
    height: i.containerHeight
  }), /* @__PURE__ */ P.createElement("div", Nr({
    ref: u
  }, e)));
}), QN = /* @__PURE__ */ et((e, t) => {
  var {
    width: r,
    height: n
  } = e;
  return /* @__PURE__ */ P.createElement(P.Fragment, null, /* @__PURE__ */ P.createElement(Ba, {
    width: r,
    height: n
  }), /* @__PURE__ */ P.createElement("div", Nr({
    ref: t
  }, e)));
}), ek = /* @__PURE__ */ et((e, t) => {
  var {
    width: r,
    height: n
  } = e;
  return Bt(r) || Bt(n) ? /* @__PURE__ */ P.createElement(JN, Nr({}, e, {
    ref: t
  })) : /* @__PURE__ */ P.createElement(QN, Nr({}, e, {
    ref: t
  }));
});
function tk(e) {
  return e === !0 ? ZN : ek;
}
var rk = /* @__PURE__ */ et((e, t) => {
  var {
    children: r,
    className: n,
    height: i,
    onClick: a,
    onContextMenu: o,
    onDoubleClick: u,
    onMouseDown: s,
    onMouseEnter: c,
    onMouseLeave: l,
    onMouseMove: f,
    onMouseUp: d,
    onTouchEnd: p,
    onTouchMove: v,
    onTouchStart: h,
    style: m,
    width: y,
    responsive: b,
    dispatchTouchEvents: w = !0
  } = e, _ = he(null), O = xe(), [x, S] = De(null), [D, k] = De(null), $ = VN(), j = cl(), A = j?.width > 0 ? j.width : y, N = j?.height > 0 ? j.height : i, L = me((T) => {
    $(T), typeof t == "function" && t(T), S(T), k(T), T != null && (_.current = T);
  }, [$, t, S, k]), W = me((T) => {
    O(Yb(T)), O(pt({
      handler: a,
      reactEvent: T
    }));
  }, [O, a]), K = me((T) => {
    O(qs(T)), O(pt({
      handler: c,
      reactEvent: T
    }));
  }, [O, c]), V = me((T) => {
    O(rb()), O(pt({
      handler: l,
      reactEvent: T
    }));
  }, [O, l]), te = me((T) => {
    O(qs(T)), O(pt({
      handler: f,
      reactEvent: T
    }));
  }, [O, f]), X = me(() => {
    O(e0());
  }, [O]), Pe = me((T) => {
    O(Qb(T.key));
  }, [O]), qe = me((T) => {
    O(pt({
      handler: o,
      reactEvent: T
    }));
  }, [O, o]), pe = me((T) => {
    O(pt({
      handler: u,
      reactEvent: T
    }));
  }, [O, u]), Be = me((T) => {
    O(pt({
      handler: s,
      reactEvent: T
    }));
  }, [O, s]), Ue = me((T) => {
    O(pt({
      handler: d,
      reactEvent: T
    }));
  }, [O, d]), xt = me((T) => {
    O(pt({
      handler: h,
      reactEvent: T
    }));
  }, [O, h]), lt = me((T) => {
    w && O(r0(T)), O(pt({
      handler: v,
      reactEvent: T
    }));
  }, [O, w, v]), _e = me((T) => {
    O(pt({
      handler: p,
      reactEvent: T
    }));
  }, [O, p]), Ct = tk(b);
  return /* @__PURE__ */ P.createElement(xb.Provider, {
    value: x
  }, /* @__PURE__ */ P.createElement(Nv.Provider, {
    value: D
  }, /* @__PURE__ */ P.createElement(Ct, {
    width: A ?? m?.width,
    height: N ?? m?.height,
    className: Oe("recharts-wrapper", n),
    style: KN({
      position: "relative",
      cursor: "default",
      width: A,
      height: N
    }, m),
    onClick: W,
    onContextMenu: qe,
    onDoubleClick: pe,
    onFocus: X,
    onKeyDown: Pe,
    onMouseDown: Be,
    onMouseEnter: K,
    onMouseLeave: V,
    onMouseMove: te,
    onMouseUp: Ue,
    onTouchEnd: _e,
    onTouchMove: lt,
    onTouchStart: xt,
    ref: L
  }, /* @__PURE__ */ P.createElement(XN, null), r)));
}), nk = ["width", "height", "responsive", "children", "className", "style", "compact", "title", "desc"];
function ik(e, t) {
  if (e == null) return {};
  var r, n, i = ak(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
  }
  return i;
}
function ak(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
var ok = /* @__PURE__ */ et((e, t) => {
  var {
    width: r,
    height: n,
    responsive: i,
    children: a,
    className: o,
    style: u,
    compact: s,
    title: c,
    desc: l
  } = e, f = ik(e, nk), d = Gr(f);
  return s ? /* @__PURE__ */ P.createElement(P.Fragment, null, /* @__PURE__ */ P.createElement(Ba, {
    width: r,
    height: n
  }), /* @__PURE__ */ P.createElement(Sv, {
    otherAttributes: d,
    title: c,
    desc: l
  }, a)) : /* @__PURE__ */ P.createElement(rk, {
    className: o,
    style: u,
    width: r,
    height: n,
    responsive: i ?? !1,
    onClick: e.onClick,
    onMouseLeave: e.onMouseLeave,
    onMouseEnter: e.onMouseEnter,
    onMouseMove: e.onMouseMove,
    onMouseDown: e.onMouseDown,
    onMouseUp: e.onMouseUp,
    onContextMenu: e.onContextMenu,
    onDoubleClick: e.onDoubleClick,
    onTouchStart: e.onTouchStart,
    onTouchMove: e.onTouchMove,
    onTouchEnd: e.onTouchEnd
  }, /* @__PURE__ */ P.createElement(Sv, {
    otherAttributes: d,
    title: c,
    desc: l,
    ref: t
  }, /* @__PURE__ */ P.createElement(eN, null, a)));
});
function uk(e) {
  var t = xe();
  return Ie(() => {
    t(jN(e));
  }, [t, e]), null;
}
var sk = ["layout"];
function Bs() {
  return Bs = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Bs.apply(null, arguments);
}
function lk(e, t) {
  if (e == null) return {};
  var r, n, i = ck(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
  }
  return i;
}
function ck(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
var fk = {
  top: 5,
  right: 5,
  bottom: 5,
  left: 5
}, i0 = {
  accessibilityLayer: !0,
  stackOffset: "none",
  barCategoryGap: "10%",
  barGap: 4,
  margin: fk,
  reverseStackOrder: !1,
  syncMethod: "index",
  layout: "radial",
  responsive: !1,
  cx: "50%",
  cy: "50%",
  innerRadius: 0,
  outerRadius: "80%"
}, dk = /* @__PURE__ */ et(function(t, r) {
  var n, i = wt(t.categoricalChartProps, i0), {
    layout: a
  } = i, o = lk(i, sk), {
    chartName: u,
    defaultTooltipEventType: s,
    validateTooltipEventTypes: c,
    tooltipPayloadSearcher: l
  } = t, f = {
    chartName: u,
    defaultTooltipEventType: s,
    validateTooltipEventTypes: c,
    tooltipPayloadSearcher: l,
    eventEmitter: void 0
  };
  return /* @__PURE__ */ P.createElement(kN, {
    preloadedState: {
      options: f
    },
    reduxStoreName: (n = i.id) !== null && n !== void 0 ? n : u
  }, /* @__PURE__ */ P.createElement(GI, {
    chartData: i.data
  }), /* @__PURE__ */ P.createElement($N, {
    layout: a,
    margin: i.margin
  }), /* @__PURE__ */ P.createElement(LN, {
    baseValue: void 0,
    accessibilityLayer: i.accessibilityLayer,
    barCategoryGap: i.barCategoryGap,
    maxBarSize: i.maxBarSize,
    stackOffset: i.stackOffset,
    barGap: i.barGap,
    barSize: i.barSize,
    syncId: i.syncId,
    syncMethod: i.syncMethod,
    className: i.className,
    reverseStackOrder: i.reverseStackOrder
  }), /* @__PURE__ */ P.createElement(uk, {
    cx: i.cx,
    cy: i.cy,
    startAngle: i.startAngle,
    endAngle: i.endAngle,
    innerRadius: i.innerRadius,
    outerRadius: i.outerRadius
  }), /* @__PURE__ */ P.createElement(ok, Bs({}, o, {
    ref: r
  })));
});
function Tv(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function jv(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Tv(Object(r), !0).forEach(function(n) {
      pk(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Tv(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function pk(e, t, r) {
  return (t = hk(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function hk(e) {
  var t = vk(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function vk(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var mk = ["item"], yk = jv(jv({}, i0), {}, {
  layout: "centric",
  startAngle: 0,
  endAngle: 360
}), gk = /* @__PURE__ */ et((e, t) => {
  var r = wt(e, yk);
  return /* @__PURE__ */ P.createElement(dk, {
    chartName: "PieChart",
    defaultTooltipEventType: "item",
    validateTooltipEventTypes: mk,
    tooltipPayloadSearcher: LC,
    categoricalChartProps: r,
    ref: t
  });
});
const Xk = ({
  className: e = "",
  theme: t = {},
  onCalculate: r,
  labels: n = {},
  currency: i = "€",
  showFields: a = {}
}) => {
  const o = {
    title: "Calculadora de Interés Compuesto",
    principal: "Capital Inicial",
    contribution: "Aportación Periódica",
    contributionFrequency: "Frecuencia de Aportación",
    rate: "Tasa de Interés Anual",
    time: "Tiempo",
    timeUnit: "años",
    compoundingFrequency: "Frecuencia de Capitalización",
    calculateButton: "Calcular",
    resetButton: "Reiniciar",
    resultsTitle: "Resultados",
    principalResult: "Capital Inicial",
    contributionsResult: "Aportaciones Totales",
    totalInvested: "Total Invertido",
    interestEarned: "Interés Ganado",
    totalAmount: "Monto Total Final",
    chartTitle: "Distribución",
    principalLabel: "Capital Inicial",
    contributionsLabel: "Aportaciones",
    interestLabel: "Interés Ganado",
    frequencies: {
      annual: "Anual",
      semiannual: "Semestral",
      quarterly: "Trimestral",
      monthly: "Mensual",
      daily: "Diario"
    },
    placeholders: {
      principal: "Ej: 10000 (opcional si hay aportaciones)",
      contribution: "Ej: 200 (opcional)",
      rate: "Ej: 5",
      time: "Ej: 10"
    },
    validations: {
      invalidNumbers: "Por favor, ingresa valores numéricos válidos",
      negativeValues: "Los valores no pueden ser negativos",
      noPrincipalOrContribution: "Debes ingresar al menos un capital inicial o una aportación periódica"
    }
  }, u = {
    ...o,
    ...n,
    frequencies: { ...o.frequencies, ...n.frequencies || {} },
    placeholders: { ...o.placeholders, ...n.placeholders || {} },
    validations: { ...o.validations, ...n.validations || {} }
  }, c = { ...{
    principal: !0,
    contribution: !0,
    contributionFrequency: !0,
    compoundingFrequency: !0
  }, ...a }, [l, f] = De(""), [d, p] = De(""), [v, h] = De(""), [m, y] = De("12"), [b, w] = De(""), [_, O] = De("12"), [x, S] = De(null), D = {
    1: u.frequencies.annual,
    2: u.frequencies.semiannual,
    4: u.frequencies.quarterly,
    12: u.frequencies.monthly,
    365: u.frequencies.daily
  }, k = (A) => {
    A.preventDefault();
    const N = parseFloat(l) || 0, L = parseFloat(d) / 100, W = parseFloat(v), K = parseFloat(m), V = parseFloat(b) || 0, te = parseFloat(_);
    if (isNaN(L) || isNaN(W) || isNaN(K) || isNaN(te)) {
      alert(u.validations.invalidNumbers);
      return;
    }
    if (N < 0 || L < 0 || W <= 0 || K <= 0 || V < 0) {
      alert(u.validations.negativeValues);
      return;
    }
    if (N === 0 && V === 0) {
      alert(u.validations.noPrincipalOrContribution);
      return;
    }
    const X = N * Math.pow(1 + L / K, K * W), Pe = te, qe = Pe * W;
    let pe = 0;
    if (V > 0 && L > 0) {
      const _e = L / K, Ct = K * W, T = K / Pe;
      for (let B = 0; B < qe; B++) {
        const H = Ct - B * T;
        pe += V * Math.pow(1 + _e, H);
      }
    } else V > 0 && L === 0 && (pe = V * qe);
    const Be = X + pe, Ue = N + V * Pe * W, xt = Be - Ue, lt = {
      principal: N,
      contribution: V,
      contributionFrequency: te,
      totalContributed: Ue,
      rate: L * 100,
      time: W,
      frequency: K,
      totalAmount: Be,
      interestEarned: xt
    };
    S(lt), r && typeof r == "function" && r(lt);
  }, $ = () => {
    f(""), p(""), h(""), y("12"), w(""), O("12"), S(null);
  }, j = {
    ...t.primaryColor && { "--primary-color": t.primaryColor },
    ...t.accentColor && { "--accent-color": t.accentColor },
    ...t.backgroundColor && { "--bg-color": t.backgroundColor },
    ...t.textColor && { "--text-color": t.textColor },
    ...t.borderColor && { "--border-color": t.borderColor },
    ...t.inputBackground && { "--input-bg": t.inputBackground },
    ...t.resultBackground && { "--result-bg": t.resultBackground },
    ...t.labelColor && { "--label-color": t.labelColor }
  };
  return /* @__PURE__ */ F.jsxs(
    "div",
    {
      className: `compound-interest-calculator ${e}`,
      style: j,
      children: [
        /* @__PURE__ */ F.jsx("h2", { children: u.title }),
        /* @__PURE__ */ F.jsxs("form", { onSubmit: k, children: [
          c.principal && /* @__PURE__ */ F.jsxs("div", { className: "form-group", children: [
            /* @__PURE__ */ F.jsxs("label", { htmlFor: "principal", children: [
              u.principal,
              " (",
              i,
              ")"
            ] }),
            /* @__PURE__ */ F.jsx(
              "input",
              {
                type: "number",
                id: "principal",
                value: l,
                onChange: (A) => f(A.target.value),
                placeholder: u.placeholders.principal,
                step: "0.01",
                min: "0"
              }
            )
          ] }),
          c.contribution && /* @__PURE__ */ F.jsxs("div", { className: "form-group", children: [
            /* @__PURE__ */ F.jsxs("label", { htmlFor: "contribution", children: [
              u.contribution,
              " (",
              i,
              ")"
            ] }),
            /* @__PURE__ */ F.jsx(
              "input",
              {
                type: "number",
                id: "contribution",
                value: b,
                onChange: (A) => w(A.target.value),
                placeholder: u.placeholders.contribution,
                step: "0.01",
                min: "0"
              }
            )
          ] }),
          c.contributionFrequency && /* @__PURE__ */ F.jsxs("div", { className: "form-group", children: [
            /* @__PURE__ */ F.jsx("label", { htmlFor: "contributionFrequency", children: u.contributionFrequency }),
            /* @__PURE__ */ F.jsx(
              "select",
              {
                id: "contributionFrequency",
                value: _,
                onChange: (A) => O(A.target.value),
                children: Object.entries(D).map(([A, N]) => /* @__PURE__ */ F.jsx("option", { value: A, children: N }, A))
              }
            )
          ] }),
          /* @__PURE__ */ F.jsxs("div", { className: "form-group", children: [
            /* @__PURE__ */ F.jsxs("label", { htmlFor: "rate", children: [
              u.rate,
              " (%)"
            ] }),
            /* @__PURE__ */ F.jsx(
              "input",
              {
                type: "number",
                id: "rate",
                value: d,
                onChange: (A) => p(A.target.value),
                placeholder: u.placeholders.rate,
                step: "0.01",
                required: !0
              }
            )
          ] }),
          /* @__PURE__ */ F.jsxs("div", { className: "form-group", children: [
            /* @__PURE__ */ F.jsxs("label", { htmlFor: "time", children: [
              u.time,
              " (",
              u.timeUnit,
              ")"
            ] }),
            /* @__PURE__ */ F.jsx(
              "input",
              {
                type: "number",
                id: "time",
                value: v,
                onChange: (A) => h(A.target.value),
                placeholder: u.placeholders.time,
                step: "0.1",
                required: !0
              }
            )
          ] }),
          c.compoundingFrequency && /* @__PURE__ */ F.jsxs("div", { className: "form-group", children: [
            /* @__PURE__ */ F.jsx("label", { htmlFor: "frequency", children: u.compoundingFrequency }),
            /* @__PURE__ */ F.jsx(
              "select",
              {
                id: "frequency",
                value: m,
                onChange: (A) => y(A.target.value),
                required: !0,
                children: Object.entries(D).map(([A, N]) => /* @__PURE__ */ F.jsx("option", { value: A, children: N }, A))
              }
            )
          ] }),
          /* @__PURE__ */ F.jsxs("div", { className: "button-group", children: [
            /* @__PURE__ */ F.jsx("button", { type: "submit", className: "btn-calculate", children: u.calculateButton }),
            /* @__PURE__ */ F.jsx("button", { type: "button", onClick: $, className: "btn-reset", children: u.resetButton })
          ] })
        ] }),
        x && /* @__PURE__ */ F.jsx("div", { className: "result-section", children: /* @__PURE__ */ F.jsxs("div", { className: "results-layout", children: [
          /* @__PURE__ */ F.jsxs("div", { className: "results-numbers", children: [
            /* @__PURE__ */ F.jsx("h3", { children: u.resultsTitle }),
            /* @__PURE__ */ F.jsxs("div", { className: "result-item", children: [
              /* @__PURE__ */ F.jsxs("span", { className: "result-label", children: [
                u.principalResult,
                ":"
              ] }),
              /* @__PURE__ */ F.jsxs("span", { className: "result-value", children: [
                i,
                x.principal.toFixed(2)
              ] })
            ] }),
            x.contribution > 0 && /* @__PURE__ */ F.jsxs("div", { className: "result-item", children: [
              /* @__PURE__ */ F.jsxs("span", { className: "result-label", children: [
                u.contributionsResult,
                ":"
              ] }),
              /* @__PURE__ */ F.jsxs("span", { className: "result-value", children: [
                i,
                (x.contribution * x.contributionFrequency * x.time).toFixed(2)
              ] })
            ] }),
            /* @__PURE__ */ F.jsxs("div", { className: "result-item", children: [
              /* @__PURE__ */ F.jsxs("span", { className: "result-label", children: [
                u.totalInvested,
                ":"
              ] }),
              /* @__PURE__ */ F.jsxs("span", { className: "result-value", children: [
                i,
                x.totalContributed.toFixed(2)
              ] })
            ] }),
            /* @__PURE__ */ F.jsxs("div", { className: "result-item", children: [
              /* @__PURE__ */ F.jsxs("span", { className: "result-label", children: [
                u.interestEarned,
                ":"
              ] }),
              /* @__PURE__ */ F.jsxs("span", { className: "result-value accent", children: [
                i,
                x.interestEarned.toFixed(2)
              ] })
            ] }),
            /* @__PURE__ */ F.jsxs("div", { className: "result-item total", children: [
              /* @__PURE__ */ F.jsxs("span", { className: "result-label", children: [
                u.totalAmount,
                ":"
              ] }),
              /* @__PURE__ */ F.jsxs("span", { className: "result-value", children: [
                i,
                x.totalAmount.toFixed(2)
              ] })
            ] })
          ] }),
          /* @__PURE__ */ F.jsxs("div", { className: "chart-container", children: [
            /* @__PURE__ */ F.jsx("h4", { children: u.chartTitle }),
            /* @__PURE__ */ F.jsx(eP, { width: "100%", height: 350, children: /* @__PURE__ */ F.jsxs(gk, { children: [
              /* @__PURE__ */ F.jsx(
                Ub,
                {
                  data: (() => {
                    const A = [];
                    x.principal > 0 && A.push({ name: u.principalLabel, value: x.principal, color: "#007bff" });
                    const N = x.contribution * x.contributionFrequency * x.time;
                    return N > 0 && A.push({ name: u.contributionsLabel, value: N, color: "#6c757d" }), x.interestEarned > 0 && A.push({ name: u.interestLabel, value: x.interestEarned, color: "#28a745" }), A;
                  })(),
                  cx: "50%",
                  cy: "50%",
                  labelLine: !1,
                  label: ({ cx: A, cy: N, midAngle: L, innerRadius: W, outerRadius: K, percent: V, name: te, value: X }) => {
                    const Pe = Math.PI / 180, qe = K + 25, pe = A + qe * Math.cos(-L * Pe), Be = N + qe * Math.sin(-L * Pe);
                    return /* @__PURE__ */ F.jsxs(
                      "text",
                      {
                        x: pe,
                        y: Be,
                        textAnchor: pe > A ? "start" : "end",
                        dominantBaseline: "central",
                        children: [
                          /* @__PURE__ */ F.jsx("tspan", { x: pe, dy: "0", fill: t.textColor || "#333", fontSize: "14", fontWeight: "600", children: `${te}: ${(V * 100).toFixed(1)}%` }),
                          /* @__PURE__ */ F.jsx("tspan", { x: pe, dy: "16", fill: t.labelColor || "#555", fontSize: "13", children: `${i}${X.toFixed(2)}` })
                        ]
                      }
                    );
                  },
                  outerRadius: 80,
                  fill: "#8884d8",
                  dataKey: "value",
                  children: (() => {
                    const A = [];
                    return x.principal > 0 && A.push(/* @__PURE__ */ F.jsx(Yr, { fill: "#007bff" }, "principal")), x.contribution * x.contributionFrequency * x.time > 0 && A.push(/* @__PURE__ */ F.jsx(Yr, { fill: "#6c757d" }, "contributions")), x.interestEarned > 0 && A.push(/* @__PURE__ */ F.jsx(Yr, { fill: "#28a745" }, "interest")), A;
                  })()
                }
              ),
              /* @__PURE__ */ F.jsx(sM, { formatter: (A) => `${i}${A.toFixed(2)}` }),
              /* @__PURE__ */ F.jsx(vy, {})
            ] }) })
          ] })
        ] }) })
      ]
    }
  );
};
export {
  Xk as CompoundInterestCalculator,
  Xk as default
};
