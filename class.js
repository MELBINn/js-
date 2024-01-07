class Polygon {
    constructor(height, width) {
      this. area = height * width;
    }
  }
  
  console.log(new Polygon(4, 3).area);
  // Expected output: 12

  //new Polygon(4, 3) creates a new instance of the Polygon class, and .area accesses the area property of that specific instance,
  // which was calculated using the provided height and width parameters.
  //the use of this in the constructor allows each instance of the Polygon class
  // to have its own area property, calculated based on the specific height and width values passed during its creation.
