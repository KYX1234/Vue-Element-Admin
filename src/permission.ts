import router from '@/router';
import { ElMessage } from 'element-plus';
import {useUserStore,useRouteStore} from '@/store';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import { clearPending } from "@/utils/request"

NProgress.configure({ showSpinner: false }); // 进度环显示/隐藏

// 白名单路由
const whiteList = ['/login'];

router.beforeEach(async (to, from, next) => {
  clearPending()
  NProgress.start();
  const hasToken = useUserStore().token;
  if (hasToken) {
    // 登录成功，跳转到首页
    if (to.path === '/login') {
      next({ path: '/' });
      NProgress.done();
    } else {
      const hasRoutes = useRouteStore().addRoutes.length > 0;
      if (hasRoutes) {
          next();
      } else {
        try {
          await useRouteStore().initRoutes();
          next({ ...to, replace: true });
        } catch (error) {
          // 移除 token 并跳转登录页
          await useUserStore().resetToken();
          ElMessage.error((error as any) || 'Has Error');
          next(`/login?redirect=${to.path}`);
          NProgress.done();
        }
      }
    }
  } else {
    // 未登录可以访问白名单页面(登录页面)
    if (whiteList.indexOf(to.path) !== -1) {
      next();
    } else {
      next(`/login?redirect=${to.path}`);
      NProgress.done();
    }
  }
});

router.afterEach(() => {
  NProgress.done();
});
