#!/usr/bin/env python3
import json
import urllib.request

# API endpoint for advanced search
api_ep = 'http://at1.api.radio-browser.info/json/stations'
uuids = [
    "265a40b6-8e96-4102-8ea7-26d162f970ca",
    "28be7f1d-9c46-4072-8a09-5f53326d7519"
]
unused_keys = [
    "changeuuid",
    "serveruuid",
    "iso_3166_2",
    "state",
    "votes",
    "lastchangetime",
    "lastchangetime_iso8601",
    "lastchecktime",
    "lastcheckoktime",
    "lastlocalchecktime",
    "lastlocalchecktime_iso8601",
    "clicktimestamp",
    "clicktimestamp_iso8601",
    "clickcount",
    "clicktrend",
    "ssl_error",
    "geo_lat",
    "geo_long",
    "geo_distance",
    "has_extended_info"
]


def stations_by_geo():
    # Within 100km from Ottawa center
    url = api_ep + '/search?geo_lat=45.424721&geo_long=-75.695&geo_distance=100000'
    # exclude broken data
    url = url + '&hidebroken=true'
    download_data(url, 'geo.json')



def stations_by_name():
    # Name includes ottawa
    url = api_ep + '/search?name=ottawa'
    # exclude broken data
    url = url + '&hidebroken=true'
    download_data(url, 'ottawa.json')


def stations_by_uuid():
    # From uuids
    url = api_ep + f'/byuuid?uuids={','.join(uuids)}'
    url = url + '&hidebroken=true'
    download_data(url, 'uuid.json')


def download_data(url:str, fname:str = 'output.json'):
    print(url)
    with urllib.request.urlopen(url) as res:
        if res.status == 200:
            stations = json.loads(res.read().decode('utf-8'))
            for station in stations:
                for key in unused_keys:
                    station.pop(key)


            with open(fname, 'w') as f:
                #json.dump(stations, f)
                f.write(json.dumps(stations, indent=2))


if __name__ == '__main__':
    stations_by_geo()
    stations_by_name()
    stations_by_uuid()
