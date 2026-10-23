// Shown when an organization can't be loaded (e.g. it doesn't exist or isn't public)
function Fallback({ logo, width, contentInset = 0 }) {
    return (
        <div style={{
            display: 'flex',
            width: '100%',
            height: '100%',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '40px',
            backgroundColor: '#fff',
            color: '#1f2d3d',
        }}>
            <img src={logo} width="200" height="200" />
            <span style={{
                // Shrink when content is inset (e.g. the square embed) so it stays on one line
                fontSize: `${Math.min(96, Math.floor((width - 2 * contentInset) / 9))}px`,
                fontFamily: '"Phantom Sans 0.7"',
                fontWeight: 700,
            }}>HCB by Hack Club</span>
        </div>
    )
}

Fallback.fetchProps = async () => {
    // hcb-icon.svg's mask fill is #fff rather than #000 because resvg ignores mask-type:alpha
    const svg = await fetch(new URL("./hcb-icon.svg", import.meta.url)).then(r => r.text());

    return {
        logo: `data:image/svg+xml;base64,${btoa(svg)}`
    }
}

export default Fallback;
