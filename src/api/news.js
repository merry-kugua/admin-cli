import service from "@/utils/request"
/**
 * 信息分类添加一级
 */
export function AddFirstCategory(data){
    return service.request({
        method:'post',
        url:'/news/addFirstCategory/',
        data
    })
}
/**
 * 获取分类
 */
 export function GetCategory(data){
    return service.request({
        method: "post",
        url: "/news/getCategory/",
        data
    })
}

 /**
  * 新增
  */

  /**
   * 编辑
   */

   /**
    * 删除
    */