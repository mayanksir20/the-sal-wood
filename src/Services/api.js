// Menu fetch API

export const fetchMenu = async () => {
  try {
    const res = await fetch("http://localhost:5000/menu");
    const data = await res.json();
    console.log("API response:", data); // 👈 confirm
    return data;
  } catch (err) {
    console.error("API error:", err);
    return [];
  }
};

// bannerContent fetch API
export const fetchBannerContent = async () => {
  try {
    const res = await fetch("http://localhost:5000/bannerContent");
    const data = await res.json();
    return data;
  } catch (err) {
    console.error("API error:", err);
    return [];
  }
};


