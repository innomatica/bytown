
export const gisOttawa: GisLayer[] = [
  {
    name: 'art and culture',
    url: 'https://maps.ottawa.ca/arcgis/rest/services/City_Facilities/MapServer/0',
    minZoom: 14
  },
  // {
  // 	name: "beaches",
  // 	url: "https://maps.ottawa.ca/arcgis/rest/services/Parks_Inventory/MapServer/0",
  // },
  // {
  // 	name: "benches",
  // 	url: "https://maps.ottawa.ca/arcgis/rest/services/Parks_Inventory/MapServer/28",
  // },
  // {
  // 	name: "bike repair stations",
  // 	url: "https://services.arcgis.com/G6F8XLCl5KtAlZ2G/arcgis/rest/services/Bike_Repair_Stations/FeatureServer/0",
  // },
  {
    name: 'community',
    url: 'https://maps.ottawa.ca/arcgis/rest/services/OfficialPlan/MapServer/129',
    minZoom: 14
  },
  {
    name: 'community gardens',
    url: 'https://maps.ottawa.ca/arcgis/rest/services/Community_Gardens/MapServer/0',
    minZoom: 14
  },
  {
    name: 'cycling',
    url: 'https://maps.ottawa.ca/arcgis/rest/services/CyclingMap/MapServer/3',
    // NCC data covers larger area however not available as a layer at the moment
    // https://www.arcgis.com/home/item.html?id=d69460c2d8df472db1a456183bc624fc
    // url: "https://www.arcgis.com/apps/View/index.html?appid=d69460c2d8df472db1a456183bc624fc",
    minZoom: 14
  },
  {
    name: 'doors open',
    url: 'https://maps.ottawa.ca/arcgis/rest/services/DoorsOpen/MapServer/0',
    minZoom: 15
  },
  {
    name: 'food',
    url: 'https://maps.ottawa.ca/arcgis/rest/services/OfficialPlan/MapServer/134',
    minZoom: 14
  },
  {
    name: 'heritage',
    url: 'https://maps.ottawa.ca/arcgis/rest/services/OfficialPlan/MapServer/133',
    minZoom: 14
  },
  {
    name: 'hospitals',
    url: 'https://maps.ottawa.ca/arcgis/rest/services/Hospitals/MapServer/0',
    minZoom: 12
  },
  // {
  // 	name: "learning",
  // 	url: "https://maps.ottawa.ca/arcgis/rest/services/OfficialPlan/MapServer/131",
  // 	minZoom: 15,
  // },
  {
    name: 'nature',
    url: 'https://maps.ottawa.ca/arcgis/rest/services/OfficialPlan/MapServer/137',
    minZoom: 14
  },
  // NCC Open Data
  // https://www.arcgis.com/home/item.html?id=cdb843a5dbf74467a511076328ca2463
  {
    name: 'NCC Gatineau Park Lookouts',
    url: 'https://services2.arcgis.com/WLyMuW006nKOfa5Z/arcgis/rest/services/Gatineau_Park_Lookouts_view2/FeatureServer/0',
    minZoom: 12
  },
  {
    name: 'NCC Parking lots',
    url: 'https://services2.arcgis.com/WLyMuW006nKOfa5Z/arcgis/rest/services/NCC_Parking_Open_Portal_view2/FeatureServer/0',
    minZoom: 12
  },
  {
    name: 'NCC Picnic area',
    url: 'https://services2.arcgis.com/WLyMuW006nKOfa5Z/arcgis/rest/services/NCC_Picnic_Areas_view2/FeatureServer/0',
    minZoom: 12
  },
  {
    name: 'NCC Recreational Paths and Trails',
    url: 'https://services2.arcgis.com/WLyMuW006nKOfa5Z/arcgis/rest/services/Recreational_Paths_and_Trails/FeatureServer/0',
    minZoom: 12
  },
  // {
  // 	name: "NCC Remarkable trees",
  // 	url: "https://services2.arcgis.com/WLyMuW006nKOfa5Z/arcgis/rest/services/Remarkable_Trees_view2/FeatureServer/0",
  // 	minZoom: 14,
  // },
  {
    name: 'public art',
    url: 'https://maps.ottawa.ca/arcgis/rest/services/OfficialPlan/MapServer/138',
    minZoom: 14
  },
  {
    name: 'public washrooms',
    url: 'https://maps.ottawa.ca/arcgis/rest/services/PublicWashrooms/MapServer/0',
    minZoom: 14
  },
  {
    name: 'public wifi',
    url: 'https://services.arcgis.com/G6F8XLCl5KtAlZ2G/arcgis/rest/services/Public_Wi_Fi_Locations/FeatureServer/0',
    minZoom: 14
  },
  {
    name: 'store',
    url: 'https://maps.ottawa.ca/arcgis/rest/services/OfficialPlan/MapServer/136',
    minZoom: 14
  },
  // {
  // 	name: "studio",
  // 	url: "https://maps.ottawa.ca/arcgis/rest/services/OfficialPlan/MapServer/135",
  // 	minZoom: 14,
  // },
  {
    name: 'street food',
    url: 'https://services.arcgis.com/G6F8XLCl5KtAlZ2G/arcgis/rest/services/Street_Food_Vendors_Test/FeatureServer/0',
    minZoom: 15
  },
  {
    name: 'venue',
    url: 'https://maps.ottawa.ca/arcgis/rest/services/OfficialPlan/MapServer/130',
    minZoom: 14
  }
];
// "ball diamonds": "https://maps.ottawa.ca/arcgis/rest/services/Parks_Inventory/MapServer/1",
// "basketball": "https://maps.ottawa.ca/arcgis/rest/services/Parks_Inventory/MapServer/3",
// "city parking lots": "https://maps.ottawa.ca/arcgis/rest/services/InteractiveMaps/MapServer/22",
// "city parkland": "https://maps.ottawa.ca/arcgis/rest/services/Parks_Inventory/MapServer/14",
// "lawn bowling": "https://maps.ottawa.ca/arcgis/rest/services/Parks_Inventory/MapServer/9",
// "other park features": "https://maps.ottawa.ca/arcgis/rest/services/Parks_Inventory/MapServer/12",
// "outdoor links": "https://maps.ottawa.ca/arcgis/rest/services/Parks_Inventory/MapServer/13",
// "outdoor pools": "https://maps.ottawa.ca/arcgis/rest/services/Parks_Inventory/MapServer/10",
// "paid public parking": "https://services.arcgis.com/G6F8XLCl5KtAlZ2G/arcgis/rest/services/Paid_Public_Parking_Listing/FeatureServer/0",
// "pickleball": "https://maps.ottawa.ca/arcgis/rest/services/Parks_Inventory/MapServer/27",
// "play area": "https://maps.ottawa.ca/arcgis/rest/services/Parks_Inventory/MapServer/15",
// "public art2": "https://services.arcgis.com/G6F8XLCl5KtAlZ2G/arcgis/rest/services/publicart/FeatureServer/0",
// "residences": "https://maps.ottawa.ca/arcgis/rest/services/CommunitySocialServices/MapServer/12",
// "skateboard": "https://maps.ottawa.ca/arcgis/rest/services/Parks_Inventory/MapServer/16",
// "sledding hills": "https://maps.ottawa.ca/arcgis/rest/services/Parks_Inventory/MapServer/17",
// "splash pad": "https://maps.ottawa.ca/arcgis/rest/services/Parks_Inventory/MapServer/18",
// "sport": "https://maps.ottawa.ca/arcgis/rest/services/OfficialPlan/MapServer/132",
// "sports fields": "https://maps.ottawa.ca/arcgis/rest/services/Parks_Inventory/MapServer/19",
// "tennis": "https://maps.ottawa.ca/arcgis/rest/services/Parks_Inventory/MapServer/21",
// "transit stations": "https://maps.ottawa.ca/arcgis/rest/services/TransitServices/MapServer/0",
// "volleyball": "https://maps.ottawa.ca/arcgis/rest/services/Parks_Inventory/MapServer/22",
// "wading pools": "https://maps.ottawa.ca/arcgis/rest/services/Parks_Inventory/MapServer/11",
// "water fountains": "https://services.arcgis.com/G6F8XLCl5KtAlZ2G/arcgis/rest/services/Public_Drinking_Water_Fountains/FeatureServer/0",
