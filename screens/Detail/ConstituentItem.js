import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import {Table, TableWrapper, Cell} from 'react-native-table-component';

export default class ConstituentItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableHead: ['종목명', '구성비중'],
      tableData: [
        ['나이키', '30.00%'],
        ['룰루레몬 애슬레티카', '30.00%'],
        ['켈로그', '30.00%'],
        ['애브비', '30.00%'],
        ['페이스북', '30.00%'],
      ],
    };
  }

  render() {
    const state = this.state;
    return (
      <View style={styles.container}>
        <Table borderStyle={{borderColor: 'transparent'}}>
          {
            <TableWrapper style={styles.head}>
              {state.tableHead.map((cellData, cellIndex) => (
                <Cell
                  key={cellIndex}
                  data={cellData}
                  textStyle={
                    cellIndex === 0
                      ? [styles.itemText, styles.headerText]
                      : [styles.constituentText, styles.headerText]
                  }
                />
              ))}
            </TableWrapper>
          }
          {state.tableData.length &&
            state.tableData.map((rowData, index) => (
              <TableWrapper key={index} style={styles.row}>
                {rowData.map((cellData, cellIndex) => (
                  <Cell
                    key={cellIndex}
                    data={cellData}
                    textStyle={
                      cellIndex === 0 ? styles.itemText : styles.constituentText
                    }
                  />
                ))}
              </TableWrapper>
            ))}
        </Table>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  head: {
    height: 32,
    display: 'flex',
    flexDirection: 'row',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#dedede',
    marginBottom: 7,
  },
  text: {margin: 6},
  row: {
    display: 'flex',
    flexDirection: 'row',
    height: 34,
  },
  itemText: {
    margin: 6,
    fontSize: 14,
    color: '#9a9a9a',
    textAlign: 'left',
  },
  constituentText: {
    margin: 6,
    fontSize: 16,
    color: '#7f61fd',
    textAlign: 'right',
  },
  headerText: {
    margin: 6,
    fontSize: 14,
    color: '#3d3f42',
  },
});
