function timeZone() {
  const location = document.querySelector("#timeOfDay");
  const entry = document.createElement("div");
  const dt = new Date();
  const hour = dt.getHours();
  console.log(hour);
  console.log((hour >= 0) && (hour <= 11));
  console.log((hour >= 12) && (hour <= 16));
  if ((hour >= 0) && (hour <= 11)) {
    entry.textContent = "Good Morning";
  } else if ((hour >= 12) && (hour <= 16)) {
    entry.textContent = "Good afternoon";
  } else {
    entry.textContent = "Good evening";
  }
  console.log(entry);
  location.append(entry);
}

timeZone();