<script>
  export default {
    data() {
      return {
        options2: [{
          label: 'California',
          cities: []
        }, {
          label: 'Florida',
          cities: []
        }],
        props: {
          value: 'label',
          children: 'cities'
        },
        options: [{
          value: 'guide',
          label: 'Guide',
          name: 'Org',
          id:'232xc',
          tagNameDescription: 'Description goes here',
          children: [{
            value: 'disciplines',
            label: 'Disciplines',
            name: 'Department',
            tagNameDescription: 'Description goes here',
            id:'232xc',
            children: [{
              value: 'consistency',
              label: 'Consistency',
              name: 'Group',
              tagNameDescription: 'Description goes here',
            }, {
              value: 'feedback',
              label: 'Feedback',
              name: 'Group',
              tagNameDescription: 'Description goes here',
            }, {
              value: 'efficiency',
              label: 'Efficiency',
              name: 'Group',
              tagNameDescription: 'Description goes here',
            }, {
              value: 'controllability',
              label: 'Controllability',
              name: 'Group',
              tagNameDescription: 'Description goes here',
            }]
          }, {
            value: 'navigation',
            label: 'Navigation',
            name: 'Department',
            id:'232xc',
            tagNameDescription: 'Description goes here',
            children: [{
              value: 'side nav',
              label: 'Side Navigation',
              name: 'Group',
              tagNameDescription: 'Description goes here',
            }, {
              value: 'top nav',
              label: 'Top Navigation',
              name: 'Group',
              tagNameDescription: 'Description goes here',
            }]
          }]
        }, {
          value: 'component',
          label: 'Component',
          name: 'Org',
          id:'232xc',
          tagNameDescription: 'Description goes here',
          children: [{
            value: 'basic',
            label: 'Basic',
            name: 'Department',
            tagNameDescription: 'Description goes here',
            children: [{
              value: 'layout',
              label: 'Layout',
              name: 'Group',
              tagNameDescription: 'Description goes here',
            }, {
              value: 'color',
              label: 'Color',
              name: 'Group',
              tagNameDescription: 'Description goes here',
            }, {
              value: 'typography',
              label: 'Typography',
              name: 'Group',
              tagNameDescription: 'Description goes here',
            }, {
              value: 'icon',
              label: 'Icon',
              name: 'Group',
            }, {
              value: 'button',
              label: 'Button',
              name: 'Group',
              tagNameDescription: 'Description goes here',
            }]
          }, {
            value: 'form',
            label: 'Form',
            name: 'Department',
            tagNameDescription: 'Description goes here',
            children: [{
              value: 'radio',
              label: 'Radio',
              name: 'Group',
              tagNameDescription: 'Description goes here',
            }, {
              value: 'checkbox',
              label: 'Checkbox',
              name: 'Group',
              tagNameDescription: 'Description goes here',
            }, {
              value: 'input',
              label: 'Input',
              name: 'Group',
              tagNameDescription: 'Description goes here',
            }, {
              value: 'input-number',
              label: 'InputNumber',
              name: 'Group',
              tagNameDescription: 'Description goes here',
            }, {
              value: 'select',
              label: 'Select',
              name: 'Group',
              tagNameDescription: 'Description goes here',
            }, {
              value: 'cascader',
              label: 'Cascader',
              name: 'Group',
              tagNameDescription: 'Description goes here',
            }, {
              value: 'switch',
              label: 'Switch',
              name: 'Group',
              tagNameDescription: 'Description goes here',
            }, {
              value: 'slider',
              label: 'Slider',
              name: 'Group',
              tagNameDescription: 'Description goes here',
            }, {
              value: 'time-picker',
              label: 'TimePicker',
              name: 'Group',
              tagNameDescription: 'Description goes here',
            }, {
              value: 'date-picker',
              label: 'DatePicker',
              name: 'Group',
              tagNameDescription: 'Description goes here',
            }, {
              value: 'datetime-picker',
              label: 'DateTimePicker',
              name: 'Group',
              tagNameDescription: 'Description goes here',
            }, {
              value: 'upload',
              label: 'Upload',
              name: 'Group',
              tagNameDescription: 'Description goes here',
            }, {
              value: 'rate',
              label: 'Rate',
              name: 'Group',
              tagNameDescription: 'Description goes here',
            }, {
              value: 'form',
              label: 'Form',
              name: 'Group',
              tagNameDescription: 'Description goes here',
            }]
          }, {
            value: 'data',
            label: 'Data',
            name: 'Department',
            tagNameDescription: 'Description goes here',
            children: [{
              value: 'table',
              label: 'Table',
              name: 'Group',
              tagNameDescription: 'Description goes here',
            }, {
              value: 'tag',
              label: 'Tag',
              name: 'Group',
              tagNameDescription: 'Description goes here',
            }, {
              value: 'progress',
              label: 'Progress',
              name: 'Group',
              tagNameDescription: 'Description goes here',
            }, {
              value: 'tree',
              label: 'Tree',
              name: 'Group',
              tagNameDescription: 'Description goes here',
            }, {
              value: 'pagination',
              label: 'Pagination',
              name: 'Group',
              tagNameDescription: 'Description goes here',
            }, {
              value: 'badge',
              label: 'Badge',
              name: 'Group',
              tagNameDescription: 'Description goes here',
            }]
          }, {
            value: 'notice',
            label: 'Notice',
            name: 'Department',
            children: [{
              value: 'alert',
              label: 'Alert',
              name: 'Group',
            }, {
              value: 'loading',
              label: 'Loading',
              name: 'Group',
            }, {
              value: 'message',
              label: 'Message'
            }, {
              value: 'message-box',
              label: 'MessageBox',
              name: 'Group',
            }, {
              value: 'notification',
              label: 'Notification',
              name: 'Group',
            }]
          }, {
            value: 'navigation',
            label: 'Navigation',
            name: 'Department',
            children: [{
              value: 'menu',
              label: 'NavMenu',
              name: 'Group',
            }, {
              value: 'tabs',
              label: 'Tabs',
              name: 'Group',
            }, {
              value: 'breadcrumb',
              label: 'Breadcrumb',
              name: 'Group',
            }, {
              value: 'dropdown',
              label: 'Dropdown',
              name: 'Group',
            }, {
              value: 'steps',
              label: 'Steps',
              name: 'Group',
            }]
          }, {
            value: 'others',
            label: 'Others',
            name: 'Department',
            children: [{
              value: 'dialog',
              label: 'Dialog',
              name: 'Group',
            }, {
              value: 'tooltip',
              label: 'Tooltip',
              name: 'Group',
            }, {
              value: 'popover',
              label: 'Popover',
              name: 'Group',
            }, {
              value: 'card',
              label: 'Card',
              name: 'Group',
            }, {
              value: 'carousel',
              label: 'Carousel',
              name: 'Group',
            }, {
              value: 'collapse',
              label: 'Collapse',
              name: 'Group',
            }]
          }]
        }, {
          value: 'resource',
          label: 'Resource',
          name: 'Org',
          id:'232xc',
          tagNameDescription: 'Description goes here',
          children: [{
            value: 'axure',
            label: 'Axure Components',
            name: 'Department',
          }, {
            value: 'sketch',
            label: 'Sketch Templates',
            name: 'Department',
          }, {
            value: 'docs',
            label: 'Design Documentation',
            name: 'Department',
          }]
        }],
        optionsWithDisabled: [],
        selectedOptions: [],
        selectedOptions2: [],
        selectedOptions3: ['component', 'data', 'tag']
      };
    },
    created() {
      this.optionsWithDisabled = JSON.parse(JSON.stringify(this.options));
      this.optionsWithDisabled[0].disabled = true;
    },
    mounted() {
      this.$nextTick(() => {
        const demos = document.querySelectorAll('.source');
        demos[0].style.padding = '0';
        demos[demos.length - 1].style.padding = '0';
      });
    },
    methods: {
      handleItemChange(val) {
        console.log('active item:', val);
        setTimeout(_ => {
          if (val.indexOf('California') > -1 && !this.options2[0].cities.length) {
            this.options2[0].cities = [{
              label: 'Los Angeles'
            }];
          } else if (val.indexOf('Florida') > -1 && !this.options2[1].cities.length) {
            this.options2[1].cities = [{
              label: 'Orlando'
            }];
          }
        }, 300);
      },
      handleChange(value) {
        console.log(value);
      },

      handeMenuEvent(menuObject) {
        console.log('Menu event related handler');
        console.log('Menu menuObject', menuObject);
      }
    }
  };
