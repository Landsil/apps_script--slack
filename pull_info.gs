/*******************************************************************************************************************************************
 * Pull channel info
 * https://api.slack.com/methods/conversations.info
 * You will need to make a slack app with access to API https://api.slack.com/apps 
 * store credentials in Project Properties
 */

function pull_channel_info() {
  var URL = "https://slack.com/api/conversations.info"; // From their documentation.
  var arguments = {
           "token": slack_token,           // We are calling our project properties variable
           "channel": slack_channel        // We are calling our project properties variable
                };
  var options = {
          "method" : "get",
          "payload" : arguments,
        };
  
  //************************
  // Actuall call using FetchApp
  var response = UrlFetchApp.fetch(URL, options);
  
  //Assebling responce
  var dataAll = JSON.parse(response.getContentText());
  var channel = dataAll.channel;
  var channelTopicCurrent = channel.topic.value;
  

  Logger.log("channelTopicCurrent")
  Logger.log(channelTopicCurrent)

}



/*******************************************************************************************************************************************
 * Pull group info
 * https://api.slack.com/methods/usergroups.users.list
 * You will need to make a slack app with access to API https://api.slack.com/apps 
 * store credentials in Project Properties
 */

function pull_group_info() {
  var URL = "https://slack.com/api/usergroups.users.list"; // From their documentation.
  var arguments = {
           "token": slack_token,           // We are calling our project properties variable
           "usergroup": slack_group          // We are calling our project properties variable
                };
  var options = {
          "method" : "get",
          "payload" : arguments,
        };
  
  //************************
  // Actuall call using FetchApp
  var response = UrlFetchApp.fetch(URL, options);
  
  //Assebling responce
  var dataAll = JSON.parse(response.getContentText());
  var groupUsers = dataAll.users;
  

  Logger.log("groupUsers")
  Logger.log(groupUsers)

}
