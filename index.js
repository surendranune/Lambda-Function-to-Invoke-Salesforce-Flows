const AWS = require('aws-sdk');
const axios = require('axios');
const jsforce = require('jsforce');
const uName = process.env.username;
const pwd = process.env.password;
const secToken = process.env.secToken;
const param1Name = process.env.param1Name;
const param2Name = process.env.param2Name;
const param3Name = process.env.param3Name;
const param4Name = process.env.param4Name;
const param5Name = process.env.param5Name;
const param1Value = process.env.param1Value;
const param2Value = process.env.param2Value;
const param3Value = process.env.param3Value;
const param4Value = process.env.param4Value;
const param5Value = process.env.param5Value;

exports.handler = function (e, ctx, callback) {
  if (e) {
    var conn = new jsforce.Connection();
    var instanceUrl = '';
    var sessionId = '';
    var accessToken = '';
    if (secToken != null && secToken != undefined) {
      pwd = pwd + secToken;
    }
    conn.login(uName, pwd, function (err, res) {
      if (err) {
        console.log(err);
        callback(err, null);
      }

      instanceUrl = conn.instanceUrl;
      accessToken = conn.accessToken;
      var flowRunBody = {};
      var params = {};

      if (
        param1Name != null &&
        param1Name != undefined &&
        param1Value != undefined &&
        param1Value != null
      ) {
        params[param1Name] = param1Value;
      }
      if (
        param2Name != null &&
        param2Name != undefined &&
        param2Value != undefined &&
        param2Value != null
      ) {
        params[param2Name] = param2Value;
      }
      if (
        param3Name != null &&
        param3Name != undefined &&
        param3Value != undefined &&
        param3Value != null
      ) {
        params[param3Name] = param3Value;
      }
      if (
        param4Name != null &&
        param4Name != undefined &&
        param4Value != undefined &&
        param4Value != null
      ) {
        params[param4Name] = param4Value;
      }
      if (
        param5Name != null &&
        param5Name != undefined &&
        param5Value != undefined &&
        param5Value != null
      ) {
        params[param5Name] = param5Value;
      }
      flowRunBody.inputs = [];
      flowRunBody.inputs[0] = params;
      var token = 'Bearer ' + accessToken;
      const headers = {
        Authorization: token,
      };

      axios
        .post(
          instanceUrl +
            '/services/data/v47.0/actions/custom/flow/' +
            process.env.flowApiName,
          flowRunBody,
          { headers: headers }
        )
        .then((res) => {
          console.log(`Status: ${res.status}`);
          console.log('Body: ', res.data);
        })
        .catch((err) => {
          console.error(err);
        });
    });
  }
};
