import { Bird } from "./Task1/Bird";
import { Cat } from "./Task1/Cat";
import { Fish } from "./Task1/Fish";

import { Circle } from "./Task2/Circle";
import { Rectangle } from "./Task2/Rectangle";
import { Shape } from "./Task2/Shape";
import { Triangle } from "./Task2/Triangle";

import { BMW } from "./Task3/BMW";
import { Tesla } from "./Task3/Tesla";
import { Toyota } from "./Task3/Toyota";

import { Developer } from "./Task4/Developer";
import { Employee } from "./Task4/Employee";
import { Manager } from "./Task4/Manager";
import { Payable } from "./Task4/Payable";

import { CourseManager } from "./Task5/CourseManager";
import { OnlineCourse } from "./Task5/OnlineCourse";

import { Book } from "./Task6/Book";
import { DVD } from "./Task6/DVD";
import { Library } from "./Task6/Library";
import { Magazine } from "./Task6/Magazine";

function task1(): void {
    console.log("\n");
    console.log("Task 1 executed--------------------");
    
    const cat = new Cat("Eliza", 12);
    const bird = new Bird("chirik", 3);
    const fish = new Fish("bul'-bul'");

    cat.makeSound?.();
    cat.move();
    bird.makeSound?.();
    bird.move();
    fish.move();
}

function task2(): void {
    console.log("\n");
    console.log("Task 2 executed--------------------");
    const shapes: Shape[] = [
        new Circle(5),
        new Rectangle(4, 6),
        new Triangle(3, 4, 5)
    ];
    
    let totalArea = 0;
    let totalPerimeter = 0;
    
    shapes.forEach(shape => {
        totalArea += shape.getArea();
        totalPerimeter += shape.getPerimeter();
    });
    
    console.log(`Total area: ${totalArea.toFixed(2)}`);
    console.log(`Total perimeter: ${totalPerimeter.toFixed(2)}`);
}

function task3(): void {
    console.log("\n");
    console.log("Task 3 executed--------------------");

    const camry = new Toyota("Camry", 2021, "White", false);
    const corolla = new Toyota("Corolla", 2022, "Black", false);

    const bmwX5 = new BMW("X5", 2023, "Blue");
    const bmwX3 = new BMW("X3", 2021, "Red");

    const teslaModelS = new Tesla("Model S", 2022, "Silver");
    const teslaModelX = new Tesla("Model X", 2023, "Black");

    camry.displayDetails();
    corolla.displayDetails();

    bmwX5.displayDetails();
    bmwX3.displayDetails();

    teslaModelS.displayDetails();
    teslaModelX.displayDetails();

}

function task4(): void {
    console.log("\n");
    console.log("Task 4 executed--------------------");

    function isPayable(object: any): object is Payable {
        return 'pay' in object;
    }    

    const employees: Employee[] = [
        new Developer("Andriy", 30, 60000),
        new Developer("Bob", 25, 55000),
        new Manager("Tanya", 45, 80000),
        new Manager("Oleg", 40, 75000)
    ];
    
    let totalAnnualBonus = 0;
    
    employees.forEach(employee => {
        totalAnnualBonus += employee.getAnnualBonus();
        if (isPayable(employee)) {
            employee.pay();
        }
    });
    
    console.log(`Total annual bonus for all employees: ${totalAnnualBonus.toFixed(2)}`);
    
}

function task5(): void {
    console.log("\n");
    console.log("Task 5 executed--------------------");

    const course1 = new OnlineCourse("TypeScript Basics", 10);
    const course2 = new OnlineCourse("Advanced TypeScript", 12);
    const course3 = new OnlineCourse("JavaScript for Beginners", 8);

    course1.registerStudent("Andriy");
    course1.registerStudent("Bob");
    course2.registerStudent("Andriy");
    course3.registerStudent("Tanya");
    course3.registerStudent("Oleg");

    const courseManager = new CourseManager();

    courseManager.addCourse(course1);
    courseManager.addCourse(course2);
    courseManager.addCourse(course3);

    courseManager.listCourses();

    courseManager.removeCourse("Advanced TypeScript");
    console.log("After removing 'Advanced TypeScript':");
    courseManager.listCourses();

}

function task6(): void {
    console.log("\n");
    console.log("Task 6 executed--------------------");

    const library = new Library();

    const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 180);
    const magazine1 = new Magazine("National Geographic", "Various", 202);
    const dvd1 = new DVD("Inception", "Christopher Nolan", 148);

    library.addItem(book1);
    library.addItem(magazine1);
    library.addItem(dvd1);

    console.log("Available items:");
    library.listAvailableItems();

    const itemToBorrow = library.findItemByName("Inception");
    if (itemToBorrow) {
        itemToBorrow.borrow();
        library.listAvailableItems();
    }

}

task1();
task2();
task3();
task4();
task5();
task6();