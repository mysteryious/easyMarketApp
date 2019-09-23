import instance from './http';
class Https {
  /*
 * 登录
 * parmas:
 *   mobile: 电话号码
 *   password: 密码
 * */
  public postLogin = (parmas: any) => instance.post('/auth/loginByMobile', parmas);
  /*
  *  获取专题数据
  *  parmas:
  *   page: 当前页数
  *   size: 每页数据量
  * */
  public getTopicData = (parmas: any) => instance.get('/topic/list', parmas);
}
export default new Https();
