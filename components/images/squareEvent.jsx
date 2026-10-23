import { Event } from './event'

function SquareEvent(props) {
    return <Event {...props} {...SquareEvent.size} nameSize={88} />
}

SquareEvent.previewProps = Event.previewProps

SquareEvent.size = {
    width: 700,
    height: 700
}

SquareEvent.fetchProps = Event.fetchProps
SquareEvent.fetchFonts = Event.fetchFonts

export default SquareEvent;
