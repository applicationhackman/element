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
          const configurableProps = ['label', 'value', 'children', 'disabled', 'name', 'tagNameDescription', 'id'];

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
      handleMenuEvents(menuObject) {
        if (this.enableMenuEvents) {
          this.$emit('handleMenuEvents', menuObject);
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
        let menuId = '';
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
          menuId = item.id;
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
            <div
              class={{
                'el-cascader-menu__item': true,
                'el-cascader-menu__item--extensible': item.children,
                'is-active': item.value === activeValue[menuIndex],
                'is-disabled': item.disabled
              }}
              {...events}
            >
              {item.label}
            </div>
          );
        });
        let menuObject = {};
        menuObject.id = menuId;
        menuObject.index = menuIndex;
        menuObject.name = name;

        createNewItemEvent.on.click = () => {
          menuObject.type = 'add';
          this.handleMenuEvents(menuObject);
        };
        customizeMenuEvent.on.click = () => {
          menuObject.type = 'customize';
          this.handleMenuEvents(menuObject);
        };
        editMenuEvent.on.click = () => {
          menuObject.type = 'edit';
          this.handleMenuEvents(menuObject);
        };
        let menuStyle = {};
        if (isFlat) {
          menuStyle.minWidth = this.inputWidth + 'px';
        }

        return (
          <div
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
                    'el-col-4 text-right': true
                  }}
                  {...editMenuEvent}
                  >
                  <i class="fa fa-pencil fa-lg c-icon p10"></i>
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
                  'el-cascader-customize bb-d4 p10 mb10': true
                }}
                {...customizeMenuEvent}
              ><i class="fa fa-cog fa-lg c-icon mr5"></i>
              <span class='c-t2'>Customize {name} fields</span></div>

              <div class="p5">
                {items}

                <div
                  v-show={this.enableMenuEvents}
                  class={{
                    'el-cascader-menu__new-item c-t2 p5 mt10': true
                  }}
                  {...createNewItemEvent}
                ><i class="fa fa-plus-circle fa-lg c-green mr5"></i> New {name}</div>
              </div>
            </div>
          </div>
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
