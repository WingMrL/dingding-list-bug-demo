import { observable, action } from 'mobx'

export interface IListItem {
  id: string;
  value: string;
}

let index: number = 0;

export const genData = () => {
  const list: IListItem[] = [];
  for(let i = index; i < index + 10; i ++) {
    list.push({
      id: `id-${i}`,
      value: `value-${i}`
    });
  }
  index += 10;
  return list;
}

class IndexStore {
  @observable list: IListItem[] = [];

  @action
  setList = (list: IListItem[]) => {
    this.list = [
      ...this.list,
      ...list
    ];
  }
}

export const indexStore = new IndexStore();