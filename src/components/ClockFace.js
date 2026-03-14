'use client';

/**
 * ClockFace - renders an SVG analogue clock showing the given time.
 *
 * Props:
 *   time  – string like "2:05", "9:30", "12:00"
 *   size  – number, pixel width/height (default 100)
 */
export default function ClockFace({ time, size = 100 }) {
    const [rawH, rawM] = time.split(':').map(Number);
    const hours = rawH % 12;
    const minutes = rawM || 0;

    // Minute hand: 360° / 60 = 6° per minute
    const minuteAngle = minutes * 6;
    // Hour hand: 360° / 12 = 30° per hour + 0.5° per minute
    const hourAngle = hours * 30 + minutes * 0.5;

    const cx = 50, cy = 50, r = 44;

    // Generate hour markers
    const markers = [];
    for (let i = 0; i < 12; i++) {
        const angle = (i * 30 - 90) * (Math.PI / 180);
        const outer = r - 1;
        const inner = i % 3 === 0 ? r - 8 : r - 5;
        markers.push(
            <line
                key={i}
                x1={cx + inner * Math.cos(angle)}
                y1={cy + inner * Math.sin(angle)}
                x2={cx + outer * Math.cos(angle)}
                y2={cy + outer * Math.sin(angle)}
                stroke="#555"
                strokeWidth={i % 3 === 0 ? 2.5 : 1.2}
                strokeLinecap="round"
            />
        );
    }

    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 100 100"
            style={{ display: 'block', margin: '0 auto' }}
        >
            {/* Clock face */}
            <circle cx={cx} cy={cy} r={r} fill="#f8f8f0" stroke="#b0a080" strokeWidth="2.5" />
            <circle cx={cx} cy={cy} r={r - 3} fill="none" stroke="#e8e0d0" strokeWidth="0.5" />

            {/* Hour markers */}
            {markers}

            {/* Hour hand – shorter, thicker */}
            <line
                x1={cx}
                y1={cy}
                x2={cx + 22 * Math.sin(hourAngle * Math.PI / 180)}
                y2={cy - 22 * Math.cos(hourAngle * Math.PI / 180)}
                stroke="#333"
                strokeWidth="3.5"
                strokeLinecap="round"
            />

            {/* Minute hand – longer, thinner */}
            <line
                x1={cx}
                y1={cy}
                x2={cx + 34 * Math.sin(minuteAngle * Math.PI / 180)}
                y2={cy - 34 * Math.cos(minuteAngle * Math.PI / 180)}
                stroke="#555"
                strokeWidth="2"
                strokeLinecap="round"
            />

            {/* Center dot */}
            <circle cx={cx} cy={cy} r="3" fill="#b0a080" />
            <circle cx={cx} cy={cy} r="1.5" fill="#333" />
        </svg>
    );
}
