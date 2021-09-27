<template>
    <div class="drop-down-menu">
        <div class="item item-bottom-line" @click.stop="onMenuItemClick('index')">
            <i></i>
            <span>商城首页</span>
        </div>
        <div class="item item-bottom-line" @click.stop="onMenuItemClick('service')">
            <i></i>
            <span>客服</span>
        </div>
        <div class="item" @click.stop="onMenuItemClick('share')">
            <i></i>
            <span>分享</span>
        </div>
        <i class="triangle"></i>
    </div>
</template>
<script>
export default {
    name: 'drop-down-menu',
    data() {
        return {

        };
    },
    props: {

    },
    methods: {
        onMenuItemClick(tag) {
            // 网易严选需求里商品详情页客服需要登录后才能进入
            if ((tag === 'service' && this.$checkLogin()) || tag !== 'service') {
                this.$emit('menu', tag);
            } else if (tag === 'service' && !this.$checkLogin()) {
                this.$client.login();
                // 存一个数据以确定是点击客服后登录
                this.$db.session.set('serviceFlag', true);
            }
        },
    },

};
</script>
<style lang="scss" scoped>
    .drop-down-menu {
        position: absolute;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-direction: column;
        z-index: 32;
        top: px2rem(78);
        right: px2rem(0);
        width: px2rem(224);
        height: px2rem(294);
        line-height: px2rem(294);
        background-color: #fff;
        border-radius: px2rem(4);
        box-shadow: 0px 0px px2rem(12) px2rem(4) rgba(0, 0, 0, 0.1);

        .triangle {
            position: absolute;
            display: inline-block;
            top: px2rem(-12);
            right: px2rem(22);
            width: px2rem(28);
            height: px2rem(12);
            @include setBackgroundImage("~@/assets/ic_menu_top@2x.png");
        }

        .item {
            display: flex;
            width: px2rem(224);
            justify-content: flex-start;
            align-items: center;
            height: px2rem(98);
            line-height: px2rem(98);

            i {
                display: inline-block;
                width: px2rem(28);
                height: px2rem(28);
                margin-left: px2rem(32);
            }

            span {
                font-size: px2rem(28);
                font-weight: 400;
                color: #1a1a1a;
                line-height: px2rem(40);
                margin-left: px2rem(20);
            }
        }

        .item:nth-child(1) {
            border-radius: px2rem(4) px2rem(4) 0px 0px;

            i {
                @include setBackgroundImage("~@/assets/ic_menu_home@2x.png");
            }
        }

        .item:nth-child(2) {
            i {
                @include setBackgroundImage("~@/assets/ic_menu_service@2x.png");
            }
        }

        .item:nth-child(3) {
            border-radius: 0px 0px px2rem(4) px2rem(4);

            i {
                @include setBackgroundImage("~@/assets/ic_menu_share@2x.png");
            }
        }

        .item-bottom-line {
            @include setBottomLine(1px, 0, 0, #e0e0e0);
        }
    }
</style>
