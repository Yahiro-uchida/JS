function showTab(selector){
    //.tabs-menu div のうちselectorに該当するものにだけactiveクラスをつける
    $(".tabs-menu div").removeClass("active");
 	$(".tabs-menu > div")
  	.removeClass("active")
  	.eq(selector)
  	.addClass("active");

	$(".tabs-content > div")
  	.hide()
  	.eq(selector)
  	.show(); 
}

$(document).ready(function(){
    //初期表示は1番目のタブを表示
    showTab("#tab-menu-a");  //中身？それともタブ？

    //タブがクリックされたらコンテンツを表示
    $(".tabs-menu div").click(function(){
        //index取得
        var selector = $(".tabs-menu div").index(this);
        showTab(selector);

        return false;
    })

})


