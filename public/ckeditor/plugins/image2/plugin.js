﻿/*
 Copyright (c) 2003-2014, CKSource - Frederico Knabben. All rights reserved.
 For licensing, see LICENSE.md or http://ckeditor.com/license
*/
(function(){function A(a){return{allowedContent:{div:{match:p(a),styles:"text-align"},figcaption:!0,figure:{classes:"!caption",styles:"float,display"},img:{attributes:"!src,alt,width,height",styles:"float"},p:{match:p(a),styles:"text-align"}},contentTransformations:[["img[width]: sizeToAttribute"]],editables:{caption:{selector:"figcaption",allowedContent:"br em strong sub sup u s; a[!href]"}},parts:{image:"img",caption:"figcaption"},dialog:"image2",template:u,data:function(){var a=this,b=a.editor,
d=b.document,g=b.editable();a.shiftState({element:a.element,oldState:a.oldData,newState:a.data,destroy:function(){this.destroyed||(b.widgets.focused==a&&(this.focused=!0),b.widgets.destroy(a),this.destroyed=!0)},init:function(e){if(this.destroyed)a=b.widgets.initOn(e,"image",a.data),a.inline&&!(new CKEDITOR.dom.elementPath(a.wrapper,g)).block&&(e=d.createElement(b.activeEnterMode==CKEDITOR.ENTER_P?"p":"div"),e.replace(a.wrapper),a.wrapper.move(e)),this.focused&&(a.focus(),delete this.focused),delete this.destroyed;
else{var e=a,f=e.wrapper,i=e.data.align;"center"==i?(e.inline||f.setStyle("text-align","center"),f.removeStyle("float")):(e.inline||f.removeStyle("text-align"),"none"==i?f.removeStyle("float"):f.setStyle("float",i))}}});a.parts.image.setAttributes({src:a.data.src,"data-cke-saved-src":a.data.src,alt:a.data.alt});B(a);a.oldData=CKEDITOR.tools.extend({},a.data)},init:function(){var a=CKEDITOR.plugins.image2,b=this.parts.image,d={hasCaption:!!this.parts.caption,src:b.getAttribute("src"),alt:b.getAttribute("alt")||
"",width:b.getAttribute("width")||"",height:b.getAttribute("height")||"",lock:this.ready?a.checkHasNaturalRatio(b):!0};d.align||(d.align=this.element.getStyle("float")||b.getStyle("float")||"none",this.element.removeStyle("float"),b.removeStyle("float"));d.hasCaption||this.wrapper.setStyle("line-height","0");this.setData(d);C(this);this.shiftState=a.stateShifter(this.editor);this.on("contextMenu",function(a){a.data.image=CKEDITOR.TRISTATE_OFF});this.on("dialog",function(a){a.data.widget=this},this)},
upcast:D(a),downcast:E}}function D(a){var c=p(a);return function(a,d){var g={width:1,height:1},e=a.name,f;if(!a.attributes["data-cke-realelement"]){if(c(a)){if("div"==e&&(f=a.getFirst("figure")))a.replaceWith(f),a=f;d.align="center";f=a.getFirst("img")}else"figure"==e&&a.hasClass("caption")?f=a.getFirst("img"):"img"==e&&(f=a);if(f){for(var i in g)(e=f.attributes[i])&&e.match(F)&&delete f.attributes[i];return a}}}}function E(a){var c=a.attributes,b=this.data.align;if(!this.inline){var d=a.getFirst("span"),
g=d.getFirst("img");d.replaceWith(g)}b&&"none"!=b&&(d=CKEDITOR.tools.parseCssText(c.style||""),"center"==b&&"figure"==a.name?a=a.wrapWith(new CKEDITOR.htmlParser.element("div",{style:"text-align:center"})):b in{left:1,right:1}&&(d["float"]=b),CKEDITOR.tools.isEmpty(d)||(c.style=CKEDITOR.tools.writeCssText(d)));return a}function p(a){return function(c){if(!(c.name in{div:1,p:1}))return!1;var b=c.children;if(1!==b.length)return!1;var b=b[0],d=b.name;if("figure"!=d&&"img"!=d)return!1;if("p"==c.name){if("img"!=
d)return!1}else if("figure"==d&&!b.hasClass("caption")||"img"==d&&a.enterMode==CKEDITOR.ENTER_P)return!1;return"center"==CKEDITOR.tools.parseCssText(c.attributes.style||"",!0)["text-align"]?!0:!1}}function B(a){var c=a.data,c={width:c.width,height:c.height},a=a.parts.image,b;for(b in c)c[b]?a.setAttribute(b,c[b]):a.removeAttribute(b)}function C(a){var c=a.editor,b=c.editable(),d=c.document,g=d.createElement("span");g.addClass("cke_image_resizer");g.setAttribute("title",c.lang.image2.resizer);g.append(new CKEDITOR.dom.text("​",
d));if(a.inline)a.wrapper.append(g);else{var e=a.element.getFirst(),f=d.createElement("span");f.addClass("cke_image_resizer_wrapper");f.append(a.parts.image);f.append(g);a.element.append(f,!0);e.is("span")&&e.remove()}g.on("mousedown",function(e){function q(a,b,c){var q=CKEDITOR.document,e=[];d.equals(q)||e.push(q.on(a,b));e.push(d.on(a,b));if(c)for(a=e.length;a--;)c.push(e.pop())}function k(){l=t+h*r;m=Math.round(l/n)}function o(){m=y-j;l=Math.round(m*n)}var f=a.parts.image,h="right"==a.data.align?
-1:1,p=e.data.$.screenX,u=e.data.$.screenY,t=f.$.clientWidth,y=f.$.clientHeight,n=t/y,w=[],z="cke_image_s"+(!~h?"w":"e"),x,l,m,v,r,j,s;c.fire("saveSnapshot");q("mousemove",function(a){x=a.data.$;r=x.screenX-p;j=u-x.screenY;s=Math.abs(r/j);1==h?0>=r?0>=j?k():s>=n?k():o():0>=j?s>=n?o():k():o():0>=r?0>=j?s>=n?o():k():o():0>=j?k():s>=n?k():o();15<=l&&15<=m?(f.setAttributes({width:l,height:m}),v=!0):v=!1},w);q("mouseup",function(){for(var d;d=w.pop();)d.removeListener();b.removeClass(z);g.removeClass("cke_image_resizing");
v&&(a.setData({width:l,height:m}),c.fire("saveSnapshot"));v=!1},w);b.addClass(z);g.addClass("cke_image_resizing")});a.on("data",function(){g["right"==a.data.align?"addClass":"removeClass"]("cke_image_resizer_left")})}function G(a){var c=[];return function(b){var d=a.getCommand("justify"+b);if(d){c.push(function(){d.refresh(a,a.elementPath())});if(b in{right:1,left:1,center:1})d.on("exec",function(d){var e=t(a);if(e){e.setData("align",b);for(e=c.length;e--;)c[e]();d.cancel()}});d.on("refresh",function(c){var d=
t(a),f={right:1,left:1,center:1};d&&(this.setState(d.data.align==b?CKEDITOR.TRISTATE_ON:b in f?CKEDITOR.TRISTATE_OFF:CKEDITOR.TRISTATE_DISABLED),c.cancel())})}}}function t(a){return(a=a.widgets.focused)&&"image"==a.name?a:null}var u='<img alt="" src="" />',H='<figure class="caption">'+u+"<figcaption>Caption</figcaption></figure>",F=/^\s*(\d+\%)\s*$/i;CKEDITOR.plugins.add("image2",{lang:"af,ar,bg,bn,bs,ca,cs,cy,da,de,el,en,en-au,en-ca,en-gb,eo,es,et,eu,fa,fi,fo,fr,fr-ca,gl,gu,he,hi,hr,hu,id,is,it,ja,ka,km,ko,ku,lt,lv,mk,mn,ms,nb,nl,no,pl,pt,pt-br,ro,ru,si,sk,sl,sq,sr,sr-latn,sv,th,tr,ug,uk,vi,zh,zh-cn",
requires:"widget,dialog",icons:"image",hidpi:!0,onLoad:function(){CKEDITOR.addCss(".cke_editable.cke_image_sw, .cke_editable.cke_image_sw *{cursor:sw-resize !important}.cke_editable.cke_image_se, .cke_editable.cke_image_se *{cursor:se-resize !important}.cke_image_resizer{display:none;position:absolute;width:10px;height:10px;bottom:-5px;right:-5px;background:#000;outline:1px solid #fff;line-height:0;cursor:se-resize;}.cke_image_resizer_wrapper{position:relative;display:inline-block;line-height:0;}.cke_image_resizer.cke_image_resizer_left{right:auto;left:-5px;cursor:sw-resize;}.cke_widget_wrapper:hover .cke_image_resizer,.cke_image_resizer.cke_image_resizing{display:block}")},
init:function(a){var c=a.config,b=a.lang.image2,d=A(a);c.filebrowserImage2BrowseUrl=c.filebrowserImageBrowseUrl;c.filebrowserImage2UploadUrl=c.filebrowserImageUploadUrl;d.pathName=b.pathName;d.editables.caption.pathName=b.pathNameCaption;a.widgets.add("image",d);a.ui.addButton&&a.ui.addButton("Image",{label:a.lang.common.image,command:"image",toolbar:"insert,10"});a.contextMenu&&(a.addMenuGroup("image",10),a.addMenuItem("image",{label:b.menu,command:"image",group:"image"}));CKEDITOR.dialog.add("image2",
this.path+"dialogs/image2.js")},afterInit:function(a){var c={left:1,right:1,center:1,block:1},a=G(a),b;for(b in c)a(b)}});CKEDITOR.plugins.image2={stateShifter:function(a){function c(a,b){return a.oldState?a.oldState[b]!==a.newState[b]:!1}function b(a,b){var c=g.createElement(a.activeEnterMode==CKEDITOR.ENTER_P?"p":"div",{styles:{"text-align":"center"}});d(c,b);b.move(c);return c}function d(b,c){if(c.getParent()){var d=a.createRange();d.moveToPosition(c,CKEDITOR.POSITION_BEFORE_START);c.remove();
e.insertElementIntoRange(b,d)}else b.replace(c)}var g=a.document,e=a.editable(),f=["hasCaption","align"],i={align:function(d,e,f){var g=d.newState.hasCaption,h=d.element;if(c(d,"align")){if(!g&&("center"==f&&(d.destroy(),d.element=b(a,h)),!c(d,"hasCaption")&&"center"==e&&"center"!=f))d.destroy(),e=h.findOne("img"),e.replace(h),d.element=e}else"center"==f&&(c(d,"hasCaption")&&!g)&&(d.destroy(),d.element=b(a,h));h.is("figure")&&("center"==f?h.setStyle("display","inline-block"):h.removeStyle("display"))},
hasCaption:function(a,b,e){if(c(a,"hasCaption"))if(b=a.element,a.destroy(),e){var e=b.findOne("img")||b,f=CKEDITOR.dom.element.createFromHtml(H,g);d(f,b);e.replace(f.findOne("img"));a.element=f}else e=b.findOne("img"),e.replace(b),a.element=e}};return function(a){for(var b=a.oldState,d=a.newState,c,e=0;e<f.length;e++)c=f[e],i[c](a,b?b[c]:null,d[c]);a.init(a.element)}},checkHasNaturalRatio:function(a){var c=a.$,a=this.getNatural(a);return Math.round(c.clientWidth/a.width*a.height)==c.clientHeight||
Math.round(c.clientHeight/a.height*a.width)==c.clientWidth},getNatural:function(a){if(a.$.naturalWidth)a={width:a.$.naturalWidth,height:a.$.naturalHeight};else{var c=new Image;c.src=a.getAttribute("src");a={width:c.width,height:c.height}}return a}}})();