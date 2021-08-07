type Item = {
  id: string;
};

export const findItemIndexById = <TItem extends Item>(
  array: TItem[],
  id: string
) => {
  return array.findIndex((item: Item) => item.id === id);
};

// [1,2,3]
export const moveItem = <TItem>(array: TItem[], from: number, to: number) => {
  const item = array[from];
  return insertItem(removeItem(array, from), item, to);
};

export const removeItem = <TItem>(array: TItem[], from: number) => {
  return [...array.slice(0, from), ...array.slice(from + 1)];
};

export const insertItem = <TItem>(
  array: TItem[],
  item: TItem,
  index: number
) => {
  return [...array.slice(0, index), item, ...array.slice(index)];
};
