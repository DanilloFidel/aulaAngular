export interface DAOInterface<T> {
  tableName: string;
  // ---------- INTERFACE NÃO IMPLEMENTA LÓGICA, APENAS DEFINE OQUE AS CLASSES DEVEM USAR ------------------------------
  insert(object: T): boolean;
  update(object: T): boolean;
  remove(id: number): T;
  select(id: number): T;
  selectAll(): [T];
}
