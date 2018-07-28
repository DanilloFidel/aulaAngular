import { DAOInterface } from "./DAOInterface";
import Car from "./Car";
export class CarDAO implements DAOInterface {
  tableName: string = "name_dealership";
  insert(object: Car): boolean {
    //lógica de um insert
    console.log("logica de um INSERT");
    return true;
  }
  update(object: Car): boolean {
    console.log("logica UPDATE");
    return true;
  }
  remove(id: number): Car {
    console.log("logica REMOVE");
    return new Car("", 4);
  }
  select(id: number): Car {
    console.log("logica SELECT");
    return new Car("", 4);
  }
  selectAll(): [any] {
    console.log("SELECT *");
    return [new Car("", 4)];
  }
}
