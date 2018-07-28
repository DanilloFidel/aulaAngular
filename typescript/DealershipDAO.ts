import { DAOInterface } from "./DAOInterface";
import Dealership from "./Dealership";
export class DealershipDAO implements DAOInterface {
  tableName: string = "name_dealership";
  insert(object: Dealership): boolean {
    //lógica de um insert
    console.log("logica de um INSERT");
    return true;
  }
  update(object: Dealership): boolean {
    console.log("logica UPDATE");
    return true;
  }
  remove(id: number): Dealership {
    console.log("logica REMOVE");
    return new Dealership("", []);
  }
  select(id: number): Dealership {
    console.log("logica SELECT");
    return new Dealership("", []);
  }
  selectAll(): [any] {
    console.log("SELECT *");
    return [new Dealership("", [])];
  }
}
