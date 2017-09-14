<%@ Control Language="C#" AutoEventWireup="true" CodeFile="GoogleDrive.ascx.cs" Inherits="CMSFormControls_SquareBall_CloudFileSelectors_GoogleDrive" %>
<link rel="stylesheet" href='<%= URLHelper.GetAbsoluteUrl("~/CMSFormControls/SquareballDigital/CloudFileSelectors/GoogleDrive/css/styles.css")%>'>
<div class="cloud-control google-drive">
    <button runat="server" id="btnPicker">Google drive <sup>TM</sup></button>        
    <div class="file-info">
        <asp:HyperLink runat="server" ID="txtFile"></asp:HyperLink>
        <asp:Label runat="server" ID="lblErrorMessage" ForeColor="Red" Visible="false"></asp:Label>
    </div>
    <input type="hidden" id="fileName" runat="server" clientidmode="Static"/>
    <input type="hidden" id="fileUrl" runat="server" clientidmode="Static"/>
</div> 

<script type="text/javascript" src='<%= URLHelper.GetAbsoluteUrl("~/CMSFormControls/SquareballDigital/CloudFileSelectors/GoogleDrive/scripts/libs/jquery-1.7.js")%>'></script> 
    
<script type="text/javascript" src='<%= URLHelper.GetAbsoluteUrl("~/CMSFormControls/SquareballDigital/CloudFileSelectors/GoogleDrive/scripts/cloud-control.js")%>'></script> 
<script type="text/javascript" src='<%= URLHelper.GetAbsoluteUrl("~/CMSFormControls/SquareballDigital/CloudFileSelectors/GoogleDrive/scripts/pickers/google-drive.js")%>'></script> 
   
<script>
    function onGoogleApiLoad() {
        $('.google-drive').cloudControl({
            picker: new window.GoogleDrivePicker({
                clientId: '<%= GoogleClientID %>'
            })
        });
    }
</script>
    
<!-- Turn on Drive API and Drive SDK in API & Auth/APIs app's setting https://console.developers.google.com/project -->
<script type="text/javascript" src="https://www.google.com/jsapi?key=<%= GoogleClientID %>"></script>
<script type="text/javascript" src="https://apis.google.com/js/client.js?onload=onGoogleApiLoad"></script>