import { DAOInterface } from "./DAOInterface";
import Motorbyke from "./Moto";
export class MotorbykeDAO implements DAOInterface {
  tableName: string = "name_dealership";
  insert(object: Motorbyke): boolean {
    //lógica de um insert
    console.log("logica de um INSERT");
    return true;
  }
  update(object: Motorbyke): boolean {
    console.log("logica UPDATE");
    return true;
  }
  remove(id: number): Motorbyke {
    console.log("logica REMOVE");
    return new Motorbyke(150);
  }
  select(id: number): Motorbyke {
    console.log("logica SELECT");
    return new Motorbyke(150);
  }
  selectAll(): [any] {
    console.log("SELECT *");
    return [new Motorbyke(150)];
  }
}
