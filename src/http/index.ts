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
    * 分类页初始化信息获取
    * */
   public getCatalogInitData = (parmas: any) => instance.get('/catalog/index', parmas);

  /*
   * 根据分类ID获取当前分类信息和子分类
   * parmas:
   *   id: 分类Id
   * */
<<<<<<< HEAD
  public getCatalogMsg = (parmas: any) => instance.get('/catalog/current', parmas);
=======
  public getCategoryNavData = (parmas: any) => instance.get('/goods/category', parmas);

  /*
   * 分类页初始化信息获取
   * */
  public getCatalogInitData = (parmas: any) => instance.get('/catalog/index', parmas);
>>>>>>> f1b005d22b055fc80340c618fa9a63d2ed6ad9de
}
export default new Https();


