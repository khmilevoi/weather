export class CityStorage {
  constructor(list) {
    this.list = list;
  }

  getSimilarByName(name) {
    return new Promise(response =>
      setImmediate(() =>
        response(this.list.filter(city => city.name.toLowerCase().indexOf(name.toLowerCase()) !== -1))
      )
    );
  }
}
