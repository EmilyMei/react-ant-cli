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

