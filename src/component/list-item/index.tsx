import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'

import './index.scss'

interface IListItemProps {
  value: string;
}

class ListItem extends Component<IListItemProps> {

  render () {
    const { value } = this.props;
    return (
      <View className='list-item'>值为：{value}</View>
    )
  }
}

export default ListItem
