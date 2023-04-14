(window.webpackJsonp=window.webpackJsonp||[]).push([[243],{742:function(s,a,e){"use strict";e.r(a);var t=e(21),r=Object(t.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"字符集编码问题"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#字符集编码问题"}},[s._v("#")]),s._v(" 字符集编码问题")]),s._v(" "),e("h2",{attrs:{id:"情景"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#情景"}},[s._v("#")]),s._v(" 情景")]),s._v(" "),e("p",[s._v("Windows上的MySQL客户端使用中文出现乱码问题。那就要检查一下终端使用的字符集了，比如cmd就是 "),e("code",[s._v("gbk")]),s._v(" 字符集。")]),s._v(" "),e("h2",{attrs:{id:"查看客户端和显示结果使用的字符集编码"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#查看客户端和显示结果使用的字符集编码"}},[s._v("#")]),s._v(" 查看客户端和显示结果使用的字符集编码")]),s._v(" "),e("div",{staticClass:"language-mysql line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("show variables like 'character_set_%';\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("显示如下：")]),s._v(" "),e("div",{staticClass:"language-mysql line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("+--------------------------+---------------------------------------------------------+\n| Variable_name            | Value                                                   |\n+--------------------------+---------------------------------------------------------+\n| character_set_client     | gbk                                                     |\n| character_set_connection | gbk                                                     |\n| character_set_database   | gbk                                                     |\n| character_set_filesystem | binary                                                  |\n| character_set_results    | gbk                                                     |\n| character_set_server     | latin1                                                  |\n| character_set_system     | utf8                                                    |\n| character_sets_dir       | C:\\Program Files\\MySQL\\MySQL Server 5.7\\share\\charsets\\ |\n+--------------------------+---------------------------------------------------------+\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br")])]),e("p",[s._v("其中最主要的就是 "),e("code",[s._v("character_set_client")]),s._v(" 和 "),e("code",[s._v("character_set_results")]),s._v("，在Windows上只要确保最主要的这两个值为 "),e("code",[s._v("gbk")]),s._v(" 就行了，在实际开发过程中这些值肯定都是 "),e("code",[s._v("utf8")]),s._v("。")]),s._v(" "),e("h2",{attrs:{id:"修改字符集编码"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#修改字符集编码"}},[s._v("#")]),s._v(" 修改字符集编码")]),s._v(" "),e("div",{staticClass:"language-mysql line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("set character_set_client=gbk;\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("div",{staticClass:"language-mysql line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("set character_set_results=gbk;\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("blockquote",[e("p",[s._v("注意！初学者在Windows上使用GBK没毛病，但是千万不要把公司里的也改成GBK！一定不能瞎几把搞！")])])])}),[],!1,null,null,null);a.default=r.exports}}]);