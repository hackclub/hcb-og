import { ImageResponse } from "@vercel/og";

export async function imageHandler (image, propsArgs) {
    const [props, fonts] = await Promise.all([
        image.fetchProps(...propsArgs),
        image.fetchFonts()
    ]);

    const Component = image;

    return new ImageResponse(<Component {...props} />, { fonts, ...image.size });
}
