export default {
  "retcode": 0,
  "data": {
    "info": {
      "approveId": "20180403000000040",
      "templateId": 22699,
      "templateName": "新请假",
      "orgId": 57171554250,
      "depName": "技术部",
      "records": [],
      "creator": {
        "uid": "101010012363912",
        "name": "zw",
        "createTime": 1522737116537,
        "repealTime": 1522737129760,
        "promptTime": 0
      },
      "content": "[{\"id\":\"1522216831813\",\"label\":\"请假原因\",\"type\":\"mutiText\",\"value\":\"adfafaf\",\"isFromSuper\":false,\"uniqueFlag\":\"\",\"realValue\":\"adfafaf\"},{\"id\":\"1522216825090\",\"label\":\"请假类型\",\"type\":\"leave\",\"value\":\"年休假\",\"isFromSuper\":false,\"uniqueFlag\":\"leaveDetail\",\"realValue\":{\"vacation_type\":2,\"vacation_name\":\"年休假\",\"vacation_id\":101,\"startTime\":\"2018/04/04 上午\",\"endTime\":\"2018/04/05 上午\",\"accurateStartTime\":1522771200,\"accurateEndTime\":1522814399,\"sectionTime\":\"0.00\",\"hasSetVacation\":true,\"dayTimes\":0,\"dayInfoList\":[]}}]",
      "logo": "{\"iconfont\":\"icon-zdy_rs_ruzhi\",\"url\":\"https://statics.jituancaiyun.com/images/approve-logo/zdy_rs_ruzhi.png\"}",
      "status": 0,
      "kInfo": {
        "knowType": 1,
        "knowers": [],
        "depts": [],
        "isCurDept": false,
        "condKnowers": []
      },
      "fInfo": {
        "isSteps": true,
        "nowStepIndex": 2,
        "steps": [{
          "stepId": 1,
          "postId": -1,
          "name": "发起人自己",
          "approvers": [{
            "uid": "101010012363912",
            "name": "zw",
            "operType": 1,
            "comment": "",
            "operTime": 1522737123145,
            "signUrl": "",
            "isAgentOpt": false,
            "agentUid": "",
            "agentName": ""
          }],
          "relayers": [],
          "flowType": 4,
          "isExtra": false
        }, {
          "stepId": 2,
          "postId": -1,
          "name": "发起人自己",
          "approvers": [{
            "uid": "101010012363912",
            "name": "zw",
            "operType": 0,
            "comment": "",
            "operTime": 0,
            "signUrl": "",
            "isAgentOpt": false,
            "agentUid": "",
            "agentName": ""
          }],
          "relayers": [],
          "flowType": 4,
          "isExtra": true
        }]
      },
      "dSteps": [{
        "postId": -1,
        "name": "发起人自己",
        "approver": {
          "uid": "101010012363912",
          "name": "zw",
          "operType": 1,
          "comment": "",
          "operTime": 1522737123145,
          "signUrl": "",
          "isAgentOpt": false,
          "agentUid": "",
          "agentName": ""
        },
        "isExtra": false
      }],
      "comments": [],
      "tempConf": {
        "chooseType": 1,
        "replaceType": 1,
        "isRepApprover": 1,
        "isOpenSign": 1
      },
      "rInfo": {
        "type": 0,
        "id": "",
        "name": ""
      },
      "modStatus": 0,
      "updateTime": 1522737129760,
      "extendStatus": 1,
      "repealReason": "adfafd",
      "modFlowRecords": []
    }
  }
}