export const analytics = {
  trackEvent: (eventName, eventData) => {
    if (window.gtag) {
      window.gtag("event", eventName, eventData);
    }
    console.log(`[Analytics] ${eventName}:`, eventData);
  },

  trackPageView: (pageName) => {
    if (window.gtag) {
      window.gtag("config", "GA_MEASUREMENT_ID", {
        page_path: pageName
      });
    }
    console.log(`[Analytics] Page view: ${pageName}`);
  },

  trackBooking: (vehicleId, vehicleName, price) => {
    analytics.trackEvent("add_to_cart", {
      currency: "KES",
      value: price,
      items: [{ item_id: vehicleId, item_name: vehicleName, price }]
    });
  },

  trackContactSubmit: (contactType) => {
    analytics.trackEvent("contact", { type: contactType });
  }
};