
  // handle clicks on tree items
  $('.infinite-record-wrapper').on('click', '.infinite-record-record a.record-title', function(event) {
    // update the hash so browser-back returns user to the record they clicked
    var $record = $(this).closest('.infinite-record-record');
    var uri = $record.data('uri');
    location.hash = '#scroll::'+uri;

    return true;
  });

    function resizeContextDropdown() {
        $('#scrollContext').closest('.dropdown').find('.dropdown-menu').css('max-height', $(window).height() - 200);
    }
    $('#scrollContext').dropdown();
    $('#scrollContext').closest('.dropdown').on('show.bs.dropdown', function() {
        resizeContextDropdown();
    });
    $(window).resize(resizeContextDropdown);


function ResizableSidebar(t) {
    return this.$sidebar = t,
    this.$row = t.closest(".row"),
    this.$content_pane = $(this.$row.find("> div:not(.resizable-sidebar)")[0]),
    0 == this.$content_pane.length ? void this.$sidebar.removeClass("resizable-sidebar") : (this.$row.addClass("has-resizable-content"), this.add_handle(), void this.bind_events())
}
function setupCite(t, e) {
    setupClip(t, e, "citeThis", "cite"),
    $("#cite_sub").submit(function () {
        return cite(),
        !1
    })
}
function setupClip(t, e, n, r) {
    var i = $("#" + t);
    i.find("div.modal-body").attr("id", n);
    var o,
    a = i.find(".action-btn");
    o = 1 == a.length ? a[0] : a,
    $(o).attr("id", r + "_btn"),
    $(o).addClass("clip-btn"),
    $(o).attr("data-clipboard-target", "#" + n),
    $(o).html(e),
    new Clipboard(".clip-btn")
}
function cite() {
    $("#cite_modal").modal("show")
}
function initialize_accordion(t, e, n) {
    expand_text = e,
    collapse_text = n,
    $(t).size() > 1 && 1 === $(t).parents(".acc_holder").size() && (0 == $(t).parents(".acc_holder").children(".acc_button").size() && $(t).parents(".acc_holder").prepend("<a  class='btn btn-primary btn-sm acc_button' role='button' ></a>"), collapse_all(t, !1))
}
function collapse_all(t, e) {
    $(t).each(function () {
        $(this).collapse(e ? "show" : "hide")
    }),
    set_button(t, !e)
}
function set_button(t, e) {
    $holder = $(t).parents(".acc_holder"),
    $btn = $holder.children(".acc_button"),
    1 === $btn.size() && ($btn.text(e ? expand_text : collapse_text), $btn.attr("href", "javascript:collapse_all('" + t + "'," + e + ")"))
}
function MoreFacets(t) {
    this.$more_facets_div = t,
    this.bind_events()
}
function setupRequest(t, e) {
    $(".noscript").hide(),
    $("#request_sub").submit(function () {
        return request_form(),
        !1
    });
    var n = $("#" + t);
    n.find("div.modal-body").attr("id", "requestThis");
    var r,
    i = n.find(".action-btn");
    r = 1 == i.length ? i[0] : i,
    $(r).attr("id", "request_btn"),
    $(r).html(e),
    $(r).click(function () {
        $("#request_form").submit()
    })
}
function request_form() {
    $("#request_modal").modal("show"),
    $("#user_name", this).closest(".form-group").removeClass("has-error"),
    $("#user_email", this).closest(".form-group").removeClass("has-error"),
    $("#request_form", "#request_modal").on("submit", function () {
        var t = !0;
        return "" == $("#user_name", this).val().trim() ? ($("#user_name", this).closest(".form-group").addClass("has-error"), t = !1) : $("#user_name", this).closest(".form-group").removeClass("has-error"),
        "" == $("#user_email", this).val().trim() ? ($("#user_email", this).closest(".form-group").addClass("has-error"), t = !1) : $("#user_email", this).closest(".form-group").removeClass("has-error"),
        t
    })
}
function initialize_search() {
    $as = $("#advanced_search"),
    $as.find(".search_row").each(function (t) {
        new_button($(this), $as.find(".search_row").length - 1 == t)
    });
    var t = $($as.find("#search_row_0"));
    return $template = t.clone(),
    $template.find(":input").each(function () {
        $(this).is("select") ? $(this).find("option[selected]").removeAttr("selected") : $(this).val("")
    }),
    $template.find(".norepeat").each(function () {
        $(this).empty()
    }),
    $template.find(".hidden").each(function () {
        $(this).removeClass("hidden")
    }),
    $template.find("#op0").removeProp("disabled"),
    $template.find("#op0").val("AND"),
    $template.find("#op_").remove(),
    t.find("#q0").keypress(function (t) {
        var e = t.which;
        if (13 == e)
            return $("#submit_search").click(), !1
    }),
    t.find("> .col-sm-1:first").hide(),
    t.find("> .col-sm-3:first").addClass("col-sm-4").removeClass("col-sm-3"),
    $template.find("> .col-sm-3.norepeat").remove(),
    $template.find("> .col-sm-3:first").addClass("col-sm-6").removeClass("col-sm-3"),
    !0
}
function new_button(t, e) {
    var n = t.find(".plusminus");
    return e ? n.html("<button class='btn btn-default' title='" + plusText + "' aria-label='" + plusText + "'><i aria-hidden='true' class='" + plusFACss + "'></i></button>") : n.html("<button class='btn btn-default' title='" + minusText + "' aria-label='" + minusText + "'><i aria-hidden='true' class='" + minusFACss + "'></i></button>"),
    n.find("button").click(fn_plusminus),
    !0
}
function new_row_from_template() {
    var t = $as.find(".search_row").size(),
    e = $template.clone();
    return replace_id_ref(e, "label", "for", t),
    replace_id_ref(e, "input", "id", t),
    replace_id_ref(e, "select", "id", t),
    e.attr("id", "search_row_" + t),
    new_button(e, !0),
    e
}
function add_search_line() {
    $row = new_row_from_template()
}
function replace_id_ref(t, e, n, r) {
    t.find(e).each(function () {
        $(this).attr(n, $(this).attr(n).replace("0", r))
    })
}
function toggle_subgroups() {
    var t = $(this),
    e = t.closest(".recordrow"),
    n = (e.find(".classification-subgroups"), e.find(".classification-subgroups-tree"));
    if (n.is(":visible"))
        n.hide(), t.attr("aria-pressed", "false").removeClass("active"), t.find(".fa").removeClass("fa-minus").addClass("fa-plus");
    else {
        if (n.show(), n.is(":empty")) {
            var r = e.data("uri"),
            i = !0;
            new LargeTree(new TreeDataSource(AS.app_prefix(r + "/tree")), n, r, !0, new SimpleRenderer(i), $.noop, $.noop)
        }
        t.attr("aria-pressed", "true").addClass("active"),
        t.find(".fa").removeClass("fa-plus").addClass("fa-minus")
    }
}
!function (t, e) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = t.document ? e(t, !0) : function (t) {
        if (!t.document)
            throw new Error("jQuery requires a window with a document");
        return e(t)
    }
     : e(t)
}
("undefined" != typeof window ? window : this, function (t, e) {
    function n(t) {
        var e = !!t && "length" in t && t.length,
        n = pt.type(t);
        return "function" !== n && !pt.isWindow(t) && ("array" === n || 0 === e || "number" == typeof e && e > 0 && e - 1 in t)
    }
    function r(t, e, n) {
        if (pt.isFunction(e))
            return pt.grep(t, function (t, r) {
                return !!e.call(t, r, t) !== n
            });
        if (e.nodeType)
            return pt.grep(t, function (t) {
                return t === e !== n
            });
        if ("string" == typeof e) {
            if (Ct.test(e))
                return pt.filter(e, t, n);
            e = pt.filter(e, t)
        }
        return pt.grep(t, function (t) {
            return pt.inArray(t, e) > -1 !== n
        })
    }
    function i(t, e) {
        do
            t = t[e];
        while (t && 1 !== t.nodeType);
        return t
    }
    function o(t) {
        var e = {};
        return pt.each(t.match(At) || [], function (t, n) {
            e[n] = !0
        }),
        e
    }
    function a() {
        rt.addEventListener ? (rt.removeEventListener("DOMContentLoaded", s), t.removeEventListener("load", s)) : (rt.detachEvent("onreadystatechange", s), t.detachEvent("onload", s))
    }
    function s() {
        (rt.addEventListener || "load" === t.event.type || "complete" === rt.readyState) && (a(), pt.ready())
    }
    function l(t, e, n) {
        if (void 0 === n && 1 === t.nodeType) {
            var r = "data-" + e.replace(It, "-$1").toLowerCase();
            if (n = t.getAttribute(r), "string" == typeof n) {
                try {
                    n = "true" === n || "false" !== n && ("null" === n ? null : +n + "" === n ? +n : Dt.test(n) ? pt.parseJSON(n) : n)
                } catch (t) {}
                pt.data(t, e, n)
            } else
                n = void 0
        }
        return n
    }
    function u(t) {
        var e;
        for (e in t)
            if (("data" !== e || !pt.isEmptyObject(t[e])) && "toJSON" !== e)
                return !1;
        return !0
    }
    function c(t, e, n, r) {
        if (Rt(t)) {
            var i,
            o,
            a = pt.expando,
            s = t.nodeType,
            l = s ? pt.cache : t,
            u = s ? t[a] : t[a] && a;
            if (u && l[u] && (r || l[u].data) || void 0 !== n || "string" != typeof e)
                return u || (u = s ? t[a] = nt.pop() || pt.guid++ : a), l[u] || (l[u] = s ? {}
                     : {
                    toJSON: pt.noop
                }), "object" != typeof e && "function" != typeof e || (r ? l[u] = pt.extend(l[u], e) : l[u].data = pt.extend(l[u].data, e)), o = l[u], r || (o.data || (o.data = {}), o = o.data), void 0 !== n && (o[pt.camelCase(e)] = n), "string" == typeof e ? (i = o[e], null == i && (i = o[pt.camelCase(e)])) : i = o, i
        }
    }
    function f(t, e, n) {
        if (Rt(t)) {
            var r,
            i,
            o = t.nodeType,
            a = o ? pt.cache : t,
            s = o ? t[pt.expando] : pt.expando;
            if (a[s]) {
                if (e && (r = n ? a[s] : a[s].data)) {
                    pt.isArray(e) ? e = e.concat(pt.map(e, pt.camelCase)) : e in r ? e = [e] : (e = pt.camelCase(e), e = e in r ? [e] : e.split(" ")),
                    i = e.length;
                    for (; i--; )
                        delete r[e[i]];
                    if (n ? !u(r) : !pt.isEmptyObject(r))
                        return
                }
                (n || (delete a[s].data, u(a[s]))) && (o ? pt.cleanData([t], !0) : ft.deleteExpando || a != a.window ? delete a[s] : a[s] = void 0)
            }
        }
    }
    function d(t, e, n, r) {
        var i,
        o = 1,
        a = 20,
        s = r ? function () {
            return r.cur()
        }
         : function () {
            return pt.css(t, e, "")
        },
        l = s(),
        u = n && n[3] || (pt.cssNumber[e] ? "" : "px"),
        c = (pt.cssNumber[e] || "px" !== u && +l) && Ot.exec(pt.css(t, e));
        if (c && c[3] !== u) {
            u = u || c[3],
            n = n || [],
            c = +l || 1;
            do
                o = o || ".5", c /= o, pt.style(t, e, c + u);
            while (o !== (o = s() / l) && 1 !== o && --a)
        }
        return n && (c = +c || +l || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = u, r.start = c, r.end = i)),
        i
    }
    function p(t) {
        var e = Bt.split("|"),
        n = t.createDocumentFragment();
        if (n.createElement)
            for (; e.length; )
                n.createElement(e.pop());
        return n
    }
    function h(t, e) {
        var n,
        r,
        i = 0,
        o = "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e || "*") : "undefined" != typeof t.querySelectorAll ? t.querySelectorAll(e || "*") : void 0;
        if (!o)
            for (o = [], n = t.childNodes || t; null != (r = n[i]); i++)
                !e || pt.nodeName(r, e) ? o.push(r) : pt.merge(o, h(r, e));
        return void 0 === e || e && pt.nodeName(t, e) ? pt.merge([t], o) : o
    }
    function v(t, e) {
        for (var n, r = 0; null != (n = t[r]); r++)
            pt._data(n, "globalEval", !e || pt._data(e[r], "globalEval"))
    }
    function m(t) {
        Wt.test(t.type) && (t.defaultChecked = t.checked)
    }
    function g(t, e, n, r, i) {
        for (var o, a, s, l, u, c, f, d = t.length, g = p(e), y = [], b = 0; b < d; b++)
            if (a = t[b], a || 0 === a)
                if ("object" === pt.type(a))
                    pt.merge(y, a.nodeType ? [a] : a);
                else if (Kt.test(a)) {
                    for (l = l || g.appendChild(e.createElement("div")), u = (Mt.exec(a) || ["", ""])[1].toLowerCase(), f = Ut[u] || Ut._default, l.innerHTML = f[1] + pt.htmlPrefilter(a) + f[2], o = f[0]; o--; )
                        l = l.lastChild;
                    if (!ft.leadingWhitespace && qt.test(a) && y.push(e.createTextNode(qt.exec(a)[0])), !ft.tbody)
                        for (a = "table" !== u || Xt.test(a) ? "<table>" !== f[1] || Xt.test(a) ? 0 : l : l.firstChild, o = a && a.childNodes.length; o--; )
                            pt.nodeName(c = a.childNodes[o], "tbody") && !c.childNodes.length && a.removeChild(c);
                    for (pt.merge(y, l.childNodes), l.textContent = ""; l.firstChild; )
                        l.removeChild(l.firstChild);
                    l = g.lastChild
                } else
                    y.push(e.createTextNode(a));
        for (l && g.removeChild(l), ft.appendChecked || pt.grep(h(y, "input"), m), b = 0; a = y[b++]; )
            if (r && pt.inArray(a, r) > -1)
                i && i.push(a);
            else if (s = pt.contains(a.ownerDocument, a), l = h(g.appendChild(a), "script"), s && v(l), n)
                for (o = 0; a = l[o++]; )
                    zt.test(a.type || "") && n.push(a);
        return l = null,
        g
    }
    function y() {
        return !0
    }
    function b() {
        return !1
    }
    function _() {
        try {
            return rt.activeElement
        } catch (t) {}
    }
    function x(t, e, n, r, i, o) {
        var a,
        s;
        if ("object" == typeof e) {
            "string" != typeof n && (r = r || n, n = void 0);
            for (s in e)
                x(t, s, n, r, e[s], o);
            return t
        }
        if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), i === !1)
            i = b;
        else if (!i)
            return t;
        return 1 === o && (a = i, i = function (t) {
            return pt().off(t),
            a.apply(this, arguments)
        }, i.guid = a.guid || (a.guid = pt.guid++)),
        t.each(function () {
            pt.event.add(this, e, i, r, n)
        })
    }
    function w(t, e) {
        return pt.nodeName(t, "table") && pt.nodeName(11 !== e.nodeType ? e : e.firstChild, "tr") ? t.getElementsByTagName("tbody")[0] || t.appendChild(t.ownerDocument.createElement("tbody")) : t
    }
    function C(t) {
        return t.type = (null !== pt.find.attr(t, "type")) + "/" + t.type,
        t
    }
    function T(t) {
        var e = ie.exec(t.type);
        return e ? t.type = e[1] : t.removeAttribute("type"),
        t
    }
    function $(t, e) {
        if (1 === e.nodeType && pt.hasData(t)) {
            var n,
            r,
            i,
            o = pt._data(t),
            a = pt._data(e, o),
            s = o.events;
            if (s) {
                delete a.handle,
                a.events = {};
                for (n in s)
                    for (r = 0, i = s[n].length; r < i; r++)
                        pt.event.add(e, n, s[n][r])
            }
            a.data && (a.data = pt.extend({}, a.data))
        }
    }
    function k(t, e) {
        var n,
        r,
        i;
        if (1 === e.nodeType) {
            if (n = e.nodeName.toLowerCase(), !ft.noCloneEvent && e[pt.expando]) {
                i = pt._data(e);
                for (r in i.events)
                    pt.removeEvent(e, r, i.handle);
                e.removeAttribute(pt.expando)
            }
            "script" === n && e.text !== t.text ? (C(e).text = t.text, T(e)) : "object" === n ? (e.parentNode && (e.outerHTML = t.outerHTML), ft.html5Clone && t.innerHTML && !pt.trim(e.innerHTML) && (e.innerHTML = t.innerHTML)) : "input" === n && Wt.test(t.type) ? (e.defaultChecked = e.checked = t.checked, e.value !== t.value && (e.value = t.value)) : "option" === n ? e.defaultSelected = e.selected = t.defaultSelected : "input" !== n && "textarea" !== n || (e.defaultValue = t.defaultValue)
        }
    }
    function E(t, e, n, r) {
        e = ot.apply([], e);
        var i,
        o,
        a,
        s,
        l,
        u,
        c = 0,
        f = t.length,
        d = f - 1,
        p = e[0],
        v = pt.isFunction(p);
        if (v || f > 1 && "string" == typeof p && !ft.checkClone && re.test(p))
            return t.each(function (i) {
                var o = t.eq(i);
                v && (e[0] = p.call(this, i, o.html())),
                E(o, e, n, r)
            });
        if (f && (u = g(e, t[0].ownerDocument, !1, t, r), i = u.firstChild, 1 === u.childNodes.length && (u = i), i || r)) {
            for (s = pt.map(h(u, "script"), C), a = s.length; c < f; c++)
                o = u, c !== d && (o = pt.clone(o, !0, !0), a && pt.merge(s, h(o, "script"))), n.call(t[c], o, c);
            if (a)
                for (l = s[s.length - 1].ownerDocument, pt.map(s, T), c = 0; c < a; c++)
                    o = s[c], zt.test(o.type || "") && !pt._data(o, "globalEval") && pt.contains(l, o) && (o.src ? pt._evalUrl && pt._evalUrl(o.src) : pt.globalEval((o.text || o.textContent || o.innerHTML || "").replace(oe, "")));
            u = i = null
        }
        return t
    }
    function S(t, e, n) {
        for (var r, i = e ? pt.filter(e, t) : t, o = 0; null != (r = i[o]); o++)
            n || 1 !== r.nodeType || pt.cleanData(h(r)), r.parentNode && (n && pt.contains(r.ownerDocument, r) && v(h(r, "script")), r.parentNode.removeChild(r));
        return t
    }
    function A(t, e) {
        var n = pt(e.createElement(t)).appendTo(e.body),
        r = pt.css(n[0], "display");
        return n.detach(),
        r
    }
    function N(t) {
        var e = rt,
        n = ue[t];
        return n || (n = A(t, e), "none" !== n && n || (le = (le || pt("<iframe frameborder='0' width='0' height='0'/>")).appendTo(e.documentElement), e = (le[0].contentWindow || le[0].contentDocument).document, e.write(), e.close(), n = A(t, e), le.detach()), ue[t] = n),
        n
    }
    function j(t, e) {
        return {
            get: function () {
                return t() ? void delete this.get : (this.get = e).apply(this, arguments)
            }
        }
    }
    function R(t) {
        if (t in Te)
            return t;
        for (var e = t.charAt(0).toUpperCase() + t.slice(1), n = Ce.length; n--; )
            if (t = Ce[n] + e, t in Te)
                return t
    }
    function D(t, e) {
        for (var n, r, i, o = [], a = 0, s = t.length; a < s; a++)
            r = t[a], r.style && (o[a] = pt._data(r, "olddisplay"), n = r.style.display, e ? (o[a] || "none" !== n || (r.style.display = ""), "" === r.style.display && Pt(r) && (o[a] = pt._data(r, "olddisplay", N(r.nodeName)))) : (i = Pt(r), (n && "none" !== n || !i) && pt._data(r, "olddisplay", i ? n : pt.css(r, "display"))));
        for (a = 0; a < s; a++)
            r = t[a], r.style && (e && "none" !== r.style.display && "" !== r.style.display || (r.style.display = e ? o[a] || "" : "none"));
        return t
    }
    function I(t, e, n) {
        var r = _e.exec(e);
        return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : e
    }
    function L(t, e, n, r, i) {
        for (var o = n === (r ? "border" : "content") ? 4 : "width" === e ? 1 : 0, a = 0; o < 4; o += 2)
            "margin" === n && (a += pt.css(t, n + Ht[o], !0, i)), r ? ("content" === n && (a -= pt.css(t, "padding" + Ht[o], !0, i)), "margin" !== n && (a -= pt.css(t, "border" + Ht[o] + "Width", !0, i))) : (a += pt.css(t, "padding" + Ht[o], !0, i), "padding" !== n && (a += pt.css(t, "border" + Ht[o] + "Width", !0, i)));
        return a
    }
    function O(t, e, n) {
        var r = !0,
        i = "width" === e ? t.offsetWidth : t.offsetHeight,
        o = he(t),
        a = ft.boxSizing && "border-box" === pt.css(t, "boxSizing", !1, o);
        if (i <= 0 || null == i) {
            if (i = ve(t, e, o), (i < 0 || null == i) && (i = t.style[e]), fe.test(i))
                return i;
            r = a && (ft.boxSizingReliable() || i === t.style[e]),
            i = parseFloat(i) || 0
        }
        return i + L(t, e, n || (a ? "border" : "content"), r, o) + "px"
    }
    function H(t, e, n, r, i) {
        return new H.prototype.init(t, e, n, r, i)
    }
    function P() {
        return t.setTimeout(function () {
            $e = void 0
        }),
        $e = pt.now()
    }
    function F(t, e) {
        var n,
        r = {
            height: t
        },
        i = 0;
        for (e = e ? 1 : 0; i < 4; i += 2 - e)
            n = Ht[i], r["margin" + n] = r["padding" + n] = t;
        return e && (r.opacity = r.width = t),
        r
    }
    function W(t, e, n) {
        for (var r, i = (q.tweeners[e] || []).concat(q.tweeners["*"]), o = 0, a = i.length; o < a; o++)
            if (r = i[o].call(n, e, t))
                return r
    }
    function M(t, e, n) {
        var r,
        i,
        o,
        a,
        s,
        l,
        u,
        c,
        f = this,
        d = {},
        p = t.style,
        h = t.nodeType && Pt(t),
        v = pt._data(t, "fxshow");
        n.queue || (s = pt._queueHooks(t, "fx"), null == s.unqueued && (s.unqueued = 0, l = s.empty.fire, s.empty.fire = function () {
                s.unqueued || l()
            }), s.unqueued++, f.always(function () {
                f.always(function () {
                    s.unqueued--,
                    pt.queue(t, "fx").length || s.empty.fire()
                })
            })),
        1 === t.nodeType && ("height" in e || "width" in e) && (n.overflow = [p.overflow, p.overflowX, p.overflowY], u = pt.css(t, "display"), c = "none" === u ? pt._data(t, "olddisplay") || N(t.nodeName) : u, "inline" === c && "none" === pt.css(t, "float") && (ft.inlineBlockNeedsLayout && "inline" !== N(t.nodeName) ? p.zoom = 1 : p.display = "inline-block")),
        n.overflow && (p.overflow = "hidden", ft.shrinkWrapBlocks() || f.always(function () {
                p.overflow = n.overflow[0],
                p.overflowX = n.overflow[1],
                p.overflowY = n.overflow[2]
            }));
        for (r in e)
            if (i = e[r], Ee.exec(i)) {
                if (delete e[r], o = o || "toggle" === i, i === (h ? "hide" : "show")) {
                    if ("show" !== i || !v || void 0 === v[r])
                        continue;
                    h = !0
                }
                d[r] = v && v[r] || pt.style(t, r)
            } else
                u = void 0;
        if (pt.isEmptyObject(d))
            "inline" === ("none" === u ? N(t.nodeName) : u) && (p.display = u);
        else {
            v ? "hidden" in v && (h = v.hidden) : v = pt._data(t, "fxshow", {}),
            o && (v.hidden = !h),
            h ? pt(t).show() : f.done(function () {
                pt(t).hide()
            }),
            f.done(function () {
                var e;
                pt._removeData(t, "fxshow");
                for (e in d)
                    pt.style(t, e, d[e])
            });
            for (r in d)
                a = W(h ? v[r] : 0, r, f), r in v || (v[r] = a.start, h && (a.end = a.start, a.start = "width" === r || "height" === r ? 1 : 0))
        }
    }
    function z(t, e) {
        var n,
        r,
        i,
        o,
        a;
        for (n in t)
            if (r = pt.camelCase(n), i = e[r], o = t[n], pt.isArray(o) && (i = o[1], o = t[n] = o[0]), n !== r && (t[r] = o, delete t[n]), a = pt.cssHooks[r], a && "expand" in a) {
                o = a.expand(o),
                delete t[r];
                for (n in o)
                    n in t || (t[n] = o[n], e[n] = i)
            } else
                e[r] = i
    }
    function q(t, e, n) {
        var r,
        i,
        o = 0,
        a = q.prefilters.length,
        s = pt.Deferred().always(function () {
            delete l.elem
        }),
        l = function () {
            if (i)
                return !1;
            for (var e = $e || P(), n = Math.max(0, u.startTime + u.duration - e), r = n / u.duration || 0, o = 1 - r, a = 0, l = u.tweens.length; a < l; a++)
                u.tweens[a].run(o);
            return s.notifyWith(t, [u, o, n]),
            o < 1 && l ? n : (s.resolveWith(t, [u]), !1)
        },
        u = s.promise({
            elem: t,
            props: pt.extend({}, e),
            opts: pt.extend(!0, {
                specialEasing: {},
                easing: pt.easing._default
            }, n),
            originalProperties: e,
            originalOptions: n,
            startTime: $e || P(),
            duration: n.duration,
            tweens: [],
            createTween: function (e, n) {
                var r = pt.Tween(t, u.opts, e, n, u.opts.specialEasing[e] || u.opts.easing);
                return u.tweens.push(r),
                r
            },
            stop: function (e) {
                var n = 0,
                r = e ? u.tweens.length : 0;
                if (i)
                    return this;
                for (i = !0; n < r; n++)
                    u.tweens[n].run(1);
                return e ? (s.notifyWith(t, [u, 1, 0]), s.resolveWith(t, [u, e])) : s.rejectWith(t, [u, e]),
                this
            }
        }),
        c = u.props;
        for (z(c, u.opts.specialEasing); o < a; o++)
            if (r = q.prefilters[o].call(u, t, c, u.opts))
                return pt.isFunction(r.stop) && (pt._queueHooks(u.elem, u.opts.queue).stop = pt.proxy(r.stop, r)), r;
        return pt.map(c, W, u),
        pt.isFunction(u.opts.start) && u.opts.start.call(t, u),
        pt.fx.timer(pt.extend(l, {
                elem: t,
                anim: u,
                queue: u.opts.queue
            })),
        u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
    }
    function B(t) {
        return pt.attr(t, "class") || ""
    }
    function U(t) {
        return function (e, n) {
            "string" != typeof e && (n = e, e = "*");
            var r,
            i = 0,
            o = e.toLowerCase().match(At) || [];
            if (pt.isFunction(n))
                for (; r = o[i++]; )
                    "+" === r.charAt(0) ? (r = r.slice(1) || "*", (t[r] = t[r] || []).unshift(n)) : (t[r] = t[r] || []).push(n)
        }
    }
    function K(t, e, n, r) {
        function i(s) {
            var l;
            return o[s] = !0,
            pt.each(t[s] || [], function (t, s) {
                var u = s(e, n, r);
                return "string" != typeof u || a || o[u] ? a ? !(l = u) : void 0 : (e.dataTypes.unshift(u), i(u), !1)
            }),
            l
        }
        var o = {},
        a = t === Je;
        return i(e.dataTypes[0]) || !o["*"] && i("*")
    }
    function X(t, e) {
        var n,
        r,
        i = pt.ajaxSettings.flatOptions || {};
        for (r in e)
            void 0 !== e[r] && ((i[r] ? t : n || (n = {}))[r] = e[r]);
        return n && pt.extend(!0, t, n),
        t
    }
    function V(t, e, n) {
        for (var r, i, o, a, s = t.contents, l = t.dataTypes; "*" === l[0]; )
            l.shift(), void 0 === i && (i = t.mimeType || e.getResponseHeader("Content-Type"));
        if (i)
            for (a in s)
                if (s[a] && s[a].test(i)) {
                    l.unshift(a);
                    break
                }
        if (l[0]in n)
            o = l[0];
        else {
            for (a in n) {
                if (!l[0] || t.converters[a + " " + l[0]]) {
                    o = a;
                    break
                }
                r || (r = a)
            }
            o = o || r
        }
        if (o)
            return o !== l[0] && l.unshift(o), n[o]
    }
    function G(t, e, n, r) {
        var i,
        o,
        a,
        s,
        l,
        u = {},
        c = t.dataTypes.slice();
        if (c[1])
            for (a in t.converters)
                u[a.toLowerCase()] = t.converters[a];
        for (o = c.shift(); o; )
            if (t.responseFields[o] && (n[t.responseFields[o]] = e), !l && r && t.dataFilter && (e = t.dataFilter(e, t.dataType)), l = o, o = c.shift())
                if ("*" === o)
                    o = l;
                else if ("*" !== l && l !== o) {
                    if (a = u[l + " " + o] || u["* " + o], !a)
                        for (i in u)
                            if (s = i.split(" "), s[1] === o && (a = u[l + " " + s[0]] || u["* " + s[0]])) {
                                a === !0 ? a = u[i] : u[i] !== !0 && (o = s[0], c.unshift(s[1]));
                                break
                            }
                    if (a !== !0)
                        if (a && t["throws"])
                            e = a(e);
                        else
                            try {
                                e = a(e)
                            } catch (t) {
                                return {
                                    state: "parsererror",
                                    error: a ? t : "No conversion from " + l + " to " + o
                                }
                            }
                }
        return {
            state: "success",
            data: e
        }
    }
    function Q(t) {
        return t.style && t.style.display || pt.css(t, "display")
    }
    function Y(t) {
        if (!pt.contains(t.ownerDocument || rt, t))
            return !0;
        for (; t && 1 === t.nodeType; ) {
            if ("none" === Q(t) || "hidden" === t.type)
                return !0;
            t = t.parentNode
        }
        return !1
    }
    function J(t, e, n, r) {
        var i;
        if (pt.isArray(e))
            pt.each(e, function (e, i) {
                n || rn.test(t) ? r(t, i) : J(t + "[" + ("object" == typeof i && null != i ? e : "") + "]", i, n, r)
            });
        else if (n || "object" !== pt.type(e))
            r(t, e);
        else
            for (i in e)
                J(t + "[" + i + "]", e[i], n, r)
    }
    function Z() {
        try {
            return new t.XMLHttpRequest
        } catch (t) {}
    }
    function tt() {
        try {
            return new t.ActiveXObject("Microsoft.XMLHTTP")
        } catch (t) {}
    }
    function et(t) {
        return pt.isWindow(t) ? t : 9 === t.nodeType && (t.defaultView || t.parentWindow)
    }
    var nt = [],
    rt = t.document,
    it = nt.slice,
    ot = nt.concat,
    at = nt.push,
    st = nt.indexOf,
    lt = {},
    ut = lt.toString,
    ct = lt.hasOwnProperty,
    ft = {},
    dt = "1.12.4",
    pt = function (t, e) {
        return new pt.fn.init(t, e)
    },
    ht = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
    vt = /^-ms-/,
    mt = /-([\da-z])/gi,
    gt = function (t, e) {
        return e.toUpperCase()
    };
    pt.fn = pt.prototype = {
        jquery: dt,
        constructor: pt,
        selector: "",
        length: 0,
        toArray: function () {
            return it.call(this)
        },
        get: function (t) {
            return null != t ? t < 0 ? this[t + this.length] : this[t] : it.call(this)
        },
        pushStack: function (t) {
            var e = pt.merge(this.constructor(), t);
            return e.prevObject = this,
            e.context = this.context,
            e
        },
        each: function (t) {
            return pt.each(this, t)
        },
        map: function (t) {
            return this.pushStack(pt.map(this, function (e, n) {
                    return t.call(e, n, e)
                }))
        },
        slice: function () {
            return this.pushStack(it.apply(this, arguments))
        },
        first: function () {
            return this.eq(0)
        },
        last: function () {
            return this.eq(-1)
        },
        eq: function (t) {
            var e = this.length,
            n = +t + (t < 0 ? e : 0);
            return this.pushStack(n >= 0 && n < e ? [this[n]] : [])
        },
        end: function () {
            return this.prevObject || this.constructor()
        },
        push: at,
        sort: nt.sort,
        splice: nt.splice
    },
    pt.extend = pt.fn.extend = function () {
        var t,
        e,
        n,
        r,
        i,
        o,
        a = arguments[0] || {},
        s = 1,
        l = arguments.length,
        u = !1;
        for ("boolean" == typeof a && (u = a, a = arguments[s] || {}, s++), "object" == typeof a || pt.isFunction(a) || (a = {}), s === l && (a = this, s--); s < l; s++)
            if (null != (i = arguments[s]))
                for (r in i)
                    t = a[r], n = i[r], a !== n && (u && n && (pt.isPlainObject(n) || (e = pt.isArray(n))) ? (e ? (e = !1, o = t && pt.isArray(t) ? t : []) : o = t && pt.isPlainObject(t) ? t : {}, a[r] = pt.extend(u, o, n)) : void 0 !== n && (a[r] = n));
        return a
    },
    pt.extend({
        expando: "jQuery" + (dt + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function (t) {
            throw new Error(t)
        },
        noop: function () {},
        isFunction: function (t) {
            return "function" === pt.type(t)
        },
        isArray: Array.isArray || function (t) {
            return "array" === pt.type(t)
        },
        isWindow: function (t) {
            return null != t && t == t.window
        },
        isNumeric: function (t) {
            var e = t && t.toString();
            return !pt.isArray(t) && e - parseFloat(e) + 1 >= 0
        },
        isEmptyObject: function (t) {
            var e;
            for (e in t)
                return !1;
            return !0
        },
        isPlainObject: function (t) {
            var e;
            if (!t || "object" !== pt.type(t) || t.nodeType || pt.isWindow(t))
                return !1;
            try {
                if (t.constructor && !ct.call(t, "constructor") && !ct.call(t.constructor.prototype, "isPrototypeOf"))
                    return !1
            } catch (t) {
                return !1
            }
            if (!ft.ownFirst)
                for (e in t)
                    return ct.call(t, e);
            for (e in t);
            return void 0 === e || ct.call(t, e)
        },
        type: function (t) {
            return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? lt[ut.call(t)] || "object" : typeof t
        },
        globalEval: function (e) {
            e && pt.trim(e) && (t.execScript || function (e) {
                t.eval.call(t, e)
            })(e)
        },
        camelCase: function (t) {
            return t.replace(vt, "ms-").replace(mt, gt)
        },
        nodeName: function (t, e) {
            return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
        },
        each: function (t, e) {
            var r,
            i = 0;
            if (n(t))
                for (r = t.length; i < r && e.call(t[i], i, t[i]) !== !1; i++);
            else
                for (i in t)
                    if (e.call(t[i], i, t[i]) === !1)
                        break;
            return t
        },
        trim: function (t) {
            return null == t ? "" : (t + "").replace(ht, "")
        },
        makeArray: function (t, e) {
            var r = e || [];
            return null != t && (n(Object(t)) ? pt.merge(r, "string" == typeof t ? [t] : t) : at.call(r, t)),
            r
        },
        inArray: function (t, e, n) {
            var r;
            if (e) {
                if (st)
                    return st.call(e, t, n);
                for (r = e.length, n = n ? n < 0 ? Math.max(0, r + n) : n : 0; n < r; n++)
                    if (n in e && e[n] === t)
                        return n
            }
            return -1
        },
        merge: function (t, e) {
            for (var n = +e.length, r = 0, i = t.length; r < n; )
                t[i++] = e[r++];
            if (n !== n)
                for (; void 0 !== e[r]; )
                    t[i++] = e[r++];
            return t.length = i,
            t
        },
        grep: function (t, e, n) {
            for (var r, i = [], o = 0, a = t.length, s = !n; o < a; o++)
                r = !e(t[o], o), r !== s && i.push(t[o]);
            return i
        },
        map: function (t, e, r) {
            var i,
            o,
            a = 0,
            s = [];
            if (n(t))
                for (i = t.length; a < i; a++)
                    o = e(t[a], a, r), null != o && s.push(o);
            else
                for (a in t)
                    o = e(t[a], a, r), null != o && s.push(o);
            return ot.apply([], s)
        },
        guid: 1,
        proxy: function (t, e) {
            var n,
            r,
            i;
            if ("string" == typeof e && (i = t[e], e = t, t = i), pt.isFunction(t))
                return n = it.call(arguments, 2), r = function () {
                    return t.apply(e || this, n.concat(it.call(arguments)))
                },
            r.guid = t.guid = t.guid || pt.guid++,
            r
        },
        now: function () {
            return +new Date
        },
        support: ft
    }),
    "function" == typeof Symbol && (pt.fn[Symbol.iterator] = nt[Symbol.iterator]),
    pt.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (t, e) {
        lt["[object " + e + "]"] = e.toLowerCase()
    });
    var yt = function (t) {
        function e(t, e, n, r) {
            var i,
            o,
            a,
            s,
            l,
            u,
            f,
            p,
            h = e && e.ownerDocument,
            v = e ? e.nodeType : 9;
            if (n = n || [], "string" != typeof t || !t || 1 !== v && 9 !== v && 11 !== v)
                return n;
            if (!r && ((e ? e.ownerDocument || e : W) !== R && j(e), e = e || R, I)) {
                if (11 !== v && (u = gt.exec(t)))
                    if (i = u[1]) {
                        if (9 === v) {
                            if (!(a = e.getElementById(i)))
                                return n;
                            if (a.id === i)
                                return n.push(a), n
                        } else if (h && (a = h.getElementById(i)) && P(e, a) && a.id === i)
                            return n.push(a), n
                    } else {
                        if (u[2])
                            return J.apply(n, e.getElementsByTagName(t)), n;
                        if ((i = u[3]) && x.getElementsByClassName && e.getElementsByClassName)
                            return J.apply(n, e.getElementsByClassName(i)), n
                    }
                if (x.qsa && !U[t + " "] && (!L || !L.test(t))) {
                    if (1 !== v)
                        h = e, p = t;
                    else if ("object" !== e.nodeName.toLowerCase()) {
                        for ((s = e.getAttribute("id")) ? s = s.replace(bt, "\\$&") : e.setAttribute("id", s = F), f = $(t), o = f.length, l = dt.test(s) ? "#" + s : "[id='" + s + "']"; o--; )
                            f[o] = l + " " + d(f[o]);
                        p = f.join(","),
                        h = yt.test(t) && c(e.parentNode) || e
                    }
                    if (p)
                        try {
                            return J.apply(n, h.querySelectorAll(p)),
                            n
                        } catch (t) {}
                    finally {
                        s === F && e.removeAttribute("id")
                    }
                }
            }
            return E(t.replace(st, "$1"), e, n, r)
        }
        function n() {
            function t(n, r) {
                return e.push(n + " ") > w.cacheLength && delete t[e.shift()],
                t[n + " "] = r
            }
            var e = [];
            return t
        }
        function r(t) {
            return t[F] = !0,
            t
        }
        function i(t) {
            var e = R.createElement("div");
            try {
                return !!t(e)
            } catch (t) {
                return !1
            }
            finally {
                e.parentNode && e.parentNode.removeChild(e),
                e = null
            }
        }
        function o(t, e) {
            for (var n = t.split("|"), r = n.length; r--; )
                w.attrHandle[n[r]] = e
        }
        function a(t, e) {
            var n = e && t,
            r = n && 1 === t.nodeType && 1 === e.nodeType && (~e.sourceIndex || X) - (~t.sourceIndex || X);
            if (r)
                return r;
            if (n)
                for (; n = n.nextSibling; )
                    if (n === e)
                        return -1;
            return t ? 1 : -1
        }
        function s(t) {
            return function (e) {
                var n = e.nodeName.toLowerCase();
                return "input" === n && e.type === t
            }
        }
        function l(t) {
            return function (e) {
                var n = e.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && e.type === t
            }
        }
        function u(t) {
            return r(function (e) {
                return e = +e,
                r(function (n, r) {
                    for (var i, o = t([], n.length, e), a = o.length; a--; )
                        n[i = o[a]] && (n[i] = !(r[i] = n[i]))
                })
            })
        }
        function c(t) {
            return t && "undefined" != typeof t.getElementsByTagName && t
        }
        function f() {}
        function d(t) {
            for (var e = 0, n = t.length, r = ""; e < n; e++)
                r += t[e].value;
            return r
        }
        function p(t, e, n) {
            var r = e.dir,
            i = n && "parentNode" === r,
            o = z++;
            return e.first ? function (e, n, o) {
                for (; e = e[r]; )
                    if (1 === e.nodeType || i)
                        return t(e, n, o)
            }
             : function (e, n, a) {
                var s,
                l,
                u,
                c = [M, o];
                if (a) {
                    for (; e = e[r]; )
                        if ((1 === e.nodeType || i) && t(e, n, a))
                            return !0
                } else
                    for (; e = e[r]; )
                        if (1 === e.nodeType || i) {
                            if (u = e[F] || (e[F] = {}), l = u[e.uniqueID] || (u[e.uniqueID] = {}), (s = l[r]) && s[0] === M && s[1] === o)
                                return c[2] = s[2];
                            if (l[r] = c, c[2] = t(e, n, a))
                                return !0
                        }
            }
        }
        function h(t) {
            return t.length > 1 ? function (e, n, r) {
                for (var i = t.length; i--; )
                    if (!t[i](e, n, r))
                        return !1;
                return !0
            }
             : t[0]
        }
        function v(t, n, r) {
            for (var i = 0, o = n.length; i < o; i++)
                e(t, n[i], r);
            return r
        }
        function m(t, e, n, r, i) {
            for (var o, a = [], s = 0, l = t.length, u = null != e; s < l; s++)
                (o = t[s]) && (n && !n(o, r, i) || (a.push(o), u && e.push(s)));
            return a
        }
        function g(t, e, n, i, o, a) {
            return i && !i[F] && (i = g(i)),
            o && !o[F] && (o = g(o, a)),
            r(function (r, a, s, l) {
                var u,
                c,
                f,
                d = [],
                p = [],
                h = a.length,
                g = r || v(e || "*", s.nodeType ? [s] : s, []),
                y = !t || !r && e ? g : m(g, d, t, s, l),
                b = n ? o || (r ? t : h || i) ? [] : a : y;
                if (n && n(y, b, s, l), i)
                    for (u = m(b, p), i(u, [], s, l), c = u.length; c--; )
                        (f = u[c]) && (b[p[c]] = !(y[p[c]] = f));
                if (r) {
                    if (o || t) {
                        if (o) {
                            for (u = [], c = b.length; c--; )
                                (f = b[c]) && u.push(y[c] = f);
                            o(null, b = [], u, l)
                        }
                        for (c = b.length; c--; )
                            (f = b[c]) && (u = o ? tt(r, f) : d[c]) > -1 && (r[u] = !(a[u] = f))
                    }
                } else
                    b = m(b === a ? b.splice(h, b.length) : b), o ? o(null, a, b, l) : J.apply(a, b)
            })
        }
        function y(t) {
            for (var e, n, r, i = t.length, o = w.relative[t[0].type], a = o || w.relative[" "], s = o ? 1 : 0, l = p(function (t) {
                    return t === e
                }, a, !0), u = p(function (t) {
                    return tt(e, t) > -1
                }, a, !0), c = [function (t, n, r) {
                        var i = !o && (r || n !== S) || ((e = n).nodeType ? l(t, n, r) : u(t, n, r));
                        return e = null,
                        i
                    }
                ]; s < i; s++)
                if (n = w.relative[t[s].type])
                    c = [p(h(c), n)];
                else {
                    if (n = w.filter[t[s].type].apply(null, t[s].matches), n[F]) {
                        for (r = ++s; r < i && !w.relative[t[r].type]; r++);
                        return g(s > 1 && h(c), s > 1 && d(t.slice(0, s - 1).concat({
                                    value: " " === t[s - 2].type ? "*" : ""
                                })).replace(st, "$1"), n, s < r && y(t.slice(s, r)), r < i && y(t = t.slice(r)), r < i && d(t))
                    }
                    c.push(n)
                }
            return h(c)
        }
        function b(t, n) {
            var i = n.length > 0,
            o = t.length > 0,
            a = function (r, a, s, l, u) {
                var c,
                f,
                d,
                p = 0,
                h = "0",
                v = r && [],
                g = [],
                y = S,
                b = r || o && w.find.TAG("*", u),
                _ = M += null == y ? 1 : Math.random() || .1,
                x = b.length;
                for (u && (S = a === R || a || u); h !== x && null != (c = b[h]); h++) {
                    if (o && c) {
                        for (f = 0, a || c.ownerDocument === R || (j(c), s = !I); d = t[f++]; )
                            if (d(c, a || R, s)) {
                                l.push(c);
                                break
                            }
                        u && (M = _)
                    }
                    i && ((c = !d && c) && p--, r && v.push(c))
                }
                if (p += h, i && h !== p) {
                    for (f = 0; d = n[f++]; )
                        d(v, g, a, s);
                    if (r) {
                        if (p > 0)
                            for (; h--; )
                                v[h] || g[h] || (g[h] = Q.call(l));
                        g = m(g)
                    }
                    J.apply(l, g),
                    u && !r && g.length > 0 && p + n.length > 1 && e.uniqueSort(l)
                }
                return u && (M = _, S = y),
                v
            };
            return i ? r(a) : a
        }
        var _,
        x,
        w,
        C,
        T,
        $,
        k,
        E,
        S,
        A,
        N,
        j,
        R,
        D,
        I,
        L,
        O,
        H,
        P,
        F = "sizzle" + 1 * new Date,
        W = t.document,
        M = 0,
        z = 0,
        q = n(),
        B = n(),
        U = n(),
        K = function (t, e) {
            return t === e && (N = !0),
            0
        },
        X = 1 << 31,
        V = {}
        .hasOwnProperty,
        G = [],
        Q = G.pop,
        Y = G.push,
        J = G.push,
        Z = G.slice,
        tt = function (t, e) {
            for (var n = 0, r = t.length; n < r; n++)
                if (t[n] === e)
                    return n;
            return -1
        },
        et = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
        nt = "[\\x20\\t\\r\\n\\f]",
        rt = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
        it = "\\[" + nt + "*(" + rt + ")(?:" + nt + "*([*^$|!~]?=)" + nt + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + rt + "))|)" + nt + "*\\]",
        ot = ":(" + rt + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + it + ")*)|.*)\\)|)",
        at = new RegExp(nt + "+", "g"),
        st = new RegExp("^" + nt + "+|((?:^|[^\\\\])(?:\\\\.)*)" + nt + "+$", "g"),
        lt = new RegExp("^" + nt + "*," + nt + "*"),
        ut = new RegExp("^" + nt + "*([>+~]|" + nt + ")" + nt + "*"),
        ct = new RegExp("=" + nt + "*([^\\]'\"]*?)" + nt + "*\\]", "g"),
        ft = new RegExp(ot),
        dt = new RegExp("^" + rt + "$"),
        pt = {
            ID: new RegExp("^#(" + rt + ")"),
            CLASS: new RegExp("^\\.(" + rt + ")"),
            TAG: new RegExp("^(" + rt + "|[*])"),
            ATTR: new RegExp("^" + it),
            PSEUDO: new RegExp("^" + ot),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + nt + "*(even|odd|(([+-]|)(\\d*)n|)" + nt + "*(?:([+-]|)" + nt + "*(\\d+)|))" + nt + "*\\)|)", "i"),
            bool: new RegExp("^(?:" + et + ")$", "i"),
            needsContext: new RegExp("^" + nt + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + nt + "*((?:-\\d)?\\d*)" + nt + "*\\)|)(?=[^-]|$)", "i")
        },
        ht = /^(?:input|select|textarea|button)$/i,
        vt = /^h\d$/i,
        mt = /^[^{]+\{\s*\[native \w/,
        gt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        yt = /[+~]/,
        bt = /'|\\/g,
        _t = new RegExp("\\\\([\\da-f]{1,6}" + nt + "?|(" + nt + ")|.)", "ig"),
        xt = function (t, e, n) {
            var r = "0x" + e - 65536;
            return r !== r || n ? e : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
        },
        wt = function () {
            j()
        };
        try {
            J.apply(G = Z.call(W.childNodes), W.childNodes),
            G[W.childNodes.length].nodeType
        } catch (t) {
            J = {
                apply: G.length ? function (t, e) {
                    Y.apply(t, Z.call(e))
                }
                 : function (t, e) {
                    for (var n = t.length, r = 0; t[n++] = e[r++]; );
                    t.length = n - 1
                }
            }
        }
        x = e.support = {},
        T = e.isXML = function (t) {
            var e = t && (t.ownerDocument || t).documentElement;
            return !!e && "HTML" !== e.nodeName
        },
        j = e.setDocument = function (t) {
            var e,
            n,
            r = t ? t.ownerDocument || t : W;
            return r !== R && 9 === r.nodeType && r.documentElement ? (R = r, D = R.documentElement, I = !T(R), (n = R.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", wt, !1) : n.attachEvent && n.attachEvent("onunload", wt)), x.attributes = i(function (t) {
                    return t.className = "i",
                    !t.getAttribute("className")
                }), x.getElementsByTagName = i(function (t) {
                    return t.appendChild(R.createComment("")),
                    !t.getElementsByTagName("*").length
                }), x.getElementsByClassName = mt.test(R.getElementsByClassName), x.getById = i(function (t) {
                    return D.appendChild(t).id = F,
                    !R.getElementsByName || !R.getElementsByName(F).length
                }), x.getById ? (w.find.ID = function (t, e) {
                    if ("undefined" != typeof e.getElementById && I) {
                        var n = e.getElementById(t);
                        return n ? [n] : []
                    }
                }, w.filter.ID = function (t) {
                    var e = t.replace(_t, xt);
                    return function (t) {
                        return t.getAttribute("id") === e
                    }
                }) : (delete w.find.ID, w.filter.ID = function (t) {
                    var e = t.replace(_t, xt);
                    return function (t) {
                        var n = "undefined" != typeof t.getAttributeNode && t.getAttributeNode("id");
                        return n && n.value === e
                    }
                }), w.find.TAG = x.getElementsByTagName ? function (t, e) {
                return "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t) : x.qsa ? e.querySelectorAll(t) : void 0
            }
                 : function (t, e) {
                var n,
                r = [],
                i = 0,
                o = e.getElementsByTagName(t);
                if ("*" === t) {
                    for (; n = o[i++]; )
                        1 === n.nodeType && r.push(n);
                    return r
                }
                return o
            }, w.find.CLASS = x.getElementsByClassName && function (t, e) {
                if ("undefined" != typeof e.getElementsByClassName && I)
                    return e.getElementsByClassName(t)
            }, O = [], L = [], (x.qsa = mt.test(R.querySelectorAll)) && (i(function (t) {
                        D.appendChild(t).innerHTML = "<a id='" + F + "'></a><select id='" + F + "-\r\\' msallowcapture=''><option selected=''></option></select>",
                        t.querySelectorAll("[msallowcapture^='']").length && L.push("[*^$]=" + nt + "*(?:''|\"\")"),
                        t.querySelectorAll("[selected]").length || L.push("\\[" + nt + "*(?:value|" + et + ")"),
                        t.querySelectorAll("[id~=" + F + "-]").length || L.push("~="),
                        t.querySelectorAll(":checked").length || L.push(":checked"),
                        t.querySelectorAll("a#" + F + "+*").length || L.push(".#.+[+~]")
                    }), i(function (t) {
                        var e = R.createElement("input");
                        e.setAttribute("type", "hidden"),
                        t.appendChild(e).setAttribute("name", "D"),
                        t.querySelectorAll("[name=d]").length && L.push("name" + nt + "*[*^$|!~]?="),
                        t.querySelectorAll(":enabled").length || L.push(":enabled", ":disabled"),
                        t.querySelectorAll("*,:x"),
                        L.push(",.*:")
                    })), (x.matchesSelector = mt.test(H = D.matches || D.webkitMatchesSelector || D.mozMatchesSelector || D.oMatchesSelector || D.msMatchesSelector)) && i(function (t) {
                    x.disconnectedMatch = H.call(t, "div"),
                    H.call(t, "[s!='']:x"),
                    O.push("!=", ot)
                }), L = L.length && new RegExp(L.join("|")), O = O.length && new RegExp(O.join("|")), e = mt.test(D.compareDocumentPosition), P = e || mt.test(D.contains) ? function (t, e) {
                var n = 9 === t.nodeType ? t.documentElement : t,
                r = e && e.parentNode;
                return t === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(r)))
            }
                 : function (t, e) {
                if (e)
                    for (; e = e.parentNode; )
                        if (e === t)
                            return !0;
                return !1;
            }, K = e ? function (t, e) {
                if (t === e)
                    return N = !0, 0;
                var n = !t.compareDocumentPosition - !e.compareDocumentPosition;
                return n ? n : (n = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1, 1 & n || !x.sortDetached && e.compareDocumentPosition(t) === n ? t === R || t.ownerDocument === W && P(W, t) ? -1 : e === R || e.ownerDocument === W && P(W, e) ? 1 : A ? tt(A, t) - tt(A, e) : 0 : 4 & n ? -1 : 1)
            }
                 : function (t, e) {
                if (t === e)
                    return N = !0, 0;
                var n,
                r = 0,
                i = t.parentNode,
                o = e.parentNode,
                s = [t],
                l = [e];
                if (!i || !o)
                    return t === R ? -1 : e === R ? 1 : i ? -1 : o ? 1 : A ? tt(A, t) - tt(A, e) : 0;
                if (i === o)
                    return a(t, e);
                for (n = t; n = n.parentNode; )
                    s.unshift(n);
                for (n = e; n = n.parentNode; )
                    l.unshift(n);
                for (; s[r] === l[r]; )
                    r++;
                return r ? a(s[r], l[r]) : s[r] === W ? -1 : l[r] === W ? 1 : 0
            }, R) : R
        },
        e.matches = function (t, n) {
            return e(t, null, null, n)
        },
        e.matchesSelector = function (t, n) {
            if ((t.ownerDocument || t) !== R && j(t), n = n.replace(ct, "='$1']"), x.matchesSelector && I && !U[n + " "] && (!O || !O.test(n)) && (!L || !L.test(n)))
                try {
                    var r = H.call(t, n);
                    if (r || x.disconnectedMatch || t.document && 11 !== t.document.nodeType)
                        return r
                } catch (t) {}
            return e(n, R, null, [t]).length > 0
        },
        e.contains = function (t, e) {
            return (t.ownerDocument || t) !== R && j(t),
            P(t, e)
        },
        e.attr = function (t, e) {
            (t.ownerDocument || t) !== R && j(t);
            var n = w.attrHandle[e.toLowerCase()],
            r = n && V.call(w.attrHandle, e.toLowerCase()) ? n(t, e, !I) : void 0;
            return void 0 !== r ? r : x.attributes || !I ? t.getAttribute(e) : (r = t.getAttributeNode(e)) && r.specified ? r.value : null
        },
        e.error = function (t) {
            throw new Error("Syntax error, unrecognized expression: " + t)
        },
        e.uniqueSort = function (t) {
            var e,
            n = [],
            r = 0,
            i = 0;
            if (N = !x.detectDuplicates, A = !x.sortStable && t.slice(0), t.sort(K), N) {
                for (; e = t[i++]; )
                    e === t[i] && (r = n.push(i));
                for (; r--; )
                    t.splice(n[r], 1)
            }
            return A = null,
            t
        },
        C = e.getText = function (t) {
            var e,
            n = "",
            r = 0,
            i = t.nodeType;
            if (i) {
                if (1 === i || 9 === i || 11 === i) {
                    if ("string" == typeof t.textContent)
                        return t.textContent;
                    for (t = t.firstChild; t; t = t.nextSibling)
                        n += C(t)
                } else if (3 === i || 4 === i)
                    return t.nodeValue
            } else
                for (; e = t[r++]; )
                    n += C(e);
            return n
        },
        w = e.selectors = {
            cacheLength: 50,
            createPseudo: r,
            match: pt,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function (t) {
                    return t[1] = t[1].replace(_t, xt),
                    t[3] = (t[3] || t[4] || t[5] || "").replace(_t, xt),
                    "~=" === t[2] && (t[3] = " " + t[3] + " "),
                    t.slice(0, 4)
                },
                CHILD: function (t) {
                    return t[1] = t[1].toLowerCase(),
                    "nth" === t[1].slice(0, 3) ? (t[3] || e.error(t[0]), t[4] =  + (t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] =  + (t[7] + t[8] || "odd" === t[3])) : t[3] && e.error(t[0]),
                    t
                },
                PSEUDO: function (t) {
                    var e,
                    n = !t[6] && t[2];
                    return pt.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : n && ft.test(n) && (e = $(n, !0)) && (e = n.indexOf(")", n.length - e) - n.length) && (t[0] = t[0].slice(0, e), t[2] = n.slice(0, e)), t.slice(0, 3))
                }
            },
            filter: {
                TAG: function (t) {
                    var e = t.replace(_t, xt).toLowerCase();
                    return "*" === t ? function () {
                        return !0
                    }
                     : function (t) {
                        return t.nodeName && t.nodeName.toLowerCase() === e
                    }
                },
                CLASS: function (t) {
                    var e = q[t + " "];
                    return e || (e = new RegExp("(^|" + nt + ")" + t + "(" + nt + "|$)")) && q(t, function (t) {
                        return e.test("string" == typeof t.className && t.className || "undefined" != typeof t.getAttribute && t.getAttribute("class") || "")
                    })
                },
                ATTR: function (t, n, r) {
                    return function (i) {
                        var o = e.attr(i, t);
                        return null == o ? "!=" === n : !n || (o += "", "=" === n ? o === r : "!=" === n ? o !== r : "^=" === n ? r && 0 === o.indexOf(r) : "*=" === n ? r && o.indexOf(r) > -1 : "$=" === n ? r && o.slice(-r.length) === r : "~=" === n ? (" " + o.replace(at, " ") + " ").indexOf(r) > -1 : "|=" === n && (o === r || o.slice(0, r.length + 1) === r + "-"))
                    }
                },
                CHILD: function (t, e, n, r, i) {
                    var o = "nth" !== t.slice(0, 3),
                    a = "last" !== t.slice(-4),
                    s = "of-type" === e;
                    return 1 === r && 0 === i ? function (t) {
                        return !!t.parentNode
                    }
                     : function (e, n, l) {
                        var u,
                        c,
                        f,
                        d,
                        p,
                        h,
                        v = o !== a ? "nextSibling" : "previousSibling",
                        m = e.parentNode,
                        g = s && e.nodeName.toLowerCase(),
                        y = !l && !s,
                        b = !1;
                        if (m) {
                            if (o) {
                                for (; v; ) {
                                    for (d = e; d = d[v]; )
                                        if (s ? d.nodeName.toLowerCase() === g : 1 === d.nodeType)
                                            return !1;
                                    h = v = "only" === t && !h && "nextSibling"
                                }
                                return !0
                            }
                            if (h = [a ? m.firstChild : m.lastChild], a && y) {
                                for (d = m, f = d[F] || (d[F] = {}), c = f[d.uniqueID] || (f[d.uniqueID] = {}), u = c[t] || [], p = u[0] === M && u[1], b = p && u[2], d = p && m.childNodes[p]; d = ++p && d && d[v] || (b = p = 0) || h.pop(); )
                                    if (1 === d.nodeType && ++b && d === e) {
                                        c[t] = [M, p, b];
                                        break
                                    }
                            } else if (y && (d = e, f = d[F] || (d[F] = {}), c = f[d.uniqueID] || (f[d.uniqueID] = {}), u = c[t] || [], p = u[0] === M && u[1], b = p), b === !1)
                                for (; (d = ++p && d && d[v] || (b = p = 0) || h.pop()) && ((s ? d.nodeName.toLowerCase() !== g : 1 !== d.nodeType) || !++b || (y && (f = d[F] || (d[F] = {}), c = f[d.uniqueID] || (f[d.uniqueID] = {}), c[t] = [M, b]), d !== e)); );
                            return b -= i,
                            b === r || b % r === 0 && b / r >= 0
                        }
                    }
                },
                PSEUDO: function (t, n) {
                    var i,
                    o = w.pseudos[t] || w.setFilters[t.toLowerCase()] || e.error("unsupported pseudo: " + t);
                    return o[F] ? o(n) : o.length > 1 ? (i = [t, t, "", n], w.setFilters.hasOwnProperty(t.toLowerCase()) ? r(function (t, e) {
                            for (var r, i = o(t, n), a = i.length; a--; )
                                r = tt(t, i[a]), t[r] = !(e[r] = i[a])
                        }) : function (t) {
                        return o(t, 0, i)
                    }) : o
                }
            },
            pseudos: {
                not: r(function (t) {
                    var e = [],
                    n = [],
                    i = k(t.replace(st, "$1"));
                    return i[F] ? r(function (t, e, n, r) {
                        for (var o, a = i(t, null, r, []), s = t.length; s--; )
                            (o = a[s]) && (t[s] = !(e[s] = o))
                    }) : function (t, r, o) {
                        return e[0] = t,
                        i(e, null, o, n),
                        e[0] = null,
                        !n.pop()
                    }
                }),
                has: r(function (t) {
                    return function (n) {
                        return e(t, n).length > 0
                    }
                }),
                contains: r(function (t) {
                    return t = t.replace(_t, xt),
                    function (e) {
                        return (e.textContent || e.innerText || C(e)).indexOf(t) > -1
                    }
                }),
                lang: r(function (t) {
                    return dt.test(t || "") || e.error("unsupported lang: " + t),
                    t = t.replace(_t, xt).toLowerCase(),
                    function (e) {
                        var n;
                        do
                            if (n = I ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang"))
                                return n = n.toLowerCase(), n === t || 0 === n.indexOf(t + "-");
                        while ((e = e.parentNode) && 1 === e.nodeType);
                        return !1
                    }
                }),
                target: function (e) {
                    var n = t.location && t.location.hash;
                    return n && n.slice(1) === e.id
                },
                root: function (t) {
                    return t === D
                },
                focus: function (t) {
                    return t === R.activeElement && (!R.hasFocus || R.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
                },
                enabled: function (t) {
                    return t.disabled === !1
                },
                disabled: function (t) {
                    return t.disabled === !0
                },
                checked: function (t) {
                    var e = t.nodeName.toLowerCase();
                    return "input" === e && !!t.checked || "option" === e && !!t.selected
                },
                selected: function (t) {
                    return t.parentNode && t.parentNode.selectedIndex,
                    t.selected === !0
                },
                empty: function (t) {
                    for (t = t.firstChild; t; t = t.nextSibling)
                        if (t.nodeType < 6)
                            return !1;
                    return !0
                },
                parent: function (t) {
                    return !w.pseudos.empty(t)
                },
                header: function (t) {
                    return vt.test(t.nodeName)
                },
                input: function (t) {
                    return ht.test(t.nodeName)
                },
                button: function (t) {
                    var e = t.nodeName.toLowerCase();
                    return "input" === e && "button" === t.type || "button" === e
                },
                text: function (t) {
                    var e;
                    return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
                },
                first: u(function () {
                    return [0]
                }),
                last: u(function (t, e) {
                    return [e - 1]
                }),
                eq: u(function (t, e, n) {
                    return [n < 0 ? n + e : n]
                }),
                even: u(function (t, e) {
                    for (var n = 0; n < e; n += 2)
                        t.push(n);
                    return t
                }),
                odd: u(function (t, e) {
                    for (var n = 1; n < e; n += 2)
                        t.push(n);
                    return t
                }),
                lt: u(function (t, e, n) {
                    for (var r = n < 0 ? n + e : n; --r >= 0; )
                        t.push(r);
                    return t
                }),
                gt: u(function (t, e, n) {
                    for (var r = n < 0 ? n + e : n; ++r < e; )
                        t.push(r);
                    return t
                })
            }
        },
        w.pseudos.nth = w.pseudos.eq;
        for (_ in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        })
            w.pseudos[_] = s(_);
        for (_ in {
            submit: !0,
            reset: !0
        })
            w.pseudos[_] = l(_);
        return f.prototype = w.filters = w.pseudos,
        w.setFilters = new f,
        $ = e.tokenize = function (t, n) {
            var r,
            i,
            o,
            a,
            s,
            l,
            u,
            c = B[t + " "];
            if (c)
                return n ? 0 : c.slice(0);
            for (s = t, l = [], u = w.preFilter; s; ) {
                r && !(i = lt.exec(s)) || (i && (s = s.slice(i[0].length) || s), l.push(o = [])),
                r = !1,
                (i = ut.exec(s)) && (r = i.shift(), o.push({
                        value: r,
                        type: i[0].replace(st, " ")
                    }), s = s.slice(r.length));
                for (a in w.filter)
                    !(i = pt[a].exec(s)) || u[a] && !(i = u[a](i)) || (r = i.shift(), o.push({
                            value: r,
                            type: a,
                            matches: i
                        }), s = s.slice(r.length));
                if (!r)
                    break
            }
            return n ? s.length : s ? e.error(t) : B(t, l).slice(0)
        },
        k = e.compile = function (t, e) {
            var n,
            r = [],
            i = [],
            o = U[t + " "];
            if (!o) {
                for (e || (e = $(t)), n = e.length; n--; )
                    o = y(e[n]), o[F] ? r.push(o) : i.push(o);
                o = U(t, b(i, r)),
                o.selector = t
            }
            return o
        },
        E = e.select = function (t, e, n, r) {
            var i,
            o,
            a,
            s,
            l,
            u = "function" == typeof t && t,
            f = !r && $(t = u.selector || t);
            if (n = n || [], 1 === f.length) {
                if (o = f[0] = f[0].slice(0), o.length > 2 && "ID" === (a = o[0]).type && x.getById && 9 === e.nodeType && I && w.relative[o[1].type]) {
                    if (e = (w.find.ID(a.matches[0].replace(_t, xt), e) || [])[0], !e)
                        return n;
                    u && (e = e.parentNode),
                    t = t.slice(o.shift().value.length)
                }
                for (i = pt.needsContext.test(t) ? 0 : o.length; i-- && (a = o[i], !w.relative[s = a.type]); )
                    if ((l = w.find[s]) && (r = l(a.matches[0].replace(_t, xt), yt.test(o[0].type) && c(e.parentNode) || e))) {
                        if (o.splice(i, 1), t = r.length && d(o), !t)
                            return J.apply(n, r), n;
                        break
                    }
            }
            return (u || k(t, f))(r, e, !I, n, !e || yt.test(t) && c(e.parentNode) || e),
            n
        },
        x.sortStable = F.split("").sort(K).join("") === F,
        x.detectDuplicates = !!N,
        j(),
        x.sortDetached = i(function (t) {
            return 1 & t.compareDocumentPosition(R.createElement("div"))
        }),
        i(function (t) {
            return t.innerHTML = "<a href='#'></a>",
            "#" === t.firstChild.getAttribute("href")
        }) || o("type|href|height|width", function (t, e, n) {
            if (!n)
                return t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
        }),
        x.attributes && i(function (t) {
            return t.innerHTML = "<input/>",
            t.firstChild.setAttribute("value", ""),
            "" === t.firstChild.getAttribute("value")
        }) || o("value", function (t, e, n) {
            if (!n && "input" === t.nodeName.toLowerCase())
                return t.defaultValue
        }),
        i(function (t) {
            return null == t.getAttribute("disabled")
        }) || o(et, function (t, e, n) {
            var r;
            if (!n)
                return t[e] === !0 ? e.toLowerCase() : (r = t.getAttributeNode(e)) && r.specified ? r.value : null
        }),
        e
    }
    (t);
    pt.find = yt,
    pt.expr = yt.selectors,
    pt.expr[":"] = pt.expr.pseudos,
    pt.uniqueSort = pt.unique = yt.uniqueSort,
    pt.text = yt.getText,
    pt.isXMLDoc = yt.isXML,
    pt.contains = yt.contains;
    var bt = function (t, e, n) {
        for (var r = [], i = void 0 !== n; (t = t[e]) && 9 !== t.nodeType; )
            if (1 === t.nodeType) {
                if (i && pt(t).is(n))
                    break;
                r.push(t)
            }
        return r
    },
    _t = function (t, e) {
        for (var n = []; t; t = t.nextSibling)
            1 === t.nodeType && t !== e && n.push(t);
        return n
    },
    xt = pt.expr.match.needsContext,
    wt = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
    Ct = /^.[^:#\[\.,]*$/;
    pt.filter = function (t, e, n) {
        var r = e[0];
        return n && (t = ":not(" + t + ")"),
        1 === e.length && 1 === r.nodeType ? pt.find.matchesSelector(r, t) ? [r] : [] : pt.find.matches(t, pt.grep(e, function (t) {
                return 1 === t.nodeType
            }))
    },
    pt.fn.extend({
        find: function (t) {
            var e,
            n = [],
            r = this,
            i = r.length;
            if ("string" != typeof t)
                return this.pushStack(pt(t).filter(function () {
                        for (e = 0; e < i; e++)
                            if (pt.contains(r[e], this))
                                return !0
                    }));
            for (e = 0; e < i; e++)
                pt.find(t, r[e], n);
            return n = this.pushStack(i > 1 ? pt.unique(n) : n),
            n.selector = this.selector ? this.selector + " " + t : t,
            n
        },
        filter: function (t) {
            return this.pushStack(r(this, t || [], !1))
        },
        not: function (t) {
            return this.pushStack(r(this, t || [], !0))
        },
        is: function (t) {
            return !!r(this, "string" == typeof t && xt.test(t) ? pt(t) : t || [], !1).length
        }
    });
    var Tt,
    $t = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
    kt = pt.fn.init = function (t, e, n) {
        var r,
        i;
        if (!t)
            return this;
        if (n = n || Tt, "string" == typeof t) {
            if (r = "<" === t.charAt(0) && ">" === t.charAt(t.length - 1) && t.length >= 3 ? [null, t, null] : $t.exec(t), !r || !r[1] && e)
                return !e || e.jquery ? (e || n).find(t) : this.constructor(e).find(t);
            if (r[1]) {
                if (e = e instanceof pt ? e[0] : e, pt.merge(this, pt.parseHTML(r[1], e && e.nodeType ? e.ownerDocument || e : rt, !0)), wt.test(r[1]) && pt.isPlainObject(e))
                    for (r in e)
                        pt.isFunction(this[r]) ? this[r](e[r]) : this.attr(r, e[r]);
                return this
            }
            if (i = rt.getElementById(r[2]), i && i.parentNode) {
                if (i.id !== r[2])
                    return Tt.find(t);
                this.length = 1,
                this[0] = i
            }
            return this.context = rt,
            this.selector = t,
            this
        }
        return t.nodeType ? (this.context = this[0] = t, this.length = 1, this) : pt.isFunction(t) ? "undefined" != typeof n.ready ? n.ready(t) : t(pt) : (void 0 !== t.selector && (this.selector = t.selector, this.context = t.context), pt.makeArray(t, this))
    };
    kt.prototype = pt.fn,
    Tt = pt(rt);
    var Et = /^(?:parents|prev(?:Until|All))/,
    St = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    pt.fn.extend({
        has: function (t) {
            var e,
            n = pt(t, this),
            r = n.length;
            return this.filter(function () {
                for (e = 0; e < r; e++)
                    if (pt.contains(this, n[e]))
                        return !0
            })
        },
        closest: function (t, e) {
            for (var n, r = 0, i = this.length, o = [], a = xt.test(t) || "string" != typeof t ? pt(t, e || this.context) : 0; r < i; r++)
                for (n = this[r]; n && n !== e; n = n.parentNode)
                    if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && pt.find.matchesSelector(n, t))) {
                        o.push(n);
                        break
                    }
            return this.pushStack(o.length > 1 ? pt.uniqueSort(o) : o)
        },
        index: function (t) {
            return t ? "string" == typeof t ? pt.inArray(this[0], pt(t)) : pt.inArray(t.jquery ? t[0] : t, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function (t, e) {
            return this.pushStack(pt.uniqueSort(pt.merge(this.get(), pt(t, e))))
        },
        addBack: function (t) {
            return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
        }
    }),
    pt.each({
        parent: function (t) {
            var e = t.parentNode;
            return e && 11 !== e.nodeType ? e : null
        },
        parents: function (t) {
            return bt(t, "parentNode")
        },
        parentsUntil: function (t, e, n) {
            return bt(t, "parentNode", n)
        },
        next: function (t) {
            return i(t, "nextSibling")
        },
        prev: function (t) {
            return i(t, "previousSibling")
        },
        nextAll: function (t) {
            return bt(t, "nextSibling")
        },
        prevAll: function (t) {
            return bt(t, "previousSibling")
        },
        nextUntil: function (t, e, n) {
            return bt(t, "nextSibling", n)
        },
        prevUntil: function (t, e, n) {
            return bt(t, "previousSibling", n)
        },
        siblings: function (t) {
            return _t((t.parentNode || {}).firstChild, t)
        },
        children: function (t) {
            return _t(t.firstChild)
        },
        contents: function (t) {
            return pt.nodeName(t, "iframe") ? t.contentDocument || t.contentWindow.document : pt.merge([], t.childNodes)
        }
    }, function (t, e) {
        pt.fn[t] = function (n, r) {
            var i = pt.map(this, e, n);
            return "Until" !== t.slice(-5) && (r = n),
            r && "string" == typeof r && (i = pt.filter(r, i)),
            this.length > 1 && (St[t] || (i = pt.uniqueSort(i)), Et.test(t) && (i = i.reverse())),
            this.pushStack(i)
        }
    });
    var At = /\S+/g;
    pt.Callbacks = function (t) {
        t = "string" == typeof t ? o(t) : pt.extend({}, t);
        var e,
        n,
        r,
        i,
        a = [],
        s = [],
        l = -1,
        u = function () {
            for (i = t.once, r = e = !0; s.length; l = -1)
                for (n = s.shift(); ++l < a.length; )
                    a[l].apply(n[0], n[1]) === !1 && t.stopOnFalse && (l = a.length, n = !1);
            t.memory || (n = !1),
            e = !1,
            i && (a = n ? [] : "")
        },
        c = {
            add: function () {
                return a && (n && !e && (l = a.length - 1, s.push(n)), function e(n) {
                    pt.each(n, function (n, r) {
                        pt.isFunction(r) ? t.unique && c.has(r) || a.push(r) : r && r.length && "string" !== pt.type(r) && e(r)
                    })
                }
                    (arguments), n && !e && u()),
                this
            },
            remove: function () {
                return pt.each(arguments, function (t, e) {
                    for (var n; (n = pt.inArray(e, a, n)) > -1; )
                        a.splice(n, 1), n <= l && l--
                }),
                this
            },
            has: function (t) {
                return t ? pt.inArray(t, a) > -1 : a.length > 0
            },
            empty: function () {
                return a && (a = []),
                this
            },
            disable: function () {
                return i = s = [],
                a = n = "",
                this
            },
            disabled: function () {
                return !a
            },
            lock: function () {
                return i = !0,
                n || c.disable(),
                this
            },
            locked: function () {
                return !!i
            },
            fireWith: function (t, n) {
                return i || (n = n || [], n = [t, n.slice ? n.slice() : n], s.push(n), e || u()),
                this
            },
            fire: function () {
                return c.fireWith(this, arguments),
                this
            },
            fired: function () {
                return !!r
            }
        };
        return c
    },
    pt.extend({
        Deferred: function (t) {
            var e = [["resolve", "done", pt.Callbacks("once memory"), "resolved"], ["reject", "fail", pt.Callbacks("once memory"), "rejected"], ["notify", "progress", pt.Callbacks("memory")]],
            n = "pending",
            r = {
                state: function () {
                    return n
                },
                always: function () {
                    return i.done(arguments).fail(arguments),
                    this
                },
                then: function () {
                    var t = arguments;
                    return pt.Deferred(function (n) {
                        pt.each(e, function (e, o) {
                            var a = pt.isFunction(t[e]) && t[e];
                            i[o[1]](function () {
                                var t = a && a.apply(this, arguments);
                                t && pt.isFunction(t.promise) ? t.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[o[0] + "With"](this === r ? n.promise() : this, a ? [t] : arguments)
                            })
                        }),
                        t = null
                    }).promise()
                },
                promise: function (t) {
                    return null != t ? pt.extend(t, r) : r
                }
            },
            i = {};
            return r.pipe = r.then,
            pt.each(e, function (t, o) {
                var a = o[2],
                s = o[3];
                r[o[1]] = a.add,
                s && a.add(function () {
                    n = s
                }, e[1 ^ t][2].disable, e[2][2].lock),
                i[o[0]] = function () {
                    return i[o[0] + "With"](this === i ? r : this, arguments),
                    this
                },
                i[o[0] + "With"] = a.fireWith
            }),
            r.promise(i),
            t && t.call(i, i),
            i
        },
        when: function (t) {
            var e,
            n,
            r,
            i = 0,
            o = it.call(arguments),
            a = o.length,
            s = 1 !== a || t && pt.isFunction(t.promise) ? a : 0,
            l = 1 === s ? t : pt.Deferred(),
            u = function (t, n, r) {
                return function (i) {
                    n[t] = this,
                    r[t] = arguments.length > 1 ? it.call(arguments) : i,
                    r === e ? l.notifyWith(n, r) : --s || l.resolveWith(n, r)
                }
            };
            if (a > 1)
                for (e = new Array(a), n = new Array(a), r = new Array(a); i < a; i++)
                    o[i] && pt.isFunction(o[i].promise) ? o[i].promise().progress(u(i, n, e)).done(u(i, r, o)).fail(l.reject) : --s;
            return s || l.resolveWith(r, o),
            l.promise()
        }
    });
    var Nt;
    pt.fn.ready = function (t) {
        return pt.ready.promise().done(t),
        this
    },
    pt.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function (t) {
            t ? pt.readyWait++ : pt.ready(!0)
        },
        ready: function (t) {
            (t === !0 ? --pt.readyWait : pt.isReady) || (pt.isReady = !0, t !== !0 && --pt.readyWait > 0 || (Nt.resolveWith(rt, [pt]), pt.fn.triggerHandler && (pt(rt).triggerHandler("ready"), pt(rt).off("ready"))))
        }
    }),
    pt.ready.promise = function (e) {
        if (!Nt)
            if (Nt = pt.Deferred(), "complete" === rt.readyState || "loading" !== rt.readyState && !rt.documentElement.doScroll)
                t.setTimeout(pt.ready);
            else if (rt.addEventListener)
                rt.addEventListener("DOMContentLoaded", s), t.addEventListener("load", s);
            else {
                rt.attachEvent("onreadystatechange", s),
                t.attachEvent("onload", s);
                var n = !1;
                try {
                    n = null == t.frameElement && rt.documentElement
                } catch (t) {}
                n && n.doScroll && !function e() {
                    if (!pt.isReady) {
                        try {
                            n.doScroll("left")
                        } catch (n) {
                            return t.setTimeout(e, 50)
                        }
                        a(),
                        pt.ready()
                    }
                }
                ()
            }
        return Nt.promise(e)
    },
    pt.ready.promise();
    var jt;
    for (jt in pt(ft))
        break;
    ft.ownFirst = "0" === jt,
    ft.inlineBlockNeedsLayout = !1,
    pt(function () {
        var t,
        e,
        n,
        r;
        n = rt.getElementsByTagName("body")[0],
        n && n.style && (e = rt.createElement("div"), r = rt.createElement("div"), r.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(r).appendChild(e), "undefined" != typeof e.style.zoom && (e.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", ft.inlineBlockNeedsLayout = t = 3 === e.offsetWidth, t && (n.style.zoom = 1)), n.removeChild(r))
    }),
    function () {
        var t = rt.createElement("div");
        ft.deleteExpando = !0;
        try {
            delete t.test
        } catch (t) {
            ft.deleteExpando = !1
        }
        t = null
    }
    ();
    var Rt = function (t) {
        var e = pt.noData[(t.nodeName + " ").toLowerCase()],
        n = +t.nodeType || 1;
        return (1 === n || 9 === n) && (!e || e !== !0 && t.getAttribute("classid") === e)
    },
    Dt = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    It = /([A-Z])/g;
    pt.extend({
        cache: {},
        noData: {
            "applet ": !0,
            "embed ": !0,
            "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
        },
        hasData: function (t) {
            return t = t.nodeType ? pt.cache[t[pt.expando]] : t[pt.expando],
            !!t && !u(t)
        },
        data: function (t, e, n) {
            return c(t, e, n)
        },
        removeData: function (t, e) {
            return f(t, e)
        },
        _data: function (t, e, n) {
            return c(t, e, n, !0)
        },
        _removeData: function (t, e) {
            return f(t, e, !0)
        }
    }),
    pt.fn.extend({
        data: function (t, e) {
            var n,
            r,
            i,
            o = this[0],
            a = o && o.attributes;
            if (void 0 === t) {
                if (this.length && (i = pt.data(o), 1 === o.nodeType && !pt._data(o, "parsedAttrs"))) {
                    for (n = a.length; n--; )
                        a[n] && (r = a[n].name, 0 === r.indexOf("data-") && (r = pt.camelCase(r.slice(5)), l(o, r, i[r])));
                    pt._data(o, "parsedAttrs", !0)
                }
                return i
            }
            return "object" == typeof t ? this.each(function () {
                pt.data(this, t)
            }) : arguments.length > 1 ? this.each(function () {
                pt.data(this, t, e)
            }) : o ? l(o, t, pt.data(o, t)) : void 0
        },
        removeData: function (t) {
            return this.each(function () {
                pt.removeData(this, t)
            })
        }
    }),
    pt.extend({
        queue: function (t, e, n) {
            var r;
            if (t)
                return e = (e || "fx") + "queue", r = pt._data(t, e), n && (!r || pt.isArray(n) ? r = pt._data(t, e, pt.makeArray(n)) : r.push(n)), r || []
        },
        dequeue: function (t, e) {
            e = e || "fx";
            var n = pt.queue(t, e),
            r = n.length,
            i = n.shift(),
            o = pt._queueHooks(t, e),
            a = function () {
                pt.dequeue(t, e)
            };
            "inprogress" === i && (i = n.shift(), r--),
            i && ("fx" === e && n.unshift("inprogress"), delete o.stop, i.call(t, a, o)),
            !r && o && o.empty.fire()
        },
        _queueHooks: function (t, e) {
            var n = e + "queueHooks";
            return pt._data(t, n) || pt._data(t, n, {
                empty: pt.Callbacks("once memory").add(function () {
                    pt._removeData(t, e + "queue"),
                    pt._removeData(t, n)
                })
            })
        }
    }),
    pt.fn.extend({
        queue: function (t, e) {
            var n = 2;
            return "string" != typeof t && (e = t, t = "fx", n--),
            arguments.length < n ? pt.queue(this[0], t) : void 0 === e ? this : this.each(function () {
                var n = pt.queue(this, t, e);
                pt._queueHooks(this, t),
                "fx" === t && "inprogress" !== n[0] && pt.dequeue(this, t)
            })
        },
        dequeue: function (t) {
            return this.each(function () {
                pt.dequeue(this, t)
            })
        },
        clearQueue: function (t) {
            return this.queue(t || "fx", [])
        },
        promise: function (t, e) {
            var n,
            r = 1,
            i = pt.Deferred(),
            o = this,
            a = this.length,
            s = function () {
                --r || i.resolveWith(o, [o])
            };
            for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; a--; )
                n = pt._data(o[a], t + "queueHooks"), n && n.empty && (r++, n.empty.add(s));
            return s(),
            i.promise(e)
        }
    }),
    function () {
        var t;
        ft.shrinkWrapBlocks = function () {
            if (null != t)
                return t;
            t = !1;
            var e,
            n,
            r;
            return n = rt.getElementsByTagName("body")[0],
            n && n.style ? (e = rt.createElement("div"), r = rt.createElement("div"), r.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(r).appendChild(e), "undefined" != typeof e.style.zoom && (e.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", e.appendChild(rt.createElement("div")).style.width = "5px", t = 3 !== e.offsetWidth), n.removeChild(r), t) : void 0
        }
    }
    ();
    var Lt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    Ot = new RegExp("^(?:([+-])=|)(" + Lt + ")([a-z%]*)$", "i"),
    Ht = ["Top", "Right", "Bottom", "Left"],
    Pt = function (t, e) {
        return t = e || t,
        "none" === pt.css(t, "display") || !pt.contains(t.ownerDocument, t)
    },
    Ft = function (t, e, n, r, i, o, a) {
        var s = 0,
        l = t.length,
        u = null == n;
        if ("object" === pt.type(n)) {
            i = !0;
            for (s in n)
                Ft(t, e, s, n[s], !0, o, a)
        } else if (void 0 !== r && (i = !0, pt.isFunction(r) || (a = !0), u && (a ? (e.call(t, r), e = null) : (u = e, e = function (t, e, n) {
                        return u.call(pt(t), n)
                    })), e))
            for (; s < l; s++)
                e(t[s], n, a ? r : r.call(t[s], s, e(t[s], n)));
        return i ? t : u ? e.call(t) : l ? e(t[0], n) : o
    },
    Wt = /^(?:checkbox|radio)$/i,
    Mt = /<([\w:-]+)/,
    zt = /^$|\/(?:java|ecma)script/i,
    qt = /^\s+/,
    Bt = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";
    !function () {
        var t = rt.createElement("div"),
        e = rt.createDocumentFragment(),
        n = rt.createElement("input");
        t.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",
        ft.leadingWhitespace = 3 === t.firstChild.nodeType,
        ft.tbody = !t.getElementsByTagName("tbody").length,
        ft.htmlSerialize = !!t.getElementsByTagName("link").length,
        ft.html5Clone = "<:nav></:nav>" !== rt.createElement("nav").cloneNode(!0).outerHTML,
        n.type = "checkbox",
        n.checked = !0,
        e.appendChild(n),
        ft.appendChecked = n.checked,
        t.innerHTML = "<textarea>x</textarea>",
        ft.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue,
        e.appendChild(t),
        n = rt.createElement("input"),
        n.setAttribute("type", "radio"),
        n.setAttribute("checked", "checked"),
        n.setAttribute("name", "t"),
        t.appendChild(n),
        ft.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked,
        ft.noCloneEvent = !!t.addEventListener,
        t[pt.expando] = 1,
        ft.attributes = !t.getAttribute(pt.expando)
    }
    ();
    var Ut = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        legend: [1, "<fieldset>", "</fieldset>"],
        area: [1, "<map>", "</map>"],
        param: [1, "<object>", "</object>"],
        thead: [1, "<table>", "</table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: ft.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
    };
    Ut.optgroup = Ut.option,
    Ut.tbody = Ut.tfoot = Ut.colgroup = Ut.caption = Ut.thead,
    Ut.th = Ut.td;
    var Kt = /<|&#?\w+;/,
    Xt = /<tbody/i;
    !function () {
        var e,
        n,
        r = rt.createElement("div");
        for (e in {
            submit: !0,
            change: !0,
            focusin: !0
        })
            n = "on" + e, (ft[e] = n in t) || (r.setAttribute(n, "t"), ft[e] = r.attributes[n].expando === !1);
        r = null
    }
    ();
    var Vt = /^(?:input|select|textarea)$/i,
    Gt = /^key/,
    Qt = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
    Yt = /^(?:focusinfocus|focusoutblur)$/,
    Jt = /^([^.]*)(?:\.(.+)|)/;
    pt.event = {
        global: {},
        add: function (t, e, n, r, i) {
            var o,
            a,
            s,
            l,
            u,
            c,
            f,
            d,
            p,
            h,
            v,
            m = pt._data(t);
            if (m) {
                for (n.handler && (l = n, n = l.handler, i = l.selector), n.guid || (n.guid = pt.guid++), (a = m.events) || (a = m.events = {}), (c = m.handle) || (c = m.handle = function (t) {
                        return "undefined" == typeof pt || t && pt.event.triggered === t.type ? void 0 : pt.event.dispatch.apply(c.elem, arguments)
                    }, c.elem = t), e = (e || "").match(At) || [""], s = e.length; s--; )
                    o = Jt.exec(e[s]) || [], p = v = o[1], h = (o[2] || "").split(".").sort(), p && (u = pt.event.special[p] || {}, p = (i ? u.delegateType : u.bindType) || p, u = pt.event.special[p] || {}, f = pt.extend({
                            type: p,
                            origType: v,
                            data: r,
                            handler: n,
                            guid: n.guid,
                            selector: i,
                            needsContext: i && pt.expr.match.needsContext.test(i),
                            namespace: h.join(".")
                        }, l), (d = a[p]) || (d = a[p] = [], d.delegateCount = 0, u.setup && u.setup.call(t, r, h, c) !== !1 || (t.addEventListener ? t.addEventListener(p, c, !1) : t.attachEvent && t.attachEvent("on" + p, c))), u.add && (u.add.call(t, f), f.handler.guid || (f.handler.guid = n.guid)), i ? d.splice(d.delegateCount++, 0, f) : d.push(f), pt.event.global[p] = !0);
                t = null
            }
        },
        remove: function (t, e, n, r, i) {
            var o,
            a,
            s,
            l,
            u,
            c,
            f,
            d,
            p,
            h,
            v,
            m = pt.hasData(t) && pt._data(t);
            if (m && (c = m.events)) {
                for (e = (e || "").match(At) || [""], u = e.length; u--; )
                    if (s = Jt.exec(e[u]) || [], p = v = s[1], h = (s[2] || "").split(".").sort(), p) {
                        for (f = pt.event.special[p] || {}, p = (r ? f.delegateType : f.bindType) || p, d = c[p] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = o = d.length; o--; )
                            a = d[o], !i && v !== a.origType || n && n.guid !== a.guid || s && !s.test(a.namespace) || r && r !== a.selector && ("**" !== r || !a.selector) || (d.splice(o, 1), a.selector && d.delegateCount--, f.remove && f.remove.call(t, a));
                        l && !d.length && (f.teardown && f.teardown.call(t, h, m.handle) !== !1 || pt.removeEvent(t, p, m.handle), delete c[p])
                    } else
                        for (p in c)
                            pt.event.remove(t, p + e[u], n, r, !0);
                pt.isEmptyObject(c) && (delete m.handle, pt._removeData(t, "events"))
            }
        },
        trigger: function (e, n, r, i) {
            var o,
            a,
            s,
            l,
            u,
            c,
            f,
            d = [r || rt],
            p = ct.call(e, "type") ? e.type : e,
            h = ct.call(e, "namespace") ? e.namespace.split(".") : [];
            if (s = c = r = r || rt, 3 !== r.nodeType && 8 !== r.nodeType && !Yt.test(p + pt.event.triggered) && (p.indexOf(".") > -1 && (h = p.split("."), p = h.shift(), h.sort()), a = p.indexOf(":") < 0 && "on" + p, e = e[pt.expando] ? e : new pt.Event(p, "object" == typeof e && e), e.isTrigger = i ? 2 : 3, e.namespace = h.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = r), n = null == n ? [e] : pt.makeArray(n, [e]), u = pt.event.special[p] || {}, i || !u.trigger || u.trigger.apply(r, n) !== !1)) {
                if (!i && !u.noBubble && !pt.isWindow(r)) {
                    for (l = u.delegateType || p, Yt.test(l + p) || (s = s.parentNode); s; s = s.parentNode)
                        d.push(s), c = s;
                    c === (r.ownerDocument || rt) && d.push(c.defaultView || c.parentWindow || t)
                }
                for (f = 0; (s = d[f++]) && !e.isPropagationStopped(); )
                    e.type = f > 1 ? l : u.bindType || p, o = (pt._data(s, "events") || {})[e.type] && pt._data(s, "handle"), o && o.apply(s, n), o = a && s[a], o && o.apply && Rt(s) && (e.result = o.apply(s, n), e.result === !1 && e.preventDefault());
                if (e.type = p, !i && !e.isDefaultPrevented() && (!u._default || u._default.apply(d.pop(), n) === !1) && Rt(r) && a && r[p] && !pt.isWindow(r)) {
                    c = r[a],
                    c && (r[a] = null),
                    pt.event.triggered = p;
                    try {
                        r[p]()
                    } catch (t) {}
                    pt.event.triggered = void 0,
                    c && (r[a] = c)
                }
                return e.result
            }
        },
        dispatch: function (t) {
            t = pt.event.fix(t);
            var e,
            n,
            r,
            i,
            o,
            a = [],
            s = it.call(arguments),
            l = (pt._data(this, "events") || {})[t.type] || [],
            u = pt.event.special[t.type] || {};
            if (s[0] = t, t.delegateTarget = this, !u.preDispatch || u.preDispatch.call(this, t) !== !1) {
                for (a = pt.event.handlers.call(this, t, l), e = 0; (i = a[e++]) && !t.isPropagationStopped(); )
                    for (t.currentTarget = i.elem, n = 0; (o = i.handlers[n++]) && !t.isImmediatePropagationStopped(); )
                        t.rnamespace && !t.rnamespace.test(o.namespace) || (t.handleObj = o, t.data = o.data, r = ((pt.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, s), void 0 !== r && (t.result = r) === !1 && (t.preventDefault(), t.stopPropagation()));
                return u.postDispatch && u.postDispatch.call(this, t),
                t.result
            }
        },
        handlers: function (t, e) {
            var n,
            r,
            i,
            o,
            a = [],
            s = e.delegateCount,
            l = t.target;
            if (s && l.nodeType && ("click" !== t.type || isNaN(t.button) || t.button < 1))
                for (; l != this; l = l.parentNode || this)
                    if (1 === l.nodeType && (l.disabled !== !0 || "click" !== t.type)) {
                        for (r = [], n = 0; n < s; n++)
                            o = e[n], i = o.selector + " ", void 0 === r[i] && (r[i] = o.needsContext ? pt(i, this).index(l) > -1 : pt.find(i, this, null, [l]).length), r[i] && r.push(o);
                        r.length && a.push({
                            elem: l,
                            handlers: r
                        })
                    }
            return s < e.length && a.push({
                elem: this,
                handlers: e.slice(s)
            }),
            a
        },
        fix: function (t) {
            if (t[pt.expando])
                return t;
            var e,
            n,
            r,
            i = t.type,
            o = t,
            a = this.fixHooks[i];
            for (a || (this.fixHooks[i] = a = Qt.test(i) ? this.mouseHooks : Gt.test(i) ? this.keyHooks : {}), r = a.props ? this.props.concat(a.props) : this.props, t = new pt.Event(o), e = r.length; e--; )
                n = r[e], t[n] = o[n];
            return t.target || (t.target = o.srcElement || rt),
            3 === t.target.nodeType && (t.target = t.target.parentNode),
            t.metaKey = !!t.metaKey,
            a.filter ? a.filter(t, o) : t
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function (t, e) {
                return null == t.which && (t.which = null != e.charCode ? e.charCode : e.keyCode),
                t
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function (t, e) {
                var n,
                r,
                i,
                o = e.button,
                a = e.fromElement;
                return null == t.pageX && null != e.clientX && (r = t.target.ownerDocument || rt, i = r.documentElement, n = r.body, t.pageX = e.clientX + (i && i.scrollLeft || n && n.scrollLeft || 0) - (i && i.clientLeft || n && n.clientLeft || 0), t.pageY = e.clientY + (i && i.scrollTop || n && n.scrollTop || 0) - (i && i.clientTop || n && n.clientTop || 0)),
                !t.relatedTarget && a && (t.relatedTarget = a === t.target ? e.toElement : a),
                t.which || void 0 === o || (t.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0),
                t
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function () {
                    if (this !== _() && this.focus)
                        try {
                            return this.focus(),
                            !1
                        } catch (t) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function () {
                    if (this === _() && this.blur)
                        return this.blur(), !1
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function () {
                    if (pt.nodeName(this, "input") && "checkbox" === this.type && this.click)
                        return this.click(), !1
                },
                _default: function (t) {
                    return pt.nodeName(t.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function (t) {
                    void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
                }
            }
        },
        simulate: function (t, e, n) {
            var r = pt.extend(new pt.Event, n, {
                type: t,
                isSimulated: !0
            });
            pt.event.trigger(r, null, e),
            r.isDefaultPrevented() && n.preventDefault()
        }
    },
    pt.removeEvent = rt.removeEventListener ? function (t, e, n) {
        t.removeEventListener && t.removeEventListener(e, n)
    }
     : function (t, e, n) {
        var r = "on" + e;
        t.detachEvent && ("undefined" == typeof t[r] && (t[r] = null), t.detachEvent(r, n))
    },
    pt.Event = function (t, e) {
        return this instanceof pt.Event ? (t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && t.returnValue === !1 ? y : b) : this.type = t, e && pt.extend(this, e), this.timeStamp = t && t.timeStamp || pt.now(), void(this[pt.expando] = !0)) : new pt.Event(t, e)
    },
    pt.Event.prototype = {
        constructor: pt.Event,
        isDefaultPrevented: b,
        isPropagationStopped: b,
        isImmediatePropagationStopped: b,
        preventDefault: function () {
            var t = this.originalEvent;
            this.isDefaultPrevented = y,
            t && (t.preventDefault ? t.preventDefault() : t.returnValue = !1)
        },
        stopPropagation: function () {
            var t = this.originalEvent;
            this.isPropagationStopped = y,
            t && !this.isSimulated && (t.stopPropagation && t.stopPropagation(), t.cancelBubble = !0)
        },
        stopImmediatePropagation: function () {
            var t = this.originalEvent;
            this.isImmediatePropagationStopped = y,
            t && t.stopImmediatePropagation && t.stopImmediatePropagation(),
            this.stopPropagation()
        }
    },
    pt.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function (t, e) {
        pt.event.special[t] = {
            delegateType: e,
            bindType: e,
            handle: function (t) {
                var n,
                r = this,
                i = t.relatedTarget,
                o = t.handleObj;
                return i && (i === r || pt.contains(r, i)) || (t.type = o.origType, n = o.handler.apply(this, arguments), t.type = e),
                n
            }
        }
    }),
    ft.submit || (pt.event.special.submit = {
            setup: function () {
                return !pt.nodeName(this, "form") && void pt.event.add(this, "click._submit keypress._submit", function (t) {
                    var e = t.target,
                    n = pt.nodeName(e, "input") || pt.nodeName(e, "button") ? pt.prop(e, "form") : void 0;
                    n && !pt._data(n, "submit") && (pt.event.add(n, "submit._submit", function (t) {
                            t._submitBubble = !0
                        }), pt._data(n, "submit", !0))
                })
            },
            postDispatch: function (t) {
                t._submitBubble && (delete t._submitBubble, this.parentNode && !t.isTrigger && pt.event.simulate("submit", this.parentNode, t))
            },
            teardown: function () {
                return !pt.nodeName(this, "form") && void pt.event.remove(this, "._submit")
            }
        }),
    ft.change || (pt.event.special.change = {
            setup: function () {
                return Vt.test(this.nodeName) ? ("checkbox" !== this.type && "radio" !== this.type || (pt.event.add(this, "propertychange._change", function (t) {
                            "checked" === t.originalEvent.propertyName && (this._justChanged = !0)
                        }), pt.event.add(this, "click._change", function (t) {
                            this._justChanged && !t.isTrigger && (this._justChanged = !1),
                            pt.event.simulate("change", this, t)
                        })), !1) : void pt.event.add(this, "beforeactivate._change", function (t) {
                    var e = t.target;
                    Vt.test(e.nodeName) && !pt._data(e, "change") && (pt.event.add(e, "change._change", function (t) {
                            !this.parentNode || t.isSimulated || t.isTrigger || pt.event.simulate("change", this.parentNode, t)
                        }), pt._data(e, "change", !0))
                })
            },
            handle: function (t) {
                var e = t.target;
                if (this !== e || t.isSimulated || t.isTrigger || "radio" !== e.type && "checkbox" !== e.type)
                    return t.handleObj.handler.apply(this, arguments)
            },
            teardown: function () {
                return pt.event.remove(this, "._change"),
                !Vt.test(this.nodeName)
            }
        }),
    ft.focusin || pt.each({
        focus: "focusin",
        blur: "focusout"
    }, function (t, e) {
        var n = function (t) {
            pt.event.simulate(e, t.target, pt.event.fix(t))
        };
        pt.event.special[e] = {
            setup: function () {
                var r = this.ownerDocument || this,
                i = pt._data(r, e);
                i || r.addEventListener(t, n, !0),
                pt._data(r, e, (i || 0) + 1)
            },
            teardown: function () {
                var r = this.ownerDocument || this,
                i = pt._data(r, e) - 1;
                i ? pt._data(r, e, i) : (r.removeEventListener(t, n, !0), pt._removeData(r, e))
            }
        }
    }),
    pt.fn.extend({
        on: function (t, e, n, r) {
            return x(this, t, e, n, r)
        },
        one: function (t, e, n, r) {
            return x(this, t, e, n, r, 1)
        },
        off: function (t, e, n) {
            var r,
            i;
            if (t && t.preventDefault && t.handleObj)
                return r = t.handleObj, pt(t.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
            if ("object" == typeof t) {
                for (i in t)
                    this.off(i, e, t[i]);
                return this
            }
            return e !== !1 && "function" != typeof e || (n = e, e = void 0),
            n === !1 && (n = b),
            this.each(function () {
                pt.event.remove(this, t, n, e)
            })
        },
        trigger: function (t, e) {
            return this.each(function () {
                pt.event.trigger(t, e, this)
            })
        },
        triggerHandler: function (t, e) {
            var n = this[0];
            if (n)
                return pt.event.trigger(t, e, n, !0)
        }
    });
    var Zt = / jQuery\d+="(?:null|\d+)"/g,
    te = new RegExp("<(?:" + Bt + ")[\\s/>]", "i"),
    ee = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
    ne = /<script|<style|<link/i,
    re = /checked\s*(?:[^=]|=\s*.checked.)/i,
    ie = /^true\/(.*)/,
    oe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
    ae = p(rt),
    se = ae.appendChild(rt.createElement("div"));
    pt.extend({
        htmlPrefilter: function (t) {
            return t.replace(ee, "<$1></$2>")
        },
        clone: function (t, e, n) {
            var r,
            i,
            o,
            a,
            s,
            l = pt.contains(t.ownerDocument, t);
            if (ft.html5Clone || pt.isXMLDoc(t) || !te.test("<" + t.nodeName + ">") ? o = t.cloneNode(!0) : (se.innerHTML = t.outerHTML, se.removeChild(o = se.firstChild)), !(ft.noCloneEvent && ft.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || pt.isXMLDoc(t)))
                for (r = h(o), s = h(t), a = 0; null != (i = s[a]); ++a)
                    r[a] && k(i, r[a]);
            if (e)
                if (n)
                    for (s = s || h(t), r = r || h(o), a = 0; null != (i = s[a]); a++)
                        $(i, r[a]);
                else
                    $(t, o);
            return r = h(o, "script"),
            r.length > 0 && v(r, !l && h(t, "script")),
            r = s = i = null,
            o
        },
        cleanData: function (t, e) {
            for (var n, r, i, o, a = 0, s = pt.expando, l = pt.cache, u = ft.attributes, c = pt.event.special; null != (n = t[a]); a++)
                if ((e || Rt(n)) && (i = n[s], o = i && l[i])) {
                    if (o.events)
                        for (r in o.events)
                            c[r] ? pt.event.remove(n, r) : pt.removeEvent(n, r, o.handle);
                    l[i] && (delete l[i], u || "undefined" == typeof n.removeAttribute ? n[s] = void 0 : n.removeAttribute(s), nt.push(i))
                }
        }
    }),
    pt.fn.extend({
        domManip: E,
        detach: function (t) {
            return S(this, t, !0)
        },
        remove: function (t) {
            return S(this, t)
        },
        text: function (t) {
            return Ft(this, function (t) {
                return void 0 === t ? pt.text(this) : this.empty().append((this[0] && this[0].ownerDocument || rt).createTextNode(t))
            }, null, t, arguments.length)
        },
        append: function () {
            return E(this, arguments, function (t) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var e = w(this, t);
                    e.appendChild(t)
                }
            })
        },
        prepend: function () {
            return E(this, arguments, function (t) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var e = w(this, t);
                    e.insertBefore(t, e.firstChild)
                }
            })
        },
        before: function () {
            return E(this, arguments, function (t) {
                this.parentNode && this.parentNode.insertBefore(t, this)
            })
        },
        after: function () {
            return E(this, arguments, function (t) {
                this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
            })
        },
        empty: function () {
            for (var t, e = 0; null != (t = this[e]); e++) {
                for (1 === t.nodeType && pt.cleanData(h(t, !1)); t.firstChild; )
                    t.removeChild(t.firstChild);
                t.options && pt.nodeName(t, "select") && (t.options.length = 0)
            }
            return this
        },
        clone: function (t, e) {
            return t = null != t && t,
            e = null == e ? t : e,
            this.map(function () {
                return pt.clone(this, t, e)
            })
        },
        html: function (t) {
            return Ft(this, function (t) {
                var e = this[0] || {},
                n = 0,
                r = this.length;
                if (void 0 === t)
                    return 1 === e.nodeType ? e.innerHTML.replace(Zt, "") : void 0;
                if ("string" == typeof t && !ne.test(t) && (ft.htmlSerialize || !te.test(t)) && (ft.leadingWhitespace || !qt.test(t)) && !Ut[(Mt.exec(t) || ["", ""])[1].toLowerCase()]) {
                    t = pt.htmlPrefilter(t);
                    try {
                        for (; n < r; n++)
                            e = this[n] || {},
                        1 === e.nodeType && (pt.cleanData(h(e, !1)), e.innerHTML = t);
                        e = 0
                    } catch (t) {}
                }
                e && this.empty().append(t)
            }, null, t, arguments.length)
        },
        replaceWith: function () {
            var t = [];
            return E(this, arguments, function (e) {
                var n = this.parentNode;
                pt.inArray(this, t) < 0 && (pt.cleanData(h(this)), n && n.replaceChild(e, this))
            }, t)
        }
    }),
    pt.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (t, e) {
        pt.fn[t] = function (t) {
            for (var n, r = 0, i = [], o = pt(t), a = o.length - 1; r <= a; r++)
                n = r === a ? this : this.clone(!0), pt(o[r])[e](n), at.apply(i, n.get());
            return this.pushStack(i)
        }
    });
    var le,
    ue = {
        HTML: "block",
        BODY: "block"
    },
    ce = /^margin/,
    fe = new RegExp("^(" + Lt + ")(?!px)[a-z%]+$", "i"),
    de = function (t, e, n, r) {
        var i,
        o,
        a = {};
        for (o in e)
            a[o] = t.style[o], t.style[o] = e[o];
        i = n.apply(t, r || []);
        for (o in e)
            t.style[o] = a[o];
        return i
    },
    pe = rt.documentElement;
    !function () {
        function e() {
            var e,
            c,
            f = rt.documentElement;
            f.appendChild(l),
            u.style.cssText = "-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",
            n = i = s = !1,
            r = a = !0,
            t.getComputedStyle && (c = t.getComputedStyle(u), n = "1%" !== (c || {}).top, s = "2px" === (c || {}).marginLeft, i = "4px" === (c || {
                    width: "4px"
                }).width, u.style.marginRight = "50%", r = "4px" === (c || {
                    marginRight: "4px"
                }).marginRight, e = u.appendChild(rt.createElement("div")), e.style.cssText = u.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", e.style.marginRight = e.style.width = "0", u.style.width = "1px", a = !parseFloat((t.getComputedStyle(e) || {}).marginRight), u.removeChild(e)),
            u.style.display = "none",
            o = 0 === u.getClientRects().length,
            o && (u.style.display = "", u.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", u.childNodes[0].style.borderCollapse = "separate", e = u.getElementsByTagName("td"), e[0].style.cssText = "margin:0;border:0;padding:0;display:none", o = 0 === e[0].offsetHeight, o && (e[0].style.display = "", e[1].style.display = "none", o = 0 === e[0].offsetHeight)),
            f.removeChild(l)
        }
        var n,
        r,
        i,
        o,
        a,
        s,
        l = rt.createElement("div"),
        u = rt.createElement("div");
        u.style && (u.style.cssText = "float:left;opacity:.5", ft.opacity = "0.5" === u.style.opacity, ft.cssFloat = !!u.style.cssFloat, u.style.backgroundClip = "content-box", u.cloneNode(!0).style.backgroundClip = "", ft.clearCloneStyle = "content-box" === u.style.backgroundClip, l = rt.createElement("div"), l.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", u.innerHTML = "", l.appendChild(u), ft.boxSizing = "" === u.style.boxSizing || "" === u.style.MozBoxSizing || "" === u.style.WebkitBoxSizing, pt.extend(ft, {
                reliableHiddenOffsets: function () {
                    return null == n && e(),
                    o
                },
                boxSizingReliable: function () {
                    return null == n && e(),
                    i
                },
                pixelMarginRight: function () {
                    return null == n && e(),
                    r
                },
                pixelPosition: function () {
                    return null == n && e(),
                    n
                },
                reliableMarginRight: function () {
                    return null == n && e(),
                    a
                },
                reliableMarginLeft: function () {
                    return null == n && e(),
                    s
                }
            }))
    }
    ();
    var he,
    ve,
    me = /^(top|right|bottom|left)$/;
    t.getComputedStyle ? (he = function (e) {
        var n = e.ownerDocument.defaultView;
        return n && n.opener || (n = t),
        n.getComputedStyle(e)
    }, ve = function (t, e, n) {
        var r,
        i,
        o,
        a,
        s = t.style;
        return n = n || he(t),
        a = n ? n.getPropertyValue(e) || n[e] : void 0,
        "" !== a && void 0 !== a || pt.contains(t.ownerDocument, t) || (a = pt.style(t, e)),
        n && !ft.pixelMarginRight() && fe.test(a) && ce.test(e) && (r = s.width, i = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = i, s.maxWidth = o),
        void 0 === a ? a : a + ""
    }) : pe.currentStyle && (he = function (t) {
        return t.currentStyle
    }, ve = function (t, e, n) {
        var r,
        i,
        o,
        a,
        s = t.style;
        return n = n || he(t),
        a = n ? n[e] : void 0,
        null == a && s && s[e] && (a = s[e]),
        fe.test(a) && !me.test(e) && (r = s.left, i = t.runtimeStyle, o = i && i.left, o && (i.left = t.currentStyle.left), s.left = "fontSize" === e ? "1em" : a, a = s.pixelLeft + "px", s.left = r, o && (i.left = o)),
        void 0 === a ? a : a + "" || "auto"
    });
    var ge = /alpha\([^)]*\)/i,
    ye = /opacity\s*=\s*([^)]*)/i,
    be = /^(none|table(?!-c[ea]).+)/,
    _e = new RegExp("^(" + Lt + ")(.*)$", "i"),
    xe = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    },
    we = {
        letterSpacing: "0",
        fontWeight: "400"
    },
    Ce = ["Webkit", "O", "Moz", "ms"],
    Te = rt.createElement("div").style;
    pt.extend({
        cssHooks: {
            opacity: {
                get: function (t, e) {
                    if (e) {
                        var n = ve(t, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": ft.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function (t, e, n, r) {
            if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                var i,
                o,
                a,
                s = pt.camelCase(e),
                l = t.style;
                if (e = pt.cssProps[s] || (pt.cssProps[s] = R(s) || s), a = pt.cssHooks[e] || pt.cssHooks[s], void 0 === n)
                    return a && "get" in a && void 0 !== (i = a.get(t, !1, r)) ? i : l[e];
                if (o = typeof n, "string" === o && (i = Ot.exec(n)) && i[1] && (n = d(t, e, i), o = "number"), null != n && n === n && ("number" === o && (n += i && i[3] || (pt.cssNumber[s] ? "" : "px")), ft.clearCloneStyle || "" !== n || 0 !== e.indexOf("background") || (l[e] = "inherit"), !(a && "set" in a && void 0 === (n = a.set(t, n, r)))))
                    try {
                        l[e] = n
                    } catch (t) {}
            }
        },
        css: function (t, e, n, r) {
            var i,
            o,
            a,
            s = pt.camelCase(e);
            return e = pt.cssProps[s] || (pt.cssProps[s] = R(s) || s),
            a = pt.cssHooks[e] || pt.cssHooks[s],
            a && "get" in a && (o = a.get(t, !0, n)),
            void 0 === o && (o = ve(t, e, r)),
            "normal" === o && e in we && (o = we[e]),
            "" === n || n ? (i = parseFloat(o), n === !0 || isFinite(i) ? i || 0 : o) : o
        }
    }),
    pt.each(["height", "width"], function (t, e) {
        pt.cssHooks[e] = {
            get: function (t, n, r) {
                if (n)
                    return be.test(pt.css(t, "display")) && 0 === t.offsetWidth ? de(t, xe, function () {
                        return O(t, e, r)
                    }) : O(t, e, r)
            },
            set: function (t, n, r) {
                var i = r && he(t);
                return I(t, n, r ? L(t, e, r, ft.boxSizing && "border-box" === pt.css(t, "boxSizing", !1, i), i) : 0)
            }
        }
    }),
    ft.opacity || (pt.cssHooks.opacity = {
            get: function (t, e) {
                return ye.test((e && t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : e ? "1" : ""
            },
            set: function (t, e) {
                var n = t.style,
                r = t.currentStyle,
                i = pt.isNumeric(e) ? "alpha(opacity=" + 100 * e + ")" : "",
                o = r && r.filter || n.filter || "";
                n.zoom = 1,
                (e >= 1 || "" === e) && "" === pt.trim(o.replace(ge, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === e || r && !r.filter) || (n.filter = ge.test(o) ? o.replace(ge, i) : o + " " + i)
            }
        }),
    pt.cssHooks.marginRight = j(ft.reliableMarginRight, function (t, e) {
        if (e)
            return de(t, {
                display: "inline-block"
            }, ve, [t, "marginRight"])
    }),
    pt.cssHooks.marginLeft = j(ft.reliableMarginLeft, function (t, e) {
        if (e)
            return (parseFloat(ve(t, "marginLeft")) || (pt.contains(t.ownerDocument, t) ? t.getBoundingClientRect().left - de(t, {
                        marginLeft: 0
                    }, function () {
                        return t.getBoundingClientRect().left
                    }) : 0)) + "px"
    }),
    pt.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function (t, e) {
        pt.cssHooks[t + e] = {
            expand: function (n) {
                for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; r < 4; r++)
                    i[t + Ht[r] + e] = o[r] || o[r - 2] || o[0];
                return i
            }
        },
        ce.test(t) || (pt.cssHooks[t + e].set = I)
    }),
    pt.fn.extend({
        css: function (t, e) {
            return Ft(this, function (t, e, n) {
                var r,
                i,
                o = {},
                a = 0;
                if (pt.isArray(e)) {
                    for (r = he(t), i = e.length; a < i; a++)
                        o[e[a]] = pt.css(t, e[a], !1, r);
                    return o
                }
                return void 0 !== n ? pt.style(t, e, n) : pt.css(t, e)
            }, t, e, arguments.length > 1)
        },
        show: function () {
            return D(this, !0)
        },
        hide: function () {
            return D(this)
        },
        toggle: function (t) {
            return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function () {
                Pt(this) ? pt(this).show() : pt(this).hide()
            })
        }
    }),
    pt.Tween = H,
    H.prototype = {
        constructor: H,
        init: function (t, e, n, r, i, o) {
            this.elem = t,
            this.prop = n,
            this.easing = i || pt.easing._default,
            this.options = e,
            this.start = this.now = this.cur(),
            this.end = r,
            this.unit = o || (pt.cssNumber[n] ? "" : "px")
        },
        cur: function () {
            var t = H.propHooks[this.prop];
            return t && t.get ? t.get(this) : H.propHooks._default.get(this)
        },
        run: function (t) {
            var e,
            n = H.propHooks[this.prop];
            return this.options.duration ? this.pos = e = pt.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : this.pos = e = t,
            this.now = (this.end - this.start) * e + this.start,
            this.options.step && this.options.step.call(this.elem, this.now, this),
            n && n.set ? n.set(this) : H.propHooks._default.set(this),
            this
        }
    },
    H.prototype.init.prototype = H.prototype,
    H.propHooks = {
        _default: {
            get: function (t) {
                var e;
                return 1 !== t.elem.nodeType || null != t.elem[t.prop] && null == t.elem.style[t.prop] ? t.elem[t.prop] : (e = pt.css(t.elem, t.prop, ""), e && "auto" !== e ? e : 0)
            },
            set: function (t) {
                pt.fx.step[t.prop] ? pt.fx.step[t.prop](t) : 1 !== t.elem.nodeType || null == t.elem.style[pt.cssProps[t.prop]] && !pt.cssHooks[t.prop] ? t.elem[t.prop] = t.now : pt.style(t.elem, t.prop, t.now + t.unit)
            }
        }
    },
    H.propHooks.scrollTop = H.propHooks.scrollLeft = {
        set: function (t) {
            t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
        }
    },
    pt.easing = {
        linear: function (t) {
            return t
        },
        swing: function (t) {
            return .5 - Math.cos(t * Math.PI) / 2
        },
        _default: "swing"
    },
    pt.fx = H.prototype.init,
    pt.fx.step = {};
    var $e,
    ke,
    Ee = /^(?:toggle|show|hide)$/,
    Se = /queueHooks$/;
    pt.Animation = pt.extend(q, {
        tweeners: {
            "*": [function (t, e) {
                    var n = this.createTween(t, e);
                    return d(n.elem, t, Ot.exec(e), n),
                    n
                }
            ]
        },
        tweener: function (t, e) {
            pt.isFunction(t) ? (e = t, t = ["*"]) : t = t.match(At);
            for (var n, r = 0, i = t.length; r < i; r++)
                n = t[r], q.tweeners[n] = q.tweeners[n] || [], q.tweeners[n].unshift(e)
        },
        prefilters: [M],
        prefilter: function (t, e) {
            e ? q.prefilters.unshift(t) : q.prefilters.push(t)
        }
    }),
    pt.speed = function (t, e, n) {
        var r = t && "object" == typeof t ? pt.extend({}, t) : {
            complete: n || !n && e || pt.isFunction(t) && t,
            duration: t,
            easing: n && e || e && !pt.isFunction(e) && e
        };
        return r.duration = pt.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in pt.fx.speeds ? pt.fx.speeds[r.duration] : pt.fx.speeds._default,
        null != r.queue && r.queue !== !0 || (r.queue = "fx"),
        r.old = r.complete,
        r.complete = function () {
            pt.isFunction(r.old) && r.old.call(this),
            r.queue && pt.dequeue(this, r.queue)
        },
        r
    },
    pt.fn.extend({
        fadeTo: function (t, e, n, r) {
            return this.filter(Pt).css("opacity", 0).show().end().animate({
                opacity: e
            }, t, n, r)
        },
        animate: function (t, e, n, r) {
            var i = pt.isEmptyObject(t),
            o = pt.speed(e, n, r),
            a = function () {
                var e = q(this, pt.extend({}, t), o);
                (i || pt._data(this, "finish")) && e.stop(!0)
            };
            return a.finish = a,
            i || o.queue === !1 ? this.each(a) : this.queue(o.queue, a)
        },
        stop: function (t, e, n) {
            var r = function (t) {
                var e = t.stop;
                delete t.stop,
                e(n)
            };
            return "string" != typeof t && (n = e, e = t, t = void 0),
            e && t !== !1 && this.queue(t || "fx", []),
            this.each(function () {
                var e = !0,
                i = null != t && t + "queueHooks",
                o = pt.timers,
                a = pt._data(this);
                if (i)
                    a[i] && a[i].stop && r(a[i]);
                else
                    for (i in a)
                        a[i] && a[i].stop && Se.test(i) && r(a[i]);
                for (i = o.length; i--; )
                    o[i].elem !== this || null != t && o[i].queue !== t || (o[i].anim.stop(n), e = !1, o.splice(i, 1));
                !e && n || pt.dequeue(this, t)
            })
        },
        finish: function (t) {
            return t !== !1 && (t = t || "fx"),
            this.each(function () {
                var e,
                n = pt._data(this),
                r = n[t + "queue"],
                i = n[t + "queueHooks"],
                o = pt.timers,
                a = r ? r.length : 0;
                for (n.finish = !0, pt.queue(this, t, []), i && i.stop && i.stop.call(this, !0), e = o.length; e--; )
                    o[e].elem === this && o[e].queue === t && (o[e].anim.stop(!0), o.splice(e, 1));
                for (e = 0; e < a; e++)
                    r[e] && r[e].finish && r[e].finish.call(this);
                delete n.finish
            })
        }
    }),
    pt.each(["toggle", "show", "hide"], function (t, e) {
        var n = pt.fn[e];
        pt.fn[e] = function (t, r, i) {
            return null == t || "boolean" == typeof t ? n.apply(this, arguments) : this.animate(F(e, !0), t, r, i)
        }
    }),
    pt.each({
        slideDown: F("show"),
        slideUp: F("hide"),
        slideToggle: F("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function (t, e) {
        pt.fn[t] = function (t, n, r) {
            return this.animate(e, t, n, r)
        }
    }),
    pt.timers = [],
    pt.fx.tick = function () {
        var t,
        e = pt.timers,
        n = 0;
        for ($e = pt.now(); n < e.length; n++)
            t = e[n], t() || e[n] !== t || e.splice(n--, 1);
        e.length || pt.fx.stop(),
        $e = void 0
    },
    pt.fx.timer = function (t) {
        pt.timers.push(t),
        t() ? pt.fx.start() : pt.timers.pop()
    },
    pt.fx.interval = 13,
    pt.fx.start = function () {
        ke || (ke = t.setInterval(pt.fx.tick, pt.fx.interval))
    },
    pt.fx.stop = function () {
        t.clearInterval(ke),
        ke = null
    },
    pt.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    },
    pt.fn.delay = function (e, n) {
        return e = pt.fx ? pt.fx.speeds[e] || e : e,
        n = n || "fx",
        this.queue(n, function (n, r) {
            var i = t.setTimeout(n, e);
            r.stop = function () {
                t.clearTimeout(i)
            }
        })
    },
    function () {
        var t,
        e = rt.createElement("input"),
        n = rt.createElement("div"),
        r = rt.createElement("select"),
        i = r.appendChild(rt.createElement("option"));
        n = rt.createElement("div"),
        n.setAttribute("className", "t"),
        n.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",
        t = n.getElementsByTagName("a")[0],
        e.setAttribute("type", "checkbox"),
        n.appendChild(e),
        t = n.getElementsByTagName("a")[0],
        t.style.cssText = "top:1px",
        ft.getSetAttribute = "t" !== n.className,
        ft.style = /top/.test(t.getAttribute("style")),
        ft.hrefNormalized = "/a" === t.getAttribute("href"),
        ft.checkOn = !!e.value,
        ft.optSelected = i.selected,
        ft.enctype = !!rt.createElement("form").enctype,
        r.disabled = !0,
        ft.optDisabled = !i.disabled,
        e = rt.createElement("input"),
        e.setAttribute("value", ""),
        ft.input = "" === e.getAttribute("value"),
        e.value = "t",
        e.setAttribute("type", "radio"),
        ft.radioValue = "t" === e.value
    }
    ();
    var Ae = /\r/g,
    Ne = /[\x20\t\r\n\f]+/g;
    pt.fn.extend({
        val: function (t) {
            var e,
            n,
            r,
            i = this[0]; {
                if (arguments.length)
                    return r = pt.isFunction(t), this.each(function (n) {
                        var i;
                        1 === this.nodeType && (i = r ? t.call(this, n, pt(this).val()) : t, null == i ? i = "" : "number" == typeof i ? i += "" : pt.isArray(i) && (i = pt.map(i, function (t) {
                                        return null == t ? "" : t + ""
                                    })), e = pt.valHooks[this.type] || pt.valHooks[this.nodeName.toLowerCase()], e && "set" in e && void 0 !== e.set(this, i, "value") || (this.value = i))
                    });
                if (i)
                    return e = pt.valHooks[i.type] || pt.valHooks[i.nodeName.toLowerCase()], e && "get" in e && void 0 !== (n = e.get(i, "value")) ? n : (n = i.value, "string" == typeof n ? n.replace(Ae, "") : null == n ? "" : n)
            }
        }
    }),
    pt.extend({
        valHooks: {
            option: {
                get: function (t) {
                    var e = pt.find.attr(t, "value");
                    return null != e ? e : pt.trim(pt.text(t)).replace(Ne, " ")
                }
            },
            select: {
                get: function (t) {
                    for (var e, n, r = t.options, i = t.selectedIndex, o = "select-one" === t.type || i < 0, a = o ? null : [], s = o ? i + 1 : r.length, l = i < 0 ? s : o ? i : 0; l < s; l++)
                        if (n = r[l], (n.selected || l === i) && (ft.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !pt.nodeName(n.parentNode, "optgroup"))) {
                            if (e = pt(n).val(), o)
                                return e;
                            a.push(e)
                        }
                    return a
                },
                set: function (t, e) {
                    for (var n, r, i = t.options, o = pt.makeArray(e), a = i.length; a--; )
                        if (r = i[a], pt.inArray(pt.valHooks.option.get(r), o) > -1)
                            try {
                                r.selected = n = !0
                            } catch (t) {
                                r.scrollHeight
                            }
                        else
                            r.selected = !1;
                    return n || (t.selectedIndex = -1),
                    i
                }
            }
        }
    }),
    pt.each(["radio", "checkbox"], function () {
        pt.valHooks[this] = {
            set: function (t, e) {
                if (pt.isArray(e))
                    return t.checked = pt.inArray(pt(t).val(), e) > -1
            }
        },
        ft.checkOn || (pt.valHooks[this].get = function (t) {
            return null === t.getAttribute("value") ? "on" : t.value
        })
    });
    var je,
    Re,
    De = pt.expr.attrHandle,
    Ie = /^(?:checked|selected)$/i,
    Le = ft.getSetAttribute,
    Oe = ft.input;
    pt.fn.extend({
        attr: function (t, e) {
            return Ft(this, pt.attr, t, e, arguments.length > 1)
        },
        removeAttr: function (t) {
            return this.each(function () {
                pt.removeAttr(this, t)
            })
        }
    }),
    pt.extend({
        attr: function (t, e, n) {
            var r,
            i,
            o = t.nodeType;
            if (3 !== o && 8 !== o && 2 !== o)
                return "undefined" == typeof t.getAttribute ? pt.prop(t, e, n) : (1 === o && pt.isXMLDoc(t) || (e = e.toLowerCase(), i = pt.attrHooks[e] || (pt.expr.match.bool.test(e) ? Re : je)), void 0 !== n ? null === n ? void pt.removeAttr(t, e) : i && "set" in i && void 0 !== (r = i.set(t, n, e)) ? r : (t.setAttribute(e, n + ""), n) : i && "get" in i && null !== (r = i.get(t, e)) ? r : (r = pt.find.attr(t, e), null == r ? void 0 : r))
        },
        attrHooks: {
            type: {
                set: function (t, e) {
                    if (!ft.radioValue && "radio" === e && pt.nodeName(t, "input")) {
                        var n = t.value;
                        return t.setAttribute("type", e),
                        n && (t.value = n),
                        e
                    }
                }
            }
        },
        removeAttr: function (t, e) {
            var n,
            r,
            i = 0,
            o = e && e.match(At);
            if (o && 1 === t.nodeType)
                for (; n = o[i++]; )
                    r = pt.propFix[n] || n, pt.expr.match.bool.test(n) ? Oe && Le || !Ie.test(n) ? t[r] = !1 : t[pt.camelCase("default-" + n)] = t[r] = !1 : pt.attr(t, n, ""), t.removeAttribute(Le ? n : r)
        }
    }),
    Re = {
        set: function (t, e, n) {
            return e === !1 ? pt.removeAttr(t, n) : Oe && Le || !Ie.test(n) ? t.setAttribute(!Le && pt.propFix[n] || n, n) : t[pt.camelCase("default-" + n)] = t[n] = !0,
            n
        }
    },
    pt.each(pt.expr.match.bool.source.match(/\w+/g), function (t, e) {
        var n = De[e] || pt.find.attr;
        Oe && Le || !Ie.test(e) ? De[e] = function (t, e, r) {
            var i,
            o;
            return r || (o = De[e], De[e] = i, i = null != n(t, e, r) ? e.toLowerCase() : null, De[e] = o),
            i
        }
         : De[e] = function (t, e, n) {
            if (!n)
                return t[pt.camelCase("default-" + e)] ? e.toLowerCase() : null
        }
    }),
    Oe && Le || (pt.attrHooks.value = {
            set: function (t, e, n) {
                return pt.nodeName(t, "input") ? void(t.defaultValue = e) : je && je.set(t, e, n)
            }
        }),
    Le || (je = {
            set: function (t, e, n) {
                var r = t.getAttributeNode(n);
                if (r || t.setAttributeNode(r = t.ownerDocument.createAttribute(n)), r.value = e += "", "value" === n || e === t.getAttribute(n))
                    return e
            }
        }, De.id = De.name = De.coords = function (t, e, n) {
        var r;
        if (!n)
            return (r = t.getAttributeNode(e)) && "" !== r.value ? r.value : null
    }, pt.valHooks.button = {
            get: function (t, e) {
                var n = t.getAttributeNode(e);
                if (n && n.specified)
                    return n.value
            },
            set: je.set
        }, pt.attrHooks.contenteditable = {
            set: function (t, e, n) {
                je.set(t, "" !== e && e, n)
            }
        }, pt.each(["width", "height"], function (t, e) {
            pt.attrHooks[e] = {
                set: function (t, n) {
                    if ("" === n)
                        return t.setAttribute(e, "auto"), n
                }
            }
        })),
    ft.style || (pt.attrHooks.style = {
            get: function (t) {
                return t.style.cssText || void 0
            },
            set: function (t, e) {
                return t.style.cssText = e + ""
            }
        });
    var He = /^(?:input|select|textarea|button|object)$/i,
    Pe = /^(?:a|area)$/i;
    pt.fn.extend({
        prop: function (t, e) {
            return Ft(this, pt.prop, t, e, arguments.length > 1)
        },
        removeProp: function (t) {
            return t = pt.propFix[t] || t,
            this.each(function () {
                try {
                    this[t] = void 0,
                    delete this[t]
                } catch (t) {}
            })
        }
    }),
    pt.extend({
        prop: function (t, e, n) {
            var r,
            i,
            o = t.nodeType;
            if (3 !== o && 8 !== o && 2 !== o)
                return 1 === o && pt.isXMLDoc(t) || (e = pt.propFix[e] || e, i = pt.propHooks[e]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(t, n, e)) ? r : t[e] = n : i && "get" in i && null !== (r = i.get(t, e)) ? r : t[e]
        },
        propHooks: {
            tabIndex: {
                get: function (t) {
                    var e = pt.find.attr(t, "tabindex");
                    return e ? parseInt(e, 10) : He.test(t.nodeName) || Pe.test(t.nodeName) && t.href ? 0 : -1
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        }
    }),
    ft.hrefNormalized || pt.each(["href", "src"], function (t, e) {
        pt.propHooks[e] = {
            get: function (t) {
                return t.getAttribute(e, 4)
            }
        }
    }),
    ft.optSelected || (pt.propHooks.selected = {
            get: function (t) {
                var e = t.parentNode;
                return e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex),
                null
            },
            set: function (t) {
                var e = t.parentNode;
                e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex)
            }
        }),
    pt.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        pt.propFix[this.toLowerCase()] = this
    }),
    ft.enctype || (pt.propFix.enctype = "encoding");
    var Fe = /[\t\r\n\f]/g;
    pt.fn.extend({
        addClass: function (t) {
            var e,
            n,
            r,
            i,
            o,
            a,
            s,
            l = 0;
            if (pt.isFunction(t))
                return this.each(function (e) {
                    pt(this).addClass(t.call(this, e, B(this)))
                });
            if ("string" == typeof t && t)
                for (e = t.match(At) || []; n = this[l++]; )
                    if (i = B(n), r = 1 === n.nodeType && (" " + i + " ").replace(Fe, " ")) {
                        for (a = 0; o = e[a++]; )
                            r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                        s = pt.trim(r),
                        i !== s && pt.attr(n, "class", s)
                    }
            return this
        },
        removeClass: function (t) {
            var e,
            n,
            r,
            i,
            o,
            a,
            s,
            l = 0;
            if (pt.isFunction(t))
                return this.each(function (e) {
                    pt(this).removeClass(t.call(this, e, B(this)))
                });
            if (!arguments.length)
                return this.attr("class", "");
            if ("string" == typeof t && t)
                for (e = t.match(At) || []; n = this[l++]; )
                    if (i = B(n), r = 1 === n.nodeType && (" " + i + " ").replace(Fe, " ")) {
                        for (a = 0; o = e[a++]; )
                            for (; r.indexOf(" " + o + " ") > -1; )
                                r = r.replace(" " + o + " ", " ");
                        s = pt.trim(r),
                        i !== s && pt.attr(n, "class", s)
                    }
            return this
        },
        toggleClass: function (t, e) {
            var n = typeof t;
            return "boolean" == typeof e && "string" === n ? e ? this.addClass(t) : this.removeClass(t) : pt.isFunction(t) ? this.each(function (n) {
                pt(this).toggleClass(t.call(this, n, B(this), e), e)
            }) : this.each(function () {
                var e,
                r,
                i,
                o;
                if ("string" === n)
                    for (r = 0, i = pt(this), o = t.match(At) || []; e = o[r++]; )
                        i.hasClass(e) ? i.removeClass(e) : i.addClass(e);
                else
                    void 0 !== t && "boolean" !== n || (e = B(this), e && pt._data(this, "__className__", e), pt.attr(this, "class", e || t === !1 ? "" : pt._data(this, "__className__") || ""))
            })
        },
        hasClass: function (t) {
            var e,
            n,
            r = 0;
            for (e = " " + t + " "; n = this[r++]; )
                if (1 === n.nodeType && (" " + B(n) + " ").replace(Fe, " ").indexOf(e) > -1)
                    return !0;
            return !1
        }
    }),
    pt.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (t, e) {
        pt.fn[e] = function (t, n) {
            return arguments.length > 0 ? this.on(e, null, t, n) : this.trigger(e)
        }
    }),
    pt.fn.extend({
        hover: function (t, e) {
            return this.mouseenter(t).mouseleave(e || t)
        }
    });
    var We = t.location,
    Me = pt.now(),
    ze = /\?/,
    qe = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    pt.parseJSON = function (e) {
        if (t.JSON && t.JSON.parse)
            return t.JSON.parse(e + "");
        var n,
        r = null,
        i = pt.trim(e + "");
        return i && !pt.trim(i.replace(qe, function (t, e, i, o) {
                return n && e && (r = 0),
                0 === r ? t : (n = i || e, r += !o - !i, "")
            })) ? Function("return " + i)() : pt.error("Invalid JSON: " + e)
    },
    pt.parseXML = function (e) {
        var n,
        r;
        if (!e || "string" != typeof e)
            return null;
        try {
            t.DOMParser ? (r = new t.DOMParser, n = r.parseFromString(e, "text/xml")) : (n = new t.ActiveXObject("Microsoft.XMLDOM"), n.async = "false", n.loadXML(e))
        } catch (t) {
            n = void 0
        }
        return n && n.documentElement && !n.getElementsByTagName("parsererror").length || pt.error("Invalid XML: " + e),
        n
    };
    var Be = /#.*$/,
    Ue = /([?&])_=[^&]*/,
    Ke = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
    Xe = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
    Ve = /^(?:GET|HEAD)$/,
    Ge = /^\/\//,
    Qe = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
    Ye = {},
    Je = {},
    Ze = "*/".concat("*"),
    tn = We.href,
    en = Qe.exec(tn.toLowerCase()) || [];
    pt.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: tn,
            type: "GET",
            isLocal: Xe.test(en[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Ze,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": pt.parseJSON,
                "text xml": pt.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function (t, e) {
            return e ? X(X(t, pt.ajaxSettings), e) : X(pt.ajaxSettings, t)
        },
        ajaxPrefilter: U(Ye),
        ajaxTransport: U(Je),
        ajax: function (e, n) {
            function r(e, n, r, i) {
                var o,
                f,
                y,
                b,
                x,
                C = n;
                2 !== _ && (_ = 2, l && t.clearTimeout(l), c = void 0, s = i || "", w.readyState = e > 0 ? 4 : 0, o = e >= 200 && e < 300 || 304 === e, r && (b = V(d, w, r)), b = G(d, b, w, o), o ? (d.ifModified && (x = w.getResponseHeader("Last-Modified"), x && (pt.lastModified[a] = x), x = w.getResponseHeader("etag"), x && (pt.etag[a] = x)), 204 === e || "HEAD" === d.type ? C = "nocontent" : 304 === e ? C = "notmodified" : (C = b.state, f = b.data, y = b.error, o = !y)) : (y = C, !e && C || (C = "error", e < 0 && (e = 0))), w.status = e, w.statusText = (n || C) + "", o ? v.resolveWith(p, [f, C, w]) : v.rejectWith(p, [w, C, y]), w.statusCode(g), g = void 0, u && h.trigger(o ? "ajaxSuccess" : "ajaxError", [w, d, o ? f : y]), m.fireWith(p, [w, C]), u && (h.trigger("ajaxComplete", [w, d]), --pt.active || pt.event.trigger("ajaxStop")))
            }
            "object" == typeof e && (n = e, e = void 0),
            n = n || {};
            var i,
            o,
            a,
            s,
            l,
            u,
            c,
            f,
            d = pt.ajaxSetup({}, n),
            p = d.context || d,
            h = d.context && (p.nodeType || p.jquery) ? pt(p) : pt.event,
            v = pt.Deferred(),
            m = pt.Callbacks("once memory"),
            g = d.statusCode || {},
            y = {},
            b = {},
            _ = 0,
            x = "canceled",
            w = {
                readyState: 0,
                getResponseHeader: function (t) {
                    var e;
                    if (2 === _) {
                        if (!f)
                            for (f = {}; e = Ke.exec(s); )
                                f[e[1].toLowerCase()] = e[2];
                        e = f[t.toLowerCase()]
                    }
                    return null == e ? null : e
                },
                getAllResponseHeaders: function () {
                    return 2 === _ ? s : null
                },
                setRequestHeader: function (t, e) {
                    var n = t.toLowerCase();
                    return _ || (t = b[n] = b[n] || t, y[t] = e),
                    this
                },
                overrideMimeType: function (t) {
                    return _ || (d.mimeType = t),
                    this
                },
                statusCode: function (t) {
                    var e;
                    if (t)
                        if (_ < 2)
                            for (e in t)
                                g[e] = [g[e], t[e]];
                        else
                            w.always(t[w.status]);
                    return this
                },
                abort: function (t) {
                    var e = t || x;
                    return c && c.abort(e),
                    r(0, e),
                    this
                }
            };
            if (v.promise(w).complete = m.add, w.success = w.done, w.error = w.fail, d.url = ((e || d.url || tn) + "").replace(Be, "").replace(Ge, en[1] + "//"), d.type = n.method || n.type || d.method || d.type, d.dataTypes = pt.trim(d.dataType || "*").toLowerCase().match(At) || [""], null == d.crossDomain && (i = Qe.exec(d.url.toLowerCase()), d.crossDomain = !(!i || i[1] === en[1] && i[2] === en[2] && (i[3] || ("http:" === i[1] ? "80" : "443")) === (en[3] || ("http:" === en[1] ? "80" : "443")))), d.data && d.processData && "string" != typeof d.data && (d.data = pt.param(d.data, d.traditional)), K(Ye, d, n, w), 2 === _)
                return w;
            u = pt.event && d.global,
            u && 0 === pt.active++ && pt.event.trigger("ajaxStart"),
            d.type = d.type.toUpperCase(),
            d.hasContent = !Ve.test(d.type),
            a = d.url,
            d.hasContent || (d.data && (a = d.url += (ze.test(a) ? "&" : "?") + d.data, delete d.data), d.cache === !1 && (d.url = Ue.test(a) ? a.replace(Ue, "$1_=" + Me++) : a + (ze.test(a) ? "&" : "?") + "_=" + Me++)),
            d.ifModified && (pt.lastModified[a] && w.setRequestHeader("If-Modified-Since", pt.lastModified[a]), pt.etag[a] && w.setRequestHeader("If-None-Match", pt.etag[a])),
            (d.data && d.hasContent && d.contentType !== !1 || n.contentType) && w.setRequestHeader("Content-Type", d.contentType),
            w.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + ("*" !== d.dataTypes[0] ? ", " + Ze + "; q=0.01" : "") : d.accepts["*"]);
            for (o in d.headers)
                w.setRequestHeader(o, d.headers[o]);
            if (d.beforeSend && (d.beforeSend.call(p, w, d) === !1 || 2 === _))
                return w.abort();
            x = "abort";
            for (o in {
                success: 1,
                error: 1,
                complete: 1
            })
                w[o](d[o]);
            if (c = K(Je, d, n, w)) {
                if (w.readyState = 1, u && h.trigger("ajaxSend", [w, d]), 2 === _)
                    return w;
                d.async && d.timeout > 0 && (l = t.setTimeout(function () {
                        w.abort("timeout")
                    }, d.timeout));
                try {
                    _ = 1,
                    c.send(y, r)
                } catch (t) {
                    if (!(_ < 2))
                        throw t;
                    r(-1, t)
                }
            } else
                r(-1, "No Transport");
            return w
        },
        getJSON: function (t, e, n) {
            return pt.get(t, e, n, "json")
        },
        getScript: function (t, e) {
            return pt.get(t, void 0, e, "script")
        }
    }),
    pt.each(["get", "post"], function (t, e) {
        pt[e] = function (t, n, r, i) {
            return pt.isFunction(n) && (i = i || r, r = n, n = void 0),
            pt.ajax(pt.extend({
                    url: t,
                    type: e,
                    dataType: i,
                    data: n,
                    success: r
                }, pt.isPlainObject(t) && t))
        }
    }),
    pt._evalUrl = function (t) {
        return pt.ajax({
            url: t,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            "throws": !0
        })
    },
    pt.fn.extend({
        wrapAll: function (t) {
            if (pt.isFunction(t))
                return this.each(function (e) {
                    pt(this).wrapAll(t.call(this, e))
                });
            if (this[0]) {
                var e = pt(t, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && e.insertBefore(this[0]),
                e.map(function () {
                    for (var t = this; t.firstChild && 1 === t.firstChild.nodeType; )
                        t = t.firstChild;
                    return t
                }).append(this)
            }
            return this
        },
        wrapInner: function (t) {
            return pt.isFunction(t) ? this.each(function (e) {
                pt(this).wrapInner(t.call(this, e))
            }) : this.each(function () {
                var e = pt(this),
                n = e.contents();
                n.length ? n.wrapAll(t) : e.append(t)
            })
        },
        wrap: function (t) {
            var e = pt.isFunction(t);
            return this.each(function (n) {
                pt(this).wrapAll(e ? t.call(this, n) : t)
            })
        },
        unwrap: function () {
            return this.parent().each(function () {
                pt.nodeName(this, "body") || pt(this).replaceWith(this.childNodes)
            }).end()
        }
    }),
    pt.expr.filters.hidden = function (t) {
        return ft.reliableHiddenOffsets() ? t.offsetWidth <= 0 && t.offsetHeight <= 0 && !t.getClientRects().length : Y(t)
    },
    pt.expr.filters.visible = function (t) {
        return !pt.expr.filters.hidden(t)
    };
    var nn = /%20/g,
    rn = /\[\]$/,
    on = /\r?\n/g,
    an = /^(?:submit|button|image|reset|file)$/i,
    sn = /^(?:input|select|textarea|keygen)/i;
    pt.param = function (t, e) {
        var n,
        r = [],
        i = function (t, e) {
            e = pt.isFunction(e) ? e() : null == e ? "" : e,
            r[r.length] = encodeURIComponent(t) + "=" + encodeURIComponent(e)
        };
        if (void 0 === e && (e = pt.ajaxSettings && pt.ajaxSettings.traditional), pt.isArray(t) || t.jquery && !pt.isPlainObject(t))
            pt.each(t, function () {
                i(this.name, this.value)
            });
        else
            for (n in t)
                J(n, t[n], e, i);
        return r.join("&").replace(nn, "+")
    },
    pt.fn.extend({
        serialize: function () {
            return pt.param(this.serializeArray())
        },
        serializeArray: function () {
            return this.map(function () {
                var t = pt.prop(this, "elements");
                return t ? pt.makeArray(t) : this
            }).filter(function () {
                var t = this.type;
                return this.name && !pt(this).is(":disabled") && sn.test(this.nodeName) && !an.test(t) && (this.checked || !Wt.test(t))
            }).map(function (t, e) {
                var n = pt(this).val();
                return null == n ? null : pt.isArray(n) ? pt.map(n, function (t) {
                    return {
                        name: e.name,
                        value: t.replace(on, "\r\n")
                    }
                }) : {
                    name: e.name,
                    value: n.replace(on, "\r\n")
                }
            }).get()
        }
    }),
    pt.ajaxSettings.xhr = void 0 !== t.ActiveXObject ? function () {
        return this.isLocal ? tt() : rt.documentMode > 8 ? Z() : /^(get|post|head|put|delete|options)$/i.test(this.type) && Z() || tt()
    }
     : Z;
    var ln = 0,
    un = {},
    cn = pt.ajaxSettings.xhr();
    t.attachEvent && t.attachEvent("onunload", function () {
        for (var t in un)
            un[t](void 0, !0)
    }),
    ft.cors = !!cn && "withCredentials" in cn,
    cn = ft.ajax = !!cn,
    cn && pt.ajaxTransport(function (e) {
        if (!e.crossDomain || ft.cors) {
            var n;
            return {
                send: function (r, i) {
                    var o,
                    a = e.xhr(),
                    s = ++ln;
                    if (a.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
                        for (o in e.xhrFields)
                            a[o] = e.xhrFields[o];
                    e.mimeType && a.overrideMimeType && a.overrideMimeType(e.mimeType),
                    e.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest");
                    for (o in r)
                        void 0 !== r[o] && a.setRequestHeader(o, r[o] + "");
                    a.send(e.hasContent && e.data || null),
                    n = function (t, r) {
                        var o,
                        l,
                        u;
                        if (n && (r || 4 === a.readyState))
                            if (delete un[s], n = void 0, a.onreadystatechange = pt.noop, r)
                                4 !== a.readyState && a.abort();
                            else {
                                u = {},
                                o = a.status,
                                "string" == typeof a.responseText && (u.text = a.responseText);
                                try {
                                    l = a.statusText
                                } catch (t) {
                                    l = ""
                                }
                                o || !e.isLocal || e.crossDomain ? 1223 === o && (o = 204) : o = u.text ? 200 : 404
                            }
                        u && i(o, l, u, a.getAllResponseHeaders())
                    },
                    e.async ? 4 === a.readyState ? t.setTimeout(n) : a.onreadystatechange = un[s] = n : n()
                },
                abort: function () {
                    n && n(void 0, !0)
                }
            }
        }
    }),
    pt.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function (t) {
                return pt.globalEval(t),
                t
            }
        }
    }),
    pt.ajaxPrefilter("script", function (t) {
        void 0 === t.cache && (t.cache = !1),
        t.crossDomain && (t.type = "GET", t.global = !1)
    }),
    pt.ajaxTransport("script", function (t) {
        if (t.crossDomain) {
            var e,
            n = rt.head || pt("head")[0] || rt.documentElement;
            return {
                send: function (r, i) {
                    e = rt.createElement("script"),
                    e.async = !0,
                    t.scriptCharset && (e.charset = t.scriptCharset),
                    e.src = t.url,
                    e.onload = e.onreadystatechange = function (t, n) {
                        (n || !e.readyState || /loaded|complete/.test(e.readyState)) && (e.onload = e.onreadystatechange = null, e.parentNode && e.parentNode.removeChild(e), e = null, n || i(200, "success"))
                    },
                    n.insertBefore(e, n.firstChild)
                },
                abort: function () {
                    e && e.onload(void 0, !0)
                }
            }
        }
    });
    var fn = [],
    dn = /(=)\?(?=&|$)|\?\?/;
    pt.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
            var t = fn.pop() || pt.expando + "_" + Me++;
            return this[t] = !0,
            t
        }
    }),
    pt.ajaxPrefilter("json jsonp", function (e, n, r) {
        var i,
        o,
        a,
        s = e.jsonp !== !1 && (dn.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && dn.test(e.data) && "data");
        if (s || "jsonp" === e.dataTypes[0])
            return i = e.jsonpCallback = pt.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, s ? e[s] = e[s].replace(dn, "$1" + i) : e.jsonp !== !1 && (e.url += (ze.test(e.url) ? "&" : "?") + e.jsonp + "=" + i), e.converters["script json"] = function () {
                return a || pt.error(i + " was not called"),
                a[0]
            },
        e.dataTypes[0] = "json",
        o = t[i],
        t[i] = function () {
            a = arguments
        },
        r.always(function () {
            void 0 === o ? pt(t).removeProp(i) : t[i] = o,
            e[i] && (e.jsonpCallback = n.jsonpCallback,
                fn.push(i)),
            a && pt.isFunction(o) && o(a[0]),
            a = o = void 0
        }),
        "script"
    }),
    pt.parseHTML = function (t, e, n) {
        if (!t || "string" != typeof t)
            return null;
        "boolean" == typeof e && (n = e, e = !1),
        e = e || rt;
        var r = wt.exec(t),
        i = !n && [];
        return r ? [e.createElement(r[1])] : (r = g([t], e, i), i && i.length && pt(i).remove(), pt.merge([], r.childNodes))
    };
    var pn = pt.fn.load;
    pt.fn.load = function (t, e, n) {
        if ("string" != typeof t && pn)
            return pn.apply(this, arguments);
        var r,
        i,
        o,
        a = this,
        s = t.indexOf(" ");
        return s > -1 && (r = pt.trim(t.slice(s, t.length)), t = t.slice(0, s)),
        pt.isFunction(e) ? (n = e, e = void 0) : e && "object" == typeof e && (i = "POST"),
        a.length > 0 && pt.ajax({
            url: t,
            type: i || "GET",
            dataType: "html",
            data: e
        }).done(function (t) {
            o = arguments,
            a.html(r ? pt("<div>").append(pt.parseHTML(t)).find(r) : t)
        }).always(n && function (t, e) {
            a.each(function () {
                n.apply(this, o || [t.responseText, e, t])
            })
        }),
        this
    },
    pt.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (t, e) {
        pt.fn[e] = function (t) {
            return this.on(e, t)
        }
    }),
    pt.expr.filters.animated = function (t) {
        return pt.grep(pt.timers, function (e) {
            return t === e.elem
        }).length
    },
    pt.offset = {
        setOffset: function (t, e, n) {
            var r,
            i,
            o,
            a,
            s,
            l,
            u,
            c = pt.css(t, "position"),
            f = pt(t),
            d = {};
            "static" === c && (t.style.position = "relative"),
            s = f.offset(),
            o = pt.css(t, "top"),
            l = pt.css(t, "left"),
            u = ("absolute" === c || "fixed" === c) && pt.inArray("auto", [o, l]) > -1,
            u ? (r = f.position(), a = r.top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(l) || 0),
            pt.isFunction(e) && (e = e.call(t, n, pt.extend({}, s))),
            null != e.top && (d.top = e.top - s.top + a),
            null != e.left && (d.left = e.left - s.left + i),
            "using" in e ? e.using.call(t, d) : f.css(d)
        }
    },
    pt.fn.extend({
        offset: function (t) {
            if (arguments.length)
                return void 0 === t ? this : this.each(function (e) {
                    pt.offset.setOffset(this, t, e)
                });
            var e,
            n,
            r = {
                top: 0,
                left: 0
            },
            i = this[0],
            o = i && i.ownerDocument;
            if (o)
                return e = o.documentElement, pt.contains(e, i) ? ("undefined" != typeof i.getBoundingClientRect && (r = i.getBoundingClientRect()), n = et(o), {
                    top: r.top + (n.pageYOffset || e.scrollTop) - (e.clientTop || 0),
                    left: r.left + (n.pageXOffset || e.scrollLeft) - (e.clientLeft || 0)
                }) : r
        },
        position: function () {
            if (this[0]) {
                var t,
                e,
                n = {
                    top: 0,
                    left: 0
                },
                r = this[0];
                return "fixed" === pt.css(r, "position") ? e = r.getBoundingClientRect() : (t = this.offsetParent(), e = this.offset(), pt.nodeName(t[0], "html") || (n = t.offset()), n.top += pt.css(t[0], "borderTopWidth", !0), n.left += pt.css(t[0], "borderLeftWidth", !0)), {
                    top: e.top - n.top - pt.css(r, "marginTop", !0),
                    left: e.left - n.left - pt.css(r, "marginLeft", !0)
                }
            }
        },
        offsetParent: function () {
            return this.map(function () {
                for (var t = this.offsetParent; t && !pt.nodeName(t, "html") && "static" === pt.css(t, "position"); )
                    t = t.offsetParent;
                return t || pe
            })
        }
    }),
    pt.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function (t, e) {
        var n = /Y/.test(e);
        pt.fn[t] = function (r) {
            return Ft(this, function (t, r, i) {
                var o = et(t);
                return void 0 === i ? o ? e in o ? o[e] : o.document.documentElement[r] : t[r] : void(o ? o.scrollTo(n ? pt(o).scrollLeft() : i, n ? i : pt(o).scrollTop()) : t[r] = i)
            }, t, r, arguments.length, null)
        }
    }),
    pt.each(["top", "left"], function (t, e) {
        pt.cssHooks[e] = j(ft.pixelPosition, function (t, n) {
            if (n)
                return n = ve(t, e), fe.test(n) ? pt(t).position()[e] + "px" : n
        })
    }),
    pt.each({
        Height: "height",
        Width: "width"
    }, function (t, e) {
        pt.each({
            padding: "inner" + t,
            content: e,
            "": "outer" + t
        }, function (n, r) {
            pt.fn[r] = function (r, i) {
                var o = arguments.length && (n || "boolean" != typeof r),
                a = n || (r === !0 || i === !0 ? "margin" : "border");
                return Ft(this, function (e, n, r) {
                    var i;
                    return pt.isWindow(e) ? e.document.documentElement["client" + t] : 9 === e.nodeType ? (i = e.documentElement, Math.max(e.body["scroll" + t], i["scroll" + t], e.body["offset" + t], i["offset" + t], i["client" + t])) : void 0 === r ? pt.css(e, n, a) : pt.style(e, n, r, a)
                }, e, o ? r : void 0, o, null)
            }
        })
    }),
    pt.fn.extend({
        bind: function (t, e, n) {
            return this.on(t, null, e, n)
        },
        unbind: function (t, e) {
            return this.off(t, null, e)
        },
        delegate: function (t, e, n, r) {
            return this.on(e, t, n, r)
        },
        undelegate: function (t, e, n) {
            return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", n)
        }
    }),
    pt.fn.size = function () {
        return this.length
    },
    pt.fn.andSelf = pt.fn.addBack,
    "function" == typeof define && define.amd && define("jquery", [], function () {
        return pt
    });
    var hn = t.jQuery,
    vn = t.$;
    return pt.noConflict = function (e) {
        return t.$ === pt && (t.$ = vn),
        e && t.jQuery === pt && (t.jQuery = hn),
        pt
    },
    e || (t.jQuery = t.$ = pt),
    pt
}), function (t, e) {
    "use strict";
    t.rails !== e && t.error("jquery-ujs has already been loaded!");
    var n,
    r = t(document);
    t.rails = n = {
        linkClickSelector: "a[data-confirm], a[data-method], a[data-remote]:not([disabled]), a[data-disable-with], a[data-disable]",
        buttonClickSelector: "button[data-remote]:not([form]):not(form button), button[data-confirm]:not([form]):not(form button)",
        inputChangeSelector: "select[data-remote], input[data-remote], textarea[data-remote]",
        formSubmitSelector: "form",
        formInputClickSelector: "form input[type=submit], form input[type=image], form button[type=submit], form button:not([type]), input[type=submit][form], input[type=image][form], button[type=submit][form], button[form]:not([type])",
        disableSelector: "input[data-disable-with]:enabled, button[data-disable-with]:enabled, textarea[data-disable-with]:enabled, input[data-disable]:enabled, button[data-disable]:enabled, textarea[data-disable]:enabled",
        enableSelector: "input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled, input[data-disable]:disabled, button[data-disable]:disabled, textarea[data-disable]:disabled",
        requiredInputSelector: "input[name][required]:not([disabled]), textarea[name][required]:not([disabled])",
        fileInputSelector: "input[name][type=file]:not([disabled])",
        linkDisableSelector: "a[data-disable-with], a[data-disable]",
        buttonDisableSelector: "button[data-remote][data-disable-with], button[data-remote][data-disable]",
        csrfToken: function () {
            return t("meta[name=csrf-token]").attr("content")
        },
        csrfParam: function () {
            return t("meta[name=csrf-param]").attr("content")
        },
        CSRFProtection: function (t) {
            var e = n.csrfToken();
            e && t.setRequestHeader("X-CSRF-Token", e)
        },
        refreshCSRFTokens: function () {
            t('form input[name="' + n.csrfParam() + '"]').val(n.csrfToken())
        },
        fire: function (e, n, r) {
            var i = t.Event(n);
            return e.trigger(i, r),
            i.result !== !1
        },
        confirm: function (t) {
            return confirm(t)
        },
        ajax: function (e) {
            return t.ajax(e)
        },
        href: function (t) {
            return t[0].href
        },
        isRemote: function (t) {
            return t.data("remote") !== e && t.data("remote") !== !1
        },
        handleRemote: function (r) {
            var i,
            o,
            a,
            s,
            l,
            u;
            if (n.fire(r, "ajax:before")) {
                if (s = r.data("with-credentials") || null, l = r.data("type") || t.ajaxSettings && t.ajaxSettings.dataType, r.is("form")) {
                    i = r.data("ujs:submit-button-formmethod") || r.attr("method"),
                    o = r.data("ujs:submit-button-formaction") || r.attr("action"),
                    a = t(r[0]).serializeArray();
                    var c = r.data("ujs:submit-button");
                    c && (a.push(c), r.data("ujs:submit-button", null)),
                    r.data("ujs:submit-button-formmethod", null),
                    r.data("ujs:submit-button-formaction", null)
                } else
                    r.is(n.inputChangeSelector) ? (i = r.data("method"), o = r.data("url"), a = r.serialize(), r.data("params") && (a = a + "&" + r.data("params"))) : r.is(n.buttonClickSelector) ? (i = r.data("method") || "get", o = r.data("url"), a = r.serialize(), r.data("params") && (a = a + "&" + r.data("params"))) : (i = r.data("method"), o = n.href(r), a = r.data("params") || null);
                return u = {
                    type: i || "GET",
                    data: a,
                    dataType: l,
                    beforeSend: function (t, i) {
                        return i.dataType === e && t.setRequestHeader("accept", "*/*;q=0.5, " + i.accepts.script),
                        !!n.fire(r, "ajax:beforeSend", [t, i]) && void r.trigger("ajax:send", t)
                    },
                    success: function (t, e, n) {
                        r.trigger("ajax:success", [t, e, n])
                    },
                    complete: function (t, e) {
                        r.trigger("ajax:complete", [t, e])
                    },
                    error: function (t, e, n) {
                        r.trigger("ajax:error", [t, e, n])
                    },
                    crossDomain: n.isCrossDomain(o)
                },
                s && (u.xhrFields = {
                        withCredentials: s
                    }),
                o && (u.url = o),
                n.ajax(u)
            }
            return !1
        },
        isCrossDomain: function (t) {
            var e = document.createElement("a");
            e.href = location.href;
            var n = document.createElement("a");
            try {
                return n.href = t,
                n.href = n.href,
                !((!n.protocol || ":" === n.protocol) && !n.host || e.protocol + "//" + e.host == n.protocol + "//" + n.host)
            } catch (t) {
                return !0
            }
        },
        handleMethod: function (r) {
            var i = n.href(r),
            o = r.data("method"),
            a = r.attr("target"),
            s = n.csrfToken(),
            l = n.csrfParam(),
            u = t('<form method="post" action="' + i + '"></form>'),
            c = '<input name="_method" value="' + o + '" type="hidden" />';
            l === e || s === e || n.isCrossDomain(i) || (c += '<input name="' + l + '" value="' + s + '" type="hidden" />'),
            a && u.attr("target", a),
            u.hide().append(c).appendTo("body"),
            u.submit()
        },
        formElements: function (e, n) {
            return e.is("form") ? t(e[0].elements).filter(n) : e.find(n)
        },
        disableFormElements: function (e) {
            n.formElements(e, n.disableSelector).each(function () {
                n.disableFormElement(t(this))
            })
        },
        disableFormElement: function (t) {
            var n,
            r;
            n = t.is("button") ? "html" : "val",
            r = t.data("disable-with"),
            r !== e && (t.data("ujs:enable-with", t[n]()), t[n](r)),
            t.prop("disabled", !0),
            t.data("ujs:disabled", !0)
        },
        enableFormElements: function (e) {
            n.formElements(e, n.enableSelector).each(function () {
                n.enableFormElement(t(this))
            })
        },
        enableFormElement: function (t) {
            var n = t.is("button") ? "html" : "val";
            t.data("ujs:enable-with") !== e && (t[n](t.data("ujs:enable-with")), t.removeData("ujs:enable-with")),
            t.prop("disabled", !1),
            t.removeData("ujs:disabled")
        },
        allowAction: function (t) {
            var e,
            r = t.data("confirm"),
            i = !1;
            if (!r)
                return !0;
            if (n.fire(t, "confirm")) {
                try {
                    i = n.confirm(r)
                } catch (t) {
                    (console.error || console.log).call(console, t.stack || t)
                }
                e = n.fire(t, "confirm:complete", [i])
            }
            return i && e
        },
        blankInputs: function (e, n, r) {
            var i,
            o,
            a,
            s,
            l = t(),
            u = n || "input,textarea",
            c = e.find(u),
            f = {};
            return c.each(function () {
                i = t(this),
                i.is("input[type=radio]") ? (s = i.attr("name"), f[s] || (0 === e.find('input[type=radio]:checked[name="' + s + '"]').length && (a = e.find('input[type=radio][name="' + s + '"]'), l = l.add(a)), f[s] = s)) : (o = i.is("input[type=checkbox],input[type=radio]") ? i.is(":checked") : !!i.val(), o === r && (l = l.add(i)))
            }),
            !!l.length && l
        },
        nonBlankInputs: function (t, e) {
            return n.blankInputs(t, e, !0)
        },
        stopEverything: function (e) {
            return t(e.target).trigger("ujs:everythingStopped"),
            e.stopImmediatePropagation(),
            !1
        },
        disableElement: function (t) {
            var r = t.data("disable-with");
            r !== e && (t.data("ujs:enable-with", t.html()), t.html(r)),
            t.bind("click.railsDisable", function (t) {
                return n.stopEverything(t)
            }),
            t.data("ujs:disabled", !0)
        },
        enableElement: function (t) {
            t.data("ujs:enable-with") !== e && (t.html(t.data("ujs:enable-with")), t.removeData("ujs:enable-with")),
            t.unbind("click.railsDisable"),
            t.removeData("ujs:disabled")
        }
    },
    n.fire(r, "rails:attachBindings") && (t.ajaxPrefilter(function (t, e, r) {
            t.crossDomain || n.CSRFProtection(r)
        }), t(window).on("pageshow.rails", function () {
            t(t.rails.enableSelector).each(function () {
                var e = t(this);
                e.data("ujs:disabled") && t.rails.enableFormElement(e)
            }),
            t(t.rails.linkDisableSelector).each(function () {
                var e = t(this);
                e.data("ujs:disabled") && t.rails.enableElement(e)
            })
        }), r.on("ajax:complete", n.linkDisableSelector, function () {
            n.enableElement(t(this))
        }), r.on("ajax:complete", n.buttonDisableSelector, function () {
            n.enableFormElement(t(this))
        }), r.on("click.rails", n.linkClickSelector, function (e) {
            var r = t(this),
            i = r.data("method"),
            o = r.data("params"),
            a = e.metaKey || e.ctrlKey;
            if (!n.allowAction(r))
                return n.stopEverything(e);
            if (!a && r.is(n.linkDisableSelector) && n.disableElement(r), n.isRemote(r)) {
                if (a && (!i || "GET" === i) && !o)
                    return !0;
                var s = n.handleRemote(r);
                return s === !1 ? n.enableElement(r) : s.fail(function () {
                    n.enableElement(r)
                }),
                !1
            }
            return i ? (n.handleMethod(r), !1) : void 0
        }), r.on("click.rails", n.buttonClickSelector, function (e) {
            var r = t(this);
            if (!n.allowAction(r) || !n.isRemote(r))
                return n.stopEverything(e);
            r.is(n.buttonDisableSelector) && n.disableFormElement(r);
            var i = n.handleRemote(r);
            return i === !1 ? n.enableFormElement(r) : i.fail(function () {
                n.enableFormElement(r)
            }),
            !1
        }), r.on("change.rails", n.inputChangeSelector, function (e) {
            var r = t(this);
            return n.allowAction(r) && n.isRemote(r) ? (n.handleRemote(r), !1) : n.stopEverything(e)
        }), r.on("submit.rails", n.formSubmitSelector, function (r) {
            var i,
            o,
            a = t(this),
            s = n.isRemote(a);
            if (!n.allowAction(a))
                return n.stopEverything(r);
            if (a.attr("novalidate") === e)
                if (a.data("ujs:formnovalidate-button") === e) {
                    if (i = n.blankInputs(a, n.requiredInputSelector, !1), i && n.fire(a, "ajax:aborted:required", [i]))
                        return n.stopEverything(r)
                } else
                    a.data("ujs:formnovalidate-button", e);
            if (s) {
                if (o = n.nonBlankInputs(a, n.fileInputSelector)) {
                    setTimeout(function () {
                        n.disableFormElements(a)
                    }, 13);
                    var l = n.fire(a, "ajax:aborted:file", [o]);
                    return l || setTimeout(function () {
                        n.enableFormElements(a)
                    }, 13),
                    l
                }
                return n.handleRemote(a),
                !1
            }
            setTimeout(function () {
                n.disableFormElements(a)
            }, 13)
        }), r.on("click.rails", n.formInputClickSelector, function (e) {
            var r = t(this);
            if (!n.allowAction(r))
                return n.stopEverything(e);
            var i = r.attr("name"),
            o = i ? {
                name: i,
                value: r.val()
            }
             : null,
            a = r.closest("form");
            0 === a.length && (a = t("#" + r.attr("form"))),
            a.data("ujs:submit-button", o),
            a.data("ujs:formnovalidate-button", r.attr("formnovalidate")),
            a.data("ujs:submit-button-formaction", r.attr("formaction")),
            a.data("ujs:submit-button-formmethod", r.attr("formmethod"))
        }), r.on("ajax:send.rails", n.formSubmitSelector, function (e) {
            this === e.target && n.disableFormElements(t(this))
        }), r.on("ajax:complete.rails", n.formSubmitSelector, function (e) {
            this === e.target && n.enableFormElements(t(this))
        }), t(function () {
            n.refreshCSRFTokens()
        }))
}
(jQuery), +function(t) {
    "use strict";
    function e(e) {
        return this.each(function () {
            var r = t(this),
            i = r.data("bs.affix"),
            o = "object" == typeof e && e;
            i || r.data("bs.affix", i = new n(this, o)),
            "string" == typeof e && i[e]()
        })
    }
    var n = function (e, r) {
        this.options = t.extend({}, n.DEFAULTS, r);
        var i = this.options.target === n.DEFAULTS.target ? t(this.options.target) : t(document).find(this.options.target);
        this.$target = i.on("scroll.bs.affix.data-api", t.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", t.proxy(this.checkPositionWithEventLoop, this)),
        this.$element = t(e),
        this.affixed = null,
        this.unpin = null,
        this.pinnedOffset = null,
        this.checkPosition()
    };
    n.VERSION = "3.4.1",
    n.RESET = "affix affix-top affix-bottom",
    n.DEFAULTS = {
        offset: 0,
        target: window
    },
    n.prototype.getState = function (t, e, n, r) {
        var i = this.$target.scrollTop(),
        o = this.$element.offset(),
        a = this.$target.height();
        if (null != n && "top" == this.affixed)
            return i < n && "top";
        if ("bottom" == this.affixed)
            return null != n ? !(i + this.unpin <= o.top) && "bottom" : !(i + a <= t - r) && "bottom";
        var s = null == this.affixed,
        l = s ? i : o.top,
        u = s ? a : e;
        return null != n && i <= n ? "top" : null != r && l + u >= t - r && "bottom"
    },
    n.prototype.getPinnedOffset = function () {
        if (this.pinnedOffset)
            return this.pinnedOffset;
        this.$element.removeClass(n.RESET).addClass("affix");
        var t = this.$target.scrollTop(),
        e = this.$element.offset();
        return this.pinnedOffset = e.top - t
    },
    n.prototype.checkPositionWithEventLoop = function () {
        setTimeout(t.proxy(this.checkPosition, this), 1)
    },
    n.prototype.checkPosition = function () {
        if (this.$element.is(":visible")) {
            var e = this.$element.height(),
            r = this.options.offset,
            i = r.top,
            o = r.bottom,
            a = Math.max(t(document).height(), t(document.body).height());
            "object" != typeof r && (o = i = r),
            "function" == typeof i && (i = r.top(this.$element)),
            "function" == typeof o && (o = r.bottom(this.$element));
            var s = this.getState(a, e, i, o);
            if (this.affixed != s) {
                null != this.unpin && this.$element.css("top", "");
                var l = "affix" + (s ? "-" + s : ""),
                u = t.Event(l + ".bs.affix");
                if (this.$element.trigger(u), u.isDefaultPrevented())
                    return;
                this.affixed = s,
                this.unpin = "bottom" == s ? this.getPinnedOffset() : null,
                this.$element.removeClass(n.RESET).addClass(l).trigger(l.replace("affix", "affixed") + ".bs.affix")
            }
            "bottom" == s && this.$element.offset({
                top: a - e - o
            })
        }
    };
    var r = t.fn.affix;
    t.fn.affix = e,
    t.fn.affix.Constructor = n,
    t.fn.affix.noConflict = function () {
        return t.fn.affix = r,
        this
    },
    t(window).on("load", function () {
        t('[data-spy="affix"]').each(function () {
            var n = t(this),
            r = n.data();
            r.offset = r.offset || {},
            null != r.offsetBottom && (r.offset.bottom = r.offsetBottom),
            null != r.offsetTop && (r.offset.top = r.offsetTop),
            e.call(n, r)
        })
    })
}
(jQuery), +function(t) {
    "use strict";
    function e(e) {
        return this.each(function () {
            var n = t(this),
            i = n.data("bs.alert");
            i || n.data("bs.alert", i = new r(this)),
            "string" == typeof e && i[e].call(n)
        })
    }
    var n = '[data-dismiss="alert"]',
    r = function (e) {
        t(e).on("click", n, this.close)
    };
    r.VERSION = "3.4.1",
    r.TRANSITION_DURATION = 150,
    r.prototype.close = function (e) {
        function n() {
            a.detach().trigger("closed.bs.alert").remove()
        }
        var i = t(this),
        o = i.attr("data-target");
        o || (o = i.attr("href"), o = o && o.replace(/.*(?=#[^\s]*$)/, "")),
        o = "#" === o ? [] : o;
        var a = t(document).find(o);
        e && e.preventDefault(),
        a.length || (a = i.closest(".alert")),
        a.trigger(e = t.Event("close.bs.alert")),
        e.isDefaultPrevented() || (a.removeClass("in"), t.support.transition && a.hasClass("fade") ? a.one("bsTransitionEnd", n).emulateTransitionEnd(r.TRANSITION_DURATION) : n())
    };
    var i = t.fn.alert;
    t.fn.alert = e,
    t.fn.alert.Constructor = r,
    t.fn.alert.noConflict = function () {
        return t.fn.alert = i,
        this
    },
    t(document).on("click.bs.alert.data-api", n, r.prototype.close)
}
(jQuery), +function(t) {
    "use strict";
    function e(e) {
        return this.each(function () {
            var r = t(this),
            i = r.data("bs.button"),
            o = "object" == typeof e && e;
            i || r.data("bs.button", i = new n(this, o)),
            "toggle" == e ? i.toggle() : e && i.setState(e)
        })
    }
    var n = function (e, r) {
        this.$element = t(e),
        this.options = t.extend({}, n.DEFAULTS, r),
        this.isLoading = !1
    };
    n.VERSION = "3.4.1",
    n.DEFAULTS = {
        loadingText: "loading..."
    },
    n.prototype.setState = function (e) {
        var n = "disabled",
        r = this.$element,
        i = r.is("input") ? "val" : "html",
        o = r.data();
        e += "Text",
        null == o.resetText && r.data("resetText", r[i]()),
        setTimeout(t.proxy(function () {
                r[i](null == o[e] ? this.options[e] : o[e]),
                "loadingText" == e ? (this.isLoading = !0, r.addClass(n).attr(n, n).prop(n, !0)) : this.isLoading && (this.isLoading = !1, r.removeClass(n).removeAttr(n).prop(n, !1))
            }, this), 0)
    },
    n.prototype.toggle = function () {
        var t = !0,
        e = this.$element.closest('[data-toggle="buttons"]');
        if (e.length) {
            var n = this.$element.find("input");
            "radio" == n.prop("type") ? (n.prop("checked") && (t = !1), e.find(".active").removeClass("active"), this.$element.addClass("active")) : "checkbox" == n.prop("type") && (n.prop("checked") !== this.$element.hasClass("active") && (t = !1), this.$element.toggleClass("active")),
            n.prop("checked", this.$element.hasClass("active")),
            t && n.trigger("change")
        } else
            this.$element.attr("aria-pressed", !this.$element.hasClass("active")), this.$element.toggleClass("active")
    };
    var r = t.fn.button;
    t.fn.button = e,
    t.fn.button.Constructor = n,
    t.fn.button.noConflict = function () {
        return t.fn.button = r,
        this
    },
    t(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function (n) {
        var r = t(n.target).closest(".btn");
        e.call(r, "toggle"),
        t(n.target).is('input[type="radio"], input[type="checkbox"]') || (n.preventDefault(), r.is("input,button") ? r.trigger("focus") : r.find("input:visible,button:visible").first().trigger("focus"))
    }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function (e) {
        t(e.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(e.type))
    })
}
(jQuery), +function(t) {
    "use strict";
    function e(e) {
        return this.each(function () {
            var r = t(this),
            i = r.data("bs.carousel"),
            o = t.extend({}, n.DEFAULTS, r.data(), "object" == typeof e && e),
            a = "string" == typeof e ? e : o.slide;
            i || r.data("bs.carousel", i = new n(this, o)),
            "number" == typeof e ? i.to(e) : a ? i[a]() : o.interval && i.pause().cycle()
        })
    }
    var n = function (e, n) {
        this.$element = t(e),
        this.$indicators = this.$element.find(".carousel-indicators"),
        this.options = n,
        this.paused = null,
        this.sliding = null,
        this.interval = null,
        this.$active = null,
        this.$items = null,
        this.options.keyboard && this.$element.on("keydown.bs.carousel", t.proxy(this.keydown, this)),
        "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", t.proxy(this.pause, this)).on("mouseleave.bs.carousel", t.proxy(this.cycle, this))
    };
    n.VERSION = "3.4.1",
    n.TRANSITION_DURATION = 600,
    n.DEFAULTS = {
        interval: 5e3,
        pause: "hover",
        wrap: !0,
        keyboard: !0
    },
    n.prototype.keydown = function (t) {
        if (!/input|textarea/i.test(t.target.tagName)) {
            switch (t.which) {
            case 37:
                this.prev();
                break;
            case 39:
                this.next();
                break;
            default:
                return
            }
            t.preventDefault()
        }
    },
    n.prototype.cycle = function (e) {
        return e || (this.paused = !1),
        this.interval && clearInterval(this.interval),
        this.options.interval && !this.paused && (this.interval = setInterval(t.proxy(this.next, this), this.options.interval)),
        this
    },
    n.prototype.getItemIndex = function (t) {
        return this.$items = t.parent().children(".item"),
        this.$items.index(t || this.$active)
    },
    n.prototype.getItemForDirection = function (t, e) {
        var n = this.getItemIndex(e),
        r = "prev" == t && 0 === n || "next" == t && n == this.$items.length - 1;
        if (r && !this.options.wrap)
            return e;
        var i = "prev" == t ? -1 : 1,
        o = (n + i) % this.$items.length;
        return this.$items.eq(o)
    },
    n.prototype.to = function (t) {
        var e = this,
        n = this.getItemIndex(this.$active = this.$element.find(".item.active"));
        if (!(t > this.$items.length - 1 || t < 0))
            return this.sliding ? this.$element.one("slid.bs.carousel", function () {
                e.to(t)
            }) : n == t ? this.pause().cycle() : this.slide(t > n ? "next" : "prev", this.$items.eq(t))
    },
    n.prototype.pause = function (e) {
        return e || (this.paused = !0),
        this.$element.find(".next, .prev").length && t.support.transition && (this.$element.trigger(t.support.transition.end), this.cycle(!0)),
        this.interval = clearInterval(this.interval),
        this
    },
    n.prototype.next = function () {
        if (!this.sliding)
            return this.slide("next")
    },
    n.prototype.prev = function () {
        if (!this.sliding)
            return this.slide("prev")
    },
    n.prototype.slide = function (e, r) {
        var i = this.$element.find(".item.active"),
        o = r || this.getItemForDirection(e, i),
        a = this.interval,
        s = "next" == e ? "left" : "right",
        l = this;
        if (o.hasClass("active"))
            return this.sliding = !1;
        var u = o[0],
        c = t.Event("slide.bs.carousel", {
            relatedTarget: u,
            direction: s
        });
        if (this.$element.trigger(c), !c.isDefaultPrevented()) {
            if (this.sliding = !0, a && this.pause(), this.$indicators.length) {
                this.$indicators.find(".active").removeClass("active");
                var f = t(this.$indicators.children()[this.getItemIndex(o)]);
                f && f.addClass("active")
            }
            var d = t.Event("slid.bs.carousel", {
                relatedTarget: u,
                direction: s
            });
            return t.support.transition && this.$element.hasClass("slide") ? (o.addClass(e), "object" == typeof o && o.length && o[0].offsetWidth, i.addClass(s), o.addClass(s), i.one("bsTransitionEnd", function () {
                    o.removeClass([e, s].join(" ")).addClass("active"),
                    i.removeClass(["active", s].join(" ")),
                    l.sliding = !1,
                    setTimeout(function () {
                        l.$element.trigger(d)
                    }, 0)
                }).emulateTransitionEnd(n.TRANSITION_DURATION)) : (i.removeClass("active"), o.addClass("active"), this.sliding = !1, this.$element.trigger(d)),
            a && this.cycle(),
            this
        }
    };
    var r = t.fn.carousel;
    t.fn.carousel = e,
    t.fn.carousel.Constructor = n,
    t.fn.carousel.noConflict = function () {
        return t.fn.carousel = r,
        this
    };
    var i = function (n) {
        var r = t(this),
        i = r.attr("href");
        i && (i = i.replace(/.*(?=#[^\s]+$)/, ""));
        var o = r.attr("data-target") || i,
        a = t(document).find(o);
        if (a.hasClass("carousel")) {
            var s = t.extend({}, a.data(), r.data()),
            l = r.attr("data-slide-to");
            l && (s.interval = !1),
            e.call(a, s),
            l && a.data("bs.carousel").to(l),
            n.preventDefault()
        }
    };
    t(document).on("click.bs.carousel.data-api", "[data-slide]", i).on("click.bs.carousel.data-api", "[data-slide-to]", i),
    t(window).on("load", function () {
        t('[data-ride="carousel"]').each(function () {
            var n = t(this);
            e.call(n, n.data())
        })
    })
}
(jQuery), +function(t) {
    "use strict";
    function e(e) {
        var n,
        r = e.attr("data-target") || (n = e.attr("href")) && n.replace(/.*(?=#[^\s]+$)/, "");
        return t(document).find(r)
    }
    function n(e) {
        return this.each(function () {
            var n = t(this),
            i = n.data("bs.collapse"),
            o = t.extend({}, r.DEFAULTS, n.data(), "object" == typeof e && e);
            !i && o.toggle && /show|hide/.test(e) && (o.toggle = !1),
            i || n.data("bs.collapse", i = new r(this, o)),
            "string" == typeof e && i[e]()
        })
    }
    var r = function (e, n) {
        this.$element = t(e),
        this.options = t.extend({}, r.DEFAULTS, n),
        this.$trigger = t('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'),
        this.transitioning = null,
        this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger),
        this.options.toggle && this.toggle()
    };
    r.VERSION = "3.4.1",
    r.TRANSITION_DURATION = 350,
    r.DEFAULTS = {
        toggle: !0
    },
    r.prototype.dimension = function () {
        var t = this.$element.hasClass("width");
        return t ? "width" : "height"
    },
    r.prototype.show = function () {
        if (!this.transitioning && !this.$element.hasClass("in")) {
            var e,
            i = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
            if (!(i && i.length && (e = i.data("bs.collapse"), e && e.transitioning))) {
                var o = t.Event("show.bs.collapse");
                if (this.$element.trigger(o), !o.isDefaultPrevented()) {
                    i && i.length && (n.call(i, "hide"), e || i.data("bs.collapse", null));
                    var a = this.dimension();
                    this.$element.removeClass("collapse").addClass("collapsing")[a](0).attr("aria-expanded", !0),
                    this.$trigger.removeClass("collapsed").attr("aria-expanded", !0),
                    this.transitioning = 1;
                    var s = function () {
                        this.$element.removeClass("collapsing").addClass("collapse in")[a](""),
                        this.transitioning = 0,
                        this.$element.trigger("shown.bs.collapse")
                    };
                    if (!t.support.transition)
                        return s.call(this);
                    var l = t.camelCase(["scroll", a].join("-"));
                    this.$element.one("bsTransitionEnd", t.proxy(s, this)).emulateTransitionEnd(r.TRANSITION_DURATION)[a](this.$element[0][l])
                }
            }
        }
    },
    r.prototype.hide = function () {
        if (!this.transitioning && this.$element.hasClass("in")) {
            var e = t.Event("hide.bs.collapse");
            if (this.$element.trigger(e), !e.isDefaultPrevented()) {
                var n = this.dimension();
                this.$element[n](this.$element[n]())[0].offsetHeight,
                this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1),
                this.$trigger.addClass("collapsed").attr("aria-expanded", !1),
                this.transitioning = 1;
                var i = function () {
                    this.transitioning = 0,
                    this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
                };
                return t.support.transition ? void this.$element[n](0).one("bsTransitionEnd", t.proxy(i, this)).emulateTransitionEnd(r.TRANSITION_DURATION) : i.call(this)
            }
        }
    },
    r.prototype.toggle = function () {
        this[this.$element.hasClass("in") ? "hide" : "show"]()
    },
    r.prototype.getParent = function () {
        return t(document).find(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(t.proxy(function (n, r) {
                var i = t(r);
                this.addAriaAndCollapsedClass(e(i), i)
            }, this)).end()
    },
    r.prototype.addAriaAndCollapsedClass = function (t, e) {
        var n = t.hasClass("in");
        t.attr("aria-expanded", n),
        e.toggleClass("collapsed", !n).attr("aria-expanded", n)
    };
    var i = t.fn.collapse;
    t.fn.collapse = n,
    t.fn.collapse.Constructor = r,
    t.fn.collapse.noConflict = function () {
        return t.fn.collapse = i,
        this
    },
    t(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function (r) {
        var i = t(this);
        i.attr("data-target") || r.preventDefault();
        var o = e(i),
        a = o.data("bs.collapse"),
        s = a ? "toggle" : i.data();
        n.call(o, s)
    })
}
(jQuery), +function(t) {
    "use strict";
    function e(e) {
        var n = e.attr("data-target");
        n || (n = e.attr("href"), n = n && /#[A-Za-z]/.test(n) && n.replace(/.*(?=#[^\s]*$)/, ""));
        var r = "#" !== n ? t(document).find(n) : null;
        return r && r.length ? r : e.parent()
    }
    function n(n) {
        n && 3 === n.which || (t(i).remove(), t(o).each(function () {
                var r = t(this),
                i = e(r),
                o = {
                    relatedTarget: this
                };
                i.hasClass("open") && (n && "click" == n.type && /input|textarea/i.test(n.target.tagName) && t.contains(i[0], n.target) || (i.trigger(n = t.Event("hide.bs.dropdown", o)), n.isDefaultPrevented() || (r.attr("aria-expanded", "false"), i.removeClass("open").trigger(t.Event("hidden.bs.dropdown", o)))))
            }))
    }
    function r(e) {
        return this.each(function () {
            var n = t(this),
            r = n.data("bs.dropdown");
            r || n.data("bs.dropdown", r = new a(this)),
            "string" == typeof e && r[e].call(n)
        })
    }
    var i = ".dropdown-backdrop",
    o = '[data-toggle="dropdown"]',
    a = function (e) {
        t(e).on("click.bs.dropdown", this.toggle)
    };
    a.VERSION = "3.4.1",
    a.prototype.toggle = function (r) {
        var i = t(this);
        if (!i.is(".disabled, :disabled")) {
            var o = e(i),
            a = o.hasClass("open");
            if (n(), !a) {
                "ontouchstart" in document.documentElement && !o.closest(".navbar-nav").length && t(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(t(this)).on("click", n);
                var s = {
                    relatedTarget: this
                };
                if (o.trigger(r = t.Event("show.bs.dropdown", s)), r.isDefaultPrevented())
                    return;
                i.trigger("focus").attr("aria-expanded", "true"),
                o.toggleClass("open").trigger(t.Event("shown.bs.dropdown", s))
            }
            return !1
        }
    },
    a.prototype.keydown = function (n) {
        if (/(38|40|27|32)/.test(n.which) && !/input|textarea/i.test(n.target.tagName)) {
            var r = t(this);
            if (n.preventDefault(), n.stopPropagation(), !r.is(".disabled, :disabled")) {
                var i = e(r),
                a = i.hasClass("open");
                if (!a && 27 != n.which || a && 27 == n.which)
                    return 27 == n.which && i.find(o).trigger("focus"), r.trigger("click");
                var s = " li:not(.disabled):visible a",
                l = i.find(".dropdown-menu" + s);
                if (l.length) {
                    var u = l.index(n.target);
                    38 == n.which && u > 0 && u--,
                    40 == n.which && u < l.length - 1 && u++,
                    ~u || (u = 0),
                    l.eq(u).trigger("focus")
                }
            }
        }
    };
    var s = t.fn.dropdown;
    t.fn.dropdown = r,
    t.fn.dropdown.Constructor = a,
    t.fn.dropdown.noConflict = function () {
        return t.fn.dropdown = s,
        this
    },
    t(document).on("click.bs.dropdown.data-api", n).on("click.bs.dropdown.data-api", ".dropdown form", function (t) {
        t.stopPropagation()
    }).on("click.bs.dropdown.data-api", o, a.prototype.toggle).on("keydown.bs.dropdown.data-api", o, a.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", a.prototype.keydown)
}
(jQuery), +function(t) {
    "use strict";
    function e(e, r) {
        return this.each(function () {
            var i = t(this),
            o = i.data("bs.modal"),
            a = t.extend({}, n.DEFAULTS, i.data(), "object" == typeof e && e);
            o || i.data("bs.modal", o = new n(this, a)),
            "string" == typeof e ? o[e](r) : a.show && o.show(r)
        })
    }
    var n = function (e, n) {
        this.options = n,
        this.$body = t(document.body),
        this.$element = t(e),
        this.$dialog = this.$element.find(".modal-dialog"),
        this.$backdrop = null,
        this.isShown = null,
        this.originalBodyPad = null,
        this.scrollbarWidth = 0,
        this.ignoreBackdropClick = !1,
        this.fixedContent = ".navbar-fixed-top, .navbar-fixed-bottom",
        this.options.remote && this.$element.find(".modal-content").load(this.options.remote, t.proxy(function () {
                this.$element.trigger("loaded.bs.modal")
            }, this))
    };
    n.VERSION = "3.4.1",
    n.TRANSITION_DURATION = 300,
    n.BACKDROP_TRANSITION_DURATION = 150,
    n.DEFAULTS = {
        backdrop: !0,
        keyboard: !0,
        show: !0
    },
    n.prototype.toggle = function (t) {
        return this.isShown ? this.hide() : this.show(t)
    },
    n.prototype.show = function (e) {
        var r = this,
        i = t.Event("show.bs.modal", {
            relatedTarget: e
        });
        this.$element.trigger(i),
        this.isShown || i.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', t.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", function () {
                r.$element.one("mouseup.dismiss.bs.modal", function (e) {
                    t(e.target).is(r.$element) && (r.ignoreBackdropClick = !0)
                })
            }), this.backdrop(function () {
                var i = t.support.transition && r.$element.hasClass("fade");
                r.$element.parent().length || r.$element.appendTo(r.$body),
                r.$element.show().scrollTop(0),
                r.adjustDialog(),
                i && r.$element[0].offsetWidth,
                r.$element.addClass("in"),
                r.enforceFocus();
                var o = t.Event("shown.bs.modal", {
                    relatedTarget: e
                });
                i ? r.$dialog.one("bsTransitionEnd", function () {
                    r.$element.trigger("focus").trigger(o)
                }).emulateTransitionEnd(n.TRANSITION_DURATION) : r.$element.trigger("focus").trigger(o)
            }))
    },
    n.prototype.hide = function (e) {
        e && e.preventDefault(),
        e = t.Event("hide.bs.modal"),
        this.$element.trigger(e),
        this.isShown && !e.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), t(document).off("focusin.bs.modal"), this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), t.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", t.proxy(this.hideModal, this)).emulateTransitionEnd(n.TRANSITION_DURATION) : this.hideModal())
    },
    n.prototype.enforceFocus = function () {
        t(document).off("focusin.bs.modal").on("focusin.bs.modal", t.proxy(function (t) {
                document === t.target || this.$element[0] === t.target || this.$element.has(t.target).length || this.$element.trigger("focus")
            }, this))
    },
    n.prototype.escape = function () {
        this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", t.proxy(function (t) {
                27 == t.which && this.hide()
            }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
    },
    n.prototype.resize = function () {
        this.isShown ? t(window).on("resize.bs.modal", t.proxy(this.handleUpdate, this)) : t(window).off("resize.bs.modal")
    },
    n.prototype.hideModal = function () {
        var t = this;
        this.$element.hide(),
        this.backdrop(function () {
            t.$body.removeClass("modal-open"),
            t.resetAdjustments(),
            t.resetScrollbar(),
            t.$element.trigger("hidden.bs.modal")
        })
    },
    n.prototype.removeBackdrop = function () {
        this.$backdrop && this.$backdrop.remove(),
        this.$backdrop = null
    },
    n.prototype.backdrop = function (e) {
        var r = this,
        i = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
            var o = t.support.transition && i;
            if (this.$backdrop = t(document.createElement("div")).addClass("modal-backdrop " + i).appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", t.proxy(function (t) {
                        return this.ignoreBackdropClick ? void(this.ignoreBackdropClick = !1) : void(t.target === t.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide()))
                    }, this)), o && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !e)
                return;
            o ? this.$backdrop.one("bsTransitionEnd", e).emulateTransitionEnd(n.BACKDROP_TRANSITION_DURATION) : e()
        } else if (!this.isShown && this.$backdrop) {
            this.$backdrop.removeClass("in");
            var a = function () {
                r.removeBackdrop(),
                e && e()
            };
            t.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", a).emulateTransitionEnd(n.BACKDROP_TRANSITION_DURATION) : a()
        } else
            e && e()
    },
    n.prototype.handleUpdate = function () {
        this.adjustDialog()
    },
    n.prototype.adjustDialog = function () {
        var t = this.$element[0].scrollHeight > document.documentElement.clientHeight;
        this.$element.css({
            paddingLeft: !this.bodyIsOverflowing && t ? this.scrollbarWidth : "",
            paddingRight: this.bodyIsOverflowing && !t ? this.scrollbarWidth : ""
        })
    },
    n.prototype.resetAdjustments = function () {
        this.$element.css({
            paddingLeft: "",
            paddingRight: ""
        })
    },
    n.prototype.checkScrollbar = function () {
        var t = window.innerWidth;
        if (!t) {
            var e = document.documentElement.getBoundingClientRect();
            t = e.right - Math.abs(e.left)
        }
        this.bodyIsOverflowing = document.body.clientWidth < t,
        this.scrollbarWidth = this.measureScrollbar()
    },
    n.prototype.setScrollbar = function () {
        var e = parseInt(this.$body.css("padding-right") || 0, 10);
        this.originalBodyPad = document.body.style.paddingRight || "";
        var n = this.scrollbarWidth;
        this.bodyIsOverflowing && (this.$body.css("padding-right", e + n), t(this.fixedContent).each(function (e, r) {
                var i = r.style.paddingRight,
                o = t(r).css("padding-right");
                t(r).data("padding-right", i).css("padding-right", parseFloat(o) + n + "px")
            }))
    },
    n.prototype.resetScrollbar = function () {
        this.$body.css("padding-right", this.originalBodyPad),
        t(this.fixedContent).each(function (e, n) {
            var r = t(n).data("padding-right");
            t(n).removeData("padding-right"),
            n.style.paddingRight = r ? r : ""
        })
    },
    n.prototype.measureScrollbar = function () {
        var t = document.createElement("div");
        t.className = "modal-scrollbar-measure",
        this.$body.append(t);
        var e = t.offsetWidth - t.clientWidth;
        return this.$body[0].removeChild(t),
        e
    };
    var r = t.fn.modal;
    t.fn.modal = e,
    t.fn.modal.Constructor = n,
    t.fn.modal.noConflict = function () {
        return t.fn.modal = r,
        this
    },
    t(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function (n) {
        var r = t(this),
        i = r.attr("href"),
        o = r.attr("data-target") || i && i.replace(/.*(?=#[^\s]+$)/, ""),
        a = t(document).find(o),
        s = a.data("bs.modal") ? "toggle" : t.extend({
            remote: !/#/.test(i) && i
        }, a.data(), r.data());
        r.is("a") && n.preventDefault(),
        a.one("show.bs.modal", function (t) {
            t.isDefaultPrevented() || a.one("hidden.bs.modal", function () {
                r.is(":visible") && r.trigger("focus")
            })
        }),
        e.call(a, s, this)
    })
}
(jQuery), +function(t) {
    "use strict";
    function e(n, r) {
        this.$body = t(document.body),
        this.$scrollElement = t(t(n).is(document.body) ? window : n),
        this.options = t.extend({}, e.DEFAULTS, r),
        this.selector = (this.options.target || "") + " .nav li > a",
        this.offsets = [],
        this.targets = [],
        this.activeTarget = null,
        this.scrollHeight = 0,
        this.$scrollElement.on("scroll.bs.scrollspy", t.proxy(this.process, this)),
        this.refresh(),
        this.process()
    }
    function n(n) {
        return this.each(function () {
            var r = t(this),
            i = r.data("bs.scrollspy"),
            o = "object" == typeof n && n;
            i || r.data("bs.scrollspy", i = new e(this, o)),
            "string" == typeof n && i[n]()
        })
    }
    e.VERSION = "3.4.1",
    e.DEFAULTS = {
        offset: 10
    },
    e.prototype.getScrollHeight = function () {
        return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
    },
    e.prototype.refresh = function () {
        var e = this,
        n = "offset",
        r = 0;
        this.offsets = [],
        this.targets = [],
        this.scrollHeight = this.getScrollHeight(),
        t.isWindow(this.$scrollElement[0]) || (n = "position", r = this.$scrollElement.scrollTop()),
        this.$body.find(this.selector).map(function () {
            var e = t(this),
            i = e.data("target") || e.attr("href"),
            o = /^#./.test(i) && t(i);
            return o && o.length && o.is(":visible") && [[o[n]().top + r, i]] || null
        }).sort(function (t, e) {
            return t[0] - e[0]
        }).each(function () {
            e.offsets.push(this[0]),
            e.targets.push(this[1])
        })
    },
    e.prototype.process = function () {
        var t,
        e = this.$scrollElement.scrollTop() + this.options.offset,
        n = this.getScrollHeight(),
        r = this.options.offset + n - this.$scrollElement.height(),
        i = this.offsets,
        o = this.targets,
        a = this.activeTarget;
        if (this.scrollHeight != n && this.refresh(), e >= r)
            return a != (t = o[o.length - 1]) && this.activate(t);
        if (a && e < i[0])
            return this.activeTarget = null, this.clear();
        for (t = i.length; t--; )
            a != o[t] && e >= i[t] && (void 0 === i[t + 1] || e < i[t + 1]) && this.activate(o[t])
    },
    e.prototype.activate = function (e) {
        this.activeTarget = e,
        this.clear();
        var n = this.selector + '[data-target="' + e + '"],' + this.selector + '[href="' + e + '"]',
        r = t(n).parents("li").addClass("active");
        r.parent(".dropdown-menu").length && (r = r.closest("li.dropdown").addClass("active")),
        r.trigger("activate.bs.scrollspy")
    },
    e.prototype.clear = function () {
        t(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
    };
    var r = t.fn.scrollspy;
    t.fn.scrollspy = n,
    t.fn.scrollspy.Constructor = e,
    t.fn.scrollspy.noConflict = function () {
        return t.fn.scrollspy = r,
        this
    },
    t(window).on("load.bs.scrollspy.data-api", function () {
        t('[data-spy="scroll"]').each(function () {
            var e = t(this);
            n.call(e, e.data())
        })
    })
}
(jQuery), +function(t) {
    "use strict";
    function e(e) {
        return this.each(function () {
            var r = t(this),
            i = r.data("bs.tab");
            i || r.data("bs.tab", i = new n(this)),
            "string" == typeof e && i[e]()
        })
    }
    var n = function (e) {
        this.element = t(e)
    };
    n.VERSION = "3.4.1",
    n.TRANSITION_DURATION = 150,
    n.prototype.show = function () {
        var e = this.element,
        n = e.closest("ul:not(.dropdown-menu)"),
        r = e.data("target");
        if (r || (r = e.attr("href"), r = r && r.replace(/.*(?=#[^\s]*$)/, "")), !e.parent("li").hasClass("active")) {
            var i = n.find(".active:last a"),
            o = t.Event("hide.bs.tab", {
                relatedTarget: e[0]
            }),
            a = t.Event("show.bs.tab", {
                relatedTarget: i[0]
            });
            if (i.trigger(o), e.trigger(a), !a.isDefaultPrevented() && !o.isDefaultPrevented()) {
                var s = t(document).find(r);
                this.activate(e.closest("li"), n),
                this.activate(s, s.parent(), function () {
                    i.trigger({
                        type: "hidden.bs.tab",
                        relatedTarget: e[0]
                    }),
                    e.trigger({
                        type: "shown.bs.tab",
                        relatedTarget: i[0]
                    })
                })
            }
        }
    },
    n.prototype.activate = function (e, r, i) {
        function o() {
            a.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1),
            e.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0),
            s ? (e[0].offsetWidth, e.addClass("in")) : e.removeClass("fade"),
            e.parent(".dropdown-menu").length && e.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0),
            i && i()
        }
        var a = r.find("> .active"),
        s = i && t.support.transition && (a.length && a.hasClass("fade") || !!r.find("> .fade").length);
        a.length && s ? a.one("bsTransitionEnd", o).emulateTransitionEnd(n.TRANSITION_DURATION) : o(),
        a.removeClass("in")
    };
    var r = t.fn.tab;
    t.fn.tab = e,
    t.fn.tab.Constructor = n,
    t.fn.tab.noConflict = function () {
        return t.fn.tab = r,
        this
    };
    var i = function (n) {
        n.preventDefault(),
        e.call(t(this), "show")
    };
    t(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', i).on("click.bs.tab.data-api", '[data-toggle="pill"]', i)
}
(jQuery), +function(t) {
    "use strict";
    function e() {
        var t = document.createElement("bootstrap"),
        e = {
            WebkitTransition: "webkitTransitionEnd",
            MozTransition: "transitionend",
            OTransition: "oTransitionEnd otransitionend",
            transition: "transitionend"
        };
        for (var n in e)
            if (void 0 !== t.style[n])
                return {
                    end: e[n]
                };
        return !1
    }
    t.fn.emulateTransitionEnd = function (e) {
        var n = !1,
        r = this;
        t(this).one("bsTransitionEnd", function () {
            n = !0
        });
        var i = function () {
            n || t(r).trigger(t.support.transition.end)
        };
        return setTimeout(i, e),
        this
    },
    t(function () {
        t.support.transition = e(),
        t.support.transition && (t.event.special.bsTransitionEnd = {
                bindType: t.support.transition.end,
                delegateType: t.support.transition.end,
                handle: function (e) {
                    if (t(e.target).is(this))
                        return e.handleObj.handler.apply(this, arguments)
                }
            })
    })
}
(jQuery), +function(t) {
    "use strict";
    function e(e, n) {
        var r = e.nodeName.toLowerCase();
        if (t.inArray(r, n) !== -1)
            return t.inArray(r, o) === -1 || Boolean(e.nodeValue.match(l) || e.nodeValue.match(u));
        for (var i = t(n).filter(function (t, e) {
                return e instanceof RegExp
            }), a = 0, s = i.length; a < s; a++)
            if (r.match(i[a]))
                return !0;
        return !1
    }
    function n(n, r, i) {
        if (0 === n.length)
            return n;
        if (i && "function" == typeof i)
            return i(n);
        if (!document.implementation || !document.implementation.createHTMLDocument)
            return n;
        var o = document.implementation.createHTMLDocument("sanitization");
        o.body.innerHTML = n;
        for (var a = t.map(r, function (t, e) {
                return e
            }), s = t(o.body).find("*"), l = 0, u = s.length; l < u; l++) {
            var c = s[l],
            f = c.nodeName.toLowerCase();
            if (t.inArray(f, a) !== -1)
                for (var d = t.map(c.attributes, function (t) {
                        return t
                    }), p = [].concat(r["*"] || [], r[f] || []), h = 0, v = d.length; h < v; h++)
                    e(d[h], p) || c.removeAttribute(d[h].nodeName);
            else
                c.parentNode.removeChild(c)
        }
        return o.body.innerHTML
    }
    function r(e) {
        return this.each(function () {
            var n = t(this),
            r = n.data("bs.tooltip"),
            i = "object" == typeof e && e;
            !r && /destroy|hide/.test(e) || (r || n.data("bs.tooltip", r = new c(this, i)), "string" == typeof e && r[e]())
        })
    }
    var i = ["sanitize", "whiteList", "sanitizeFn"],
    o = ["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"],
    a = /^aria-[\w-]*$/i,
    s = {
        "*": ["class", "dir", "id", "lang", "role", a],
        a: ["target", "href", "title", "rel"],
        area: [],
        b: [],
        br: [],
        col: [],
        code: [],
        div: [],
        em: [],
        hr: [],
        h1: [],
        h2: [],
        h3: [],
        h4: [],
        h5: [],
        h6: [],
        i: [],
        img: ["src", "alt", "title", "width", "height"],
        li: [],
        ol: [],
        p: [],
        pre: [],
        s: [],
        small: [],
        span: [],
        sub: [],
        sup: [],
        strong: [],
        u: [],
        ul: []
    },
    l = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:\/?#]*(?:[\/?#]|$))/gi,
    u = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+\/]+=*$/i,
    c = function (t, e) {
        this.type = null,
        this.options = null,
        this.enabled = null,
        this.timeout = null,
        this.hoverState = null,
        this.$element = null,
        this.inState = null,
        this.init("tooltip", t, e)
    };
    c.VERSION = "3.4.1",
    c.TRANSITION_DURATION = 150,
    c.DEFAULTS = {
        animation: !0,
        placement: "top",
        selector: !1,
        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1,
        viewport: {
            selector: "body",
            padding: 0
        },
        sanitize: !0,
        sanitizeFn: null,
        whiteList: s
    },
    c.prototype.init = function (e, n, r) {
        if (this.enabled = !0, this.type = e, this.$element = t(n), this.options = this.getOptions(r), this.$viewport = this.options.viewport && t(document).find(t.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport), this.inState = {
                click: !1,
                hover: !1,
                focus: !1
            }, this.$element[0]instanceof document.constructor && !this.options.selector)
            throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
        for (var i = this.options.trigger.split(" "), o = i.length; o--; ) {
            var a = i[o];
            if ("click" == a)
                this.$element.on("click." + this.type, this.options.selector, t.proxy(this.toggle, this));
            else if ("manual" != a) {
                var s = "hover" == a ? "mouseenter" : "focusin",
                l = "hover" == a ? "mouseleave" : "focusout";
                this.$element.on(s + "." + this.type, this.options.selector, t.proxy(this.enter, this)),
                this.$element.on(l + "." + this.type, this.options.selector, t.proxy(this.leave, this))
            }
        }
        this.options.selector ? this._options = t.extend({}, this.options, {
            trigger: "manual",
            selector: ""
        }) : this.fixTitle()
    },
    c.prototype.getDefaults = function () {
        return c.DEFAULTS
    },
    c.prototype.getOptions = function (e) {
        var r = this.$element.data();
        for (var o in r)
            r.hasOwnProperty(o) && t.inArray(o, i) !== -1 && delete r[o];
        return e = t.extend({}, this.getDefaults(), r, e),
        e.delay && "number" == typeof e.delay && (e.delay = {
                show: e.delay,
                hide: e.delay
            }),
        e.sanitize && (e.template = n(e.template, e.whiteList, e.sanitizeFn)),
        e
    },
    c.prototype.getDelegateOptions = function () {
        var e = {},
        n = this.getDefaults();
        return this._options && t.each(this._options, function (t, r) {
            n[t] != r && (e[t] = r)
        }),
        e
    },
    c.prototype.enter = function (e) {
        var n = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
        return n || (n = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, n)),
        e instanceof t.Event && (n.inState["focusin" == e.type ? "focus" : "hover"] = !0),
        n.tip().hasClass("in") || "in" == n.hoverState ? void(n.hoverState = "in") : (clearTimeout(n.timeout), n.hoverState = "in", n.options.delay && n.options.delay.show ? void(n.timeout = setTimeout(function () {
                    "in" == n.hoverState && n.show()
                }, n.options.delay.show)) : n.show())
    },
    c.prototype.isInStateTrue = function () {
        for (var t in this.inState)
            if (this.inState[t])
                return !0;
        return !1
    },
    c.prototype.leave = function (e) {
        var n = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
        if (n || (n = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, n)), e instanceof t.Event && (n.inState["focusout" == e.type ? "focus" : "hover"] = !1), !n.isInStateTrue())
            return clearTimeout(n.timeout), n.hoverState = "out", n.options.delay && n.options.delay.hide ? void(n.timeout = setTimeout(function () {
                    "out" == n.hoverState && n.hide()
                }, n.options.delay.hide)) : n.hide()
    },
    c.prototype.show = function () {
        var e = t.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
            this.$element.trigger(e);
            var n = t.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
            if (e.isDefaultPrevented() || !n)
                return;
            var r = this,
            i = this.tip(),
            o = this.getUID(this.type);
            this.setContent(),
            i.attr("id", o),
            this.$element.attr("aria-describedby", o),
            this.options.animation && i.addClass("fade");
            var a = "function" == typeof this.options.placement ? this.options.placement.call(this, i[0], this.$element[0]) : this.options.placement,
            s = /\s?auto?\s?/i,
            l = s.test(a);
            l && (a = a.replace(s, "") || "top"),
            i.detach().css({
                top: 0,
                left: 0,
                display: "block"
            }).addClass(a).data("bs." + this.type, this),
            this.options.container ? i.appendTo(t(document).find(this.options.container)) : i.insertAfter(this.$element),
            this.$element.trigger("inserted.bs." + this.type);
            var u = this.getPosition(),
            f = i[0].offsetWidth,
            d = i[0].offsetHeight;
            if (l) {
                var p = a,
                h = this.getPosition(this.$viewport);
                a = "bottom" == a && u.bottom + d > h.bottom ? "top" : "top" == a && u.top - d < h.top ? "bottom" : "right" == a && u.right + f > h.width ? "left" : "left" == a && u.left - f < h.left ? "right" : a,
                i.removeClass(p).addClass(a)
            }
            var v = this.getCalculatedOffset(a, u, f, d);
            this.applyPlacement(v, a);
            var m = function () {
                var t = r.hoverState;
                r.$element.trigger("shown.bs." + r.type),
                r.hoverState = null,
                "out" == t && r.leave(r)
            };
            t.support.transition && this.$tip.hasClass("fade") ? i.one("bsTransitionEnd", m).emulateTransitionEnd(c.TRANSITION_DURATION) : m()
        }
    },
    c.prototype.applyPlacement = function (e, n) {
        var r = this.tip(),
        i = r[0].offsetWidth,
        o = r[0].offsetHeight,
        a = parseInt(r.css("margin-top"), 10),
        s = parseInt(r.css("margin-left"), 10);
        isNaN(a) && (a = 0),
        isNaN(s) && (s = 0),
        e.top += a,
        e.left += s,
        t.offset.setOffset(r[0], t.extend({
                using: function (t) {
                    r.css({
                        top: Math.round(t.top),
                        left: Math.round(t.left)
                    })
                }
            }, e), 0),
        r.addClass("in");
        var l = r[0].offsetWidth,
        u = r[0].offsetHeight;
        "top" == n && u != o && (e.top = e.top + o - u);
        var c = this.getViewportAdjustedDelta(n, e, l, u);
        c.left ? e.left += c.left : e.top += c.top;
        var f = /top|bottom/.test(n),
        d = f ? 2 * c.left - i + l : 2 * c.top - o + u,
        p = f ? "offsetWidth" : "offsetHeight";
        r.offset(e),
        this.replaceArrow(d, r[0][p], f)
    },
    c.prototype.replaceArrow = function (t, e, n) {
        this.arrow().css(n ? "left" : "top", 50 * (1 - t / e) + "%").css(n ? "top" : "left", "")
    },
    c.prototype.setContent = function () {
        var t = this.tip(),
        e = this.getTitle();
        this.options.html ? (this.options.sanitize && (e = n(e, this.options.whiteList, this.options.sanitizeFn)), t.find(".tooltip-inner").html(e)) : t.find(".tooltip-inner").text(e),
        t.removeClass("fade in top bottom left right")
    },
    c.prototype.hide = function (e) {
        function n() {
            "in" != r.hoverState && i.detach(),
            r.$element && r.$element.removeAttr("aria-describedby").trigger("hidden.bs." + r.type),
            e && e()
        }
        var r = this,
        i = t(this.$tip),
        o = t.Event("hide.bs." + this.type);
        if (this.$element.trigger(o), !o.isDefaultPrevented())
            return i.removeClass("in"), t.support.transition && i.hasClass("fade") ? i.one("bsTransitionEnd", n).emulateTransitionEnd(c.TRANSITION_DURATION) : n(), this.hoverState = null, this
    },
    c.prototype.fixTitle = function () {
        var t = this.$element;
        (t.attr("title") || "string" != typeof t.attr("data-original-title")) && t.attr("data-original-title", t.attr("title") || "").attr("title", "")
    },
    c.prototype.hasContent = function () {
        return this.getTitle()
    },
    c.prototype.getPosition = function (e) {
        e = e || this.$element;
        var n = e[0],
        r = "BODY" == n.tagName,
        i = n.getBoundingClientRect();
        null == i.width && (i = t.extend({}, i, {
                width: i.right - i.left,
                height: i.bottom - i.top
            }));
        var o = window.SVGElement && n instanceof window.SVGElement,
        a = r ? {
            top: 0,
            left: 0
        }
         : o ? null : e.offset(),
        s = {
            scroll: r ? document.documentElement.scrollTop || document.body.scrollTop : e.scrollTop()
        },
        l = r ? {
            width: t(window).width(),
            height: t(window).height()
        }
         : null;
        return t.extend({}, i, s, l, a)
    },
    c.prototype.getCalculatedOffset = function (t, e, n, r) {
        return "bottom" == t ? {
            top: e.top + e.height,
            left: e.left + e.width / 2 - n / 2
        }
         : "top" == t ? {
            top: e.top - r,
            left: e.left + e.width / 2 - n / 2
        }
         : "left" == t ? {
            top: e.top + e.height / 2 - r / 2,
            left: e.left - n
        }
         : {
            top: e.top + e.height / 2 - r / 2,
            left: e.left + e.width
        }
    },
    c.prototype.getViewportAdjustedDelta = function (t, e, n, r) {
        var i = {
            top: 0,
            left: 0
        };
        if (!this.$viewport)
            return i;
        var o = this.options.viewport && this.options.viewport.padding || 0,
        a = this.getPosition(this.$viewport);
        if (/right|left/.test(t)) {
            var s = e.top - o - a.scroll,
            l = e.top + o - a.scroll + r;
            s < a.top ? i.top = a.top - s : l > a.top + a.height && (i.top = a.top + a.height - l)
        } else {
            var u = e.left - o,
            c = e.left + o + n;
            u < a.left ? i.left = a.left - u : c > a.right && (i.left = a.left + a.width - c)
        }
        return i
    },
    c.prototype.getTitle = function () {
        var t,
        e = this.$element,
        n = this.options;
        return t = e.attr("data-original-title") || ("function" == typeof n.title ? n.title.call(e[0]) : n.title)
    },
    c.prototype.getUID = function (t) {
        do
            t += ~~(1e6 * Math.random());
        while (document.getElementById(t));
        return t
    },
    c.prototype.tip = function () {
        if (!this.$tip && (this.$tip = t(this.options.template), 1 != this.$tip.length))
            throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!");
        return this.$tip
    },
    c.prototype.arrow = function () {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
    },
    c.prototype.enable = function () {
        this.enabled = !0
    },
    c.prototype.disable = function () {
        this.enabled = !1
    },
    c.prototype.toggleEnabled = function () {
        this.enabled = !this.enabled
    },
    c.prototype.toggle = function (e) {
        var n = this;
        e && (n = t(e.currentTarget).data("bs." + this.type), n || (n = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, n))),
        e ? (n.inState.click = !n.inState.click, n.isInStateTrue() ? n.enter(n) : n.leave(n)) : n.tip().hasClass("in") ? n.leave(n) : n.enter(n)
    },
    c.prototype.destroy = function () {
        var t = this;
        clearTimeout(this.timeout),
        this.hide(function () {
            t.$element.off("." + t.type).removeData("bs." + t.type),
            t.$tip && t.$tip.detach(),
            t.$tip = null,
            t.$arrow = null,
            t.$viewport = null,
            t.$element = null
        })
    },
    c.prototype.sanitizeHtml = function (t) {
        return n(t, this.options.whiteList, this.options.sanitizeFn)
    };
    var f = t.fn.tooltip;
    t.fn.tooltip = r,
    t.fn.tooltip.Constructor = c,
    t.fn.tooltip.noConflict = function () {
        return t.fn.tooltip = f,
        this
    }
}
(jQuery), +function(t) {
    "use strict";
    function e(e) {
        return this.each(function () {
            var r = t(this),
            i = r.data("bs.popover"),
            o = "object" == typeof e && e;
            !i && /destroy|hide/.test(e) || (i || r.data("bs.popover", i = new n(this, o)), "string" == typeof e && i[e]())
        })
    }
    var n = function (t, e) {
        this.init("popover", t, e)
    };
    if (!t.fn.tooltip)
        throw new Error("Popover requires tooltip.js");
    n.VERSION = "3.4.1",
    n.DEFAULTS = t.extend({}, t.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    }),
    n.prototype = t.extend({}, t.fn.tooltip.Constructor.prototype),
    n.prototype.constructor = n,
    n.prototype.getDefaults = function () {
        return n.DEFAULTS
    },
    n.prototype.setContent = function () {
        var t = this.tip(),
        e = this.getTitle(),
        n = this.getContent();
        if (this.options.html) {
            var r = typeof n;
            this.options.sanitize && (e = this.sanitizeHtml(e), "string" === r && (n = this.sanitizeHtml(n))),
            t.find(".popover-title").html(e),
            t.find(".popover-content").children().detach().end()["string" === r ? "html" : "append"](n)
        } else
            t.find(".popover-title").text(e), t.find(".popover-content").children().detach().end().text(n);
        t.removeClass("fade top bottom left right in"),
        t.find(".popover-title").html() || t.find(".popover-title").hide()
    },
    n.prototype.hasContent = function () {
        return this.getTitle() || this.getContent()
    },
    n.prototype.getContent = function () {
        var t = this.$element,
        e = this.options;
        return t.attr("data-content") || ("function" == typeof e.content ? e.content.call(t[0]) : e.content)
    },
    n.prototype.arrow = function () {
        return this.$arrow = this.$arrow || this.tip().find(".arrow")
    };
    var r = t.fn.popover;
    t.fn.popover = e,
    t.fn.popover.Constructor = n,
    t.fn.popover.noConflict = function () {
        return t.fn.popover = r,
        this
    }
}
(jQuery), function (t) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], t) : "undefined" != typeof module && module.exports ? module.exports = t(require("jquery")) : t(jQuery)
}
(function (t) {
    "use strict";
    function e(e) {
        return !e.nodeName || t.inArray(e.nodeName.toLowerCase(), ["iframe", "#document", "html", "body"]) !== -1
    }
    function n(e) {
        return t.isFunction(e) || t.isPlainObject(e) ? e : {
            top: e,
            left: e
        }
    }
    var r = t.scrollTo = function (e, n, r) {
        return t(window).scrollTo(e, n, r)
    };
    return r.defaults = {
        axis: "xy",
        duration: 0,
        limit: !0
    },
    t.fn.scrollTo = function (i, o, a) {
        "object" == typeof o && (a = o, o = 0),
        "function" == typeof a && (a = {
                onAfter: a
            }),
        "max" === i && (i = 9e9),
        a = t.extend({}, r.defaults, a),
        o = o || a.duration;
        var s = a.queue && a.axis.length > 1;
        return s && (o /= 2),
        a.offset = n(a.offset),
        a.over = n(a.over),
        this.each(function () {
            function l(e) {
                var n = t.extend({}, a, {
                    queue: !0,
                    duration: o,
                    complete: e && function () {
                        e.call(f, p, a)
                    }
                });
                d.animate(h, n)
            }
            if (null !== i) {
                var u,
                c = e(this),
                f = c ? this.contentWindow || window : this,
                d = t(f),
                p = i,
                h = {};
                switch (typeof p) {
                case "number":
                case "string":
                    if (/^([+-]=?)?\d+(\.\d+)?(px|%)?$/.test(p)) {
                        p = n(p);
                        break
                    }
                    p = c ? t(p) : t(p, f);
                case "object":
                    if (0 === p.length)
                        return;
                    (p.is || p.style) && (u = (p = t(p)).offset())
                }
                var v = t.isFunction(a.offset) && a.offset(f, p) || a.offset;
                t.each(a.axis.split(""), function (t, e) {
                    var n = "x" === e ? "Left" : "Top",
                    i = n.toLowerCase(),
                    o = "scroll" + n,
                    m = d[o](),
                    g = r.max(f, e);
                    if (u)
                        h[o] = u[i] + (c ? 0 : m - d.offset()[i]), a.margin && (h[o] -= parseInt(p.css("margin" + n), 10) || 0, h[o] -= parseInt(p.css("border" + n + "Width"), 10) || 0), h[o] += v[i] || 0, a.over[i] && (h[o] += p["x" === e ? "width" : "height"]() * a.over[i]);
                    else {
                        var y = p[i];
                        h[o] = y.slice && "%" === y.slice(-1) ? parseFloat(y) / 100 * g : y
                    }
                    a.limit && /^\d+$/.test(h[o]) && (h[o] = h[o] <= 0 ? 0 : Math.min(h[o], g)),
                    !t && a.axis.length > 1 && (m === h[o] ? h = {}
                         : s && (l(a.onAfterFirst), h = {}))
                }),
                l(a.onAfter)
            }
        })
    },
    r.max = function (n, r) {
        var i = "x" === r ? "Width" : "Height",
        o = "scroll" + i;
        if (!e(n))
            return n[o] - t(n)[i.toLowerCase()]();
        var a = "client" + i,
        s = n.ownerDocument || n.document,
        l = s.documentElement,
        u = s.body;
        return Math.max(l[o], u[o]) - Math.min(l[a], u[a])
    },
    t.Tween.propHooks.scrollLeft = t.Tween.propHooks.scrollTop = {
        get: function (e) {
            return t(e.elem)[e.prop]()
        },
        set: function (e) {
            var n = this.get(e);
            if (e.options.interrupt && e._last && e._last !== n)
                return t(e.elem).stop();
            var r = Math.round(e.now);
            n !== r && (t(e.elem)[e.prop](r), e._last = this.get(e))
        }
    },
    r
}), function () {
    function t(t, e) {
        return t.set(e[0], e[1]),
        t
    }
    function e(t, e) {
        return t.add(e),
        t
    }
    function n(t, e, n) {
        var r = n ? n.length : 0;
        switch (r) {
        case 0:
            return t.call(e);
        case 1:
            return t.call(e, n[0]);
        case 2:
            return t.call(e, n[0], n[1]);
        case 3:
            return t.call(e, n[0], n[1], n[2])
        }
        return t.apply(e, n)
    }
    function r(t, e) {
        for (var n = -1, r = t.length, i = -1, o = e.length, a = Array(r + o); ++n < r; )
            a[n] = t[n];
        for (; ++i < o; )
            a[n++] = e[i];
        return a
    }
    function i(t, e) {
        for (var n = -1, r = t.length; ++n < r && e(t[n], n, t) !== !1; );
        return t
    }
    function o(t, e) {
        for (var n = t.length; n-- && e(t[n], n, t) !== !1; );
        return t
    }
    function a(t, e) {
        for (var n = -1, r = t.length; ++n < r; )
            if (!e(t[n], n, t))
                return !1;
        return !0
    }
    function s(t, e) {
        for (var n = -1, r = t.length, i = -1, o = []; ++n < r; ) {
            var a = t[n];
            e(a, n, t) && (o[++i] = a)
        }
        return o
    }
    function l(t, e) {
        return !!t.length && y(t, e, 0) > -1
    }
    function u(t, e, n) {
        for (var r = -1, i = t.length; ++r < i; )
            if (n(e, t[r]))
                return !0;
        return !1
    }
    function c(t, e) {
        for (var n = -1, r = t.length, i = Array(r); ++n < r; )
            i[n] = e(t[n], n, t);
        return i
    }
    function f(t, e) {
        for (var n = -1, r = e.length, i = t.length; ++n < r; )
            t[i + n] = e[n];
        return t
    }
    function d(t, e, n, r) {
        var i = -1,
        o = t.length;
        for (r && o && (n = t[++i]); ++i < o; )
            n = e(n, t[i], i, t);
        return n
    }
    function p(t, e, n, r) {
        var i = t.length;
        for (r && i && (n = t[--i]); i--; )
            n = e(n, t[i], i, t);
        return n
    }
    function h(t, e) {
        for (var n = -1, r = t.length; ++n < r; )
            if (e(t[n], n, t))
                return !0;
        return !1
    }
    function v(t, e, n) {
        for (var r = -1, i = t.length; ++r < i; ) {
            var o = t[r],
            a = e(o);
            if (null != a && (s === U ? a === a : n(a, s)))
                var s = a, l = o
        }
        return l
    }
    function m(t, e, n, r) {
        var i;
        return n(t, function (t, n, o) {
            if (e(t, n, o))
                return i = r ? n : t, !1
        }),
        i
    }
    function g(t, e, n) {
        for (var r = t.length, i = n ? r : -1; n ? i-- : ++i < r; )
            if (e(t[i], i, t))
                return i;
        return -1
    }
    function y(t, e, n) {
        if (e !== e)
            return I(t, n);
        for (var r = n - 1, i = t.length; ++r < i; )
            if (t[r] === e)
                return r;
        return -1
    }
    function b(t, e, n, r, i) {
        return i(t, function (t, i, o) {
            n = r ? (r = !1, t) : e(n, t, i, o)
        }),
        n
    }
    function _(t, e) {
        var n = t.length;
        for (t.sort(e); n--; )
            t[n] = t[n].value;
        return t
    }
    function x(t, e) {
        for (var n, r = -1, i = t.length; ++r < i; ) {
            var o = e(t[r]);
            o !== U && (n = n === U ? o : n + o)
        }
        return n
    }
    function w(t, e) {
        for (var n = -1, r = Array(t); ++n < t; )
            r[n] = e(n);
        return r
    }
    function C(t, e) {
        return c(e, function (e) {
            return [e, t[e]]
        })
    }
    function T(t) {
        return function (e) {
            return t(e)
        }
    }
    function $(t, e) {
        return c(e, function (e) {
            return t[e]
        })
    }
    function k(t, e) {
        for (var n = -1, r = t.length; ++n < r && y(e, t[n], 0) > -1; );
        return n
    }
    function E(t, e) {
        for (var n = t.length; n-- && y(e, t[n], 0) > -1; );
        return n
    }
    function S(t) {
        return t && t.Object === Object ? t : null
    }
    function A(t, e) {
        if (t !== e) {
            var n = null === t,
            r = t === U,
            i = t === t,
            o = null === e,
            a = e === U,
            s = e === e;
            if (t > e && !o || !i || n && !a && s || r && s)
                return 1;
            if (t < e && !n || !s || o && !r && i || a && i)
                return -1
        }
        return 0
    }
    function N(t, e, n) {
        for (var r = -1, i = t.criteria, o = e.criteria, a = i.length, s = n.length; ++r < a; ) {
            var l = A(i[r], o[r]);
            if (l) {
                if (r >= s)
                    return l;
                var u = n[r];
                return l * ("desc" == u ? -1 : 1)
            }
        }
        return t.index - e.index
    }
    function j(t) {
        return vn[t]
    }
    function R(t) {
        return mn[t]
    }
    function D(t) {
        return "\\" + bn[t]
    }
    function I(t, e, n) {
        for (var r = t.length, i = e + (n ? 0 : -1); n ? i-- : ++i < r; ) {
            var o = t[i];
            if (o !== o)
                return i
        }
        return -1
    }
    function L(t) {
        var e = !1;
        if (null != t && "function" != typeof t.toString)
            try {
                e = !!(t + "")
            } catch (t) {}
        return e
    }
    function O(t, e) {
        return t = "number" == typeof t || _e.test(t) ? +t : -1,
        e = null == e ? mt : e,
        t > -1 && t % 1 == 0 && t < e
    }
    function H(t) {
        for (var e, n = []; !(e = t.next()).done; )
            n.push(e.value);
        return n
    }
    function P(t) {
        var e = -1,
        n = Array(t.size);
        return t.forEach(function (t, r) {
            n[++e] = [r, t]
        }),
        n
    }
    function F(t, e) {
        for (var n = -1, r = t.length, i = -1, o = []; ++n < r; )
            t[n] === e && (t[n] = wt, o[++i] = n);
        return o
    }
    function W(t) {
        var e = -1,
        n = Array(t.size);
        return t.forEach(function (t) {
            n[++e] = t
        }),
        n
    }
    function M(t) {
        if (!t || !sn.test(t))
            return t.length;
        for (var e = an.lastIndex = 0; an.test(t); )
            e++;
        return e
    }
    function z(t) {
        return t.match(an)
    }
    function q(t) {
        return gn[t]
    }
    function B(S) {
        function Ht(t) {
            if (Ca(t) && !tc(t) && !(t instanceof $e)) {
                if (t instanceof Te)
                    return t;
                if ($l.call(t, "__wrapped__"))
                    return xi(t)
            }
            return new Te(t)
        }
        function _e() {}
        function Te(t, e) {
            this.__wrapped__ = t,
            this.__actions__ = [],
            this.__chain__ = !!e,
            this.__index__ = 0,
            this.__values__ = U
        }
        function $e(t) {
            this.__wrapped__ = t,
            this.__actions__ = [],
            this.__dir__ = 1,
            this.__filtered__ = !1,
            this.__iteratees__ = [],
            this.__takeCount__ = bt,
            this.__views__ = []
        }
        function ke() {
            var t = new $e(this.__wrapped__);
            return t.__actions__ = kr(this.__actions__),
            t.__dir__ = this.__dir__,
            t.__filtered__ = this.__filtered__,
            t.__iteratees__ = kr(this.__iteratees__),
            t.__takeCount__ = this.__takeCount__,
            t.__views__ = kr(this.__views__),
            t
        }
        function Ee() {
            if (this.__filtered__) {
                var t = new $e(this);
                t.__dir__ = -1,
                t.__filtered__ = !0
            } else
                t = this.clone(), t.__dir__ *= -1;
            return t
        }
        function Se() {
            var t = this.__wrapped__.value(),
            e = this.__dir__,
            n = tc(t),
            r = e < 0,
            i = n ? t.length : 0,
            o = ni(0, i, this.__views__),
            a = o.start,
            s = o.end,
            l = s - a,
            u = r ? s : a - 1,
            c = this.__iteratees__,
            f = c.length,
            d = 0,
            p = Vl(l, this.__takeCount__);
            if (!n || i < ut || i == l && p == l)
                return mr(t, this.__actions__);
            var h = [];
            t: for (; l-- && d < p; ) {
                u += e;
                for (var v = -1, m = t[u]; ++v < f; ) {
                    var g = c[v],
                    y = g.iteratee,
                    b = g.type,
                    _ = y(m);
                    if (b == ft)
                        m = _;
                    else if (!_) {
                        if (b == ct)
                            continue t;
                        break t
                    }
                }
                h[d++] = m
            }
            return h
        }
        function Ae() {}
        function Ne(t, e) {
            return Re(t, e) && delete t[e]
        }
        function je(t, e) {
            if (eu) {
                var n = t[e];
                return n === ht ? U : n
            }
            return $l.call(t, e) ? t[e] : U
        }
        function Re(t, e) {
            return eu ? t[e] !== U : $l.call(t, e)
        }
        function De(t, e, n) {
            t[e] = eu && n === U ? ht : n
        }
        function Ie(t) {
            var e = -1,
            n = t ? t.length : 0;
            for (this.clear(); ++e < n; ) {
                var r = t[e];
                this.set(r[0], r[1])
            }
        }
        function Le() {
            this.__data__ = {
                hash: new Ae,
                map: Jl ? new Jl : [],
                string: new Ae
            }
        }
        function Oe(t) {
            var e = this.__data__;
            return ci(t) ? Ne("string" == typeof t ? e.string : e.hash, t) : Jl ? e.map["delete"](t) : Ge(e.map, t)
        }
        function He(t) {
            var e = this.__data__;
            return ci(t) ? je("string" == typeof t ? e.string : e.hash, t) : Jl ? e.map.get(t) : Qe(e.map, t)
        }
        function Pe(t) {
            var e = this.__data__;
            return ci(t) ? Re("string" == typeof t ? e.string : e.hash, t) : Jl ? e.map.has(t) : Ye(e.map, t)
        }
        function Fe(t, e) {
            var n = this.__data__;
            return ci(t) ? De("string" == typeof t ? n.string : n.hash, t, e) : Jl ? n.map.set(t, e) : Ze(n.map, t, e),
            this
        }
        function We(t) {
            var e = -1,
            n = t ? t.length : 0;
            for (this.__data__ = new Ie; ++e < n; )
                this.push(t[e])
        }
        function Me(t, e) {
            var n = t.__data__;
            if (ci(e)) {
                var r = n.__data__,
                i = "string" == typeof e ? r.string : r.hash;
                return i[e] === ht
            }
            return n.has(e)
        }
        function ze(t) {
            var e = this.__data__;
            if (ci(t)) {
                var n = e.__data__,
                r = "string" == typeof t ? n.string : n.hash;
                r[t] = ht
            } else
                e.set(t, ht)
        }
        function qe(t) {
            var e = -1,
            n = t ? t.length : 0;
            for (this.clear(); ++e < n; ) {
                var r = t[e];
                this.set(r[0], r[1])
            }
        }
        function Be() {
            this.__data__ = {
                array: [],
                map: null
            }
        }
        function Ue(t) {
            var e = this.__data__,
            n = e.array;
            return n ? Ge(n, t) : e.map["delete"](t)
        }
        function Ke(t) {
            var e = this.__data__,
            n = e.array;
            return n ? Qe(n, t) : e.map.get(t)
        }
        function Xe(t) {
            var e = this.__data__,
            n = e.array;
            return n ? Ye(n, t) : e.map.has(t)
        }
        function Ve(t, e) {
            var n = this.__data__,
            r = n.array;
            r && (r.length < ut - 1 ? Ze(r, t, e) : (n.array = null, n.map = new Ie(r)));
            var i = n.map;
            return i && i.set(t, e),
            this
        }
        function Ge(t, e) {
            var n = Je(t, e);
            if (n < 0)
                return !1;
            var r = t.length - 1;
            return n == r ? t.pop() : Ml.call(t, n, 1),
            !0
        }
        function Qe(t, e) {
            var n = Je(t, e);
            return n < 0 ? U : t[n][1]
        }
        function Ye(t, e) {
            return Je(t, e) > -1
        }
        function Je(t, e) {
            for (var n = t.length; n--; )
                if (oa(t[n][0], e))
                    return n;
            return -1
        }
        function Ze(t, e, n) {
            var r = Je(t, e);
            r < 0 ? t.push([e, n]) : t[r][1] = n
        }
        function tn(t, e, n, r) {
            return t === U || oa(t, Cl[n]) && !$l.call(r, n) ? e : t
        }
        function en(t, e, n) {
            (n === U || oa(t[e], n)) && ("number" != typeof e || n !== U || e in t) || (t[e] = n)
        }
        function nn(t, e, n) {
            var r = t[e];
            oa(r, n) && (!oa(r, Cl[e]) || $l.call(t, e)) && (n !== U || e in t) || (t[e] = n)
        }
        function rn(t, e) {
            return t && Er(e, as(e), t)
        }
        function an(t, e) {
            for (var n = -1, r = null == t, i = e.length, o = Array(i); ++n < i; )
                o[n] = r ? U : ns(t, e[n]);
            return o
        }
        function vn(t, e, n) {
            return t === t && (n !== U && (t = t <= n ? t : n), e !== U && (t = t >= e ? t : e)),
            t
        }
        function mn(t, e, n, r, o, a) {
            var s;
            if (n && (s = o ? n(t, r, o, a) : n(t)), s !== U)
                return s;
            if (!wa(t))
                return t;
            var l = tc(t);
            if (l) {
                if (s = ii(t), !e)
                    return kr(t, s)
            } else {
                var u = ei(t),
                c = u == St || u == At;
                if (u != Rt && u != Ct && (!c || o))
                    return hn[u] ? ai(t, u, e) : o ? t : {};
                if (L(t))
                    return o ? t : {};
                if (s = oi(c ? {}
                             : t), !e)
                    return Ar(t, rn(s, t))
            }
            a || (a = new qe);
            var f = a.get(t);
            return f ? f : (a.set(t, s), (l ? i : En)(t, function (r, i) {
                    nn(s, i, mn(r, e, n, i, t, a))
                }), l ? s : Ar(t, s))
        }
        function gn(t) {
            var e = as(t),
            n = e.length;
            return function (r) {
                if (null == r)
                    return !n;
                for (var i = n; i--; ) {
                    var o = e[i],
                    a = t[o],
                    s = r[o];
                    if (s === U && !(o in Object(r)) || !a(s))
                        return !1
                }
                return !0
            }
        }
        function yn(t, e, n) {
            if ("function" != typeof t)
                throw new xl(pt);
            return Wl(function () {
                t.apply(U, n)
            }, e)
        }
        function bn(t, e, n, r) {
            var i = -1,
            o = l,
            a = !0,
            s = t.length,
            f = [],
            d = e.length;
            if (!s)
                return f;
            n && (e = c(e, T(n))),
            r ? (o = u, a = !1) : e.length >= ut && (o = Me, a = !1, e = new We(e));
            t: for (; ++i < s; ) {
                var p = t[i],
                h = n ? n(p) : p;
                if (a && h === h) {
                    for (var v = d; v--; )
                        if (e[v] === h)
                            continue t;
                    f.push(p)
                } else
                    o(e, h, r) || f.push(p)
            }
            return f
        }
        function wn(t, e) {
            var n = !0;
            return cu(t, function (t, r, i) {
                return n = !!e(t, r, i)
            }),
            n
        }
        function Cn(t, e, n, r) {
            var i = t.length;
            for (n = Ma(n), n < 0 && (n = -n > i ? 0 : i + n), r = r === U || r > i ? i : Ma(r), r < 0 && (r += i), r = n > r ? 0 : za(r); n < r; )
                t[n++] = e;
            return t
        }
        function Tn(t, e) {
            var n = [];
            return cu(t, function (t, r, i) {
                e(t, r, i) && n.push(t)
            }),
            n
        }
        function $n(t, e, n, r) {
            r || (r = []);
            for (var i = -1, o = t.length; ++i < o; ) {
                var a = t[i];
                ca(a) && (n || tc(a) || la(a)) ? e ? $n(a, e, n, r) : f(r, a) : n || (r[r.length] = a)
            }
            return r
        }
        function kn(t, e) {
            return null == t ? t : du(t, e, ss)
        }
        function En(t, e) {
            return t && du(t, e, as)
        }
        function Sn(t, e) {
            return t && pu(t, e, as)
        }
        function jn(t, e) {
            return s(e, function (e) {
                return ba(t[e])
            })
        }
        function Rn(t, e) {
            e = ui(e, t) ? [e + ""] : dr(e);
            for (var n = 0, r = e.length; null != t && n < r; )
                t = t[e[n++]];
            return n && n == r ? t : U
        }
        function Dn(t, e) {
            return $l.call(t, e) || "object" == typeof t && e in t && null === Ol(t)
        }
        function In(t, e) {
            return e in Object(t)
        }
        function Ln(t, e, n) {
            return t >= Vl(e, n) && t < Xl(e, n)
        }
        function On(t, e, n) {
            for (var r = n ? u : l, i = t.length, o = i, a = Array(i), s = []; o--; ) {
                var f = t[o];
                o && e && (f = c(f, T(e))),
                a[o] = !n && (e || f.length >= 120) ? new We(o && f) : U
            }
            f = t[0];
            var d = -1,
            p = f.length,
            h = a[0];
            t: for (; ++d < p; ) {
                var v = f[d],
                m = e ? e(v) : v;
                if (!(h ? Me(h, m) : r(s, m, n))) {
                    for (var o = i; --o; ) {
                        var g = a[o];
                        if (!(g ? Me(g, m) : r(t[o], m, n)))
                            continue t
                    }
                    h && h.push(m),
                    s.push(v)
                }
            }
            return s
        }
        function Hn(t, e, r) {
            ui(e, t) || (e = dr(e), t = mi(t, e), e = Fi(e));
            var i = null == t ? t : t[e];
            return null == i ? U : n(i, t, r)
        }
        function Pn(t, e, n, r, i) {
            return t === e || (null == t || null == e || !wa(t) && !Ca(e) ? t !== t && e !== e : Fn(t, e, Pn, n, r, i))
        }
        function Fn(t, e, n, r, i, o) {
            var a = tc(t),
            s = tc(e),
            l = Tt,
            u = Tt;
            a || (l = ei(t), l == Ct ? l = Rt : l != Rt && (a = Oa(t))),
            s || (u = ei(e), u == Ct ? u = Rt : u != Rt && (s = Oa(e)));
            var c = l == Rt && !L(t),
            f = u == Rt && !L(e),
            d = l == u;
            if (d && !a && !c)
                return Gr(t, e, l, n, r, i);
            var p = i & it;
            if (!p) {
                var h = c && $l.call(t, "__wrapped__"),
                v = f && $l.call(e, "__wrapped__");
                if (h || v)
                    return n(h ? t.value() : t, v ? e.value() : e, r, i, o)
            }
            return !!d && (o || (o = new qe), (a ? Vr : Qr)(t, e, n, r, i, o))
        }
        function Wn(t, e, n, r) {
            var i = n.length,
            o = i,
            a = !r;
            if (null == t)
                return !o;
            for (t = Object(t); i--; ) {
                var s = n[i];
                if (a && s[2] ? s[1] !== t[s[0]] : !(s[0]in t))
                    return !1
            }
            for (; ++i < o; ) {
                s = n[i];
                var l = s[0],
                u = t[l],
                c = s[1];
                if (a && s[2]) {
                    if (u === U && !(l in t))
                        return !1
                } else {
                    var f = new qe,
                    d = r ? r(u, c, l, t, e, f) : U;
                    if (!(d === U ? Pn(c, u, r, rt | it, f) : d))
                        return !1
                }
            }
            return !0
        }
        function Mn(t) {
            var e = typeof t;
            return "function" == e ? t : null == t ? Gs : "object" == e ? tc(t) ? Kn(t[0], t[1]) : Un(t) : rl(t)
        }
        function zn(t) {
            return Kl(Object(t))
        }
        function qn(t) {
            t = null == t ? t : Object(t);
            var e = [];
            for (var n in t)
                e.push(n);
            return e
        }
        function Bn(t, e) {
            var n = -1,
            r = ua(t) ? Array(t.length) : [];
            return cu(t, function (t, i, o) {
                r[++n] = e(t, i, o)
            }),
            r
        }
        function Un(t) {
            var e = Zr(t);
            if (1 == e.length && e[0][2]) {
                var n = e[0][0],
                r = e[0][1];
                return function (t) {
                    return null != t && (t[n] === r && (r !== U || n in Object(t)))
                }
            }
            return function (n) {
                return n === t || Wn(n, t, e)
            }
        }
        function Kn(t, e) {
            return function (n) {
                var r = ns(n, t);
                return r === U && r === e ? is(n, t) : Pn(e, r, U, rt | it)
            }
        }
        function Xn(t, e, n, r, o) {
            if (t !== e) {
                var a = tc(e) || Oa(e) ? U : ss(e);
                i(a || e, function (i, s) {
                    if (a && (s = i, i = e[s]),
                        wa(i))
                        o || (o = new qe), Vn(t, e, s, n, Xn, r, o);
                    else {
                        var l = r ? r(t[s], i, s + "", t, e, o) : U;
                        l === U && (l = i),
                        en(t, s, l)
                    }
                })
            }
        }
        function Vn(t, e, n, r, i, o, a) {
            var s = t[n],
            l = e[n],
            u = a.get(l) || a.get(s);
            if (u)
                return void en(t, n, u);
            var c = o ? o(s, l, n + "", t, e, a) : U,
            f = c === U;
            f && (c = l, tc(l) || Oa(l) ? c = tc(s) ? r ? kr(s) : s : ca(s) ? kr(s) : mn(l) : ja(l) || la(l) ? c = la(s) ? Ba(s) : !wa(s) || r && ba(s) ? mn(l) : r ? mn(s) : s : f = !1),
            a.set(l, c),
            f && i(c, l, r, o, a),
            en(t, n, c)
        }
        function Gn(t, e, n) {
            var r = -1,
            i = Jr();
            e = c(e.length ? e : Array(1), function (t) {
                return i(t)
            });
            var o = Bn(t, function (t) {
                var n = c(e, function (e) {
                    return e(t)
                });
                return {
                    criteria: n,
                    index: ++r,
                    value: t
                }
            });
            return _(o, function (t, e) {
                return N(t, e, n)
            })
        }
        function Qn(t, e) {
            return t = Object(t),
            d(e, function (e, n) {
                return n in t && (e[n] = t[n]),
                e
            }, {})
        }
        function Yn(t, e) {
            var n = {};
            return kn(t, function (t, r) {
                e(t, r) && (n[r] = t)
            }),
            n
        }
        function Jn(t) {
            return function (e) {
                return null == e ? U : e[t]
            }
        }
        function Zn(t) {
            return function (e) {
                return Rn(e, t)
            }
        }
        function tr(t, e) {
            return er(t, e)
        }
        function er(t, e, n) {
            var r = -1,
            i = e.length,
            o = t;
            for (n && (o = c(t, function (t) {
                        return n(t)
                    })); ++r < i; )
                for (var a = 0, s = e[r], l = n ? n(s) : s; (a = y(o, l, a)) > -1; )
                    o !== t && Ml.call(o, a, 1), Ml.call(t, a, 1);
            return t
        }
        function nr(t, e) {
            for (var n = t ? e.length : 0, r = n - 1; n--; ) {
                var i = e[n];
                if (r == n || i != o) {
                    var o = i;
                    if (O(i))
                        Ml.call(t, i, 1);
                    else if (ui(i, t))
                        delete t[i];
                    else {
                        var a = dr(i),
                        s = mi(t, a);
                        null != s && delete s[Fi(a)]
                    }
                }
            }
            return t
        }
        function rr(t, e) {
            return t + ql(Ql() * (e - t + 1))
        }
        function ir(t, e, n, r) {
            for (var i = -1, o = Xl(zl((e - t) / (n || 1)), 0), a = Array(o); o--; )
                a[r ? o : ++i] = t, t += n;
            return a
        }
        function or(t, e, n, r) {
            e = ui(e, t) ? [e + ""] : dr(e);
            for (var i = -1, o = e.length, a = o - 1, s = t; null != s && ++i < o; ) {
                var l = e[i];
                if (wa(s)) {
                    var u = n;
                    if (i != a) {
                        var c = s[l];
                        u = r ? r(c, l, s) : U,
                        u === U && (u = null == c ? O(e[i + 1]) ? [] : {}
                             : c)
                    }
                    nn(s, l, u)
                }
                s = s[l]
            }
            return t
        }
        function ar(t, e, n) {
            var r = -1,
            i = t.length;
            e < 0 && (e = -e > i ? 0 : i + e),
            n = n > i ? i : n,
            n < 0 && (n += i),
            i = e > n ? 0 : n - e >>> 0,
            e >>>= 0;
            for (var o = Array(i); ++r < i; )
                o[r] = t[r + e];
            return o
        }
        function sr(t, e) {
            var n;
            return cu(t, function (t, r, i) {
                return n = e(t, r, i),
                !n
            }),
            !!n
        }
        function lr(t, e, n) {
            var r = 0,
            i = t ? t.length : r;
            if ("number" == typeof e && e === e && i <= xt) {
                for (; r < i; ) {
                    var o = r + i >>> 1,
                    a = t[o];
                    (n ? a <= e : a < e) && null !== a ? r = o + 1 : i = o
                }
                return i
            }
            return ur(t, e, Gs, n)
        }
        function ur(t, e, n, r) {
            e = n(e);
            for (var i = 0, o = t ? t.length : 0, a = e !== e, s = null === e, l = e === U; i < o; ) {
                var u = ql((i + o) / 2),
                c = n(t[u]),
                f = c !== U,
                d = c === c;
                if (a)
                    var p = d || r;
                else
                    p = s ? d && f && (r || null != c) : l ? d && (r || f) : null != c && (r ? c <= e : c < e);
                p ? i = u + 1 : o = u
            }
            return Vl(o, _t)
        }
        function cr(t) {
            return fr(t)
        }
        function fr(t, e) {
            for (var n = 0, r = t.length, i = t[0], o = e ? e(i) : i, a = o, s = 0, l = [i]; ++n < r; )
                i = t[n], o = e ? e(i) : i, oa(o, a) || (a = o, l[++s] = i);
            return l
        }
        function dr(t) {
            return tc(t) ? t : yi(t)
        }
        function pr(t, e, n) {
            var r = -1,
            i = l,
            o = t.length,
            a = !0,
            s = [],
            c = s;
            if (n)
                a = !1, i = u;
            else if (o >= ut) {
                var f = e ? null : vu(t);
                if (f)
                    return W(f);
                a = !1,
                i = Me,
                c = new We
            } else
                c = e ? [] : s;
            t: for (; ++r < o; ) {
                var d = t[r],
                p = e ? e(d) : d;
                if (a && p === p) {
                    for (var h = c.length; h--; )
                        if (c[h] === p)
                            continue t;
                    e && c.push(p),
                    s.push(d)
                } else
                    i(c, p, n) || (c !== s && c.push(p), s.push(d))
            }
            return s
        }
        function hr(t, e) {
            e = ui(e, t) ? [e + ""] : dr(e),
            t = mi(t, e);
            var n = Fi(e);
            return null == t || !rs(t, n) || delete t[n]
        }
        function vr(t, e, n, r) {
            for (var i = t.length, o = r ? i : -1; (r ? o-- : ++o < i) && e(t[o], o, t); );
            return n ? ar(t, r ? 0 : o, r ? o + 1 : i) : ar(t, r ? o + 1 : 0, r ? i : o)
        }
        function mr(t, e) {
            var n = t;
            return n instanceof $e && (n = n.value()),
            d(e, function (t, e) {
                return e.func.apply(e.thisArg, f([t], e.args))
            }, n)
        }
        function gr(t, e, n) {
            for (var r = -1, i = t.length; ++r < i; )
                var o = o ? f(bn(o, t[r], e, n), bn(t[r], o, e, n)) : t[r];
            return o && o.length ? pr(o, e, n) : []
        }
        function yr(t) {
            var e = t.constructor,
            n = new e(t.byteLength),
            r = new Dl(n);
            return r.set(new Dl(t)),
            n
        }
        function br(e) {
            var n = e.constructor;
            return d(P(e), t, new n)
        }
        function _r(t) {
            var e = t.constructor,
            n = new e(t.source, he.exec(t));
            return n.lastIndex = t.lastIndex,
            n
        }
        function xr(t) {
            var n = t.constructor;
            return d(W(t), e, new n)
        }
        function wr(t) {
            return Rl ? Object(au.call(t)) : {}
        }
        function Cr(t, e) {
            var n = t.buffer,
            r = t.constructor;
            return new r(e ? yr(n) : n, t.byteOffset, t.length)
        }
        function Tr(t, e, n) {
            for (var r = n.length, i = -1, o = Xl(t.length - r, 0), a = -1, s = e.length, l = Array(s + o); ++a < s; )
                l[a] = e[a];
            for (; ++i < r; )
                l[n[i]] = t[i];
            for (; o--; )
                l[a++] = t[i++];
            return l
        }
        function $r(t, e, n) {
            for (var r = -1, i = n.length, o = -1, a = Xl(t.length - i, 0), s = -1, l = e.length, u = Array(a + l); ++o < a; )
                u[o] = t[o];
            for (var c = o; ++s < l; )
                u[c + s] = e[s];
            for (; ++r < i; )
                u[c + n[r]] = t[o++];
            return u
        }
        function kr(t, e) {
            var n = -1,
            r = t.length;
            for (e || (e = Array(r)); ++n < r; )
                e[n] = t[n];
            return e
        }
        function Er(t, e, n) {
            return Sr(t, e, n)
        }
        function Sr(t, e, n, r) {
            n || (n = {});
            for (var i = -1, o = e.length; ++i < o; ) {
                var a = e[i],
                s = r ? r(n[a], t[a], a, n, t) : t[a];
                nn(n, a, s)
            }
            return n
        }
        function Ar(t, e) {
            return Er(t, yu(t), e)
        }
        function Nr(t, e) {
            return function (n, r) {
                var i = e ? e() : {};
                if (r = Jr(r), tc(n))
                    for (var o = -1, a = n.length; ++o < a; ) {
                        var s = n[o];
                        t(i, s, r(s), n)
                    }
                else
                    cu(n, function (e, n, o) {
                        t(i, e, r(e), o)
                    });
                return i
            }
        }
        function jr(t) {
            return Qo(function (e, n) {
                var r = -1,
                i = n.length,
                o = i > 1 ? n[i - 1] : U,
                a = i > 2 ? n[2] : U;
                for (o = "function" == typeof o ? (i--, o) : U, a && li(n[0], n[1], a) && (o = i < 3 ? U : o, i = 1), e = Object(e); ++r < i; ) {
                    var s = n[r];
                    s && t(e, s, r, o)
                }
                return e
            })
        }
        function Rr(t, e) {
            return function (n, r) {
                if (null == n)
                    return n;
                if (!ua(n))
                    return t(n, r);
                for (var i = n.length, o = e ? i : -1, a = Object(n); (e ? o-- : ++o < i) && r(a[o], o, a) !== !1; );
                return n
            }
        }
        function Dr(t) {
            return function (e, n, r) {
                for (var i = -1, o = Object(e), a = r(e), s = a.length; s--; ) {
                    var l = a[t ? s : ++i];
                    if (n(o[l], l, o) === !1)
                        break
                }
                return e
            }
        }
        function Ir(t, e, n) {
            function r() {
                var e = this && this !== An && this instanceof r ? o : t;
                return e.apply(i ? n : this, arguments)
            }
            var i = e & X,
            o = Hr(t);
            return r
        }
        function Lr(t) {
            return function (e) {
                e = Ka(e);
                var n = sn.test(e) ? z(e) : U,
                r = n ? n[0] : e.charAt(0),
                i = n ? n.slice(1).join("") : e.slice(1);
                return r[t]() + i
            }
        }
        function Or(t) {
            return function (e) {
                return d(Us($s(e)), t, "")
            }
        }
        function Hr(t) {
            return function () {
                var e = arguments;
                switch (e.length) {
                case 0:
                    return new t;
                case 1:
                    return new t(e[0]);
                case 2:
                    return new t(e[0], e[1]);
                case 3:
                    return new t(e[0], e[1], e[2]);
                case 4:
                    return new t(e[0], e[1], e[2], e[3]);
                case 5:
                    return new t(e[0], e[1], e[2], e[3], e[4]);
                case 6:
                    return new t(e[0], e[1], e[2], e[3], e[4], e[5]);
                case 7:
                    return new t(e[0], e[1], e[2], e[3], e[4], e[5], e[6])
                }
                var n = uu(t.prototype),
                r = t.apply(n, e);
                return wa(r) ? r : n
            }
        }
        function Pr(t, e, r) {
            function i() {
                for (var a = arguments.length, s = a, l = Array(a), u = this && this !== An && this instanceof i ? o : t, c = i.placeholder; s--; )
                    l[s] = arguments[s];
                var f = a < 3 && l[0] !== c && l[a - 1] !== c ? [] : F(l, c);
                return a -= f.length,
                a < r ? Ur(t, e, Wr, c, U, l, f, U, U, r - a) : n(u, this, l)
            }
            var o = Hr(t);
            return i
        }
        function Fr(t) {
            return Qo(function (e) {
                e = $n(e);
                var n = e.length,
                r = n,
                i = Te.prototype.thru;
                for (t && e.reverse(); r--; ) {
                    var o = e[r];
                    if ("function" != typeof o)
                        throw new xl(pt);
                    if (i && !a && "wrapper" == Yr(o))
                        var a = new Te([], !0)
                }
                for (r = a ? r : n; ++r < n; ) {
                    o = e[r];
                    var s = Yr(o),
                    l = "wrapper" == s ? mu(o) : U;
                    a = l && fi(l[0]) && l[1] == (tt | Q | J | et) && !l[4].length && 1 == l[9] ? a[Yr(l[0])].apply(a, l[3]) : 1 == o.length && fi(o) ? a[s]() : a.thru(o)
                }
                return function () {
                    var t = arguments,
                    r = t[0];
                    if (a && 1 == t.length && tc(r) && r.length >= ut)
                        return a.plant(r).value();
                    for (var i = 0, o = n ? e[i].apply(this, t) : r; ++i < n; )
                        o = e[i].call(this, o);
                    return o
                }
            })
        }
        function Wr(t, e, n, r, i, o, a, s, l, u) {
            function c() {
                for (var y = arguments.length, b = y, _ = Array(y); b--; )
                    _[b] = arguments[b];
                if (r && (_ = Tr(_, r, i)), o && (_ = $r(_, o, a)), h || v) {
                    var x = c.placeholder,
                    w = F(_, x);
                    if (y -= w.length, y < u)
                        return Ur(t, e, Wr, x, n, _, w, s, l, u - y)
                }
                var C = d ? n : this,
                T = p ? C[t] : t;
                return s ? _ = gi(_, s) : m && _.length > 1 && _.reverse(),
                f && l < _.length && (_.length = l),
                this && this !== An && this instanceof c && (T = g || Hr(T)),
                T.apply(C, _)
            }
            var f = e & tt,
            d = e & X,
            p = e & V,
            h = e & Q,
            v = e & Y,
            m = e & nt,
            g = p ? U : Hr(t);
            return c
        }
        function Mr(t) {
            return Qo(function (e) {
                return e = c($n(e), Jr()),
                Qo(function (r) {
                    var i = this;
                    return t(e, function (t) {
                        return n(t, i, r)
                    })
                })
            })
        }
        function zr(t, e, n) {
            e = Ma(e);
            var r = M(t);
            if (!e || r >= e)
                return "";
            var i = e - r;
            n = n === U ? " " : n + "";
            var o = Ds(n, zl(i / M(n)));
            return sn.test(n) ? z(o).slice(0, i).join("") : o.slice(0, i)
        }
        function qr(t, e, r, i) {
            function o() {
                for (var e = -1, l = arguments.length, u = -1, c = i.length, f = Array(c + l), d = this && this !== An && this instanceof o ? s : t; ++u < c; )
                    f[u] = i[u];
                for (; l--; )
                    f[u++] = arguments[++e];
                return n(d, a ? r : this, f)
            }
            var a = e & X,
            s = Hr(t);
            return o
        }
        function Br(t) {
            return function (e, n, r) {
                return r && "number" != typeof r && li(e, n, r) && (n = r = U),
                e = qa(e),
                e = e === e ? e : 0,
                n === U ? (n = e, e = 0) : n = qa(n) || 0,
                r = r === U ? e < n ? 1 : -1 : qa(r) || 0,
                ir(e, n, r, t)
            }
        }
        function Ur(t, e, n, r, i, o, a, s, l, u) {
            var c = e & Q,
            f = s ? kr(s) : U,
            d = c ? a : U,
            p = c ? U : a,
            h = c ? o : U,
            v = c ? U : o;
            e |= c ? J : Z,
            e &= ~(c ? Z : J),
            e & G || (e &= ~(X | V));
            var m = [t, e, i, h, d, v, p, f, l, u],
            g = n.apply(U, m);
            return fi(t) && bu(g, m),
            g.placeholder = r,
            g
        }
        function Kr(t) {
            var e = bl[t];
            return function (t, n) {
                if (t = qa(t), n = Ma(n)) {
                    var r = (Ka(t) + "e").split("e"),
                    i = e(r[0] + "e" + (+r[1] + n));
                    return r = (Ka(i) + "e").split("e"),
                     + (r[0] + "e" + (+r[1] - n))
                }
                return e(t)
            }
        }
        function Xr(t, e, n, r, i, o, a, s) {
            var l = e & V;
            if (!l && "function" != typeof t)
                throw new xl(pt);
            var u = r ? r.length : 0;
            if (u || (e &= ~(J | Z), r = i = U), a = a === U ? a : Xl(Ma(a), 0), s = s === U ? s : Ma(s), u -= i ? i.length : 0, e & Z) {
                var c = r,
                f = i;
                r = i = U
            }
            var d = l ? U : mu(t),
            p = [t, e, n, r, i, c, f, o, a, s];
            if (d && hi(p, d), t = p[0], e = p[1], n = p[2], r = p[3], i = p[4], s = p[9] = null == p[9] ? l ? 0 : t.length : Xl(p[9] - u, 0), !s && e & (Q | Y) && (e &= ~(Q | Y)), e && e != X)
                h = e == Q || e == Y ? Pr(t, e, s) : e != J && e != (X | J) || i.length ? Wr.apply(U, p) : qr(t, e, n, r);
            else
                var h = Ir(t, e, n);
            var v = d ? hu : bu;
            return v(h, p)
        }
        function Vr(t, e, n, r, i, o) {
            var a = -1,
            s = i & it,
            l = i & rt,
            u = t.length,
            c = e.length;
            if (u != c && !(s && c > u))
                return !1;
            var f = o.get(t);
            if (f)
                return f == e;
            var d = !0;
            for (o.set(t, e); ++a < u; ) {
                var p = t[a],
                v = e[a];
                if (r)
                    var m = s ? r(v, p, a, e, t, o) : r(p, v, a, t, e, o);
                if (m !== U) {
                    if (m)
                        continue;
                    d = !1;
                    break
                }
                if (l) {
                    if (!h(e, function (t) {
                            return p === t || n(p, t, r, i, o)
                        })) {
                        d = !1;
                        break
                    }
                } else if (p !== v && !n(p, v, r, i, o)) {
                    d = !1;
                    break
                }
            }
            return o["delete"](t),
            d
        }
        function Gr(t, e, n, r, i, o) {
            switch (n) {
            case Pt:
                return !(t.byteLength != e.byteLength || !r(new Dl(t), new Dl(e)));
            case $t:
            case kt:
                return +t == +e;
            case Et:
                return t.name == e.name && t.message == e.message;
            case jt:
                return t != +t ? e != +e : t == +e;
            case Dt:
            case Lt:
                return t == e + "";
            case Nt:
                var a = P;
            case It:
                var s = o & it;
                return a || (a = W),
                (s || t.size == e.size) && r(a(t), a(e), i, o | rt);
            case Ot:
                return !!Rl && au.call(t) == au.call(e)
            }
            return !1
        }
        function Qr(t, e, n, r, i, o) {
            var a = i & it,
            s = as(t),
            l = s.length,
            u = as(e),
            c = u.length;
            if (l != c && !a)
                return !1;
            for (var f = l; f--; ) {
                var d = s[f];
                if (!(a ? d in e : Dn(e, d)))
                    return !1
            }
            var p = o.get(t);
            if (p)
                return p == e;
            var h = !0;
            o.set(t, e);
            for (var v = a; ++f < l; ) {
                d = s[f];
                var m = t[d],
                g = e[d];
                if (r)
                    var y = a ? r(g, m, d, e, t, o) : r(m, g, d, t, e, o);
                if (!(y === U ? m === g || n(m, g, r, i, o) : y)) {
                    h = !1;
                    break
                }
                v || (v = "constructor" == d)
            }
            if (h && !v) {
                var b = t.constructor,
                _ = e.constructor;
                b != _ && "constructor" in t && "constructor" in e && !("function" == typeof b && b instanceof b && "function" == typeof _ && _ instanceof _) && (h = !1)
            }
            return o["delete"](t),
            h
        }
        function Yr(t) {
            for (var e = t.name + "", n = lu[e], r = $l.call(lu, e) ? n.length : 0; r--; ) {
                var i = n[r],
                o = i.func;
                if (null == o || o == t)
                    return i.name
            }
            return e
        }
        function Jr() {
            var t = Ht.iteratee || Qs;
            return t = t === Qs ? Mn : t,
            arguments.length ? t(arguments[0], arguments[1]) : t
        }
        function Zr(t) {
            for (var e = vs(t), n = e.length; n--; )
                e[n][2] = pi(e[n][1]);
            return e
        }
        function ti(t, e) {
            var n = null == t ? U : t[e];
            return Ea(n) ? n : U
        }
        function ei(t) {
            return Sl.call(t)
        }
        function ni(t, e, n) {
            for (var r = -1, i = n.length; ++r < i; ) {
                var o = n[r],
                a = o.size;
                switch (o.type) {
                case "drop":
                    t += a;
                    break;
                case "dropRight":
                    e -= a;
                    break;
                case "take":
                    e = Vl(e, t + a);
                    break;
                case "takeRight":
                    t = Xl(t, e - a)
                }
            }
            return {
                start: t,
                end: e
            }
        }
        function ri(t, e, n) {
            if (null == t)
                return !1;
            var r = n(t, e);
            return r || ui(e) || (e = dr(e), t = mi(t, e), null != t && (e = Fi(e), r = n(t, e))),
            r || xa(t && t.length) && O(e, t.length) && (tc(t) || Ia(t) || la(t))
        }
        function ii(t) {
            var e = t.length,
            n = t.constructor(e);
            return e && "string" == typeof t[0] && $l.call(t, "index") && (n.index = t.index, n.input = t.input),
            n
        }
        function oi(t) {
            var e = t.constructor;
            return uu(ba(e) ? e.prototype : U)
        }
        function ai(t, e, n) {
            var r = t.constructor;
            switch (e) {
            case Pt:
                return yr(t);
            case $t:
            case kt:
                return new r(+t);
            case Ft:
            case Wt:
            case Mt:
            case zt:
            case qt:
            case Bt:
            case Ut:
            case Kt:
            case Xt:
                return Cr(t, n);
            case Nt:
                return br(t);
            case jt:
            case Lt:
                return new r(t);
            case Dt:
                return _r(t);
            case It:
                return xr(t);
            case Ot:
                return wr(t)
            }
        }
        function si(t) {
            var e = t ? t.length : U;
            return xa(e) && (tc(t) || Ia(t) || la(t)) ? w(e, String) : null
        }
        function li(t, e, n) {
            if (!wa(n))
                return !1;
            var r = typeof e;
            return !!("number" == r ? ua(n) && O(e, n.length) : "string" == r && e in n) && oa(n[e], t)
        }
        function ui(t, e) {
            return "number" == typeof t || !tc(t) && (oe.test(t) || !ie.test(t) || null != e && t in Object(e))
        }
        function ci(t) {
            var e = typeof t;
            return "number" == e || "boolean" == e || "string" == e && "__proto__" !== t || null == t
        }
        function fi(t) {
            var e = Yr(t),
            n = Ht[e];
            if ("function" != typeof n || !(e in $e.prototype))
                return !1;
            if (t === n)
                return !0;
            var r = mu(n);
            return !!r && t === r[0]
        }
        function di(t) {
            var e = t && t.constructor,
            n = "function" == typeof e && e.prototype || Cl;
            return t === n
        }
        function pi(t) {
            return t === t && !wa(t)
        }
        function hi(t, e) {
            var n = t[1],
            r = e[1],
            i = n | r,
            o = i < (X | V | tt),
            a = r == tt && n == Q || r == tt && n == et && t[7].length <= e[8] || r == (tt | et) && e[7].length <= e[8] && n == Q;
            if (!o && !a)
                return t;
            r & X && (t[2] = e[2], i |= n & X ? 0 : G);
            var s = e[3];
            if (s) {
                var l = t[3];
                t[3] = l ? Tr(l, s, e[4]) : kr(s),
                t[4] = l ? F(t[3], wt) : kr(e[4])
            }
            return s = e[5],
            s && (l = t[5], t[5] = l ? $r(l, s, e[6]) : kr(s), t[6] = l ? F(t[5], wt) : kr(e[6])),
            s = e[7],
            s && (t[7] = kr(s)),
            r & tt && (t[8] = null == t[8] ? e[8] : Vl(t[8], e[8])),
            null == t[9] && (t[9] = e[9]),
            t[0] = e[0],
            t[1] = i,
            t
        }
        function vi(t, e, n, r, i, o) {
            return wa(t) && wa(e) && (o.set(e, t), Xn(t, e, U, vi, o)),
            t
        }
        function mi(t, e) {
            return 1 == e.length ? t : ns(t, ar(e, 0, -1))
        }
        function gi(t, e) {
            for (var n = t.length, r = Vl(e.length, n), i = kr(t); r--; ) {
                var o = e[r];
                t[r] = O(o, n) ? i[o] : U
            }
            return t
        }
        function yi(t) {
            var e = [];
            return Ka(t).replace(ae, function (t, n, r, i) {
                e.push(r ? i.replace(de, "$1") : n || t)
            }),
            e
        }
        function bi(t) {
            return ca(t) ? t : []
        }
        function _i(t) {
            return "function" == typeof t ? t : Gs
        }
        function xi(t) {
            if (t instanceof $e)
                return t.clone();
            var e = new Te(t.__wrapped__, t.__chain__);
            return e.__actions__ = kr(t.__actions__),
            e.__index__ = t.__index__,
            e.__values__ = t.__values__,
            e
        }
        function wi(t, e) {
            e = Xl(Ma(e), 0);
            var n = t ? t.length : 0;
            if (!n || e < 1)
                return [];
            for (var r = 0, i = -1, o = Array(zl(n / e)); r < n; )
                o[++i] = ar(t, r, r += e);
            return o
        }
        function Ci(t) {
            for (var e = -1, n = t ? t.length : 0, r = -1, i = []; ++e < n; ) {
                var o = t[e];
                o && (i[++r] = o)
            }
            return i
        }
        function Ti(t, e, n) {
            var r = t ? t.length : 0;
            return r ? (e = n || e === U ? 1 : Ma(e), ar(t, e < 0 ? 0 : e, r)) : []
        }
        function $i(t, e, n) {
            var r = t ? t.length : 0;
            return r ? (e = n || e === U ? 1 : Ma(e), e = r - e, ar(t, 0, e < 0 ? 0 : e)) : []
        }
        function ki(t, e) {
            return t && t.length ? vr(t, Jr(e, 3), !0, !0) : []
        }
        function Ei(t, e) {
            return t && t.length ? vr(t, Jr(e, 3), !0) : []
        }
        function Si(t, e, n, r) {
            var i = t ? t.length : 0;
            return i ? (n && "number" != typeof n && li(t, e, n) && (n = 0, r = i), Cn(t, e, n, r)) : []
        }
        function Ai(t, e) {
            return t && t.length ? g(t, Jr(e, 3)) : -1
        }
        function Ni(t, e) {
            return t && t.length ? g(t, Jr(e, 3), !0) : -1
        }
        function ji(t, e) {
            var n = t ? t.length : 0;
            return n ? $n(c(t, Jr(e, 3))) : []
        }
        function Ri(t) {
            var e = t ? t.length : 0;
            return e ? $n(t) : []
        }
        function Di(t) {
            var e = t ? t.length : 0;
            return e ? $n(t, !0) : []
        }
        function Ii(t) {
            for (var e = -1, n = t ? t.length : 0, r = {}; ++e < n; ) {
                var i = t[e];
                r[i[0]] = i[1]
            }
            return r
        }
        function Li(t) {
            return t ? t[0] : U
        }
        function Oi(t, e, n) {
            var r = t ? t.length : 0;
            return r ? (n = Ma(n), n < 0 && (n = Xl(r + n, 0)), y(t, e, n)) : -1
        }
        function Hi(t) {
            return $i(t, 1)
        }
        function Pi(t, e) {
            return t ? Ul.call(t, e) : ""
        }
        function Fi(t) {
            var e = t ? t.length : 0;
            return e ? t[e - 1] : U
        }
        function Wi(t, e, n) {
            var r = t ? t.length : 0;
            if (!r)
                return -1;
            var i = r;
            if (n !== U && (i = Ma(n), i = (i < 0 ? Xl(r + i, 0) : Vl(i, r - 1)) + 1), e !== e)
                return I(t, i, !0);
            for (; i--; )
                if (t[i] === e)
                    return i;
            return -1
        }
        function Mi(t, e) {
            return t && t.length && e && e.length ? tr(t, e) : t
        }
        function zi(t, e, n) {
            return t && t.length && e && e.length ? er(t, e, Jr(n)) : t
        }
        function qi(t, e) {
            var n = [];
            if (!t || !t.length)
                return n;
            var r = -1,
            i = [],
            o = t.length;
            for (e = Jr(e, 3); ++r < o; ) {
                var a = t[r];
                e(a, r, t) && (n.push(a), i.push(r))
            }
            return nr(t, i),
            n
        }
        function Bi(t) {
            return t ? Yl.call(t) : t
        }
        function Ui(t, e, n) {
            var r = t ? t.length : 0;
            return r ? (n && "number" != typeof n && li(t, e, n) ? (e = 0, n = r) : (e = null == e ? 0 : Ma(e), n = n === U ? r : Ma(n)), ar(t, e, n)) : []
        }
        function Ki(t, e) {
            return lr(t, e)
        }
        function Xi(t, e, n) {
            return ur(t, e, Jr(n))
        }
        function Vi(t, e) {
            var n = t ? t.length : 0;
            if (n) {
                var r = lr(t, e);
                if (r < n && oa(t[r], e))
                    return r
            }
            return -1
        }
        function Gi(t, e) {
            return lr(t, e, !0)
        }
        function Qi(t, e, n) {
            return ur(t, e, Jr(n), !0)
        }
        function Yi(t, e) {
            var n = t ? t.length : 0;
            if (n) {
                var r = lr(t, e, !0) - 1;
                if (oa(t[r], e))
                    return r
            }
            return -1
        }
        function Ji(t) {
            return t && t.length ? cr(t) : []
        }
        function Zi(t, e) {
            return t && t.length ? fr(t, Jr(e)) : []
        }
        function to(t) {
            return Ti(t, 1)
        }
        function eo(t, e, n) {
            return t && t.length ? (e = n || e === U ? 1 : Ma(e), ar(t, 0, e < 0 ? 0 : e)) : []
        }
        function no(t, e, n) {
            var r = t ? t.length : 0;
            return r ? (e = n || e === U ? 1 : Ma(e), e = r - e, ar(t, e < 0 ? 0 : e, r)) : []
        }
        function ro(t, e) {
            return t && t.length ? vr(t, Jr(e, 3), !1, !0) : []
        }
        function io(t, e) {
            return t && t.length ? vr(t, Jr(e, 3)) : []
        }
        function oo(t) {
            return t && t.length ? pr(t) : []
        }
        function ao(t, e) {
            return t && t.length ? pr(t, Jr(e)) : []
        }
        function so(t, e) {
            return t && t.length ? pr(t, U, e) : []
        }
        function lo(t) {
            if (!t || !t.length)
                return [];
            var e = 0;
            return t = s(t, function (t) {
                if (ca(t))
                    return e = Xl(t.length, e), !0
            }),
            w(e, function (e) {
                return c(t, Jn(e))
            })
        }
        function uo(t, e) {
            if (!t || !t.length)
                return [];
            var r = lo(t);
            return null == e ? r : c(r, function (t) {
                return n(e, U, t)
            })
        }
        function co(t, e) {
            for (var n = -1, r = t ? t.length : 0, i = e ? e.length : 0, o = {}; ++n < r; )
                or(o, t[n], n < i ? e[n] : U);
            return o
        }
        function fo(t) {
            var e = Ht(t);
            return e.__chain__ = !0,
            e
        }
        function po(t, e) {
            return e(t),
            t
        }
        function ho(t, e) {
            return e(t)
        }
        function vo() {
            return fo(this)
        }
        function mo() {
            return new Te(this.value(), this.__chain__)
        }
        function go(t) {
            return this.map(t).flatten()
        }
        function yo() {
            this.__values__ === U && (this.__values__ = Wa(this.value()));
            var t = this.__index__ >= this.__values__.length,
            e = t ? U : this.__values__[this.__index__++];
            return {
                done: t,
                value: e
            }
        }
        function bo() {
            return this
        }
        function _o(t) {
            for (var e, n = this; n instanceof _e; ) {
                var r = xi(n);
                r.__index__ = 0,
                r.__values__ = U,
                e ? i.__wrapped__ = r : e = r;
                var i = r;
                n = n.__wrapped__
            }
            return i.__wrapped__ = t,
            e
        }
        function xo() {
            var t = this.__wrapped__;
            if (t instanceof $e) {
                var e = t;
                return this.__actions__.length && (e = new $e(this)),
                e = e.reverse(),
                e.__actions__.push({
                    func: ho,
                    args: [Bi],
                    thisArg: U
                }),
                new Te(e, this.__chain__)
            }
            return this.thru(Bi)
        }
        function wo() {
            return mr(this.__wrapped__, this.__actions__)
        }
        function Co(t, e, n) {
            var r = tc(t) ? a : wn;
            return n && li(t, e, n) && (e = U),
            r(t, Jr(e, 3))
        }
        function To(t, e) {
            var n = tc(t) ? s : Tn;
            return n(t, Jr(e, 3))
        }
        function $o(t, e) {
            if (e = Jr(e, 3), tc(t)) {
                var n = g(t, e);
                return n > -1 ? t[n] : U
            }
            return m(t, e, cu)
        }
        function ko(t, e) {
            if (e = Jr(e, 3), tc(t)) {
                var n = g(t, e, !0);
                return n > -1 ? t[n] : U
            }
            return m(t, e, fu)
        }
        function Eo(t, e) {
            return "function" == typeof e && tc(t) ? i(t, e) : cu(t, _i(e))
        }
        function So(t, e) {
            return "function" == typeof e && tc(t) ? o(t, e) : fu(t, _i(e))
        }
        function Ao(t, e, n, r) {
            t = ua(t) ? t : bs(t),
            n = n && !r ? Ma(n) : 0;
            var i = t.length;
            return n < 0 && (n = Xl(i + n, 0)),
            Ia(t) ? n <= i && t.indexOf(e, n) > -1 : !!i && y(t, e, n) > -1
        }
        function No(t, e) {
            var n = tc(t) ? c : Bn;
            return n(t, Jr(e, 3))
        }
        function jo(t, e, n, r) {
            return null == t ? [] : (tc(e) || (e = null == e ? [] : [e]), n = r ? U : n, tc(n) || (n = null == n ? [] : [n]), Gn(t, e, n))
        }
        function Ro(t, e, n) {
            var r = tc(t) ? d : b,
            i = arguments.length < 3;
            return r(t, Jr(e, 4), n, i, cu)
        }
        function Do(t, e, n) {
            var r = tc(t) ? p : b,
            i = arguments.length < 3;
            return r(t, Jr(e, 4), n, i, fu)
        }
        function Io(t, e) {
            var n = tc(t) ? s : Tn;
            return e = Jr(e, 3),
            n(t, function (t, n, r) {
                return !e(t, n, r)
            })
        }
        function Lo(t) {
            var e = ua(t) ? t : bs(t),
            n = e.length;
            return n > 0 ? e[rr(0, n - 1)] : U
        }
        function Oo(t, e) {
            var n = -1,
            r = Wa(t),
            i = r.length,
            o = i - 1;
            for (e = vn(Ma(e), 0, i); ++n < e; ) {
                var a = rr(n, o),
                s = r[a];
                r[a] = r[n],
                r[n] = s
            }
            return r.length = e,
            r
        }
        function Ho(t) {
            return Oo(t, bt)
        }
        function Po(t) {
            if (null == t)
                return 0;
            if (ua(t)) {
                var e = t.length;
                return e && Ia(t) ? M(t) : e
            }
            return as(t).length
        }
        function Fo(t, e, n) {
            var r = tc(t) ? h : sr;
            return n && li(t, e, n) && (e = U),
            r(t, Jr(e, 3))
        }
        function Wo(t, e) {
            if ("function" != typeof e)
                throw new xl(pt);
            return t = Ma(t),
            function () {
                if (--t < 1)
                    return e.apply(this, arguments)
            }
        }
        function Mo(t, e, n) {
            return e = n ? U : e,
            e = t && null == e ? t.length : e,
            Xr(t, tt, U, U, U, U, e)
        }
        function zo(t, e) {
            var n;
            if ("function" != typeof e)
                throw new xl(pt);
            return t = Ma(t),
            function () {
                return --t > 0 && (n = e.apply(this, arguments)),
                t <= 1 && (e = U),
                n
            }
        }
        function qo(t, e, n) {
            e = n ? U : e;
            var r = Xr(t, Q, U, U, U, U, U, e);
            return r.placeholder = qo.placeholder,
            r
        }
        function Bo(t, e, n) {
            e = n ? U : e;
            var r = Xr(t, Y, U, U, U, U, U, e);
            return r.placeholder = Bo.placeholder,
            r
        }
        function Uo(t, e, n) {
            function r() {
                h && Il(h),
                c && Il(c),
                m = 0,
                u = c = p = h = v = U
            }
            function i(e, n) {
                n && Il(n),
                c = h = v = U,
                e && (m = Uu(), f = t.apply(p, u), h || c || (u = p = U))
            }
            function o() {
                var t = e - (Uu() - d);
                t <= 0 || t > e ? i(v, c) : h = Wl(o, t)
            }
            function a() {
                return (h && v || c && b) && (f = t.apply(p, u)),
                r(),
                f
            }
            function s() {
                i(b, h)
            }
            function l() {
                if (u = arguments, d = Uu(), p = this, v = b && (h || !g), y === !1)
                    var n = g && !h;
                else {
                    c || g || (m = d);
                    var r = y - (d - m),
                    i = r <= 0 || r > y;
                    i ? (c && (c = Il(c)), m = d, f = t.apply(p, u)) : c || (c = Wl(s, r))
                }
                return i && h ? h = Il(h) : h || e === y || (h = Wl(o, e)),
                n && (i = !0, f = t.apply(p, u)),
                !i || h || c || (u = p = U),
                f
            }
            var u,
            c,
            f,
            d,
            p,
            h,
            v,
            m = 0,
            g = !1,
            y = !1,
            b = !0;
            if ("function" != typeof t)
                throw new xl(pt);
            return e = qa(e) || 0,
            wa(n) && (g = !!n.leading, y = "maxWait" in n && Xl(qa(n.maxWait) || 0, e), b = "trailing" in n ? !!n.trailing : b),
            l.cancel = r,
            l.flush = a,
            l
        }
        function Ko(t) {
            return Xr(t, nt)
        }
        function Xo(t, e) {
            if ("function" != typeof t || e && "function" != typeof e)
                throw new xl(pt);
            var n = function () {
                var r = arguments,
                i = e ? e.apply(this, r) : r[0],
                o = n.cache;
                if (o.has(i))
                    return o.get(i);
                var a = t.apply(this, r);
                return n.cache = o.set(i, a),
                a
            };
            return n.cache = new Xo.Cache,
            n
        }
        function Vo(t) {
            if ("function" != typeof t)
                throw new xl(pt);
            return function () {
                return !t.apply(this, arguments)
            }
        }
        function Go(t) {
            return zo(2, t)
        }
        function Qo(t, e) {
            if ("function" != typeof t)
                throw new xl(pt);
            return e = Xl(e === U ? t.length - 1 : Ma(e), 0),
            function () {
                for (var r = arguments, i = -1, o = Xl(r.length - e, 0), a = Array(o); ++i < o; )
                    a[i] = r[e + i];
                switch (e) {
                case 0:
                    return t.call(this, a);
                case 1:
                    return t.call(this, r[0], a);
                case 2:
                    return t.call(this, r[0], r[1], a)
                }
                var s = Array(e + 1);
                for (i = -1; ++i < e; )
                    s[i] = r[i];
                return s[e] = a,
                n(t, this, s)
            }
        }
        function Yo(t) {
            if ("function" != typeof t)
                throw new xl(pt);
            return function (e) {
                return n(t, this, e)
            }
        }
        function Jo(t, e, n) {
            var r = !0,
            i = !0;
            if ("function" != typeof t)
                throw new xl(pt);
            return wa(n) && (r = "leading" in n ? !!n.leading : r, i = "trailing" in n ? !!n.trailing : i),
            Uo(t, e, {
                leading: r,
                maxWait: e,
                trailing: i
            })
        }
        function Zo(t) {
            return Mo(t, 1)
        }
        function ta(t, e) {
            return e = null == e ? Gs : e,
            Yu(e, t)
        }
        function ea(t) {
            return mn(t)
        }
        function na(t, e) {
            return mn(t, !1, e)
        }
        function ra(t) {
            return mn(t, !0)
        }
        function ia(t, e) {
            return mn(t, !0, e)
        }
        function oa(t, e) {
            return t === e || t !== t && e !== e
        }
        function aa(t, e) {
            return t > e
        }
        function sa(t, e) {
            return t >= e
        }
        function la(t) {
            return ca(t) && $l.call(t, "callee") && (!Fl.call(t, "callee") || Sl.call(t) == Ct)
        }
        function ua(t) {
            return null != t && !("function" == typeof t && ba(t)) && xa(gu(t))
        }
        function ca(t) {
            return Ca(t) && ua(t)
        }
        function fa(t) {
            return t === !0 || t === !1 || Ca(t) && Sl.call(t) == $t
        }
        function da(t) {
            return Ca(t) && Sl.call(t) == kt
        }
        function pa(t) {
            return !!t && 1 === t.nodeType && Ca(t) && !ja(t)
        }
        function ha(t) {
            return !Ca(t) || ba(t.splice) ? !Po(t) : !as(t).length
        }
        function va(t, e) {
            return Pn(t, e)
        }
        function ma(t, e, n) {
            n = "function" == typeof n ? n : U;
            var r = n ? n(t, e) : U;
            return r === U ? Pn(t, e, n) : !!r
        }
        function ga(t) {
            return Ca(t) && "string" == typeof t.message && Sl.call(t) == Et
        }
        function ya(t) {
            return "number" == typeof t && Bl(t)
        }
        function ba(t) {
            var e = wa(t) ? Sl.call(t) : "";
            return e == St || e == At
        }
        function _a(t) {
            return "number" == typeof t && t == Ma(t)
        }
        function xa(t) {
            return "number" == typeof t && t > -1 && t % 1 == 0 && t <= mt
        }
        function wa(t) {
            var e = typeof t;
            return !!t && ("object" == e || "function" == e)
        }
        function Ca(t) {
            return !!t && "object" == typeof t
        }
        function Ta(t, e) {
            return t === e || Wn(t, e, Zr(e))
        }
        function $a(t, e, n) {
            return n = "function" == typeof n ? n : U,
            Wn(t, e, Zr(e), n)
        }
        function ka(t) {
            return Na(t) && t != +t
        }
        function Ea(t) {
            return null != t && (ba(t) ? Nl.test(Tl.call(t)) : Ca(t) && (L(t) ? Nl : ye).test(t))
        }
        function Sa(t) {
            return null === t
        }
        function Aa(t) {
            return null == t
        }
        function Na(t) {
            return "number" == typeof t || Ca(t) && Sl.call(t) == jt
        }
        function ja(t) {
            if (!Ca(t) || Sl.call(t) != Rt || L(t))
                return !1;
            var e = Cl;
            if ("function" == typeof t.constructor && (e = Ol(t)), null === e)
                return !0;
            var n = e.constructor;
            return "function" == typeof n && n instanceof n && Tl.call(n) == El
        }
        function Ra(t) {
            return wa(t) && Sl.call(t) == Dt
        }
        function Da(t) {
            return _a(t) && t >= -mt && t <= mt
        }
        function Ia(t) {
            return "string" == typeof t || !tc(t) && Ca(t) && Sl.call(t) == Lt
        }
        function La(t) {
            return "symbol" == typeof t || Ca(t) && Sl.call(t) == Ot
        }
        function Oa(t) {
            return Ca(t) && xa(t.length) && !!pn[Sl.call(t)]
        }
        function Ha(t) {
            return t === U
        }
        function Pa(t, e) {
            return t < e
        }
        function Fa(t, e) {
            return t <= e
        }
        function Wa(t) {
            if (!t)
                return [];
            if (ua(t))
                return Ia(t) ? z(t) : kr(t);
            if (Pl && t[Pl])
                return H(t[Pl]());
            var e = ei(t),
            n = e == Nt ? P : e == It ? W : bs;
            return n(t)
        }
        function Ma(t) {
            if (!t)
                return 0 === t ? t : 0;
            if (t = qa(t), t === vt || t === -vt) {
                var e = t < 0 ? -1 : 1;
                return e * gt
            }
            var n = t % 1;
            return t === t ? n ? t - n : t : 0
        }
        function za(t) {
            return t ? vn(Ma(t), 0, bt) : 0
        }
        function qa(t) {
            if (wa(t)) {
                var e = ba(t.valueOf) ? t.valueOf() : t;
                t = wa(e) ? e + "" : e
            }
            if ("string" != typeof t)
                return 0 === t ? t : +t;
            t = t.replace(ue, "");
            var n = ge.test(t);
            return n || be.test(t) ? xn(t.slice(2), n ? 2 : 8) : me.test(t) ? yt : +t
        }
        function Ba(t) {
            return Er(t, ss(t))
        }
        function Ua(t) {
            return vn(Ma(t), -mt, mt)
        }
        function Ka(t) {
            if ("string" == typeof t)
                return t;
            if (null == t)
                return "";
            if (La(t))
                return Rl ? su.call(t) : "";
            var e = t + "";
            return "0" == e && 1 / t == -vt ? "-0" : e
        }
        function Xa(t, e) {
            var n = uu(t);
            return e ? rn(n, e) : n
        }
        function Va(t, e) {
            return m(t, Jr(e, 3), En, !0)
        }
        function Ga(t, e) {
            return m(t, Jr(e, 3), Sn, !0)
        }
        function Qa(t, e) {
            return null == t ? t : du(t, _i(e), ss)
        }
        function Ya(t, e) {
            return null == t ? t : pu(t, _i(e), ss)
        }
        function Ja(t, e) {
            return t && En(t, _i(e))
        }
        function Za(t, e) {
            return t && Sn(t, _i(e))
        }
        function ts(t) {
            return null == t ? [] : jn(t, as(t))
        }
        function es(t) {
            return null == t ? [] : jn(t, ss(t))
        }
        function ns(t, e, n) {
            var r = null == t ? U : Rn(t, e);
            return r === U ? n : r
        }
        function rs(t, e) {
            return ri(t, e, Dn)
        }
        function is(t, e) {
            return ri(t, e, In)
        }
        function os(t, e, n) {
            return d(as(t), function (r, i) {
                var o = t[i];
                return e && !n ? $l.call(r, o) ? r[o].push(i) : r[o] = [i] : r[o] = i,
                r
            }, {})
        }
        function as(t) {
            var e = di(t);
            if (!e && !ua(t))
                return zn(t);
            var n = si(t),
            r = !!n,
            i = n || [],
            o = i.length;
            for (var a in t)
                !Dn(t, a) || r && ("length" == a || O(a, o)) || e && "constructor" == a || i.push(a);
            return i
        }
        function ss(t) {
            for (var e = -1, n = di(t), r = qn(t), i = r.length, o = si(t), a = !!o, s = o || [], l = s.length; ++e < i; ) {
                var u = r[e];
                a && ("length" == u || O(u, l)) || "constructor" == u && (n || !$l.call(t, u)) || s.push(u)
            }
            return s
        }
        function ls(t, e) {
            var n = {};
            return e = Jr(e, 3),
            En(t, function (t, r, i) {
                n[e(t, r, i)] = t
            }),
            n
        }
        function us(t, e) {
            var n = {};
            return e = Jr(e, 3),
            En(t, function (t, r, i) {
                n[r] = e(t, r, i)
            }),
            n
        }
        function cs(t, e) {
            return e = Jr(e, 2),
            Yn(t, function (t, n) {
                return !e(t, n)
            })
        }
        function fs(t, e) {
            return null == t ? {}
             : Yn(t, Jr(e, 2))
        }
        function ds(t, e, n) {
            if (ui(e, t))
                r = null == t ? U : t[e];
            else {
                e = dr(e);
                var r = ns(t, e);
                t = mi(t, e)
            }
            return r === U && (r = n),
            ba(r) ? r.call(t) : r
        }
        function ps(t, e, n) {
            return null == t ? t : or(t, e, n)
        }
        function hs(t, e, n, r) {
            return r = "function" == typeof r ? r : U,
            null == t ? t : or(t, e, n, r)
        }
        function vs(t) {
            return C(t, as(t))
        }
        function ms(t) {
            return C(t, ss(t))
        }
        function gs(t, e, n) {
            var r = tc(t) || Oa(t);
            if (e = Jr(e, 4), null == n)
                if (r || wa(t)) {
                    var o = t.constructor;
                    n = r ? tc(t) ? new o : [] : uu(ba(o) ? o.prototype : U)
                } else
                    n = {};
            return (r ? i : En)(t, function (t, r, i) {
                return e(n, t, r, i)
            }),
            n
        }
        function ys(t, e) {
            return null == t || hr(t, e)
        }
        function bs(t) {
            return t ? $(t, as(t)) : []
        }
        function _s(t) {
            return null == t ? $(t, ss(t)) : []
        }
        function xs(t, e, n) {
            return n === U && (n = e, e = U),
            n !== U && (n = qa(n), n = n === n ? n : 0),
            e !== U && (e = qa(e), e = e === e ? e : 0),
            vn(qa(t), e, n)
        }
        function ws(t, e, n) {
            return e = qa(e) || 0,
            n === U ? (n = e, e = 0) : n = qa(n) || 0,
            t = qa(t),
            Ln(t, e, n)
        }
        function Cs(t, e, n) {
            if (n && "boolean" != typeof n && li(t, e, n) && (e = n = U), n === U && ("boolean" == typeof e ? (n = e, e = U) : "boolean" == typeof t && (n = t, t = U)), t === U && e === U ? (t = 0, e = 1) : (t = qa(t) || 0, e === U ? (e = t, t = 0) : e = qa(e) || 0), t > e) {
                var r = t;
                t = e,
                e = r
            }
            if (n || t % 1 || e % 1) {
                var i = Ql();
                return Vl(t + i * (e - t + _n("1e-" + ((i + "").length - 1))), e)
            }
            return rr(t, e)
        }
        function Ts(t) {
            return gc(Ka(t).toLowerCase())
        }
        function $s(t) {
            return t = Ka(t),
            t && t.replace(xe, j).replace(on, "")
        }
        function ks(t, e, n) {
            t = Ka(t),
            e = "string" == typeof e ? e : e + "";
            var r = t.length;
            return n = n === U ? r : vn(Ma(n), 0, r),
            n -= e.length,
            n >= 0 && t.indexOf(e, n) == n
        }
        function Es(t) {
            return t = Ka(t),
            t && te.test(t) ? t.replace(Jt, R) : t
        }
        function Ss(t) {
            return t = Ka(t),
            t && le.test(t) ? t.replace(se, "\\$&") : t
        }
        function As(t, e, n) {
            t = Ka(t),
            e = Ma(e);
            var r = M(t);
            if (!e || r >= e)
                return t;
            var i = (e - r) / 2,
            o = ql(i),
            a = zl(i);
            return zr("", o, n) + t + zr("", a, n)
        }
        function Ns(t, e, n) {
            return t = Ka(t),
            t + zr(t, e, n)
        }
        function js(t, e, n) {
            return t = Ka(t),
            zr(t, e, n) + t
        }
        function Rs(t, e, n) {
            return n || null == e ? e = 0 : e && (e = +e),
            t = Ka(t).replace(ue, ""),
            Gl(t, e || (ve.test(t) ? 16 : 10))
        }
        function Ds(t, e) {
            t = Ka(t),
            e = Ma(e);
            var n = "";
            if (!t || e < 1 || e > mt)
                return n;
            do
                e % 2 && (n += t), e = ql(e / 2), t += t;
            while (e);
            return n
        }
        function Is() {
            var t = arguments,
            e = Ka(t[0]);
            return t.length < 3 ? e : e.replace(t[1], t[2])
        }
        function Ls(t, e, n) {
            return Ka(t).split(e, n)
        }
        function Os(t, e, n) {
            return t = Ka(t),
            n = vn(Ma(n), 0, t.length),
            t.lastIndexOf(e, n) == n
        }
        function Hs(t, e, n) {
            var r = Ht.templateSettings;
            n && li(t, e, n) && (e = U),
            t = Ka(t),
            e = rc({}, e, r, tn);
            var i,
            o,
            a = rc({}, e.imports, r.imports, tn),
            s = as(a),
            l = $(a, s),
            u = 0,
            c = e.interpolate || we,
            f = "__p += '",
            d = _l((e.escape || we).source + "|" + c.source + "|" + (c === re ? pe : we).source + "|" + (e.evaluate || we).source + "|$", "g"),
            p = "//# sourceURL=" + ("sourceURL" in e ? e.sourceURL : "lodash.templateSources[" + ++dn + "]") + "\n";
            t.replace(d, function (e, n, r, a, s, l) {
                return r || (r = a),
                f += t.slice(u, l).replace(Ce, D),
                n && (i = !0, f += "' +\n__e(" + n + ") +\n'"),
                s && (o = !0, f += "';\n" + s + ";\n__p += '"),
                r && (f += "' +\n((__t = (" + r + ")) == null ? '' : __t) +\n'"),
                u = l + e.length,
                e
            }),
            f += "';\n";
            var h = e.variable;
            h || (f = "with (obj) {\n" + f + "\n}\n"),
            f = (o ? f.replace(Vt, "") : f).replace(Gt, "$1").replace(Qt, "$1;"),
            f = "function(" + (h || "obj") + ") {\n" + (h ? "" : "obj || (obj = {});\n") + "var __t, __p = ''" + (i ? ", __e = _.escape" : "") + (o ? ", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n" : ";\n") + f + "return __p\n}";
            var v = xc(function () {
                return Function(s, p + "return " + f).apply(U, l)
            });
            if (v.source = f, ga(v))
                throw v;
            return v
        }
        function Ps(t) {
            return Ka(t).toLowerCase()
        }
        function Fs(t) {
            return Ka(t).toUpperCase()
        }
        function Ws(t, e, n) {
            if (t = Ka(t), !t)
                return t;
            if (n || e === U)
                return t.replace(ue, "");
            if (e += "", !e)
                return t;
            var r = z(t),
            i = z(e);
            return r.slice(k(r, i), E(r, i) + 1).join("")
        }
        function Ms(t, e, n) {
            if (t = Ka(t), !t)
                return t;
            if (n || e === U)
                return t.replace(fe, "");
            if (e += "", !e)
                return t;
            var r = z(t);
            return r.slice(0, E(r, z(e)) + 1).join("")
        }
        function zs(t, e, n) {
            if (t = Ka(t), !t)
                return t;
            if (n || e === U)
                return t.replace(ce, "");
            if (e += "", !e)
                return t;
            var r = z(t);
            return r.slice(k(r, z(e))).join("")
        }
        function qs(t, e) {
            var n = ot,
            r = at;
            if (wa(e)) {
                var i = "separator" in e ? e.separator : i;
                n = "length" in e ? Ma(e.length) : n,
                r = "omission" in e ? Ka(e.omission) : r
            }
            t = Ka(t);
            var o = t.length;
            if (sn.test(t)) {
                var a = z(t);
                o = a.length
            }
            if (n >= o)
                return t;
            var s = n - M(r);
            if (s < 1)
                return r;
            var l = a ? a.slice(0, s).join("") : t.slice(0, s);
            if (i === U)
                return l + r;
            if (a && (s += l.length - s), Ra(i)) {
                if (t.slice(s).search(i)) {
                    var u,
                    c = l;
                    for (i.global || (i = _l(i.source, Ka(he.exec(i)) + "g")), i.lastIndex = 0; u = i.exec(c); )
                        var f = u.index;
                    l = l.slice(0, f === U ? s : f)
                }
            } else if (t.indexOf(i, s) != s) {
                var d = l.lastIndexOf(i);
                d > -1 && (l = l.slice(0, d))
            }
            return l + r
        }
        function Bs(t) {
            return t = Ka(t),
            t && Zt.test(t) ? t.replace(Yt, q) : t
        }
        function Us(t, e, n) {
            return t = Ka(t),
            e = n ? U : e,
            e === U && (e = cn.test(t) ? un : ln),
            t.match(e) || []
        }
        function Ks(t) {
            var e = t ? t.length : 0,
            r = Jr();
            return t = e ? c(t, function (t) {
                if ("function" != typeof t[1])
                    throw new xl(pt);
                return [r(t[0]), t[1]]
            }) : [],
            Qo(function (r) {
                for (var i = -1; ++i < e; ) {
                    var o = t[i];
                    if (n(o[0], this, r))
                        return n(o[1], this, r)
                }
            })
        }
        function Xs(t) {
            return gn(mn(t, !0))
        }
        function Vs(t) {
            return function () {
                return t
            }
        }
        function Gs(t) {
            return t
        }
        function Qs(t) {
            return Ca(t) && !tc(t) ? Ys(t) : Mn(t)
        }
        function Ys(t) {
            return Un(mn(t, !0))
        }
        function Js(t, e) {
            return Kn(t, mn(e, !0))
        }
        function Zs(t, e, n) {
            var r = as(e),
            o = jn(e, r);
            null != n || wa(e) && (o.length || !r.length) || (n = e, e = t, t = this, o = jn(e, as(e)));
            var a = !(wa(n) && "chain" in n) || n.chain,
            s = ba(t);
            return i(o, function (n) {
                var r = e[n];
                t[n] = r,
                s && (t.prototype[n] = function () {
                    var e = this.__chain__;
                    if (a || e) {
                        var n = t(this.__wrapped__),
                        i = n.__actions__ = kr(this.__actions__);
                        return i.push({
                            func: r,
                            args: arguments,
                            thisArg: t
                        }),
                        n.__chain__ = e,
                        n
                    }
                    return r.apply(t, f([this.value()], arguments))
                })
            }),
            t
        }
        function tl() {
            return An._ === this && (An._ = Al),
            this
        }
        function el() {}
        function nl(t) {
            return t = Ma(t),
            function () {
                return arguments[t]
            }
        }
        function rl(t) {
            return ui(t) ? Jn(t) : Zn(t)
        }
        function il(t) {
            return function (e) {
                return null == t ? U : Rn(t, e)
            }
        }
        function ol(t, e) {
            if (t = Ma(t), t < 1 || t > mt)
                return [];
            var n = bt,
            r = Vl(t, bt);
            e = _i(e),
            t -= bt;
            for (var i = w(r, e); ++n < t; )
                e(n);
            return i
        }
        function al(t) {
            return tc(t) ? c(t, String) : yi(t)
        }
        function sl(t) {
            var e = ++kl;
            return Ka(t) + e
        }
        function ll(t, e) {
            var n;
            return t !== U && (n = t),
            e !== U && (n = n === U ? e : n + e),
            n
        }
        function ul(t) {
            return t && t.length ? v(t, Gs, aa) : U
        }
        function cl(t, e) {
            return t && t.length ? v(t, Jr(e), aa) : U
        }
        function fl(t) {
            return vl(t) / (t ? t.length : 0)
        }
        function dl(t) {
            return t && t.length ? v(t, Gs, Pa) : U
        }
        function pl(t, e) {
            return t && t.length ? v(t, Jr(e), Pa) : U
        }
        function hl(t, e) {
            var n;
            return t !== U && (n = t),
            e !== U && (n = n === U ? e : n - e),
            n
        }
        function vl(t) {
            return t && t.length ? x(t, Gs) : U
        }
        function ml(t, e) {
            return t && t.length ? x(t, Jr(e)) : U
        }
        S = S ? Nn.defaults({}, S, Nn.pick(An, fn)) : An;
        var gl = S.Date,
        yl = S.Error,
        bl = S.Math,
        _l = S.RegExp,
        xl = S.TypeError,
        wl = S.Array.prototype,
        Cl = S.Object.prototype,
        Tl = S.Function.prototype.toString,
        $l = Cl.hasOwnProperty,
        kl = 0,
        El = Tl.call(Object),
        Sl = Cl.toString,
        Al = An._,
        Nl = _l("^" + Tl.call($l).replace(se, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
        jl = S.Reflect,
        Rl = S.Symbol,
        Dl = S.Uint8Array,
        Il = S.clearTimeout,
        Ll = jl ? jl.enumerate : U,
        Ol = Object.getPrototypeOf,
        Hl = Object.getOwnPropertySymbols,
        Pl = "symbol" == typeof(Pl = Rl && Rl.iterator) ? Pl : U,
        Fl = Cl.propertyIsEnumerable,
        Wl = S.setTimeout,
        Ml = wl.splice,
        zl = bl.ceil,
        ql = bl.floor,
        Bl = S.isFinite,
        Ul = wl.join,
        Kl = Object.keys,
        Xl = bl.max,
        Vl = bl.min,
        Gl = S.parseInt,
        Ql = bl.random,
        Yl = wl.reverse,
        Jl = ti(S, "Map"),
        Zl = ti(S, "Set"),
        tu = ti(S, "WeakMap"),
        eu = ti(Object, "create"),
        nu = tu && new tu,
        ru = Jl ? Tl.call(Jl) : "",
        iu = Zl ? Tl.call(Zl) : "",
        ou = Rl ? Rl.prototype : U,
        au = Rl ? ou.valueOf : U,
        su = Rl ? ou.toString : U,
        lu = {};
        Ht.templateSettings = {
            escape: ee,
            evaluate: ne,
            interpolate: re,
            variable: "",
            imports: {
                _: Ht
            }
        };
        var uu = function () {
            function t() {}
            return function (e) {
                if (wa(e)) {
                    t.prototype = e;
                    var n = new t;
                    t.prototype = U
                }
                return n || {}
            }
        }
        (),
        cu = Rr(En),
        fu = Rr(Sn, !0),
        du = Dr(),
        pu = Dr(!0);
        Ll && !Fl.call({
            valueOf: 1
        }, "valueOf") && (qn = function (t) {
            return H(Ll(t))
        });
        var hu = nu ? function (t, e) {
            return nu.set(t, e),
            t
        }
         : Gs,
        vu = Zl && 2 === new Zl([1, 2]).size ? function (t) {
            return new Zl(t);
        }
         : el,
        mu = nu ? function (t) {
            return nu.get(t)
        }
         : el,
        gu = Jn("length"),
        yu = Hl || function () {
            return []
        };
        (Jl && ei(new Jl) != Nt || Zl && ei(new Zl) != It) && (ei = function (t) {
            var e = Sl.call(t),
            n = e == Rt ? t.constructor : null,
            r = "function" == typeof n ? Tl.call(n) : "";
            if (r) {
                if (r == ru)
                    return Nt;
                if (r == iu)
                    return It
            }
            return e
        });
        var bu = function () {
            var t = 0,
            e = 0;
            return function (n, r) {
                var i = Uu(),
                o = lt - (i - e);
                if (e = i, o > 0) {
                    if (++t >= st)
                        return n
                } else
                    t = 0;
                return hu(n, r)
            }
        }
        (),
        _u = Qo(function (t, e) {
            return tc(t) || (t = null == t ? [] : [Object(t)]),
            e = $n(e),
            r(t, e)
        }),
        xu = Qo(function (t, e) {
            return ca(t) ? bn(t, $n(e, !1, !0)) : []
        }),
        wu = Qo(function (t, e) {
            var n = Fi(e);
            return ca(n) && (n = U),
            ca(t) ? bn(t, $n(e, !1, !0), Jr(n)) : []
        }),
        Cu = Qo(function (t, e) {
            var n = Fi(e);
            return ca(n) && (n = U),
            ca(t) ? bn(t, $n(e, !1, !0), U, n) : []
        }),
        Tu = Qo(function (t) {
            var e = c(t, bi);
            return e.length && e[0] === t[0] ? On(e) : []
        }),
        $u = Qo(function (t) {
            var e = Fi(t),
            n = c(t, bi);
            return e === Fi(n) ? e = U : n.pop(),
            n.length && n[0] === t[0] ? On(n, Jr(e)) : []
        }),
        ku = Qo(function (t) {
            var e = Fi(t),
            n = c(t, bi);
            return e === Fi(n) ? e = U : n.pop(),
            n.length && n[0] === t[0] ? On(n, U, e) : []
        }),
        Eu = Qo(Mi),
        Su = Qo(function (t, e) {
            e = c($n(e), String);
            var n = an(t, e);
            return nr(t, e.sort(A)),
            n
        }),
        Au = Qo(function (t) {
            return pr($n(t, !1, !0))
        }),
        Nu = Qo(function (t) {
            var e = Fi(t);
            return ca(e) && (e = U),
            pr($n(t, !1, !0), Jr(e))
        }),
        ju = Qo(function (t) {
            var e = Fi(t);
            return ca(e) && (e = U),
            pr($n(t, !1, !0), U, e)
        }),
        Ru = Qo(function (t, e) {
            return ca(t) ? bn(t, e) : []
        }),
        Du = Qo(function (t) {
            return gr(s(t, ca))
        }),
        Iu = Qo(function (t) {
            var e = Fi(t);
            return ca(e) && (e = U),
            gr(s(t, ca), Jr(e))
        }),
        Lu = Qo(function (t) {
            var e = Fi(t);
            return ca(e) && (e = U),
            gr(s(t, ca), U, e)
        }),
        Ou = Qo(lo),
        Hu = Qo(function (t) {
            var e = t.length,
            n = e > 1 ? t[e - 1] : U;
            return n = "function" == typeof n ? (t.pop(), n) : U,
            uo(t, n)
        }),
        Pu = Qo(function (t) {
            t = $n(t);
            var e = t.length,
            n = e ? t[0] : 0,
            r = this.__wrapped__,
            i = function (e) {
                return an(e, t)
            };
            return !(e > 1 || this.__actions__.length) && r instanceof $e && O(n) ? (r = r.slice(n, +n + (e ? 1 : 0)), r.__actions__.push({
                    func: ho,
                    args: [i],
                    thisArg: U
                }), new Te(r, this.__chain__).thru(function (t) {
                    return e && !t.length && t.push(U),
                    t
                })) : this.thru(i)
        }),
        Fu = Nr(function (t, e, n) {
            $l.call(t, n) ? ++t[n] : t[n] = 1
        }),
        Wu = Nr(function (t, e, n) {
            $l.call(t, n) ? t[n].push(e) : t[n] = [e]
        }),
        Mu = Qo(function (t, e, r) {
            var i = -1,
            o = "function" == typeof e,
            a = ui(e),
            s = ua(t) ? Array(t.length) : [];
            return cu(t, function (t) {
                var l = o ? e : a && null != t ? t[e] : U;
                s[++i] = l ? n(l, t, r) : Hn(t, e, r)
            }),
            s
        }),
        zu = Nr(function (t, e, n) {
            t[n] = e
        }),
        qu = Nr(function (t, e, n) {
            t[n ? 0 : 1].push(e)
        }, function () {
            return [[], []]
        }),
        Bu = Qo(function (t, e) {
            if (null == t)
                return [];
            var n = e.length;
            return n > 1 && li(t, e[0], e[1]) ? e = [] : n > 2 && li(e[0], e[1], e[2]) && (e.length = 1),
            Gn(t, $n(e), [])
        }),
        Uu = gl.now,
        Ku = Qo(function (t, e, n) {
            var r = X;
            if (n.length) {
                var i = F(n, Ku.placeholder);
                r |= J
            }
            return Xr(t, r, e, n, i)
        }),
        Xu = Qo(function (t, e, n) {
            var r = X | V;
            if (n.length) {
                var i = F(n, Xu.placeholder);
                r |= J
            }
            return Xr(e, r, t, n, i)
        }),
        Vu = Qo(function (t, e) {
            return yn(t, 1, e)
        }),
        Gu = Qo(function (t, e, n) {
            return yn(t, qa(e) || 0, n)
        }),
        Qu = Qo(function (t, e) {
            e = c($n(e), Jr());
            var r = e.length;
            return Qo(function (i) {
                for (var o = -1, a = Vl(i.length, r); ++o < a; )
                    i[o] = e[o].call(this, i[o]);
                return n(t, this, i)
            })
        }),
        Yu = Qo(function (t, e) {
            var n = F(e, Yu.placeholder);
            return Xr(t, J, U, e, n)
        }),
        Ju = Qo(function (t, e) {
            var n = F(e, Ju.placeholder);
            return Xr(t, Z, U, e, n)
        }),
        Zu = Qo(function (t, e) {
            return Xr(t, et, U, U, U, $n(e))
        }),
        tc = Array.isArray,
        ec = jr(function (t, e) {
            Er(e, as(e), t)
        }),
        nc = jr(function (t, e) {
            Er(e, ss(e), t)
        }),
        rc = jr(function (t, e, n, r) {
            Sr(e, ss(e), t, r)
        }),
        ic = jr(function (t, e, n, r) {
            Sr(e, as(e), t, r)
        }),
        oc = Qo(function (t, e) {
            return an(t, $n(e))
        }),
        ac = Qo(function (t) {
            return t.push(U, tn),
            n(rc, U, t)
        }),
        sc = Qo(function (t) {
            return t.push(U, vi),
            n(cc, U, t)
        }),
        lc = Qo(Hn),
        uc = jr(function (t, e, n) {
            Xn(t, e, n)
        }),
        cc = jr(function (t, e, n, r) {
            Xn(t, e, n, r)
        }),
        fc = Qo(function (t, e) {
            return null == t ? {}
             : (e = c($n(e), String), Qn(t, bn(ss(t), e)))
        }),
        dc = Qo(function (t, e) {
            return null == t ? {}
             : Qn(t, $n(e))
        }),
        pc = Or(function (t, e, n) {
            return e = e.toLowerCase(),
            t + (n ? Ts(e) : e)
        }),
        hc = Or(function (t, e, n) {
            return t + (n ? "-" : "") + e.toLowerCase()
        }),
        vc = Or(function (t, e, n) {
            return t + (n ? " " : "") + e.toLowerCase()
        }),
        mc = Lr("toLowerCase"),
        gc = Lr("toUpperCase"),
        yc = Or(function (t, e, n) {
            return t + (n ? "_" : "") + e.toLowerCase()
        }),
        bc = Or(function (t, e, n) {
            return t + (n ? " " : "") + Ts(e)
        }),
        _c = Or(function (t, e, n) {
            return t + (n ? " " : "") + e.toUpperCase()
        }),
        xc = Qo(function (t, e) {
            try {
                return n(t, U, e)
            } catch (t) {
                return ga(t) ? t : new yl(t)
            }
        }),
        wc = Qo(function (t, e) {
            return i($n(e), function (e) {
                t[e] = Ku(t[e], t)
            }),
            t
        }),
        Cc = Fr(),
        Tc = Fr(!0),
        $c = Qo(function (t, e) {
            return function (n) {
                return Hn(n, t, e)
            }
        }),
        kc = Qo(function (t, e) {
            return function (n) {
                return Hn(t, n, e)
            }
        }),
        Ec = Mr(c),
        Sc = Mr(a),
        Ac = Mr(h),
        Nc = Br(),
        jc = Br(!0),
        Rc = Kr("ceil"),
        Dc = Kr("floor"),
        Ic = Kr("round");
        return Ht.prototype = _e.prototype,
        Te.prototype = uu(_e.prototype),
        Te.prototype.constructor = Te,
        $e.prototype = uu(_e.prototype),
        $e.prototype.constructor = $e,
        Ae.prototype = eu ? eu(null) : Cl,
        Ie.prototype.clear = Le,
        Ie.prototype["delete"] = Oe,
        Ie.prototype.get = He,
        Ie.prototype.has = Pe,
        Ie.prototype.set = Fe,
        We.prototype.push = ze,
        qe.prototype.clear = Be,
        qe.prototype["delete"] = Ue,
        qe.prototype.get = Ke,
        qe.prototype.has = Xe,
        qe.prototype.set = Ve,
        Xo.Cache = Ie,
        Ht.after = Wo,
        Ht.ary = Mo,
        Ht.assign = ec,
        Ht.assignIn = nc,
        Ht.assignInWith = rc,
        Ht.assignWith = ic,
        Ht.at = oc,
        Ht.before = zo,
        Ht.bind = Ku,
        Ht.bindAll = wc,
        Ht.bindKey = Xu,
        Ht.chain = fo,
        Ht.chunk = wi,
        Ht.compact = Ci,
        Ht.concat = _u,
        Ht.cond = Ks,
        Ht.conforms = Xs,
        Ht.constant = Vs,
        Ht.countBy = Fu,
        Ht.create = Xa,
        Ht.curry = qo,
        Ht.curryRight = Bo,
        Ht.debounce = Uo,
        Ht.defaults = ac,
        Ht.defaultsDeep = sc,
        Ht.defer = Vu,
        Ht.delay = Gu,
        Ht.difference = xu,
        Ht.differenceBy = wu,
        Ht.differenceWith = Cu,
        Ht.drop = Ti,
        Ht.dropRight = $i,
        Ht.dropRightWhile = ki,
        Ht.dropWhile = Ei,
        Ht.fill = Si,
        Ht.filter = To,
        Ht.flatMap = ji,
        Ht.flatten = Ri,
        Ht.flattenDeep = Di,
        Ht.flip = Ko,
        Ht.flow = Cc,
        Ht.flowRight = Tc,
        Ht.fromPairs = Ii,
        Ht.functions = ts,
        Ht.functionsIn = es,
        Ht.groupBy = Wu,
        Ht.initial = Hi,
        Ht.intersection = Tu,
        Ht.intersectionBy = $u,
        Ht.intersectionWith = ku,
        Ht.invert = os,
        Ht.invokeMap = Mu,
        Ht.iteratee = Qs,
        Ht.keyBy = zu,
        Ht.keys = as,
        Ht.keysIn = ss,
        Ht.map = No,
        Ht.mapKeys = ls,
        Ht.mapValues = us,
        Ht.matches = Ys,
        Ht.matchesProperty = Js,
        Ht.memoize = Xo,
        Ht.merge = uc,
        Ht.mergeWith = cc,
        Ht.method = $c,
        Ht.methodOf = kc,
        Ht.mixin = Zs,
        Ht.negate = Vo,
        Ht.nthArg = nl,
        Ht.omit = fc,
        Ht.omitBy = cs,
        Ht.once = Go,
        Ht.orderBy = jo,
        Ht.over = Ec,
        Ht.overArgs = Qu,
        Ht.overEvery = Sc,
        Ht.overSome = Ac,
        Ht.partial = Yu,
        Ht.partialRight = Ju,
        Ht.partition = qu,
        Ht.pick = dc,
        Ht.pickBy = fs,
        Ht.property = rl,
        Ht.propertyOf = il,
        Ht.pull = Eu,
        Ht.pullAll = Mi,
        Ht.pullAllBy = zi,
        Ht.pullAt = Su,
        Ht.range = Nc,
        Ht.rangeRight = jc,
        Ht.rearg = Zu,
        Ht.reject = Io,
        Ht.remove = qi,
        Ht.rest = Qo,
        Ht.reverse = Bi,
        Ht.sampleSize = Oo,
        Ht.set = ps,
        Ht.setWith = hs,
        Ht.shuffle = Ho,
        Ht.slice = Ui,
        Ht.sortBy = Bu,
        Ht.sortedUniq = Ji,
        Ht.sortedUniqBy = Zi,
        Ht.split = Ls,
        Ht.spread = Yo,
        Ht.tail = to,
        Ht.take = eo,
        Ht.takeRight = no,
        Ht.takeRightWhile = ro,
        Ht.takeWhile = io,
        Ht.tap = po,
        Ht.throttle = Jo,
        Ht.thru = ho,
        Ht.toArray = Wa,
        Ht.toPairs = vs,
        Ht.toPairsIn = ms,
        Ht.toPath = al,
        Ht.toPlainObject = Ba,
        Ht.transform = gs,
        Ht.unary = Zo,
        Ht.union = Au,
        Ht.unionBy = Nu,
        Ht.unionWith = ju,
        Ht.uniq = oo,
        Ht.uniqBy = ao,
        Ht.uniqWith = so,
        Ht.unset = ys,
        Ht.unzip = lo,
        Ht.unzipWith = uo,
        Ht.values = bs,
        Ht.valuesIn = _s,
        Ht.without = Ru,
        Ht.words = Us,
        Ht.wrap = ta,
        Ht.xor = Du,
        Ht.xorBy = Iu,
        Ht.xorWith = Lu,
        Ht.zip = Ou,
        Ht.zipObject = co,
        Ht.zipWith = Hu,
        Ht.extend = nc,
        Ht.extendWith = rc,
        Zs(Ht, Ht),
        Ht.add = ll,
        Ht.attempt = xc,
        Ht.camelCase = pc,
        Ht.capitalize = Ts,
        Ht.ceil = Rc,
        Ht.clamp = xs,
        Ht.clone = ea,
        Ht.cloneDeep = ra,
        Ht.cloneDeepWith = ia,
        Ht.cloneWith = na,
        Ht.deburr = $s,
        Ht.endsWith = ks,
        Ht.eq = oa,
        Ht.escape = Es,
        Ht.escapeRegExp = Ss,
        Ht.every = Co,
        Ht.find = $o,
        Ht.findIndex = Ai,
        Ht.findKey = Va,
        Ht.findLast = ko,
        Ht.findLastIndex = Ni,
        Ht.findLastKey = Ga,
        Ht.floor = Dc,
        Ht.forEach = Eo,
        Ht.forEachRight = So,
        Ht.forIn = Qa,
        Ht.forInRight = Ya,
        Ht.forOwn = Ja,
        Ht.forOwnRight = Za,
        Ht.get = ns,
        Ht.gt = aa,
        Ht.gte = sa,
        Ht.has = rs,
        Ht.hasIn = is,
        Ht.head = Li,
        Ht.identity = Gs,
        Ht.includes = Ao,
        Ht.indexOf = Oi,
        Ht.inRange = ws,
        Ht.invoke = lc,
        Ht.isArguments = la,
        Ht.isArray = tc,
        Ht.isArrayLike = ua,
        Ht.isArrayLikeObject = ca,
        Ht.isBoolean = fa,
        Ht.isDate = da,
        Ht.isElement = pa,
        Ht.isEmpty = ha,
        Ht.isEqual = va,
        Ht.isEqualWith = ma,
        Ht.isError = ga,
        Ht.isFinite = ya,
        Ht.isFunction = ba,
        Ht.isInteger = _a,
        Ht.isLength = xa,
        Ht.isMatch = Ta,
        Ht.isMatchWith = $a,
        Ht.isNaN = ka,
        Ht.isNative = Ea,
        Ht.isNil = Aa,
        Ht.isNull = Sa,
        Ht.isNumber = Na,
        Ht.isObject = wa,
        Ht.isObjectLike = Ca,
        Ht.isPlainObject = ja,
        Ht.isRegExp = Ra,
        Ht.isSafeInteger = Da,
        Ht.isString = Ia,
        Ht.isSymbol = La,
        Ht.isTypedArray = Oa,
        Ht.isUndefined = Ha,
        Ht.join = Pi,
        Ht.kebabCase = hc,
        Ht.last = Fi,
        Ht.lastIndexOf = Wi,
        Ht.lowerCase = vc,
        Ht.lowerFirst = mc,
        Ht.lt = Pa,
        Ht.lte = Fa,
        Ht.max = ul,
        Ht.maxBy = cl,
        Ht.mean = fl,
        Ht.min = dl,
        Ht.minBy = pl,
        Ht.noConflict = tl,
        Ht.noop = el,
        Ht.now = Uu,
        Ht.pad = As,
        Ht.padEnd = Ns,
        Ht.padStart = js,
        Ht.parseInt = Rs,
        Ht.random = Cs,
        Ht.reduce = Ro,
        Ht.reduceRight = Do,
        Ht.repeat = Ds,
        Ht.replace = Is,
        Ht.result = ds,
        Ht.round = Ic,
        Ht.runInContext = B,
        Ht.sample = Lo,
        Ht.size = Po,
        Ht.snakeCase = yc,
        Ht.some = Fo,
        Ht.sortedIndex = Ki,
        Ht.sortedIndexBy = Xi,
        Ht.sortedIndexOf = Vi,
        Ht.sortedLastIndex = Gi,
        Ht.sortedLastIndexBy = Qi,
        Ht.sortedLastIndexOf = Yi,
        Ht.startCase = bc,
        Ht.startsWith = Os,
        Ht.subtract = hl,
        Ht.sum = vl,
        Ht.sumBy = ml,
        Ht.template = Hs,
        Ht.times = ol,
        Ht.toInteger = Ma,
        Ht.toLength = za,
        Ht.toLower = Ps,
        Ht.toNumber = qa,
        Ht.toSafeInteger = Ua,
        Ht.toString = Ka,
        Ht.toUpper = Fs,
        Ht.trim = Ws,
        Ht.trimEnd = Ms,
        Ht.trimStart = zs,
        Ht.truncate = qs,
        Ht.unescape = Bs,
        Ht.uniqueId = sl,
        Ht.upperCase = _c,
        Ht.upperFirst = gc,
        Ht.each = Eo,
        Ht.eachRight = So,
        Ht.first = Li,
        Zs(Ht, function () {
            var t = {};
            return En(Ht, function (e, n) {
                $l.call(Ht.prototype, n) || (t[n] = e)
            }),
            t
        }
            (), {
            chain: !1
        }),
        Ht.VERSION = K,
        i(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function (t) {
            Ht[t].placeholder = Ht
        }),
        i(["drop", "take"], function (t, e) {
            $e.prototype[t] = function (n) {
                var r = this.__filtered__;
                if (r && !e)
                    return new $e(this);
                n = n === U ? 1 : Xl(Ma(n), 0);
                var i = this.clone();
                return r ? i.__takeCount__ = Vl(n, i.__takeCount__) : i.__views__.push({
                    size: Vl(n, bt),
                    type: t + (i.__dir__ < 0 ? "Right" : "")
                }),
                i
            },
            $e.prototype[t + "Right"] = function (e) {
                return this.reverse()[t](e).reverse()
            }
        }),
        i(["filter", "map", "takeWhile"], function (t, e) {
            var n = e + 1,
            r = n == ct || n == dt;
            $e.prototype[t] = function (t) {
                var e = this.clone();
                return e.__iteratees__.push({
                    iteratee: Jr(t, 3),
                    type: n
                }),
                e.__filtered__ = e.__filtered__ || r,
                e
            }
        }),
        i(["head", "last"], function (t, e) {
            var n = "take" + (e ? "Right" : "");
            $e.prototype[t] = function () {
                return this[n](1).value()[0]
            }
        }),
        i(["initial", "tail"], function (t, e) {
            var n = "drop" + (e ? "" : "Right");
            $e.prototype[t] = function () {
                return this.__filtered__ ? new $e(this) : this[n](1)
            }
        }),
        $e.prototype.compact = function () {
            return this.filter(Gs)
        },
        $e.prototype.find = function (t) {
            return this.filter(t).head()
        },
        $e.prototype.findLast = function (t) {
            return this.reverse().find(t)
        },
        $e.prototype.invokeMap = Qo(function (t, e) {
            return "function" == typeof t ? new $e(this) : this.map(function (n) {
                return Hn(n, t, e)
            })
        }),
        $e.prototype.reject = function (t) {
            return t = Jr(t, 3),
            this.filter(function (e) {
                return !t(e)
            })
        },
        $e.prototype.slice = function (t, e) {
            t = Ma(t);
            var n = this;
            return n.__filtered__ && (t > 0 || e < 0) ? new $e(n) : (t < 0 ? n = n.takeRight(-t) : t && (n = n.drop(t)), e !== U && (e = Ma(e), n = e < 0 ? n.dropRight(-e) : n.take(e - t)), n)
        },
        $e.prototype.takeRightWhile = function (t) {
            return this.reverse().takeWhile(t).reverse()
        },
        $e.prototype.toArray = function () {
            return this.take(bt)
        },
        En($e.prototype, function (t, e) {
            var n = /^(?:filter|find|map|reject)|While$/.test(e),
            r = /^(?:head|last)$/.test(e),
            i = Ht[r ? "take" + ("last" == e ? "Right" : "") : e],
            o = r || /^find/.test(e);
            i && (Ht.prototype[e] = function () {
                var e = this.__wrapped__,
                a = r ? [1] : arguments,
                s = e instanceof $e,
                l = a[0],
                u = s || tc(e),
                c = function (t) {
                    var e = i.apply(Ht, f([t], a));
                    return r && d ? e[0] : e
                };
                u && n && "function" == typeof l && 1 != l.length && (s = u = !1);
                var d = this.__chain__,
                p = !!this.__actions__.length,
                h = o && !d,
                v = s && !p;
                if (!o && u) {
                    e = v ? e : new $e(this);
                    var m = t.apply(e, a);
                    return m.__actions__.push({
                        func: ho,
                        args: [c],
                        thisArg: U
                    }),
                    new Te(m, d)
                }
                return h && v ? t.apply(this, a) : (m = this.thru(c), h ? r ? m.value()[0] : m.value() : m)
            })
        }),
        i(["pop", "push", "shift", "sort", "splice", "unshift"], function (t) {
            var e = wl[t],
            n = /^(?:push|sort|unshift)$/.test(t) ? "tap" : "thru",
            r = /^(?:pop|shift)$/.test(t);
            Ht.prototype[t] = function () {
                var t = arguments;
                return r && !this.__chain__ ? e.apply(this.value(), t) : this[n](function (n) {
                    return e.apply(n, t)
                })
            }
        }),
        En($e.prototype, function (t, e) {
            var n = Ht[e];
            if (n) {
                var r = n.name + "",
                i = lu[r] || (lu[r] = []);
                i.push({
                    name: e,
                    func: n
                })
            }
        }),
        lu[Wr(U, V).name] = [{
                name: "wrapper",
                func: U
            }
        ],
        $e.prototype.clone = ke,
        $e.prototype.reverse = Ee,
        $e.prototype.value = Se,
        Ht.prototype.at = Pu,
        Ht.prototype.chain = vo,
        Ht.prototype.commit = mo,
        Ht.prototype.flatMap = go,
        Ht.prototype.next = yo,
        Ht.prototype.plant = _o,
        Ht.prototype.reverse = xo,
        Ht.prototype.toJSON = Ht.prototype.valueOf = Ht.prototype.value = wo,
        Pl && (Ht.prototype[Pl] = bo),
        Ht
    }
    var U,
    K = "4.0.1",
    X = 1,
    V = 2,
    G = 4,
    Q = 8,
    Y = 16,
    J = 32,
    Z = 64,
    tt = 128,
    et = 256,
    nt = 512,
    rt = 1,
    it = 2,
    ot = 30,
    at = "...",
    st = 150,
    lt = 16,
    ut = 200,
    ct = 1,
    ft = 2,
    dt = 3,
    pt = "Expected a function",
    ht = "__lodash_hash_undefined__",
    vt = 1 / 0,
    mt = 9007199254740991,
    gt = 1.7976931348623157e308,
    yt = NaN,
    bt = 4294967295,
    _t = bt - 1,
    xt = bt >>> 1,
    wt = "__lodash_placeholder__",
    Ct = "[object Arguments]",
    Tt = "[object Array]",
    $t = "[object Boolean]",
    kt = "[object Date]",
    Et = "[object Error]",
    St = "[object Function]",
    At = "[object GeneratorFunction]",
    Nt = "[object Map]",
    jt = "[object Number]",
    Rt = "[object Object]",
    Dt = "[object RegExp]",
    It = "[object Set]",
    Lt = "[object String]",
    Ot = "[object Symbol]",
    Ht = "[object WeakMap]",
    Pt = "[object ArrayBuffer]",
    Ft = "[object Float32Array]",
    Wt = "[object Float64Array]",
    Mt = "[object Int8Array]",
    zt = "[object Int16Array]",
    qt = "[object Int32Array]",
    Bt = "[object Uint8Array]",
    Ut = "[object Uint8ClampedArray]",
    Kt = "[object Uint16Array]",
    Xt = "[object Uint32Array]",
    Vt = /\b__p \+= '';/g,
    Gt = /\b(__p \+=) '' \+/g,
    Qt = /(__e\(.*?\)|\b__t\)) \+\n'';/g,
    Yt = /&(?:amp|lt|gt|quot|#39|#96);/g,
    Jt = /[&<>"'`]/g,
    Zt = RegExp(Yt.source),
    te = RegExp(Jt.source),
    ee = /<%-([\s\S]+?)%>/g,
    ne = /<%([\s\S]+?)%>/g,
    re = /<%=([\s\S]+?)%>/g,
    ie = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    oe = /^\w*$/,
    ae = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]/g,
    se = /[\\^$.*+?()[\]{}|]/g,
    le = RegExp(se.source),
    ue = /^\s+|\s+$/g,
    ce = /^\s+/,
    fe = /\s+$/,
    de = /\\(\\)?/g,
    pe = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,
    he = /\w*$/,
    ve = /^0x/i,
    me = /^[-+]0x[0-9a-f]+$/i,
    ge = /^0b[01]+$/i,
    ye = /^\[object .+?Constructor\]$/,
    be = /^0o[0-7]+$/i,
    _e = /^(?:0|[1-9]\d*)$/,
    xe = /[\xc0-\xd6\xd8-\xde\xdf-\xf6\xf8-\xff]/g,
    we = /($^)/,
    Ce = /['\n\r\u2028\u2029\\]/g,
    Te = "\\ud800-\\udfff",
    $e = "\\u0300-\\u036f\\ufe20-\\ufe23",
    ke = "\\u20d0-\\u20f0",
    Ee = "\\u2700-\\u27bf",
    Se = "a-z\\xdf-\\xf6\\xf8-\\xff",
    Ae = "\\xac\\xb1\\xd7\\xf7",
    Ne = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",
    je = "\\u2018\\u2019\\u201c\\u201d",
    Re = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",
    De = "A-Z\\xc0-\\xd6\\xd8-\\xde",
    Ie = "\\ufe0e\\ufe0f",
    Le = Ae + Ne + je + Re,
    Oe = "[" + Te + "]",
    He = "[" + Le + "]",
    Pe = "[" + $e + ke + "]",
    Fe = "\\d+",
    We = "[" + Ee + "]",
    Me = "[" + Se + "]",
    ze = "[^" + Te + Le + Fe + Ee + Se + De + "]",
    qe = "\\ud83c[\\udffb-\\udfff]",
    Be = "(?:" + Pe + "|" + qe + ")",
    Ue = "[^" + Te + "]",
    Ke = "(?:\\ud83c[\\udde6-\\uddff]){2}",
    Xe = "[\\ud800-\\udbff][\\udc00-\\udfff]",
    Ve = "[" + De + "]",
    Ge = "\\u200d",
    Qe = "(?:" + Me + "|" + ze + ")",
    Ye = "(?:" + Ve + "|" + ze + ")",
    Je = Be + "?",
    Ze = "[" + Ie + "]?",
    tn = "(?:" + Ge + "(?:" + [Ue, Ke, Xe].join("|") + ")" + Ze + Je + ")*",
    en = Ze + Je + tn,
    nn = "(?:" + [We, Ke, Xe].join("|") + ")" + en,
    rn = "(?:" + [Ue + Pe + "?", Pe, Ke, Xe, Oe].join("|") + ")",
    on = RegExp(Pe, "g"),
    an = RegExp(qe + "(?=" + qe + ")|" + rn + en, "g"),
    sn = RegExp("[" + Ge + Te + $e + ke + Ie + "]"),
    ln = /[a-zA-Z0-9]+/g,
    un = RegExp([Ve + "?" + Me + "+(?=" + [He, Ve, "$"].join("|") + ")", Ye + "+(?=" + [He, Ve + Qe, "$"].join("|") + ")", Ve + "?" + Qe + "+", Ve + "+", Fe, nn].join("|"), "g"),
    cn = /[a-z][A-Z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,
    fn = ["Array", "Date", "Error", "Float32Array", "Float64Array", "Function", "Int8Array", "Int16Array", "Int32Array", "Map", "Math", "Object", "Reflect", "RegExp", "Set", "String", "Symbol", "TypeError", "Uint8Array", "Uint8ClampedArray", "Uint16Array", "Uint32Array", "WeakMap", "_", "clearTimeout", "isFinite", "parseInt", "setTimeout"],
    dn = -1,
    pn = {};
    pn[Ft] = pn[Wt] = pn[Mt] = pn[zt] = pn[qt] = pn[Bt] = pn[Ut] = pn[Kt] = pn[Xt] = !0,
    pn[Ct] = pn[Tt] = pn[Pt] = pn[$t] = pn[kt] = pn[Et] = pn[St] = pn[Nt] = pn[jt] = pn[Rt] = pn[Dt] = pn[It] = pn[Lt] = pn[Ht] = !1;
    var hn = {};
    hn[Ct] = hn[Tt] = hn[Pt] = hn[$t] = hn[kt] = hn[Ft] = hn[Wt] = hn[Mt] = hn[zt] = hn[qt] = hn[Nt] = hn[jt] = hn[Rt] = hn[Dt] = hn[It] = hn[Lt] = hn[Ot] = hn[Bt] = hn[Ut] = hn[Kt] = hn[Xt] = !0,
    hn[Et] = hn[St] = hn[Ht] = !1;
    var vn = {
        "\xc0": "A",
        "\xc1": "A",
        "\xc2": "A",
        "\xc3": "A",
        "\xc4": "A",
        "\xc5": "A",
        "\xe0": "a",
        "\xe1": "a",
        "\xe2": "a",
        "\xe3": "a",
        "\xe4": "a",
        "\xe5": "a",
        "\xc7": "C",
        "\xe7": "c",
        "\xd0": "D",
        "\xf0": "d",
        "\xc8": "E",
        "\xc9": "E",
        "\xca": "E",
        "\xcb": "E",
        "\xe8": "e",
        "\xe9": "e",
        "\xea": "e",
        "\xeb": "e",
        "\xcc": "I",
        "\xcd": "I",
        "\xce": "I",
        "\xcf": "I",
        "\xec": "i",
        "\xed": "i",
        "\xee": "i",
        "\xef": "i",
        "\xd1": "N",
        "\xf1": "n",
        "\xd2": "O",
        "\xd3": "O",
        "\xd4": "O",
        "\xd5": "O",
        "\xd6": "O",
        "\xd8": "O",
        "\xf2": "o",
        "\xf3": "o",
        "\xf4": "o",
        "\xf5": "o",
        "\xf6": "o",
        "\xf8": "o",
        "\xd9": "U",
        "\xda": "U",
        "\xdb": "U",
        "\xdc": "U",
        "\xf9": "u",
        "\xfa": "u",
        "\xfb": "u",
        "\xfc": "u",
        "\xdd": "Y",
        "\xfd": "y",
        "\xff": "y",
        "\xc6": "Ae",
        "\xe6": "ae",
        "\xde": "Th",
        "\xfe": "th",
        "\xdf": "ss"
    },
    mn = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
        "`": "&#96;"
    },
    gn = {
        "&amp;": "&",
        "&lt;": "<",
        "&gt;": ">",
        "&quot;": '"',
        "&#39;": "'",
        "&#96;": "`"
    },
    yn = {
        "function": !0,
        object: !0
    },
    bn = {
        "\\": "\\",
        "'": "'",
        "\n": "n",
        "\r": "r",
        "\u2028": "u2028",
        "\u2029": "u2029"
    },
    _n = parseFloat,
    xn = parseInt,
    wn = yn[typeof exports] && exports && !exports.nodeType ? exports : null,
    Cn = yn[typeof module] && module && !module.nodeType ? module : null,
    Tn = S(wn && Cn && "object" == typeof global && global),
    $n = S(yn[typeof self] && self),
    kn = S(yn[typeof window] && window),
    En = Cn && Cn.exports === wn ? wn : null,
    Sn = S(yn[typeof this] && this),
    An = Tn || kn !== (Sn && Sn.window) && kn || $n || Sn || Function("return this")(),
    Nn = B();
    (kn || $n || {})._ = Nn,
    "function" == typeof define && "object" == typeof define.amd && define.amd ? define(function () {
        return Nn
    }) : wn && Cn ? (En && ((Cn.exports = Nn)._ = Nn), wn._ = Nn) : An._ = Nn
}
.call(this), function (t) {
    if ("object" == typeof exports && "undefined" != typeof module)
        module.exports = t();
    else if ("function" == typeof define && define.amd)
        define([], t);
    else {
        var e;
        e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this,
        e.Clipboard = t()
    }
}
(function () {
    var t;
    return function t(e, n, r) {
        function i(a, s) {
            if (!n[a]) {
                if (!e[a]) {
                    var l = "function" == typeof require && require;
                    if (!s && l)
                        return l(a, !0);
                    if (o)
                        return o(a, !0);
                    var u = new Error("Cannot find module '" + a + "'");
                    throw u.code = "MODULE_NOT_FOUND",
                    u
                }
                var c = n[a] = {
                    exports: {}
                };
                e[a][0].call(c.exports, function (t) {
                    var n = e[a][1][t];
                    return i(n ? n : t)
                }, c, c.exports, t, e, n, r)
            }
            return n[a].exports
        }
        for (var o = "function" == typeof require && require, a = 0; a < r.length; a++)
            i(r[a]);
        return i
    }
    ({
        1: [function (t, e) {
                function n(t, e) {
                    for (; t && t.nodeType !== r; ) {
                        if ("function" == typeof t.matches && t.matches(e))
                            return t;
                        t = t.parentNode
                    }
                }
                var r = 9;
                if ("undefined" != typeof Element && !Element.prototype.matches) {
                    var i = Element.prototype;
                    i.matches = i.matchesSelector || i.mozMatchesSelector || i.msMatchesSelector || i.oMatchesSelector || i.webkitMatchesSelector
                }
                e.exports = n
            }, {}
        ],
        2: [function (t, e) {
                function n(t, e, n, i, o) {
                    var a = r.apply(this, arguments);
                    return t.addEventListener(n, a, o), {
                        destroy: function () {
                            t.removeEventListener(n, a, o)
                        }
                    }
                }
                function r(t, e, n, r) {
                    return function (n) {
                        n.delegateTarget = i(n.target, e),
                        n.delegateTarget && r.call(t, n)
                    }
                }
                var i = t("./closest");
                e.exports = n
            }, {
                "./closest": 1
            }
        ],
        3: [function (t, e, n) {
                n.node = function (t) {
                    return void 0 !== t && t instanceof HTMLElement && 1 === t.nodeType
                },
                n.nodeList = function (t) {
                    var e = Object.prototype.toString.call(t);
                    return void 0 !== t && ("[object NodeList]" === e || "[object HTMLCollection]" === e) && "length" in t && (0 === t.length || n.node(t[0]))
                },
                n.string = function (t) {
                    return "string" == typeof t || t instanceof String
                },
                n.fn = function (t) {
                    var e = Object.prototype.toString.call(t);
                    return "[object Function]" === e
                }
            }, {}
        ],
        4: [function (t, e) {
                function n(t, e, n) {
                    if (!t && !e && !n)
                        throw new Error("Missing required arguments");
                    if (!a.string(e))
                        throw new TypeError("Second argument must be a String");
                    if (!a.fn(n))
                        throw new TypeError("Third argument must be a Function");
                    if (a.node(t))
                        return r(t, e, n);
                    if (a.nodeList(t))
                        return i(t, e, n);
                    if (a.string(t))
                        return o(t, e, n);
                    throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")
                }
                function r(t, e, n) {
                    return t.addEventListener(e, n), {
                        destroy: function () {
                            t.removeEventListener(e, n)
                        }
                    }
                }
                function i(t, e, n) {
                    return Array.prototype.forEach.call(t, function (t) {
                        t.addEventListener(e, n)
                    }), {
                        destroy: function () {
                            Array.prototype.forEach.call(t, function (t) {
                                t.removeEventListener(e, n)
                            })
                        }
                    }
                }
                function o(t, e, n) {
                    return s(document.body, t, e, n)
                }
                var a = t("./is"),
                s = t("delegate");
                e.exports = n
            }, {
                "./is": 3,
                delegate: 2
            }
        ],
        5: [function (t, e) {
                function n(t) {
                    var e;
                    if ("SELECT" === t.nodeName)
                        t.focus(), e = t.value;
                    else if ("INPUT" === t.nodeName || "TEXTAREA" === t.nodeName) {
                        var n = t.hasAttribute("readonly");
                        n || t.setAttribute("readonly", ""),
                        t.select(),
                        t.setSelectionRange(0, t.value.length),
                        n || t.removeAttribute("readonly"),
                        e = t.value
                    } else {
                        t.hasAttribute("contenteditable") && t.focus();
                        var r = window.getSelection(),
                        i = document.createRange();
                        i.selectNodeContents(t),
                        r.removeAllRanges(),
                        r.addRange(i),
                        e = r.toString()
                    }
                    return e
                }
                e.exports = n
            }, {}
        ],
        6: [function (t, e) {
                function n() {}
                n.prototype = {
                    on: function (t, e, n) {
                        var r = this.e || (this.e = {});
                        return (r[t] || (r[t] = [])).push({
                            fn: e,
                            ctx: n
                        }),
                        this
                    },
                    once: function (t, e, n) {
                        function r() {
                            i.off(t, r),
                            e.apply(n, arguments)
                        }
                        var i = this;
                        return r._ = e,
                        this.on(t, r, n)
                    },
                    emit: function (t) {
                        var e = [].slice.call(arguments, 1),
                        n = ((this.e || (this.e = {}))[t] || []).slice(),
                        r = 0,
                        i = n.length;
                        for (r; r < i; r++)
                            n[r].fn.apply(n[r].ctx, e);
                        return this
                    },
                    off: function (t, e) {
                        var n = this.e || (this.e = {}),
                        r = n[t],
                        i = [];
                        if (r && e)
                            for (var o = 0, a = r.length; o < a; o++)
                                r[o].fn !== e && r[o].fn._ !== e && i.push(r[o]);
                        return i.length ? n[t] = i : delete n[t],
                        this
                    }
                },
                e.exports = n
            }, {}
        ],
        7: [function (e, n, r) {
                !function (i, o) {
                    if ("function" == typeof t && t.amd)
                        t(["module", "select"], o);
                    else if ("undefined" != typeof r)
                        o(n, e("select"));
                    else {
                        var a = {
                            exports: {}
                        };
                        o(a, i.select),
                        i.clipboardAction = a.exports
                    }
                }
                (this, function (t, e) {
                    "use strict";
                    function n(t) {
                        return t && t.__esModule ? t : {
                            "default": t
                        }
                    }
                    function r(t, e) {
                        if (!(t instanceof e))
                            throw new TypeError("Cannot call a class as a function")
                    }
                    var i = n(e),
                    o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                        return typeof t
                    }
                     : function (t) {
                        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                    },
                    a = function () {
                        function t(t, e) {
                            for (var n = 0; n < e.length; n++) {
                                var r = e[n];
                                r.enumerable = r.enumerable || !1,
                                r.configurable = !0,
                                "value" in r && (r.writable = !0),
                                Object.defineProperty(t, r.key, r)
                            }
                        }
                        return function (e, n, r) {
                            return n && t(e.prototype, n),
                            r && t(e, r),
                            e
                        }
                    }
                    (),
                    s = function () {
                        function t(e) {
                            r(this, t),
                            this.resolveOptions(e),
                            this.initSelection()
                        }
                        return a(t, [{
                                    key: "resolveOptions",
                                    value: function () {
                                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                                        this.action = t.action,
                                        this.container = t.container,
                                        this.emitter = t.emitter,
                                        this.target = t.target,
                                        this.text = t.text,
                                        this.trigger = t.trigger,
                                        this.selectedText = ""
                                    }
                                }, {
                                    key: "initSelection",
                                    value: function () {
                                        this.text ? this.selectFake() : this.target && this.selectTarget()
                                    }
                                }, {
                                    key: "selectFake",
                                    value: function () {
                                        var t = this,
                                        e = "rtl" == document.documentElement.getAttribute("dir");
                                        this.removeFake(),
                                        this.fakeHandlerCallback = function () {
                                            return t.removeFake()
                                        },
                                        this.fakeHandler = this.container.addEventListener("click", this.fakeHandlerCallback) || !0,
                                        this.fakeElem = document.createElement("textarea"),
                                        this.fakeElem.style.fontSize = "12pt",
                                        this.fakeElem.style.border = "0",
                                        this.fakeElem.style.padding = "0",
                                        this.fakeElem.style.margin = "0",
                                        this.fakeElem.style.position = "absolute",
                                        this.fakeElem.style[e ? "right" : "left"] = "-9999px";
                                        var n = window.pageYOffset || document.documentElement.scrollTop;
                                        this.fakeElem.style.top = n + "px",
                                        this.fakeElem.setAttribute("readonly", ""),
                                        this.fakeElem.value = this.text,
                                        this.container.appendChild(this.fakeElem),
                                        this.selectedText = (0, i["default"])(this.fakeElem),
                                        this.copyText()
                                    }
                                }, {
                                    key: "removeFake",
                                    value: function () {
                                        this.fakeHandler && (this.container.removeEventListener("click", this.fakeHandlerCallback), this.fakeHandler = null, this.fakeHandlerCallback = null),
                                        this.fakeElem && (this.container.removeChild(this.fakeElem), this.fakeElem = null)
                                    }
                                }, {
                                    key: "selectTarget",
                                    value: function () {
                                        this.selectedText = (0, i["default"])(this.target),
                                        this.copyText()
                                    }
                                }, {
                                    key: "copyText",
                                    value: function () {
                                        var t = void 0;
                                        try {
                                            t = document.execCommand(this.action)
                                        } catch (e) {
                                            t = !1
                                        }
                                        this.handleResult(t)
                                    }
                                }, {
                                    key: "handleResult",
                                    value: function (t) {
                                        this.emitter.emit(t ? "success" : "error", {
                                            action: this.action,
                                            text: this.selectedText,
                                            trigger: this.trigger,
                                            clearSelection: this.clearSelection.bind(this)
                                        })
                                    }
                                }, {
                                    key: "clearSelection",
                                    value: function () {
                                        this.trigger && this.trigger.focus(),
                                        window.getSelection().removeAllRanges()
                                    }
                                }, {
                                    key: "destroy",
                                    value: function () {
                                        this.removeFake()
                                    }
                                }, {
                                    key: "action",
                                    set: function () {
                                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "copy";
                                        if (this._action = t, "copy" !== this._action && "cut" !== this._action)
                                            throw new Error('Invalid "action" value, use either "copy" or "cut"')
                                    },
                                    get: function () {
                                        return this._action
                                    }
                                }, {
                                    key: "target",
                                    set: function (t) {
                                        if (void 0 !== t) {
                                            if (!t || "object" !== ("undefined" == typeof t ? "undefined" : o(t)) || 1 !== t.nodeType)
                                                throw new Error('Invalid "target" value, use a valid Element');
                                            if ("copy" === this.action && t.hasAttribute("disabled"))
                                                throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');
                                            if ("cut" === this.action && (t.hasAttribute("readonly") || t.hasAttribute("disabled")))
                                                throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');
                                            this._target = t
                                        }
                                    },
                                    get: function () {
                                        return this._target
                                    }
                                }
                            ]),
                        t
                    }
                    ();
                    t.exports = s
                })
            }, {
                select: 5
            }
        ],
        8: [function (e, n, r) {
                !function (i, o) {
                    if ("function" == typeof t && t.amd)
                        t(["module", "./clipboard-action", "tiny-emitter", "good-listener"], o);
                    else if ("undefined" != typeof r)
                        o(n, e("./clipboard-action"), e("tiny-emitter"), e("good-listener"));
                    else {
                        var a = {
                            exports: {}
                        };
                        o(a, i.clipboardAction, i.tinyEmitter, i.goodListener),
                        i.clipboard = a.exports
                    }
                }
                (this, function (t, e, n, r) {
                    "use strict";
                    function i(t) {
                        return t && t.__esModule ? t : {
                            "default": t
                        }
                    }
                    function o(t, e) {
                        if (!(t instanceof e))
                            throw new TypeError("Cannot call a class as a function")
                    }
                    function a(t, e) {
                        if (!t)
                            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !e || "object" != typeof e && "function" != typeof e ? t : e
                    }
                    function s(t, e) {
                        if ("function" != typeof e && null !== e)
                            throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                        t.prototype = Object.create(e && e.prototype, {
                            constructor: {
                                value: t,
                                enumerable: !1,
                                writable: !0,
                                configurable: !0
                            }
                        }),
                        e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                    }
                    function l(t, e) {
                        var n = "data-clipboard-" + t;
                        if (e.hasAttribute(n))
                            return e.getAttribute(n)
                    }
                    var u = i(e),
                    c = i(n),
                    f = i(r),
                    d = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                        return typeof t
                    }
                     : function (t) {
                        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                    },
                    p = function () {
                        function t(t, e) {
                            for (var n = 0; n < e.length; n++) {
                                var r = e[n];
                                r.enumerable = r.enumerable || !1,
                                r.configurable = !0,
                                "value" in r && (r.writable = !0),
                                Object.defineProperty(t, r.key, r)
                            }
                        }
                        return function (e, n, r) {
                            return n && t(e.prototype, n),
                            r && t(e, r),
                            e
                        }
                    }
                    (),
                    h = function (t) {
                        function e(t, n) {
                            o(this, e);
                            var r = a(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this));
                            return r.resolveOptions(n),
                            r.listenClick(t),
                            r
                        }
                        return s(e, t),
                        p(e, [{
                                    key: "resolveOptions",
                                    value: function () {
                                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                                        this.action = "function" == typeof t.action ? t.action : this.defaultAction,
                                        this.target = "function" == typeof t.target ? t.target : this.defaultTarget,
                                        this.text = "function" == typeof t.text ? t.text : this.defaultText,
                                        this.container = "object" === d(t.container) ? t.container : document.body
                                    }
                                }, {
                                    key: "listenClick",
                                    value: function (t) {
                                        var e = this;
                                        this.listener = (0, f["default"])(t, "click", function (t) {
                                            return e.onClick(t)
                                        })
                                    }
                                }, {
                                    key: "onClick",
                                    value: function (t) {
                                        var e = t.delegateTarget || t.currentTarget;
                                        this.clipboardAction && (this.clipboardAction = null),
                                        this.clipboardAction = new u["default"]({
                                            action: this.action(e),
                                            target: this.target(e),
                                            text: this.text(e),
                                            container: this.container,
                                            trigger: e,
                                            emitter: this
                                        })
                                    }
                                }, {
                                    key: "defaultAction",
                                    value: function (t) {
                                        return l("action", t)
                                    }
                                }, {
                                    key: "defaultTarget",
                                    value: function (t) {
                                        var e = l("target", t);
                                        if (e)
                                            return document.querySelector(e)
                                    }
                                }, {
                                    key: "defaultText",
                                    value: function (t) {
                                        return l("text", t)
                                    }
                                }, {
                                    key: "destroy",
                                    value: function () {
                                        this.listener.destroy(),
                                        this.clipboardAction && (this.clipboardAction.destroy(), this.clipboardAction = null)
                                    }
                                }
                            ], [{
                                    key: "isSupported",
                                    value: function () {
                                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ["copy", "cut"],
                                        e = "string" == typeof t ? [t] : t,
                                        n = !!document.queryCommandSupported;
                                        return e.forEach(function (t) {
                                            n = n && !!document.queryCommandSupported(t)
                                        }),
                                        n
                                    }
                                }
                            ]),
                        e
                    }
                    (c["default"]);
                    t.exports = h
                })
            }, {
                "./clipboard-action": 7,
                "good-listener": 4,
                "tiny-emitter": 6
            }
        ]
    }, {}, [8])(8)
}), ResizableSidebar.prototype.add_handle = function () {
    var t = $("<a>").attr("href", "javascript:void(0);");
    t.attr("aria-hidden", "true"),
    t.attr("aria-label", "resizable sidebar handle"),
    t.addClass("resizable-sidebar-handle"),
    this.$sidebar.append(t),
    this.$handle = t
}, ResizableSidebar.prototype.bind_events = function () {
    var t = this;
    t.$handle.on("mousedown", function (e) {
        t.isResizing = !0,
        t.lastDownX = e.clientX
    }),
    t.$handle.on("dragstart", function (t) {
        return t.preventDefault(),
        !1
    }),
    $(document).on("mousemove", function (e) {
        if (t.isResizing) {
            var n = e.clientX,
            r = t.$row.width() + t.$row.offset().left - n;
            r = Math.max(r, 200);
            var i = Math.max(t.$row.width() - r, 300);
            t.$sidebar.css("width", 0),
            t.$content_pane.css("width", i),
            t.$sidebar.css("width", t.$row.width() - i),
            $(".infinite-record-scrollbar").length > 0 && $(".infinite-record-scrollbar").css("left", t.$row.offset().left + i - 20)
        }
    }).on("mouseup", function () {
        t.isResizing = !1
    }),
    $(window).on("blur", function () {
        t.isResizing = !1
    }),
    $(window).on("resize", function () {
        $(window).width() >= 992 ? t.$content_pane.width(t.$row.innerWidth() - t.$sidebar.outerWidth(!0) - 40) : t.$content_pane.width(t.$row.innerWidth() - 10)
    })
}, $(function () {
    $(".resizable-sidebar").each(function () {
        new ResizableSidebar($(this))
    })
}), function (t) {
    "use strict";
    var e = function (t) {
        return (t || "ui-id") + "-" + Math.floor(1e3 * Math.random() + 1)
    },
    n = function (e, n) {
        var i,
        o,
        a,
        s = e.nodeName.toLowerCase();
        return "area" === s ? (i = e.parentNode, o = i.name, !(!e.href || !o || "map" !== i.nodeName.toLowerCase()) && (a = t("img[usemap='#" + o + "']")[0], !!a && r(a))) : (/input|select|textarea|button|object/.test(s) ? !e.disabled : "a" === s ? e.href || n : n) && r(e)
    },
    r = function (e) {
        return t.expr.filters.visible(e) && !t(e).parents().addBack().filter(function () {
            return "hidden" === t.css(this, "visibility")
        }).length
    };
    t.extend(t.expr[":"], {
        data: t.expr.createPseudo ? t.expr.createPseudo(function (e) {
            return function (n) {
                return !!t.data(n, e)
            }
        }) : function (e, n, r) {
            return !!t.data(e, r[3])
        },
        focusable: function (e) {
            return n(e, !isNaN(t.attr(e, "tabindex")))
        },
        tabbable: function (e) {
            var r = t.attr(e, "tabindex"),
            i = isNaN(r);
            return (i || r >= 0) && n(e, !i)
        }
    }),
    t(".modal-dialog").attr({
        role: "document"
    });
    var i = t.fn.modal.Constructor.prototype.hide;
    t.fn.modal.Constructor.prototype.hide = function () {
        i.apply(this, arguments),
        t(document).off("keydown.bs.modal")
    };
    var o = t.fn.modal.Constructor.prototype.enforceFocus;
    t.fn.modal.Constructor.prototype.enforceFocus = function () {
        var e = this.$element.find(".modal-content"),
        n = e.find(":tabbable"),
        r = t(n[n.length - 1]),
        i = t(n[0]);
        r.on("keydown.bs.modal", t.proxy(function (t) {
                9 !== t.keyCode || t.shiftKey | t.ctrlKey | t.metaKey | t.altKey || (t.preventDefault(), i.focus())
            }, this)),
        i.on("keydown.bs.modal", t.proxy(function (t) {
                9 === t.keyCode && t.shiftKey && (t.preventDefault(), r.focus())
            }, this)),
        o.apply(this, arguments)
    };
    var a,
    s,
    l = "[data-toggle=dropdown]",
    u = 200,
    c = t(l).parent().find("ul").attr("role", "menu"),
    f = c.find("li").attr("role", "presentation");
    f.find("a").attr({
        role: "menuitem",
        tabIndex: "-1"
    }),
    t(l).attr({
        "aria-haspopup": "true",
        "aria-expanded": "false"
    }),
    t(l).parent().on("shown.bs.dropdown", function () {
        a = t(this);
        var e = a.find(l);
        e.attr("aria-expanded", "true"),
        e.on("keydown.bs.dropdown", t.proxy(function () {
                setTimeout(function () {
                    s = t(".dropdown-menu [role=menuitem]:visible", a)[0];
                    try {
                        s.focus()
                    } catch (t) {}
                }, u)
            }, this))
    }).on("hidden.bs.dropdown", function () {
        a = t(this);
        var e = a.find(l);
        e.attr("aria-expanded", "false")
    }),
    t(document).on("focusout.dropdown.data-api", ".dropdown-menu", function () {
        var e = t(this),
        n = this;
        e.parent().hasClass("open") && setTimeout(function () {
            t.contains(n, document.activeElement) || e.parent().find("[data-toggle=dropdown]").dropdown("toggle")
        }, 150)
    }).on("keydown.bs.dropdown.data-api", l + ", [role=menu]", t.fn.dropdown.Constructor.prototype.keydown);
    var d = t(".nav-tabs, .nav-pills"),
    p = d.children("li"),
    h = d.find('[data-toggle="tab"], [data-toggle="pill"]');
    h && (d.attr("role", "tablist"), p.attr("role", "presentation"), h.attr("role", "tab")),
    h.each(function () {
        var n = t(t(this).attr("href")),
        r = t(this),
        i = r.attr("id") || e("ui-tab");
        r.attr("id", i),
        r.parent().hasClass("active") ? (r.attr({
                tabIndex: "0",
                "aria-selected": "true",
                "aria-controls": r.attr("href").substr(1)
            }), n.attr({
                role: "tabpanel",
                tabIndex: "0",
                "aria-hidden": "false",
                "aria-labelledby": i
            })) : (r.attr({
                tabIndex: "-1",
                "aria-selected": "false",
                "aria-controls": r.attr("href").substr(1)
            }), n.attr({
                role: "tabpanel",
                tabIndex: "-1",
                "aria-hidden": "true",
                "aria-labelledby": i
            }))
    }),
    t.fn.tab.Constructor.prototype.keydown = function (e) {
        var n,
        r,
        i = t(this),
        o = i.closest("ul[role=tablist] "),
        a = e.which || e.keyCode;
        if (i = t(this), /(37|38|39|40)/.test(a)) {
            n = o.find("[role=tab]:visible"),
            r = n.index(n.filter(":focus")),
            38 != a && 37 != a || r--,
            39 != a && 40 != a || r++,
            r < 0 && (r = n.length - 1),
            r == n.length && (r = 0);
            var s = n.eq(r);
            "tab" === s.attr("role") && s.tab("show").focus(),
            e.preventDefault(),
            e.stopPropagation()
        }
    },
    t(document).on("keydown.tab.data-api", '[data-toggle="tab"], [data-toggle="pill"]', t.fn.tab.Constructor.prototype.keydown);
    var v = t.fn.tab.Constructor.prototype.activate;
    t.fn.tab.Constructor.prototype.activate = function (t, e) {
        var n = e.find("> .active");
        n.find("[data-toggle=tab], [data-toggle=pill]").attr({
            tabIndex: "-1",
            "aria-selected": !1
        }),
        n.filter(".tab-pane").attr({
            "aria-hidden": !0,
            tabIndex: "-1"
        }),
        v.apply(this, arguments),
        t.addClass("active"),
        t.find("[data-toggle=tab], [data-toggle=pill]").attr({
            tabIndex: "0",
            "aria-selected": !0
        }),
        t.filter(".tab-pane").attr({
            "aria-hidden": !1,
            tabIndex: "0"
        })
    };
    var m = t('[data-toggle="collapse"]');
    m.each(function () {
        var n = t(this),
        r = t(n.attr("data-target") ? n.attr("data-target") : n.attr("href")),
        i = n.attr("data-parent"),
        o = i && t(i),
        a = n.attr("id") || e("ui-collapse");
        n.attr("id", a),
        o && (n.attr({
                role: "tab",
                "aria-selected": "false",
                "aria-expanded": "false"
            }), t(o).find("div:not(.collapse,.panel-body), h4").attr("role", "presentation"), o.attr({
                role: "tablist",
                "aria-multiselectable": "true"
            }), r.hasClass("in") ? (n.attr({
                    "aria-controls": r.attr("id"),
                    "aria-selected": "true",
                    "aria-expanded": "true",
                    tabindex: "0"
                }), r.attr({
                    role: "tabpanel",
                    tabindex: "0",
                    "aria-labelledby": a,
                    "aria-hidden": "false"
                })) : (n.attr({
                    "aria-controls": r.attr("id"),
                    tabindex: "-1"
                }), r.attr({
                    role: "tabpanel",
                    tabindex: "-1",
                    "aria-labelledby": a,
                    "aria-hidden": "true"
                })))
    });
    var g = t.fn.collapse.Constructor.prototype.toggle;
    t.fn.collapse.Constructor.prototype.toggle = function () {
        var e,
        n = this.$parent && this.$parent.find('[aria-expanded="true"]');
        if (n) {
            var r,
            i = n.attr("data-target") || (e = n.attr("href")) && e.replace(/.*(?=#[^\s]+$)/, ""),
            o = t(i),
            a = this.$element;
            this.$parent;
            this.$parent && (r = this.$parent.find('[data-toggle=collapse][href="#' + this.$element.attr("id") + '"]')),
            g.apply(this, arguments),
            t.support.transition && this.$element.one(t.support.transition.end, function () {
                n.attr({
                    "aria-selected": "false",
                    "aria-expanded": "false",
                    tabIndex: "-1"
                }),
                o.attr({
                    "aria-hidden": "true",
                    tabIndex: "-1"
                }),
                r.attr({
                    "aria-selected": "true",
                    "aria-expanded": "true",
                    tabIndex: "0"
                }),
                a.hasClass("in") ? a.attr({
                    "aria-hidden": "false",
                    tabIndex: "0"
                }) : (r.attr({
                        "aria-selected": "false",
                        "aria-expanded": "false"
                    }), a.attr({
                        "aria-hidden": "true",
                        tabIndex: "-1"
                    }))
            })
        } else
            g.apply(this, arguments)
    },
    t.fn.collapse.Constructor.prototype.keydown = function (e) {
        var n,
        r,
        i = t(this),
        o = i.closest("div[role=tablist] "),
        a = e.which || e.keyCode;
        i = t(this),
        /(32|37|38|39|40)/.test(a) && (32 == a && i.click(), n = o.find("[role=tab]"), r = n.index(n.filter(":focus")), 38 != a && 37 != a || r--, 39 != a && 40 != a || r++, r < 0 && (r = n.length - 1), r == n.length && (r = 0), n.eq(r).focus(), e.preventDefault(), e.stopPropagation())
    },
    t(document).on("keydown.collapse.data-api", '[data-toggle="collapse"]', t.fn.collapse.Constructor.prototype.keydown),
    t(".carousel").each(function (e) {
        function n() {
            var e,
            n,
            r,
            o,
            a = {};
            a.top = 0,
            a.left = 32e3,
            a.height = 0,
            a.width = 0;
            for (var s = 0; s < p.length; s++) {
                e = p[s],
                n = t(e).offset(),
                r = t(e).height(),
                o = t(e).width(),
                a.top < n.top && (a.top = Math.round(n.top)),
                a.height < r && (a.height = Math.round(r)),
                a.left > n.left && (a.left = Math.round(n.left));
                var l = n.left - a.left + Math.round(o);
                a.width < l && (a.width = l)
            }
            i.style.top = a.top - 2 + "px",
            i.style.left = a.left - 2 + "px",
            i.style.height = a.height + 7 + "px",
            i.style.width = a.width + 8 + "px"
        }
        var r,
        i,
        o,
        a,
        s,
        l,
        u = t(this),
        c = u.find('[data-slide="prev"]'),
        f = u.find('[data-slide="next"]'),
        d = u.find(".carousel-indicators"),
        p = u.find(".carousel-indicators li"),
        h = u.find(".item"),
        v = !1,
        m = "id_title",
        g = "id_desc";
        for (d.attr("role", "tablist"), p.focus(function () {
                u.carousel("pause"),
                v = !0,
                o.innerHTML = "Play Carousel",
                t(this).parent().addClass("active"),
                n(),
                t(i).addClass("focus"),
                t(this).parents(".carousel").addClass("contrast")
            }), p.blur(function () {
                t(this).parent().removeClass("active"),
                t(i).removeClass("focus"),
                t(this).parents(".carousel").removeClass("contrast")
            }), l = 0; l < h.length; l++)
            r = h[l], r.setAttribute("role", "tabpanel"), r.setAttribute("id", "tabpanel-" + e + "-" + l), r.setAttribute("aria-labelledby", "tab-" + e + "-" + l);
        for ("string" != typeof u.attr("role") && (u.attr("role", "complementary"), u.attr("aria-labelledby", m), u.attr("aria-describedby", g), u.prepend('<p  id="' + g + '" class="sr-only">A carousel is a rotating set of images, rotation stops on keyboard focus on carousel tab controls or hovering the mouse pointer over images.  Use the tabs or the previous and next buttons to change the displayed slide.</p>'), u.prepend('<h2 id="' + m + '" class="sr-only">Carousel content with ' + h.length + " slides.</h2>")), l = 0; l < p.length; l++) {
            s = p[l],
            s.setAttribute("role", "tab"),
            s.setAttribute("id", "tab-" + e + "-" + l),
            s.setAttribute("aria-controls", "tabpanel-" + e + "-" + l);
            var y = "#tabpanel-" + e + "-" + l,
            b = u.find(y).find("h1").text();
            "string" == typeof b && 0 !== b.length || (b = u.find(y).text()),
            "string" == typeof b && 0 !== b.length || (b = u.find(y).find("h3").text()),
            "string" == typeof b && 0 !== b.length || (b = u.find(y).find("h4").text()),
            "string" == typeof b && 0 !== b.length || (b = u.find(y).find("h5").text()),
            "string" == typeof b && 0 !== b.length || (b = u.find(y).find("h6").text()),
            "string" == typeof b && 0 !== b.length || (b = "no title");
            var _ = document.createElement("span");
            _.setAttribute("class", "sr-only"),
            _.innerHTML = "Slide " + (l + 1),
            b && (_.innerHTML += ": " + b),
            s.appendChild(_)
        }
        i = document.createElement("div"),
        i.className = "carousel-tablist-highlight",
        document.body.appendChild(i),
        a = document.createElement("aside"),
        a.setAttribute("class", "carousel-aside-pause"),
        a.setAttribute("aria-label", "carousel pause/play control"),
        u.prepend(a),
        o = document.createElement("button"),
        o.className = "carousel-pause-button",
        o.innerHTML = "Pause Carousel",
        o.setAttribute("title", "Pause/Play carousel button can be used by screen reader users to stop carousel animations"),
        t(a).append(o),
        t(o).click(function () {
            v ? (o.innerHTML = "Pause Carousel", u.carousel("cycle"), v = !1) : (o.innerHTML = "Play Carousel", u.carousel("pause"), v = !0)
        }),
        t(o).focus(function () {
            t(this).addClass("focus")
        }),
        t(o).blur(function () {
            t(this).removeClass("focus")
        }),
        n(),
        t(window).resize(function () {
            n()
        }),
        c.attr("aria-label", "Previous Slide"),
        c.keydown(function (t) {
            var e = t.which || t.keyCode;
            /(13|32)/.test(e) && (t.preventDefault(), t.stopPropagation(), c.trigger("click"))
        }),
        c.focus(function () {
            t(this).parents(".carousel").addClass("contrast")
        }),
        c.blur(function () {
            t(this).parents(".carousel").removeClass("contrast")
        }),
        f.attr("aria-label", "Next Slide"),
        f.keydown(function (t) {
            var e = t.which || t.keyCode;
            /(13|32)/.test(e) && (t.preventDefault(), t.stopPropagation(), f.trigger("click"))
        }),
        f.focus(function () {
            t(this).parents(".carousel").addClass("contrast")
        }),
        f.blur(function () {
            t(this).parents(".carousel").removeClass("contrast")
        }),
        t(".carousel-inner a").focus(function () {
            t(this).parents(".carousel").addClass("contrast")
        }),
        t(".carousel-inner a").blur(function () {
            t(this).parents(".carousel").removeClass("contrast")
        }),
        p.each(function () {
            var e = t(this);
            e.hasClass("active") ? e.attr({
                "aria-selected": "true",
                tabindex: "0"
            }) : e.attr({
                "aria-selected": "false",
                tabindex: "-1"
            })
        })
    });
    var y = t.fn.carousel.Constructor.prototype.slide;
    t.fn.carousel.Constructor.prototype.slide = function (t, e) {
        var n,
        r = this.$element,
        i = r.find("[role=tabpanel].active"),
        o = e || i[t](),
        a = r.find("[role=tabpanel]").size(),
        s = r.find('[data-slide="prev"]'),
        l = r.find('[data-slide="next"]'),
        u = 0,
        c = a - 1,
        f = 1;
        o && o.attr("id") && (n = o.attr("id"), u = n.lastIndexOf("-"), u >= 0 && (u = parseInt(n.substring(u + 1), 10)), c = u - 1, c < 1 && (c = a - 1), f = u + 1, f >= a && (f = 0)),
        s.attr("aria-label", "Show slide " + (c + 1) + " of " + a),
        l.attr("aria-label", "Show slide " + (f + 1) + " of " + a),
        y.apply(this, arguments),
        i.one("bsTransitionEnd", function () {
            var t;
            t = r.find('li[aria-controls="' + i.attr("id") + '"]'),
            t && t.attr({
                "aria-selected": !1,
                tabIndex: "-1"
            }),
            t = r.find('li[aria-controls="' + o.attr("id") + '"]'),
            t && t.attr({
                "aria-selected": !0,
                tabIndex: "0"
            })
        })
    };
    var b;
    t.fn.carousel.Constructor.prototype.keydown = function (e) {
        function n(t) {
            t >= o.length || t < 0 || (i.carousel(t), setTimeout(function () {
                    o[t].focus()
                }, 150))
        }
        b = b || t(this),
        this instanceof Node && (b = t(this));
        var r,
        i = t(e.target).closest(".carousel"),
        o = i.find("[role=tab]"),
        a = e.which || e.keyCode;
        /(37|38|39|40)/.test(a) && (r = o.index(o.filter(".active")), 37 != a && 38 != a || (r--, n(r)), 39 != a && 40 != a || (r++, n(r)), e.preventDefault(), e.stopPropagation())
    },
    t(document).on("keydown.carousel.data-api", "li[role=tab]", t.fn.carousel.Constructor.prototype.keydown)
}
(jQuery);
var expand_text = "", collapse_text = "";
(function () {}).call(this), function (t) {
    function e(t, e, n, r) {
        function i() {
            r && r(),
            o.handleHashOnLoad(),
            o.updateContextSummary()
        }
        this.base_url = t,
        this.wrapper = e,
        this.elt = e.find(".infinite-record-container"),
        this.contextSummaryElt = e.siblings(".infinite-record-context"),
        this.container = e.closest(".feed-container"),
        this.recordCount = n,
        this.scrollPosition = 0,
        this.scrollbarElt = void 0,
        this.scrollCallbacks = [];
        var o = this;
        this.initScrollbar(),
        this.initEventHandlers(),
        this.initKeyboardNavigation(),
        this.considerPopulatingWaypoints(!1, null, i),
        this.registerScrollCallback($.proxy(this.updateContextSummary, this)),
        this.globalStyles = $("<style />"),
        $("head").append(this.globalStyles)
    }
    var n = 2,
    r = 50,
    i = 500,
    o = 5e3,
    a = "scroll::",
    s = void 0;
    e.prototype.scrollBy = function (t) {
        var e = this,
        n = e.wrapper.offset().top;
        t > 0 && e.elt.find(".waypoint:last")[0].getBoundingClientRect().bottom - n < e.wrapper.height() || (e.scrollPosition -= t, e.scrollPosition > 0 && (e.scrollPosition = 0), e.elt[0].style.transform = "translateY(" + e.scrollPosition + "px)", $.each(e.scrollCallbacks, function (t, e) {
                e()
            }), s && clearInterval(s), s = setTimeout(function () {
                e.considerPopulatingWaypoints(!0),
                e.updateScrollPosition()
            }, r))
    },
    e.prototype.initEventHandlers = function () {
        var t = this,
        e = 33,
        n = 34,
        r = 32,
        i = 40,
        o = 38;
        $(document).on("keydown", function (a) {
            var s = t.wrapper.height();
            a.keyCode == n || a.keyCode == r && !a.shiftKey ? (t.scrollBy(s), a.preventDefault()) : a.keyCode == e || a.keyCode == r && a.shiftKey ? (t.scrollBy(0 - s), a.preventDefault()) : a.keyCode == i ? (t.scrollBy(15), a.preventDefault()) : a.keyCode == o && (t.scrollBy(-15), a.preventDefault())
        }),
        $(document).on("wheel", function (e) {
            if (0 == $(e.target).closest(".infinite-record-wrapper").length)
                return !0;
            e.preventDefault();
            var n = e.originalEvent.deltaY;
            t.scrollBy(n)
        }),
        t.container.on("click", ".infinite-record-context .dropdown-menu a", function () {
            t.scrollToRecordForURI($(this).data("uri"))
        }),
        t.container.on("focus", ".infinite-item", function () {
            t.updateHash($(this).data("uri"))
        })
    },
    e.prototype.initScrollbar = function () {
        var t = this;
        t.scrollbarElt = $('<div class="infinite-record-scrollbar" />'),
        t.scrollbarElt.append($('<div class="infinite-record-spacer" />').height(1e7)),
        t.scrollbarElt.height(t.wrapper.height()),
        t.scrollbarElt.css("top", t.wrapper.offset().top),
        t.scrollbarElt.css("left", t.wrapper.offset().left + t.wrapper.width() + 5),
        t.scrollbarElt.scrollTop(0),
        t.scrollbarElt.on("scroll", function () {
            return t.updatingScrollbar ? void(t.updatingScrollbar = !1) : ($.each(t.scrollCallbacks, function (t, e) {
                    e()
                }), t.scrollDragDelayTimer && clearInterval(t.scrollDragDelayTimer), void(t.scrollDragDelayTimer = setTimeout(function () {
                        var e = Math.floor(t.scrollbarElt.scrollTop() / t.scrollbarElt.find(".infinite-record-spacer").height() * t.recordCount);
                        t.scrollToRecord(e)
                    }, i)))
        }),
        $("body").append(t.scrollbarElt)
    },
    e.prototype.registerScrollCallback = function (t) {
        this.scrollCallbacks.push(t)
    },
    e.prototype.updateScrollPosition = function () {
        var t = this,
        e = t.elt.find(".infinite-record-record"),
        n = t.findClosestElement(e),
        r = $(e[n]).data("record-number"),
        i = r / t.recordCount * $(".infinite-record-spacer").height();
        t.updatingScrollbar = !0,
        t.scrollbarElt.scrollTop(i)
    },
    e.prototype.scrollToRecord = function (t, e) {
        var n = this,
        r = n.wrapper.offset().top,
        i = $(".waypoint").first().data("waypoint-size"),
        o = Math.floor(t / i),
        a = function (t) {
            var i = $("#record-number-" + t)[0].getBoundingClientRect().top;
            n.scrollPosition -= i - r,
            n.elt[0].style.transform = "translateY(" + n.scrollPosition + "px)",
            n.considerPopulatingWaypoints(!0, !1, function () {
                $.each(n.scrollCallbacks, function (t, e) {
                    e()
                }),
                e && e()
            })
        };
        $($(".waypoint")[o]).is(".populated") ? a(t) : n.populateWaypoints($($(".waypoint")[o]), !1, function () {
            a(t)
        })
    },
    e.prototype.findClosestElement = function (t) {
        var e = this;
        if (t.length <= 1)
            return 0;
        var n = e.wrapper.offset().top,
        r = (t.first().offset().top - n, 0),
        i = t.length - 1,
        o = function (t) {
            return t.getBoundingClientRect().top - n
        };
        if (o(t[r]) <= 0 && o(t[i]) <= 0)
            return i;
        for (; r + 1 < i && o(t[r]) < 0 && o(t[i]) > 0; ) {
            var a = Math.floor((i - r) / 2) + r,
            s = t[a],
            l = o(s);
            l > 0 ? i = a : l <= 0 && (r = a)
        }
        return Math.abs(o(t[r])) < Math.abs(o(t[i])) ? r : i
    };
    var l = !1;
    e.prototype.considerPopulatingWaypoints = function (t, e, r) {
        var i = this;
        if (r || (r = $.noop), !l || e) {
            l = !0;
            var a = i.elt.find(".waypoint:not(.populated)"),
            s = i.findClosestElement(a),
            u = i.wrapper.offset().top;
            if (a.length > 0 && Math.abs(a[s].getBoundingClientRect().top - u) < o) {
                var c = Math.max(s - n / 2, 0),
                f = c + n;
                i.populateWaypoints(a.slice(c, f), t, function () {
                    i.considerPopulatingWaypoints(t, !0, r)
                })
            } else
                r(), l = !1
        }
    },
    e.prototype.populateWaypoints = function (t, e, n) {
        var r = this;
        n || (n = $.noop),
        t.addClass("populated");
        var i = 0;
        $(t).each(function (o, a) {
            var s = $(a).data("waypoint-number"),
            l = $(a).data("waypoint-size"),
            u = $(a).data("collection-size"),
            c = $(a).data("uris").split(";");
            r.elt.attr("aria-busy", "true"),
            $.ajax(r.url_for("waypoints"), {
                method: "GET",
                data: {
                    urls: c,
                    number: s,
                    size: l,
                    collection_size: u
                }
            }).done(function (o) {
                var u = r.elt.find(".infinite-record-record"),
                f = void 0,
                d = void 0,
                p = void 0;
                u.length > 0 && (f = u[r.findClosestElement(u)]),
                f && (d = f.getBoundingClientRect()),
                $(c).each(function (t, e) {
                    o[e] && (recordNumber = s * l + t, $(a).append($('<div class="infinite-record-record" />').attr("id", "record-number-" + recordNumber).data("record-number", recordNumber).data("uri", e).html(o[e])))
                }),
                e && f && (p = f.getBoundingClientRect(), r.scrollPosition += d.top - p.top, r.elt[0].style.transform = "translateY(" + r.scrollPosition + "px)"),
                i += 1,
                t.length <= i && n(),
                r.elt.removeAttr("aria-busy")
            })
        })
    },
    e.prototype.url_for = function (t) {
        var e = this;
        return e.base_url + "/" + t
    },
    e.prototype.getClosestElement = function () {
        var t = this.elt.find(".infinite-record-record"),
        e = this.findClosestElement(t);
        return $(t.get(e))
    },
    e.prototype.getCurrentContext = function () {
        var t = this.getClosestElement(),
        e = t.find(".context ul li");
        if (e.length > 0) {
            var n = $(e[e.length - 1].innerHTML);
            return {
                uri: n.data("uri"),
                link: n
            }
        }
        return null
    },
    e.prototype.updateContextSummary = function () {
        var t = this.getCurrentContext();
        t ? ($("#scrollContext .current-record-title").html(t.link.html()), this.contextSummaryElt.find(".dropdown-menu a").removeAttr("aria-current"), this.contextSummaryElt.find('.dropdown-menu a[data-uri="' + t.uri + '"]').attr("aria-current", "true")) : ($("#scrollContext .current-record-title").html($("#scrollContext").parent().find(".dropdown-menu a:first").html()), this.contextSummaryElt.find(".dropdown-menu a").removeAttr("aria-current"), this.contextSummaryElt.find(".dropdown-menu a:first").attr("aria-current", "true"))
    },
    e.prototype.scrollToRecordForURI = function (t) {
        var e = this,
        n = e.wrapper.find('[data-uris*="' + t + ';"], [data-uris$="' + t + '"]');
        if (0 != n.length) {
            var r = n.data("uris").split(";"),
            i = $.inArray(t, r),
            o = n.data("waypointNumber"),
            a = n.data("waypointSize"),
            s = o * a + i;
            n.is(".populated") ? e.scrollToRecord(s, function () {
                e.focusRecord(s)
            }) : e.populateWaypoints(n, !1, function () {
                e.scrollToRecord(s, function () {
                    e.focusRecord(s)
                })
            }),
            e.updateHash(t)
        }
    },
    e.prototype.updateHash = function (t) {
        history.replaceState(null, null, document.location.pathname + "#" + a + t)
    },
    e.prototype.handleHashOnLoad = function () {
        var t = this;
        if (location.hash && location.hash.startsWith("#" + a)) {
            var e = new RegExp("^#(" + a + ")"),
            n = location.hash.replace(e, "");
            setTimeout(function () {
                t.scrollToRecordForURI(n)
            })
        }
    },
    e.prototype.initKeyboardNavigation = function () {
        var t = this;
        t.elt.on("keydown", ".infinite-record-record", function (e) {
            var n = $(this).closest(".infinite-record-record"),
            r = n.find(" > .infinite-item").data("recordnumber"),
            i = 0,
            o = n.find(" > .infinite-item").data("collectionsize") - 1;
            if (34 == e.keyCode)
                r = Math.min(r + 1, o);
            else if (33 == e.keyCode)
                n.prev() && (r = Math.max(r - 1, i));
            else if (e.ctrlKey && 35 == e.keyCode)
                r = o;
            else {
                if (!e.ctrlKey || 36 != e.keyCode)
                    return !0;
                r = i
            }
            return e.preventDefault(),
            t.scrollToRecord(r, function () {
                t.focusRecord(r)
            }),
            !1
        })
    },
    e.prototype.focusRecord = function (t) {
        setTimeout(function () {
            $("#record-number-" + t + " > .infinite-item").focus()
        })
    },
    t.InfiniteScroll = e
}
(window), MoreFacets.prototype.bind_events = function () {
    var t = this;
    t.$more_facets_div.find(".more").on("click", function () {
        $(this).siblings(".below-the-fold").show(),
        $(this).hide()
    }),
    t.$more_facets_div.find(".less").on("click", function () {
        $(this).parent().hide(),
        $(this).parent().parent().find(".more").show()
    })
}, $(function () {
    $(".more-facets").each(function () {
        new MoreFacets($(this))
    })
}), $(function () {
    var t = function (t, e) {
        var n = 0,
        r = 60,
        i = 1e3,
        o = function () {
            document.cookie.indexOf("pdf_generated_" + t) >= 0 || n >= r ? e() : setTimeout(o, i)
        };
        setTimeout(o, i)
    };
    $("#print_button").on("click", function () {
        var e = $(this),
        n = e.closest("form"),
        r = n.find("input[name='base_token']").attr("value"),
        i = r + (new Date).getTime();
        return n.find("input[name='token']").attr("value", i),
        e.find(".print-label").hide(),
        e.find(".generating-label").show(),
        e.attr("disabled", "disabled"),
        t(i, function () {
            e.find(".print-label").show(),
            e.find(".generating-label").hide(),
            e.attr("disabled", null)
        }),
        setTimeout(function () {
            n.submit()
        }, 0),
        !1
    })
}), $.fn.readmore = function (t) {
    function e(t, n) {
        var r = t.match(/^([^<]+)</);
        return r ? e(t.replace(/^[^<]+</, "<"), n.concat([r[1]])) : (r = t.match(/^(<(?:br|hr)\s*\/?>)(.*)/)) ? e(r[2], n.concat([r[1]])) : (r = t.match(/^(<[^>]+>[^<]+<\/[^>]+>)(.*)/), r ? e(r[2], n.concat([r[1]])) : n.concat([t]))
    }
    function n(n) {
        var r,
        a = 0;
        if (i + n.length < t)
            return void(i += n.length);
        var s = e(n, []);
        return _.forEach(s, function (e) {
            if (e.match(/^</)) {
                var s = e.replace(/^<[^>]+>/, "").replace(/<\/[^>]+>/, "").length;
                a += e.length - s,
                i += s
            } else {
                if (!(i + e.length < t)) {
                    var l = t + a - o;
                    return r = l + n.substr(l).split(" ")[0].length,
                    !1
                }
                i += e.length
            }
        }),
        r
    }
    var r,
    t = t || 300,
    i = 0,
    o = 0,
    a = $("p", $(this)),
    s = "See more",
    l = "See less",
    u = $(this);
    a.length < 1 && (a = $(this)),
    u.addClass("readmore"),
    u.on("click", "a.expander", function (t) {
        t.preventDefault();
        var e = $(t.target).closest("a"),
        n = $(".elipses", u);
        u.toggleClass("expanded"),
        u.hasClass("expanded") ? (e.html(l), e.detach().appendTo(u), n.empty()) : (e.html(s + " <i class='fa fa-chevron-right'></i>"), n.html("..."))
    }),
    _.forEach(a, function (t) {
        if (o = i + 0, _.isUndefined(r))
            if (r = n($(t).html())) {
                var e = $(t).html();
                $(t).html("<span class='less'>" + e.substr(0, r) + "<span class='elipses'>...</span></span><span class='more'>" + e.substr(r) + "</span>"),
                u.append("<a href='#' class='expander'>" + s + " <i class='fa fa-chevron-right'></i></a>")
            } else
                $(t).addClass("less");
        else
            $(t).addClass("more")
    })
}, function (t) {
    "use strict";
    function e(t, e, n, i, o, a, s) {
        this.source = t,
        this.elt = e,
        this.scrollTimer = void 0,
        this.renderer = o,
        this.progressIndicator = $('<progress class="largetree-progress-indicator" />'),
        this.elt.before(this.progressIndicator),
        this.elt.css("will-change", "transform"),
        this.root_uri = n,
        this.root_tree_id = r.uri_to_tree_id(n),
        this.current_tree_id = this.root_tree_id,
        this.read_only = i,
        this.waypoints = {},
        this.node_selected_callback = s,
        this.populateWaypointHooks = [],
        this.collapseNodeHooks = [],
        this.errorHandler = $.noop,
        this.initEventHandlers(),
        this.renderRoot(function () {
            a()
        })
    }
    function n(t) {
        this.url = t.replace(/\/+$/, "")
    }
    var r = {};
    r.uri_to_tree_id = function (t) {
        var e = r.uri_to_parts(t);
        return e.type + "_" + e.id
    },
    r.uri_to_parts = function (t) {
        var e = t.replace(/\/repositories\/[0-9]+\//, ""),
        n = e.match(/([a-z_]+)\/([0-9]+)/),
        r = n[1].replace(/\//g, "_"),
        i = n[2],
        o = r.replace(/s$/, "");
        return {
            type: o,
            id: i
        }
    },
    r.backend_uri_to_frontend_uri = function (t) {
        return AS.app_prefix(t.replace(/\/repositories\/[0-9]+\//, ""))
    },
    r.parse_tree_id = function (t) {
        var e = t.match(/([a-z_]+)([0-9]+)/);
        if (null != e && 3 == e.length) {
            var n = e[1].replace(/_$/, ""),
            r = e[2];
            return {
                type: n,
                id: r
            }
        }
    },
    r.link_url = function (t) {
        return "#tree::" + r.uri_to_tree_id(t)
    },
    t.TreeIds = r;
    var i = 100,
    o = 300;
    e.prototype.setGeneralErrorHandler = function (t) {
        this.errorHandler = t
    },
    e.prototype.currentlyLoading = function () {
        this.progressIndicator.css("visibility", "visible")
    },
    e.prototype.doneLoading = function () {
        var t = this;
        setTimeout(function () {
            t.progressIndicator.css("visibility", "hidden")
        }, 0)
    },
    e.prototype.addPlugin = function (t) {
        return t.initialize(this),
        t
    },
    e.prototype.addPopulateWaypointHook = function (t) {
        this.populateWaypointHooks.push(t)
    },
    e.prototype.addCollapseNodeHook = function (t) {
        this.collapseNodeHooks.push(t)
    },
    e.prototype.displayNode = function (t, e) {
        var n = this,
        i = r.parse_tree_id(t).id,
        o = function () {
            var n = $("#" + t);
            e && e(n)
        };
        t === n.root_tree_id ? o() : n.source.fetchPathFromRoot(i).done(function (t) {
            n.recursivelyPopulateWaypoints(t[i], o)
        })
    },
    e.prototype.reparentNodes = function (t, e, n) {
        var r = this;
        if (!r.isReparentAllowed(e, t))
            return AS.openQuickModal("Unable to perform move", "The move has been disallowed as a parent cannot become its own child."), {
                done: $.noop
            };
        var i = r.elt.scrollTop(),
        o = r.displayLoadingMask(i),
        a = t.data("uri");
        if (a || (a = this.root_uri), n) {
            var s = 0;
            $(e).each(function (t, e) {
                var i = $(e).data("level"),
                o = $(e).prevAll(".indent-level-" + (i - 1) + ":first").data("uri");
                o || (o = r.root_uri),
                o == a && $(e).data("position") < n && (s += 1)
            }),
            n -= s
        } else
            n = 0;
        var l = [];
        t.data("uri") && !t.is(".root-row") && l.push(t.data("uri")),
        $(e).each(function (t, e) {
            var n = $(e).data("level"),
            r = $(e).prevAll(".indent-level-" + (n - 1) + ":first").data("uri");
            r && l.push(r)
        }),
        r.elt.find(".expandme .expanded").closest("tr").each(function (t, e) {
            l.push($(e).data("uri"))
        });
        var u = [];
        return $(e).each(function (t, e) {
            u.push($(e).data("uri"))
        }),
        this.source.reparentNodes(a, u, n).done(function () {
            r.redisplayAndShow(l, function () {
                r.considerPopulatingWaypoint(function () {
                    r.elt.animate({
                        scrollTop: i
                    }, function () {
                        o.remove()
                    }),
                    $(e).each(function (t, e) {
                        var n = $(e).attr("id");
                        r.elt.find("#" + n).addClass("reparented-highlight"),
                        setTimeout(function () {
                            r.elt.find("#" + n).removeClass("reparented-highlight").addClass("reparented")
                        }, 500)
                    })
                })
            })
        })
    },
    e.prototype.displayLoadingMask = function (t) {
        var e = this,
        n = e.elt.clone(!1);
        n.on("click", function (t) {
            return t.preventDefault(),
            !1
        }),
        n.find("*").removeAttr("id"),
        n.attr("id", "tree-container-loading"),
        n.css("z-index", 2e3).css("position", "absolute").css("left", e.elt.offset().left).css("top", e.elt.offset().top),
        n.width(e.elt.width());
        var r = $('<div class="spinner" />');
        return r.css("font-size", "50px").css("display", "inline").css("z-index", 2500).css("position", "fixed").css("margin", 0).css("left", "50%").css("top", "50%"),
        $("body").prepend(n),
        $("body").prepend(r),
        n.scrollTop(t), {
            remove: function () {
                n.remove(),
                r.remove()
            }
        }
    },
    e.prototype.redisplayAndShow = function (t, e) {
        var n = this;
        t = $.unique(t),
        e || (e = $.noop),
        n.renderRoot(function () {
            var i = t.slice(0),
            o = [],
            a = function (t) {
                if (t && o.push(t), 0 == i.length) {
                    var s = function (t) {
                        if (o.length > 0) {
                            var e = o.shift();
                            e.is(".root-row") ? t() : n.expandNode(e, function () {
                                s(t)
                            })
                        } else
                            t()
                    };
                    return s(function () {
                        return e()
                    })
                }
                var l = i.shift(),
                u = r.uri_to_tree_id(l);
                n.displayNode(u, a)
            };
            a()
        })
    },
    e.prototype.recursivelyPopulateWaypoints = function (t, e) {
        var n = this;
        if (!t || 0 === t.length)
            return void e();
        var i = t.shift(),
        o = function () {
            if (n.waypoints[i.node]) {
                var r = n.waypoints[i.node][i.offset];
                r && n.populateWaypoint(r, function () {
                    n.recursivelyPopulateWaypoints(t, e)
                })
            }
        };
        if (i.node) {
            var a = r.uri_to_tree_id(i.node);
            $("#" + a).find(".expandme").find(".expanded").length > 0 ? o() : n.toggleNode($("#" + a).find(".expandme"), o)
        } else
            o()
    },
    e.prototype.deleteWaypoints = function (t) {
        var e = t.next();
        if (!e.hasClass("waypoint"))
            return !1;
        if (!e.hasClass("populated"))
            return e.remove(), !0;
        var n = e.data("level");
        if (!n)
            return !1;
        for (; ; ) {
            var r = e.next();
            if (0 === r.length)
                break;
            if (r.hasClass("end-marker") && n == r.data("level")) {
                r.remove();
                break
            }
            r.remove()
        }
        return e.remove(),
        !0
    },
    e.prototype.toggleNode = function (t, e) {
        var n = this,
        r = t.closest("tr");
        t.data("expanded") ? n.collapseNode(r, e) : n.expandNode(r, e)
    },
    e.prototype.expandNode = function (t, e) {
        var n = this,
        r = t.find(".expandme");
        return r.data("expanded") ? void(e && e()) : (r.find(".expandme-icon").addClass("expanded"), $(r).data("expanded", !0), r.attr("aria-expanded", !0), !t.data("uri"), void n.source.fetchNode(t.data("uri")).done(function (r) {
                n.appendWaypoints(t, t.data("uri"), r.waypoints, r.waypoint_size, t.data("level") + 1),
                e && e()
            }).fail(function () {
                n.errorHandler.apply(n, ["fetch_node_failed"].concat([].slice.call(arguments)))
            }))
    },
    e.prototype.collapseNode = function (t, e) {
        for (var n = this; n.deleteWaypoints(t); );
        var r = t.find(".expandme");
        $(r).data("expanded", !1),
        r.find(".expandme-icon").removeClass("expanded"),
        r.attr("aria-expanded", !1),
        setTimeout(function () {
            n.considerPopulatingWaypoint()
        }, 0),
        $(n.collapseNodeHooks).each(function (t, e) {
            e()
        }),
        e && e()
    },
    e.prototype.initEventHandlers = function () {
        var t = this,
        e = !1;
        this.elt.on("scroll", function () {
            t.scrollTimer && clearTimeout(t.scrollTimer);
            var n = function () {
                e || (e = !0, t.considerPopulatingWaypoint(function () {
                        e = !1
                    }))
            };
            t.scrollTimer = setTimeout(n, i)
        }),
        $(this.elt).on("click", ".expandme", function (e) {
            e.preventDefault(),
            t.toggleNode($(this))
        })
    },
    e.prototype.makeWaypoint = function (t, e, n) {
        var r = $('<tr class="waypoint" />');
        return r.addClass("indent-level-" + n),
        r.data("level", n),
        r.data("uri", t),
        r.data("offset", e),
        this.waypoints[t] || (this.waypoints[t] = {}),
        this.waypoints[t][e] = r,
        r
    },
    e.prototype.appendWaypoints = function (t, e, n, r, i) {
        for (var o = t.data("child_count"), a = n - 1; a >= 0; a--) {
            var s = this.makeWaypoint(e, a, i);
            s.data("child_count_at_this_level", o),
            s.css("height", 2 * r + "em"),
            t.after(s)
        }
        var l = this;
        setTimeout(function () {
            l.considerPopulatingWaypoint()
        }, 0)
    },
    e.prototype.renderRoot = function (t) {
        var e = this;
        e.waypoints = {};
        var n = $('<table class="root" />');
        this.source.fetchRootNode().done(function (i) {
            var o = e.renderer.get_root_template();
            o.data("uri", i.uri),
            o.attr("id", r.uri_to_tree_id(i.uri)),
            o.attr("aria-level", 1),
            o.addClass("root-row"),
            o.data("level", 0),
            o.data("child_count", i.child_count),
            o.data("jsonmodel_type", i.jsonmodel_type),
            o.find(".title").append($("<a>").attr("href", r.link_url(i.uri)).addClass("record-title").text(i.title)),
            n.append(o),
            e.appendWaypoints(o, null, i.waypoints, i.waypoint_size, 1),
            e.elt.find("table.root").remove(),
            e.elt.prepend(n),
            e.renderer.add_root_columns(o, i),
            t && t()
        })
    },
    e.prototype.considerPopulatingWaypoint = function (t) {
        var e = this;
        t || (t = $.noop);
        var n = parseFloat($("body").css("font-size")),
        r = n * o,
        i = this.elt.offset().top,
        a = this.elt.outerHeight(),
        s = e.elt.find(".waypoint");
        if (0 == s.length)
            return void t();
        for (var l, u = e.elt.scrollTop() / e.elt.find("table.root").height(), c = Math.floor(u * s.length), f = function (t) {
            var e = t.offset().top - i,
            n = e + t.height(),
            o = Math.abs(e) <= a + r || Math.abs(n) <= a + r || e < 0 && n > 0;
            if (o) {
                var s = {
                    elt: t,
                    top: e,
                    level: t.data("level")
                };
                return l ? (l.level > s.level || l.top > s.top) && (l = s) : l = s,
                !0
            }
            return !1
        }, d = c; d >= 0; d--) {
            var p = $(s[d]);
            if (!p.hasClass("populated")) {
                var h = f(p);
                if (!h && d < c)
                    break
            }
        }
        for (var d = c + 1; d < s.length; d++) {
            var p = $(s[d]);
            if (!p.hasClass("populated")) {
                var h = f(p);
                if (!h)
                    break
            }
        }
        l ? (e.currentlyLoading(), e.populateWaypoint(l.elt, function () {
                setTimeout(function () {
                    e.considerPopulatingWaypoint(t)
                }, 0)
            })) : (e.doneLoading(), t())
    };
    var a = {};
    e.prototype.populateWaypoint = function (t, e) {
        if (t.hasClass("populated"))
            return void e();
        var n = this,
        i = t.data("uri"),
        o = t.data("offset"),
        s = t.data("level"),
        l = i + "_" + o;
        a[l] || (a[l] = !0, this.source.fetchWaypoint(i, o).done(function (i) {
                var o = n.renderer.endpoint_marker();
                o.data("level", s),
                o.data("child_count_at_this_level", t.data("child_count_at_this_level")),
                o.addClass("indent-level-" + s),
                t.after(o);
                var u = [],
                c = void 0;
                $(i).each(function (t, e) {
                    var i = n.renderer.get_node_template();
                    i.addClass("largetree-node indent-level-" + s),
                    i.data("level", s),
                    i.data("child_count", e.child_count),
                    i.attr("aria-level", s + 1);
                    var o = i.find(".title"),
                    a = $("<div>").html(e.title).text();
                    o.append($('<a class="record-title" />').prop("href", r.link_url(e.uri)).text(e.title)),
                    o.attr("title", a);
                    var l = i.find(".expandme");
                    l.attr("aria-label", "expand element"),
                    0 === e.child_count && (l.css("visibility", "hidden"), l.attr("aria-hidden", "true")),
                    0 !== e.child_count && l.attr("aria-haspopup", !0).attr("aria-expanded", !1),
                    n.renderer.add_node_columns(i, e);
                    var f = r.uri_to_tree_id(e.uri);
                    i.data("uri", e.uri),
                    i.data("jsonmodel_type", e.jsonmodel_type),
                    i.data("position", e.position),
                    i.data("parent_id", e.parent_id),
                    i.attr("id", f),
                    n.current_tree_id == f ? (i.addClass("current"), c = i) : i.removeClass("current"),
                    u.push(i)
                }),
                t.after.apply(t, u),
                t.addClass("populated"),
                a[l] = !1,
                $(n.populateWaypointHooks).each(function (t, e) {
                    e()
                }),
                c && $.proxy(n.node_selected_callback, n)(c, n),
                e()
            }))
    },
    n.prototype.urlFor = function (t) {
        return this.url + "/" + t
    },
    n.prototype.fetchRootNode = function () {
        var t = this;
        return $.ajax(this.urlFor("root"), {
            method: "GET",
            dataType: "json"
        }).done(function (e) {
            t.cachePrecomputedWaypoints(e)
        })
    },
    n.prototype.fetchNode = function (t) {
        var e = this;
        if (!t)
            throw "Node can't be empty!";
        return $.ajax(this.urlFor("node"), {
            method: "GET",
            dataType: "json",
            data: {
                node: t
            }
        }).done(function (t) {
            e.cachePrecomputedWaypoints(t)
        })
    },
    n.prototype.fetchPathFromRoot = function (t) {
        return $.ajax(this.urlFor("node_from_root"), {
            method: "GET",
            dataType: "json",
            data: {
                node_ids: [t]
            }
        })
    },
    n.prototype.fetchWaypoint = function (t, e) {
        var n = this.getPrecomputedWaypoint(t, e);
        return n ? {
            done: function (t) {
                t(n)
            }
        }
         : $.ajax(this.urlFor("waypoint"), {
            method: "GET",
            dataType: "json",
            data: {
                node: t,
                offset: e
            }
        })
    },
    n.prototype.reparentNodes = function (t, e, n) {
        var i = r.backend_uri_to_frontend_uri(t);
        return $.ajax(i + "/accept_children", {
            method: "POST",
            data: {
                children: e,
                index: n
            }
        })
    };
    var s = {};
    n.prototype.getPrecomputedWaypoint = function (t, e) {
        var n;
        return null === t && (t = ""),
        s[t] && s[t][e] && (n = s[t][e], s[t] = {}),
        n
    },
    n.prototype.cachePrecomputedWaypoints = function (t) {
        $(Object.keys(t.precomputed_waypoints)).each(function (e, n) {
            s[n] = t.precomputed_waypoints[n]
        })
    },
    e.prototype.setCurrentNode = function (t, e) {
        if ($("#" + this.current_tree_id, this.elt).removeClass("current"), this.current_tree_id = t, 1 == $("#" + this.current_tree_id, this.elt).length) {
            var n = $("#" + this.current_tree_id, this.elt);
            n.addClass("current"),
            $.proxy(this.node_selected_callback, self)(n, this),
            e && e()
        } else
            this.displayNode(this.current_tree_id, e)
    },
    e.prototype.isReparentAllowed = function (t, e) {
        if (e.is(".root-row"))
            return !0;
        var n = [];
        n.push(e.data("uri"));
        for (var r = e.data("level") - 1, i = e; r > 0; )
            i = i.prevAll(".largetree-node.indent-level-" + r + ":first"), n.push(i.data("uri")), r -= 1;
        var o = !0;
        return $(t).each(function (t, e) {
            var r = $(e).data("uri");
            if ($.inArray(r, n) >= 0)
                return void(o = !1)
        }),
        o
    },
    t.LargeTree = e,
    t.TreeDataSource = n
}
(window), function (t) {
    function e(t) {
        this.endpointMarkerTemplate = $('<tr class="end-marker" />'),
        this.should_link_to_record = t || !1,
        this.rootTemplate = $('<tr>   <td class="no-drag-handle"></td>  <td class="title"></td></tr>'),
        this.nodeTemplate = $('<tr>   <td class="drag-handle"></td>  <td class="title"><span class="indentor"><button class="expandme"><i class="expandme-icon glyphicon glyphicon-chevron-right" /></button></span> </td></tr>')
    }
    e.prototype.endpoint_marker = function () {
        return this.endpointMarkerTemplate.clone(!0)
    },
    e.prototype.get_root_template = function () {
        return this.rootTemplate.clone(!1)
    },
    e.prototype.get_node_template = function () {
        return this.nodeTemplate.clone(!1)
    },
    e.prototype.add_root_columns = function (t, e) {
        var n = t.find("a.record-title");
        this.should_link_to_record && (e.slugged_url && e.slugged_url.length > 0 ? n.attr("href", e.slugged_url) : n.attr("href", AS.app_prefix(e.uri))),
        n.html(e.parsed_title),
        "classification" == e.jsonmodel_type && n.prepend(e.identifier + ". ")
    },
    e.prototype.add_node_columns = function (t, e) {
        var n = t.find("a.record-title");
        if ("classification_term" == e.jsonmodel_type)
            n.html(e.parsed_title), n.prepend(e.identifier + ". ");
        else {
            var r = this.build_node_title(e);
            n.html(r)
        }
        this.should_link_to_record && (e.slugged_url && e.slugged_url.length > 0 ? n.attr("href", e.slugged_url) : n.attr("href", AS.app_prefix(e.uri)))
    },
    e.prototype.build_node_title = function (t) {
        var e = [];
        if (t.parsed_title && e.push(t.parsed_title), t.label && e.push(t.label), t.dates && t.dates.length > 0) {
            var n = t.dates[0];
            n.expression ? e.push(n.expression) : n.begin && n.end ? e.push(n.begin + "-" + n.end) : n.begin && e.push(n.begin)
        }
        return e.join(", ")
    },
    t.SimpleRenderer = e
}
(window);
var $template, $as, plusText = "Add a search row", minusText = "Remove the row below", plusFACss = "fa fa-plus", minusFACss = "fa fa-minus", fn_plusminus = function (t) {
    if (t.stopPropagation, $(this).attr("title") === plusText) {
        $(this).html("<i aria-hidden='true' class='" + minusFACss + "'></i>"),
        $(this).attr("title", minusText),
        $(this).attr("aria-label", minusText);
        var e = new_row_from_template();
        $(this).parents(".search_row").after(e),
        e.find(".bool select").focus()
    } else
        $(this).parents(".search_row").next(".search_row").remove(), $(this).closest(".search_row").index() == $as.find(".search_row").length && ($(this).html("<i aria-hidden='true' class='" + plusFACss + "'></i>"), $(this).attr("title", plusText), $(this).attr("aria-label", plusText));
    return !1
};
$(function () {
    $(".search-results").on("click", ".recordrow .classification-subgroups button.subgroup-toggle", toggle_subgroups)
}), $(function () {
    $("#toggleRefineSearch").on("click", function (t) {
        t.preventDefault();
        var e = $(this),
        n = e.closest(".searchstatement").find("#refineSearchPanel");
        n.is(":visible") ? (n.css("display", "none"), n.attr("aria-hidden", "true"), e.removeClass("active"), e.attr("aria-expanded", "false")) : (n.css("display", "block"), n.attr("aria-hidden", "false"), e.addClass("active"), e.attr("aria-expanded", "true"))
    })
}), $(function () {
    "undefined" != typeof RECORD_URI && "undefined" != typeof FRONTEND_URL && 0 != $("#staff-link").length && $.ajax(FRONTEND_URL + "/check_session", {
        data: {
            uri: RECORD_URI
        },
        type: "GET",
        dataType: "json",
        xhrFields: {
            withCredentials: !0
        }
    }).done(function (t) {
        if (t === !0) {
            var e = $("#staff-link");
            link = FRONTEND_URL + "/resolve/" + STAFF_LINK_MODE + "?uri=" + RECORD_URI + "&autoselect_repo=true",
            e.attr("href", link),
            e.removeClass("hide")
        }
    }).fail(function () {})
}), function (t, e, n) {
    "$:nomunge";
    function r(t) {
        return t = t || location.href,
        "#" + t.replace(/^[^#]*#?(.*)$/, "$1")
    }
    var i,
    o = "hashchange",
    a = document,
    s = t.event.special,
    l = a.documentMode,
    u = "on" + o in e && (l === n || l > 7);
    t.fn[o] = function (t) {
        return t ? this.bind(o, t) : this.trigger(o)
    },
    t.fn[o].delay = 50,
    s[o] = t.extend(s[o], {
        setup: function () {
            return !u && void t(i.start)
        },
        teardown: function () {
            return !u && void t(i.stop)
        }
    }),
    i = function () {
        function i() {
            var n = r(),
            s = f(l);
            n !== l ? (c(l = n, s), t(e).trigger(o)) : s !== l && (location.href = location.href.replace(/#.*/, "") + s),
            a = setTimeout(i, t.fn[o].delay)
        }
        var a,
        s = {},
        l = r(),
        u = function (t) {
            return t
        },
        c = u,
        f = u;
        return s.start = function () {
            a || i()
        },
        s.stop = function () {
            a && clearTimeout(a),
            a = n
        },
        s
    }
    ()
}
(jQuery, this), function (t) {
    function e(t) {
        this.repo_id = t
    }
    e.prototype.treeIsReady = function (t) {
        this.tree = t,
        void 0 != this.scroller && this.ready()
    },
    e.prototype.infiniteScrollIsReady = function (t) {
        this.scroller = t,
        void 0 != this.tree && this.ready()
    },
    e.prototype.ready = function () {
        var t = this;
        t.setupHashChange(),
        t.scroller.registerScrollCallback($.proxy(t.handleScroll, this))
    },
    e.prototype.setupHashChange = function () {
        $(window).hashchange($.proxy(this.handleHashChange, this)),
        this.handleHashChange()
    },
    e.prototype.handleHashChange = function () {
        var t = this.tree_id_from_hash();
        return null != t && void this.scrollTo(t)
    },
    e.prototype.tree_id_from_hash = function () {
        if (location.hash) {
            var t = location.hash.replace(/^#(tree::)?/, "");
            return TreeIds.parse_tree_id(t) ? t : null
        }
    },
    e.prototype.scrollTo = function (t) {
        var e = this,
        n = e.uriForTreeId(t),
        r = e.scroller.wrapper.find('[data-uris*="' + n + ';"], [data-uris$="' + n + '"]'),
        i = r.data("uris").split(";"),
        o = $.inArray(n, i),
        a = r.data("waypointNumber"),
        s = r.data("waypointSize"),
        l = a * s + o;
        r.is(".populated") ? e.scroller.scrollToRecord(l) : e.scroller.populateWaypoints(r, !1, function () {
            e.scroller.scrollToRecord(l)
        })
    },
    e.prototype.SCROLL_TIMEOUT = 100,
    e.prototype.handleScroll = function () {
        var t = this,
        e = function () {
            var e = t.scroller.getCurrentContext(),
            n = e.uri,
            r = TreeIds.uri_to_tree_id(n);
            t.tree.setCurrentNode(r);
            var i = this.scroller.getClosestElement();
            i && history.replaceState(null, null, document.location.pathname + "#tree::" + TreeIds.uri_to_tree_id(i.data("uri")))
        };
        clearTimeout(this.scrollTimeout),
        this.scrollTimeout = setTimeout(function () {
            e()
        }, this.SCROLL_TIMEOUT)
    },
    e.prototype.uriForTreeId = function (t) {
        var e = TreeIds.parse_tree_id(t);
        return "/repositories/" + this.repo_id + "/" + e.type + "s/" + e.id
    },
    t.TreeSync = e
}
(window), AS = {}, AS.app_prefix = function (t) {
    return APP_PATH + t.replace(/^\//, "")
}, function (t) {
    function e(t, e, n, r, i) {
        function o() {
            i && i(),
            s.handleHashOnLoad(),
            s.updateContextSummary()
        }
        function a() {
            r && r()
        }
        this.base_url = t,
        this.wrapper = e,
        this.elt = e.find(".infinite-record-container"),
        this.contextSummaryElt = e.siblings(".infinite-record-context"),
        this.container = e.closest(".feed-container"),
        this.recordCount = n;
        var s = this;
        this.initKeyboardNavigation(),
        this.populateWaypoints(a, o),
        this.initEventHandlers()
    }
    var n = "scroll::";
    e.prototype.populateWaypoints = function (t, e) {
        var n = this;
        t || (t = $.noop),
        e || (e = $.noop);
        var r = n.elt.find(".waypoint:not(.populated)");
        r.addClass("populated"),
        n.elt.attr("aria-busy", "true"),
        $(r).each(function (e, r) {
            var i = $(r).data("waypoint-number"),
            o = $(r).data("waypoint-size"),
            a = $(r).data("collection-size"),
            s = $(r).data("uris").split(";");
            $(r).addClass("loading").attr("tabindex", "0"),
            $.ajax(n.url_for("waypoints"), {
                method: "GET",
                data: {
                    urls: s,
                    number: i,
                    size: o,
                    collection_size: a
                },
                async: !0
            }).done(function (e) {
                $(r).html(e),
                $(r).removeClass("loading").removeAttr("tabindex"),
                t(),
                $(r).trigger("waypointloaded")
            })
        }),
        n.elt.removeAttr("aria-busy"),
        e()
    },
    e.prototype.url_for = function (t) {
        var e = this;
        return e.base_url + "/" + t
    },
    e.prototype.getClosestElement = function (t) {
        if (t && 1 == this.elt.find(".infinite-item:focus").length)
            return this.elt.find(".infinite-item:focus").closest(".infinite-record-record");
        var e = this.elt.find(".infinite-record-record"),
        n = this.findClosestElement(e);
        return $(e.get(n))
    },
    e.prototype.getCurrentContext = function (t) {
        var e = this.getClosestElement(t),
        n = e.data("ancestors") || [];
        if (1 == n.length && $.inArray(e.data("level"), ["series", "collection"]) >= 0)
            return e.data("uri");
        if (n.length > 1)
            for (var r = 0; r < n.length; r++)
                if ($.inArray(n[r].level, ["series", "collection"]) >= 0)
                    return n[r].ref;
        return null
    },
    e.prototype.updateContextSummary = function (t) {
        var e = this.getCurrentContext(t);
        if (e) {
            var n = this.contextSummaryElt.find('.dropdown-menu a[data-uri="' + e + '"]');
            if (n.length > 0)
                return $("#scrollContext .current-record-title").html(n.html()), this.contextSummaryElt.find(".dropdown-menu a").removeAttr("aria-current"), n.attr("aria-current", "true"), void $("#scrollContext").attr("title", $("#scrollContext .current-record-title").text().trim())
        }
        $("#scrollContext .current-record-title").html($("#scrollContext").parent().find(".dropdown-menu a:first").html()),
        this.contextSummaryElt.find(".dropdown-menu a").removeAttr("aria-current"),
        this.contextSummaryElt.find(".dropdown-menu a:first").attr("aria-current", "true"),
        $("#scrollContext").attr("title", $("#scrollContext .current-record-title").text().trim())
    },
    e.prototype.scrollToRecord = function (t) {
        var e = $(".waypoint").first().data("waypoint-size"),
        n = Math.floor(t / e),
        r = function (t) {
            $("#record-number-" + t + " > .infinite-item").focus()
        };
        $($(".waypoint")[n]).is(".populated") ? $($(".waypoint")[n]).is(".loading") ? ($($(".waypoint")[n]).focus(), $($(".waypoint")[n]).on("waypointloaded", function () {
                r(t)
            })) : r(t) : console.warn("Cannot scrollToRecord as waypoint not populated")
    },
    e.prototype.scrollToRecordForURI = function (t) {
        var e = this;
        if (t.indexOf("/resources/") > 0)
            s = 0;
        else {
            var n = e.wrapper.find('[data-uris*="' + t + ';"], [data-uris$="' + t + '"]');
            if (0 == n.length)
                return;
            var r = n.data("uris").split(";"),
            i = $.inArray(t, r) + 1,
            o = n.data("waypointNumber"),
            a = n.data("waypointSize"),
            s = o * a + i
        }
        e.scrollToRecord(s),
        e.updateHash(t)
    },
    e.prototype.updateHash = function (t) {
        history.replaceState(null, null, document.location.pathname + "#" + n + t)
    },
    e.prototype.handleHashOnLoad = function () {
        var t = this;
        if (location.hash && location.hash.startsWith("#" + n)) {
            var e = new RegExp("^#(" + n + ")"),
            r = location.hash.replace(e, "");
            setTimeout(function () {
                t.scrollToRecordForURI(r)
            })
        }
    },
    e.prototype.initEventHandlers = function () {
        var t = this;
        t.container.on("click", ".infinite-record-context .dropdown-menu a", function () {
            $("#scrollContext").dropdown("toggle"),
            t.scrollToRecordForURI($(this).data("uri"))
        }),
        t.container.on("focus", ".infinite-item", function () {
            var e = $(this);
            setTimeout(function () {
                t.updateHash(e.data("uri")),
                t.updateContextSummary(!0)
            })
        }),
        $(window).on("scroll", function () {
            window.scrollY > t.elt.offset().top ? (t.contextSummaryElt.addClass("fixed"), t.contextSummaryElt.find(".infinite-record-context-selector").css("width", t.elt.width() + "px").css("margin-left", t.elt.offset().left + "px"), t.contextSummaryElt.find(".infinite-record-context-resource").css("padding-left", t.elt.offset().left + "px")) : t.contextSummaryElt.removeClass("fixed").find(".infinite-record-context-selector").css("width", "auto").css("margin-left", 0),
            t.updateContextSummary()
        })
    },
    e.prototype.initKeyboardNavigation = function () {
        var t = this;
        t.elt.on("keydown", ".infinite-record-record", function (e) {
            var n = $(this).closest(".infinite-record-record"),
            r = n.find(" > .infinite-item").data("recordnumber"),
            i = 0,
            o = n.find(" > .infinite-item").data("collectionsize") - 1;
            if (34 == e.keyCode)
                r = Math.min(r + 1, o);
            else if (33 == e.keyCode)
                n.prev() && (r = Math.max(r - 1, i));
            else if (e.ctrlKey && 35 == e.keyCode)
                r = o;
            else {
                if (!e.ctrlKey || 36 != e.keyCode)
                    return !0;
                r = i
            }
            return e.preventDefault(),
            t.scrollToRecord(r),
            !1
        })
    },
    e.prototype.findClosestElement = function (t) {
        if (t.length <= 1)
            return 0;
        var e = (window.scrollY, t.first().offset().top, 0),
        n = t.length - 1,
        r = function (t) {
            return t.getBoundingClientRect().top
        };
        if (r(t[e]) <= 0 && r(t[n]) <= 0)
            return n;
        for (; e + 1 < n && r(t[e]) < 0 && r(t[n]) > 0; ) {
            var i = Math.floor((n - e) / 2) + e,
            o = t[i],
            a = r(o);
            a > 0 ? n = i : a <= 0 && (e = i)
        }
        return Math.abs(r(t[e])) < Math.abs(r(t[n])) ? e : n
    },
    t.WaypointLoader = e
}
(window);

