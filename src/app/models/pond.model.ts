export interface Pond {
  id: string;
  name: string;
  sensors: Sensor[];
}

export interface Sensor {
  type: string;
  value: string;
}
