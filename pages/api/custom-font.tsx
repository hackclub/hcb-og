import { ImageResponse } from '@vercel/og'

export const config = {
  runtime: 'edge',
}

const regular = fetch(new URL('../../public/PhantomSans0.8-Regular.ttf', import.meta.url)).then(
  (res) => res.arrayBuffer()
)

export default async function handler() {
  const fontData = await regular

  return new ImageResponse(
    (
      <div
        style={{
          backgroundColor: 'white',
          height: '100%',
          width: '100%',
          fontSize: 100,
          fontFamily: '"Phantom Sans 0.8", "Phantom Sans", Phantom Sans 0.8, Phantom Sans, Regular',
          paddingTop: '100px',
          paddingLeft: '50px',
        }}
      >
        Hello world!
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: 'Phantom Sans',
          data: fontData,
          style: 'normal',
        },
      ],
    }
  )
}
