import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import { Advertisement } from '../../shared/models';

export class AdvertisementServiceMock {
  static ADVERTISEMENTS = [
    {
      advertisementPrice: {
        baseRent: 305,
      },
      purpose: 0,
      title:
        'Wegen Sanierungsarbeiten 2 Monate mietfrei! - Etagenwohnung mit Balkon',
      realestateSummary: {
        address: {
          street: 'Ursulastraße',
          number: '33',
          postalCode: '47226',
          city: 'Duisburg',
          fullAddress: 'Ursulastraße 33, 47226 Duisburg',
          location: {
            type: 'Point',
            coordinates: [51.40515, 6.72894],
          },
        },
        numberOfRooms: 3,
        space: 56.889999999999986,
      },
      advertisementAssets: {
        advertisementThumbnails: {
          inventory_m: {
            _id: {
              $id: '59887491c62697f9ef3b3da0',
            },
            createdAt: {
              sec: 1502114960,
              usec: 248000,
            },
            updatedAt: {
              sec: 1512291975,
              usec: 734000,
            },
            fileId: 'thumbnail.59887490267115.54069533.jpg',
            filename: 'thumbnail_of_.jpg',
            url:
              'https://d3e02gns9oqhhr.cloudfront.net/assets/expose_v2/thumbnail.59887490267115.54069533.jpg',
            mimeType: 'image/jpg',
            metadata: {
              width: 610,
              height: 300,
              size: 22233,
              thumbnail: 'inventory_m',
              transformation: 'ad_image_thumbails',
              filesystem: 'thumbnails',
            },
          },
          thumb_xs: {
            _id: {
              $id: '59887491c62697f9ef3b3da4',
            },
            createdAt: {
              sec: 1502114961,
              usec: 258000,
            },
            updatedAt: {
              sec: 1512291975,
              usec: 813000,
            },
            fileId: 'thumbnail.598874911fc947.78385726.jpg',
            filename: 'thumbnail_of_.jpg',
            url:
              'https://d3e02gns9oqhhr.cloudfront.net/assets/expose_v2/thumbnail.598874911fc947.78385726.jpg',
            mimeType: 'image/jpg',
            metadata: {
              width: 200,
              height: 150,
              size: 5250,
              thumbnail: 'thumb_xs',
              transformation: 'ad_image_thumbails',
              filesystem: 'thumbnails',
            },
          },
        },
      },
    },
    {
      _id: {
        $id: '591ecfe4c6269715d84b0634',
      },
      hasFurniture: false,
      advertisementPrice: {
        baseRent: 310,
      },
      userWishes: {
        visibleAddress: true,
      },
      purpose: 0,
      title:
        'Wegen Sanierungsarbeiten 2 Monate mietfrei! - Etagenwohnung mit Balkon',
      realestateSummary: {
        address: {
          street: 'Ursulastraße',
          number: '37',
          postalCode: '47226',
          city: 'Duisburg',
          fullAddress: 'Ursulastraße 37, 47226 Duisburg',
          location: {
            type: 'Point',
            coordinates: [51.4052146, 6.7294402],
          },
        },
        numberOfRooms: 3,
        space: 57.48,
      },
      additionalId: 141188,
      advertisementAssets: {
        advertisementThumbnails: {
          inventory_m: {
            _id: {
              $id: '591ed0a0c6269740f56d4388',
            },
            createdAt: {
              sec: 1495191711,
              usec: 0,
            },
            updatedAt: {
              sec: 1512037296,
              usec: 674000,
            },
            fileId: 'thumbnail.591ed09f980221.52363510.jpg',
            filename: 'thumbnail_of_.jpg',
            url:
              'https://d3e02gns9oqhhr.cloudfront.net/assets/expose_v2/thumbnail.591ed09f980221.52363510.jpg',
            mimeType: 'image/jpg',
            metadata: {
              width: 610,
              height: 300,
              size: 17979,
              thumbnail: 'inventory_m',
              transformation: 'ad_image_thumbails',
              filesystem: 'thumbnails',
            },
          },
          thumb_xs: {
            _id: {
              $id: '591ed0a0c6269740f56d438c',
            },
            createdAt: {
              sec: 1495191712,
              usec: 0,
            },
            updatedAt: {
              sec: 1512037296,
              usec: 760000,
            },
            fileId: 'thumbnail.591ed0a0960cf5.80327729.jpg',
            filename: 'thumbnail_of_.jpg',
            url:
              'https://d3e02gns9oqhhr.cloudfront.net/assets/expose_v2/thumbnail.591ed0a0960cf5.80327729.jpg',
            mimeType: 'image/jpg',
            metadata: {
              width: 200,
              height: 150,
              size: 3893,
              thumbnail: 'thumb_xs',
              transformation: 'ad_image_thumbails',
              filesystem: 'thumbnails',
            },
          },
        },
      },
    },
    {
      _id: {
        $id: '592be502c10d1dd147267893',
      },
      hasFurniture: false,
      advertisementPrice: {
        sellPrice: 69000,
      },
      userWishes: {
        visibleAddress: false,
      },
      purpose: 1,
      title: 'Schlagen Sie zu! Geräumige Wohnung in grüner Lage',
      additionalId: 141233,
      realestateSummary: {
        address: {
          street: 'Karl-Marx-Straße',
          number: '26',
          postalCode: '01445',
          city: 'Radebeul',
          location: {
            type: 'Point',
            coordinates: [51.1047, 13.6884],
          },
        },
        numberOfRooms: 2,
        space: 50,
      },
      advertisementAssets: {
        advertisementThumbnails: {
          inventory_m: {
            _id: {
              $id: '59412178c10d1d58090c70a2',
            },
            createdAt: {
              sec: 1497440631,
              usec: 0,
            },
            updatedAt: {
              sec: 1497440632,
              usec: 0,
            },
            fileId: 'thumbnail.59412177b211e6.13622439.jpg',
            filename: 'thumbnail_of_asset59412175686f7.jpg.jpg',
            url:
              'https://d3e02gns9oqhhr.cloudfront.net/assets/expose_v2/thumbnail.59412177b211e6.13622439.jpg',
            mimeType: 'image/jpg',
            metadata: {
              width: 610,
              height: 300,
              size: 42106,
              thumbnail: 'inventory_m',
              transformation: 'ad_image_thumbails',
              filesystem: 'thumbnails',
            },
          },
          thumb_xs: {
            _id: {
              $id: '59412178c10d1d58090c70a6',
            },
            createdAt: {
              sec: 1497440632,
              usec: 0,
            },
            updatedAt: {
              sec: 1497440632,
              usec: 0,
            },
            fileId: 'thumbnail.594121784b3a95.89734520.jpg',
            filename: 'thumbnail_of_asset59412175686f7.jpg.jpg',
            url:
              'https://d3e02gns9oqhhr.cloudfront.net/assets/expose_v2/thumbnail.594121784b3a95.89734520.jpg',
            mimeType: 'image/jpg',
            metadata: {
              width: 200,
              height: 150,
              size: 8111,
              thumbnail: 'thumb_xs',
              transformation: 'ad_image_thumbails',
              filesystem: 'thumbnails',
            },
          },
        },
      },
    },
    {
      _id: {
        $id: '592be610c10d1dd26167dab6',
      },
      hasFurniture: false,
      advertisementPrice: {
        sellPrice: 579000,
      },
      userWishes: {
        visibleAddress: false,
      },
      purpose: 1,
      title: 'Geräumiges Mehrfamilienhaus zum Wohlfühlen!',
      additionalId: 141236,
      realestateSummary: {
        address: {
          street: 'Meßflur',
          number: '65',
          postalCode: '54427',
          city: 'Kell am See',
          location: {
            type: 'Point',
            coordinates: [49.63803, 6.82317],
          },
        },
        numberOfRooms: 12,
        space: 435,
      },
      advertisementAssets: {
        advertisementThumbnails: {
          inventory_m: {
            _id: {
              $id: '595b80fbc10d1d39410ab143',
            },
            createdAt: {
              sec: 1499169018,
              usec: 0,
            },
            updatedAt: {
              sec: 1499169019,
              usec: 0,
            },
            fileId: 'thumbnail.595b80fa85dbf3.31541532.jpg',
            filename: 'thumbnail_of_asset595b80f7b08e5.jpg.jpg',
            url:
              'https://d3e02gns9oqhhr.cloudfront.net/assets/expose_v2/thumbnail.595b80fa85dbf3.31541532.jpg',
            mimeType: 'image/jpg',
            metadata: {
              width: 610,
              height: 300,
              size: 34873,
              thumbnail: 'inventory_m',
              transformation: 'ad_image_thumbails',
              filesystem: 'thumbnails',
            },
          },
          thumb_xs: {
            _id: {
              $id: '595b80fbc10d1d39410ab147',
            },
            createdAt: {
              sec: 1499169019,
              usec: 0,
            },
            updatedAt: {
              sec: 1499169019,
              usec: 0,
            },
            fileId: 'thumbnail.595b80fb293fd7.24503370.jpg',
            filename: 'thumbnail_of_asset595b80f7b08e5.jpg.jpg',
            url:
              'https://d3e02gns9oqhhr.cloudfront.net/assets/expose_v2/thumbnail.595b80fb293fd7.24503370.jpg',
            mimeType: 'image/jpg',
            metadata: {
              width: 200,
              height: 133,
              size: 6357,
              thumbnail: 'thumb_xs',
              transformation: 'ad_image_thumbails',
              filesystem: 'thumbnails',
            },
          },
        },
      },
    },
    {
      _id: {
        $id: '592be63ac10d1dd2737d7946',
      },
      hasFurniture: false,
      advertisementPrice: {
        sellPrice: 125000,
      },
      userWishes: {
        visibleAddress: false,
      },
      purpose: 1,
      title:
        'Zögern Sie nicht! Modernisierte Erdgeschosswohnung mit Terrasse und Balkon!',
      additionalId: 141237,
      realestateSummary: {
        address: {
          street: 'Franz-Mehring-Straße',
          number: '11',
          postalCode: '01237',
          city: 'Dresden',
          location: {
            type: 'Point',
            coordinates: [51.01704, 13.81044],
          },
        },
        numberOfRooms: 2,
        space: 54,
      },
      advertisementAssets: {
        advertisementThumbnails: {
          inventory_m: {
            _id: {
              $id: '595b7922c10d1d320b47f5d8',
            },
            createdAt: {
              sec: 1499167009,
              usec: 0,
            },
            updatedAt: {
              sec: 1499167010,
              usec: 0,
            },
            fileId: 'thumbnail.595b7921ca2428.14890932.jpg',
            filename: 'thumbnail_of_asset595b79208ea3f.jpg.jpg',
            url:
              'https://d3e02gns9oqhhr.cloudfront.net/assets/expose_v2/thumbnail.595b7921ca2428.14890932.jpg',
            mimeType: 'image/jpg',
            metadata: {
              width: 610,
              height: 300,
              size: 37272,
              thumbnail: 'inventory_m',
              transformation: 'ad_image_thumbails',
              filesystem: 'thumbnails',
            },
          },
          thumb_xs: {
            _id: {
              $id: '595b7922c10d1d320b47f5dc',
            },
            createdAt: {
              sec: 1499167010,
              usec: 0,
            },
            updatedAt: {
              sec: 1499167010,
              usec: 0,
            },
            fileId: 'thumbnail.595b7922739b52.44814031.jpg',
            filename: 'thumbnail_of_asset595b79208ea3f.jpg.jpg',
            url:
              'https://d3e02gns9oqhhr.cloudfront.net/assets/expose_v2/thumbnail.595b7922739b52.44814031.jpg',
            mimeType: 'image/jpg',
            metadata: {
              width: 200,
              height: 150,
              size: 8409,
              thumbnail: 'thumb_xs',
              transformation: 'ad_image_thumbails',
              filesystem: 'thumbnails',
            },
          },
        },
      },
    },
    {
      _id: {
        $id: '592c0d0fc62697781e1cc585',
      },
      hasFurniture: false,
      advertisementPrice: {
        baseRent: 452,
      },
      userWishes: {
        visibleAddress: true,
      },
      purpose: 0,
      title:
        '2 Monate mietfrei! - Attraktive Etagenwohnung mit Balkon und Tiefgaragenstellplatz!',
      realestateSummary: {
        address: {
          street: 'Weißdornstraße',
          number: '18',
          postalCode: '47269',
          city: 'Duisburg',
          fullAddress: 'Weißdornstraße 18, 47269 Duisburg',
          location: {
            type: 'Point',
            coordinates: [51.37195999999999, 6.78207],
          },
        },
        numberOfRooms: 3,
        space: 78.07000000000004,
      },
      additionalId: 141254,
      advertisementAssets: {
        advertisementThumbnails: {
          inventory_m: {
            _id: {
              $id: '592c0dc6c62697a76410bdc3',
            },
            createdAt: {
              sec: 1496059334,
              usec: 0,
            },
            updatedAt: {
              sec: 1512036391,
              usec: 614000,
            },
            fileId: 'thumbnail.592c0dc5e1c526.60330796.jpg',
            filename: 'thumbnail_of_.jpg',
            url:
              'https://d3e02gns9oqhhr.cloudfront.net/assets/expose_v2/thumbnail.592c0dc5e1c526.60330796.jpg',
            mimeType: 'image/jpg',
            metadata: {
              width: 610,
              height: 300,
              size: 25480,
              thumbnail: 'inventory_m',
              transformation: 'ad_image_thumbails',
              filesystem: 'thumbnails',
            },
          },
          thumb_xs: {
            _id: {
              $id: '592c0dc6c62697a76410bdc7',
            },
            createdAt: {
              sec: 1496059334,
              usec: 0,
            },
            updatedAt: {
              sec: 1512036391,
              usec: 706000,
            },
            fileId: 'thumbnail.592c0dc6bc5767.08154796.jpg',
            filename: 'thumbnail_of_.jpg',
            url:
              'https://d3e02gns9oqhhr.cloudfront.net/assets/expose_v2/thumbnail.592c0dc6bc5767.08154796.jpg',
            mimeType: 'image/jpg',
            metadata: {
              width: 200,
              height: 150,
              size: 5216,
              thumbnail: 'thumb_xs',
              transformation: 'ad_image_thumbails',
              filesystem: 'thumbnails',
            },
          },
        },
      },
    },
    {
      _id: {
        $id: '59303d8fc626971e441a0021',
      },
      hasFurniture: false,
      advertisementPrice: {
        baseRent: 746,
      },
      userWishes: {
        visibleAddress: true,
      },
      purpose: 0,
      title:
        '+++ WG geeignet +++ Zögern Sie nicht - Lichtdurchflutete Wohnung mit großem Sonnenbalkon!',
      realestateSummary: {
        address: {
          street: 'Oststraße',
          number: '66-68',
          postalCode: '42551',
          city: 'Velbert',
          fullAddress: 'Oststraße 66-68, 42551 Velbert',
          location: {
            type: 'Point',
            coordinates: [51.3383791, 7.0500452],
          },
        },
        numberOfRooms: 4,
        space: 122.36000000000003,
      },
      additionalId: 141284,
      advertisementAssets: {
        advertisementThumbnails: {
          inventory_m: {
            _id: {
              $id: '59304db6c62697361579ea0f',
            },
            createdAt: {
              sec: 1496337845,
              usec: 0,
            },
            updatedAt: {
              sec: 1512118867,
              usec: 561000,
            },
            fileId: 'thumbnail.59304db4d74660.23560580.jpg',
            filename: 'thumbnail_of_.jpg',
            url:
              'https://d3e02gns9oqhhr.cloudfront.net/assets/expose_v2/thumbnail.59304db4d74660.23560580.jpg',
            mimeType: 'image/jpg',
            metadata: {
              width: 610,
              height: 300,
              size: 32272,
              thumbnail: 'inventory_m',
              transformation: 'ad_image_thumbails',
              filesystem: 'thumbnails',
            },
          },
          thumb_xs: {
            _id: {
              $id: '59304db6c62697361579ea13',
            },
            createdAt: {
              sec: 1496337845,
              usec: 0,
            },
            updatedAt: {
              sec: 1512118867,
              usec: 644000,
            },
            fileId: 'thumbnail.59304db5ea5556.66627506.jpg',
            filename: 'thumbnail_of_.jpg',
            url:
              'https://d3e02gns9oqhhr.cloudfront.net/assets/expose_v2/thumbnail.59304db5ea5556.66627506.jpg',
            mimeType: 'image/jpg',
            metadata: {
              width: 200,
              height: 133,
              size: 6601,
              thumbnail: 'thumb_xs',
              transformation: 'ad_image_thumbails',
              filesystem: 'thumbnails',
            },
          },
        },
      },
    },
    {
      _id: {
        $id: '59314b80c62697d12b40c689',
      },
      hasFurniture: false,
      advertisementPrice: {
        baseRent: 1850,
      },
      userWishes: {
        visibleAddress: true,
      },
      purpose: 0,
      title: 'Neuwertige Dachgeschosswohnung mit Terrasse!',
      realestateSummary: {
        address: {
          street: 'Nestorstraße',
          number: '14',
          postalCode: '10709',
          city: 'Berlin',
          fullAddress: 'Nestorstraße 14, 10709 Berlin',
          location: {
            type: 'Point',
            coordinates: [52.4963586, 13.299348],
          },
        },
        numberOfRooms: 3,
        space: 157.23999999999998,
      },
      additionalId: 141286,
      advertisementAssets: {
        advertisementThumbnails: {
          inventory_m: {
            _id: {
              $id: '59c26958c626972efd017f3c',
            },
            createdAt: {
              sec: 1505913175,
              usec: 41000,
            },
            updatedAt: {
              sec: 1512122362,
              usec: 936000,
            },
            fileId: 'thumbnail.59c26956de1711.59947724.jpg',
            filename: 'thumbnail_of_.jpg',
            url:
              'https://d3e02gns9oqhhr.cloudfront.net/assets/expose_v2/thumbnail.59c26956de1711.59947724.jpg',
            mimeType: 'image/jpg',
            metadata: {
              width: 610,
              height: 300,
              size: 19225,
              thumbnail: 'inventory_m',
              transformation: 'ad_image_thumbails',
              filesystem: 'thumbnails',
            },
          },
          thumb_xs: {
            _id: {
              $id: '59c26958c626972efd017f40',
            },
            createdAt: {
              sec: 1505913175,
              usec: 927000,
            },
            updatedAt: {
              sec: 1512122363,
              usec: 22000,
            },
            fileId: 'thumbnail.59c26957da7fc0.23684679.jpg',
            filename: 'thumbnail_of_.jpg',
            url:
              'https://d3e02gns9oqhhr.cloudfront.net/assets/expose_v2/thumbnail.59c26957da7fc0.23684679.jpg',
            mimeType: 'image/jpg',
            metadata: {
              width: 200,
              height: 133,
              size: 4793,
              thumbnail: 'thumb_xs',
              transformation: 'ad_image_thumbails',
              filesystem: 'thumbnails',
            },
          },
        },
      },
    },
    {
      _id: {
        $id: '593a9a99c62697bcf32d3ed1',
      },
      hasFurniture: false,
      advertisementPrice: {
        baseRent: 520,
      },
      userWishes: {
        visibleAddress: true,
      },
      purpose: 0,
      title: 'Freundliche Etagenwohnung mit 2 Balkonen und Ausblick ins Grüne!',
      realestateSummary: {
        address: {
          street: 'Rüsselsheimer Weg',
          number: '7',
          postalCode: '44892',
          city: 'Bochum',
          fullAddress: 'Rüsselsheimer Weg 7, 44892 Bochum',
          location: {
            type: 'Point',
            coordinates: [51.4710647, 7.299620699999998],
          },
        },
        numberOfRooms: 3,
        space: 92.78000000000003,
      },
      additionalId: 141321,
      advertisementAssets: {
        advertisementThumbnails: {
          inventory_m: {
            _id: {
              $id: '593aa084c6269786ff78c43c',
            },
            createdAt: {
              sec: 1497014403,
              usec: 0,
            },
            updatedAt: {
              sec: 1511972451,
              usec: 813000,
            },
            fileId: 'thumbnail.593aa0839aaad3.52569917.jpg',
            filename: 'thumbnail_of_.jpg',
            url:
              'https://d3e02gns9oqhhr.cloudfront.net/assets/expose_v2/thumbnail.593aa0839aaad3.52569917.jpg',
            mimeType: 'image/jpg',
            metadata: {
              width: 610,
              height: 300,
              size: 18665,
              thumbnail: 'inventory_m',
              transformation: 'ad_image_thumbails',
              filesystem: 'thumbnails',
            },
          },
          thumb_xs: {
            _id: {
              $id: '593aa084c6269786ff78c440',
            },
            createdAt: {
              sec: 1497014404,
              usec: 0,
            },
            updatedAt: {
              sec: 1511972451,
              usec: 892000,
            },
            fileId: 'thumbnail.593aa084659257.51480456.jpg',
            filename: 'thumbnail_of_.jpg',
            url:
              'https://d3e02gns9oqhhr.cloudfront.net/assets/expose_v2/thumbnail.593aa084659257.51480456.jpg',
            mimeType: 'image/jpg',
            metadata: {
              width: 200,
              height: 150,
              size: 4311,
              thumbnail: 'thumb_xs',
              transformation: 'ad_image_thumbails',
              filesystem: 'thumbnails',
            },
          },
        },
      },
    },
    {
      _id: {
        $id: '593eba58c62697db491324cf',
      },
      hasFurniture: true,
      advertisementPrice: {
        baseRent: 890,
      },
      userWishes: {
        visibleAddress: true,
      },
      purpose: 0,
      title: 'Möbliertes Wohnen in einer Luxus Wohnung',
      realestateSummary: {
        address: {
          street: 'Härtelstraße',
          number: '10',
          postalCode: '04107',
          city: 'Leipzig',
          fullAddress: 'Härtelstraße 10, 04107 Leipzig',
          location: {
            type: 'Point',
            coordinates: [51.332769, 12.3759642],
          },
        },
        numberOfRooms: 2,
        space: 74,
      },
      additionalId: 141334,
      advertisementAssets: {
        advertisementThumbnails: {
          inventory_m: {
            _id: {
              $id: '593ec70cc62697da854b0e25',
            },
            createdAt: {
              sec: 1497286411,
              usec: 0,
            },
            updatedAt: {
              sec: 1507802411,
              usec: 528000,
            },
            fileId: 'thumbnail.593ec70b795933.34393993.jpg',
            filename: 'thumbnail_of_.jpg',
            url:
              'https://d3e02gns9oqhhr.cloudfront.net/assets/expose_v2/thumbnail.593ec70b795933.34393993.jpg',
            mimeType: 'image/jpg',
            metadata: {
              width: 610,
              height: 300,
              size: 23955,
              thumbnail: 'inventory_m',
              transformation: 'ad_image_thumbails',
              filesystem: 'thumbnails',
            },
          },
          thumb_xs: {
            _id: {
              $id: '593ec70cc62697da854b0e29',
            },
            createdAt: {
              sec: 1497286412,
              usec: 0,
            },
            updatedAt: {
              sec: 1507802411,
              usec: 733000,
            },
            fileId: 'thumbnail.593ec70c4799e4.06911668.jpg',
            filename: 'thumbnail_of_.jpg',
            url:
              'https://d3e02gns9oqhhr.cloudfront.net/assets/expose_v2/thumbnail.593ec70c4799e4.06911668.jpg',
            mimeType: 'image/jpg',
            metadata: {
              width: 200,
              height: 113,
              size: 5387,
              thumbnail: 'thumb_xs',
              transformation: 'ad_image_thumbails',
              filesystem: 'thumbnails',
            },
          },
        },
      },
    },
    {
      _id: {
        $id: '5941363ac10d1d63863773d3',
      },
      hasFurniture: false,
      advertisementPrice: {
        sellPrice: 37000,
      },
      userWishes: {
        visibleAddress: false,
      },
      purpose: 1,
      title:
        'Gemütliche Wohnung in denkmalgeschütztem Altbau in Chemnitz-Hilbersdorf!',
      additionalId: 141344,
      realestateSummary: {
        address: {
          street: 'Margaretenstraße',
          number: '36',
          postalCode: '09131',
          city: 'Chemnitz',
          location: {
            type: 'Point',
            coordinates: [50.85195, 12.94393],
          },
        },
        numberOfRooms: 2,
        space: 47.47,
      },
      advertisementAssets: {
        advertisementThumbnails: {
          inventory_m: {
            _id: {
              $id: '5978b09ec10d1dfd6652f4d3',
            },
            createdAt: {
              sec: 1501081757,
              usec: 431000,
            },
            updatedAt: {
              sec: 1501081758,
              usec: 407000,
            },
            fileId: 'thumbnail.5978b09d549d51.43128412.jpg',
            filename: 'thumbnail_of_asset5978b0995d03d.jpg.jpg',
            url:
              'https://d3e02gns9oqhhr.cloudfront.net/assets/expose_v2/thumbnail.5978b09d549d51.43128412.jpg',
            mimeType: 'image/jpg',
            metadata: {
              width: 610,
              height: 300,
              size: 52499,
              thumbnail: 'inventory_m',
              transformation: 'ad_image_thumbails',
              filesystem: 'thumbnails',
            },
          },
          thumb_xs: {
            _id: {
              $id: '5978b09ec10d1dfd6652f4d7',
            },
            createdAt: {
              sec: 1501081758,
              usec: 226000,
            },
            updatedAt: {
              sec: 1501081758,
              usec: 407000,
            },
            fileId: 'thumbnail.5978b09e272126.73662503.jpg',
            filename: 'thumbnail_of_asset5978b0995d03d.jpg.jpg',
            url:
              'https://d3e02gns9oqhhr.cloudfront.net/assets/expose_v2/thumbnail.5978b09e272126.73662503.jpg',
            mimeType: 'image/jpg',
            metadata: {
              width: 200,
              height: 133,
              size: 8007,
              thumbnail: 'thumb_xs',
              transformation: 'ad_image_thumbails',
              filesystem: 'thumbnails',
            },
          },
        },
      },
    },
    {
      _id: {
        $id: '5949345cc6269710a06af34a',
      },
      hasFurniture: false,
      advertisementPrice: {
        baseRent: 518,
      },
      userWishes: {
        visibleAddress: true,
      },
      purpose: 0,
      title:
        '+++ FLATSCREEN ZUM EINZUG! +++ Großzügige Wohnung mit Balkon in ruhiger Lage - Perfekt für Familien!',
      realestateSummary: {
        address: {
          street: 'Im Bonnefeld',
          number: '7',
          postalCode: '47259',
          city: 'Duisburg',
          fullAddress: 'Im Bonnefeld 7, 47259 Duisburg',
          location: {
            type: 'Point',
            coordinates: [51.35949000000001, 6.69369],
          },
        },
        numberOfRooms: 4,
        space: 99.62,
      },
      additionalId: 141372,
      advertisementAssets: {
        advertisementThumbnails: {
          inventory_m: {
            _id: {
              $id: '59493694c62697113b090ea0',
            },
            createdAt: {
              sec: 1497970323,
              usec: 0,
            },
            updatedAt: {
              sec: 1512291595,
              usec: 725000,
            },
            fileId: 'thumbnail.59493693b3c579.88494534.jpg',
            filename: 'thumbnail_of_.jpg',
            url:
              'https://d3e02gns9oqhhr.cloudfront.net/assets/expose_v2/thumbnail.59493693b3c579.88494534.jpg',
            mimeType: 'image/jpg',
            metadata: {
              width: 610,
              height: 300,
              size: 16459,
              thumbnail: 'inventory_m',
              transformation: 'ad_image_thumbails',
              filesystem: 'thumbnails',
            },
          },
          thumb_xs: {
            _id: {
              $id: '59493694c62697113b090ea4',
            },
            createdAt: {
              sec: 1497970324,
              usec: 0,
            },
            updatedAt: {
              sec: 1512291595,
              usec: 800000,
            },
            fileId: 'thumbnail.594936947e06a4.51472303.jpg',
            filename: 'thumbnail_of_.jpg',
            url:
              'https://d3e02gns9oqhhr.cloudfront.net/assets/expose_v2/thumbnail.594936947e06a4.51472303.jpg',
            mimeType: 'image/jpg',
            metadata: {
              width: 200,
              height: 150,
              size: 4485,
              thumbnail: 'thumb_xs',
              transformation: 'ad_image_thumbails',
              filesystem: 'thumbnails',
            },
          },
        },
      },
    },
    {
      _id: {
        $id: '59565ac0c6269741491b617c',
      },
      hasFurniture: false,
      advertisementPrice: {
        baseRent: 9000,
      },
      userWishes: {
        visibleAddress: true,
      },
      purpose: 0,
      title: 'IT Testobjekt für Bewerbungen',
      realestateSummary: {
        address: {
          street: 'Flughafenstraße',
          number: '29',
          postalCode: '12053',
          city: 'Berlin',
          fullAddress: 'Flughafenstraße 29, 12053 Berlin',
          location: {
            type: 'Point',
            coordinates: [52.48124, 13.42968],
          },
        },
        numberOfRooms: 3,
        space: 125,
      },
      additionalId: 141402,
      advertisementAssets: {
        advertisementThumbnails: {
          inventory_m: {
            _id: {
              $id: '59565ad1c62697b67d756f14',
            },
            createdAt: {
              sec: 1498831568,
              usec: 0,
            },
            updatedAt: {
              sec: 1507641818,
              usec: 667000,
            },
            fileId: 'thumbnail.59565ad05d4493.15534632.jpg',
            filename: 'thumbnail_of_1482316736760.jpg.jpg',
            url:
              'https://d3e02gns9oqhhr.cloudfront.net/assets/expose_v2/thumbnail.59565ad05d4493.15534632.jpg',
            mimeType: 'image/jpg',
            metadata: {
              width: 610,
              height: 300,
              size: 30717,
              thumbnail: 'inventory_m',
              transformation: 'ad_image_thumbails',
              filesystem: 'thumbnails',
            },
          },
          thumb_xs: {
            _id: {
              $id: '59565ad1c62697b67d756f18',
            },
            createdAt: {
              sec: 1498831569,
              usec: 0,
            },
            updatedAt: {
              sec: 1507641818,
              usec: 756000,
            },
            fileId: 'thumbnail.59565ad0f1a133.42576050.jpg',
            filename: 'thumbnail_of_1482316736760.jpg.jpg',
            url:
              'https://d3e02gns9oqhhr.cloudfront.net/assets/expose_v2/thumbnail.59565ad0f1a133.42576050.jpg',
            mimeType: 'image/jpg',
            metadata: {
              width: 200,
              height: 139,
              size: 7683,
              thumbnail: 'thumb_xs',
              transformation: 'ad_image_thumbails',
              filesystem: 'thumbnails',
            },
          },
        },
      },
    },
    {
      _id: {
        $id: '5966429ec626976fcd1d6f75',
      },
      hasFurniture: false,
      advertisementPrice: {
        baseRent: 2450,
      },
      userWishes: {
        visibleAddress: true,
      },
      purpose: 0,
      title: 'Luxuriöse Doppelhaushälfte in idyllischer Lage',
      realestateSummary: {
        address: {
          street: 'Hasselwisch',
          number: '13 a',
          postalCode: '22397',
          city: 'Hamburg',
          fullAddress: 'Hasselwisch 13 a, 22397 Hamburg',
          location: {
            type: 'Point',
            coordinates: [53.6974877, 10.1428967],
          },
        },
        numberOfRooms: 6,
        space: 190.01,
      },
      additionalId: 141483,
      advertisementAssets: {
        advertisementThumbnails: {
          inventory_m: {
            _id: {
              $id: '59f1daa2c62697ebe306c9d3',
            },
            createdAt: {
              sec: 1509022369,
              usec: 31000,
            },
            updatedAt: {
              sec: 1511978354,
              usec: 557000,
            },
            fileId: 'thumbnail.59f1daa0e8fe82.38067957.jpg',
            filename: 'thumbnail_of_Bild 2.jpg.jpg',
            url:
              'https://d3e02gns9oqhhr.cloudfront.net/assets/expose_v2/thumbnail.59f1daa0e8fe82.38067957.jpg',
            mimeType: 'image/jpg',
            metadata: {
              width: 610,
              height: 300,
              size: 22521,
              thumbnail: 'inventory_m',
              transformation: 'ad_image_thumbails',
              filesystem: 'thumbnails',
            },
          },
          thumb_xs: {
            _id: {
              $id: '59f1daa2c62697ebe306c9d7',
            },
            createdAt: {
              sec: 1509022369,
              usec: 855000,
            },
            updatedAt: {
              sec: 1511978354,
              usec: 635000,
            },
            fileId: 'thumbnail.59f1daa1c8f352.55483475.jpg',
            filename: 'thumbnail_of_Bild 2.jpg.jpg',
            url:
              'https://d3e02gns9oqhhr.cloudfront.net/assets/expose_v2/thumbnail.59f1daa1c8f352.55483475.jpg',
            mimeType: 'image/jpg',
            metadata: {
              width: 200,
              height: 131,
              size: 4783,
              thumbnail: 'thumb_xs',
              transformation: 'ad_image_thumbails',
              filesystem: 'thumbnails',
            },
          },
        },
      },
    },
    {
      _id: {
        $id: '5967473ac6269768d406c973',
      },
      hasFurniture: false,
      advertisementPrice: {
        baseRent: 752,
      },
      userWishes: {
        visibleAddress: true,
      },
      purpose: 0,
      title: 'Ihre Chance! Großzügige Wohnung selbst gestalten',
      realestateSummary: {
        address: {
          street: 'Kastanienweg',
          number: '3',
          postalCode: '50389',
          city: 'Wesseling',
          fullAddress: 'Kastanienweg 3, 50389 Wesseling',
          location: {
            type: 'Point',
            coordinates: [50.8280009, 6.9676602],
          },
        },
        numberOfRooms: 4,
        space: 100.25,
      },
      additionalId: 141493,
      advertisementAssets: {
        advertisementThumbnails: {
          inventory_m: {
            _id: {
              $id: '596749d2c626978a4e0a7cec',
            },
            createdAt: {
              sec: 1499941329,
              usec: 78000,
            },
            updatedAt: {
              sec: 1512056373,
              usec: 547000,
            },
            fileId: 'thumbnail.596749d0e535a1.35414764.jpg',
            filename: 'thumbnail_of_.jpg',
            url:
              'https://d3e02gns9oqhhr.cloudfront.net/assets/expose_v2/thumbnail.596749d0e535a1.35414764.jpg',
            mimeType: 'image/jpg',
            metadata: {
              width: 610,
              height: 300,
              size: 21898,
              thumbnail: 'inventory_m',
              transformation: 'ad_image_thumbails',
              filesystem: 'thumbnails',
            },
          },
          thumb_xs: {
            _id: {
              $id: '596749d2c626978a4e0a7cf0',
            },
            createdAt: {
              sec: 1499941330,
              usec: 7000,
            },
            updatedAt: {
              sec: 1512056373,
              usec: 627000,
            },
            fileId: 'thumbnail.596749d1eaa216.93498792.jpg',
            filename: 'thumbnail_of_.jpg',
            url:
              'https://d3e02gns9oqhhr.cloudfront.net/assets/expose_v2/thumbnail.596749d1eaa216.93498792.jpg',
            mimeType: 'image/jpg',
            metadata: {
              width: 200,
              height: 113,
              size: 4159,
              thumbnail: 'thumb_xs',
              transformation: 'ad_image_thumbails',
              filesystem: 'thumbnails',
            },
          },
        },
      },
    },
  ];

  public getAdvertisements(): Observable<Array<any>> {
    return Observable.of(AdvertisementServiceMock.ADVERTISEMENTS);
  }
}
