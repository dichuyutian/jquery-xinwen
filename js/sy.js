//用于页面跳转
$(function(){
	$('.bd-left-body').on({
		click:function(){
			if ($(this).text()=="首页") {
				$('.contentRight').load('pages/home.html');
				return;
			}
			if ($(this).text()=="栏目管理") {
				$('.contentRight').load('pages/category.html');
				return;
			}
			if ($(this).text()=="资讯管理") {
				$('.contentRight').load('pages/info.html');
				return;
			}
			if ($(this).text()=="用户管理") {
				$('.contentRight').load('pages/user.html');
				return;
			}
		}
	},'div')
})