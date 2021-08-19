import React, { ElementType } from 'react';

import { FlexView, TEXT, View } from '../../elements';
interface PropsSkil {
  course: string;
  percent: string;
}

const Skil: ElementType = (props: PropsSkil) => {
  return (
    <View>
      <FlexView
        display="flex"
        justifyContent="space-between"
        margin="12px 0px 5px"
      >
        <TEXT>{props.course}</TEXT> <TEXT>{props.percent}</TEXT>
      </FlexView>
      <View bg="silver" height="5px">
        <View bg="blue" height="5px" width={props.percent}></View>
      </View>
    </View>
  );
};

export default Skil;
