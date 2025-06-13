export function Line({ color = '#414141', thickness = '1px', margin = '2rem 0' }) {
    return (
        <hr
            style={{
                border: 'none',
                borderTop: `${thickness} solid ${color}`,
                margin,
                width: '100%',
            }}
        />
    );
}