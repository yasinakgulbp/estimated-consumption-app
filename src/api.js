import axios from 'axios';

// Backend URL'sini tam olarak belirleyin
const BASE_URL = 'http://localhost:8080';

export const getCities = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/api/cities`);
    if (Array.isArray(response.data)) {
      return response.data;
    } else {
      console.error("API'den gelen veriler dizi formatında değil:", response.data);
      return [];
    }
  } catch (error) {
    console.error("Şehirleri çekerken bir hata oluştu:", error);
    return [];
  }
};

// calculateConsumption fonksiyonunun export edildiğinden emin olun
export const calculateConsumption = async (plaka, temperature) => {
  try {
    const response = await axios.post(`${BASE_URL}/api/consumption`, {
      plaka,
      temprature: temperature,
    });
    return response.data;
  } catch (error) {
    console.error("Tüketimi hesaplarken bir hata oluştu:", error);
    return null;
  }
};
