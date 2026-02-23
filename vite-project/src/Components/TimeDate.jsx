import React, { useState, useEffect } from 'react';

const TimeDate = () => {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(timer); // cleanup
  }, []);

  const time = now.toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
  });

  const date = now.toLocaleDateString([], {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  });

  return (
    <div style={styles.container}>
      <div>{time}</div>
      <div>{date}</div>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'right',
    fontSize: '12px',
    color: '#ffffffcc',
    lineHeight: '1.2',
    fontFamily: 'Segoe UI, sans-serif',
    paddingRight: '10px',
  },
};

export default TimeDate;
