import { ImageResponse } from "@vercel/og";
import Fallback from "./fallback";

export async function imageHandler (image, propsArgs) {
    console.log('imageHandler start');
    const [props, fonts] = await Promise.all([
        image.fetchProps(...propsArgs).catch(error => {
            console.error('fetchProps failed, rendering fallback', error);
            return null;
        }),
        image.fetchFonts()
    ]);

    if (!props) {
        // Don't let crawlers cache the fallback forever in case the org becomes available
        return new ImageResponse(<Fallback {...await Fallback.fetchProps()} />, {
            fonts,
            ...image.size,
            headers: { 'cache-control': 'public, max-age=300' }
        });
    }

    const Component = image;

    const imageResponse = new ImageResponse(<Component {...props} />, { fonts, ...image.size });

    return imageResponse;
}
