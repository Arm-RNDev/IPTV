export const formatDuration = (seconds) => {
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60); 
  if (h > 0) {
    return `${h}h ${m}min`;
  }
  return `${m}min`;
};