import styles from '../styles/reyouSchedule.module.css';

export default function ReunionSchedule() {
  const scheduleData = [
    {
      dayNumber: "Day 1",
      date: "Friday, 30th August 2022",
      events: [
        { time: "00:00", title: "Loren Ipsum" },
        { time: "00:00", title: "Loren Ipsum" },
        { time: "00:00", title: "Loren Ipsum" },
        { time: "00:00", title: "Loren Ipsum" },
        { time: "00:00", title: "Loren Ipsum" },
        { time: "00:00", title: "Loren Ipsum" },
      ]
    },
    {
      dayNumber: "Day 2",
      date: "Saturday, 31st August 2022",
      events: [
        { time: "00:00", title: "Loren Ipsum" },
        { time: "00:00", title: "Loren Ipsum" },
        { time: "00:00", title: "Loren Ipsum" },
        { time: "00:00", title: "Loren Ipsum" },
        { time: "00:00", title: "Loren Ipsum" },
        { time: "00:00", title: "Loren Ipsum" },
        { time: "00:00", title: "Loren Ipsum" },
        { time: "00:00", title: "Loren Ipsum" },
        { time: "00:00", title: "Loren Ipsum" },
      ]
    },
    {
      dayNumber: "Day 3",
      date: "Sunday, 1st September 2022",
      events: [
        { time: "00:00", title: "Loren Ipsum" },
        { time: "00:00", title: "Loren Ipsum" },
        { time: "00:00", title: "Loren Ipsum" },
        { time: "00:00", title: "Loren Ipsum" },
        { time: "00:00", title: "Loren Ipsum" },
        { time: "00:00", title: "Loren Ipsum" },
      ]
    }
  ];

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Reunion Schedule</h1>

      {scheduleData.map((day, dayIndex) => (
        <div key={dayIndex} className={styles.daySection}>
          <div className={styles.dayHeader}>
            <span className={styles.dayNumber}>{day.dayNumber}</span>
            <span className={styles.dayDate}>{day.date}</span>
          </div>

          <div className={styles.scheduleGrid}>
            {day.events.map((event, index) => (
              <div key={index} className={styles.scheduleItem}>
                <div className={styles.timeWrapper}>
                  <div className={styles.clockIconWrapper}>
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.clockIcon}>
                      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2"/>
                      <path d="M12 7V12L15 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <span className={styles.time}>{event.time}</span>
                </div>
                <h2 className={styles.eventTitle}>{event.title}</h2>
                {index % 3 !== 2 && <div className={styles.verticalSeparator} />}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
