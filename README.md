# vue-scroll-mobile-demo
>* 该项目是一个演示了 web app 各大【scroll view】主流插件的用法，主要面向 vue 项目开发者，使用 [vux](https://github.com/airyland/vux) 作为项目骨架，scroll view 采用图文的方式进行布局，可以无限加载数据，用于测试各大插件在滑动的过程中
是否卡顿，滑动效果是否自然，比较了8种较为主流的 scroll view 插件（具体见插件比较），并对 mescroll 进行了源代码上的封装，对 better-scroll 进行了使用上的封装。
---

## 扫码快速体验（使用手机浏览器打开）
<img src="http://i.pengxun.cn/thumb/articles/20160809/131152257267080082@200x200.jpg" width="300" alt="公众号" align=center />

# 安装与运行
```angular2html
  npm install
  npm run dev
```

# 项目打包
```angular2html
  npm run build
```

## 演示界面截图（4种，其他插件效果安装体验）
<img src="http://oss.vzan.cc/image/jpg/2016/9/17/1603558eafbbea90b7408986afdaf4f382782f.jpg" width="380"/>    <img src="http://oss.vzan.cc/image/jpg/2016/9/17/1603552a675d2eb56345f2945ab0d149618b1e.jpg" width="380"/>

<img src="http://oss.vzan.cc/image/jpg/2016/9/17/1603558618432dfe684017b4520a63febc0929.jpg" width="380"/>    <img src="http://oss.vzan.cc/image/jpg/2016/9/17/16035616d0318100874433a2e25ea5dfe0c1c3.jpg" width="380"/>

## 插件比较
<table border="1" cellspacing="0">
	<tr align="center"><td colspan="3"><b>down 8款插件比较 </b></td></tr>
	<tr align="center">
		<td>GitHub</td>
		<td>默认值</td>
		<td>说明</td>
	</tr>
	<tr align="center">
		<td>vux</td>
		<td>https://github.com/airyland/vux</td>
		<td>基于 vue 与 weui 移动端组件库，但该 scroller 组件官方称已经不再维护，建议使用第三方插件。优点：无论 Android 还是 iOS，scroll view 都可以产生回弹效果，缺点：滑动卡顿、不自然，局限于 vux 框架之中</td>
	</tr>
	<tr align="center">
		<td>better-scroll</td>
		<td>https://github.com/ustbhuangyi/better-scroll</td>
		<td>算是 GitHub 上 star 最多的插件了，很多项目在使用，详细介绍见官网。优点：作者更新频繁，非常上心（上次我凌晨2点多提了个issue，十分钟之后就回复了），使用者较多，功能也非常丰富，具有有回弹效果，纯文字列表滑动也比较自然。缺点：官方文档较为简陋（仅仅是一些参数的介绍），基于vue的demo对初学者来说难度稍大，图文列表滑动不太自然，且加载的数据越多越为明显，尤其是在低端安卓机或iPhone5/6上滑动过程中会跳跃式的回闪</td>
	</tr>
	<tr align="center">
		<td>vue-scroller</td>
		<td>https://github.com/wangdahoo/vue-scroller</td>
		<td>基于 Vue 的 滑动插件，支持下拉刷新和上拉加载，支持自定义下拉刷新/上拉加载/无数据 dom 等。优点：具有有回弹效果，使用简单，官方demo齐，上手较为简单。缺点：图文列表，当数据加载到一定程度后会比较卡顿；使用上仅限于vue</td>
	</tr>
	<tr align="center">
		<td>mescroll</td>
		<td>https://github.com/mescroll/mescroll</td>
		<td>精致的下拉刷新和上拉加载 js框架.支持vue,完美运行于移动端和主流PC浏览器，定制化非常高，默认UI很精致。优点：文档齐全，官方例子非常多，非常容易使用，具有回到顶部等贴心功能。缺点：无回弹效果，在iOS上使用下拉刷新会与iOS浏览器默认回弹效果冲突</td>
	</tr>
	<tr align="center">
		<td>vue-infinite-scroll</td>
		<td>https://github.com/ElemeFE/vue-infinite-scroll</td>
		<td>饿了么出品，封装成 vue 指令，代码简洁，但是功能较为简单。优点：可对源代码进行定制化开发。缺点：功能非常简单，仅支持无限加载，且不能定制化dom</td>
	</tr>
	<tr align="center">
		<td>vue-infinite-loading</td>
		<td>https://github.com/PeachScript/vue-infinite-loading</td>
		<td>功能和 vue-infinite-scroll 类似，仅支持无限加载，但是以组件方式进行封装。优点：代码简明易懂，有官方示例，文档齐全，支持横向scroll。缺点：功能简单，不支持下拉刷新，仅限于vue</td>
	</tr>
	<tr align="center">
		<td>VueMugenScroll</td>
		<td>https://github.com/egoist/vue-mugen-scroll</td>
		<td>一款无限加载插件，使用上也比较简单。优点：参数较少，新手比较容易上手。缺点：功能单一，不支持下拉刷新，仅限于vue</td>
	</tr>
	<tr align="center">
		<td>Scrollload</td>
		<td>https://github.com/fa-ge/Scrollload</td>
		<td>一款下拉刷新，上拉加载的移动端插件，无任何依赖，对iOS局部滚动的坑进行了较为全面的分析。优点：示例丰富，对iOS回弹效果和项目回弹效果的冲突提出了较为全面的解决方案。缺点：对vue的支持不是很友好，解决局部滚动问题会依赖于其他库</td>
	</tr>
</table>

## 总结
- scroll view 插件非常多，但实现方式无非是两种，1：自己使用 css3 transform 来实现滚动动画，可以很好的实现回弹效果，但很难掌控，所以会造成滑动不自然，上述插件vux、better-scroll、vue-scroller都是使用的该方案
2：使用原生div效果（overflow-y:auto）来实现滑动，滑动效果会较为自然，但安卓上无回弹效果，且滑动事件易于iOS默认滑动事件冲突，上述插件其余5种使用的该方案。
- 个人观点：项目中 scroll view 为文字列表且滚动加载数据较少时，可使用 better-scroll，毕竟滴滴也在用。项目中 scroll view 为图文列表时，且需要无限加载数据时使用 mescroll，可参照官方示例。
