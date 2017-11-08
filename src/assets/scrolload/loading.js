import { setStyles, addStyleNode } from './utils'

// let loadRequire = require('./loading.css');
// console.log('loadRequire:',loadRequire)
// addStyleNode(loadRequire[0][1])

let styleText = `@keyframes sl-ld-ball-anim1 {
    0% {
        z-index: 1;
        transform: translate3d(-18px, 0, 0);
    }

    50% {
        transform: translate3d(18px, 0, 0);
    }

    100% {
        z-index: 2;
        transform: translate3d(-18px, 0, 0);
    }
}

@keyframes sl-ld-ball-anim2 {
    0% {
        z-index: 2;
        transform: translate3d(18px, 0, 0);
    }

    50% {
        transform: translate3d(-18px, 0, 0);
    }

    100% {
        z-index: 1;
        transform: translate3d(18px, 0, 0);
    }
}

.sl-ld {
    position: relative;
    width: 0;
    margin: 0 auto;
    height: 50px;
}

.sl-ld-ball {
    width: 16px;
    height: 16px;
    border-radius: 50%;
    position: absolute;
    top: 17px;
    left: -8px;
}

.sl-ld-ball:nth-of-type(1) {
    transform: translate3d(-18px, 0, 0);
    background: #0462dc;
    z-index: 1;
}

.sl-ld-ball:nth-of-type(2) {
    transform: translate3d(18px, 0, 0);
    background: #fc0284;
    z-index: 2;
}

.sl-ld-ball-anim:nth-of-type(1) {
    animation: sl-ld-ball-anim1 1.2s linear infinite;
}

.sl-ld-ball-anim:nth-of-type(2) {
    animation: sl-ld-ball-anim2 1.2s linear infinite;
}`

addStyleNode(styleText);

function generateHtml(str) {
    return `<div style="text-align: center;font-size: 12px;line-height: 50px;">${str}</div>`
}

const defaultMovingHtml = `
    <div style="height: 50px;">
        <div class="sl-ld">
            <div class="sl-ld-ball"></div>
            <div class="sl-ld-ball"></div>
        </div>
   </div>
`
const defaultLoadingHtml = `
    <div style="height: 50px;">
        <div class="sl-ld">
            <div class="sl-ld-ball sl-ld-ball-anim"></div>
            <div class="sl-ld-ball sl-ld-ball-anim"></div>
        </div>
   </div>
`
const defaultSkin = {
    loadingHtml: defaultLoadingHtml,
    noMoreDataHtml: generateHtml('没有更多数据了'),
    exceptionHtml: generateHtml('出现异常'),
    notEnoughRefreshPortHtml: defaultMovingHtml,
    overRefreshPortHtml: defaultMovingHtml,
    refreshingHtml: defaultLoadingHtml,
    notEnoughRefreshPortHandler: function(sl) {
        effect(sl.ball1, sl.ball2, sl.distance / sl.topContentDomHeight)
    },
    initedHandler(sl) {
        const balls = sl.container.querySelectorAll('.sl-ld-ball')
        sl.ball1 = balls[0]
        sl.ball2 = balls[1]
    },
}

function effect(ball1, ball2, prop) {
    setStyles([ball1], { transform: `translate3d(-${18 * prop}px, 0, 0)` })
    setStyles([ball2], { transform: `translate3d(${18 * prop}px, 0, 0)` })
}

export default defaultSkin
