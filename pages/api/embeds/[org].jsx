import { Event } from '../../../components/images/Event'
import { imageHandler } from '../../../components/images/imageHandler'

export const config = {
    runtime: 'edge',
}

export default async function handler(req) {
    return imageHandler(Event, [handler(Event, req.nextUrl.searchParams.get('org'))]);
}
