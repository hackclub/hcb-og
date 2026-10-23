import { Event } from './event'

// Same canvas as the embed, with all content inside the centered 700x700 square
function SquareEvent(props) {
    return <Event {...props} contentInset={SquareEvent.contentInset} nameSize={88} />
}

SquareEvent.previewProps = Event.previewProps

SquareEvent.size = Event.size
SquareEvent.contentInset = (Event.size.width - 700) / 2

SquareEvent.fetchProps = Event.fetchProps
SquareEvent.fetchFonts = Event.fetchFonts

export default SquareEvent;
