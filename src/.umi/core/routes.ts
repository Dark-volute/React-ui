// @ts-nocheck
import { ApplyPluginsType } from '/Users/shel/Documents/react-ui/node_modules/_@umijs_runtime@3.2.10@@umijs/runtime';
import { plugin } from './plugin';

const routes = [
  {
    "path": "/",
    "component": (props) => require('react').createElement(require('../../../node_modules/_@umijs_preset-dumi@1.0.33@@umijs/preset-dumi/lib/themes/default/layout.js').default, {
      ...{"menus":{"*":{"/components":[{"title":"Basic","path":"/components/basic","meta":{},"children":[{"path":"/components/basic/button","title":"Button 按钮","meta":{}},{"path":"/components/basic/icon","title":"Icon","meta":{}}]},{"title":"数据","path":"/components/data","meta":{},"children":[{"path":"/components/data/tree","title":"Tree","meta":{}}]}],"*":[{"path":"/","title":"Hello dumi!","meta":{}}]}},"locales":[],"navs":{"*":[{"title":"Components","path":"/components"}]},"title":"dumi","logo":"https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png","mode":"site"},
      ...props,
    }),
    "routes": [
      {
        "path": "/components/basic/button",
        "component": require('../../Button/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/Button/index.md",
          "updatedTime": 1595775727713,
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
          "updatedTime": 1595775780562,
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
              "value": "Icon",
              "heading": "icon"
            }
          ],
          "title": "Icon"
        },
        "title": "Icon"
      },
      {
        "path": "/components/data/tree",
        "component": require('../../Tree/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "src/Tree/index.md",
          "updatedTime": 1595775981923,
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
        "path": "/",
        "component": require('../../../docs/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/index.md",
          "updatedTime": 1595751280834,
          "hero": {
            "title": "dumi",
            "desc": "<div class=\"markdown\"><p>dumi site example</p></div>",
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
          "footer": "<div class=\"markdown\"><p>Open-source MIT Licensed | Copyright © 2020<br />Powered by <a href=\"https://d.umijs.org\" target=\"_blank\" rel=\"noopener noreferrer\">dumi<svg xmlns=\"http://www.w3.org/2000/svg\" aria-hidden x=\"0px\" y=\"0px\" viewBox=\"0 0 100 100\" width=\"15\" height=\"15\" class=\"__dumi-default-external-link-icon\"><path fill=\"currentColor\" d=\"M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z\"></path><polygon fill=\"currentColor\" points=\"45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9\"></polygon></svg></a></p></div>",
          "slugs": [
            {
              "depth": 2,
              "value": "Hello dumi!",
              "heading": "hello-dumi"
            }
          ],
          "title": "Hello dumi!"
        },
        "title": "Hello dumi!"
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
        "redirect": "/components/data/tree"
      }
    ],
    "title": "dumi"
  }
];

// allow user to extend routes
plugin.applyPlugins({
  key: 'patchRoutes',
  type: ApplyPluginsType.event,
  args: { routes },
});

export { routes };
