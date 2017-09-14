(function ($) {
    
   var GoogleDrivePicker = window.GoogleDrivePicker = function (opts) { 
        this.opts = $.extend({}, opts);
    }
    
    GoogleDrivePicker.prototype.init = function (cb) {
        gapi.client.setApiKey(this.opts.apiKey);
        gapi.client.load('drive', 'v2', function () {
            gapi.load('picker', { 
                callback: cb
            });
        });
    };
    
    GoogleDrivePicker.prototype.openDialog = function (cb) {
        var me = this;
        
        if (me._isAuthorized()) {
			
            return me._showPicker(cb);
        }
            
        me._authorize(function () {			
            me._showPicker(cb);
        });
    };
    
    GoogleDrivePicker.prototype._showPicker = function (cb) {
        
        var me = this;
        var accessToken = gapi.auth.getToken().access_token;
        
        var picker = new google.picker.PickerBuilder()
            .addView(google.picker.ViewId.DOCUMENTS)
            .setAppId(me.opts.clientId)
            .setOAuthToken(accessToken)
            .setCallback(function (data) {
                if (data[google.picker.Response.ACTION] == google.picker.Action.PICKED) {
                    var file = data[google.picker.Response.DOCUMENTS][0];
                    var id = file[google.picker.Document.ID];

                    request = gapi.client.drive.files.get({
                        fileId: id
                    })
                        .execute(function(fileInfo) {
                            if (fileInfo.webContentLink) {
                                cb(fileInfo.title, fileInfo.webContentLink);
                            }
                        });
                }
            })
            .build();

        picker.setVisible(true);
    };
    
    GoogleDrivePicker.prototype._isAuthorized = function () {
        return gapi.auth.getToken();
    };
    
    GoogleDrivePicker.prototype._authorize = function (cb) {
        gapi.auth.authorize({
            client_id: this.opts.clientId,//+ '.apps.googleusercontent.com'
            scope: 'https://www.googleapis.com/auth/drive.readonly',
            immediate: false
        }, cb);
    };
    
})($);
