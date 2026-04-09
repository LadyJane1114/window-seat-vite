
export interface Product {
    prodBirthday: string,
    prodCreateDate: string,
    prodHeight: number,
    prodID: number,
    prodImgURL: string,
    prodName:string,
    prodPrice: number,
    prodStockCount: number,
    prodStory: string,
    prodWeight: number,
    category:Category
}

export interface Category {
    CatID: number,
    CatName: string
}