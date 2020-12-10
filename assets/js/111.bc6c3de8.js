(window.webpackJsonp=window.webpackJsonp||[]).push([[111],{496:function(e,t,a){"use strict";a.r(t);var v=a(23),n=Object(v.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"响应式系统的依赖收集追踪原理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#响应式系统的依赖收集追踪原理"}},[e._v("#")]),e._v(" 响应式系统的依赖收集追踪原理")]),e._v(" "),a("h2",{attrs:{id:"为什么要依赖收集？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#为什么要依赖收集？"}},[e._v("#")]),e._v(" 为什么要依赖收集？")]),e._v(" "),a("p",[a("strong",[e._v("先举个栗子🌰")])]),e._v(" "),a("p",[e._v("我们现在有这么一个 Vue 对象。")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("new Vue({\n    template: \n        `<div>\n            <span>{{text1}}</span> \n            <span>{{text2}}</span> \n        <div>`,\n    data: {\n        text1: 'text1',\n        text2: 'text2',\n        text3: 'text3'\n    }\n});\n\n")])])]),a("p",[e._v("然后我们做了这么一个操作。")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("this.text3 = 'modify text3';\n\n")])])]),a("p",[e._v("我们修改了 "),a("code",[e._v("data")]),e._v(" 中 "),a("code",[e._v("text3")]),e._v(" 的数据，但是因为视图中并不需要用到 "),a("code",[e._v("text3")]),e._v(" ，所以我们并不需要触发上一章所讲的 "),a("code",[e._v("cb")]),e._v(" 函数来更新视图，调用 "),a("code",[e._v("cb")]),e._v(" 显然是不正确的。")]),e._v(" "),a("p",[a("strong",[e._v("再来一个栗子🌰")])]),e._v(" "),a("p",[e._v("假设我们现在有一个全局的对象，我们可能会在多个 Vue 对象中用到它进行展示。")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("let globalObj = {\n    text1: 'text1'\n};\n\nlet o1 = new Vue({\n    template:\n        `<div>\n            <span>{{text1}}</span> \n        <div>`,\n    data: globalObj\n});\n\nlet o2 = new Vue({\n    template:\n        `<div>\n            <span>{{text1}}</span> \n        <div>`,\n    data: globalObj\n});\n\n")])])]),a("p",[e._v("这个时候，我们执行了如下操作。")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("globalObj.text1 = 'hello,text1';\n\n")])])]),a("p",[e._v("我们应该需要通知 "),a("code",[e._v("o1")]),e._v(" 以及 "),a("code",[e._v("o2")]),e._v(" 两个vm实例进行视图的更新，「依赖收集」会让 "),a("code",[e._v("text1")]),e._v(" 这个数据知道“哦～有两个地方依赖我的数据，我变化的时候需要通知它们～”。")]),e._v(" "),a("p",[e._v("最终会形成数据与视图的一种对应关系，如下图。")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/1/5/160c4572fdd738f2?w=610&h=270&f=png&s=22824",alt:""}})]),e._v(" "),a("p",[e._v("接下来我们来介绍一下「依赖收集」是如何实现的。")]),e._v(" "),a("h2",{attrs:{id:"订阅者-dep"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#订阅者-dep"}},[e._v("#")]),e._v(" 订阅者 Dep")]),e._v(" "),a("p",[e._v("首先我们来实现一个订阅者 Dep ，它的主要作用是用来存放 "),a("code",[e._v("Watcher")]),e._v(" 观察者对象。")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("class Dep {\n    constructor () {\n        /* 用来存放Watcher对象的数组 */\n        this.subs = [];\n    }\n\n    /* 在subs中添加一个Watcher对象 */\n    addSub (sub) {\n        this.subs.push(sub);\n    }\n\n    /* 通知所有Watcher对象更新视图 */\n    notify () {\n        this.subs.forEach((sub) => {\n            sub.update();\n        })\n    }\n}\n\n")])])]),a("p",[e._v("为了便于理解我们只实现了添加的部分代码，主要是两件事情：")]),e._v(" "),a("ol",[a("li",[e._v("用 "),a("code",[e._v("addSub")]),e._v(" 方法可以在目前的 "),a("code",[e._v("Dep")]),e._v(" 对象中增加一个 "),a("code",[e._v("Watcher")]),e._v(" 的订阅操作；")]),e._v(" "),a("li",[e._v("用 "),a("code",[e._v("notify")]),e._v(" 方法通知目前 "),a("code",[e._v("Dep")]),e._v(" 对象的 "),a("code",[e._v("subs")]),e._v(" 中的所有 "),a("code",[e._v("Watcher")]),e._v(" 对象触发更新操作。")])]),e._v(" "),a("h2",{attrs:{id:"观察者-watcher"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#观察者-watcher"}},[e._v("#")]),e._v(" 观察者 Watcher")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('class Watcher {\n    constructor () {\n        /* 在new一个Watcher对象时将该对象赋值给Dep.target，在get中会用到 */\n        Dep.target = this;\n    }\n\n    /* 更新视图的方法 */\n    update () {\n        console.log("视图更新啦～");\n    }\n}\n\nDep.target = null;\n\n')])])]),a("h2",{attrs:{id:"依赖收集"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#依赖收集"}},[e._v("#")]),e._v(" 依赖收集")]),e._v(" "),a("p",[e._v("接下来我们修改一下 "),a("code",[e._v("defineReactive")]),e._v(" 以及 Vue 的构造函数，来完成依赖收集。")]),e._v(" "),a("p",[e._v("我们在闭包中增加了一个 Dep 类的对象，用来收集 "),a("code",[e._v("Watcher")]),e._v(" 对象。在对象被「读」的时候，会触发 "),a("code",[e._v("reactiveGetter")]),e._v(" 函数把当前的 "),a("code",[e._v("Watcher")]),e._v(" 对象（存放在 Dep.target 中）收集到 "),a("code",[e._v("Dep")]),e._v(" 类中去。之后如果当该对象被「"),a("strong",[e._v("写")]),e._v("」的时候，则会触发 "),a("code",[e._v("reactiveSetter")]),e._v(" 方法，通知 "),a("code",[e._v("Dep")]),e._v(" 类调用 "),a("code",[e._v("notify")]),e._v(" 来触发所有 "),a("code",[e._v("Watcher")]),e._v(" 对象的 "),a("code",[e._v("update")]),e._v(" 方法更新对应视图。")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("function defineReactive (obj, key, val) {\n    /* 一个Dep类对象 */\n    const dep = new Dep();\n    \n    Object.defineProperty(obj, key, {\n        enumerable: true,\n        configurable: true,\n        get: function reactiveGetter () {\n            /* 将Dep.target（即当前的Watcher对象存入dep的subs中） */\n            dep.addSub(Dep.target);\n            return val;         \n        },\n        set: function reactiveSetter (newVal) {\n            if (newVal === val) return;\n            /* 在set的时候触发dep的notify来通知所有的Watcher对象更新视图 */\n            dep.notify();\n        }\n    });\n}\n\nclass Vue {\n    constructor(options) {\n        this._data = options.data;\n        observer(this._data);\n        /* 新建一个Watcher观察者对象，这时候Dep.target会指向这个Watcher对象 */\n        new Watcher();\n        /* 在这里模拟render的过程，为了触发test属性的get函数 */\n        console.log('render~', this._data.test);\n    }\n}\n\n")])])]),a("h2",{attrs:{id:"小结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#小结"}},[e._v("#")]),e._v(" 小结")]),e._v(" "),a("p",[e._v("总结一下。")]),e._v(" "),a("p",[e._v("首先在 "),a("code",[e._v("observer")]),e._v(" 的过程中会注册 "),a("code",[e._v("get")]),e._v(" 方法，该方法用来进行「"),a("strong",[e._v("依赖收集")]),e._v("」。在它的闭包中会有一个 "),a("code",[e._v("Dep")]),e._v(" 对象，这个对象用来存放 Watcher 对象的实例。其实「"),a("strong",[e._v("依赖收集")]),e._v("」的过程就是把 "),a("code",[e._v("Watcher")]),e._v(" 实例存放到对应的 "),a("code",[e._v("Dep")]),e._v(" 对象中去。"),a("code",[e._v("get")]),e._v(" 方法可以让当前的 "),a("code",[e._v("Watcher")]),e._v(" 对象（Dep.target）存放到它的 subs 中（"),a("code",[e._v("addSub")]),e._v("）方法，在数据变化时，"),a("code",[e._v("set")]),e._v(" 会调用 "),a("code",[e._v("Dep")]),e._v(" 对象的 "),a("code",[e._v("notify")]),e._v(" 方法通知它内部所有的 "),a("code",[e._v("Watcher")]),e._v(" 对象进行视图更新。")]),e._v(" "),a("p",[e._v("这是 "),a("code",[e._v("Object.defineProperty")]),e._v(" 的 "),a("code",[e._v("set/get")]),e._v(" 方法处理的事情，那么「"),a("strong",[e._v("依赖收集")]),e._v("」的前提条件还有两个：")]),e._v(" "),a("ol",[a("li",[e._v("触发 "),a("code",[e._v("get")]),e._v(" 方法；")]),e._v(" "),a("li",[e._v("新建一个 Watcher 对象。")])]),e._v(" "),a("p",[e._v("这个我们在 Vue 的构造类中处理。新建一个 "),a("code",[e._v("Watcher")]),e._v(" 对象只需要 new 出来，这时候 "),a("code",[e._v("Dep.target")]),e._v(" 已经指向了这个 new 出来的 "),a("code",[e._v("Watcher")]),e._v(" 对象来。而触发 "),a("code",[e._v("get")]),e._v(" 方法也很简单，实际上只要把 render function 进行渲染，那么其中的依赖的对象都会被「读取」，这里我们通过打印来模拟这个过程，读取 test 来触发 "),a("code",[e._v("get")]),e._v(" 进行「依赖收集」。")]),e._v(" "),a("p",[e._v("本章我们介绍了「依赖收集」的过程，配合之前的响应式原理，已经把整个「响应式系统」介绍完毕了。其主要就是 "),a("code",[e._v("get")]),e._v(" 进行「依赖收集」。"),a("code",[e._v("set")]),e._v(" 通过观察者来更新视图，配合下图仔细捋一捋，相信一定能搞懂它！")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2017/12/19/1606edad5ca9e23d?w=1460&h=728&f=png&s=131217",alt:""}})]),e._v(" "),a("p",[e._v("注：本节代码参考"),a("a",{attrs:{href:"https://github.com/answershuto/VueDemo/blob/master/%E3%80%8A%E5%93%8D%E5%BA%94%E5%BC%8F%E7%B3%BB%E7%BB%9F%E7%9A%84%E4%BE%9D%E8%B5%96%E6%94%B6%E9%9B%86%E8%BF%BD%E8%B8%AA%E5%8E%9F%E7%90%86%E3%80%8B.js",target:"_blank",rel:"noopener noreferrer"}},[e._v("《响应式系统的依赖收集追踪原理》"),a("OutboundLink")],1),e._v("。")])])}),[],!1,null,null,null);t.default=n.exports}}]);