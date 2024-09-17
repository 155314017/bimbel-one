import React, { useState } from "react";
import { Calendar, momentLocalizer, SlotInfo, Event as CalendarEvent } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

interface Event extends CalendarEvent {
    title: string;
    start: Date;
    end: Date;
}

const CalendarGfg: React.FC = () => {
    const [events, setEvents] = useState<Event[]>([]);
    const [showModal, setShowModal] = useState<boolean>(false);
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);
    const [eventTitle, setEventTitle] = useState<string>("");
    const [selectEvent, setSelectEvent] = useState<Event | null>(null);

    const handleSelectSlot = (slotInfo: SlotInfo) => {
        setShowModal(true);
        setSelectedDate(slotInfo.start);
        setSelectEvent(null);
    };

    const handleSelectedEvent = (event: Event) => {
        setShowModal(true);
        setSelectEvent(event);
        setEventTitle(event.title);
    };

    const saveEvent = () => {
        if (eventTitle && selectedDate) {
            if (selectEvent) {
                const updatedEvent: Event = { ...selectEvent, title: eventTitle };
                const updatedEvents = events.map((event) =>
                    event === selectEvent ? updatedEvent : event
                );
                setEvents(updatedEvents);
            } else {
                const newEvent: Event = {
                    title: eventTitle,
                    start: selectedDate,
                    end: moment(selectedDate).add(1, "hours").toDate(),
                };
                setEvents([...events, newEvent]);
            }
            setShowModal(false);
            setEventTitle("");
            setSelectEvent(null);
        }
    };

    const deleteEvents = () => {
        if (selectEvent) {
            const updatedEvents = events.filter((event) => event !== selectEvent);
            setEvents(updatedEvents);
            setShowModal(false);
            setEventTitle("");
            setSelectEvent(null);
        }
    };

    return (
        <div style={{ height: "522px", width: "1061" }} className="mt-12">
            <Calendar
                localizer={localizer}
                events={events}
                startAccessor="start"
                endAccessor="end"
                style={{ margin: "50px" }}
                selectable={true}
                onSelectSlot={handleSelectSlot}
                onSelectEvent={handleSelectedEvent}
            />

            {showModal && (
                <div
                    style={{
                        backgroundColor: "rgba(0,0,0,0.5)",
                        position: "fixed",
                        top: 0,
                        bottom: 0,
                        left: 0,
                        right: 0,
                        zIndex: 9998, // Ensure overlay is on top of the calendar
                    }}
                >
                    <div
                        className="modal"
                        style={{
                            height: "150px",
                            width: "350px",
                            backgroundColor: "whitesmoke",
                            position: "absolute", // Changed from fixed to absolute to position in the center
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)", // Center the modal
                            zIndex: 9999, // Ensure modal content is on top of the overlay
                            padding: "20px", // Add some padding for aesthetics
                            borderRadius: "10px", // Optional: Make the modal corners rounded
                        }}
                    >
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title">
                                        {selectEvent ? "Edit Event" : "Add Event"}
                                    </h5>
                                    <button
                                        type="button"
                                        className="btn-close"
                                        style={{
                                            backgroundColor: "transparent",
                                            border: "none",
                                            fontSize: "20px",
                                            cursor: "pointer",
                                        }}
                                        onClick={() => {
                                            setShowModal(false);
                                            setEventTitle("");
                                            setSelectEvent(null);
                                        }}
                                    >
                                        &times;
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <label htmlFor="eventTitle" className="form-label">
                                        Event Title:
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="eventTitle"
                                        value={eventTitle}
                                        onChange={(e) => setEventTitle(e.target.value)}
                                    />
                                </div>
                                <div className="modal-footer">
                                    {selectEvent && (
                                        <button
                                            type="button"
                                            className="btn btn-danger me-2"
                                            onClick={deleteEvents}
                                        >
                                            Delete Event
                                        </button>
                                    )}
                                    <button
                                        type="button"
                                        className="btn btn-primary"
                                        onClick={saveEvent}
                                    >
                                        Save
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

        </div>
    );
};

export default CalendarGfg;
