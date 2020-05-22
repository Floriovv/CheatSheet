let EuropäischeUnion =  {Belgien: "(BE)",
                        Griechenland:"(EL)", Litauen:"(LT)",
                        Portugal:"(PT)",
                        Bulgarien:"(BG)",
                        Spanien:"(ES)",
                        Luxemburg:"(LU)",
                        Rumänien:"(RO)",
                        Tschechien:"(CZ)",

  länder: function (){
  console.log(`${EuropäischeUnion.Belgien}` + `${EuropäischeUnion.Portugal}` + `${EuropäischeUnion.Luxemburg}`)},

}

EuropäischeUnion.länder()

let Beneluxstaaten = {Egalland1: "E1", Egalland2: "E2", Luxemburg:"(LU)",
  beneländer: function (){
    console.log(`${Beneluxstaaten.Egalland1}` + `${Beneluxstaaten.Egalland2}` + `${Beneluxstaaten.Luxemburg}`)
  }
}

Beneluxstaaten.beneländer()

EuropäischeUnion.Beneluxstaaten = Beneluxstaaten

console.log(EuropäischeUnion)
