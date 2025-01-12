import type { GisItem } from '../../ambient';

// City of Ottawa GIS Service Directory
// https://maps.ottawa.ca/arcgis/rest/services

export const gisItemsOttawa: GisItem[] = [
	// City Facilities
	// https://maps.ottawa.ca/arcgis/rest/services/City_Facilities/MapServer
	{
		name_en: 'Art and Culture',
		name_fr: 'Arts et culture',
		url: 'https://maps.ottawa.ca/arcgis/rest/services/City_Facilities/MapServer/0',
		popup: {
			title: 'BUSINESS_ENTITY_DESC',
			url: 'LINK',
			contents: ['BUILDING_TYPE']
		}
	},
	// {
	//   name_en: 'Recreation',
	//   name_fr: 'Installations récréatives',
	//   url: 'https://maps.ottawa.ca/arcgis/rest/services/City_Facilities/MapServer/5',
	// },
	// {
	//   name_en: 'Social Services',
	//   name_fr: 'Services sociaux',
	//   url: 'https://maps.ottawa.ca/arcgis/rest/services/City_Facilities/MapServer/6',
	// },
	// Community Social Services
	// https://maps.ottawa.ca/arcgis/rest/services/CommunitySocialServices/MapServer
	// {
	//   name_en: 'Food Banks',
	//   name_fr: 'Banque Alimentaire',
	//   url: 'https://maps.ottawa.ca/arcgis/rest/services/CommunitySocialServices/MapServer/8',
	//   popup: {
	//     title: 'NAME',
	//     url: 'LINK',
	//     contents: ['ADDRESS']
	//   }
	// },
	{
		name_en: 'Publicly Accessible Computers',
		name_fr: 'Ordinateurs accessibles au public',
		url: 'https://maps.ottawa.ca/arcgis/rest/services/CommunitySocialServices/MapServer/15',
		popup: {
			title: 'SITENAME_EN',
			url: 'URL_EN',
			contents: ['ACCESS_HOURS_EN', 'ACCESSCRITERIA_EN']
		}
	},
	// Cycling Map (duplication of Active Transportation)
	// https://maps.ottawa.ca/arcgis/rest/services/CyclingMap/MapServer
	{
		name_en: 'Bike Reapir Stations',
		name_fr: 'Station de réparation de vélos',
		url: 'https://maps.ottawa.ca/arcgis/rest/services/CyclingMap/MapServer/2',
		popup: {
			title: 'LOCATION_EN',
			contents: ['DESCRIPTION_EN']
		}
	},
	{
		name_en: 'Cycling Network',
		name_fr: 'Réseau cyclable',
		url: 'https://maps.ottawa.ca/arcgis/rest/services/CyclingMap/MapServer/3',
		popup: {
			title: 'EXISTING_CYCLING_NETWORK',
			contents: ['']
		}
	},
	// {
	//   name_en: 'Mountain Bike Trails',
	//   name_fr: 'Sentiers de vélo de montagne',
	//   url: 'https://maps.ottawa.ca/arcgis/rest/services/CyclingMap/MapServer/17',
	//   popup: {
	//     title: 'TRAILNAME_EN',
	//     contents: ['DATA_SOURCE', 'DIFFICULTY_EN']
	//   }
	// },
	// Doors Open
	// https://maps.ottawa.ca/arcgis/rest/services/DoorsOpen/MapServer
	{
		name_en: 'DoorsOpen',
		name_fr: 'DoorsOpen',
		url: 'https://maps.ottawa.ca/arcgis/rest/services/DoorsOpen/MapServer/0',
		popup: {
			title: 'BUILDING_NAME_EN',
			url: 'MAIN_URL_EN',
			contents: ['CATEGORY_EN', 'BUILDING_DESC_EN_1', 'BUILDING_DESC_EN_2']
		}
	},
	// Hospitals
	// https://maps.ottawa.ca/arcgis/rest/services/Hospitals/MapServer
	// {
	//   name_en: 'Hospitals',
	//   name_fr: 'Hôpitaux',
	//   url: 'https://maps.ottawa.ca/arcgis/rest/services/Hospitals/MapServer/0',
	//   popup: {
	//     title: 'NAME',
	//     url: 'LINK_EN',
	//     contents: ['ADDRESS']
	//   }
	// },
	// Miscellaneous
	// https://maps.ottawa.ca/arcgis/rest/services/Miscellaneous/MapServer
	{
		name_en: 'Public Drinking Fountains',
		name_fr: "Fontaines d'eau potable publiques",
		url: 'https://maps.ottawa.ca/arcgis/rest/services/Miscellaneous/MapServer/0',
		popup: {
			title: 'BUILDING_NAME',
			url: 'URL',
			contents: ['ADDRESS', 'INSIDE_OUTSIDE', 'HOURS_OF_OPERATION']
		}
	},
	// Ottawa Public Health
	// https://maps.ottawa.ca/arcgis/rest/services/OttawaPublicHealth/MapServer
	{
		name_en: 'Warming Places',
		name_fr: 'Espaces de réchauffement',
		url: 'https://maps.ottawa.ca/arcgis/rest/services/OttawaPublicHealth/MapServer/0',
		popup: {
			title: 'NAME_OF_ORGANISATION',
			contents: ['ADDRESS', 'COMMENTS']
		}
	},
	{
		name_en: 'Community Centres',
		name_fr: 'Centres communautaires',
		url: 'https://maps.ottawa.ca/arcgis/rest/services/OttawaPublicHealth/MapServer/4',
		popup: {
			title: 'RE_CityFacilities_ext.BUILDING_DESC',
			url: 'RE_CityFacilities_ext.LINK',
			contents: ['RE_CityFacilities_ext.BUSINESS_ENTITY_DESC']
		}
	},
	// Parking
	// https://maps.ottawa.ca/arcgis/rest/services/Parking/MapServer
	{
		name_en: 'Winter Maintained Bike Racks',
		name_fr: 'Supports à vélos de la ville entretenus en hiver',
		url: 'https://maps.ottawa.ca/arcgis/rest/services/Parking/MapServer/9',
		popup: {
			title: 'TYPE',
			contents: ['WINTERSERV']
		}
	},
	// Parks Inventory
	// https://maps.ottawa.ca/arcgis/rest/services/Parks_Inventory/MapServer
	// {
	//   name_en: 'Beaches',
	//   name_fr: 'Plages',
	//   url: 'https://maps.ottawa.ca/arcgis/rest/services/Parks_Inventory/MapServer/0',
	// },
	// {
	//   name_en: 'Outdoor Wading Pools',
	//   name_fr: 'Pataugeoires extérieure',
	//   url: 'https://maps.ottawa.ca/arcgis/rest/services/Parks_Inventory/MapServer/11',
	// },
	// {
	//   name_en: 'Outdoor Rinks',
	//   name_fr: 'Patinoires extérieure',
	//   url: 'https://maps.ottawa.ca/arcgis/rest/services/Parks_Inventory/MapServer/13',
	// },
	// Planning
	// https://maps.ottawa.ca/arcgis/rest/services/Planning/MapServer
	// Planning / Cultural Spaces
	// https://maps.ottawa.ca/arcgis/rest/services/Planning/MapServer/153
	// {
	//   name_en: 'Community',
	//   name_fr: 'Espace communautaire',
	//   url: 'https://maps.ottawa.ca/arcgis/rest/services/Planning/MapServer/143',
	//   popup: {
	//     title: 'NAME',
	//     url: 'WEBSITE',
	//     contents: ['SUB_CATEGORY']
	//   }
	// },
	{
		name_en: 'Venue',
		name_fr: 'Salle',
		url: 'https://maps.ottawa.ca/arcgis/rest/services/Planning/MapServer/144',
		popup: {
			title: 'NAME',
			url: 'WEBSITE',
			contents: ['SUB_CATEGORY', 'TAGS']
		}
	},
	{
		name_en: 'Learning',
		name_fr: 'Apprentissage',
		url: 'https://maps.ottawa.ca/arcgis/rest/services/Planning/MapServer/145',
		popup: {
			title: 'NAME',
			url: 'WEBSITE',
			contents: ['SUB_CATEGORY', 'TAGS']
		}
	},
	{
		name_en: 'Heritage',
		name_fr: 'Patrimoine',
		url: 'https://maps.ottawa.ca/arcgis/rest/services/Planning/MapServer/147',
		popup: {
			title: 'NAME',
			url: 'WEBSITE',
			contents: ['SUB_CATEGORY', 'TAGS']
		}
	},
	{
		name_en: 'Food',
		name_fr: 'Alimentation',
		url: 'https://maps.ottawa.ca/arcgis/rest/services/Planning/MapServer/148',
		popup: {
			title: 'NAME',
			url: 'WEBSITE',
			contents: ['SUB_CATEGORY', 'TAGS']
		}
	},
	{
		name_en: 'Store',
		name_fr: 'Boutique',
		url: 'https://maps.ottawa.ca/arcgis/rest/services/Planning/MapServer/150',
		popup: {
			title: 'NAME',
			url: 'WEBSITE',
			contents: ['SUB_CATEGORY', 'TAGS']
		}
	},
	{
		name_en: 'Nature',
		name_fr: 'Nature',
		url: 'https://maps.ottawa.ca/arcgis/rest/services/Planning/MapServer/151',
		popup: {
			title: 'NAME',
			url: 'WEBSITE',
			contents: ['SUB_CATEGORY', 'TAGS']
		}
	},
	{
		name_en: 'Public Art',
		name_fr: 'Art public',
		url: 'https://maps.ottawa.ca/arcgis/rest/services/Planning/MapServer/152',
		popup: {
			title: 'NAME',
			url: 'WEBSITE',
			contents: ['SUB_CATEGORY', 'TAGS']
		}
	}
];
