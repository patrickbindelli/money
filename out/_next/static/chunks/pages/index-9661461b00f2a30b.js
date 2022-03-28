(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [405],
  {
    45301: function (e, r, o) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/",
        function () {
          return o(31865);
        },
      ]);
    },
    31865: function (e, r, o) {
      "use strict";
      o.r(r),
        o.d(r, {
          default: function () {
            return Te;
          },
        });
      var t = o(85893),
        i = o(67294),
        a = o(58067),
        n = o(18571),
        l = (0, a.k)((e, { radius: r, shadow: o, withBorder: t }) => ({
          root: {
            outline: 0,
            WebkitTapHighlightColor: "transparent",
            display: "block",
            textDecoration: "none",
            color: "dark" === e.colorScheme ? e.colors.dark[0] : e.black,
            backgroundColor:
              "dark" === e.colorScheme ? e.colors.dark[7] : e.white,
            boxSizing: "border-box",
            borderRadius: e.fn.radius(r),
            boxShadow: e.shadows[o] || o || "none",
            border: t
              ? `1px solid ${
                  "dark" === e.colorScheme ? e.colors.dark[6] : e.colors.gray[2]
                }`
              : void 0,
          },
        })),
        s = o(39680),
        c = Object.defineProperty,
        d = Object.getOwnPropertySymbols,
        f = Object.prototype.hasOwnProperty,
        m = Object.prototype.propertyIsEnumerable,
        p = (e, r, o) =>
          r in e
            ? c(e, r, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: o,
              })
            : (e[r] = o);
      const b = {},
        u = (0, i.forwardRef)((e, r) => {
          const o = (0, n.Z3)("Paper", b, e),
            {
              component: t,
              className: a,
              children: c,
              radius: u,
              withBorder: h,
              shadow: g,
            } = o,
            x = ((e, r) => {
              var o = {};
              for (var t in e)
                f.call(e, t) && r.indexOf(t) < 0 && (o[t] = e[t]);
              if (null != e && d)
                for (var t of d(e))
                  r.indexOf(t) < 0 && m.call(e, t) && (o[t] = e[t]);
              return o;
            })(o, [
              "component",
              "className",
              "children",
              "radius",
              "withBorder",
              "shadow",
            ]),
            { classes: y, cx: v } = l(
              { radius: u, shadow: g, withBorder: h },
              { name: "Paper" }
            );
          return i.createElement(
            s.x,
            ((e, r) => {
              for (var o in r || (r = {})) f.call(r, o) && p(e, o, r[o]);
              if (d) for (var o of d(r)) m.call(r, o) && p(e, o, r[o]);
              return e;
            })({ component: t || "div", className: v(y.root, a), ref: r }, x),
            c
          );
        });
      u.displayName = "@mantine/core/Paper";
      var h = o(13131),
        g = o(50112),
        x = o(34584),
        y = Object.defineProperty,
        v = Object.defineProperties,
        O = Object.getOwnPropertyDescriptors,
        w = Object.getOwnPropertySymbols,
        j = Object.prototype.hasOwnProperty,
        z = Object.prototype.propertyIsEnumerable,
        k = (e, r, o) =>
          r in e
            ? y(e, r, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: o,
              })
            : (e[r] = o),
        P = (e, r) => {
          for (var o in r || (r = {})) j.call(r, o) && k(e, o, r[o]);
          if (w) for (var o of w(r)) z.call(r, o) && k(e, o, r[o]);
          return e;
        };
      const N = { xs: 16, sm: 20, md: 26, lg: 32, xl: 40 };
      var S = (0, a.k)(
          (
            e,
            {
              color: r,
              size: o,
              radius: t,
              gradientFrom: i,
              gradientTo: a,
              gradientDeg: n,
              variant: l,
            }
          ) => {
            const s = (0, x.d)({
                theme: e,
                color: r,
                variant: l,
                gradient: { from: i, to: a, deg: n },
              }),
              c = e.fn.size({ size: o, sizes: N });
            return {
              root:
                ((d = P({}, e.fn.fontStyles())),
                (f = {
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxSizing: "border-box",
                  width: c,
                  height: c,
                  minWidth: c,
                  minHeight: c,
                  borderRadius: e.fn.radius(t),
                  backgroundColor: s.background,
                  color: s.color,
                  backgroundImage: "gradient" === l ? s.background : null,
                  border: `1px solid ${s.border}`,
                }),
                v(d, O(f))),
            };
            var d, f;
          }
        ),
        T = Object.defineProperty,
        C = Object.getOwnPropertySymbols,
        $ = Object.prototype.hasOwnProperty,
        E = Object.prototype.propertyIsEnumerable,
        R = (e, r, o) =>
          r in e
            ? T(e, r, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: o,
              })
            : (e[r] = o);
      const I = {
          size: "md",
          variant: "filled",
          gradient: { from: "blue", to: "cyan", deg: 45 },
        },
        W = (0, i.forwardRef)((e, r) => {
          const o = (0, n.Z3)("ThemeIcon", I, e),
            {
              className: t,
              size: a,
              radius: l,
              variant: c,
              color: d,
              children: f,
              gradient: m,
            } = o,
            p = ((e, r) => {
              var o = {};
              for (var t in e)
                $.call(e, t) && r.indexOf(t) < 0 && (o[t] = e[t]);
              if (null != e && C)
                for (var t of C(e))
                  r.indexOf(t) < 0 && E.call(e, t) && (o[t] = e[t]);
              return o;
            })(o, [
              "className",
              "size",
              "radius",
              "variant",
              "color",
              "children",
              "gradient",
            ]),
            { classes: b, cx: u } = S(
              {
                variant: c,
                radius: l,
                color: d,
                size: a,
                gradientFrom: m.from,
                gradientTo: m.to,
                gradientDeg: m.deg,
              },
              { name: "ThemeIcon" }
            );
          return i.createElement(
            s.x,
            ((e, r) => {
              for (var o in r || (r = {})) $.call(r, o) && R(e, o, r[o]);
              if (C) for (var o of C(r)) E.call(r, o) && R(e, o, r[o]);
              return e;
            })({ className: u(b.root, t), ref: r }, p),
            f
          );
        });
      W.displayName = "@mantine/core/ThemeIcon";
      var _ = Object.defineProperty,
        F = Object.getOwnPropertySymbols,
        D = Object.prototype.hasOwnProperty,
        Z = Object.prototype.propertyIsEnumerable,
        B = (e, r, o) =>
          r in e
            ? _(e, r, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: o,
              })
            : (e[r] = o),
        G = (e, r) => {
          for (var o in r || (r = {})) D.call(r, o) && B(e, o, r[o]);
          if (F) for (var o of F(r)) Z.call(r, o) && B(e, o, r[o]);
          return e;
        },
        L = (0, a.k)((e, { spacing: r, breakpoints: o, cols: t }) => {
          const i = (function (e, r) {
            if (0 === r.length) return r;
            const o = "maxWidth" in r[0] ? "maxWidth" : "minWidth",
              t = [...r].sort(
                (r, t) =>
                  e.fn.size({ size: t[o], sizes: e.breakpoints }) -
                  e.fn.size({ size: r[o], sizes: e.breakpoints })
              );
            return "minWidth" === o ? t.reverse() : t;
          })(e, o).reduce((o, t) => {
            const i = "maxWidth" in t ? "max-width" : "min-width";
            return (
              (o[
                `@media (${i}: ${
                  e.fn.size({
                    size: "max-width" === i ? t.maxWidth : t.minWidth,
                    sizes: e.breakpoints,
                  }) + ("max-width" === i ? 0 : 1)
                }px)`
              ] = {
                gridTemplateColumns: `repeat(${t.cols}, minmax(0, 1fr))`,
                gap: e.fn.size({ size: t.spacing || r, sizes: e.spacing }),
              }),
              o
            );
          }, {});
          return {
            root: G(
              {
                boxSizing: "border-box",
                display: "grid",
                gridTemplateColumns: `repeat(${t}, minmax(0, 1fr))`,
                gap: e.fn.size({ size: r, sizes: e.spacing }),
              },
              i
            ),
          };
        }),
        H = Object.defineProperty,
        A = Object.getOwnPropertySymbols,
        X = Object.prototype.hasOwnProperty,
        q = Object.prototype.propertyIsEnumerable,
        J = (e, r, o) =>
          r in e
            ? H(e, r, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: o,
              })
            : (e[r] = o);
      const K = { breakpoints: [], cols: 1, spacing: "md" },
        M = (0, i.forwardRef)((e, r) => {
          const o = (0, n.Z3)("SimpleGrid", K, e),
            {
              className: t,
              breakpoints: a,
              cols: l,
              spacing: c,
              children: d,
              classNames: f,
              styles: m,
            } = o,
            p = ((e, r) => {
              var o = {};
              for (var t in e)
                X.call(e, t) && r.indexOf(t) < 0 && (o[t] = e[t]);
              if (null != e && A)
                for (var t of A(e))
                  r.indexOf(t) < 0 && q.call(e, t) && (o[t] = e[t]);
              return o;
            })(o, [
              "className",
              "breakpoints",
              "cols",
              "spacing",
              "children",
              "classNames",
              "styles",
            ]),
            { classes: b, cx: u } = L(
              { breakpoints: a, cols: l, spacing: c },
              { classNames: f, styles: m, name: "SimpleGrid" }
            );
          return i.createElement(
            s.x,
            ((e, r) => {
              for (var o in r || (r = {})) X.call(r, o) && J(e, o, r[o]);
              if (A) for (var o of A(r)) q.call(r, o) && J(e, o, r[o]);
              return e;
            })({ className: u(b.root, t), ref: r }, p),
            d
          );
        });
      M.displayName = "@mantine/core/SimpleGrid";
      var Q = o(26089),
        U = (0, a.k)(function (e) {
          return {
            root: { padding: 1.5 * e.spacing.xl },
            label: { fontFamily: "Greycliff CF, ".concat(e.fontFamily) },
          };
        });
      function V(e) {
        var r = e.data,
          o = U().classes,
          i = r.map(function (e) {
            var r = e.diff > 0 ? Q.Gux : Q.NC9;
            return (0, t.jsxs)(
              u,
              {
                withBorder: !0,
                p: "md",
                radius: "md",
                children: [
                  (0, t.jsxs)(h.Z, {
                    position: "apart",
                    children: [
                      (0, t.jsxs)("div", {
                        children: [
                          (0, t.jsx)(g.x, {
                            color: "dimmed",
                            transform: "uppercase",
                            weight: 700,
                            size: "xs",
                            className: o.label,
                            children: e.title,
                          }),
                          (0, t.jsx)(g.x, {
                            weight: 700,
                            size: "xl",
                            children: e.value,
                          }),
                        ],
                      }),
                      (0, t.jsx)(W, {
                        color: "gray",
                        variant: "light",
                        sx: function (r) {
                          return {
                            color:
                              e.diff > 0 ? r.colors.teal[6] : r.colors.red[6],
                          };
                        },
                        size: 38,
                        radius: "md",
                        children: (0, t.jsx)(r, { size: 28 }),
                      }),
                    ],
                  }),
                  (0, t.jsxs)(g.x, {
                    color: "dimmed",
                    size: "sm",
                    mt: "md",
                    children: [
                      (0, t.jsxs)(g.x, {
                        component: "span",
                        color: e.diff > 0 ? "teal" : "red",
                        weight: 700,
                        children: [e.diff, "%"],
                      }),
                      " ",
                      e.diff > 0 ? "increase" : "decrease",
                      " compared to last month",
                    ],
                  }),
                ],
              },
              e.title
            );
          });
        return (0, t.jsx)("div", {
          className: o.root,
          children: (0, t.jsx)(M, {
            cols: 3,
            breakpoints: [{ maxWidth: "sm", cols: 1 }],
            children: i,
          }),
        });
      }
      const Y = { xs: 1, sm: 2, md: 3, lg: 4, xl: 5 };
      var ee = (0, a.k)((e, { size: r, variant: o, color: t }) => ({
          root: {},
          withLabel: { borderTop: "0 !important" },
          left: { "&::before": { display: "none" } },
          right: { "&::after": { display: "none" } },
          label: {
            display: "flex",
            alignItems: "center",
            color: "dark" === t ? e.colors.dark[1] : e.fn.themeColor(t, 6),
            "&::before": {
              content: '""',
              flex: 1,
              height: 1,
              borderTop: `${e.fn.size({
                size: r,
                sizes: Y,
              })}px ${o} ${e.fn.themeColor(
                t,
                "dark" === e.colorScheme ? 3 : 4
              )}`,
              marginRight: e.spacing.xs,
            },
            "&::after": {
              content: '""',
              flex: 1,
              borderTop: `${e.fn.size({
                size: r,
                sizes: Y,
              })}px ${o} ${e.fn.themeColor(
                t,
                "dark" === e.colorScheme ? 3 : 4
              )}`,
              marginLeft: e.spacing.xs,
            },
          },
          horizontal: {
            border: 0,
            borderTopWidth: e.fn.size({ size: r, sizes: Y }),
            borderTopColor: e.fn.themeColor(
              t,
              "dark" === e.colorScheme ? 3 : 4
            ),
            borderTopStyle: o,
            margin: 0,
          },
          vertical: {
            border: 0,
            alignSelf: "stretch",
            height: "100%",
            borderLeftWidth: e.fn.size({ size: r, sizes: Y }),
            borderLeftColor: e.fn.themeColor(t, 4),
            borderLeftStyle: o,
          },
        })),
        re = Object.defineProperty,
        oe = Object.defineProperties,
        te = Object.getOwnPropertyDescriptors,
        ie = Object.getOwnPropertySymbols,
        ae = Object.prototype.hasOwnProperty,
        ne = Object.prototype.propertyIsEnumerable,
        le = (e, r, o) =>
          r in e
            ? re(e, r, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: o,
              })
            : (e[r] = o),
        se = (e, r) => {
          for (var o in r || (r = {})) ae.call(r, o) && le(e, o, r[o]);
          if (ie) for (var o of ie(r)) ne.call(r, o) && le(e, o, r[o]);
          return e;
        };
      const ce = {
          orientation: "horizontal",
          size: "xs",
          labelPosition: "left",
          variant: "solid",
        },
        de = (0, i.forwardRef)((e, r) => {
          const o = (0, n.Z3)("Divider", ce, e),
            {
              className: t,
              color: a,
              orientation: l,
              size: c,
              label: d,
              labelPosition: f,
              labelProps: m,
              variant: p,
              styles: b,
              classNames: u,
            } = o,
            h = ((e, r) => {
              var o = {};
              for (var t in e)
                ae.call(e, t) && r.indexOf(t) < 0 && (o[t] = e[t]);
              if (null != e && ie)
                for (var t of ie(e))
                  r.indexOf(t) < 0 && ne.call(e, t) && (o[t] = e[t]);
              return o;
            })(o, [
              "className",
              "color",
              "orientation",
              "size",
              "label",
              "labelPosition",
              "labelProps",
              "variant",
              "styles",
              "classNames",
            ]),
            x = (0, n.rZ)(),
            y = a || ("dark" === x.colorScheme ? "dark" : "gray"),
            { classes: v, cx: O } = ee(
              { color: y, size: c, variant: p },
              { classNames: u, styles: b, name: "Divider" }
            ),
            w = "vertical" === l,
            j = !w,
            z = !!d && j;
          return i.createElement(
            s.x,
            se(
              {
                ref: r,
                className: O(
                  v.root,
                  { [v.vertical]: w, [v.horizontal]: j, [v.withLabel]: z },
                  t
                ),
              },
              h
            ),
            !!d &&
              j &&
              i.createElement(
                g.x,
                ((k = se({}, m)),
                (P = {
                  color: y,
                  size: (null == m ? void 0 : m.size) || "xs",
                  sx: { marginTop: 2 },
                  className: O(v.label, v[f]),
                }),
                oe(k, te(P))),
                d
              )
          );
          var k, P;
        });
      de.displayName = "@mantine/core/Divider";
      var fe = Object.defineProperty,
        me = Object.defineProperties,
        pe = Object.getOwnPropertyDescriptors,
        be = Object.getOwnPropertySymbols,
        ue = Object.prototype.hasOwnProperty,
        he = Object.prototype.propertyIsEnumerable,
        ge = (e, r, o) =>
          r in e
            ? fe(e, r, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: o,
              })
            : (e[r] = o),
        xe = (e, r) => {
          for (var o in r || (r = {})) ue.call(r, o) && ge(e, o, r[o]);
          if (be) for (var o of be(r)) he.call(r, o) && ge(e, o, r[o]);
          return e;
        },
        ye = (0, a.k)((e, { element: r, align: o }) => {
          return {
            root:
              ((t = xe({}, e.fn.fontStyles())),
              (i = {
                fontFamily: e.headings.fontFamily,
                fontWeight: e.headings.fontWeight,
                fontSize: e.headings.sizes[r].fontSize,
                lineHeight: e.headings.sizes[r].lineHeight,
                margin: 0,
                color: "inherit",
                textAlign: o,
              }),
              me(t, pe(i))),
          };
          var t, i;
        }),
        ve = Object.defineProperty,
        Oe = Object.getOwnPropertySymbols,
        we = Object.prototype.hasOwnProperty,
        je = Object.prototype.propertyIsEnumerable,
        ze = (e, r, o) =>
          r in e
            ? ve(e, r, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: o,
              })
            : (e[r] = o);
      const ke = { order: 1 },
        Pe = (0, i.forwardRef)((e, r) => {
          const o = (0, n.Z3)("Title", ke, e),
            { className: t, order: a, children: l, align: c } = o,
            d = ((e, r) => {
              var o = {};
              for (var t in e)
                we.call(e, t) && r.indexOf(t) < 0 && (o[t] = e[t]);
              if (null != e && Oe)
                for (var t of Oe(e))
                  r.indexOf(t) < 0 && je.call(e, t) && (o[t] = e[t]);
              return o;
            })(o, ["className", "order", "children", "align"]),
            { classes: f, cx: m } = ye(
              { element: `h${a}`, align: c },
              { name: "Title" }
            );
          return [1, 2, 3, 4, 5, 6].includes(a)
            ? i.createElement(
                s.x,
                ((e, r) => {
                  for (var o in r || (r = {})) we.call(r, o) && ze(e, o, r[o]);
                  if (Oe) for (var o of Oe(r)) je.call(r, o) && ze(e, o, r[o]);
                  return e;
                })({ component: `h${a}`, ref: r, className: m(f.root, t) }, d),
                l
              )
            : null;
        });
      Pe.displayName = "@mantine/core/Title";
      var Ne = (0, a.k)(function (e) {
        return {
          card: { position: "relative", overflow: "visible", padding: 50 },
          icon: {
            position: "absolute",
            top: -20,
            left: "calc(50% - ".concat(30, "px)"),
          },
          title: {
            fontFamily: "Greycliff CF, ".concat(e.fontFamily),
            lineHeight: 1,
          },
        };
      });
      function Se() {
        var e = Ne().classes;
        return (0, t.jsxs)(u, {
          radius: "md",
          withBorder: !0,
          className: e.card,
          children: [
            (0, t.jsxs)(h.Z, {
              position: "center",
              spacing: "xl",
              grow: !0,
              children: [
                (0, t.jsx)(Pe, {
                  order: 4,
                  align: "center",
                  className: e.title,
                  children: "Inicial",
                }),
                (0, t.jsx)(Pe, {
                  order: 3,
                  align: "center",
                  className: e.title,
                  children: "Saldo Atual",
                }),
                (0, t.jsx)(Pe, {
                  order: 4,
                  align: "center",
                  className: e.title,
                  children: "Previsto",
                }),
              ],
            }),
            (0, t.jsxs)(h.Z, {
              position: "center",
              spacing: "xl",
              grow: !0,
              style: { marginTop: 10 },
              children: [
                (0, t.jsx)(g.x, {
                  color: "green",
                  align: "center",
                  size: "sm",
                  children: "R$4.000,00",
                }),
                (0, t.jsx)(g.x, {
                  color: "green",
                  align: "center",
                  size: "sm",
                  children: "R$1.200,00",
                }),
                (0, t.jsx)(g.x, {
                  color: "red",
                  align: "center",
                  size: "sm",
                  children: "- R$1.200,00",
                }),
              ],
            }),
          ],
        });
      }
      var Te = function () {
        return (0, t.jsxs)(t.Fragment, {
          children: [
            (0, t.jsx)(Se, {}),
            (0, t.jsx)(de, { my: "xl" }),
            (0, t.jsxs)(u, {
              shadow: "sm",
              p: "sm",
              withBorder: !0,
              style: { marginTop: 25 },
              children: [
                (0, t.jsx)(Pe, { order: 3, children: "Resumo" }),
                (0, t.jsx)(V, {
                  data: [
                    { title: "Despesas", value: "R$13.456,00", diff: 34 },
                    { title: "Receitas", value: "R$4.145,00", diff: -13 },
                    {
                      title: "Cart\xe3o de Cr\xe9dito",
                      value: "R$745,00",
                      diff: 18,
                    },
                  ],
                }),
              ],
            }),
          ],
        });
      };
    },
  },
  function (e) {
    e.O(0, [774, 888, 179], function () {
      return (r = 45301), e((e.s = r));
      var r;
    });
    var r = e.O();
    _N_E = r;
  },
]);
