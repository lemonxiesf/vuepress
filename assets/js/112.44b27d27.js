(window.webpackJsonp=window.webpackJsonp||[]).push([[112],{497:function(e,t,a){"use strict";a.r(t);var r=a(23),v=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"响应式系统的基本原理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#响应式系统的基本原理"}},[e._v("#")]),e._v(" 响应式系统的基本原理")]),e._v(" "),a("h2",{attrs:{id:"响应式系统"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#响应式系统"}},[e._v("#")]),e._v(" 响应式系统")]),e._v(" "),a("p",[e._v("Vue.js 是一款 MVVM 框架，数据模型仅仅是普通的 JavaScript 对象，但是对这些对象进行操作时，却能影响对应视图，它的核心实现就是「"),a("strong",[e._v("响应式系统")]),e._v("」。尽管我们在使用 Vue.js 进行开发时不会直接修改「"),a("strong",[e._v("响应式系统")]),e._v("」，但是理解它的实现有助于避开一些常见的「"),a("strong",[e._v("坑")]),e._v("」，也有助于在遇见一些琢磨不透的问题时可以深入其原理来解决它。")]),e._v(" "),a("h2",{attrs:{id:"object-defineproperty"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#object-defineproperty"}},[e._v("#")]),e._v(" "),a("code",[e._v("Object.defineProperty")])]),e._v(" "),a("p",[e._v("首先我们来介绍一下 "),a("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty",target:"_blank",rel:"noopener noreferrer"}},[a("code",[e._v("Object.defineProperty")]),a("OutboundLink")],1),e._v("，Vue.js就是基于它实现「"),a("strong",[e._v("响应式系统")]),e._v("」的。")]),e._v(" "),a("p",[e._v("首先是使用方法：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("/*\n    obj: 目标对象\n    prop: 需要操作的目标对象的属性名\n    descriptor: 描述符\n    \n    return value 传入对象\n*/\nObject.defineProperty(obj, prop, descriptor)\n\n")])])]),a("p",[e._v("descriptor的一些属性，简单介绍几个属性，具体可以参考 "),a("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty",target:"_blank",rel:"noopener noreferrer"}},[e._v("MDN 文档"),a("OutboundLink")],1),e._v("。")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("enumerable")]),e._v("，属性是否可枚举，默认 false。")]),e._v(" "),a("li",[a("code",[e._v("configurable")]),e._v("，属性是否可以被修改或者删除，默认 false。")]),e._v(" "),a("li",[a("code",[e._v("get")]),e._v("，获取属性的方法。")]),e._v(" "),a("li",[a("code",[e._v("set")]),e._v("，设置属性的方法。")])]),e._v(" "),a("h2",{attrs:{id:"实现-observer（可观察的）"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#实现-observer（可观察的）"}},[e._v("#")]),e._v(" 实现 "),a("code",[e._v("observer")]),e._v("（可观察的）")]),e._v(" "),a("p",[e._v("知道了 "),a("code",[e._v("Object.defineProperty")]),e._v(" 以后，我们来用它使对象变成可观察的。")]),e._v(" "),a("p",[e._v("这一部分的内容我们在第二小节中已经初步介绍过，在 "),a("code",[e._v("init")]),e._v(" 的阶段会进行初始化，对数据进行「"),a("strong",[e._v("响应式化")]),e._v("」。")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2017/12/19/1606e8abbababbe6?w=828&h=336&f=png&s=24213",alt:""}})]),e._v(" "),a("p",[e._v("为了便于理解，我们不考虑数组等复杂的情况，只对对象进行处理。")]),e._v(" "),a("p",[e._v("首先我们定义一个 "),a("code",[e._v("cb")]),e._v(" 函数，这个函数用来模拟视图更新，调用它即代表更新视图，内部可以是一些更新视图的方法。")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('function cb (val) {\n    /* 渲染视图 */\n    console.log("视图更新啦～");\n}\n\n')])])]),a("p",[e._v("然后我们定义一个 "),a("code",[e._v("defineReactive")]),e._v(" ，这个方法通过 "),a("code",[e._v("Object.defineProperty")]),e._v(" 来实现对对象的「"),a("strong",[e._v("响应式")]),e._v("」化，入参是一个 obj（需要绑定的对象）、key（obj的某一个属性），val（具体的值）。经过 "),a("code",[e._v("defineReactive")]),e._v(" 处理以后，我们的 obj 的 key 属性在「读」的时候会触发 "),a("code",[e._v("reactiveGetter")]),e._v(" 方法，而在该属性被「写」的时候则会触发 "),a("code",[e._v("reactiveSetter")]),e._v(" 方法。")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("function defineReactive (obj, key, val) {\n    Object.defineProperty(obj, key, {\n        enumerable: true,       /* 属性可枚举 */\n        configurable: true,     /* 属性可被修改或删除 */\n        get: function reactiveGetter () {\n            return val;         /* 实际上会依赖收集，下一小节会讲 */\n        },\n        set: function reactiveSetter (newVal) {\n            if (newVal === val) return;\n            cb(newVal);\n        }\n    });\n}\n\n")])])]),a("p",[e._v("当然这是不够的，我们需要在上面再封装一层 "),a("code",[e._v("observer")]),e._v(" 。这个函数传入一个 value（需要「"),a("strong",[e._v("响应式")]),e._v("」化的对象），通过遍历所有属性的方式对该对象的每一个属性都通过 "),a("code",[e._v("defineReactive")]),e._v(" 处理。（注：实际上 observer 会进行递归调用，为了便于理解去掉了递归的过程）")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("function observer (value) {\n    if (!value || (typeof value !== 'object')) {\n        return;\n    }\n    \n    Object.keys(value).forEach((key) => {\n        defineReactive(value, key, value[key]);\n    });\n}\n\n")])])]),a("p",[e._v("最后，让我们用 "),a("code",[e._v("observer")]),e._v(" 来封装一个 Vue 吧！")]),e._v(" "),a("p",[e._v("在 Vue 的构造函数中，对 "),a("code",[e._v("options")]),e._v(" 的 "),a("code",[e._v("data")]),e._v(" 进行处理，这里的 "),a("code",[e._v("data")]),e._v(" 想必大家很熟悉，就是平时我们在写 Vue 项目时组件中的 "),a("code",[e._v("data")]),e._v(" 属性（实际上是一个函数，这里当作一个对象来简单处理）。")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("class Vue {\n    /* Vue构造类 */\n    constructor(options) {\n        this._data = options.data;\n        observer(this._data);\n    }\n}\n\n")])])]),a("p",[e._v("这样我们只要 new 一个 Vue 对象，就会将 "),a("code",[e._v("data")]),e._v(" 中的数据进行「"),a("strong",[e._v("响应式")]),e._v("」化。如果我们对 "),a("code",[e._v("data")]),e._v(" 的属性进行下面的操作，就会触发 "),a("code",[e._v("cb")]),e._v(" 方法更新视图。")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('let o = new Vue({\n    data: {\n        test: "I am test."\n    }\n});\no._data.test = "hello,world.";  /* 视图更新啦～ */\n\n')])])]),a("p",[e._v("至此，响应式原理已经介绍完了，接下来让我们学习「"),a("strong",[e._v("响应式系统")]),e._v("」的另一部分 ——「"),a("strong",[e._v("依赖收集")]),e._v("」。")]),e._v(" "),a("p",[e._v("注：本节代码参考"),a("a",{attrs:{href:"https://github.com/answershuto/VueDemo/blob/master/%E3%80%8A%E5%93%8D%E5%BA%94%E5%BC%8F%E7%B3%BB%E7%BB%9F%E7%9A%84%E5%9F%BA%E6%9C%AC%E5%8E%9F%E7%90%86%E3%80%8B.js",target:"_blank",rel:"noopener noreferrer"}},[e._v("《响应式系统的基本原理》"),a("OutboundLink")],1),e._v("。")])])}),[],!1,null,null,null);t.default=v.exports}}]);