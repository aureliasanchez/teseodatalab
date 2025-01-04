"use strict";

/*! jQuery v3.5.1 | (c) JS Foundation and other contributors | jquery.org/license */
!(function (e, t) {
  "use strict";
  "object" == typeof module && "object" == typeof module.exports
    ? (module.exports = e.document
        ? t(e, !0)
        : function (e) {
            if (!e.document)
              throw new Error("jQuery requires a window with a document");
            return t(e);
          })
    : t(e);
})("undefined" != typeof window ? window : this, function (C, e) {
  "use strict";
  var t = [],
    r = Object.getPrototypeOf,
    s = t.slice,
    g = t.flat
      ? function (e) {
          return t.flat.call(e);
        }
      : function (e) {
          return t.concat.apply([], e);
        },
    u = t.push,
    i = t.indexOf,
    n = {},
    o = n.toString,
    v = n.hasOwnProperty,
    a = v.toString,
    l = a.call(Object),
    y = {},
    m = function (e) {
      return "function" == typeof e && "number" != typeof e.nodeType;
    },
    x = function (e) {
      return null != e && e === e.window;
    },
    E = C.document,
    c = { type: !0, src: !0, nonce: !0, noModule: !0 };
  function b(e, t, n) {
    var r,
      i,
      o = (n = n || E).createElement("script");
    if (((o.text = e), t))
      for (r in c)
        (i = t[r] || (t.getAttribute && t.getAttribute(r))) &&
          o.setAttribute(r, i);
    n.head.appendChild(o).parentNode.removeChild(o);
  }
  function w(e) {
    return null == e
      ? e + ""
      : "object" == typeof e || "function" == typeof e
      ? n[o.call(e)] || "object"
      : typeof e;
  }
  var f = "3.5.1",
    S = function (e, t) {
      return new S.fn.init(e, t);
    };
  function p(e) {
    var t = !!e && "length" in e && e.length,
      n = w(e);
    return (
      !m(e) &&
      !x(e) &&
      ("array" === n ||
        0 === t ||
        ("number" == typeof t && 0 < t && t - 1 in e))
    );
  }
  (S.fn = S.prototype =
    {
      jquery: f,
      constructor: S,
      length: 0,
      toArray: function () {
        return s.call(this);
      },
      get: function (e) {
        return null == e
          ? s.call(this)
          : e < 0
          ? this[e + this.length]
          : this[e];
      },
      pushStack: function (e) {
        var t = S.merge(this.constructor(), e);
        return (t.prevObject = this), t;
      },
      each: function (e) {
        return S.each(this, e);
      },
      map: function (n) {
        return this.pushStack(
          S.map(this, function (e, t) {
            return n.call(e, t, e);
          })
        );
      },
      slice: function () {
        return this.pushStack(s.apply(this, arguments));
      },
      first: function () {
        return this.eq(0);
      },
      last: function () {
        return this.eq(-1);
      },
      even: function () {
        return this.pushStack(
          S.grep(this, function (e, t) {
            return (t + 1) % 2;
          })
        );
      },
      odd: function () {
        return this.pushStack(
          S.grep(this, function (e, t) {
            return t % 2;
          })
        );
      },
      eq: function (e) {
        var t = this.length,
          n = +e + (e < 0 ? t : 0);
        return this.pushStack(0 <= n && n < t ? [this[n]] : []);
      },
      end: function () {
        return this.prevObject || this.constructor();
      },
      push: u,
      sort: t.sort,
      splice: t.splice,
    }),
    (S.extend = S.fn.extend =
      function () {
        var e,
          t,
          n,
          r,
          i,
          o,
          a = arguments[0] || {},
          s = 1,
          u = arguments.length,
          l = !1;
        for (
          "boolean" == typeof a && ((l = a), (a = arguments[s] || {}), s++),
            "object" == typeof a || m(a) || (a = {}),
            s === u && ((a = this), s--);
          s < u;
          s++
        )
          if (null != (e = arguments[s]))
            for (t in e)
              (r = e[t]),
                "__proto__" !== t &&
                  a !== r &&
                  (l && r && (S.isPlainObject(r) || (i = Array.isArray(r)))
                    ? ((n = a[t]),
                      (o =
                        i && !Array.isArray(n)
                          ? []
                          : i || S.isPlainObject(n)
                          ? n
                          : {}),
                      (i = !1),
                      (a[t] = S.extend(l, o, r)))
                    : void 0 !== r && (a[t] = r));
        return a;
      }),
    S.extend({
      expando: "jQuery" + (f + Math.random()).replace(/\D/g, ""),
      isReady: !0,
      error: function (e) {
        throw new Error(e);
      },
      noop: function () {},
      isPlainObject: function (e) {
        var t, n;
        return (
          !(!e || "[object Object]" !== o.call(e)) &&
          (!(t = r(e)) ||
            ("function" ==
              typeof (n = v.call(t, "constructor") && t.constructor) &&
              a.call(n) === l))
        );
      },
      isEmptyObject: function (e) {
        var t;
        for (t in e) return !1;
        return !0;
      },
      globalEval: function (e, t, n) {
        b(e, { nonce: t && t.nonce }, n);
      },
      each: function (e, t) {
        var n,
          r = 0;
        if (p(e)) {
          for (n = e.length; r < n; r++)
            if (!1 === t.call(e[r], r, e[r])) break;
        } else for (r in e) if (!1 === t.call(e[r], r, e[r])) break;
        return e;
      },
      makeArray: function (e, t) {
        var n = t || [];
        return (
          null != e &&
            (p(Object(e))
              ? S.merge(n, "string" == typeof e ? [e] : e)
              : u.call(n, e)),
          n
        );
      },
      inArray: function (e, t, n) {
        return null == t ? -1 : i.call(t, e, n);
      },
      merge: function (e, t) {
        for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
        return (e.length = i), e;
      },
      grep: function (e, t, n) {
        for (var r = [], i = 0, o = e.length, a = !n; i < o; i++)
          !t(e[i], i) !== a && r.push(e[i]);
        return r;
      },
      map: function (e, t, n) {
        var r,
          i,
          o = 0,
          a = [];
        if (p(e))
          for (r = e.length; o < r; o++)
            null != (i = t(e[o], o, n)) && a.push(i);
        else for (o in e) null != (i = t(e[o], o, n)) && a.push(i);
        return g(a);
      },
      guid: 1,
      support: y,
    }),
    "function" == typeof Symbol && (S.fn[Symbol.iterator] = t[Symbol.iterator]),
    S.each(
      "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
        " "
      ),
      function (e, t) {
        n["[object " + t + "]"] = t.toLowerCase();
      }
    );
  var d = (function (n) {
    var e,
      d,
      b,
      o,
      i,
      h,
      f,
      g,
      w,
      u,
      l,
      T,
      C,
      a,
      E,
      v,
      s,
      c,
      y,
      S = "sizzle" + 1 * new Date(),
      p = n.document,
      k = 0,
      r = 0,
      m = ue(),
      x = ue(),
      A = ue(),
      N = ue(),
      D = function (e, t) {
        return e === t && (l = !0), 0;
      },
      j = {}.hasOwnProperty,
      t = [],
      q = t.pop,
      L = t.push,
      H = t.push,
      O = t.slice,
      P = function (e, t) {
        for (var n = 0, r = e.length; n < r; n++) if (e[n] === t) return n;
        return -1;
      },
      R =
        "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
      M = "[\\x20\\t\\r\\n\\f]",
      I =
        "(?:\\\\[\\da-fA-F]{1,6}" +
        M +
        "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
      W =
        "\\[" +
        M +
        "*(" +
        I +
        ")(?:" +
        M +
        "*([*^$|!~]?=)" +
        M +
        "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
        I +
        "))|)" +
        M +
        "*\\]",
      F =
        ":(" +
        I +
        ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
        W +
        ")*)|.*)\\)|)",
      B = new RegExp(M + "+", "g"),
      $ = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"),
      _ = new RegExp("^" + M + "*," + M + "*"),
      z = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"),
      U = new RegExp(M + "|>"),
      X = new RegExp(F),
      V = new RegExp("^" + I + "$"),
      G = {
        ID: new RegExp("^#(" + I + ")"),
        CLASS: new RegExp("^\\.(" + I + ")"),
        TAG: new RegExp("^(" + I + "|[*])"),
        ATTR: new RegExp("^" + W),
        PSEUDO: new RegExp("^" + F),
        CHILD: new RegExp(
          "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
            M +
            "*(even|odd|(([+-]|)(\\d*)n|)" +
            M +
            "*(?:([+-]|)" +
            M +
            "*(\\d+)|))" +
            M +
            "*\\)|)",
          "i"
        ),
        bool: new RegExp("^(?:" + R + ")$", "i"),
        needsContext: new RegExp(
          "^" +
            M +
            "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
            M +
            "*((?:-\\d)?\\d*)" +
            M +
            "*\\)|)(?=[^-]|$)",
          "i"
        ),
      },
      Y = /HTML$/i,
      Q = /^(?:input|select|textarea|button)$/i,
      J = /^h\d$/i,
      K = /^[^{]+\{\s*\[native \w/,
      Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
      ee = /[+~]/,
      te = new RegExp("\\\\[\\da-fA-F]{1,6}" + M + "?|\\\\([^\\r\\n\\f])", "g"),
      ne = function (e, t) {
        var n = "0x" + e.slice(1) - 65536;
        return (
          t ||
          (n < 0
            ? String.fromCharCode(n + 65536)
            : String.fromCharCode((n >> 10) | 55296, (1023 & n) | 56320))
        );
      },
      re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
      ie = function (e, t) {
        return t
          ? "\0" === e
            ? "\ufffd"
            : e.slice(0, -1) +
              "\\" +
              e.charCodeAt(e.length - 1).toString(16) +
              " "
          : "\\" + e;
      },
      oe = function () {
        T();
      },
      ae = be(
        function (e) {
          return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase();
        },
        { dir: "parentNode", next: "legend" }
      );
    try {
      H.apply((t = O.call(p.childNodes)), p.childNodes),
        t[p.childNodes.length].nodeType;
    } catch (e) {
      H = {
        apply: t.length
          ? function (e, t) {
              L.apply(e, O.call(t));
            }
          : function (e, t) {
              var n = e.length,
                r = 0;
              while ((e[n++] = t[r++]));
              e.length = n - 1;
            },
      };
    }
    function se(t, e, n, r) {
      var i,
        o,
        a,
        s,
        u,
        l,
        c,
        f = e && e.ownerDocument,
        p = e ? e.nodeType : 9;
      if (
        ((n = n || []),
        "string" != typeof t || !t || (1 !== p && 9 !== p && 11 !== p))
      )
        return n;
      if (!r && (T(e), (e = e || C), E)) {
        if (11 !== p && (u = Z.exec(t)))
          if ((i = u[1])) {
            if (9 === p) {
              if (!(a = e.getElementById(i))) return n;
              if (a.id === i) return n.push(a), n;
            } else if (f && (a = f.getElementById(i)) && y(e, a) && a.id === i)
              return n.push(a), n;
          } else {
            if (u[2]) return H.apply(n, e.getElementsByTagName(t)), n;
            if (
              (i = u[3]) &&
              d.getElementsByClassName &&
              e.getElementsByClassName
            )
              return H.apply(n, e.getElementsByClassName(i)), n;
          }
        if (
          d.qsa &&
          !N[t + " "] &&
          (!v || !v.test(t)) &&
          (1 !== p || "object" !== e.nodeName.toLowerCase())
        ) {
          if (((c = t), (f = e), 1 === p && (U.test(t) || z.test(t)))) {
            ((f = (ee.test(t) && ye(e.parentNode)) || e) === e && d.scope) ||
              ((s = e.getAttribute("id"))
                ? (s = s.replace(re, ie))
                : e.setAttribute("id", (s = S))),
              (o = (l = h(t)).length);
            while (o--) l[o] = (s ? "#" + s : ":scope") + " " + xe(l[o]);
            c = l.join(",");
          }
          try {
            return H.apply(n, f.querySelectorAll(c)), n;
          } catch (e) {
            N(t, !0);
          } finally {
            s === S && e.removeAttribute("id");
          }
        }
      }
      return g(t.replace($, "$1"), e, n, r);
    }
    function ue() {
      var r = [];
      return function e(t, n) {
        return (
          r.push(t + " ") > b.cacheLength && delete e[r.shift()],
          (e[t + " "] = n)
        );
      };
    }
    function le(e) {
      return (e[S] = !0), e;
    }
    function ce(e) {
      var t = C.createElement("fieldset");
      try {
        return !!e(t);
      } catch (e) {
        return !1;
      } finally {
        t.parentNode && t.parentNode.removeChild(t), (t = null);
      }
    }
    function fe(e, t) {
      var n = e.split("|"),
        r = n.length;
      while (r--) b.attrHandle[n[r]] = t;
    }
    function pe(e, t) {
      var n = t && e,
        r =
          n &&
          1 === e.nodeType &&
          1 === t.nodeType &&
          e.sourceIndex - t.sourceIndex;
      if (r) return r;
      if (n) while ((n = n.nextSibling)) if (n === t) return -1;
      return e ? 1 : -1;
    }
    function de(t) {
      return function (e) {
        return "input" === e.nodeName.toLowerCase() && e.type === t;
      };
    }
    function he(n) {
      return function (e) {
        var t = e.nodeName.toLowerCase();
        return ("input" === t || "button" === t) && e.type === n;
      };
    }
    function ge(t) {
      return function (e) {
        return "form" in e
          ? e.parentNode && !1 === e.disabled
            ? "label" in e
              ? "label" in e.parentNode
                ? e.parentNode.disabled === t
                : e.disabled === t
              : e.isDisabled === t || (e.isDisabled !== !t && ae(e) === t)
            : e.disabled === t
          : "label" in e && e.disabled === t;
      };
    }
    function ve(a) {
      return le(function (o) {
        return (
          (o = +o),
          le(function (e, t) {
            var n,
              r = a([], e.length, o),
              i = r.length;
            while (i--) e[(n = r[i])] && (e[n] = !(t[n] = e[n]));
          })
        );
      });
    }
    function ye(e) {
      return e && "undefined" != typeof e.getElementsByTagName && e;
    }
    for (e in ((d = se.support = {}),
    (i = se.isXML =
      function (e) {
        var t = e.namespaceURI,
          n = (e.ownerDocument || e).documentElement;
        return !Y.test(t || (n && n.nodeName) || "HTML");
      }),
    (T = se.setDocument =
      function (e) {
        var t,
          n,
          r = e ? e.ownerDocument || e : p;
        return (
          r != C &&
            9 === r.nodeType &&
            r.documentElement &&
            ((a = (C = r).documentElement),
            (E = !i(C)),
            p != C &&
              (n = C.defaultView) &&
              n.top !== n &&
              (n.addEventListener
                ? n.addEventListener("unload", oe, !1)
                : n.attachEvent && n.attachEvent("onunload", oe)),
            (d.scope = ce(function (e) {
              return (
                a.appendChild(e).appendChild(C.createElement("div")),
                "undefined" != typeof e.querySelectorAll &&
                  !e.querySelectorAll(":scope fieldset div").length
              );
            })),
            (d.attributes = ce(function (e) {
              return (e.className = "i"), !e.getAttribute("className");
            })),
            (d.getElementsByTagName = ce(function (e) {
              return (
                e.appendChild(C.createComment("")),
                !e.getElementsByTagName("*").length
              );
            })),
            (d.getElementsByClassName = K.test(C.getElementsByClassName)),
            (d.getById = ce(function (e) {
              return (
                (a.appendChild(e).id = S),
                !C.getElementsByName || !C.getElementsByName(S).length
              );
            })),
            d.getById
              ? ((b.filter.ID = function (e) {
                  var t = e.replace(te, ne);
                  return function (e) {
                    return e.getAttribute("id") === t;
                  };
                }),
                (b.find.ID = function (e, t) {
                  if ("undefined" != typeof t.getElementById && E) {
                    var n = t.getElementById(e);
                    return n ? [n] : [];
                  }
                }))
              : ((b.filter.ID = function (e) {
                  var n = e.replace(te, ne);
                  return function (e) {
                    var t =
                      "undefined" != typeof e.getAttributeNode &&
                      e.getAttributeNode("id");
                    return t && t.value === n;
                  };
                }),
                (b.find.ID = function (e, t) {
                  if ("undefined" != typeof t.getElementById && E) {
                    var n,
                      r,
                      i,
                      o = t.getElementById(e);
                    if (o) {
                      if ((n = o.getAttributeNode("id")) && n.value === e)
                        return [o];
                      (i = t.getElementsByName(e)), (r = 0);
                      while ((o = i[r++]))
                        if ((n = o.getAttributeNode("id")) && n.value === e)
                          return [o];
                    }
                    return [];
                  }
                })),
            (b.find.TAG = d.getElementsByTagName
              ? function (e, t) {
                  return "undefined" != typeof t.getElementsByTagName
                    ? t.getElementsByTagName(e)
                    : d.qsa
                    ? t.querySelectorAll(e)
                    : void 0;
                }
              : function (e, t) {
                  var n,
                    r = [],
                    i = 0,
                    o = t.getElementsByTagName(e);
                  if ("*" === e) {
                    while ((n = o[i++])) 1 === n.nodeType && r.push(n);
                    return r;
                  }
                  return o;
                }),
            (b.find.CLASS =
              d.getElementsByClassName &&
              function (e, t) {
                if ("undefined" != typeof t.getElementsByClassName && E)
                  return t.getElementsByClassName(e);
              }),
            (s = []),
            (v = []),
            (d.qsa = K.test(C.querySelectorAll)) &&
              (ce(function (e) {
                var t;
                (a.appendChild(e).innerHTML =
                  "<a id='" +
                  S +
                  "'></a><select id='" +
                  S +
                  "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                  e.querySelectorAll("[msallowcapture^='']").length &&
                    v.push("[*^$]=" + M + "*(?:''|\"\")"),
                  e.querySelectorAll("[selected]").length ||
                    v.push("\\[" + M + "*(?:value|" + R + ")"),
                  e.querySelectorAll("[id~=" + S + "-]").length || v.push("~="),
                  (t = C.createElement("input")).setAttribute("name", ""),
                  e.appendChild(t),
                  e.querySelectorAll("[name='']").length ||
                    v.push("\\[" + M + "*name" + M + "*=" + M + "*(?:''|\"\")"),
                  e.querySelectorAll(":checked").length || v.push(":checked"),
                  e.querySelectorAll("a#" + S + "+*").length ||
                    v.push(".#.+[+~]"),
                  e.querySelectorAll("\\\f"),
                  v.push("[\\r\\n\\f]");
              }),
              ce(function (e) {
                e.innerHTML =
                  "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var t = C.createElement("input");
                t.setAttribute("type", "hidden"),
                  e.appendChild(t).setAttribute("name", "D"),
                  e.querySelectorAll("[name=d]").length &&
                    v.push("name" + M + "*[*^$|!~]?="),
                  2 !== e.querySelectorAll(":enabled").length &&
                    v.push(":enabled", ":disabled"),
                  (a.appendChild(e).disabled = !0),
                  2 !== e.querySelectorAll(":disabled").length &&
                    v.push(":enabled", ":disabled"),
                  e.querySelectorAll("*,:x"),
                  v.push(",.*:");
              })),
            (d.matchesSelector = K.test(
              (c =
                a.matches ||
                a.webkitMatchesSelector ||
                a.mozMatchesSelector ||
                a.oMatchesSelector ||
                a.msMatchesSelector)
            )) &&
              ce(function (e) {
                (d.disconnectedMatch = c.call(e, "*")),
                  c.call(e, "[s!='']:x"),
                  s.push("!=", F);
              }),
            (v = v.length && new RegExp(v.join("|"))),
            (s = s.length && new RegExp(s.join("|"))),
            (t = K.test(a.compareDocumentPosition)),
            (y =
              t || K.test(a.contains)
                ? function (e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e,
                      r = t && t.parentNode;
                    return (
                      e === r ||
                      !(
                        !r ||
                        1 !== r.nodeType ||
                        !(n.contains
                          ? n.contains(r)
                          : e.compareDocumentPosition &&
                            16 & e.compareDocumentPosition(r))
                      )
                    );
                  }
                : function (e, t) {
                    if (t) while ((t = t.parentNode)) if (t === e) return !0;
                    return !1;
                  }),
            (D = t
              ? function (e, t) {
                  if (e === t) return (l = !0), 0;
                  var n =
                    !e.compareDocumentPosition - !t.compareDocumentPosition;
                  return (
                    n ||
                    (1 &
                      (n =
                        (e.ownerDocument || e) == (t.ownerDocument || t)
                          ? e.compareDocumentPosition(t)
                          : 1) ||
                    (!d.sortDetached && t.compareDocumentPosition(e) === n)
                      ? e == C || (e.ownerDocument == p && y(p, e))
                        ? -1
                        : t == C || (t.ownerDocument == p && y(p, t))
                        ? 1
                        : u
                        ? P(u, e) - P(u, t)
                        : 0
                      : 4 & n
                      ? -1
                      : 1)
                  );
                }
              : function (e, t) {
                  if (e === t) return (l = !0), 0;
                  var n,
                    r = 0,
                    i = e.parentNode,
                    o = t.parentNode,
                    a = [e],
                    s = [t];
                  if (!i || !o)
                    return e == C
                      ? -1
                      : t == C
                      ? 1
                      : i
                      ? -1
                      : o
                      ? 1
                      : u
                      ? P(u, e) - P(u, t)
                      : 0;
                  if (i === o) return pe(e, t);
                  n = e;
                  while ((n = n.parentNode)) a.unshift(n);
                  n = t;
                  while ((n = n.parentNode)) s.unshift(n);
                  while (a[r] === s[r]) r++;
                  return r
                    ? pe(a[r], s[r])
                    : a[r] == p
                    ? -1
                    : s[r] == p
                    ? 1
                    : 0;
                })),
          C
        );
      }),
    (se.matches = function (e, t) {
      return se(e, null, null, t);
    }),
    (se.matchesSelector = function (e, t) {
      if (
        (T(e),
        d.matchesSelector &&
          E &&
          !N[t + " "] &&
          (!s || !s.test(t)) &&
          (!v || !v.test(t)))
      )
        try {
          var n = c.call(e, t);
          if (
            n ||
            d.disconnectedMatch ||
            (e.document && 11 !== e.document.nodeType)
          )
            return n;
        } catch (e) {
          N(t, !0);
        }
      return 0 < se(t, C, null, [e]).length;
    }),
    (se.contains = function (e, t) {
      return (e.ownerDocument || e) != C && T(e), y(e, t);
    }),
    (se.attr = function (e, t) {
      (e.ownerDocument || e) != C && T(e);
      var n = b.attrHandle[t.toLowerCase()],
        r = n && j.call(b.attrHandle, t.toLowerCase()) ? n(e, t, !E) : void 0;
      return void 0 !== r
        ? r
        : d.attributes || !E
        ? e.getAttribute(t)
        : (r = e.getAttributeNode(t)) && r.specified
        ? r.value
        : null;
    }),
    (se.escape = function (e) {
      return (e + "").replace(re, ie);
    }),
    (se.error = function (e) {
      throw new Error("Syntax error, unrecognized expression: " + e);
    }),
    (se.uniqueSort = function (e) {
      var t,
        n = [],
        r = 0,
        i = 0;
      if (
        ((l = !d.detectDuplicates),
        (u = !d.sortStable && e.slice(0)),
        e.sort(D),
        l)
      ) {
        while ((t = e[i++])) t === e[i] && (r = n.push(i));
        while (r--) e.splice(n[r], 1);
      }
      return (u = null), e;
    }),
    (o = se.getText =
      function (e) {
        var t,
          n = "",
          r = 0,
          i = e.nodeType;
        if (i) {
          if (1 === i || 9 === i || 11 === i) {
            if ("string" == typeof e.textContent) return e.textContent;
            for (e = e.firstChild; e; e = e.nextSibling) n += o(e);
          } else if (3 === i || 4 === i) return e.nodeValue;
        } else while ((t = e[r++])) n += o(t);
        return n;
      }),
    ((b = se.selectors =
      {
        cacheLength: 50,
        createPseudo: le,
        match: G,
        attrHandle: {},
        find: {},
        relative: {
          ">": { dir: "parentNode", first: !0 },
          " ": { dir: "parentNode" },
          "+": { dir: "previousSibling", first: !0 },
          "~": { dir: "previousSibling" },
        },
        preFilter: {
          ATTR: function (e) {
            return (
              (e[1] = e[1].replace(te, ne)),
              (e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne)),
              "~=" === e[2] && (e[3] = " " + e[3] + " "),
              e.slice(0, 4)
            );
          },
          CHILD: function (e) {
            return (
              (e[1] = e[1].toLowerCase()),
              "nth" === e[1].slice(0, 3)
                ? (e[3] || se.error(e[0]),
                  (e[4] = +(e[4]
                    ? e[5] + (e[6] || 1)
                    : 2 * ("even" === e[3] || "odd" === e[3]))),
                  (e[5] = +(e[7] + e[8] || "odd" === e[3])))
                : e[3] && se.error(e[0]),
              e
            );
          },
          PSEUDO: function (e) {
            var t,
              n = !e[6] && e[2];
            return G.CHILD.test(e[0])
              ? null
              : (e[3]
                  ? (e[2] = e[4] || e[5] || "")
                  : n &&
                    X.test(n) &&
                    (t = h(n, !0)) &&
                    (t = n.indexOf(")", n.length - t) - n.length) &&
                    ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))),
                e.slice(0, 3));
          },
        },
        filter: {
          TAG: function (e) {
            var t = e.replace(te, ne).toLowerCase();
            return "*" === e
              ? function () {
                  return !0;
                }
              : function (e) {
                  return e.nodeName && e.nodeName.toLowerCase() === t;
                };
          },
          CLASS: function (e) {
            var t = m[e + " "];
            return (
              t ||
              ((t = new RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) &&
                m(e, function (e) {
                  return t.test(
                    ("string" == typeof e.className && e.className) ||
                      ("undefined" != typeof e.getAttribute &&
                        e.getAttribute("class")) ||
                      ""
                  );
                }))
            );
          },
          ATTR: function (n, r, i) {
            return function (e) {
              var t = se.attr(e, n);
              return null == t
                ? "!=" === r
                : !r ||
                    ((t += ""),
                    "=" === r
                      ? t === i
                      : "!=" === r
                      ? t !== i
                      : "^=" === r
                      ? i && 0 === t.indexOf(i)
                      : "*=" === r
                      ? i && -1 < t.indexOf(i)
                      : "$=" === r
                      ? i && t.slice(-i.length) === i
                      : "~=" === r
                      ? -1 < (" " + t.replace(B, " ") + " ").indexOf(i)
                      : "|=" === r &&
                        (t === i || t.slice(0, i.length + 1) === i + "-"));
            };
          },
          CHILD: function (h, e, t, g, v) {
            var y = "nth" !== h.slice(0, 3),
              m = "last" !== h.slice(-4),
              x = "of-type" === e;
            return 1 === g && 0 === v
              ? function (e) {
                  return !!e.parentNode;
                }
              : function (e, t, n) {
                  var r,
                    i,
                    o,
                    a,
                    s,
                    u,
                    l = y !== m ? "nextSibling" : "previousSibling",
                    c = e.parentNode,
                    f = x && e.nodeName.toLowerCase(),
                    p = !n && !x,
                    d = !1;
                  if (c) {
                    if (y) {
                      while (l) {
                        a = e;
                        while ((a = a[l]))
                          if (
                            x
                              ? a.nodeName.toLowerCase() === f
                              : 1 === a.nodeType
                          )
                            return !1;
                        u = l = "only" === h && !u && "nextSibling";
                      }
                      return !0;
                    }
                    if (((u = [m ? c.firstChild : c.lastChild]), m && p)) {
                      (d =
                        (s =
                          (r =
                            (i =
                              (o = (a = c)[S] || (a[S] = {}))[a.uniqueID] ||
                              (o[a.uniqueID] = {}))[h] || [])[0] === k &&
                          r[1]) && r[2]),
                        (a = s && c.childNodes[s]);
                      while ((a = (++s && a && a[l]) || (d = s = 0) || u.pop()))
                        if (1 === a.nodeType && ++d && a === e) {
                          i[h] = [k, s, d];
                          break;
                        }
                    } else if (
                      (p &&
                        (d = s =
                          (r =
                            (i =
                              (o = (a = e)[S] || (a[S] = {}))[a.uniqueID] ||
                              (o[a.uniqueID] = {}))[h] || [])[0] === k && r[1]),
                      !1 === d)
                    )
                      while ((a = (++s && a && a[l]) || (d = s = 0) || u.pop()))
                        if (
                          (x
                            ? a.nodeName.toLowerCase() === f
                            : 1 === a.nodeType) &&
                          ++d &&
                          (p &&
                            ((i =
                              (o = a[S] || (a[S] = {}))[a.uniqueID] ||
                              (o[a.uniqueID] = {}))[h] = [k, d]),
                          a === e)
                        )
                          break;
                    return (d -= v) === g || (d % g == 0 && 0 <= d / g);
                  }
                };
          },
          PSEUDO: function (e, o) {
            var t,
              a =
                b.pseudos[e] ||
                b.setFilters[e.toLowerCase()] ||
                se.error("unsupported pseudo: " + e);
            return a[S]
              ? a(o)
              : 1 < a.length
              ? ((t = [e, e, "", o]),
                b.setFilters.hasOwnProperty(e.toLowerCase())
                  ? le(function (e, t) {
                      var n,
                        r = a(e, o),
                        i = r.length;
                      while (i--) e[(n = P(e, r[i]))] = !(t[n] = r[i]);
                    })
                  : function (e) {
                      return a(e, 0, t);
                    })
              : a;
          },
        },
        pseudos: {
          not: le(function (e) {
            var r = [],
              i = [],
              s = f(e.replace($, "$1"));
            return s[S]
              ? le(function (e, t, n, r) {
                  var i,
                    o = s(e, null, r, []),
                    a = e.length;
                  while (a--) (i = o[a]) && (e[a] = !(t[a] = i));
                })
              : function (e, t, n) {
                  return (r[0] = e), s(r, null, n, i), (r[0] = null), !i.pop();
                };
          }),
          has: le(function (t) {
            return function (e) {
              return 0 < se(t, e).length;
            };
          }),
          contains: le(function (t) {
            return (
              (t = t.replace(te, ne)),
              function (e) {
                return -1 < (e.textContent || o(e)).indexOf(t);
              }
            );
          }),
          lang: le(function (n) {
            return (
              V.test(n || "") || se.error("unsupported lang: " + n),
              (n = n.replace(te, ne).toLowerCase()),
              function (e) {
                var t;
                do {
                  if (
                    (t = E
                      ? e.lang
                      : e.getAttribute("xml:lang") || e.getAttribute("lang"))
                  )
                    return (
                      (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-")
                    );
                } while ((e = e.parentNode) && 1 === e.nodeType);
                return !1;
              }
            );
          }),
          target: function (e) {
            var t = n.location && n.location.hash;
            return t && t.slice(1) === e.id;
          },
          root: function (e) {
            return e === a;
          },
          focus: function (e) {
            return (
              e === C.activeElement &&
              (!C.hasFocus || C.hasFocus()) &&
              !!(e.type || e.href || ~e.tabIndex)
            );
          },
          enabled: ge(!1),
          disabled: ge(!0),
          checked: function (e) {
            var t = e.nodeName.toLowerCase();
            return (
              ("input" === t && !!e.checked) || ("option" === t && !!e.selected)
            );
          },
          selected: function (e) {
            return (
              e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
            );
          },
          empty: function (e) {
            for (e = e.firstChild; e; e = e.nextSibling)
              if (e.nodeType < 6) return !1;
            return !0;
          },
          parent: function (e) {
            return !b.pseudos.empty(e);
          },
          header: function (e) {
            return J.test(e.nodeName);
          },
          input: function (e) {
            return Q.test(e.nodeName);
          },
          button: function (e) {
            var t = e.nodeName.toLowerCase();
            return ("input" === t && "button" === e.type) || "button" === t;
          },
          text: function (e) {
            var t;
            return (
              "input" === e.nodeName.toLowerCase() &&
              "text" === e.type &&
              (null == (t = e.getAttribute("type")) ||
                "text" === t.toLowerCase())
            );
          },
          first: ve(function () {
            return [0];
          }),
          last: ve(function (e, t) {
            return [t - 1];
          }),
          eq: ve(function (e, t, n) {
            return [n < 0 ? n + t : n];
          }),
          even: ve(function (e, t) {
            for (var n = 0; n < t; n += 2) e.push(n);
            return e;
          }),
          odd: ve(function (e, t) {
            for (var n = 1; n < t; n += 2) e.push(n);
            return e;
          }),
          lt: ve(function (e, t, n) {
            for (var r = n < 0 ? n + t : t < n ? t : n; 0 <= --r; ) e.push(r);
            return e;
          }),
          gt: ve(function (e, t, n) {
            for (var r = n < 0 ? n + t : n; ++r < t; ) e.push(r);
            return e;
          }),
        },
      }).pseudos.nth = b.pseudos.eq),
    { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
      b.pseudos[e] = de(e);
    for (e in { submit: !0, reset: !0 }) b.pseudos[e] = he(e);
    function me() {}
    function xe(e) {
      for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
      return r;
    }
    function be(s, e, t) {
      var u = e.dir,
        l = e.next,
        c = l || u,
        f = t && "parentNode" === c,
        p = r++;
      return e.first
        ? function (e, t, n) {
            while ((e = e[u])) if (1 === e.nodeType || f) return s(e, t, n);
            return !1;
          }
        : function (e, t, n) {
            var r,
              i,
              o,
              a = [k, p];
            if (n) {
              while ((e = e[u]))
                if ((1 === e.nodeType || f) && s(e, t, n)) return !0;
            } else
              while ((e = e[u]))
                if (1 === e.nodeType || f)
                  if (
                    ((i =
                      (o = e[S] || (e[S] = {}))[e.uniqueID] ||
                      (o[e.uniqueID] = {})),
                    l && l === e.nodeName.toLowerCase())
                  )
                    e = e[u] || e;
                  else {
                    if ((r = i[c]) && r[0] === k && r[1] === p)
                      return (a[2] = r[2]);
                    if (((i[c] = a)[2] = s(e, t, n))) return !0;
                  }
            return !1;
          };
    }
    function we(i) {
      return 1 < i.length
        ? function (e, t, n) {
            var r = i.length;
            while (r--) if (!i[r](e, t, n)) return !1;
            return !0;
          }
        : i[0];
    }
    function Te(e, t, n, r, i) {
      for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++)
        (o = e[s]) && ((n && !n(o, r, i)) || (a.push(o), l && t.push(s)));
      return a;
    }
    function Ce(d, h, g, v, y, e) {
      return (
        v && !v[S] && (v = Ce(v)),
        y && !y[S] && (y = Ce(y, e)),
        le(function (e, t, n, r) {
          var i,
            o,
            a,
            s = [],
            u = [],
            l = t.length,
            c =
              e ||
              (function (e, t, n) {
                for (var r = 0, i = t.length; r < i; r++) se(e, t[r], n);
                return n;
              })(h || "*", n.nodeType ? [n] : n, []),
            f = !d || (!e && h) ? c : Te(c, s, d, n, r),
            p = g ? (y || (e ? d : l || v) ? [] : t) : f;
          if ((g && g(f, p, n, r), v)) {
            (i = Te(p, u)), v(i, [], n, r), (o = i.length);
            while (o--) (a = i[o]) && (p[u[o]] = !(f[u[o]] = a));
          }
          if (e) {
            if (y || d) {
              if (y) {
                (i = []), (o = p.length);
                while (o--) (a = p[o]) && i.push((f[o] = a));
                y(null, (p = []), i, r);
              }
              o = p.length;
              while (o--)
                (a = p[o]) &&
                  -1 < (i = y ? P(e, a) : s[o]) &&
                  (e[i] = !(t[i] = a));
            }
          } else (p = Te(p === t ? p.splice(l, p.length) : p)), y ? y(null, t, p, r) : H.apply(t, p);
        })
      );
    }
    function Ee(e) {
      for (
        var i,
          t,
          n,
          r = e.length,
          o = b.relative[e[0].type],
          a = o || b.relative[" "],
          s = o ? 1 : 0,
          u = be(
            function (e) {
              return e === i;
            },
            a,
            !0
          ),
          l = be(
            function (e) {
              return -1 < P(i, e);
            },
            a,
            !0
          ),
          c = [
            function (e, t, n) {
              var r =
                (!o && (n || t !== w)) ||
                ((i = t).nodeType ? u(e, t, n) : l(e, t, n));
              return (i = null), r;
            },
          ];
        s < r;
        s++
      )
        if ((t = b.relative[e[s].type])) c = [be(we(c), t)];
        else {
          if ((t = b.filter[e[s].type].apply(null, e[s].matches))[S]) {
            for (n = ++s; n < r; n++) if (b.relative[e[n].type]) break;
            return Ce(
              1 < s && we(c),
              1 < s &&
                xe(
                  e
                    .slice(0, s - 1)
                    .concat({ value: " " === e[s - 2].type ? "*" : "" })
                ).replace($, "$1"),
              t,
              s < n && Ee(e.slice(s, n)),
              n < r && Ee((e = e.slice(n))),
              n < r && xe(e)
            );
          }
          c.push(t);
        }
      return we(c);
    }
    return (
      (me.prototype = b.filters = b.pseudos),
      (b.setFilters = new me()),
      (h = se.tokenize =
        function (e, t) {
          var n,
            r,
            i,
            o,
            a,
            s,
            u,
            l = x[e + " "];
          if (l) return t ? 0 : l.slice(0);
          (a = e), (s = []), (u = b.preFilter);
          while (a) {
            for (o in ((n && !(r = _.exec(a))) ||
              (r && (a = a.slice(r[0].length) || a), s.push((i = []))),
            (n = !1),
            (r = z.exec(a)) &&
              ((n = r.shift()),
              i.push({ value: n, type: r[0].replace($, " ") }),
              (a = a.slice(n.length))),
            b.filter))
              !(r = G[o].exec(a)) ||
                (u[o] && !(r = u[o](r))) ||
                ((n = r.shift()),
                i.push({ value: n, type: o, matches: r }),
                (a = a.slice(n.length)));
            if (!n) break;
          }
          return t ? a.length : a ? se.error(e) : x(e, s).slice(0);
        }),
      (f = se.compile =
        function (e, t) {
          var n,
            v,
            y,
            m,
            x,
            r,
            i = [],
            o = [],
            a = A[e + " "];
          if (!a) {
            t || (t = h(e)), (n = t.length);
            while (n--) (a = Ee(t[n]))[S] ? i.push(a) : o.push(a);
            (a = A(
              e,
              ((v = o),
              (m = 0 < (y = i).length),
              (x = 0 < v.length),
              (r = function (e, t, n, r, i) {
                var o,
                  a,
                  s,
                  u = 0,
                  l = "0",
                  c = e && [],
                  f = [],
                  p = w,
                  d = e || (x && b.find.TAG("*", i)),
                  h = (k += null == p ? 1 : Math.random() || 0.1),
                  g = d.length;
                for (
                  i && (w = t == C || t || i);
                  l !== g && null != (o = d[l]);
                  l++
                ) {
                  if (x && o) {
                    (a = 0), t || o.ownerDocument == C || (T(o), (n = !E));
                    while ((s = v[a++]))
                      if (s(o, t || C, n)) {
                        r.push(o);
                        break;
                      }
                    i && (k = h);
                  }
                  m && ((o = !s && o) && u--, e && c.push(o));
                }
                if (((u += l), m && l !== u)) {
                  a = 0;
                  while ((s = y[a++])) s(c, f, t, n);
                  if (e) {
                    if (0 < u) while (l--) c[l] || f[l] || (f[l] = q.call(r));
                    f = Te(f);
                  }
                  H.apply(r, f),
                    i &&
                      !e &&
                      0 < f.length &&
                      1 < u + y.length &&
                      se.uniqueSort(r);
                }
                return i && ((k = h), (w = p)), c;
              }),
              m ? le(r) : r)
            )).selector = e;
          }
          return a;
        }),
      (g = se.select =
        function (e, t, n, r) {
          var i,
            o,
            a,
            s,
            u,
            l = "function" == typeof e && e,
            c = !r && h((e = l.selector || e));
          if (((n = n || []), 1 === c.length)) {
            if (
              2 < (o = c[0] = c[0].slice(0)).length &&
              "ID" === (a = o[0]).type &&
              9 === t.nodeType &&
              E &&
              b.relative[o[1].type]
            ) {
              if (!(t = (b.find.ID(a.matches[0].replace(te, ne), t) || [])[0]))
                return n;
              l && (t = t.parentNode), (e = e.slice(o.shift().value.length));
            }
            i = G.needsContext.test(e) ? 0 : o.length;
            while (i--) {
              if (((a = o[i]), b.relative[(s = a.type)])) break;
              if (
                (u = b.find[s]) &&
                (r = u(
                  a.matches[0].replace(te, ne),
                  (ee.test(o[0].type) && ye(t.parentNode)) || t
                ))
              ) {
                if ((o.splice(i, 1), !(e = r.length && xe(o))))
                  return H.apply(n, r), n;
                break;
              }
            }
          }
          return (
            (l || f(e, c))(
              r,
              t,
              !E,
              n,
              !t || (ee.test(e) && ye(t.parentNode)) || t
            ),
            n
          );
        }),
      (d.sortStable = S.split("").sort(D).join("") === S),
      (d.detectDuplicates = !!l),
      T(),
      (d.sortDetached = ce(function (e) {
        return 1 & e.compareDocumentPosition(C.createElement("fieldset"));
      })),
      ce(function (e) {
        return (
          (e.innerHTML = "<a href='#'></a>"),
          "#" === e.firstChild.getAttribute("href")
        );
      }) ||
        fe("type|href|height|width", function (e, t, n) {
          if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
        }),
      (d.attributes &&
        ce(function (e) {
          return (
            (e.innerHTML = "<input/>"),
            e.firstChild.setAttribute("value", ""),
            "" === e.firstChild.getAttribute("value")
          );
        })) ||
        fe("value", function (e, t, n) {
          if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue;
        }),
      ce(function (e) {
        return null == e.getAttribute("disabled");
      }) ||
        fe(R, function (e, t, n) {
          var r;
          if (!n)
            return !0 === e[t]
              ? t.toLowerCase()
              : (r = e.getAttributeNode(t)) && r.specified
              ? r.value
              : null;
        }),
      se
    );
  })(C);
  (S.find = d),
    (S.expr = d.selectors),
    (S.expr[":"] = S.expr.pseudos),
    (S.uniqueSort = S.unique = d.uniqueSort),
    (S.text = d.getText),
    (S.isXMLDoc = d.isXML),
    (S.contains = d.contains),
    (S.escapeSelector = d.escape);
  var h = function (e, t, n) {
      var r = [],
        i = void 0 !== n;
      while ((e = e[t]) && 9 !== e.nodeType)
        if (1 === e.nodeType) {
          if (i && S(e).is(n)) break;
          r.push(e);
        }
      return r;
    },
    T = function (e, t) {
      for (var n = []; e; e = e.nextSibling)
        1 === e.nodeType && e !== t && n.push(e);
      return n;
    },
    k = S.expr.match.needsContext;
  function A(e, t) {
    return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
  }
  var N = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
  function D(e, n, r) {
    return m(n)
      ? S.grep(e, function (e, t) {
          return !!n.call(e, t, e) !== r;
        })
      : n.nodeType
      ? S.grep(e, function (e) {
          return (e === n) !== r;
        })
      : "string" != typeof n
      ? S.grep(e, function (e) {
          return -1 < i.call(n, e) !== r;
        })
      : S.filter(n, e, r);
  }
  (S.filter = function (e, t, n) {
    var r = t[0];
    return (
      n && (e = ":not(" + e + ")"),
      1 === t.length && 1 === r.nodeType
        ? S.find.matchesSelector(r, e)
          ? [r]
          : []
        : S.find.matches(
            e,
            S.grep(t, function (e) {
              return 1 === e.nodeType;
            })
          )
    );
  }),
    S.fn.extend({
      find: function (e) {
        var t,
          n,
          r = this.length,
          i = this;
        if ("string" != typeof e)
          return this.pushStack(
            S(e).filter(function () {
              for (t = 0; t < r; t++) if (S.contains(i[t], this)) return !0;
            })
          );
        for (n = this.pushStack([]), t = 0; t < r; t++) S.find(e, i[t], n);
        return 1 < r ? S.uniqueSort(n) : n;
      },
      filter: function (e) {
        return this.pushStack(D(this, e || [], !1));
      },
      not: function (e) {
        return this.pushStack(D(this, e || [], !0));
      },
      is: function (e) {
        return !!D(this, "string" == typeof e && k.test(e) ? S(e) : e || [], !1)
          .length;
      },
    });
  var j,
    q = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
  ((S.fn.init = function (e, t, n) {
    var r, i;
    if (!e) return this;
    if (((n = n || j), "string" == typeof e)) {
      if (
        !(r =
          "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length
            ? [null, e, null]
            : q.exec(e)) ||
        (!r[1] && t)
      )
        return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
      if (r[1]) {
        if (
          ((t = t instanceof S ? t[0] : t),
          S.merge(
            this,
            S.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : E, !0)
          ),
          N.test(r[1]) && S.isPlainObject(t))
        )
          for (r in t) m(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
        return this;
      }
      return (
        (i = E.getElementById(r[2])) && ((this[0] = i), (this.length = 1)), this
      );
    }
    return e.nodeType
      ? ((this[0] = e), (this.length = 1), this)
      : m(e)
      ? void 0 !== n.ready
        ? n.ready(e)
        : e(S)
      : S.makeArray(e, this);
  }).prototype = S.fn),
    (j = S(E));
  var L = /^(?:parents|prev(?:Until|All))/,
    H = { children: !0, contents: !0, next: !0, prev: !0 };
  function O(e, t) {
    while ((e = e[t]) && 1 !== e.nodeType);
    return e;
  }
  S.fn.extend({
    has: function (e) {
      var t = S(e, this),
        n = t.length;
      return this.filter(function () {
        for (var e = 0; e < n; e++) if (S.contains(this, t[e])) return !0;
      });
    },
    closest: function (e, t) {
      var n,
        r = 0,
        i = this.length,
        o = [],
        a = "string" != typeof e && S(e);
      if (!k.test(e))
        for (; r < i; r++)
          for (n = this[r]; n && n !== t; n = n.parentNode)
            if (
              n.nodeType < 11 &&
              (a
                ? -1 < a.index(n)
                : 1 === n.nodeType && S.find.matchesSelector(n, e))
            ) {
              o.push(n);
              break;
            }
      return this.pushStack(1 < o.length ? S.uniqueSort(o) : o);
    },
    index: function (e) {
      return e
        ? "string" == typeof e
          ? i.call(S(e), this[0])
          : i.call(this, e.jquery ? e[0] : e)
        : this[0] && this[0].parentNode
        ? this.first().prevAll().length
        : -1;
    },
    add: function (e, t) {
      return this.pushStack(S.uniqueSort(S.merge(this.get(), S(e, t))));
    },
    addBack: function (e) {
      return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
    },
  }),
    S.each(
      {
        parent: function (e) {
          var t = e.parentNode;
          return t && 11 !== t.nodeType ? t : null;
        },
        parents: function (e) {
          return h(e, "parentNode");
        },
        parentsUntil: function (e, t, n) {
          return h(e, "parentNode", n);
        },
        next: function (e) {
          return O(e, "nextSibling");
        },
        prev: function (e) {
          return O(e, "previousSibling");
        },
        nextAll: function (e) {
          return h(e, "nextSibling");
        },
        prevAll: function (e) {
          return h(e, "previousSibling");
        },
        nextUntil: function (e, t, n) {
          return h(e, "nextSibling", n);
        },
        prevUntil: function (e, t, n) {
          return h(e, "previousSibling", n);
        },
        siblings: function (e) {
          return T((e.parentNode || {}).firstChild, e);
        },
        children: function (e) {
          return T(e.firstChild);
        },
        contents: function (e) {
          return null != e.contentDocument && r(e.contentDocument)
            ? e.contentDocument
            : (A(e, "template") && (e = e.content || e),
              S.merge([], e.childNodes));
        },
      },
      function (r, i) {
        S.fn[r] = function (e, t) {
          var n = S.map(this, i, e);
          return (
            "Until" !== r.slice(-5) && (t = e),
            t && "string" == typeof t && (n = S.filter(t, n)),
            1 < this.length &&
              (H[r] || S.uniqueSort(n), L.test(r) && n.reverse()),
            this.pushStack(n)
          );
        };
      }
    );
  var P = /[^\x20\t\r\n\f]+/g;
  function R(e) {
    return e;
  }
  function M(e) {
    throw e;
  }
  function I(e, t, n, r) {
    var i;
    try {
      e && m((i = e.promise))
        ? i.call(e).done(t).fail(n)
        : e && m((i = e.then))
        ? i.call(e, t, n)
        : t.apply(void 0, [e].slice(r));
    } catch (e) {
      n.apply(void 0, [e]);
    }
  }
  (S.Callbacks = function (r) {
    var e, n;
    r =
      "string" == typeof r
        ? ((e = r),
          (n = {}),
          S.each(e.match(P) || [], function (e, t) {
            n[t] = !0;
          }),
          n)
        : S.extend({}, r);
    var i,
      t,
      o,
      a,
      s = [],
      u = [],
      l = -1,
      c = function () {
        for (a = a || r.once, o = i = !0; u.length; l = -1) {
          t = u.shift();
          while (++l < s.length)
            !1 === s[l].apply(t[0], t[1]) &&
              r.stopOnFalse &&
              ((l = s.length), (t = !1));
        }
        r.memory || (t = !1), (i = !1), a && (s = t ? [] : "");
      },
      f = {
        add: function () {
          return (
            s &&
              (t && !i && ((l = s.length - 1), u.push(t)),
              (function n(e) {
                S.each(e, function (e, t) {
                  m(t)
                    ? (r.unique && f.has(t)) || s.push(t)
                    : t && t.length && "string" !== w(t) && n(t);
                });
              })(arguments),
              t && !i && c()),
            this
          );
        },
        remove: function () {
          return (
            S.each(arguments, function (e, t) {
              var n;
              while (-1 < (n = S.inArray(t, s, n)))
                s.splice(n, 1), n <= l && l--;
            }),
            this
          );
        },
        has: function (e) {
          return e ? -1 < S.inArray(e, s) : 0 < s.length;
        },
        empty: function () {
          return s && (s = []), this;
        },
        disable: function () {
          return (a = u = []), (s = t = ""), this;
        },
        disabled: function () {
          return !s;
        },
        lock: function () {
          return (a = u = []), t || i || (s = t = ""), this;
        },
        locked: function () {
          return !!a;
        },
        fireWith: function (e, t) {
          return (
            a ||
              ((t = [e, (t = t || []).slice ? t.slice() : t]),
              u.push(t),
              i || c()),
            this
          );
        },
        fire: function () {
          return f.fireWith(this, arguments), this;
        },
        fired: function () {
          return !!o;
        },
      };
    return f;
  }),
    S.extend({
      Deferred: function (e) {
        var o = [
            [
              "notify",
              "progress",
              S.Callbacks("memory"),
              S.Callbacks("memory"),
              2,
            ],
            [
              "resolve",
              "done",
              S.Callbacks("once memory"),
              S.Callbacks("once memory"),
              0,
              "resolved",
            ],
            [
              "reject",
              "fail",
              S.Callbacks("once memory"),
              S.Callbacks("once memory"),
              1,
              "rejected",
            ],
          ],
          i = "pending",
          a = {
            state: function () {
              return i;
            },
            always: function () {
              return s.done(arguments).fail(arguments), this;
            },
            catch: function (e) {
              return a.then(null, e);
            },
            pipe: function () {
              var i = arguments;
              return S.Deferred(function (r) {
                S.each(o, function (e, t) {
                  var n = m(i[t[4]]) && i[t[4]];
                  s[t[1]](function () {
                    var e = n && n.apply(this, arguments);
                    e && m(e.promise)
                      ? e
                          .promise()
                          .progress(r.notify)
                          .done(r.resolve)
                          .fail(r.reject)
                      : r[t[0] + "With"](this, n ? [e] : arguments);
                  });
                }),
                  (i = null);
              }).promise();
            },
            then: function (t, n, r) {
              var u = 0;
              function l(i, o, a, s) {
                return function () {
                  var n = this,
                    r = arguments,
                    e = function () {
                      var e, t;
                      if (!(i < u)) {
                        if ((e = a.apply(n, r)) === o.promise())
                          throw new TypeError("Thenable self-resolution");
                        (t =
                          e &&
                          ("object" == typeof e || "function" == typeof e) &&
                          e.then),
                          m(t)
                            ? s
                              ? t.call(e, l(u, o, R, s), l(u, o, M, s))
                              : (u++,
                                t.call(
                                  e,
                                  l(u, o, R, s),
                                  l(u, o, M, s),
                                  l(u, o, R, o.notifyWith)
                                ))
                            : (a !== R && ((n = void 0), (r = [e])),
                              (s || o.resolveWith)(n, r));
                      }
                    },
                    t = s
                      ? e
                      : function () {
                          try {
                            e();
                          } catch (e) {
                            S.Deferred.exceptionHook &&
                              S.Deferred.exceptionHook(e, t.stackTrace),
                              u <= i + 1 &&
                                (a !== M && ((n = void 0), (r = [e])),
                                o.rejectWith(n, r));
                          }
                        };
                  i
                    ? t()
                    : (S.Deferred.getStackHook &&
                        (t.stackTrace = S.Deferred.getStackHook()),
                      C.setTimeout(t));
                };
              }
              return S.Deferred(function (e) {
                o[0][3].add(l(0, e, m(r) ? r : R, e.notifyWith)),
                  o[1][3].add(l(0, e, m(t) ? t : R)),
                  o[2][3].add(l(0, e, m(n) ? n : M));
              }).promise();
            },
            promise: function (e) {
              return null != e ? S.extend(e, a) : a;
            },
          },
          s = {};
        return (
          S.each(o, function (e, t) {
            var n = t[2],
              r = t[5];
            (a[t[1]] = n.add),
              r &&
                n.add(
                  function () {
                    i = r;
                  },
                  o[3 - e][2].disable,
                  o[3 - e][3].disable,
                  o[0][2].lock,
                  o[0][3].lock
                ),
              n.add(t[3].fire),
              (s[t[0]] = function () {
                return (
                  s[t[0] + "With"](this === s ? void 0 : this, arguments), this
                );
              }),
              (s[t[0] + "With"] = n.fireWith);
          }),
          a.promise(s),
          e && e.call(s, s),
          s
        );
      },
      when: function (e) {
        var n = arguments.length,
          t = n,
          r = Array(t),
          i = s.call(arguments),
          o = S.Deferred(),
          a = function (t) {
            return function (e) {
              (r[t] = this),
                (i[t] = 1 < arguments.length ? s.call(arguments) : e),
                --n || o.resolveWith(r, i);
            };
          };
        if (
          n <= 1 &&
          (I(e, o.done(a(t)).resolve, o.reject, !n),
          "pending" === o.state() || m(i[t] && i[t].then))
        )
          return o.then();
        while (t--) I(i[t], a(t), o.reject);
        return o.promise();
      },
    });
  var W = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
  (S.Deferred.exceptionHook = function (e, t) {
    C.console &&
      C.console.warn &&
      e &&
      W.test(e.name) &&
      C.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t);
  }),
    (S.readyException = function (e) {
      C.setTimeout(function () {
        throw e;
      });
    });
  var F = S.Deferred();
  function B() {
    E.removeEventListener("DOMContentLoaded", B),
      C.removeEventListener("load", B),
      S.ready();
  }
  (S.fn.ready = function (e) {
    return (
      F.then(e)["catch"](function (e) {
        S.readyException(e);
      }),
      this
    );
  }),
    S.extend({
      isReady: !1,
      readyWait: 1,
      ready: function (e) {
        (!0 === e ? --S.readyWait : S.isReady) ||
          ((S.isReady = !0) !== e && 0 < --S.readyWait) ||
          F.resolveWith(E, [S]);
      },
    }),
    (S.ready.then = F.then),
    "complete" === E.readyState ||
    ("loading" !== E.readyState && !E.documentElement.doScroll)
      ? C.setTimeout(S.ready)
      : (E.addEventListener("DOMContentLoaded", B),
        C.addEventListener("load", B));
  var $ = function (e, t, n, r, i, o, a) {
      var s = 0,
        u = e.length,
        l = null == n;
      if ("object" === w(n))
        for (s in ((i = !0), n)) $(e, t, s, n[s], !0, o, a);
      else if (
        void 0 !== r &&
        ((i = !0),
        m(r) || (a = !0),
        l &&
          (a
            ? (t.call(e, r), (t = null))
            : ((l = t),
              (t = function (e, t, n) {
                return l.call(S(e), n);
              }))),
        t)
      )
        for (; s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
      return i ? e : l ? t.call(e) : u ? t(e[0], n) : o;
    },
    _ = /^-ms-/,
    z = /-([a-z])/g;
  function U(e, t) {
    return t.toUpperCase();
  }
  function X(e) {
    return e.replace(_, "ms-").replace(z, U);
  }
  var V = function (e) {
    return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
  };
  function G() {
    this.expando = S.expando + G.uid++;
  }
  (G.uid = 1),
    (G.prototype = {
      cache: function (e) {
        var t = e[this.expando];
        return (
          t ||
            ((t = {}),
            V(e) &&
              (e.nodeType
                ? (e[this.expando] = t)
                : Object.defineProperty(e, this.expando, {
                    value: t,
                    configurable: !0,
                  }))),
          t
        );
      },
      set: function (e, t, n) {
        var r,
          i = this.cache(e);
        if ("string" == typeof t) i[X(t)] = n;
        else for (r in t) i[X(r)] = t[r];
        return i;
      },
      get: function (e, t) {
        return void 0 === t
          ? this.cache(e)
          : e[this.expando] && e[this.expando][X(t)];
      },
      access: function (e, t, n) {
        return void 0 === t || (t && "string" == typeof t && void 0 === n)
          ? this.get(e, t)
          : (this.set(e, t, n), void 0 !== n ? n : t);
      },
      remove: function (e, t) {
        var n,
          r = e[this.expando];
        if (void 0 !== r) {
          if (void 0 !== t) {
            n = (t = Array.isArray(t)
              ? t.map(X)
              : (t = X(t)) in r
              ? [t]
              : t.match(P) || []).length;
            while (n--) delete r[t[n]];
          }
          (void 0 === t || S.isEmptyObject(r)) &&
            (e.nodeType ? (e[this.expando] = void 0) : delete e[this.expando]);
        }
      },
      hasData: function (e) {
        var t = e[this.expando];
        return void 0 !== t && !S.isEmptyObject(t);
      },
    });
  var Y = new G(),
    Q = new G(),
    J = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    K = /[A-Z]/g;
  function Z(e, t, n) {
    var r, i;
    if (void 0 === n && 1 === e.nodeType)
      if (
        ((r = "data-" + t.replace(K, "-$&").toLowerCase()),
        "string" == typeof (n = e.getAttribute(r)))
      ) {
        try {
          n =
            "true" === (i = n) ||
            ("false" !== i &&
              ("null" === i
                ? null
                : i === +i + ""
                ? +i
                : J.test(i)
                ? JSON.parse(i)
                : i));
        } catch (e) {}
        Q.set(e, t, n);
      } else n = void 0;
    return n;
  }
  S.extend({
    hasData: function (e) {
      return Q.hasData(e) || Y.hasData(e);
    },
    data: function (e, t, n) {
      return Q.access(e, t, n);
    },
    removeData: function (e, t) {
      Q.remove(e, t);
    },
    _data: function (e, t, n) {
      return Y.access(e, t, n);
    },
    _removeData: function (e, t) {
      Y.remove(e, t);
    },
  }),
    S.fn.extend({
      data: function (n, e) {
        var t,
          r,
          i,
          o = this[0],
          a = o && o.attributes;
        if (void 0 === n) {
          if (
            this.length &&
            ((i = Q.get(o)), 1 === o.nodeType && !Y.get(o, "hasDataAttrs"))
          ) {
            t = a.length;
            while (t--)
              a[t] &&
                0 === (r = a[t].name).indexOf("data-") &&
                ((r = X(r.slice(5))), Z(o, r, i[r]));
            Y.set(o, "hasDataAttrs", !0);
          }
          return i;
        }
        return "object" == typeof n
          ? this.each(function () {
              Q.set(this, n);
            })
          : $(
              this,
              function (e) {
                var t;
                if (o && void 0 === e)
                  return void 0 !== (t = Q.get(o, n))
                    ? t
                    : void 0 !== (t = Z(o, n))
                    ? t
                    : void 0;
                this.each(function () {
                  Q.set(this, n, e);
                });
              },
              null,
              e,
              1 < arguments.length,
              null,
              !0
            );
      },
      removeData: function (e) {
        return this.each(function () {
          Q.remove(this, e);
        });
      },
    }),
    S.extend({
      queue: function (e, t, n) {
        var r;
        if (e)
          return (
            (t = (t || "fx") + "queue"),
            (r = Y.get(e, t)),
            n &&
              (!r || Array.isArray(n)
                ? (r = Y.access(e, t, S.makeArray(n)))
                : r.push(n)),
            r || []
          );
      },
      dequeue: function (e, t) {
        t = t || "fx";
        var n = S.queue(e, t),
          r = n.length,
          i = n.shift(),
          o = S._queueHooks(e, t);
        "inprogress" === i && ((i = n.shift()), r--),
          i &&
            ("fx" === t && n.unshift("inprogress"),
            delete o.stop,
            i.call(
              e,
              function () {
                S.dequeue(e, t);
              },
              o
            )),
          !r && o && o.empty.fire();
      },
      _queueHooks: function (e, t) {
        var n = t + "queueHooks";
        return (
          Y.get(e, n) ||
          Y.access(e, n, {
            empty: S.Callbacks("once memory").add(function () {
              Y.remove(e, [t + "queue", n]);
            }),
          })
        );
      },
    }),
    S.fn.extend({
      queue: function (t, n) {
        var e = 2;
        return (
          "string" != typeof t && ((n = t), (t = "fx"), e--),
          arguments.length < e
            ? S.queue(this[0], t)
            : void 0 === n
            ? this
            : this.each(function () {
                var e = S.queue(this, t, n);
                S._queueHooks(this, t),
                  "fx" === t && "inprogress" !== e[0] && S.dequeue(this, t);
              })
        );
      },
      dequeue: function (e) {
        return this.each(function () {
          S.dequeue(this, e);
        });
      },
      clearQueue: function (e) {
        return this.queue(e || "fx", []);
      },
      promise: function (e, t) {
        var n,
          r = 1,
          i = S.Deferred(),
          o = this,
          a = this.length,
          s = function () {
            --r || i.resolveWith(o, [o]);
          };
        "string" != typeof e && ((t = e), (e = void 0)), (e = e || "fx");
        while (a--)
          (n = Y.get(o[a], e + "queueHooks")) &&
            n.empty &&
            (r++, n.empty.add(s));
        return s(), i.promise(t);
      },
    });
  var ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    te = new RegExp("^(?:([+-])=|)(" + ee + ")([a-z%]*)$", "i"),
    ne = ["Top", "Right", "Bottom", "Left"],
    re = E.documentElement,
    ie = function (e) {
      return S.contains(e.ownerDocument, e);
    },
    oe = { composed: !0 };
  re.getRootNode &&
    (ie = function (e) {
      return (
        S.contains(e.ownerDocument, e) || e.getRootNode(oe) === e.ownerDocument
      );
    });
  var ae = function (e, t) {
    return (
      "none" === (e = t || e).style.display ||
      ("" === e.style.display && ie(e) && "none" === S.css(e, "display"))
    );
  };
  function se(e, t, n, r) {
    var i,
      o,
      a = 20,
      s = r
        ? function () {
            return r.cur();
          }
        : function () {
            return S.css(e, t, "");
          },
      u = s(),
      l = (n && n[3]) || (S.cssNumber[t] ? "" : "px"),
      c =
        e.nodeType &&
        (S.cssNumber[t] || ("px" !== l && +u)) &&
        te.exec(S.css(e, t));
    if (c && c[3] !== l) {
      (u /= 2), (l = l || c[3]), (c = +u || 1);
      while (a--)
        S.style(e, t, c + l),
          (1 - o) * (1 - (o = s() / u || 0.5)) <= 0 && (a = 0),
          (c /= o);
      (c *= 2), S.style(e, t, c + l), (n = n || []);
    }
    return (
      n &&
        ((c = +c || +u || 0),
        (i = n[1] ? c + (n[1] + 1) * n[2] : +n[2]),
        r && ((r.unit = l), (r.start = c), (r.end = i))),
      i
    );
  }
  var ue = {};
  function le(e, t) {
    for (var n, r, i, o, a, s, u, l = [], c = 0, f = e.length; c < f; c++)
      (r = e[c]).style &&
        ((n = r.style.display),
        t
          ? ("none" === n &&
              ((l[c] = Y.get(r, "display") || null),
              l[c] || (r.style.display = "")),
            "" === r.style.display &&
              ae(r) &&
              (l[c] =
                ((u = a = o = void 0),
                (a = (i = r).ownerDocument),
                (s = i.nodeName),
                (u = ue[s]) ||
                  ((o = a.body.appendChild(a.createElement(s))),
                  (u = S.css(o, "display")),
                  o.parentNode.removeChild(o),
                  "none" === u && (u = "block"),
                  (ue[s] = u)))))
          : "none" !== n && ((l[c] = "none"), Y.set(r, "display", n)));
    for (c = 0; c < f; c++) null != l[c] && (e[c].style.display = l[c]);
    return e;
  }
  S.fn.extend({
    show: function () {
      return le(this, !0);
    },
    hide: function () {
      return le(this);
    },
    toggle: function (e) {
      return "boolean" == typeof e
        ? e
          ? this.show()
          : this.hide()
        : this.each(function () {
            ae(this) ? S(this).show() : S(this).hide();
          });
    },
  });
  var ce,
    fe,
    pe = /^(?:checkbox|radio)$/i,
    de = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
    he = /^$|^module$|\/(?:java|ecma)script/i;
  (ce = E.createDocumentFragment().appendChild(E.createElement("div"))),
    (fe = E.createElement("input")).setAttribute("type", "radio"),
    fe.setAttribute("checked", "checked"),
    fe.setAttribute("name", "t"),
    ce.appendChild(fe),
    (y.checkClone = ce.cloneNode(!0).cloneNode(!0).lastChild.checked),
    (ce.innerHTML = "<textarea>x</textarea>"),
    (y.noCloneChecked = !!ce.cloneNode(!0).lastChild.defaultValue),
    (ce.innerHTML = "<option></option>"),
    (y.option = !!ce.lastChild);
  var ge = {
    thead: [1, "<table>", "</table>"],
    col: [2, "<table><colgroup>", "</colgroup></table>"],
    tr: [2, "<table><tbody>", "</tbody></table>"],
    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
    _default: [0, "", ""],
  };
  function ve(e, t) {
    var n;
    return (
      (n =
        "undefined" != typeof e.getElementsByTagName
          ? e.getElementsByTagName(t || "*")
          : "undefined" != typeof e.querySelectorAll
          ? e.querySelectorAll(t || "*")
          : []),
      void 0 === t || (t && A(e, t)) ? S.merge([e], n) : n
    );
  }
  function ye(e, t) {
    for (var n = 0, r = e.length; n < r; n++)
      Y.set(e[n], "globalEval", !t || Y.get(t[n], "globalEval"));
  }
  (ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead),
    (ge.th = ge.td),
    y.option ||
      (ge.optgroup = ge.option =
        [1, "<select multiple='multiple'>", "</select>"]);
  var me = /<|&#?\w+;/;
  function xe(e, t, n, r, i) {
    for (
      var o,
        a,
        s,
        u,
        l,
        c,
        f = t.createDocumentFragment(),
        p = [],
        d = 0,
        h = e.length;
      d < h;
      d++
    )
      if ((o = e[d]) || 0 === o)
        if ("object" === w(o)) S.merge(p, o.nodeType ? [o] : o);
        else if (me.test(o)) {
          (a = a || f.appendChild(t.createElement("div"))),
            (s = (de.exec(o) || ["", ""])[1].toLowerCase()),
            (u = ge[s] || ge._default),
            (a.innerHTML = u[1] + S.htmlPrefilter(o) + u[2]),
            (c = u[0]);
          while (c--) a = a.lastChild;
          S.merge(p, a.childNodes), ((a = f.firstChild).textContent = "");
        } else p.push(t.createTextNode(o));
    (f.textContent = ""), (d = 0);
    while ((o = p[d++]))
      if (r && -1 < S.inArray(o, r)) i && i.push(o);
      else if (
        ((l = ie(o)), (a = ve(f.appendChild(o), "script")), l && ye(a), n)
      ) {
        c = 0;
        while ((o = a[c++])) he.test(o.type || "") && n.push(o);
      }
    return f;
  }
  var be = /^key/,
    we = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
    Te = /^([^.]*)(?:\.(.+)|)/;
  function Ce() {
    return !0;
  }
  function Ee() {
    return !1;
  }
  function Se(e, t) {
    return (
      (e ===
        (function () {
          try {
            return E.activeElement;
          } catch (e) {}
        })()) ==
      ("focus" === t)
    );
  }
  function ke(e, t, n, r, i, o) {
    var a, s;
    if ("object" == typeof t) {
      for (s in ("string" != typeof n && ((r = r || n), (n = void 0)), t))
        ke(e, s, n, r, t[s], o);
      return e;
    }
    if (
      (null == r && null == i
        ? ((i = n), (r = n = void 0))
        : null == i &&
          ("string" == typeof n
            ? ((i = r), (r = void 0))
            : ((i = r), (r = n), (n = void 0))),
      !1 === i)
    )
      i = Ee;
    else if (!i) return e;
    return (
      1 === o &&
        ((a = i),
        ((i = function (e) {
          return S().off(e), a.apply(this, arguments);
        }).guid = a.guid || (a.guid = S.guid++))),
      e.each(function () {
        S.event.add(this, t, i, r, n);
      })
    );
  }
  function Ae(e, i, o) {
    o
      ? (Y.set(e, i, !1),
        S.event.add(e, i, {
          namespace: !1,
          handler: function (e) {
            var t,
              n,
              r = Y.get(this, i);
            if (1 & e.isTrigger && this[i]) {
              if (r.length)
                (S.event.special[i] || {}).delegateType && e.stopPropagation();
              else if (
                ((r = s.call(arguments)),
                Y.set(this, i, r),
                (t = o(this, i)),
                this[i](),
                r !== (n = Y.get(this, i)) || t ? Y.set(this, i, !1) : (n = {}),
                r !== n)
              )
                return (
                  e.stopImmediatePropagation(), e.preventDefault(), n.value
                );
            } else
              r.length &&
                (Y.set(this, i, {
                  value: S.event.trigger(
                    S.extend(r[0], S.Event.prototype),
                    r.slice(1),
                    this
                  ),
                }),
                e.stopImmediatePropagation());
          },
        }))
      : void 0 === Y.get(e, i) && S.event.add(e, i, Ce);
  }
  (S.event = {
    global: {},
    add: function (t, e, n, r, i) {
      var o,
        a,
        s,
        u,
        l,
        c,
        f,
        p,
        d,
        h,
        g,
        v = Y.get(t);
      if (V(t)) {
        n.handler && ((n = (o = n).handler), (i = o.selector)),
          i && S.find.matchesSelector(re, i),
          n.guid || (n.guid = S.guid++),
          (u = v.events) || (u = v.events = Object.create(null)),
          (a = v.handle) ||
            (a = v.handle =
              function (e) {
                return "undefined" != typeof S && S.event.triggered !== e.type
                  ? S.event.dispatch.apply(t, arguments)
                  : void 0;
              }),
          (l = (e = (e || "").match(P) || [""]).length);
        while (l--)
          (d = g = (s = Te.exec(e[l]) || [])[1]),
            (h = (s[2] || "").split(".").sort()),
            d &&
              ((f = S.event.special[d] || {}),
              (d = (i ? f.delegateType : f.bindType) || d),
              (f = S.event.special[d] || {}),
              (c = S.extend(
                {
                  type: d,
                  origType: g,
                  data: r,
                  handler: n,
                  guid: n.guid,
                  selector: i,
                  needsContext: i && S.expr.match.needsContext.test(i),
                  namespace: h.join("."),
                },
                o
              )),
              (p = u[d]) ||
                (((p = u[d] = []).delegateCount = 0),
                (f.setup && !1 !== f.setup.call(t, r, h, a)) ||
                  (t.addEventListener && t.addEventListener(d, a))),
              f.add &&
                (f.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)),
              i ? p.splice(p.delegateCount++, 0, c) : p.push(c),
              (S.event.global[d] = !0));
      }
    },
    remove: function (e, t, n, r, i) {
      var o,
        a,
        s,
        u,
        l,
        c,
        f,
        p,
        d,
        h,
        g,
        v = Y.hasData(e) && Y.get(e);
      if (v && (u = v.events)) {
        l = (t = (t || "").match(P) || [""]).length;
        while (l--)
          if (
            ((d = g = (s = Te.exec(t[l]) || [])[1]),
            (h = (s[2] || "").split(".").sort()),
            d)
          ) {
            (f = S.event.special[d] || {}),
              (p = u[(d = (r ? f.delegateType : f.bindType) || d)] || []),
              (s =
                s[2] &&
                new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)")),
              (a = o = p.length);
            while (o--)
              (c = p[o]),
                (!i && g !== c.origType) ||
                  (n && n.guid !== c.guid) ||
                  (s && !s.test(c.namespace)) ||
                  (r && r !== c.selector && ("**" !== r || !c.selector)) ||
                  (p.splice(o, 1),
                  c.selector && p.delegateCount--,
                  f.remove && f.remove.call(e, c));
            a &&
              !p.length &&
              ((f.teardown && !1 !== f.teardown.call(e, h, v.handle)) ||
                S.removeEvent(e, d, v.handle),
              delete u[d]);
          } else for (d in u) S.event.remove(e, d + t[l], n, r, !0);
        S.isEmptyObject(u) && Y.remove(e, "handle events");
      }
    },
    dispatch: function (e) {
      var t,
        n,
        r,
        i,
        o,
        a,
        s = new Array(arguments.length),
        u = S.event.fix(e),
        l = (Y.get(this, "events") || Object.create(null))[u.type] || [],
        c = S.event.special[u.type] || {};
      for (s[0] = u, t = 1; t < arguments.length; t++) s[t] = arguments[t];
      if (
        ((u.delegateTarget = this),
        !c.preDispatch || !1 !== c.preDispatch.call(this, u))
      ) {
        (a = S.event.handlers.call(this, u, l)), (t = 0);
        while ((i = a[t++]) && !u.isPropagationStopped()) {
          (u.currentTarget = i.elem), (n = 0);
          while ((o = i.handlers[n++]) && !u.isImmediatePropagationStopped())
            (u.rnamespace &&
              !1 !== o.namespace &&
              !u.rnamespace.test(o.namespace)) ||
              ((u.handleObj = o),
              (u.data = o.data),
              void 0 !==
                (r = (
                  (S.event.special[o.origType] || {}).handle || o.handler
                ).apply(i.elem, s)) &&
                !1 === (u.result = r) &&
                (u.preventDefault(), u.stopPropagation()));
        }
        return c.postDispatch && c.postDispatch.call(this, u), u.result;
      }
    },
    handlers: function (e, t) {
      var n,
        r,
        i,
        o,
        a,
        s = [],
        u = t.delegateCount,
        l = e.target;
      if (u && l.nodeType && !("click" === e.type && 1 <= e.button))
        for (; l !== this; l = l.parentNode || this)
          if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
            for (o = [], a = {}, n = 0; n < u; n++)
              void 0 === a[(i = (r = t[n]).selector + " ")] &&
                (a[i] = r.needsContext
                  ? -1 < S(i, this).index(l)
                  : S.find(i, this, null, [l]).length),
                a[i] && o.push(r);
            o.length && s.push({ elem: l, handlers: o });
          }
      return (
        (l = this), u < t.length && s.push({ elem: l, handlers: t.slice(u) }), s
      );
    },
    addProp: function (t, e) {
      Object.defineProperty(S.Event.prototype, t, {
        enumerable: !0,
        configurable: !0,
        get: m(e)
          ? function () {
              if (this.originalEvent) return e(this.originalEvent);
            }
          : function () {
              if (this.originalEvent) return this.originalEvent[t];
            },
        set: function (e) {
          Object.defineProperty(this, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: e,
          });
        },
      });
    },
    fix: function (e) {
      return e[S.expando] ? e : new S.Event(e);
    },
    special: {
      load: { noBubble: !0 },
      click: {
        setup: function (e) {
          var t = this || e;
          return (
            pe.test(t.type) && t.click && A(t, "input") && Ae(t, "click", Ce),
            !1
          );
        },
        trigger: function (e) {
          var t = this || e;
          return (
            pe.test(t.type) && t.click && A(t, "input") && Ae(t, "click"), !0
          );
        },
        _default: function (e) {
          var t = e.target;
          return (
            (pe.test(t.type) &&
              t.click &&
              A(t, "input") &&
              Y.get(t, "click")) ||
            A(t, "a")
          );
        },
      },
      beforeunload: {
        postDispatch: function (e) {
          void 0 !== e.result &&
            e.originalEvent &&
            (e.originalEvent.returnValue = e.result);
        },
      },
    },
  }),
    (S.removeEvent = function (e, t, n) {
      e.removeEventListener && e.removeEventListener(t, n);
    }),
    (S.Event = function (e, t) {
      if (!(this instanceof S.Event)) return new S.Event(e, t);
      e && e.type
        ? ((this.originalEvent = e),
          (this.type = e.type),
          (this.isDefaultPrevented =
            e.defaultPrevented ||
            (void 0 === e.defaultPrevented && !1 === e.returnValue)
              ? Ce
              : Ee),
          (this.target =
            e.target && 3 === e.target.nodeType
              ? e.target.parentNode
              : e.target),
          (this.currentTarget = e.currentTarget),
          (this.relatedTarget = e.relatedTarget))
        : (this.type = e),
        t && S.extend(this, t),
        (this.timeStamp = (e && e.timeStamp) || Date.now()),
        (this[S.expando] = !0);
    }),
    (S.Event.prototype = {
      constructor: S.Event,
      isDefaultPrevented: Ee,
      isPropagationStopped: Ee,
      isImmediatePropagationStopped: Ee,
      isSimulated: !1,
      preventDefault: function () {
        var e = this.originalEvent;
        (this.isDefaultPrevented = Ce),
          e && !this.isSimulated && e.preventDefault();
      },
      stopPropagation: function () {
        var e = this.originalEvent;
        (this.isPropagationStopped = Ce),
          e && !this.isSimulated && e.stopPropagation();
      },
      stopImmediatePropagation: function () {
        var e = this.originalEvent;
        (this.isImmediatePropagationStopped = Ce),
          e && !this.isSimulated && e.stopImmediatePropagation(),
          this.stopPropagation();
      },
    }),
    S.each(
      {
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        code: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function (e) {
          var t = e.button;
          return null == e.which && be.test(e.type)
            ? null != e.charCode
              ? e.charCode
              : e.keyCode
            : !e.which && void 0 !== t && we.test(e.type)
            ? 1 & t
              ? 1
              : 2 & t
              ? 3
              : 4 & t
              ? 2
              : 0
            : e.which;
        },
      },
      S.event.addProp
    ),
    S.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
      S.event.special[e] = {
        setup: function () {
          return Ae(this, e, Se), !1;
        },
        trigger: function () {
          return Ae(this, e), !0;
        },
        delegateType: t,
      };
    }),
    S.each(
      {
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout",
      },
      function (e, i) {
        S.event.special[e] = {
          delegateType: i,
          bindType: i,
          handle: function (e) {
            var t,
              n = e.relatedTarget,
              r = e.handleObj;
            return (
              (n && (n === this || S.contains(this, n))) ||
                ((e.type = r.origType),
                (t = r.handler.apply(this, arguments)),
                (e.type = i)),
              t
            );
          },
        };
      }
    ),
    S.fn.extend({
      on: function (e, t, n, r) {
        return ke(this, e, t, n, r);
      },
      one: function (e, t, n, r) {
        return ke(this, e, t, n, r, 1);
      },
      off: function (e, t, n) {
        var r, i;
        if (e && e.preventDefault && e.handleObj)
          return (
            (r = e.handleObj),
            S(e.delegateTarget).off(
              r.namespace ? r.origType + "." + r.namespace : r.origType,
              r.selector,
              r.handler
            ),
            this
          );
        if ("object" == typeof e) {
          for (i in e) this.off(i, t, e[i]);
          return this;
        }
        return (
          (!1 !== t && "function" != typeof t) || ((n = t), (t = void 0)),
          !1 === n && (n = Ee),
          this.each(function () {
            S.event.remove(this, e, n, t);
          })
        );
      },
    });
  var Ne = /<script|<style|<link/i,
    De = /checked\s*(?:[^=]|=\s*.checked.)/i,
    je = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
  function qe(e, t) {
    return (
      (A(e, "table") &&
        A(11 !== t.nodeType ? t : t.firstChild, "tr") &&
        S(e).children("tbody")[0]) ||
      e
    );
  }
  function Le(e) {
    return (e.type = (null !== e.getAttribute("type")) + "/" + e.type), e;
  }
  function He(e) {
    return (
      "true/" === (e.type || "").slice(0, 5)
        ? (e.type = e.type.slice(5))
        : e.removeAttribute("type"),
      e
    );
  }
  function Oe(e, t) {
    var n, r, i, o, a, s;
    if (1 === t.nodeType) {
      if (Y.hasData(e) && (s = Y.get(e).events))
        for (i in (Y.remove(t, "handle events"), s))
          for (n = 0, r = s[i].length; n < r; n++) S.event.add(t, i, s[i][n]);
      Q.hasData(e) && ((o = Q.access(e)), (a = S.extend({}, o)), Q.set(t, a));
    }
  }
  function Pe(n, r, i, o) {
    r = g(r);
    var e,
      t,
      a,
      s,
      u,
      l,
      c = 0,
      f = n.length,
      p = f - 1,
      d = r[0],
      h = m(d);
    if (h || (1 < f && "string" == typeof d && !y.checkClone && De.test(d)))
      return n.each(function (e) {
        var t = n.eq(e);
        h && (r[0] = d.call(this, e, t.html())), Pe(t, r, i, o);
      });
    if (
      f &&
      ((t = (e = xe(r, n[0].ownerDocument, !1, n, o)).firstChild),
      1 === e.childNodes.length && (e = t),
      t || o)
    ) {
      for (s = (a = S.map(ve(e, "script"), Le)).length; c < f; c++)
        (u = e),
          c !== p &&
            ((u = S.clone(u, !0, !0)), s && S.merge(a, ve(u, "script"))),
          i.call(n[c], u, c);
      if (s)
        for (l = a[a.length - 1].ownerDocument, S.map(a, He), c = 0; c < s; c++)
          (u = a[c]),
            he.test(u.type || "") &&
              !Y.access(u, "globalEval") &&
              S.contains(l, u) &&
              (u.src && "module" !== (u.type || "").toLowerCase()
                ? S._evalUrl &&
                  !u.noModule &&
                  S._evalUrl(
                    u.src,
                    { nonce: u.nonce || u.getAttribute("nonce") },
                    l
                  )
                : b(u.textContent.replace(je, ""), u, l));
    }
    return n;
  }
  function Re(e, t, n) {
    for (var r, i = t ? S.filter(t, e) : e, o = 0; null != (r = i[o]); o++)
      n || 1 !== r.nodeType || S.cleanData(ve(r)),
        r.parentNode &&
          (n && ie(r) && ye(ve(r, "script")), r.parentNode.removeChild(r));
    return e;
  }
  S.extend({
    htmlPrefilter: function (e) {
      return e;
    },
    clone: function (e, t, n) {
      var r,
        i,
        o,
        a,
        s,
        u,
        l,
        c = e.cloneNode(!0),
        f = ie(e);
      if (
        !(
          y.noCloneChecked ||
          (1 !== e.nodeType && 11 !== e.nodeType) ||
          S.isXMLDoc(e)
        )
      )
        for (a = ve(c), r = 0, i = (o = ve(e)).length; r < i; r++)
          (s = o[r]),
            (u = a[r]),
            void 0,
            "input" === (l = u.nodeName.toLowerCase()) && pe.test(s.type)
              ? (u.checked = s.checked)
              : ("input" !== l && "textarea" !== l) ||
                (u.defaultValue = s.defaultValue);
      if (t)
        if (n)
          for (o = o || ve(e), a = a || ve(c), r = 0, i = o.length; r < i; r++)
            Oe(o[r], a[r]);
        else Oe(e, c);
      return (
        0 < (a = ve(c, "script")).length && ye(a, !f && ve(e, "script")), c
      );
    },
    cleanData: function (e) {
      for (var t, n, r, i = S.event.special, o = 0; void 0 !== (n = e[o]); o++)
        if (V(n)) {
          if ((t = n[Y.expando])) {
            if (t.events)
              for (r in t.events)
                i[r] ? S.event.remove(n, r) : S.removeEvent(n, r, t.handle);
            n[Y.expando] = void 0;
          }
          n[Q.expando] && (n[Q.expando] = void 0);
        }
    },
  }),
    S.fn.extend({
      detach: function (e) {
        return Re(this, e, !0);
      },
      remove: function (e) {
        return Re(this, e);
      },
      text: function (e) {
        return $(
          this,
          function (e) {
            return void 0 === e
              ? S.text(this)
              : this.empty().each(function () {
                  (1 !== this.nodeType &&
                    11 !== this.nodeType &&
                    9 !== this.nodeType) ||
                    (this.textContent = e);
                });
          },
          null,
          e,
          arguments.length
        );
      },
      append: function () {
        return Pe(this, arguments, function (e) {
          (1 !== this.nodeType &&
            11 !== this.nodeType &&
            9 !== this.nodeType) ||
            qe(this, e).appendChild(e);
        });
      },
      prepend: function () {
        return Pe(this, arguments, function (e) {
          if (
            1 === this.nodeType ||
            11 === this.nodeType ||
            9 === this.nodeType
          ) {
            var t = qe(this, e);
            t.insertBefore(e, t.firstChild);
          }
        });
      },
      before: function () {
        return Pe(this, arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this);
        });
      },
      after: function () {
        return Pe(this, arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
        });
      },
      empty: function () {
        for (var e, t = 0; null != (e = this[t]); t++)
          1 === e.nodeType && (S.cleanData(ve(e, !1)), (e.textContent = ""));
        return this;
      },
      clone: function (e, t) {
        return (
          (e = null != e && e),
          (t = null == t ? e : t),
          this.map(function () {
            return S.clone(this, e, t);
          })
        );
      },
      html: function (e) {
        return $(
          this,
          function (e) {
            var t = this[0] || {},
              n = 0,
              r = this.length;
            if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
            if (
              "string" == typeof e &&
              !Ne.test(e) &&
              !ge[(de.exec(e) || ["", ""])[1].toLowerCase()]
            ) {
              e = S.htmlPrefilter(e);
              try {
                for (; n < r; n++)
                  1 === (t = this[n] || {}).nodeType &&
                    (S.cleanData(ve(t, !1)), (t.innerHTML = e));
                t = 0;
              } catch (e) {}
            }
            t && this.empty().append(e);
          },
          null,
          e,
          arguments.length
        );
      },
      replaceWith: function () {
        var n = [];
        return Pe(
          this,
          arguments,
          function (e) {
            var t = this.parentNode;
            S.inArray(this, n) < 0 &&
              (S.cleanData(ve(this)), t && t.replaceChild(e, this));
          },
          n
        );
      },
    }),
    S.each(
      {
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith",
      },
      function (e, a) {
        S.fn[e] = function (e) {
          for (var t, n = [], r = S(e), i = r.length - 1, o = 0; o <= i; o++)
            (t = o === i ? this : this.clone(!0)),
              S(r[o])[a](t),
              u.apply(n, t.get());
          return this.pushStack(n);
        };
      }
    );
  var Me = new RegExp("^(" + ee + ")(?!px)[a-z%]+$", "i"),
    Ie = function (e) {
      var t = e.ownerDocument.defaultView;
      return (t && t.opener) || (t = C), t.getComputedStyle(e);
    },
    We = function (e, t, n) {
      var r,
        i,
        o = {};
      for (i in t) (o[i] = e.style[i]), (e.style[i] = t[i]);
      for (i in ((r = n.call(e)), t)) e.style[i] = o[i];
      return r;
    },
    Fe = new RegExp(ne.join("|"), "i");
  function Be(e, t, n) {
    var r,
      i,
      o,
      a,
      s = e.style;
    return (
      (n = n || Ie(e)) &&
        ("" !== (a = n.getPropertyValue(t) || n[t]) ||
          ie(e) ||
          (a = S.style(e, t)),
        !y.pixelBoxStyles() &&
          Me.test(a) &&
          Fe.test(t) &&
          ((r = s.width),
          (i = s.minWidth),
          (o = s.maxWidth),
          (s.minWidth = s.maxWidth = s.width = a),
          (a = n.width),
          (s.width = r),
          (s.minWidth = i),
          (s.maxWidth = o))),
      void 0 !== a ? a + "" : a
    );
  }
  function $e(e, t) {
    return {
      get: function () {
        if (!e()) return (this.get = t).apply(this, arguments);
        delete this.get;
      },
    };
  }
  !(function () {
    function e() {
      if (l) {
        (u.style.cssText =
          "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
          (l.style.cssText =
            "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
          re.appendChild(u).appendChild(l);
        var e = C.getComputedStyle(l);
        (n = "1%" !== e.top),
          (s = 12 === t(e.marginLeft)),
          (l.style.right = "60%"),
          (o = 36 === t(e.right)),
          (r = 36 === t(e.width)),
          (l.style.position = "absolute"),
          (i = 12 === t(l.offsetWidth / 3)),
          re.removeChild(u),
          (l = null);
      }
    }
    function t(e) {
      return Math.round(parseFloat(e));
    }
    var n,
      r,
      i,
      o,
      a,
      s,
      u = E.createElement("div"),
      l = E.createElement("div");
    l.style &&
      ((l.style.backgroundClip = "content-box"),
      (l.cloneNode(!0).style.backgroundClip = ""),
      (y.clearCloneStyle = "content-box" === l.style.backgroundClip),
      S.extend(y, {
        boxSizingReliable: function () {
          return e(), r;
        },
        pixelBoxStyles: function () {
          return e(), o;
        },
        pixelPosition: function () {
          return e(), n;
        },
        reliableMarginLeft: function () {
          return e(), s;
        },
        scrollboxSize: function () {
          return e(), i;
        },
        reliableTrDimensions: function () {
          var e, t, n, r;
          return (
            null == a &&
              ((e = E.createElement("table")),
              (t = E.createElement("tr")),
              (n = E.createElement("div")),
              (e.style.cssText = "position:absolute;left:-11111px"),
              (t.style.height = "1px"),
              (n.style.height = "9px"),
              re.appendChild(e).appendChild(t).appendChild(n),
              (r = C.getComputedStyle(t)),
              (a = 3 < parseInt(r.height)),
              re.removeChild(e)),
            a
          );
        },
      }));
  })();
  var _e = ["Webkit", "Moz", "ms"],
    ze = E.createElement("div").style,
    Ue = {};
  function Xe(e) {
    var t = S.cssProps[e] || Ue[e];
    return (
      t ||
      (e in ze
        ? e
        : (Ue[e] =
            (function (e) {
              var t = e[0].toUpperCase() + e.slice(1),
                n = _e.length;
              while (n--) if ((e = _e[n] + t) in ze) return e;
            })(e) || e))
    );
  }
  var Ve = /^(none|table(?!-c[ea]).+)/,
    Ge = /^--/,
    Ye = { position: "absolute", visibility: "hidden", display: "block" },
    Qe = { letterSpacing: "0", fontWeight: "400" };
  function Je(e, t, n) {
    var r = te.exec(t);
    return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t;
  }
  function Ke(e, t, n, r, i, o) {
    var a = "width" === t ? 1 : 0,
      s = 0,
      u = 0;
    if (n === (r ? "border" : "content")) return 0;
    for (; a < 4; a += 2)
      "margin" === n && (u += S.css(e, n + ne[a], !0, i)),
        r
          ? ("content" === n && (u -= S.css(e, "padding" + ne[a], !0, i)),
            "margin" !== n &&
              (u -= S.css(e, "border" + ne[a] + "Width", !0, i)))
          : ((u += S.css(e, "padding" + ne[a], !0, i)),
            "padding" !== n
              ? (u += S.css(e, "border" + ne[a] + "Width", !0, i))
              : (s += S.css(e, "border" + ne[a] + "Width", !0, i)));
    return (
      !r &&
        0 <= o &&
        (u +=
          Math.max(
            0,
            Math.ceil(
              e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - 0.5
            )
          ) || 0),
      u
    );
  }
  function Ze(e, t, n) {
    var r = Ie(e),
      i =
        (!y.boxSizingReliable() || n) &&
        "border-box" === S.css(e, "boxSizing", !1, r),
      o = i,
      a = Be(e, t, r),
      s = "offset" + t[0].toUpperCase() + t.slice(1);
    if (Me.test(a)) {
      if (!n) return a;
      a = "auto";
    }
    return (
      ((!y.boxSizingReliable() && i) ||
        (!y.reliableTrDimensions() && A(e, "tr")) ||
        "auto" === a ||
        (!parseFloat(a) && "inline" === S.css(e, "display", !1, r))) &&
        e.getClientRects().length &&
        ((i = "border-box" === S.css(e, "boxSizing", !1, r)),
        (o = s in e) && (a = e[s])),
      (a = parseFloat(a) || 0) +
        Ke(e, t, n || (i ? "border" : "content"), o, r, a) +
        "px"
    );
  }
  function et(e, t, n, r, i) {
    return new et.prototype.init(e, t, n, r, i);
  }
  S.extend({
    cssHooks: {
      opacity: {
        get: function (e, t) {
          if (t) {
            var n = Be(e, "opacity");
            return "" === n ? "1" : n;
          }
        },
      },
    },
    cssNumber: {
      animationIterationCount: !0,
      columnCount: !0,
      fillOpacity: !0,
      flexGrow: !0,
      flexShrink: !0,
      fontWeight: !0,
      gridArea: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnStart: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowStart: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
    },
    cssProps: {},
    style: function (e, t, n, r) {
      if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
        var i,
          o,
          a,
          s = X(t),
          u = Ge.test(t),
          l = e.style;
        if (
          (u || (t = Xe(s)), (a = S.cssHooks[t] || S.cssHooks[s]), void 0 === n)
        )
          return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
        "string" === (o = typeof n) &&
          (i = te.exec(n)) &&
          i[1] &&
          ((n = se(e, t, i)), (o = "number")),
          null != n &&
            n == n &&
            ("number" !== o ||
              u ||
              (n += (i && i[3]) || (S.cssNumber[s] ? "" : "px")),
            y.clearCloneStyle ||
              "" !== n ||
              0 !== t.indexOf("background") ||
              (l[t] = "inherit"),
            (a && "set" in a && void 0 === (n = a.set(e, n, r))) ||
              (u ? l.setProperty(t, n) : (l[t] = n)));
      }
    },
    css: function (e, t, n, r) {
      var i,
        o,
        a,
        s = X(t);
      return (
        Ge.test(t) || (t = Xe(s)),
        (a = S.cssHooks[t] || S.cssHooks[s]) &&
          "get" in a &&
          (i = a.get(e, !0, n)),
        void 0 === i && (i = Be(e, t, r)),
        "normal" === i && t in Qe && (i = Qe[t]),
        "" === n || n
          ? ((o = parseFloat(i)), !0 === n || isFinite(o) ? o || 0 : i)
          : i
      );
    },
  }),
    S.each(["height", "width"], function (e, u) {
      S.cssHooks[u] = {
        get: function (e, t, n) {
          if (t)
            return !Ve.test(S.css(e, "display")) ||
              (e.getClientRects().length && e.getBoundingClientRect().width)
              ? Ze(e, u, n)
              : We(e, Ye, function () {
                  return Ze(e, u, n);
                });
        },
        set: function (e, t, n) {
          var r,
            i = Ie(e),
            o = !y.scrollboxSize() && "absolute" === i.position,
            a = (o || n) && "border-box" === S.css(e, "boxSizing", !1, i),
            s = n ? Ke(e, u, n, a, i) : 0;
          return (
            a &&
              o &&
              (s -= Math.ceil(
                e["offset" + u[0].toUpperCase() + u.slice(1)] -
                  parseFloat(i[u]) -
                  Ke(e, u, "border", !1, i) -
                  0.5
              )),
            s &&
              (r = te.exec(t)) &&
              "px" !== (r[3] || "px") &&
              ((e.style[u] = t), (t = S.css(e, u))),
            Je(0, t, s)
          );
        },
      };
    }),
    (S.cssHooks.marginLeft = $e(y.reliableMarginLeft, function (e, t) {
      if (t)
        return (
          (parseFloat(Be(e, "marginLeft")) ||
            e.getBoundingClientRect().left -
              We(e, { marginLeft: 0 }, function () {
                return e.getBoundingClientRect().left;
              })) + "px"
        );
    })),
    S.each({ margin: "", padding: "", border: "Width" }, function (i, o) {
      (S.cssHooks[i + o] = {
        expand: function (e) {
          for (
            var t = 0, n = {}, r = "string" == typeof e ? e.split(" ") : [e];
            t < 4;
            t++
          )
            n[i + ne[t] + o] = r[t] || r[t - 2] || r[0];
          return n;
        },
      }),
        "margin" !== i && (S.cssHooks[i + o].set = Je);
    }),
    S.fn.extend({
      css: function (e, t) {
        return $(
          this,
          function (e, t, n) {
            var r,
              i,
              o = {},
              a = 0;
            if (Array.isArray(t)) {
              for (r = Ie(e), i = t.length; a < i; a++)
                o[t[a]] = S.css(e, t[a], !1, r);
              return o;
            }
            return void 0 !== n ? S.style(e, t, n) : S.css(e, t);
          },
          e,
          t,
          1 < arguments.length
        );
      },
    }),
    (((S.Tween = et).prototype = {
      constructor: et,
      init: function (e, t, n, r, i, o) {
        (this.elem = e),
          (this.prop = n),
          (this.easing = i || S.easing._default),
          (this.options = t),
          (this.start = this.now = this.cur()),
          (this.end = r),
          (this.unit = o || (S.cssNumber[n] ? "" : "px"));
      },
      cur: function () {
        var e = et.propHooks[this.prop];
        return e && e.get ? e.get(this) : et.propHooks._default.get(this);
      },
      run: function (e) {
        var t,
          n = et.propHooks[this.prop];
        return (
          this.options.duration
            ? (this.pos = t =
                S.easing[this.easing](
                  e,
                  this.options.duration * e,
                  0,
                  1,
                  this.options.duration
                ))
            : (this.pos = t = e),
          (this.now = (this.end - this.start) * t + this.start),
          this.options.step &&
            this.options.step.call(this.elem, this.now, this),
          n && n.set ? n.set(this) : et.propHooks._default.set(this),
          this
        );
      },
    }).init.prototype = et.prototype),
    ((et.propHooks = {
      _default: {
        get: function (e) {
          var t;
          return 1 !== e.elem.nodeType ||
            (null != e.elem[e.prop] && null == e.elem.style[e.prop])
            ? e.elem[e.prop]
            : (t = S.css(e.elem, e.prop, "")) && "auto" !== t
            ? t
            : 0;
        },
        set: function (e) {
          S.fx.step[e.prop]
            ? S.fx.step[e.prop](e)
            : 1 !== e.elem.nodeType ||
              (!S.cssHooks[e.prop] && null == e.elem.style[Xe(e.prop)])
            ? (e.elem[e.prop] = e.now)
            : S.style(e.elem, e.prop, e.now + e.unit);
        },
      },
    }).scrollTop = et.propHooks.scrollLeft =
      {
        set: function (e) {
          e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
        },
      }),
    (S.easing = {
      linear: function (e) {
        return e;
      },
      swing: function (e) {
        return 0.5 - Math.cos(e * Math.PI) / 2;
      },
      _default: "swing",
    }),
    (S.fx = et.prototype.init),
    (S.fx.step = {});
  var tt,
    nt,
    rt,
    it,
    ot = /^(?:toggle|show|hide)$/,
    at = /queueHooks$/;
  function st() {
    nt &&
      (!1 === E.hidden && C.requestAnimationFrame
        ? C.requestAnimationFrame(st)
        : C.setTimeout(st, S.fx.interval),
      S.fx.tick());
  }
  function ut() {
    return (
      C.setTimeout(function () {
        tt = void 0;
      }),
      (tt = Date.now())
    );
  }
  function lt(e, t) {
    var n,
      r = 0,
      i = { height: e };
    for (t = t ? 1 : 0; r < 4; r += 2 - t)
      i["margin" + (n = ne[r])] = i["padding" + n] = e;
    return t && (i.opacity = i.width = e), i;
  }
  function ct(e, t, n) {
    for (
      var r,
        i = (ft.tweeners[t] || []).concat(ft.tweeners["*"]),
        o = 0,
        a = i.length;
      o < a;
      o++
    )
      if ((r = i[o].call(n, t, e))) return r;
  }
  function ft(o, e, t) {
    var n,
      a,
      r = 0,
      i = ft.prefilters.length,
      s = S.Deferred().always(function () {
        delete u.elem;
      }),
      u = function () {
        if (a) return !1;
        for (
          var e = tt || ut(),
            t = Math.max(0, l.startTime + l.duration - e),
            n = 1 - (t / l.duration || 0),
            r = 0,
            i = l.tweens.length;
          r < i;
          r++
        )
          l.tweens[r].run(n);
        return (
          s.notifyWith(o, [l, n, t]),
          n < 1 && i
            ? t
            : (i || s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l]), !1)
        );
      },
      l = s.promise({
        elem: o,
        props: S.extend({}, e),
        opts: S.extend(!0, { specialEasing: {}, easing: S.easing._default }, t),
        originalProperties: e,
        originalOptions: t,
        startTime: tt || ut(),
        duration: t.duration,
        tweens: [],
        createTween: function (e, t) {
          var n = S.Tween(
            o,
            l.opts,
            e,
            t,
            l.opts.specialEasing[e] || l.opts.easing
          );
          return l.tweens.push(n), n;
        },
        stop: function (e) {
          var t = 0,
            n = e ? l.tweens.length : 0;
          if (a) return this;
          for (a = !0; t < n; t++) l.tweens[t].run(1);
          return (
            e
              ? (s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l, e]))
              : s.rejectWith(o, [l, e]),
            this
          );
        },
      }),
      c = l.props;
    for (
      !(function (e, t) {
        var n, r, i, o, a;
        for (n in e)
          if (
            ((i = t[(r = X(n))]),
            (o = e[n]),
            Array.isArray(o) && ((i = o[1]), (o = e[n] = o[0])),
            n !== r && ((e[r] = o), delete e[n]),
            (a = S.cssHooks[r]) && ("expand" in a))
          )
            for (n in ((o = a.expand(o)), delete e[r], o))
              (n in e) || ((e[n] = o[n]), (t[n] = i));
          else t[r] = i;
      })(c, l.opts.specialEasing);
      r < i;
      r++
    )
      if ((n = ft.prefilters[r].call(l, o, c, l.opts)))
        return (
          m(n.stop) &&
            (S._queueHooks(l.elem, l.opts.queue).stop = n.stop.bind(n)),
          n
        );
    return (
      S.map(c, ct, l),
      m(l.opts.start) && l.opts.start.call(o, l),
      l
        .progress(l.opts.progress)
        .done(l.opts.done, l.opts.complete)
        .fail(l.opts.fail)
        .always(l.opts.always),
      S.fx.timer(S.extend(u, { elem: o, anim: l, queue: l.opts.queue })),
      l
    );
  }
  (S.Animation = S.extend(ft, {
    tweeners: {
      "*": [
        function (e, t) {
          var n = this.createTween(e, t);
          return se(n.elem, e, te.exec(t), n), n;
        },
      ],
    },
    tweener: function (e, t) {
      m(e) ? ((t = e), (e = ["*"])) : (e = e.match(P));
      for (var n, r = 0, i = e.length; r < i; r++)
        (n = e[r]),
          (ft.tweeners[n] = ft.tweeners[n] || []),
          ft.tweeners[n].unshift(t);
    },
    prefilters: [
      function (e, t, n) {
        var r,
          i,
          o,
          a,
          s,
          u,
          l,
          c,
          f = "width" in t || "height" in t,
          p = this,
          d = {},
          h = e.style,
          g = e.nodeType && ae(e),
          v = Y.get(e, "fxshow");
        for (r in (n.queue ||
          (null == (a = S._queueHooks(e, "fx")).unqueued &&
            ((a.unqueued = 0),
            (s = a.empty.fire),
            (a.empty.fire = function () {
              a.unqueued || s();
            })),
          a.unqueued++,
          p.always(function () {
            p.always(function () {
              a.unqueued--, S.queue(e, "fx").length || a.empty.fire();
            });
          })),
        t))
          if (((i = t[r]), ot.test(i))) {
            if (
              (delete t[r],
              (o = o || "toggle" === i),
              i === (g ? "hide" : "show"))
            ) {
              if ("show" !== i || !v || void 0 === v[r]) continue;
              g = !0;
            }
            d[r] = (v && v[r]) || S.style(e, r);
          }
        if ((u = !S.isEmptyObject(t)) || !S.isEmptyObject(d))
          for (r in (f &&
            1 === e.nodeType &&
            ((n.overflow = [h.overflow, h.overflowX, h.overflowY]),
            null == (l = v && v.display) && (l = Y.get(e, "display")),
            "none" === (c = S.css(e, "display")) &&
              (l
                ? (c = l)
                : (le([e], !0),
                  (l = e.style.display || l),
                  (c = S.css(e, "display")),
                  le([e]))),
            ("inline" === c || ("inline-block" === c && null != l)) &&
              "none" === S.css(e, "float") &&
              (u ||
                (p.done(function () {
                  h.display = l;
                }),
                null == l && ((c = h.display), (l = "none" === c ? "" : c))),
              (h.display = "inline-block"))),
          n.overflow &&
            ((h.overflow = "hidden"),
            p.always(function () {
              (h.overflow = n.overflow[0]),
                (h.overflowX = n.overflow[1]),
                (h.overflowY = n.overflow[2]);
            })),
          (u = !1),
          d))
            u ||
              (v
                ? "hidden" in v && (g = v.hidden)
                : (v = Y.access(e, "fxshow", { display: l })),
              o && (v.hidden = !g),
              g && le([e], !0),
              p.done(function () {
                for (r in (g || le([e]), Y.remove(e, "fxshow"), d))
                  S.style(e, r, d[r]);
              })),
              (u = ct(g ? v[r] : 0, r, p)),
              r in v ||
                ((v[r] = u.start), g && ((u.end = u.start), (u.start = 0)));
      },
    ],
    prefilter: function (e, t) {
      t ? ft.prefilters.unshift(e) : ft.prefilters.push(e);
    },
  })),
    (S.speed = function (e, t, n) {
      var r =
        e && "object" == typeof e
          ? S.extend({}, e)
          : {
              complete: n || (!n && t) || (m(e) && e),
              duration: e,
              easing: (n && t) || (t && !m(t) && t),
            };
      return (
        S.fx.off
          ? (r.duration = 0)
          : "number" != typeof r.duration &&
            (r.duration in S.fx.speeds
              ? (r.duration = S.fx.speeds[r.duration])
              : (r.duration = S.fx.speeds._default)),
        (null != r.queue && !0 !== r.queue) || (r.queue = "fx"),
        (r.old = r.complete),
        (r.complete = function () {
          m(r.old) && r.old.call(this), r.queue && S.dequeue(this, r.queue);
        }),
        r
      );
    }),
    S.fn.extend({
      fadeTo: function (e, t, n, r) {
        return this.filter(ae)
          .css("opacity", 0)
          .show()
          .end()
          .animate({ opacity: t }, e, n, r);
      },
      animate: function (t, e, n, r) {
        var i = S.isEmptyObject(t),
          o = S.speed(e, n, r),
          a = function () {
            var e = ft(this, S.extend({}, t), o);
            (i || Y.get(this, "finish")) && e.stop(!0);
          };
        return (
          (a.finish = a),
          i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
        );
      },
      stop: function (i, e, o) {
        var a = function (e) {
          var t = e.stop;
          delete e.stop, t(o);
        };
        return (
          "string" != typeof i && ((o = e), (e = i), (i = void 0)),
          e && this.queue(i || "fx", []),
          this.each(function () {
            var e = !0,
              t = null != i && i + "queueHooks",
              n = S.timers,
              r = Y.get(this);
            if (t) r[t] && r[t].stop && a(r[t]);
            else for (t in r) r[t] && r[t].stop && at.test(t) && a(r[t]);
            for (t = n.length; t--; )
              n[t].elem !== this ||
                (null != i && n[t].queue !== i) ||
                (n[t].anim.stop(o), (e = !1), n.splice(t, 1));
            (!e && o) || S.dequeue(this, i);
          })
        );
      },
      finish: function (a) {
        return (
          !1 !== a && (a = a || "fx"),
          this.each(function () {
            var e,
              t = Y.get(this),
              n = t[a + "queue"],
              r = t[a + "queueHooks"],
              i = S.timers,
              o = n ? n.length : 0;
            for (
              t.finish = !0,
                S.queue(this, a, []),
                r && r.stop && r.stop.call(this, !0),
                e = i.length;
              e--;

            )
              i[e].elem === this &&
                i[e].queue === a &&
                (i[e].anim.stop(!0), i.splice(e, 1));
            for (e = 0; e < o; e++)
              n[e] && n[e].finish && n[e].finish.call(this);
            delete t.finish;
          })
        );
      },
    }),
    S.each(["toggle", "show", "hide"], function (e, r) {
      var i = S.fn[r];
      S.fn[r] = function (e, t, n) {
        return null == e || "boolean" == typeof e
          ? i.apply(this, arguments)
          : this.animate(lt(r, !0), e, t, n);
      };
    }),
    S.each(
      {
        slideDown: lt("show"),
        slideUp: lt("hide"),
        slideToggle: lt("toggle"),
        fadeIn: { opacity: "show" },
        fadeOut: { opacity: "hide" },
        fadeToggle: { opacity: "toggle" },
      },
      function (e, r) {
        S.fn[e] = function (e, t, n) {
          return this.animate(r, e, t, n);
        };
      }
    ),
    (S.timers = []),
    (S.fx.tick = function () {
      var e,
        t = 0,
        n = S.timers;
      for (tt = Date.now(); t < n.length; t++)
        (e = n[t])() || n[t] !== e || n.splice(t--, 1);
      n.length || S.fx.stop(), (tt = void 0);
    }),
    (S.fx.timer = function (e) {
      S.timers.push(e), S.fx.start();
    }),
    (S.fx.interval = 13),
    (S.fx.start = function () {
      nt || ((nt = !0), st());
    }),
    (S.fx.stop = function () {
      nt = null;
    }),
    (S.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
    (S.fn.delay = function (r, e) {
      return (
        (r = (S.fx && S.fx.speeds[r]) || r),
        (e = e || "fx"),
        this.queue(e, function (e, t) {
          var n = C.setTimeout(e, r);
          t.stop = function () {
            C.clearTimeout(n);
          };
        })
      );
    }),
    (rt = E.createElement("input")),
    (it = E.createElement("select").appendChild(E.createElement("option"))),
    (rt.type = "checkbox"),
    (y.checkOn = "" !== rt.value),
    (y.optSelected = it.selected),
    ((rt = E.createElement("input")).value = "t"),
    (rt.type = "radio"),
    (y.radioValue = "t" === rt.value);
  var pt,
    dt = S.expr.attrHandle;
  S.fn.extend({
    attr: function (e, t) {
      return $(this, S.attr, e, t, 1 < arguments.length);
    },
    removeAttr: function (e) {
      return this.each(function () {
        S.removeAttr(this, e);
      });
    },
  }),
    S.extend({
      attr: function (e, t, n) {
        var r,
          i,
          o = e.nodeType;
        if (3 !== o && 8 !== o && 2 !== o)
          return "undefined" == typeof e.getAttribute
            ? S.prop(e, t, n)
            : ((1 === o && S.isXMLDoc(e)) ||
                (i =
                  S.attrHooks[t.toLowerCase()] ||
                  (S.expr.match.bool.test(t) ? pt : void 0)),
              void 0 !== n
                ? null === n
                  ? void S.removeAttr(e, t)
                  : i && "set" in i && void 0 !== (r = i.set(e, n, t))
                  ? r
                  : (e.setAttribute(t, n + ""), n)
                : i && "get" in i && null !== (r = i.get(e, t))
                ? r
                : null == (r = S.find.attr(e, t))
                ? void 0
                : r);
      },
      attrHooks: {
        type: {
          set: function (e, t) {
            if (!y.radioValue && "radio" === t && A(e, "input")) {
              var n = e.value;
              return e.setAttribute("type", t), n && (e.value = n), t;
            }
          },
        },
      },
      removeAttr: function (e, t) {
        var n,
          r = 0,
          i = t && t.match(P);
        if (i && 1 === e.nodeType) while ((n = i[r++])) e.removeAttribute(n);
      },
    }),
    (pt = {
      set: function (e, t, n) {
        return !1 === t ? S.removeAttr(e, n) : e.setAttribute(n, n), n;
      },
    }),
    S.each(S.expr.match.bool.source.match(/\w+/g), function (e, t) {
      var a = dt[t] || S.find.attr;
      dt[t] = function (e, t, n) {
        var r,
          i,
          o = t.toLowerCase();
        return (
          n ||
            ((i = dt[o]),
            (dt[o] = r),
            (r = null != a(e, t, n) ? o : null),
            (dt[o] = i)),
          r
        );
      };
    });
  var ht = /^(?:input|select|textarea|button)$/i,
    gt = /^(?:a|area)$/i;
  function vt(e) {
    return (e.match(P) || []).join(" ");
  }
  function yt(e) {
    return (e.getAttribute && e.getAttribute("class")) || "";
  }
  function mt(e) {
    return Array.isArray(e) ? e : ("string" == typeof e && e.match(P)) || [];
  }
  S.fn.extend({
    prop: function (e, t) {
      return $(this, S.prop, e, t, 1 < arguments.length);
    },
    removeProp: function (e) {
      return this.each(function () {
        delete this[S.propFix[e] || e];
      });
    },
  }),
    S.extend({
      prop: function (e, t, n) {
        var r,
          i,
          o = e.nodeType;
        if (3 !== o && 8 !== o && 2 !== o)
          return (
            (1 === o && S.isXMLDoc(e)) ||
              ((t = S.propFix[t] || t), (i = S.propHooks[t])),
            void 0 !== n
              ? i && "set" in i && void 0 !== (r = i.set(e, n, t))
                ? r
                : (e[t] = n)
              : i && "get" in i && null !== (r = i.get(e, t))
              ? r
              : e[t]
          );
      },
      propHooks: {
        tabIndex: {
          get: function (e) {
            var t = S.find.attr(e, "tabindex");
            return t
              ? parseInt(t, 10)
              : ht.test(e.nodeName) || (gt.test(e.nodeName) && e.href)
              ? 0
              : -1;
          },
        },
      },
      propFix: { for: "htmlFor", class: "className" },
    }),
    y.optSelected ||
      (S.propHooks.selected = {
        get: function (e) {
          var t = e.parentNode;
          return t && t.parentNode && t.parentNode.selectedIndex, null;
        },
        set: function (e) {
          var t = e.parentNode;
          t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
        },
      }),
    S.each(
      [
        "tabIndex",
        "readOnly",
        "maxLength",
        "cellSpacing",
        "cellPadding",
        "rowSpan",
        "colSpan",
        "useMap",
        "frameBorder",
        "contentEditable",
      ],
      function () {
        S.propFix[this.toLowerCase()] = this;
      }
    ),
    S.fn.extend({
      addClass: function (t) {
        var e,
          n,
          r,
          i,
          o,
          a,
          s,
          u = 0;
        if (m(t))
          return this.each(function (e) {
            S(this).addClass(t.call(this, e, yt(this)));
          });
        if ((e = mt(t)).length)
          while ((n = this[u++]))
            if (((i = yt(n)), (r = 1 === n.nodeType && " " + vt(i) + " "))) {
              a = 0;
              while ((o = e[a++]))
                r.indexOf(" " + o + " ") < 0 && (r += o + " ");
              i !== (s = vt(r)) && n.setAttribute("class", s);
            }
        return this;
      },
      removeClass: function (t) {
        var e,
          n,
          r,
          i,
          o,
          a,
          s,
          u = 0;
        if (m(t))
          return this.each(function (e) {
            S(this).removeClass(t.call(this, e, yt(this)));
          });
        if (!arguments.length) return this.attr("class", "");
        if ((e = mt(t)).length)
          while ((n = this[u++]))
            if (((i = yt(n)), (r = 1 === n.nodeType && " " + vt(i) + " "))) {
              a = 0;
              while ((o = e[a++]))
                while (-1 < r.indexOf(" " + o + " "))
                  r = r.replace(" " + o + " ", " ");
              i !== (s = vt(r)) && n.setAttribute("class", s);
            }
        return this;
      },
      toggleClass: function (i, t) {
        var o = typeof i,
          a = "string" === o || Array.isArray(i);
        return "boolean" == typeof t && a
          ? t
            ? this.addClass(i)
            : this.removeClass(i)
          : m(i)
          ? this.each(function (e) {
              S(this).toggleClass(i.call(this, e, yt(this), t), t);
            })
          : this.each(function () {
              var e, t, n, r;
              if (a) {
                (t = 0), (n = S(this)), (r = mt(i));
                while ((e = r[t++]))
                  n.hasClass(e) ? n.removeClass(e) : n.addClass(e);
              } else (void 0 !== i && "boolean" !== o) || ((e = yt(this)) && Y.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || !1 === i ? "" : Y.get(this, "__className__") || ""));
            });
      },
      hasClass: function (e) {
        var t,
          n,
          r = 0;
        t = " " + e + " ";
        while ((n = this[r++]))
          if (1 === n.nodeType && -1 < (" " + vt(yt(n)) + " ").indexOf(t))
            return !0;
        return !1;
      },
    });
  var xt = /\r/g;
  S.fn.extend({
    val: function (n) {
      var r,
        e,
        i,
        t = this[0];
      return arguments.length
        ? ((i = m(n)),
          this.each(function (e) {
            var t;
            1 === this.nodeType &&
              (null == (t = i ? n.call(this, e, S(this).val()) : n)
                ? (t = "")
                : "number" == typeof t
                ? (t += "")
                : Array.isArray(t) &&
                  (t = S.map(t, function (e) {
                    return null == e ? "" : e + "";
                  })),
              ((r =
                S.valHooks[this.type] ||
                S.valHooks[this.nodeName.toLowerCase()]) &&
                "set" in r &&
                void 0 !== r.set(this, t, "value")) ||
                (this.value = t));
          }))
        : t
        ? (r = S.valHooks[t.type] || S.valHooks[t.nodeName.toLowerCase()]) &&
          "get" in r &&
          void 0 !== (e = r.get(t, "value"))
          ? e
          : "string" == typeof (e = t.value)
          ? e.replace(xt, "")
          : null == e
          ? ""
          : e
        : void 0;
    },
  }),
    S.extend({
      valHooks: {
        option: {
          get: function (e) {
            var t = S.find.attr(e, "value");
            return null != t ? t : vt(S.text(e));
          },
        },
        select: {
          get: function (e) {
            var t,
              n,
              r,
              i = e.options,
              o = e.selectedIndex,
              a = "select-one" === e.type,
              s = a ? null : [],
              u = a ? o + 1 : i.length;
            for (r = o < 0 ? u : a ? o : 0; r < u; r++)
              if (
                ((n = i[r]).selected || r === o) &&
                !n.disabled &&
                (!n.parentNode.disabled || !A(n.parentNode, "optgroup"))
              ) {
                if (((t = S(n).val()), a)) return t;
                s.push(t);
              }
            return s;
          },
          set: function (e, t) {
            var n,
              r,
              i = e.options,
              o = S.makeArray(t),
              a = i.length;
            while (a--)
              ((r = i[a]).selected =
                -1 < S.inArray(S.valHooks.option.get(r), o)) && (n = !0);
            return n || (e.selectedIndex = -1), o;
          },
        },
      },
    }),
    S.each(["radio", "checkbox"], function () {
      (S.valHooks[this] = {
        set: function (e, t) {
          if (Array.isArray(t))
            return (e.checked = -1 < S.inArray(S(e).val(), t));
        },
      }),
        y.checkOn ||
          (S.valHooks[this].get = function (e) {
            return null === e.getAttribute("value") ? "on" : e.value;
          });
    }),
    (y.focusin = "onfocusin" in C);
  var bt = /^(?:focusinfocus|focusoutblur)$/,
    wt = function (e) {
      e.stopPropagation();
    };
  S.extend(S.event, {
    trigger: function (e, t, n, r) {
      var i,
        o,
        a,
        s,
        u,
        l,
        c,
        f,
        p = [n || E],
        d = v.call(e, "type") ? e.type : e,
        h = v.call(e, "namespace") ? e.namespace.split(".") : [];
      if (
        ((o = f = a = n = n || E),
        3 !== n.nodeType &&
          8 !== n.nodeType &&
          !bt.test(d + S.event.triggered) &&
          (-1 < d.indexOf(".") && ((d = (h = d.split(".")).shift()), h.sort()),
          (u = d.indexOf(":") < 0 && "on" + d),
          ((e = e[S.expando]
            ? e
            : new S.Event(d, "object" == typeof e && e)).isTrigger = r ? 2 : 3),
          (e.namespace = h.join(".")),
          (e.rnamespace = e.namespace
            ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)")
            : null),
          (e.result = void 0),
          e.target || (e.target = n),
          (t = null == t ? [e] : S.makeArray(t, [e])),
          (c = S.event.special[d] || {}),
          r || !c.trigger || !1 !== c.trigger.apply(n, t)))
      ) {
        if (!r && !c.noBubble && !x(n)) {
          for (
            s = c.delegateType || d, bt.test(s + d) || (o = o.parentNode);
            o;
            o = o.parentNode
          )
            p.push(o), (a = o);
          a === (n.ownerDocument || E) &&
            p.push(a.defaultView || a.parentWindow || C);
        }
        i = 0;
        while ((o = p[i++]) && !e.isPropagationStopped())
          (f = o),
            (e.type = 1 < i ? s : c.bindType || d),
            (l =
              (Y.get(o, "events") || Object.create(null))[e.type] &&
              Y.get(o, "handle")) && l.apply(o, t),
            (l = u && o[u]) &&
              l.apply &&
              V(o) &&
              ((e.result = l.apply(o, t)),
              !1 === e.result && e.preventDefault());
        return (
          (e.type = d),
          r ||
            e.isDefaultPrevented() ||
            (c._default && !1 !== c._default.apply(p.pop(), t)) ||
            !V(n) ||
            (u &&
              m(n[d]) &&
              !x(n) &&
              ((a = n[u]) && (n[u] = null),
              (S.event.triggered = d),
              e.isPropagationStopped() && f.addEventListener(d, wt),
              n[d](),
              e.isPropagationStopped() && f.removeEventListener(d, wt),
              (S.event.triggered = void 0),
              a && (n[u] = a))),
          e.result
        );
      }
    },
    simulate: function (e, t, n) {
      var r = S.extend(new S.Event(), n, { type: e, isSimulated: !0 });
      S.event.trigger(r, null, t);
    },
  }),
    S.fn.extend({
      trigger: function (e, t) {
        return this.each(function () {
          S.event.trigger(e, t, this);
        });
      },
      triggerHandler: function (e, t) {
        var n = this[0];
        if (n) return S.event.trigger(e, t, n, !0);
      },
    }),
    y.focusin ||
      S.each({ focus: "focusin", blur: "focusout" }, function (n, r) {
        var i = function (e) {
          S.event.simulate(r, e.target, S.event.fix(e));
        };
        S.event.special[r] = {
          setup: function () {
            var e = this.ownerDocument || this.document || this,
              t = Y.access(e, r);
            t || e.addEventListener(n, i, !0), Y.access(e, r, (t || 0) + 1);
          },
          teardown: function () {
            var e = this.ownerDocument || this.document || this,
              t = Y.access(e, r) - 1;
            t
              ? Y.access(e, r, t)
              : (e.removeEventListener(n, i, !0), Y.remove(e, r));
          },
        };
      });
  var Tt = C.location,
    Ct = { guid: Date.now() },
    Et = /\?/;
  S.parseXML = function (e) {
    var t;
    if (!e || "string" != typeof e) return null;
    try {
      t = new C.DOMParser().parseFromString(e, "text/xml");
    } catch (e) {
      t = void 0;
    }
    return (
      (t && !t.getElementsByTagName("parsererror").length) ||
        S.error("Invalid XML: " + e),
      t
    );
  };
  var St = /\[\]$/,
    kt = /\r?\n/g,
    At = /^(?:submit|button|image|reset|file)$/i,
    Nt = /^(?:input|select|textarea|keygen)/i;
  function Dt(n, e, r, i) {
    var t;
    if (Array.isArray(e))
      S.each(e, function (e, t) {
        r || St.test(n)
          ? i(n, t)
          : Dt(
              n + "[" + ("object" == typeof t && null != t ? e : "") + "]",
              t,
              r,
              i
            );
      });
    else if (r || "object" !== w(e)) i(n, e);
    else for (t in e) Dt(n + "[" + t + "]", e[t], r, i);
  }
  (S.param = function (e, t) {
    var n,
      r = [],
      i = function (e, t) {
        var n = m(t) ? t() : t;
        r[r.length] =
          encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n);
      };
    if (null == e) return "";
    if (Array.isArray(e) || (e.jquery && !S.isPlainObject(e)))
      S.each(e, function () {
        i(this.name, this.value);
      });
    else for (n in e) Dt(n, e[n], t, i);
    return r.join("&");
  }),
    S.fn.extend({
      serialize: function () {
        return S.param(this.serializeArray());
      },
      serializeArray: function () {
        return this.map(function () {
          var e = S.prop(this, "elements");
          return e ? S.makeArray(e) : this;
        })
          .filter(function () {
            var e = this.type;
            return (
              this.name &&
              !S(this).is(":disabled") &&
              Nt.test(this.nodeName) &&
              !At.test(e) &&
              (this.checked || !pe.test(e))
            );
          })
          .map(function (e, t) {
            var n = S(this).val();
            return null == n
              ? null
              : Array.isArray(n)
              ? S.map(n, function (e) {
                  return { name: t.name, value: e.replace(kt, "\r\n") };
                })
              : { name: t.name, value: n.replace(kt, "\r\n") };
          })
          .get();
      },
    });
  var jt = /%20/g,
    qt = /#.*$/,
    Lt = /([?&])_=[^&]*/,
    Ht = /^(.*?):[ \t]*([^\r\n]*)$/gm,
    Ot = /^(?:GET|HEAD)$/,
    Pt = /^\/\//,
    Rt = {},
    Mt = {},
    It = "*/".concat("*"),
    Wt = E.createElement("a");
  function Ft(o) {
    return function (e, t) {
      "string" != typeof e && ((t = e), (e = "*"));
      var n,
        r = 0,
        i = e.toLowerCase().match(P) || [];
      if (m(t))
        while ((n = i[r++]))
          "+" === n[0]
            ? ((n = n.slice(1) || "*"), (o[n] = o[n] || []).unshift(t))
            : (o[n] = o[n] || []).push(t);
    };
  }
  function Bt(t, i, o, a) {
    var s = {},
      u = t === Mt;
    function l(e) {
      var r;
      return (
        (s[e] = !0),
        S.each(t[e] || [], function (e, t) {
          var n = t(i, o, a);
          return "string" != typeof n || u || s[n]
            ? u
              ? !(r = n)
              : void 0
            : (i.dataTypes.unshift(n), l(n), !1);
        }),
        r
      );
    }
    return l(i.dataTypes[0]) || (!s["*"] && l("*"));
  }
  function $t(e, t) {
    var n,
      r,
      i = S.ajaxSettings.flatOptions || {};
    for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
    return r && S.extend(!0, e, r), e;
  }
  (Wt.href = Tt.href),
    S.extend({
      active: 0,
      lastModified: {},
      etag: {},
      ajaxSettings: {
        url: Tt.href,
        type: "GET",
        isLocal:
          /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
            Tt.protocol
          ),
        global: !0,
        processData: !0,
        async: !0,
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        accepts: {
          "*": It,
          text: "text/plain",
          html: "text/html",
          xml: "application/xml, text/xml",
          json: "application/json, text/javascript",
        },
        contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
        responseFields: {
          xml: "responseXML",
          text: "responseText",
          json: "responseJSON",
        },
        converters: {
          "* text": String,
          "text html": !0,
          "text json": JSON.parse,
          "text xml": S.parseXML,
        },
        flatOptions: { url: !0, context: !0 },
      },
      ajaxSetup: function (e, t) {
        return t ? $t($t(e, S.ajaxSettings), t) : $t(S.ajaxSettings, e);
      },
      ajaxPrefilter: Ft(Rt),
      ajaxTransport: Ft(Mt),
      ajax: function (e, t) {
        "object" == typeof e && ((t = e), (e = void 0)), (t = t || {});
        var c,
          f,
          p,
          n,
          d,
          r,
          h,
          g,
          i,
          o,
          v = S.ajaxSetup({}, t),
          y = v.context || v,
          m = v.context && (y.nodeType || y.jquery) ? S(y) : S.event,
          x = S.Deferred(),
          b = S.Callbacks("once memory"),
          w = v.statusCode || {},
          a = {},
          s = {},
          u = "canceled",
          T = {
            readyState: 0,
            getResponseHeader: function (e) {
              var t;
              if (h) {
                if (!n) {
                  n = {};
                  while ((t = Ht.exec(p)))
                    n[t[1].toLowerCase() + " "] = (
                      n[t[1].toLowerCase() + " "] || []
                    ).concat(t[2]);
                }
                t = n[e.toLowerCase() + " "];
              }
              return null == t ? null : t.join(", ");
            },
            getAllResponseHeaders: function () {
              return h ? p : null;
            },
            setRequestHeader: function (e, t) {
              return (
                null == h &&
                  ((e = s[e.toLowerCase()] = s[e.toLowerCase()] || e),
                  (a[e] = t)),
                this
              );
            },
            overrideMimeType: function (e) {
              return null == h && (v.mimeType = e), this;
            },
            statusCode: function (e) {
              var t;
              if (e)
                if (h) T.always(e[T.status]);
                else for (t in e) w[t] = [w[t], e[t]];
              return this;
            },
            abort: function (e) {
              var t = e || u;
              return c && c.abort(t), l(0, t), this;
            },
          };
        if (
          (x.promise(T),
          (v.url = ((e || v.url || Tt.href) + "").replace(
            Pt,
            Tt.protocol + "//"
          )),
          (v.type = t.method || t.type || v.method || v.type),
          (v.dataTypes = (v.dataType || "*").toLowerCase().match(P) || [""]),
          null == v.crossDomain)
        ) {
          r = E.createElement("a");
          try {
            (r.href = v.url),
              (r.href = r.href),
              (v.crossDomain =
                Wt.protocol + "//" + Wt.host != r.protocol + "//" + r.host);
          } catch (e) {
            v.crossDomain = !0;
          }
        }
        if (
          (v.data &&
            v.processData &&
            "string" != typeof v.data &&
            (v.data = S.param(v.data, v.traditional)),
          Bt(Rt, v, t, T),
          h)
        )
          return T;
        for (i in ((g = S.event && v.global) &&
          0 == S.active++ &&
          S.event.trigger("ajaxStart"),
        (v.type = v.type.toUpperCase()),
        (v.hasContent = !Ot.test(v.type)),
        (f = v.url.replace(qt, "")),
        v.hasContent
          ? v.data &&
            v.processData &&
            0 ===
              (v.contentType || "").indexOf(
                "application/x-www-form-urlencoded"
              ) &&
            (v.data = v.data.replace(jt, "+"))
          : ((o = v.url.slice(f.length)),
            v.data &&
              (v.processData || "string" == typeof v.data) &&
              ((f += (Et.test(f) ? "&" : "?") + v.data), delete v.data),
            !1 === v.cache &&
              ((f = f.replace(Lt, "$1")),
              (o = (Et.test(f) ? "&" : "?") + "_=" + Ct.guid++ + o)),
            (v.url = f + o)),
        v.ifModified &&
          (S.lastModified[f] &&
            T.setRequestHeader("If-Modified-Since", S.lastModified[f]),
          S.etag[f] && T.setRequestHeader("If-None-Match", S.etag[f])),
        ((v.data && v.hasContent && !1 !== v.contentType) || t.contentType) &&
          T.setRequestHeader("Content-Type", v.contentType),
        T.setRequestHeader(
          "Accept",
          v.dataTypes[0] && v.accepts[v.dataTypes[0]]
            ? v.accepts[v.dataTypes[0]] +
                ("*" !== v.dataTypes[0] ? ", " + It + "; q=0.01" : "")
            : v.accepts["*"]
        ),
        v.headers))
          T.setRequestHeader(i, v.headers[i]);
        if (v.beforeSend && (!1 === v.beforeSend.call(y, T, v) || h))
          return T.abort();
        if (
          ((u = "abort"),
          b.add(v.complete),
          T.done(v.success),
          T.fail(v.error),
          (c = Bt(Mt, v, t, T)))
        ) {
          if (((T.readyState = 1), g && m.trigger("ajaxSend", [T, v]), h))
            return T;
          v.async &&
            0 < v.timeout &&
            (d = C.setTimeout(function () {
              T.abort("timeout");
            }, v.timeout));
          try {
            (h = !1), c.send(a, l);
          } catch (e) {
            if (h) throw e;
            l(-1, e);
          }
        } else l(-1, "No Transport");
        function l(e, t, n, r) {
          var i,
            o,
            a,
            s,
            u,
            l = t;
          h ||
            ((h = !0),
            d && C.clearTimeout(d),
            (c = void 0),
            (p = r || ""),
            (T.readyState = 0 < e ? 4 : 0),
            (i = (200 <= e && e < 300) || 304 === e),
            n &&
              (s = (function (e, t, n) {
                var r,
                  i,
                  o,
                  a,
                  s = e.contents,
                  u = e.dataTypes;
                while ("*" === u[0])
                  u.shift(),
                    void 0 === r &&
                      (r = e.mimeType || t.getResponseHeader("Content-Type"));
                if (r)
                  for (i in s)
                    if (s[i] && s[i].test(r)) {
                      u.unshift(i);
                      break;
                    }
                if (u[0] in n) o = u[0];
                else {
                  for (i in n) {
                    if (!u[0] || e.converters[i + " " + u[0]]) {
                      o = i;
                      break;
                    }
                    a || (a = i);
                  }
                  o = o || a;
                }
                if (o) return o !== u[0] && u.unshift(o), n[o];
              })(v, T, n)),
            !i &&
              -1 < S.inArray("script", v.dataTypes) &&
              (v.converters["text script"] = function () {}),
            (s = (function (e, t, n, r) {
              var i,
                o,
                a,
                s,
                u,
                l = {},
                c = e.dataTypes.slice();
              if (c[1])
                for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
              o = c.shift();
              while (o)
                if (
                  (e.responseFields[o] && (n[e.responseFields[o]] = t),
                  !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
                  (u = o),
                  (o = c.shift()))
                )
                  if ("*" === o) o = u;
                  else if ("*" !== u && u !== o) {
                    if (!(a = l[u + " " + o] || l["* " + o]))
                      for (i in l)
                        if (
                          (s = i.split(" "))[1] === o &&
                          (a = l[u + " " + s[0]] || l["* " + s[0]])
                        ) {
                          !0 === a
                            ? (a = l[i])
                            : !0 !== l[i] && ((o = s[0]), c.unshift(s[1]));
                          break;
                        }
                    if (!0 !== a)
                      if (a && e["throws"]) t = a(t);
                      else
                        try {
                          t = a(t);
                        } catch (e) {
                          return {
                            state: "parsererror",
                            error: a
                              ? e
                              : "No conversion from " + u + " to " + o,
                          };
                        }
                  }
              return { state: "success", data: t };
            })(v, s, T, i)),
            i
              ? (v.ifModified &&
                  ((u = T.getResponseHeader("Last-Modified")) &&
                    (S.lastModified[f] = u),
                  (u = T.getResponseHeader("etag")) && (S.etag[f] = u)),
                204 === e || "HEAD" === v.type
                  ? (l = "nocontent")
                  : 304 === e
                  ? (l = "notmodified")
                  : ((l = s.state), (o = s.data), (i = !(a = s.error))))
              : ((a = l), (!e && l) || ((l = "error"), e < 0 && (e = 0))),
            (T.status = e),
            (T.statusText = (t || l) + ""),
            i ? x.resolveWith(y, [o, l, T]) : x.rejectWith(y, [T, l, a]),
            T.statusCode(w),
            (w = void 0),
            g && m.trigger(i ? "ajaxSuccess" : "ajaxError", [T, v, i ? o : a]),
            b.fireWith(y, [T, l]),
            g &&
              (m.trigger("ajaxComplete", [T, v]),
              --S.active || S.event.trigger("ajaxStop")));
        }
        return T;
      },
      getJSON: function (e, t, n) {
        return S.get(e, t, n, "json");
      },
      getScript: function (e, t) {
        return S.get(e, void 0, t, "script");
      },
    }),
    S.each(["get", "post"], function (e, i) {
      S[i] = function (e, t, n, r) {
        return (
          m(t) && ((r = r || n), (n = t), (t = void 0)),
          S.ajax(
            S.extend(
              { url: e, type: i, dataType: r, data: t, success: n },
              S.isPlainObject(e) && e
            )
          )
        );
      };
    }),
    S.ajaxPrefilter(function (e) {
      var t;
      for (t in e.headers)
        "content-type" === t.toLowerCase() &&
          (e.contentType = e.headers[t] || "");
    }),
    (S._evalUrl = function (e, t, n) {
      return S.ajax({
        url: e,
        type: "GET",
        dataType: "script",
        cache: !0,
        async: !1,
        global: !1,
        converters: { "text script": function () {} },
        dataFilter: function (e) {
          S.globalEval(e, t, n);
        },
      });
    }),
    S.fn.extend({
      wrapAll: function (e) {
        var t;
        return (
          this[0] &&
            (m(e) && (e = e.call(this[0])),
            (t = S(e, this[0].ownerDocument).eq(0).clone(!0)),
            this[0].parentNode && t.insertBefore(this[0]),
            t
              .map(function () {
                var e = this;
                while (e.firstElementChild) e = e.firstElementChild;
                return e;
              })
              .append(this)),
          this
        );
      },
      wrapInner: function (n) {
        return m(n)
          ? this.each(function (e) {
              S(this).wrapInner(n.call(this, e));
            })
          : this.each(function () {
              var e = S(this),
                t = e.contents();
              t.length ? t.wrapAll(n) : e.append(n);
            });
      },
      wrap: function (t) {
        var n = m(t);
        return this.each(function (e) {
          S(this).wrapAll(n ? t.call(this, e) : t);
        });
      },
      unwrap: function (e) {
        return (
          this.parent(e)
            .not("body")
            .each(function () {
              S(this).replaceWith(this.childNodes);
            }),
          this
        );
      },
    }),
    (S.expr.pseudos.hidden = function (e) {
      return !S.expr.pseudos.visible(e);
    }),
    (S.expr.pseudos.visible = function (e) {
      return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
    }),
    (S.ajaxSettings.xhr = function () {
      try {
        return new C.XMLHttpRequest();
      } catch (e) {}
    });
  var _t = { 0: 200, 1223: 204 },
    zt = S.ajaxSettings.xhr();
  (y.cors = !!zt && "withCredentials" in zt),
    (y.ajax = zt = !!zt),
    S.ajaxTransport(function (i) {
      var o, a;
      if (y.cors || (zt && !i.crossDomain))
        return {
          send: function (e, t) {
            var n,
              r = i.xhr();
            if (
              (r.open(i.type, i.url, i.async, i.username, i.password),
              i.xhrFields)
            )
              for (n in i.xhrFields) r[n] = i.xhrFields[n];
            for (n in (i.mimeType &&
              r.overrideMimeType &&
              r.overrideMimeType(i.mimeType),
            i.crossDomain ||
              e["X-Requested-With"] ||
              (e["X-Requested-With"] = "XMLHttpRequest"),
            e))
              r.setRequestHeader(n, e[n]);
            (o = function (e) {
              return function () {
                o &&
                  ((o =
                    a =
                    r.onload =
                    r.onerror =
                    r.onabort =
                    r.ontimeout =
                    r.onreadystatechange =
                      null),
                  "abort" === e
                    ? r.abort()
                    : "error" === e
                    ? "number" != typeof r.status
                      ? t(0, "error")
                      : t(r.status, r.statusText)
                    : t(
                        _t[r.status] || r.status,
                        r.statusText,
                        "text" !== (r.responseType || "text") ||
                          "string" != typeof r.responseText
                          ? { binary: r.response }
                          : { text: r.responseText },
                        r.getAllResponseHeaders()
                      ));
              };
            }),
              (r.onload = o()),
              (a = r.onerror = r.ontimeout = o("error")),
              void 0 !== r.onabort
                ? (r.onabort = a)
                : (r.onreadystatechange = function () {
                    4 === r.readyState &&
                      C.setTimeout(function () {
                        o && a();
                      });
                  }),
              (o = o("abort"));
            try {
              r.send((i.hasContent && i.data) || null);
            } catch (e) {
              if (o) throw e;
            }
          },
          abort: function () {
            o && o();
          },
        };
    }),
    S.ajaxPrefilter(function (e) {
      e.crossDomain && (e.contents.script = !1);
    }),
    S.ajaxSetup({
      accepts: {
        script:
          "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
      },
      contents: { script: /\b(?:java|ecma)script\b/ },
      converters: {
        "text script": function (e) {
          return S.globalEval(e), e;
        },
      },
    }),
    S.ajaxPrefilter("script", function (e) {
      void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
    }),
    S.ajaxTransport("script", function (n) {
      var r, i;
      if (n.crossDomain || n.scriptAttrs)
        return {
          send: function (e, t) {
            (r = S("<script>")
              .attr(n.scriptAttrs || {})
              .prop({ charset: n.scriptCharset, src: n.url })
              .on(
                "load error",
                (i = function (e) {
                  r.remove(),
                    (i = null),
                    e && t("error" === e.type ? 404 : 200, e.type);
                })
              )),
              E.head.appendChild(r[0]);
          },
          abort: function () {
            i && i();
          },
        };
    });
  var Ut,
    Xt = [],
    Vt = /(=)\?(?=&|$)|\?\?/;
  S.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function () {
      var e = Xt.pop() || S.expando + "_" + Ct.guid++;
      return (this[e] = !0), e;
    },
  }),
    S.ajaxPrefilter("json jsonp", function (e, t, n) {
      var r,
        i,
        o,
        a =
          !1 !== e.jsonp &&
          (Vt.test(e.url)
            ? "url"
            : "string" == typeof e.data &&
              0 ===
                (e.contentType || "").indexOf(
                  "application/x-www-form-urlencoded"
                ) &&
              Vt.test(e.data) &&
              "data");
      if (a || "jsonp" === e.dataTypes[0])
        return (
          (r = e.jsonpCallback =
            m(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback),
          a
            ? (e[a] = e[a].replace(Vt, "$1" + r))
            : !1 !== e.jsonp &&
              (e.url += (Et.test(e.url) ? "&" : "?") + e.jsonp + "=" + r),
          (e.converters["script json"] = function () {
            return o || S.error(r + " was not called"), o[0];
          }),
          (e.dataTypes[0] = "json"),
          (i = C[r]),
          (C[r] = function () {
            o = arguments;
          }),
          n.always(function () {
            void 0 === i ? S(C).removeProp(r) : (C[r] = i),
              e[r] && ((e.jsonpCallback = t.jsonpCallback), Xt.push(r)),
              o && m(i) && i(o[0]),
              (o = i = void 0);
          }),
          "script"
        );
    }),
    (y.createHTMLDocument =
      (((Ut = E.implementation.createHTMLDocument("").body).innerHTML =
        "<form></form><form></form>"),
      2 === Ut.childNodes.length)),
    (S.parseHTML = function (e, t, n) {
      return "string" != typeof e
        ? []
        : ("boolean" == typeof t && ((n = t), (t = !1)),
          t ||
            (y.createHTMLDocument
              ? (((r = (t =
                  E.implementation.createHTMLDocument("")).createElement(
                  "base"
                )).href = E.location.href),
                t.head.appendChild(r))
              : (t = E)),
          (o = !n && []),
          (i = N.exec(e))
            ? [t.createElement(i[1])]
            : ((i = xe([e], t, o)),
              o && o.length && S(o).remove(),
              S.merge([], i.childNodes)));
      var r, i, o;
    }),
    (S.fn.load = function (e, t, n) {
      var r,
        i,
        o,
        a = this,
        s = e.indexOf(" ");
      return (
        -1 < s && ((r = vt(e.slice(s))), (e = e.slice(0, s))),
        m(t)
          ? ((n = t), (t = void 0))
          : t && "object" == typeof t && (i = "POST"),
        0 < a.length &&
          S.ajax({ url: e, type: i || "GET", dataType: "html", data: t })
            .done(function (e) {
              (o = arguments),
                a.html(r ? S("<div>").append(S.parseHTML(e)).find(r) : e);
            })
            .always(
              n &&
                function (e, t) {
                  a.each(function () {
                    n.apply(this, o || [e.responseText, t, e]);
                  });
                }
            ),
        this
      );
    }),
    (S.expr.pseudos.animated = function (t) {
      return S.grep(S.timers, function (e) {
        return t === e.elem;
      }).length;
    }),
    (S.offset = {
      setOffset: function (e, t, n) {
        var r,
          i,
          o,
          a,
          s,
          u,
          l = S.css(e, "position"),
          c = S(e),
          f = {};
        "static" === l && (e.style.position = "relative"),
          (s = c.offset()),
          (o = S.css(e, "top")),
          (u = S.css(e, "left")),
          ("absolute" === l || "fixed" === l) && -1 < (o + u).indexOf("auto")
            ? ((a = (r = c.position()).top), (i = r.left))
            : ((a = parseFloat(o) || 0), (i = parseFloat(u) || 0)),
          m(t) && (t = t.call(e, n, S.extend({}, s))),
          null != t.top && (f.top = t.top - s.top + a),
          null != t.left && (f.left = t.left - s.left + i),
          "using" in t
            ? t.using.call(e, f)
            : ("number" == typeof f.top && (f.top += "px"),
              "number" == typeof f.left && (f.left += "px"),
              c.css(f));
      },
    }),
    S.fn.extend({
      offset: function (t) {
        if (arguments.length)
          return void 0 === t
            ? this
            : this.each(function (e) {
                S.offset.setOffset(this, t, e);
              });
        var e,
          n,
          r = this[0];
        return r
          ? r.getClientRects().length
            ? ((e = r.getBoundingClientRect()),
              (n = r.ownerDocument.defaultView),
              { top: e.top + n.pageYOffset, left: e.left + n.pageXOffset })
            : { top: 0, left: 0 }
          : void 0;
      },
      position: function () {
        if (this[0]) {
          var e,
            t,
            n,
            r = this[0],
            i = { top: 0, left: 0 };
          if ("fixed" === S.css(r, "position")) t = r.getBoundingClientRect();
          else {
            (t = this.offset()),
              (n = r.ownerDocument),
              (e = r.offsetParent || n.documentElement);
            while (
              e &&
              (e === n.body || e === n.documentElement) &&
              "static" === S.css(e, "position")
            )
              e = e.parentNode;
            e &&
              e !== r &&
              1 === e.nodeType &&
              (((i = S(e).offset()).top += S.css(e, "borderTopWidth", !0)),
              (i.left += S.css(e, "borderLeftWidth", !0)));
          }
          return {
            top: t.top - i.top - S.css(r, "marginTop", !0),
            left: t.left - i.left - S.css(r, "marginLeft", !0),
          };
        }
      },
      offsetParent: function () {
        return this.map(function () {
          var e = this.offsetParent;
          while (e && "static" === S.css(e, "position")) e = e.offsetParent;
          return e || re;
        });
      },
    }),
    S.each(
      { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
      function (t, i) {
        var o = "pageYOffset" === i;
        S.fn[t] = function (e) {
          return $(
            this,
            function (e, t, n) {
              var r;
              if (
                (x(e) ? (r = e) : 9 === e.nodeType && (r = e.defaultView),
                void 0 === n)
              )
                return r ? r[i] : e[t];
              r
                ? r.scrollTo(o ? r.pageXOffset : n, o ? n : r.pageYOffset)
                : (e[t] = n);
            },
            t,
            e,
            arguments.length
          );
        };
      }
    ),
    S.each(["top", "left"], function (e, n) {
      S.cssHooks[n] = $e(y.pixelPosition, function (e, t) {
        if (t)
          return (t = Be(e, n)), Me.test(t) ? S(e).position()[n] + "px" : t;
      });
    }),
    S.each({ Height: "height", Width: "width" }, function (a, s) {
      S.each(
        { padding: "inner" + a, content: s, "": "outer" + a },
        function (r, o) {
          S.fn[o] = function (e, t) {
            var n = arguments.length && (r || "boolean" != typeof e),
              i = r || (!0 === e || !0 === t ? "margin" : "border");
            return $(
              this,
              function (e, t, n) {
                var r;
                return x(e)
                  ? 0 === o.indexOf("outer")
                    ? e["inner" + a]
                    : e.document.documentElement["client" + a]
                  : 9 === e.nodeType
                  ? ((r = e.documentElement),
                    Math.max(
                      e.body["scroll" + a],
                      r["scroll" + a],
                      e.body["offset" + a],
                      r["offset" + a],
                      r["client" + a]
                    ))
                  : void 0 === n
                  ? S.css(e, t, i)
                  : S.style(e, t, n, i);
              },
              s,
              n ? e : void 0,
              n
            );
          };
        }
      );
    }),
    S.each(
      [
        "ajaxStart",
        "ajaxStop",
        "ajaxComplete",
        "ajaxError",
        "ajaxSuccess",
        "ajaxSend",
      ],
      function (e, t) {
        S.fn[t] = function (e) {
          return this.on(t, e);
        };
      }
    ),
    S.fn.extend({
      bind: function (e, t, n) {
        return this.on(e, null, t, n);
      },
      unbind: function (e, t) {
        return this.off(e, null, t);
      },
      delegate: function (e, t, n, r) {
        return this.on(t, e, n, r);
      },
      undelegate: function (e, t, n) {
        return 1 === arguments.length
          ? this.off(e, "**")
          : this.off(t, e || "**", n);
      },
      hover: function (e, t) {
        return this.mouseenter(e).mouseleave(t || e);
      },
    }),
    S.each(
      "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
        " "
      ),
      function (e, n) {
        S.fn[n] = function (e, t) {
          return 0 < arguments.length
            ? this.on(n, null, e, t)
            : this.trigger(n);
        };
      }
    );
  var Gt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
  (S.proxy = function (e, t) {
    var n, r, i;
    if (("string" == typeof t && ((n = e[t]), (t = e), (e = n)), m(e)))
      return (
        (r = s.call(arguments, 2)),
        ((i = function () {
          return e.apply(t || this, r.concat(s.call(arguments)));
        }).guid = e.guid =
          e.guid || S.guid++),
        i
      );
  }),
    (S.holdReady = function (e) {
      e ? S.readyWait++ : S.ready(!0);
    }),
    (S.isArray = Array.isArray),
    (S.parseJSON = JSON.parse),
    (S.nodeName = A),
    (S.isFunction = m),
    (S.isWindow = x),
    (S.camelCase = X),
    (S.type = w),
    (S.now = Date.now),
    (S.isNumeric = function (e) {
      var t = S.type(e);
      return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
    }),
    (S.trim = function (e) {
      return null == e ? "" : (e + "").replace(Gt, "");
    }),
    "function" == typeof define &&
      define.amd &&
      define("jquery", [], function () {
        return S;
      });
  var Yt = C.jQuery,
    Qt = C.$;
  return (
    (S.noConflict = function (e) {
      return C.$ === S && (C.$ = Qt), e && C.jQuery === S && (C.jQuery = Yt), S;
    }),
    "undefined" == typeof e && (C.jQuery = C.$ = S),
    S
  );
});

