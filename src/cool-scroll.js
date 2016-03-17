/**
 * Created by wittbulter on 16/3/17.
 */
;(function (w, d) {
    var old = w.CoolScroll;
    (function (w, d) {
        var CoolScroll = function () {
                this.clientHeight = 1000;
                this.imgArray = [];
                _this = this;
            },
        //判断是否在可视区域
            inWindow = function (img) {
                var _top;
                w.onscroll = function () {
                    if (img[0].node.getBoundingClientRect ().top > this.clientHeight) return;
                    img.forEach(function (value) {
                        _top = value.node.getBoundingClientRect().top;
                        //开始
                        if ( (_top < 0 ? - _top < value.endHeight : _top < value.startHeight)) {
                            scrollEvent(value , _top);
                        }
                    })
                }
            },
        //滑动触发事件
            scrollEvent = function (v, top) {
                var _h = (- top + _this.clientHeight ) * 100 / v.h;
                if (_h > v.start && _h < v.end) {
                    v.node.style.top = _h + '%';
                }
            },
            smoothEvent = function (){
                d.onmousewheel = function (event) {
                    if (d.body.scrollTop <= 0) return;
                    var speed = _this.speed,
                        speedTatol = 0,
                        delta = event.deltaY * .8;
                    var time = setInterval(function () {
                        if (speedTatol >= Math.abs(delta)) clearInterval(time);
                        if (delta > 0) {
                            d.body.scrollTop = speed + d.body.scrollTop;
                        }else{
                            d.body.scrollTop = - speed + d.body.scrollTop;
                        }
                        if (speedTatol >= (Math.abs(delta) / 2)) {
                            speed = speed > 3 ? (speed -.01) : speed;
                        }
                        speedTatol += speed;
                    }, 20)
                    return false;
                }
            };
        CoolScroll.prototype = {
            version : 'CoolScroll=>0.0.1',
            old: old,
        //取得被标记的图片与相关设置
            getImage : function () {
                var _image = d.getElementsByTagName('img'),
                    _start = 20,
                    _end = 80;
                [].forEach.call(_image, function (value) {
                //取得单个图片上的设置项
                    _start = value.getAttribute(_this.scrollStart);
                    _end = value.getAttribute(_this.scrollEnd);
                //避免设置项大小出错
                    if (_end < _start) _end = [_start,_start = _end][0];
                    _this.imgArray.push({
                        node: value,
                        start: ~~(_start || 20),
                        end: ~~(_end || 80),
                        startHeight: value.height,
                        endHeight: value.height + _this.clientHeight,
                        h: value.height + _this.clientHeight,
                        top: value.getBoundingClientRect().top
                    })
                })
            },
            init: function (scrollStart,scrollEnd,speed){
                w.onload = function () {
                    _this.scrollStart = scrollStart || 'cool-scroll-start';
                    _this.scrollEnd = scrollEnd || 'cool-scroll-end';
                    _this.speed = speed || 6;

                    _this.clientHeight = d.documentElement.clientHeight;
                //获取图片
                    _this.getImage();
                //添加平滑滚动
                    smoothEvent();
                //按图片与顶部距离排序
                    inWindow(_this.imgArray);
                }
            },
        }
        if (typeof define === "function" && define.amd ) {
            define('CoolScroll',[], function() {
                return CoolScroll;
            });
        }
        w.CoolScroll = CoolScroll;
    })(w, d);
})(window, document)