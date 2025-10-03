// Web Vitals untuk monitoring performance
export function reportWebVitals(metric: any) {
  // Log ke console untuk development
  if (process.env.NODE_ENV === 'development') {
    console.log(metric);
  }
  
  // Kirim ke analytics service (opsional)
  // analytics.track('Web Vital', {
  //   name: metric.name,
  //   value: metric.value,
  //   id: metric.id,
  // });
}