// deno:https://esm.sh/stable/preact@10.15.1/denonext/preact.mjs
var w;
var d;
var j;
var oe;
var b;
var $;
var z;
var H;
var q;
var N = {};
var J = [];
var re = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
var W = Array.isArray;
function k(e2, t) {
  for (var _2 in t)
    e2[_2] = t[_2];
  return e2;
}
function K(e2) {
  var t = e2.parentNode;
  t && t.removeChild(e2);
}
function le(e2, t, _2) {
  var r2, l4, o2, s4 = {};
  for (o2 in t)
    o2 == "key" ? r2 = t[o2] : o2 == "ref" ? l4 = t[o2] : s4[o2] = t[o2];
  if (arguments.length > 2 && (s4.children = arguments.length > 3 ? w.call(arguments, 2) : _2), typeof e2 == "function" && e2.defaultProps != null)
    for (o2 in e2.defaultProps)
      s4[o2] === void 0 && (s4[o2] = e2.defaultProps[o2]);
  return S(e2, s4, r2, l4, null);
}
function S(e2, t, _2, r2, l4) {
  var o2 = { type: e2, props: t, key: _2, ref: r2, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: l4 ?? ++j };
  return l4 == null && d.vnode != null && d.vnode(o2), o2;
}
function A(e2) {
  return e2.children;
}
function T(e2, t) {
  this.props = e2, this.context = t;
}
function P(e2, t) {
  if (t == null)
    return e2.__ ? P(e2.__, e2.__.__k.indexOf(e2) + 1) : null;
  for (var _2; t < e2.__k.length; t++)
    if ((_2 = e2.__k[t]) != null && _2.__e != null)
      return _2.__e;
  return typeof e2.type == "function" ? P(e2) : null;
}
function Q(e2) {
  var t, _2;
  if ((e2 = e2.__) != null && e2.__c != null) {
    for (e2.__e = e2.__c.base = null, t = 0; t < e2.__k.length; t++)
      if ((_2 = e2.__k[t]) != null && _2.__e != null) {
        e2.__e = e2.__c.base = _2.__e;
        break;
      }
    return Q(e2);
  }
}
function I(e2) {
  (!e2.__d && (e2.__d = true) && b.push(e2) && !L.__r++ || $ !== d.debounceRendering) && (($ = d.debounceRendering) || z)(L);
}
function L() {
  var e2, t, _2, r2, l4, o2, s4, u3;
  for (b.sort(H); e2 = b.shift(); )
    e2.__d && (t = b.length, r2 = void 0, l4 = void 0, s4 = (o2 = (_2 = e2).__v).__e, (u3 = _2.__P) && (r2 = [], (l4 = k({}, o2)).__v = o2.__v + 1, O(u3, o2, l4, _2.__n, u3.ownerSVGElement !== void 0, o2.__h != null ? [s4] : null, r2, s4 ?? P(o2), o2.__h), te(r2, o2), o2.__e != s4 && Q(o2)), b.length > t && b.sort(H));
  L.__r = 0;
}
function X(e2, t, _2, r2, l4, o2, s4, u3, p3, a3) {
  var n2, h2, c4, i3, f2, x3, v4, y3 = r2 && r2.__k || J, g3 = y3.length;
  for (_2.__k = [], n2 = 0; n2 < t.length; n2++)
    if ((i3 = _2.__k[n2] = (i3 = t[n2]) == null || typeof i3 == "boolean" || typeof i3 == "function" ? null : typeof i3 == "string" || typeof i3 == "number" || typeof i3 == "bigint" ? S(null, i3, null, null, i3) : W(i3) ? S(A, { children: i3 }, null, null, null) : i3.__b > 0 ? S(i3.type, i3.props, i3.key, i3.ref ? i3.ref : null, i3.__v) : i3) != null) {
      if (i3.__ = _2, i3.__b = _2.__b + 1, (c4 = y3[n2]) === null || c4 && i3.key == c4.key && i3.type === c4.type)
        y3[n2] = void 0;
      else
        for (h2 = 0; h2 < g3; h2++) {
          if ((c4 = y3[h2]) && i3.key == c4.key && i3.type === c4.type) {
            y3[h2] = void 0;
            break;
          }
          c4 = null;
        }
      O(e2, i3, c4 = c4 || N, l4, o2, s4, u3, p3, a3), f2 = i3.__e, (h2 = i3.ref) && c4.ref != h2 && (v4 || (v4 = []), c4.ref && v4.push(c4.ref, null, i3), v4.push(h2, i3.__c || f2, i3)), f2 != null ? (x3 == null && (x3 = f2), typeof i3.type == "function" && i3.__k === c4.__k ? i3.__d = p3 = Y(i3, p3, e2) : p3 = Z(e2, i3, c4, y3, f2, p3), typeof _2.type == "function" && (_2.__d = p3)) : p3 && c4.__e == p3 && p3.parentNode != e2 && (p3 = P(c4));
    }
  for (_2.__e = x3, n2 = g3; n2--; )
    y3[n2] != null && (typeof _2.type == "function" && y3[n2].__e != null && y3[n2].__e == _2.__d && (_2.__d = ee(r2).nextSibling), ne(y3[n2], y3[n2]));
  if (v4)
    for (n2 = 0; n2 < v4.length; n2++)
      _e(v4[n2], v4[++n2], v4[++n2]);
}
function Y(e2, t, _2) {
  for (var r2, l4 = e2.__k, o2 = 0; l4 && o2 < l4.length; o2++)
    (r2 = l4[o2]) && (r2.__ = e2, t = typeof r2.type == "function" ? Y(r2, t, _2) : Z(_2, r2, r2, l4, r2.__e, t));
  return t;
}
function Z(e2, t, _2, r2, l4, o2) {
  var s4, u3, p3;
  if (t.__d !== void 0)
    s4 = t.__d, t.__d = void 0;
  else if (_2 == null || l4 != o2 || l4.parentNode == null)
    e:
      if (o2 == null || o2.parentNode !== e2)
        e2.appendChild(l4), s4 = null;
      else {
        for (u3 = o2, p3 = 0; (u3 = u3.nextSibling) && p3 < r2.length; p3 += 1)
          if (u3 == l4)
            break e;
        e2.insertBefore(l4, o2), s4 = o2;
      }
  return s4 !== void 0 ? s4 : l4.nextSibling;
}
function ee(e2) {
  var t, _2, r2;
  if (e2.type == null || typeof e2.type == "string")
    return e2.__e;
  if (e2.__k) {
    for (t = e2.__k.length - 1; t >= 0; t--)
      if ((_2 = e2.__k[t]) && (r2 = ee(_2)))
        return r2;
  }
  return null;
}
function se(e2, t, _2, r2, l4) {
  var o2;
  for (o2 in _2)
    o2 === "children" || o2 === "key" || o2 in t || M(e2, o2, null, _2[o2], r2);
  for (o2 in t)
    l4 && typeof t[o2] != "function" || o2 === "children" || o2 === "key" || o2 === "value" || o2 === "checked" || _2[o2] === t[o2] || M(e2, o2, t[o2], _2[o2], r2);
}
function B(e2, t, _2) {
  t[0] === "-" ? e2.setProperty(t, _2 ?? "") : e2[t] = _2 == null ? "" : typeof _2 != "number" || re.test(t) ? _2 : _2 + "px";
}
function M(e2, t, _2, r2, l4) {
  var o2;
  e:
    if (t === "style")
      if (typeof _2 == "string")
        e2.style.cssText = _2;
      else {
        if (typeof r2 == "string" && (e2.style.cssText = r2 = ""), r2)
          for (t in r2)
            _2 && t in _2 || B(e2.style, t, "");
        if (_2)
          for (t in _2)
            r2 && _2[t] === r2[t] || B(e2.style, t, _2[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      o2 = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e2 ? t.toLowerCase().slice(2) : t.slice(2), e2.l || (e2.l = {}), e2.l[t + o2] = _2, _2 ? r2 || e2.addEventListener(t, o2 ? V : G, o2) : e2.removeEventListener(t, o2 ? V : G, o2);
    else if (t !== "dangerouslySetInnerHTML") {
      if (l4)
        t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (t !== "width" && t !== "height" && t !== "href" && t !== "list" && t !== "form" && t !== "tabIndex" && t !== "download" && t !== "rowSpan" && t !== "colSpan" && t in e2)
        try {
          e2[t] = _2 ?? "";
          break e;
        } catch {
        }
      typeof _2 == "function" || (_2 == null || _2 === false && t[4] !== "-" ? e2.removeAttribute(t) : e2.setAttribute(t, _2));
    }
}
function G(e2) {
  return this.l[e2.type + false](d.event ? d.event(e2) : e2);
}
function V(e2) {
  return this.l[e2.type + true](d.event ? d.event(e2) : e2);
}
function O(e2, t, _2, r2, l4, o2, s4, u3, p3) {
  var a3, n2, h2, c4, i3, f2, x3, v4, y3, g3, E2, C2, R2, U3, F2, m = t.type;
  if (t.constructor !== void 0)
    return null;
  _2.__h != null && (p3 = _2.__h, u3 = t.__e = _2.__e, t.__h = null, o2 = [u3]), (a3 = d.__b) && a3(t);
  try {
    e:
      if (typeof m == "function") {
        if (v4 = t.props, y3 = (a3 = m.contextType) && r2[a3.__c], g3 = a3 ? y3 ? y3.props.value : a3.__ : r2, _2.__c ? x3 = (n2 = t.__c = _2.__c).__ = n2.__E : ("prototype" in m && m.prototype.render ? t.__c = n2 = new m(v4, g3) : (t.__c = n2 = new T(v4, g3), n2.constructor = m, n2.render = ce), y3 && y3.sub(n2), n2.props = v4, n2.state || (n2.state = {}), n2.context = g3, n2.__n = r2, h2 = n2.__d = true, n2.__h = [], n2._sb = []), n2.__s == null && (n2.__s = n2.state), m.getDerivedStateFromProps != null && (n2.__s == n2.state && (n2.__s = k({}, n2.__s)), k(n2.__s, m.getDerivedStateFromProps(v4, n2.__s))), c4 = n2.props, i3 = n2.state, n2.__v = t, h2)
          m.getDerivedStateFromProps == null && n2.componentWillMount != null && n2.componentWillMount(), n2.componentDidMount != null && n2.__h.push(n2.componentDidMount);
        else {
          if (m.getDerivedStateFromProps == null && v4 !== c4 && n2.componentWillReceiveProps != null && n2.componentWillReceiveProps(v4, g3), !n2.__e && n2.shouldComponentUpdate != null && n2.shouldComponentUpdate(v4, n2.__s, g3) === false || t.__v === _2.__v) {
            for (t.__v !== _2.__v && (n2.props = v4, n2.state = n2.__s, n2.__d = false), n2.__e = false, t.__e = _2.__e, t.__k = _2.__k, t.__k.forEach(function(D2) {
              D2 && (D2.__ = t);
            }), E2 = 0; E2 < n2._sb.length; E2++)
              n2.__h.push(n2._sb[E2]);
            n2._sb = [], n2.__h.length && s4.push(n2);
            break e;
          }
          n2.componentWillUpdate != null && n2.componentWillUpdate(v4, n2.__s, g3), n2.componentDidUpdate != null && n2.__h.push(function() {
            n2.componentDidUpdate(c4, i3, f2);
          });
        }
        if (n2.context = g3, n2.props = v4, n2.__P = e2, C2 = d.__r, R2 = 0, "prototype" in m && m.prototype.render) {
          for (n2.state = n2.__s, n2.__d = false, C2 && C2(t), a3 = n2.render(n2.props, n2.state, n2.context), U3 = 0; U3 < n2._sb.length; U3++)
            n2.__h.push(n2._sb[U3]);
          n2._sb = [];
        } else
          do
            n2.__d = false, C2 && C2(t), a3 = n2.render(n2.props, n2.state, n2.context), n2.state = n2.__s;
          while (n2.__d && ++R2 < 25);
        n2.state = n2.__s, n2.getChildContext != null && (r2 = k(k({}, r2), n2.getChildContext())), h2 || n2.getSnapshotBeforeUpdate == null || (f2 = n2.getSnapshotBeforeUpdate(c4, i3)), X(e2, W(F2 = a3 != null && a3.type === A && a3.key == null ? a3.props.children : a3) ? F2 : [F2], t, _2, r2, l4, o2, s4, u3, p3), n2.base = t.__e, t.__h = null, n2.__h.length && s4.push(n2), x3 && (n2.__E = n2.__ = null), n2.__e = false;
      } else
        o2 == null && t.__v === _2.__v ? (t.__k = _2.__k, t.__e = _2.__e) : t.__e = ue(_2.__e, t, _2, r2, l4, o2, s4, p3);
    (a3 = d.diffed) && a3(t);
  } catch (D2) {
    t.__v = null, (p3 || o2 != null) && (t.__e = u3, t.__h = !!p3, o2[o2.indexOf(u3)] = null), d.__e(D2, t, _2);
  }
}
function te(e2, t) {
  d.__c && d.__c(t, e2), e2.some(function(_2) {
    try {
      e2 = _2.__h, _2.__h = [], e2.some(function(r2) {
        r2.call(_2);
      });
    } catch (r2) {
      d.__e(r2, _2.__v);
    }
  });
}
function ue(e2, t, _2, r2, l4, o2, s4, u3) {
  var p3, a3, n2, h2 = _2.props, c4 = t.props, i3 = t.type, f2 = 0;
  if (i3 === "svg" && (l4 = true), o2 != null) {
    for (; f2 < o2.length; f2++)
      if ((p3 = o2[f2]) && "setAttribute" in p3 == !!i3 && (i3 ? p3.localName === i3 : p3.nodeType === 3)) {
        e2 = p3, o2[f2] = null;
        break;
      }
  }
  if (e2 == null) {
    if (i3 === null)
      return document.createTextNode(c4);
    e2 = l4 ? document.createElementNS("http://www.w3.org/2000/svg", i3) : document.createElement(i3, c4.is && c4), o2 = null, u3 = false;
  }
  if (i3 === null)
    h2 === c4 || u3 && e2.data === c4 || (e2.data = c4);
  else {
    if (o2 = o2 && w.call(e2.childNodes), a3 = (h2 = _2.props || N).dangerouslySetInnerHTML, n2 = c4.dangerouslySetInnerHTML, !u3) {
      if (o2 != null)
        for (h2 = {}, f2 = 0; f2 < e2.attributes.length; f2++)
          h2[e2.attributes[f2].name] = e2.attributes[f2].value;
      (n2 || a3) && (n2 && (a3 && n2.__html == a3.__html || n2.__html === e2.innerHTML) || (e2.innerHTML = n2 && n2.__html || ""));
    }
    if (se(e2, c4, h2, l4, u3), n2)
      t.__k = [];
    else if (X(e2, W(f2 = t.props.children) ? f2 : [f2], t, _2, r2, l4 && i3 !== "foreignObject", o2, s4, o2 ? o2[0] : _2.__k && P(_2, 0), u3), o2 != null)
      for (f2 = o2.length; f2--; )
        o2[f2] != null && K(o2[f2]);
    u3 || ("value" in c4 && (f2 = c4.value) !== void 0 && (f2 !== e2.value || i3 === "progress" && !f2 || i3 === "option" && f2 !== h2.value) && M(e2, "value", f2, h2.value, false), "checked" in c4 && (f2 = c4.checked) !== void 0 && f2 !== e2.checked && M(e2, "checked", f2, h2.checked, false));
  }
  return e2;
}
function _e(e2, t, _2) {
  try {
    typeof e2 == "function" ? e2(t) : e2.current = t;
  } catch (r2) {
    d.__e(r2, _2);
  }
}
function ne(e2, t, _2) {
  var r2, l4;
  if (d.unmount && d.unmount(e2), (r2 = e2.ref) && (r2.current && r2.current !== e2.__e || _e(r2, null, t)), (r2 = e2.__c) != null) {
    if (r2.componentWillUnmount)
      try {
        r2.componentWillUnmount();
      } catch (o2) {
        d.__e(o2, t);
      }
    r2.base = r2.__P = null, e2.__c = void 0;
  }
  if (r2 = e2.__k)
    for (l4 = 0; l4 < r2.length; l4++)
      r2[l4] && ne(r2[l4], t, _2 || typeof e2.type != "function");
  _2 || e2.__e == null || K(e2.__e), e2.__ = e2.__e = e2.__d = void 0;
}
function ce(e2, t, _2) {
  return this.constructor(e2, _2);
}
function fe(e2, t, _2) {
  var r2, l4, o2;
  d.__ && d.__(e2, t), l4 = (r2 = typeof _2 == "function") ? null : _2 && _2.__k || t.__k, o2 = [], O(t, e2 = (!r2 && _2 || t).__k = le(A, null, [e2]), l4 || N, N, t.ownerSVGElement !== void 0, !r2 && _2 ? [_2] : l4 ? null : t.firstChild ? w.call(t.childNodes) : null, o2, !r2 && _2 ? _2 : l4 ? l4.__e : t.firstChild, r2), te(o2, e2);
}
w = J.slice, d = { __e: function(e2, t, _2, r2) {
  for (var l4, o2, s4; t = t.__; )
    if ((l4 = t.__c) && !l4.__)
      try {
        if ((o2 = l4.constructor) && o2.getDerivedStateFromError != null && (l4.setState(o2.getDerivedStateFromError(e2)), s4 = l4.__d), l4.componentDidCatch != null && (l4.componentDidCatch(e2, r2 || {}), s4 = l4.__d), s4)
          return l4.__E = l4;
      } catch (u3) {
        e2 = u3;
      }
  throw e2;
} }, j = 0, oe = function(e2) {
  return e2 != null && e2.constructor === void 0;
}, T.prototype.setState = function(e2, t) {
  var _2;
  _2 = this.__s != null && this.__s !== this.state ? this.__s : this.__s = k({}, this.state), typeof e2 == "function" && (e2 = e2(k({}, _2), this.props)), e2 && k(_2, e2), e2 != null && this.__v && (t && this._sb.push(t), I(this));
}, T.prototype.forceUpdate = function(e2) {
  this.__v && (this.__e = true, e2 && this.__h.push(e2), I(this));
}, T.prototype.render = A, b = [], z = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, H = function(e2, t) {
  return e2.__v.__b - t.__v.__b;
}, L.__r = 0, q = 0;

// deno:https://esm.sh/stable/preact@10.15.1/denonext/hooks.js
var c;
var o;
var H2;
var b2;
var v = 0;
var x = [];
var p = [];
var g = d.__b;
var A2 = d.__r;
var C = d.diffed;
var F = d.__c;
var q2 = d.unmount;
function l(_2, n2) {
  d.__h && d.__h(o, _2, v || n2), v = 0;
  var u3 = o.__H || (o.__H = { __: [], __h: [] });
  return _2 >= u3.__.length && u3.__.push({ __V: p }), u3.__[_2];
}
function j2(_2, n2) {
  var u3 = l(c++, 3);
  !d.__s && y(u3.__H, n2) && (u3.__ = _2, u3.i = n2, o.__H.__h.push(u3));
}
function T2(_2, n2) {
  var u3 = l(c++, 7);
  return y(u3.__H, n2) ? (u3.__V = _2(), u3.i = n2, u3.__h = _2, u3.__V) : u3.__;
}
function R() {
  for (var _2; _2 = x.shift(); )
    if (_2.__P && _2.__H)
      try {
        _2.__H.__h.forEach(d2), _2.__H.__h.forEach(E), _2.__H.__h = [];
      } catch (n2) {
        _2.__H.__h = [], d.__e(n2, _2.__v);
      }
}
d.__b = function(_2) {
  o = null, g && g(_2);
}, d.__r = function(_2) {
  A2 && A2(_2), c = 0;
  var n2 = (o = _2.__c).__H;
  n2 && (H2 === o ? (n2.__h = [], o.__h = [], n2.__.forEach(function(u3) {
    u3.__N && (u3.__ = u3.__N), u3.__V = p, u3.__N = u3.i = void 0;
  })) : (n2.__h.forEach(d2), n2.__h.forEach(E), n2.__h = [], c = 0)), H2 = o;
}, d.diffed = function(_2) {
  C && C(_2);
  var n2 = _2.__c;
  n2 && n2.__H && (n2.__H.__h.length && (x.push(n2) !== 1 && b2 === d.requestAnimationFrame || ((b2 = d.requestAnimationFrame) || S2)(R)), n2.__H.__.forEach(function(u3) {
    u3.i && (u3.__H = u3.i), u3.__V !== p && (u3.__ = u3.__V), u3.i = void 0, u3.__V = p;
  })), H2 = o = null;
}, d.__c = function(_2, n2) {
  n2.some(function(u3) {
    try {
      u3.__h.forEach(d2), u3.__h = u3.__h.filter(function(t) {
        return !t.__ || E(t);
      });
    } catch (t) {
      n2.some(function(i3) {
        i3.__h && (i3.__h = []);
      }), n2 = [], d.__e(t, u3.__v);
    }
  }), F && F(_2, n2);
}, d.unmount = function(_2) {
  q2 && q2(_2);
  var n2, u3 = _2.__c;
  u3 && u3.__H && (u3.__H.__.forEach(function(t) {
    try {
      d2(t);
    } catch (i3) {
      n2 = i3;
    }
  }), u3.__H = void 0, n2 && d.__e(n2, u3.__v));
};
var D = typeof requestAnimationFrame == "function";
function S2(_2) {
  var n2, u3 = function() {
    clearTimeout(t), D && cancelAnimationFrame(n2), setTimeout(_2);
  }, t = setTimeout(u3, 100);
  D && (n2 = requestAnimationFrame(u3));
}
function d2(_2) {
  var n2 = o, u3 = _2.__c;
  typeof u3 == "function" && (_2.__c = void 0, u3()), o = n2;
}
function E(_2) {
  var n2 = o;
  _2.__c = _2.__(), o = n2;
}
function y(_2, n2) {
  return !_2 || _2.length !== n2.length || n2.some(function(u3, t) {
    return u3 !== _2[t];
  });
}

// deno:https://esm.sh/v130/@tauri-apps/api@1.4.0/denonext/tauri.js
var w2 = Object.defineProperty;
var i = (t, r2) => {
  for (var e2 in r2)
    w2(t, e2, { get: r2[e2], enumerable: true });
};
var f = {};
i(f, { convertFileSrc: () => d3, invoke: () => s, transformCallback: () => a });
function u() {
  return window.crypto.getRandomValues(new Uint32Array(1))[0];
}
function a(t, r2 = false) {
  let e2 = u(), o2 = `_${e2}`;
  return Object.defineProperty(window, o2, { value: (n2) => (r2 && Reflect.deleteProperty(window, o2), t?.(n2)), writable: false, configurable: true }), e2;
}
async function s(t, r2 = {}) {
  return new Promise((e2, o2) => {
    let n2 = a((c4) => {
      e2(c4), Reflect.deleteProperty(window, `_${l4}`);
    }, true), l4 = a((c4) => {
      o2(c4), Reflect.deleteProperty(window, `_${n2}`);
    }, true);
    window.__TAURI_IPC__({ cmd: t, callback: n2, error: l4, ...r2 });
  });
}
function d3(t, r2 = "asset") {
  let e2 = encodeURIComponent(t);
  return navigator.userAgent.includes("Windows") ? `https://${r2}.localhost/${e2}` : `${r2}://localhost/${e2}`;
}

// deno:https://esm.sh/v125/@preact/signals-core@1.3.0/denonext/signals-core.mjs
function v2() {
  throw new Error("Cycle detected");
}
function d4() {
  if (h > 1) {
    h--;
    return;
  }
  let i3, t = false;
  for (; r !== void 0; ) {
    let o2 = r;
    for (r = void 0, p2++; o2 !== void 0; ) {
      let f2 = o2.o;
      if (o2.o = void 0, o2.f &= -3, !(8 & o2.f) && a2(o2))
        try {
          o2.c();
        } catch (b3) {
          t || (i3 = b3, t = true);
        }
      o2 = f2;
    }
  }
  if (p2 = 0, h--, t)
    throw i3;
}
var n;
var r;
var h = 0;
var p2 = 0;
var c2 = 0;
function y2(i3) {
  if (n === void 0)
    return;
  let t = i3.n;
  if (t === void 0 || t.t !== n)
    return t = { i: 0, S: i3, p: n.s, n: void 0, t: n, e: void 0, x: void 0, r: t }, n.s !== void 0 && (n.s.n = t), n.s = t, i3.n = t, 32 & n.f && i3.S(t), t;
  if (t.i === -1)
    return t.i = 0, t.n !== void 0 && (t.n.p = t.p, t.p !== void 0 && (t.p.n = t.n), t.p = n.s, t.n = void 0, n.s.n = t, n.s = t), t;
}
function s2(i3) {
  this.v = i3, this.i = 0, this.n = void 0, this.t = void 0;
}
s2.prototype.h = function() {
  return true;
};
s2.prototype.S = function(i3) {
  this.t !== i3 && i3.e === void 0 && (i3.x = this.t, this.t !== void 0 && (this.t.e = i3), this.t = i3);
};
s2.prototype.U = function(i3) {
  if (this.t !== void 0) {
    let t = i3.e, o2 = i3.x;
    t !== void 0 && (t.x = o2, i3.e = void 0), o2 !== void 0 && (o2.e = t, i3.x = void 0), i3 === this.t && (this.t = o2);
  }
};
s2.prototype.subscribe = function(i3) {
  let t = this;
  return U(function() {
    let o2 = t.value, f2 = 32 & this.f;
    this.f &= -33;
    try {
      i3(o2);
    } finally {
      this.f |= f2;
    }
  });
};
s2.prototype.valueOf = function() {
  return this.value;
};
s2.prototype.toString = function() {
  return this.value + "";
};
s2.prototype.toJSON = function() {
  return this.value;
};
s2.prototype.peek = function() {
  return this.v;
};
Object.defineProperty(s2.prototype, "value", { get() {
  let i3 = y2(this);
  return i3 !== void 0 && (i3.i = this.i), this.v;
}, set(i3) {
  if (n instanceof e && function() {
    throw new Error("Computed cannot have side-effects");
  }(), i3 !== this.v) {
    p2 > 100 && v2(), this.v = i3, this.i++, c2++, h++;
    try {
      for (let t = this.t; t !== void 0; t = t.x)
        t.t.N();
    } finally {
      d4();
    }
  }
} });
function O2(i3) {
  return new s2(i3);
}
function a2(i3) {
  for (let t = i3.s; t !== void 0; t = t.n)
    if (t.S.i !== t.i || !t.S.h() || t.S.i !== t.i)
      return true;
  return false;
}
function S3(i3) {
  for (let t = i3.s; t !== void 0; t = t.n) {
    let o2 = t.S.n;
    if (o2 !== void 0 && (t.r = o2), t.S.n = t, t.i = -1, t.n === void 0) {
      i3.s = t;
      break;
    }
  }
}
function w3(i3) {
  let t, o2 = i3.s;
  for (; o2 !== void 0; ) {
    let f2 = o2.p;
    o2.i === -1 ? (o2.S.U(o2), f2 !== void 0 && (f2.n = o2.n), o2.n !== void 0 && (o2.n.p = f2)) : t = o2, o2.S.n = o2.r, o2.r !== void 0 && (o2.r = void 0), o2 = f2;
  }
  i3.s = t;
}
function e(i3) {
  s2.call(this, void 0), this.x = i3, this.s = void 0, this.g = c2 - 1, this.f = 4;
}
(e.prototype = new s2()).h = function() {
  if (this.f &= -3, 1 & this.f)
    return false;
  if ((36 & this.f) == 32 || (this.f &= -5, this.g === c2))
    return true;
  if (this.g = c2, this.f |= 1, this.i > 0 && !a2(this))
    return this.f &= -2, true;
  let i3 = n;
  try {
    S3(this), n = this;
    let t = this.x();
    (16 & this.f || this.v !== t || this.i === 0) && (this.v = t, this.f &= -17, this.i++);
  } catch (t) {
    this.v = t, this.f |= 16, this.i++;
  }
  return n = i3, w3(this), this.f &= -2, true;
};
e.prototype.S = function(i3) {
  if (this.t === void 0) {
    this.f |= 36;
    for (let t = this.s; t !== void 0; t = t.n)
      t.S.S(t);
  }
  s2.prototype.S.call(this, i3);
};
e.prototype.U = function(i3) {
  if (this.t !== void 0 && (s2.prototype.U.call(this, i3), this.t === void 0)) {
    this.f &= -33;
    for (let t = this.s; t !== void 0; t = t.n)
      t.S.U(t);
  }
};
e.prototype.N = function() {
  if (!(2 & this.f)) {
    this.f |= 6;
    for (let i3 = this.t; i3 !== void 0; i3 = i3.x)
      i3.t.N();
  }
};
e.prototype.peek = function() {
  if (this.h() || v2(), 16 & this.f)
    throw this.v;
  return this.v;
};
Object.defineProperty(e.prototype, "value", { get() {
  1 & this.f && v2();
  let i3 = y2(this);
  if (this.h(), i3 !== void 0 && (i3.i = this.i), 16 & this.f)
    throw this.v;
  return this.v;
} });
function k2(i3) {
  return new e(i3);
}
function x2(i3) {
  let t = i3.u;
  if (i3.u = void 0, typeof t == "function") {
    h++;
    let o2 = n;
    n = void 0;
    try {
      t();
    } catch (f2) {
      throw i3.f &= -2, i3.f |= 8, l2(i3), f2;
    } finally {
      n = o2, d4();
    }
  }
}
function l2(i3) {
  for (let t = i3.s; t !== void 0; t = t.n)
    t.S.U(t);
  i3.x = void 0, i3.s = void 0, x2(i3);
}
function g2(i3) {
  if (n !== this)
    throw new Error("Out-of-order effect");
  w3(this), n = i3, this.f &= -2, 8 & this.f && l2(this), d4();
}
function u2(i3) {
  this.x = i3, this.u = void 0, this.s = void 0, this.o = void 0, this.f = 32;
}
u2.prototype.c = function() {
  let i3 = this.S();
  try {
    if (8 & this.f || this.x === void 0)
      return;
    let t = this.x();
    typeof t == "function" && (this.u = t);
  } finally {
    i3();
  }
};
u2.prototype.S = function() {
  1 & this.f && v2(), this.f |= 1, this.f &= -9, x2(this), S3(this), h++;
  let i3 = n;
  return n = this, g2.bind(this, i3);
};
u2.prototype.N = function() {
  2 & this.f || (this.f |= 2, this.o = r, r = this);
};
u2.prototype.d = function() {
  this.f |= 8, 1 & this.f || l2(this);
};
function U(i3) {
  let t = new u2(i3);
  try {
    t.c();
  } catch (o2) {
    throw t.d(), o2;
  }
  return t.d.bind(t);
}

// deno:https://esm.sh/v125/@preact/signals@1.1.3/denonext/signals.mjs
function s3(n2, t) {
  d[n2] = t.bind(null, d[n2] || (() => {
  }));
}
var l3;
var c3;
function _(n2) {
  c3 && c3(), c3 = n2 && n2.S();
}
function $2({ data: n2 }) {
  let t = k3(n2);
  t.value = n2;
  let i3 = T2(() => {
    let e2 = this.__v;
    for (; e2 = e2.__; )
      if (e2.__c) {
        e2.__c.__$f |= 4;
        break;
      }
    return this.__$u.c = () => {
      this.base.data = i3.peek();
    }, k2(() => {
      let r2 = t.value.value;
      return r2 === 0 ? 0 : r2 === true ? "" : r2 || "";
    });
  }, []);
  return i3.value;
}
$2.displayName = "_st";
Object.defineProperties(s2.prototype, { constructor: { configurable: true, value: void 0 }, type: { configurable: true, value: $2 }, props: { configurable: true, get() {
  return { data: this };
} }, __b: { configurable: true, value: 1 } });
s3("__b", (n2, t) => {
  if (typeof t.type == "string") {
    let i3, e2 = t.props;
    for (let r2 in e2) {
      if (r2 === "children")
        continue;
      let o2 = e2[r2];
      o2 instanceof s2 && (i3 || (t.__np = i3 = {}), i3[r2] = o2, e2[r2] = o2.peek());
    }
  }
  n2(t);
});
s3("__r", (n2, t) => {
  _();
  let i3, e2 = t.__c;
  e2 && (e2.__$f &= -2, i3 = e2.__$u, i3 === void 0 && (e2.__$u = i3 = function(r2) {
    let o2;
    return U(function() {
      o2 = this;
    }), o2.c = () => {
      e2.__$f |= 1, e2.setState({});
    }, o2;
  }())), l3 = e2, _(i3), n2(t);
});
s3("__e", (n2, t, i3, e2) => {
  _(), l3 = void 0, n2(t, i3, e2);
});
s3("diffed", (n2, t) => {
  _(), l3 = void 0;
  let i3;
  if (typeof t.type == "string" && (i3 = t.__e)) {
    let e2 = t.__np, r2 = t.props;
    if (e2) {
      let o2 = i3.U;
      if (o2)
        for (let f2 in o2) {
          let u3 = o2[f2];
          u3 !== void 0 && !(f2 in e2) && (u3.d(), o2[f2] = void 0);
        }
      else
        o2 = {}, i3.U = o2;
      for (let f2 in e2) {
        let u3 = o2[f2], d5 = e2[f2];
        u3 === void 0 ? (u3 = U2(i3, f2, d5, r2), o2[f2] = u3) : u3.o(d5, r2);
      }
    }
  }
  n2(t);
});
function U2(n2, t, i3, e2) {
  let r2 = t in n2 && n2.ownerSVGElement === void 0, o2 = O2(i3);
  return { o: (f2, u3) => {
    o2.value = f2, e2 = u3;
  }, d: U(() => {
    let f2 = o2.value.value;
    e2[t] !== f2 && (e2[t] = f2, r2 ? n2[t] = f2 : f2 ? n2.setAttribute(t, f2) : n2.removeAttribute(t));
  }) };
}
s3("unmount", (n2, t) => {
  if (typeof t.type == "string") {
    let i3 = t.__e;
    if (i3) {
      let e2 = i3.U;
      if (e2) {
        i3.U = void 0;
        for (let r2 in e2) {
          let o2 = e2[r2];
          o2 && o2.d();
        }
      }
    }
  } else {
    let i3 = t.__c;
    if (i3) {
      let e2 = i3.__$u;
      e2 && (i3.__$u = void 0, e2.d());
    }
  }
  n2(t);
});
s3("__h", (n2, t, i3, e2) => {
  e2 < 3 && (t.__$f |= 2), n2(t, i3, e2);
});
T.prototype.shouldComponentUpdate = function(n2, t) {
  let i3 = this.__$u;
  if (!(i3 && i3.s !== void 0 || 4 & this.__$f) || 3 & this.__$f)
    return true;
  for (let e2 in t)
    return true;
  for (let e2 in n2)
    if (e2 !== "__source" && n2[e2] !== this.props[e2])
      return true;
  for (let e2 in this.props)
    if (!(e2 in n2))
      return true;
  return false;
};
function k3(n2) {
  return T2(() => O2(n2), []);
}

// deno:https://esm.sh/stable/preact@10.15.1/denonext/jsx-runtime.js
var i2 = 0;
function v3(n2, s4, f2, a3, l4, u3) {
  var r2, o2, _2 = {};
  for (o2 in s4)
    o2 == "ref" ? r2 = s4[o2] : _2[o2] = s4[o2];
  var t = { type: n2, props: _2, key: f2, ref: r2, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --i2, __source: l4, __self: u3 };
  if (typeof n2 == "function" && (r2 = n2.defaultProps))
    for (o2 in r2)
      _2[o2] === void 0 && (_2[o2] = r2[o2]);
  return d.vnode && d.vnode(t), t;
}

// deno:file:///Users/ben/Desktop/tauri_deno_mobile_sample/src-www/index.tsx
var greetingText = O2("Did not yet greet");
function App() {
  j2(async () => {
    greetingText.value = await s("greet", { name: "Joe" });
  }, []);
  return /* @__PURE__ */ v3("div", {
    children: greetingText.value
  });
}
var mountPoint = document.getElementById("root");
if (mountPoint)
  fe(/* @__PURE__ */ v3(App, {}), mountPoint);
