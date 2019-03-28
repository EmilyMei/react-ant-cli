// import api, { AjaxServer, JsonServer } from './index.js';
import Promise from '../util/promise';
/**
 * 获取tab数据
 */
export async function get_tabs_data() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        status: 1,
        message: '成功',
        data: [
          {
            key: '1',
            title: 'Charts',
            icon: 'area-chart',
            link: 'Chart'
          },
          {
            key: '2',
            title: 'Tables',
            icon: 'solution',
            link: 'Table'
          },
          {
            key: '3',
            title: 'Form',
            icon: 'file-text',
            link: 'form'
          }
        ]
      });
    }, 100);
  });
}
export async function get_chart_data() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        status: 1,
        message: '成功',
        data: [
          {
            State: "AL",
            "Under 5 Years": 310504,
            "5 to 13 Years": 552339,
            "14 to 17 Years": 259034,
            "18 to 24 Years": 450818,
            "25 to 44 Years": 1231572,
            "45 to 64 Years": 1215966,
            "65 Years and Over": 641667
          },
          {
            State: "AK",
            "Under 5 Years": 52083,
            "5 to 13 Years": 85640,
            "14 to 17 Years": 42153,
            "18 to 24 Years": 74257,
            "25 to 44 Years": 198724,
            "45 to 64 Years": 183159,
            "65 Years and Over": 50277
          },
          {
            State: "AZ",
            "Under 5 Years": 515910,
            "5 to 13 Years": 828669,
            "14 to 17 Years": 362642,
            "18 to 24 Years": 601943,
            "25 to 44 Years": 1804762,
            "45 to 64 Years": 1523681,
            "65 Years and Over": 862573
          },
          {
            State: "AR",
            "Under 5 Years": 202070,
            "5 to 13 Years": 343207,
            "14 to 17 Years": 157204,
            "18 to 24 Years": 264160,
            "25 to 44 Years": 754420,
            "45 to 64 Years": 727124,
            "65 Years and Over": 407205
          },
          {
            State: "CA",
            "Under 5 Years": 2704659,
            "5 to 13 Years": 4499890,
            "14 to 17 Years": 2159981,
            "18 to 24 Years": 3853788,
            "25 to 44 Years": 10604510,
            "45 to 64 Years": 8819342,
            "65 Years and Over": 4114496
          },
          {
            State: "CO",
            "Under 5 Years": 358280,
            "5 to 13 Years": 587154,
            "14 to 17 Years": 261701,
            "18 to 24 Years": 466194,
            "25 to 44 Years": 1464939,
            "45 to 64 Years": 1290094,
            "65 Years and Over": 511094
          },
          {
            State: "CT",
            "Under 5 Years": 211637,
            "5 to 13 Years": 403658,
            "14 to 17 Years": 196918,
            "18 to 24 Years": 325110,
            "25 to 44 Years": 916955,
            "45 to 64 Years": 968967,
            "65 Years and Over": 478007
          }
        ]
      });
    }, 100);
  });
}
