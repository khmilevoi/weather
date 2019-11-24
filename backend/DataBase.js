export class DataBase {
  constructor(data, searchField) {
    this.data = data;
    this.field = searchField;
  }

  static tanimoto(a, b) {
    const subTokenLength = 3;
    const thresholdWord = 0.7;

    let c = 0;

    const usedTokens = Array(
      Math.min(a.length, b.length, b.length - subTokenLength + 1)
    );

    for (let i = 0; i < a.length - subTokenLength + 1; ++i) {
      let first = a.substring(i, subTokenLength);

      for (let j = 0; j < b.length - subTokenLength + 1; ++j) {
        if (!usedTokens[j]) {
          const second = b.substring(j, subTokenLength);

          if (first === second) {
            c += 1;
            usedTokens[j] = true;
            break;
          }
        }
      }
    }

    let subTokenFirstCount = a.length - subTokenLength + 1;
    let subTokenSecondCount = b.length - subTokenLength + 1;

    const tanimoto = c / (subTokenFirstCount + subTokenSecondCount - c);

    return [tanimoto, tanimoto >= thresholdWord];
  }

  find(val) {
    return new Promise(resolve =>
      setImmediate(() =>
        resolve(
          this.data.filter((item, index) => {
            const current = item[this.field];

            if (typeof current === "string") {
              val = val.toLowerCase();
              const lowered = current.toLowerCase();

              const [coefficient, match] = DataBase.tanimoto(lowered, val);
              this.data[index].coefficient = coefficient;

              return match || lowered.includes(val);
            }

            return true;
          })
        )
      )
    );
  }
}
