<template>
  <div
    :class="personaClass"
    class="ms-Persona">
    <div class="ms-Persona-imageArea">
      <img
        v-if="!initials"
        :src="src"
        class="ms-Persona-image" >
      <div
        v-else
        :class="initialsPersonaClass"
        class="ms-Persona-initials">{{ initials.toUpperCase() }}</div>
    </div>
    <div
      v-if="type"
      class="ms-Persona-presence">
      <i
        :class="personaIconClass"
        class="ms-Persona-presenceIcon ms-Icon"/>
    </div>
    <div class="ms-Persona-details">
      <div class="ms-Persona-primaryText">{{ primaryText }}</div>
      <div class="ms-Persona-secondaryText">{{ secondaryText }}</div>
      <div class="ms-Persona-tertiaryText">{{ tertiaryText }}</div>
      <div class="ms-Persona-optionalText">{{ optionalText }}</div>
    </div>
  </div>
</template>
<script>
// Note: The FacePile Persona haven't create
import size from '../../mixins/props/size'
import type from '../../mixins/props/type'
import { strings } from '../../mixins/props/defaults'

export default {
  name: 'OuPersona',
  mixins: [
    size('tiny', 'xs', 'sm', 'lg', 'xl'),
    type('available', 'away', 'blocked', 'busy', 'dnd', 'offline'),
    strings('src', 'initials', 'primaryText', 'secondaryText', 'tertiaryText', 'optionalText')
  ],
  data () {
    if (this.initials) {
      const validateColor = [
        'blue',
        'blueLight',
        'blueDark',
        'teal',
        'greenLight',
        'green',
        'greenDark',
        'magentaLight',
        'magenta',
        'purpleLight',
        'purple',
        'black',
        'orange',
        'red',
        'redDark'
      ]
      const initialsLetter = this.initials[0].toUpperCase()
      const initialsIndex = initialsLetter.charCodeAt() - 65
      // get radom color from validateColor
      return {
        initialsColor: validateColor[Math.round((validateColor.length / 26) * initialsIndex)]
      }
    }
    return { initialsColor: '' }
  },
  computed: {
    personaClass () {
      return {
        [`ms-Persona--${this.size}`]: !!this.size,
        [`ms-Persona--${this.type}`]: !!this.type
      }
    },
    initialsPersonaClass () {
      return {
        [`ms-Persona-initials--${this.initialsColor}`]: !!this.initialsColor
      }
    },
    personaIconClass () {
      let icon = ''
      switch (this.type) {
        case 'available':
          icon = 'SkypeCheck'
          break
        case 'away':
          icon = 'SkypeClock'
          break
        case 'dnd':
          icon = 'SkypeMinus'
          break
      }
      if (icon) {
        return `ms-Icon--${icon}`
      }
    }
  }
}
</script>
