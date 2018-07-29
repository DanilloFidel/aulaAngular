import { Dao } from "./DAO";
import Dealership from "./Dealership";
import People from "./People";
import Car from "./Car";
import Motorbyke from "./Moto";


let cc1 = new Dealership("Joao XVIII", []);
let p1 = new People("José", "Mustang");
let m1 = new Motorbyke(150);
let car1 = new Car("Fusca", 4);

let dao3: Dao<People> = new Dao<People>();

dao3.insert(p1);
