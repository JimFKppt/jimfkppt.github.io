(window.webpackJsonp=window.webpackJsonp||[]).push([[263],{762:function(s,a,n){"use strict";n.r(a);var e=n(21),t=Object(e.a)({},(function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"结果筛选-having"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#结果筛选-having"}},[s._v("#")]),s._v(" 结果筛选——having")]),s._v(" "),n("h2",{attrs:{id:"where-和-having-的区别"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#where-和-having-的区别"}},[s._v("#")]),s._v(" "),n("code",[s._v("where")]),s._v(" 和 "),n("code",[s._v("having")]),s._v(" 的区别")]),s._v(" "),n("ul",[n("li",[n("p",[n("code",[s._v("where")]),s._v(" 是对原表进行筛选，是在结果返回之前起作用的，不能使用聚合函数")])]),s._v(" "),n("li",[n("p",[n("code",[s._v("having")]),s._v(" 是对查询结果（结果集 / 伪表）进行过滤，可以使用聚合函数")])])]),s._v(" "),n("h2",{attrs:{id:"example"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[s._v("#")]),s._v(" Example")]),s._v(" "),n("div",{staticClass:"language-mysql line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("SELECT\n\taddress,\n\tavg( age ) AS 'avg_age' \nFROM\n\tmanager \nHAVING\n\tage >= 24;\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br")])]),n("div",{staticClass:"language-mysql line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("SELECT\n\tclassid,\n\tcount(*) AS 'num_of_student' \nFROM\n\tstudent \nGROUP BY\n\tclassid;\nHAVING\n\tcount <=10;\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br")])])])}),[],!1,null,null,null);a.default=t.exports}}]);