</script>

<style>
  .demo-cascader {
    .el-cascader {
      width: 222px;
    }
  }
  .demo-cascader-size {
    .el-cascader {
      vertical-align: top;
      margin-right: 15px;
    }
  }
  .demo-cascader .block {
    padding: 30px 0;
    text-align: center;
    border-right: solid 1px #EFF2F6;
    float: left;
    width: 50%;
    box-sizing: border-box;
    &:last-child {
      border-right: none;
    }
  }
  .demo-cascader .demonstration {
    display: block;
    color: #8492a6;
    font-size: 14px;
    margin-bottom: 20px;
  }
</style>

## Cascader

If the options have a clear hierarchical structure, Cascader can be used to view and select them.

### Basic usage

There are two ways to expand child option items.

:::demo Assigning the `options` attribute to an array of options renders a Cascader. The `expand-trigger` attribute defines how child options are expanded. This example also demonstrates the `change` event, whose parameter is the value of Cascader, an array made up of the values of each selected level.
```html
<div class="block">
  <span class="demonstration">Child options expand when clicked (default)</span>
  <el-cascader-group
    :options="options"
    v-model="selectedOptions"
    :enable-menu-events="true"
    @handle-menu-events="handeMenuEvent"
    @change="handleChange">
  </el-cascader-group>
</div>
<div class="block">
  <span class="demonstration">Child options expand when hovered</span>
  <el-cascader-group
    expand-trigger="hover"
    :options="options"
    v-model="selectedOptions2"
    :enable-menu-events="true"
    @handle-menu-events="handeMenuEvent"
    @change="handleChange">
  </el-cascader-group>
</div>

<script>
  export default {
    data() {
      return {
        options: [{
          value: 'guide',
          label: 'Guide',
          children: [{
            value: 'disciplines',
            label: 'Disciplines',
            children: [{
              value: 'consistency',
              label: 'Consistency'
            }, {
              value: 'feedback',
              label: 'Feedback'
            }, {
              value: 'efficiency',
              label: 'Efficiency'
            }, {
              value: 'controllability',
              label: 'Controllability'
            }]
          }, {
            value: 'navigation',
            label: 'Navigation',
            children: [{
              value: 'side nav',
              label: 'Side Navigation'
            }, {
              value: 'top nav',
              label: 'Top Navigation'
            }]
          }]
        }, {
          value: 'component',
          label: 'Component',
          children: [{
            value: 'basic',
            label: 'Basic',
            children: [{
              value: 'layout',
              label: 'Layout'
            }, {
              value: 'color',
              label: 'Color'
            }, {
              value: 'typography',
              label: 'Typography'
            }, {
              value: 'icon',
              label: 'Icon'
            }, {
              value: 'button',
              label: 'Button'
            }]
          }, {
            value: 'form',
            label: 'Form',
            children: [{
              value: 'radio',
              label: 'Radio'
            }, {
              value: 'checkbox',
              label: 'Checkbox'
            }, {
              value: 'input',
              label: 'Input'
            }, {
              value: 'input-number',
              label: 'InputNumber'
            }, {
              value: 'select',
              label: 'Select'
            }, {
              value: 'cascader',
              label: 'Cascader'
            }, {
              value: 'switch',
              label: 'Switch'
            }, {
              value: 'slider',
              label: 'Slider'
            }, {
              value: 'time-picker',
              label: 'TimePicker'
            }, {
              value: 'date-picker',
              label: 'DatePicker'
            }, {
              value: 'datetime-picker',
              label: 'DateTimePicker'
            }, {
              value: 'upload',
              label: 'Upload'
            }, {
              value: 'rate',
              label: 'Rate'
            }, {
              value: 'form',
              label: 'Form'
            }]
          }, {
            value: 'data',
            label: 'Data',
            children: [{
              value: 'table',
              label: 'Table'
            }, {
              value: 'tag',
              label: 'Tag'
            }, {
              value: 'progress',
              label: 'Progress'
            }, {
              value: 'tree',
              label: 'Tree'
            }, {
              value: 'pagination',
              label: 'Pagination'
            }, {
              value: 'badge',
              label: 'Badge'
            }]
          }, {
            value: 'notice',
            label: 'Notice',
            children: [{
              value: 'alert',
              label: 'Alert'
            }, {
              value: 'loading',
              label: 'Loading'
            }, {
              value: 'message',
              label: 'Message'
            }, {
              value: 'message-box',
              label: 'MessageBox'
            }, {
              value: 'notification',
              label: 'Notification'
            }]
          }, {
            value: 'navigation',
            label: 'Navigation',
            children: [{
              value: 'menu',
              label: 'NavMenu'
            }, {
              value: 'tabs',
              label: 'Tabs'
            }, {
              value: 'breadcrumb',
              label: 'Breadcrumb'
            }, {
              value: 'dropdown',
              label: 'Dropdown'
            }, {
              value: 'steps',
              label: 'Steps'
            }]
          }, {
            value: 'others',
            label: 'Others',
            children: [{
              value: 'dialog',
              label: 'Dialog'
            }, {
              value: 'tooltip',
              label: 'Tooltip'
            }, {
              value: 'popover',
              label: 'Popover'
            }, {
              value: 'card',
              label: 'Card'
            }, {
              value: 'carousel',
              label: 'Carousel'
            }, {
              value: 'collapse',
              label: 'Collapse'
            }]
          }]
        }, {
          value: 'resource',
          label: 'Resource',
          children: [{
            value: 'axure',
            label: 'Axure Components'
          }, {
            value: 'sketch',
            label: 'Sketch Templates'
          }, {
            value: 'docs',
            label: 'Design Documentation'
          }]
        }],
        selectedOptions: [],
        selectedOptions2: []
      };
    },
    methods: {
      handleChange(value) {
        console.log(value);
      }
    }
  };
</script>
```
:::

