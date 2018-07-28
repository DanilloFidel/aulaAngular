import { DAOInterface } from "./DAOInterface";

export class Dao<T> implements DAOInterface<T> {
  tableName: string = "name_dealership";
  insert(object: People): boolean {
    //lógica de um insert
    console.log("logica de um INSERT");
    return true;
  }
  update(object: People): boolean {
    console.log("logica UPDATE");
    return true;
  }
  remove(id: number): People {
    console.log("logica REMOVE");
    return new People("", "");
  }
  select(id: number): People {
    console.log("logica SELECT");
    return new People("", "");
  }
  selectAll(): [any] {
    console.log("SELECT *");
    return [new People("", "")];
  }
}
