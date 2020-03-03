STYLE = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    'z-index': 1000,
    'background': 'black',
    opacity: 1.0,
    transition: 'opacity 2s ease',
};

DEFAULT = {
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    width: 'auto',
    height: 'auto',
    color: 'white'
};

/**
 * @github https://github.com/koffiisen/js-splash
 * @param {Object} style | background: color | url("https://image.png")
 * @constructor
 */
var Splash = function (style = {}) {
    this.body = document.body;
    this.display = this.body.style.display;
    this.indeterminate = false;

    this.splash = document.createElement("div");
    this.splash.className = "js-splash";

    if (style != null) {
        Object.keys(style).map(function (key, index) {
            STYLE[key] = style[key];
        });
    }

    Object.assign(this.splash.style, STYLE);

    this.__init = function (element, animation_time = 3000, option = {}) {
        let self = this;

        self.body.style.display = 'none';

        if (option != null) {
            Object.keys(option).map(function (key, index) {
                DEFAULT[key] = option[key];
            });
        }

        Object.assign(element.style, DEFAULT);
        this.splash.appendChild(element);

        this.body.appendChild(this.splash);
        self.body.style.display = self.display;

        setTimeout(function () {

            if (!self.indeterminate) {
                self.splash.addEventListener("transitionend", function () {
                    self.splash.style.display = "none";
                }, true);
                // Kick off the CSS transition
                self.splash.style.opacity = 0.0;
                document.body.removeChild(self.splash);
            }

        }, animation_time);
    }
};

/**
 * #codepen = https://codepen.io/koffiisen/pen/YzPZpBx
 * @param {String} text
 * @param {Number} duration
 * @param {Object} option
 */
Splash.prototype.fromText = function (text, duration = 3000, option = {}) {
    let self = this;

    var loader = document.createElement("div");
    loader.innerText = text;

    self.__init(loader, duration, option);
};

/**
 * #codepen = https://codepen.io/koffiisen/pen/YzPZpBx
 * @param {String} html => Ex: <h3 style='color: #e0a800'>CUSTOM SPLASH</h3>
 * @param {Number} duration
 * @param {Object} option
 */
Splash.prototype.fromHtml = function (html, duration = 3000, option = {}) {
    let self = this;

    var loader = document.createElement("div");
    loader.innerHTML = html;

    self.__init(loader, duration, option);
};

/**
 * #codepen = https://codepen.io/koffiisen/pen/xxbqgbg
 * @param {String} image => url | base64 => based on html <img>
 * @param {Number} duration
 * @param {Object} option
 */
Splash.prototype.fromImage = function (image, duration = 3000, option = {}) {
    let self = this;

    var loader = document.createElement("img");
    loader.src = image;

    self.__init(loader, duration, option);
};

/**
 * #codepen = https://codepen.io/koffiisen/pen/PowpWqd
 * @param {Node} node => Ex: document.createElement('div');
 * @param {Number} duration
 * @param {Object} option
 */
Splash.prototype.fromCustomNode = function (node, duration = 3000, option = {}) {
    let self = this;
    self.__init(node, duration, option);
};

/**
 * #codepen = https://codepen.io/koffiisen/pen/wvBJgKR
 * @param {String} css_file => custom-anim.css
 * @param {String} html => Ex : <div id="loader-wrapper"><div id="loader"></div></div>
 * @param {boolean} remove_css
 * @param {number} duration
 */
Splash.prototype.fromCSSAnimation = function (css_file, html, remove_css = true, duration = 3000) {
    let self = this;

    function loadCss(cf) {
        let head = document.getElementsByTagName('head')[0];
        let style = document.createElement('link');
        style.href = cf;
        style.type = 'text/css';
        style.rel = 'stylesheet';
        style.id = "styles-animations";
        head.append(style);
    }

    loadCss(css_file);

    self.fromHtml(html, duration);
    if (remove_css) {
        setTimeout(function () {
            document.head.removeChild(document.getElementById('styles-animations'));
        }, duration - 200);
    }

};

/**
 * #codepen = https://codepen.io/koffiisen/pen/OJPpWMa
 * @param {Function} splash
 * @param {Function} callback
 * @returns {*}
 */
Splash.prototype.indeterminateLoad = function (splash, callback) {
    let self = this;
    self.indeterminate = true;
    setTimeout(function () {
        splash();
        console.log("start indeterminate");
    }, 200);

    function stop() {
        self.indeterminate = false;
        self.splash.addEventListener("transitionend", function () {
            self.splash.style.display = "none";
        }, true);
        // Kick off the CSS transition
        self.splash.style.opacity = 0.0;
        document.body.removeChild(self.splash);
    }

    return callback(stop);
};