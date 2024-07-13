// import {PrismaClient} from "@prisma/client";

// const prisma = new PrismaClient();

// const cetak = async() => {
//     const data = await prisma.cetak.findMany();

//     return data;
// };

// const result = await cetak().catch(error => console.error(error));

const GET = async () => {
  const merchantID = process.env.MERCHANT_ID;
  const partnerMerchantID = process.env.PARTNER_MERCHANT_ID;
  
  const response = {
      "merchantID" : merchantID,
      "partnerMerchantID" : partnerMerchantID,
      "currency" : {
          "code" : "IDR",
          "symbol" : "Rp",
          "exponent" : 0
      },
      "sellingTimes" : [
          {
              "startTime" : "2022-01-09 00:00:00",
              "endTime" : "2025-01-09 00:00:00",
              "id" : "SELL01",
              "name" : "normal",
              "serviceHours": {
                  "mon": {
                      "openPeriodType": "OpenPeriod",
                      "periods": [
                          {
                              "startTime": "08:00",
                              "endTime": "21:00"
                          }
                      ]
                  },
                  "tue": {
                      "openPeriodType": "OpenPeriod",
                      "periods": [
                          {
                              "startTime": "08:00",
                              "endTime": "21:00"
                          }
                      ]
                  },
                  "wed": {
                      "openPeriodType": "OpenPeriod",
                      "periods": [
                          {
                              "startTime": "08:00",
                              "endTime": "21:00"
                          }
                      ]
                  },
                  "thu": {
                      "openPeriodType": "OpenPeriod",
                      "periods": [
                          {
                              "startTime": "08:00",
                              "endTime": "21:00"
                          }
                      ]
                  },
                  "fri": {
                      "openPeriodType": "OpenPeriod",
                      "periods": [
                          {
                              "startTime": "08:00",
                              "endTime": "21:00"
                          }
                      ]
                  },
                  "sat": {
                      "openPeriodType": "OpenPeriod",
                      "periods": [
                          {
                              "startTime": "08:00",
                              "endTime": "21:00"
                          }
                      ]
                  },
                  "sun": {
                      "openPeriodType": "OpenPeriod",
                      "periods": [
                          {
                              "startTime": "08:00",
                              "endTime": "21:00"
                          }
                      ]
                  }
              }
          }
      ],
      categories: [
          {
              "id": "IDITEDP20220629083554015180",
              "name": "Snacks & Ice Cream",
              "availableStatus": "AVAILABLE",
              "sellingTimeID": "SELL01",
              "subCategories": [
                  {
                      "id": "IDITEDP20220701085346014231",
                      "name": "Chips & Crackers.",
                      "availableStatus": "AVAILABLE",
                      "sellingTimeID": "SELL01",
                      "items": [
                          {
                              "id": "016000287914",
                              "name": "BUGLES CARAMEL 6 OZ",
                              "nameTranslation": {},
                              "availableStatus": "AVAILABLE",
                              "description": "BUGLES CARAMEL 6 OZ",
                              "descriptionTranslation": {},
                              "price": 114900,
                              "photos": [
                                  "image_url_1",
                                  "image_url_2"
                              ],
                              "specialType": null,
                              "taxable": false,
                              "barcode": "GTIN",
                              "maxStock": 100,
                              "maxCount": 1,
                              "weight": {
                                  "unit": "per pack",
                                  "value": 1,
                                  "count": 1
                              },
                              "soldByWeight": false,
                              "sellingUom": {},
                              "sellingTimeID": "SELL01",
                              "advancedPricing": {},
                              "purchasability": {},
                              "modifierGroups": []
                          }
                      ]
                  }
              ]
          }
      ]
  };

  return Response.json(response);
}

export {GET};