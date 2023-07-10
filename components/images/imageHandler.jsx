import { ImageResponse } from "@vercel/og";

export async function imageHandler (image, propsArgs) {
    console.log('imageHandler start');
    const [props, fonts] = await Promise.all([
        image.fetchProps(...propsArgs),
        image.fetchFonts()
    ]);

    const Component = image;

    const imageResponse = new ImageResponse(<Component {...props} />, { fonts, ...image.size });
    
    console.log('imageHandler end');

    return imageResponse;
}
