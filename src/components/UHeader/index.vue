<template>
    <div v-if="type==='common'" class="u-header u-header-common" :class="extraHeaderClass" :position="fix?'fixed':''"
        :style="extraHeaderStyle">
        <div class="zone-wrap">
            <div class="zone zone-left">
                <div class="u-icon-div u-back" v-if="hasBack" @click.stop="onBackClick">
                    <i :class="`u-icon u-icon-back-${theme}`"></i>
                </div>
                <div v-if="leftText" :class="`u-button u-button-${leftTextSize}`" @click.stop="onLeftClick">{{leftText}}
                </div>
                <i v-if="hasIntegralSwitch" :class="`u-icon u-more u-icon-Iswitch-${theme}`"
                    @click.stop="onSwitchClick"></i>
                <div v-if="hasIntegralSearch" class="u-search u-integral-search" @click.stop="onSearchBarClick">
                    <i></i>
                    <input type="text" class="reset-cccccc" disabled="disabled" placeholder="请输入搜索关键字"
                        :readonly="inputable">
                </div>
            </div>
            <div v-if="title" class="u-text">{{title}}</div>
            <div class="zone zone-right">
                <div v-if="rightText" :class="`u-button u-button-${rightTextSize}`" @click.stop="onRightClick">
                    {{rightText}}
                </div>
                <div v-if="cancelButton" :class="`u-button margin_left u-button-${rightTextSize}`" @click.stop="onCancelClick">
                    {{cancelButton}}
                </div>
                <div v-if="hasPublish" :class="`u-button u-button-${rightTextSize}`" @click.stop="onRightClick">
                    发表
                </div>
                <i v-if="hasCollection" :class="`u-icon u-collection u-icon-collection-${collection}`" @click.stop="onRightCollectionClick"></i>
                <i v-if="hasSearch" class="u-icon u-search u-icon-search-white" @click.stop="onRightSearchClick"></i>
                <i v-if="hasStar" :class="`u-icon u-star u-icon-star-${star}`" @click.stop="onStarClick"></i>
                <i v-if="hasShare" :class="`u-icon u-share u-icon-share-${theme}`" @click.stop="onShareClick"></i>
                <i v-if="hasMore" :class="`u-icon u-more u-icon-more-${theme}`" @click.stop="onMoreClick"></i>
                <i v-if="hasSwitch" :class="`u-icon u-more u-icon-switch-${theme}`" @click.stop="onSwitchClick"></i>
                <i v-if="hasCustomerService" :class="`u-icon u-more u-icon-service-${theme}`"
                    @click.stop="onServiceClick"></i>
                <i v-if="hasWrite" :class="`u-icon u-more u-icon-write-${theme}`" @click.stop="onWriteClick"></i>
                <div v-if="hasMenu" class="btn right" :class="rightClazz" @click.stop="onMoreClick">
                    <div v-if="showMenu" class="menu-wrap" @touchstart="onMenuBackgroundClick"
                        @click.stop="onMenuBackgroundClick"></div>
                    <drop-down-menu v-if="showMenu" @menu="onMenuItemClick"></drop-down-menu>
                </div>
            </div>

        </div>
        <slot></slot>
    </div>
    <div v-else-if="type==='search'" class="u-header u-header-column" :class="extraHeaderClass"
        :position="fix?'fixed':''" :style="extraHeaderStyle">
        <div class="u-header-search">
            <div class="u-icon-div u-back" @click.stop="onBackClick">
                <i :class="`u-icon u-icon-back-${theme}`" @click.stop="onBackClick"></i>
            </div>
            <div class="u-search" @click.stop="onSearchBarClick">
                <i></i>
                <input type="text" class="reset-cccccc" v-model="searchText" placeholder="请输入搜索关键字"
                    :readonly="inputable" ref="searchInput">
            </div>
            <div class="u-search-button" @click.stop="onSearchClick">搜索</div>
        </div>
        <slot></slot>
    </div>
    <div v-else-if="type==='shop'" class="u-header u-header-shop" :class="clazz" position="" :style="extraHeaderStyle">
        <div class="btn left" :class="leftClazz" @click.stop="onBackClick"></div>
        <div class="middle">
            <slot></slot>
        </div>
        <div class="btn right" :class="rightClazz" @click.stop="onMoreClick">
            <div v-if="showMenu" class="menu-wrap" @touchstart="onMenuBackgroundClick"
                @click.stop="onMenuBackgroundClick"></div>
            <drop-down-menu v-if="showMenu" @menu="onMenuItemClick"></drop-down-menu>
        </div>
    </div>
</template>
<script>
/**
 * 页面头部部区域公共组件
 * 限制：
 *    一定用在UPage组件中
 * 用法：
 *    <u-header slot="header"></u-header>
 *  只有common和search类型的头部支持插槽，插入的内容会追加到头部下方

 * 属性：
 *    type          - String，类型即底部定义某种类型，后续可共享其他功能使用
 *    fix           - Boolean，是否固定底部即使用fixed定位
 *    clazz         - String，扩展样式名称
 *    title         - String，页面头部标题文字
 *    leftText      - String，左边文字按钮
 *    rightText     - String，右边文字按钮
 *    inputable     - Boolean，搜索类型时设置输入框是否可输入
 *    hasBack       - Boolean，是否显示左边返回，默认true
 *    hasStar       - Boolean，是否显示右边评分按钮，默认false
 *    hasShare      - Boolean，是否显示右边分享按钮，默认false
 *    hasSearch     - Boolean，是否显示右边搜索按钮（非search类型的header），默认false
 *    hasCollection - Boolean，是否显示右边收藏按钮, 默认false
 * 方法：
 *    back          - 点击返回事件
 *    left          - 点击左边文字
 *    right         - 点击右边文字
 *    star          - 点击评分按钮
 *    share         - 点击分享按钮
 *    search-bar    - 搜索类型时点击搜索条事件
 *    right-search  -非search类型header的搜索按钮点击事件
 */

