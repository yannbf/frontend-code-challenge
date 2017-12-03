export interface Advertisement {
  purpose: number;
  title: string;
  advertisementPrice: AdvertisementPrice;
  realestateSummary: RealEstateSummary;
  advertisementAssets: Array<AdvertisementAsset>;
}

export interface AdvertisementPrice {
  baseRent: number;
  sellPrice: number;
}

export interface AdvertisementAsset {
  titlePicture;
  advertisementThumbnails: {
    inventory_m: {
      url: string;
    };
    thumb_xs: {
      url: string;
    };
  };
}

export interface RealEstateSummary {
  address: Address;
  numberOfRooms: number;
  space: number;
}

export interface Address {
  street: string;
  number: string;
  postalCode: string;
  city: string;
  fullAddress: string;
}
