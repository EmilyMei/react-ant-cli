
import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { 
  Chart,
  Geom,
  Axis,
  Tooltip,
  Legend,
} from 'bizcharts';
import DataSet from "@antv/data-set";
import { connect } from 'react-redux';
import './index.less';
import {
  getChartData
} from '../../actions/index';
class ChartMain extends React.Component {
  componentWillMount() {
    this.props.getChartData();
  }
  render() {
    const { DataView } = DataSet;
    const ages = [
      "Under 5 Years",
      "5 to 13 Years",
      "14 to 17 Years",
      "18 to 24 Years",
      "25 to 44 Years",
      "45 to 64 Years",
      "65 Years and Over"
    ];
    const dv = new DataView();
    dv.source(this.props.chartData)
      .transform({
        type: "fold",
        fields: ages,
        key: "age",
        value: "population",
        retains: ["State"]
      })
      .transform({
        type: "map",
        callback: obj => {
          const key = obj.age;
          let type;

          if (
            key === "Under 5 Years" ||
            key === "5 to 13 Years" ||
            key === "14 to 17 Years"
          ) {
            type = "a";
          } else if (key === "18 to 24 Years") {
            type = "b";
          } else if (key === "25 to 44 Years") {
            type = "c";
          } else {
            type = "d";
          }

          obj.type = type;
          return obj;
        }
      });
    const colorMap = {
      "Under 5 Years": "#E3F4BF",
      "5 to 13 Years": "#BEF7C8",
      "14 to 17 Years": "#86E6C8",
      "18 to 24 Years": "#36CFC9",
      "25 to 44 Years": "#209BDD",
      "45 to 64 Years": "#1581E6",
      "65 Years and Over": "#0860BF"
    };
    const cols = {
      population: {
        tickInterval: 1000000
      }
    };
    return (
      <div className='chart-div'>
        <Chart
          height={window.innerHeight}
          data={dv}
          scale={cols}
          padding={[20, 160, 80, 60]}
          forceFit
        >
          <Axis
            name="population"
            label={{
              formatter: function(val) {
                return val / 1000000 + "M";
              }
            }}
          />
          <Legend position="right" />
          <Tooltip />
          <Geom
            type="interval"
            position="State*population"
            color={[
              "age",
              function(age) {
                return colorMap[age];
              }
            ]}
            tooltip={[
              "age*population",
              (age, population) => {
                return {
                  name: age,
                  value: population
                };
              }
            ]}
            adjust={[
              {
                type: "dodge",
                dodgeBy: "type",
                // 按照 type 字段进行分组
                marginRatio: 0 // 分组中各个柱子之间不留空隙
              },
              {
                type: "stack"
              }
            ]}
          />
        </Chart>
      </div>
    );
  }
}
//数据校验
ChartMain.propTypes = {
  chartData: PropTypes.array.isRequired,
  getChartData: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    chartData: state.index.chartData
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getChartData: bindActionCreators(getChartData, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ChartMain);
