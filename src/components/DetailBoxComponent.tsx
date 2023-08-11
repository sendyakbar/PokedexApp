import React, {Fragment} from 'react';
import {StyleSheet, View, ViewStyle} from 'react-native';

import InfoRow from '../base/InfoRow';
import Separator from '../base/Separator';

type ItemDataType = {
  label: string;
  value: string;
};

type Props = {
  data: ItemDataType[];
};

export default function DetailBoxComponent(props: Props): JSX.Element {
  const {data} = props;

  return (
    <View style={styles.container}>
      {data.map((d: ItemDataType, i: number) => (
        <Fragment key={i}>
          <InfoRow label={d.label} value={d.value} />
          {i !== data.length - 1 ? <Separator /> : null}
        </Fragment>
      ))}
    </View>
  );
}

type StyleType = {
  container: ViewStyle;
};

const styles = StyleSheet.create<StyleType>({
  container: {
    backgroundColor: '#eeeeee',
    paddingVertical: 2,
    borderRadius: 4,
  },
});
