// Subtle scroll reveal. No-JS / reduced motion: everything stays visible.
(function(){
  var root=document.documentElement;
  if(!root.classList.contains('js-reveal'))return;
  var groups=[
    'main section:not(.hero) .eyebrow, main section:not(.hero) h2, .meet-sub, .services-copy > p:not(.eyebrow), .price-sub',
    '.service-cards > li', '.steps > li', '.price-table', '.meet-photo'
  ];
  var els=[];
  groups.forEach(function(sel,gi){
    var list=document.querySelectorAll(sel);
    for(var i=0;i<list.length;i++){var el=list[i];if(el.closest('.hero')||el.classList.contains('rv'))continue;
      el.classList.add('rv');if(gi>0)el.style.setProperty('--rv-d',(i*80)+'ms');els.push(el);}
  });
  var io=new IntersectionObserver(function(entries){
    entries.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);}});
  },{rootMargin:'0px 0px -8% 0px',threshold:0.12});
  els.forEach(function(el){io.observe(el);});
})();
