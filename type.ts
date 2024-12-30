export interface BannerData {
    _id: string;
    _type: string;
    _createAt: string;
    _updatedAt: string;
    _rev: string;
    image: {
        _type: string;
        assets: {
            _ref: string;
            _type: string;
        };
    };
    title: string;
    subtitle: string;
    price: number;
    description: string;
}

type ImageAsset = {
    _type: "image";
    asset: {
        _ref: string;
        _type: "reference";
    };
};


type Slug = {
    _id: string;
    name: string;
};


type Category = {
    _id: string;
    name: string;
};

export interface ProductData {
    title: string;
    image: ImageAsset;
    quantity: number;
    price: number;
    category: Category[],
    slug: Slug;
    _createdAt: string;
    description: string;
    updatedAt: string;
    ratings: number;
    brand: string;
    _type: "product";
    _id: string;
    position: string;
    rowprice: number;
};


export interface UserInfo {
    id: string;
    name: string;
    email: string;
};

export interface StoreState {
    mirago: {
        cart: ProductData[];
        wishList: ProductData[];
        userInfo: UserInfo | null;
    }
};