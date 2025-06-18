import { colors } from '@devnestali-call-ui/tokens'
import { getContrast } from 'polished'

export function ColorsGrid() {
  return (
    <div style={{ display: 'grid', gap: '1rem' }}>
      {Object.entries(colors).map(([key, color]) => (
        <div key={key} style={{ backgroundColor: color, padding: '2rem' }}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              fontFamily: 'monospace',
              color: getContrast(color, '#fff') < 3.5 ? '#000' : '#fff',
            }}
          >
            <strong>${key}</strong>
            <span>{color}</span>
          </div>
        </div>
      ))}
    </div>
  )
}
