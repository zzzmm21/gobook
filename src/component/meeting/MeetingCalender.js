import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import { useState, useEffect } from 'react';
import 'assets/css/Calendar.css';
import { getAllOrders } from 'api';

function renderEventContent(eventInfo) {
  return (
    <>
      <i>{eventInfo.event.title}</i>
    </>
  );
}

function MeetingCalender(className) {
  const [events, setEvents] = useState([]);
  useEffect(() => {
    listLoad();
  }, []);

  const listLoad = async (search) => {
    const orders = await getAllOrders();
    const transformedData = orders.map((order) => ({
      autoIncrementField: order.autoIncrementField,
      title: order.title,
      date: order.order[0].date,
    }));

    console.log(transformedData);
    setEvents(transformedData);
  };

  const [currentEvents, setCurrentEvents] = useState([]);

  const handleEventClick = (clickInfo) => {
    window.location.href =
      'http://localhost:3000/meeting/info/' +
      clickInfo.event.autoIncrementField;
  };

  const handleEvents = (events) => {
    setCurrentEvents(events);
  };

  return (
    <div className={className.className}>
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, listPlugin]}
        headerToolbar={{
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,listDay',
        }}
        buttonText={{
          listDay: 'day',
        }}
        initialView='dayGridMonth'
        selectable={true}
        selectMirror={true}
        dayMaxEvents={true}
        events={events}
        eventContent={renderEventContent}
        eventClick={handleEventClick}
        eventsSet={handleEvents}
        height='600px'
      />
    </div>
  );
}

export default MeetingCalender;