### Disabled option

Disable an option by setting a `disabled` field in the option object.

:::demo In this example, the first item in `options` array has a `disabled: true` field, so it is disabled. By default, Cascader checks the `disabled` field in each option object; if you are using another field name to indicate whether an option is disabled, you can assign it in the `props` attribute (see the API table below for details). And of course, field name `value`, `label` and `children` can also be customized in the same way.
```html
<el-cascader-group
  :options="optionsWithDisabled"
  :enable-menu-events="false"
  @handle-menu-events="handeMenuEvent"
></el-cascader-group>
<script>
  export default {
    data() {
      return {
        optionsWithDisabled: [{
          value: 'guide',
          label: 'Guide',
          disabled: true,
          children: [{
            value: 'disciplines',
            label: 'Disciplines',
            children: [{
              value: 'consistency',
              label: 'Consistency'
            }, {
              value: 'feedback',
              label: 'Feedback'
            }, {
              value: 'efficiency',
              label: 'Efficiency'
            }, {
              value: 'controllability',
              label: 'Controllability'
            }]
          }, {
            value: 'navigation',
            label: 'Navigation',
            children: [{
              value: 'side nav',
              label: 'Side Navigation'
            }, {
              value: 'top nav',
              label: 'Top Navigation'
            }]
          }]
        }, {
          value: 'component',
          label: 'Component',
          children: [{
            value: 'basic',
            label: 'Basic',
            children: [{
              value: 'layout',
              label: 'Layout'
            }, {
              value: 'color',
              label: 'Color'
            }, {
              value: 'typography',
              label: 'Typography'
            }, {
              value: 'icon',
              label: 'Icon'
            }, {
              value: 'button',
              label: 'Button'
            }]
          }, {
            value: 'form',
            label: 'Form',
            children: [{
              value: 'radio',
              label: 'Radio'
            }, {
              value: 'checkbox',
              label: 'Checkbox'
            }, {
              value: 'input',
              label: 'Input'
            }, {
              value: 'input-number',
              label: 'InputNumber'
            }, {
              value: 'select',
              label: 'Select'
            }, {
              value: 'cascader',
              label: 'Cascader'
            }, {
              value: 'switch',
              label: 'Switch'
            }, {
              value: 'slider',
              label: 'Slider'
            }, {
              value: 'time-picker',
              label: 'TimePicker'
            }, {
              value: 'date-picker',
              label: 'DatePicker'
            }, {
              value: 'datetime-picker',
              label: 'DateTimePicker'
            }, {
              value: 'upload',
              label: 'Upload'
            }, {
              value: 'rate',
              label: 'Rate'
            }, {
              value: 'form',
              label: 'Form'
            }]
          }, {
            value: 'data',
            label: 'Data',
            children: [{
              value: 'table',
              label: 'Table'
            }, {
              value: 'tag',
              label: 'Tag'
            }, {
              value: 'progress',
              label: 'Progress'
            }, {
              value: 'tree',
              label: 'Tree'
            }, {
              value: 'pagination',
              label: 'Pagination'
            }, {
              value: 'badge',
              label: 'Badge'
            }]
          }, {
            value: 'notice',
            label: 'Notice',
            children: [{
              value: 'alert',
              label: 'Alert'
            }, {
              value: 'loading',
              label: 'Loading'
            }, {
              value: 'message',
              label: 'Message'
            }, {
              value: 'message-box',
              label: 'MessageBox'
            }, {
              value: 'notification',
              label: 'Notification'
            }]
          }, {
            value: 'navigation',
            label: 'Navigation',
            children: [{
              value: 'menu',
              label: 'NavMenu'
            }, {
              value: 'tabs',
              label: 'Tabs'
            }, {
              value: 'breadcrumb',
              label: 'Breadcrumb'
            }, {
              value: 'dropdown',
              label: 'Dropdown'
            }, {
              value: 'steps',
              label: 'Steps'
            }]
          }, {
            value: 'others',
            label: 'Others',
            children: [{
              value: 'dialog',
              label: 'Dialog'
            }, {
              value: 'tooltip',
              label: 'Tooltip'
            }, {
              value: 'popover',
              label: 'Popover'
            }, {
              value: 'card',
              label: 'Card'
            }, {
              value: 'carousel',
              label: 'Carousel'
            }, {
              value: 'collapse',
              label: 'Collapse'
            }]
          }]
        }, {
          value: 'resource',
          label: 'Resource',
          children: [{
            value: 'axure',
            label: 'Axure Components'
          }, {
            value: 'sketch',
            label: 'Sketch Templates'
          }, {
            value: 'docs',
            label: 'Design Documentation'
          }]
        }]
      };
    }
  };
</script>
```
:::

