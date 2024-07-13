// import {PrismaClient} from "@prisma/client";

// const prisma = new PrismaClient();

// const cetak = async() => {
//     const data = await prisma.cetak.findMany();

//     return data;
// };

// const result = await cetak().catch(error => console.error(error));

const merchantID = process.env.MERCHANT_ID;
const partnerMerchantID = process.env.PARTNER_MERCHANT_ID;

const response = {
    "merchantID": merchantID,
    "partnerMerchantID": partnerMerchantID,
    "currency": {
      "code": "IDR",
      "symbol": "Rp",
      "exponent": 0
    },
    "categories": [
      {
        "id": "IDITEDP20220629083554015180",
        "name": "Snacks & Ice Cream",
        "availableStatus": "AVAILABLE",
        "sellingTimeID": "SELL01",
        "subCategories": [
          {
            "id": "IDITEDP20220701085346014231",
            "name": "Chips & Crackers.",
            "sellingTimeID": "SELL01",
            "items": [
              {
                "id": "016000287914",
                "name": "BUGLES CARAMEL 6 OZ",
                "sequence": 0,
                "availableStatus": "AVAILABLE",
                "price": 114900,
                "campaignInfo": null,
                "description": "BUGLES CARAMEL 6 OZ",
                "photos": [
                  "https://developer.grab.com/assets/default-menu/vegetable.png"
                ],
                "weight": {
                  "unit": "per pack",
                  "value": 1,
                  "count": 1
                }
              }
            ]
          },
        ]
      },
    ],
    "sellingTimes": [
      {
        "id": "SELL01",
        "name": "All Day Selling Hours",
        "serviceHours": {
          "mon": {
            "openPeriodType": "OpenPeriod",
            "periods": [
              {
                "startTime": "00:00",
                "endTime": "23:59"
              }
            ]
          },
          "tue": {
            "openPeriodType": "OpenPeriod",
            "periods": [
              {
                "startTime": "00:00",
                "endTime": "23:59"
              }
            ]
          },
          "wed": {
            "openPeriodType": "OpenPeriod",
            "periods": [
              {
                "startTime": "00:00",
                "endTime": "23:59"
              }
            ]
          },
          "thu": {
            "openPeriodType": "OpenPeriod",
            "periods": [
              {
                "startTime": "00:00",
                "endTime": "23:59"
              }
            ]
          },
          "fri": {
            "openPeriodType": "OpenPeriod",
            "periods": [
              {
                "startTime": "00:00",
                "endTime": "23:59"
              }
            ]
          },
          "sat": {
            "openPeriodType": "OpenPeriod",
            "periods": [
              {
                "startTime": "00:00",
                "endTime": "23:59"
              }
            ]
          },
          "sun": {
            "openPeriodType": "OpenPeriod",
            "periods": [
              {
                "startTime": "00:00",
                "endTime": "23:59"
              }
            ]
          }
        },
        "startTime": "1000-01-01 00:00:00",
        "endTime": "9999-12-31 23:59:59"
      },
      {
        "id": "SELLING-TIME-02",
        "name": "Alcohol Selling Time",
        "sequence": 1,
        "serviceHours": {
          "mon": {
            "openPeriodType": "OpenPeriod",
            "periods": [
              {
                "startTime": "08:00",
                "endTime": "22:00"
              }
            ]
          },
          "tue": {
            "openPeriodType": "OpenPeriod",
            "periods": [
              {
                "startTime": "08:00",
                "endTime": "22:00"
              }
            ]
          },
          "wed": {
            "openPeriodType": "OpenPeriod",
            "periods": [
              {
                "startTime": "08:00",
                "endTime": "22:00"
              }
            ]
          },
          "thu": {
            "openPeriodType": "OpenPeriod",
            "periods": [
              {
                "startTime": "08:00",
                "endTime": "22:00"
              }
            ]
          },
          "fri": {
            "openPeriodType": "OpenPeriod",
            "periods": [
              {
                "startTime": "08:00",
                "endTime": "22:00"
              }
            ]
          },
          "sat": {
            "openPeriodType": "OpenPeriod",
            "periods": [
              {
                "startTime": "08:00",
                "endTime": "22:00"
              }
            ]
          },
          "sun": {
            "openPeriodType": "OpenPeriod",
            "periods": [
              {
                "startTime": "08:00",
                "endTime": "22:00"
              }
            ]
          }
        },
        "startTime": "1000-01-01 00:00:00",
        "endTime": "9999-12-31 23:59:59"
      }
    ]
  };

const GET = async () => {
    return Response.json(response);
}

export {GET};