/*!
 * jQzoom Evolution Library v2.3  - Javascript Image magnifier
 * http://www.mind-projects.it
 *
 * Copyright 2011, Engineer Marco Renzi
 * Licensed under the BSD license.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *     * Redistributions of source code must retain the above copyright
 *       notice, this list of conditions and the following disclaimer.
 *     * Redistributions in binary form must reproduce the above copyright
 *       notice, this list of conditions and the following disclaimer in the
 *       documentation and/or other materials provided with the distribution.
 *     * Neither the name of the organization nor the
 *       names of its contributors may be used to endorse or promote products
 *       derived from this software without specific prior written permission.
 *
 * Date: 03 May 2011 22:16:00
 */
require(['jquery'], function ($) {
    //GLOBAL VARIABLES
    var body = $(document.body);
    var window = $(window);
    var jqzoompluging_disabled = false; //disabilita globalmente il plugin
    $.fn.jqzoom = function (options) {
        return this.each(function () {
            var node = this.nodeName.toLowerCase();
            if (node == 'a') {
                new jqzoom(this, options);
            }
        });
    };
    jqzoom = function (el, options) {
        var api = null;
        api = $(el).data("jqzoom");
        if (api) return api;
        var obj = this;
        var settings = $.extend({}, $.jqzoom.defaults, options || {});
        obj.el = el;
        $(el).addClass('jqzoom');

        //ANCHOR ELEMENT
        el.zoom_active = false;
        el.zoom_disabled = false; //to disable single zoom instance
        el.largeimageloading = false; //tell us if large image is loading
        el.largeimageloaded = false; //tell us if large image is loaded
        el.scale = {};
        el.timer = null;
        el.mousepos = {};
        el.mouseDown = false;

        //BASE IMAGE
        var img = $("img:eq(0)", el);
        img.addClass('zoom-small-image');
        el.title = $(el).attr('title');
        el.imagetitle = img.attr('title');
        var zoomtitle = ($.trim(el.title).length > 0) ? el.title : el.imagetitle;
        var smallimage = new Smallimage(img);

        //creating zoomWindow
        el.$zoomContainer = (settings.zoomContainer || $(el));

        var stage = new Stage();

        var lens, largeimage;
        if(settings.touch){
            lens = new TouchLens();
            largeimage = new TouchLargeImage();
        }
        else {
           lens = new Lens();
           largeimage  = new Largeimage();
        }

        var loader = new Loader();

        //preventing default click,allowing the onclick event [exmple: lightbox]
        $(el).bind('click', function (e) {
            e.preventDefault();
            return false;
        });

        //setting the default zoomType if not in settings
        var zoomtypes = ['standard', 'innerzoom'];
        if ($.inArray($.trim(settings.zoomType), zoomtypes) < 0) {
            settings.zoomType = 'standard';
        }
        var lastTouchStart = false;
        $.extend(obj, {
            create: function () { //create the main objects
                //create ZoomPad
                if ($(".zoomPad", el).length == 0) {
                    el.zoomPad = $('<div/>').addClass('zoomPad');
                    img.wrap(el.zoomPad);
                }
                if(settings.zoomType == 'innerzoom'){
                    settings.zoomWidth  = smallimage.w;
                    settings.zoomHeight  =   smallimage.h;
                }
                //creating ZoomPup
                if ($(".zoomPup", el).length == 0) {
                    lens.append();
                }

                if ($(".zoomWindow", el.$zoomContainer).length == 0) {
                    stage.append();
                }
                //creating Preload
                if ($(".zoomPreload", el).length == 0) {
                    loader.append();
                }
                //preloading images
                if (settings.preloadImages) {
                    obj.load();
                }

                obj.setZoomWidth();

                obj.init();
            },

            destroy: function(){
                img.unwrap(); // remove zoompad
                lens.remove(); // remove zoompup
                stage.remove(); // remove zoomwindow
                loader.remove(); // remove zoompreload
            },

            init: function () {
                if (settings.zoomType == 'innerzoom') {
                    $(".zoomWrapper", el).css({
                        cursor: 'crosshair'
                    });
                }

                el.$zoomPad = $(".zoomPad", el);
                if(!settings.touch){

                    if(settings.zoomTrigger) {

                        el.$zoomTrigger = $(settings.zoomTrigger);
                        el.$zoomTrigger.on('click', function(e){
                            e.preventDefault();
                            if(el.zoom_active){
                                obj.deactivate($(this));
                            }
                            else {
                                obj.zoomStart(e);
                            }
                        });

                        el.$zoomPad.on('mouseenter mouseover', function (e) {
                            if(el.zoom_active){
                                obj.zoomStart(e);
                            }
                        });

                        el.$zoomPad.on('mousemove', function (e) {
                            if(el.zoom_active){
                                obj.zoomMove(e);
                            }
                        });
                    }
                    else {

                        el.$zoomPad.on('mouseenter mouseover', function (e) {
                            obj.zoomStart(e);
                        });

                        el.$zoomPad.on('mouseleave', function (e) {
                            obj.deactivate();
                            largeimage.setInactive();
                        });

                        el.$zoomPad.on('mousemove', function (e) {
                            obj.zoomMove(e);
                        });
                    }
                }

                if(settings.touch){
                    if(settings.touchToActivate) {
                        /* handle touch events */
                        el.$zoomPad.on("touchend", function(e){
                            // if the last touch is 'touchstart' event, it is not swipe
                            if(el.zoom_active && lastTouchStart) {
                                obj.deactivate($(this));
                                lastTouchStart = false;
                            }
                            else {
                                if(lastTouchStart){
                                    obj.zoomStart(e);
                                }
                            }
                        });
                        el.$zoomPad.on("touchstart", function(e){
                            lastTouchStart = true;
                        });
                        el.$zoomPad.on("touchmove", function(e){
                            lastTouchStart = false;
                        });
                    }

                    if(settings.zoomTrigger) {
                        el.$zoomTrigger = $(el).parent().find(settings.zoomTrigger);
                        el.$zoomTrigger.on('touchstart', function(e){
                            e.preventDefault();
                            if(el.zoom_active){
                                obj.deactivate($(this));
                            }
                            else {
                                obj.zoomStart(e);
                            }
                        });
                    }
                    else {
                        throw 'You need to set the zoomTrigger in order to activate zoom.';
                    }
                }
                obj.deactivate();
            },

            setZoomWidth: function() {
                var zoomWidth = settings.zoomContainer ? el.$zoomContainer.width() : (Math.round(settings.zoomWidth));
                var zoomHeight = settings.zoomContainer ? el.$zoomContainer.height() : (Math.round(settings.zoomHeight));
                settings.zoomWindowWidth = zoomWidth;
                settings.zoomWindowHeight = zoomHeight;

                // Remove the styling so that the div doesn't cover the normal page
                el.$zoomContainer.attr('style', '');
            },

            load: function () {
                if (el.largeimageloaded == false && el.largeimageloading == false) {
                    var url = $(el).attr('href');
                    el.largeimageloading = true;
                    largeimage.loadimage(url);
                }
            },
            zoomStart: function (e) {
                img.attr('title', '');
                $(el).attr('title', '');
                el.zoom_active = true;
                el.$zoomContainer.addClass('active');

                $(el).trigger('zoomActivated', el);
                //if loaded then activate else load large image
                smallimage.fetchdata();
                // set the xoffset if the zoom container is specified
                // if(settings.zoomContainer != null) {
                //     settings.Xoffset = -(smallimage.pos.l) - smallimage.bleft;
                // }
                if (el.largeimageloaded) {
                    obj.activate($(e.target));

                } else {
                    obj.load();
                }
            },
            zoomMove: function(e) {
                //prevent fast mouse mevements not to fire the mouseout event
                var pageX, pageY;
                if(e.type == 'touchmove' || e.type == 'touchstart' || e.type == 'touchend') {
                    var touch = e.originalEvent.touches[0];
                    pageX = touch.pageX;
                    pageY = touch.pageY;
                }
                else {
                    pageX = e.pageX;
                    pageY = e.pageY;
                }

                if(!settings.touch){
                    if (pageX > smallimage.pos.r || pageX < smallimage.pos.l || pageY < smallimage.pos.t || pageY > smallimage.pos.b) {
                        lens.setcenter();
                        return false;
                    }
                }
                el.zoom_active = true;
                el.$zoomContainer.addClass('active');

                if (el.largeimageloaded && !$('.zoomWindow', el.$zoomContainer).is(':visible') && !settings.touch) {
                    obj.activate(e);
                }
                if (el.largeimageloaded) {
                    lens.setposition(pageX, pageY);
                }
            },
            activate: function ($elem) {
                clearTimeout(el.timer);
                //show lens and zoomWindow
                lens.show();
                stage.show();
            },
            deactivate: function ($elem) {
                img.attr('title', el.imagetitle);
                $(el).attr('title', el.title);

                if(settings.zoomTrigger) {
                    largeimage.setcenter();
                }
                stage.hide();
                lens.hide();

                el.zoom_active = false;
                el.$zoomContainer.removeClass('active');

                $(el).trigger('zoomDeactivated', el);
            }
        });
        //sometimes image is already loaded and onload will not fire
        if (img[0].complete) {
            //fetching data from sallimage if was previously loaded
            smallimage.fetchdata();
            if ($(".zoomPad", el).length == 0) {
                obj.create();
            }
            else{
                obj.setZoomWidth();
                obj.init();
            }
        }
/*========================================================,
|   Smallimage
|---------------------------------------------------------:
|   Base image into the anchor element
`========================================================*/

        function Smallimage(image) {
            var $obj = this;
            this.node = image[0];
            this.findborder = function () {
                var bordertop = 0;
                bordertop = image.css('border-top-width');
                btop = '';
                var borderleft = 0;
                borderleft = image.css('border-left-width');
                bleft = '';
                if (bordertop) {
                    for (i = 0; i < 3; i++) {
                        var x = [];
                        x = bordertop.substr(i, 1);
                        if (isNaN(x) == false) {
                            btop = btop + '' + bordertop.substr(i, 1);
                        } else {
                            break;
                        }
                    }
                }
                if (borderleft) {
                    for (i = 0; i < 3; i++) {
                        if (!isNaN(borderleft.substr(i, 1))) {
                            bleft = bleft + borderleft.substr(i, 1)
                        } else {
                            break;
                        }
                    }
                }
                $obj.btop = (btop.length > 0) ? eval(btop) : 0;
                $obj.bleft = (bleft.length > 0) ? eval(bleft) : 0;
            };
            this.fetchdata = function () {
                $obj.findborder();
                $obj.w = image.width();
                $obj.h = image.height();
                $obj.ow = image.outerWidth(true);
                $obj.oh = image.outerHeight(true);
                $obj.pos = image.offset();
                $obj.pos.l = image.offset().left + $obj.bleft;
                $obj.pos.t = image.offset().top + $obj.btop;
                $obj.pos.r = $obj.ow + $obj.pos.l;
                $obj.pos.b = $obj.h + $obj.pos.t;
                if(typeof(image.css('margin-left')) == 'undefined') {
                    $obj.marginLeft = parseInt(image.css('margin-left'));
                    $obj.marginTop = parseInt(image.css('margin-top'));
                }
                else {
                    $obj.marginLeft = (image.offset().left - image.parent().offset().left);
                    $obj.marginTop = (image.parent().offset().top - image.offset().top);
                }

                $obj.pos.innerLeft = $obj.pos.l - $obj.marginLeft; // image offset of left excluding the margin
                $obj.rightlimit = image.offset().left + $obj.ow;
                $obj.bottomlimit = image.offset().top + $obj.oh;
            };
            this.node.onerror = function () {
                throw 'Problems while loading image.';
            };
            this.node.onload = function () {
                $obj.fetchdata();
                if ($(".zoomPad", el).length == 0) obj.create();
            };
            return $obj;
        };
/*========================================================,
|  Loader
|---------------------------------------------------------:
|  Show that the large image is loading
`========================================================*/

        function Loader() {
            var $obj = this;
            this.node = $('<div/>').addClass('zoomPreload');

            this.append = function () {
                this.node.html(settings.preloadText);
                if(settings.zoomContainer){
                    el.$zoomContainer.append(this.node);
                }
                else {
                    $('.zoomPad', el.$zoomContainer).append(this.node);
                }
            };

            this.remove = function(){
                $('.zoomPreload', el).remove();
            };

            this.show = function () {
                this.node.addClass('active');
                //setting position
                this.node.css({
                    top: this.node.top,
                    left: this.node.left
                });
            };
            this.hide = function () {
                this.node.removeClass('active');
            };
            return this;
        };
/*========================================================,
|   Lens
|---------------------------------------------------------:
|   Lens over the image
`========================================================*/

        function Lens() {
            var $obj = this;
            this.node = $('<div/>').addClass('zoomPup');
            //this.nodeimgwrapper = $("<div/>").addClass('zoomPupImgWrapper');
            this.append = function () {
                $('.zoomPad', el).append($(this.node));
            };
            this.remove = function(){
                this.node.remove();
            };
            this.setdimensions = function () {
                this.node.w = (parseInt((settings.zoomWidth) / el.scale.x) > smallimage.w ) ? smallimage.w : (parseInt(settings.zoomWidth / el.scale.x));
                this.node.h = (parseInt((settings.zoomHeight) / el.scale.y) > smallimage.h ) ? smallimage.h : (parseInt(settings.zoomHeight / el.scale.y));
                this.node.top = (smallimage.oh - this.node.h - 2) / 2;
                this.node.left = (smallimage.ow - this.node.w - 2) / 2;
                //centering lens
                this.node.css({
                    top: 0,
                    left: 0,
                    width: this.node.w + 'px',
                    height: this.node.h + 'px'
                });
            };

            this.setcenter = function () {
                //calculating center position
                this.node.top = (smallimage.oh - this.node.h - 2) / 2;
                this.node.left = (smallimage.ow - this.node.w - 2) / 2;
                //centering lens
                this.node.css({
                    top: this.node.top,
                    left: this.node.left
                });
                //centering large image
                largeimage.setposition();
            };

            this.setposition = function (pageX, pageY) {
                el.mousepos.x = pageX;
                el.mousepos.y = pageY;
                var lensleft = 0;
                var lenstop = 0;

                function overleft(lens) {
                    return el.mousepos.x - (lens.w) / 2 < smallimage.pos.l;
                }

                function overright(lens) {
                    return el.mousepos.x + (lens.w) / 2 > smallimage.pos.r;

                }

                function overtop(lens) {
                    return el.mousepos.y - (lens.h) / 2 < smallimage.pos.t;
                }

                function overbottom(lens) {
                    return el.mousepos.y + (lens.h) / 2 > smallimage.pos.b;
                }

                lensleft = el.mousepos.x + smallimage.bleft - smallimage.pos.l - (this.node.w + 2) / 2;
                lenstop = el.mousepos.y + smallimage.btop - smallimage.pos.t - (this.node.h + 2) / 2;
                if (overleft(this.node)) {
                    lensleft = smallimage.bleft - 1;
                } else if (overright(this.node)) {
                    lensleft = smallimage.w + smallimage.bleft - this.node.w - 1;
                }
                if (overtop(this.node)) {
                    lenstop = smallimage.btop - 1;
                } else if (overbottom(this.node)) {
                    lenstop = smallimage.h + smallimage.btop - this.node.h - 1;
                }

                this.node.left = lensleft;
                this.node.top = lenstop;
                this.node.css({
                    'left': (lensleft + smallimage.marginLeft) + 'px',
                    'top': lenstop + 'px'
                });

                largeimage.setposition();
            };
            this.hide = function () {
                this.node.removeClass('active');
            };
            this.show = function () {
                if (settings.zoomType != 'innerzoom' && settings.lens) {
                    this.node.addClass('active');
                }
            };
            this.getoffset = function () {
                var o = {};
                o.left = $obj.node.left;
                o.top = $obj.node.top;
                return o;
            };
            return this;
        };

        function TouchLens() {
            var base = new Lens();
            base.setposition = function(pageX, pageY){
                if(this.active){
                    this.active = false;
                    // calculate the distance
                    largeimage.moveimage(pageX - this.startX, pageY - this.startY);
                }
                else {
                    this.active = true;
                    this.startX = pageX;
                    this.startY = pageY;
                }

            };
            return base;
        };
/*========================================================,
|   Stage
|---------------------------------------------------------:
|   Window area that contains the large image
`========================================================*/

        function Stage() {
            var $obj = this;
            this.node = $("<div class='zoomWindow'><div class='zoomWrapper'><div class='zoomWrapperTitle'></div><div class='zoomWrapperImage'></div></div></div>");

            this.setposition = function () {
                this.node.leftpos = 0;
                this.node.toppos = 0;

                //positioning
                if(settings.zoomContainer == null && settings.zoomType != 'innerzoom' ) {
                    switch (settings.position) {
                    case "left":
                        this.node.leftpos = (smallimage.pos.l - smallimage.bleft - Math.abs(settings.xOffset) - settings.zoomWindowWidth > 0) ? (0 - settings.zoomWidth - Math.abs(settings.xOffset)) : (smallimage.ow + Math.abs(settings.xOffset));
                        this.node.toppos = Math.abs(settings.yOffset);
                        break;
                    case "top":
                        this.node.leftpos = Math.abs(settings.xOffset);
                        this.node.toppos = (smallimage.pos.t - smallimage.btop - Math.abs(settings.yOffset) - settings.zoomWindowHeight > 0) ? (0 - settings.zoomWindowHeight - Math.abs(settings.yOffset)) : (smallimage.oh + Math.abs(settings.yOffset));
                        break;
                    case "bottom":
                        this.node.leftpos = Math.abs(settings.xOffset);
                        this.node.toppos = (smallimage.pos.t - smallimage.btop + smallimage.oh + Math.abs(settings.yOffset) + settings.zoomWindowHeight < screen.height) ? (smallimage.oh + Math.abs(settings.yOffset)) : (0 - settings.zoomWindowHeight - Math.abs(settings.yOffset));
                        break;
                    default:
                        this.node.leftpos = (smallimage.rightlimit + Math.abs(settings.xOffset) + settings.zoomWindowWidth < screen.width) ? (smallimage.ow + Math.abs(settings.xOffset)) : (0 - settings.zoomWidth - Math.abs(settings.xOffset));
                        this.node.toppos = Math.abs(settings.yOffset);
                        break;
                    }
                }
                else {
                    this.node.leftpos = 0;
                    this.node.toppos = 0;
                }

                this.node.css({
                    'left': this.node.leftpos + 'px',
                    'top': this.node.toppos + 'px'
                });
                return this;
            };
            this.append = function () {
                if (settings.zoomType == 'innerzoom') {
                    $('.zoomPad', el.$zoomContainer).append(this.node);
                }
                else {
                    el.$zoomContainer.append(this.node);
                }

                el.$zoomWrapper = $('.zoomWrapper', this.node);

                if (settings.zoomType == 'innerzoom') {
                    this.node.addClass('inner-zoom');
                }
                $('.zoomWrapperTitle', this.node).html(zoomtitle);

                $obj.setposition();
            };
            this.remove = function() {
                $('.zoomWindow').remove();
            };
            this.hide = function () {
                el.$zoomContainer.find('.zoomWindow').removeClass('active');
                this.node.removeClass('active');
            };
            this.show = function () {
                el.$zoomContainer.find('.zoomWindow').addClass('active');
                this.node.addClass('active');
            };
        };
/*========================================================,
|   LargeImage
|---------------------------------------------------------:
|   The large detailed image
`========================================================*/

        function Largeimage() {
            var $obj = this;
            this.node = new Image();
            $(this.node).addClass('zoom-large-image');
            this.loadimage = function (url) {
                //showing preload
                loader.show();
                this.url = url;
                this.node.style.left = '-5000px';
                this.node.style.top = '0px';

                document.body.appendChild(this.node);
                this.node.src = url; // fires off async
            };

            this.fetchdata = function () {
                var image = $(this.node);
                var scale = {};
                this.node.style.display = 'block';
                $obj.w = image.width();
                $obj.h = image.height();
                $obj.pos = image.offset();
                $obj.pos.l = image.offset().left;
                $obj.pos.t = image.offset().top;
                $obj.pos.r = $obj.w + $obj.pos.l;
                $obj.pos.b = $obj.h + $obj.pos.t;
                scale.x = ($obj.w / smallimage.w);
                scale.y = ($obj.h / smallimage.h);
                el.scale = scale;
                //document.body.removeChild(this.node);
                $('.zoomWrapperImage', el.$zoomContainer).children().hide();
                $('.zoomWrapperImage', el.$zoomContainer).append(this.node);
                //setting lens dimensions;
                lens.setdimensions();
            };
            this.node.onerror = function () {
                throw 'Problems while loading the big image.';
            };
            this.node.onload = function () {
                //fetching data
                $obj.fetchdata();
                loader.hide();
                el.largeimageloading = false;
                el.largeimageloaded = true;
                lens.show();
                stage.show();

                // If innerzoom with zoom trigger, show the zoom image it at activation
                if(settings.zoomTrigger){
                    largeimage.setcenter();
                }
            };
            this.setposition = function () {
                if(!$obj.active) {
                    $('.zoomWrapperImage', el.$zoomContainer).children().hide();
                    this.node.style.display = 'block';
                    $obj.active = true;
                }
                var left = -el.scale.x * (lens.getoffset().left - smallimage.bleft + 1);
                var top = -el.scale.y * (lens.getoffset().top - smallimage.btop + 1);
                $(this.node).css({
                    'left': left + 'px',
                    'top': top + 'px'
                });
            };
            this.setcenter = function() {
                this.node.style.display = 'block';
                $(this.node).css({
                    'left': (smallimage.w - $obj.w) / 2,
                    'top': (smallimage.h - $obj.h) / 2
                });
            };
            this.setActive = function() {
                $obj.active = true;
            };
            this.setInactive = function() {
                $obj.active = false;
            };
            return this;
        };

        function TouchLargeImage() {
            var left = 0, top = 0;
            var lastLeft= 0, lastTop = 0
            var obj = new Largeimage();

            obj.loadimage = function (url) {
                //showing preload
                loader.show();
                this.url = url;
                //this.node.style.display = 'none';
                document.body.appendChild(this.node);
                this.node.src = url; // fires off async
            };

            obj.setcenter = function () {
                this.node.style.display = 'block';
                // scroll the position of the image so that the center of the image shows up in the window
                $(this.node).parent().scrollTop(obj.h / 2);
                $(this.node).parent().scrollLeft(obj.w / 2);
            };
            return obj;
        };

        $(el).data("jqzoom", obj);
    };
    //es. $.jqzoom.disable('#jqzoom1');
    $.jqzoom = {
        defaults: {
            zoomType: 'standard',
            //innerzoom/standard
            zoomWidth: 300,
            //zoomWindow  default width
            zoomHeight: 300,
            //zoomWindow  default height
            xOffset: 10,
            //zoomWindow x offset, can be negative(more on the left) or positive(more on the right)
            yOffset: 0,
            //zoomWindow y offset, can be negative(more on the left) or positive(more on the right)
            position: "right",
            //zoomWindow default position
            preloadImages: true,
            //image preload
            preloadText: '',
            title: true,
            lens: true,
            // the jquery element of the container that the zoomWindow is placed in
            // if not specified, this will be inside this element.
            zoomContainer: null,
            // touchstart activates the zoom
            touchToActivate: true,
            // if touchToActivate is false, you should define the jquery element to be clicked (touchstart)
            zoomTrigger: null,
            touch: false
        },
        disable: function (el) {
            var api = $(el).data('jqzoom');
            api.disable();
            $(el).removeClass('jqzoom');
            return false;
        },
        enable: function (el) {
            var api = $(el).data('jqzoom');
            api.enable();
            return false;
        },
        disableAll: function (el) {
            jqzoompluging_disabled = true;
        },
        enableAll: function (el) {
            jqzoompluging_disabled = false;
        },
        deactivateAll: function($els){
            var api;
            $els.each(function(index, elm){
                api = $(elm).data('jqzoom');
                if(api.el.zoom_active) {
                    api.deactivate();
                }
            });
            return false;
        }
    };
});