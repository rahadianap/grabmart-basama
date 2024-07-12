'use client';

import {PrismaClient} from "@prisma/client";

const prisma = new PrismaClient();

const cetak = await prisma.cetak.findMany();

const merchantID = process.env.MERCHANT_ID;
const partnerMerchantID = process.env.PARTNER_MERCHANT_ID;

const response = {
    merchantID : merchantID,
    partnerMerchantID : partnerMerchantID,
    currency : {
        code : "IDR",
        symbol : "Rp",
        exponent : 0
    },
    sellingTimes : [
        {
            startTime : "2022-01-09 00:00:00",
            endTime : "2025-01-09 00:00:00",
            id : "SELL01",
            name : "normal",
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
                    "openPeriodType": "OpenPeriod1",
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
            "subcategories": [
                {
                    "id": "IDITEDP20220701085346014231",
                    "name": "Chips & Crackers.",
                    "availableStatus": "AVAILABLE",
                    "sellingTimeID": "SELL01",
                    "items": [
                        {
                            "id": cetak[0]["ITEMCODE"],
                            "name": cetak[0]["NAMAITEM"],
                            "nameTranslation": {},
                            "availableStatus": "AVAILABLE",
                            "description": cetak[0]["NAMAITEM"],
                            "descriptionTranslation": {},
                            "price": cetak[0]["HARGA"],
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

const GET = async () => {
    return Response.json(response);
}

export {GET};