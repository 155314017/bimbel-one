import React, { useState } from "react";
import { Calendar, momentLocalizer, SlotInfo, Event as CalendarEvent, Views } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import './styles.css'; // Pastikan file CSS ini diimpor

const localizer = momentLocalizer(moment);

interface Event extends CalendarEvent {
    id: string; // ID unik untuk setiap event
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
    const [currentView, setCurrentView] = useState<string>(Views.MONTH); // Melacak tampilan saat ini

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
                    event.id === selectEvent.id ? updatedEvent : event
                );
                setEvents(updatedEvents);
            } else {
                const newEvent: Event = {
                    id: `event_${Date.now()}`, // Generate a unique ID
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
            const updatedEvents = events.filter((event) => event.id !== selectEvent.id);
            setEvents(updatedEvents);
            setShowModal(false);
            setEventTitle("");
            setSelectEvent(null);
        }
    };

    return (
        <div className="ml-16 w-[75vw] h-[522px] ">
            <Calendar
                localizer={localizer}
                events={events}
                startAccessor="start"
                endAccessor="end"
                style={{ margin: "50px" }}
                selectable={true}
                onSelectSlot={handleSelectSlot}
                onSelectEvent={handleSelectedEvent}
                views={['month', 'week', 'day', 'agenda']}  // Menambahkan tampilan Month, Week, Day, dan Agenda
                defaultView={Views.MONTH}  // Menyetel tampilan default ke Month
                onView={(view) => setCurrentView(view)} 
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
                        zIndex: 9998,
                    }}
                >
                    <div
                        className="modal"
                        style={{
                            height: "150px",
                            width: "350px",
                            backgroundColor: "whitesmoke",
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                            zIndex: 9999,
                            padding: "20px",
                            borderRadius: "10px",
                        }}
                    >
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header flex flex-row justify-between">
                                    <h5 className="modal-title">
                                        {selectEvent ? "Edit Task" : "Add Task"}
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
                                <div className="modal-body flex flex-row justify-between">
                                    <label htmlFor="eventTitle" className="form-label">
                                        Task :
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control rounded-[5px]"
                                        id="eventTitle"
                                        value={eventTitle}
                                        onChange={(e) => setEventTitle(e.target.value)}
                                    />
                                </div>
                                <div className="modal-footer flex flex-row gap-6 mt-4">
                                    {selectEvent && (
                                        <button
                                            type="button"
                                            className="btn btn-danger me-2 bg-red-600 px-3 py-2 rounded-md text-white hover:bg-red-500"
                                            onClick={deleteEvents}
                                        >
                                            Delete Event
                                        </button>
                                    )}
                                    <button
                                        type="button"
                                        onClick={saveEvent}
                                        className="bg-[#125B9A] px-3 py-2 rounded-md text-white hover:bg-blue-600 btn btn-primary"
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
