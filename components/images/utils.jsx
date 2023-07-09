function PreviewWrapper ({ children, width, height }) {
    return (
        <div style={{
            width: '100vw',
            height: '100vh',
            display: 'block',
            position: 'absolute',
            top: 0,
            left: 0,
            backgroundColor: '#fff',
        }}>
            <div style={{
                width: '100vw',
                height: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'absolute',
                top: 0,
                left: 0,
                backgroundColor: '#000'
            }}>
                <div style={{
                    backgroundColor: '#fff',
                    width: `${width}px`,
                    height: `${height}px`
                }}>
                    {children}
                </div>
            </div>
        </div>
    )
}

export function PreviewPage ({ image }) {
    const Component = image;
    return (
        <PreviewWrapper {...image.size}>
            <Component {...image.previewProps} />
        </PreviewWrapper>
    )
}
