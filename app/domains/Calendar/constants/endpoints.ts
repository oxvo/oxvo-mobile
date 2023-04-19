type SearchParams = {
  startTime: Date;
  staffId: string;
};

const CALENDAR_ENDPOINTS = {
  SEARCH: 'v1/calendar',
};

const calendarEndpointFunctions = {
  search: ({ startTime, staffId }: SearchParams): string => {
    const queryParams = new URLSearchParams({
      start_time: startTime.toISOString(),
      staffId,
    });

    return `${CALENDAR_ENDPOINTS.SEARCH}?${queryParams.toString()}`;
  },
};

const CalendarEndpoints = {
  ...CALENDAR_ENDPOINTS,
  ...calendarEndpointFunctions,
};

export default CalendarEndpoints;
