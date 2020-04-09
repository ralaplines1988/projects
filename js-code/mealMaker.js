const menu = {
  _courses : {
    appetizers:[],
    mains:[],
    desserts:[]
  }, 
  addDishToCourse(courseName,dishName,dishPrice){
    const dish = {
      name: dishName,
      price: dishPrice
    };
    this._courses[courseName].push(dish);
    return this._courses[courseName];
  },
  getRandomDishFromCourse(courseName){
    const dishes = menu._courses[courseName];
    const index = Math.floor(Math.random()*dishes.length);
    const {name, price} = dishes[index];
    return {name,price}; 
  },
  generateRandomMeal(){
    const appetizer = menu.getRandomDishFromCourse("appetizers");
    const main = menu.getRandomDishFromCourse("mains");
    const dessert = menu.getRandomDishFromCourse("desserts");
    const totalPrice = Number(appetizer["price"])+Number(main["price"])+Number(dessert["price"]); //get price from {name, price} object of _courses 
    return `Appetizer: ${appetizer.name},\nMain: ${main.name},\nDessert: ${dessert.name},\n\nTotal: $${totalPrice}`;
  },
  // for getting all courses
  get courses(){
    return{
      appetizers: this._courses.appetizers,
      mains:this._courses.mains,
      desserts:this._courses.desserts,
    };
  }, 
  get appetizers(){
    return this._courses.appetizers;
  },
  /*set appetizers(appetizersIn){
    this._courses.appetizers = appetizerIn;
  },*/
  get mains(){
    return this._courses.mains;
  },
  /*set mains(mainsIn){
    this._courses.mains = mainsIn;
  },*/
  get desserts(){
    return this._courses.desserts;
  },
  /*set desserts(dessertsIn){
    this._courses.desserts = dessertsIn;
  },*/
};
menu.addDishToCourse("mains","Fish","500");
menu.addDishToCourse("mains","Meat","1500");
menu.addDishToCourse("mains","Chicken","1200");
menu.addDishToCourse("appetizers","Vegetable","500");
menu.addDishToCourse("appetizers","Fruit","1500");
menu.addDishToCourse("appetizers","Salad","1200");
menu.addDishToCourse("desserts","Tea","500");
menu.addDishToCourse("desserts","pudding","1500");
menu.addDishToCourse("desserts","vanilla","1200");

const meal = menu.generateRandomMeal();
console.log(meal);