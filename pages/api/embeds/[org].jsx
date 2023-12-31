import { Event } from '../../../components/images/event'
import { imageHandler } from '../../../components/images/imageHandler'

export const config = {
    runtime: 'edge',
}

export default async function handler(req) {
    const paths = new URL(req.url).pathname.split('/');
    const index = paths.indexOf('embeds');
    const slug = paths[index + 1];
    console.log({slug});
    return imageHandler(Event, [slug]);
}
