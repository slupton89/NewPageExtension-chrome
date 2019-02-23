import request from 'superagent'
import { GOOGLE_ID } from '../../config'

const CALENDAR_ID = 'dHA3N3MyMXRzb2ttbGE1NDBqYjQ2czBzMm9AZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ'

let url = `https://www.googleapis.com/calendar/v3/calendars/${CALENDAR_ID}/events?key=${GOOGLE_ID}`

export function getEvents (callback) {
  request
    .get(url)
    .end((err, resp) => {
      if (!err) {
        const events = []
        JSON.parse(resp.text).items.map((event) => {
          events.push({
            start: event.start.date || event.start.dateTime,
            end: event.end.date || event.end.dateTime,
            title: event.summary,
          })
        })
        callback(events)
      }
    })
}