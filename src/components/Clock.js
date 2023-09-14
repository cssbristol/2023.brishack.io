import { useEffect, useState } from "react"

const tick = (setTimeLeft, eventDate, currentTime) => {
    const diffTime = eventDate - currentTime,
        diffSecs = Math.floor(diffTime / 1000),
        diffMins = Math.floor(diffSecs / 60),
        diffHours = Math.floor(diffMins / 60),
        diffDays = Math.floor(diffHours / 24);

    const days = diffDays;
    const hours = diffHours - (days * 24);
    const minutes = diffMins - (days * 24 * 60) - (hours * 60);
    const seconds = diffSecs - (days * 24 * 60 * 60) - (hours * 60 * 60) - (minutes * 60);
    
    setTimeLeft({
        days,
        hours,
        minutes,
        seconds
    });

}

const zeroIfNegative = (num) => {
    return num > 0 ? num : 0;
}

export const Clock = () => {
    const [timeLeft, setTimeLeft] = useState({ days: 100, hours: 100, mins: 100, secs: 100 })

    useEffect(() => {
        if (timeLeft.days + timeLeft.hours + timeLeft.mins + timeLeft.secs > 0) {
            setInterval(() => {
                tick(setTimeLeft, new Date('2023-02-26T11:00'), Date.now());
            }, 1000);
        }

    }, [timeLeft]);

    return (
        <div className="clock">
            <div className="days" data-label="Days">{`${zeroIfNegative(timeLeft.days)}`}</div>
            <div className="hours" data-label="Hours">{`${zeroIfNegative(timeLeft.hours)}`}</div>
            <div className="mins" data-label="Minutes">{`${zeroIfNegative(timeLeft.minutes)}`}</div>
            <div className="secs" data-label="Seconds">{`${zeroIfNegative(timeLeft.seconds)}`}</div>
        </div>
    )
}
