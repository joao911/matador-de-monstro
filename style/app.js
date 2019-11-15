new Vue ({
    el:'#app',
    data:{
      running:false,
      playerLife:100,
      monsterLife:10
    },
    methods:{
      hasResoult(){
        return this.playerLife ==0 || this.monsterLife ==0;
      },
      startGame(){
        this.running = true
        this.playerLife = 100
        this.monsterLife =100
      },
      attack(especial){
        console.log(especial , this.getRandom) (5 ,10 )
      },
      getRandom(max, min){
        const value = Math.random() * (max - min) + min
        return Math.round(value)
      }
    },
    watch:{

    }
    
})