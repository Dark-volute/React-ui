// @ts-nocheck
import React from 'react';
import { ApplyPluginsType } from '/Users/shel/Documents/react-ui/node_modules/@umijs/runtime';
import * as umiExports from './umiExports';
import { plugin } from './plugin';

export function getRoutes() {
  const routes = [
  {
    "path": "/",
    "component": (props) => require('react').createElement(require('../../../node_modules/@umijs/preset-dumi/lib/themes/default/layout.js').default, {
      ...{"menus":{"*":{"/components":[{"title":"Basic","path":"/components/basic","meta":{},"children":[{"path":"/components/basic/button","title":"Button 按钮","meta":{}},{"path":"/components/basic/icon","title":"Icon 图标","meta":{}}]},{"title":"数据","path":"/components/data","meta":{},"children":[{"path":"/components/data/layout","title":"Layout","meta":{}},{"path":"/components/data/modal","title":"Modal","meta":{}},{"path":"/components/data/popover","title":"Popover","meta":{}},{"path":"/components/data/spin","title":"Spin","meta":{}},{"path":"/components/data/tab","title":"Tab","meta":{}},{"path":"/components/data/tree","title":"Tree","meta":{}}]}],"/doc":[{"path":"/doc/主题","title":"主题","meta":{}},{"path":"/doc/快速上手","title":"快速上手","meta":{}}],"*":[{"path":"/","title":"sun-xui","meta":{}}]}},"locales":[],"navs":{"*":[{"title":"文档","path":"/doc"},{"title":"组件","path":"/components"}]},"title":"sun-xui","logo":"https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png","mode":"site"},
      ...props,
    }),
    "routes": [
      {
        "path": "/components/basic/button",
        "component": require('../../Button/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/Button/index.md",
          "updatedTime": 1601346246000,
          "nav": {
            "title": "组件",
            "path": "/components"
          },
          "group": {
            "title": "Basic",
            "path": "/components/basic"
          },
          "slugs": [
            {
              "depth": 2,
              "value": "Button 按钮",
              "heading": "button-按钮"
            }
          ],
          "title": "Button 按钮"
        },
        "title": "Button 按钮"
      },
      {
        "path": "/components/basic/icon",
        "component": require('../../Icon/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/Icon/index.md",
          "updatedTime": 1601346246000,
          "nav": {
            "title": "Components",
            "path": "/components"
          },
          "group": {
            "title": "Basic",
            "path": "/components/basic"
          },
          "slugs": [
            {
              "depth": 2,
              "value": "Icon 图标",
              "heading": "icon-图标"
            }
          ],
          "title": "Icon 图标"
        },
        "title": "Icon 图标"
      },
      {
        "path": "/components/data/layout",
        "component": require('../../Layout/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/Layout/index.md",
          "updatedTime": 1601446184000,
          "nav": {
            "title": "Components",
            "path": "/components"
          },
          "group": {
            "title": "数据",
            "path": "/components/data"
          },
          "slugs": [
            {
              "depth": 3,
              "value": "Layout",
              "heading": "layout"
            }
          ],
          "title": "Layout"
        },
        "title": "Layout"
      },
      {
        "path": "/components/data/modal",
        "component": require('../../Modal/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/Modal/index.md",
          "updatedTime": 1601446184000,
          "nav": {
            "title": "Components",
            "path": "/components"
          },
          "group": {
            "title": "数据",
            "path": "/components/data"
          },
          "slugs": [
            {
              "depth": 3,
              "value": "Modal",
              "heading": "modal"
            }
          ],
          "title": "Modal"
        },
        "title": "Modal"
      },
      {
        "path": "/components/data/popover",
        "component": require('../../Popover/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/Popover/index.md",
          "updatedTime": 1601446184000,
          "nav": {
            "title": "Components",
            "path": "/components"
          },
          "group": {
            "title": "数据",
            "path": "/components/data"
          },
          "slugs": [
            {
              "depth": 3,
              "value": "Popover",
              "heading": "popover"
            }
          ],
          "title": "Popover"
        },
        "title": "Popover"
      },
      {
        "path": "/components/data/spin",
        "component": require('../../Spin/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/Spin/index.md",
          "updatedTime": 1601446184000,
          "nav": {
            "title": "Components",
            "path": "/components"
          },
          "group": {
            "title": "数据",
            "path": "/components/data"
          },
          "slugs": [
            {
              "depth": 3,
              "value": "Spin",
              "heading": "spin"
            }
          ],
          "title": "Spin"
        },
        "title": "Spin"
      },
      {
        "path": "/components/data/tab",
        "component": require('../../Tab/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/Tab/index.md",
          "updatedTime": 1601446184000,
          "nav": {
            "title": "Components",
            "path": "/components"
          },
          "group": {
            "title": "数据",
            "path": "/components/data"
          },
          "slugs": [
            {
              "depth": 3,
              "value": "Tab",
              "heading": "tab"
            }
          ],
          "title": "Tab"
        },
        "title": "Tab"
      },
      {
        "path": "/components/data/tree",
        "component": require('../../Tree/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/Tree/index.md",
          "updatedTime": 1601346246000,
          "nav": {
            "title": "Components",
            "path": "/components"
          },
          "group": {
            "title": "数据",
            "path": "/components/data"
          },
          "slugs": [
            {
              "depth": 3,
              "value": "Tree",
              "heading": "tree"
            }
          ],
          "title": "Tree"
        },
        "title": "Tree"
      },
      {
        "path": "/doc/主题",
        "component": require('../../doc/主题.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/doc/主题.md",
          "updatedTime": 1601443630439,
          "nav": {
            "title": "文档",
            "path": "/doc"
          },
          "slugs": [],
          "title": "主题"
        },
        "title": "主题"
      },
      {
        "path": "/doc/快速上手",
        "component": require('../../doc/快速上手.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/doc/快速上手.md",
          "updatedTime": 1601446184000,
          "nav": {
            "title": "文档",
            "path": "/doc"
          },
          "slugs": [
            {
              "depth": 2,
              "value": "快速上手",
              "heading": "快速上手"
            },
            {
              "depth": 3,
              "value": "1. 使用组件",
              "heading": "1-使用组件"
            },
            {
              "depth": 3,
              "value": "2. 按需加载",
              "heading": "2-按需加载"
            }
          ],
          "title": "快速上手"
        },
        "title": "快速上手"
      },
      {
        "path": "/",
        "component": require('../../../docs/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/index.md",
          "updatedTime": 1601444903380,
          "hero": {
            "title": "sun-xui",
            "desc": "<div class=\"markdown\"><p>sun-xui site example</p></div>",
            "actions": [
              {
                "text": "Getting Started",
                "link": "/components"
              }
            ]
          },
          "features": [
            {
              "icon": "https://gw.alipayobjects.com/zos/bmw-prod/881dc458-f20b-407b-947a-95104b5ec82b/k79dm8ih_w144_h144.png",
              "title": "Feature 1",
              "desc": "<div class=\"markdown\"><p>Balabala</p></div>"
            },
            {
              "icon": "https://gw.alipayobjects.com/zos/bmw-prod/d60657df-0822-4631-9d7c-e7a869c2f21c/k79dmz3q_w126_h126.png",
              "title": "Feature 2",
              "desc": "<div class=\"markdown\"><p>Balabala</p></div>"
            },
            {
              "icon": "https://gw.alipayobjects.com/zos/bmw-prod/d1ee0c6f-5aed-4a45-a507-339a4bfe076c/k7bjsocq_w144_h144.png",
              "title": "Feature 3",
              "desc": "<div class=\"markdown\"><p>Balabala</p></div>"
            }
          ],
          "footer": "<div class=\"markdown\"><p>Open-source MIT Licensed | Copyright © 2020<br />Powered by <a href=\"https://github.com/Chrisxmy/React-ui\" target=\"_blank\" rel=\"noopener noreferrer\">sun-xui<svg xmlns=\"http://www.w3.org/2000/svg\" aria-hidden x=\"0px\" y=\"0px\" viewBox=\"0 0 100 100\" width=\"15\" height=\"15\" class=\"__dumi-default-external-link-icon\"><path fill=\"currentColor\" d=\"M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z\"></path><polygon fill=\"currentColor\" points=\"45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9\"></polygon></svg></a></p></div>",
          "slugs": [
            {
              "depth": 2,
              "value": "sun-xui",
              "heading": "sun-xui"
            }
          ],
          "title": "sun-xui"
        },
        "title": "sun-xui"
      },
      {
        "path": "/components/basic",
        "meta": {},
        "exact": true,
        "redirect": "/components/basic/button"
      },
      {
        "path": "/components",
        "meta": {},
        "exact": true,
        "redirect": "/components/basic"
      },
      {
        "path": "/components/data",
        "meta": {},
        "exact": true,
        "redirect": "/components/data/layout"
      },
      {
        "path": "/doc",
        "meta": {},
        "exact": true,
        "redirect": "/doc/主题"
      }
    ],
    "title": "sun-xui"
  }
];

  // allow user to extend routes
  plugin.applyPlugins({
    key: 'patchRoutes',
    type: ApplyPluginsType.event,
    args: { routes },
  });

  return routes;
}
