// shared behaviour: entrances + "open now"
document.documentElement.classList.add('js');
(function(){
  var io=('IntersectionObserver' in window)?new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{rootMargin:'0px 0px -8% 0px'}):null;
  document.querySelectorAll('.rise,.pop').forEach(function(el){io?io.observe(el):el.classList.add('in')});
  // Orari reali: lun 14–19:30, mar–ven 9–19, sab 9–13, dom chiuso
  var H={1:[840,1170],2:[540,1140],3:[540,1140],4:[540,1140],5:[540,1140],6:[540,780]};
  var D=['domenica','lunedì','martedì','mercoledì','giovedì','venerdì','sabato'];
  function f(m){var h=Math.floor(m/60),mm=m%60;return h+(mm?':'+(mm<10?'0':'')+mm:'')}
  function status(){
    var p=new Intl.DateTimeFormat('en-GB',{timeZone:'Europe/Rome',weekday:'short',hour:'2-digit',minute:'2-digit',hour12:false}).formatToParts(new Date());
    var o={};p.forEach(function(x){o[x.type]=x.value});
    var d=['Sun','Mon','Tue','Wed','Thu','Fri','Sat'].indexOf(o.weekday),m=(+o.hour%24)*60+ +o.minute,t=H[d];
    if(t&&m>=t[0]&&m<t[1])return{open:true,text:'Aperto ora, fino alle '+f(t[1])};
    if(t&&m<t[0])return{open:false,text:'Chiuso, apre oggi alle '+f(t[0])};
    for(var i=1;i<8;i++){var n=(d+i)%7;if(H[n])return{open:false,text:'Chiuso, apre '+(i==1?'domani':D[n])+' alle '+f(H[n][0])}}
  }
  var s=status();
  document.querySelectorAll('[data-open]').forEach(function(el){el.textContent=s.text;el.dataset.open=s.open?'yes':'no'});
})();
