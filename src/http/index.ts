import instance from './http';
class Https {
  /*
 * 登录
 * parmas:
 *   mobile: 电话号码
 *   password: 密码
 * */
  public postLogin = (parmas: any) => instance.post('/auth/loginByMobile', parmas);

   // 获取首页数据
  public getHomeData = () => instance.get('/');
}
export default new Https();

