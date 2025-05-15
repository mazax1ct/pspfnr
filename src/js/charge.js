new AirDatepicker('#charge_calendar_el', {
    prevHtml: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.5 4.5L11.5725 5.54475L5.8875 11.25H21V12.75H5.8875L11.5725 18.4298L10.5 19.5L3 12L10.5 4.5Z"/></svg>',
    nextHtml: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 4.5L12.4275 5.54475L18.1125 11.25H3V12.75H18.1125L12.4275 18.4298L13.5 19.5L21 12L13.5 4.5Z"/></svg>',
    multipleDates: true,
    selectedDates: ['2025-04-30', '2025-05-01', '2025-05-02', '2025-05-03', '2025-05-13', '2025-05-16'],
    toggleSelected: false,
    onRenderCell({date, cellType}) {
        // Disable all 12th dates in month
        if (cellType === 'day') {
                return {
                    disabled: true,
                    classes: 'disabled-class'

                }

        }
    }
});

$('video').on('ended', function() {
    console.log("Молодец, дошёл до конца. Заслуженный лайк!");
});
