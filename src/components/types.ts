export interface dataElement {
  discriminator: string,
  platesNumber: string,
  sideNumber: string,
  color: string,
  type: string,
  picture: {
    id: string,
    name: string,
    extension: any,
    contentType: any
  },
  rangeKm: number,
  batteryLevelPct: number,
  reservationEnd: any,
  reservation: any,
  status: string,
  locationDescription: any,
  address: any,
  mapColor: {
    rgb: string,
    alpha: number
  },
  promotion: any,
  id: string,
  name: string,
  description: any,
  location: {
    latitude: number,
    longitude: number
  },
  metadata: any
}