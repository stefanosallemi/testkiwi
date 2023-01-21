(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [24876],
  {
    24876: function (e, s, a) {
      "use strict";
      a.d(s, {
        Z: function () {
          return q;
        },
      });
      var i = a(85893),
        r = a(67294),
        t = a(9008),
        l = a.n(t),
        n = a(14924),
        c = a(26042),
        o = a(94184),
        d = a.n(o),
        _ = a(45697),
        m = a.n(_),
        h = a(41664),
        u = a.n(h),
        C = a(11163),
        x = a(96579),
        p = a(53758),
        j = a(51857),
        f = a.n(j),
        v = {
          className: m().any,
          rightText: m().string,
          label: m().string.isRequired,
          leftIcon: p.d,
          rightIcon: p.d,
        },
        g = function (e) {
          var s = e.leftIcon,
            a = e.className,
            r = e.rightText,
            t = e.rightIcon,
            l = e.label;
          return (0, i.jsxs)("div", {
            className: d()(f().MenuListItem, (0, n.Z)({}, a, !!a)),
            children: [
              s &&
                (0, i.jsx)(p.Z, {
                  name: s,
                  width: 14,
                  className: f().leftIcon,
                  color: "var(--color-white)",
                }),
              (0, i.jsx)("span", { children: l }),
              r && (0, i.jsx)("div", { className: f().rightText, children: r }),
              t &&
                (0, i.jsx)(p.Z, {
                  name: t,
                  width: 14,
                  className: f().rightIcon,
                  color: "var(--color-white)",
                }),
            ],
          });
        };
      (g.propTypes = v),
        (g.defaultProps = {
          className: "",
          label: "Label",
          leftIcon: "Person",
        });
      var y = g,
        N = a(84914),
        b = a(16912),
        H = a(71546),
        I = a(92332),
        L = a(35114),
        Z = a.n(L),
        w = {
          className: m().any,
          menu: m().array.isRequired,
          isPremium: m().bool.isRequired,
          totalAvailableProject: m().number.isRequired,
          remainingProject: m().number.isRequired,
        },
        V = function (e) {
          var s = e.className,
            a = (e.menu, e.isPremium),
            t = (e.totalAvailableProject, e.remainingProject, (0, N.I0)()),
            l = ((0, C.useRouter)(), (0, H.UE)({}).data, (0, r.useState)(!1)),
            o = l[0],
            _ = l[1];
          return (0, i.jsx)("div", {
            className: d()(Z().Navigation, (0, n.Z)({}, s, !!s)),
            children: (0, i.jsxs)("div", {
              className: d()("container fullied flex y-center"),
              children: [
                (0, i.jsx)("div", {
                  className: d()(Z().rightSide, "flex"),
                  children: (0, i.jsx)("div", {
                    className: d()(Z().avatar, o ? Z().active : null),
                    onClick: function () {
                      return _(!o);
                    },
                    children: (0, i.jsx)("img", {
                      src: "https://picsum.photos/32",
                      alt: "User Avatar",
                    }),
                  }),
                }),
                o &&
                  (0, i.jsxs)("div", {
                    className: d()(Z().profileMenu, "blurred-box-main"),
                    children: [
                      !1,
                      (0, i.jsxs)("ul", {
                        children: [
                          (0, i.jsx)("li", {
                            children: (0, i.jsx)(u(), {
                              href: "/account",
                              children: (0, i.jsx)("a", {
                                children: (0, i.jsx)(
                                  y,
                                  (0, c.Z)(
                                    {
                                      label: "Account Settings",
                                      leftIcon: "Person",
                                    },
                                    a ? { rightText: "Pro" } : {}
                                  )
                                ),
                              }),
                            }),
                          }),
                          (0, i.jsx)("li", {
                            children: (0, i.jsx)(y, {
                              label: "Support",
                              leftIcon: "HelpCircle",
                            }),
                          }),
                          (0, i.jsx)("li", {
                            children: (0, i.jsx)(u(), {
                              href: "/login",
                              children: (0, i.jsx)("a", {
                                onClick: function () {
                                  t(I.Z.util.resetApiState()), t((0, b.xI)());
                                },
                                children: (0, i.jsx)(y, {
                                  label: "Logout",
                                  leftIcon: "LogOut",
                                }),
                              }),
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
              ],
            }),
          });
        };
      (V.propTypes = w),
        (V.defaultProps = {
          className: "",
          menu: [
            { text: "Dashboard", href: "/" },
            { text: "No-Code Automations", href: "/automations" },
            { text: "My Projects", href: "/my-projects" },
            { text: "Templates", href: "/templates" },
          ],
          isPremium: !1,
          totalAvailableProject: 3,
          remainingProject: 1,
        });
      var M = V,
        T = a(98688),
        R = a.n(T),
        P = a(43445),
        k = function () {
          var e = (0, C.useRouter)();
          return (0, i.jsxs)("div", {
            className: d()(R().dashboardsidebar),
            children: [
              (0, i.jsxs)("div", {
                className: d()(R().head),
                children: [
                  (0, i.jsx)(u(), {
                    href: "/",
                    children: (0, i.jsx)("a", {
                      className: d()(R().logo),
                      children: (0, i.jsx)(P.Z, {}),
                    }),
                  }),
                  (0, i.jsx)("div", {
                    className: d()(R().version),
                    children: (0, i.jsx)("div", { children: "v.1 Beta" }),
                  }),
                ],
              }),
              (0, i.jsx)("div", {
                className: d()(R().menu),
                children: [
                  { name: "Dashboard", icon: "Grid", href: "/" },
                  {
                    name: "Your Project",
                    icon: "Layers",
                    href: "/my-projects",
                  },
                  { name: "Automation", icon: "Archive", href: "/automations" },
                ].map(function (s, a) {
                  return (0,
                  i.jsx)(u(), { href: s.href, children: (0, i.jsxs)("a", { className: d()(R().menuItem, e.pathname == (s.href || "undefined") ? R().active : null), children: [(0, i.jsx)("div", { className: d()(R().icon), children: (0, i.jsx)(p.Z, { name: s.icon }) }), (0, i.jsx)("p", { className: d()(R().name), children: s.name })] }) }, a);
                }),
              }),
              (0, i.jsxs)("div", {
                className: d()(R().discoverCategory),
                children: [
                  (0, i.jsx)("p", {
                    className: d()(R().category),
                    children: "DISCOVER",
                  }),
                  (0, i.jsx)("div", {
                    children: [
                      {
                        name: "Video Templates",
                        icon: "Albums",
                        href: "/templates",
                      },
                      { name: "Automation Templates", icon: "GitBranch" },
                    ].map(function (s, a) {
                      return (0,
                      i.jsx)(u(), { href: s.href || "/", children: (0, i.jsxs)("a", { className: d()(R().menuItem, e.pathname == (s.href || "undefined") ? R().active : null), children: [(0, i.jsx)("div", { className: d()(R().icon), children: (0, i.jsx)(p.Z, { name: s.icon }) }), (0, i.jsx)("p", { className: d()(R().name), children: s.name })] }, a) }, a);
                    }),
                  }),
                ],
              }),
              (0, i.jsxs)("div", {
                className: d()(R().card),
                children: [
                  (0, i.jsxs)("div", {
                    className: d()(R().cardHead),
                    children: [
                      (0, i.jsx)("div", {
                        className: d()(R().cardIcon),
                        children: (0, i.jsx)(p.Z, { name: "Wallet" }),
                      }),
                      (0, i.jsx)("div", {
                        className: d()(R().cardTitle),
                        children: "You\u2019re currently using FREE plan",
                      }),
                    ],
                  }),
                  (0, i.jsxs)("div", {
                    className: d()(R().progresses),
                    children: [
                      (0, i.jsxs)("div", {
                        className: d()(R().progress),
                        children: [
                          (0, i.jsxs)("div", {
                            className: d()(R().progressHead),
                            children: [
                              (0, i.jsx)("div", {
                                className: d()(R().progressTitle),
                                children: "Video Export Credit",
                              }),
                              (0, i.jsx)("div", {
                                className: d()(R().progressPercent),
                                children: "2 / 10",
                              }),
                            ],
                          }),
                          (0, i.jsx)("div", {
                            className: d()(R().situation),
                            children: (0, i.jsx)("div", {
                              style: { width: "20%" },
                              className: (d()(R().skills), d()(R().bar)),
                            }),
                          }),
                        ],
                      }),
                      (0, i.jsxs)("div", {
                        className: d()(R().progress),
                        children: [
                          (0, i.jsxs)("div", {
                            className: d()(R().progressHead),
                            children: [
                              (0, i.jsx)("div", {
                                className: d()(R().progressTitle),
                                children: "Automation Credit",
                              }),
                              (0, i.jsx)("div", {
                                className: d()(R().progressPercent),
                                children: "6 / 10",
                              }),
                            ],
                          }),
                          (0, i.jsx)("div", {
                            className: d()(R().situation),
                            children: (0, i.jsx)("div", {
                              style: { width: "60%" },
                              className: (d()(R().skills), d()(R().bar)),
                            }),
                          }),
                        ],
                      }),
                      (0, i.jsxs)(x.Z, {
                        className: "w-full flex justify-center mt-5",
                        children: [
                          (0, i.jsx)(p.Z, {
                            name: "Rocket",
                            className: "mr-2",
                          }),
                          (0, i.jsx)("p", { children: "Upgrade Plan" }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              (0, i.jsx)("div", {
                className: d()(R().news),
                children: [
                  { name: "Notifications", icon: "Notifications" },
                  { name: "Learn", icon: "School" },
                  { name: "What\u2019s New?", icon: "Gift" },
                ].map(function (e, s) {
                  return (0,
                  i.jsxs)("div", { className: d()(R().menuItem), children: [(0, i.jsx)("div", { className: d()(R().icon), children: (0, i.jsx)(p.Z, { name: e.icon }) }), (0, i.jsx)("p", { className: d()(R().name), children: e.name })] }, s);
                }),
              }),
            ],
          });
        },
        q = function (e) {
          var s = e.title,
            a = void 0 === s ? "" : s,
            t = e.description,
            n = void 0 === t ? "" : t,
            c = e.children;
          return (0, i.jsxs)(r.Fragment, {
            children: [
              (0, i.jsxs)(l(), {
                children: [
                  (0, i.jsx)("title", { children: a }),
                  (0, i.jsx)("meta", { name: "description", content: n }),
                ],
              }),
              (0, i.jsx)(M, {}),
              (0, i.jsxs)("div", {
                className: "layoutWrapper",
                children: [
                  (0, i.jsx)(k, {}),
                  (0, i.jsx)("main", { children: c }),
                ],
              }),
            ],
          });
        };
    },
    96579: function (e, s, a) {
      "use strict";
      var i = a(85893),
        r = a(94184),
        t = a.n(r),
        l = a(45697),
        n = a.n(l),
        c = (a(67294), a(91567)),
        o = a.n(c),
        d = a(2587),
        _ = {
          className: n().any,
          children: n().oneOfType([n().arrayOf(n().node), n().node]).isRequired,
          variant: n().oneOf(["primary", "secondary", "field-button"])
            .isRequired,
          size: n().oneOf(["compact", "small", "medium"]).isRequired,
          onClick: n().func,
          loading: n().bool.isRequired,
          disabled: n().bool.isRequired,
        },
        m = {
          children: (0, i.jsx)(i.Fragment, {}),
          variant: "primary",
          size: "medium",
          onClick: function () {
            return null;
          },
          disabled: !1,
          loading: !1,
        },
        h = function (e) {
          var s = e.className,
            a = e.children,
            r = e.variant,
            l = e.size,
            n = e.onClick,
            c = e.disabled,
            _ = e.loading;
          return (0, i.jsx)("button", {
            disabled: c,
            className: t()(
              s,
              o().btn,
              o()["btn-variant-".concat(r)],
              o()["btn-size-".concat(l)]
            ),
            onClick: function () {
              return n && n();
            },
            children: _ ? (0, i.jsx)(d.Z, {}) : a,
          });
        };
      (h.propTypes = _), (h.defaultProps = m), (s.Z = h);
    },
    2587: function (e, s, a) {
      "use strict";
      var i = a(85893),
        r = (a(67294), a(94184)),
        t = a.n(r),
        l = a(26180),
        n = a.n(l);
      s.Z = function (e) {
        var s = e.className,
          a = e.size,
          r = void 0 === a ? "20px" : a;
        return (0, i.jsx)("div", {
          className: t()(n().loader, s),
          style: { width: r, height: r },
        });
      };
    },
    43445: function (e, s, a) {
      "use strict";
      var i = a(85893);
      a(67294);
      s.Z = function () {


        
        return (0, i.jsxs)("svg", {
          width: "150",
          height: "",
          viewBox: "0 0 96 24",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: [
            (0, i.jsx)("path", {
              d: "M36.1091 15.8254C35.5339 16.52 34.8556 17.0518 34.0742 17.4208C33.2928 17.7789 32.4192 17.958 31.4533 17.958C30.5851 17.958 29.7765 17.8006 29.0277 17.4859C28.2897 17.1712 27.6494 16.7425 27.1068 16.1999C26.5641 15.6572 26.1355 15.0169 25.8207 14.2789C25.506 13.5301 25.3486 12.727 25.3486 11.8696C25.3486 11.0123 25.506 10.2146 25.8207 9.4766C26.1355 8.72776 26.5641 8.08203 27.1068 7.53939C27.6494 6.99675 28.2897 6.56807 29.0277 6.25334C29.7765 5.93861 30.5851 5.78125 31.4533 5.78125C32.3866 5.78125 33.206 5.94404 33.9114 6.26962C34.6277 6.5952 35.2626 7.0673 35.8161 7.6859L34.2696 9.18358C33.9223 8.78203 33.5207 8.46187 33.0649 8.22311C32.62 7.98435 32.0882 7.86497 31.4696 7.86497C30.9269 7.86497 30.4169 7.96265 29.9393 8.15799C29.4618 8.34249 29.044 8.60838 28.6858 8.95567C28.3386 9.30296 28.0618 9.72621 27.8556 10.2254C27.6494 10.7138 27.5463 11.2619 27.5463 11.8696C27.5463 12.4774 27.6494 13.0309 27.8556 13.5301C28.0618 14.0185 28.3386 14.4363 28.6858 14.7836C29.044 15.1309 29.4618 15.4022 29.9393 15.5975C30.4169 15.782 30.9269 15.8743 31.4696 15.8743C32.1207 15.8743 32.6959 15.744 33.1951 15.4836C33.7052 15.2123 34.1556 14.8324 34.5463 14.344L36.1091 15.8254Z",
              fill: "white",
            }),
            (0, i.jsx)("path", {
              d: "M37.8733 6.04172H42.1222C42.7082 6.04172 43.24 6.13396 43.7175 6.31846C44.195 6.50296 44.602 6.75799 44.9385 7.08358C45.2857 7.40916 45.5516 7.79985 45.7361 8.25567C45.9206 8.70063 46.0129 9.189 46.0129 9.72079C46.0129 10.1115 45.9478 10.4805 45.8175 10.8278C45.6873 11.1642 45.5082 11.4735 45.2803 11.7557C45.0524 12.027 44.7865 12.2712 44.4826 12.4882C44.1788 12.6944 43.8586 12.8572 43.5222 12.9766L43.5059 13.0906L46.6315 17.5673V17.6975H44.1082L41.0966 13.3185H40.071V17.6975H37.8733V6.04172ZM42.1059 11.2999C42.6051 11.2999 43.0121 11.1479 43.3268 10.844C43.6524 10.5402 43.8152 10.1549 43.8152 9.68823C43.8152 9.48203 43.7772 9.28125 43.7013 9.0859C43.6361 8.89055 43.533 8.71691 43.392 8.56497C43.2509 8.41303 43.0718 8.29365 42.8547 8.20683C42.6485 8.10916 42.4098 8.06032 42.1385 8.06032H40.071V11.2999H42.1059Z",
              fill: "white",
            }),
            (0, i.jsx)("path", {
              d: "M50.1659 8.12544V10.8278H54.838V12.9115H50.1659V15.6138H55.359V17.6975H47.9683V6.04172H55.359V8.12544H50.1659Z",
              fill: "white",
            }),
            (0, i.jsx)("path", {
              d: "M60.7819 6.04172H63.2889L67.668 17.6975H65.2424L64.2819 14.9138H59.7889L58.8285 17.6975H56.4029L60.7819 6.04172ZM63.5657 12.8952L62.5238 9.98125L62.1005 8.56497H61.9703L61.5471 9.98125L60.5052 12.8952H63.5657Z",
              fill: "white",
            }),
            (0, i.jsx)("path", {
              d: "M70.4418 17.6975V8.12544H67.186V6.04172H75.8953V8.12544H72.6395V17.6975H70.4418Z",
              fill: "white",
            }),
            (0, i.jsx)("path", {
              d: "M79.6559 8.12544V10.8278H84.328V12.9115H79.6559V15.6138H84.8489V17.6975H77.4582V6.04172H84.8489V8.12544H79.6559Z",
              fill: "white",
            }),
            (0, i.jsx)("path", {
              d: "M90.0277 13.2696C89.5067 13.2696 89.0184 13.1719 88.5626 12.9766C88.1176 12.7813 87.7215 12.5154 87.3742 12.1789C87.0377 11.8316 86.7719 11.4355 86.5765 10.9906C86.3812 10.5347 86.2835 10.0464 86.2835 9.52544C86.2835 9.01536 86.3812 8.53241 86.5765 8.0766C86.7719 7.62079 87.0377 7.22466 87.3742 6.88823C87.7215 6.54094 88.1176 6.26962 88.5626 6.07427C89.0184 5.87892 89.5067 5.78125 90.0277 5.78125C90.5378 5.78125 91.0207 5.87892 91.4765 6.07427C91.9323 6.26962 92.3284 6.54094 92.6649 6.88823C93.0122 7.22466 93.2835 7.62079 93.4788 8.0766C93.6742 8.53241 93.7719 9.01536 93.7719 9.52544C93.7719 10.0464 93.6742 10.5347 93.4788 10.9906C93.2835 11.4355 93.0122 11.8316 92.6649 12.1789C92.3284 12.5154 91.9323 12.7813 91.4765 12.9766C91.0207 13.1719 90.5378 13.2696 90.0277 13.2696ZM90.0277 12.4882C90.4401 12.4882 90.8253 12.4123 91.1835 12.2603C91.5416 12.0975 91.8564 11.8805 92.1277 11.6092C92.399 11.3378 92.6106 11.0231 92.7626 10.665C92.9145 10.3068 92.9905 9.92699 92.9905 9.52544C92.9905 9.11303 92.9145 8.72776 92.7626 8.36962C92.6106 8.01148 92.399 7.69675 92.1277 7.42544C91.8564 7.15412 91.5416 6.94249 91.1835 6.79055C90.8253 6.63861 90.4401 6.56265 90.0277 6.56265C89.6261 6.56265 89.2463 6.63861 88.8881 6.79055C88.53 6.94249 88.2153 7.15412 87.944 7.42544C87.6726 7.69675 87.4556 8.01148 87.2928 8.36962C87.1408 8.72776 87.0649 9.11303 87.0649 9.52544C87.0649 9.92699 87.1408 10.3068 87.2928 10.665C87.4556 11.0231 87.6726 11.3378 87.944 11.6092C88.2153 11.8805 88.53 12.0975 88.8881 12.2603C89.2463 12.4123 89.6261 12.4882 90.0277 12.4882ZM88.7742 11.365V7.6859H90.337C90.6517 7.6859 90.9284 7.79985 91.1672 8.02776C91.406 8.24482 91.5253 8.52156 91.5253 8.85799C91.5253 9.10761 91.444 9.33551 91.2812 9.54172C91.1292 9.73706 90.9393 9.8673 90.7114 9.93241L90.6788 9.96497L91.6556 11.3324V11.365H90.8091L89.9137 9.99753H89.523V11.365H88.7742ZM90.2719 9.31381C90.4021 9.31381 90.5161 9.27582 90.6137 9.19986C90.7223 9.11303 90.7765 8.99908 90.7765 8.85799C90.7765 8.74947 90.7331 8.64637 90.6463 8.54869C90.5595 8.45102 90.4401 8.40218 90.2881 8.40218H89.523V9.31381H90.2719Z",
              fill: "white",
            }),
            (0, i.jsx)("path", {
              d: "M0 10.9302C0 7.80436 0 6.24142 0.608336 5.04749C1.14344 3.99729 1.99729 3.14344 3.04749 2.60834C4.24142 2 5.80436 2 8.93023 2H11.0698C14.1956 2 15.7586 2 16.9525 2.60834C18.0027 3.14344 18.8566 3.99729 19.3917 5.04749C20 6.24142 20 7.80436 20 10.9302V13.0698C20 16.1956 20 17.7586 19.3917 18.9525C18.8566 20.0027 18.0027 20.8566 16.9525 21.3917C15.7586 22 14.1956 22 11.0698 22H8.93023C5.80436 22 4.24142 22 3.04749 21.3917C1.99729 20.8566 1.14344 20.0027 0.608336 18.9525C0 17.7586 0 16.1956 0 13.0698V10.9302Z",
              fill: "white",
            }),
            (0, i.jsx)("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M9.14402 5.88965H10.9052H12.3028C14.2012 5.88965 15.7402 7.44397 15.7402 9.36133C15.7402 10.7077 14.9814 11.875 13.8721 12.4509C13.6396 12.5716 13.4002 12.6567 13.154 12.7182C12.7419 12.8211 12.3159 12.6677 12.0034 12.3801C11.526 11.9408 11.8412 11.2316 12.4832 11.1387C12.5453 11.1297 12.6069 11.1189 12.6678 11.1059C13.4675 10.9361 14.0679 10.2195 14.0679 9.36133C14.0679 8.37674 13.2776 7.57857 12.3028 7.57857L9.14402 7.57857V7.57689H7.71821C6.73461 7.57689 5.93724 8.37425 5.93724 9.35786C5.93724 10.2152 6.54302 10.931 7.34991 11.1007C7.41159 11.1137 7.47397 11.1245 7.53692 11.1335C8.18153 11.2257 8.49606 11.94 8.01474 12.3786C7.70269 12.663 7.2795 12.8141 6.8694 12.7138C6.61745 12.6522 6.37254 12.5665 6.13482 12.4443C5.01562 11.869 4.25 10.7029 4.25 9.35786C4.25 7.44242 5.80277 5.88965 7.71821 5.88965H9.14402ZM8.80033 13.1331L8.79716 13.1299L8.81951 13.1077C9.47869 12.452 10.544 12.4527 11.2023 13.1094L11.2009 13.1108L14.6905 16.6004C15.025 16.9349 15.025 17.4773 14.6905 17.8118C14.3559 18.1463 13.8136 18.1463 13.479 17.8118L9.98945 14.3222L6.50925 17.8024C6.18088 18.1308 5.6485 18.1308 5.32013 17.8024C4.99176 17.4741 4.99176 16.9417 5.32013 16.6133L8.80033 13.1331Z",
              fill: "#0067F4",
            }),
          ],
        });
      };
    },
    35114: function (e) {
      e.exports = {
        Navigation: "styles_Navigation__zJw_I",
        logo: "styles_logo__8zpYF",
        nav: "styles_nav__TbHIX",
        activeItem: "styles_activeItem__t_pJM",
        rightSide: "styles_rightSide__oRG6Z",
        avatar: "styles_avatar__SVxt4",
        active: "styles_active__T7Crd",
        profileMenu: "styles_profileMenu__xaISB",
        upgradeCta: "styles_upgradeCta__scYcW",
        progressBar: "styles_progressBar__Tx_KK",
        progressbarBackground: "styles_progressbarBackground__MHlzD",
        progressbarProgress: "styles_progressbarProgress__xIK4g",
      };
    },
    91567: function (e) {
      e.exports = {
        btn: "styles_btn__lpgDR",
        "btn-variant-primary": "styles_btn-variant-primary__1eiD0",
        "btn-variant-secondary": "styles_btn-variant-secondary__E_7BU",
        "btn-variant-field-button": "styles_btn-variant-field-button__Xawwe",
        "btn-size-medium": "styles_btn-size-medium__DqgVr",
        "btn-size-small": "styles_btn-size-small__ESBkG",
        "btn-size-compact": "styles_btn-size-compact__5oRRd",
      };
    },
    98688: function (e) {
      e.exports = {
        dashboardsidebar: "styles_dashboardsidebar__2KMWa",
        head: "styles_head__FUTTx",
        logo: "styles_logo__0qeMa",
        version: "styles_version__x9Iyf",
        menu: "styles_menu__Gc_J9",
        menuItem: "styles_menuItem__qnfbA",
        active: "styles_active__owofR",
        icon: "styles_icon__4TEZX",
        name: "styles_name__w5qj9",
        discoverCategory: "styles_discoverCategory__CCl3m",
        category: "styles_category__vhU01",
        card: "styles_card__RMEXc",
        cardHead: "styles_cardHead__1LvE7",
        cardIcon: "styles_cardIcon__lbL10",
        progress: "styles_progress__37Bkq",
        progressHead: "styles_progressHead__H66dX",
        progressTitle: "styles_progressTitle__U5rkH",
        situation: "styles_situation__U2To2",
        skills: "styles_skills__TjtME",
        fillBar: "styles_fillBar__XT7V2",
        bar: "styles_bar__wOcVf",
        progressButton: "styles_progressButton__erpgc",
        news: "styles_news__by8Lq",
        profileCard: "styles_profileCard__zNpjc",
        profile: "styles_profile__Chqsm",
        profileImage: "styles_profileImage__gzIl2",
        profileMore: "styles_profileMore__xJ7dJ",
      };
    },
    26180: function (e) {
      e.exports = {
        loader: "styles_loader__c69S1",
        loading: "styles_loading__UQl_s",
      };
    },
    51857: function (e) {
      e.exports = {
        MenuListItem: "styles_MenuListItem__uTX05",
        leftIcon: "styles_leftIcon__11IOY",
        rightIcon: "styles_rightIcon__nD64N",
        rightText: "styles_rightText__KBC09",
      };
    },
  },
]);
