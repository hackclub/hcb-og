import SquareEvent from '../../../components/images/squareEvent'
import { imageHandler } from '../../../components/images/imageHandler'

export const config = {
    runtime: 'edge',
}

export default async function handler(req) {
    const paths = new URL(req.url).pathname.split('/');
    const index = paths.indexOf('square-embed');
    const slug = paths[index + 1];
    console.log({slug});
    return imageHandler(SquareEvent, [slug]);
}
