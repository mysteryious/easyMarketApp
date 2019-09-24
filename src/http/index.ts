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

  // 获取首页数据
  public getHomeData = () => instance.get('/');
  /*
   * 根据专题Id获取专题详情
   * parmas:
   *   id: 专题id
   * */
  public getTopicDetail = (parmas: any) => instance.get('/topic/detail', parmas);
  /*
   * 根据专题ID或者商品ID获取评论获取相关专题
   * parmas:
   *   valueId: 专题id、商品id
   *  typeId：1:专题id、0:商品id
   *  page:
   *  size:
   * */
  public getCommentList = (parmas: any) => instance.get('/comment/list', parmas);
  /*
    * 根据专题Id获取相关专题
    * parmas:
    *   id: 专题id
    * */
  public getTopicDetailRelated = (parmas: any) => instance.get('/topic/related', parmas);
  /*
   * 获取分类ID分类Nav数据
   * params:
   *   id: 当前分类Id
   * */
  public getCategoryNavData = (parmas: any) => instance.get('/goods/category', parmas);
}
export default new Https();

