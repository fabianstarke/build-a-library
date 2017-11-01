class Media {
  constructor(title){
    this._title = 'title';
    this._isChecekdOut = false;
    this._ratings = [];
  }

  get title() {
    return this._title;
  }

  get isCheckedOut(){
    return this._isChecekdOut;
  }

  get ratings(){
    return this.ratings;
  }

  getAverageRating(){

  }

  toggleCheckedOutStatus(){
    this._isChecekdOut =!this._isChecekdOut;
  }

  addRating(newRating){
    this._ratings.push(newRating);
  }

};

class Book extends Media {
  constructor(author, title, pages){
    super(title);
    this._author = 'author';
    this._pages = 0;
  }

  get author(){
    return this._author;
  }

  get pages(){
    return this._pages;
  }

}

class Movie extends Media {
  constructor(director, title, runTime){
    super(title);
    this._director = 'director';
    this._runTime = 0;
  }

  get director(){
    return this._director;
  }

  get runTime(){
    return this._runTime;
  }

}

class CD extends Media {
  constructor(artist, songs){
    super(title);
    this._artist = 'artist';
    this._songs = [' '];
  }

  get artist(){
    return this._artist;
  }

  get songs(){
    return this._songs;
  }

}

const historyOfEverything = new Book("Bill Bryson", "A Short History of Nearly Everything", 544);

historyOfEverything.toggleCheckedOutStatus();
console.log(historyOfEverything.isCheckedOut);

historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5)

historyOfEverything.getAverageRating();
console.log(historyOfEverything.getAverageRating());

const speed = new Movie("Jan de Bont", "speed", 116);

speed.toggleCheckedOutStatus();
console.log(speed.isCheckedOut);

speed.addRating(1);
speed.addRating(1);
speed.addRating(5);

speed.getAverageRating();
console.log(speed.getAverageRating());
