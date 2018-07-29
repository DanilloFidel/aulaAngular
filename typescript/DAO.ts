import { DAOInterface } from "./DAOInterface";

export class Dao<T> implements DAOInterface<T> {
  tableName: string = "name_dealership";
  insert(object: T): boolean {
    //lógica de um insert
    console.log("logica de um INSERT");
    return true;
  }
  update(object: T): boolean {
    console.log("logica UPDATE");
    return true;
  }
  remove(id: number): T {
    console.log("logica REMOVE");
    return Object();
  }
  select(id: number): T {
    console.log("logica SELECT");
    return Object()
  }
  selectAll(): [any] {
    console.log("SELECT *");
    return [Object()];
  }
}
