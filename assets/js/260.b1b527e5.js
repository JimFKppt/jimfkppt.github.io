(window.webpackJsonp=window.webpackJsonp||[]).push([[260],{758:function(s,a,e){"use strict";e.r(a);var n=e(21),t=Object(n.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"模糊查询-like"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#模糊查询-like"}},[s._v("#")]),s._v(" 模糊查询——like")]),s._v(" "),e("p",[e("code",[s._v("where .. like")])]),s._v(" "),e("ul",[e("li",[e("p",[e("code",[s._v("%")]),s._v(" 符号代表多个字符")])]),s._v(" "),e("li",[e("p",[e("code",[s._v("_")]),s._v(" 符号代表一个字符")])])]),s._v(" "),e("h2",{attrs:{id:"example"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[s._v("#")]),s._v(" Example")]),s._v(" "),e("div",{staticClass:"language-mysql line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("+----+------+\n| id | name |\n+----+------+\n| 1  | Tom  |\n| 2  | Jim  |\n| 3  | Anna |\n| 4  | 张三 |\n| 5  | 李四 |\n+----+------+\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br")])]),e("h3",{attrs:{id:"百分号"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#百分号"}},[s._v("#")]),s._v(" "),e("code",[s._v("%")]),s._v(" 百分号")]),s._v(" "),e("div",{staticClass:"language-mysql line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("select name from student where name like 'A%';\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("div",{staticClass:"language-mysql line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("+------+\n| name |\n+------+\n| Anna |\n+------+\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])]),e("div",{staticClass:"language-mysql line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("show variables like 'character_set_%';\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("div",{staticClass:"language-mysql line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("+--------------------------+---------------------------------------------------------+\n| Variable_name            | Value                                                   |\n+--------------------------+---------------------------------------------------------+\n| character_set_client     | gbk                                                     |\n| character_set_connection | gbk                                                     |\n| character_set_database   | gbk                                                     |\n| character_set_filesystem | binary                                                  |\n| character_set_results    | gbk                                                     |\n| character_set_server     | latin1                                                  |\n| character_set_system     | utf8                                                    |\n| character_sets_dir       | C:\\Program Files\\MySQL\\MySQL Server 5.7\\share\\charsets\\ |\n+--------------------------+---------------------------------------------------------+\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br")])]),e("h3",{attrs:{id:"下划线"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#下划线"}},[s._v("#")]),s._v(" "),e("code",[s._v("_")]),s._v(" 下划线")]),s._v(" "),e("div",{staticClass:"language-mysql line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("select name from student where name like '张_';\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("div",{staticClass:"language-mysql line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("+------+\n| name |\n+------+\n| 张三 |\n+------+\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])]),e("div",{staticClass:"language-mysql line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("select name from student where name like 'An__';\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("div",{staticClass:"language-mysql line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("+------+\n| name |\n+------+\n| Anna |\n+------+\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])])])}),[],!1,null,null,null);a.default=t.exports}}]);