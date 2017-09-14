(function ($) {
    
    $.fn.cloudControl = function (opts) {
        return this.each(function () {
            new CloudControl($(this), opts);
        });
    };
    
    function CloudControl($el, opts) {
        var me = this;
        
        me.$el = $el;
        me.$button = me.$el.find('button').attr('disabled', true);
        me.$fileUrl = me.$el.find('input[id="fileUrl"]');
		me.$fileName = me.$el.find('input[id="fileName"]');
        me.$fileInfo = me.$el.find('.file-info');
        
        me.opts = $.extend({}, opts);
        
        me.opts.picker.init(function () {
            me.$button.attr('disabled', false);
        });
        
        me.$button.on('click', function (e) {
            e.preventDefault();
            me.opts.picker.openDialog(me.onFileSelected.bind(me));
            
        });
    }
    
    CloudControl.prototype.onFileSelected = function (fileName, downloadUrl) {
        var me = this;
        var $html = $([
            '<div class="selected-file">',
                'Selected file:',
                '<a href="' + downloadUrl + '" target="_blank" class="file-title">',
                            fileName,
                '</a>',
                ' <i class="btn-remove">x</i>',
            '</div>'
        ].join(''));
        
        me.$fileName.val(fileName);
        me.$fileUrl.val(downloadUrl);
        me.$fileInfo.html($html);
        
        $html.on('click', '.btn-remove', function () {
           $html.remove();
           me.$fileUrl.val('');
        });
    };
    
})($);
