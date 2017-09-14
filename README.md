# kentico_googledrive_selector
Kentico 8 Google Drive File Selector Web part




Installation
--------------------
Warning: only tested with Kentico 8.2.x Enterprise marketing solution (all modules installed). 
It is strongly recommended you backup your site files and database before carrying out this installation.

1. Copy the supplied files from 'CMSFormControls' to your web root.

2. Run query 'Create Google File Selector Form Control.sql'.


Configuration
--------------------
1. Turn on Drive API and Drive SDK in API & Auth/APIs app setting. https://console.developers.google.com/project
2. Ensure your Google API Client ID created with your live domain in Google API Console. 
3. To set the Google Drive File Selector to live mode, supply your live GoogleDrive Client ID.
4. Go to CMS Admin > Forms > Select a form > Create a text field  > Field appearance > Form control : Google Drive File Selector.
5. Fill your Google Drive Client ID in Editing control settings section.