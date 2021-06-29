class Form{

    constructor(){}

    
    display(){
        this.title=createElement("h2")
        this.title.html("CAR RACING GAME");
        this.title.position(130,200);

        this.input= createInput("Name");
        this.input.position(160,250);

        this.button= createButton("Play");
        this.button.position(230,300);
    
        this.button.mousePressed( ()=>{
            this.input.hide();
            this.button.hide();

            var name= this.input.value();

            this.greetings= createElement("h1");
            this.greetings.html("Hi "+ name);
            this.greetings.position(150,300)
        })     
    }



}