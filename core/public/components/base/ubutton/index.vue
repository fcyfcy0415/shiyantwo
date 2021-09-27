<template>
    <div class="b-button" @click.stop="onButtonClick">
        <div class="u-button-content">

        </div>
    </div>
</template>
<script>
    /**
     * description for page or component
     * @param {Type} key description for the key
     * @example
     */
    export default {
        name:'UButton',
        components:{},
        props:{
            type:{
                type: String,
                default: 'solid',
            },
            disabled:{
                type: Boolean,
                default: false,
            },
            customStyle:{
                type: Object
            }
        },
        data(){
            return {};
        },
        watch:{},
        computed:{},
        created(){},
        mounted(){},
        destoryed(){},
        methods:{
            onButtonClick(e) {
                this.$emit('clickHandler', e);
            }
        }
    }
</script>
<style lang="less" scoped>
    @import './style.less';
</style>