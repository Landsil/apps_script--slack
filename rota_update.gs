/*******************************************************************************************************************************************
 * Update rota index and then update group and title
 */

function push_update() {
 /* Rota is:
 * U1231 - name
 * U5342 - someone
 * Ug44t - foo
 * U334 - bar
 */
  var rota_full = {
                   "1.0" : "<@U1231>",  // name
                   "2.0" : "<@U5342>",  // someone
                   "3.0" : "<@Ug44t>",  // foo
                   "4.0" : "<@U334>"   // bar
                  };
  
// slack_rota_index stores last (current) person in rota
  
  
  
  // Then update rota index to next person
  var slack_rota_index = scriptProperties.getProperty("slack_rota_index") ;    // Pull latest rota index
  slack_rota_index = !isNaN(slack_rota_index)? Number(slack_rota_index):1 ;    // Check if slack_rota_index is a number, if not then make is a number(1)
  
  if (slack_rota_index < 4) {
    scriptProperties.setProperty("slack_rota_index", slack_rota_index + 1)
  }
  else {
    scriptProperties.setProperty("slack_rota_index", 1)
  }
  var slack_rota_index = scriptProperties.getProperty("slack_rota_index") ;    // Pull latest rota index
  
  
  var support_user = rota_full[slack_rota_index];
  var titleNew = "Point-of-contact for the week: " + support_user ;
  var groupNew = support_user ;
  
  Logger.log(support_user)
  
  
  
  // add here code that will make an API call to slack to update channel title and a user group.

  
}
