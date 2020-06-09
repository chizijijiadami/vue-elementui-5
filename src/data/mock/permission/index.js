const Mock = require("mockjs");
Mock.mock("/permission", "get", () => {
    return {
      status: 0,
      data: {
        name: '测试',
        code: 'test',
        permission: {
          page: {
            code: 'pagePermission',
            name: "页面权限",
            children: [
              {
                code: 'Index',
                name: "首页",
                children: [
                  {
                    code: 'IndexIndex',
                    name: '首页',
                    children: [
                      {
                        code: 'IndexIndex_save',
                        name: '保存'
                      },
                      {
                        code: 'IndexIndex_reset',
                        name: '保存'
                      }
                    ]
                  }
                ]
              },
              {
                code:'List',
                name:'列表',
                children:[
                  {
                    code:'ListDetai',
                    name:'详情'
                  },
                  {
                    code:'ListFeature',
                    name:'特性'  
                  }
                ]
              }
            ]
          },
          api: {
            code: 'apiPermission',
            name: "接口权限",
            children: []
          }
        }
      },
      message: "成功"
    };
  });