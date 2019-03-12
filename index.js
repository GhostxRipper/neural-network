;(function(d) {
  const Container = d.getElementById('root')

  const html = String.raw

  const rand = (high, low) => Math.random() * (high - low) + low

  const X_MAX = 400
  const Y_MAX = 400

  const team = point => (point.x > point.y ? 1 : -1)

  const randomPoints = Array.from({ length: 500 }, () => ({
    x: rand(0, X_MAX),
    y: rand(0, Y_MAX),
  }))

  const svg = html`
    <svg width="${X_MAX}" height="${Y_MAX}">
      ${
        randomPoints
          .map(
            ({ x, y }) =>
              `
            <circle
              cx="${x}"
              cy="${y}"
              r="5"
              fill="${team({ x, y }) === -1 ? 'blue' : 'red'}"
            />
          `,
          )
          .join('')
      }
      <line x1="0" x2="${X_MAX}" y1="0" y2="${Y_MAX}" stroke="purple" />
    </svg>
  `
  Container.innerHTML = svg
})(document)
