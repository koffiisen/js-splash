## Classes

<dl>
<dt><a href="#Splash">Splash</a></dt>
<dd><p>Abstract class representing a splash screen animation.</p>
</dd>
</dl>

## Typedefs

<dl>
<dt><a href="#animator">animator</a> : <code>object</code></dt>
<dd></dd>
<dt><a href="#SVGAnimation">SVGAnimation</a> : <code>object</code></dt>
<dd></dd>
<dt><a href="#styler">styler</a> : <code>object</code></dt>
<dd></dd>
<dt><a href="#FancyAnimation">FancyAnimation</a> : <code>object</code></dt>
<dd></dd>
</dl>

<a name="Splash"></a>

## Splash
Abstract class representing a splash screen animation.

**Kind**: global class  
**Link**: https://github.com/koffiisen/js-splash  
**Version**: 2.0  
**Author**: Koffi Joel ONIPOH <koffi_joel.onipoh@isen.yncrea.fr>  
**Copyright**: © 2019-2020  

* [Splash](#Splash)
    * [new Splash(style, anim_options)](#new_Splash_new)
    * [.fromText(text, duration, option)](#Splash+fromText)
    * [.fromHtml(html, duration, option)](#Splash+fromHtml)
    * [.fromImage(image, duration, option)](#Splash+fromImage)
    * [.fromCustomNode(node, duration, option)](#Splash+fromCustomNode)
    * [.fromCSSAnimation(css_file, html, remove_css, duration)](#Splash+fromCSSAnimation)
    * [.indeterminateLoad(splash, callback)](#Splash+indeterminateLoad) ⇒ <code>function</code>
    * [.fromAnimation(animation, animation_time, options)](#Splash+fromAnimation)

<a name="new_Splash_new"></a>

### new Splash(style, anim_options)

| Param | Type |
| --- | --- |
| style | [<code>styler</code>](#styler) | 
| anim_options | [<code>animator</code>](#animator) | 

**Example** *(Get started - Create instance example)*  
```js
// Instance
var splash = new Splash()
```
**Example**  
```js
// Or instance with custom parametervar splash = new Splash({background: 'rgba(0, 0, 0, 0.7)'}, {
        use: true,
        start: FancyAnimation.moveIn,
        end: FancyAnimation.rubberBand
    });
```
<a name="Splash+fromText"></a>

### splash.fromText(text, duration, option)
**Kind**: instance method of [<code>Splash</code>](#Splash)  

| Param | Type |
| --- | --- |
| text | <code>String</code> | 
| duration | <code>Number</code> | 
| option | <code>Object</code> | 

**Example**  
```js
// default callsplash.fromText("MY SPLAH SCREEN");
```
**Example**  
```js
// or with custom parametersplash.fromText("SPLASH SCREEN", 5000, {
        color: 'red',
        'font-family': 'fantasy'
    })
```
<a name="Splash+fromHtml"></a>

### splash.fromHtml(html, duration, option)
**Kind**: instance method of [<code>Splash</code>](#Splash)  
**Link**: https://codepen.io/koffiisen/pen/YzPZpBx  

| Param | Type |
| --- | --- |
| html | <code>String</code> | 
| duration | <code>Number</code> | 
| option | <code>Object</code> | 

**Example**  
```js
// default callsplash.fromHtml("<h3 style='color: #e0a800'>HTML SPLASH</h3>");
```
**Example**  
```js
// or with custom parametersplash.fromText("<h3>HTML SPLASH</h3>", 5000, {
        color: 'red',
        'font-family': 'fantasy'
    })
```
<a name="Splash+fromImage"></a>

### splash.fromImage(image, duration, option)
**Kind**: instance method of [<code>Splash</code>](#Splash)  
**Link**: https://codepen.io/koffiisen/pen/xxbqgbg  

| Param | Type |
| --- | --- |
| image | <code>String</code> | 
| duration | <code>Number</code> | 
| option | <code>Object</code> | 

**Example**  
```js
//=> url | base64 => based on html <img>splash.fromImage("https://s3.amazonaws.com/cdn.wp.m4ecnet/wp-content/uploads/2018/06/05041237/GitHub-logo-2-imagen.jpg", 5000, {
    width: '130px',
    height: '130px',
    'border-radius': '20%'
    });
```
<a name="Splash+fromCustomNode"></a>

### splash.fromCustomNode(node, duration, option)
**Kind**: instance method of [<code>Splash</code>](#Splash)  
**Link**: https://codepen.io/koffiisen/pen/PowpWqd  

| Param | Type | Description |
| --- | --- | --- |
| node | <code>Node</code> | => Ex: document.createElement('div'); |
| duration | <code>Number</code> |  |
| option | <code>Object</code> |  |

**Example**  
```js
var custom_node = document.createElement("div");
 custom_node.style.display = 'grid';

 var text = document.createElement("strong");
 text.innerText = "SPLASH";
 text.style.padding = "25px";

 var img = document.createElement("img");
 img.src = "https://s3.amazonaws.com/cdn.wp.m4ecnet/wp-content/uploads/2018/06/05041237/GitHub-logo-2-imagen.jpg";
 Object.assign(img.style, {
                width: '100px',
                height: '100px',
                'border-radius': '50%'
            });

 custom_node.appendChild(img);
 custom_node.appendChild(text);

 splash.fromCustomNode(custom_node, 5000, {
                color: 'red',
                'font-family': 'fantasy'
            });
```
<a name="Splash+fromCSSAnimation"></a>

### splash.fromCSSAnimation(css_file, html, remove_css, duration)
#codepen = https://codepen.io/koffiisen/pen/wvBJgKR

**Kind**: instance method of [<code>Splash</code>](#Splash)  
**Link**: https://codepen.io/koffiisen/pen/wvBJgKR  

| Param | Type |
| --- | --- |
| css_file | <code>String</code> | 
| html | <code>String</code> | 
| remove_css | <code>boolean</code> | 
| duration | <code>number</code> | 

**Example**  
```js
splash.fromCSSAnimation("custom-anim.css","<div id="loader-wrapper"><div id="loader"></div></div>");
```
<a name="Splash+indeterminateLoad"></a>

### splash.indeterminateLoad(splash, callback) ⇒ <code>function</code>
**Kind**: instance method of [<code>Splash</code>](#Splash)  
**Returns**: <code>function</code> - - to stop animation  
**Link**: https://codepen.io/koffiisen/pen/OJPpWMa  

| Param | Type |
| --- | --- |
| splash | <code>function</code> | 
| callback | <code>function</code> | 

**Example**  
```js
var indeterminate = () => {
    //splash.fromText("<h3 style='color: #e0a800'>CUSTOM SPLASH</h3>")
    splash.fromCSSAnimation('custom-anim.css',
        '<div id="loader-wrapper">\n' +
        '     <div id="loader"></div>\n' +
        '</div>', false
    );
};

 splash.indeterminateLoad(indeterminate, function (callback) {
    var stop = callback;
    console.log(self);
    setTimeout(function () {
        console.log("stop execute");
        stop();
    }, 12000);
});
```
<a name="Splash+fromAnimation"></a>

### splash.fromAnimation(animation, animation_time, options)
**Kind**: instance method of [<code>Splash</code>](#Splash)  
**Since**: 2.0  

| Param | Type |
| --- | --- |
| animation | [<code>SVGAnimation</code>](#SVGAnimation) | 
| animation_time | <code>Number</code> | 
| options | [<code>styler</code>](#styler) | 

**Example** *(Pre build svg animation from {@link SVGAnimation} )*  
```js
// sample use
splash.fromAnimation(SVGAnimation.Rotate, 3000, {background: 'transparent'});
```
<a name="animator"></a>

## animator : <code>object</code>
**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| use | <code>boolean</code> | Indicate if use animation (default: true) |
| start | [<code>FancyAnimation</code>](#FancyAnimation) | started animation (default: FancyAnimation.moveIn) |
| end | [<code>FancyAnimation</code>](#FancyAnimation) | ending animation (default: FancyAnimation.rubberBand) |
| duration | <code>Number</code> | (default: 900) |

<a name="SVGAnimation"></a>

## SVGAnimation : <code>object</code>
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| FillRotate | <code>string</code> | 
| SemiRotate | <code>string</code> | 
| Rotate | <code>string</code> | 
| TopBar | <code>string</code> | 
| CenterBar | <code>string</code> | 
| Dalton | <code>string</code> | 
| Flag | <code>string</code> | 
| Bolt | <code>string</code> | 
| Orbit | <code>string</code> | 


* [SVGAnimation](#SVGAnimation) : <code>object</code>
    * [.FillRotate()](#SVGAnimation.FillRotate) ⇒ <code>string</code>
    * [.SemiRotate()](#SVGAnimation.SemiRotate) ⇒ <code>string</code>
    * [.Rotate()](#SVGAnimation.Rotate) ⇒ <code>string</code>
    * [.TopBar()](#SVGAnimation.TopBar) ⇒ <code>string</code>
    * [.CenterBar()](#SVGAnimation.CenterBar) ⇒ <code>string</code>
    * [.Dalton()](#SVGAnimation.Dalton) ⇒ <code>string</code>
    * [.Flag()](#SVGAnimation.Flag) ⇒ <code>string</code>
    * [.Bolt()](#SVGAnimation.Bolt) ⇒ <code>string</code>
    * [.Orbit()](#SVGAnimation.Orbit) ⇒ <code>string</code>

<a name="SVGAnimation.FillRotate"></a>

### SVGAnimation.FillRotate() ⇒ <code>string</code>
**Kind**: static method of [<code>SVGAnimation</code>](#SVGAnimation)  
<a name="SVGAnimation.SemiRotate"></a>

### SVGAnimation.SemiRotate() ⇒ <code>string</code>
**Kind**: static method of [<code>SVGAnimation</code>](#SVGAnimation)  
<a name="SVGAnimation.Rotate"></a>

### SVGAnimation.Rotate() ⇒ <code>string</code>
**Kind**: static method of [<code>SVGAnimation</code>](#SVGAnimation)  
<a name="SVGAnimation.TopBar"></a>

### SVGAnimation.TopBar() ⇒ <code>string</code>
**Kind**: static method of [<code>SVGAnimation</code>](#SVGAnimation)  
<a name="SVGAnimation.CenterBar"></a>

### SVGAnimation.CenterBar() ⇒ <code>string</code>
**Kind**: static method of [<code>SVGAnimation</code>](#SVGAnimation)  
<a name="SVGAnimation.Dalton"></a>

### SVGAnimation.Dalton() ⇒ <code>string</code>
**Kind**: static method of [<code>SVGAnimation</code>](#SVGAnimation)  
<a name="SVGAnimation.Flag"></a>

### SVGAnimation.Flag() ⇒ <code>string</code>
**Kind**: static method of [<code>SVGAnimation</code>](#SVGAnimation)  
<a name="SVGAnimation.Bolt"></a>

### SVGAnimation.Bolt() ⇒ <code>string</code>
**Kind**: static method of [<code>SVGAnimation</code>](#SVGAnimation)  
<a name="SVGAnimation.Orbit"></a>

### SVGAnimation.Orbit() ⇒ <code>string</code>
**Kind**: static method of [<code>SVGAnimation</code>](#SVGAnimation)  
<a name="styler"></a>

## styler : <code>object</code>
**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| background | <code>string</code> |  |
| opacity | <code>Number</code> | (default: 1.0) |
| width | <code>string</code> | (default: "100%") |
| height | <code>string</code> | (default: "100%") |
| color | <code>string</code> |  |

<a name="FancyAnimation"></a>

## FancyAnimation : <code>object</code>
**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| rollOutRight: | <code>string</code> | "rollOutRight. |
| rollOutLeft: | <code>string</code> | "rollOutLeft", |
| rubberBand: | <code>string</code> | "rubberBand", |
| zoomOut: | <code>string</code> | "zoomOut", |
| zoomIn: | <code>string</code> | "zoomIn", |
| fadeOut: | <code>string</code> | "fadeOut", |
| fadeOutRight: | <code>string</code> | "fadeOutRight", |
| fadeOutLeft: | <code>string</code> | "fadeOutLeft", |
| fadeOutTop: | <code>string</code> | "fadeOutTop", |
| fadeOutBottom: | <code>string</code> | "fadeOutBottom", |
| horizontalFlip: | <code>string</code> | "horizontalFlip", |
| verticalFlip: | <code>string</code> | "verticalFlip", |
| bounceOutBottom: | <code>string</code> | "bounceOutBottom", |
| bounceOutTop: | <code>string</code> | "bounceOutTop", |
| bounceOutLeft: | <code>string</code> | "bounceOutLeft", |
| bounceOutRight: | <code>string</code> | "bounceOutRight", |
| rotateClockwise: | <code>string</code> | "rotateClockwise", |
| rotateAntiClockwise: | <code>string</code> | "rotateAntiClockwise", |
| tada: | <code>string</code> | "tada", |
| moveIn: | <code>string</code> | "moveIn", |
| moveOut: | <code>string</code> | "moveOut", |
| swing: | <code>string</code> | "swing", |
| shake: | <code>string</code> | "shake", |
| hinge: | <code>string</code> | "hinge" |

