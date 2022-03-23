const hero = function ({
  canvasSelector,
  colorDotCSSProp,
  colorCSSProp
}) {
  const canvas = document.querySelector(canvasSelector, colorDotCSSProp, colorCSSProp)
  const ctx = canvas.getContext('2d')
  const colorDot = window.getComputedStyle(document.documentElement).getPropertyValue(colorDotCSSProp)
  const color = window.getComputedStyle(document.documentElement).getPropertyValue(colorCSSProp)

  canvas.width = window.innerWidth
  canvas.height = window.innerHeight
  ctx.fillStyle = colorDot
  ctx.lineWidth = 0.1
  ctx.strokeStyle = color

  const mousePosition = {
    x: 30 * canvas.width / 100,
    y: 30 * canvas.height / 100
  }

  const dots = {
    nb: 600,
    distance: 60,
    d_radius: 1000000,
    array: []
  }

  function Dot () {
    this.x = Math.random() * canvas.width
    this.y = Math.random() * canvas.height

    this.vx = -0.5 + Math.random()
    this.vy = -0.5 + Math.random()

    this.radius = Math.random()
  }

  Dot.prototype = {
    create: function () {
      ctx.beginPath()
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
      ctx.fill()
    },

    animate: function () {
      let i
      for (i = 0; i < dots.nb; i++) {
        const dot = dots.array[i]

        if (dot.y < 0 || dot.y > canvas.height) {
          dot.vy = -dot.vy
        } else if (dot.x < 0 || dot.x > canvas.width) {
          dot.vx = -dot.vx
        }
        dot.x += dot.vx
        dot.y += dot.vy
      }
    },

    line: function () {
      let i
      for (i = 0; i < dots.nb; i++) {
        let j
        for (j = 0; j < dots.nb; j++) {
          const iDot = dots.array[i]
          const jDot = dots.array[j]

          if (
            iDot.x - jDot.x < dots.distance &&
            iDot.y - jDot.y < dots.distance &&
            iDot.x - jDot.x > -dots.distance &&
            iDot.y - jDot.y > -dots.distance
          ) {
            if (
              iDot.x - mousePosition.x < dots.d_radius &&
              iDot.y - mousePosition.y < dots.d_radius &&
              iDot.x - mousePosition.x > -dots.d_radius &&
              iDot.y - mousePosition.y > -dots.d_radius
            ) {
              ctx.beginPath()
              ctx.moveTo(iDot.x, iDot.y)
              ctx.lineTo(jDot.x, jDot.y)
              ctx.stroke()
              ctx.closePath()
            }
          }
        }
      }
    }
  }

  function createDots () {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    let i
    let dot
    for (i = 0; i < dots.nb; i++) {
      dots.array.push(new Dot())
      dot = dots.array[i]

      dot.create()
    }

    dot.line()
    dot.animate()
  }

  window.onmousemove = function (parameter) {
    mousePosition.x = parameter.pageX
    mousePosition.y = parameter.pageY
  }

  mousePosition.x = window.innerWidth / 2
  mousePosition.y = window.innerHeight / 2

  setInterval(createDots, 1000 / 30)
}

const light = {
  canvasSelector: '.mds-home-page-hero--light',
  colorDotCSSProp: '--mds-home-page-hero-light',
  colorCSSProp: '--mds-home-page-hero-light'
}

const dark = {
  canvasSelector: '.mds-home-page-hero--dark',
  colorDotCSSProp: '--mds-home-page-hero-dark',
  colorCSSProp: '--mds-home-page-hero-dark'
}

window.onload = function () {
  hero(light)
  hero(dark)
}
