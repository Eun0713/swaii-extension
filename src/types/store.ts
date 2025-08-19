export type GetId<Item> = (item: Item) => string;

export type Stored<Item> = Item & { createdAt?: string };

export interface Store<Item> {
  getAll(): Promise<Stored<Item>[]>;
  hasItem(target: Item): Promise<boolean>;
  save(item: Item): Promise<boolean>;
  remove(target: Item): Promise<void>;
  update(original: Item, updated: Item): Promise<void>;
  setAll(newList: Stored<Item>[]): Promise<void>;
}
