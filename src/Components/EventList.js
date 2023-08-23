import React, { useState, useEffect } from 'react';
import axios from 'axios';

const EventList = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      const endpoint = 'https://www.eventbriteapi.com/v3';
      const params = {
        'location.address': 'New York',
        token: 'ORFMVOTGSQAXTRN5PSLY'
      };
  
      try {
        const response = await axios.get(endpoint, { params });
        console.log('API Response:', response);
  
        if (response.data && response.data.events) {
          setEvents(response.data.events);
        } else {
          console.error('No events found in response:', response);
        }
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };
  
    fetchEvents();
  }, []);
  

  return (
    <div>
      {/* Render the list of events */}
    </div>
  );
};

export default EventList;