### Display only the last level

The input can display only the last level instead of all levels.

:::demo The `show-all-levels` attribute defines if all levels are displayed. If it is `false`, only the last level is displayed.
```html
<el-cascader-group
    :options="options"
    :show-all-levels="false"
    :enable-menu-events="false"
    @handle-menu-events="handeMenuEvent"
></el-cascader>
<script>
  export default {
    data() {
      return {
        options: [{
          value: 'guide',
          label: 'Guide',
          children: [{
            value: 'disciplines',
            label: 'Disciplines',
            children: [{
              value: 'consistency',
              label: 'Consistency'
            }, {
              value: 'feedback',
              label: 'Feedback'
            }, {
              value: 'efficiency',
              label: 'Efficiency'
            }, {
              value: 'controllability',
              label: 'Controllability'
            }]
          }, {
            value: 'navigation',
            label: 'Navigation',
            children: [{
              value: 'side nav',
              label: 'Side Navigation'
            }, {
              value: 'top nav',
              label: 'Top Navigation'
            }]
          }]
        }, {
          value: 'component',
          label: 'Component',
          children: [{
            value: 'basic',
            label: 'Basic',
            children: [{
              value: 'layout',
              label: 'Layout'
            }, {
              value: 'color',
              label: 'Color'
            }, {
              value: 'typography',
              label: 'Typography'
            }, {
              value: 'icon',
              label: 'Icon'
            }, {
              value: 'button',
              label: 'Button'
            }]
          }, {
            value: 'form',
            label: 'Form',
            children: [{
              value: 'radio',
              label: 'Radio'
            }, {
              value: 'checkbox',
              label: 'Checkbox'
            }, {
              value: 'input',
              label: 'Input'
            }, {
              value: 'input-number',
              label: 'InputNumber'
            }, {
              value: 'select',
              label: 'Select'
            }, {
              value: 'cascader',
              label: 'Cascader'
            }, {
              value: 'switch',
              label: 'Switch'
            }, {
              value: 'slider',
              label: 'Slider'
            }, {
              value: 'time-picker',
              label: 'TimePicker'
            }, {
              value: 'date-picker',
              label: 'DatePicker'
            }, {
              value: 'datetime-picker',
              label: 'DateTimePicker'
            }, {
              value: 'upload',
              label: 'Upload'
            }, {
              value: 'rate',
              label: 'Rate'
            }, {
              value: 'form',
              label: 'Form'
            }]
          }, {
            value: 'data',
            label: 'Data',
            children: [{
              value: 'table',
              label: 'Table'
            }, {
              value: 'tag',
              label: 'Tag'
            }, {
              value: 'progress',
              label: 'Progress'
            }, {
              value: 'tree',
              label: 'Tree'
            }, {
              value: 'pagination',
              label: 'Pagination'
            }, {
              value: 'badge',
              label: 'Badge'
            }]
          }, {
            value: 'notice',
            label: 'Notice',
            children: [{
              value: 'alert',
              label: 'Alert'
            }, {
              value: 'loading',
              label: 'Loading'
            }, {
              value: 'message',
              label: 'Message'
            }, {
              value: 'message-box',
              label: 'MessageBox'
            }, {
              value: 'notification',
              label: 'Notification'
            }]
          }, {
            value: 'navigation',
            label: 'Navigation',
            children: [{
              value: 'menu',
              label: 'NavMenu'
            }, {
              value: 'tabs',
              label: 'Tabs'
            }, {
              value: 'breadcrumb',
              label: 'Breadcrumb'
            }, {
              value: 'dropdown',
              label: 'Dropdown'
            }, {
              value: 'steps',
              label: 'Steps'
            }]
          }, {
            value: 'others',
            label: 'Others',
            children: [{
              value: 'dialog',
              label: 'Dialog'
            }, {
              value: 'tooltip',
              label: 'Tooltip'
            }, {
              value: 'popover',
              label: 'Popover'
            }, {
              value: 'card',
              label: 'Card'
            }, {
              value: 'carousel',
              label: 'Carousel'
            }, {
              value: 'collapse',
              label: 'Collapse'
            }]
          }]
        }, {
          value: 'resource',
          label: 'Resource',
          children: [{
            value: 'axure',
            label: 'Axure Components'
          }, {
            value: 'sketch',
            label: 'Sketch Templates'
          }, {
            value: 'docs',
            label: 'Design Documentation'
          }]
        }]
      };
    }
  };
</script>
```
:::

