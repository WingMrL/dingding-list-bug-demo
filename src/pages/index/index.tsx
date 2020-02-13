import { ComponentType } from 'react'
import Taro, { Component, Config } from '@tarojs/taro'
import { View, ScrollView, Button } from '@tarojs/components'
import { observer } from '@tarojs/mobx'

import ListItem from '../../component/list-item/index';
import { IListItem, indexStore, genData } from '../../store/index';

import './index.scss'


@observer
class Index extends Component {

  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    navigationBarTitleText: '首页'
  }

  handleInitData = async () => {
    console.log('数据获取中');
    const resp = await new Promise<IListItem[]>((resolve, reject) => {
      setTimeout(() => {
        const list = genData();
        resolve(list);
      }, 50);
    });
    console.log('数据获取 ok');
    indexStore.setList(resp);
  }

  render () {
    const { list } = indexStore;
    return (
      <View className='index'>
        <Button onClick={this.handleInitData}>加载数据</Button>
        <ScrollView
          className='scroll-view'
          onScrollToLower={this.handleInitData}
          scrollY
        >
          {
            list.map((item) => {
              const { id, value } = item;
              return (
                <ListItem key={id} value={value}></ListItem>
              );
            })
          }
        </ScrollView>
      </View>
    )
  }
}

export default Index  as ComponentType
