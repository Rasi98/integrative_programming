import axios from "axios";

const SENSOR_REST_API_URL = "http://localhost:9090/sensor/addsensor";

class SensorService {
  setSensors() {
    return axios.post(SENSOR_REST_API_URL);
  }
}

export default new SensorService();
