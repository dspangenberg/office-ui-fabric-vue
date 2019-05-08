<script>
import svgicon from 'vue-svgicon'
import type from '../../mixins/props/type'

export default {
  components: {
    svgicon
  },
  functional: true,
  mixins: [
    type('*ms', 'svg')
  ],
  name: 'ou-icon',
  props: {
    name: {
      type: String,
      default: ''
    },
    icon: {
      type: String,
      default: ''
    },
    dir: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    svgClass: {
      type: String,
      default: ''
    },
    color: {
      type: String,
      default: 'currentColor'
    },
    size: {
      type: Number,
      default: 20
    }
  },
  render (h, ctx) {
    const data = ctx.data
    const classes = {
      class: [`ms-Icon--${ctx.props.icon}`,
      {'ms-Icon--disabled': ctx.props.disabled}
      ],
    }
    if (ctx.props.type === 'ms') {
      return (
        <i class="ms-Icon" {...classes}
          {...data}
          aria-hidden="true" />
      )
    } else {
      const size = ctx.props.size + 'px'
      const color = (ctx.props.disabled) ? '#a6a6a6' : ctx.props.color
      console.log(ctx.props)
      return (
        <i class="ms-Icon">
          <svgicon
            icon={ctx.props.icon}
            width={size}
            dir={ctx.props.dir}
            height={size}
            color={color}
            class={ctx.props.svgClass}
          />
        </i>
      )
    }
  }
}
</script>

<style lang="scss">
  .ms-Icon--disabled {
    color: #a6a6a6;
  }
</style>
