// Get all tokens and codes from project properties
var scriptProperties = PropertiesService.getScriptProperties()
    slack_token = scriptProperties.getProperty("slack_token")            // this it a bot taken given when you install app, not secret that APP has.
    slack_channel = scriptProperties.getProperty("slack_channel")        // channel you are working with
    slack_group = scriptProperties.getProperty("slack_group")            // group you are working with
