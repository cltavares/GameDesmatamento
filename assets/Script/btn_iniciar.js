cc.Class({
    extends: cc.Component,

    // use this for initialization
    onLoad: function () {
        cc.director.preloadScene('Floresta');
        
        this.node.on('touchend', function(){
            cc.director.loadScene('Floresta');
        });

    },


});
