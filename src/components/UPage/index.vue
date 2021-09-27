<template>
    <div ref="upage" class="u-page" :class="pageExtraClass" :style="pageStyle" @touchstart="onTouchStart"
        @click.stop="onPageClick">
        <div v-if="hasVConsole" class="toggleVc" @click.stop="toggleVc"></div>
        <slot name="header"></slot>
        <div ref="ucontent" class="u-content" :class="contentExtraClass" :style="contentExtraStyle"
            @scroll.stop="onPageScroll">
            <slot></slot>
        </div>
        <u-image v-show="showToTop" type="top" clazz="to-top" @doclick="$emit('top')"></u-image>
        <slot name="footer"></slot>
    </div>
</template>
<script>
/**
 * 页面组件
 * 用法：
 *    <u-page></u-page>
 * 属性：
 *    pageClass     - String，页面样式扩展
 *    pageStyle     - String，页面内联样式扩展
 *    contentClass  - String，页面中间内容部分样式扩展
 *    contentStyle  - String，页面中间内容部分内联样式扩展
 *    contentRadius - Boolean，页面内容部分顶部是否圆角
 */
import UImage from '@/components/UImage/index';
export default {
    name: 'UPage',
    components: { UImage },
    props: {
        pageClass: {
            type: String,
            default: '',
        },
        pageStyle: {
            type: String,
            default: '',
        },
        contentClass: {
            type: String,
            default: '',
        },
        contentStyle: {
            type: String,
            default: '',
        },
        contentRadius: {
            type: Boolean,
            default: true,
        },
        showToTop: {
            type: Boolean,
            default: false,
        },
    },
    data() {
        return {
            pageHeight: window.innerHeight,
            headerHeight: 0,
            footerHeight: 0,
            currentX: 0,
            currentY: 0,

            lastClickTime: 0,
            count: 0,
            hasVConsole: process.env.NODE_ENV !== 'prod',
        };
    },
    computed: {
        pageExtraClass() {
            return `${this.pageClass}`;
        },
        contentExtraClass() {
            return `${this.contentClass} ${this.contentRadius ? 'u-content-box-radius' : ''}`;
        },
        contentExtraStyle() {
            return `
                position:absolute;
                margin-top:${this.headerHeight}px;
                margin-bottom:${this.footerHeight}px;
                height:${this.pageHeight - this.headerHeight - this.footerHeight}px;
                ${this.contentStyle}
            `;
        },
    },
    created() {
        this.$bus.on('on-header-mounted', this.setPageConstruct);
        this.$bus.on('on-footer-mounted', this.setPageConstruct);
    },
    methods: {
        setPageConstruct() {
            this.$nextTick(() => {
                const head = this.$refs.upage.querySelector('.u-header');
                const foot = this.$refs.upage.querySelector('.u-footer');
                this.setPageStatusHeight(head);
                this.setPageConentHeight(head, foot);
            });
        },
        // 设置状态栏高度
        setPageStatusHeight(head) {
            if (this.$store.getters.getClientInfo('environmentType') !== 'app') {
                return;
            }
            const ratio = this.$store.getters.getClientInfo('statusBarScreenRatio');
            let statusbarHeight = 30;
            if (ratio) {
                statusbarHeight = this.pageHeight * ratio;
            }
            statusbarHeight = Math.round(statusbarHeight);
            this.$db.session.set('statusBarHeight', statusbarHeight);

            this.$bus.fire('on-page-status-change', statusbarHeight);
            /* eslint no-param-reassign:0 */
            // ios 10 系统不能执行下面代码，否则兼容性问题
            if (navigator.userAgent.indexOf('iPhone OS 10') === -1) {
                head.style = `padding-top:${statusbarHeight}px;`;
            }
        },
        // 设置页面除固定头部、底部之外中间部分的高度
        setPageConentHeight(head, foot) {
            try {
                if (head && head.getAttribute('position') === 'fixed') {
                    this.headerHeight = head.offsetHeight || 0;
                }
                if (foot && foot.getAttribute('position') === 'fixed') {
                    this.footerHeight = foot.offsetHeight || 0;
                }
            } catch (error) {
                window.console.error(error);
            }
        },
        onTouchStart(e) {
            const touches = e.touches || [];
            const touch = touches[0] || {};
            this.currentX = touch.pageX || 0;
            this.currentY = touch.pageY || 0;
        },
        onPageClick() {
            this.$emit('doclick');
        },
        onPageScroll(e) {
            e.preventDefault();
            e.stopPropagation();
            this.$emit('scroll', e, {
                x: this.currentX,
                y: this.currentY,
            });
        },
        // v-console
        hasClass(obj, cls) {
            return obj.className.match(new RegExp(`(\\s|^)${cls}(\\s|$)`));
        },
        addClass(obj, cls) {
            if (!this.hasClass(obj, cls)) obj.className += ` ${cls}`;
        },
        toggleClass(obj, cls) {
            if (this.hasClass(obj, cls)) {
                this.removeClass(obj, cls);
            } else {
                this.addClass(obj, cls);
            }
        },
        removeClass(obj, cls) {
            if (this.hasClass(obj, cls)) {
                const reg = new RegExp(`(\\s|^)${cls}(\\s|$)`);
                obj.className = obj.className.replace(reg, ' ');
            }
        },
        toggleVc() {
            const nowTime = new Date().getTime();
            if (nowTime - this.lastClickTime < 3000) {
                this.count++;
            } else {
                this.count = 0;
            }
            this.lastClickTime = nowTime;
            if (this.count >= 5) {
                const vconDom = document.getElementById('__vconsole');
                if (vconDom) {
                    this.toggleClass(vconDom, 'show-v-console');
                    this.count = 0;
                } else {
                    this.$ui.toast('当前还没没有生成vconsole');
                }
            }
        },
    },
};
</script>
<style lang="less" scoped>
    @import "./style.less";
</style>
