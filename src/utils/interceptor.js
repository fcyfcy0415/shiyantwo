// 全局路由配置
import router from '../router';
router.beforeEach((to, from, next) => {
    // 在这里处理 路由 跳转
    window.console.log('to---->',to);
    window.console.log('from----->',from);
    window.console.log('next----->',next);
    next();
});
export default router;