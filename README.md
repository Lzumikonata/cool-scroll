# cool-scroll
灵感来自*rdio-copy*项目,它是模仿*rdio*,我发现它们引入了很多第三方库,比如*jquery*,*skrollr*之类,所以写了一个原生的滑动插件.
相比之下,它更简单,小巧,敏捷.

###DEMO  
[demo](http://wittsay.cc/notebook/demo/cool-scroll/)
###起步
通过*bower*安装插件:  
	`bower install cool-scroll --save`
	    
###配置 
`var cs = new CoolScroll;cs.init(scrollStart,scrollEnd,speed);`  
scrollStart => 字符串,自定义标记开始属性,默认为cool-scroll-start  
scrollEnd => 字符串,自定义标记结束属性,默认为cool-scroll-end  
speed => 数字,平滑滑动速度,默认6  

` <img src=""  cool-scroll-start="20" cool-scroll-end="80">`  
cool-scroll-start => 图片滑动开始百分比,默认20   
cool-scroll-start => 图片滑动结束百分比,默认80   

  
    
   
