// Learn more on how to config.
// - https://github.com/dora-js/dora-plugin-proxy#规则定义

module.exports = {
  '/api/todos': function(req, res) {
    setTimeout(function() {
      res.json({
        success: true,
        data: [
          {
            id: 1,
            text: 'Learn antd',
            isComplete: true,
          },
          {
            id: 2,
            text: 'Learn ant-tool',
          },
          {
            id: 3,
            text: 'Learn dora',
          },
        ],
      });
    }, 500);
  },
  '/api/login': function(req, res) {
    setTimeout(function() {
      res.json({
        success: true,
        data: {
          user: 'admin'
        },
      });
    }, 500);
  },
  '/topmenu': function(req, res) {
    res.json({"code":"0","message":"","content":[{"key":"add_task","name":"发起任务","icon":"edit","leftMenuList":[]},{"key":"my_case","name":"我的发布","icon":"book","leftMenuList":[{"key":"all","name":"全部任务","icon":"home","dot":false,"num":0},{"key":"untreated","name":"未处理数","icon":"clock-circle-o","dot":false,"num":0},{"key":"ongoing","name":"进行中数","icon":"info-circle-o","dot":false,"num":0},{"key":"completed","name":"等待确认","icon":"check-circle-o","dot":false,"num":0},{"key":"confirm_wancheng","name":"确认完成","icon":"check-circle","dot":false,"num":0},{"key":"closed","name":"已关闭数","icon":"poweroff","dot":false,"num":0},{"key":"gratuity","name":"获得打赏","icon":"pay-circle-o","dot":false,"num":0},{"key":"thumb_up","name":"总点赞数","icon":"like","dot":false,"num":0},{"key":"dislike","name":"总差评数","icon":"dislike","dot":false,"num":0}]},{"key":"my_task","name":"我的任务","icon":"user","leftMenuList":[{"key":"all","name":"全部任务","icon":"home","dot":false,"num":0},{"key":"ongoing","name":"进行中数","icon":"info-circle-o","dot":false,"num":0},{"key":"completed","name":"等待确认","icon":"check-circle-o","dot":false,"num":0},{"key":"confirm_wancheng","name":"确认完成","icon":"check-circle","dot":false,"num":0},{"key":"closed","name":"已关闭数","icon":"poweroff","dot":false,"num":0},{"key":"gratuity","name":"获得打赏","icon":"pay-circle-o","dot":false,"num":0},{"key":"thumb_up","name":"总点赞数","icon":"like","dot":false,"num":0},{"key":"dislike","name":"总差评数","icon":"dislike","dot":false,"num":0}]},{"key":"my_focus","name":"我的关注","icon":"eye-o","leftMenuList":[{"key":"all","name":"全部任务","icon":"home","dot":false,"num":0},{"key":"untreated","name":"未处理数","icon":"clock-circle-o","dot":false,"num":0},{"key":"ongoing","name":"进行中数","icon":"info-circle-o","dot":false,"num":0},{"key":"completed","name":"等待确认","icon":"check-circle-o","dot":false,"num":0},{"key":"confirm_wancheng","name":"确认完成","icon":"check-circle","dot":false,"num":0},{"key":"closed","name":"已关闭数","icon":"poweroff","dot":false,"num":0},{"key":"gratuity","name":"获得打赏","icon":"pay-circle-o","dot":false,"num":0},{"key":"thumb_up","name":"总点赞数","icon":"like","dot":false,"num":0},{"key":"dislike","name":"总差评数","icon":"dislike","dot":false,"num":0}]},{"key":"case_manage","name":"case管理","icon":"setting","leftMenuList":[{"key":"all","name":"全部任务","icon":"home","dot":false,"num":0},{"key":"untreated","name":"未处理数","icon":"clock-circle-o","dot":false,"num":0},{"key":"ongoing","name":"进行中数","icon":"info-circle-o","dot":false,"num":0},{"key":"completed","name":"等待确认","icon":"check-circle-o","dot":false,"num":0},{"key":"confirm_wancheng","name":"确认完成","icon":"check-circle","dot":false,"num":0},{"key":"closed","name":"已关闭数","icon":"poweroff","dot":false,"num":0},{"key":"gratuity","name":"获得打赏","icon":"pay-circle-o","dot":false,"num":0},{"key":"thumb_up","name":"总点赞数","icon":"like","dot":false,"num":0},{"key":"dislike","name":"总差评数","icon":"dislike","dot":false,"num":0}]},{"key":"case_rank","name":"统计排名","icon":"line-chart","leftMenuList":[]},{"key":"case_group","name":"分组管理","icon":"tags-o","leftMenuList":[{"key":"all","name":"全部任务","icon":"home","dot":false,"num":0},{"key":"untreated","name":"未处理数","icon":"clock-circle-o","dot":false,"num":0},{"key":"ongoing","name":"进行中数","icon":"info-circle-o","dot":false,"num":0},{"key":"completed","name":"等待确认","icon":"check-circle-o","dot":false,"num":0},{"key":"confirm_wancheng","name":"确认完成","icon":"check-circle","dot":false,"num":0},{"key":"closed","name":"已关闭数","icon":"poweroff","dot":false,"num":0},{"key":"gratuity","name":"获得打赏","icon":"pay-circle-o","dot":false,"num":0},{"key":"thumb_up","name":"总点赞数","icon":"like","dot":false,"num":0},{"key":"dislike","name":"总差评数","icon":"dislike","dot":false,"num":0}]},{"key":"open-http://tsbxmain.colourlife.net/ts/caseComplaint.aspx?u=mytest","name":"投诉报修","icon":"retweet","leftMenuList":[]}]});
  },

'/case/my': function(req, res) {
    res.json({
    "code": "0",
    "message": "",
    "content": [{
      "caseNo": 939,
      "id": "b1d899c8-a897-428f-9e55-bf767921f841",
      "caseTitle": "测试",
      "caseDesc": "测试",
      "caseTypeId": "data",
      "caseTypeName": "数据",
      "relationService": "",
      "status": "1",
      "createTime": "2016-07-04 19:30:37",
      "createUserId": "858420ba-28fb-44a8-8997-ed0b9e5475c4",
      "createUser": "123",
      "lastModifyTime": "2016-07-04 19:30:50",
      "lastModifyUserId": "858420ba-28fb-44a8-8997-ed0b9e5475c4",
      "lastModifyUser": "系统",
      "finishTime": "",
      "finishPeopleId": "",
      "finishPeople": "",
      "closeTime": "",
      "closeUserId": "",
      "closeUser": "",
      "processingTime": "2016-07-04 19:30:37",
      "processingUserId": "858420ba-28fb-44a8-8997-ed0b9e5475c4",
      "processingUser": "123",
      "confirmFinishTime": "",
      "confirmFinishUserId": "",
      "confirmFinishUser": "",
      "focusList": "测试收费系统",
      "timePoint": 48,
      "amount": 0,
      "community": "",
      "building": "",
      "unit": "",
      "room": "",
      "ownerName": "",
      "ownerPhone": "",
      "chargeWay": "",
      "recoveredAmount": 0,
      "arrearsAmount": 0,
      "arrearsMonth": 0,
      "executorList": [{
        "id": "be6600f7-6c47-42a5-868a-2176df4fb1ae",
        "userId": "858420ba-28fb-44a8-8997-ed0b9e5475c4",
        "userName": "测试收费系统",
        "caseId": "b1d899c8-a897-428f-9e55-bf767921f841",
        "createTime": "2016-07-04 19:30:37",
        "createUserId": "",
        "createUser": ""
      }],
      "isTimeout": ""
    }, {
        "caseNo": 938,
        "id": "0c1d87c8-d478-4112-bac9-7918c4e94332",
        "caseTitle": "测试超时",
        "caseDesc": "测试超时",
        "caseTypeId": "bug",
        "caseTypeName": "Bug信息",
        "relationService": "",
        "status": "1",
        "createTime": "2016-07-04 19:03:15",
        "createUserId": "858420ba-28fb-44a8-8997-ed0b9e5475c4",
        "createUser": "测试收费系统",
        "lastModifyTime": "2016-07-04 19:03:15",
        "lastModifyUserId": "858420ba-28fb-44a8-8997-ed0b9e5475c4",
        "lastModifyUser": "系统",
        "finishTime": "",
        "finishPeopleId": "",
        "finishPeople": "",
        "closeTime": "",
        "closeUserId": "",
        "closeUser": "",
        "processingTime": "2016-07-04 19:03:15",
        "processingUserId": "858420ba-28fb-44a8-8997-ed0b9e5475c4",
        "processingUser": "测试收费系统",
        "confirmFinishTime": "",
        "confirmFinishUserId": "",
        "confirmFinishUser": "",
        "focusList": "熊顺根",
        "timePoint": 24,
        "amount": 0,
        "community": "",
        "building": "",
        "unit": "",
        "room": "",
        "ownerName": "",
        "ownerPhone": "",
        "chargeWay": "",
        "recoveredAmount": 0,
        "arrearsAmount": 0,
        "arrearsMonth": 0,
        "executorList": [{
          "id": "d8c9484f-378c-4702-9fdf-ce8bb923bed7",
          "userId": "858420ba-28fb-44a8-8997-ed0b9e5475c4",
          "userName": "测试收费系统",
          "caseId": "0c1d87c8-d478-4112-bac9-7918c4e94332",
          "createTime": "2016-07-04 19:03:15",
          "createUserId": "",
          "createUser": ""
        }],
        "isTimeout": ""
      }, {
        "caseNo": 937,
        "id": "240ebe1a-0110-4f17-8284-3c2c22e4c885",
        "caseTitle": "test",
        "caseDesc": "test",
        "caseTypeId": "bug",
        "caseTypeName": "Bug信息",
        "relationService": "",
        "status": "1",
        "createTime": "2016-06-30 18:20:38",
        "createUserId": "858420ba-28fb-44a8-8997-ed0b9e5475c4",
        "createUser": "测试收费系统",
        "lastModifyTime": "2016-07-04 15:57:29",
        "lastModifyUserId": "858420ba-28fb-44a8-8997-ed0b9e5475c4",
        "lastModifyUser": "系统",
        "finishTime": "",
        "finishPeopleId": "",
        "finishPeople": "",
        "closeTime": "",
        "closeUserId": "",
        "closeUser": "",
        "processingTime": "2016-06-30 18:20:38",
        "processingUserId": "858420ba-28fb-44a8-8997-ed0b9e5475c4",
        "processingUser": "测试收费系统",
        "confirmFinishTime": "",
        "confirmFinishUserId": "",
        "confirmFinishUser": "",
        "focusList": "测试收费系统,孙平",
        "timePoint": 24,
        "amount": 1,
        "community": "",
        "building": "",
        "unit": "",
        "room": "",
        "ownerName": "",
        "ownerPhone": "",
        "chargeWay": "",
        "recoveredAmount": 0,
        "arrearsAmount": 0,
        "arrearsMonth": 0,
        "executorList": [{
          "id": "0c86395e-a4d0-49cf-a6e3-dea861c86d32",
          "userId": "71027c0d-fba2-4518-a707-9366219800be",
          "userName": "王辉",
          "caseId": "240ebe1a-0110-4f17-8284-3c2c22e4c885",
          "createTime": "2016-06-30 18:20:38",
          "createUserId": "",
          "createUser": ""
        }],
        "isTimeout": ""
      }, {
        "caseNo": 936,
        "id": "82e35dcb-da9a-4829-9de9-04179863f5e2",
        "caseTitle": "1",
        "caseDesc": "2",
        "caseTypeId": "data",
        "caseTypeName": "数据",
        "relationService": "",
        "status": "1",
        "createTime": "2016-06-30 15:32:15",
        "createUserId": "858420ba-28fb-44a8-8997-ed0b9e5475c4",
        "createUser": "测试收费系统",
        "lastModifyTime": "2016-06-30 15:35:13",
        "lastModifyUserId": "858420ba-28fb-44a8-8997-ed0b9e5475c4",
        "lastModifyUser": "系统",
        "finishTime": "2016-06-30 15:34:49",
        "finishPeopleId": "71027c0d-fba2-4518-a707-9366219800be",
        "finishPeople": "王辉",
        "closeTime": "",
        "closeUserId": "",
        "closeUser": "",
        "processingTime": "2016-06-30 15:32:15",
        "processingUserId": "858420ba-28fb-44a8-8997-ed0b9e5475c4",
        "processingUser": "测试收费系统",
        "confirmFinishTime": "",
        "confirmFinishUserId": "",
        "confirmFinishUser": "",
        "focusList": "王辉",
        "timePoint": 48,
        "amount": 9,
        "community": "3",
        "building": "4",
        "unit": "5",
        "room": "6",
        "ownerName": "7",
        "ownerPhone": "8",
        "chargeWay": "现金",
        "recoveredAmount": 11,
        "arrearsAmount": 12,
        "arrearsMonth": 10,
        "executorList": [{
          "id": "54793206-d4a5-4bbc-aca2-c2b9793dd331",
          "userId": "71027c0d-fba2-4518-a707-9366219800be",
          "userName": "王辉",
          "caseId": "82e35dcb-da9a-4829-9de9-04179863f5e2",
          "createTime": "2016-06-30 15:32:15",
          "createUserId": "",
          "createUser": ""
        }],
        "isTimeout": ""
      }, {
        "caseNo": 924,
        "id": "f23b405c-44de-49e0-a1b9-81c35b4d0cfc",
        "caseTitle": "test",
        "caseDesc": "ted",
        "caseTypeId": "data",
        "caseTypeName": "数据",
        "relationService": "",
        "status": "1",
        "createTime": "2016-06-29 19:17:21",
        "createUserId": "858420ba-28fb-44a8-8997-ed0b9e5475c4",
        "createUser": "测试收费系统",
        "lastModifyTime": "2016-07-04 16:10:24",
        "lastModifyUserId": "858420ba-28fb-44a8-8997-ed0b9e5475c4",
        "lastModifyUser": "系统",
        "finishTime": "",
        "finishPeopleId": "",
        "finishPeople": "",
        "closeTime": "",
        "closeUserId": "",
        "closeUser": "",
        "processingTime": "2016-06-29 19:17:21",
        "processingUserId": "858420ba-28fb-44a8-8997-ed0b9e5475c4",
        "processingUser": "测试收费系统",
        "confirmFinishTime": "",
        "confirmFinishUserId": "",
        "confirmFinishUser": "",
        "focusList": "余志彬",
        "timePoint": 48,
        "amount": 0,
        "community": "",
        "building": "",
        "unit": "",
        "room": "",
        "ownerName": "",
        "ownerPhone": "",
        "chargeWay": "",
        "recoveredAmount": 0,
        "arrearsAmount": 0,
        "arrearsMonth": 0,
        "executorList": [{
          "id": "ef9f9d53-da14-4762-8000-19e5778868a8",
          "userId": "71027c0d-fba2-4518-a707-9366219800be",
          "userName": "王辉",
          "caseId": "f23b405c-44de-49e0-a1b9-81c35b4d0cfc",
          "createTime": "2016-06-29 19:17:21",
          "createUserId": "",
          "createUser": ""
        }],
        "isTimeout": ""
      }, {
        "caseNo": 923,
        "id": "9ca14f3f-3cd7-404f-8480-e290af5a9edc",
        "caseTitle": "test",
        "caseDesc": "test",
        "caseTypeId": "dispatch",
        "caseTypeName": "派单",
        "relationService": "",
        "status": "1",
        "createTime": "2016-06-29 19:14:14",
        "createUserId": "858420ba-28fb-44a8-8997-ed0b9e5475c4",
        "createUser": "测试收费系统",
        "lastModifyTime": "2016-06-29 19:14:14",
        "lastModifyUserId": "858420ba-28fb-44a8-8997-ed0b9e5475c4",
        "lastModifyUser": "系统",
        "finishTime": "",
        "finishPeopleId": "",
        "finishPeople": "",
        "closeTime": "",
        "closeUserId": "",
        "closeUser": "",
        "processingTime": "2016-06-29 19:14:14",
        "processingUserId": "858420ba-28fb-44a8-8997-ed0b9e5475c4",
        "processingUser": "测试收费系统",
        "confirmFinishTime": "",
        "confirmFinishUserId": "",
        "confirmFinishUser": "",
        "focusList": "熊长青",
        "timePoint": 120,
        "amount": 0,
        "community": "11",
        "building": "11",
        "unit": "11",
        "room": "11",
        "ownerName": "11",
        "ownerPhone": "11",
        "chargeWay": "",
        "recoveredAmount": 0,
        "arrearsAmount": 0,
        "arrearsMonth": 11,
        "executorList": [{
          "id": "e6bae175-2d8f-41f3-9c02-9d96bba24e8a",
          "userId": "71027c0d-fba2-4518-a707-9366219800be",
          "userName": "王辉",
          "caseId": "9ca14f3f-3cd7-404f-8480-e290af5a9edc",
          "createTime": "2016-06-29 19:14:14",
          "createUserId": "",
          "createUser": ""
        }],
        "isTimeout": ""
      }, {
        "caseNo": 917,
        "id": "3cbf8bdd-72bf-445e-b00f-38549e32b7f8",
        "caseTitle": "jdb",
        "caseDesc": "hdb",
        "caseTypeId": "bug",
        "caseTypeName": "Bug信息",
        "relationService": "",
        "status": "1",
        "createTime": "2016-06-29 14:25:22",
        "createUserId": "858420ba-28fb-44a8-8997-ed0b9e5475c4",
        "createUser": "123",
        "lastModifyTime": "2016-06-29 14:25:22",
        "lastModifyUserId": "858420ba-28fb-44a8-8997-ed0b9e5475c4",
        "lastModifyUser": "系统",
        "finishTime": "",
        "finishPeopleId": "",
        "finishPeople": "",
        "closeTime": "",
        "closeUserId": "",
        "closeUser": "",
        "processingTime": "2016-06-29 14:25:22",
        "processingUserId": "858420ba-28fb-44a8-8997-ed0b9e5475c4",
        "processingUser": "123",
        "confirmFinishTime": "",
        "confirmFinishUserId": "",
        "confirmFinishUser": "",
        "focusList": "熊顺根,熊长青",
        "timePoint": 24,
        "amount": 0,
        "community": "",
        "building": "",
        "unit": "",
        "room": "",
        "ownerName": "",
        "ownerPhone": "",
        "chargeWay": "",
        "recoveredAmount": 0,
        "arrearsAmount": 0,
        "arrearsMonth": 0,
        "executorList": [{
          "id": "215fd632-9dfd-48e5-b332-be883bb2f735",
          "userId": "858420ba-28fb-44a8-8997-ed0b9e5475c4",
          "userName": "测试收费系统",
          "caseId": "3cbf8bdd-72bf-445e-b00f-38549e32b7f8",
          "createTime": "2016-06-29 14:25:22",
          "createUserId": "",
          "createUser": ""
        }],
        "isTimeout": ""
      }, {
        "caseNo": 912,
        "id": "bbfa31b9-e776-4d42-b68e-ccf27c23a3d1",
        "caseTitle": "测测",
        "caseDesc": "测测",
        "caseTypeId": "dispatch",
        "caseTypeName": "派单",
        "relationService": "",
        "status": "1",
        "createTime": "2016-06-29 10:02:23",
        "createUserId": "858420ba-28fb-44a8-8997-ed0b9e5475c4",
        "createUser": "123",
        "lastModifyTime": "2016-07-01 15:01:11",
        "lastModifyUserId": "858420ba-28fb-44a8-8997-ed0b9e5475c4",
        "lastModifyUser": "测试收费系统",
        "finishTime": "",
        "finishPeopleId": "",
        "finishPeople": "",
        "closeTime": "",
        "closeUserId": "",
        "closeUser": "",
        "processingTime": "2016-06-29 10:02:23",
        "processingUserId": "858420ba-28fb-44a8-8997-ed0b9e5475c4",
        "processingUser": "123",
        "confirmFinishTime": "",
        "confirmFinishUserId": "",
        "confirmFinishUser": "",
        "focusList": "测试收费系统,熊文荣",
        "timePoint": 72,
        "amount": 0,
        "community": "",
        "building": "",
        "unit": "",
        "room": "",
        "ownerName": "",
        "ownerPhone": "",
        "chargeWay": "",
        "recoveredAmount": 0,
        "arrearsAmount": 0,
        "arrearsMonth": 0,
        "executorList": [{
          "id": "a49a85c3-88a3-41bb-8d67-e1c4a7ce114d",
          "userId": "858420ba-28fb-44a8-8997-ed0b9e5475c4",
          "userName": "测试收费系统",
          "caseId": "bbfa31b9-e776-4d42-b68e-ccf27c23a3d1",
          "createTime": "2016-06-29 10:02:23",
          "createUserId": "",
          "createUser": ""
        }],
        "isTimeout": ""
      }, {
        "caseNo": 911,
        "id": "fe5883d6-bc24-440c-92fe-b7254a2d512d",
        "caseTitle": "ceshi",
        "caseDesc": "212",
        "caseTypeId": "indirect",
        "caseTypeName": "间接",
        "relationService": "",
        "status": "1",
        "createTime": "2016-06-29 09:45:37",
        "createUserId": "858420ba-28fb-44a8-8997-ed0b9e5475c4",
        "createUser": "测试收费系统",
        "lastModifyTime": "2016-06-29 09:45:37",
        "lastModifyUserId": "858420ba-28fb-44a8-8997-ed0b9e5475c4",
        "lastModifyUser": "系统",
        "finishTime": "",
        "finishPeopleId": "",
        "finishPeople": "",
        "closeTime": "",
        "closeUserId": "",
        "closeUser": "",
        "processingTime": "2016-06-29 09:45:37",
        "processingUserId": "858420ba-28fb-44a8-8997-ed0b9e5475c4",
        "processingUser": "测试收费系统",
        "confirmFinishTime": "",
        "confirmFinishUserId": "",
        "confirmFinishUser": "",
        "focusList": "测试收费系统",
        "timePoint": 24,
        "amount": 111.11,
        "community": "",
        "building": "",
        "unit": "",
        "room": "",
        "ownerName": "",
        "ownerPhone": "",
        "chargeWay": "",
        "recoveredAmount": 0,
        "arrearsAmount": 0,
        "arrearsMonth": 0,
        "executorList": [{
          "id": "6ea7b8e1-330c-4409-8ec1-129f51ec977f",
          "userId": "858420ba-28fb-44a8-8997-ed0b9e5475c4",
          "userName": "测试收费系统",
          "caseId": "fe5883d6-bc24-440c-92fe-b7254a2d512d",
          "createTime": "2016-06-29 09:45:37",
          "createUserId": "",
          "createUser": ""
        }],
        "isTimeout": ""
      }, {
        "caseNo": 910,
        "id": "5a85bdd9-5ef0-4a7c-acac-2cdea7787a1f",
        "caseTitle": "看看",
        "caseDesc": "看看",
        "caseTypeId": "indirect",
        "caseTypeName": "间接",
        "relationService": "",
        "status": "1",
        "createTime": "2016-06-29 09:40:05",
        "createUserId": "858420ba-28fb-44a8-8997-ed0b9e5475c4",
        "createUser": "123",
        "lastModifyTime": "2016-06-29 09:40:05",
        "lastModifyUserId": "858420ba-28fb-44a8-8997-ed0b9e5475c4",
        "lastModifyUser": "系统",
        "finishTime": "",
        "finishPeopleId": "",
        "finishPeople": "",
        "closeTime": "",
        "closeUserId": "",
        "closeUser": "",
        "processingTime": "2016-06-29 09:40:05",
        "processingUserId": "858420ba-28fb-44a8-8997-ed0b9e5475c4",
        "processingUser": "123",
        "confirmFinishTime": "",
        "confirmFinishUserId": "",
        "confirmFinishUser": "",
        "focusList": "测试收费系统",
        "timePoint": 48,
        "amount": 0,
        "community": "",
        "building": "",
        "unit": "",
        "room": "",
        "ownerName": "",
        "ownerPhone": "",
        "chargeWay": "",
        "recoveredAmount": 0,
        "arrearsAmount": 0,
        "arrearsMonth": 0,
        "executorList": [{
          "id": "21e72833-5ec5-4861-94cf-cc15437892f8",
          "userId": "858420ba-28fb-44a8-8997-ed0b9e5475c4",
          "userName": "测试收费系统",
          "caseId": "5a85bdd9-5ef0-4a7c-acac-2cdea7787a1f",
          "createTime": "2016-06-29 09:40:05",
          "createUserId": "",
          "createUser": ""
        }],
        "isTimeout": ""
      }],
    "pager": { "pageId": 1, "recPerPage": 10, "total": 124 }
  });
  },
};