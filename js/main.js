var myApp = angular.module('staticMapMaker', [], function ($interpolateProvider) {
  $interpolateProvider.startSymbol('[[');
  $interpolateProvider.endSymbol(']]');
});

myApp.controller('googleController', ['$scope', function($scope) {

  $scope.base = {
    location: "Albany, NY",
    zoom: 13,
    minZoom: 0,
    maxZoom: 22,
    width: 600,
    height: 300,
    maxSize: 640,
    markerColor: "red",
    mapType: "roadmap",
    format: "png",
    markerSize: "mid",
    autoCenter: false
  };
  $scope.colors = [ "black", "brown", "green", "purple", "yellow", "blue", "gray", "orange", "red", "white" ];
  $scope.markerSizes = [
{ "value": "tiny", "text": "small" },
{ "value": "small", "text": "medium" },
{ "value": "mid", "text": "large" }
];
$scope.mapTypes = [ "roadmap", "terrain", "satellite", "hybrid" ];
$scope.formats = [ "png", "gif", "jpg" ];
}]);

myApp.controller('mapboxController', ['$scope', function($scope) {
  $scope.base = {
    location: "-73.7638,42.6564",
    zoom: 13,
    minZoom: 0,
    maxZoom: 22,
    width: 600,
    height: 300,
    maxSize: 1280,
    auto: false,
    format: "png",
    markerSize: "s",
    API: "",
    mapID: "",
    markerColor: "285A98",
    markerLabel: "heart"
  };
  $scope.markerSizes = [
{ "value": "s", "text": "small" },
{ "value": "m", "text": "medium" },
{ "value": "l", "text": "large" }
];
$scope.labels = [ "airfield", "airport", "alcohol-shop", "america-football", "art-gallery", "bakery", "bank", "bar", "baseball", "basketball", "beer", "bicycle", "building", "bus", "cafe", "camera", "campsite", "car", "cemetery", "chemist", "cinema", "circle-stroked", "circle", "city", "clothing-store", "college", "commercial", "cricket", "cross", "dam", "danger", "disability", "dog-park", "embassy", "emergency-telephone", "entrance", "farm", "fast-food", "ferry", "fire-station", "fuel", "garden", "golf", "grocery", "hairdresser", "harbor", "heart", "heliport", "hospital", "industrial", "land-use", "laundry", "library", "lighthouse", "lodging", "logging", "london-underground", "marker-stroked", "marker", "minefield", "mobilephone", "monument", "museum", "music", "oil-well", "park2", "park", "parking-garage", "parking", "pharmacy", "pitch", "place-of-worship", "playground", "police", "polling-place", "post", "prison", "rail-above", "rail-light", "rail-metro", "rail-underground", "rail", "religious-christian", "religious-jewish", "religious-muslim", "restaurant", "roadblock", "rocket", "school", "scooter", "shop", "skiing", "slaughterhouse", "soccer", "square-stroked", "square", "star-stroked", "star", "suitcase", "swimming", "telephone", "tennis", "theatre", "toilets", "town-hall", "town", "triangle-stroked", "triangle", "village", "warehouse", "waste-basket", "water", "wetland", "zoo", "a", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9" ];
$scope.formats = [ "png", "png32", "png64", "png128", "png256", "jpg70", "jpg80", "jpg90", "@2x.png" ];
}]);


myApp.controller('mapquestController', ['$scope', function($scope) {

  $scope.base = {
    location: "Albany, NY",
    API: "",
    zoom: 13,
    minZoom: 1,
    maxZoom: 18,
    width: 600,
    height: 300,
    maxSize: 3840,
    markerColor: "red",
    mapType: "map",
    format: "png",
    markerSize: "mid",
    autoCenter: false,
    scaleBar: false,
    showTraffic: false,
    traffic: "flow"
  };
  $scope.traffics = [
    { "value": "flow", "text": "flowing" },
    { "value": "con", "text": "construction" },
    { "value": "inc", "text": "incidents" }
  ];
$scope.colors = [ "blue","green","orange","purple","white","yellow","blue_1","blue_2","blue_3","blue_4","green_1","green_2","green_3","green_4","orange_1","orange_2","orange_3","pink_1","pink_2","pink_3","purple_1","purple_2","purple_3","purple_4","white_1","yellow_1","yellow_2","yellow_3" ];
$scope.markerSizes = [
{ "value": "tiny", "text": "small" },
{ "value": "small", "text": "medium" },
{ "value": "mid", "text": "large" }
];
$scope.mapTypes = [ "map", "sat", "hyb" ];
$scope.formats = [ "png", "gif", "jpg", "jpeg" ];
}]);

//http://stackoverflow.com/a/16388643
myApp.directive('capitalize', function() {
  return {
    restrict: 'A', // only activate on element attribute
    require: '?ngModel',
    link : function(scope, element, attrs, modelCtrl) {
      var capitalize = function(inputValue) {
        if(inputValue) {
          var capitalized = inputValue.toUpperCase();
          if (capitalized !== inputValue) {
            modelCtrl.$setViewValue(capitalized);
            modelCtrl.$render();
          }
          return capitalized;
        }
      };
      modelCtrl.$parsers.push(capitalize);
      capitalize(scope[attrs.ngModel]); // capitalize initial value
    }
  };
});

myApp.filter('nospace', function () {
  return function (value) {
    return (!value) ? '' : value.replace(/ /g, '');
  };
});
myApp.filter('escape', function() {
  return window.escape;
});
;$( document ).ready(function() {
	$("[data-toggle=popover]").popover({
		placement : 'right',
		trigger:'hover'
	});
});;+function(a){"use strict";var b=function(a,b){this.type=this.options=this.enabled=this.timeout=this.hoverState=this.$element=null,this.init("tooltip",a,b)};b.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1},b.prototype.init=function(b,c,d){this.enabled=!0,this.type=b,this.$element=a(c),this.options=this.getOptions(d);for(var e=this.options.trigger.split(" "),f=e.length;f--;){var g=e[f];if("click"==g)this.$element.on("click."+this.type,this.options.selector,a.proxy(this.toggle,this));else if("manual"!=g){var h="hover"==g?"mouseenter":"focusin",i="hover"==g?"mouseleave":"focusout";this.$element.on(h+"."+this.type,this.options.selector,a.proxy(this.enter,this)),this.$element.on(i+"."+this.type,this.options.selector,a.proxy(this.leave,this))}}this.options.selector?this._options=a.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},b.prototype.getDefaults=function(){return b.DEFAULTS},b.prototype.getOptions=function(b){return b=a.extend({},this.getDefaults(),this.$element.data(),b),b.delay&&"number"==typeof b.delay&&(b.delay={show:b.delay,hide:b.delay}),b},b.prototype.getDelegateOptions=function(){var b={},c=this.getDefaults();return this._options&&a.each(this._options,function(a,d){c[a]!=d&&(b[a]=d)}),b},b.prototype.enter=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type);return clearTimeout(c.timeout),c.hoverState="in",c.options.delay&&c.options.delay.show?void(c.timeout=setTimeout(function(){"in"==c.hoverState&&c.show()},c.options.delay.show)):c.show()},b.prototype.leave=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type);return clearTimeout(c.timeout),c.hoverState="out",c.options.delay&&c.options.delay.hide?void(c.timeout=setTimeout(function(){"out"==c.hoverState&&c.hide()},c.options.delay.hide)):c.hide()},b.prototype.show=function(){var b=a.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){if(this.$element.trigger(b),b.isDefaultPrevented())return;var c=this,d=this.tip();this.setContent(),this.options.animation&&d.addClass("fade");var e="function"==typeof this.options.placement?this.options.placement.call(this,d[0],this.$element[0]):this.options.placement,f=/\s?auto?\s?/i,g=f.test(e);g&&(e=e.replace(f,"")||"top"),d.detach().css({top:0,left:0,display:"block"}).addClass(e),this.options.container?d.appendTo(this.options.container):d.insertAfter(this.$element);var h=this.getPosition(),i=d[0].offsetWidth,j=d[0].offsetHeight;if(g){var k=this.$element.parent(),l=e,m=document.documentElement.scrollTop||document.body.scrollTop,n="body"==this.options.container?window.innerWidth:k.outerWidth(),o="body"==this.options.container?window.innerHeight:k.outerHeight(),p="body"==this.options.container?0:k.offset().left;e="bottom"==e&&h.top+h.height+j-m>o?"top":"top"==e&&h.top-m-j<0?"bottom":"right"==e&&h.right+i>n?"left":"left"==e&&h.left-i<p?"right":e,d.removeClass(l).addClass(e)}var q=this.getCalculatedOffset(e,h,i,j);this.applyPlacement(q,e),this.hoverState=null;var r=function(){c.$element.trigger("shown.bs."+c.type)};a.support.transition&&this.$tip.hasClass("fade")?d.one(a.support.transition.end,r).emulateTransitionEnd(150):r()}},b.prototype.applyPlacement=function(b,c){var d,e=this.tip(),f=e[0].offsetWidth,g=e[0].offsetHeight,h=parseInt(e.css("margin-top"),10),i=parseInt(e.css("margin-left"),10);isNaN(h)&&(h=0),isNaN(i)&&(i=0),b.top=b.top+h,b.left=b.left+i,a.offset.setOffset(e[0],a.extend({using:function(a){e.css({top:Math.round(a.top),left:Math.round(a.left)})}},b),0),e.addClass("in");var j=e[0].offsetWidth,k=e[0].offsetHeight;if("top"==c&&k!=g&&(d=!0,b.top=b.top+g-k),/bottom|top/.test(c)){var l=0;b.left<0&&(l=-2*b.left,b.left=0,e.offset(b),j=e[0].offsetWidth,k=e[0].offsetHeight),this.replaceArrow(l-f+j,j,"left")}else this.replaceArrow(k-g,k,"top");d&&e.offset(b)},b.prototype.replaceArrow=function(a,b,c){this.arrow().css(c,a?50*(1-a/b)+"%":"")},b.prototype.setContent=function(){var a=this.tip(),b=this.getTitle();a.find(".tooltip-inner")[this.options.html?"html":"text"](b),a.removeClass("fade in top bottom left right")},b.prototype.hide=function(){function b(){"in"!=c.hoverState&&d.detach(),c.$element.trigger("hidden.bs."+c.type)}var c=this,d=this.tip(),e=a.Event("hide.bs."+this.type);return this.$element.trigger(e),e.isDefaultPrevented()?void 0:(d.removeClass("in"),a.support.transition&&this.$tip.hasClass("fade")?d.one(a.support.transition.end,b).emulateTransitionEnd(150):b(),this.hoverState=null,this)},b.prototype.fixTitle=function(){var a=this.$element;(a.attr("title")||"string"!=typeof a.attr("data-original-title"))&&a.attr("data-original-title",a.attr("title")||"").attr("title","")},b.prototype.hasContent=function(){return this.getTitle()},b.prototype.getPosition=function(){var b=this.$element[0];return a.extend({},"function"==typeof b.getBoundingClientRect?b.getBoundingClientRect():{width:b.offsetWidth,height:b.offsetHeight},this.$element.offset())},b.prototype.getCalculatedOffset=function(a,b,c,d){return"bottom"==a?{top:b.top+b.height,left:b.left+b.width/2-c/2}:"top"==a?{top:b.top-d,left:b.left+b.width/2-c/2}:"left"==a?{top:b.top+b.height/2-d/2,left:b.left-c}:{top:b.top+b.height/2-d/2,left:b.left+b.width}},b.prototype.getTitle=function(){var a,b=this.$element,c=this.options;return a=b.attr("data-original-title")||("function"==typeof c.title?c.title.call(b[0]):c.title)},b.prototype.tip=function(){return this.$tip=this.$tip||a(this.options.template)},b.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},b.prototype.validate=function(){this.$element[0].parentNode||(this.hide(),this.$element=null,this.options=null)},b.prototype.enable=function(){this.enabled=!0},b.prototype.disable=function(){this.enabled=!1},b.prototype.toggleEnabled=function(){this.enabled=!this.enabled},b.prototype.toggle=function(b){var c=b?a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type):this;c.tip().hasClass("in")?c.leave(c):c.enter(c)},b.prototype.destroy=function(){clearTimeout(this.timeout),this.hide().$element.off("."+this.type).removeData("bs."+this.type)};var c=a.fn.tooltip;a.fn.tooltip=function(c){return this.each(function(){var d=a(this),e=d.data("bs.tooltip"),f="object"==typeof c&&c;(e||"destroy"!=c)&&(e||d.data("bs.tooltip",e=new b(this,f)),"string"==typeof c&&e[c]())})},a.fn.tooltip.Constructor=b,a.fn.tooltip.noConflict=function(){return a.fn.tooltip=c,this}}(jQuery),+function(a){"use strict";var b=function(a,b){this.init("popover",a,b)};if(!a.fn.tooltip)throw new Error("Popover requires tooltip.js");b.DEFAULTS=a.extend({},a.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),b.prototype=a.extend({},a.fn.tooltip.Constructor.prototype),b.prototype.constructor=b,b.prototype.getDefaults=function(){return b.DEFAULTS},b.prototype.setContent=function(){var a=this.tip(),b=this.getTitle(),c=this.getContent();a.find(".popover-title")[this.options.html?"html":"text"](b),a.find(".popover-content")[this.options.html?"string"==typeof c?"html":"append":"text"](c),a.removeClass("fade top bottom left right in"),a.find(".popover-title").html()||a.find(".popover-title").hide()},b.prototype.hasContent=function(){return this.getTitle()||this.getContent()},b.prototype.getContent=function(){var a=this.$element,b=this.options;return a.attr("data-content")||("function"==typeof b.content?b.content.call(a[0]):b.content)},b.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")},b.prototype.tip=function(){return this.$tip||(this.$tip=a(this.options.template)),this.$tip};var c=a.fn.popover;a.fn.popover=function(c){return this.each(function(){var d=a(this),e=d.data("bs.popover"),f="object"==typeof c&&c;(e||"destroy"!=c)&&(e||d.data("bs.popover",e=new b(this,f)),"string"==typeof c&&e[c]())})},a.fn.popover.Constructor=b,a.fn.popover.noConflict=function(){return a.fn.popover=c,this}}(jQuery);