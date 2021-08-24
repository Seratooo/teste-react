import React, { FC } from 'react';

import { FlexView, Text, View } from '../../elements';
import { SkillProps } from './about-section.types';

const Skill: FC<SkillProps> = ({ course, percent }) => (
  <View>
    <FlexView display="flex" justifyContent="space-between">
      <Text>{course}</Text> <Text>{percent}</Text>
    </FlexView>
    <View bg="silver" height="0.3rem">
      <View bg="blue" height="0.3rem" width={percent}></View>
    </View>
  </View>
);

export default Skill;
