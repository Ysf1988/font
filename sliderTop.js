$(function() {
  $(&#39;.sliderTop&#39;).iosSlider({
    desktopClickDrag: true,
    snapToChildren: true,
    infiniteSlider: true,
    snapSlideCenter: false,
    navSlideSelector: &#39;.slideSelectors .item&#39;,
    navPrevSelector: &#39;#watch-prev&#39;,
    navNextSelector: &#39;#watch-next&#39;,
    onSlideComplete: slideComplete,
    onSliderLoaded: sliderLoaded,
    onSlideChange: slideChange,
    autoSlide: true,
    autoSlideTransTimer: 500,
    scrollbar: true,
    scrollbarContainer: &#39;.scrollbarContainer&#39;,
    scrollbarMargin: &#39;10px&#39;,
    scrollbarBorderRadius: &#39;0&#39;,
    keyboardControls: true
  });
});

function slideChange(args) {
  $(&#39;.sliderTop .filmBlock&#39;).removeClass(&#39;selected&#39;);
  $(&#39;.sliderTop .filmBlock:eq(&#39; + (args.currentSlideNumber - 1) + &#39;)&#39;).addClass(&#39;selected&#39;);
}

function slideComplete(args) {
  if(!args.slideChanged) return false;
  $(args.sliderObject).find(&#39;.text1, .text2&#39;).attr(&#39;style&#39;, &#39;&#39;);
  $(args.currentSlideObject).find(&#39;.text1&#39;).animate({
    left: &#39;30px&#39;,
    opacity: &#39;0.8&#39;
  }, 700, &#39;easeOutQuint&#39;);
  $(args.currentSlideObject).find(&#39;.text2&#39;).delay(200).animate({
    left: &#39;30px&#39;,
    opacity: &#39;0.8&#39;
  }, 600, &#39;easeOutQuint&#39;);
}

function sliderLoaded(args) {
  $(args.sliderObject).find(&#39;.text1, .text2&#39;).attr(&#39;style&#39;, &#39;&#39;);
  $(args.currentSlideObject).find(&#39;.text1&#39;).animate({
    left: &#39;30px&#39;,
    opacity: &#39;0.8&#39;
  }, 700, &#39;easeOutQuint&#39;);
  $(args.currentSlideObject).find(&#39;.text2&#39;).delay(200).animate({
    left: &#39;30px&#39;,
    opacity: &#39;0.8&#39;
  }, 600, &#39;easeOutQuint&#39;);
  slideChange(args);
}

$(function() {
  $(&#39;#recent_intery&#39;).carouFredSel({
    auto: true,
    prev: &#39;#r_slider_item&#39;,
    next: &#39;#l_slider_item&#39;,
    scroll : {
          items            : 1,
          duration        : 1500,
          pauseOnHover : true
          
        }

  });
});
