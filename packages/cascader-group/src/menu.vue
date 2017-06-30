<script>
  import { isDef } from 'element-ui/src/utils/shared';

  export default {
    name: 'ElCascaderMenu',

    data() {
      return {
        inputWidth: 0,
        options: [],
        props: {},
        visible: false,
        activeValue: [],
        value: [],
        expandTrigger: 'click',
        changeOnSelect: false,
        popperClass: ''
      };
    },

    watch: {
      visible(value) {
        if (value) {
          this.activeValue = this.value;
        }
      },
      value: {
        immediate: true,
        handler(value) {
          this.activeValue = value;
        }
      }
    },

    computed: {
      activeOptions: {
        cache: false,
        get() {
          const activeValue = this.activeValue;
          const configurableProps = ['label', 'value', 'children', 'disabled', 'name', 'tagNameDescription'];

          const formatOptions = options => {
            options.forEach(option => {
              if (option.__IS__FLAT__OPTIONS) return;
              configurableProps.forEach(prop => {
                const value = option[this.props[prop] || prop];
                if (value) option[prop] = value;
              });
              if (Array.isArray(option.children)) {
                formatOptions(option.children);
              }
            });
          };

          const loadActiveOptions = (options, activeOptions = []) => {
            const level = activeOptions.length;
            activeOptions[level] = options;
            let active = activeValue[level];
            if (isDef(active)) {
              options = options.filter(option => option.value === active)[0];
              if (options && options.children) {
                loadActiveOptions(options.children, activeOptions);
              }
            }
            return activeOptions;
          };

          formatOptions(this.options);
          return loadActiveOptions(this.options);
        }
      }
    },

    methods: {
      select(item, menuIndex) {
        if (item.__IS__FLAT__OPTIONS) {
          this.activeValue = item.value;
        } else if (menuIndex) {
          this.activeValue.splice(menuIndex, this.activeValue.length - 1, item.value);
        } else {
          this.activeValue = [item.value];
        }
        this.$emit('pick', this.activeValue);
      },
      handleMenuLeave() {
        this.$emit('menuLeave');
      },
      activeItem(item, menuIndex) {
        const len = this.activeOptions.length;
        this.activeValue.splice(menuIndex, len, item.value);
        this.activeOptions.splice(menuIndex + 1, len, item.children);
        if (this.changeOnSelect) {
          this.$emit('pick', this.activeValue, false);
        } else {
          this.$emit('activeItemChange', this.activeValue);
        }
      },
      handleMenuEvents(menuIndex, name, eventType) {
        if (this.enableMenuEvents) {
          this.$emit('handleMenuEvents', menuIndex, name, eventType);
        }
      }
    },

    render(h) {
      const {
        activeValue,
        activeOptions,
        visible,
        expandTrigger,
        popperClass
      } = this;

      const menus = this._l(activeOptions, (menu, menuIndex) => {
        let isFlat = false;
        let name = '';
        let tagNameDescription = '';
        const createNewItemEvent = {
          on: {}
        };
        const customizeMenuEvent = {
          on: {}
        };
        const editMenuEvent = {
          on: {}
        };
        const items = this._l(menu, item => {
          const events = {
            on: {}
          };
          name = item.name;
          tagNameDescription = item.tagNameDescription;
          if (item.__IS__FLAT__OPTIONS) isFlat = true;

          if (!item.disabled) {
            if (item.children) {
              let triggerEvent = {
                click: 'click',
                hover: 'mouseenter'
              }[expandTrigger];
              events.on[triggerEvent] = () => { this.activeItem(item, menuIndex); };
            } else {
              events.on.click = () => { this.select(item, menuIndex); };
            }
          }
          return (
            <li
              class={{
                'el-cascader-menu__item': true,
                'el-cascader-menu__item--extensible': item.children,
                'is-active': item.value === activeValue[menuIndex],
                'is-disabled': item.disabled
              }}
              {...events}
            >
              {item.label}
            </li>
          );
        });

        createNewItemEvent.on.click = () => {this.handleMenuEvents(menuIndex, name, 'add');};
        customizeMenuEvent.on.click = () => {this.handleMenuEvents(menuIndex, name, 'customize');};
        editMenuEvent.on.click = () => {this.handleMenuEvents(menuIndex, name, 'edit');};
        let menuStyle = {};
        if (isFlat) {
          menuStyle.minWidth = this.inputWidth + 'px';
        }

        return (
          <ul
            class={{
              'el-cascader-menu': true,
              'el-cascader-menu--flexible': isFlat
            }}
            style={menuStyle}>
            <div class='el-cascader-head'>
              <div class='el-row'>
                <div class='el-col-20'>
                  <div
                    class={{
                      'el-cascader-tag-name': true
                    }}>{name}</div>
                  <div
                    class={{
                      'el-cascader-tag-description': true
                    }}>{tagNameDescription}</div>
                </div>
                <div
                  v-show={this.enableMenuEvents}
                  class={{
                    'el-col-4': true
                  }}
                  {...editMenuEvent}
                  >
                  <i class="el-icon-edit"></i>
                </div>
              </div>
            </div>
            <div
              class={{
                'el-cascader-group-combine': true
              }}>

              <div
                v-show={this.enableMenuEvents}
                class={{
                  'el-cascader-customize': true
                }}
                {...customizeMenuEvent}
              ><i class="el-icon-setting"></i>
              <span>Customize {name} fields</span></div>

              {items}
            </div>
            <li
              v-show={this.enableMenuEvents}
              class={{
                'el-cascader-menu__new-item': true
              }}
              {...createNewItemEvent}
              >New {name}</li>
          </ul>
        );
      });
      return (
        <transition name="el-zoom-in-top" on-after-leave={this.handleMenuLeave}>
          <div
            v-show={visible}
            class={[
              'el-cascader-menus',
              popperClass
            ]}
          >
            {menus}
          </div>
        </transition>
      );
    }
  };
</script>