### With default value

:::demo The default value can be defined with an array.
```html
<el-cascader-group
  :options="options"
  v-model="selectedOptions3"
  @handle-menu-events="handeMenuEvent"
></el-cascader-group>
<script>
  export default {
    data() {
      return {
        options: [{
          value: 'guide',
          label: 'Guide',
          children: [{
            value: 'disciplines',
            label: 'Disciplines',
            children: [{
              value: 'consistency',
              label: 'Consistency'
            }, {
              value: 'feedback',
              label: 'Feedback'
            }, {
              value: 'efficiency',
              label: 'Efficiency'
            }, {
              value: 'controllability',
              label: 'Controllability'
            }]
          }, {
            value: 'navigation',
            label: 'Navigation',
            children: [{
              value: 'side nav',
              label: 'Side Navigation'
            }, {
              value: 'top nav',
              label: 'Top Navigation'
            }]
          }]
        }, {
          value: 'component',
          label: 'Component',
          children: [{
            value: 'basic',
            label: 'Basic',
            children: [{
              value: 'layout',
              label: 'Layout'
            }, {
              value: 'color',
              label: 'Color'
            }, {
              value: 'typography',
              label: 'Typography'
            }, {
              value: 'icon',
              label: 'Icon'
            }, {
              value: 'button',
              label: 'Button'
            }]
          }, {
            value: 'form',
            label: 'Form',
            children: [{
              value: 'radio',
              label: 'Radio'
            }, {
              value: 'checkbox',
              label: 'Checkbox'
            }, {
              value: 'input',
              label: 'Input'
            }, {
              value: 'input-number',
              label: 'InputNumber'
            }, {
              value: 'select',
              label: 'Select'
            }, {
              value: 'cascader',
              label: 'Cascader'
            }, {
              value: 'switch',
              label: 'Switch'
            }, {
              value: 'slider',
              label: 'Slider'
            }, {
              value: 'time-picker',
              label: 'TimePicker'
            }, {
              value: 'date-picker',
              label: 'DatePicker'
            }, {
              value: 'datetime-picker',
              label: 'DateTimePicker'
            }, {
              value: 'upload',
              label: 'Upload'
            }, {
              value: 'rate',
              label: 'Rate'
            }, {
              value: 'form',
              label: 'Form'
            }]
          }, {
            value: 'data',
            label: 'Data',
            children: [{
              value: 'table',
              label: 'Table'
            }, {
              value: 'tag',
              label: 'Tag'
            }, {
              value: 'progress',
              label: 'Progress'
            }, {
              value: 'tree',
              label: 'Tree'
            }, {
              value: 'pagination',
              label: 'Pagination'
            }, {
              value: 'badge',
              label: 'Badge'
            }]
          }, {
            value: 'notice',
            label: 'Notice',
            children: [{
              value: 'alert',
              label: 'Alert'
            }, {
              value: 'loading',
              label: 'Loading'
            }, {
              value: 'message',
              label: 'Message'
            }, {
              value: 'message-box',
              label: 'MessageBox'
            }, {
              value: 'notification',
              label: 'Notification'
            }]
          }, {
            value: 'navigation',
            label: 'Navigation',
            children: [{
              value: 'menu',
              label: 'NavMenu'
            }, {
              value: 'tabs',
              label: 'Tabs'
            }, {
              value: 'breadcrumb',
              label: 'Breadcrumb'
            }, {
              value: 'dropdown',
              label: 'Dropdown'
            }, {
              value: 'steps',
              label: 'Steps'
            }]
          }, {
            value: 'others',
            label: 'Others',
            children: [{
              value: 'dialog',
              label: 'Dialog'
            }, {
              value: 'tooltip',
              label: 'Tooltip'
            }, {
              value: 'popover',
              label: 'Popover'
            }, {
              value: 'card',
              label: 'Card'
            }, {
              value: 'carousel',
              label: 'Carousel'
            }, {
              value: 'collapse',
              label: 'Collapse'
            }]
          }]
        }, {
          value: 'resource',
          label: 'Resource',
          children: [{
            value: 'axure',
            label: 'Axure Components'
          }, {
            value: 'sketch',
            label: 'Sketch Templates'
          }, {
            value: 'docs',
            label: 'Design Documentation'
          }]
        }],
        selectedOptions3: ['component', 'data', 'tag']
      };
    }
  };
</script>
```
:::

