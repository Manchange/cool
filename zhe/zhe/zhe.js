jQuery.fn.extend({
  xbtn: function() {
    return this.each(function() {
        //html
            $.ajax({
                type: "get",
                url: "zhe/zhe.html",
                success: function(data) {
                    $('body').append(data);
                    $('#btn').click(function(){
                        $('#xbox').show();
                        $('#tan').show();
                    });
                    $(".btn-close").click(function(){
                        $('#xbox').hide();
                        $('#tan').hide();
                    });
                }.bind(this)
            });

            //css
            $.ajax({
                type: "get",
                url: "zhe/zhe.css",
                success: function(data) {
                    $("head style").append(data)
                }.bind(this)
            });
    });
  }
});