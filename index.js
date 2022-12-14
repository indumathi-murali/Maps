/**
 * Marker sample
 */
import worldMap from './world-map.json';

var maps = new ej.maps.Maps({
  useGroupingSeparator: true,
  format: 'n',
  zoomSettings: {
    enable: false,
  },
  titleSettings: {
    text: 'Top 25 populated cities in the world',
    textStyle: {
      size: '16px',
      fontFamily: 'Segeo UI',
    },
  },
  layers: [
    {
      shapeData: worldMap,
      dataSource: window.topPopulation,
      shapeSettings: {
        fill: '#C3E6ED',
      },
      markerSettings: [
        {
          dataSource: [
            {
              name: 'Tokyo',
              latitude: 35.6894875,
              longitude: 139.6917064,
              population: 33200000,
              Country: 'Japan',
              Continent: 'Asia',
              color: 'red',
              shape: 'Pentagon',
            },
            {
              name: 'New York',
              latitude: 40.7127753,
              longitude: -74.0059728,
              population: 17800000,
              Country: 'United States',
              Continent: 'North America',
              color: 'green',
              shape: 'Diamond',
            },
            {
              name: 'Sao Paulo',
              latitude: -23.5505199,
              longitude: -46.6333094,
              population: 17700000,
              Country: 'Brazil',
              Continent: 'South America',
              color: 'orange',
              shape: 'InvertedTriangle',
            },
            {
              name: 'Seoul/Incheon',
              latitude: 37.566535,
              longitude: 126.9779692,
              population: 17500000,
              Country: 'South Korea',
              Continent: 'Asia',
              color: 'red',
              shape: 'Pentagon',
            },
            {
              name: 'Mexico City',
              latitude: 19.2464696,
              longitude: -99.1013498,
              population: 17400000,
              Country: 'Mexico',
              Continent: 'North America',
              color: 'green',
              shape: 'Diamond',
            },
          ],
          visible: true,
          animationDuration: 0,
          width: 10,
          height: 10,
          shape: 'Circle',
          fill: 'red',
          opacity: 0.4,
          border: { width: 2, color: '#285255' },
          tooltipSettings: {
            template: '#template',
            visible: true,
            valuePath: 'population',
            textStyle: { fontFamily: 'Segeo UI' },
          },
        },
        {
          dataSource: [
            {
              name: 'Osaka/Kobe/Kyoto',
              latitude: 35.0212466,
              longitude: 135.7555968,
              population: 16425000,
              Country: 'Japan',
              Continent: 'Asia',
              color: 'red',
              shape: 'Pentagon',
            },
            {
              name: 'Manila',
              latitude: 14.5995124,
              longitude: 120.9842195,
              population: 14750000,
              Country: 'Philippines',
              Continent: 'Asia',
              color: 'red',
              shape: 'Pentagon',
            },
            {
              name: 'Mumbai',
              latitude: 19.0759837,
              longitude: 72.8776559,
              population: 14350000,
              Country: 'India',
              Continent: 'Asia',
              color: 'red',
              shape: 'Pentagon',
            },
            {
              name: 'Delhi',
              latitude: 28.6139391,
              longitude: 77.2090212,
              population: 14300000,
              Country: 'India',
              Continent: 'Asia',
              color: 'red',
              shape: 'Pentagon',
            },
          ],
          visible: true,
          animationDuration: 0,
          width: 20,
          height: 20,
          shape: 'Circle',
          fill: 'green',
          opacity: 0.5,
          border: { width: 2, color: '#285255' },
          tooltipSettings: {
            template: '#template',
            visible: true,
            valuePath: 'population',
            textStyle: { fontFamily: 'Segeo UI' },
          },
        },
        {
          dataSource: [
            {
              name: 'Lagos',
              latitude: 6.5243793,
              longitude: 3.3792057,
              population: 13400000,
              Continent: 'Africa',
              Country: 'Nigeria',
              shape: 'Rectangle',
            },
            {
              name: 'Kolkata',
              latitude: 22.572646,
              longitude: 88.363895,
              population: 12700000,
              Country: 'India',
              Continent: 'Asia',
              shape: 'Pentagon',
            },
            {
              name: 'Cairo',
              latitude: 30.0444196,
              longitude: 31.2357116,
              population: 12200000,
              Country: 'Egypt',
              Continent: 'Africa',
              shape: 'Rectangle',
            },
          ],
          visible: true,
          animationDuration: 0,
          width: 40,
          height: 40,
          shape: 'Circle',
          fill: 'blue',
          opacity: 0.6,
          border: { width: 2, color: '#285255' },
          tooltipSettings: {
            template: '#template',
            visible: true,
            valuePath: 'population',
            textStyle: { fontFamily: 'Segeo UI' },
          },
        },
        {
          dataSource: [
            {
              name: 'Jakarta',
              latitude: -6.17511,
              longitude: 106.8650395,
              population: 14250000,
              Country: 'Indonesia',
              Continent: 'Asia',
              shape: 'Pentagon',
            },
          ],
          visible: true,
          animationDuration: 0,
          fill: 'yellow',
          width: 50,
          height: 50,
          shape: 'Circle',
          opacity: 1,
          border: { width: 2, color: '#285255' },
          tooltipSettings: {
            template: '#template',
            visible: true,
            valuePath: 'population',
            textStyle: { fontFamily: 'Segeo UI' },
          },
        },
      ],
    },
  ],
});
maps.appendTo('#container');