### Change on select

Parent options can also be selected.

:::demo By default only the options in the last level can be selected. By assigning `change-on-select` to `true`, options in parent levels can also be selected.
```html
<el-cascader-group
  :options="options"
  change-on-select
  :enable-menu-events="false"
    @handle-menu-events="handeMenuEvent"
></el-cascader-group>
<script>
  export default {
    data() {
      return {
        options: [{
          value: 'guide',
          label: 'Guide',
          children: [{
            value: 'disciplines',
            label: 'Disciplines',
            children: [{
              value: 'consistency',
              label: 'Consistency'
            }, {
              value: 'feedback',
              label: 'Feedback'
            }, {
              value: 'efficiency',
              label: 'Efficiency'
            }, {
              value: 'controllability',
              label: 'Controllability'
            }]
          }, {
            value: 'navigation',
            label: 'Navigation',
            children: [{
              value: 'side nav',
              label: 'Side Navigation'
            }, {
              value: 'top nav',
              label: 'Top Navigation'
            }]
          }]
        }, {
          value: 'component',
          label: 'Component',
          children: [{
            value: 'basic',
            label: 'Basic',
            children: [{
              value: 'layout',
              label: 'Layout'
            }, {
              value: 'color',
              label: 'Color'
            }, {
              value: 'typography',
              label: 'Typography'
            }, {
              value: 'icon',
              label: 'Icon'
            }, {
              value: 'button',
              label: 'Button'
            }]
          }, {
            value: 'form',
            label: 'Form',
            children: [{
              value: 'radio',
              label: 'Radio'
            }, {
              value: 'checkbox',
              label: 'Checkbox'
            }, {
              value: 'input',
              label: 'Input'
            }, {
              value: 'input-number',
              label: 'InputNumber'
            }, {
              value: 'select',
              label: 'Select'
            }, {
              value: 'cascader',
              label: 'Cascader'
            }, {
              value: 'switch',
              label: 'Switch'
            }, {
              value: 'slider',
              label: 'Slider'
            }, {
              value: 'time-picker',
              label: 'TimePicker'
            }, {
              value: 'date-picker',
              label: 'DatePicker'
            }, {
              value: 'datetime-picker',
              label: 'DateTimePicker'
            }, {
              value: 'upload',
              label: 'Upload'
            }, {
              value: 'rate',
              label: 'Rate'
            }, {
              value: 'form',
              label: 'Form'
            }]
          }, {
            value: 'data',
            label: 'Data',
            children: [{
              value: 'table',
              label: 'Table'
            }, {
              value: 'tag',
              label: 'Tag'
            }, {
              value: 'progress',
              label: 'Progress'
            }, {
              value: 'tree',
              label: 'Tree'
            }, {
              value: 'pagination',
              label: 'Pagination'
            }, {
              value: 'badge',
              label: 'Badge'
            }]
          }, {
            value: 'notice',
            label: 'Notice',
            children: [{
              value: 'alert',
              label: 'Alert'
            }, {
              value: 'loading',
              label: 'Loading'
            }, {
              value: 'message',
              label: 'Message'
            }, {
              value: 'message-box',
              label: 'MessageBox'
            }, {
              value: 'notification',
              label: 'Notification'
            }]
          }, {
            value: 'navigation',
            label: 'Navigation',
            children: [{
              value: 'menu',
              label: 'NavMenu'
            }, {
              value: 'tabs',
              label: 'Tabs'
            }, {
              value: 'breadcrumb',
              label: 'Breadcrumb'
            }, {
              value: 'dropdown',
              label: 'Dropdown'
            }, {
              value: 'steps',
              label: 'Steps'
            }]
          }, {
            value: 'others',
            label: 'Others',
            children: [{
              value: 'dialog',
              label: 'Dialog'
            }, {
              value: 'tooltip',
              label: 'Tooltip'
            }, {
              value: 'popover',
              label: 'Popover'
            }, {
              value: 'card',
              label: 'Card'
            }, {
              value: 'carousel',
              label: 'Carousel'
            }, {
              value: 'collapse',
              label: 'Collapse'
            }]
          }]
        }, {
          value: 'resource',
          label: 'Resource',
          children: [{
            value: 'axure',
            label: 'Axure Components'
          }, {
            value: 'sketch',
            label: 'Sketch Templates'
          }, {
            value: 'docs',
            label: 'Design Documentation'
          }]
        }]
      };
    }
  };
</script>
```
:::

