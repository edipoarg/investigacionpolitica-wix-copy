google.maps.__gjsload__('infowindow', function(_){var HI=function(a){return!!a.infoWindow.get("logAsInternal")},vEa=function(a,b){if(1===a.g.size){const c=Array.from(a.g.values())[0];c.to!==b.to&&(c.set("map",null),a.g.delete(c))}a.g.add(b)},xEa=function(a,b){var c=a.__gm;a=c.get("panes");c=c.get("innerContainer");b={Ye:a,Ic:_.aw.Ic(),wq:c,shouldFocus:b};return new wEa(b)},II=function(a,b){a.ba.style.visibility=b?"":"hidden";b&&a.shouldFocus&&(a.focus(),a.shouldFocus=!1);b?yEa(a):a.s=!1},zEa=function(a){const b=!!a.get("open");var c=a.get("content");
c=b?c:null;if(c==a.i)II(a,b&&a.get("position"));else{if(a.i){const d=a.i.parentNode;d==a.g&&d.removeChild(a.i)}c&&(a.C=!1,a.g.appendChild(c));II(a,b&&a.get("position"));a.i=c;JI(a)}},JI=function(a){var b=a.getSize();if(b){var c=b.Af;b=b.minWidth;a.Rb.style.maxWidth=_.eo(c.width);a.Rb.style.maxHeight=_.eo(c.height);a.Rb.style.minWidth=_.eo(b);a.g.style.maxHeight=_.Lj.g?_.eo(c.height-18):_.eo(c.height-36);KI(a);a.m.start()}},AEa=function(a){const b=a.get("pixelOffset")||new _.qi(0,0);var c=new _.qi(a.Rb.offsetWidth,
a.Rb.offsetHeight);a=-b.height+c.height+11+60;let d=b.height+60;const e=-b.width+c.width/2+60;c=b.width+c.width/2+60;0>b.height&&(d-=b.height);return{top:a,bottom:d,left:e,right:c}},yEa=function(a){!a.s&&a.get("open")&&a.get("visible")&&a.get("position")&&(_.mh(a,"visible"),a.s=!0)},KI=function(a){var b=a.get("position");if(b&&a.get("pixelOffset")){var c=AEa(a);const d=b.x-c.left,e=b.y-c.top,f=b.x+c.right;c=b.y+c.bottom;_.Fo(a.anchor,b);b=a.get("zIndex");_.Ho(a.ba,_.bg(b)?b:e+60);a.set("pixelBounds",
_.$i(d,e,f,c))}},CEa=function(a,b,c){return b instanceof _.yh?new BEa(a,b,c):new BEa(a,b)},EEa=function(a){a.g&&a.Fb.push(_.io(a.g,"pixelposition_changed",()=>{DEa(a)}))},DEa=function(a){const b=a.model.get("pixelPosition")||a.g&&a.g.get("pixelPosition");a.l.set("position",b)},GEa=function(a){a=a.__gm;a.get("IW_AUTO_CLOSER")||a.set("IW_AUTO_CLOSER",new FEa);return a.get("IW_AUTO_CLOSER")},FEa=class{constructor(){this.g=new Set}};var wEa=class extends _.ph{constructor(a){super();this.i=this.o=null;this.s=this.C=!1;this.wq=a.wq;this.shouldFocus=a.shouldFocus;this.ba=document.createElement("div");this.ba.style.cursor="default";this.ba.style.position="absolute";this.ba.style.left=this.ba.style.top="0";a.Ye.floatPane.appendChild(this.ba);this.anchor=_.Go("div",this.ba);this.l=_.Go("div",this.anchor);this.Rb=_.Go("div",this.l);this.Rb.setAttribute("role","dialog");this.Rb.tabIndex=-1;this.J=_.Go("div",this.l);this.g=_.Go("div",
this.Rb);_.Awa(this.ba);_.Ao(this.Rb,"gm-style-iw");_.Ao(this.anchor,"gm-style-iw-a");_.Ao(this.l,"gm-style-iw-t");_.Ao(this.J,"gm-style-iw-tc");_.Ao(this.Rb,"gm-style-iw-c");_.Ao(this.g,"gm-style-iw-d");_.Lj.g&&!_.Lj.s&&(a.Ic?this.Rb.style.paddingLeft="0":this.Rb.style.paddingRight="0",this.Rb.style.paddingBottom="0",this.g.style.overflow="scroll");II(this,!1);_.hh(this.ba,"mousedown",_.$g);_.hh(this.ba,"mouseup",_.$g);_.hh(this.ba,"mousemove",_.$g);_.hh(this.ba,"pointerdown",_.$g);_.hh(this.ba,
"pointerup",_.$g);_.hh(this.ba,"pointermove",_.$g);_.hh(this.ba,"dblclick",_.$g);_.hh(this.ba,"click",_.$g);_.hh(this.ba,"touchstart",_.$g);_.hh(this.ba,"touchend",_.$g);_.hh(this.ba,"touchmove",_.$g);_.ho(this.ba,"contextmenu",this,this.F);_.ho(this.ba,"wheel",this,_.$g);_.ho(this.ba,"mousewheel",this,_.Xg);_.ho(this.ba,"MozMousePixelScroll",this,_.Xg);this.h=new _.sp({Yk:new _.oi(8,8),wm:new _.qi(14,14),offset:new _.oi(-6,-6),ownerElement:this.Rb});this.Rb.appendChild(this.h.element);_.hh(this.h.element,
"click",b=>{_.$g(b);_.mh(this,"closeclick");this.set("open",!1)});this.m=new _.qj(()=>{!this.C&&this.get("content")&&this.get("visible")&&(_.mh(this,"domready"),this.C=!0)},0);this.D=_.hh(this.ba,"keydown",b=>{"Escape"!==b.key&&"Esc"!==b.key||!this.Rb.contains(document.activeElement)||(b.stopPropagation(),_.mh(this,"closeclick"),this.set("open",!1))})}ariaLabel_changed(){const a=this.get("ariaLabel");a?this.Rb.setAttribute("aria-label",a):this.Rb.removeAttribute("aria-label")}open_changed(){zEa(this)}content_changed(){zEa(this)}pendingFocus_changed(){this.get("pendingFocus")&&
(this.get("open")&&this.get("visible")&&this.get("position")?_.Sj(this.Rb,!0):console.warn("Setting focus on InfoWindow was ignored. This is most likely due to InfoWindow not being visible yet."),this.set("pendingFocus",!1))}dispose(){setTimeout(()=>{document.activeElement&&document.activeElement!==document.body||(this.o&&this.o!==document.body?_.Sj(this.o,!0)||_.Sj(this.wq,!0):_.Sj(this.wq,!0))});this.D&&_.dh(this.D);this.ba.parentNode.removeChild(this.ba);this.m.stop();this.m.dispose()}getSize(){var a=
this.get("layoutPixelBounds"),b=this.get("pixelOffset");const c=this.get("maxWidth")||648,d=this.get("minWidth")||0;if(!b)return null;a?(b=a.Ba-a.pa-(11+-b.height),a=a.Da-a.xa-6,240<=a&&(a-=120),240<=b&&(b-=120)):(a=648,b=654);a=Math.min(a,c);a=Math.max(d,a);a=Math.max(0,a);b=Math.max(0,b);return{Af:new _.qi(a,b),minWidth:d}}pixelOffset_changed(){const a=this.get("pixelOffset")||new _.qi(0,0);this.l.style.right=_.eo(-a.width);this.l.style.bottom=_.eo(-a.height+11);JI(this)}layoutPixelBounds_changed(){JI(this)}position_changed(){this.get("position")?
(KI(this),II(this,!!this.get("open"))):II(this,!1)}zIndex_changed(){KI(this)}visible_changed(){this.ba.style.display=this.get("visible")?"":"none";this.m.start();if(this.get("visible")){const a=this.h.element.style.display;this.h.element.style.display="none";this.h.element.getBoundingClientRect();this.h.element.style.display=a;yEa(this)}else this.s=!1}F(a){let b=!1;const c=this.get("content");let d=a.target;for(;!b&&d;)b=d==c,d=d.parentNode;b?_.Xg(a):_.Zg(a)}focus(){this.o=document.activeElement;
let a;_.Lj.C&&(a=this.g.getBoundingClientRect());if(this.get("disableAutoPan"))_.Sj(this.Rb,!0);else{var b=_.Mo(this.g);if(b.length){b=b[0];a=a||this.g.getBoundingClientRect();var c=b.getBoundingClientRect();_.Sj(c.bottom<=a.bottom&&c.right<=a.right?b:this.Rb,!0)}else _.Sj(this.h.element,!0)}}};var BEa=class{constructor(a,b,c){this.model=a;this.isOpen=!0;this.g=this.i=this.fa=null;this.Fb=[];var d=a.get("shouldFocus");this.l=xEa(b,d);const e=b.__gm;(d=b instanceof _.yh)&&c?c.then(k=>{this.isOpen&&(this.fa=k,this.g=new _.QE(m=>{this.i=new _.Ft(b,k,m,()=>{});k.Qb(this.i);return this.i}),this.g.bindTo("latLngPosition",a,"position"),EEa(this))}):(this.g=new _.QE,this.g.bindTo("latLngPosition",a,"position"),this.g.bindTo("center",e,"projectionCenterQ"),this.g.bindTo("zoom",e),this.g.bindTo("offset",
e),this.g.bindTo("projection",b),this.g.bindTo("focus",b,"position"),EEa(this));this.m=d?HI(a)?"Ia":"Id":null;this.o=d?HI(a)?148284:148285:null;const f=new _.RE(["scale"],"visible",k=>null==k||.3<=k);this.g&&f.bindTo("scale",this.g);const g=this.l;g.set("logAsInternal",HI(a));g.bindTo("ariaLabel",a);g.bindTo("zIndex",a);g.bindTo("layoutPixelBounds",e,"pixelBounds");g.bindTo("disableAutoPan",a);g.bindTo("pendingFocus",a);g.bindTo("maxWidth",a);g.bindTo("minWidth",a);g.bindTo("content",a);g.bindTo("pixelOffset",
a);g.bindTo("visible",f);this.h=new _.qj(()=>{if(b instanceof _.yh)if(this.fa){var k=a.get("position");k&&_.mia(b,this.fa,new _.Qh(k),AEa(g))}else c.then(()=>{this.h.start()});else(k=g.get("pixelBounds"))?_.mh(e,"pantobounds",k):this.h.start()},150);if(d){let k=null;this.Fb.push(_.io(a,"position_changed",()=>{const m=a.get("position");!m||a.get("disableAutoPan")||m.equals(k)||(this.h.start(),k=m)}))}else a.get("disableAutoPan")||this.h.start();g.set("open",!0);this.Fb.push(_.bh(g,"domready",()=>{a.trigger("domready")}));
this.Fb.push(_.bh(g,"visible",()=>{a.trigger("visible")}));this.Fb.push(_.bh(g,"closeclick",()=>{a.close();a.trigger("closeclick")}));this.Fb.push(_.io(a,"pixelposition_changed",()=>{DEa(this)}));this.m&&_.hi(b,this.m);this.o&&_.fi(b,this.o)}close(){if(this.isOpen){this.isOpen=!1;for(var a of this.Fb)_.dh(a);this.Fb.length=0;this.h.stop();this.h.dispose();this.fa&&this.i&&this.fa.Gg(this.i);a=this.l;a.unbindAll();a.set("open",!1);a.dispose();this.g&&this.g.unbindAll()}}};_.Vg("infowindow",{vB:function(a){let b=null;_.io(a,"map_changed",function d(){const e=a.get("map");b&&(b.yw.g.delete(a),b.TL.close(),b=null);if(e){const f=e.__gm;f.get("panes")?f.get("innerContainer")?(b={TL:CEa(a,e,e instanceof _.yh?f.vb.then(({fa:g})=>g):void 0),yw:GEa(e)},vEa(b.yw,a)):_.kh(f,"innercontainer_changed",d):_.kh(f,"panes_changed",d)}})}});});
