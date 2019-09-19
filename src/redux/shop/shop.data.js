const SHOP_DATA = {
  tshirts: {
    id: 1,
    title: 'T-shirts',
    routeName: 'tshirts',
    items: [
      {
        id: 1,
        name: 'Bielaruś',
        imageUrl: 'https://i.ibb.co/3YkrKPS/bierarus.jpg',
        price: 25
      },
      {
        id: 2,
        name: 'Žyvie IT Bielaruś',
        imageUrl: 'https://i.ibb.co/sjqLZVt/zyvie-it-belarus.jpg',
        price: 18
      },
      {
        id: 3,
        name: 'Śmielym - Pieramoha',
        imageUrl: 'https://i.ibb.co/68fPnJT/smielym-pieramoha.jpg',
        price: 35
      },
      {
        id: 4,
        name: 'Spadčyna',
        imageUrl: 'https://i.ibb.co/ZGNQQkb/spadcyna.jpg',
        price: 25
      },
      {
        id: 5,
        name: 'Biel-Čyrvona-Biely',
        imageUrl: 'https://i.ibb.co/N9q4jjc/bcb.jpg',
        price: 18
      },
      {
        id: 6,
        name: 'Kurapaty',
        imageUrl: 'https://i.ibb.co/9nKFx5w/kurapaty.jpg',
        price: 25
      },
      {
        id: 7,
        name: 'Kraj dužych',
        imageUrl: 'https://i.ibb.co/9bW8B0Z/kraj-duzych.jpg',
        price: 25
      },
      {
        id: 8,
        name: 'Kraj voĺnych',
        imageUrl: 'https://i.ibb.co/cQG9WXT/kraj-volnych-bielarusau.jpg',
        price: 25
      },
      {
        id: 9,
        name: 'Black Pahonia',
        imageUrl: 'https://i.ibb.co/tZDzMJX/t-shirt-black-pahonia.jpg',
        price: 25
      },
      
    ]
  },
  hats: {
    id: 2,
    title: 'Hats',
    routeName: 'hats',
    items: [
      {
        id: 10,
        name: 'Šapka z pumponam "Arnamient"',
        imageUrl: 'https://i.ibb.co/51gpzcn/shapka-arnament-pumpon.jpg',
        price: 22
      },
      {
        id: 11,
        name: 'Šapka Bielaruś',
        imageUrl: 'https://i.ibb.co/1Xr0Yk5/shapka-belarus.jpg',
        price: 28
      },
      {
        id: 12,
        name: 'Snapback Pahonia',
        imageUrl: 'https://i.ibb.co/C5JBR7d/snapback-pahonia.jpg',
        price: 26
      },
      {
        id: 13,
        name: 'Pahonia etalon',
        imageUrl: 'https://i.ibb.co/xzKjRDd/pahonia-etalon.jpg',
        price: 30
      },
      {
        id: 14,
        name: 'Black Pahonia',
        imageUrl: 'https://i.ibb.co/rdYZkB4/pahonia-black.jpg',
        price: 29
      },
      {
        id: 15,
        name: 'White Pahonia',
        imageUrl: 'https://i.ibb.co/hCWYc6T/pahonia-white.jpg',
        price: 29
      }
    ]
  },
  hoodies: {
    id: 3,
    title: 'Hoodies',
    routeName: 'hoodies',
    items: [
      {
        id: 16,
        name: 'Kraj dužych',
        imageUrl: 'https://i.ibb.co/yN0YLXy/kraj-duzych.jpg',
        price: 125
      },
      {
        id: 17,
        name: 'Nie razbić, nie spynić, nie strymać',
        imageUrl: 'https://i.ibb.co/cy5PCdQ/nie-spynic.jpg',
        price: 90
      },
      {
        id: 18,
        name: 'Kraj voĺnych',
        imageUrl: 'https://i.ibb.co/SNKKPZd/kraj-volnych.jpg',
        price: 90
      },
      {
        id: 19,
        name: 'Pahonia',
        imageUrl: 'https://i.ibb.co/z2tQf80/pahonia.jpg',
        price: 165
      },
      {
        id: 20,
        name: 'Valoški',
        imageUrl: 'https://i.ibb.co/9yjGDdf/valoski.jpg',
        price: 185
      },
      {
        id: 21,
        name: 'Zavirucha',
        imageUrl: 'https://i.ibb.co/G23GH1b/zavirucha.jpg',
        price: 155
      }
    ]
  },
  mens: {
    id: 4,
    title: 'Mens',
    routeName: 'mens',
    items: [
      {
        id: 22,
        name: 'Paca Vaca',
        imageUrl: 'https://i.ibb.co/jGdMsVZ/paca-vaca.jpg',
        price: 25
      },
      {
        id: 23,
        name: 'Ave Kastuś',
        imageUrl: 'https://i.ibb.co/x2QWgKf/ave-kastus.jpg',
        price: 20
      },
      {
        id: 24,
        name: 'Šaliony bielarus',
        imageUrl: 'https://i.ibb.co/JtvsbN5/saliony-belarus.jpg',
        price: 80
      },
      {
        id: 25,
        name: 'Hramadski transpart',
        imageUrl: 'https://i.ibb.co/vhXMPMJ/hramadski-transpart.jpg',
        price: 80
      },
      {
        id: 26,
        name: 'Minsk city',
        imageUrl: 'https://i.ibb.co/6ZZDLBF/minsk-city.jpg',
        price: 45
      },
      {
        id: 27,
        name: 'Hometown Minsk',
        imageUrl: 'https://i.ibb.co/wyWwBsk/hometown-minsk.jpg',
        price: 135
      }
    ]
  },
  womens: {
    id: 5,
    title: 'Womens',
    routeName: 'womens',
    items: [
      {
        id: 28,
        name: 'RTI',
        imageUrl: 'https://i.ibb.co/zht7Xv2/RTI.jpg',
        price: 325
      },
      {
        id: 29,
        name: 'BDU',
        imageUrl: 'https://i.ibb.co/r0yvz74/BDU.jpg',
        price: 20
      },
      {
        id: 30,
        name: 'Minsk city',
        imageUrl: 'https://i.ibb.co/c21R5qW/minsk-city.jpg',
        price: 25
      },
      {
        id: 31,
        name: 'Paliessie',
        imageUrl: 'https://i.ibb.co/s6YkbKj/paliessie.jpg',
        price: 25
      },
      {
        id: 32,
        name: 'Ja naradziŭsia tut',
        imageUrl: 'https://i.ibb.co/KGF2fPg/womens.jpg',
        price: 40
      },
      {
        id: 33,
        name: 'Zubr i zubrania',
        imageUrl: 'https://i.ibb.co/jr5StCH/zubr-i-zubrania.jpg',
        price: 25
      },
        {
        id: 34,
        name: 'Kotki nad horadam',
        imageUrl: 'https://i.ibb.co/WtBV9Z1/kotki-nad-horadam.jpg',
        price: 25
      }
    ]
  }
};

export default SHOP_DATA;