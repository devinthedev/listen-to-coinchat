function Chat(user, message) {
    Floatable.call(this);
    
    this.width = this.height = 100;
    this.width = 250;
    this.addImage(blockImage, this.width, this.height);
    this.addText(user + ': ' + message);
    this.initPosition();
    Sound.playRandomAtVolume(0.5);
    // Sound
    
}

extend(Floatable, Chat);
