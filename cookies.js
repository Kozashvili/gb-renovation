setCookies = (cName, cValue, expDays) => {
  let date = new Date();
  date.setTime(date.getTime() + (expDays * 24 * 60 * 60 * 1000));
  const expires = "expires=" + date.toUTCString();
  document.cookie = cName + "=" + cValue + "; " + expires + "; path=/";
};
getCookie = (cName) => {
  const name = cName + "=";
  const cDecoded = decodeURIComponent(document.cookie);
  const cArr = cDecoded.split("; ");
  let value;
  cArr.forEach(val => {
    if (val.indexOf(name) === 0) value = val.substring(name.length);
  });

  return value;
};
document.querySelector("#cookies-btn").addEventListener("click", () => {
  document.querySelector("#cookies").style.display = "none";
  setCookies("cookie", true, 30);
});
cookieMessage = () => {
  if (!getCookie("cookie"))
    document.querySelector("#cookies").style.display = "block";
};
window.addEventListener("load", cookieMessage);
// Function to set analytics cookies
// ... (your existing code)

// Function to set analytics cookies
setAnalyticsCookies = () => {
  // Replace these values with your actual analytics data
  const analyticsData = {
    pagesVisited: ['GB-Renovation', 'about', 'contact'],
    affiliateReferral: 'example_affiliate',
    productPurchase: 'example_product',
  };

  // Convert the data to a JSON string
  const analyticsJSON = JSON.stringify(analyticsData);

  // Set the analytics cookie with a 30-day expiration
  setCookies("analytics", analyticsJSON, 30);
}

// Function to get analytics data from cookies
getAnalyticsData = () => {
  const analyticsCookie = getCookie("analytics");

  // If the analytics cookie is present, parse and return the data
  if (analyticsCookie) {
    return JSON.parse(analyticsCookie);
  }

  // Return a default value or handle as needed
  return {};
}

// Example usage:
setAnalyticsCookies(); // Call this when you want to set analytics cookies

// Get analytics data and log the pagesVisited array
const analyticsData = getAnalyticsData();
console.log("Pages Visited:", analyticsData.pagesVisited);


