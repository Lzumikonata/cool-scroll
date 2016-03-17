# cool-scroll
灵感来自*rdio-copy*项目,它是模仿*rdio*,我发现它们引入了很多第三方库,比如*jquery*,*skrollr*之类,所以写了一个原生的滑动插件.
相比之下,它更简单,小巧,敏捷.

###起步
通过*bower*安装插件:  
	`bower install cool-scroll --save`
	    
###配置 
`var cs = new CoolScroll;  
	cs.init(scrollStart,scrollEnd,speed);
`  
scrollStart => 数字,图片滑动开始百分比,默认20  
scrollEnd   => 数字,图片滑动结束百分比,默认80  
speed       => 数字,平滑滑动速度,默认6
  
    
   
