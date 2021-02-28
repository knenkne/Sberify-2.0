export const getPercent = (time, duration) => ((time / duration) * 100).toFixed(1);
export const getTime = (percent, duration) => Math.floor((percent * duration) / 100);
export const getLeftTime = (time, duration) => Math.floor(duration - time);
export const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const leftSeconds = String(seconds % 60).padStart(2, '0');

    return `${minutes}:${leftSeconds}`;
};
