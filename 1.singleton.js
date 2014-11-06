/*
 * 说明：js单例模式实现中的一种。
 */

var singleton = function() {
    var xhr = null;
    return {
        start: function(arg) {
            if(!xhr) {
                xhr = arg;
            } else if(xhr.readyStatus != 4) {
                xhr.abort();
                xhr = arg;
            } else {
                xhr = arg;
            }
            return xhr;
        }
    };
}();

/*
 * 应用场景：搜索栏中搜索功能，当连续多次搜索相同的内容(狂按回车)，
 * 会有冗余数据，因此，需要abort掉前面的request。
 *
 * 示例代码：
 */

// search http request
function search(keyword) {
    var xhr = $.ajax({
        url: 'xxxxxxx/' + keyword,
        beforeSend: function(xhr) {
            blablabla...
        },
        success: function(response, status, xhr) {
            blablabla...
        },
        error: function(xhr, errorInfo, exception) {
            blablabla...
        }
    });
    return singleton.start(xhr);
}