### Dynamically load child options

Load child options when their parent option is clicked or hovered over.

:::demo In this example, the options array does not have data of cities when initialized. With the `active-item-change` event, you can load the cities of a specific state dynamically. Besides, this example also demonstrates how `props` is used.
```html
<el-cascader-group
  :options="options2"
  @active-item-change="handleItemChange"
  :enable-menu-events="false"
  @handle-menu-events="handeMenuEvent"
  :props="props"
></el-cascader-group>

<script>
  export default {
    data() {
      return {
        options2: [{
          label: 'California',
          cities: []
        }, {
          label: 'Florida',
          cities: []
        }],
        props: {
          value: 'label',
          children: 'cities'
        }
      };
    },

    methods: {
      handleItemChange(val) {
        console.log('active item:', val);
        setTimeout(_ => {
          if (val.indexOf('California') > -1 && !this.options2[0].cities.length) {
            this.options2[0].cities = [{
              label: 'Los Angeles'
            }];
          } else if (val.indexOf('Florida') > -1 && !this.options2[1].cities.length) {
            this.options2[1].cities = [{
              label: 'Orlando'
            }];
          }
        }, 300);
      }
    }
  };
</script>
```
:::

### Filterable

Search and select options with a keyword.

:::demo Adding `filterable` to `el-cascader` enables filtering
```html
<div class="block">
  <span class="demonstration">Only options of the last level can be selected</span>
  <el-cascader-group
    placeholder="Try searching: Guide"
    :options="options"
    filterable
    :enable-menu-events="false"
    @handle-menu-events="handeMenuEvent"
  ></el-cascader-group>
</div>
<div class="block">
  <span class="demonstration">Options of all levels can be selected</span>
  <el-cascader-group
    placeholder="Try searching: Guide"
    :options="options"
    filterable
    change-on-select
    :enable-menu-events="false"
    @handle-menu-events="handeMenuEvent"
  ></el-cascader-group>
</div>

<script>
  export default {
    data() {
      return {
        options: [{
          value: 'guide',
          label: 'Guide',
          children: [{
            value: 'disciplines',
            label: 'Disciplines',
            children: [{
              value: 'consistency',
              label: 'Consistency'
            }, {
              value: 'feedback',
              label: 'Feedback'
            }, {
              value: 'efficiency',
              label: 'Efficiency'
            }, {
              value: 'controllability',
              label: 'Controllability'
            }]
          }, {
            value: 'navigation',
            label: 'Navigation',
            children: [{
              value: 'side nav',
              label: 'Side Navigation'
            }, {
              value: 'top nav',
              label: 'Top Navigation'
            }]
          }]
        }, {
          value: 'component',
          label: 'Component',
          children: [{
            value: 'basic',
            label: 'Basic',
            children: [{
              value: 'layout',
              label: 'Layout'
            }, {
              value: 'color',
              label: 'Color'
            }, {
              value: 'typography',
              label: 'Typography'
            }, {
              value: 'icon',
              label: 'Icon'
            }, {
              value: 'button',
              label: 'Button'
            }]
          }, {
            value: 'form',
            label: 'Form',
            children: [{
              value: 'radio',
              label: 'Radio'
            }, {
              value: 'checkbox',
              label: 'Checkbox'
            }, {
              value: 'input',
              label: 'Input'
            }, {
              value: 'input-number',
              label: 'InputNumber'
            }, {
              value: 'select',
              label: 'Select'
            }, {
              value: 'cascader',
              label: 'Cascader'
            }, {
              value: 'switch',
              label: 'Switch'
            }, {
              value: 'slider',
              label: 'Slider'
            }, {
              value: 'time-picker',
              label: 'TimePicker'
            }, {
              value: 'date-picker',
              label: 'DatePicker'
            }, {
              value: 'datetime-picker',
              label: 'DateTimePicker'
            }, {
              value: 'upload',
              label: 'Upload'
            }, {
              value: 'rate',
              label: 'Rate'
            }, {
              value: 'form',
              label: 'Form'
            }]
          }, {
            value: 'data',
            label: 'Data',
            children: [{
              value: 'table',
              label: 'Table'
            }, {
              value: 'tag',
              label: 'Tag'
            }, {
              value: 'progress',
              label: 'Progress'
            }, {
              value: 'tree',
              label: 'Tree'
            }, {
              value: 'pagination',
              label: 'Pagination'
            }, {
              value: 'badge',
              label: 'Badge'
            }]
          }, {
            value: 'notice',
            label: 'Notice',
            children: [{
              value: 'alert',
              label: 'Alert'
            }, {
              value: 'loading',
              label: 'Loading'
            }, {
              value: 'message',
              label: 'Message'
            }, {
              value: 'message-box',
              label: 'MessageBox'
            }, {
              value: 'notification',
              label: 'Notification'
            }]
          }, {
            value: 'navigation',
            label: 'Navigation',
            children: [{
              value: 'menu',
              label: 'NavMenu'
            }, {
              value: 'tabs',
              label: 'Tabs'
            }, {
              value: 'breadcrumb',
              label: 'Breadcrumb'
            }, {
              value: 'dropdown',
              label: 'Dropdown'
            }, {
              value: 'steps',
              label: 'Steps'
            }]
          }, {
            value: 'others',
            label: 'Others',
            children: [{
              value: 'dialog',
              label: 'Dialog'
            }, {
              value: 'tooltip',
              label: 'Tooltip'
            }, {
              value: 'popover',
              label: 'Popover'
            }, {
              value: 'card',
              label: 'Card'
            }, {
              value: 'carousel',
              label: 'Carousel'
            }, {
              value: 'collapse',
              label: 'Collapse'
            }]
          }]
        }, {
          value: 'resource',
          label: 'Resource',
          children: [{
            value: 'axure',
            label: 'Axure Components'
          }, {
            value: 'sketch',
            label: 'Sketch Templates'
          }, {
            value: 'docs',
            label: 'Design Documentation'
          }]
        }]
      };
    }
  };
</script>
```
:::

