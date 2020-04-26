## Lambda function to invoke flows in Salesforce

## Description
This repo contains a lambda function that invokes flows in Salesforce using Salesforce Rest API.

## Prework

Have the below details from your salesforce org.

 - Username
 - Password
 - Security token (please find the related articles [here](https://success.salesforce.com/answers?id=90630000000glADAAY) and [here](https://help.salesforce.com/articleView?id=000331668&type=1&mode=1))

## Setup Instructions
 - Clone this repository to your local. 
 - Open cmd/terminal and navigate to the cloned Folder.
 - run the command, npm install
 - Navigate to /node_modules/jsforce/lib/connection.js.
 - Change the Salesforce API version to latest version and save.
 - Zip the contents (inside the Cloned Folder)
 - Login to AWS and upload the zip file to a labmda function (Environment - Node.js).

After uploading, create the following environment variables as shown below:

 - username - yourSalesforceUserName
 - password - yourSalesforcePassword
 - secToken - yourSecurityToken (obtained from the prework)

Under **Basic settings** increase the Timeout to 1 min

## Testing in AWS Console

 - Configure test event by clicking on ***select a test event*** on top-right of page.
 - Use the basic Hello World, enter any name for **Event name** and create.
 - Hit **Test** next to it.
