Page({
  data: {
    count: 0,
    list: [],
  },
  handleInitData() {
    const list = this.genData();
    this.setData({
      list: [...this.data.list, ...list ]
    });
  },
  genData() {
    const list = [];
    const index = this.data.count;
    for(let i = index; i < index + 10; i ++) {
      list.push({
        id: `id-${i}`,
        value: `value-${i}`
      });
    }
    this.setData({
      count: index + 10
    });
    return list;
  }
});