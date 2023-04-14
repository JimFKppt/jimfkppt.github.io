(window.webpackJsonp=window.webpackJsonp||[]).push([[213],{714:function(s,t,a){"use strict";a.r(t);var n=a(21),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"两个以往的问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#两个以往的问题"}},[s._v("#")]),s._v(" 两个以往的问题")]),s._v(" "),a("ol",[a("li",[s._v("在 "),a("code",[s._v("main")]),s._v(" 方法中测试")]),s._v(" "),a("li",[s._v("将逻辑代码放在 "),a("code",[s._v("main")]),s._v(" 方法中")])]),s._v(" "),a("p",[s._v("现在，我们应该摒弃这个两个“习惯”。")]),s._v(" "),a("h2",{attrs:{id:"以往的测试方式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#以往的测试方式"}},[s._v("#")]),s._v(" 以往的测试方式")]),s._v(" "),a("p",[s._v("在 "),a("code",[s._v("main")]),s._v(" 方法中测试")]),s._v(" "),a("ol",[a("li",[s._v("编写函数（方法）")]),s._v(" "),a("li",[s._v("在 "),a("code",[s._v("main")]),s._v(" 中调用该函数")]),s._v(" "),a("li",[a("strong",[s._v("肉眼查看输出")]),s._v("，检查是否符合"),a("strong",[s._v("预期结果")])])]),s._v(" "),a("p",[s._v("注意，"),a("strong",[s._v("预期结果")]),s._v("是由人工计算的。当预期结果不能由人来计算的时候，怎样验证程序结果是正确的？")]),s._v(" "),a("p",[s._v("我想这个问题的答案很容易就能想到。既然人计算不了了，那就交给代码呗。关键还不是这个。关键是不应该在 "),a("code",[s._v("main()")]),s._v(" 中测试。")]),s._v(" "),a("h2",{attrs:{id:"main-方法不是处理逻辑的地儿"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#main-方法不是处理逻辑的地儿"}},[s._v("#")]),s._v(" "),a("code",[s._v("main")]),s._v(" 方法不是处理逻辑的地儿")]),s._v(" "),a("p",[a("code",[s._v("main")]),s._v(" 方法就是整个"),a("strong",[s._v("程序的入口")]),s._v("，而不是处理逻辑（完成功能）的地儿。")]),s._v(" "),a("p",[a("code",[s._v("main")]),s._v(" 方法里面不应该有大量的逻辑性的代码（功能性的代码）。这些逻辑代码应该从 "),a("code",[s._v("main")]),s._v(" 中脱离出来变成复用性很强的函数（方法），然后由 "),a("code",[s._v("main")]),s._v(" 或其它函数来调用。")]),s._v(" "),a("p",[s._v("你会发现很多nb的框架，"),a("code",[s._v("main")]),s._v(" 里边儿就一行代码（比如 "),a("code",[s._v("runApplication()")]),s._v("）。")]),s._v(" "),a("h2",{attrs:{id:"模块化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#模块化"}},[s._v("#")]),s._v(" 模块化")]),s._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Run")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("static")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("main")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" args"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("run")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    \n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("static")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sayHello")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("System")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("out"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Hello!"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    \n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("static")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("run")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    \t"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sayHello")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        \n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// ...")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// ...")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br")])]),a("p",[s._v("要将代码模块化很不容易，甚至可能遇到很多问题。")]),s._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[s._v("注意")]),s._v(" "),a("p",[s._v("但是，遇到问题肯定是你技术学得不行！记住我说的这句话。——Frank")])])])}),[],!1,null,null,null);t.default=e.exports}}]);