import dropDownMenu from './dropDownMenu';
export default {
    name: 'UHeader',
    components: {
        dropDownMenu,
    },
    props: {
        type: {
            type: String,
            default: 'common',
        },
        fix: {
            type: Boolean,
            default: true,
        },
        clazz: {
            type: String,
            default: '',
        },
        hasBack: {
            type: Boolean,
            default: true,
        },
        hasMore: {
            type: Boolean,
            default: false,
        },
        hasStar: {
            type: Boolean,
            default: false,
        },
        hasShare: {
            type: Boolean,
            default: false,
        },
        hasSwitch: {
            type: Boolean,
            default: false,
        },
        hasWrite: {
            type: Boolean,
            default: false,
        },
        hasMenu: {
            type: Boolean,
            default: false,
        },
        hasSearch: {
            type: Boolean,
            default: false,
        },
        hasCollection: {
            type: Boolean,
            default: false,
        },
        hasIntegralSwitch: {
            type: Boolean,
            default: false,
        },
        hasIntegralSearch: {
            type: Boolean,
            default: false,
        },
        hasCustomerService: {
            type: Boolean,
            default: false,
        },
        hasPublish: {
            type: Boolean,
            default: false,
        },
        title: {
            type: String,
            default: '',
        },
        leftText: {
            type: String,
            default: '',
        },
        rightText: {
            type: String,
            default: '',
        },
        cancelButton: {
            type: String,
            default: '',
        },
        leftTextSize: {
            type: String,
            default: '34',
        },
        rightTextSize: {
            type: String,
            default: '28',
        },
        inputable: {
            type: Boolean,
            default: false,
        },
        theme: {
            type: String,
            default: 'white',
        },
        bg: {
            type: String,
            default: 'image',
            validator(v) {
                return ['', 'color', 'image', 'integral', 'integralMall', 'discover', 'none'].includes(v);
            },
        },
        autoFocusFlag: {
            type: Boolean,
            default: false,
        },
        leftClazz: {
            type: String,
            default: 'left-black',
        },
        rightClazz: {
            type: String,
            default: 'right-black',
        },
        initSearchText: {
            type: String,
            default: '',
        },
        star: {
            type: String,
            default: '',
        },
        collection: {
            type: String,
            default: 'white',
        },
    },
    data() {
        return {
            searchText: null,
            showMenu: false,
            statusHeight: 0,
        };
    },
    computed: {
        extraHeaderClass() {
            let bgs = '';
            if (this.bg === 'none') {
                bgs = '';
            } else if (this.bg !== '') {
                bgs = `u-header-bg-${this.bg}`;
            } else {
                bgs = 'u-header-bg';
            }
            return `u-header ${this.fix ? 'u-header-fix' : ''} ${bgs} ${this.clazz}`;
        },
        extraHeaderStyle() {
            return `padding-top:${this.statusHeight}px`;
        },
    },
    created() {
        this.$bus.on('on-page-status-change', this.onPageStatusChange);
    },
    mounted() {
        this.searchText = this.initSearchText;
        window.console.log('initSearchText', this.initSearchText);
        this.$bus.fire('on-header-mounted');
        this.$nextTick(() => {
            const timeOuter = setTimeout(() => {
                if (this.autoFocusFlag) { this.$refs.searchInput.focus(); }
                clearTimeout(timeOuter);
            }, 600);
        });
    },
    updated() {

    },
    methods: {
        onBackClick() {
            if (this.$refs.searchInput) {
                this.$refs.searchInput.blur();
            }
            setTimeout(() => {
                this.$emit('back');
            }, 150);
        },
        onLeftClick() {
            this.$emit('left');
        },
        onRightClick() {
            this.$emit('right');
        },
        onCancelClick() {
            this.$emit('cancel');
        },
        onStarClick() {
            this.$emit('star');
        },
        onShareClick() {
            this.$emit('share');
        },
        onSwitchClick() {
            this.$emit('switch');
        },
        onServiceClick() {
            this.$emit('service');
        },
        onWriteClick() {
            this.$emit('write');
        },
        onRightCollectionClick() {
            this.$emit('collection');
        },
        onMoreClick() {
            if (this.hasMenu) {
                this.showMenu = true;
            } else {
                this.$emit('more');
            }
        },
        onRightSearchClick() {
            this.$emit('right-search');
        },
        onMenuItemClick(tag) {
            this.$emit('menu', tag);
            this.showMenu = false;
        },
        onMenuBackgroundClick() {
            this.showMenu = false;
        },
        onSearchClick() {
            this.$refs.searchInput.blur();
            const timeOuter = setTimeout(() => {
                this.$emit('right', this.searchText);
                clearTimeout(timeOuter);
            }, 150);
        },
        onSearchBarClick() {
            this.$emit('search-bar');
        },
        onPageStatusChange(height) {
            this.statusHeight = height;
        },
    },

};
</script>
<style lang="scss" scoped>
    @import "./style";
</style>
