(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{450:function(t,a,s){"use strict";s.r(a);var e=s(23),v=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"等价性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#等价性"}},[t._v("#")]),t._v(" 等价性")]),t._v(" "),s("blockquote",[s("p",[t._v("推荐在任何情景下摒弃 "),s("code",[t._v("==")]),t._v(" 操作符，使用 "),s("code",[t._v("===")]),t._v(" 替代。")])]),t._v(" "),s("p",[t._v("示例：")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 故意混淆视野的取反操作，其实比较容易理解")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// true")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// true")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// false")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// true")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 如果上面的解决了，那这个呢？")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// false")]),t._v("\n")])])]),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("默认的 falsy")]),t._v(" "),s("ul",[s("li",[s("code",[t._v('""')]),t._v(" （空字符串）")]),t._v(" "),s("li",[s("code",[t._v("0")]),t._v("、"),s("code",[t._v("-0")]),t._v("、"),s("code",[t._v("NaN")]),t._v(" （非法的 "),s("code",[t._v("Number")]),t._v("）")]),t._v(" "),s("li",[s("code",[t._v("null")]),t._v("、"),s("code",[t._v("undefined")])]),t._v(" "),s("li",[s("code",[t._v("false")])])])]),t._v(" "),s("h2",{attrs:{id:"非等价性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#非等价性"}},[t._v("#")]),t._v(" 非等价性")]),t._v(" "),s("p",[s("code",[t._v("<")]),t._v("、"),s("code",[t._v(">")]),t._v("、"),s("code",[t._v("<=")]),t._v(" 和 "),s("code",[t._v(">=")]),t._v(" 用于非等价性比较（关系比较）。")]),t._v(" "),s("p",[t._v("当比较的双方都为 "),s("code",[t._v("String")]),t._v(" 时按照字典顺序（typical alphabetic rules）比较，当其中一方为 "),s("code",[t._v("Number")]),t._v(" 时则均转为 "),s("code",[t._v("Number")]),t._v(" 再比较：")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"aba"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"abb"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// false")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"43"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"42"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// true")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"43"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("42")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// true")]),t._v("\n")])])]),s("p",[t._v("当不同类型的值进行比较时：")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"aba"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("42")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// false")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"aba"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("42")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// false")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"aba"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("42")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// false")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// 参考下方的解析，是由于 "aba" 转为数字时结果为 NaN')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Number")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"aba"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// NaN")]),t._v("\n")])])]),s("h2",{attrs:{id:"解析"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#解析"}},[t._v("#")]),t._v(" 解析")]),t._v(" "),s("p",[t._v("关于这一部分 ECMA 有规范的说明："),s("a",{attrs:{href:"https://www.ecma-international.org/ecma-262/5.1/#sec-11.9.3",target:"_blank",rel:"noopener noreferrer"}},[t._v("5.1"),s("OutboundLink")],1),t._v(" 版、"),s("a",{attrs:{href:"http://www.ecma-international.org/ecma-262/6.0/#sec-7.2.12",target:"_blank",rel:"noopener noreferrer"}},[t._v("6.0"),s("OutboundLink")],1),t._v(" 版。")]),t._v(" "),s("p",[t._v("偷懒，借用一下阮一峰的翻译：")]),t._v(" "),s("ol",[s("li",[t._v("如果 "),s("code",[t._v("x")]),t._v(" 不是正常值（比如抛出一个错误），中断执行。")]),t._v(" "),s("li",[t._v("如果 "),s("code",[t._v("y")]),t._v(" 不是正常值，中断执行。")]),t._v(" "),s("li",[t._v("如果 "),s("code",[t._v("Type(x)")]),t._v(" 与 "),s("code",[t._v("Type(y)")]),t._v(" 相同，执行严格相等运算 "),s("code",[t._v("x === y")]),t._v("。")]),t._v(" "),s("li",[t._v("如果 "),s("code",[t._v("x")]),t._v(" 是 "),s("code",[t._v("null")]),t._v("，"),s("code",[t._v("y")]),t._v(" 是 "),s("code",[t._v("undefined")]),t._v("，返回 "),s("code",[t._v("true")]),t._v("。")]),t._v(" "),s("li",[t._v("如果 "),s("code",[t._v("x")]),t._v(" 是 "),s("code",[t._v("undefined")]),t._v("，"),s("code",[t._v("y")]),t._v(" 是 "),s("code",[t._v("null")]),t._v("，返回 "),s("code",[t._v("true")]),t._v("。")]),t._v(" "),s("li",[t._v("如果 "),s("code",[t._v("Type(x)")]),t._v(" 是数值，"),s("code",[t._v("Type(y)")]),t._v(" 是字符串，返回 "),s("code",[t._v("x == ToNumber(y)")]),t._v(" 的结果。")]),t._v(" "),s("li",[t._v("如果 "),s("code",[t._v("Type(x)")]),t._v(" 是字符串，"),s("code",[t._v("Type(y)")]),t._v(" 是数值，返回 "),s("code",[t._v("ToNumber(x) == y")]),t._v(" 的结果。")]),t._v(" "),s("li",[t._v("如果 "),s("code",[t._v("Type(x)")]),t._v(" 是布尔值，返回 "),s("code",[t._v("ToNumber(x) == y")]),t._v(" 的结果。")]),t._v(" "),s("li",[t._v("如果 "),s("code",[t._v("Type(y)")]),t._v(" 是布尔值，返回 "),s("code",[t._v("x == ToNumber(y)")]),t._v(" 的结果。")]),t._v(" "),s("li",[t._v("如果 "),s("code",[t._v("Type(x)")]),t._v(" 是字符串或数值或 "),s("code",[t._v("Symbol")]),t._v(" 值，"),s("code",[t._v("Type(y)")]),t._v(" 是对象，返回 "),s("code",[t._v("x == ToPrimitive(y)")]),t._v(" 的结果。")]),t._v(" "),s("li",[t._v("如果 "),s("code",[t._v("Type(x)")]),t._v(" 是对象，"),s("code",[t._v("Type(y)")]),t._v(" 是字符串或数值或 "),s("code",[t._v("Symbol")]),t._v(" 值，返回 "),s("code",[t._v("ToPrimitive(x) == y")]),t._v(" 的结果。")]),t._v(" "),s("li",[t._v("返回 "),s("code",[t._v("false")]),t._v("。")])]),t._v(" "),s("p",[t._v("根据上述规则则可以得到：")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 不符合以上 11 种条件，返回 false")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// false")]),t._v("\n")])])]),s("h2",{attrs:{id:"toprimitive"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#toprimitive"}},[t._v("#")]),t._v(" ToPrimitive")]),t._v(" "),s("p",[t._v("对于以上的规则其中比较难以理解的为该部分了，对象转为原始值需要考虑三种（Boolean、String、Number）情况。")]),t._v(" "),s("h3",{attrs:{id:"_1-number"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-number"}},[t._v("#")]),t._v(" 1. Number")]),t._v(" "),s("p",[t._v("所有对象（包括数组、函数）都转为 true。")]),t._v(" "),s("h3",{attrs:{id:"_2-string"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-string"}},[t._v("#")]),t._v(" 2. String")]),t._v(" "),s("p",[t._v("对象转为 "),s("strong",[t._v("String")]),t._v(" 经历以下步骤：")]),t._v(" "),s("ol",[s("li",[t._v("如果对象具有 "),s("code",[t._v("toString()")]),t._v(" 方法，则调用这个方法。如果它返回一个原始值，JavaScript 将这个值转为字符串（如果本身不是字符串的话），并返回这个字符串结果。")]),t._v(" "),s("li",[t._v("如果对象没有 "),s("code",[t._v("toString()")]),t._v(" 方法，或者这个方法并不返回一个原始值，那么 JavaScript 会调用 "),s("code",[t._v("valueOf()")]),t._v(" 方法。如果存在这个方法，则 JavaScript 调用它。如果返回值是原始值，JavaScript 将这个值转为字符串（如果本身不是字符串的话），并返回这个字符串结果。")]),t._v(" "),s("li",[t._v("否则，JavaScript 无法从 "),s("code",[t._v("toString()")]),t._v(" 或 "),s("code",[t._v("valueOf()")]),t._v(" 获得一个原始值，因此这时它将抛出一个类型错误异常。")])]),t._v(" "),s("h3",{attrs:{id:"_3-number"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-number"}},[t._v("#")]),t._v(" 3. Number")]),t._v(" "),s("p",[t._v("对象转为 "),s("strong",[t._v("Number")]),t._v(" 顺序有些区别：")]),t._v(" "),s("ol",[s("li",[t._v("如果对象具有 "),s("code",[t._v("valueOf()")]),t._v(" 方法，后者返回一个原始值，则 JavaScript 将这个原始值转为数字（如果需要的话），并返回这个数字。")]),t._v(" "),s("li",[t._v("否则，如果对象具有 "),s("code",[t._v("toString()")]),t._v(" 方法，后者返回一个原始值，则 JavaScript 将其转换并返回。")]),t._v(" "),s("li",[t._v("否则，JavaScript 抛出一个类型错误异常。")])])])}),[],!1,null,null,null);a.default=v.exports}}]);