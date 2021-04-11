cc.Class({
    extends: cc.Component,

    properties: {
        bacground: {
            default: null,
            type: cc.Node
        },
        scoreLabel:{
            default: null,
            type: cc.Label
        },
        lifeLabel:{
            default: null,
            type: cc.Label
        },
        score: 0,
        maxLife: 0,
        isLaunch: false

    },

    // use this for initialization
    onLoad: function () {
        var self = this;
        //dá uma pausa de Int16Array s
        self.scheduleOnce(function() {
            self.initGame();
        }, 1);
    },
    
    initGame: function(){
        this.life = this.maxLife;
        
        this.score = 0;
        this.lifeLabel.string = "x "+ this.life;
        
        this.isLaunch = true;
    }
    

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
