import { Event } from '../../../components/images/Event'
import { imageHandler } from '../../../components/images/imageHandler'

export const config = {
    runtime: 'edge',
}

export default async function handler(req) {
    const slug = new URL(req.url).searchParams.get('org');
    return imageHandler(Event, [slug]);
}