### Attributes
| Attribute | Description         | Type    | Options       | Default|
|---------- |-------------------- |---------|-------------  |-------- |
| options   | data of the options | array | — | — |
| props | configuration options, see the following table | object | — | — |
| value | selected value | array | — | — |
| popper-class | custom class name for Cascader's dropdown | string | — | — |
| placeholder | input placeholder | string | — | Select |
| disabled  | whether Cascader is disabled | boolean |  — | false |
| clearable  | whether selected value can be cleared | boolean | — | false |
| expand-trigger  | trigger mode of expanding current item | string | click / hover | click |
| show-all-levels | whether to display all levels of the selected value in the input | boolean | — | true |
| filterable  | whether the options can be searched | boolean | — | — |
| debounce | debounce delay when typing filter keyword, in millisecond | number | — | 300 |
| change-on-select | whether selecting an option of any level is permitted | boolean | — | false |
| size  | size of Input | string | large / small / mini | — |

### props
| Attribute | Description | Type | Accepted Values | Default |
| --------- | ----------------- | ------ | ------ | ------ |
| label     | specify which key of option object is used as the option's label | string | — | — |
| value     | specify which key of option object is used as the option's value | string | — | — |
| children  | specify which key of option object is used as the option's child options | string | — | — |
| disabled  | specify which key of option object indicates if the option is disabled | string | — | — |
| before-filter | hook function before filtering with the value to be filtered as its parameter. If `false` is returned or a `Promise` is returned and then is rejected, filtering will be aborted | function(value) | — | — |

### Events
| Event Name | Description | Parameters |
|---------- |-------- |---------- |
| change  | triggers when the binding value changes | value |
| active-item-change | triggers when active option changes, only works when `change-on-select` is `false` | an array of active options |