/*!
 * GSAP 3.2.4
 * https://greensock.com
 *
 * @license Copyright 2020, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */
!(function (t) {
  var e = {};
  function r(n) {
    if (e[n]) return e[n].exports;
    var i = (e[n] = { i: n, l: !1, exports: {} });
    return t[n].call(i.exports, i, i.exports, r), (i.l = !0), i.exports;
  }
  (r.m = t),
    (r.c = e),
    (r.d = function (t, e, n) {
      r.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: n });
    }),
    (r.r = function (t) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(t, "__esModule", { value: !0 });
    }),
    (r.t = function (t, e) {
      if ((1 & e && (t = r(t)), 8 & e)) return t;
      if (4 & e && "object" == typeof t && t && t.__esModule) return t;
      var n = Object.create(null);
      if (
        (r.r(n),
        Object.defineProperty(n, "default", { enumerable: !0, value: t }),
        2 & e && "string" != typeof t)
      )
        for (var i in t)
          r.d(
            n,
            i,
            function (e) {
              return t[e];
            }.bind(null, i)
          );
      return n;
    }),
    (r.n = function (t) {
      var e =
        t && t.__esModule
          ? function () {
              return t.default;
            }
          : function () {
              return t;
            };
      return r.d(e, "a", e), e;
    }),
    (r.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (r.p = ""),
    r((r.s = 0));
})([
  function (t, e, r) {
    !(function (t) {
      "use strict";
      function e(t, e) {
        (t.prototype = Object.create(e.prototype)),
          ((t.prototype.constructor = t).__proto__ = e);
      }
      function r(t) {
        if (void 0 === t)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return t;
      }
      function n(t) {
        return "string" == typeof t;
      }
      function i(t) {
        return "function" == typeof t;
      }
      function s(t) {
        return "number" == typeof t;
      }
      function a(t) {
        return void 0 === t;
      }
      function o(t) {
        return "object" == typeof t;
      }
      function u(t) {
        return !1 !== t;
      }
      function h() {
        return "undefined" != typeof window;
      }
      function f(t) {
        return i(t) || n(t);
      }
      function l(t) {
        return (dt = oe(t, Jt)) && sr;
      }
      function p(t, e) {
        return console.warn(
          "Invalid property",
          t,
          "set to",
          e,
          "Missing plugin? gsap.registerPlugin()"
        );
      }
      function c(t, e) {
        return !e && console.warn(t);
      }
      function _(t, e) {
        return (t && (Jt[t] = e) && dt && (dt[t] = e)) || Jt;
      }
      function d() {
        return 0;
      }
      function m(t) {
        var e,
          r,
          n = t[0];
        if ((o(n) || i(n) || (t = [t]), !(e = (n._gsap || {}).harness))) {
          for (r = se.length; r-- && !se[r].targetTest(n); );
          e = se[r];
        }
        for (r = t.length; r--; )
          (t[r] && (t[r]._gsap || (t[r]._gsap = new Pe(t[r], e)))) ||
            t.splice(r, 1);
        return t;
      }
      function g(t) {
        return t._gsap || m(pe(t))[0]._gsap;
      }
      function v(t, e) {
        var r = t[e];
        return i(r) ? t[e]() : (a(r) && t.getAttribute(e)) || r;
      }
      function y(t, e) {
        return (t = t.split(",")).forEach(e) || t;
      }
      function w(t) {
        return Math.round(1e5 * t) / 1e5 || 0;
      }
      function x(t, e) {
        for (var r = e.length, n = 0; t.indexOf(e[n]) < 0 && ++n < r; );
        return n < r;
      }
      function b(t, e, r) {
        var n,
          i = s(t[1]),
          a = (i ? 2 : 1) + (e < 2 ? 0 : 1),
          o = t[a];
        if ((i && (o.duration = t[1]), (o.parent = r), e)) {
          for (n = o; r && !("immediateRender" in n); )
            (n = r.vars.defaults || {}), (r = u(r.vars.inherit) && r.parent);
          (o.immediateRender = u(n.immediateRender)),
            e < 2 ? (o.runBackwards = 1) : (o.startAt = t[a - 1]);
        }
        return o;
      }
      function T() {
        var t,
          e,
          r = te.length,
          n = te.slice(0);
        for (ee = {}, t = te.length = 0; t < r; t++)
          (e = n[t]) &&
            e._lazy &&
            (e.render(e._lazy[0], e._lazy[1], !0)._lazy = 0);
      }
      function M(t, e, r, n) {
        te.length && T(), t.render(e, r, n), te.length && T();
      }
      function O(t) {
        var e = parseFloat(t);
        return (e || 0 === e) && (t + "").match($t).length < 2 ? e : t;
      }
      function k(t) {
        return t;
      }
      function S(t, e) {
        for (var r in e) r in t || (t[r] = e[r]);
        return t;
      }
      function C(t, e) {
        for (var r in e)
          r in t || "duration" === r || "ease" === r || (t[r] = e[r]);
      }
      function P(t, e) {
        for (var r in e) t[r] = o(e[r]) ? P(t[r] || (t[r] = {}), e[r]) : e[r];
        return t;
      }
      function A(t, e) {
        var r,
          n = {};
        for (r in t) r in e || (n[r] = t[r]);
        return n;
      }
      function D(t) {
        var e = t.parent || lt,
          r = t.keyframes ? C : S;
        if (u(t.inherit)) for (; e; ) r(t, e.vars.defaults), (e = e.parent);
        return t;
      }
      function z(t, e, r, n) {
        void 0 === r && (r = "_first"), void 0 === n && (n = "_last");
        var i = e._prev,
          s = e._next;
        i ? (i._next = s) : t[r] === e && (t[r] = s),
          s ? (s._prev = i) : t[n] === e && (t[n] = i),
          (e._next = e._prev = e.parent = null);
      }
      function R(t, e) {
        !t.parent || (e && !t.parent.autoRemoveChildren) || t.parent.remove(t),
          (t._act = 0);
      }
      function F(t) {
        for (var e = t; e; ) (e._dirty = 1), (e = e.parent);
        return t;
      }
      function E(t) {
        return t._repeat ? ue(t._tTime, (t = t.duration() + t._rDelay)) * t : 0;
      }
      function B(t, e) {
        return (
          (t - e._start) * e._ts +
          (0 <= e._ts ? 0 : e._dirty ? e.totalDuration() : e._tDur)
        );
      }
      function L(t) {
        return (t._end = w(
          t._start + (t._tDur / Math.abs(t._ts || t._pauseTS || Lt) || 0)
        ));
      }
      function I(t, e) {
        var r;
        if (
          ((e._time || (e._initted && !e._dur)) &&
            ((r = B(t.rawTime(), e)),
            (!e._dur || fe(0, e.totalDuration(), r) - e._tTime > Lt) &&
              e.render(r, !0)),
          F(t)._dp && t._initted && t._time >= t._dur && t._ts)
        ) {
          if (t._dur < t.duration())
            for (r = t; r._dp; )
              0 <= r.rawTime() && r.totalTime(r._tTime), (r = r._dp);
          t._zTime = -Lt;
        }
      }
      function Y(t, e, r, n) {
        return (
          e.parent && R(e),
          (e._start = w(r + e._delay)),
          (e._end = w(
            e._start + (e.totalDuration() / Math.abs(e.timeScale()) || 0)
          )),
          (function (t, e, r, n, i) {
            void 0 === r && (r = "_first"), void 0 === n && (n = "_last");
            var s,
              a = t[n];
            if (i) for (s = e[i]; a && a[i] > s; ) a = a._prev;
            a
              ? ((e._next = a._next), (a._next = e))
              : ((e._next = t[r]), (t[r] = e)),
              e._next ? (e._next._prev = e) : (t[n] = e),
              (e._prev = a),
              (e.parent = e._dp = t);
          })(t, e, "_first", "_last", t._sort ? "_start" : 0),
          (t._recent = e),
          n || I(t, e),
          t
        );
      }
      function U(t, e, r, n) {
        return (
          Be(t, e),
          t._initted
            ? !r &&
              t._pt &&
              ((t._dur && !1 !== t.vars.lazy) || (!t._dur && t.vars.lazy)) &&
              gt !== ye.frame
              ? (te.push(t), (t._lazy = [e, n]), 1)
              : void 0
            : 1
        );
      }
      function X(t, e, r) {
        var n = t._repeat,
          i = w(e);
        return (
          (t._dur = i),
          (t._tDur = n ? (n < 0 ? 1e12 : w(i * (n + 1) + t._rDelay * n)) : i),
          r || F(t.parent),
          t.parent && L(t),
          t
        );
      }
      function N(t) {
        return t instanceof ze ? F(t) : X(t, t._dur);
      }
      function j(t, e) {
        var r,
          i,
          s = t.labels,
          a = t._recent || he,
          o = t.duration() >= Bt ? a.endTime(!1) : t._dur;
        return n(e) && (isNaN(e) || e in s)
          ? "<" === (r = e.charAt(0)) || ">" === r
            ? ("<" === r ? a._start : a.endTime(0 <= a._repeat)) +
              (parseFloat(e.substr(1)) || 0)
            : (r = e.indexOf("=")) < 0
            ? (e in s || (s[e] = o), s[e])
            : ((i = +(e.charAt(r - 1) + e.substr(r + 1))),
              1 < r ? j(t, e.substr(0, r - 1)) + i : o + i)
          : null == e
          ? o
          : +e;
      }
      function q(t, e) {
        return t || 0 === t ? e(t) : e;
      }
      function V(t) {
        return (t + "").substr((parseFloat(t) + "").length);
      }
      function Q(t, e) {
        return (
          t &&
          o(t) &&
          "length" in t &&
          ((!e && !t.length) || (t.length - 1 in t && o(t[0]))) &&
          !t.nodeType &&
          t !== pt
        );
      }
      function G(t) {
        return t.sort(function () {
          return 0.5 - Math.random();
        });
      }
      function W(t) {
        if (i(t)) return t;
        var e = o(t) ? t : { each: t },
          r = Oe(e.ease),
          s = e.from || 0,
          a = parseFloat(e.base) || 0,
          u = {},
          h = 0 < s && s < 1,
          f = isNaN(s) || h,
          l = e.axis,
          p = s,
          c = s;
        return (
          n(s)
            ? (p = c = { center: 0.5, edges: 0.5, end: 1 }[s] || 0)
            : !h && f && ((p = s[0]), (c = s[1])),
          function (t, n, i) {
            var o,
              h,
              _,
              d,
              m,
              g,
              v,
              y,
              x,
              b = (i || e).length,
              T = u[b];
            if (!T) {
              if (!(x = "auto" === e.grid ? 0 : (e.grid || [1, Bt])[1])) {
                for (
                  v = -Bt;
                  v < (v = i[x++].getBoundingClientRect().left) && x < b;

                );
                x--;
              }
              for (
                T = u[b] = [],
                  o = f ? Math.min(x, b) * p - 0.5 : s % x,
                  h = f ? (b * c) / x - 0.5 : (s / x) | 0,
                  y = Bt,
                  g = v = 0;
                g < b;
                g++
              )
                (_ = (g % x) - o),
                  (d = h - ((g / x) | 0)),
                  (T[g] = m =
                    l ? Math.abs("y" === l ? d : _) : Xt(_ * _ + d * d)),
                  v < m && (v = m),
                  m < y && (y = m);
              "random" === s && G(T),
                (T.max = v - y),
                (T.min = y),
                (T.v = b =
                  (parseFloat(e.amount) ||
                    parseFloat(e.each) *
                      (b < x
                        ? b - 1
                        : l
                        ? "y" === l
                          ? b / x
                          : x
                        : Math.max(x, b / x)) ||
                    0) * ("edges" === s ? -1 : 1)),
                (T.b = b < 0 ? a - b : a),
                (T.u = V(e.amount || e.each) || 0),
                (r = r && b < 0 ? Me(r) : r);
            }
            return (
              (b = (T[t] - T.min) / T.max || 0),
              w(T.b + (r ? r(b) : b) * T.v) + T.u
            );
          }
        );
      }
      function Z(t) {
        var e = t < 1 ? Math.pow(10, (t + "").length - 2) : 1;
        return function (r) {
          return (
            ~~(Math.round(parseFloat(r) / t) * t * e) / e + (s(r) ? 0 : V(r))
          );
        };
      }
      function H(t, e) {
        var r,
          n,
          a = qt(t);
        return (
          !a &&
            o(t) &&
            ((r = a = t.radius || Bt),
            t.values
              ? ((t = pe(t.values)), (n = !s(t[0])) && (r *= r))
              : (t = Z(t.increment))),
          q(
            e,
            a
              ? i(t)
                ? function (e) {
                    return (n = t(e)), Math.abs(n - e) <= r ? n : e;
                  }
                : function (e) {
                    for (
                      var i,
                        a,
                        o = parseFloat(n ? e.x : e),
                        u = parseFloat(n ? e.y : 0),
                        h = Bt,
                        f = 0,
                        l = t.length;
                      l--;

                    )
                      (i = n
                        ? (i = t[l].x - o) * i + (a = t[l].y - u) * a
                        : Math.abs(t[l] - o)) < h && ((h = i), (f = l));
                    return (
                      (f = !r || h <= r ? t[f] : e),
                      n || f === e || s(e) ? f : f + V(e)
                    );
                  }
              : Z(t)
          )
        );
      }
      function $(t, e, r, n) {
        return q(qt(t) ? !e : !0 === r ? !!(r = 0) : !n, function () {
          return qt(t)
            ? t[~~(Math.random() * t.length)]
            : (r = r || 1e-5) &&
                (n = r < 1 ? Math.pow(10, (r + "").length - 2) : 1) &&
                ~~(Math.round((t + Math.random() * (e - t)) / r) * r * n) / n;
        });
      }
      function J(t, e, r) {
        return q(r, function (r) {
          return t[~~e(r)];
        });
      }
      function K(t) {
        for (var e, r, n, i, s = 0, a = ""; ~(e = t.indexOf("random(", s)); )
          (n = t.indexOf(")", e)),
            (i = "[" === t.charAt(e + 7)),
            (r = t.substr(e + 7, n - e - 7).match(i ? $t : Vt)),
            (a += t.substr(s, e - s) + $(i ? r : +r[0], +r[1], +r[2] || 1e-5)),
            (s = n + 1);
        return a + t.substr(s, t.length - s);
      }
      function tt(t, e, r) {
        var n,
          i,
          s,
          a = t.labels,
          o = Bt;
        for (n in a)
          (i = a[n] - e) < 0 == !!r &&
            i &&
            o > (i = Math.abs(i)) &&
            ((s = n), (o = i));
        return s;
      }
      function et(t) {
        return R(t), t.progress() < 1 && _e(t, "onInterrupt"), t;
      }
      function rt(t, e, r) {
        return (
          ((6 * (t = t < 0 ? t + 1 : 1 < t ? t - 1 : t) < 1
            ? e + (r - e) * t * 6
            : t < 0.5
            ? r
            : 3 * t < 2
            ? e + (r - e) * (2 / 3 - t) * 6
            : e) *
            de +
            0.5) |
          0
        );
      }
      function nt(t, e, r) {
        var n,
          i,
          a,
          o,
          u,
          h,
          f,
          l,
          p,
          c,
          _ = t ? (s(t) ? [t >> 16, (t >> 8) & de, t & de] : 0) : me.black;
        if (!_) {
          if (("," === t.substr(-1) && (t = t.substr(0, t.length - 1)), me[t]))
            _ = me[t];
          else if ("#" === t.charAt(0))
            4 === t.length &&
              (t =
                "#" +
                (n = t.charAt(1)) +
                n +
                (i = t.charAt(2)) +
                i +
                (a = t.charAt(3)) +
                a),
              (_ = [
                (t = parseInt(t.substr(1), 16)) >> 16,
                (t >> 8) & de,
                t & de,
              ]);
          else if ("hsl" === t.substr(0, 3))
            if (((_ = c = t.match(Vt)), e)) {
              if (~t.indexOf("="))
                return (_ = t.match(Qt)), r && _.length < 4 && (_[3] = 1), _;
            } else
              (o = (+_[0] % 360) / 360),
                (u = _[1] / 100),
                (n =
                  2 * (h = _[2] / 100) -
                  (i = h <= 0.5 ? h * (u + 1) : h + u - h * u)),
                3 < _.length && (_[3] *= 1),
                (_[0] = rt(o + 1 / 3, n, i)),
                (_[1] = rt(o, n, i)),
                (_[2] = rt(o - 1 / 3, n, i));
          else _ = t.match(Vt) || me.transparent;
          _ = _.map(Number);
        }
        return (
          e &&
            !c &&
            ((n = _[0] / de),
            (i = _[1] / de),
            (a = _[2] / de),
            (h = ((f = Math.max(n, i, a)) + (l = Math.min(n, i, a))) / 2),
            f === l
              ? (o = u = 0)
              : ((p = f - l),
                (u = 0.5 < h ? p / (2 - f - l) : p / (f + l)),
                (o =
                  f === n
                    ? (i - a) / p + (i < a ? 6 : 0)
                    : f === i
                    ? (a - n) / p + 2
                    : (n - i) / p + 4),
                (o *= 60)),
            (_[0] = ~~(o + 0.5)),
            (_[1] = ~~(100 * u + 0.5)),
            (_[2] = ~~(100 * h + 0.5))),
          r && _.length < 4 && (_[3] = 1),
          _
        );
      }
      function it(t) {
        var e = [],
          r = [],
          n = -1;
        return (
          t.split(ge).forEach(function (t) {
            var i = t.match(Gt) || [];
            e.push.apply(e, i), r.push((n += i.length + 1));
          }),
          (e.c = r),
          e
        );
      }
      function st(t, e, r) {
        var n,
          i,
          s,
          a,
          o = "",
          u = (t + o).match(ge),
          h = e ? "hsla(" : "rgba(",
          f = 0;
        if (!u) return t;
        if (
          ((u = u.map(function (t) {
            return (
              (t = nt(t, e, 1)) &&
              h +
                (e
                  ? t[0] + "," + t[1] + "%," + t[2] + "%," + t[3]
                  : t.join(",")) +
                ")"
            );
          })),
          r && ((s = it(t)), (n = r.c).join(o) !== s.c.join(o)))
        )
          for (a = (i = t.replace(ge, "1").split(Gt)).length - 1; f < a; f++)
            o +=
              i[f] +
              (~n.indexOf(f)
                ? u.shift() || h + "0,0,0,0)"
                : (s.length ? s : u.length ? u : r).shift());
        if (!i)
          for (a = (i = t.split(ge)).length - 1; f < a; f++) o += i[f] + u[f];
        return o + i[a];
      }
      function at(t) {
        var e,
          r = t.join(" ");
        if (((ge.lastIndex = 0), ge.test(r)))
          return (
            (e = ve.test(r)),
            (t[1] = st(t[1], e)),
            (t[0] = st(t[0], e, it(t[1]))),
            !0
          );
      }
      function ot(t, e, r, n) {
        void 0 === r &&
          (r = function (t) {
            return 1 - e(1 - t);
          }),
          void 0 === n &&
            (n = function (t) {
              return t < 0.5 ? e(2 * t) / 2 : 1 - e(2 * (1 - t)) / 2;
            });
        var i,
          s = { easeIn: e, easeOut: r, easeInOut: n };
        return (
          y(t, function (t) {
            for (var e in ((xe[t] = Jt[t] = s),
            (xe[(i = t.toLowerCase())] = r),
            s))
              xe[
                i +
                  ("easeIn" === e ? ".in" : "easeOut" === e ? ".out" : ".inOut")
              ] = xe[t + "." + e] = s[e];
          }),
          s
        );
      }
      function ut(t) {
        return function (e) {
          return e < 0.5 ? (1 - t(1 - 2 * e)) / 2 : 0.5 + t(2 * (e - 0.5)) / 2;
        };
      }
      function ht(t, e, r) {
        function n(t) {
          return 1 === t ? 1 : i * Math.pow(2, -10 * t) * jt((t - a) * s) + 1;
        }
        var i = 1 <= e ? e : 1,
          s = (r || (t ? 0.3 : 0.45)) / (e < 1 ? e : 1),
          a = (s / It) * (Math.asin(1 / i) || 0),
          o =
            "out" === t
              ? n
              : "in" === t
              ? function (t) {
                  return 1 - n(1 - t);
                }
              : ut(n);
        return (
          (s = It / s),
          (o.config = function (e, r) {
            return ht(t, e, r);
          }),
          o
        );
      }
      function ft(t, e) {
        function r(t) {
          return t ? --t * t * ((e + 1) * t + e) + 1 : 0;
        }
        void 0 === e && (e = 1.70158);
        var n =
          "out" === t
            ? r
            : "in" === t
            ? function (t) {
                return 1 - r(1 - t);
              }
            : ut(r);
        return (
          (n.config = function (e) {
            return ft(t, e);
          }),
          n
        );
      }
      var lt,
        pt,
        ct,
        _t,
        dt,
        mt,
        gt,
        vt,
        yt,
        wt,
        xt,
        bt,
        Tt,
        Mt,
        Ot,
        kt,
        St,
        Ct,
        Pt,
        At,
        Dt,
        zt,
        Rt,
        Ft = {
          autoSleep: 120,
          force3D: "auto",
          nullTargetWarn: 1,
          units: { lineHeight: "" },
        },
        Et = { duration: 0.5, overwrite: !1, delay: 0 },
        Bt = 1e8,
        Lt = 1 / Bt,
        It = 2 * Math.PI,
        Yt = It / 4,
        Ut = 0,
        Xt = Math.sqrt,
        Nt = Math.cos,
        jt = Math.sin,
        qt = Array.isArray,
        Vt = /(?:-?\.?\d|\.)+/gi,
        Qt = /[-+=.]*\d+[.e\-+]*\d*[e\-\+]*\d*/g,
        Gt = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
        Wt = /[-+=.]*\d+(?:\.|e-|e)*\d*/gi,
        Zt = /\(([^()]+)\)/i,
        Ht = /[+-]=-?[\.\d]+/,
        $t = /[#\-+.]*\b[a-z\d-=+%.]+/gi,
        Jt = {},
        Kt = {},
        te = [],
        ee = {},
        re = {},
        ne = {},
        ie = 30,
        se = [],
        ae = "",
        oe = function (t, e) {
          for (var r in e) t[r] = e[r];
          return t;
        },
        ue = function (t, e) {
          return (t /= e) && ~~t === t ? ~~t - 1 : ~~t;
        },
        he = { _start: 0, endTime: d },
        fe = function (t, e, r) {
          return r < t ? t : e < r ? e : r;
        },
        le = [].slice,
        pe = function (t, e) {
          return !n(t) || e || (!ct && we())
            ? qt(t)
              ? (function (t, e, r) {
                  return (
                    void 0 === r && (r = []),
                    t.forEach(function (t) {
                      return (n(t) && !e) || Q(t, 1)
                        ? r.push.apply(r, pe(t))
                        : r.push(t);
                    }) || r
                  );
                })(t, e)
              : Q(t)
              ? le.call(t, 0)
              : t
              ? [t]
              : []
            : le.call(_t.querySelectorAll(t), 0);
        },
        ce = function (t, e, r, n, i) {
          var s = e - t,
            a = n - r;
          return q(i, function (e) {
            return r + ((e - t) / s) * a;
          });
        },
        _e = function (t, e, r) {
          var n,
            i,
            s = t.vars,
            a = s[e];
          if (a)
            return (
              (n = s[e + "Params"]),
              (i = s.callbackScope || t),
              r && te.length && T(),
              n ? a.apply(i, n) : a.call(i)
            );
        },
        de = 255,
        me = {
          aqua: [0, de, de],
          lime: [0, de, 0],
          silver: [192, 192, 192],
          black: [0, 0, 0],
          maroon: [128, 0, 0],
          teal: [0, 128, 128],
          blue: [0, 0, de],
          navy: [0, 0, 128],
          white: [de, de, de],
          olive: [128, 128, 0],
          yellow: [de, de, 0],
          orange: [de, 165, 0],
          gray: [128, 128, 128],
          purple: [128, 0, 128],
          green: [0, 128, 0],
          red: [de, 0, 0],
          pink: [de, 192, 203],
          cyan: [0, de, de],
          transparent: [de, de, de, 0],
        },
        ge = (function () {
          var t,
            e =
              "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b";
          for (t in me) e += "|" + t + "\\b";
          return new RegExp(e + ")", "gi");
        })(),
        ve = /hsl[a]?\(/,
        ye =
          ((Mt = Date.now),
          (Ot = 500),
          (kt = 33),
          (St = Mt()),
          (Ct = St),
          (At = Pt = 1 / 240),
          (Tt = {
            time: 0,
            frame: 0,
            tick: function () {
              ke(!0);
            },
            wake: function () {
              mt &&
                (!ct &&
                  h() &&
                  ((pt = ct = window),
                  (_t = pt.document || {}),
                  (Jt.gsap = sr),
                  (pt.gsapVersions || (pt.gsapVersions = [])).push(sr.version),
                  l(dt || pt.GreenSockGlobals || (!pt.gsap && pt) || {}),
                  (bt = pt.requestAnimationFrame)),
                wt && Tt.sleep(),
                (xt =
                  bt ||
                  function (t) {
                    return setTimeout(t, (1e3 * (At - Tt.time) + 1) | 0);
                  }),
                (yt = 1),
                ke(2));
            },
            sleep: function () {
              (bt ? pt.cancelAnimationFrame : clearTimeout)(wt),
                (yt = 0),
                (xt = d);
            },
            lagSmoothing: function (t, e) {
              (Ot = t || 1e8), (kt = Math.min(e, Ot, 0));
            },
            fps: function (t) {
              (Pt = 1 / (t || 240)), (At = Tt.time + Pt);
            },
            add: function (t) {
              Dt.indexOf(t) < 0 && Dt.push(t), we();
            },
            remove: function (t) {
              var e;
              ~(e = Dt.indexOf(t)) && Dt.splice(e, 1);
            },
            _listeners: (Dt = []),
          })),
        we = function () {
          return !yt && ye.wake();
        },
        xe = {},
        be = /^[\d.\-M][\d.\-,\s]/,
        Te = /["']/g,
        Me = function (t) {
          return function (e) {
            return 1 - t(1 - e);
          };
        },
        Oe = function (t, e) {
          return (
            (t &&
              (i(t)
                ? t
                : xe[t] ||
                  (function (t) {
                    var e = (t + "").split("("),
                      r = xe[e[0]];
                    return r && 1 < e.length && r.config
                      ? r.config.apply(
                          null,
                          ~t.indexOf("{")
                            ? [
                                (function (t) {
                                  for (
                                    var e,
                                      r,
                                      n,
                                      i = {},
                                      s = t.substr(1, t.length - 3).split(":"),
                                      a = s[0],
                                      o = 1,
                                      u = s.length;
                                    o < u;
                                    o++
                                  )
                                    (r = s[o]),
                                      (e =
                                        o !== u - 1
                                          ? r.lastIndexOf(",")
                                          : r.length),
                                      (n = r.substr(0, e)),
                                      (i[a] = isNaN(n)
                                        ? n.replace(Te, "").trim()
                                        : +n),
                                      (a = r.substr(e + 1).trim());
                                  return i;
                                })(e[1]),
                              ]
                            : Zt.exec(t)[1].split(",").map(O)
                        )
                      : xe._CE && be.test(t)
                      ? xe._CE("", t)
                      : r;
                  })(t))) ||
            e
          );
        };
      function ke(t) {
        var e,
          r,
          n = Mt() - Ct,
          i = !0 === t;
        Ot < n && (St += n - kt),
          (Ct += n),
          (Tt.time = (Ct - St) / 1e3),
          (0 < (e = Tt.time - At) || i) &&
            (Tt.frame++, (At += e + (Pt <= e ? 0.004 : Pt - e)), (r = 1)),
          i || (wt = xt(ke)),
          r &&
            Dt.forEach(function (e) {
              return e(Tt.time, n, Tt.frame, t);
            });
      }
      function Se(t) {
        return t < Rt
          ? zt * t * t
          : t < 0.7272727272727273
          ? zt * Math.pow(t - 1.5 / 2.75, 2) + 0.75
          : t < 0.9090909090909092
          ? zt * (t -= 2.25 / 2.75) * t + 0.9375
          : zt * Math.pow(t - 2.625 / 2.75, 2) + 0.984375;
      }
      y("Linear,Quad,Cubic,Quart,Quint,Strong", function (t, e) {
        var r = e < 5 ? e + 1 : e;
        ot(
          t + ",Power" + (r - 1),
          e
            ? function (t) {
                return Math.pow(t, r);
              }
            : function (t) {
                return t;
              },
          function (t) {
            return 1 - Math.pow(1 - t, r);
          },
          function (t) {
            return t < 0.5
              ? Math.pow(2 * t, r) / 2
              : 1 - Math.pow(2 * (1 - t), r) / 2;
          }
        );
      }),
        (xe.Linear.easeNone = xe.none = xe.Linear.easeIn),
        ot("Elastic", ht("in"), ht("out"), ht()),
        (zt = 7.5625),
        (Rt = 1 / 2.75),
        ot(
          "Bounce",
          function (t) {
            return 1 - Se(1 - t);
          },
          Se
        ),
        ot("Expo", function (t) {
          return t ? Math.pow(2, 10 * (t - 1)) : 0;
        }),
        ot("Circ", function (t) {
          return -(Xt(1 - t * t) - 1);
        }),
        ot("Sine", function (t) {
          return 1 - Nt(t * Yt);
        }),
        ot("Back", ft("in"), ft("out"), ft()),
        (xe.SteppedEase =
          xe.steps =
          Jt.SteppedEase =
            {
              config: function (t, e) {
                void 0 === t && (t = 1);
                var r = 1 / t,
                  n = t + (e ? 0 : 1),
                  i = e ? 1 : 0;
                return function (t) {
                  return (((n * fe(0, 0.99999999, t)) | 0) + i) * r;
                };
              },
            }),
        (Et.ease = xe["quad.out"]),
        y(
          "onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",
          function (t) {
            return (ae += t + "," + t + "Params,");
          }
        );
      var Ce,
        Pe = function (t, e) {
          (this.id = Ut++),
            ((t._gsap = this).target = t),
            (this.harness = e),
            (this.get = e ? e.get : v),
            (this.set = e ? e.getSetter : Qe);
        },
        Ae =
          (((Ce = De.prototype).delay = function (t) {
            return t || 0 === t ? ((this._delay = t), this) : this._delay;
          }),
          (Ce.duration = function (t) {
            return arguments.length
              ? X(this, t)
              : this.totalDuration() && this._dur;
          }),
          (Ce.totalDuration = function (t) {
            return arguments.length
              ? ((this._dirty = 0),
                X(
                  this,
                  this._repeat < 0
                    ? t
                    : (t - this._repeat * this._rDelay) / (this._repeat + 1)
                ))
              : this._tDur;
          }),
          (Ce.totalTime = function (t, e) {
            if ((we(), !arguments.length)) return this._tTime;
            var r = this.parent || this._dp;
            if (r && r.smoothChildTiming && this._ts) {
              for (
                this._start = w(
                  r._time -
                    (0 < this._ts
                      ? t / this._ts
                      : ((this._dirty ? this.totalDuration() : this._tDur) -
                          t) /
                        -this._ts)
                ),
                  L(this),
                  r._dirty || F(r);
                r.parent;

              )
                r.parent._time !==
                  r._start +
                    (0 <= r._ts
                      ? r._tTime / r._ts
                      : (r.totalDuration() - r._tTime) / -r._ts) &&
                  r.totalTime(r._tTime, !0),
                  (r = r.parent);
              !this.parent &&
                this._dp.autoRemoveChildren &&
                Y(this._dp, this, this._start - this._delay);
            }
            return (
              (this._tTime !== t ||
                (!this._dur && !e) ||
                (this._initted && Math.abs(this._zTime) === Lt)) &&
                (this._ts || (this._pTime = t), M(this, t, e)),
              this
            );
          }),
          (Ce.time = function (t, e) {
            return arguments.length
              ? this.totalTime(
                  Math.min(this.totalDuration(), t + E(this)) % this._dur ||
                    (t ? this._dur : 0),
                  e
                )
              : this._time;
          }),
          (Ce.totalProgress = function (t, e) {
            return arguments.length
              ? this.totalTime(this.totalDuration() * t, e)
              : this.totalDuration()
              ? Math.min(1, this._tTime / this._tDur)
              : this.ratio;
          }),
          (Ce.progress = function (t, e) {
            return arguments.length
              ? this.totalTime(
                  this.duration() *
                    (!this._yoyo || 1 & this.iteration() ? t : 1 - t) +
                    E(this),
                  e
                )
              : this.duration()
              ? Math.min(1, this._time / this._dur)
              : this.ratio;
          }),
          (Ce.iteration = function (t, e) {
            var r = this.duration() + this._rDelay;
            return arguments.length
              ? this.totalTime(this._time + (t - 1) * r, e)
              : this._repeat
              ? ue(this._tTime, r) + 1
              : 1;
          }),
          (Ce.timeScale = function (t) {
            if (!arguments.length) return this._ts || this._pauseTS || 0;
            if (null !== this._pauseTS) return (this._pauseTS = t), this;
            var e =
              this.parent && this._ts
                ? B(this.parent._time, this)
                : this._tTime;
            return (
              (this._ts = t),
              (function (t) {
                for (var e = t.parent; e && e.parent; )
                  (e._dirty = 1), e.totalDuration(), (e = e.parent);
                return t;
              })(this.totalTime(e, !0))
            );
          }),
          (Ce.paused = function (t) {
            var e = !this._ts;
            return arguments.length
              ? (e !== t &&
                  (t
                    ? ((this._pauseTS = this._ts),
                      (this._pTime =
                        this._tTime || Math.max(-this._delay, this.rawTime())),
                      (this._ts = this._act = 0))
                    : (we(),
                      (this._ts = this._pauseTS || 1),
                      (this._pauseTS = null),
                      this.totalTime(
                        this.parent && !this.parent.smoothChildTiming
                          ? this.rawTime()
                          : this._tTime || this._pTime,
                        1 === this.progress() &&
                          (this._tTime -= Lt) &&
                          Math.abs(this._zTime) !== Lt
                      ))),
                this)
              : e;
          }),
          (Ce.startTime = function (t) {
            return arguments.length
              ? (this.parent &&
                  this.parent._sort &&
                  Y(this.parent, this, t - this._delay),
                this)
              : this._start;
          }),
          (Ce.endTime = function (t) {
            return (
              this._start +
              (u(t) ? this.totalDuration() : this.duration()) /
                Math.abs(this._ts)
            );
          }),
          (Ce.rawTime = function (t) {
            var e = this.parent || this._dp;
            return e
              ? t &&
                (!this._ts ||
                  (this._repeat && this._time && this.totalProgress() < 1))
                ? this._tTime % (this._dur + this._rDelay)
                : this._ts
                ? B(e.rawTime(t), this)
                : this._tTime
              : this._tTime;
          }),
          (Ce.repeat = function (t) {
            return arguments.length
              ? ((this._repeat = t), N(this))
              : this._repeat;
          }),
          (Ce.repeatDelay = function (t) {
            return arguments.length
              ? ((this._rDelay = t), N(this))
              : this._rDelay;
          }),
          (Ce.yoyo = function (t) {
            return arguments.length ? ((this._yoyo = t), this) : this._yoyo;
          }),
          (Ce.seek = function (t, e) {
            return this.totalTime(j(this, t), u(e));
          }),
          (Ce.restart = function (t, e) {
            return this.play().totalTime(t ? -this._delay : 0, u(e));
          }),
          (Ce.play = function (t, e) {
            return null != t && this.seek(t, e), this.reversed(!1).paused(!1);
          }),
          (Ce.reverse = function (t, e) {
            return (
              null != t && this.seek(t || this.totalDuration(), e),
              this.reversed(!0).paused(!1)
            );
          }),
          (Ce.pause = function (t, e) {
            return null != t && this.seek(t, e), this.paused(!0);
          }),
          (Ce.resume = function () {
            return this.paused(!1);
          }),
          (Ce.reversed = function (t) {
            var e = this._ts || this._pauseTS || 0;
            return arguments.length
              ? (t !== this.reversed() &&
                  ((this[null === this._pauseTS ? "_ts" : "_pauseTS"] =
                    Math.abs(e) * (t ? -1 : 1)),
                  this.totalTime(this._tTime, !0)),
                this)
              : e < 0;
          }),
          (Ce.invalidate = function () {
            return (this._initted = 0), (this._zTime = -Lt), this;
          }),
          (Ce.isActive = function (t) {
            var e,
              r = this.parent || this._dp,
              n = this._start;
            return !(
              r &&
              !(
                this._ts &&
                (this._initted || !t) &&
                r.isActive(t) &&
                (e = r.rawTime(!0)) >= n &&
                e < this.endTime(!0) - Lt
              )
            );
          }),
          (Ce.eventCallback = function (t, e, r) {
            var n = this.vars;
            return 1 < arguments.length
              ? (e
                  ? ((n[t] = e),
                    r && (n[t + "Params"] = r),
                    "onUpdate" === t && (this._onUpdate = e))
                  : delete n[t],
                this)
              : n[t];
          }),
          (Ce.then = function (t) {
            var e = this;
            return new Promise(function (r) {
              function n() {
                var t = e.then;
                (e.then = null),
                  i(s) && (s = s(e)) && (s.then || s === e) && (e.then = t),
                  r(s),
                  (e.then = t);
              }
              var s = i(t) ? t : k;
              (e._initted && 1 === e.totalProgress() && 0 <= e._ts) ||
              (!e._tTime && e._ts < 0)
                ? n()
                : (e._prom = n);
            });
          }),
          (Ce.kill = function () {
            et(this);
          }),
          De);
      function De(t, e) {
        var r = t.parent || lt;
        (this.vars = t),
          (this._delay = +t.delay || 0),
          (this._repeat = t.repeat || 0) &&
            ((this._rDelay = t.repeatDelay || 0),
            (this._yoyo = !!t.yoyo || !!t.yoyoEase)),
          (this._ts = t.reversed ? -1 : 1),
          X(this, +t.duration, 1),
          (this.data = t.data),
          yt || ye.wake(),
          r && Y(r, this, e || 0 === e ? e : r._time, 1),
          t.paused && this.paused(!0);
      }
      S(Ae.prototype, {
        _time: 0,
        _start: 0,
        _end: 0,
        _tTime: 0,
        _tDur: 0,
        _dirty: 0,
        _repeat: 0,
        _yoyo: !1,
        parent: null,
        _initted: !1,
        _rDelay: 0,
        _ts: 1,
        _dp: 0,
        ratio: 0,
        _zTime: -Lt,
        _prom: 0,
        _pauseTS: null,
      });
      var ze = (function (t) {
        function a(e, n) {
          var i;
          return (
            void 0 === e && (e = {}),
            ((i = t.call(this, e, n) || this).labels = {}),
            (i.smoothChildTiming = !!e.smoothChildTiming),
            (i.autoRemoveChildren = !!e.autoRemoveChildren),
            (i._sort = u(e.sortChildren)),
            i.parent && I(i.parent, r(i)),
            i
          );
        }
        e(a, t);
        var o = a.prototype;
        return (
          (o.to = function (t, e, r, n) {
            return (
              new Ue(t, b(arguments, 0, this), j(this, s(e) ? n : r)), this
            );
          }),
          (o.from = function (t, e, r, n) {
            return (
              new Ue(t, b(arguments, 1, this), j(this, s(e) ? n : r)), this
            );
          }),
          (o.fromTo = function (t, e, r, n, i) {
            return (
              new Ue(t, b(arguments, 2, this), j(this, s(e) ? i : n)), this
            );
          }),
          (o.set = function (t, e, r) {
            return (
              (e.duration = 0),
              (e.parent = this),
              D(e).repeatDelay || (e.repeat = 0),
              (e.immediateRender = !!e.immediateRender),
              new Ue(t, e, j(this, r), 1),
              this
            );
          }),
          (o.call = function (t, e, r) {
            return Y(this, Ue.delayedCall(0, t, e), j(this, r));
          }),
          (o.staggerTo = function (t, e, r, n, i, s, a) {
            return (
              (r.duration = e),
              (r.stagger = r.stagger || n),
              (r.onComplete = s),
              (r.onCompleteParams = a),
              (r.parent = this),
              new Ue(t, r, j(this, i)),
              this
            );
          }),
          (o.staggerFrom = function (t, e, r, n, i, s, a) {
            return (
              (r.runBackwards = 1),
              (D(r).immediateRender = u(r.immediateRender)),
              this.staggerTo(t, e, r, n, i, s, a)
            );
          }),
          (o.staggerFromTo = function (t, e, r, n, i, s, a, o) {
            return (
              (n.startAt = r),
              (D(n).immediateRender = u(n.immediateRender)),
              this.staggerTo(t, e, n, i, s, a, o)
            );
          }),
          (o.render = function (t, e, r) {
            var n,
              i,
              s,
              a,
              o,
              u,
              h,
              f,
              l,
              p,
              c,
              _,
              d = this._time,
              m = this._dirty ? this.totalDuration() : this._tDur,
              g = this._dur,
              v = this !== lt && m - Lt < t && 0 <= t ? m : t < Lt ? 0 : t,
              y = this._zTime < 0 != t < 0 && (this._initted || !g);
            if (v !== this._tTime || r || y) {
              if (
                (d !== this._time &&
                  g &&
                  ((v += this._time - d), (t += this._time - d)),
                (n = v),
                (l = this._start),
                (u = !(f = this._ts)),
                y && (g || (d = this._zTime), (!t && e) || (this._zTime = t)),
                this._repeat &&
                  ((c = this._yoyo),
                  (g < (n = w(v % (o = g + this._rDelay))) || m === v) &&
                    (n = g),
                  (a = ~~(v / o)) && a === v / o && ((n = g), a--),
                  c && 1 & a && ((n = g - n), (_ = 1)),
                  a !== (p = ue(this._tTime, o)) && !this._lock))
              ) {
                var x = c && 1 & p,
                  b = x === (c && 1 & a);
                if (
                  (a < p && (x = !x),
                  (d = x ? 0 : g),
                  (this._lock = 1),
                  (this.render(d, e, !g)._lock = 0),
                  !e && this.parent && _e(this, "onRepeat"),
                  this.vars.repeatRefresh &&
                    !_ &&
                    (this.invalidate()._lock = 1),
                  d !== this._time || u != !this._ts)
                )
                  return this;
                if (
                  (b &&
                    ((this._lock = 2),
                    (d = x ? g + 1e-4 : -1e-4),
                    this.render(d, !0),
                    this.vars.repeatRefresh && !_ && this.invalidate()),
                  (this._lock = 0),
                  !this._ts && !u)
                )
                  return this;
              }
              if (
                (this._hasPause &&
                  !this._forcing &&
                  this._lock < 2 &&
                  (h = (function (t, e, r) {
                    var n;
                    if (e < r)
                      for (n = t._first; n && n._start <= r; ) {
                        if (!n._dur && "isPause" === n.data && n._start > e)
                          return n;
                        n = n._next;
                      }
                    else
                      for (n = t._last; n && n._start >= r; ) {
                        if (!n._dur && "isPause" === n.data && n._start < e)
                          return n;
                        n = n._prev;
                      }
                  })(this, w(d), w(n))) &&
                  (v -= n - (n = h._start)),
                (this._tTime = v),
                (this._time = n),
                (this._act = !f),
                this._initted ||
                  ((this._onUpdate = this.vars.onUpdate),
                  (this._initted = 1),
                  (this._zTime = t)),
                d || !n || e || _e(this, "onStart"),
                d <= n && 0 <= t)
              )
                for (i = this._first; i; ) {
                  if (
                    ((s = i._next),
                    (i._act || n >= i._start) && i._ts && h !== i)
                  ) {
                    if (i.parent !== this) return this.render(t, e, r);
                    if (
                      (i.render(
                        0 < i._ts
                          ? (n - i._start) * i._ts
                          : (i._dirty ? i.totalDuration() : i._tDur) +
                              (n - i._start) * i._ts,
                        e,
                        r
                      ),
                      n !== this._time || (!this._ts && !u))
                    ) {
                      (h = 0), s && (v += this._zTime = -Lt);
                      break;
                    }
                  }
                  i = s;
                }
              else {
                i = this._last;
                for (var T = t < 0 ? t : n; i; ) {
                  if (
                    ((s = i._prev), (i._act || T <= i._end) && i._ts && h !== i)
                  ) {
                    if (i.parent !== this) return this.render(t, e, r);
                    if (
                      (i.render(
                        0 < i._ts
                          ? (T - i._start) * i._ts
                          : (i._dirty ? i.totalDuration() : i._tDur) +
                              (T - i._start) * i._ts,
                        e,
                        r
                      ),
                      n !== this._time || (!this._ts && !u))
                    ) {
                      (h = 0), s && (v += this._zTime = T ? -Lt : Lt);
                      break;
                    }
                  }
                  i = s;
                }
              }
              if (
                h &&
                !e &&
                (this.pause(),
                (h.render(d <= n ? 0 : -Lt)._zTime = d <= n ? 1 : -1),
                this._ts)
              )
                return (this._start = l), L(this), this.render(t, e, r);
              this._onUpdate && !e && _e(this, "onUpdate", !0),
                ((v === m && m >= this.totalDuration()) ||
                  (!v && this._ts < 0)) &&
                  ((l !== this._start && Math.abs(f) === Math.abs(this._ts)) ||
                    ((!t && g) ||
                      !((t && 0 < this._ts) || (!v && this._ts < 0)) ||
                      R(this, 1),
                    e ||
                      (t < 0 && !d) ||
                      (_e(
                        this,
                        v === m ? "onComplete" : "onReverseComplete",
                        !0
                      ),
                      this._prom && this._prom())));
            }
            return this;
          }),
          (o.add = function (t, e) {
            var r = this;
            if ((s(e) || (e = j(this, e)), !(t instanceof Ae))) {
              if (qt(t))
                return (
                  t.forEach(function (t) {
                    return r.add(t, e);
                  }),
                  F(this)
                );
              if (n(t)) return this.addLabel(t, e);
              if (!i(t)) return this;
              t = Ue.delayedCall(0, t);
            }
            return this !== t ? Y(this, t, e) : this;
          }),
          (o.getChildren = function (t, e, r, n) {
            void 0 === t && (t = !0),
              void 0 === e && (e = !0),
              void 0 === r && (r = !0),
              void 0 === n && (n = -Bt);
            for (var i = [], s = this._first; s; )
              s._start >= n &&
                (s instanceof Ue
                  ? e && i.push(s)
                  : (r && i.push(s),
                    t && i.push.apply(i, s.getChildren(!0, e, r)))),
                (s = s._next);
            return i;
          }),
          (o.getById = function (t) {
            for (var e = this.getChildren(1, 1, 1), r = e.length; r--; )
              if (e[r].vars.id === t) return e[r];
          }),
          (o.remove = function (t) {
            return n(t)
              ? this.removeLabel(t)
              : i(t)
              ? this.killTweensOf(t)
              : (z(this, t),
                t === this._recent && (this._recent = this._last),
                F(this));
          }),
          (o.totalTime = function (e, r) {
            return arguments.length
              ? ((this._forcing = 1),
                this.parent ||
                  this._dp ||
                  !this._ts ||
                  (this._start = w(
                    ye.time -
                      (0 < this._ts
                        ? e / this._ts
                        : (this.totalDuration() - e) / -this._ts)
                  )),
                t.prototype.totalTime.call(this, e, r),
                (this._forcing = 0),
                this)
              : this._tTime;
          }),
          (o.addLabel = function (t, e) {
            return (this.labels[t] = j(this, e)), this;
          }),
          (o.removeLabel = function (t) {
            return delete this.labels[t], this;
          }),
          (o.addPause = function (t, e, r) {
            var n = Ue.delayedCall(0, e || d, r);
            return (
              (n.data = "isPause"), (this._hasPause = 1), Y(this, n, j(this, t))
            );
          }),
          (o.removePause = function (t) {
            var e = this._first;
            for (t = j(this, t); e; )
              e._start === t && "isPause" === e.data && R(e), (e = e._next);
          }),
          (o.killTweensOf = function (t, e, r) {
            for (var n = this.getTweensOf(t, r), i = n.length; i--; )
              Fe !== n[i] && n[i].kill(t, e);
            return this;
          }),
          (o.getTweensOf = function (t, e) {
            for (var r, n = [], i = pe(t), s = this._first; s; )
              s instanceof Ue
                ? !x(s._targets, i) ||
                  (e && !s.isActive("started" === e)) ||
                  n.push(s)
                : (r = s.getTweensOf(i, e)).length && n.push.apply(n, r),
                (s = s._next);
            return n;
          }),
          (o.tweenTo = function (t, e) {
            e = e || {};
            var r = this,
              n = j(r, t),
              i = e.startAt,
              s = e.onStart,
              a = e.onStartParams,
              o = Ue.to(
                r,
                S(e, {
                  ease: "none",
                  lazy: !1,
                  time: n,
                  duration:
                    e.duration ||
                    Math.abs(n - (i && "time" in i ? i.time : r._time)) /
                      r.timeScale() ||
                    Lt,
                  onStart: function () {
                    r.pause();
                    var t = e.duration || Math.abs(n - r._time) / r.timeScale();
                    o._dur !== t && X(o, t).render(o._time, !0, !0),
                      s && s.apply(o, a || []);
                  },
                })
              );
            return o;
          }),
          (o.tweenFromTo = function (t, e, r) {
            return this.tweenTo(e, S({ startAt: { time: j(this, t) } }, r));
          }),
          (o.recent = function () {
            return this._recent;
          }),
          (o.nextLabel = function (t) {
            return void 0 === t && (t = this._time), tt(this, j(this, t));
          }),
          (o.previousLabel = function (t) {
            return void 0 === t && (t = this._time), tt(this, j(this, t), 1);
          }),
          (o.currentLabel = function (t) {
            return arguments.length
              ? this.seek(t, !0)
              : this.previousLabel(this._time + Lt);
          }),
          (o.shiftChildren = function (t, e, r) {
            void 0 === r && (r = 0);
            for (var n, i = this._first, s = this.labels; i; )
              i._start >= r && (i._start += t), (i = i._next);
            if (e) for (n in s) s[n] >= r && (s[n] += t);
            return F(this);
          }),
          (o.invalidate = function () {
            var e = this._first;
            for (this._lock = 0; e; ) e.invalidate(), (e = e._next);
            return t.prototype.invalidate.call(this);
          }),
          (o.clear = function (t) {
            void 0 === t && (t = !0);
            for (var e, r = this._first; r; )
              (e = r._next), this.remove(r), (r = e);
            return (
              (this._time = this._tTime = 0), t && (this.labels = {}), F(this)
            );
          }),
          (o.totalDuration = function (t) {
            var e,
              r,
              n,
              i,
              s = 0,
              a = this,
              o = a._last,
              u = Bt;
            if (arguments.length)
              return a._repeat < 0 ? a : a.timeScale(a.totalDuration() / t);
            if (a._dirty) {
              for (i = a.parent; o; )
                (e = o._prev),
                  o._dirty && o.totalDuration(),
                  u < (n = o._start) && a._sort && o._ts && !a._lock
                    ? ((a._lock = 1), (Y(a, o, n - o._delay, 1)._lock = 0))
                    : (u = n),
                  n < 0 &&
                    o._ts &&
                    ((s -= n),
                    ((!i && !a._dp) || (i && i.smoothChildTiming)) &&
                      ((a._start += n / a._ts),
                      (a._time -= n),
                      (a._tTime -= n)),
                    a.shiftChildren(-n, !1, -1e20),
                    (u = 0)),
                  s < (r = L(o)) && o._ts && (s = r),
                  (o = e);
              X(a, a === lt && a._time > s ? a._time : Math.min(Bt, s), 1),
                (a._dirty = 0);
            }
            return a._tDur;
          }),
          (a.updateRoot = function (t) {
            if (
              (lt._ts && (M(lt, B(t, lt)), (gt = ye.frame)), ye.frame >= ie)
            ) {
              ie += Ft.autoSleep || 120;
              var e = lt._first;
              if ((!e || !e._ts) && Ft.autoSleep && ye._listeners.length < 2) {
                for (; e && !e._ts; ) e = e._next;
                e || ye.sleep();
              }
            }
          }),
          a
        );
      })(Ae);
      function Re(t, e, r, s, a, u) {
        var h, f, l, p;
        if (
          re[t] &&
          !1 !==
            (h = new re[t]()).init(
              a,
              h.rawVars
                ? e[t]
                : (function (t, e, r, s, a) {
                    if (
                      (i(t) && (t = Le(t, a, e, r, s)),
                      !o(t) || (t.style && t.nodeType) || qt(t))
                    )
                      return n(t) ? Le(t, a, e, r, s) : t;
                    var u,
                      h = {};
                    for (u in t) h[u] = Le(t[u], a, e, r, s);
                    return h;
                  })(e[t], s, a, u, r),
              r,
              s,
              u
            ) &&
          ((r._pt = f = new tr(r._pt, a, t, 0, 1, h.render, h, 0, h.priority)),
          r !== vt)
        )
          for (
            l = r._ptLookup[r._targets.indexOf(a)], p = h._props.length;
            p--;

          )
            l[h._props[p]] = f;
        return h;
      }
      S(ze.prototype, { _lock: 0, _hasPause: 0, _forcing: 0 });
      var Fe,
        Ee = function (t, e, r, s, a, o, u, h, f) {
          i(s) && (s = s(a || 0, t, o));
          var l,
            c = t[e],
            _ =
              "get" !== r
                ? r
                : i(c)
                ? f
                  ? t[
                      e.indexOf("set") || !i(t["get" + e.substr(3)])
                        ? e
                        : "get" + e.substr(3)
                    ](f)
                  : t[e]()
                : c,
            d = i(c) ? (f ? Ve : qe) : je;
          if (
            (n(s) &&
              (~s.indexOf("random(") && (s = K(s)),
              "=" === s.charAt(1) &&
                (s =
                  parseFloat(_) +
                  parseFloat(s.substr(2)) * ("-" === s.charAt(0) ? -1 : 1) +
                  (V(_) || 0))),
            _ !== s)
          )
            return isNaN(_ + s)
              ? (c || e in t || p(e, s),
                function (t, e, r, n, i, s, a) {
                  var o,
                    u,
                    h,
                    f,
                    l,
                    p,
                    c,
                    _,
                    d = new tr(this._pt, t, e, 0, 1, Ze, null, i),
                    m = 0,
                    g = 0;
                  for (
                    d.b = r,
                      d.e = n,
                      r += "",
                      (c = ~(n += "").indexOf("random(")) && (n = K(n)),
                      s && (s((_ = [r, n]), t, e), (r = _[0]), (n = _[1])),
                      u = r.match(Wt) || [];
                    (o = Wt.exec(n));

                  )
                    (f = o[0]),
                      (l = n.substring(m, o.index)),
                      h
                        ? (h = (h + 1) % 5)
                        : "rgba(" === l.substr(-5) && (h = 1),
                      f !== u[g++] &&
                        ((p = parseFloat(u[g - 1]) || 0),
                        (d._pt = {
                          _next: d._pt,
                          p: l || 1 === g ? l : ",",
                          s: p,
                          c:
                            "=" === f.charAt(1)
                              ? parseFloat(f.substr(2)) *
                                ("-" === f.charAt(0) ? -1 : 1)
                              : parseFloat(f) - p,
                          m: h && h < 4 ? Math.round : 0,
                        }),
                        (m = Wt.lastIndex));
                  return (
                    (d.c = m < n.length ? n.substring(m, n.length) : ""),
                    (d.fp = a),
                    (Ht.test(n) || c) && (d.e = 0),
                    (this._pt = d)
                  );
                }.call(this, t, e, _, s, d, h || Ft.stringFilter, f))
              : ((l = new tr(
                  this._pt,
                  t,
                  e,
                  +_ || 0,
                  s - (_ || 0),
                  "boolean" == typeof c ? We : Ge,
                  0,
                  d
                )),
                f && (l.fp = f),
                u && l.modifier(u, this, t),
                (this._pt = l));
        },
        Be = function t(e, r) {
          var n,
            i,
            s,
            a,
            o,
            h,
            f,
            l,
            p,
            c,
            _,
            d,
            v = e.vars,
            y = v.ease,
            w = v.startAt,
            x = v.immediateRender,
            b = v.lazy,
            M = v.onUpdate,
            O = v.onUpdateParams,
            k = v.callbackScope,
            C = v.runBackwards,
            P = v.yoyoEase,
            D = v.keyframes,
            z = v.autoRevert,
            F = e._dur,
            E = e._startAt,
            B = e._targets,
            L = e.parent,
            I = L && "nested" === L.data ? L.parent._targets : B,
            Y = "auto" === e._overwrite,
            U = e.timeline;
          if (
            (!U || (D && y) || (y = "none"),
            (e._ease = Oe(y, Et.ease)),
            (e._yEase = P ? Me(Oe(!0 === P ? y : P, Et.ease)) : 0),
            P &&
              e._yoyo &&
              !e._repeat &&
              ((P = e._yEase), (e._yEase = e._ease), (e._ease = P)),
            !U)
          ) {
            if ((E && E.render(-1, !0).kill(), w)) {
              if (
                (R(
                  (e._startAt = Ue.set(
                    B,
                    S(
                      {
                        data: "isStart",
                        overwrite: !1,
                        parent: L,
                        immediateRender: !0,
                        lazy: u(b),
                        startAt: null,
                        delay: 0,
                        onUpdate: M,
                        onUpdateParams: O,
                        callbackScope: k,
                        stagger: 0,
                      },
                      w
                    )
                  ))
                ),
                x)
              )
                if (0 < r) z || (e._startAt = 0);
                else if (F) return;
            } else if (C && F)
              if (E) z || (e._startAt = 0);
              else if (
                (r && (x = !1),
                R(
                  (e._startAt = Ue.set(
                    B,
                    oe(A(v, Kt), {
                      overwrite: !1,
                      data: "isFromStart",
                      lazy: x && u(b),
                      immediateRender: x,
                      stagger: 0,
                      parent: L,
                    })
                  ))
                ),
                x)
              ) {
                if (!r) return;
              } else t(e._startAt, Lt);
            for (
              n = A(v, Kt),
                d = (l = B[(e._pt = 0)] ? g(B[0]).harness : 0) && v[l.prop],
                b = (F && u(b)) || (b && !F),
                i = 0;
              i < B.length;
              i++
            ) {
              if (
                ((f = (o = B[i])._gsap || m(B)[i]._gsap),
                (e._ptLookup[i] = c = {}),
                ee[f.id] && T(),
                (_ = I === B ? i : I.indexOf(o)),
                l &&
                  !1 !== (p = new l()).init(o, d || n, e, _, I) &&
                  ((e._pt = a =
                    new tr(e._pt, o, p.name, 0, 1, p.render, p, 0, p.priority)),
                  p._props.forEach(function (t) {
                    c[t] = a;
                  }),
                  p.priority && (h = 1)),
                !l || d)
              )
                for (s in n)
                  re[s] && (p = Re(s, n, e, _, o, I))
                    ? p.priority && (h = 1)
                    : (c[s] = a =
                        Ee.call(e, o, s, "get", n[s], _, I, 0, v.stringFilter));
              e._op && e._op[i] && e.kill(o, e._op[i]),
                Y &&
                  e._pt &&
                  ((Fe = e), lt.killTweensOf(o, c, "started"), (Fe = 0)),
                e._pt && b && (ee[f.id] = 1);
            }
            h && Ke(e), e._onInit && e._onInit(e);
          }
          (e._from = !U && !!v.runBackwards),
            (e._onUpdate = M),
            (e._initted = 1);
        },
        Le = function (t, e, r, s, a) {
          return i(t)
            ? t.call(e, r, s, a)
            : n(t) && ~t.indexOf("random(")
            ? K(t)
            : t;
        },
        Ie = ae + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase",
        Ye = (Ie + ",id,stagger,delay,duration,paused").split(","),
        Ue = (function (t) {
          function i(e, n, i, a) {
            var h;
            "number" == typeof n && ((i.duration = n), (n = i), (i = null));
            var l,
              p,
              _,
              g,
              v,
              y,
              w,
              x,
              b = (h = t.call(this, a ? n : D(n), i) || this).vars,
              T = b.duration,
              M = b.delay,
              O = b.immediateRender,
              k = b.stagger,
              C = b.overwrite,
              P = b.keyframes,
              A = b.defaults,
              z = h.parent,
              R = (qt(e) ? s(e[0]) : "length" in n) ? [e] : pe(e);
            if (
              ((h._targets = R.length
                ? m(R)
                : c(
                    "GSAP target " + e + " not found. https://greensock.com",
                    !Ft.nullTargetWarn
                  ) || []),
              (h._ptLookup = []),
              (h._overwrite = C),
              P || k || f(T) || f(M))
            ) {
              if (
                ((n = h.vars),
                (l = h.timeline =
                  new ze({ data: "nested", defaults: A || {} })).kill(),
                (l.parent = r(h)),
                P)
              )
                S(l.vars.defaults, { ease: "none" }),
                  P.forEach(function (t) {
                    return l.to(R, t, ">");
                  });
              else {
                if (((g = R.length), (w = k ? W(k) : d), o(k)))
                  for (v in k) ~Ie.indexOf(v) && ((x = x || {})[v] = k[v]);
                for (p = 0; p < g; p++) {
                  for (v in ((_ = {}), n)) Ye.indexOf(v) < 0 && (_[v] = n[v]);
                  (_.stagger = 0),
                    x && oe(_, x),
                    n.yoyoEase && !n.repeat && (_.yoyoEase = n.yoyoEase),
                    (y = R[p]),
                    (_.duration = +Le(T, r(h), p, y, R)),
                    (_.delay = (+Le(M, r(h), p, y, R) || 0) - h._delay),
                    !k &&
                      1 === g &&
                      _.delay &&
                      ((h._delay = M = _.delay),
                      (h._start += M),
                      (_.delay = 0)),
                    l.to(y, _, w(p, y, R));
                }
                T = M = 0;
              }
              T || h.duration((T = l.duration()));
            } else h.timeline = 0;
            return (
              !0 === C && ((Fe = r(h)), lt.killTweensOf(R), (Fe = 0)),
              z && I(z, r(h)),
              (O ||
                (!T &&
                  !P &&
                  h._start === z._time &&
                  u(O) &&
                  (function t(e) {
                    return !e || (e._ts && t(e.parent));
                  })(r(h)) &&
                  "nested" !== z.data)) &&
                ((h._tTime = -Lt), h.render(Math.max(0, -M))),
              h
            );
          }
          e(i, t);
          var a = i.prototype;
          return (
            (a.render = function (t, e, r) {
              var n,
                i,
                s,
                a,
                o,
                u,
                h,
                f,
                l,
                p = this._time,
                c = this._tDur,
                _ = this._dur,
                d = c - Lt < t && 0 <= t ? c : t < Lt ? 0 : t;
              if (_) {
                if (
                  d !== this._tTime ||
                  !t ||
                  r ||
                  (this._startAt && this._zTime < 0 != t < 0)
                ) {
                  if (((n = d), (f = this.timeline), this._repeat)) {
                    if (
                      ((_ < (n = w(d % (a = _ + this._rDelay))) || c === d) &&
                        (n = _),
                      (s = ~~(d / a)) && s === d / a && ((n = _), s--),
                      (u = this._yoyo && 1 & s) &&
                        ((l = this._yEase), (n = _ - n)),
                      (o = ue(this._tTime, a)),
                      n === p && !r && this._initted)
                    )
                      return this;
                    s !== o &&
                      (!this.vars.repeatRefresh ||
                        u ||
                        this._lock ||
                        ((this._lock = r = 1),
                        (this.render(a * s, !0).invalidate()._lock = 0)));
                  }
                  if (!this._initted && U(this, n, r, e))
                    return (this._tTime = 0), this;
                  for (
                    this._tTime = d,
                      this._time = n,
                      !this._act &&
                        this._ts &&
                        ((this._act = 1), (this._lazy = 0)),
                      this.ratio = h = (l || this._ease)(n / _),
                      this._from && (this.ratio = h = 1 - h),
                      p || !n || e || _e(this, "onStart"),
                      i = this._pt;
                    i;

                  )
                    i.r(h, i.d), (i = i._next);
                  (f &&
                    f.render(t < 0 ? t : !n && u ? -Lt : f._dur * h, e, r)) ||
                    (this._startAt && (this._zTime = t)),
                    this._onUpdate &&
                      !e &&
                      (t < 0 && this._startAt && this._startAt.render(t, !0, r),
                      _e(this, "onUpdate")),
                    this._repeat &&
                      s !== o &&
                      this.vars.onRepeat &&
                      !e &&
                      this.parent &&
                      _e(this, "onRepeat"),
                    (d !== this._tDur && d) ||
                      this._tTime !== d ||
                      (t < 0 &&
                        this._startAt &&
                        !this._onUpdate &&
                        this._startAt.render(t, !0, r),
                      (!t && _) ||
                        !((t && 0 < this._ts) || (!d && this._ts < 0)) ||
                        R(this, 1),
                      e ||
                        (t < 0 && !p) ||
                        (d < c && 0 < this.timeScale()) ||
                        (_e(
                          this,
                          d === c ? "onComplete" : "onReverseComplete",
                          !0
                        ),
                        this._prom && this._prom()));
                }
              } else
                !(function (t, e, r, n) {
                  var i,
                    s = t._zTime < 0 ? 0 : 1,
                    a = e < 0 ? 0 : 1,
                    o = t._rDelay,
                    u = 0;
                  if (
                    (o &&
                      t._repeat &&
                      ((u = fe(0, t._tDur, e)),
                      ue(u, o) !== ue(t._tTime, o) &&
                        ((s = 1 - a),
                        t.vars.repeatRefresh && t._initted && t.invalidate())),
                    (t._initted || !U(t, e, n, r)) &&
                      (a !== s || n || t._zTime === Lt || (!e && t._zTime)))
                  ) {
                    for (
                      t._zTime = e || (r ? Lt : 0),
                        t.ratio = a,
                        t._from && (a = 1 - a),
                        t._time = 0,
                        t._tTime = u,
                        r || _e(t, "onStart"),
                        i = t._pt;
                      i;

                    )
                      i.r(a, i.d), (i = i._next);
                    !a &&
                      t._startAt &&
                      !t._onUpdate &&
                      t._start &&
                      t._startAt.render(e, !0, n),
                      t._onUpdate && (r || _e(t, "onUpdate")),
                      u && t._repeat && !r && t.parent && _e(t, "onRepeat"),
                      (e >= t._tDur || e < 0) &&
                        t.ratio === a &&
                        (t.ratio && R(t, 1),
                        r ||
                          (_e(
                            t,
                            t.ratio ? "onComplete" : "onReverseComplete",
                            !0
                          ),
                          t._prom && t._prom()));
                  }
                })(this, t, e, r);
              return this;
            }),
            (a.targets = function () {
              return this._targets;
            }),
            (a.invalidate = function () {
              return (
                (this._pt =
                  this._op =
                  this._startAt =
                  this._onUpdate =
                  this._act =
                  this._lazy =
                    0),
                (this._ptLookup = []),
                this.timeline && this.timeline.invalidate(),
                t.prototype.invalidate.call(this)
              );
            }),
            (a.kill = function (t, e) {
              if (
                (void 0 === e && (e = "all"),
                !(t || (e && "all" !== e)) && ((this._lazy = 0), this.parent))
              )
                return et(this);
              if (this.timeline)
                return (
                  this.timeline.killTweensOf(
                    t,
                    e,
                    Fe && !0 !== Fe.vars.overwrite
                  ),
                  this
                );
              var r,
                i,
                s,
                a,
                o,
                u,
                h,
                f = this._targets,
                l = t ? pe(t) : f,
                p = this._ptLookup,
                c = this._pt;
              if (
                (!e || "all" === e) &&
                (function (t, e) {
                  for (
                    var r = t.length, n = r === e.length;
                    n && r-- && t[r] === e[r];

                  );
                  return r < 0;
                })(f, l)
              )
                return et(this);
              for (
                r = this._op = this._op || [],
                  "all" !== e &&
                    (n(e) &&
                      ((o = {}),
                      y(e, function (t) {
                        return (o[t] = 1);
                      }),
                      (e = o)),
                    (e = (function (t, e) {
                      var r,
                        n,
                        i,
                        s,
                        a = t[0] ? g(t[0]).harness : 0,
                        o = a && a.aliases;
                      if (!o) return e;
                      for (n in ((r = oe({}, e)), o))
                        if ((n in r))
                          for (i = (s = o[n].split(",")).length; i--; )
                            r[s[i]] = r[n];
                      return r;
                    })(f, e))),
                  h = f.length;
                h--;

              )
                if (~l.indexOf(f[h]))
                  for (o in ((i = p[h]),
                  "all" === e
                    ? ((r[h] = e), (a = i), (s = {}))
                    : ((s = r[h] = r[h] || {}), (a = e)),
                  a))
                    (u = i && i[o]) &&
                      (("kill" in u.d && !0 !== u.d.kill(o)) ||
                        z(this, u, "_pt"),
                      delete i[o]),
                      "all" !== s && (s[o] = 1);
              return this._initted && !this._pt && c && et(this), this;
            }),
            (i.to = function (t, e, r) {
              return new i(t, e, r);
            }),
            (i.from = function (t, e) {
              return new i(t, b(arguments, 1));
            }),
            (i.delayedCall = function (t, e, r, n) {
              return new i(e, 0, {
                immediateRender: !1,
                lazy: !1,
                overwrite: !1,
                delay: t,
                onComplete: e,
                onReverseComplete: e,
                onCompleteParams: r,
                onReverseCompleteParams: r,
                callbackScope: n,
              });
            }),
            (i.fromTo = function (t, e, r) {
              return new i(t, b(arguments, 2));
            }),
            (i.set = function (t, e) {
              return (
                (e.duration = 0), e.repeatDelay || (e.repeat = 0), new i(t, e)
              );
            }),
            (i.killTweensOf = function (t, e, r) {
              return lt.killTweensOf(t, e, r);
            }),
            i
          );
        })(Ae);
      function Xe(t, e, r) {
        return t.setAttribute(e, r);
      }
      function Ne(t, e, r, n) {
        n.mSet(t, e, n.m.call(n.tween, r, n.mt), n);
      }
      S(Ue.prototype, {
        _targets: [],
        _lazy: 0,
        _startAt: 0,
        _op: 0,
        _onInit: 0,
      }),
        y("staggerTo,staggerFrom,staggerFromTo", function (t) {
          Ue[t] = function () {
            var e = new ze(),
              r = le.call(arguments, 0);
            return (
              r.splice("staggerFromTo" === t ? 5 : 4, 0, 0), e[t].apply(e, r)
            );
          };
        });
      var je = function (t, e, r) {
          return (t[e] = r);
        },
        qe = function (t, e, r) {
          return t[e](r);
        },
        Ve = function (t, e, r, n) {
          return t[e](n.fp, r);
        },
        Qe = function (t, e) {
          return i(t[e]) ? qe : a(t[e]) && t.setAttribute ? Xe : je;
        },
        Ge = function (t, e) {
          return e.set(e.t, e.p, Math.round(1e4 * (e.s + e.c * t)) / 1e4, e);
        },
        We = function (t, e) {
          return e.set(e.t, e.p, !!(e.s + e.c * t), e);
        },
        Ze = function (t, e) {
          var r = e._pt,
            n = "";
          if (!t && e.b) n = e.b;
          else if (1 === t && e.e) n = e.e;
          else {
            for (; r; )
              (n =
                r.p +
                (r.m
                  ? r.m(r.s + r.c * t)
                  : Math.round(1e4 * (r.s + r.c * t)) / 1e4) +
                n),
                (r = r._next);
            n += e.c;
          }
          e.set(e.t, e.p, n, e);
        },
        He = function (t, e) {
          for (var r = e._pt; r; ) r.r(t, r.d), (r = r._next);
        },
        $e = function (t, e, r, n) {
          for (var i, s = this._pt; s; )
            (i = s._next), s.p === n && s.modifier(t, e, r), (s = i);
        },
        Je = function (t) {
          for (var e, r, n = this._pt; n; )
            (r = n._next),
              (n.p === t && !n.op) || n.op === t
                ? z(this, n, "_pt")
                : n.dep || (e = 1),
              (n = r);
          return !e;
        },
        Ke = function (t) {
          for (var e, r, n, i, s = t._pt; s; ) {
            for (e = s._next, r = n; r && r.pr > s.pr; ) r = r._next;
            (s._prev = r ? r._prev : i) ? (s._prev._next = s) : (n = s),
              (s._next = r) ? (r._prev = s) : (i = s),
              (s = e);
          }
          t._pt = n;
        },
        tr =
          ((er.prototype.modifier = function (t, e, r) {
            (this.mSet = this.mSet || this.set),
              (this.set = Ne),
              (this.m = t),
              (this.mt = r),
              (this.tween = e);
          }),
          er);
      function er(t, e, r, n, i, s, a, o, u) {
        (this.t = e),
          (this.s = n),
          (this.c = i),
          (this.p = r),
          (this.r = s || Ge),
          (this.d = a || this),
          (this.set = o || je),
          (this.pr = u || 0),
          (this._next = t) && (t._prev = this);
      }
      y(
        ae +
          "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert",
        function (t) {
          return (Kt[t] = 1);
        }
      ),
        (Jt.TweenMax = Jt.TweenLite = Ue),
        (Jt.TimelineLite = Jt.TimelineMax = ze),
        (lt = new ze({
          sortChildren: !1,
          defaults: Et,
          autoRemoveChildren: !0,
          id: "root",
          smoothChildTiming: !0,
        })),
        (Ft.stringFilter = at);
      var rr = {
        registerPlugin: function () {
          for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++)
            e[r] = arguments[r];
          e.forEach(function (t) {
            return (function (t) {
              var e = (t = (!t.name && t.default) || t).name,
                r = i(t),
                n =
                  e && !r && t.init
                    ? function () {
                        this._props = [];
                      }
                    : t,
                s = {
                  init: d,
                  render: He,
                  add: Ee,
                  kill: Je,
                  modifier: $e,
                  rawVars: 0,
                },
                a = {
                  targetTest: 0,
                  get: 0,
                  getSetter: Qe,
                  aliases: {},
                  register: 0,
                };
              if ((we(), t !== n)) {
                if (re[e]) return;
                S(n, S(A(t, s), a)),
                  oe(n.prototype, oe(s, A(t, a))),
                  (re[(n.prop = e)] = n),
                  t.targetTest && (se.push(n), (Kt[e] = 1)),
                  (e =
                    ("css" === e
                      ? "CSS"
                      : e.charAt(0).toUpperCase() + e.substr(1)) + "Plugin");
              }
              _(e, n), t.register && t.register(sr, n, tr);
            })(t);
          });
        },
        timeline: function (t) {
          return new ze(t);
        },
        getTweensOf: function (t, e) {
          return lt.getTweensOf(t, e);
        },
        getProperty: function (t, e, r, i) {
          n(t) && (t = pe(t)[0]);
          var s = g(t || {}).get,
            a = r ? k : O;
          return (
            "native" === r && (r = ""),
            t
              ? e
                ? a(((re[e] && re[e].get) || s)(t, e, r, i))
                : function (e, r, n) {
                    return a(((re[e] && re[e].get) || s)(t, e, r, n));
                  }
              : t
          );
        },
        quickSetter: function (t, e, r) {
          if (1 < (t = pe(t)).length) {
            var n = t.map(function (t) {
                return sr.quickSetter(t, e, r);
              }),
              i = n.length;
            return function (t) {
              for (var e = i; e--; ) n[e](t);
            };
          }
          t = t[0] || {};
          var s = re[e],
            a = g(t),
            o = s
              ? function (e) {
                  var n = new s();
                  (vt._pt = 0),
                    n.init(t, r ? e + r : e, vt, 0, [t]),
                    n.render(1, n),
                    vt._pt && He(1, vt);
                }
              : a.set(t, e);
          return s
            ? o
            : function (n) {
                return o(t, e, r ? n + r : n, a, 1);
              };
        },
        isTweening: function (t) {
          return 0 < lt.getTweensOf(t, !0).length;
        },
        defaults: function (t) {
          return t && t.ease && (t.ease = Oe(t.ease, Et.ease)), P(Et, t || {});
        },
        config: function (t) {
          return P(Ft, t || {});
        },
        registerEffect: function (t) {
          var e = t.name,
            r = t.effect,
            n = t.plugins,
            i = t.defaults,
            s = t.extendTimeline;
          (n || "").split(",").forEach(function (t) {
            return (
              t &&
              !re[t] &&
              !Jt[t] &&
              c(e + " effect requires " + t + " plugin.")
            );
          }),
            (ne[e] = function (t, e) {
              return r(pe(t), S(e || {}, i));
            }),
            s &&
              (ze.prototype[e] = function (t, r, n) {
                return this.add(ne[e](t, o(r) ? r : (n = r) && {}), n);
              });
        },
        registerEase: function (t, e) {
          xe[t] = Oe(e);
        },
        parseEase: function (t, e) {
          return arguments.length ? Oe(t, e) : xe;
        },
        getById: function (t) {
          return lt.getById(t);
        },
        exportRoot: function (t, e) {
          void 0 === t && (t = {});
          var r,
            n,
            i = new ze(t);
          for (
            i.smoothChildTiming = u(t.smoothChildTiming),
              lt.remove(i),
              i._dp = 0,
              i._time = i._tTime = lt._time,
              r = lt._first;
            r;

          )
            (n = r._next),
              (!e &&
                !r._dur &&
                r instanceof Ue &&
                r.vars.onComplete === r._targets[0]) ||
                Y(i, r, r._start - r._delay),
              (r = n);
          return Y(lt, i, 0), i;
        },
        utils: {
          wrap: function t(e, r, n) {
            var i = r - e;
            return qt(e)
              ? J(e, t(0, e.length), r)
              : q(n, function (t) {
                  return ((i + ((t - e) % i)) % i) + e;
                });
          },
          wrapYoyo: function t(e, r, n) {
            var i = r - e,
              s = 2 * i;
            return qt(e)
              ? J(e, t(0, e.length - 1), r)
              : q(n, function (t) {
                  return e + (i < (t = (s + ((t - e) % s)) % s) ? s - t : t);
                });
          },
          distribute: W,
          random: $,
          snap: H,
          normalize: function (t, e, r) {
            return ce(t, e, 0, 1, r);
          },
          getUnit: V,
          clamp: function (t, e, r) {
            return q(r, function (r) {
              return fe(t, e, r);
            });
          },
          splitColor: nt,
          toArray: pe,
          mapRange: ce,
          pipe: function () {
            for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++)
              e[r] = arguments[r];
            return function (t) {
              return e.reduce(function (t, e) {
                return e(t);
              }, t);
            };
          },
          unitize: function (t, e) {
            return function (r) {
              return t(parseFloat(r)) + (e || V(r));
            };
          },
          interpolate: function t(e, r, i, s) {
            var a = isNaN(e + r)
              ? 0
              : function (t) {
                  return (1 - t) * e + t * r;
                };
            if (!a) {
              var o,
                u,
                h,
                f,
                l,
                p = n(e),
                c = {};
              if ((!0 === i && (s = 1) && (i = null), p))
                (e = { p: e }), (r = { p: r });
              else if (qt(e) && !qt(r)) {
                for (h = [], f = e.length, l = f - 2, u = 1; u < f; u++)
                  h.push(t(e[u - 1], e[u]));
                f--,
                  (a = function (t) {
                    t *= f;
                    var e = Math.min(l, ~~t);
                    return h[e](t - e);
                  }),
                  (i = r);
              } else s || (e = oe(qt(e) ? [] : {}, e));
              if (!h) {
                for (o in r) Ee.call(c, e, o, "get", r[o]);
                a = function (t) {
                  return He(t, c) || (p ? e.p : e);
                };
              }
            }
            return q(i, a);
          },
          shuffle: G,
        },
        install: l,
        effects: ne,
        ticker: ye,
        updateRoot: ze.updateRoot,
        plugins: re,
        globalTimeline: lt,
        core: {
          PropTween: tr,
          globals: _,
          Tween: Ue,
          Timeline: ze,
          Animation: Ae,
          getCache: g,
          _removeLinkedListItem: z,
        },
      };
      function nr(t, e) {
        for (var r = t._pt; r && r.p !== e && r.op !== e && r.fp !== e; )
          r = r._next;
        return r;
      }
      function ir(t, e) {
        return {
          name: t,
          rawVars: 1,
          init: function (t, r, i) {
            i._onInit = function (t) {
              var i, s;
              if (
                (n(r) &&
                  ((i = {}),
                  y(r, function (t) {
                    return (i[t] = 1);
                  }),
                  (r = i)),
                e)
              ) {
                for (s in ((i = {}), r)) i[s] = e(r[s]);
                r = i;
              }
              !(function (t, e) {
                var r,
                  n,
                  i,
                  s = t._targets;
                for (r in e)
                  for (n = s.length; n--; )
                    (i = (i = t._ptLookup[n][r]) && i.d) &&
                      (i._pt && (i = nr(i, r)),
                      i && i.modifier && i.modifier(e[r], t, s[n], r));
              })(t, r);
            };
          },
        };
      }
      y("to,from,fromTo,delayedCall,set,killTweensOf", function (t) {
        return (rr[t] = Ue[t]);
      }),
        ye.add(ze.updateRoot),
        (vt = rr.to({}, { duration: 0 }));
      var sr =
        rr.registerPlugin(
          {
            name: "attr",
            init: function (t, e, r, n, i) {
              for (var s in e)
                this.add(
                  t,
                  "setAttribute",
                  (t.getAttribute(s) || 0) + "",
                  e[s],
                  n,
                  i,
                  0,
                  0,
                  s
                ),
                  this._props.push(s);
            },
          },
          {
            name: "endArray",
            init: function (t, e) {
              for (var r = e.length; r--; ) this.add(t, r, t[r] || 0, e[r]);
            },
          },
          ir("roundProps", Z),
          ir("modifiers"),
          ir("snap", H)
        ) || rr;
      function ar(t, e) {
        return e.set(
          e.t,
          e.p,
          Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u,
          e
        );
      }
      function or(t, e) {
        return e.set(
          e.t,
          e.p,
          1 === t ? e.e : Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u,
          e
        );
      }
      function ur(t, e) {
        return e.set(
          e.t,
          e.p,
          t ? Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u : e.b,
          e
        );
      }
      function hr(t, e) {
        var r = e.s + e.c * t;
        e.set(e.t, e.p, ~~(r + (r < 0 ? -0.5 : 0.5)) + e.u, e);
      }
      function fr(t, e) {
        return e.set(e.t, e.p, t ? e.e : e.b, e);
      }
      function lr(t, e) {
        return e.set(e.t, e.p, 1 !== t ? e.b : e.e, e);
      }
      function pr(t, e, r) {
        return (t.style[e] = r);
      }
      function cr(t, e, r) {
        return t.style.setProperty(e, r);
      }
      function _r(t, e, r) {
        return (t._gsap[e] = r);
      }
      function dr(t, e, r) {
        return (t._gsap.scaleX = t._gsap.scaleY = r);
      }
      function mr(t, e, r, n, i) {
        var s = t._gsap;
        (s.scaleX = s.scaleY = r), s.renderTransform(i, s);
      }
      function gr(t, e, r, n, i) {
        var s = t._gsap;
        (s[e] = r), s.renderTransform(i, s);
      }
      function vr(t, e) {
        var r = Ur.createElementNS
          ? Ur.createElementNS(
              (e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"),
              t
            )
          : Ur.createElement(t);
        return r.style ? r : Ur.createElement(t);
      }
      function yr(t, e, r) {
        var n = getComputedStyle(t);
        return (
          n[e] ||
          n.getPropertyValue(e.replace(mn, "-$1").toLowerCase()) ||
          n.getPropertyValue(e) ||
          (!r && yr(t, Tn(e) || e, 1)) ||
          ""
        );
      }
      function wr() {
        "undefined" == typeof window ||
          ((Yr = window),
          (Ur = Yr.document),
          (Xr = Ur.documentElement),
          (jr = vr("div") || { style: {} }),
          (qr = vr("div")),
          (wn = Tn(wn)),
          (xn = Tn(xn)),
          (jr.style.cssText =
            "border-width:0;line-height:0;position:absolute;padding:0"),
          (Qr = !!Tn("perspective")),
          (Nr = 1));
      }
      function xr(t) {
        var e,
          r = vr(
            "svg",
            (this.ownerSVGElement &&
              this.ownerSVGElement.getAttribute("xmlns")) ||
              "http://www.w3.org/2000/svg"
          ),
          n = this.parentNode,
          i = this.nextSibling,
          s = this.style.cssText;
        if (
          (Xr.appendChild(r),
          r.appendChild(this),
          (this.style.display = "block"),
          t)
        )
          try {
            (e = this.getBBox()),
              (this._gsapBBox = this.getBBox),
              (this.getBBox = xr);
          } catch (t) {}
        else this._gsapBBox && (e = this._gsapBBox());
        return (
          n && (i ? n.insertBefore(this, i) : n.appendChild(this)),
          Xr.removeChild(r),
          (this.style.cssText = s),
          e
        );
      }
      function br(t, e) {
        for (var r = e.length; r--; )
          if (t.hasAttribute(e[r])) return t.getAttribute(e[r]);
      }
      function Tr(t) {
        var e;
        try {
          e = t.getBBox();
        } catch (r) {
          e = xr.call(t, !0);
        }
        return (
          (e && (e.width || e.height)) ||
            t.getBBox === xr ||
            (e = xr.call(t, !0)),
          !e || e.width || e.x || e.y
            ? e
            : {
                x: +br(t, ["x", "cx", "x1"]) || 0,
                y: +br(t, ["y", "cy", "y1"]) || 0,
                width: 0,
                height: 0,
              }
        );
      }
      function Mr(t) {
        return !(!t.getCTM || (t.parentNode && !t.ownerSVGElement) || !Tr(t));
      }
      function Or(t, e) {
        if (e) {
          var r = t.style;
          e in pn && (e = wn),
            r.removeProperty
              ? (("ms" !== e.substr(0, 2) && "webkit" !== e.substr(0, 6)) ||
                  (e = "-" + e),
                r.removeProperty(e.replace(mn, "-$1").toLowerCase()))
              : r.removeAttribute(e);
        }
      }
      function kr(t, e, r, n, i, s) {
        var a = new tr(t._pt, e, r, 0, 1, s ? lr : fr);
        return ((t._pt = a).b = n), (a.e = i), t._props.push(r), a;
      }
      function Sr(t, e, r, n) {
        var i,
          s,
          a,
          o,
          u = parseFloat(r) || 0,
          h = (r + "").trim().substr((u + "").length) || "px",
          f = jr.style,
          l = gn.test(e),
          p = "svg" === t.tagName.toLowerCase(),
          c = (p ? "client" : "offset") + (l ? "Width" : "Height"),
          _ = "px" === n;
        return n === h || !u || Mn[n] || Mn[h]
          ? u
          : ((o = t.getCTM && Mr(t)),
            "%" === n && (pn[e] || ~e.indexOf("adius"))
              ? w((u / (o ? t.getBBox()[l ? "width" : "height"] : t[c])) * 100)
              : ((f[l ? "width" : "height"] = 100 + (_ ? h : n)),
                (s =
                  ~e.indexOf("adius") || ("em" === n && t.appendChild && !p)
                    ? t
                    : t.parentNode),
                o && (s = (t.ownerSVGElement || {}).parentNode),
                (s && s !== Ur && s.appendChild) || (s = Ur.body),
                (a = s._gsap) && "%" === n && a.width && l && a.time === ye.time
                  ? w((u / a.width) * 100)
                  : (s === t && (f.position = "static"),
                    s.appendChild(jr),
                    (i = jr[c]),
                    s.removeChild(jr),
                    (f.position = "absolute"),
                    l &&
                      "%" === n &&
                      (((a = g(s)).time = ye.time), (a.width = s[c])),
                    w(_ ? (i * u) / 100 : (100 / i) * u))));
      }
      function Cr(t, e, r, n) {
        var i;
        return (
          Nr || wr(),
          e in yn &&
            "transform" !== e &&
            ~(e = yn[e]).indexOf(",") &&
            (e = e.split(",")[0]),
          pn[e] && "transform" !== e
            ? ((i = Pn(t, n)),
              (i =
                "transformOrigin" !== e
                  ? i[e]
                  : An(yr(t, xn)) + " " + i.zOrigin + "px"))
            : ((i = t.style[e]) &&
                "auto" !== i &&
                !n &&
                !~(i + "").indexOf("calc(")) ||
              (i =
                (kn[e] && kn[e](t, e, r)) ||
                yr(t, e) ||
                v(t, e) ||
                ("opacity" === e ? 1 : 0)),
          r && !~(i + "").indexOf(" ") ? Sr(t, e, i, r) + r : i
        );
      }
      function Pr(t, e, r, n) {
        if (!r || "none" === r) {
          var i = Tn(e, t, 1),
            s = i && yr(t, i, 1);
          s && s !== r && ((e = i), (r = s));
        }
        var a,
          o,
          u,
          h,
          f,
          l,
          p,
          c,
          _,
          d,
          m,
          g,
          v = new tr(this._pt, t.style, e, 0, 1, Ze),
          y = 0,
          w = 0;
        if (
          ((v.b = r),
          (v.e = n),
          (r += ""),
          "auto" == (n += "") &&
            ((t.style[e] = n), (n = yr(t, e) || n), (t.style[e] = r)),
          at((a = [r, n])),
          (n = a[1]),
          (u = (r = a[0]).match(Gt) || []),
          (n.match(Gt) || []).length)
        ) {
          for (; (o = Gt.exec(n)); )
            (p = o[0]),
              (_ = n.substring(y, o.index)),
              f
                ? (f = (f + 1) % 5)
                : ("rgba(" !== _.substr(-5) && "hsla(" !== _.substr(-5)) ||
                  (f = 1),
              p !== (l = u[w++] || "") &&
                ((h = parseFloat(l) || 0),
                (m = l.substr((h + "").length)),
                (g = "=" === p.charAt(1) ? +(p.charAt(0) + "1") : 0) &&
                  (p = p.substr(2)),
                (c = parseFloat(p)),
                (d = p.substr((c + "").length)),
                (y = Gt.lastIndex - d.length),
                d ||
                  ((d = d || Ft.units[e] || m),
                  y === n.length && ((n += d), (v.e += d))),
                m !== d && (h = Sr(t, e, l, d) || 0),
                (v._pt = {
                  _next: v._pt,
                  p: _ || 1 === w ? _ : ",",
                  s: h,
                  c: g ? g * c : c - h,
                  m: f && f < 4 ? Math.round : 0,
                }));
          v.c = y < n.length ? n.substring(y, n.length) : "";
        } else v.r = "display" === e && "none" === n ? lr : fr;
        return Ht.test(n) && (v.e = 0), (this._pt = v);
      }
      function Ar(t) {
        var e = t.split(" "),
          r = e[0],
          n = e[1] || "50%";
        return (
          ("top" !== r && "bottom" !== r && "left" !== n && "right" !== n) ||
            ((t = r), (r = n), (n = t)),
          (e[0] = On[r] || r),
          (e[1] = On[n] || n),
          e.join(" ")
        );
      }
      function Dr(t, e) {
        if (e.tween && e.tween._time === e.tween._dur) {
          var r,
            n,
            i,
            s = e.t,
            a = s.style,
            o = e.u,
            u = s._gsap;
          if ("all" === o || !0 === o) (a.cssText = ""), (n = 1);
          else
            for (i = (o = o.split(",")).length; -1 < --i; )
              (r = o[i]),
                pn[r] && ((n = 1), (r = "transformOrigin" === r ? xn : wn)),
                Or(s, r);
          n &&
            (Or(s, wn),
            u &&
              (u.svg && s.removeAttribute("transform"),
              Pn(s, 1),
              (u.uncache = 1)));
        }
      }
      function zr(t) {
        return "matrix(1, 0, 0, 1, 0, 0)" === t || "none" === t || !t;
      }
      function Rr(t) {
        var e = yr(t, wn);
        return zr(e) ? Sn : e.substr(7).match(Qt).map(w);
      }
      function Fr(t, e) {
        var r,
          n,
          i,
          s,
          a = t._gsap || g(t),
          o = t.style,
          u = Rr(t);
        return a.svg && t.getAttribute("transform")
          ? "1,0,0,1,0,0" ===
            (u = [
              (i = t.transform.baseVal.consolidate().matrix).a,
              i.b,
              i.c,
              i.d,
              i.e,
              i.f,
            ]).join(",")
            ? Sn
            : u
          : (u !== Sn ||
              t.offsetParent ||
              t === Xr ||
              a.svg ||
              ((i = o.display),
              (o.display = "block"),
              ((r = t.parentNode) && t.offsetParent) ||
                ((s = 1), (n = t.nextSibling), Xr.appendChild(t)),
              (u = Rr(t)),
              i ? (o.display = i) : Or(t, "display"),
              s &&
                (n
                  ? r.insertBefore(t, n)
                  : r
                  ? r.appendChild(t)
                  : Xr.removeChild(t))),
            e && 6 < u.length ? [u[0], u[1], u[4], u[5], u[12], u[13]] : u);
      }
      function Er(t, e, r, n, i, s) {
        var a,
          o,
          u,
          h = t._gsap,
          f = i || Fr(t, !0),
          l = h.xOrigin || 0,
          p = h.yOrigin || 0,
          c = h.xOffset || 0,
          _ = h.yOffset || 0,
          d = f[0],
          m = f[1],
          g = f[2],
          v = f[3],
          y = f[4],
          w = f[5],
          x = e.split(" "),
          b = parseFloat(x[0]) || 0,
          T = parseFloat(x[1]) || 0;
        r
          ? f !== Sn &&
            (o = d * v - m * g) &&
            ((u = b * (-m / o) + T * (d / o) - (d * w - m * y) / o),
            (b = b * (v / o) + T * (-g / o) + (g * w - v * y) / o),
            (T = u))
          : ((b =
              (a = Tr(t)).x + (~x[0].indexOf("%") ? (b / 100) * a.width : b)),
            (T =
              a.y + (~(x[1] || x[0]).indexOf("%") ? (T / 100) * a.height : T))),
          n || (!1 !== n && h.smooth)
            ? ((y = b - l),
              (w = T - p),
              (h.xOffset = c + (y * d + w * g) - y),
              (h.yOffset = _ + (y * m + w * v) - w))
            : (h.xOffset = h.yOffset = 0),
          (h.xOrigin = b),
          (h.yOrigin = T),
          (h.smooth = !!n),
          (h.origin = e),
          (h.originIsAbsolute = !!r),
          (t.style[xn] = "0px 0px"),
          s &&
            (kr(s, h, "xOrigin", l, b),
            kr(s, h, "yOrigin", p, T),
            kr(s, h, "xOffset", c, h.xOffset),
            kr(s, h, "yOffset", _, h.yOffset)),
          t.setAttribute("data-svg-origin", b + " " + T);
      }
      function Br(t, e, r) {
        var n = V(e);
        return w(parseFloat(e) + parseFloat(Sr(t, "x", r + "px", n))) + n;
      }
      function Lr(t, e, r, i, s, a) {
        var o,
          u,
          h = 360,
          f = n(s),
          l = parseFloat(s) * (f && ~s.indexOf("rad") ? cn : 1),
          p = a ? l * a : l - i,
          c = i + p + "deg";
        return (
          f &&
            ("short" === (o = s.split("_")[1]) &&
              (p %= h) != p % 180 &&
              (p += p < 0 ? h : -h),
            "cw" === o && p < 0
              ? (p = ((p + 36e9) % h) - ~~(p / h) * h)
              : "ccw" === o && 0 < p && (p = ((p - 36e9) % h) - ~~(p / h) * h)),
          (t._pt = u = new tr(t._pt, e, r, i, p, or)),
          (u.e = c),
          (u.u = "deg"),
          t._props.push(r),
          u
        );
      }
      function Ir(t, e, r) {
        var n,
          i,
          s,
          a,
          o,
          u,
          h,
          f = qr.style,
          l = r._gsap;
        for (i in ((f.cssText =
          getComputedStyle(r).cssText + ";position:absolute;display:block;"),
        (f[wn] = e),
        Ur.body.appendChild(qr),
        (n = Pn(qr, 1)),
        pn))
          (s = l[i]) !== (a = n[i]) &&
            "perspective,force3D,transformOrigin,svgOrigin".indexOf(i) < 0 &&
            ((o = V(s) !== (h = V(a)) ? Sr(r, i, s, h) : parseFloat(s)),
            (u = parseFloat(a)),
            (t._pt = new tr(t._pt, l, i, o, u - o, ar)),
            (t._pt.u = h || 0),
            t._props.push(i));
        Ur.body.removeChild(qr);
      }
      (Ue.version = ze.version = sr.version = "3.2.4"), (mt = 1), h() && we();
      var Yr,
        Ur,
        Xr,
        Nr,
        jr,
        qr,
        Vr,
        Qr,
        Gr = xe.Power0,
        Wr = xe.Power1,
        Zr = xe.Power2,
        Hr = xe.Power3,
        $r = xe.Power4,
        Jr = xe.Linear,
        Kr = xe.Quad,
        tn = xe.Cubic,
        en = xe.Quart,
        rn = xe.Quint,
        nn = xe.Strong,
        sn = xe.Elastic,
        an = xe.Back,
        on = xe.SteppedEase,
        un = xe.Bounce,
        hn = xe.Sine,
        fn = xe.Expo,
        ln = xe.Circ,
        pn = {},
        cn = 180 / Math.PI,
        _n = Math.PI / 180,
        dn = Math.atan2,
        mn = /([A-Z])/g,
        gn = /(?:left|right|width|margin|padding|x)/i,
        vn = /[\s,\(]\S/,
        yn = {
          autoAlpha: "opacity,visibility",
          scale: "scaleX,scaleY",
          alpha: "opacity",
        },
        wn = "transform",
        xn = wn + "Origin",
        bn = "O,Moz,ms,Ms,Webkit".split(","),
        Tn = function (t, e, r) {
          var n = (e || jr).style,
            i = 5;
          if (t in n && !r) return t;
          for (
            t = t.charAt(0).toUpperCase() + t.substr(1);
            i-- && !(bn[i] + t in n);

          );
          return i < 0 ? null : (3 === i ? "ms" : 0 <= i ? bn[i] : "") + t;
        },
        Mn = { deg: 1, rad: 1, turn: 1 },
        On = {
          top: "0%",
          bottom: "100%",
          left: "0%",
          right: "100%",
          center: "50%",
        },
        kn = {
          clearProps: function (t, e, r, n, i) {
            if ("isFromStart" !== i.data) {
              var s = (t._pt = new tr(t._pt, e, r, 0, 0, Dr));
              return (
                (s.u = n), (s.pr = -10), (s.tween = i), t._props.push(r), 1
              );
            }
          },
        },
        Sn = [1, 0, 0, 1, 0, 0],
        Cn = {},
        Pn = function (t, e) {
          var r = t._gsap || new Pe(t);
          if ("x" in r && !e && !r.uncache) return r;
          var n,
            i,
            s,
            a,
            o,
            u,
            h,
            f,
            l,
            p,
            c,
            _,
            d,
            m,
            g,
            v,
            y,
            x,
            b,
            T,
            M,
            O,
            k,
            S,
            C,
            P,
            A,
            D,
            z,
            R,
            F,
            E,
            B = t.style,
            L = r.scaleX < 0,
            I = "deg",
            Y = yr(t, xn) || "0";
          return (
            (n = i = s = u = h = f = l = p = c = 0),
            (a = o = 1),
            (r.svg = !(!t.getCTM || !Mr(t))),
            (m = Fr(t, r.svg)),
            r.svg &&
              ((S = !r.uncache && t.getAttribute("data-svg-origin")),
              Er(t, S || Y, !!S || r.originIsAbsolute, !1 !== r.smooth, m)),
            (_ = r.xOrigin || 0),
            (d = r.yOrigin || 0),
            m !== Sn &&
              ((x = m[0]),
              (b = m[1]),
              (T = m[2]),
              (M = m[3]),
              (n = O = m[4]),
              (i = k = m[5]),
              6 === m.length
                ? ((a = Math.sqrt(x * x + b * b)),
                  (o = Math.sqrt(M * M + T * T)),
                  (u = x || b ? dn(b, x) * cn : 0),
                  (l = T || M ? dn(T, M) * cn + u : 0) &&
                    (o *= Math.cos(l * _n)),
                  r.svg &&
                    ((n -= _ - (_ * x + d * T)), (i -= d - (_ * b + d * M))))
                : ((E = m[6]),
                  (R = m[7]),
                  (A = m[8]),
                  (D = m[9]),
                  (z = m[10]),
                  (F = m[11]),
                  (n = m[12]),
                  (i = m[13]),
                  (s = m[14]),
                  (h = (g = dn(E, z)) * cn),
                  g &&
                    ((S = O * (v = Math.cos(-g)) + A * (y = Math.sin(-g))),
                    (C = k * v + D * y),
                    (P = E * v + z * y),
                    (A = O * -y + A * v),
                    (D = k * -y + D * v),
                    (z = E * -y + z * v),
                    (F = R * -y + F * v),
                    (O = S),
                    (k = C),
                    (E = P)),
                  (f = (g = dn(-T, z)) * cn),
                  g &&
                    ((v = Math.cos(-g)),
                    (F = M * (y = Math.sin(-g)) + F * v),
                    (x = S = x * v - A * y),
                    (b = C = b * v - D * y),
                    (T = P = T * v - z * y)),
                  (u = (g = dn(b, x)) * cn),
                  g &&
                    ((S = x * (v = Math.cos(g)) + b * (y = Math.sin(g))),
                    (C = O * v + k * y),
                    (b = b * v - x * y),
                    (k = k * v - O * y),
                    (x = S),
                    (O = C)),
                  h &&
                    359.9 < Math.abs(h) + Math.abs(u) &&
                    ((h = u = 0), (f = 180 - f)),
                  (a = w(Math.sqrt(x * x + b * b + T * T))),
                  (o = w(Math.sqrt(k * k + E * E))),
                  (g = dn(O, k)),
                  (l = 2e-4 < Math.abs(g) ? g * cn : 0),
                  (c = F ? 1 / (F < 0 ? -F : F) : 0)),
              r.svg &&
                ((m = t.getAttribute("transform")),
                (r.forceCSS =
                  t.setAttribute("transform", "") || !zr(yr(t, wn))),
                m && t.setAttribute("transform", m))),
            90 < Math.abs(l) &&
              Math.abs(l) < 270 &&
              (L
                ? ((a *= -1),
                  (l += u <= 0 ? 180 : -180),
                  (u += u <= 0 ? 180 : -180))
                : ((o *= -1), (l += l <= 0 ? 180 : -180))),
            (r.x =
              ((r.xPercent =
                n && Math.round(t.offsetWidth / 2) === Math.round(-n) ? -50 : 0)
                ? 0
                : n) + "px"),
            (r.y =
              ((r.yPercent =
                i && Math.round(t.offsetHeight / 2) === Math.round(-i)
                  ? -50
                  : 0)
                ? 0
                : i) + "px"),
            (r.z = s + "px"),
            (r.scaleX = w(a)),
            (r.scaleY = w(o)),
            (r.rotation = w(u) + I),
            (r.rotationX = w(h) + I),
            (r.rotationY = w(f) + I),
            (r.skewX = l + I),
            (r.skewY = p + I),
            (r.transformPerspective = c + "px"),
            (r.zOrigin = parseFloat(Y.split(" ")[2]) || 0) && (B[xn] = An(Y)),
            (r.xOffset = r.yOffset = 0),
            (r.force3D = Ft.force3D),
            (r.renderTransform = r.svg ? Bn : Qr ? En : Dn),
            (r.uncache = 0),
            r
          );
        },
        An = function (t) {
          return (t = t.split(" "))[0] + " " + t[1];
        },
        Dn = function (t, e) {
          (e.z = "0px"),
            (e.rotationY = e.rotationX = "0deg"),
            (e.force3D = 0),
            En(t, e);
        },
        zn = "0deg",
        Rn = "0px",
        Fn = ") ",
        En = function (t, e) {
          var r = e || this,
            n = r.xPercent,
            i = r.yPercent,
            s = r.x,
            a = r.y,
            o = r.z,
            u = r.rotation,
            h = r.rotationY,
            f = r.rotationX,
            l = r.skewX,
            p = r.skewY,
            c = r.scaleX,
            _ = r.scaleY,
            d = r.transformPerspective,
            m = r.force3D,
            g = r.target,
            v = r.zOrigin,
            y = "",
            w = ("auto" === m && t && 1 !== t) || !0 === m;
          if (v && (f !== zn || h !== zn)) {
            var x,
              b = parseFloat(h) * _n,
              T = Math.sin(b),
              M = Math.cos(b);
            (b = parseFloat(f) * _n),
              (s = Br(g, s, T * (x = Math.cos(b)) * -v)),
              (a = Br(g, a, -Math.sin(b) * -v)),
              (o = Br(g, o, M * x * -v + v));
          }
          d !== Rn && (y += "perspective(" + d + Fn),
            (n || i) && (y += "translate(" + n + "%, " + i + "%) "),
            (!w && s === Rn && a === Rn && o === Rn) ||
              (y +=
                o !== Rn || w
                  ? "translate3d(" + s + ", " + a + ", " + o + ") "
                  : "translate(" + s + ", " + a + Fn),
            u !== zn && (y += "rotate(" + u + Fn),
            h !== zn && (y += "rotateY(" + h + Fn),
            f !== zn && (y += "rotateX(" + f + Fn),
            (l === zn && p === zn) || (y += "skew(" + l + ", " + p + Fn),
            (1 === c && 1 === _) || (y += "scale(" + c + ", " + _ + Fn),
            (g.style[wn] = y || "translate(0, 0)");
        },
        Bn = function (t, e) {
          var r,
            n,
            i,
            s,
            a,
            o = e || this,
            u = o.xPercent,
            h = o.yPercent,
            f = o.x,
            l = o.y,
            p = o.rotation,
            c = o.skewX,
            _ = o.skewY,
            d = o.scaleX,
            m = o.scaleY,
            g = o.target,
            v = o.xOrigin,
            y = o.yOrigin,
            x = o.xOffset,
            b = o.yOffset,
            T = o.forceCSS,
            M = parseFloat(f),
            O = parseFloat(l);
          (p = parseFloat(p)),
            (c = parseFloat(c)),
            (_ = parseFloat(_)) && ((c += _ = parseFloat(_)), (p += _)),
            p || c
              ? ((p *= _n),
                (c *= _n),
                (r = Math.cos(p) * d),
                (n = Math.sin(p) * d),
                (i = Math.sin(p - c) * -m),
                (s = Math.cos(p - c) * m),
                c &&
                  ((_ *= _n),
                  (a = Math.tan(c - _)),
                  (i *= a = Math.sqrt(1 + a * a)),
                  (s *= a),
                  _ &&
                    ((a = Math.tan(_)),
                    (r *= a = Math.sqrt(1 + a * a)),
                    (n *= a))),
                (r = w(r)),
                (n = w(n)),
                (i = w(i)),
                (s = w(s)))
              : ((r = d), (s = m), (n = i = 0)),
            ((M && !~(f + "").indexOf("px")) ||
              (O && !~(l + "").indexOf("px"))) &&
              ((M = Sr(g, "x", f, "px")), (O = Sr(g, "y", l, "px"))),
            (v || y || x || b) &&
              ((M = w(M + v - (v * r + y * i) + x)),
              (O = w(O + y - (v * n + y * s) + b))),
            (u || h) &&
              ((M = w(M + (u / 100) * (a = g.getBBox()).width)),
              (O = w(O + (h / 100) * a.height))),
            (a =
              "matrix(" +
              r +
              "," +
              n +
              "," +
              i +
              "," +
              s +
              "," +
              M +
              "," +
              O +
              ")"),
            g.setAttribute("transform", a),
            T && (g.style[wn] = a);
        };
      y("padding,margin,Width,Radius", function (t, e) {
        var r = "Right",
          n = "Bottom",
          i = "Left",
          s = (
            e < 3 ? ["Top", r, n, i] : ["Top" + i, "Top" + r, n + r, n + i]
          ).map(function (r) {
            return e < 2 ? t + r : "border" + r + t;
          });
        kn[1 < e ? "border" + t : t] = function (t, e, r, n, i) {
          var a, o;
          if (arguments.length < 4)
            return (
              (a = s.map(function (e) {
                return Cr(t, e, r);
              })),
              5 === (o = a.join(" ")).split(a[0]).length ? a[0] : o
            );
          (a = (n + "").split(" ")),
            (o = {}),
            s.forEach(function (t, e) {
              return (o[t] = a[e] = a[e] || a[((e - 1) / 2) | 0]);
            }),
            t.init(e, o, i);
        };
      });
      var Ln,
        In,
        Yn = {
          name: "css",
          register: wr,
          targetTest: function (t) {
            return t.style && t.nodeType;
          },
          init: function (t, e, r, n, i) {
            var s,
              a,
              o,
              u,
              h,
              f,
              l,
              c,
              _,
              d,
              m,
              g,
              v,
              y,
              w,
              x = this._props,
              b = t.style;
            for (l in (Nr || wr(), e))
              if (
                "autoRound" !== l &&
                ((a = e[l]), !re[l] || !Re(l, e, r, n, t, i))
              )
                if (
                  ((h = typeof a),
                  (f = kn[l]),
                  "function" === h && (h = typeof (a = a.call(r, n, t, i))),
                  "string" === h && ~a.indexOf("random(") && (a = K(a)),
                  f)
                )
                  f(this, t, l, a, r) && (w = 1);
                else if ("--" === l.substr(0, 2))
                  this.add(
                    b,
                    "setProperty",
                    getComputedStyle(t).getPropertyValue(l) + "",
                    a + "",
                    n,
                    i,
                    0,
                    0,
                    l
                  );
                else {
                  if (
                    ((s = Cr(t, l)),
                    (u = parseFloat(s)),
                    (d =
                      "string" === h && "=" === a.charAt(1)
                        ? +(a.charAt(0) + "1")
                        : 0) && (a = a.substr(2)),
                    (o = parseFloat(a)),
                    l in yn &&
                      ("autoAlpha" === l &&
                        (1 === u &&
                          "hidden" === Cr(t, "visibility") &&
                          o &&
                          (u = 0),
                        kr(
                          this,
                          b,
                          "visibility",
                          u ? "inherit" : "hidden",
                          o ? "inherit" : "hidden",
                          !o
                        )),
                      "scale" !== l &&
                        "transform" !== l &&
                        ~(l = yn[l]).indexOf(",") &&
                        (l = l.split(",")[0])),
                    (m = l in pn))
                  )
                    if (
                      (g ||
                        ((v = t._gsap).renderTransform || Pn(t),
                        (y = !1 !== e.smoothOrigin && v.smooth),
                        ((g = this._pt =
                          new tr(
                            this._pt,
                            b,
                            wn,
                            0,
                            1,
                            v.renderTransform,
                            v,
                            0,
                            -1
                          )).dep = 1)),
                      "scale" === l)
                    )
                      (this._pt = new tr(
                        this._pt,
                        v,
                        "scaleY",
                        v.scaleY,
                        d ? d * o : o - v.scaleY
                      )),
                        x.push("scaleY", l),
                        (l += "X");
                    else {
                      if ("transformOrigin" === l) {
                        (a = Ar(a)),
                          v.svg
                            ? Er(t, a, 0, y, 0, this)
                            : ((_ = parseFloat(a.split(" ")[2]) || 0) !==
                                v.zOrigin &&
                                kr(this, v, "zOrigin", v.zOrigin, _),
                              kr(this, b, l, An(s), An(a)));
                        continue;
                      }
                      if ("svgOrigin" === l) {
                        Er(t, a, 1, y, 0, this);
                        continue;
                      }
                      if (l in Cn) {
                        Lr(this, v, l, u, a, d);
                        continue;
                      }
                      if ("smoothOrigin" === l) {
                        kr(this, v, "smooth", v.smooth, a);
                        continue;
                      }
                      if ("force3D" === l) {
                        v[l] = a;
                        continue;
                      }
                      if ("transform" === l) {
                        Ir(this, a, t);
                        continue;
                      }
                    }
                  else l in b || (l = Tn(l) || l);
                  if (
                    m ||
                    ((o || 0 === o) && (u || 0 === u) && !vn.test(a) && l in b)
                  )
                    (c = (s + "").substr((u + "").length)) !==
                      (_ =
                        (a + "").substr(((o = o || 0) + "").length) ||
                        (l in Ft.units ? Ft.units[l] : c)) &&
                      (u = Sr(t, l, s, _)),
                      (this._pt = new tr(
                        this._pt,
                        m ? v : b,
                        l,
                        u,
                        d ? d * o : o - u,
                        "px" !== _ || !1 === e.autoRound || m ? ar : hr
                      )),
                      (this._pt.u = _ || 0),
                      c !== _ && ((this._pt.b = s), (this._pt.r = ur));
                  else if (l in b) Pr.call(this, t, l, s, a);
                  else {
                    if (!(l in t)) {
                      p(l, a);
                      continue;
                    }
                    this.add(t, l, t[l], a, n, i);
                  }
                  x.push(l);
                }
            w && Ke(this);
          },
          get: Cr,
          aliases: yn,
          getSetter: function (t, e, r) {
            var n = yn[e];
            return (
              n && n.indexOf(",") < 0 && (e = n),
              e in pn && e !== xn && (t._gsap.x || Cr(t, "x"))
                ? r && Vr === r
                  ? "scale" === e
                    ? dr
                    : _r
                  : (Vr = r || {}) && ("scale" === e ? mr : gr)
                : t.style && !a(t.style[e])
                ? pr
                : ~e.indexOf("-")
                ? cr
                : Qe(t, e)
            );
          },
          core: { _removeProperty: Or, _getMatrix: Fr },
        };
      (sr.utils.checkPrefix = Tn),
        (In = y(
          "x,y,z,scale,scaleX,scaleY,xPercent,yPercent," +
            (Ln = "rotation,rotationX,rotationY,skewX,skewY") +
            ",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective",
          function (t) {
            pn[t] = 1;
          }
        )),
        y(Ln, function (t) {
          (Ft.units[t] = "deg"), (Cn[t] = 1);
        }),
        (yn[In[13]] = "x,y,z,scale,scaleX,scaleY,xPercent,yPercent," + Ln),
        y(
          "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY",
          function (t) {
            var e = t.split(":");
            yn[e[1]] = In[e[0]];
          }
        ),
        y(
          "x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",
          function (t) {
            Ft.units[t] = "px";
          }
        ),
        sr.registerPlugin(Yn);
      var Un = sr.registerPlugin(Yn) || sr,
        Xn = Un.core.Tween;
      (t.Back = an),
        (t.Bounce = un),
        (t.CSSPlugin = Yn),
        (t.Circ = ln),
        (t.Cubic = tn),
        (t.Elastic = sn),
        (t.Expo = fn),
        (t.Linear = Jr),
        (t.Power0 = Gr),
        (t.Power1 = Wr),
        (t.Power2 = Zr),
        (t.Power3 = Hr),
        (t.Power4 = $r),
        (t.Quad = Kr),
        (t.Quart = en),
        (t.Quint = rn),
        (t.Sine = hn),
        (t.SteppedEase = on),
        (t.Strong = nn),
        (t.TimelineLite = ze),
        (t.TimelineMax = ze),
        (t.TweenLite = Ue),
        (t.TweenMax = Xn),
        (t.default = Un),
        (t.gsap = Un),
        "undefined" == typeof window || window !== t
          ? Object.defineProperty(t, "__esModule", { value: !0 })
          : delete t.default;
    })(e);
  },
]);

//jQueryの関数を実装
/*
hasClass:クラスの有無をtrue か falseで判定
addClass:クラスを付与
removeClass:クラスを削除
trigger:イベントを手動で発火
matches:IE9以上のpolyfill
closest:IE9以上のpolyfill
previousElementSibling:前の要素
nextElementSibling:次の要素
slideDown:要素をアコーディオンで表示 （cssにdisplay:none;height:0;overflow:hidden;が必要）
slideUp:要素をアコーディオンで消す（cssにdisplay:none;height:0;overflow:hidden;が必要）
remove:
*/
Element.prototype.hasClass = function (c) {
  var d = this.className.split(" ");
  return ~d.indexOf(c);
};
Element.prototype.addClass = function (a) {
  if (!this.hasClass(a)) {
    this.className += " " + a;
  }
  return this;
};
Element.prototype.removeClass = function (e) {
  var d = this.className.split(" ");
  var f = d.indexOf(e);
  if (~f) {
    d.splice(f, 1);
    this.className = d.join(" ");
  }
  return this;
};
Element.prototype.attr = function (d, c) {
  this.setAttribute(d, c);
  return this;
};
Element.prototype.prependChild = function (b) {
  this.insertBefore(b, this.firstChild);
  return this;
};
NodeList.prototype.addClass = HTMLCollection.prototype.addClass = function (d) {
  for (var c = 0; c < this.length; c = 0 | (c + 1)) {
    if (!this[c].hasClass(d)) {
      this[c].className += " " + d;
    }
  }
  return this;
};
NodeList.prototype.removeClass = HTMLCollection.prototype.removeClass =
  function (e) {
    for (var f = 0; f < this.length; f = 0 | (f + 1)) {
      var h = this[f].className.split(" ");
      var g = h.indexOf(e);
      if (~g) {
        h.splice(g, 1);
        this[f].className = h.join(" ");
      }
    }
    return this;
  };
Element.prototype.trigger = window.trigger = function (d) {
  if (document.createEvent) {
    var a = document.createEvent("HTMLEvents");
    a.initEvent(d, true, true);
    this.dispatchEvent(a);
  } else {
    this.fireEvent("on" + d, document.createEventObject());
  }
};
if (!Element.prototype.matches) {
  Element.prototype.matches =
    Element.prototype.msMatchesSelector ||
    Element.prototype.webkitMatchesSelector;
}
if (!Element.prototype.closest) {
  Element.prototype.closest = function (c) {
    var d = this;
    if (!document.documentElement.contains(d)) {
      return null;
    }
    do {
      if (d.matches(c)) {
        return d;
      }
      d = d.parentElement;
    } while (d !== null);
    return null;
  };
}
(function (d) {
  for (var c = 0; c < d.length; c++) {
    (function (a) {
      if (!a.hasOwnProperty("previousElementSibling")) {
        Object.defineProperty(a, "previousElementSibling", {
          configurable: true,
          enumerable: true,
          get: function () {
            var b = this;
            while ((b = b.nextSibling)) {
              if (b.nodeType === 1) {
                return b;
              }
            }
            return null;
          },
          set: undefined,
        });
      }
      if (!a.hasOwnProperty("nextElementSibling")) {
        Object.defineProperty(a, "nextElementSibling", {
          configurable: true,
          enumerable: true,
          get: function () {
            var b = this;
            while ((b = b.previousSibling)) {
              if (b.nodeType === 1) {
                return b;
              }
            }
            return null;
          },
          set: undefined,
        });
      }
    })(d[c]);
  }
})([Element.prototype, CharacterData.prototype]);
Element.prototype.slideDown = function (b) {
  var i = b ? b + "s" : "1.0s";
  var d = this;
  var j = d.cloneNode(true);
  j.style.display = "block";
  j.style.height = "auto";
  j.style.visibility = "hidden";
  d.parentNode.appendChild(j);
  var a = j.offsetHeight;
  var h = window.getComputedStyle(d, null).getPropertyValue("margin-top");
  var e = window.getComputedStyle(d, null).getPropertyValue("margin-bottom");
  var g = window.getComputedStyle(d, null).getPropertyValue("padding-top");
  var c = window.getComputedStyle(d, null).getPropertyValue("padding-bottom");
  d.parentNode.removeChild(j);
  var f = new MutationObserver(function () {
    if (
      d.style.display &&
      d.style.height &&
      d.style.transition &&
      d.style.marginTop &&
      d.style.marginBottom &&
      d.style.paddingTop &&
      d.style.paddingBottom
    ) {
      f.disconnect();
      d.addEventListener("transitionend", function k() {
        d.style.height = "";
        d.style.transition = "";
        d.style.marginTop = "";
        d.style.marginBottom = "";
        d.style.paddingTop = "";
        d.style.paddingBottom = "";
        d.removeEventListener("transitionend", k);
      });
      setTimeout(function () {
        d.style.height = a + "px";
        d.style.marginTop = h;
        d.style.marginBottom = e;
        d.style.paddingTop = g;
        d.style.paddingBottom = c;
      }, 100);
    }
  });
  f.observe(d, { attributes: true, attributeFilter: ["style"] });
  d.style.display = "block";
  d.style.height = "0px";
  d.style.transition = i + " cubic-bezier(0.625, 0.010, 0.355, 1.000)";
  d.style.marginTop = "0px";
  d.style.marginBottom = "0px";
  d.style.paddingTop = "0px";
  d.style.paddingBottom = "0px";
};
Element.prototype.slideUp = function (c) {
  var b = c ? c + "s" : "1.0s";
  var f = this;
  var d = f.cloneNode(true);
  d.style.display = "block";
  d.style.height = "auto";
  d.style.visibility = "hidden";
  f.parentNode.appendChild(d);
  var e = d.offsetHeight;
  f.parentNode.removeChild(d);
  var a = new MutationObserver(function () {
    if (f.style.transition && f.style.height) {
      a.disconnect();
      f.addEventListener("transitionend", function g() {
        f.style.height = "";
        f.style.transition = "";
        f.style.marginTop = "";
        f.style.marginBottom = "";
        f.style.paddingTop = "";
        f.style.paddingBottom = "";
        f.style.display = "";
        f.removeEventListener("transitionend", g);
      });
      setTimeout(function () {
        f.style.height = "0px";
        f.style.marginTop = "0px";
        f.style.marginBottom = "0px";
        f.style.paddingTop = "0px";
        f.style.paddingBottom = "0px";
      }, 100);
    }
  });
  a.observe(f, { attributes: true, attributeFilter: ["style"] });
  f.style.height = e + "px";
  f.style.transition = b + " cubic-bezier(0.625, 0.010, 0.355, 1.000)";
};
(function (a) {
  a.forEach(function (c) {
    if (c.hasOwnProperty("remove")) {
      return;
    }
    Object.defineProperty(c, "remove", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function b() {
        if (this.parentNode !== null) {
          this.parentNode.removeChild(this);
        }
      },
    });
  });
})([Element.prototype, CharacterData.prototype, DocumentType.prototype]);

//
// SVG — hasClass, addClass, removeClass, toggleClass
//  Source:
//   https://gist.github.com/branneman/8436956
//  Taken and adapted from:
//   http://toddmotto.com/hacking-svg-traversing-with-ease-addclass-removeclass-toggleclass-functions/
//
if (SVGElement && SVGElement.prototype) {
  SVGElement.prototype.hasClass = function (a) {
    return new RegExp("(\\s|^)" + a + "(\\s|$)").test(
      this.getAttribute("class")
    );
  };
  SVGElement.prototype.addClass = function (a) {
    if (!this.hasClass(a)) {
      this.setAttribute("class", this.getAttribute("class") + " " + a);
    }
  };
  SVGElement.prototype.removeClass = function (a) {
    var b = this.getAttribute("class").replace(
      new RegExp("(\\s|^)" + a + "(\\s|$)", "g"),
      "$2"
    );
    if (this.hasClass(a)) {
      this.setAttribute("class", b);
    }
  };
  SVGElement.prototype.toggleClass = function (a) {
    if (this.hasClass(a)) {
      this.removeClass(a);
    } else {
      this.addClass(a);
    }
  };
}

//HTMLタグにtouchevents、webgl、pointer-eventsが使えるかどうか、OS・デバイス・ブラウザごとにクラスをつける
(function (d, a, c) {
  if ("ontouchstart" in window) {
    c.className += " touchevents";
  } else {
    c.className += " no-touchevents";
  }
  if ("IntersectionObserver" in window) {
    c.className += " intersectionObserver";
  } else {
    c.className += " no-intersectionObserver";
  }
  var b = ~d.indexOf("msie") && !~d.indexOf("opera");
  if (b && ~a.indexOf("msie 9.")) {
    c.className += " ie9";
  }
  if (b && ~a.indexOf("msie 10.")) {
    c.className += " ie10";
  }
})(
  navigator.userAgent.toLowerCase(),
  navigator.appVersion.toLowerCase(),
  document.documentElement
);

//Promiseネイティブ対応
(function () {
  if (document.documentElement.hasClass("ie")) {
    !(function (a, b) {
      "object" == typeof exports && "undefined" != typeof module
        ? b()
        : "function" == typeof define && define.amd
        ? define(b)
        : b();
    })(0, function () {
      function j() {}
      function d(c) {
        if (!(this instanceof d)) {
          throw new TypeError("Promises must be constructed via new");
        }
        if ("function" != typeof c) {
          throw new TypeError("not a function");
        }
        (this._state = 0),
          (this._handled = !1),
          (this._value = undefined),
          (this._deferreds = []),
          h(c, this);
      }
      function m(f, c) {
        for (; 3 === f._state; ) {
          f = f._value;
        }
        0 !== f._state
          ? ((f._handled = !0),
            d._immediateFn(function () {
              var p = 1 === f._state ? c.onFulfilled : c.onRejected;
              if (null !== p) {
                var e;
                try {
                  e = p(f._value);
                } catch (o) {
                  return void a(c.promise, o);
                }
                b(c.promise, e);
              } else {
                (1 === f._state ? b : a)(c.promise, f._value);
              }
            }))
          : f._deferreds.push(c);
      }
      function b(i, f) {
        try {
          if (f === i) {
            throw new TypeError("A promise cannot be resolved with itself.");
          }
          if (f && ("object" == typeof f || "function" == typeof f)) {
            var n = f.then;
            if (f instanceof d) {
              return (i._state = 3), (i._value = f), void g(i);
            }
            if ("function" == typeof n) {
              return void h(
                (function (o, p) {
                  return function () {
                    o.apply(p, arguments);
                  };
                })(n, f),
                i
              );
            }
          }
          (i._state = 1), (i._value = f), g(i);
        } catch (c) {
          a(i, c);
        }
      }
      function a(c, f) {
        (c._state = 2), (c._value = f), g(c);
      }
      function g(f) {
        2 === f._state &&
          0 === f._deferreds.length &&
          d._immediateFn(function () {
            f._handled || d._unhandledRejectionFn(f._value);
          });
        for (var i = 0, c = f._deferreds.length; c > i; i++) {
          m(f, f._deferreds[i]);
        }
        f._deferreds = null;
      }
      function h(o, p) {
        var f = !1;
        try {
          o(
            function (i) {
              f || ((f = !0), b(p, i));
            },
            function (i) {
              f || ((f = !0), a(p, i));
            }
          );
        } catch (c) {
          if (f) {
            return;
          }
          (f = !0), a(p, c);
        }
      }
      var l = setTimeout;
      (d.prototype["catch"] = function (c) {
        return this.then(null, c);
      }),
        (d.prototype.then = function (f, e) {
          var c = new this.constructor(j);
          return (
            m(
              this,
              new (function (o, p, i) {
                (this.onFulfilled = "function" == typeof o ? o : null),
                  (this.onRejected = "function" == typeof p ? p : null),
                  (this.promise = i);
              })(f, e, c)
            ),
            c
          );
        }),
        (d.prototype["finally"] = function (c) {
          var f = this.constructor;
          return this.then(
            function (e) {
              return f.resolve(c()).then(function () {
                return e;
              });
            },
            function (e) {
              return f.resolve(c()).then(function () {
                return f.reject(e);
              });
            }
          );
        }),
        (d.all = function (c) {
          return new d(function (v, p) {
            function u(o, n) {
              try {
                if (n && ("object" == typeof n || "function" == typeof n)) {
                  var i = n.then;
                  if ("function" == typeof i) {
                    return void i.call(
                      n,
                      function (f) {
                        u(o, f);
                      },
                      p
                    );
                  }
                }
                (q[o] = n), 0 == --e && v(q);
              } catch (r) {
                p(r);
              }
            }
            if (!c || "undefined" == typeof c.length) {
              throw new TypeError("Promise.all accepts an array");
            }
            var q = Array.prototype.slice.call(c);
            if (0 === q.length) {
              return v([]);
            }
            for (var e = q.length, s = 0; q.length > s; s++) {
              u(s, q[s]);
            }
          });
        }),
        (d.resolve = function (c) {
          return c && "object" == typeof c && c.constructor === d
            ? c
            : new d(function (e) {
                e(c);
              });
        }),
        (d.reject = function (c) {
          return new d(function (f, e) {
            e(c);
          });
        }),
        (d.race = function (c) {
          return new d(function (p, e) {
            for (var i = 0, f = c.length; f > i; i++) {
              c[i].then(p, e);
            }
          });
        }),
        (d._immediateFn =
          ("function" == typeof setImmediate &&
            function (c) {
              setImmediate(c);
            }) ||
          function (c) {
            l(c, 0);
          }),
        (d._unhandledRejectionFn = function (c) {
          void 0 !== console &&
            console &&
            console.warn("Possible Unhandled Promise Rejection:", c);
        });
      var k = (function () {
        if ("undefined" != typeof self) {
          return self;
        }
        if ("undefined" != typeof window) {
          return window;
        }
        if ("undefined" != typeof global) {
          return global;
        }
        throw Error("unable to locate global object");
      })();
      k.Promise || (k.Promise = d);
    });
  }
})();

//CustomEventネイティブ対応
(function () {
  if (typeof window.CustomEvent === "function") {
    return false;
  }
  var a = function (c, d) {
    d = d || { bubbles: false, cancelable: false, detail: undefined };
    var b = document.createEvent("CustomEvent");
    b.initCustomEvent(c, d.bubbles, d.cancelable, d.detail);
    return b;
  };
  a.prototype = window.Event.prototype;
  window.CustomEvent = a;
})();

//requestAnimationFrame関数のネイティブ対応
(function () {
  var b = 0;
  var c = ["webkit", "moz"];
  for (var a = 0; a < c.length && !window.requestAnimationFrame; ++a) {
    window.requestAnimationFrame = window[c[a] + "RequestAnimationFrame"];
    window.cancelAnimationFrame =
      window[c[a] + "CancelAnimationFrame"] ||
      window[c[a] + "CancelRequestAnimationFrame"];
  }
  if (!window.requestAnimationFrame) {
    window.requestAnimationFrame = function (h, e) {
      var d = new Date().getTime();
      var f = Math.max(0, 16 - (d - b));
      var g = window.setTimeout(function () {
        h(d + f);
      }, f);
      b = d + f;
      return g;
    };
  }
  if (!window.cancelAnimationFrame) {
    window.cancelAnimationFrame = function (d) {
      clearTimeout(d);
    };
  }
})();

//consoleがあるかどうかチェックし、無ければエラーを吐かないようにする
if (!window.console) {
  window.console = { log: function (a) {} };
}

//メディアクエリサイズ
var mediaQuerySize = 640;
var mediaQuery = window.matchMedia(
  "screen and (max-width: " + mediaQuerySize + "px)"
);

var Common = {
  //スムーススクロール
  //jump(数値かhash, {duration:速さ, onComplete:コールバック, easing:イージング関数の指定});
  jump: function (value, options) {
    //スクロール禁止
    var wheelHandler = function (e) {
      e.preventDefault();
      e.returnValue = false;
    };
    document.documentElement.addEventListener("mousewheel", wheelHandler, {
      passive: false,
    });
    document.documentElement.addClass("scrollingFlg");

    var target;
    switch (typeof value) {
      case "number":
        value = value;
        break;
      case "string":
        target = document.querySelector(value);
        if (!target) {
          console.error("要素の指定ミス1");
        }
        value = window.pageYOffset + target.getBoundingClientRect().top;
        break;
      case "object":
        target = value;
        console.error("要素の指定ミス2");
        value = window.pageYOffset + target.getBoundingClientRect().top;
        break;
    }

    //スクロール位置の微調整
    if (target) {
      /*switch(target.id){
				case 'Wedding':
					if(720 < window.innerWidth) val += 142;
					else val += 110;
					break;
				case 'Plan':
					if(720 < window.innerWidth) val += 30;
					else val += 0;
					break;
			}*/
    }
    /*
		if(720 < window.innerWidth) val += 90;
		*/

    var duration = options && options.duration ? options.duration : 1000;
    var onComplete = options && options.onComplete ? options.onComplete : null;
    var start = window.pageYOffset;
    var mokushou = value - start;
    var timeStart, timeElapsed;
    //http://robertpenner.com/easing/
    var easing =
      options && options.ease
        ? options.ease
        : function (t, b, c, d) {
            if ((t /= d / 2) < 1) return (c / 2) * t * t + b;
            return (-c / 2) * (--t * (t - 2) - 1) + b;
          };

    var loopID;
    var loop = function (time) {
      timeElapsed = time - timeStart;
      window.scrollTo(0, easing(timeElapsed, start, mokushou, duration));
      if (timeElapsed < duration) {
        loopID = requestAnimationFrame(loop);
      } else {
        window.scrollTo(0, start + mokushou);
        document.documentElement.removeEventListener(
          "mousewheel",
          wheelHandler,
          { passive: false }
        );
        document.documentElement.removeClass("scrollingFlg");
        if (onComplete) onComplete();
        cancelAnimationFrame(loopID);
      }
    };

    loopID = requestAnimationFrame(function (time) {
      timeStart = time;
      loop(time);
    });
  },
  //URLパラメータを取得し配列に格納
  urlParams: (function () {
    var obj = {};
    var pair = location.search.substring(1).split("&");
    for (var i = 0; pair[i]; i++) {
      var kv = pair[i].split("=");
      obj[kv[0]] = kv[1];
    }

    //stat.js
    if ("fps" in obj) {
      var script = document.createElement("script");
      script.onload = function () {
        var stats = new Stats();
        document.body.appendChild(stats.dom);
        requestAnimationFrame(function loop() {
          stats.update();
          requestAnimationFrame(loop);
        });
      };
      script.src = "//rawgit.com/mrdoob/stats.js/master/build/stats.min.js";
      document.head.appendChild(script);
    }

    return obj;
  })(),
  //引数からpx単位の値に変換
  pxcelValueFromObject: function (value) {
    if (typeof value == "string" || value instanceof String) {
      if (value.indexOf("%") != -1) {
        value = window.innerHeight * (value.split("%")[0] / 100) + "px";
      } else if (value.indexOf("px") != -1) {
        value = value;
      } else {
        value = value + "px";
      }
    } else if (!isNaN(value)) {
      value = value + "px";
    } else {
      value = null;
    }
    return value;
  },
  //インビュー
  inview:
    "IntersectionObserver" in window
      ? function (target, enter, leave, rootMargin) {
          var targets;
          if (typeof target == "string") {
            targets = document.querySelectorAll(target);
          } else if (target.length) {
            targets = target;
          } else {
            targets = [];
            targets.push(target);
          }
          for (var i = 0; i < targets.length; i++) {
            (function (target) {
              new IntersectionObserver(
                leave
                  ? function (entries, observer) {
                      if (entries[0].isIntersecting) {
                        //見えた
                        enter(entries[0].target);
                      } else {
                        //見えないとき
                        leave(entries[0].target);
                      }
                    }
                  : function (entries, observer) {
                      if (entries[0].isIntersecting) {
                        //見えた
                        enter(entries[0].target);
                        observer.disconnect();
                      }
                    },
                {
                  threshold: [0.0, 0.01, 0.5, 1.0],
                  rootMargin:
                    rootMargin == "0px" ||
                    rootMargin == "0" ||
                    rootMargin === null ||
                    rootMargin === undefined
                      ? "0px"
                      : rootMargin,
                }
              ).observe(target);
            })(targets[i]);
          }
        }
      : function (target, enter, leave) {
          var targets;
          if (typeof target == "string") {
            targets = document.querySelectorAll(target);
          } else if (target.length) {
            targets = target;
          } else {
            targets = [];
            targets.push(target);
          }
          for (var i = 0; i < targets.length; i++) {
            (function (child) {
              var fromS, toS;
              //resize
              var resize = function () {
                fromS =
                  window.pageYOffset +
                  child.getBoundingClientRect().top -
                  window.innerHeight;
                toS = child.clientHeight + fromS + window.innerHeight;
              };
              window.addEventListener("resize", resize);
              resize();

              //scroll
              var enterFlg = false;
              var scroll = function () {
                var s = window.pageYOffset;
                if (fromS < s && s < toS) {
                  //見えたとき
                  enter(child);
                  enterFlg = true;
                  if (!leave) {
                    //一度だけの処理の設定のとき
                    window.removeEventListener("resize", resize);
                    window.removeEventListener("scroll", scroll);
                  }
                } else {
                  //見えないとき
                  if (enterFlg) {
                    //見えてる状態だったとき
                    leave(child);
                    enterFlg = false;
                  }
                }
              };
              window.addEventListener("scroll", scroll);
              scroll();
            })(targets[i]);
          }
        },
  //読み込み完了
  addLoad: function (func) {
    if (document.readyState == "complete") {
      func();
    } else {
      window.addEventListener(
        "load",
        function () {
          func();
        },
        { once: true, passive: true }
      );
    }
  },
  //メール送信
  notification_by_mail: function (mail_subject, mail_body) {
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "/common/js/notification_by_mail.php", true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.send(
      "subject=" +
        encodeURIComponent(mail_subject) +
        "&message=" +
        encodeURIComponent(mail_body)
    );
  },
  //エラー検知したらメール送信
  do: function (func) {
    try {
      func();
    } catch (e) {
      Common.notification_by_mail(
        "【JSエラー発生】" + document.querySelector("title").innerText,
        e.message
      );
      //console.error(e);
    }
  },
};

(function () {
  //PHPエラー判別
  (function () {
    Common.addLoad(function () {
      if (
        2 <= document.documentElement.innerHTML.split("Warning</b>:").length
      ) {
        Common.notification_by_mail(
          "【PHPエラー発生】" + document.querySelector("title").innerText,
          '"Warning"が該当ページに表示されてます'
        );
      }
      if (2 <= document.documentElement.innerHTML.split("Notice</b>:").length) {
        Common.notification_by_mail(
          "【PHPエラー発生】" + document.querySelector("title").innerText,
          '"Notice"が該当ページに表示されてます'
        );
      }
      if (2 <= document.documentElement.innerHTML.split("Error</b>:").length) {
        Common.notification_by_mail(
          "【PHPエラー発生】" + document.querySelector("title").innerText,
          '"Error"が該当ページに表示されてます'
        );
      }
    });
  })();

  //ページ読み込み時にURLにハッシュがついてるとスクロールする
  if (location.hash) {
    Common.addLoad(function () {
      setTimeout(function () {
        if (location.hash.split("scroll-")[1]) {
          Common.jump("#" + location.hash.split("scroll-")[1]);
          location.hash = "";
        }
      }, 400);
    });
  }

  //自動幅高さ調整
  (function () {
    if (
      !document.querySelectorAll(
        "[data-autowidth], [data-autoheight], [data-autowidth-pc], [data-autoheight-pc], [data-autowidth-sp], [data-autoheight-sp]"
      ).length
    )
      return false;

    var sortElementStyle = function (
      targetVal /* 属性名 */,
      type /* 揃えるスタイル */,
      compareVals,
      i
    ) {
      //指定された要素とスタイルと値をそろえる関数
      //比較する要素をcompareValsに突っ込む
      compareVals = {};

      var elements = document.querySelectorAll("[" + targetVal + "]");
      for (i = 0; i < elements.length; i = 0 | (i + 1)) {
        if (!compareVals[elements[i].getAttribute(targetVal)]) {
          compareVals[elements[i].getAttribute(targetVal)] = [];
        }
        compareVals[elements[i].getAttribute(targetVal)].push(elements[i]);
      }
      //compareValsを捜査して、一番値が大きい値を、targetVal要素に設定
      for (var key in compareVals) {
        (function (compareVal, i) {
          var cmp = [];
          var style =
            compareVal[0].currentStyle ||
            window.getComputedStyle(compareVal[0]);
          if (type == "width") {
            if ("MutationObserver" in window) {
              new MutationObserver(function (
                MutationRecords,
                MutationObserver
              ) {
                for (i = 0; i < compareVal.length; i = 0 | (i + 1)) {
                  cmp.push(compareVal[i].clientWidth);
                }
                var maxV = Math.max.apply(null, cmp);
                if (style.boxSizing != "border-box") {
                  maxV =
                    maxV -
                    (parseInt(style.paddingLeft) +
                      parseInt(style.paddingRight));
                }
                for (i = 0; i < compareVal.length; i = 0 | (i + 1)) {
                  compareVal[i].style.width = maxV + "px";
                  compareVal[i].style.WebkitTransition = "";
                  compareVal[i].style.transition = "";
                }
                MutationObserver.disconnect();
              }).observe(compareVal[0], {
                attributes: true,
                attributeFilter: ["class", "style"],
              });
            } else {
              setTimeout(function () {
                for (i = 0; i < compareVal.length; i = 0 | (i + 1)) {
                  cmp.push(compareVal[i].clientWidth);
                }
                var maxV = Math.max.apply(null, cmp);
                if (style.boxSizing != "border-box") {
                  maxV =
                    maxV -
                    (parseInt(style.paddingLeft) +
                      parseInt(style.paddingRight));
                }
                for (i = 0; i < compareVal.length; i = 0 | (i + 1)) {
                  compareVal[i].style.width = maxV + "px";
                  compareVal[i].style.WebkitTransition = "";
                  compareVal[i].style.transition = "";
                }
              }, 400);
            }

            for (i = 0; i < compareVal.length; i = 0 | (i + 1)) {
              compareVal[i].style.width = "auto";
              compareVal[i].style.WebkitTransition = "none";
              compareVal[i].style.transition = "none";
            }
          } else if (type == "height") {
            if ("MutationObserver" in window) {
              new MutationObserver(function (
                MutationRecords,
                MutationObserver
              ) {
                for (i = 0; i < compareVal.length; i = 0 | (i + 1)) {
                  cmp.push(compareVal[i].clientHeight);
                }
                var maxV = Math.max.apply(null, cmp);
                if (style.boxSizing != "border-box") {
                  maxV =
                    maxV -
                    (parseInt(style.paddingTop) +
                      parseInt(style.paddingBottom));
                }
                for (i = 0; i < compareVal.length; i = 0 | (i + 1)) {
                  compareVal[i].style.height = maxV + "px";
                }
                MutationObserver.disconnect();
              }).observe(compareVal[0], {
                attributes: true,
                attributeFilter: ["class", "style"],
              });
            } else {
              setTimeout(function () {
                for (i = 0; i < compareVal.length; i = 0 | (i + 1)) {
                  cmp.push(compareVal[i].clientHeight);
                }
                var maxV = Math.max.apply(null, cmp);
                if (style.boxSizing != "border-box") {
                  maxV =
                    maxV -
                    (parseInt(style.paddingTop) +
                      parseInt(style.paddingBottom));
                }
                for (i = 0; i < compareVal.length; i = 0 | (i + 1)) {
                  compareVal[i].style.height = maxV + "px";
                }
              }, 400);
            }

            for (i = 0; i < compareVal.length; i = 0 | (i + 1)) {
              compareVal[i].style.height = "auto";
              compareVal[i].style.WebkitTransition = "none";
              compareVal[i].style.transition = "none";
            }
          }
        })(compareVals[key]);
      }
      return false;
    };

    //PCとSP両方の高さや幅を揃える
    window.addEventListener("resize", function (e) {
      //一度高さや幅をリセットする
      var elements = document.querySelectorAll("[data-autowidth]");
      for (i = 0; i < elements.length; i = 0 | (i + 1)) {
        elements[i].style.width = "";
      }
      var elements = document.querySelectorAll("[data-autoheight]");
      for (i = 0; i < elements.length; i = 0 | (i + 1)) {
        elements[i].style.height = "";
      }
      //PCとSP両方を常時揃える処理を設定
      sortElementStyle("data-autowidth", "width");
      sortElementStyle("data-autoheight", "height");

      if (720 < window.innerWidth) {
        //pc
        //SPを一度高さや幅をリセットする
        var elements = document.querySelectorAll("[data-autowidth-sp]");
        for (i = 0; i < elements.length; i = 0 | (i + 1)) {
          elements[i].style.width = "";
        }
        var elements = document.querySelectorAll("[data-autoheight-sp]");
        for (i = 0; i < elements.length; i = 0 | (i + 1)) {
          elements[i].style.height = "";
        }
        sortElementStyle("data-autowidth-pc", "width");
        sortElementStyle("data-autoheight-pc", "height");
      } else {
        //smart
        //PCを一度高さや幅をリセットする
        var elements = document.querySelectorAll("[data-autowidth-pc]");
        for (i = 0; i < elements.length; i = 0 | (i + 1)) {
          elements[i].style.width = "";
        }
        var elements = document.querySelectorAll("[data-autoheight-pc]");
        for (i = 0; i < elements.length; i = 0 | (i + 1)) {
          elements[i].style.height = "";
        }
        sortElementStyle("data-autowidth-sp", "width");
        sortElementStyle("data-autoheight-sp", "height");
      }
    });
  })();

  // スムーズスクロールevent
  (function () {
    var targets = document.querySelectorAll('a[href*="#"]');
    for (var i = 0; i < targets.length; ++i) {
      (function (target) {
        var href = target.getAttribute("href");
        var hrefPath = href.split("#")[0];
        if (location.pathname == hrefPath || hrefPath == "") {
          var handler = function (e) {
            setTimeout(function () {
              Common.jump("#" + target.getAttribute("href").split("#")[1]);
            }, 100);
            e.stopPropagation();
            e.preventDefault();
            e.returnValue = false;
            e.cancelBubble = true;
            return false;
          };
          target.addEventListener("click", handler);
          target.smoothscrollremovefunction = function () {
            target.removeEventListener("click", handler);
          };
        } else {
          if (!~href.indexOf("http")) {
            target.setAttribute("href", href.replace("#", "#scroll-"));
          }
        }
      })(targets[i]);
    }
  })();

  //data-lfの処理
  (function () {
    var setloadfileEvent = function (targets, i, j) {
      var targets = document.querySelectorAll("[data-lf-area]");
      for (i = 0; i < targets.length; ++i) {
        targets[i].setAttribute("data-lf-area", "0");
        targets[i].setAttribute("data-lf-area-ok", "");
      }
      Common.inview(
        "[data-lf-area]",
        function (ele) {
          var w = window.innerWidth, //画面幅
            itemsLen = 0, //読み込む数
            items = ele.querySelectorAll("[data-lf]"), //読み込む要素を調査
            itemsTarget = [], //読み込む要素の対象
            itemsTargetPath = [], //読み込む要素の画像パス
            loadCounter = 0; //読み込みをカウント

          //読み込む対象を選択
          var checkItems = function (elem) {
            if (elem.getAttribute("data-lf")) {
              //data-lfに読み込む画像のパスがある場合
              itemsTarget.push(elem);
              itemsTargetPath.push(elem.getAttribute("data-lf"));
              itemsLen += 1;
            } else {
              if (720 < w && elem.hasAttribute("data-lf-pc")) {
                //SPサイズの時　＆　PC のときの画像パスが指定されている場合
                itemsTarget.push(elem);
                itemsTargetPath.push(elem.getAttribute("data-lf-pc"));
                itemsLen += 1;
              } else if (w <= 720 && elem.hasAttribute("data-lf-sp")) {
                //SPサイズの時　＆　SPのときの画像パスが指定されている場合
                itemsTarget.push(elem);
                itemsTargetPath.push(elem.getAttribute("data-lf-sp"));
                itemsLen += 1;
              } else {
              }
            }
          };

          //調査
          for (var i = 0; i < items.length; i++) {
            checkItems(items[i]);
          }
          checkItems(ele);

          //カウントをチェックして全て読み込めば実行
          var checkCount = function () {
            loadCounter += 1;
            if (itemsLen <= loadCounter) {
              //読み込みエリアに１を付与
              ele.setAttribute("data-lf-area", "1");

              //読み込みエリアにイベント発火
              var event = document.createEvent("CustomEvent");
              event.initCustomEvent("loadfileComplete", false, false, {});
              ele.dispatchEvent(event);
            }
          };

          //読み込み
          for (var i = 0; i < itemsTarget.length; i++) {
            (function (target, path, image) {
              image.addEventListener(
                "load",
                function () {
                  switch (target.tagName) {
                    case "IMG":
                      target.src = image.src;
                      break;
                    default:
                      target.style.backgroundImage = "url(" + image.src + ")";
                      break;
                  }
                  checkCount();
                },
                { once: true, passive: true }
              );
              image.src = path;
            })(itemsTarget[i], itemsTargetPath[i], new Image());
          }
        },
        null,
        "400px"
      );

      return targets;
    };

    if (typeof window.matchMedia == "function") {
      //IE10以降対応
      // var mql = window.matchMedia('screen and (max-width: 720px)');
      var checkBreakPoint = function (mediaQuery) {
        /*
				if (mediaQuery.matches){// スマホ向け
				}else{// PC向け
				}
				*/

        //data-lf-area 要素を読み込む
        setloadfileEvent(document.querySelectorAll("[data-lf-area]"));
      };
      // ブレイクポイントの瞬間に発火
      mediaQuery.addListener(checkBreakPoint);
      // 初回チェック
      checkBreakPoint(mediaQuery);
    } else {
      //レガシーブラウザ対応
      var switchResizeInit = true,
        switchResizeName = "";
      var w = window.innerWidth;
      window.addEventListener(
        "resize",
        function (e) {
          w = window.innerWidth;
          if (720 < w) {
            //pc
            //PCかスマホか切り替わった判定
            if (switchResizeName != "pc") {
              switchResizeName = "pc";
              switchResizeInit = true;
            }
          } else {
            //smart
            //PCかスマホか切り替わった判定
            if (switchResizeName != "sp") {
              switchResizeName = "sp";
              switchResizeInit = true;
            }
          }

          //PCからスマホ、スマホからPCへ繊維したとき一度だけ実行
          if (switchResizeInit) {
            switchResizeInit = false;

            //data-lf-area 要素を読み込む
            setloadfileEvent(document.querySelectorAll("[data-lf-area]"));
          }
        },
        { passive: true }
      );
    }
  })();

  //IE11-9までJSでスクロール
  (function () {
    if (
      document.documentElement.hasClass("ie11") ||
      document.documentElement.hasClass("ie10") ||
      document.documentElement.hasClass("ie9") ||
      document.documentElement.hasClass("safari")
    ) {
      document.documentElement.addEventListener(
        "mousewheel",
        function (e) {
          e.preventDefault();
          e.returnValue = false;
          window.scrollTo(0, window.pageYOffset - e.wheelDelta);
        },
        { passive: false }
      );
    }
  })();

  (function () {
    var targertElement = document.querySelector(".mod_footer");

    if (targertElement) {
      Common.inview(
        targertElement,
        function () {
          document.body.classList.add("__footer-view");
        },
        function () {
          document.body.classList.remove("__footer-view");
        },
        "0px 0px 0px"
      );
    }
  })();
  (function () {
    var inviewElement = document.createElement("div");

    inviewElement.style.position = "absolute";
    inviewElement.style.top = "0px";
    inviewElement.style.pointerEvents = "none";
    inviewElement.style.height = "50px";

    var scrolledBreakPoint = function (mediaQuery) {
      if (mediaQuery.matches) {
        inviewElement.style.height = "25px";
      } else {
        inviewElement.style.height = "50px";
      }
    };
    mediaQuery.addListener(scrolledBreakPoint);
    scrolledBreakPoint(mediaQuery);

    document.body.appendChild(inviewElement);

    Common.inview(
      inviewElement,
      function () {
        setTimeout(function () {
          document.body.classList.remove("__scrolled");
        }, 500);
      },
      function () {
        document.body.classList.add("__scrolled");
      }
    );
  })();

  //SP メニュー
  (function () {
    var btn = document.getElementById("SPMenuBtn");
    if (btn) {
      btn.addEventListener("click", function () {
        if (document.body.hasClass("__spMenu-open")) {
          document.body.removeClass("__spMenu-open");
        } else {
          document.body.addClass("__spMenu-open");
        }
      });
    }
  })();

  (function () {
    var hoverTargets = document.querySelectorAll(".__block-hover01");
    if (hoverTargets) {
      var hoverTargetsArray = Array.prototype.slice.call(hoverTargets);
      hoverTargetsArray.forEach(function (e) {
        e.addEventListener("mouseenter", function () {
          e.classList.add("__hover-active");
        });
        e.addEventListener("mouseleave", function () {
          e.classList.remove("__hover-active");
        });
      });
    }
  })();

  //電話
  (function () {
    var targets = document.querySelectorAll("[data-tel]:not([data-tel-ok])");
    for (var i = 0; i < targets.length; ++i) {
      targets[i].setAttribute("data-tel-ok", "");
      if ("ontouchend" in document) {
        //タッチデバイスのとき
        targets[i].setAttribute(
          "href",
          "tel:" +
            targets[i]
              .getAttribute("data-tel")
              .replace(new RegExp("-", "g"), "")
        );
      }
      // targets[i].innerHTML = targets[i].innerHTML.replace(/-/g, '<span class="hyphen">-</span>');
    }
  })();

  //プリントアウト文言の削除
  (function () {
    if (document.body.querySelector("[data-hidePrintMessageArea]")) {
      document.body.removeChild(
        document.body.querySelector("[data-hidePrintMessageArea]")
      );
      document.documentElement.addClass("addPrintMessage");
    }
    var target = document.createElement("div");
    target.setAttribute("data-hidePrintMessageArea", "");
    document.body.appendChild(target);
    //一番したまでスクロールすると削除
    Common.inview(target, function () {
      document.documentElement.removeClass("addPrintMessage");
      document.body.removeChild(target);
    });
  })();

  //object-fitのIE対策
  //font-family:"object-fit: cover;";を指定する
  //@include object_fit_cover;を指定する
  (function (ua, ver) {
    var isIE9 = ver.indexOf("msie 9.") > -1;
    var isIE10 = ver.indexOf("msie 10.") > -1;
    var isIE11 = ua.indexOf("trident/7") > -1;
    if (isIE9 || isIE10 || isIE11) {
      var imgs = document.querySelectorAll("img");
      for (var i = 0; i < imgs.length; ++i) {
        (function (img) {
          var style = window.getComputedStyle(img);
          if (style.fontFamily == '"object-fit: cover;"') {
            var backgroundImage, imgW, imgH;
            var set = function () {
              img.style.backgroundImage = "url(" + backgroundImage + ")";
              img.style.backgroundSize = "cover";
              img.style.backgroundPosition = "center center";
              img.src =
                "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='" +
                imgW +
                "' height='" +
                imgH +
                "'%3E%3C/svg%3E";
            };
            if (img.src && img.src.split("data:image").length < 2) {
              backgroundImage = img.src;
              imgW = img.naturalWidth;
              imgH = img.naturalHeight;
              set();
            } else {
              if (img.getAttribute("data-lf")) {
                backgroundImage = img.getAttribute("data-lf");
                if (640 < window.innerWidth && img.getAttribute("data-lf-pc")) {
                  backgroundImage = img.getAttribute("data-lf-pc");
                }
                if (window.innerWidth < 640 && img.getAttribute("data-lf-sp")) {
                  backgroundImage = img.getAttribute("data-lf-sp");
                }
                img.removeAttribute("data-lf");
                img.removeAttribute("data-lf-pc");
                img.removeAttribute("data-lf-sp");
                var _img = new Image();
                _img.addEventListener(
                  "load",
                  function () {
                    imgW = _img.naturalWidth;
                    imgH = _img.naturalHeight;
                    set();
                  },
                  { once: true, passive: true }
                );
                _img.src = backgroundImage;
              } else {
                backgroundImage = img.src;
                set();
              }
            }
          }
        })(imgs[i]);
      }
    }
  })(navigator.userAgent.toLowerCase(), navigator.appVersion.toLowerCase());
})();

Common.do(function () {
  //↓↓↓↓↓ここへ記述して下さい↓↓↓↓↓

  if (document.body.classList.contains("page_top") == false) {
    pararax01();
  }
});

//data-pararax01
// トップオープニング演出後に発動させたいため、関数化して対応を切り分け
function pararax01() {
  var init = function () {
    var targets = document.querySelectorAll(
      "[data-pararax01]:not([data-pararax01-ok])"
    );
    var targetDataAttributes = [
      "data-pararax01-opacity01",
      "data-pararax01-text01",
      "data-pararax01-block01",
      "data-pararax01-img01",
    ];

    //別のアニメーション
    var animation = function (element) {};

    for (var i = 0; i < targets.length; ++i) {
      (function (target) {
        //パララックス済み
        target.setAttribute("data-pararax01-ok", "");

        //inview
        // var inviewElem = document.createElement('div');
        // inviewElem.setAttribute('data-pararax01-inview', '');
        // target.appendChild(inviewElem);

        Common.inview(
          target,
          function () {
            var allDelay = 100;
            var allDurationTime = 0;
            for (var h = 0; h < targetDataAttributes.length; h++) {
              (function (targetDataAttribute) {
                //現在の要素
                if (target.getAttribute(targetDataAttribute)) {
                  if (target.closest("[data-pararax01]")) {
                    setTimeout(function () {
                      animation(target);
                      target.addClass("active");
                    }, allDelay +
                      (target.getAttribute(targetDataAttribute)
                        ? target.getAttribute(targetDataAttribute)
                        : 0) *
                        1000);
                    allDurationTime = allDurationTime = Math.max(
                      allDurationTime,
                      (target.getAttribute(targetDataAttribute)
                        ? target.getAttribute(targetDataAttribute)
                        : 0) * 1000
                    );
                  }
                }

                //子の要素
                var elements = target.querySelectorAll(
                  "[" + targetDataAttribute + "]"
                );
                if (elements.length) {
                  for (var j = 0; j < elements.length; j++) {
                    (function (element) {
                      if (element.closest("[data-pararax01]") == target) {
                        setTimeout(function () {
                          animation(element);
                          element.addClass("active");
                        }, allDelay +
                          (element.getAttribute(targetDataAttribute)
                            ? element.getAttribute(targetDataAttribute)
                            : 0) *
                            1000);
                        allDurationTime = Math.max(
                          allDurationTime,
                          (element.getAttribute(targetDataAttribute)
                            ? element.getAttribute(targetDataAttribute)
                            : 0) * 1000
                        );
                      }
                    })(elements[j]);
                  }
                }
              })(targetDataAttributes[h]);
            }
            allDurationTime += allDurationTime + allDelay;

            setTimeout(function () {
              animation(target);
              target.addClass("__active-end");
            }, allDurationTime);
          },
          null,
          "0px 0px -30%"
        );
      })(targets[i]);
    }
  };
  Common.addLoad(function () {
    //画面の読み込み完了
    if (document.documentElement.hasClass("wf-loading")) {
      //フォントを読み込んでいる場合
      var checkID = setInterval(function () {
        if (document.documentElement.hasClass("wf-active")) {
          clearInterval(checkID);
          init();
        }
      }, 33);
    } else {
      init();
    }
  });
}
