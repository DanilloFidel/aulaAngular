import { DealershipDAO } from "./DealershipDAO";
import { PeopleDAO } from "./PeopleDAO";
import { MotorbykeDAO } from "./MotoDAO";
import { CarDAO } from "./CarDAO";
import Dealership from "./Dealership";
import People from "./People";
import Car from "./Car";
import Motorbyke from "./Moto";

let dao: DealershipDAO = new DealershipDAO();
let dao2: PeopleDAO = new PeopleDAO();
let dao3: CarDAO = new CarDAO();
let dao4: MotorbykeDAO = new MotorbykeDAO();
let cc1 = new Dealership("Joao XVIII", []);
let p1 = new People("José", "Mustang");
let m1 = new Motorbyke(150);
let car1 = new Car("Fusca", 4);

dao.insert(cc1);
dao2.update(p1);
dao3.insert(car1);
dao4.update(m1);
